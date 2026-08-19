import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
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
  title: "Rivers & Major Watersheds",
  category: "geography-world-facts",
  order: 4,
  subtopic: "physical-geography",
  tags: ["rivers", "watersheds", "physical geography", "water cycle"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How a watershed decides where every drop of rain ends up, and why the Amazon carries more water than the next several biggest rivers combined.",
  summary: "A watershed is the entire area of land that drains into a given river, meaning a river's size depends less on its length than on how much land — and how much rainfall — feeds into it.",
  sources: [
    { label: "USGS — Watershed Basics", url: "https://www.usgs.gov/special-topics/water-science-school/science/watersheds-and-drainage-basins" },
    { label: "National Geographic — Watershed", url: "https://education.nationalgeographic.org/resource/watershed/" },
    { label: "NOAA — The Water Cycle", url: "https://www.noaa.gov/education/resource-collections/freshwater/water-cycle" },
  ],
  seeAlso: [
    "geography-world-facts/continents-and-oceans-overview",
    "general-science-facts/water-cycle-and-oceans",
    "geography-world-facts/mountains-and-mountain-ranges",
  ],
  glossary: [
    { term: "Watershed", definition: "The entire area of land that drains rainfall and snowmelt into a particular river, lake, or other body of water — also called a drainage basin or catchment." },
    { term: "Tributary", definition: "A smaller stream or river that flows into a larger one, rather than directly into the sea." },
    { term: "Drainage divide", definition: "The high ground — often a mountain ridge — that separates two neighboring watersheds, determining which side's rain flows into which river system." },
    { term: "Discharge", definition: "The volume of water flowing past a point in a river over time, usually measured in cubic meters per second — the standard way to compare how 'big' rivers really are." },
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
          "A watershed is all the land that drains into a given river — every drop of rain that falls inside it eventually reaches the same waterway, unless it evaporates or soaks too deep to resurface.",
          "River 'size' is usually measured by discharge (volume of water flowing per second), not length — the Amazon is shorter than the Nile but carries roughly ten times more water than any other river on Earth.",
          "Watersheds are separated by drainage divides, usually mountain ridges — which side of the ridge a raindrop falls on can determine whether it eventually reaches a completely different ocean.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/rivers-and-major-watersheds">watershed</TermLink> is all the land where rain and snowmelt drain toward the same river system. Picture a funnel: rain that falls anywhere inside the funnel&apos;s rim eventually flows to the same spout. A river&apos;s watershed can be enormous — the Amazon&apos;s covers about 40% of South America — because every stream and tributary feeding into it, however far upstream, is technically part of the same system.</div>}
        detailed={<div className="prose-p">Watersheds (also called drainage basins or catchments) are separated from their neighbors by <TermLink href="/geography-world-facts/rivers-and-major-watersheds">drainage divides</TermLink> — usually mountain ridges or high ground, where rain falling on one side flows toward one river system and rain falling on the other side flows toward a completely different one, potentially reaching a different ocean entirely. In North America, the Continental Divide running through the Rocky Mountains does exactly this: water falling on its western slopes generally flows toward the Pacific, while water on its eastern slopes flows toward the Atlantic or the Gulf of Mexico. Rivers are usually compared by <TermLink href="/geography-world-facts/rivers-and-major-watersheds">discharge</TermLink> rather than length, because discharge reflects the actual volume of water moving — a function of watershed size, rainfall, and climate — while length alone says little about a river&apos;s real hydrological power. This is why the Amazon, despite being roughly 800 km shorter than the Nile, carries an estimated 209,000 cubic meters of water per second at its mouth — more than the next seven largest rivers on Earth combined.</div>}
      />
      <FootnoteAside>The Amazon River has no bridges crossing its main stem for its entire length through Brazil — the river and surrounding rainforest make bridge-building so difficult that ferries remain the primary crossing method even today.</FootnoteAside>

      <p>
      Once you&apos;re thinking in terms of watersheds rather than rivers alone, a lot of geography that seemed arbitrary — why certain borders run where they do, why some regions flood and others don&apos;t — starts making a lot more sense.
      </p>

      <QuickCheck
        question="Two raindrops fall a few meters apart, exactly on opposite sides of a mountain ridge that forms a drainage divide. What's the most likely outcome?"
        options={[
          { text: "Both raindrops will end up in the same river, since they fell so close together", correct: false, explanation: "Proximity doesn't matter once a drainage divide is crossed — the ridge itself is the deciding factor, not distance between the two drops." },
          { text: "The two raindrops could end up flowing toward completely different rivers, and potentially different oceans", correct: true, explanation: "Correct. This is exactly what a drainage divide does — it's the line where the direction of water flow flips, regardless of how close two points are on either side of it." },
          { text: "Both raindrops will evaporate before reaching any river, since they're near a mountain peak", correct: false, explanation: "Some water does evaporate, but the general principle of drainage divides holds regardless — the water that doesn't evaporate follows the slope on whichever side it fell." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Amazon watershed (baseline case)</h3>
      <div className="prose-p">
      The Amazon basin covers roughly 7 million square kilometers — about 40% of South America — spanning Brazil, Peru, Colombia, and several other countries. Thousands of tributaries feed into it, including the Rio Negro and the Madeira, each with their own smaller sub-watersheds. Because the basin sits in an extremely high-rainfall tropical region, the sheer combination of watershed size and rainfall volume is what gives the Amazon its record-breaking discharge, not its length.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Nile — long river, comparatively modest discharge (edge case)</h3>
      <div className="prose-p">
      The Nile is generally considered the longest river in the world at roughly 6,650 km (a few studies argue the Amazon is slightly longer depending on how its source is measured, making this a genuinely contested title). But its watershed passes through arid and semi-arid regions for much of its course, so its average discharge is only around 2,800 cubic meters per second — a small fraction of the Amazon&apos;s. It&apos;s a clear illustration that &quot;longest&quot; and &quot;biggest&quot; measure two different things entirely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why watershed boundaries affect real infrastructure decisions (real-world case)</h3>
      <div className="prose-p">
      City and regional planners use watershed maps directly when deciding where to build reservoirs, where floodwater is likely to go, and how pollution released upstream will spread. A factory that dumps waste into a stream affects every community downstream in the same watershed, no matter how far away — which is why water-quality regulation is frequently organized by watershed/basin authority rather than by political boundary, since rivers don&apos;t respect state or national borders.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A watershed: rain, ridges, and where the water goes"
        type="flow"
        svgSrc="/diagrams/rivers-and-major-watersheds-diagram.svg"
        altText="Cross-section diagram of two mountain slopes meeting at a ridge (the drainage divide), with rain falling on each side flowing downhill in opposite directions into two separate river systems, each collecting smaller tributary streams as it flows toward its own outlet."
      />
      <p>
      Notice both slopes collect many small tributary streams before reaching the main river — a watershed isn&apos;t one channel, it&apos;s an entire branching network that funnels down to a single outlet.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the longest river is automatically the 'biggest' river.", fix: "Compare discharge (water volume per second), not just length — the two rankings often disagree, as with the Nile and the Amazon." },
          { mistake: "Thinking a watershed is just the river itself.", fix: "Remember a watershed includes the entire surrounding land area that drains into the river — often thousands of times larger than the river's own surface area." },
          { mistake: "Assuming pollution or events upstream stay 'local.'", fix: "Anything entering a river anywhere in its watershed affects everything downstream, which is why watershed-wide thinking matters for water management." },
        ]}
      />
      <MisconceptionCallout
        myth="Rivers always flow south, toward the equator."
        reality={<p>River flow direction depends entirely on the slope of the land, which has nothing to do with which hemisphere or latitude it&apos;s in. The Nile, one of the world&apos;s most famous rivers, actually flows north — from its sources near the equator in East Africa down to the Mediterranean Sea. Direction is a function of topography, not geography&apos;s compass points.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert river discharge to daily water volume"
        fields={[
          { key: "dischargeCubicMPerSec", label: "Discharge (cubic meters per second)", defaultValue: 209000 },
        ]}
        resultLabel="Total water discharged per day (cubic meters)"
        formula="riverDailyDischarge"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up which watershed you live in and which body of water it ultimately drains into — most water authorities publish these maps publicly.",
          "Next time you cross a mountain pass or a notably high ridge on a road trip, consider you may be crossing a drainage divide between two entirely different river systems.",
          "Check where your local river's discharge ranks compared to famous rivers like the Amazon or Nile — it recalibrates what 'big river' really means.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a watershed?", answer: "The entire area of land where rain and snowmelt drain into the same river, lake, or other body of water — sometimes called a drainage basin or catchment." },
          { question: "What is the biggest river in the world?", answer: "By discharge (water volume), the Amazon is by far the largest, carrying more water than the next several biggest rivers combined. By length, the Nile and Amazon are close contenders, with the Nile traditionally cited as slightly longer, though some studies dispute this." },
          { question: "Can two nearby rivers flow into completely different oceans?", answer: "Yes — this happens whenever a drainage divide (usually a mountain ridge) separates their watersheds, sending water on each side toward a different river system and potentially a different ocean entirely." },
          { question: "Does pollution upstream affect people far downstream?", answer: "Yes, significantly — anything entering a river anywhere within its watershed travels downstream and can affect water quality for every community along the way, regardless of political borders." },
          { question: "Why does the Nile flow north?", answer: "River flow direction is determined by the slope of the land, not by compass direction or hemisphere — the Nile's watershed slopes downward from its highland sources in East Africa toward the Mediterranean Sea in the north." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
