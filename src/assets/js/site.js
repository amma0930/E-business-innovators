(function(){
  /* ---- Legacy hash deep-links -> real paths ----
     The old single-page site used /#about, /#services, etc. Browsers never send
     the # fragment to the server, so Netlify's _redirects cannot catch these.
     Anyone landing on "/" with a legacy hash is redirected here, client-side. */
  (function(){
    var map = { '#home':'/', '#about':'/about/', '#services':'/services/', '#listings':'/work/', '#contact':'/contact/' };
    var dest = map[location.hash];
    if(dest && location.pathname === '/' && dest !== '/'){ location.replace(dest); return; }
    if(location.hash === '#home' && location.pathname === '/'){ history.replaceState(null,'',location.pathname); }
  })();

  /* ---- Config: swap these for your real values ---- */
  var BOOKING_URL    = 'https://cal.com/your-team/30min';               // Cal.com event link
  var MEASUREMENT_ID = 'G-XXXXXXXXXX';                                   // GA4 ID — analytics stay off until set
  var SOCIAL_LINKS   = { facebook:'', linkedin:'', instagram:'', x:'' }; // blank = icon is not rendered

  /* ---- Analytics (GA4), guarded so placeholders are no-ops ---- */
  var GA_ON = MEASUREMENT_ID && MEASUREMENT_ID.indexOf('G-')===0 && MEASUREMENT_ID!=='G-XXXXXXXXXX';
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  function track(name, params){ if(GA_ON){ gtag('event', name, params||{}); } }
  if(GA_ON){
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(gaScript);
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);
  }

  /* ---- Header scroll state ---- */
  var header = document.getElementById('header');
  if(header){
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if(burger && navlinks){
    burger.addEventListener('click', function(){
      var open = navlinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.parentElement;
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){
        o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){ item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
    });
  });

  /* ---- Work/listings filter ---- */
  var filterBar = document.getElementById('filterBar');
  if(filterBar){
    filterBar.addEventListener('click', function(e){
      var b = e.target.closest('.filter-btn'); if(!b) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function(x){ x.classList.remove('active'); });
      b.classList.add('active');
      var f = b.getAttribute('data-filter'), shown = 0;
      document.querySelectorAll('#listGrid .list-card').forEach(function(card){
        var match = f === 'all' || card.getAttribute('data-cat').split(' ').indexOf(f) > -1;
        card.style.display = match ? '' : 'none';
        if(match) shown++;
      });
      var nr = document.getElementById('noResults');
      if(nr){ nr.style.display = shown ? 'none' : 'block'; }
    });
  }

  /* ---- Contact form — real Netlify Forms submission (AJAX) ---- */
  var form = document.getElementById('contactForm');
  if(form){
    var formMsg = document.getElementById('formMsg');
    var formErr = document.getElementById('formErr');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var invalid = false;
      [form.name, form.email, form.message].forEach(function(f){
        if(!f.value.trim()){ f.style.borderColor = '#d85a30'; invalid = true; }
        else { f.style.borderColor = ''; }
      });
      if(form.consent && !form.consent.checked){ invalid = true; }
      if(invalid){ return; }
      formErr.classList.remove('show');
      var btn = form.querySelector('button[type=submit]');
      var btnHTML = btn.innerHTML;
      btn.disabled = true; btn.textContent = 'Sending\u2026';
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function(res){
        if(!res.ok){ throw new Error('bad status ' + res.status); }
        formMsg.classList.add('show');
        btn.textContent = 'Message sent \u2713';
        track('form_submit', { form: 'contact' });
        setTimeout(function(){
          form.reset(); btn.disabled = false; btn.innerHTML = btnHTML; formMsg.classList.remove('show');
        }, 4000);
      }).catch(function(){
        formErr.classList.add('show');
        btn.disabled = false; btn.innerHTML = btnHTML;
      });
    });
    form.querySelectorAll('input,textarea').forEach(function(f){
      f.addEventListener('input', function(){ f.style.borderColor = ''; });
    });
  }

  /* ---- Social links — fill real URLs, drop dead ones ---- */
  document.querySelectorAll('[data-social]').forEach(function(a){
    var url = SOCIAL_LINKS[a.getAttribute('data-social')];
    if(url){ a.setAttribute('href', url); a.setAttribute('target','_blank'); a.setAttribute('rel','noopener noreferrer'); }
    else if(a.parentNode){ a.parentNode.removeChild(a); }
  });

  /* ---- Lazy Cal.com scheduler — loads only on first interaction ---- */
  var bookingLoaded = false;
  function loadBooking(){
    if(bookingLoaded){ return; } bookingLoaded = true;
    var host = document.getElementById('bookingEmbed');
    host.innerHTML = '<div class="cal-inline" id="calInline"></div>';
    (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    var calLink = BOOKING_URL.replace(/^https?:\/\/(app\.)?cal\.com\//, '').replace(/\/+$/,'');
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", { elementOrSelector: "#calInline", calLink: calLink });
    Cal("ui", { theme: "light", styles: { branding: { brandColor: "#0F7D5A" } } });
    track('booking_open', { link: calLink });
  }
  var bookingLoad = document.getElementById('bookingLoad');
  if(bookingLoad){ bookingLoad.addEventListener('click', loadBooking); }

  /* ---- Telephone + email click tracking ---- */
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if(!a){ return; }
    track(a.getAttribute('href').indexOf('tel:') === 0 ? 'tel_click' : 'email_click', { href: a.getAttribute('href') });
  });

  /* ---- Footer year ---- */
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  /* ---- Cookie notice (informational) ---- */
  var note = document.getElementById('cookieNote');
  if(note){
    var KEY = 'ebi-cookie-note';
    var seen;
    try { seen = window.localStorage.getItem(KEY); } catch(e) { seen = null; }
    if(!seen){ note.hidden = false; }
    var ok = document.getElementById('cookieOk');
    if(ok){ ok.addEventListener('click', function(){
      note.hidden = true;
      try { window.localStorage.setItem(KEY, '1'); } catch(e) {}
    }); }
  }
})();
