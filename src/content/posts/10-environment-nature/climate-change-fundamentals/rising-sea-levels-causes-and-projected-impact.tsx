import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Rising Sea Levels: Causes & Projected Impact",
  category: "environment-nature",
  order: 5,
  subtopic: "climate-change-fundamentals",
  tags: ["sea level rise", "thermal expansion", "ice sheet melt", "coastal flooding", "NOAA"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Sea levels are rising for two combined reasons: warming ocean water physically expands, and melting land ice adds new water — NOAA satellite data measures the current global average rate directly.",
  summary: "Global sea level rise comes from two combined physical mechanisms — thermal expansion of warming ocean water and the addition of new water from melting land-based ice sheets and glaciers — and satellite altimetry currently measures the global average rate at a little over 4 millimeters per year, an increase from a slower rate throughout most of the 20th century.",
  sources: [
    { label: "NOAA — Climate.gov: Understanding Sea Level Rise", url: "https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level" },
    { label: "NASA — Sea Level Change Portal", url: "https://sealevel.nasa.gov/" },
    { label: "IPCC — Sixth Assessment Report, Working Group I, Chapter 9 (Ocean, Cryosphere and Sea Level Change)", url: "https://www.ipcc.ch/report/ar6/wg1/" },
  ],
  seeAlso: [
    "environment-nature/what-causes-climate-change-human-driven-mechanisms",
    "environment-nature/ocean-acidification-explained",
    "environment-nature/extreme-weather-and-the-climate-change-connection",
  ],
  glossary: [
    {"term":"Thermal expansion","definition":"The physical tendency of water (and most substances) to increase in volume as it warms, which by itself raises sea level even without any added water."},
    {"term":"Ice sheet","definition":"A massive, continuous body of land-based glacial ice covering more than 50,000 square kilometers — Earth has two, covering Greenland and Antarctica — distinct from floating sea ice, whose melting doesn't directly raise sea level."},
    {"term":"Satellite altimetry","definition":"A measurement technique using satellites to precisely track the height of the ocean surface from orbit, providing a continuous, global record of sea level change since 1993."},
    {"term":"Nuisance flooding","definition":"Minor, non-catastrophic coastal flooding during high tides that doesn't require a storm, but has become measurably more frequent in many coastal US cities as the baseline sea level has risen."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Global sea level rise comes from two combined mechanisms: thermal expansion of warming ocean water, and new water added from melting land-based ice sheets and glaciers — floating sea ice melting doesn't directly add to sea level.",
      "NOAA satellite altimetry measures global average sea level rise at a little over 4 millimeters per year currently, roughly double the average rate measured through most of the 20th century.",
      "A rising baseline sea level doesn't need a storm to cause problems — many US coastal cities have documented a sharp rise in 'nuisance flooding' during ordinary high tides as the baseline creeps upward.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Sea levels rise for two reasons happening at once: warmer ocean water takes up more physical space (the same way most liquids expand when heated), and melting glaciers and ice sheets on land add genuinely new water to the ocean that wasn&apos;t there before. NOAA&apos;s satellite measurements, tracking the ocean surface continuously since 1993, currently show global average sea level rising by a little over 4 millimeters every year.</div>}
      detailed={<div className="prose-p"><TermLink href="/environment-nature/rising-sea-levels-causes-and-projected-impact">Thermal expansion</TermLink> and land ice melt each contribute roughly comparable shares to current sea level rise, per NASA and IPCC assessments, though the ice-melt share has been growing as <TermLink href="/environment-nature/rising-sea-levels-causes-and-projected-impact">ice sheet</TermLink> loss from Greenland and Antarctica has accelerated in recent decades. This is an important distinction from floating sea ice (like much of the Arctic ice cap), which displaces its own weight in water while frozen and therefore doesn&apos;t meaningfully change sea level when it melts — the same physical principle as ice cubes melting in a full glass of water without overflowing it. <TermLink href="/environment-nature/rising-sea-levels-causes-and-projected-impact">Satellite altimetry</TermLink> is what makes the modern measurement so precise: rather than relying only on scattered coastal tide gauges (which can be affected by local land subsidence or uplift), satellites measure the true global ocean surface height directly from orbit, cross-checked against tide gauge records for consistency.</div>}
      />
      <FootnoteAside>Land can also rise or sink independently of the ocean — some coastal areas, like parts of Louisiana and the Chesapeake Bay region, are experiencing land subsidence (sinking) on top of global sea level rise, compounding the local relative rate well beyond the global average, while a few locations (like parts of Scandinavia, still rebounding from the weight of ice-age glaciers) are seeing relative sea level actually fall slightly despite the global rise.</FootnoteAside>

      <p>
      Distinguishing thermal expansion from ice melt matters because they respond to warming on different timescales, which is part of why sea level rise is projected to continue for centuries even under scenarios where emissions are reduced soon.
      </p>

      <QuickCheck
      question="If a large amount of floating Arctic sea ice melted completely, how much would that directly raise global sea level?"
      options={[
      { text: "Significantly, since it represents a massive amount of frozen water entering the ocean", correct: false, explanation: "The size of the ice mass isn't the deciding factor here — what matters is whether the ice was already floating (displacing its own weight in water) or sitting on land (adding genuinely new water when it melts)." },
      { text: "Effectively none, directly — floating sea ice already displaces its own weight in ocean water, the same way ice cubes melting in a full glass don't make it overflow; land-based ice sheets and glaciers are what add new water when they melt", correct: true, explanation: "Correct. This is basic displacement physics (Archimedes' principle) — floating ice already accounts for its own volume in the water it displaces, so its melting doesn't directly change sea level, unlike land ice, which adds water to the ocean system that wasn't there before." },
      { text: "It would lower sea level, since ice is less dense than water", correct: false, explanation: "Ice being less dense than water is exactly why it floats and displaces its own weight rather than its own volume — this is precisely the mechanism that makes floating ice melt sea-level-neutral, not one that would lower sea level." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Projecting rise over a decade at the current measured rate (baseline case)</h3>
      <div className="prose-p">
      At NOAA&apos;s currently measured rate of roughly 4.3 millimeters per year, sea level over a 10-year span would rise by approximately 43 millimeters (about 1.7 inches), assuming the rate stayed constant — which it hasn&apos;t; the rate itself has been accelerating over recent decades as ice sheet melt contributes more.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the rate itself is accelerating, not just the total (edge case / variation)</h3>
      <div className="prose-p">
      NASA&apos;s satellite record shows the annual rate of sea level rise roughly doubling between the early 1990s (about 2.5 mm/year) and the 2020s (over 4 mm/year) — meaning a simple straight-line projection using an early-1990s rate would meaningfully underestimate future rise. This acceleration is attributed largely to faster-than-previously-expected ice sheet loss from Greenland and Antarctica, which is why climate scientists emphasize the accelerating trend, not just a fixed average rate, when discussing long-term projections.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Nuisance flooding becoming routine in coastal US cities (real-world / applied case)</h3>
      <div className="prose-p">
      NOAA&apos;s tide gauge network has documented a sharp, measurable increase in &quot;high-tide flooding&quot; days — minor coastal flooding during ordinary high tides, requiring no storm at all — in numerous US coastal cities over the past few decades. This is a direct, already-observed consequence of a rising baseline sea level: as the average water level creeps upward, tides that once stayed comfortably below flood stage now regularly exceed it, turning what used to be an occasional nuisance into a routine, multiple-times-per-year occurrence in some locations.
      </div>

      <QuickCheck
      question="Why does a straight-line projection of sea level rise using an early-1990s measured rate tend to underestimate future rise?"
      options={[
      { text: "Because the early-1990s measurements were simply inaccurate compared to modern ones", correct: false, explanation: "Satellite altimetry measurements from the early 1990s onward are considered reliable and consistent — the issue isn't measurement error, it's that the underlying physical rate of rise has genuinely accelerated over time." },
      { text: "Because the actual rate of sea level rise has accelerated over recent decades, largely due to faster-than-previously-expected ice sheet loss, so a fixed rate from an earlier period understates the true trajectory", correct: true, explanation: "Correct. NASA's satellite record shows the annual rate roughly doubling from the early 1990s to today — using an outdated, lower historical rate as a constant for future projection would systematically underestimate actual future sea level." },
      { text: "Sea level rise is not actually accelerating, and any apparent acceleration is a data artifact", correct: false, explanation: "The acceleration is a documented feature of the multi-decade satellite altimetry record, not an artifact — it's specifically attributed to increasing contributions from Greenland and Antarctic ice sheet melt as those systems have responded to warming." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Two combined mechanisms behind rising sea level"
      type="comparison"
      svgSrc="/diagrams/environment-nature-rising-sea-levels-causes-and-projected-impact-two-mechanisms.svg"
      altText="Two side-by-side illustrations. The left shows a container of water with a thermometer, labeled thermal expansion, with an arrow showing the water level rising slightly as the water warms, with no water added. The right shows a melting glacier on land dripping new water into an ocean basin, labeled land ice melt, with an arrow showing the water level rising as new water is added, with a separate small note showing floating sea ice melting inside a glass with no water level change."
      />
      <p>
      Both mechanisms raise sea level simultaneously and add together in the official measurement — thermal expansion doesn&apos;t need any new water at all, while land ice melt is entirely about adding water that wasn&apos;t previously part of the ocean.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming melting Arctic sea ice is a major direct driver of sea level rise.", fix: "Floating sea ice melting is close to sea-level-neutral due to displacement — the major ice-related driver is land-based ice sheets and glaciers (Greenland, Antarctica, mountain glaciers) adding genuinely new water." },
      { mistake: "Projecting future sea level rise using a fixed historical rate rather than the current, faster, accelerating rate.", fix: "Use the most recent measured rate and account for documented acceleration, since satellite records show the rate roughly doubling over the past three decades." },
      { mistake: "Assuming sea level rise only matters during major storms.", fix: "Rising baseline sea level causes measurably more frequent 'nuisance' or high-tide flooding even without any storm, as documented in NOAA's tide gauge records for many US coastal cities." },
      ]}
      />
      <MisconceptionCallout
      myth="Sea level rise is a slow, distant problem that won't have noticeable effects for many decades."
      reality={<p>NOAA&apos;s tide gauge data already shows a documented, measurable increase in high-tide (&apos;nuisance&apos;) flooding days in numerous coastal US cities over recent decades, without any storm required — a direct, present-day consequence of the rising baseline, not a purely future concern. The longer-term, larger-scale impacts (significant coastal land loss, infrastructure risk) are projected to compound over coming decades, but measurable effects are already occurring now.</p>}
      />

      <QuickCheck
      question="Is increased coastal flooding purely a future risk from sea level rise, or is it already being observed?"
      options={[
      { text: "Purely future — no measurable coastal flooding increase has occurred yet from sea level rise", correct: false, explanation: "This understates the current data — NOAA's tide gauge network has already documented a real, measurable increase in high-tide flooding frequency in multiple coastal US cities in recent decades." },
      { text: "Already being observed — NOAA's tide gauge data shows increased frequency of high-tide ('nuisance') flooding in many coastal cities now, a direct present-day effect of the rising baseline sea level, on top of larger future risks", correct: true, explanation: "Correct. Rising baseline sea level is already producing measurable, documented effects (more frequent routine high-tide flooding) today, in addition to the larger longer-term risks projected for coming decades." },
      { text: "Coastal flooding frequency has actually decreased in recent decades", correct: false, explanation: "This runs contrary to NOAA's own tide gauge records, which document an increasing trend in high-tide flooding days across numerous monitored US coastal locations." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Project cumulative sea level rise at a given annual rate"
      fields={[
      { key: "rateMmPerYear", label: "Current rate (mm/year)", defaultValue: 4.3, step: 0.1 },
      { key: "years", label: "Number of years", defaultValue: 10 },
      ]}
      resultLabel="Projected cumulative rise (mm)"
      formula="seaLevelRiseMm"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember the two-mechanism model: thermal expansion (no new water needed) plus land ice melt (genuinely new water) together produce the measured rise.",
      "When estimating future sea level, use the current, most recently measured rate rather than an older historical average, since the rate has been accelerating.",
      "Check NASA's Sea Level Change Portal (sealevel.nasa.gov) for the real, continuously updated satellite measurement if you want current figures.",
      "If you live in or care about a coastal area, look up whether local tide gauge data shows increased high-tide flooding frequency — it's often a more tangible local signal than the global average figure.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What causes sea levels to rise?", answer: "Two combined mechanisms: thermal expansion of warming ocean water (water takes up more volume as it warms) and new water added from melting land-based ice sheets and glaciers in Greenland, Antarctica, and mountain ranges worldwide." },
      { question: "Does melting Arctic sea ice raise sea levels?", answer: "Not directly, in any significant way — floating sea ice already displaces its own weight in ocean water, so its melting is close to sea-level-neutral, similar to ice cubes melting in a full glass of water. Land-based ice sheets and glaciers are the ice-related driver that actually adds new water." },
      { question: "How fast is sea level currently rising?", answer: "NOAA satellite measurements currently show global average sea level rising at a little over 4 millimeters per year, roughly double the average rate measured through most of the 20th century, with the rate itself continuing to accelerate." },
      { question: "How do scientists measure global sea level so precisely?", answer: "Primarily through satellite altimetry — satellites have measured the ocean surface height continuously and globally since 1993, cross-checked against coastal tide gauge records for consistency and to detect local land movement effects." },
      { question: "Is sea level rise already causing problems, or is it only a future risk?", answer: "It's already causing measurable effects — NOAA tide gauge data shows increased frequency of minor 'nuisance' or high-tide flooding in many coastal US cities in recent decades, a direct present-day consequence, in addition to larger risks projected for coming decades." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
