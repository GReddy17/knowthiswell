# Long-Form Quiz Episodes: Strategy Guide

**What:** 6–9 minute "KnowThisWell Quiz" episodes. There are 10 questions on
one topic, played on a single KBC / *Who Wants to Be a Millionaire* stage.
Each question runs: question → 4 options → 3-second timer → reveal → visual
explanation.
**Why:** Shorts reach new people, but they barely build subscribers or watch
time. A quiz episode is interactive: the viewer plays along, keeps score and
comments it. That drives full-watch retention, comments and a reason to come
back ("next quiz"). Every episode is also built from an article that already
exists, so it links straight back to the site.
**Operating procedure:** `.claude/skills/quiz-episode/SKILL.md`.
**Hooks:** `Source Tracking/hook-playbook.md`.

---

## 1. Where it fits in the channel

| Lane | Job | Length | Cadence |
|---|---|---|---|
| Shorts (existing) | Reach: discovery on 3 platforms | ≤35s (45s ceiling) | 1/day |
| Cinematic explainer (existing) | Depth on a proven topic | 4–6 min | Only when a Short crosses 10k views (Monday gate) |
| **Quiz episode (new)** | **Engagement + subscribers + watch time** | **6–9 min** | Independent of the Shorts lane (founder, 2026-09-27). Cadence proposed 1/week |

**Cadence and the one-video-per-day rule:** the founder's HARD RULE is exactly
one video per day per platform, aligned with YouTube. Until the founder
decides otherwise, a quiz episode must not be added on top of that day's
Short without approval. Options for that decision:
- (a) the episode is that day's one video
- (b) long-form on YouTube counts separately from the daily Short
- (c) episodes go out only on days without a Short

Log the decision here once it's made.

## 2. Picking the topic (demand first)

Pick a post that scores on all four checks:
1. **Bank ready:** the post's quiz bank has 9+ questions
   (`src/content/generated/article-quizzes.json`). You need 10 strong ones.
   Write the 10th if needed, from the article only.
2. **Relatable:** the viewer can picture themselves in the questions
   (money, work, health, habits, the brain). Avoid pure trivia with no "you"
   angle.
3. **Demand signal:** at least one of these is true:
   - the topic's Short is in the top third of views in the last 30 days
   - Search Console shows impressions for the post
   - it's a known search term ("[topic] quiz", "[topic] examples")
4. **A twist exists:** there's at least one counterintuitive fact or famous
   study to carry the hook and the hard round.

Rotate categories. No two consecutive episodes from the same category.

## 3. Episode anatomy (timeline at 1.1× playback)

| Segment | Target time | Purpose |
|---|---|---|
| Hook | 0:00–0:30 | 4-beat hook from the playbook, with a new strategy each episode. No blank frame at 0:00 |
| Round 1 · Easy (Q1–3) | ~0:30–2:00 | Quick wins build commitment. The channel name is spoken once here, never in the hook |
| Round 2 · Medium (Q4–8) | ~2:00–5:00 | The core. Contains the open-loop payoff promised in the hook |
| Halfway beat (after Q5) | ~3:30 | "How many so far?" plus one subscribe line and a tease of the next five |
| Round 3 · Hard (Q9–10) | ~5:00–6:30 | The twist or famous study, then the practical "how to beat it" question |
| Score + close | last ~40s | Score tiers → callback line → "comment your score" → article link → subscribe |
| End screen | final 20s | Hold the end card for **≥20s** so YouTube end-screen elements (next episode + subscribe) fit |

**Length:** 6–9 min. Don't pad to reach 8:00. Mid-roll ads only matter once
monetization is on, and monetization is deferred.

## 4. Retention system (what keeps people to the end)

The Shorts rules made hard numbers enforceable: ≤35s, a 3-second hook, a CTA.
The equivalents for long-form are these:

| Lever | Rule | Why |
|---|---|---|
| Fast start | First question by **0:40** at the latest | Most long-form drop-off happens in the first 30s |
| Open loop | The hook names a *specific* later payoff ("by question 9…") and it is paid off | Gives a reason to stay through the middle |
| Participation | Every question has the timer, the tick and "lock it in" | The viewer is playing, not watching |
| Pattern interrupt every 20–30s | Rotate: question card → options → timer → reveal chime → explainer visual → round card | A static screen for more than 15s is a drop-off point |
| Scoreboard | Ladder on the right, completed questions ticked; point callouts ("two to go") | Visible progress; sunk cost keeps people watching |
| Difficulty curve | 3 easy, 5 medium, 2 hard | Early wins, then challenge |
| Callbacks | The close calls back to an early question | Rewards finishers and makes it feel designed |
| Varied patter | No host line repeated across the 10 questions | Templates feel robotic (founder rule) |
| Visual explanations | Every reveal shows a diagram, worked steps or a scenario board, not just text | A text-only explanation is the weakest segment (founder feedback, 2026-09-26) |

## 5. Question design rules

- **Four options** (KBC grid). One right, three plausible wrong ones. No
  joke options: silly choices make the quiz feel cheap.
- The right-answer letter is spread across the 10 questions: no letter more
  than 4 times, and not the same letter 3 in a row.
- On screen: the question fits in 2 lines (≤52 characters per line) and
  each option fits one lozenge (≤36 characters).
- Spoken: each option is 8 words or fewer.
- Each question stands alone. Never "in Example 2…".
- Every answer and explanation traces to the source article or its cited
  sources. **No invented statistics, charts or "most people" claims without
  a study behind them.**
- The explanation is 1–2 spoken sentences plus a one-line on-screen note.

## 6. Voice and sound

- Host persona: warm, playful, a little mischievous. A friend running a pub
  quiz, not a news reader.
- Prosody tags per line (hushed, leaning, excited, slow…). Easy round is
  bright and quick; medium leans in; hard is slower with longer pauses.
- Final playback speed is **1.1×** (founder preference).
- Audio spec: stereo, 48 kHz AAC, **−14 LUFS**, `+faststart`. Mono tracks get
  muted by some phone players.
- All music and sound effects are synthesized by the engine, so we own them.
  **Never use unlicensed tracks** (Content ID claims).
- Voice ceiling: Edge TTS (free) is the current voice. The upgrade path is
  Gemini TTS (free key) or ElevenLabs v3 (about $5/mo) and needs a founder
  key. This is the largest remaining quality gap.

## 7. Packaging (CTR)

- **Title** puts the keyword first plus the challenge, e.g. "[Topic] Quiz:
  Can You [Beat/Pass] …? (10 Questions)". Write 2 titles and A/B them with
  YouTube Test & Compare when available.
- **Thumbnail = the video's first frame** (also the file cover).
  - **Topic name first and biggest**, because the viewer must know what it's
    about at a glance (founder, 2026-09-27).
  - Then a highlighted challenge line.
  - One focal visual from the episode with the mystery element ringed.
  - A "10-QUESTION QUIZ" badge.
  - Navy and gold brand, one logo, no fake stats.
  - The engine generates it from `THUMB` in episode.py.
- **Gate:** run the expert panel on title + thumbnail. Every lens must score
  above 7 before upload.

## 8. SEO and AI-SEO

- **Description, line 1:** a one-sentence, quotable definition of the topic
  (AI answer engines lift this).
- **Line 2:** "Take the 10-question quiz…" plus the article URL.
- **Chapters:** 0:00 Hook, then one chapter per question ("Q4 · The 2-4-6
  puzzle"), then Scores. Chapters become search entry points.
- **Tags and hashtags:** topic, "[topic] quiz", "psychology quiz" or the
  equivalent category, #KnowThisWell. Three hashtags at most.
- **Pinned comment:** "What was your score? Question __ got me."
- **Cards:** link to the source article's topic Short around the related question.
- **Captions:** upload the script as captions (accurate and indexable)
  instead of relying on auto-captions.

## 9. Repurposing (one episode feeds the Shorts lane)

Each episode yields up to 10 ready "Can you answer this?" Shorts: one question,
the timer and the reveal, cut vertical at ≤35s. They follow the daily Short
rules and are only used in that lane (one per day, aligned across platforms),
never extra.

## 10. Measure and iterate

Check every episode at **48 hours** and **7 days** (YouTube Analytics):

| Metric | First-episode target | If below |
|---|---|---|
| CTR (impressions → views) | ≥ 4% | Rework the title/thumbnail with a new panel |
| Viewed at 0:30 | ≥ 65% | Hook failed. Try a different playbook strategy next time |
| Average % viewed | ≥ 40% | Find the retention dips (usually static explanations or a slow round card) |
| Comments with scores | any | Make the score CTA louder and earlier |
| Subs gained per 1k views | trend up | Adjust the halfway CTA and end screen |

Log results in `.claude/private/video-log.md`, and the hook strategy result
in `hook-playbook.md`. After 3 episodes, keep what works and drop what doesn't.

## 11. Decisions log

| Date | Decision |
|---|---|
| 2026-09-26 | Format approved after pilots. NotebookLM Cinematic rejected (ignored the quiz structure, invented charts). MoneyPrinterTurbo stock b-roll rejected ("a quiz should be a single visual like KBC"). KBC stage with our own renderer approved. |
| 2026-09-26 | Playback 1.1×. Hook ≤30s with a rotating strategy. Visual explanations required (to build next). |
| 2026-09-27 | Thumbnail must lead with the topic name. It is also the first frame of the video and the cover art. |
| 2026-09-27 | **Shorts and long-form are independent tracks** (founder). The one-video-per-day rule applies to the Shorts lane only, so quiz episodes don't take a Short's slot. First episode approved and scheduled: `I2uWoXwQvmk`, 2026-09-27 23:00 UTC. |
| pending | Regular episode cadence (proposal: 1/week). |
