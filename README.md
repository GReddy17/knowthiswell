# KnowThisWell

Full site scaffold: root → routing → content → SEO → security → CI/CD.
Built against the requirements doc's stack decision (Next.js App Router,
static export, markdown-in-git, Vercel).

## How it's wired, end to end

```
content/posts/*.md  (frontmatter + MDX body)
        ↓
src/lib/content.ts        — reads, parses, computes reading time + headings
        ↓
scripts/link-terms.ts     — auto-links first mention of known glossary terms
        ↓
src/components/MDXRenderer.tsx — resolves links, renders interactive components
        ↓
src/app/[category]/[slug]/page.tsx — post page (+ ArticleSchema JSON-LD)
src/app/[category]/page.tsx        — category hub
src/app/glossary/[letter]/page.tsx — A–Z index
src/app/page.tsx                   — homepage / topic grid
        ↓
src/app/layout.tsx  — fonts, nav, footer, Organization JSON-LD (wraps everything)
        ↓
src/app/sitemap.ts, robots.ts, llms.txt/route.ts, rss.xml/route.ts
        ↓
next.config.js (static export) → `next build` → /out
        ↓
vercel.json (security headers) → Vercel CDN
        ↓
.github/workflows/ci.yml — lints content, type-checks, builds, verifies
                            sitemap/robots exist in output, on every PR
.github/workflows/weekly-health-check.yml — sitemap diff, orphan pages,
                            broken see-also links, opens a GitHub issue
                            if something's wrong
```

Run locally: `npm install && npm run dev`. The one sample post
(`content/posts/compound-interest-explained.md`) exercises every
interactive component, so `npm run dev` gives you a working page to look
at with zero further setup.

## What each infra requirement maps to

| Requirement doc item | Implementation |
|---|---|
| Sitemap with real `lastmod`, not build time | `src/app/sitemap.ts` — reads `post.updated` per URL |
| robots.txt: block AI scrapers, allow search engines | `src/app/robots.ts` — see note below on AI SEO tension |
| RSS feed | `src/app/rss.xml/route.ts` |
| JSON-LD Article schema per post | `src/components/ArticleSchema.tsx` |
| Security headers (CSP, X-Frame-Options, Referrer-Policy) | `vercel.json` (required — static export can't set headers via Next itself) |
| CI: fail build + alert on error | `.github/workflows/ci.yml` |
| Weekly sitemap/orphan/broken-link check | `scripts/health-check.mjs` + scheduled workflow |
| YMYL sourcing requirement | `scripts/lint-content.mjs`, run in CI, **fails the build** if a money/health/legal/government/real-estate post has no `sources` |
| Cross-linking / glossary | `scripts/link-terms.ts` + `content/terms.json` + `TermLink` |

## A real tension I resolved, flagging it explicitly

The requirements doc says "block AI/scraper crawlers." You separately
asked for AI SEO. Blindly blocking all bots with "AI" in the name would
defeat AI SEO entirely — most AI answer engines (ChatGPT search,
Perplexity) crawl specifically to cite and link back to a source, which
is the traffic you want. `robots.ts` splits this: blocks bots that scrape
for model *training* (GPTBot, CCBot, Google-Extended), allows bots that
crawl for live *citation* (OAI-SearchBot, PerplexityBot, ClaudeBot,
Googlebot, Bingbot). `llms.txt` is the actual AI-SEO lever — a clean,
pre-structured index for answer engines to parse instead of inferring
structure from HTML. This split reflects bot behavior as of today and
should be revisited periodically, same as the sitemap health check.

## What's still genuinely missing (not silently faked)

- **DNS/domain**: every file uses `https://knowthiswell.com` as a
  placeholder — replace in `layout.tsx`, `sitemap.ts`, `robots.ts`,
  `rss.xml/route.ts`, `llms.txt/route.ts` once the real domain is set.
- **`/logo.png`**: referenced in JSON-LD, not created — needs an actual asset.
- **`/about/method`, `/legal/dmca`, `/legal/privacy`**: linked from the
  footer and nav, not built as pages yet. The DMCA process itself
  (Section 4.5) still needs to be written as actual policy text, not
  just a route.
- **CSP `script-src 'unsafe-inline'`**: required because the JSON-LD
  blocks use inline `<script>` tags. Tightening this to a nonce-based
  CSP is possible but adds real complexity in a static-export context
  (no per-request middleware) — flagging as a deliberate tradeoff, not
  an oversight.
- **Copyscape/plagiarism monitoring** (Section 4.5): no automated tooling
  wired up — this is a manual/periodic process, not something CI can do.
- **Bot rate-limiting** at the Vercel/CDN layer (Section 4.5): configured
  in the Vercel dashboard, not expressible in `vercel.json` — needs to be
  set up directly once the project is connected.
- Only one real post exists. Section 3.3's "at least 1 real post per
  category" (20 minimum) is still content work, not infra work.
