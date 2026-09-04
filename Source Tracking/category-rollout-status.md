# Category Rollout Status (read + update this file every automated run)

_Last updated: 2026-09-04 (Home & DIY Knowledge at 30/50)_

Tracks progress through the remaining 30 categories (Phase 3-5 of
`site-rules.md` Section 8, minus categories already built: 01-13). Driven by
a daily automated job writing ~20 posts/day, publishing straight to
production. **This file is the only persistent state across daily runs** —
each run is a fresh, isolated session with no memory of prior days, so it
MUST read this file first to know where to resume, and MUST update it
before finishing.

## How to resume (read this every run)

1. Find the first category below still marked `not started` or
   `in progress`.
2. If `not started`: design its 50-topic plan first (see
   `Source Tracking/technology-basics-subtopics.md` for the reference
   format — subtopic clusters, filenames, titles, continuous `order`
   numbers 1-50, a build-status table). Create
   `Source Tracking/{category-slug}-subtopics.md`. Mark the category
   `in progress (0/50, plan created)` below.
3. Write the next ~20 posts in that category's plan (continuing from
   wherever the category's own build-status table says to resume) —
   follow `Source Tracking/author-voice-guide.md` and `CONTENT_GUIDE.md`
   exactly. Every non-negotiable item in the voice guide applies.
4. Before committing: run `npx eslint <your new files>` and fix every
   `react/no-unescaped-entities` violation (this has hit almost every prior
   batch — don't skip this check). Run `npx tsc --noEmit`. Run
   `node scripts/generate-post-registry.mjs`. Run `npm run build` and
   confirm it succeeds cleanly.
5. **If the build fails and you can't fix it within this run, do NOT
   commit or push anything broken.** Revert your working tree to the last
   good state, leave this file's status unchanged (so tomorrow's run
   retries), and stop — a skipped day is fine, a broken production deploy
   is not.
6. If the build succeeds: update this category's row below with new
   progress (e.g. `in progress (23/50)`), update the category's own
   `Source Tracking/{category-slug}-subtopics.md` build-status table too,
   commit everything (new posts + updated tracking docs + any new
   diagrams/formulas), and push directly to `main`.
7. If this run's 20 posts complete a category (reaches 50/50): delete that
   category's `coming-soon.tsx`, run the registry script + build once more
   to confirm, mark the category `done` below, and if there are still posts
   left in today's quota of 20, continue into the next `not started`
   category in the same run rather than stopping early.
8. Never work on more than one category's *topic planning* in a single run
   (design one plan, then write posts) — but finishing one category and
   starting the next category's posts in the same run is fine and expected
   when the day's 20-post quota isn't used up by the category that just
   finished.
9. 20/day roughly doubles the per-run workload versus the original 10/day
   pace. Watch for session-limit cutoffs mid-run — if the run gets cut off
   partway, the partial posts already written and verified are fine to
   commit; don't discard finished work just because the day's full quota
   wasn't reached. Quality bar (voice guide compliance, real diagrams,
   ESLint, full build) is not negotiable just because volume doubled.

## Categories (in phase order — do not skip ahead)

| # | Category | Folder | Status |
|---|----------|--------|--------|
| 14 | Career & Study Skills | `14-career-study-skills` | done |
| 15 | Home & DIY Knowledge | `15-home-diy-knowledge` | in progress (30/50) |
| 16 | Health & Wellness Deep Dive | `16-health-wellness-deep-dive` | not started |
| 17 | Technology Deep Dives | `17-technology-deep-dives` | not started |
| 18 | Business & Entrepreneurship Basics | `18-business-entrepreneurship-basics` | not started |
| 19 | Travel & Local Guides | `19-travel-local-guides` | not started |
| 20 | Trivia & Fun Facts | `20-trivia-fun-facts` | not started |
| 21 | Investing & Markets Deep Dive | `21-investing-markets-deep-dive` | not started |
| 22 | Government Schemes & Benefits | `22-government-schemes-benefits` | not started |
| 23 | Competitive Exam Prep | `23-competitive-exam-prep` | not started |
| 24 | Professional Skills & Certifications | `24-professional-skills-certifications` | not started |
| 25 | AI & Future Tech Literacy | `25-ai-future-tech-literacy` | not started |
| 26 | Digital Safety & Privacy | `26-digital-safety-privacy` | not started |
| 27 | Life Skills & Etiquette | `27-life-skills-etiquette` | not started |
| 28 | Psychology & Human Behavior | `28-psychology-human-behavior` | not started |
| 29 | Philosophy, Ethics & Wisdom | `29-philosophy-ethics-wisdom` | not started |
| 30 | Food & Cooking | `30-food-cooking` | not started |
| 31 | Agriculture & Farming | `31-agriculture-farming` | not started |
| 32 | Economics | `32-economics` | not started |
| 33 | Religion & Beliefs | `33-religion-beliefs` | not started |
| 34 | Literature & Books | `34-literature-books` | not started |
| 35 | Arts & Design | `35-arts-design` | not started |
| 36 | Music | `36-music` | not started |
| 37 | Movies & Entertainment | `37-movies-entertainment` | not started |
| 38 | Sports | `38-sports` | not started |
| 39 | Gaming & Esports | `39-gaming-esports` | not started |
| 40 | Fashion & Beauty | `40-fashion-beauty` | not started |
| 41 | Photography & Video | `41-photography-video` | not started |
| 42 | Automotive Industry | `42-automotive-industry` | not started |
| 43 | Manufacturing Industry | `43-manufacturing-industry` | not started |

30 categories × 50 posts = 1,500 posts remaining. At ~20/day (build-quality
permitting) this is roughly 75 daily runs to cover the full list.

## Run log (append one line per run, most recent last)

- 2026-08-30: Started Career & Study Skills (14) — designed the 50-topic plan
  (`Source Tracking/career-study-skills-subtopics.md`, 10 clusters of 5) and
  wrote its first 10 posts (clusters 1-2: Study Techniques & Learning Science,
  Time Management & Productivity Systems), each with both ModeToggle variants,
  3 worked examples + QuickChecks, 4+ FAQ, populated KeyTakeaways/MistakeList/
  MisconceptionCallout/ActionChecklist, a hand-authored SVG diagram, and 3
  new EntryCalculator formulas (spaced repetition interval, forgetting-curve
  retention, Pomodoro focused minutes). eslint/tsc/build all clean. Next run
  resumes at cluster 3 (Resume & Application Fundamentals, order 11).
- 2026-09-02: Continued Career & Study Skills (14) — wrote 10 more posts
  (clusters 3-4: Resume & Application Fundamentals — ATS, resume vs. CV,
  quantifying achievements, cover letters, chronological vs. functional
  formats; Interview Skills — the STAR method, why companies ask behavioral
  questions, handling salary questions, panel interviews, why to ask
  questions at the end), each with both ModeToggle variants, 3 worked
  examples + QuickChecks, 4+ FAQ, populated KeyTakeaways/MistakeList/
  MisconceptionCallout/ActionChecklist, a hand-authored SVG diagram, and 3
  new EntryCalculator formulas (resume keyword match %, resume achievement
  % change, salary range midpoint). eslint/tsc/build all clean (npm install
  was needed first — node_modules wasn't present in this fresh session).
  Category now at 20/50. Next run resumes at cluster 5 (Job Search Strategy,
  order 21).
- 2026-09-02: Continued Career & Study Skills (14) — wrote 20 more posts via
  4 parallel writer agents, one per cluster (clusters 5-8: Job Search
  Strategy — job board ranking, the hidden job market, recruiter screening,
  why job descriptions over-list requirements, reference checks; Workplace
  Communication — professional email structure, active listening, feedback
  that lands, effective meetings, disagreeing professionally; Networking &
  Professional Relationships — what networking really means, informational
  interviews, what a mentor does, how networking profiles get discovered,
  why following up matters; Career Growth & Development — performance
  reviews, asking for a raise, lateral move vs. promotion, skills gap
  analysis, knowing when to change jobs). Each post has both ModeToggle
  variants, 3 worked examples + QuickChecks, 4-5 FAQ, populated
  KeyTakeaways/MistakeList/MisconceptionCallout/ActionChecklist, a
  hand-authored SVG diagram, and real institutional sources (SHRM, BLS,
  CareerOneStop, O*NET, EEOC, NCA, APA, Toastmasters, MENTOR as relevant per
  topic). One new EntryCalculator formula added (requested-raise new salary,
  used only in the raise post — the other 19 posts are conceptual with no
  genuine formula, per the voice guide). Centralized verification after all
  4 agents finished: eslint clean across all 20 files + EntryCalculator.tsx,
  `tsc --noEmit` clean, registry regenerated (740 posts), `npm run build`
  succeeded with zero errors. Category now at 40/50. Next run resumes at
  cluster 9 (Exams & Test-Taking Strategy, order 41).
- 2026-09-03: Finished Career & Study Skills (14) via 2 parallel writer
  agents (clusters 9-10: Exams & Test-Taking Strategy — how multiple-choice
  exams are designed, test anxiety and performance, timed-exam budgeting,
  process of elimination, why last-minute cramming backfires; Skill-Building
  & Self-Directed Learning — the 80/20 rule for skills, deliberate practice
  vs. plain practice, what a learning curve actually shows, building a
  personal learning plan, the protégé effect). Category now complete at
  50/50 — `coming-soon.tsx` deleted. Then designed and launched category 15,
  Home & DIY Knowledge (`Source Tracking/home-diy-knowledge-subtopics.md`,
  10 clusters of 5, mechanism-level DIY/home-maintenance scope, YMYL-aware
  for electrical/structural topics), and wrote its first 10 posts via 2 more
  parallel writer agents (cluster 1: Basic Tools & Toolkit Essentials — claw
  hammer leverage, Phillips vs. flathead, stud finders, tape-measure hook
  slop, torque; cluster 2: Electrical Basics & Safety — circuit breakers,
  amps/volts/watts, GFCI outlets, verifying a wire is de-energized (written
  encyclopedically, always pointing to a licensed electrician rather than as
  a DIY tutorial), circuit overload). Each of the 20 posts has both
  ModeToggle variants, 3 worked examples + QuickChecks, 4-5 FAQ, populated
  KeyTakeaways/MistakeList/MisconceptionCallout/ActionChecklist, a
  hand-authored SVG diagram, and real institutional sources (APA, NIMH, CDC,
  ETS Research, AERA, NCME, FairTest for exams/learning; NIST, OSHA, NFPA,
  ESFI, CPSC for tools/electrical). 7 new EntryCalculator formulas added
  (exam time-per-question, elimination guess probability, proficiency-hours
  learning curve x2, wrench torque, watts from volts/amps, max safe
  continuous circuit watts). Centralized verification after all 4 agents
  finished: eslint clean across all 20 files + EntryCalculator.tsx, `tsc
  --noEmit` clean, registry regenerated (760 posts, 43 categories), `npm run
  build` succeeded with zero errors — run twice, once before and once after
  deleting career-study-skills' `coming-soon.tsx`. Career & Study Skills
  (14): done. Home & DIY Knowledge (15): 10/50. Next run resumes Home & DIY
  Knowledge at cluster 3 (Plumbing Basics & Common Fixes, order 11).
- 2026-09-04: Continued Home & DIY Knowledge (15) — wrote 20 more posts via
  4 parallel writer agents, one per cluster (clusters 3-6: Plumbing Basics &
  Common Fixes — toilet flush/refill cycle, why a faucet drips, how a P-trap
  blocks sewer smell, what water pressure measures, how a plunger clears a
  clog via pressure differential; Wall, Paint & Surface Repair — why drywall
  cracks appear, paint drying vs. curing chemistry, what primer does, gloss
  vs. matte finishes, spackle vs. caulk; Fasteners, Adhesives & Mounting — why
  screws out-hold nails, how a wall anchor holds weight in hollow drywall,
  cyanoacrylate (super glue) bonding chemistry, judging a wall's real weight
  capacity, machine vs. wood screws vs. bolts; HVAC & Home Comfort Basics —
  thermostat feedback loops, why air filters need replacing, the central-AC
  refrigeration cycle, what R-value measures, why rooms run hot/cold
  unevenly). Each post has both ModeToggle variants, 3 worked examples +
  QuickChecks, 4-5 FAQ, populated KeyTakeaways/MistakeList/
  MisconceptionCallout/ActionChecklist, a hand-authored SVG diagram, real
  institutional sources (EPA WaterSense, IAPMO, ASPE, AWWA, CDC, CPSC, ASTM
  International, DOE, ASHRAE as relevant per topic), 3-4 seeAlso entries, and
  2+ inline cross-post TermLinks per post. 4 new EntryCalculator formulas
  added (drip-faucet gallons wasted/year, water pressure from elevation head,
  cooling tons to BTU/hr, R-value heat-loss rate) plus 1 existing formula
  reused (screwMechanicalAdvantage). Centralized coordinator pass after all 4
  agents finished: merged formulas into EntryCalculator.tsx, fixed 3 invalid
  DiagramBlock type values agents had used ("diagram" isn't a valid type —
  corrected to "comparison"/"detail"), fixed 1 remaining unescaped-JSX-entity
  violation, confirmed every seeAlso/TermLink target resolves to a real file,
  eslint clean, tsc --noEmit clean, registry regenerated (780 posts, 43
  categories), npm run build succeeded with zero errors. Home & DIY Knowledge
  (15) now at 30/50. Internal-linking pass (Part 2): computed inbound-link
  counts (seeAlso + inline TermLink from 3+ other live posts) for all 20
  posts written today — 6 were under 3, each fixed with 1 genuinely relevant
  added link (seeAlso entry + one contextual inline TermLink) from an
  existing sibling/adjacent post, all 20 now at 3+. Also ran the rotating
  older-post batch on 01-general-science-facts/biology-and-human-body/ (11
  posts, first folder in the rotation — no prior run had started one) —
  found 4 posts under 3 inbound (nutrition-and-how-the-body-uses-food,
  sleep-and-the-brain, the-eye-and-how-vision-works, the-five-senses) and
  added 7 genuinely relevant links total across 6 source posts
  (muscles-bones-and-movement, blood-and-the-circulatory-system-in-depth,
  human-body-systems x2, cells-and-genetics-basics,
  aging-and-the-human-lifespan, hormones-and-the-endocrine-system), each
  with a real seeAlso entry and one natural inline TermLink — all 11 now at
  3+ inbound. Rebuilt after the linking pass (eslint/tsc/build all clean).
  Next rotation folder: 01-general-science-facts/chemistry/. Next run
  resumes Home & DIY Knowledge at cluster 7 (Home Safety & Detection
  Systems, order 31).
