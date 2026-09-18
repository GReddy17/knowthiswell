# Shorts → all-social distribution plan

_Created 2026-09-05. Covers the 26 short-form companion videos (~65–90 s each,
one per pillar/workhorse topic). Goal: push every Short to every free
short-form surface, sequenced to reinforce the YouTube long-form + the site._

**STALE (2026-09-17) — video-ID column is unreliable, don't act on it as-is.**
Checked all 26 IDs against the YouTube Data API: 12 are still-live published
videos. The other 14 (incl. `kd42CDkDlgw` power-of-attorney and
`Vdbg_rDfkC4` vaccines, both flagged during a broken-link audit) come back
not-found — confirmed these were part of the 49-video scheduled backlog
deleted the same day (2026-09-17 mass wipe, see `video-log.md` /
`marketing-log.md`), not placeholders that never shipped. `video-log.md` is
the current single source of truth for what's actually live/scheduled per
its own header; treat this doc as historical planning only, not a live
tracker.

Related: `content-strategy.md` (the two-stream model), `daily-video/SKILL.md`
(how the videos are made), `.claude/private/accounts-registry.md` (which
account each platform is).

---

## 1. What's actually automatable (read first)

| Surface | Posting API? | How we schedule |
|---|---|---|
| YouTube Shorts | Yes (Data API, the token we already use) | Script upload + `publishAt`. **Needs a 9:16 file.** |
| TikTok (@knowthiswell) | No public post API for us | Native scheduler on tiktok.com (web), up to 10 days out, or manual |
| Instagram Reels (@knowthis_well) | No | **Meta Business Suite** — schedules IG + FB together, free |
| Facebook Reels (profile 61594173328384) | No | Meta Business Suite (same as above) |
| X / @HariKishore39 | n/a (text) | Optional text-only "did you know" version, manual or Typefully |

**Blocking dependency:** the 26 companion videos were rendered **16:9**, not
vertical. Posting 16:9 to TikTok/Reels/Shorts = a small letterboxed clip = dead
on arrival. Every one needs a **9:16 reframe** first (Section 3). Nothing
schedules until those exist.

**Bottom line:** this doc is the plan + calendar + copy. Actual scheduling is a
two-step: (a) produce 26 vertical files, (b) load them into YouTube (script) +
Meta Business Suite (IG+FB) + TikTok scheduler. Step (b) for TikTok/IG/FB is
manual paste-and-schedule — no tool we have posts to them.

---

## 2. Per-platform playbook

### Voice
Same brand voice as the site, one notch more energetic. Misconception first,
then the turn. No hype words ("mind-blowing", "you won't believe"). No fake
urgency. The fact is the hook.

### TikTok — @knowthiswell
- **Caption:** 1 short line, the misconception as a question or flat claim.
  ≤ 120 chars. No link (not clickable); "everything's on knowthiswell.com".
- **Hashtags:** 4–5. Bank: `#LearnOnTikTok #todayilearned #factcheck`
  + 1–2 topic tags. Don't stuff.
- **On-screen text:** first frame must carry the hook (see each topic below) —
  TikTok autoplays muted in feed.
- **Best slot:** 6–9 pm ET weekdays. Post 1/day max.
- **First comment:** pin a comment with the site URL + the one number from the video.

### Instagram Reels — @knowthis_well
- **Caption:** 2–4 lines. Hook line, then a 1-sentence payoff, then
  "Full breakdown + a calculator on the site (link in bio)."
- **Hashtags:** 8–12, in the caption or first comment. Bank:
  `#explained #didyouknow #learnsomethingnew #sciencefacts #personalfinance
  #moneytips #studygram #infographic` + topic tags. Rotate, don't repeat the
  same block every time.
- **Cover:** use the branded thumbnail's portrait crop (we have these:
  `.claude/private/out/thumbs/<topic>_short.png` for 5; generate the rest with
  `yt-thumbnail.mjs --format short`).
- **Link in bio:** keep it pointed at `knowthiswell.com` (or a Linktree if we
  want per-topic). IG still blocks clickable links in web captions.
- **Best slot:** 11 am or 7 pm ET.

### Facebook Reels — profile 61594173328384
- Scheduled together with IG via Meta Business Suite.
- **Caption:** conversational, can include the raw URL (FB makes it clickable):
  "The full version with the diagrams is here → knowthiswell.com".
- **Hashtags:** 1–2 only. FB doesn't reward them.

### YouTube Shorts — KnowThisWell channel
- Re-upload the 9:16 file as its own Short (title ends `#Shorts`).
- **Description:** 2 lines + the exact article URL + 3 tags.
- `publishAt` via script, same 16:00 UTC slot the long-form uses, 1–2 days
  **before** that topic's long-form goes live (Short = trailer).
- The 5 that are already live Shorts (light-thunder, thin-wires, energy,
  forces-motion, states-of-matter) — leave them; just cross-post those same
  cuts to TikTok/IG/FB.

### X / @HariKishore39 (optional, text-only)
- One tweet: the misconception + the one-line mechanism + link. No video.
- Thread it under the day's Reddit/Quora activity if any.

---

## 3. 9:16 reframe spec (CapCut, or the ffmpeg path)

Source: the 16:9 companion video (download from YouTube Studio, or we keep the
NotebookLM export). Target: **1080×1920, ≤ 60 s where possible** (trim dead air),
mp4 h.264, < 100 MB.

Per clip:
1. **Frame:** center the 16:9 video in the top ~62% of a 9:16 canvas on a
   `#FBF8F1` (paper) ground — *not* blurred-video pad (off-brand). Or, if the
   footage is mostly the NotebookLM waveform/text, crop-zoom to 9:16 and lose
   the edges.
2. **Bottom third:** brand strip — the `outro-vertical.png` lockup small in the
   corner, and burned-in captions (CapCut auto-captions, then restyle to
   Fraunces/【paper on forest】, 2 lines max on screen).
3. **First 0.8 s:** hold the hook text (Section 4 column "on-screen hook") big,
   before anything moves. This is the scroll-stopper.
4. **Last 1.5 s:** `outro-vertical.png` end card — "KnowThisWell · knowthiswell.com".
5. **Loudness:** normalize to ~ -14 LUFS.

Naming: `kt-social/<topic>-vertical.mp4`.

**ffmpeg alternative** (if we skip CapCut — no captions, faster, 26 in a batch):
`yt-dlp` the source → `ffmpeg` pad-to-9:16 on paper bg + overlay
`outro-vertical.png` + `drawtext` hook for 0.8 s + concat end card. Produces a
plain but on-brand vertical. Captions would be missing (a real downside for
muted autoplay) unless we run whisper → .srt → burn.

---

## 4. The 26 Short packages

`vid` = the existing YouTube video id of the companion cut.
On-screen hook = the first-frame text (also the TikTok caption base).
Master caption = IG/FB starting point; trim for TikTok.
All CTAs resolve to **knowthiswell.com** (link in bio / first comment / FB inline).

| # | Topic | vid | Category | On-screen hook (first frame) | Master caption |
|---|---|---|---|---|---|
| 1 | credit-score | gl37shEF2qE | Finance | "Your credit score can't see your income." | Your salary, your savings, your job — none of it is in the formula. A credit score is five things: payment history, amounts owed, age of accounts, new credit, credit mix. Here's what actually moves it. |
| 2 | cold-vs-flu | gYBYXGnbh0M | Health | "Symptoms alone can't tell cold from flu." | They overlap almost completely. The one pattern doctors actually use: how fast it hit you. Flu is a truck; a cold is a slow slide. |
| 3 | percentages | rUr68o13vzk | Math | "20% off then 10% off is not 30% off." | Stacked discounts multiply, they don't add. 20% then 10% = 28%. Here's the one-line way to do it in your head. |
| 4 | bmi | iNe_OTMKM8Q | Health | "Two people, same BMI, completely different bodies." | BMI is weight ÷ height². It can't tell muscle from fat, or where the fat is. What it's actually for — and what it isn't. |
| 5 | budget-50-30-20 | xKnDf2uT7P0 | Finance | "The 50/30/20 rule, with real numbers." | 50% needs, 30% wants, 20% future — off take-home, not gross. Worked on a real paycheck, including where most people misfile "needs". |
| 6 | wills | F13kiFtJeRo | Legal | "A will does not skip probate court." | A will is evidence of intent, not a transfer. It still goes through a court to take effect. What a will actually does — and the one missing signature that voids it. |
| 7 | time-zones | Y9uzRK4q-So | Geography | "The world is not 24 clean time zones." | Earth turns 15° an hour, but borders follow politics. India is +5:30, China spans five zones and uses one, and the date line zigzags on purpose. |
| 8 | fractions | CM3Sf3Zl93Q | Math | "Multiplying fractions needs no common denominator." | Adding does. Multiplying doesn't — you just go straight across. Why the rules are different, in 60 seconds. |
| 9 | credit-reports | L3NQED6A1ys | Finance | "You have three credit reports. They don't match." | Equifax, Experian, TransUnion — lenders don't all report to all three, so your score changes depending on which one's pulled. What to check on each. |
| 10 | heart-attack | Y7FkYAtwMlw | Health | "A heart attack is not a cardiac arrest." | One is a plumbing problem — a blocked artery, person usually awake. The other is an electrical problem — the heart stops, person collapses. The response is different. |
| 11 | power-of-attorney | kd42CDkDlgw | Legal | "A normal power of attorney dies when you need it most." | It stops working the moment you lose capacity — unless it says "durable". The one word that changes everything. |
| 12 | climate | WoihXJHfC3I | Environment | "Here's how we know the warming is us." | Not a model guess — a fingerprint: the upper atmosphere is cooling while the surface warms, and the extra CO₂ carries the chemical signature of fossil fuel. |
| 13 | income-tax | 5DZES0hXdNc | Finance | "A raise cannot shrink your take-home pay." | Only the dollars above the bracket line are taxed higher — never the whole salary. The "I'll lose money" fear, with the actual math. |
| 14 | kg-lb-oz | _3KDnDp6wWM | Units | "1 kg is not exactly 2.2 lb." | It's 2.20462. On a 20 kg parcel the rounding is already off by a pound. The clean way to convert, and when the error matters. |
| 15 | vaccines | Vdbg_rDfkC4 | Health | "Catching it is not the safer way to get immunity." | Both routes train the same immune system. One of them also comes with the disease. What "natural immunity" actually skips. |
| 16 | bodmas-pemdas | TmhZ5o-DWxk | Math | "BODMAS and PEMDAS are the same rule." | Different names, identical order. The trap is the middle: division and multiplication are one step, left to right — not "multiply first". |
| 17 | statutes | r8CqIWbjEOg | Legal | "A perfect case can die on a deadline." | A statute of limitations ends the right to sue after a set time — even with airtight evidence. When the clock starts, and what pauses it. |
| 18 | debit-vs-credit | PkWPE79eqUQ | Finance | "Debit and credit are exact opposites." | Debit spends your money now. Credit spends the bank's and bills you. That difference is why one builds a credit history and the other can't. |
| 19 | celsius-fahrenheit | UbtNqGvLX0s | Units | "°C to °F is not just doubling." | ×1.8, then +32 — the +32 is because the two scales don't share a zero. The mental-math shortcut that gets you within a degree. |
| 20 | simple-machines | nta0LTWa7dc | Science | "A lever doesn't create force. It trades." | Half the force over twice the distance. Every simple machine is the same bargain — you never get work for free. |
| 21 | atoms-isotopes | s8wzq61br-E | Science | "Same element, different atom — how?" | Change the neutrons, not the protons, and it's still carbon — just a heavier isotope. What actually defines an element. |
| 22 | light-thunder | P0zfhxI15UY | Science | "Lightning and thunder happen at the same instant." | Light gets to you almost immediately; sound crawls ~1 km every 3 seconds. The gap is the distance, not a delay. |
| 23 | thin-wires-overheat | qTXBD5dQ_NI | Science | "Thin wires overheat. Thick ones don't." | Same current, more resistance in the thin wire → more heat. It's why extension cords have a rating and why the cheap ones melt. |
| 24 | energy-conservation | YffaTmyTgmk | Science | "Where does the energy go when something stops?" | It's never destroyed — it turns into heat, sound, deformation. "Losing energy" always means "moved it somewhere you didn't want". |
| 25 | forces-motion | l4KFNlS1IXo | Science | "Heavier things don't fall faster." | Drop a hammer and a feather in a vacuum — they land together. Air resistance is the entire difference, and it's about shape, not weight. |
| 26 | states-of-matter | cf9X5_5KxJE | Science | "A fridge is warm at the back for a reason." | It doesn't make cold — it moves heat out of the box and dumps it behind. Same reason the back of the fridge is the hottest thing in the kitchen. |

Topic hashtag tags (append to the platform bank):
finance → `#personalfinance #moneytips` · health → `#healthfacts #medtwitter`(X) `#health` ·
math → `#mathtricks #math` · science → `#sciencefacts #physics` · legal → `#legaltips #knowyourrights` ·
units → `#conversions` · geography → `#geographyfacts` · environment → `#climate #science`.

---

## 5. Posting calendar

**Cadence:** 1 Short/weekday, the **same cut to all 4 video surfaces the same
day**. ~5.5 weeks for 26. Slot: **12:00 pm ET** (TikTok gets a second push at
7 pm if a clip is moving).

**Order logic:** the 8 already-live cuts go first (weeks 1–2 — no dependency),
then follow the YouTube long-form publish schedule so each Short lands 1–2 days
ahead of its long-form.

| Day | Topic | # | Notes |
|---|---|---|---|
| Mon Sep 8 | light-thunder | 22 | live Short already — cross-post only |
| Tue Sep 9 | thin-wires-overheat | 23 | live Short |
| Wed Sep 10 | energy-conservation | 24 | live Short |
| Thu Sep 11 | forces-motion | 25 | live Short |
| Fri Sep 12 | states-of-matter | 26 | live Short |
| Mon Sep 15 | simple-machines | 20 | companion is public, needs 9:16 |
| Tue Sep 16 | atoms-isotopes | 21 | " |
| Wed Sep 17 | celsius-fahrenheit | 19 | " |
| Thu Sep 18 | credit-score | 1 | long-form publishes Sep 6 (already out) |
| Fri Sep 19 | cold-vs-flu | 2 | long-form Sep 8 |
| Mon Sep 22 | percentages | 3 | long-form Sep 10 |
| Tue Sep 23 | bmi | 4 | long-form Sep 12 |
| Wed Sep 24 | budget-50-30-20 | 5 | long-form Sep 14 |
| Thu Sep 25 | wills | 6 | long-form Sep 16 |
| Fri Sep 26 | time-zones | 7 | long-form Sep 18 |
| Mon Sep 29 | fractions | 8 | long-form Sep 20 |
| Tue Sep 30 | credit-reports | 9 | long-form Sep 22 |
| Wed Oct 1 | heart-attack | 10 | long-form Sep 24 |
| Thu Oct 2 | power-of-attorney | 11 | long-form Sep 26 |
| Fri Oct 3 | climate | 12 | long-form Sep 28 |
| Mon Oct 6 | income-tax | 13 | long-form Sep 30 |
| Tue Oct 7 | kg-lb-oz | 14 | long-form Oct 2 |
| Wed Oct 8 | vaccines | 15 | long-form Oct 4 |
| Thu Oct 9 | bodmas-pemdas | 16 | long-form Oct 6 |
| Fri Oct 10 | statutes | 17 | long-form Oct 8 |
| Mon Oct 13 | debit-vs-credit | 18 | long-form Oct 10 |

(If the long-form pause / 10k-view rule lands, the Shorts calendar is unaffected
— Shorts keep going; only new long-form generation stops.)

---

## 6. Scheduling setup — one-time

1. **Vertical files.** Decide CapCut (better — captions) vs ffmpeg batch
   (faster — no captions). Produce all 26 into `kt-social/`. This is the gate.
2. **YouTube Shorts.** Extend `yt-upload.py` / a small script to take
   `--file <vertical> --short --publish-at <date>` for the calendar dates.
   Scriptable end-to-end.
3. **Meta Business Suite** (business.facebook.com) — connect the IG
   `@knowthis_well` + the FB profile/page. Planner → upload each Reel, set the
   calendar date, paste caption. Covers IG + FB in one pass. ~26 uploads,
   manual, ~1 hr.
4. **TikTok.** tiktok.com → upload → "Schedule" toggle (max 10 days out, so do
   it in two batches). Paste caption + hashtags. Manual.
5. **Tracking.** Add a `social-shorts-log.md` row per post: date, topic, 4
   platforms, view counts at +48 h and +7 d (feeds the 10k-view decision).

## Open decision for the user

- CapCut (captioned, slower, you do it) **or** ffmpeg batch (plain, I can build
  it and run all 26)?
- Am I setting up Meta Business Suite + TikTok scheduling via browser, or are
  you doing the manual scheduling from this doc?

---

## Attempt log

**2026-09-05 — batch 1 built, browser posting failed.**
- 6 videos (top-6 by views) downloaded via yt-dlp, transcoded to 1080×1920
  h264/aac + branded end card → `.claude/private/kt-social/out/*.mp4`. Captions
  written → `.claude/private/kt-social/captions.md`.
- The NotebookLM "Short" exports are **already 720×1280 vertical** — no reframe
  needed, just upscale + format. Good to know for future batches.
- **TikTok Studio web upload stalls** on a programmatically-set file input
  (spinner never resolves, no post created). TikTok blocks automated uploads.
  IG/FB not attempted — personal accounts have no scheduler anyway.
- **Conclusion:** browser automation is not a reliable path for social posting.
  Use a scheduler (Metricool free tier connects TikTok + IG + FB, native 1/day
  scheduling, ~20 min setup) OR post manually from the ready files (~5 min/day).
