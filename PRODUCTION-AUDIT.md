# KnowThisWell — Production Readiness Audit (v2)

Updated after closing out the 🔴/🟠 items from the first pass. This
version separates **done**, **can't be code** (business/account
decisions), and **content work** (not infra).

---

## ✅ Closed in this pass

- [x] **Pagefind search** — `postbuild` step runs `pagefind --site out`;
      `SearchBox.tsx` mounts the Pagefind UI in a ⌘K-triggered modal.
- [x] **`not-found.tsx`** — real 404 page, static export emits `out/404.html`.
- [x] **`/tags/[tag]`** — tag pages exist, `noindex`'d until tag depth
      justifies indexing (flagged inline in the route's own metadata).
- [x] **`/authors/[slug]`** — author profile pages with `Person` JSON-LD;
      `AuthorCard` now links to a real destination instead of dead text.
- [x] **Image pipeline** — `scripts/process-images.mjs` (sharp) generates
      responsive WebP sets; `ResponsiveImage` component consumes them;
      registered as an MDX component for use in post bodies.
- [x] **Dynamic OG images** — `opengraph-image.tsx` per post via `next/og`,
      styled to match the design system (confirmed compatible with static
      export by removing the edge runtime, which static export can't use).
- [x] **`BreadcrumbList` JSON-LD** — added alongside `Article` schema.
- [x] **Favicon / manifest / logo** — actually generated (`public/*.png`,
      `logo.svg`, `site.webmanifest`), not just referenced — see the
      rendered icon in this conversation to confirm it matches the palette.
- [x] **Mobile nav** — collapses into a `<details>`-based menu below `md`.
- [x] **`/about/method`, `/legal/dmca`, `/legal/privacy`** — real pages
      with real policy text, not stubs (each flags its own remaining gap
      inline — e.g. DMCA page flags the missing contact email).
- [x] **`.env.example`**, **`LICENSE`**, **Dependabot config** added.
- [x] **CI** now fails the build if the Pagefind index is missing from
      output, not just sitemap/robots.

## 🟡 Can't be closed by writing code — genuinely account/business decisions

These aren't oversights; they require a human decision or an external
account, not another file:

- **Real domain name.** Every file still says `knowthiswell.com` as a
  placeholder. Once confirmed, it needs updating in the six files listed
  in the README — I can't guess the real domain.
- **Contact email/address for DMCA notices.** The DMCA page explicitly
  flags this gap — legally, a takedown process needs a real channel.
- **License decision for the code itself** (vs. content, which defaults
  to all-rights-reserved). Flagged in `LICENSE` — this is a preference,
  not something with a technically correct default.
- **Vercel dashboard setup**: connecting the repo, custom domain, and
  bot rate-limiting/firewall rules are all dashboard actions with no
  equivalent config file for static export.
- **Google Search Console** account creation and sitemap submission —
  one-time manual action tied to your Google account.
- **Analytics: yes/no.** Deliberately not added by default, since it
  changes the privacy policy and requires a cookie-consent decision.
  Needs a decision, then code, in that order.
- **Copyscape/plagiarism monitoring** — a paid third-party service
  decision, not something to wire into CI silently.
- **Accessibility audit** — components are built with ARIA/keyboard
  support by hand, but an actual screen-reader pass or automated axe/
  Lighthouse run hasn't happened. I can run Lighthouse against a built
  site if you want that next, but it needs a real deployed build first.

## 🔵 Content work, not infra (tracked separately from this audit)

- Only one real post exists. Section 3.3's "20 posts minimum, 1 per
  category" is writing work.
- `content/terms.json` currently has 4 placeholder terms — grows as
  real posts get written.
- `CATEGORY_DESCRIPTIONS` in `taxonomy.ts` are still placeholder copy.

---

## What I'd genuinely still recommend as next technical work

Not blocking, but worth doing before real traffic:

1. ~~Run an actual `npm install && npm run build`~~ — **done, twice now.**
   See the "Recursive content loading" section below for the second round.
2. **Automated tests** for `lib/content.ts`'s parsing logic — still zero
   test coverage.
3. **Lighthouse/axe pass** once there's a deployed preview URL to point at.

## Recursive content loading, dynamic taxonomy, path-based identity (verified)

Implemented and build-verified: `lib/content.ts` now recursively walks
`content/posts/**`, deriving category/subtopic from folder structure
(folder always wins over frontmatter for non-root files); `getAllCategories()`
replaces the hardcoded list; `content/taxonomy.json` is the external label
registry with automatic fallback to the raw folder name.

Real build proof, not just code review: a genuinely undocumented topic
folder (`test-folder/`, no `taxonomy.json` entry) built correctly
alongside the real category; a post nested three levels deep
(`money-personal-finance/investing-basics/rule-of-72-explained.md`)
correctly resolved to the flat two-segment URL `/money-personal-finance/
rule-of-72-explained`; TOC heading ids (previously broken — MDX's
default `<h2>`/`<h3>` ship with no `id` at all) are now present and
correct in the actual rendered HTML; the duplicate-slug lint check was
tested against a real synthetic collision and correctly failed.

### Bugs this round's real build caught (all fixed)

- `PostMeta.category` inherited an optional `category?` from
  `PostFrontmatter` (made optional to support folder-derived category),
  but by the time a `PostMeta` object exists it's always resolved to a
  concrete string — this caused a real type error in `opengraph-image.tsx`.
  Fixed by having `PostMeta` override `category` as required.
- The glossary auto-linker (`link-terms.ts`) and `MDXRenderer` still
  compared/built links using bare slugs after `seeAlso`/`terms.json`
  moved to `"category/slug"` format — self-link prevention and
  `TermLink` href construction were both silently wrong until fixed.
- `terms.json` had a dangling entry (`credit-card-debt-explained`)
  pointing at a post that was never written — would have produced a
  broken link in production. Caught by extending the lint script to
  validate `terms.json` targets, not just `seeAlso`, and fixed by
  removing the entry rather than stub-writing an unrelated post.
