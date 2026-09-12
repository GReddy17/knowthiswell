# KnowThisWell Roadmap — target: 1,000+ site page views/day by ~2027-03-12

Owned by the `product-lead` skill. Site-page-views-only, per the founder's
locked decision (2026-09-12) — video/social views don't count toward this
number even though they still matter for distribution.

## Honest calibration (2026-09-12 — read this before trusting any number below)

- **Current: ~10-11 pageviews/day** (75 in the last 7 days, Vercel Analytics,
  actually down slightly from the ~110/week logged 10 days earlier on Sep 2).
  Top page is the homepage (24 visitors/7d) — traffic isn't landing deep on
  content yet. Referrers: mostly google.com (8), some facebook/instagram/bing,
  one chatgpt.com hit (AI-answer-engine referral — early signal the
  ClaudeBot/PerplexityBot/OAI-SearchBot-allowed robots.txt strategy can work).
- **1,000/day from ~10/day is ~90-100x growth in 6 months.** That is a real
  stretch, not a default outcome of "just keep publishing." Say this plainly
  every check-in — don't let the milestone ladder below read as a promise.
- Structural reason it's hard: only 344/1,039 known pages are indexed (33%),
  avg. Google position is 64 (page 6-7), and the content engine has published
  nothing since the Sep 5 volume-rollout reversal. Growth is gated by fixing
  that foundation before any content or distribution tactic can compound.
- What would actually make 1,000/day plausible by month 6: indexed ratio
  clears 60-70%+, a handful of posts break into page 1-2 for real
  search terms, and real backlinks (HARO/resource-page outreach, not yet
  started) lift domain authority enough for new posts to index faster than
  they're published. Absent those three, a realistic 6-month outcome is
  more likely in the 100-400/day range — still a real win from ~10/day, just
  not the headline number. Revise this section every check-in against actuals.

## Milestone ladder (revise monthly — do not leave stale)

- **Month 1-2 (Oct-Nov 2026) — Foundation.** Resume the two-stream content
  cadence (1 pillar/day + 2 Technology Basics/week — currently stalled).
  Clear the indexing backlog via the request-indexing queue + internal-linking
  passes (target: indexed ratio 33% → 50%+). Ship Learning Paths Phase 1
  (sequenced tracks from existing content — approved, not yet built). Expect
  traffic to stay low (10-30/day) — this phase is foundation work, not payoff.
- **Month 3-4 (Dec 2026-Jan 2027) — Compounding.** If indexing recovery holds,
  start real backlink outreach (HARO/Qwoted, resource-page asks — not yet
  started, needs founder participation). Expect avg. position to start moving
  off page 6-7 for a few striking-distance terms. Target range: 50-150/day.
- **Month 5-6 (Feb-Mar 2027) — Target check.** Re-forecast against actual
  months 1-4 data, don't just extrapolate optimistically. Realistic range at
  this point: 100-400/day typical case, 1,000+/day only in the case where
  backlinks + indexing + a content cluster all land together.

## Active workstreams

- Indexing-request queue: 2/585 "discovered-not-indexed" URLs requested
  (2026-09-12), 8 more identified, rest of backlog needs paging through.
  Owner: product-lead, runs via GSC URL Inspection.
- Two-stream content engine: designed 2026-09-05, **not yet resumed** —
  0 pillar/workhorse posts published since the pivot. Next action: activate
  `Source Tracking/daily-content-routine.draft.md` (still pending review).
- Learning Paths Phase 1: taxonomy mapping existing posts into sequenced
  tracks — approved by committee 2026-09-12, not yet drafted.
- Persona-archetype consolidation (5-7 archetypes replacing "profession by
  profession") — approved by committee 2026-09-12, not yet drafted.

## Decided (committee verdicts — don't re-litigate without new data)

- Two-stream pillar/workhorse content model; categories 14-43 stay parked
  until indexed ratio moves. (`Source Tracking/content-strategy.md`)
- Learning Paths built free, from existing content only, no new categories,
  no gating/payment until real traffic + an email list exist.
- Profession-based tracks collapsed into 5-7 income/employment archetypes,
  not literal per-job pages — avoids repeating the templated-content /
  scaled-content-abuse risk.
- No paid ads. No monetization that trades away trust (thin affiliate,
  undisclosed sponsorship, ad density hurting Core Web Vitals).

## Standing founder directive — future content scope (2026-09-12, intent recorded, execution pending)

Founder direction for content going forward, given verbatim so it isn't
diluted in future summarizing:
1. New posts should target areas people genuinely search for and that help
   their professional life — grounded in real demand (e.g. the 2026
   course-search landscape: AI/ML, data science, cloud, cybersecurity,
   digital marketing, project management, personal finance, etc. — see the
   2026-09-12 course-demand research), not just more trivia/fact volume in
   already-deep categories.
2. **Category count is not capped at 43.** New categories can be created as
   this professional-topic content needs them (e.g. AI/cloud/cybersecurity/
   dev/marketing/PM have zero coverage today under any existing category,
   including `13-technology-basics`, which is consumer tech literacy, not
   professional/certification-level tech skill content).
3. Courses stay the cross-category, tag/topic-based model already built (the
   Learning Paths mechanism — an ordered `{category, slug}` list, no
   per-post frontmatter tagging needed): selecting a course topic (e.g.
   "Personal Finance") should surface every genuinely relevant post needed
   for a full understanding, from any category, not just posts sitting in
   one folder.

**This directly reverses "categories 14-43 stay parked until indexed ratio
moves" for professional-topic categories specifically** — opening any brand
new category is exactly what `/seo-committee`'s own escalation list requires
("changing which categories get built next"), and indexed ratio is still
flat at 33% as of today. **Recording the founder's intent now; do not open a
new category or start writing into this expanded scope without a fresh
`/seo-committee` check first** — this note is direction, not a standing
override of the indexing-capacity gate.

**Also as of today: the founder is not yet convinced by the course-building
approach used so far** (the Learning Paths / Electrician-style course
pilots) — paused pending founder feedback on what specifically needs to
change before building more courses.

## Log

- 2026-09-12: Roadmap created. Baseline: 10-11 pageviews/day, 33% indexed,
  avg position 64, content engine stalled 7 days. First milestone ladder set.
- 2026-09-12: First live orchestrator run (test, per founder request, before
  scheduling the 7pm daily cadence). Pace: 1 pillar post (Foundation-phase
  target 1-3/day; Saturday, no Tech Basics slot). Shipped: pillar post "Are
  Bats Really Blind?" (general-science-facts/are-bats-really-blind, category's
  51st post — first pillar-format post, added `pillar`/`videoQueue` fields to
  the PostFrontmatter type since content-strategy.md required them but they
  didn't exist in code yet), 4 outbound + 3 reciprocal internal links, 1 new
  EntryCalculator formula (echo round-trip distance). Video: today's Short
  slot (BMI) auto-published via the existing pre-scheduled pipeline (runs
  through Oct 11) — no new production needed; separately confirmed via the
  YouTube API and fixed 8 posts whose videos had gone public but still said
  "scheduled" in frontmatter. Marketing: 1 X post, 1 Quora answer (real
  2yr-old unanswered question), Reddit skipped (no genuine matching live
  thread). SEO: requested indexing on 9 backlog URLs; indexed ratio flat at
  33%, discovered-not-indexed still climbing (529 → 585) despite the content
  freeze — confirms the backlog needs the active push, not just a pause.
  Build/QA clean (eslint, tsc, registry regen, full build — 721 posts, 4421
  pages). Committed to `content-auto`, not `main`, per the production gate.
  Deferred: the skill's "~15 older posts" internal-linking rotation — existing
  posts already have solid seeAlso density, so no arbitrary edits were forced;
  revisit once there's a systematic under-linked-page list.
