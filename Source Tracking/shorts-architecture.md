# KnowThisWell — Short architecture (the standard)

_Set 2026-09-10. Synthesised from the two frameworks the user supplied + what our own
data shows. This is the spec every daily Short is built and QA'd against._

## What we're actually optimising

Not raw watch time. The distribution signals, in rough order **for a new channel**:

1. **Scroll-stop rate** — do they stay past ~1.5s
2. **Completion rate** — did they watch to the end. For a new, trust-building channel
   this is the cleanest signal; a satisfying ending beats a forced-loop hack.
3. **% viewed** (rewatch helps, but don't engineer a cheap loop to get it)
4. **Shares** and **Saves**
5. **Comments** (thoughtful, not one-word)

Treat every published number below as a **heuristic**, not an algorithm rule — the
platforms don't disclose cutoffs. What's real: sub-70% viewed gets suppressed after the
first test cohort; a loop that triggers a second play pushes % viewed into promotion range.

## Length

**Aim ~40 seconds. Not a hard cap** — 35–50s is fine when the content earns it; a clip
that needs a bit more room to land the payoff is better than one rushed to hit a number.
~90–110 spoken words. What's non-negotiable: no padding, a reward every 3–5s, and a
payoff that lands. Our first 26 clips ran 60–84s — *that* was too long (front half was
setup); 40-ish keeps the whole thing dense.

## Voice: single narrator (default)

**~85% of clips: one narrator.** For an educational reference brand, one voice = better
clarity, comprehension, and brand consistency, and far simpler production. Replace the
"voice-timbre reset" a second host gives you with **syntactic punch, deliberate
micro-pauses, cadence shifts, and a visual cut on every beat**.

**Two hosts only** when the topic is genuine disagreement (A argues the wrong intuition
with conviction, B corrects, A pushes back). ~15% of clips at most. A second voice that
just reads the next sentence reads as fake.

## The 4 triggers — hit at least 3 every clip

| Trigger | Feeling | Job |
|---|---|---|
| Curiosity | "I didn't know that" | opens the gap |
| Surprise | "wait — that's not right" | breaks the expectation |
| Progress | "another thing every few seconds" | stops the retention slide |
| Reward | "oh — now it makes sense" | closes the loop, earns trust |

## The beat sheet

| Time | Beat | Does | Rule |
|---|---|---|---|
| 0:00–0:02 | **Pattern break** | open a mystery, don't just negate | Best shape: "[belief]. The strange part? [the fact that makes it impossible]." A flat "— it isn't" also works, weaker. No greeting, no "today we're looking at…", no brand name. Motion + big legible text + voice in frame 1. |
| 0:02–0:08 | **Open the gap** | name why the normal intuition is wrong; pose the question the payoff answers | Don't explain yet. One pause beat ("…for 50 years — until one measurement changed it"). |
| 0:08–0:25 | **Progressive reveal** | **3** escalating micro-payoffs, not one block | New "wait, really?" every 3–5s. Visual cut / zoom / diagram change every ~2s. Escalate: plain fact → **the real number, said slowly** → everyday consequence → one extra angle (a 2nd place it shows up, or what the brain is actually doing). |
| 0:25–0:35 | **Payoff** | answer the opening hook, cleanly | No new mystery. Ending should feel "…that makes sense", not "wait, what?". **No sign-off** — "like & subscribe" / "link in bio" / "thanks for watching" drops retention 40–60% instantly. |
| 0:35–0:40 | **Clean close** (default) | one satisfying sentence that restates the mental model and lands with calm finality — a real full stop | e.g. "Which is why the cold you feel isn't the object's temperature — it's the speed of heat leaving you." Gives cognitive closure, builds the "you always get the answer" trust, and lifts completion rate. **Loop bridge** (per-clip option, only when a topic naturally circles back): last line cut mid-thought on an em-dash whose missing word is the first word of the hook, rising pitch. Two reviewers flagged the forced loop as "artificial / a TikTok trick" — don't make it the default. |

## Must-haves per clip

- **Name every term that applies.** KnowThisWell is a *reference* brand — "know this
  well". Use the real scientific term wherever one exists for what's being explained
  (temperature, heat, thermal conductivity, rate of heat flow, …), and define each in a
  few plain words the moment it's spoken ("…that property is called thermal conductivity
  — the rate heat flows through a material"). Don't dumb the science out; teach the
  vocabulary. Integrate the terms into the sentence — never a standalone glossary line.
- **No end card. No outro.** A branded end screen is a sign-off — it adds nothing and
  can push a swipe. The Short ends on the final spoken line and cuts. Brand presence = a
  small static corner logo bug held the whole video (never animated, never full-screen)
  + the caption/description.
  (The Explainer long-form still gets the outro card; the Short never does.)
- **One save-trigger:** a specific, memorable number or comparison. `2.20462`, `12,742 km`,
  `hundreds of times faster`, `~9% of it`. Vague = forgettable. The number goes IN the
  script — never "the figure from the source."
- **One share line:** a sentence someone forwards. Prefer a **reframe** over a scold:
  "Objects don't feel cold — your heat is leaving faster" beats "most people get this wrong."
- **One comment prompt:** asks for a *thought*, not engagement. "Which surprised you
  more?" / "Would you have guessed?" / "What's another one everyone believes?" — never
  "comment below".
- **Dual channel:** on-screen caption words match the spoken words at that moment.
- **Density:** at any second the viewer is processing ≥2 of {narration, caption,
  animation, comparison, icon, motion, highlighted keyword}. Not more — overload also drops.

## Audio

- VO: energetic, a notch faster than conversation, varied emphasis.
- Music: bed only, ducked **~14–18 dB** under the voice.
- SFX: transitions and graphic entrances only. Sparse — too many reads as fake.

## Language

Cut every filler word. "basically", "as you know", "in fact", "it's interesting because".
- "Scientists have discovered…" → "Scientists found…"
- "It's actually interesting because…" → "Here's the strange part."
Every sentence moves the story.

## Pre-publish checklist (all yes, or rework)

- [ ] First 1.5s creates a question, not a topic announcement
- [ ] A new insight every 3–5s; no monolithic explanation
- [ ] Zero filler words
- [ ] Every visual reinforces the line being spoken
- [ ] Payoff answers the hook and opens nothing new
- [ ] Ends on one satisfying mental-model sentence, calm full stop (not a forced loop)
- [ ] Every applicable scientific term is named + briefly defined as it's spoken
- [ ] One save-worthy specific number
- [ ] One share-worthy "changes how you think" line
- [ ] Comment prompt asks for a thought
- [ ] ~40s (35–50 ok), no end card / outro / verbal sign-off
- [ ] Narrative archetype differs from the immediately-previous clip (see "Narrative
      archetypes — rotate, don't repeat")
- [ ] Runs `/expert-panel` if it's a format experiment or a launch clip

## Worked example — "Metal isn't colder than wood" (plan #1)

Single narrator. ~48s, ~100 words. `[V]` = on-screen visual, `[C]` = caption (matches VO).

| t | VO | [V] / [C] |
|---|----|-----------|
| 0:00–0:04 | "Metal feels colder than wood. The strange part? They're the exact same temperature." | hand to a metal rail then a wood rail; split thermal-cam 21°C / 21°C · [C] "same temperature" |
| 0:04–0:09 | "Your skin can't measure temperature — it measures how fast heat leaves your body. So why does metal feel freezing?" | heat-flow arrows streaming off a fingertip · [C] "you feel heat leaving" |
| 0:09–0:15 | "But steel pulls heat from your hand hundreds of times faster than wood — that speed is called thermal conductivity." *(slow on the number)* | bar comparison, wood sliver vs steel bar; term appears · [C] "thermal conductivity" |
| 0:15–0:20 | "Your nerves read that heat loss as cold, even though nothing is actually colder." | brain/nerve icon, "heat loss → cold" · [C] "nerves read the rate, not the temp" |
| 0:19–0:25 | "It's why a metal spoon in ice water stings instantly, while a wooden spoon feels fine." | macro: two spoons in ice water · [C] "same water, different feel" |
| 0:25–0:29 | "Objects don't feel cold — your heat is just leaving faster." | infrared handprint fading on metal, staying on wood · [C] "your heat is leaving faster" |
| 0:29–0:34 | "What feels cold isn't just temperature — it's how quickly something pulls heat away from you." | neutral wide, freeze · [C] "temperature + speed" |
| 0:34–0:40 | "Which is why the cold you feel isn't the object's temperature — it's the speed of heat leaving you." *(calm, settled, full stop)* | slow push on the split-screen metal/wood; freeze; cut to black · [C] "not temperature — speed" |

~100 words, ~45–50s.
- **Close: clean documentary landing**, not a loop. Restates the mental model once, calm finality. (Loop variant kept as a per-clip option only when a topic circles back — see beat sheet.)
- Save-number: **"hundreds of times faster"** (structural steel ~50 W/m·K vs wood ~0.12 ≈ 400×; keep the punchy version for Shorts — it's the "wait, what?").
- Share line (reframe): "Objects don't feel cold — your heat is just leaving faster."
- Comment prompt (end-card text, not VO): "What else feels colder than it is?"
- Payoff stays scientifically accurate — "isn't *just* temperature", not "was never a temperature".

## Realistic expectations — don't judge the channel on one clip

Shorts distribution is not a script contest. A 9.8/10 script is a **necessary, not
sufficient** condition. For a new channel with no watch history:

| Execution | Views per Short (first weeks) |
|---|---|
| Average (generic slides, slow cuts) | 500–3,000 |
| Good (visual change every 2–3s, real motion) | 5,000–20,000 |
| Excellent + algorithm match | 50,000+ |

- **10K on any single clip: ~30–50%, only with strong visual execution.** Not the bar
  for "is the format working."
- The first ~15–20 uploads train the algorithm — who watches, finishes, rewatches,
  shares. **Consistency raises the odds far more than any one clip.** Ship the batch,
  read the aggregate, iterate the formula — don't react to clip #1's number.
- **The single biggest lever is the first frame.** Not the words — the first ~1s of
  *image*. Hand touching ice-cold metal / split-screen metal vs wood / thermal map of
  heat leaving a hand beats "person talking" or a static stock photo every time. If
  NotebookLM opens on a generic slide, that's the thing to fix (crop/replace frame 1 in
  post, or Option B).
- Goal is a **repeatable "KnowThisWell formula"** — this beat sheet, applied 34×+, not
  one viral hit.

## Performance read (guidelines)

| Signal | Healthy |
|---|---|
| Viewed (not swiped) | 70–80%+ |
| % viewed, <30s clip | 100%+ (loop working) |
| % viewed, 30–60s clip | 85–100%+ |
| Relative retention | above platform average most of the runtime |
| Shares / Saves / Comments | above our own channel average |

## Narrative archetypes — rotate, don't repeat

**Set 2026-09-13, superseding the single fixed skeleton below.** Running every clip
through the same Hook → Misconception → Mechanism → Number → Example → Conclusion shape
works once, then the audience (and the algorithm's pattern-matching) starts predicting
the rhythm even as the topic changes — flagged by the founder after the channel hit 34
scheduled clips all built on that one shape.

Fix: **4 fully-specified archetypes**, each with its own DELIVERY + VISUAL STYLE +
NARRATION skeleton (below). Pick per clip by **topic fit first**, then by **not
repeating the immediately-previous clip's archetype** — don't force a topic into a
shape it doesn't naturally have. A loose starting sequence (repeat weekly, re-picking
by fit as you go): **Intuition Trap → Direct Challenge → Mechanical Breakdown → Scale
Shock**, then cycle again with new topics.

| Archetype | Best for | Feeling it opens |
|---|---|---|
| 1. Intuition Trap | counterintuitive facts, common myths | "I believed the opposite" |
| 2. Direct Challenge | binary/visual-identification facts | "can I get this right?" |
| 3. Mechanical Breakdown | hidden engineering, biological/systemic processes | "I never knew that happened" |
| 4. Scale Shock | huge numbers, extreme ratios, historical comparisons | "that's impossible" |

All 4 still answer to every rule elsewhere in this doc — the 4 triggers, the
must-haves (named+defined terms, no end card, one save-number, one share line, one
comment prompt, dual-channel captions), Audio, Language, and the pre-publish checklist.
Archetype changes the *shape of the narration*, not the production standard.

### Global rules — apply no matter which archetype you pick

- **~40–50s, ~90–120 spoken words.** Soft ceiling — a topic that needs more room to land
  the payoff beats one rushed to hit a number.
- **One narrator by default** (~85% of clips). Two-host only for genuine A-argues-wrong /
  B-corrects disagreement (~15% of clips) — see "Voice" section above.
- **Name every applicable scientific/technical term**, each defined in a few plain words
  as it's spoken, integrated into the sentence — never a standalone glossary line.
- **The number is soft** ("hundreds of times faster"), never a challengeable exact figure,
  unless the archetype's whole point *is* the exact figure (Scale Shock) — then it's the
  one deliberately precise number in the clip, not several.
- **No bracketed per-line scene directions in the narration itself** — they inflated an
  early clip to 0:55. Visuals live only in the VISUAL STYLE block, which is marked
  "guidance only — do NOT read aloud."
- **No end card / outro / verbal sign-off.** Comment prompt + knowthiswell.com link go in
  the video description, never the narration.
- **Plain language, zero filler** ("basically", "in fact", "as you know", "it's
  interesting because").
- **Do NOT** ask NotebookLM to "output the script / storyboard" — the field generates a
  video, not text; it will read stage directions aloud.
- Fill the `<slots>`, keep the fixed DELIVERY/VISUAL STYLE framing verbatim, paste the
  whole thing into NotebookLM → Video Overview → Short → Custom topic. **Draft the
  narration to the chosen archetype's flow first, then drop it in.**
- One retry max if NotebookLM ignores part of the prompt — then proceed with what it
  produced and note it in the log.

### Archetype 1 — Intuition Trap (Paradox / Misconception)

Pacing: fast setup → sharp contradiction → single core mechanism → punchy wrap. This is
the shape the channel started on — still the default for myth-heavy science/finance
topics.

```
DELIVERY: one narrator, single voice. Premium science-documentary tone — not an
influencer. Slightly faster than normal through the setup; slow down and land hard on
"<the number phrase>". No intro, no "did you know," no "in this video," no channel
name, no call to action, no sign-off.

VISUAL STYLE (guidance only — do NOT read aloud): fast-paced, scene change every 2–3s,
clean high-contrast documentary look, minimal text, no presenter. Draw from:
<5–6 concrete shots from THIS topic — the object(s); a split-screen comparison; an
animated view of the mechanism; a scale/data graphic; one everyday-object example>.

NARRATION — read exactly these lines, in order, then stop:

<HOOK — verbatim, one of:
  "<the common belief> — it isn't."
  "<the belief>. The strange part? <the fact that makes it impossible>.">
<MISCONCEPTION — one line: what everyone assumes → the fact that contradicts it. Then pose the question.>
<MECHANISM A — the reframe: what's really being measured / what's really happening.>
<MECHANISM B — name every scientific term that applies as you explain, each defined in a few plain words in the same sentence: "That's <term> — <plain-words definition>.">
<MECHANISM C — the consequence of that mechanism in body / everyday terms.>
<NUMBER — the magnitude, said slowly. Soft form: "<hundreds / thousands> of times <faster / more / …>" — never a hard exact multiple.>
<EXAMPLE — one concrete everyday case: "It's why <X happens> while <Y doesn't> — <one-clause reason>.">
<CONCLUSION — one satisfying sentence restating the mental model in plain words.>

Land that final line with calm, settled finality — a clean full stop. No rush, no
trailing dash.
```

**Loop variant** (per-clip only, when the topic genuinely circles back): replace the
CONCLUSION line with one cut off mid-sentence on an em-dash whose missing word is the
first word of the HOOK; change the ending note to *"Land the final word on a RISING
pitch, cut immediately, no trailing silence."*

Worked example (clip #1, metal vs wood) is below under "Filled example."

### Archetype 2 — Direct Challenge (A/B Micro-Quiz)

Pacing: immediate binary choice → 2-second visual tension → answer reveal → the "why".
Best for topics with a genuine, visually-stageable either/or (two objects, two
outcomes) — don't force a false binary onto a topic that doesn't have one.

```
DELIVERY: one narrator, high-tempo, direct, sharp enunciation. Deliberate micro-pause
after the question, then accelerate through the answer. No intro, no "did you know,"
no "in this video," no channel name, no call to action, no sign-off.

VISUAL STYLE (guidance only — do NOT read aloud): split-screen Option A vs Option B
with a 2-second visual timer/tension beat, immediate zoom-in to the winning option on
reveal, scene change every 2–3s, minimal text, no presenter.

NARRATION — read exactly these lines, in order, then stop:

<CHALLENGE — verbatim: "<Field/topic> challenge: between <Option A> and <Option B>,
which one <surprising outcome>?">
<PAUSE BEAT — one short line implying the wrong instinct: "If you picked <the
intuitive-but-wrong option>, you just fell for the classic trap.">
<REVEAL — the actual answer, stated flatly: "The actual answer is <Option B/correct
option>.">
<MECHANISM — name the term if one applies, defined in plain words: "Because <single
decisive mechanical reason>, it beats <the other option> every single time.">
<EXAMPLE — optional one-clause everyday extension of the same mechanism, only if it
doesn't push past the word budget.>
<CONCLUSION — one satisfying sentence restating the mental model in plain words.>

Land that final line with calm, settled finality — a clean full stop.
```

Ready example (physics):
> "Physics test: drop a solid steel sphere and a hollow steel sphere of the exact same
> size in a vacuum — which hits first?
> If you picked the heavier one, you fell for the trap.
> They hit at the exact same millisecond.
> Without air resistance, gravity accelerates all mass at the same rate — that's
> gravitational acceleration, and it doesn't care about weight."

### Archetype 3 — Mechanical Breakdown (How It Actually Works)

Pacing: sudden observation → step 1 (trigger) → step 2 (hidden internal reaction) →
conclusion. Best for hidden engineering, systemic/biological processes — the "Hidden
Machine" shape.

```
DELIVERY: one narrator. Precise, analytical, matter-of-fact documentary narration.
Steady, rhythmic cadence, no hype. No intro, no "did you know," no "in this video," no
channel name, no call to action, no sign-off.

VISUAL STYLE (guidance only — do NOT read aloud): macro close-up or cutaway schematic
diagram of the internal parts, fast sequential transitions matching each step, scene
change every 2–3s, minimal text, no presenter.

NARRATION — read exactly these lines, in order, then stop:

<OBSERVATION — verbatim: "When you <everyday action>, you assume <the assumed simple
process>. What actually happens inside is <the real mechanism, teased not explained
yet>.">
<STEP 1 — the trigger event, concrete and immediate.>
<STEP 2 — the internal mechanical/biological reaction nobody sees, with the scientific
term named and defined in plain words as it's spoken.>
<STEP 3 (optional, only if the mechanism genuinely has 3 beats) — the next link in the
same chain.>
<CONCLUSION — the single mechanism as the whole reason for the final outcome: "That
single mechanism is the only reason <final critical outcome>.">

Land that final line with calm, settled finality — a clean full stop.
```

Ready example (engineering/safety):
> "When your car crashes, seatbelts don't just hold you back — they deliberately
> stretch.
> First, a pretensioner clamps the belt tight within milliseconds of impact.
> Then an internal torsion bar slowly twists, letting controlled slack through so your
> organs decelerate gradually instead of tearing — that's load limiting.
> It isn't rigid fabric saving your life. It's engineered deformation."

### Archetype 4 — Scale Shock (Data / Perspective Inversion)

Pacing: absurd comparison → anchored reference point → shocking context → resonant
takeaway. Best for astounding numbers, historical comparisons, extreme ratios — the one
archetype where a precise (not soft) number is the whole point.

```
DELIVERY: one narrator. Understated, cold, clinical delivery — let the scale of the
number create the impact, not artificial vocal excitement. No intro, no "did you know,"
no "in this video," no channel name, no call to action, no sign-off.

VISUAL STYLE (guidance only — do NOT read aloud): minimalist animated data
visualization, scale-comparison bars, or rapid side-by-side size/time scaling. Scene
change every 2–3s, minimal text, no presenter.

NARRATION — read exactly these lines, in order, then stop:

<FRAME — verbatim: "To understand just how <massive/small/fast/slow> <subject> really
is, look at this comparison.">
<ANCHOR — a relatable reference quantity and its familiar baseline time/effort.>
<INVERSION — the same rate applied to the target subject, with the exact shocking
comparative figure said slowly.>
<CONCLUSION — one line the viewer can't unsee, tying the number back to something they
already understand: "We simply cannot visualize numbers this extreme" or an
equivalent concrete closer specific to the topic.>

Land that final line with calm, settled finality — a clean full stop.
```

Ready example (math/economics):
> "The difference between a million and a billion is almost impossible to visualize.
> One million seconds is roughly eleven and a half days.
> One billion seconds is thirty-one point seven years.
> A billionaire isn't slightly wealthier than a millionaire — they're operating on an
> entirely different scale of time."

### Extended archetype set — backlog, not yet given full NotebookLM templates

From an earlier 12-skeleton brainstorm (2026-09-13). These are real, distinct shapes
worth adding once the 4 above are validated in production — each needs its own
DELIVERY/VISUAL STYLE/NARRATION skeleton written to match the global rules before use,
the same way the 4 above were:

| Archetype | Emotion | Flow |
|---|---|---|
| Scale Shock detail: **Timeline Countdown** | "everything happens incredibly fast" | start event → 0.01s → 0.1s → 1s → final result (crashes, lightning, heartbeats, CPUs) |
| **Myth vs Reality** | "the internet lied" | myth → reality → why people believe it → actual science |
| **What If?** | "what would happen?" | hypothetical question → immediate prediction → actual result → explanation |
| **Domino Effect** | "one thing caused all this" | tiny event → step 1 → step 2 → step 3 → unexpected consequence |
| **Invisible Competition** | "everything is racing" | two things compete → which wins? → why → surprise |
| **Reverse Thinking** | "the effect explains the cause" | weird observation → ask why → reveal hidden cause → finish |
| **Before vs After** | transformation | before → trigger → after → reason (evolution, manufacturing, medicine, tech) |
| **Tiny Detail, Huge Impact** | "something so small matters" | tiny object → hidden purpose → what happens without it → memorable ending |

*(Baked-in production rules that used to live here are now under "Global rules — apply
no matter which archetype you pick" above — they apply to all 4 archetypes, not just
this one.)*

### Filled example — Archetype 1, clip #1 (metal vs wood), clean-close

```
DELIVERY: one narrator, single voice. Premium science-documentary tone — not an
influencer. Slightly faster than normal through the setup; slow down and land hard on
"hundreds of times faster." No intro, no "did you know," no "in this video," no channel
name, no call to action, no sign-off.

VISUAL STYLE (guidance only — do NOT read aloud): fast-paced, scene change every 2–3s,
clean high-contrast documentary look, minimal text, no presenter. Draw from: a hand
touching metal and wood at once; split screen with identical temperature readouts;
animated arrows showing heat leaving the hand faster through metal; thermal-infrared of
faster heat loss on metal; a metal spoon and a wooden spoon in ice water; a simple
conductivity comparison bar.

NARRATION — read exactly these lines, in order, then stop:

Metal feels colder than wood in the same room — it isn't.
Both are sitting at the exact same temperature. So why does one feel freezing?
Your skin doesn't actually measure temperature — it measures how fast heat leaves your body.
Metal carries heat away far faster than wood. That property is called thermal conductivity — the rate heat flows through a material.
The faster your hand loses heat, the colder it feels, even when nothing is colder.
Steel pulls heat from your skin hundreds of times faster than wood.
It's why a metal spoon in ice water stings instantly while a wooden one barely feels cold — same water, but one drains heat from your hand far faster.
So the cold you feel isn't the object's temperature — it's the speed of heat leaving you.

Land that final line with calm, settled finality — a clean full stop. No rush, no
trailing dash.
```

~115 words, ~45–48s. Concepts voiced: temperature, heat, **thermal conductivity + its
definition**, rate of heat flow, "skin senses heat loss, not temperature."

## The real bottleneck now: the visual plan

The script is solved. Same narration + weak visuals = average; + strong visual pacing =
premium. NotebookLM's Short template is fixed (generic slides, its own motion). So a
premium look means **Option B — build the clip** (Remotion; the repo has `remotion-*`
skills) from: the script above → TTS voice → a cut on every beat in the table → the
listed graphics (thermal cam, heat-flow arrows, spoon macro, IR handprint). Decision
still open; see below.

## Decision (2026-09-10): stay on NotebookLM

Option B (custom typographic build, Piper + ffmpeg) was tried and rejected — 3/10,
static and robotic. **Run the batch on NotebookLM.**

**Prompt finding:** two versions generated for clip #1 —
- v1 (plain 10-line script, no scene directions) → **0:41**, on target.
- v2 (same lines + `[bracketed scene directions]`) → **0:55**, too long — NotebookLM
  seems to expand or narrate around the visual hints.
→ **Feed NotebookLM the plain spoken script only.** Keep the per-beat shot list as a
separate post-production reference, not in the custom-topic field.

Only post-processing on the NotebookLM Short:
1. Cover the "Gemini Notebook" watermark (existing de-watermark step, `badge-vertical.png`).
2. **Do NOT append the outro card** — it signals "the end" and kills the loop rewatch.
   The clip ends on NotebookLM's last line and cuts.
3. Optional: composite a small static KnowThisWell logo bug in a top corner for the full
   duration (not the animated outro).
Revisit animated motion-graphics (Motion Canvas / Revideo) later if NotebookLM's
retention numbers plateau low.

## Production note — reconcile with the pipeline

The current pipeline (`.claude/skills/daily-video`) generates narration via **NotebookLM**,
which won't hit this beat sheet on its own (its narration is its own; no loop bridge, no
scripted 2s cuts). Options, user's call:
- **A — accept NotebookLM baseline** (cheap, looser structure). Push it as far as possible
  through the Step 2.5 custom prompt: force a cold misconception hook, no intro, no
  sign-off, escalating facts, a closing line that loops. Won't be tight but is free.
- **B — script + voice these to spec** (write the 35s script per the beat sheet, custom
  TTS + our own cutting). Hits the spec; heavier per-clip cost. Previously judged
  not-worth-it vs NotebookLM — revisit given this is now the explicit standard.

Recommendation: **A for the Sep 28–Oct 31 batch** (34 clips, need volume + gap-free),
tighten the custom prompt to this doc, and trial **B on 2–3 clips** to compare retention
before committing either way.

Feeds: `Source Tracking/daily-shorts-plan-sep28-oct31.md` (the 34 hooks),
`.claude/private/brand/BRAND.md` (visual identity).
