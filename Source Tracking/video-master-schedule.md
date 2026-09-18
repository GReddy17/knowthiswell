# Video master schedule — social

_Created 2026-09-17, effective 2026-09-18. Integrated with
`content-master-schedule.md` — each day's Short is one of that day's 10
posts, picked for visual/hook strength, alternating narrative archetype
(never the same as the previous day). Founder call, same session: cadence
changed from the old "3 of 10 posts get a Short" to **1 Short/day**, and
long-form is no longer automatic — see the weekly escalation rule below._

## Daily cadence: 1 Short/day, all 3 platforms

Every day, produce **one** Short (NotebookLM pipeline, `daily-video` skill
Steps 2-6) from the day's strongest pick in `content-master-schedule.md`,
**scheduled** (not published live) to:
- **YouTube** — Data API, `--publish-at`, unlimited window.
- **TikTok** — Studio scheduler, ~30-day window.
- **Meta (FB+IG)** — Business Suite scheduler, ~29-day window.

**Same date across all 3, always — YouTube is the anchor** (tightened
2026-09-17, founder call: this used to be "where the window allows," which
let TikTok/Meta drift to their own independently-picked dates; not anymore).
TikTok/Meta bookings for dates outside their current window get **held**,
not filled with a different date — make the actual booking once the window
opens far enough to reach the anchor date, and log the hold in
`.claude/private/video-log.md` (`pending — window opens <date>`) so it
doesn't get silently dropped. This schedule states intent; the actual
platform-side booking still happens close to the day, per `daily-video`
Step 6 — but the *date* it eventually books must match YouTube's, not
whatever the platform's scheduler suggests as its own next slot.

## Week 1 — concrete

| Date | Short topic (from content-master-schedule.md) | Archetype | Why this pick |
|------|---|---|---|
| 2026-09-18 | How a sump pump actually prevents flooding | Mechanical Breakdown | Clear multi-step mechanism, disaster-prevention hook, strong visual (water, pump, basement) |
| 2026-09-19 | Heavier objects fall faster (they don't, in a vacuum) | Intuition Trap | The single most universal physics myth — feather & hammer, easy strong visual, huge relatability |
| 2026-09-20 | A falling cat "twists off" something to land on its feet | Direct Challenge | Genuine either/or (does it push off something, yes/no), slow-mo visual potential |
| 2026-09-21 | Goldfish have a 3-second memory | Intuition Trap | Widely-believed, easy to state, strong "wait, really?" hook — not consecutive with Day 3's Direct Challenge |

Archetype specs (DELIVERY + VISUAL-STYLE + NARRATION skeletons):
`Source Tracking/shorts-architecture.md`. Duration/word spec unchanged:
~35s target, 45s hard ceiling, ffprobe-enforced (`project_shorts_duration_retention`
memory).

## 2026-09-22 onward

Same picking rule: whichever of that day's 10 posts (per
`content-master-schedule.md`) is most visual/shareable, rotating archetype.
Log the pick + archetype in `.claude/private/video-log.md` per its existing
format.

## Weekly performance check → cinematic long-form escalation

**Every Monday**, pull the last 7 days' view counts for every Short posted
in that window, per platform:
- YouTube: `videos().list(part='statistics')` on that week's Short IDs.
- TikTok: Studio → Analytics → Content tab.
- Meta: Business Suite → Insights → Content (Reels).

**Trigger: any single Short crosses 10,000 views on any one platform**
(not combined across platforms — one platform alone hitting 10k is enough).
For each Short that crosses it, produce **one long cinematic explainer**
for its underlying post. This is *in addition to* the daily 1-Short
cadence, not a replacement — it's the earned, reactive investment for
proven winners, not a fixed schedule. A week with zero Shorts crossing 10k
produces zero cinematic videos that week; that's expected, not a failure.

### Why gated on real performance, not scheduled automatically

The old model made a Long-form video for every Short the next day,
unconditionally — that's exactly the enforcement gap that let low-retention
content ship at scale (`project_shorts_duration_retention` memory). This
flips it: the Short is the cheap test: 4 platforms, ~35s, low cost per
attempt. The cinematic long-form is the expensive follow-through, reserved
for topics that already proved they hook wide, general viewership before
any real production budget is spent on it.

### The cinematic long-form prompt

Same NotebookLM Video Overview pipeline as the existing Explainer
(`daily-video/SKILL.md` Step 2.5), **Explainer format**, but with this
custom-topic prompt instead of the "High-Stakes Technical Explainer" one —
this is deliberately a different register: documentary tone, one voice,
deeper and slower, for a viewer who already watched the Short and wants the
real version:

```
Documentary-style narration, one measured, authoritative voice — not a
two-host back-and-forth. Pacing is deliberate, not rushed: let a fact land
in silence for a beat before moving on. No podcast filler, no "welcome
back," no "in this video."

Open cold on the scene, not the topic: put the viewer inside a real,
concrete moment where [the misconception from MisconceptionCallout] would
actually mislead someone — a specific place, a specific decision, a
specific stake — then name the wrong belief they'd have walked in with,
and immediately correct it with the real mechanism.

Build the explanation in escalating stages, each one going one layer
deeper than the last: the core mechanism ([the "how it works" explanation
from the post]), then a real worked example with real numbers ([Example 1
from the post]), then a second, harder case that breaks the simple version
of the rule ([Example 2 / the edge case]), then the 2-3 most common
mistakes people make ([from MistakeList]) — treat each mistake as its own
small story (what someone assumed, what actually happened, why it went
that way), not a bullet list read aloud.

Use concrete, sensory, specific language throughout — real numbers, real
named things, real stakes — never vague abstractions ("things," "stuff,"
"a lot"). This is a longer, deeper piece than the Short that earned it —
it should feel like the definitive version: more examples, more nuance, no
hand-waving anywhere the Short had to compress for time.

About 60% of the way through, one direct, unhurried line to the viewer:
mention the channel by name once ("this is KnowThisWell") and invite them
to subscribe for more breakdowns like this — then return immediately to
the explanation. Not at the open, not at the close.

Close the way a documentary closes: one final, quotable truth that
reframes everything just said — not a recap, not "thanks for watching."
End the moment that line lands.
```

**Duration**: no 45s cap — that gate is Shorts-only. Aim 4-6 minutes; let
the depth of the topic decide, don't pad to hit a number.

**Everything else unchanged** from the existing Explainer pipeline: brand
watermark cover (`badge-landscape.png`), branded end card + optional
1.5s logo sting, custom thumbnail (`--question` or `--line1/--line2` mode,
whichever fits), SEO-structured description linking the source post,
schedule to YouTube's next available slot (not "publish now").

**Note on "cinematic"**: this uses the existing NotebookLM Video Overview
pipeline with a documentary-toned prompt — narration register and pacing,
not AI-generated cinematic footage (no such video-generation tool is wired
into this project). If the intent was actual generated B-roll/cinematic
visuals rather than a tonal shift on the existing narrated-slides format,
that's a separate tool-integration decision, flag it and this section gets
revisited.

### Logging

Append to `.claude/private/video-log.md`: which Short crossed 10k, on which
platform, with what count, and the resulting cinematic video's schedule
date. If a week has no qualifying Short, log that too (`no Short crossed
10k this week` — a one-liner, not silence) so the check itself stays
visible as having run.
