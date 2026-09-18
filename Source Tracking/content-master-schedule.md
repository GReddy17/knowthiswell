# Content master schedule — website

_Created 2026-09-17, effective 2026-09-18. Integrated with
`video-master-schedule.md` — each day's Short is picked from that day's 10
posts below._

**Cadence: 10 new pages/day**, per the standing founder target in
`Source Tracking/roadmap.md` (2026-09-12 override) — unchanged by this doc,
which just adds concrete dates/topics and the source-priority rule for
picking them.

## Topic sources, in priority order

1. **Home & DIY Knowledge (category 15)** — already active, in progress,
   no committee check needed. 11 posts left (`order` 40-50), finishes the
   category. Source: `Source Tracking/home-diy-knowledge-subtopics.md`.
2. **Pillar queue (counterintuitive everyday science)** — already active
   (category 01), no committee check needed. 31 unused items as of this
   writing. Source: `Source Tracking/pillar-topics.md`. Every pillar post
   gets `pillar: true` + `videoQueue: true` per `content-strategy.md`.
3. **Technology Basics workhorse** — category complete (100/100 as of
   2026-08-29), no remaining backlog. Not a source right now.
4. **Anything beyond 1-2**: requires a fresh `/seo-committee` check before
   opening a parked category (16-43) — do not invent topics past the real
   backlog below without either topping up `pillar-topics.md` (same
   already-active category, no check needed) or running that check.

## Week 1 — concrete (real backlog, no invented topics)

### 2026-09-18 — 10 posts (Home & DIY, order 40-49) — ✅ DONE
Written by the 7pm cron run (first successful fire post-FDA-fix),
`main@78ce180`. Video step for the Short pick below not yet done — see
`video-master-schedule.md`.

1. `how-often-household-systems-actually-need-maintenance` (40)
2. `hardwood-vs-laminate-vs-vinyl-flooring-explained` (41)
3. `why-hardwood-floors-expand-and-contract` (42)
4. `how-carpet-padding-actually-affects-comfort-and-life` (43)
5. `what-causes-squeaky-floors-explained` (44)
6. `how-grout-and-tile-adhesive-actually-differ` (45)
7. `how-a-home-foundation-actually-supports-a-house` (46)
8. `why-caulking-windows-and-doors-matters` (47)
9. `how-a-sump-pump-actually-prevents-flooding` (48) — **Short pick**, see
   `video-master-schedule.md`
10. `what-makes-pressure-treated-wood-different` (49)

### 2026-09-19 — 10 posts (last Home & DIY post + 9 pillar)

1. `why-grading-and-drainage-around-a-house-matters` (50) — **completes
   Home & DIY Knowledge at 50/50.** Delete its `coming-soon.tsx`, rerun the
   registry script + build, mark category 15 `done` in
   `category-rollout-status.md`.
2. Heavier objects fall faster → vacuum, feather & hammer (forces-and-motion)
   — **Short pick**
3. You see lightning before you hear thunder → they're simultaneous, light
   ≫ sound (light-color-and-sound)
4. Cold "flows into" a room → there is no cold, heat flows out
   (heat-and-temperature)
5. A microwave heats from the inside out → it heats water molecules
   everywhere the waves reach (electromagnetic-basics)
6. Metal is colder than wood → both are room temperature, metal conducts
   heat away faster (heat-and-temperature)
7. Heavier things sink → density vs. the fluid decides it
   (fluids-and-pressure)
8. A bird on a live wire is safe because it's insulated → it's bare, no
   voltage difference (electricity-and-magnetism-basics)
9. Thick and thin wires carry current equally → thin wires resist more,
   heat up (electricity-and-magnetism-basics)
10. Water conducts electricity → pure water barely does, dissolved
    minerals do (electricity-and-magnetism-basics)

### 2026-09-20 — 10 posts (pillar)

1. Seasons are caused by Earth's distance from the Sun → axial tilt, not
   distance (space-and-astronomy)
2. The Moon has a permanent dark side → it has a permanent *far* side
   (space-and-astronomy)
3. Rockets push against the air to move → they push against their own
   exhaust (forces-and-motion)
4. Gyroscopes defy gravity → angular momentum resists reorientation, not
   gravity (forces-and-motion)
5. Hot water freezes slower than cold → the Mpemba effect can reverse that
   (heat-and-temperature)
6. Glass is a slow-flowing liquid → amorphous solid, old-window taper is a
   manufacturing artifact (matter-and-states-of-matter)
7. Salt makes water boil faster → it raises boiling point slightly, makes
   it hotter not faster-to-boil (matter-and-states-of-matter)
8. A falling cat "twists off" something to land on its feet → conservation
   of angular momentum, no external push needed (forces-and-motion) —
   **Short pick**
9. We use only 10% of our brains → nearly all of it is active over a day
   (biology-and-human-body)
10. Sugar makes kids hyperactive → controlled trials show no effect
    (nutrition-and-diet-basics)

### 2026-09-21 — 10 posts (pillar, exhausts the current queue)

1. Cracking knuckles causes arthritis → gas bubbles collapsing, no link in
   long-term studies (biology-and-human-body)
2. Shaving makes hair grow back thicker → blunt-cut tip only feels coarser
   (biology-and-human-body)
3. You lose most body heat through your head → proportional to exposed
   surface area (biology-and-human-body)
4. Reading in dim light damages your eyes → temporary strain, not lasting
   damage (biology-and-human-body)
5. The tongue has separate zones for each taste → all taste buds detect all
   five tastes (biology-and-human-body)
6. Blood is blue inside your body → always red, veins look blue through
   skin (biology-and-human-body)
7. Goldfish have a 3-second memory → trainable, remember for months
   (life-science-and-nature) — **Short pick**
8. Bats are blind → most see fine, echolocation is additive
   (life-science-and-nature)
9. A raise into a higher tax bracket can shrink your take-home pay → only
   income above the threshold is taxed higher (personal-finance cross-link)
10. 1 kg = 2.2 lb exactly → it's 2.20462, rounding compounds on large
    shipments (units cross-link)

## 2026-09-22 onward — replenishment mode

Only **2 real topics** remain unused in `pillar-topics.md` after 2026-09-21
(doubling a recipe doesn't scale linearly; 0.999... = 1). **Before this
date**, either:
- Add ≥8 more entries to `pillar-topics.md` in the same format (wrong
  intuition → real mechanism), then keep pulling 10/day from it the same
  way, or
- Run `/seo-committee` on thawing a parked category (16-43) if the pillar
  well is judged tapped out rather than just needing a top-up.

Don't invent topics past this point without one of those two things
happening first — that's exactly the drift this doc exists to prevent.
