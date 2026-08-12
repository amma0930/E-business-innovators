/* Single source of truth for the six services.
   Feeds: home preview cards, /services hub cards, footer service links,
   the six /services/<slug>/ detail pages, and their Service + FAQPage schema. */
module.exports = [
  {
    slug: "seo",
    startingFrom: "$300/mo",
    num: "01",
    name: "SEO Services",
    title: "SEO Services for Growing Businesses | E-Business Innovators",
    description: "Local SEO, technical audits, on-page work and content that gets your business found for the searches your customers actually make.",
    icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    imageAlt: "Search engine optimisation analytics and keyword ranking dashboard",
    homeBlurb: "Local SEO, technical fixes and content that earns rankings and steady organic leads.",
    hubBlurb: "Local SEO, technical audits, on-page optimisation and content built around the search terms your customers use. We get you found and keep you climbing.",
    tagline: "Get found first for the searches that bring you customers.",
    intro: [
      "Most of your future customers start with a search. If you're not on the first page for the terms they use, those enquiries quietly go to competitors. We fix that with a connected SEO programme built around real business outcomes, not vanity rankings.",
      "From technical foundations to local visibility and content that answers buyer questions, we get you found and keep you climbing month after month."
    ],
    included: [
      "Technical SEO audit and fixes (speed, crawlability, structure)",
      "Local SEO and Google Business Profile optimisation",
      "Keyword and search-intent research tied to revenue",
      "On-page optimisation and content built to rank and convert",
      "Plain-English monthly reporting on rankings, traffic and leads"
    ],
    faq: [
      { q: "How long until I see SEO results?", a: "SEO is a compounding channel. Technical and local fixes can move things within weeks, while competitive terms typically take a few months to reach meaningful movement — then keep paying off long after." },
      { q: "Do you do local SEO?", a: "Yes. Local SEO and Google Business Profile optimisation are core to what we do, including map-pack visibility, reviews strategy and location-specific pages." },
      { q: "Will I know what's working?", a: "Every month you get a plain-English report tying rankings and traffic to actual leads — no jargon, no vanity metrics." }
    ]
  },
  {
    slug: "web-development",
    startingFrom: "$900 one-off",
    num: "02",
    name: "Website Development & Design",
    title: "Website Development & Design | E-Business Innovators",
    description: "Fast, mobile-first websites engineered to convert. Clean design and solid code that turn visitors into booked enquiries for your business.",
    icon: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M2 8h20M6 21h12"/>',
    imageAlt: "Modern responsive business website design shown on a laptop screen",
    homeBlurb: "Fast, conversion-focused websites that look premium and turn visitors into enquiries.",
    hubBlurb: "Fast, mobile-first, conversion-focused websites. Clean design, solid code and a structure engineered to turn visitors into booked enquiries.",
    tagline: "A website that looks premium and actually books work.",
    intro: [
      "Your website is your hardest-working salesperson. We design and build fast, mobile-first sites with a clear structure and strong calls to action, so visitors become enquiries instead of bouncing.",
      "Clean design, solid code and built-in SEO foundations mean your site looks the part and performs — on every device."
    ],
    included: [
      "Custom, conversion-focused design in your brand",
      "Fast, mobile-first, accessible build",
      "SEO-ready structure, metadata and clean markup",
      "Lead capture, contact forms and booking integration",
      "Analytics setup so you can see what's working"
    ],
    faq: [
      { q: "How long does a website take?", a: "Most projects run a few weeks depending on scope. After the discovery call we give you a clear timeline and fixed pricing before any work starts." },
      { q: "Will my site be fast and mobile-friendly?", a: "Yes. Every build is mobile-first, performance-focused and tested across devices, with clean code that also helps your SEO." },
      { q: "Can you host and maintain it?", a: "We can. We'll recommend simple, reliable hosting and offer ongoing care so your site stays fast, secure and up to date." }
    ]
  },
  {
    slug: "ai-automation",
    startingFrom: "$500 setup",
    num: "03",
    name: "AI Automation",
    title: "AI Automation for Business | E-Business Innovators",
    description: "Automated workflows that connect your CRM, calendar and messaging to qualify leads, follow up and update records without the manual busywork.",
    icon: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/><circle cx="12" cy="12" r="3.5"/>',
    imageAlt: "Automated workflow connecting CRM, calendar and messaging tools",
    homeBlurb: "Workflows that connect your tools and run repetitive work automatically, end to end.",
    hubBlurb: "We connect your CRM, calendar, email and messaging into automated workflows that qualify leads, follow up and update records — without manual work.",
    tagline: "Let software handle the busywork, so your team doesn't.",
    intro: [
      "Every lead that waits, every record typed by hand, every follow-up that slips — that's revenue and time leaking out of your business. We connect your tools into automated workflows that handle it for you.",
      "Leads get qualified and routed, follow-ups send themselves, and your systems stay in sync automatically — so your team focuses on the work that needs a human."
    ],
    included: [
      "Lead capture, qualification and instant routing",
      "Automated follow-up sequences across email and SMS",
      "CRM, calendar and messaging integrations kept in sync",
      "Data entry and handoffs removed from your team's plate",
      "Monitoring so workflows keep running reliably"
    ],
    faq: [
      { q: "Which tools can you connect?", a: "We work with the CRMs, calendars, forms and messaging tools you already use, and connect them into one reliable, automated flow rather than forcing you onto new software." },
      { q: "Is automation hard to maintain?", a: "No. We build, document and monitor everything, so it runs quietly in the background. If something needs adjusting as you grow, we handle it." },
      { q: "How much time can this save?", a: "It depends on your workflows, but clients routinely reclaim hours every week by removing manual follow-ups, data entry and handoffs." }
    ]
  },
  {
    slug: "ai-voice-receptionist",
    startingFrom: "$250/mo",
    num: "04",
    name: "AI Voice Receptionist",
    title: "AI Voice Receptionist | E-Business Innovators",
    description: "A natural-sounding AI receptionist that answers every call, qualifies the caller and books straight into your calendar, 24 hours a day.",
    icon: '<path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M5 10v2a7 7 0 0014 0v-2M12 19v3"/>',
    imageAlt: "AI voice receptionist system handling calls for a service business",
    homeBlurb: "A natural-sounding voice agent that answers calls, books appointments and never sleeps.",
    hubBlurb: "A natural-sounding AI agent answers every call, qualifies the caller, books straight into your calendar and logs the details — 24 hours a day.",
    tagline: "Never lose another lead to a missed call.",
    intro: [
      "A missed call is often a lost customer. Our AI voice receptionist answers every call in a natural voice, handles real conversations, qualifies the caller and books them straight into your calendar — day, night and weekends.",
      "It's tuned to your business's tone and booking rules, and logs every call's details so nothing falls through the cracks."
    ],
    included: [
      "Natural-sounding voice agent, available 24/7",
      "Caller qualification tuned to your business rules",
      "Appointment booking straight into your calendar",
      "Call details and summaries logged automatically",
      "Overflow and after-hours coverage so no call is missed"
    ],
    faq: [
      { q: "Will the AI sound robotic to my callers?", a: "No. It uses natural speech, handles real back-and-forth conversation and is tuned to your tone and booking rules. Most callers simply get answered and booked." },
      { q: "Does it work after hours?", a: "Yes — that's the point. It answers around the clock, including nights and weekends, so you stop losing leads to missed calls." },
      { q: "Can it book into my calendar?", a: "It books qualified callers straight into your calendar following your availability and rules, then logs the details for your team." }
    ]
  },
  {
    slug: "digital-marketing",
    startingFrom: "$400/mo + ad spend",
    num: "05",
    name: "Digital Marketing",
    title: "Digital Marketing Services | E-Business Innovators",
    description: "Paid search, social and email campaigns with sharp targeting and honest reporting, so your ad spend reaches people who actually buy.",
    icon: '<path d="M3 11l18-8-8 18-2-8-8-2z"/>',
    imageAlt: "Digital marketing campaign performance charts on a screen",
    homeBlurb: "Paid, social and email campaigns that fill the top of your funnel with the right people.",
    hubBlurb: "Paid search, social and email campaigns with clear targeting and honest reporting, so your ad spend fills the funnel with people who actually buy.",
    tagline: "Fill your funnel with people who actually buy.",
    intro: [
      "Marketing shouldn't feel like setting money on fire. We build paid search, social and email campaigns with sharp targeting and honest reporting, so every pound of ad spend works toward real enquiries.",
      "You get campaigns that reach the right people, creative that earns attention, and clear numbers tied to leads — not vanity metrics."
    ],
    included: [
      "Paid search and paid social campaign management",
      "Audience targeting and offer strategy",
      "Landing pages and creative built to convert",
      "Email campaigns and nurture sequences",
      "Transparent reporting tied to leads and cost per acquisition"
    ],
    faq: [
      { q: "What's a realistic budget to start?", a: "We'll recommend a starting budget on the discovery call based on your goals and market, and scale it only as the numbers justify it." },
      { q: "How do you report on results?", a: "You get clear reporting tied to leads and cost per acquisition, so you always know what your spend is producing — no vanity metrics." },
      { q: "Which channels do you run?", a: "Primarily paid search, paid social and email, chosen to match where your customers actually are rather than a one-size-fits-all package." }
    ]
  },
  {
    slug: "accounting-finance",
    startingFrom: "$200/mo",
    num: "06",
    name: "Accounting & Finance",
    title: "Accounting & Finance | E-Business Innovators",
    description: "Bookkeeping, monthly reporting and financial consulting that keep your numbers accurate and give you clarity to make confident decisions.",
    icon: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>',
    imageAlt: "Bookkeeping and financial reporting documents with a calculator",
    homeBlurb: "Bookkeeping, reporting and financial consulting that keep you compliant and in control.",
    hubBlurb: "Bookkeeping, monthly reporting and financial consulting that keep your numbers accurate and give you the clarity to make confident decisions.",
    tagline: "Clean books and clear numbers you can decide on.",
    intro: [
      "You can't grow what you can't measure. We keep your bookkeeping accurate and current, deliver monthly reporting you can actually read, and give you the financial clarity to make confident decisions.",
      "No messy spreadsheets, no surprises at year-end — just clean numbers and straight answers when you need them."
    ],
    included: [
      "Ongoing bookkeeping and reconciliations",
      "Monthly management reporting in plain English",
      "Cash-flow visibility and financial consulting",
      "Clean, decision-ready numbers year-round",
      "Support at year-end and for key decisions"
    ],
    faq: [
      { q: "Do you work remotely?", a: "Yes. Everything is delivered securely online, so we support clients across the US and beyond without you needing to be local." },
      { q: "Can you clean up messy books?", a: "We can. We'll get historical records reconciled and organised, then keep them accurate and current going forward." },
      { q: "Will I understand the reports?", a: "That's the goal. Reporting is in plain English and tied to decisions, so you get clarity rather than a pile of numbers." }
    ]
  }
];
