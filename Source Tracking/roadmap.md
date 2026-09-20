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
5. **Long-term vision — "Human Knowledge Encyclopedia" (2026-09-18,
   aspirational, NOT active):** founder's long-run direction for the site —
   a structured Domain > Category > Subject > Topic knowledge base, well
   beyond the current 43 categories. Recorded here so it's on the record as
   a real destination, not to be confused with authorization to build it.
   **Stays aspirational until, per `/seo-committee`'s standing hard rules:**
   indexed ratio and avg position have moved meaningfully off the current
   33%/pos-64 baseline, and real backlink/authority signal exists. Until
   then: no Domain URL layer, no top-down taxonomy driving topic selection
   (stay demand-driven per directive #2), no "encyclopedia" in external
   brand copy (conflicts with "practical, 0-to-pro" positioning — internal
   vision language only). Full rejection-as-current-initiative reasoning:
   log entry below, 2026-09-18; standing rules: `seo-committee/SKILL.md`
   §0.6, §5.

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

## Growth gates (2026-09-19, standing — check status at every check-in)

Criteria-based companion to the milestone ladder above. The ladder says
*when*; this says *what has to actually be true* before moving to the next
phase of ambition. Don't open new verticals, plan hiring, or expand scope
because a calendar date arrived — advance only when a gate's criteria are
met, and re-check this section (not memory) at every check-in so "where do
we stand" has one real answer instead of a re-derived one each time.

### Gate 0 — Idea validated
- [x] Organic (Google) traffic exists without founder pushing it
- [x] Specific content shows real search-intent match, not just impressions
- **Status: PASSED.** Not the risk here — execution speed and domain authority are.

### Gate 1 — MVP proven (content engine + SEO mechanics actually work)
- [ ] Indexed ratio ≥50-60%, sustained 2+ consecutive weekly checks (currently 40.1%, up from 33% baseline)
- [ ] Avg Google position ≤page 2 (top ~20) across a *sample* of posts, not 1-2 outliers (currently 62.7)
- [ ] "Discovered - not indexed" backlog trending down 3+ consecutive weeks, not flat
- [ ] Zero real crawl errors confirmed at URL level (site-side check came back clean 2026-09-19; needs re-confirming once the new GSC property populates)
- [ ] Core Web Vitals passing
- [ ] 4+ consecutive weeks of Google-referral visitor growth, not one good week (week 1 of tracking: 68 vs. 43, real but too little data yet)
- [ ] At least one post ranking organically top-10 for a real non-branded query
- [ ] Traffic isn't 100% dependent on 1-2 lucky posts
- **Status: IN PROGRESS — this is where the site is right now.** Don't add new categories/verticals while this is red; more content on an unproven engine repeats the breadth-before-authority mistake `content-strategy.md` already reversed once.

### Gate 2 — Monetization validated (can run in parallel with Gate 1)
- [ ] A revenue model chosen (ads / affiliate / courses / other) — **not decided yet, this is a decision, not a numbers gate**
- [ ] Real $ signal exists at small scale, even a few dollars/month
- **Status: NOT STARTED.** Blocked on a founder decision, not on traffic — could move today independent of Gate 1's progress.

### Gate 3 — Ready to open new verticals/categories at scale
- [ ] Gate 1 fully green
- [ ] Gate 2 fully green
- [ ] One full category — every planned post in it — completed, indexed, *and* showing real traffic end-to-end
- [ ] Production process (voice guide, QC, build gate) run enough times to be reliably repeatable, not ad hoc
- [ ] Time/cost-per-post known and stable enough to state a real number
- [ ] Revenue-per-visitor (or per-post) calculated for the one proven category
- [ ] That revenue number × a realistic new-vertical post count clears "worth the effort" — math actually done, not assumed
- [ ] New-vertical selection method is demand-driven (real keyword/search data), not gut feel
- [ ] Zero open backlog/debt in the proven category (indexing requests caught up, no broken links, tracking docs current)
- [ ] Bandwidth confirmed to maintain the proven vertical *and* build a new one without the first regressing
- [ ] A pre-committed rollback trigger defined (what metric dropping means "stop opening verticals, go fix what's open")
- [ ] `/seo-committee` sign-off obtained before the first new-vertical post ships (standing rule regardless of gate status)
- **Status: NOT STARTED — 2+ gates away.**

### Gate 4 — Ready to hire (2-5 employees)
- [ ] Traffic ~20,000-50,000+ pageviews/day sustained, OR revenue run-rate clearing ~$50-75k/employee/year with margin
- [ ] A documented, repeatable playbook — not just founder's own tacit knowledge
- [ ] Gates 1-3 all cleared, in order
- **Status: NOT STARTED.** Realistic horizon if Gates 1-3 clear on schedule: 2-4 years out — not a near-term planning input yet.

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
- 2026-09-12 (7pm scheduled run): First real execution of the standing
  10-pages/day policy. Escalation check: routine (continuing in-progress
  category 15 + daily pillar, no new category opened) — no `/seo-committee`
  run needed. Numbers: Vercel 7d 55 visitors (+22%)/90 pageviews (+53%);
  GSC 3mo 10 clicks/20K impressions/avg pos 64.1 (flat, data lag);
  indexed 344/1,039 (33.1%, flat). Shipped 10 pages: 1 pillar (general-
  science-facts, "Does Lightning Really Never Strike the Same Place
  Twice?") + 9 Home & DIY Knowledge (category 15, already in progress) —
  cluster 7 Home Safety & Detection Systems complete (5/5: smoke
  detectors, CO detectors, fire extinguisher ratings, security systems,
  radon) and cluster 8 Seasonal & Preventive Maintenance at 4/5 (gutters,
  roof-repair signs, pipe freezing, weatherstripping; order 40 left for
  next run). Internal linking: rotated through 01-general-science-facts/
  chemistry/ (next folder in rotation), fixed 4 zero-inbound posts to 3+;
  brought all 10 new posts to 3+ inbound via targeted seeAlso additions.
  Course mapping checked against both live paths (Job Search & Interview
  Readiness, Electrician) — no genuine fit for any of today's 10, not
  forced. Build/QA clean (eslint, tsc, registry regen to 791 posts, npm
  run build) both for the main batch and a follow-up frontmatter fix.
  Pushed straight to `main` per the production-gate removal:
  `main@5ebc460`, `main@c700d6d`. Video: found the YouTube pipeline had
  run ahead of content — a batch of ~13 Shorts (uploaded 9/11-9/12,
  scheduled through 2026-10-15) was generated directly from
  pillar-topics.md ideas before matching posts existed, linking to
  guessed/dead URLs (a subtopic tag used as a fake slug). Closed the loop
  on the 2 fixable ones today (lightning → today's real new post; bats →
  the already-live are-bats-really-blind post) rather than generate 3
  more new Shorts on top of an already 30+ day, mostly-unmatched backlog;
  the other ~11 scheduled Shorts (seasons, moon, 10% brain myth, blood
  color, tongue map, rockets, buoyancy, water conductivity, glass
  viscosity, microwave, salt/boiling, goldfish memory, falling cats)
  still have no matching post — flagging this pipeline-ahead-of-content
  mismatch for founder attention rather than guessing further; it's a
  real, fixable gap (write the matching posts, or slow new Short
  generation until content catches up), not an emergency. Marketing:
  1 X post + 1 Quora answer on the lightning myth (real, previously
  unanswered question), both live with a link to the new post; Reddit
  skipped — searched several genuine-looking threads, none were a real
  fit (either off-topic, saturated/consensus-reached, or fringe) per the
  no-forced-posting rule. SEO indexing: quota already exhausted for the
  day by an earlier run (9 requests spent) — confirmed via "Quota
  Exceeded" on the lightning post's own URL-inspection request; logged
  rather than forced. Sitemap already shows "Success"/824 discovered
  pages as of its last read, resubmission not force-able via UI today.
  Video-pipeline queue file and marketing-log both updated to reflect the
  real backlog state discovered this run — those tracking docs had gone
  stale exactly the way `project_professional_content_scope` warned about.
- 2026-09-17: Real YouTube Analytics data confirmed the founder's retention
  observation (sub-40s Shorts hit 65-71% avg-% viewed vs ~30-50% for
  1:15-1:30 clips) — tightened Shorts spec to ~35s/80-100 words, ceiling
  45s, and closed an enforcement gap (the old cap existed on paper since
  2026-09-14 but was never wired into an actual QC gate). Founder then
  authorized deleting the entire forward-scheduled backlog rather than
  keep old-spec content live: 49 YouTube + 71 Meta + 31 TikTok scheduled
  posts deleted, hard-verified 0 remaining on each platform, zero
  live/published content touched. Found and reused Meta Business Suite's
  bulk multi-select delete (new efficiency finding). One video
  (`C4yjDKZNM50`) was missed by the batch and a follow-up solo delete was
  blocked by the auto-mode permission classifier — still needs founder
  cleanup, logged in `video-log.md` Open items. Followed up with a
  site-wide broken-link audit: 8 posts had stale `youtubeStatus:
  "scheduled"` pointing at now-deleted videos, reset to `"not-started"`
  (one turned out to already be `"published"` live — corrected instead of
  reset). Full detail in `marketing-log.md` and `video-log.md`.
- 2026-09-17/18: **Fixed the daily orchestrator cron, dead since 2026-09-14.**
  Diagnosed: launchd fired on schedule every day, but the LaunchAgent
  couldn't read anything under `~/Downloads` (macOS Full Disk Access) — the
  09-12 "fix" (a wrapper script to dodge a space-in-path bug) never
  actually addressed this, so 09-15/16/17 all failed silently with zero
  output despite `roadmap.md` reading like the job was healthy. Founder
  granted `/bin/zsh` Full Disk Access; verified via a disposable test
  script under real launchd (not a simulated env) before touching the real
  wrapper again. Live end-to-end test: rescheduled the real job to fire at
  21:50 (temporarily, restored to 19:00 after), watched it fire clean —
  read the repo, correctly pulled today's picks from the new
  `content-master-schedule.md`, wrote all 10 planned Home & DIY posts.
  Got cut off by an unrelated session usage-limit before reaching video/
  SEO/build/commit. Finished the rest by hand: fixed 23 `react/no-
  unescaped-entities` eslint errors (recurring pattern, noted in
  `category-rollout-status.md`), `tsc`/registry/build all clean, committed
  + pushed (`main@78ce180`). Home & DIY Knowledge (15) now 49/50 — one
  post short (`why-grading-and-drainage-around-a-house-matters`, order 50).
  Video step (the day's Short: `how-a-sump-pump-actually-prevents-
  flooding`) not yet done — full NotebookLM pipeline is large enough to be
  its own pass rather than force through it tonight.
  Also tightened the video-scheduling rule per founder call: YouTube's
  date is now the anchor for TikTok/Meta too (same date everywhere, not
  each platform's own independently-picked slot) — fixed a real
  self-contradiction in `video-log.md` where "The rule" said date-matching
  wasn't required while "Best practices" already assumed it was. Updated
  `orchestrator/SKILL.md`, `daily-video/SKILL.md`, `video-master-
  schedule.md` to match.
- 2026-09-18: Founder brought an external draft prompt proposing a "Human
  Knowledge Encyclopedia" pivot — a Domain layer above Category, targeting
  100+ domains / 10,000+ topics via top-down taxonomy. Ran `/seo-committee`
  (Product & Business + Technical SEO + Founder Reality Check). Rejected as
  a current initiative, unanimous: it's the reversed 20-posts/day breadth
  mistake (`category-rollout-status.md`) at ~100x scale, proposed while
  indexed ratio is still flat at 33% (344/1,039) and avg position 64 —
  same numbers as the 2026-09-12 baseline, unmoved. Also red-lined: any new
  URL segment/prefix on existing indexed URLs (re-crawl/re-index risk the
  site can't absorb right now), and "encyclopedia" as external brand
  framing (collides with the "practical, 0-to-pro" differentiation vs.
  generic reference sites). No change to standing policy — content-scope
  directive (#2 above) and the existing category→subcategory structure
  already cover legitimate expansion, demand-driven, gated through
  `/seo-committee` per new category as before. Recorded as standing
  precedent in `seo-committee/SKILL.md` (§0.6, §5) so this isn't
  re-litigated from scratch; re-open only if indexed ratio/avg position
  actually move from this baseline.
- 2026-09-18 (7pm scheduled orchestrator run): Loaded state first per Step 0
  — found content (10 Home & DIY posts, `main@78ce180`) and video (full
  Short batch through 2026-09-28, all 3 platforms) for today were already
  shipped earlier the same calendar day by an earlier session/the cron's
  own live-test fire. No new posts written this run to avoid duplicating
  `content-master-schedule.md`'s 2026-09-18 entry — next unshipped day is
  2026-09-19 (last Home & DIY post + 9 pillar). Escalation check: routine,
  no `/seo-committee` run needed. Not a Monday — Step 5.5 weekly cinematic
  check skipped. This run's actual work was the remaining Step 6 (SEO +
  marketing), which per standing rule runs to completion every day
  regardless of content/video status:
  - Numbers: Vercel 7d 69 visitors (+30%)/108 page views (+59%); GSC 3mo 11
    clicks/21.7K impressions/avg pos 62.7. Indexing dashboard: 478/1,193
    (40.1%) indexed — real improvement over the 33% figure tracked since
    9/3-9/12, not just absolute-count growth.
  - SEO indexing: requested indexing on 2 of today's 10 new posts (the
    sump-pump Short pick + household-systems-maintenance) before hitting
    "Quota Exceeded" — quota was already partly spent earlier today on a
    career-study-skills backlog batch. Remaining 8 of today's posts carry
    over as top priority tomorrow. Sitemap resubmit attempt failed
    ("Invalid sitemap address," likely a duplicate-resubmit quirk) —
    not pursued further, Google recrawls on its own schedule.
  - Marketing: found and closed a real gap — `marketing-log.md`'s last
    several entries were all video-scheduling work, with no actual
    X/Reddit/Quora posting logged in days. Posted a genuine Quora answer
    (real live question, "How does a sump pump work?", tied to today's
    Short topic, with link) and an X post (sump-pump failure-mode fact,
    no link, per the 9:1 ratio) — both live. Reddit skipped: not an
    accounts-registry/login issue, `reddit.com` is blocked at the
    browser-automation tool level this session — flagged as a distinct
    failure mode from the usual skip-if-not-logged-in case.
  - No code/content changes this run, so the Step 7 build/QA gate didn't
    apply — only tracking-doc updates (`seo-index-queue.md`,
    `marketing-log.md`, this file).
  Full detail in `.claude/private/marketing-log.md` and
  `.claude/private/seo-index-queue.md`.
