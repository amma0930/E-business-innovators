# E-Business Innovators — website

Static, crawlable multi-page site built with **Eleventy** (11ty) and deployed on **Netlify**.
Eleventy is a build-time static-site generator: it outputs plain HTML/CSS/JS (no framework,
no client runtime). The shared header, footer and `<head>` live in one place and are injected
into every page.

## Build & run

```bash
npm install          # installs @11ty/eleventy (the only dependency)
npx @11ty/eleventy            # build -> _site/
npx @11ty/eleventy --serve    # local dev server with live reload
```

Netlify runs `npx @11ty/eleventy` automatically (see `netlify.toml`) and publishes `_site/`.

## Where things live

```
src/
  _data/site.js         Brand, contact (phone/email), nav, OG defaults
  _data/services.js     Single source of truth for the 6 services
  _includes/base.njk    <head> meta, canonical, OG/Twitter, Org + Breadcrumb JSON-LD, header, footer
  _includes/header.njk  Shared nav (real links, active state)
  _includes/footer.njk  Shared footer (service links point to detail pages)
  _includes/post.njk    Blog post layout (Article JSON-LD)
  _includes/partials/   Service-card grids (home + hub), generated from services.js
  index.njk about.njk services.njk work.njk contact.njk privacy.njk 404.njk
  services/detail.njk   Generates the 6 /services/<slug>/ pages (Service + FAQPage schema)
  blog/index.njk        /blog index
  blog/posts/*.md       Blog posts (Article schema, auto-added to sitemap)
  sitemap.njk           -> /sitemap.xml (generated from all pages)
  robots.txt  _redirects
  assets/css/site.css   The site's styles (unchanged design)
  assets/js/site.js     Menu, FAQ, filter, Netlify form, Cal.com, analytics, legacy-hash catcher
  assets/og/og-default.png  1200x630 share image
```

## Editing content

- **Add/edit a service:** edit `src/_data/services.js`. It updates the home cards, the
  `/services` hub, the footer links, the detail page, and its Service + FAQPage schema.
- **Add a blog post:** drop a new `YYYY-MM-DD-title.md` into `src/blog/posts/` with
  `layout: post.njk`, `title`, `description`, `date`. It's added to `/blog` and the sitemap.
- **Change nav / brand / contact:** edit `src/_data/site.js`.

## Things to set before launch (placeholders)

In `src/assets/js/site.js`:
- `BOOKING_URL` — your real Cal.com event link
- `MEASUREMENT_ID` — your GA4 ID (analytics stay off until this is set)
- `SOCIAL_LINKS` — real profile URLs (blank ones render no icon and populate no `sameAs`)

## SEO guarantees (checked at build)

- Exactly one `<h1>` per page; unique `<title>` ≤ 60 and `<meta description>` ≤ 155.
- Self-referencing `<link rel="canonical">` on every page (apex host, trailing slash).
- Full Open Graph + `twitter:card=summary_large_image`; no legacy `meta keywords`.
- JSON-LD: Organization + ProfessionalService (home), Service + FAQPage (service pages),
  BreadcrumbList (site-wide), Article (blog posts).
- `robots.txt` + generated `sitemap.xml`.

## Redirects / legacy links

`src/_redirects` maps `www -> apex`, `/index.html -> /`, `/privacy.html -> /privacy/`, and
sends unknown paths to the branded 404. Old single-page hash links (`/#about`, `/#services`,
`/#listings`, `/#contact`) can't be redirected server-side (browsers never send the `#` to the
server), so `assets/js/site.js` catches them client-side and forwards to the real path.

---

## v2 upgrade — credibility, compliance, performance, accessibility

**Legal (`src/privacy.njk`, `src/terms.njk`, `src/cookies.njk`)** — placeholder policies, each with a visible "⚠ Placeholder — not legal advice" flag and bracketed `[…]` items for counsel to complete. No jurisdiction/compliance claims are asserted. Footer links to all three. An informational cookie notice (`#cookieNote`) is dismissible (stores one local flag).

**Case studies (`src/_data/caseStudies.js`, `src/work.njk`, `src/work/detail.njk`)** — the work section is now real case studies (index + one detail page each via pagination) covering problem → what we built → stack → timeline → before/after results. Client names, logos, screenshots and the before/after numbers are placeholders (`[…]` / `.ph-box`) for you to supply. No stock photos.

**Pricing (`startingFrom` in `src/_data/services.js`)** — starting-from figure on each service detail page (`.price-band`) and a pricing grid on the services hub. Edit the numbers in `services.js`. Per-service FAQ + `FAQPage` schema was already wired and remains.

**Team/founder (`src/about.njk`)** — founder block (photo/name/bio placeholders) + credentials strip.

**Images (`src/assets/img/`, `src/_includes/macros.njk`)** — all Unsplash hotlinks removed. Local branded tiles generated as AVIF + WebP + PNG at two widths each; the `pic()` macro emits `<picture>` with `srcset`/`sizes`, explicit `width`/`height` (no CLS) and `loading="lazy"` everywhere (hero is inline SVG, no raster). Regenerate/replace tiles in `src/assets/img/`.

**Fonts (`src/assets/fonts/`, `src/assets/css/fonts.css`)** — self-hosted from Fontsource; the Google Fonts request is gone. Display face (Space Grotesk) is subset (~7KB/weight). Primary display weight is preloaded in `base.njk`.

**Accessibility** — skip-to-content link; `aria-live="polite"` on the form success message (`role="alert"` on the error); a build transform (`.eleventy.js` → `decorativeSvg`) adds `aria-hidden="true"`/`focusable="false"` to decorative SVGs; muted body text darkened to `#65736C` (≥4.5:1 on paper).

**Breakpoints** — added `@media (max-width:1024px)` and `@media (max-width:768px)` between the existing 940/600 tiers for proper tablet handling.

## Running Lighthouse yourself

Real Lighthouse needs Chrome + a served URL (not available in the build sandbox). After deploy:

```bash
npx lighthouse https://ebusinessinnovators.com/ --output html --output-path ./lh-home.html --preset=desktop
# or point at a local build:
npx @11ty/eleventy && npx http-server _site -p 8080 &
npx lighthouse http://localhost:8080/ --output html --output-path ./lh-home.html
```
