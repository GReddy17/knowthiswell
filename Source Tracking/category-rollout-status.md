# Category Rollout Status (read + update this file every automated run)

_Last updated: 2026-08-30_

Tracks progress through the remaining 30 categories (Phase 3-5 of
`site-rules.md` Section 8, minus categories already built: 01-13). Driven by
a daily automated job writing ~10 posts/day, publishing straight to
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
3. Write the next ~10 posts in that category's plan (continuing from
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
7. If this run's 10 posts complete a category (reaches 50/50): delete that
   category's `coming-soon.tsx`, run the registry script + build once more
   to confirm, mark the category `done` below, and if there are still posts
   left in today's quota of 10, continue into the next `not started`
   category in the same run rather than stopping early.
8. Never work on more than one category's *topic planning* in a single run
   (design one plan, then write posts) — but finishing one category and
   starting the next category's posts in the same run is fine and expected
   when the day's 10-post quota isn't used up by the category that just
   finished.

## Categories (in phase order — do not skip ahead)

| # | Category | Folder | Status |
|---|----------|--------|--------|
| 14 | Career & Study Skills | `14-career-study-skills` | in progress (10/50) |
| 15 | Home & DIY Knowledge | `15-home-diy-knowledge` | not started |
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

30 categories × 50 posts = 1,500 posts remaining. At ~10/day (build-quality
permitting) this is roughly 150 daily runs to cover the full list.

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
