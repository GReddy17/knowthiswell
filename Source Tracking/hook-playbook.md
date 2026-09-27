# Hook Playbook: the first 30 seconds

Founder rule (2026-09-26): every long-form and quiz episode opens with a
~30-second hook built from a proven structure. Pick the hook **strategy by the
concept**, and **never reuse the previous episode's strategy**. This file is the
source of truth. `daily-video` and the quiz-episode pipeline both point here.
Shorts keep their own narrative archetypes (`shorts-architecture.md`), but
their first 3 seconds should draw from the same strategies below.

## The 30-second skeleton (every hook, whatever the strategy)

| Beat | Time | Job | Test |
|---|---|---|---|
| 1. Pattern interrupt | 0–3s | One line plus one visual that stops the scroll | Would someone mid-swipe stop? No greeting, no channel name, no "in this video" |
| 2. Stakes | 3–10s | Why this matters to *the viewer*, today | Uses "you". Names a real situation they've been in |
| 3. Open loop | 10–20s | A specific, true promise paid off later ("by question 9…") | Names the payoff moment, doesn't reveal it |
| 4. Contract | 20–30s | The deal: format + challenge in one breath, then go | Rules take ≤1 sentence. Ends on a verb ("Let's play.") |

Hard limits: first question or first real content by **0:30**. Channel name
comes after the hook, never in the first 3s. Every claim in the hook must be
true to the source article (no invented percentages, and "most people" only
when a cited study says so).

## Hook strategies: pick by concept fit

| # | Strategy | Opens with | Best when the concept… | Example shape |
|---|---|---|---|---|
| 1 | **Shocking result** | The twist first, then the context | has a counterintuitive study outcome | "Same evidence. Both sides got MORE sure." |
| 2 | **Live puzzle** | Put the viewer inside a problem in second 1 | has a puzzle, riddle or trick question | "2, 4, 6. What's the rule? Hold your answer." |
| 3 | **You're already doing it** | Catch the viewer in the act | is a habit, bias or everyday mistake | "You did this today. Probably before breakfast." |
| 4 | **Myth flip** | State the belief, then break it | has a popular misconception (MisconceptionCallout) | "Smart people are immune. Wrong. They're worse." |
| 5 | **Cold-open story** | A 2-sentence scene with a person and stakes | has a strong worked example | "Week one. The manager decides the new hire is careless." |
| 6 | **Scale shock** | A huge real number made tangible | has big quantities (money, time, distance) | "A billion seconds is 31 years." |
| 7 | **Challenge / dare** | A direct test of the viewer's skill | is a quiz episode with a hard final round | "Ten questions. The last one fools experts." (only if true) |
| 8 | **Stakes / cost** | What getting it wrong costs, concretely | touches money, health, safety or career | "One signature can put your house on the line." |
| 9 | **Question the viewer can't answer yet** | A "why" they've wondered about | has a satisfying mechanism | "Why do two smart people read the same facts and disagree?" |
| 10 | **Contrast / before–after** | Two states side by side | has a clear before/after or right/wrong pair | "Heart attack vs cardiac arrest: one is plumbing, one is wiring." |

**Combining:** a hook may pair a primary strategy with a secondary one for
beat 3 (e.g. Live puzzle → Shocking-result open loop). The *primary* strategy
is the one that must rotate.

## Rotation rules

1. Never use the same primary strategy as the previous long-form or quiz episode.
2. Across any 5 consecutive episodes, use at least 4 different primary strategies.
3. Log the strategy used in `.claude/private/video-log.md`
   ("Hook: #2 Live puzzle + #1 open loop").
4. Pick for fit first, then rotation: if the best fit is the one just used, take the second-best fit.
5. Run the expert panel on the hook script before rendering. It must clear 7 on the retention lens.

## Log

| Date | Episode | Primary strategy | Secondary |
|---|---|---|---|
| 2026-09-26 | Confirmation bias quiz (pilot v1, rejected) | #1 Shocking result (60s intro, too long) | — |
| 2026-09-26 | Confirmation bias quiz (v2, current cut) | #2 Live puzzle (2 · 4 · 6 on screen from frame 0) | #1 Shocking-result open loop (Q5 Wason, Q9 Stanford) |
| 2026-09-27 | Everyday Physics quiz (ep 2) | #9 Question ("Steel bolt sinks, steel ship floats: why?") | Number open loop (Q10: one heel, ~40× pressure) |
