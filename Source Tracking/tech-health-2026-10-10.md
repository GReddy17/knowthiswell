# Technical health audit, 2026-10-10 (read-only, live production)

Site: https://knowthiswell.com. Method: Lighthouse 13.4 (headless Chrome, mobile + desktop) on 4 page types, plus curl checks and a 50-URL random sample from the live sitemap. No site files were changed.

## Scores (Lighthouse)

| Page | Device | Perf | A11y | Best-pr | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| Home `/` | mobile | 87 | 98 | 100 | 100 | 3.5 s | 0 | 20 ms |
| Home | desktop | 99 | 98 | 100 | 100 | 0.7 s | 0.075 | 0 |
| Hub `/personal-finance-basics` | mobile | 86 | 96 | 100 | 100 | 3.7 s | 0 | 0 |
| Hub | desktop | 93 | 94 | 100 | 100 | 0.7 s | **0.167** | 0 |
| Article `/general-science-facts/matter-and-states-of-matter` | mobile | 87 | 100 | 92 | 100 | 3.7 s | 0 | 20 ms |
| Article | desktop | 95 | 92 | 92 | 100 | 0.6 s | **0.131** | 0 |
| Path `/learning-paths/electrician` | mobile | 89 | 97 | 100 | 100 | 3.4 s | 0 | 10 ms |
| Path | desktop | 95 | 91 | 100 | 100 | 0.7 s | **0.131** | 0 |

Targets: LCP <= 2.5 s, CLS <= 0.1. Mobile LCP fails on every page type (lab, simulated slow 4G). Desktop CLS fails on hub, article and path pages. Lighthouse is lab data only; field data (CrUX / Search Console CWV report) was not checked and is the number Google uses.

## What is healthy (verified)

- `http`, `www`, `https` all end on `https://knowthiswell.com/` via a single 308. 404s return a real 404.
- Sitemap: 982 URLs, no duplicates, `robots.txt` references it, Googlebot/Bingbot/OAI-SearchBot/PerplexityBot/ClaudeBot allowed, training scrapers blocked.
- 50-URL sample: 50/50 return 200, no `noindex`, canonical equals the URL, exactly one H1, meta description and OG tags present, no duplicate titles.
- JSON-LD valid on all 50: Organization, Article, BreadcrumbList, FAQPage. OG image route returns 200.
- TTFB 60-100 ms, `x-vercel-cache: HIT`, brotli/gzip on (article HTML 322 KB raw, about 62 KB over the wire). Hashed assets are `immutable` for 1 year. Fonts are preloaded with `display: swap`.
- Images in the sample: 0 missing `alt`.

## Issues, ranked

### 1. HIGH: doubled brand in every title (SEO, affects 100% of pages)
Live: `<title>Punctuation Rules — KnowThisWell — KnowThisWell</title>`. Cause: `src/app/layout.tsx:38` sets `title.template: '%s — KnowThisWell'`, and pages already append the suffix themselves:
- `src/app/[category]/[slug]/page.tsx:38` (all ~930 posts)
- `src/app/[category]/page.tsx:31` (category hubs; also shows the `01.` numeric prefix in the title)
- `src/app/learning-paths/page.tsx:7` and `src/app/learning-paths/[slug]/page.tsx:24`
- `src/app/tags/[tag]/page.tsx:24`, `src/app/authors/[slug]/page.tsx:24`
Fix: drop the suffix from the page-level titles and let the template add it. Strip the `NN. ` prefix in the hub title. 42 of 50 sampled titles exceed 60 chars (median 73), mostly because of this duplication, so Google is likely truncating or rewriting them. Home (`KnowThisWell`) and `/topics` (`KnowThisWell`) have a brand-only title with no keywords.

### 2. HIGH: CSP blocks every YouTube embed (functional bug)
`vercel.json` CSP has no `frame-src`, so it falls back to `default-src 'self'` and the browser blocks `https://www.youtube-nocookie.com` iframes. 2 of the 50 sampled pages render a video iframe (`matter-and-states-of-matter`, `what-a-credit-score-actually-measures`), and Lighthouse logs the CSP error on the first. Visitors see a dead frame. This matters because the video workflow wants to drive site traffic. Fix: add `frame-src https://www.youtube-nocookie.com https://www.youtube.com;` to the CSP in `vercel.json`. Verify on a preview, not production.

### 3. MEDIUM: desktop CLS 0.13-0.17 from the sidebar
`src/components/LibrarySidebar.tsx:44-45` initialises `expandedWidth`/`currentWidth` to 256, then the effect at ~line 99 collapses it to the collapsed width after hydration. `#main-content` jumps by about 190 px (11-15 shifts, biggest on hub/article/path). Fix: initialise `currentWidth` to `COLLAPSED_WIDTH` so server HTML matches the settled state. Also `aside.fixed` is the second shift source.

### 4. MEDIUM: mobile LCP 3.4-3.7 s
LCP element is text (H1 on articles, a paragraph on home/path), not an image. Breakdown: TTFB about 230 ms, **element render delay about 2.3 s**. So the text is painted late, not delivered late. Likely contributors: render-blocking CSS (13 KB, about 150 ms wasted), 3 font families (Fraunces, Newsreader, Public Sans) x 4 preloaded woff2 files, and a 75 KB shared JS chunk that is about 36% unused (27 KB) plus 14 KB of legacy polyfills (`Array.prototype.at`). Worth testing: fewer font weights/families, inline critical CSS, and set `browserslist` so modern output is not polyfilled. Needs a before/after Lighthouse on a preview to confirm which one moves it.

### 5. MEDIUM: 25 thin "coming soon" category pages are indexable and in the sitemap
e.g. `/music` is `index, follow` and in `sitemap.xml`, with only the sidebar list as content (`src/app/[category]/page.tsx:98` branch for `coming-soon`). Counts as low-quality URLs in the pool Google is already declining to index. Suggest `noindex` plus removing them from `src/app/sitemap.xml/route.ts` until they have posts. This overlaps the indexing audit and the committee's thin-page rules, so treat it as a committee item.

### 6. LOW-MEDIUM: sitemap gaps and lastmod
- `/learning-paths`, its 2 path pages and `/topics` are live and linked but **not in the sitemap**. `/glossary/a` is linked from the homepage but not in the sitemap either.
- 51 URLs (home, static pages, category hubs) have no `<lastmod>`. 162 URLs share the same lastmod `2026-09-24` (looks like a bulk touch), which weakens the freshness signal.
- GSC reported 433 indexed + 898 not indexed = 1,331 known URLs, but the sitemap has 982. About 350 URLs are known to Google that are not in the sitemap (old slugs, `/glossary`, `/tags`, query-string URLs or 404s). Not verifiable from here; check the GSC "Why pages aren't indexed" list.
- `/glossary`, `/tags`, `/authors` (no letter/slug) return 404, so any link to the bare path is dead.

### 7. LOW: accessibility
- Sidebar category buttons have no accessible name (`button-name`, `LibrarySidebar.tsx`, the collapsed icon-only buttons); the top-bar button has a visible-label/name mismatch.
- Links inside body text rely on colour only (`link-in-text-block`, article sidebar "a.text-forest").
- Home and path pages: "Document does not have a main landmark" (`landmark-one-main`); path page also has a heading-order skip.

### 8. LOW: cache and image details
- HTML and `/diagrams/*.svg` use `max-age=0, must-revalidate`. Fine for HTML (edge HIT), but SVG diagrams could be long-cached.
- Diagram `<img>` has no width/height (it is lazy and `w-full h-auto`, so low CLS risk today, but reserve an aspect ratio).
- HTML is about 290-320 KB raw because the Next.js RSC payload (about 218 KB) duplicates the article text inline. Compresses well; just note the bytes if pages get longer.

## Not checked
- Real-user Core Web Vitals (CrUX / GSC CWV report).
- Googlebot rendering of a live URL (URL Inspection).
- Full-sitemap crawl (only 50 sampled).
- Vercel firewall/bot rule (explicitly out of scope; denied by the permission classifier).

## Suggested order of fixes
1. Title duplication (small edit, 6 files, biggest SEO effect).
2. CSP `frame-src` (one line in `vercel.json`).
3. Sidebar initial width (one line, fixes desktop CLS).
4. Thin coming-soon hubs: noindex + sitemap removal (committee).
5. Sitemap additions and lastmod accuracy.
6. Mobile LCP experiments on a preview deployment.
