# Author Voice & Quality Guide (repo-tracked — read this every session)

_Last updated: 2026-08-29_

**Why this file exists**: local Claude skill files under `.claude/skills/` are
gitignored and invisible to any fresh checkout (including cloud-scheduled
agents). This file is the repo-tracked equivalent — the source of truth for
voice, structure, and quality bar for every category built after Technology
Basics (13). Read this alongside `CONTENT_GUIDE.md` and
`Source Tracking/site-rules.md` before writing any post.

## Author

Every post in every category built so far — General Science, Math, Geography
(James's original three), plus Personal Finance, Legal & Documentation, and
Technology Basics — carries the same byline:

```tsx
author: {
  slug: "james-h-rivers",
  name: "James H. Rivers",
  credentialLine: "Founder, KnowThisWell",
},
```

Use this author block for every remaining category unless a category is
obviously History/Language/Festivals-flavored (Sara Reed M J's beat — she
covers History Timeline Facts, Language & Vocabulary, Festivals & Culture
specifically, not general practical-knowledge topics). Default to James.

## Voice

- **Mechanism-first.** Don't just state a fact — explain *why* it's true.
  Show the reasoning, not just the conclusion.
- **Numbers, not vibes.** Wherever a claim can carry a real number (a rate, a
  formula, a measurement, a scale comparison), put the number in.
- **Plain analogy, then precise term**, for anything abstract. Pair a
  concrete real-world comparison with the formal term before leaning on
  jargon.
- **Direct, no throat-clearing.** No "In today's world...". Open on the
  concept itself.
- **Corrects intuition.** Every domain has confident-but-wrong beliefs
  specific to it. Naming and correcting one is core to the voice — it's what
  `MisconceptionCallout` is for. Spend real effort finding the genuine
  misconception for each topic, not a strawman.
- **Practical landing.** Every entry should leave the reader able to explain
  the concept to someone else, or make one concrete decision.
- **Tone (site-rules.md Section 5)**: direct, plain-language, no fear-based
  or clickbait framing. For YMYL-adjacent topics (health, legal, finance,
  government benefits), state facts, cite sources, avoid personal advice —
  point to a licensed professional where relevant.

## Non-negotiable structure (site-rules.md Section 4 — every post, no exceptions)

- Both `ModeToggle` variants (plain + detailed) fully written — detailed adds
  real mechanism, an edge case, and precise terminology (new terms go in
  `glossary[]`).
- Minimum 3 worked examples: baseline case → edge/variation case →
  real-world applied case, each paired with a `QuickCheck`.
- Minimum 4 FAQ questions, phrased as real search queries ("how does X
  work", "why does Y happen", "is X the same as Y").
- `KeyTakeaways` (3 points), `MistakeList`, `MisconceptionCallout`,
  `ActionChecklist` all genuinely populated — never placeholders.
- At least one `DiagramBlock` with a real hand-authored SVG in
  `public/diagrams/` where the topic has a process, structure, or
  comparison that's clearer visually. Skip only for purely definitional
  topics with nothing to diagram.
- `EntryCalculator` only where a real formula/conversion genuinely exists —
  don't force one into a conceptual topic. New formulas go in `FORMULAS` in
  `src/components/EntryCalculator.tsx`, appended, never renaming or removing
  existing entries (multiple categories share this file).
- Real, stable, institutional sources only — government agencies, standards
  bodies, established reference organizations relevant to the category.
  Never invent a URL. If unsure a specific source is real, cite a more
  general real authority instead, or drop the specific claim.
- `seeAlso`: `"category-slug/post-slug"` format, pointing only at posts that
  actually exist (within the same batch, or earlier-completed posts in the
  same category).
- `date`/`updated`/`lastReviewed`: the day the post is written.
  `youtubeStatus: "not-started"`, `youtubeUrl: ""`, `draft: false` only once
  every item above is genuinely true.
- Evergreen discipline: never anchor an explanation to a specific named
  current product, company, or person as the running example unless the
  topic is inherently about a real historical event/entity. Never cite
  current prices, specs, or "state of the art" claims that will date within
  a year. Structural constants and formulas don't decay — market snapshots
  do.

## Known build-breaking pitfall: unescaped JSX entities

`react/no-unescaped-entities` (part of this repo's Next.js ESLint config) is
**build-blocking** — `npm run build` fails on it, not just warns. Every raw
`'` or `"` typed directly as JSX text (inside `<p>`, `<div>`, `<h3>`,
`ModeToggle` `plain`/`detailed` content, `FootnoteAside` children,
`MisconceptionCallout`'s `reality`, etc.) must be `&apos;` / `&quot;`
instead. This does **not** apply to plain JS string literals in props
(`question="..."`, `explanation: "..."`, `mistake: "..."`, `title: "..."` —
normal apostrophes are correct there; escaping them would print the literal
`&apos;` text on the page). This mistake has shipped in nearly every content
batch written so far across multiple categories. **Before finishing, run
`npx eslint <your files>` and fix every violation** — don't rely on a visual
read-through.

## Mechanism mental models (reusable across any category)

Most "how/why does X work" explanations reduce to one of these shapes.
Naming which one a topic fits keeps the "Detailed" `ModeToggle` variant
substantive:

1. **Abstraction layers** — a system hides complexity from the layer above
   it (an engine hides combustion from the driver; a legal process hides
   procedure from the layperson).
2. **Request → response** — one party asks, another answers, sometimes
   through intermediaries.
3. **Encode → transmit/store → decode** — data or value gets transformed
   for one purpose (compact, secure, portable, official) and reversed later.
4. **Lookup via index, not search** — a system resolves a query via a
   pre-built directory rather than scanning everything.
5. **Trust chain / verification** — trust is established through a chain of
   checkable proofs, not blind assumption.
6. **Feedback loop** — sense a signal, compare it to a target, adjust the
   output.
7. **State & synchronization** — multiple copies of the same thing need
   reconciling, and how they reconcile explains observed behavior.

## Category-to-author-domain source conventions

Pick real institutional sources appropriate to each category's actual
subject matter (government agencies for legal/finance/government-benefits
topics, professional/trade associations for career and professional-skills
topics, standards or scientific bodies for wellness/deep-dive science
topics, established reference organizations for culture/arts/history-
adjacent topics). The specific list varies per category — use judgment, but
the bar (real, stable, checkable, never fabricated) is constant.

## Format mechanics

- Follow `CONTENT_GUIDE.md` exactly — `.tsx` file, `export const metadata:
  PostFrontmatter = {...}`, `export default function Post()`.
- New categories have **no pre-seeded placeholder files** (unlike the
  original Phase 1 categories) — you're creating files directly. Each
  category needs its own `Source Tracking/{category-slug}-subtopics.md`
  topic plan (see `Source Tracking/technology-basics-subtopics.md` for the
  reference format: subtopic clusters, filenames, titles, continuous
  `order` numbers, a build-status table) before writing posts for it.
- Run `node scripts/generate-post-registry.mjs` after adding files — never
  hand-edit `src/content/posts/index.ts`. This also auto-syncs
  `content/taxonomy.json`'s `active`/`coming-soon` status per category.
- Delete a category's `coming-soon.tsx` placeholder only once all 50 of its
  posts are written and verified — not partway through.
