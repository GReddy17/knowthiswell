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
  title: "The Five Oceans Explained",
  category: "geography-world-facts",
  order: 41,
  subtopic: "oceans-and-water-geography",
  tags: [
    "five oceans",
    "pacific ocean",
    "atlantic ocean",
    "indian ocean",
    "southern ocean",
    "arctic ocean",
    "ocean geography",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the Pacific, Atlantic, Indian, Southern, and Arctic Oceans are defined, why they're really one connected World Ocean, and why the Southern Ocean is the newest official addition.",
  summary: "Earth has one continuous World Ocean that geographers divide into five named oceans — Pacific, Atlantic, Indian, Southern, and Arctic — by continent boundaries and, for the Southern Ocean, by a current instead of a coastline.",
  sources: [
    { label: "NOAA National Ocean Service — How many oceans are there?", url: "https://oceanservice.noaa.gov/facts/howmanyoceans.html" },
    { label: "National Geographic — There's a new ocean now, officially: the Southern Ocean", url: "https://www.nationalgeographic.com/environment/article/southern-ocean-fifth-ocean-now-recognized" },
    { label: "NOAA — Ocean facts and depth data", url: "https://oceanservice.noaa.gov/facts/" },
    { label: "Encyclopaedia Britannica — Ocean", url: "https://www.britannica.com/science/ocean" },
  ],
  seeAlso: [
    "geography-world-facts/ocean-currents-and-their-effects",
    "geography-world-facts/sea-levels-and-coastlines",
    "geography-world-facts/coral-reefs-and-marine-geography",
    "geography-world-facts/continents-and-oceans-overview",
    "general-science-facts/water-cycle-and-oceans",
  ],
  glossary: [
    { term: "World Ocean", definition: "The single, continuous body of saltwater covering most of Earth's surface, which humans divide by convention into named ocean basins." },
    { term: "Ocean basin", definition: "A large depression in Earth's crust filled with seawater, bounded by continents or, for the Southern Ocean, by a current." },
    { term: "Southern Ocean", definition: "The band of water encircling Antarctica, generally defined as south of 60°S latitude, officially recognized as a fifth ocean by National Geographic in 2021." },
    { term: "Antarctic Circumpolar Current", definition: "The powerful eastward current that flows unbroken around Antarctica, forming the natural boundary used to define the Southern Ocean." },
    { term: "Continental shelf", definition: "The gently sloping, shallow edge of a continent that extends underwater before dropping off into the deep ocean floor." },
    { term: "Challenger Deep", definition: "The deepest known point in Earth's oceans, located in the Mariana Trench in the western Pacific, at roughly 10,935 meters (35,876 feet) below the surface." },
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
          "There is really only one continuous body of saltwater on Earth — the 'five oceans' are a human naming convention laid over a single connected World Ocean, split by continents.",
          "The Pacific is the largest ocean by a wide margin (about 165 million km², bigger than all of Earth's land combined), while the Arctic is the smallest at roughly 14 million km².",
          "The Southern Ocean is the newest addition to the list — defined not by a coastline but by the Antarctic Circumpolar Current, and only formally recognized as a fifth ocean by National Geographic in 2021.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Earth&apos;s oceans are usually named as five: the <TermLink href="/geography-world-facts/the-five-oceans-explained">Pacific</TermLink>, Atlantic, Indian, Southern, and Arctic. In reality, all of this saltwater is connected — a ship can sail from any ocean to any other without ever crossing dry land. Geographers still split it into named regions because it&apos;s useful for navigation, weather forecasting, marine biology, and simply talking about &quot;which ocean&quot; a place borders, even though the water itself doesn&apos;t respect the lines.</div>}
        detailed={<div className="prose-p">The boundaries between oceans are drawn by convention, not by any physical wall in the water. Four of the five — Pacific, Atlantic, Indian, and Arctic — are defined mainly by the continents that surround them. The fifth, the <TermLink href="/geography-world-facts/the-five-oceans-explained">Southern Ocean</TermLink>, is different: it has no continental boundary on its outer edge, so it&apos;s instead defined by the <TermLink href="/geography-world-facts/the-five-oceans-explained">Antarctic Circumpolar Current</TermLink>, a powerful eastward current that flows unbroken around Antarctica and keeps that ring of water colder and more distinct from the oceans to its north. Most cartographers place the Southern Ocean&apos;s boundary at 60°S latitude, though some older atlases and a portion of the scientific community instead used the Antarctic Convergence, a shifting oceanographic front, which is one reason the Southern Ocean took far longer than the other four to gain formal recognition. Together the five oceans hold about 96.5% of all water on Earth and cover roughly 71% of the planet&apos;s surface — around 361 million km² out of Earth&apos;s total surface area of about 510 million km².</div>}
      />
      <FootnoteAside>National Geographic didn&apos;t formally recognize the Southern Ocean as the fifth ocean on its maps until June 8, 2021 — World Oceans Day — even though scientists had used the term for decades. Before that, most maps folded its waters into the southern edges of the Pacific, Atlantic, and Indian Oceans.</FootnoteAside>

      <p>
      That boundary question — where one ocean ends and another begins — becomes a lot more concrete once you look at the actual sizes and depths involved.
      </p>

      <QuickCheck
        question="What actually separates the world's oceans from one another?"
        options={[
          { text: "A deep underwater ridge or wall physically blocks water from mixing between oceans", correct: false, explanation: "There's no physical wall. All ocean water is connected into one continuous World Ocean — ships and marine life cross between named oceans freely." },
          { text: "Human convention — mainly continents, and for the Southern Ocean, a current instead of a coastline", correct: true, explanation: "Correct. Ocean boundaries are agreed-upon lines, drawn from continental coastlines for four oceans and from the Antarctic Circumpolar Current for the Southern Ocean." },
          { text: "Differences in water chemistry make each ocean a genuinely separate body of water", correct: false, explanation: "Seawater composition varies somewhat by region, but not enough to create a real separation — it's still one interconnected body of water, just named in sections." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing the five oceans by size (baseline case)</h3>
      <div className="prose-p">
      By area, from largest to smallest: the Pacific Ocean covers about 165 million km² — larger than all of Earth&apos;s landmasses combined — followed by the Atlantic at roughly 106 million km², the Indian Ocean at about 70 million km², the Southern Ocean at approximately 20 million km² (using the 60°S boundary), and the Arctic Ocean, smallest by far, at around 14 million km², an area somewhat smaller than Russia&apos;s total land area. The Pacific alone holds close to half of all the free-flowing water on Earth&apos;s surface.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the Southern Ocean&apos;s boundary is still debated (edge case / variation)</h3>
      <div className="prose-p">
      Unlike the Atlantic or Pacific, the Southern Ocean has no continental coastline marking its outer edge — Antarctica only bounds its inner edge. This is genuinely unusual in geography: most bodies of water are defined by land on both sides. The most common modern convention places the boundary at exactly 60°S latitude, a line used by the International Hydrographic Organization in its draft definitions. An older, more scientifically-driven convention instead used the Antarctic Convergence — the zone where cold Antarctic surface water sinks beneath warmer subantarctic water — which shifts seasonally and isn&apos;t a fixed line of latitude at all. Because of this ambiguity, the Southern Ocean&apos;s official recognition lagged the other four oceans by decades, even though the Antarctic Circumpolar Current itself has been well documented since the 19th century.
      </div>

      <QuickCheck
        question="Why did the Southern Ocean take much longer than the other four oceans to gain widespread official recognition?"
        options={[
          { text: "It was only discovered recently, unlike the other four oceans", correct: false, explanation: "The waters around Antarctica and the Antarctic Circumpolar Current have been documented since the 19th century — the delay was about definition and naming convention, not discovery." },
          { text: "It has no continental coastline forming its outer boundary, so cartographers disagreed on exactly where to draw its edge", correct: true, explanation: "Correct. Every other ocean is bounded by continents on multiple sides; the Southern Ocean is only bounded by Antarctica on one side, forcing mapmakers to choose a current or a latitude line instead, which took longer to standardize." },
          { text: "The water in that region is technically not part of the ocean at all", correct: false, explanation: "It's ordinary, connected ocean water — the disagreement was purely about where to draw a naming boundary, not about whether the water itself belonged to the ocean system." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How ocean size shapes global weather (real-world / applied case)</h3>
      <p>
      The Pacific Ocean&apos;s sheer size gives it an outsized influence on global weather. El Niño and La Niña — the periodic warming and cooling of surface waters in the tropical Pacific — shift rainfall and temperature patterns across much of the planet, from droughts in Australia and Indonesia to unusual storm tracks over North America, precisely because the Pacific holds so much of the planet&apos;s heat-absorbing surface area. A smaller ocean simply couldn&apos;t move that much heat around the globe; the Arctic Ocean, by contrast, is small enough and ice-covered enough for large parts of the year that it plays a very different climatic role, insulating rather than redistributing heat.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="World map showing the five named oceans and their boundaries"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-the-five-oceans-explained-map.svg"
        altText="A world map with the Pacific, Atlantic, Indian, Southern, and Arctic Oceans each labeled and shaded a different color, with a dashed ring around Antarctica at 60 degrees south latitude marking the Southern Ocean's boundary, and approximate surface areas listed next to each ocean's label."
      />
      <p>
      Notice how the Pacific alone spans from the Americas almost all the way to Asia and Australia — visually, it dwarfs the other four combined. The dashed ring around Antarctica is the only ocean boundary on the map that isn&apos;t tied to a continent&apos;s coastline; every other boundary line roughly follows where one landmass gives way to open water.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the five oceans are physically separate bodies of water, like five different lakes.", fix: "They're all one connected World Ocean. The five names describe regions of a single system, not isolated water bodies — this is why a ship or a whale can travel between any two of them without crossing land." },
          { mistake: "Thinking the Southern Ocean is defined the same way as the other four, by continental coastlines.", fix: "It's the exception — its boundary is the Antarctic Circumpolar Current (or the 60°S line), not a coastline, since Antarctica only borders it on one side." },
          { mistake: "Believing ocean size directly predicts ocean depth — assuming the biggest ocean is also uniformly the deepest everywhere.", fix: "Size (surface area) and depth are different measurements. The Pacific is both the largest and contains the single deepest point on Earth (the Challenger Deep, ~10,935 m), but depth varies enormously within every ocean, including shallow continental shelves within the Pacific itself." },
        ]}
      />
      <MisconceptionCallout
        myth="There are only four oceans — the Southern Ocean isn't a real, separate ocean."
        reality={<p>The Southern Ocean is now formally recognized by major geographic authorities, including National Geographic (since June 2021) and NOAA, as the fifth ocean. It has a genuinely distinct identity: the Antarctic Circumpolar Current keeps its water colder and its ecosystem — including species like Antarctic krill and emperor penguins — measurably different from the subtropical waters just to its north. Some maps and textbooks printed before 2021, or written using older conventions, still show only four oceans, which is where the &quot;only four&quot; belief largely comes from — it reflects an older cartographic standard, not a scientific dispute about whether the water there is genuinely distinct.</p>}
      />

      <QuickCheck
        question="A map from the early 2000s labels the ocean around Antarctica as simply the southern edges of the Pacific, Atlantic, and Indian Oceans. Is that map wrong?"
        options={[
          { text: "Yes, it was always factually incorrect, even at the time it was printed", correct: false, explanation: "That map reflected the standard cartographic convention of its era. The Southern Ocean's boundary was long debated, and formal five-ocean recognition by outlets like National Geographic didn't happen until 2021." },
          { text: "It reflects the older, four-ocean convention that was standard before the Southern Ocean's wider formal recognition in 2021", correct: true, explanation: "Correct. The water itself hasn't changed — recognition and naming conventions have. Maps printed before 2021 commonly used the four-ocean model, which was standard practice at the time." },
          { text: "No map has ever shown only four oceans — this scenario couldn't happen", correct: false, explanation: "Four-ocean maps were the norm for most of the 20th and early 21st centuries. The five-ocean model is the newer, now-standard convention, not the other way around." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="What share of Earth's total surface does an ocean cover?"
        fields={[
          { key: "areaKm2", label: "Ocean area (km²)", defaultValue: 165000000, step: 1000000 },
        ]}
        resultLabel="Share of Earth's total surface area (%)"
        formula="shareOfEarthSurface"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with the Atlantic's area (about 106,000,000 km²) and the Arctic's (about 14,000,000 km²) to compare their share of Earth's surface directly.",
          "Next time you see a four-ocean map or globe, check its print date — it likely predates the Southern Ocean's 2021 formal recognition.",
          "Trace a route on a world map from the Pacific to the Atlantic without crossing land, to see for yourself that it's genuinely one connected body of water.",
          "Read the related entry on Ocean Currents & Their Effects to see how water actually moves between these named regions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many oceans are there in the world?", answer: "Five: the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. All five are part of one connected World Ocean; the five-way split is a naming convention, not a physical separation." },
          { question: "Is the Southern Ocean a real ocean?", answer: "Yes. It's the band of water encircling Antarctica, generally defined as south of 60°S latitude and bounded by the Antarctic Circumpolar Current. National Geographic formally added it to its maps as the fifth ocean in June 2021, and NOAA recognizes it as well." },
          { question: "What is the largest ocean in the world?", answer: "The Pacific Ocean, at roughly 165 million km² — larger than all of Earth's continents combined and covering close to half of the planet's free-flowing surface water." },
          { question: "What is the smallest ocean in the world?", answer: "The Arctic Ocean, at around 14 million km², making it by far the smallest of the five named oceans — smaller than Russia's total land area." },
          { question: "Are all the oceans actually connected to each other?", answer: "Yes. There is only one continuous World Ocean; the five names (Pacific, Atlantic, Indian, Southern, Arctic) describe regions within it, not separate, isolated bodies of water." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
