# Content master schedule — website

_Created 2026-09-17, effective 2026-09-18. Integrated with
`video-master-schedule.md` — each day's Short is picked from that day's 10
posts below._

**Cadence: 10 new pages/day**, per the standing founder target in
`Source Tracking/roadmap.md` (2026-09-12 override) — unchanged by this doc,
which just adds concrete dates/topics and the source-priority rule for
picking them.

## Topic sources, in priority order

1. **Home & DIY Knowledge (category 15)** — **done, 50/50** as of
   2026-09-19 (`main@792fdb7`). No longer a source.
2. **Pillar queue (counterintuitive everyday science)** — category 01,
   no committee check needed. Down to its last 2 unused items as of
   2026-09-21 — effectively exhausted, not a daily source until
   `pillar-topics.md` gets topped up. Every pillar post still gets
   `pillar: true` + `videoQueue: true` per `content-strategy.md` when used.
3. **Technology Basics workhorse** — category complete (100/100 as of
   2026-08-29), no remaining backlog. Not a source right now.
4. **10-category parallel test round (2026-09-20 onward, standing)** —
   the current daily source. `/seo-committee` check completed 2026-09-20
   (modified-approve verdict: real 2026 demand data behind each category,
   validation-batch-first rather than blind 100/category — see
   `roadmap.md` log). Founder confirmed final shape 2026-09-20: **1 post/
   day per category, all 10 running in parallel** (10 posts/day total —
   the existing approved pace, just reallocated to these 10 categories
   instead of pillar). Categories, now flipped to `active` in
   `taxonomy.json`: `ai-future-tech-literacy`, `digital-safety-privacy`,
   `investing-markets-deep-dive`, `business-entrepreneurship-basics`,
   `professional-skills-certifications`, `psychology-human-behavior`,
   `life-skills-etiquette`, `government-schemes-benefits`, `economics`,
   `health-wellness-deep-dive`. Topic list: see the concrete 10-day plan
   below. **Four of these are `ymyl: true`** (`digital-safety-privacy`,
   `investing-markets-deep-dive`, `government-schemes-benefits`,
   `health-wellness-deep-dive`) — hold those posts to the site's YMYL
   sourcing bar (primary sources, no speculative financial/health/legal
   advice framed as certainty).
5. **Anything beyond 1-4**: requires a fresh `/seo-committee` check before
   opening a parked category (17, 19-20, 23, 29-31, 33-43) — do not invent
   topics past the real backlog below without either topping up
   `pillar-topics.md` (same
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

### 2026-09-20 — 10 posts (pillar) — **SUPERSEDED, never written**

This batch was the plan before the 10-category round got moved up to
start the same day (2026-09-20) instead of 2026-09-22 — see that section
below for what actually shipped today (Day 1 of the 10-category round,
10 posts, `main@d08d552`). Kept here for the record, not as a backlog —
these specific pillar topics remain unused in `pillar-topics.md` if pillar
becomes a priority again later.

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

### 2026-09-21 — 10 posts (pillar, exhausts the current queue) — **SUPERSEDED, will not be written**

2026-09-21 is now **Day 2 of the 10-category round** (see below) — the
daily 10 slots are fully reallocated there, not split between pillar and
the new categories. These pillar topics stay unused in `pillar-topics.md`
for whenever pillar gets picked up again.

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

## 2026-09-20 onward — 10-category parallel test round

**Decided 2026-09-20** (`/seo-committee` modified-approve + founder
confirmation — see `roadmap.md` log for full reasoning). Supersedes the
pillar queue as the daily source: pillar is down to 2 unused topics after
2026-09-21 anyway, so this isn't displacing a healthy queue, it's filling
a gap that was about to open regardless.

**Mechanism**: 10 categories run in parallel, 1 post/day each = 10
posts/day total (same approved pace as always, reallocated). Each
category's day-N topic below is that category's Nth post. **Extended
2026-09-20 (founder call) to a full 30-day/300-post plan** — but the
committee's actual condition (check real signal before committing further,
not 100/category blind) stays in force as two built-in checkpoints rather
than being dropped: **stop and re-check indexed ratio/avg position at day
10 and again at day 20** before the orchestrator continues into the next
10-day block. This isn't optional bookkeeping — it's the difference between
this being a validated rollout and a repeat of the reversed 20-posts/day
mistake at 30-day scale.

**Video/Short pick**: rotates one category per day (below) so all 10 get
covered once across the round, instead of no pillar post being available
to feed `daily-video`.

**Sourcing bar**: `digital-safety-privacy`, `investing-markets-deep-dive`,
`government-schemes-benefits`, `health-wellness-deep-dive` are `ymyl: true`
— primary sources required, no speculative financial/health/legal claims
stated as certainty, per standing site rules.

**Bonus/test batch — shipped manually 2026-09-20, NOT counted as Day 1**
(founder-requested same-day pipeline test, ahead of tomorrow's automated
start): 10 posts written, one per category — "What Artificial Intelligence
Actually Means," "How Password Managers Actually Protect You," "How the
Stock Market Actually Works," "How to Actually Validate a Business Idea
Before Building It," "What Project Management Certification Actually
Teaches You," "How Memory Actually Forms and Fades," "How to Actually Have
a Difficult Conversation," "How Unemployment Benefits Actually Get
Calculated," "How Inflation Actually Erodes Purchasing Power," "How Sleep
Cycles Actually Affect Recovery." Each with a real hand-authored SVG
diagram, real institutional sources (NIST, CISA/NIST 800-63B, SEC/FINRA,
SBA/SCORE, PMI/BLS, NIH, Harvard PON, DOL, BLS/Fed, NIH/CDC). Each category
also got its own `{category}-subtopics.md` topic-plan doc (per
`author-voice-guide.md`'s per-category-plan requirement), covering a full
30-topic round. eslint/tsc/full `npm run build` all clean (821 posts
total), `main@d08d552`, confirmed live. **Real, live, permanent content —
just not the official Day 1 of the 30-day/300-post plan**, per founder
call 2026-09-20: keep it as bonus coverage, run a fresh Day 1 with
different topics so nothing in the numbered plan duplicates it.

**Day 1 (official) — shipped 2026-09-20, `main@4bb07e6`.** Row 1 below
replaced with fresh topics (none overlapping the bonus batch above or any
other row in this table). All 10 posts written with real hand-authored
SVG diagrams and real institutional sources (CISA/NIST, SEC/FINRA/SIPC,
SBA/SCORE, U.S. Dept. of Labor/PMI, NIH/APA, Harvard PON, U.S. Dept. of
State, Federal Reserve, NIH/CDC). eslint/tsc/full `npm run build` all
clean (831 posts total), confirmed live. Days 2-30 run automatically
starting tomorrow.

**Day 2 — shipped 2026-09-21 (Monday 7pm orchestrator run).** Row 2
below, one post per category. Real hand-authored SVG diagrams and real
institutional sources (NIST/Stanford HAI, CISA/NIST 800-63B, SEC
Investor.gov/FINRA, SBA/SCORE, BLS/PMI, APA Dictionary of Psychology,
Harvard PON, SSA, BEA/BLS, MedlinePlus/APA). Each new post links out to
≥3 existing live posts; additionally, 19 older posts (same-category
siblings plus topically related cross-category posts) were edited to
link back in to today's new posts, addressing the "discovered — not
indexed" lever directly rather than only the outbound direction.
Checked all 10 topics against both existing Learning Paths (Job Search &
Interview Readiness, Electrician) — no genuine fit for any, so no course
edits made (per the don't-force-a-weak-fit rule). eslint/tsc/registry/
full `npm run build` all clean (841 posts total). Pushed straight to
`main` per standing policy. Day 3 resumes automatically tomorrow.

**2026-09-22 — off-schedule, NOT counted as Day 3** (`main@4abb35d`,
labeled "Day 3" in its commit message, which was wrong — flagged here per
the 2026-09-20 bonus-batch precedent). An earlier session that day wrote
10 posts in already-active categories 01/general-science, 09/health,
13/technology-basics (El Niño/La Niña, nor'easter, parasite host
manipulation, bear hibernation fat, tidal locking, bruise healing,
collarbone fractures, cruise-ship illness spread, file deletion, internet
outage cascades) instead of this table's row 3. Real, live, permanent
content, kept as-is — not discarded — but it doesn't advance the
10-category round. This table's Log section also never got updated that
day (roadmap.md's Log section didn't either) — a real logging gap, not
just a schedule miss; noted so it isn't silently repeated. **Row 3 below
still had not shipped as of end of day 2026-09-22.**

**Day 3 — shipped 2026-09-23** (`main@9bb4395`), row 3 below, finished
manually after a stalled content agent (see `roadmap.md` Log).

**2026-09-24 — no content shipped.** The 7pm orchestrator run hung at
startup and was killed by the watchdog twice (exit 125). Per the
orchestrator's pace rule the missed row is not doubled up; the round just
runs one day later.

**Day 4 — shipped 2026-09-25** (7pm orchestrator run), row 4 below, one
post per category, titles matching the row exactly. Hand-authored SVG
diagrams, institutional sources (Google MLCC/Stanford CS231n/MIT, FTC/EFF/
NIST, SEC Investor.gov/IRS, SBA/IRS/Cornell LII, Agile Manifesto/Scrum
Guide, APA/Nickerson 1998/Lord-Ross-Lepper 1979, Purdue OWL/plainlanguage
.gov, IRS, OpenStax, AHA/MedlinePlus/Harvard Health), 10-question quiz bank
on each. 21 older posts got an inbound `seeAlso` link to one of today's
posts. Course mapping checked for all 10: the LLC post was added to the
Electrician course (self-employed paperwork section); none of the others
had a genuine fit.

**Schedule slip, noted so the checkpoint isn't misread:** with Sep 24
missed, row N now lands on 2026-09-21 + N (row 5 = Sep 26, row 10 = Oct 1).
Checkpoint 1 is tied to *row 10*, so it moves from 2026-09-29 to
2026-10-01; checkpoint 2 and the end-of-round dates slip by the same 2 days.

| # | ai-future-tech-literacy | digital-safety-privacy | investing-markets-deep-dive | business-entrepreneurship-basics | professional-skills-certifications | psychology-human-behavior | life-skills-etiquette | government-schemes-benefits | economics | health-wellness-deep-dive |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | How AI Actually Differs From Traditional Software — **Short pick** | How Antivirus Software Actually Detects Threats | What a Brokerage Account Actually Is | What Working Capital Actually Means for a Business | What a Certificate Actually Differs From a Certification | How Cognitive Load Actually Affects Decision-Making | How to Actually Build Rapport Quickly | How to Actually Renew a Passport or National ID | What Fiscal Policy Actually Means vs. Monetary Policy | How the Lymphatic System Actually Works |
| 2 | How Large Language Models Actually Work | What Two-Factor Authentication Actually Does — **Short pick** | What a Mutual Fund Actually Is | What a Business Plan Actually Needs to Include | How to Actually Choose Between Competing Certifications | What Cognitive Dissonance Actually Feels Like | What Active Listening Actually Looks Like in Practice | What Social Security Actually Pays Out and When | What GDP Actually Measures | What Cortisol Actually Does to the Body Under Stress |
| 3 | Machine Learning vs Deep Learning Explained | How Phishing Scams Actually Work | Stocks vs Bonds: What Actually Differs — **Short pick** | How Small Business Loans Actually Work | What a CompTIA Security+ Certification Actually Covers | How Habits Actually Get Built in the Brain | How to Actually Set Boundaries Without Guilt | How to Actually Apply for Government Assistance Programs | How Interest Rates Actually Get Set | How Intermittent Fasting Actually Affects Metabolism |
| 4 | What a Neural Network Actually Does | What a VPN Actually Protects You From | How Dividend Investing Actually Works | What an LLC Actually Protects You From — **Short pick** | How Agile and Scrum Actually Differ | What Confirmation Bias Actually Does to Decision-Making | What Professional Email Etiquette Actually Requires | What Tax Credits Actually Differ From Tax Deductions | What Supply and Demand Actually Predicts | What Resting Heart Rate Actually Reveals About Fitness |
| 5 | How AI Image Generators Actually Create Pictures | How Data Breaches Actually Happen | What an Index Fund Actually Tracks | How to Actually Price a Product or Service | What a PMP Certification Actually Requires — **Short pick** | How Social Proof Actually Influences Behavior | How to Actually Negotiate a Better Price | How Public Health Insurance Programs Actually Work | How a Recession Actually Gets Defined | How Meditation Actually Changes the Brain |
| 6 | What AI Hallucination Actually Means | What End-to-End Encryption Actually Means | How Compound Interest Actually Builds Wealth Over Time | What Cash Flow Actually Means for a Small Business | How Cloud Certifications Actually Boost a Resume | What the Placebo Effect Actually Reveals About the Mind — **Short pick** | What Table Manners Actually Matter Today | What Disability Benefits Actually Require to Qualify | What the Federal Reserve Actually Does | What Macronutrients Actually Do in the Body |
| 7 | How AI Chatbots Are Trained | How Identity Theft Actually Starts | What a Bull Market vs Bear Market Actually Means | How to Actually Find Your First Customers | What Google Analytics Certification Actually Verifies | How Procrastination Actually Works in the Brain | How to Actually Apologize in a Way That Lands — **Short pick** | How Student Loan Forgiveness Programs Actually Work | How Tariffs Actually Affect Prices | How Chronic Stress Actually Damages Long-Term Health |
| 8 | What Prompt Engineering Actually Is | What Public Wi-Fi Risks Actually Are | How Diversification Actually Reduces Risk | What a Business License Actually Requires | How to Actually Prepare for a Certification Exam | What Imposter Syndrome Actually Is | What Small Talk Is Actually For | What Housing Assistance Programs Actually Offer — **Short pick** | What Minimum Wage Debates Actually Center On | What Burnout Actually Is, Medically |
| 9 | AI Agents Explained: What Makes Them Different From Chatbots | How Ransomware Actually Infects a Device | What an IPO Actually Is | How Profit Margin Actually Gets Calculated | What Continuing Education Credits Actually Require | How First Impressions Actually Form So Fast | How to Actually Disagree Without Being Disagreeable | How Small Business Government Grants Actually Get Awarded | How Unemployment Rate Actually Gets Calculated — **Short pick** | How Hydration Actually Affects Physical Performance |
| 10 | How to Tell If Content Was AI-Generated | What Your Digital Footprint Actually Reveals | How Interest Rate Changes Actually Affect Investments | What Makes a Side Hustle Different From a Real Business | How Certifications Actually Compare to a College Degree | What Emotional Intelligence Actually Means | What Digital Etiquette Actually Means in Group Chats | What Veterans Benefits Actually Include | What Economic Indicators Actually Signal | What Gut Health Actually Means and Why It Matters — **Short pick** |

**🛑 CHECKPOINT 1 — after day 10 (2026-09-29):** re-check indexed ratio and
avg position against the 2026-09-20 baseline (40.1% / 62.7). Real movement
on both → continue to days 11-20. No movement or it got worse → stop, bring
it back to `/seo-committee` before continuing. Do not auto-continue past
this day without doing the check.

| # | ai-future-tech-literacy | digital-safety-privacy | investing-markets-deep-dive | business-entrepreneurship-basics | professional-skills-certifications | psychology-human-behavior | life-skills-etiquette | government-schemes-benefits | economics | health-wellness-deep-dive |
|---|---|---|---|---|---|---|---|---|---|---|
| 11 | What Generative AI Actually Generates (vs. Retrieves) — **Short pick** | How SIM Swapping Actually Steals Your Number | What a Robo-Advisor Actually Does | How to Actually Write a One-Page Business Plan | What a Six Sigma Certification Actually Teaches | How Cognitive Behavioral Therapy Actually Works | How to Actually Read a Room in a Social Setting | How Medicare Actually Differs From Medicaid | How Stagflation Actually Differs From a Normal Recession | How Circadian Rhythm Actually Regulates Your Body |
| 12 | How AI Voice Cloning Actually Works | What a Firewall Actually Blocks — **Short pick** | How Real Estate Investment Trusts Actually Work | What a Sole Proprietorship Actually Exposes You To | How Microsoft Certifications Actually Compare to Google's | What the Bystander Effect Actually Reveals | What Wedding Guest Etiquette Actually Requires | What SNAP (Food Stamp) Benefits Actually Cover | What the National Debt Actually Means for Everyday People | What Inflammation Actually Does, Good and Bad |
| 13 | What an AI Model's "Training Data" Actually Consists Of | How Browser Cookies Actually Track You | What Dollar-Cost Averaging Actually Smooths Out — **Short pick** | How Business Credit Actually Differs From Personal Credit | What a CPA License Actually Requires | How Groupthink Actually Overrides Individual Judgment | How to Actually Handle Constructive Criticism | How to Actually Appeal a Denied Benefits Claim | How Currency Exchange Rates Actually Get Set | How Antioxidants Actually Work in the Body |
| 14 | How Self-Driving Cars Actually "See" the Road | What Zero-Day Vulnerabilities Actually Are | How Options Trading Actually Differs From Stock Trading | What Break-Even Analysis Actually Calculates — **Short pick** | How Online Bootcamp Certificates Actually Compare to Degrees | What Attachment Styles Actually Predict | What Tipping Etiquette Actually Covers by Situation | What Earned Income Tax Credit Actually Requires | What a Trade Deficit Actually Measures | What Metabolic Rate Actually Depends On |
| 15 | What AI Bias Actually Comes From | How Social Engineering Scams Actually Manipulate People | What a P/E Ratio Actually Tells You | How to Actually Register a Trademark | What ITIL Certification Actually Covers — **Short pick** | How the Dunning-Kruger Effect Actually Shows Up | How to Actually Write a Thank-You Note That Lands | How Workers' Compensation Actually Works | How Monopolies Actually Form and Get Regulated | How Muscle Recovery Actually Happens After Exercise |
| 16 | How Recommendation Algorithms Actually Learn Your Taste | What a Data Broker Actually Sells | How Cryptocurrency Actually Gets Valued | What a Non-Compete Agreement Actually Restricts | How to Actually List Certifications on a Resume | What Gaslighting Actually Does Psychologically — **Short pick** | What Phone Etiquette Actually Means in Meetings | What Section 8 Housing Vouchers Actually Cover | What Opportunity Cost Actually Means in Practice | What the Gut-Brain Connection Actually Involves |
| 17 | What the Turing Test Actually Measures | How Incognito Mode Actually (and Doesn't) Protect You | What a 401(k) Match Actually Means for Your Return | How Franchise Ownership Actually Works | What a CFA Charter Actually Requires | How Delayed Gratification Actually Gets Measured | How to Actually Introduce Two People Properly — **Short pick** | How to Actually Apply for a Small Business Grant | How Quantitative Easing Actually Works | How Blood Sugar Spikes Actually Affect Energy and Mood |
| 18 | How AI Translation Actually Handles Idioms | What Biometric Security Actually Risks | How Short Selling Actually Works | What Bootstrapping Actually Means for a Startup | How HR Certifications Actually Differ (SHRM vs. HRCI) | What the Halo Effect Actually Distorts | What Houseguest Etiquette Actually Expects | What COBRA Health Coverage Actually Costs — **Short pick** | What Economic Recession Indicators Actually Look Like | What Autoimmune Conditions Actually Are |
| 19 | What Edge AI Actually Means | How Credential Stuffing Attacks Actually Work | What an ETF Actually Is (vs. a Mutual Fund) | How to Actually Pitch to Investors | What a Data Analyst Certification Actually Tests | How Trauma Actually Changes the Brain | How to Actually Decline an Invitation Gracefully | How Child Tax Credit Actually Gets Calculated | How Wage Growth Actually Compares to Inflation — **Short pick** | How Vitamin D Actually Gets Synthesized From Sunlight |
| 20 | How AI Detects Deepfakes | What a Security Breach Notification Actually Means for You | How Market Volatility Actually Gets Measured | What Equity Actually Means When You Give It Away | How to Actually Choose a Certification Worth the Cost | What Intrinsic vs. Extrinsic Motivation Actually Differ In | What Workplace Etiquette Actually Differs From Social Etiquette | What FAFSA Actually Determines | What the Gig Economy Actually Changed About Labor Markets | What REM Sleep Actually Does for the Brain — **Short pick** |

**🛑 CHECKPOINT 2 — after day 20 (2026-10-09):** same check as checkpoint
1, against whatever the numbers were at checkpoint 1 this time (real
week-over-week movement, not just vs. the original baseline). Same rule:
no movement → stop, back to committee, don't auto-continue into days
21-30.

| # | ai-future-tech-literacy | digital-safety-privacy | investing-markets-deep-dive | business-entrepreneurship-basics | professional-skills-certifications | psychology-human-behavior | life-skills-etiquette | government-schemes-benefits | economics | health-wellness-deep-dive |
|---|---|---|---|---|---|---|---|---|---|---|
| 21 | What Reinforcement Learning Actually Rewards — **Short pick** | How Malware Actually Gets Onto a Device | What a Roth vs. Traditional IRA Actually Differ In | How Payroll Taxes Actually Work for a Small Business | What Scrum Master Certification Actually Involves | How Anchoring Bias Actually Skews Decisions | How to Actually Handle a Job Interview Handshake and First Impression | How to Actually Qualify for Disaster Relief Assistance | How Housing Market Bubbles Actually Form | How Chronic Pain Actually Differs From Acute Pain |
| 22 | How Robotics and AI Actually Differ | What Multi-Device Encryption Actually Syncs — **Short pick** | How Dividend Reinvestment Actually Compounds | What a Business Partnership Agreement Actually Needs | How Real Estate Licensing Actually Works | What Emotional Regulation Actually Involves | What Dining Etiquette Actually Signals About You | What Paid Family Leave Programs Actually Cover by State | What Universal Basic Income Debates Actually Center On | What Adaptogens Actually Claim to Do (and the Evidence) |
| 23 | What an AI "Context Window" Actually Limits | How QR Code Scams Actually Work | What a Stock Split Actually Changes — **Short pick** | How to Actually Calculate Customer Acquisition Cost | What a UX Design Certificate Actually Teaches | How Personality Tests Actually (and Don't) Predict Behavior | How to Actually Give Directions Clearly | How Public Pension Systems Actually Work | How Government Subsidies Actually Distort Prices | How Aerobic vs. Anaerobic Exercise Actually Differ |
| 24 | How AI Actually Handles Ambiguous Questions | What a Digital Will Actually Protects | How Bond Yields Actually Move With Interest Rates | What Bankruptcy Actually Means for a Small Business — **Short pick** | How Continuing Legal Education Actually Works | What the Mere-Exposure Effect Actually Does | What Gift-Giving Etiquette Actually Requires Across Cultures | What Energy Assistance Programs (LIHEAP) Actually Offer | What Purchasing Power Parity Actually Compares | What Hormesis Actually Means for Health |
| 25 | What Synthetic Data Actually Is | How Parental Controls Actually Filter Content | What Dollar-Cost Timing Mistakes Actually Cost Investors | How to Actually Build a Brand From Scratch | What Makes a Certification "Industry-Recognized" — **Short pick** | How Grief Actually Progresses Psychologically | How to Actually Ask for Help Without Feeling Awkward | How to Actually Dispute a Social Security Overpayment | How Automation Actually Affects Employment Numbers | How Fasting Actually Triggers Autophagy |
| 26 | How AI Copyright Disputes Actually Get Argued | What Dark Web Monitoring Actually Finds | How Hedge Funds Actually Differ From Mutual Funds | What a Non-Disclosure Agreement Actually Protects | How to Actually Negotiate a Raise After Certifying | What Self-Sabotage Actually Looks Like — **Short pick** | What Elevator and Small-Space Etiquette Actually Involves | What Immigration Benefits Actually Require to Apply | What a Black Market Actually Does to an Economy | What the Immune System Actually Does When You're Sick |
| 27 | What Quantum Computing Actually Changes About AI | How Secure Messaging Apps Actually Differ From Regular Texting | What Capital Gains Tax Actually Applies To | How Inventory Management Actually Affects Cash Flow | What a Supply Chain Certification Actually Covers | How Mirror Neurons Actually Relate to Empathy | How to Actually End a Conversation Politely — **Short pick** | How Veterans' Education Benefits (GI Bill) Actually Work | How Central Banks Actually Control Money Supply | How Posture Actually Affects Long-Term Health |
| 28 | How AI Actually Powers Search Engines Now | What a Man-in-the-Middle Attack Actually Intercepts | How Market Corrections Actually Differ From Crashes | What Outsourcing Actually Saves (and Costs) | How Teaching Certifications Actually Differ by State | What Learned Helplessness Actually Is | What Funeral and Condolence Etiquette Actually Requires | What Property Tax Relief Programs Actually Offer Seniors — **Short pick** | What Income Inequality Actually Gets Measured By | What Electrolytes Actually Do During Exercise |
| 29 | What "AI Alignment" Actually Means | How Password Breaches Actually Get Detected | What Asset Allocation Actually Means for Risk | How to Actually Exit or Sell a Small Business | What a Financial Planning Certification (CFP) Actually Requires | How Nostalgia Actually Affects Mood | How to Actually Handle a Conflict With a Neighbor | What Makes an Economy Actually "Healthy" | How Globalization Actually Changed Manufacturing Jobs — **Short pick** | How Screen Time Actually Affects Sleep Quality |
| 30 | How to Actually Spot an AI Scam Call | What Digital Estate Planning Actually Covers | How to Actually Read a Stock Chart | What Makes a Business "Scalable" vs. Just Busy | How to Actually Keep a Certification Current | What Makes a Habit Actually Stick Long-Term | What Makes Someone Actually Good Company | What Government Shutdown Actually Means for Benefits | What Economic Indicators Actually Signal | What Longevity Research Actually Says About Aging — **Short pick** |

**After day 30 (2026-10-19)**: full round complete, 300 posts, each of the
10 categories at 30/300. Re-check indexed ratio/avg position one more time
against checkpoint 2 before deciding whether any category is ready to
extend toward the full 100 originally floated — that decision goes back to
`/seo-committee`, same as opening these categories did in the first place.

**Old replenishment note (superseded by the above, kept for context):**
Only 2 real topics remain unused in `pillar-topics.md` after 2026-09-21
(doubling a recipe doesn't scale linearly; 0.999... = 1). Top these up
whenever pillar becomes a priority again — not urgent while the 10-category
round is running.

Don't invent topics past the backlog above without either topping up a
source doc or running a fresh `/seo-committee` check — that's exactly the
drift this doc exists to prevent.
