# KnowThisWell Roadmap

Single source of truth for product objectives and current direction. Every
skill (`orchestrator`, `product-lead`, `seo-committee`, `daily-marketing`,
`daily-video`, the writing skills) reads this before acting — if a decision
here conflicts with a skill's own defaults, this file wins.

## Product objectives (north star)

1. **Traffic target**: 1,000+ site page views/day, sustained, by ~2027-03-12.
   Site page views only — video/social views don't count toward this number,
   even though they matter for distribution. Owned by `product-lead`.
2. **Content scope directive (2026-09-12, standing)**: new posts should
   target real, high-search-demand professional topics (AI/ML, data science,
   cloud, cybersecurity, digital marketing, project management, personal
   finance, etc.) — not more trivia volume in already-deep fact categories.
   The 43-category count is not a ceiling; new categories get created as
   this content needs them. **Execution gate**: opening any new category is
   a `/seo-committee` escalation item ("changing which categories get built
   next") — this directive records *intent*, it does not itself authorize
   starting a new category. Full detail: see memory
   `project_professional_content_scope`.
3. **Courses**: cross-category, tag/topic-based (the Learning Paths
   mechanism — an ordered `{category, slug}` list per course, no per-post
   frontmatter tagging). Selecting a course topic surfaces every genuinely
   relevant post from any category. **Course-building is on demand**
   (updated 2026-09-12, was "paused") — build a course when there's a real
   reason to (a founder ask, a genuine content cluster ready for it), not
   proactively as a standing daily task. Both pilots (Job Search & Interview
   Readiness, Electrician) are live on `main` now, rebuilt against verified
   real content after the tracking-doc drift below was found.
4. **Daily pace (founder override, 2026-09-12, standing)**: **10 new pages
   every day**, 3 of them get a Short/video published to every automatable
   platform, SEO+marketing runs to completion every day. This overrides the
   Foundation-phase 1-3/day pace below. Flagged twice as a re-run of the
   reversed 20-posts/day mistake given indexed ratio is still flat at 33% —
   founder proceeded anyway both times; not re-litigated on every run. Full
   detail: `.claude/skills/orchestrator/SKILL.md`. If indexed ratio or the
   discovered-not-indexed backlog get worse after this, that's the signal to
   bring pace back to `/seo-committee` — not a silent reversion.

## Current reality (refresh every check-in, don't let this go stale)

- ~10-11 pageviews/day baseline. 1,000/day is a ~90-100x stretch in 6
  months — real but not a default outcome; say so plainly every check-in.
- 344/1,039 pages indexed (33%), avg. Google position 64 (page 6-7),
  "discovered-not-indexed" backlog still climbing even during the content
  freeze. This is the actual growth bottleneck — content/distribution
  tactics can't compound until this moves.
- What would make 1,000/day plausible: indexed ratio to 60-70%+, some posts
  breaking into page 1-2, and real backlinks (HARO/resource-page outreach —
  not started, needs founder participation). Absent those, 100-400/day is
  the realistic 6-month range.

## Milestone ladder

- **Month 1-2 (Foundation, now)**: originally scoped as a 1-3 pages/day
  cadence to clear the indexing backlog before adding volume; **superseded
  2026-09-12 by the founder's standing 10 pages/day override** (see Product
  objectives #4) — clearing the indexing backlog now runs in parallel with
  higher volume instead of before it. Target indexed ratio 33% → 50%+ still
  holds; watch it closely given the pace change. Traffic may stay low
  (10-30/day) regardless of page count — this is foundation work, not
  payoff.
- **Month 3-4 (Compounding)**: if indexing recovery holds, start backlink
  outreach. Target 50-150/day.
- **Month 5-6 (Target check)**: re-forecast against actual months 1-4 data.
  Realistic: 100-400/day typical, 1,000+/day only if backlinks + indexing +
  a content cluster all land together.

## Active workstreams

- Indexing-request queue: paging through the "discovered-not-indexed"
  backlog via GSC URL Inspection. Owner: product-lead.
- Two-stream content engine (1 pillar/day + 2 Technology Basics/week):
  resumed 2026-09-12 after being stalled since the Sep 5 pivot.
- Learning Paths: mechanism + both pilots (Job Search & Interview Readiness,
  Electrician) live on `main`. Further course-building is on-demand, not
  standing — see Product objectives #3.
- Professional-topic category expansion: intent recorded, not yet started —
  needs a `/seo-committee` check before the first new category opens.

## Decided (don't re-litigate without new data)

- **Production gate removed (founder override, 2026-09-12)**: new posts and
  videos push straight to `main`, no `content-auto` staging/review step. The
  build/QA clean-build requirement is unaffected and still absolute.
- **Video scheduling, not immediate publish**: the daily 3 Shorts get
  scheduled into each platform's next available slot (YouTube API schedule,
  Meta Business Suite scheduler for IG/FB), never posted live immediately,
  except a platform with no scheduling mechanism at all.

- Two-stream pillar/workhorse model; categories 15-43 stay parked until
  indexed ratio moves, **except** professional-topic categories under the
  2026-09-12 content-scope directive above, which still need their own
  committee check before opening.
- Learning Paths: free, from existing content, no gating/payment until real
  traffic + an email list exist.
- Profession courses: one course per profession (not the 5-7 archetype
  consolidation originally decided) — founder override, 2026-09-12, with the
  templated/scaled-content risk flagged if this scales to dozens of
  professions without matching real depth behind them.
- No paid ads. No monetization that trades away trust.

## Log (compact — one line per run; full detail lives in git commit messages on `content-auto`)

- 2026-09-12: Roadmap created. Baseline set: 10-11 pageviews/day, 33%
  indexed, avg position 64, content engine stalled 7 days.
- 2026-09-12: First orchestrator run. Shipped 1 pillar post ("Are Bats
  Really Blind?"), fixed 8 posts' stale YouTube status, 1 X post + 1 Quora
  answer, 9 GSC indexing requests. `content-auto@a5cfe62`.
- 2026-09-12: `/seo-committee` capped a 10-posts/day ask down to 3
  (Foundation-phase pace); `product-lead` picked Learning Paths Phase 1.
  Shipped 2 posts (Job Search Strategy) + `/learning-paths` feature + first
  path (Job Search & Interview Readiness, 12 steps). `content-auto@5e3073a`.
- 2026-09-12: Founder overrode the archetype-consolidation decision — one
  course per profession. Piloted Electrician (11 existing posts, 4
  categories, 0 new content). `content-auto@a452702`.
- 2026-09-12: Recorded the standing content-scope directive (professional
  topics, uncapped categories, paused course-building pending founder
  feedback). `content-auto@eab98f2`.
- 2026-09-12: Founder set standing daily policy (10 pages/day, 3 scheduled
  videos/day, mandatory course-mapping, production gate removed) and
  approved courses "on demand." Merging `content-auto`'s clean work (pillar
  post + docs) to `main` surfaced a real branch-divergence bug: `main` had 4
  commits (Sep 2-10) that `growth-overhaul`/`content-auto` never got,
  including Career & Study Skills already complete at 50/50 and Home & DIY
  Knowledge at 30/50 with real trade content — both were tracked as
  "20/50"/"not started" in the stale branch copies. The day's 2 "new" Job
  Search Strategy posts collided with already-existing real posts at the
  same paths; excluded from the `main` merge. `main@762aec9..cc424d4`.
  Follow-up: resynced `category-rollout-status.md` with a pointer to this
  file (career-study-skills-subtopics.md was already accurate on `main`),
  ported the Learning Paths mechanism onto `main` directly, and rebuilt both
  courses against verified real files — Job Search & Interview Readiness
  extended to 15 steps (full 3 real clusters), Electrician now anchored by
  the real Home & DIY electrical-basics-and-safety cluster instead of only
  generic finance/legal content. `main@f916c4f`, `main@8c65669`.
- 2026-09-12: Repo cleanup — recovered 3 real uncommitted planning docs
  (shorts architecture/distribution/daily-plan), dropped a draft superseded
  by the orchestrator skill, deleted ~961MB of dead local experiment files,
  compacted `video-pipeline-queue.md` and `marketing-log.md` to current
  state. `main@ba15788`. Deployed to production manually
  (`vercel --prod`), then connected GitHub auto-deploy properly — root
  cause of the earlier connect failures was that the Vercel GitHub App
  itself was never installed on the account (separate from the login
  connection, which was already correct). Also fixed the local 7pm
  launchd orchestrator job, which was silently failing (`command not
  found`, exit 127) because launchd's minimal PATH doesn't include where
  the `claude` CLI lives — added an explicit PATH export, re-armed for
  tomorrow. This log line is itself the live test of the new auto-deploy
  wiring — no manual `vercel --prod` after this commit.
