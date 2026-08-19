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
  title: "Continents & Oceans Overview",
  category: "geography-world-facts",
  order: 1,
  subtopic: "physical-geography",
  tags: ["continents", "oceans", "physical geography", "plate tectonics"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The seven continents and five oceans explained: how many there really are, why the count is debated, and how they got their shapes.",
  summary: "Earth's landmasses are conventionally divided into seven continents and its single connected ocean into five named regions — but both numbers are conventions, not laws of nature, and geologists define continents differently than geographers do.",
  sources: [
    { label: "National Geographic — Continent", url: "https://education.nationalgeographic.org/resource/continent/" },
    { label: "NOAA — How many oceans are there?", url: "https://oceanservice.noaa.gov/facts/howmanyoceans.html" },
    { label: "USGS — Understanding Plate Motions", url: "https://www.usgs.gov/programs/earthquake-hazards/science/understanding-plate-motions" },
  ],
  seeAlso: [
    "geography-world-facts/mountains-and-mountain-ranges",
    "geography-world-facts/the-five-oceans-explained",
    "general-science-facts/earths-structure-and-plate-tectonics",
  ],
  glossary: [
    { term: "Continent", definition: "One of Earth's largest conventional landmass divisions — a matter of convention, not a single scientific standard." },
    { term: "Craton", definition: "The ancient, stable core of a continent's crust, some pieces over 3 billion years old." },
    { term: "Continental shelf", definition: "The shallow, gently sloping seabed surrounding a continent before the ocean floor drops away steeply." },
    { term: "Plate tectonics", definition: "The theory that Earth's crust is broken into moving plates whose interactions build and reshape continents and ocean basins over time." },
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
          "\"Seven continents\" is the model most commonly taught, but it's a convention — geologists studying crust, not culture, would draw the lines differently.",
          "All of Earth's oceans are actually one connected body of water; the five named oceans are regions of that single ocean, divided by convention at continental coastlines and, in the Southern Ocean's case, by a current.",
          "Continents aren't static — they're riding on tectonic plates that have been rearranging Earth's surface for billions of years and are still moving today, just too slowly to notice day to day.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most people learn there are <TermLink href="/geography-world-facts/continents-and-oceans-overview">seven continents</TermLink> — Africa, Antarctica, Asia, Australia, Europe, North America, and South America — and five oceans: the Pacific, Atlantic, Indian, Southern, and Arctic. That&apos;s the standard model used in most English-language schools and atlases, and it&apos;s a fine working answer. But both numbers are conventions people agreed on, not facts nature hands you directly, which is why other countries and other disciplines count differently.</div>}
        detailed={<div className="prose-p">A continent has no single, universally agreed scientific definition. Geographers usually use large, mostly-continuous landmasses separated by ocean; by that standard, Europe and Asia — physically one unbroken landmass — only get split because of a long cultural and historical tradition, giving the combined &quot;Eurasia&quot; model used in parts of Russia and Eastern Europe. Geologists instead look at <TermLink href="/geography-world-facts/continents-and-oceans-overview">cratons</TermLink> — the ancient, stable cores of continental crust — and by that measure North America and South America are sometimes treated as one connected landmass joined at the Isthmus of Panama, giving a six-continent model. A few countries teach a four-continent model that merges Europe, Asia, and Africa into &quot;Afro-Eurasia&quot; and the Americas into one. None of these is &quot;more correct&quot; than the seven-continent model; they&apos;re different lines drawn for different purposes. Oceans have the same issue from the opposite direction: hydrographers increasingly treat all the saltwater on Earth as a single connected World Ocean, and the five named regions are boundaries drawn at coastlines and, for the Southern Ocean specifically, at a current (the Antarctic Circumpolar Current) rather than at a hard physical wall the way a continent&apos;s coastline is.</div>}
      />
      <FootnoteAside>The Southern Ocean is the newest addition to the standard five — the U.S. Board on Geographic Names only formally recognized it in 2021, and National Geographic updated its maps the same year. Before that, most atlases showed only four oceans.</FootnoteAside>

      <p>
      Understanding why the count is fuzzy makes the next part easier: continents and oceans aren&apos;t fixed shapes handed down from history, they&apos;re the current snapshot of a process that&apos;s still running.
      </p>

      <QuickCheck
        question="Why do some countries teach a six-continent model that merges Europe and Asia into 'Eurasia'?"
        options={[
          { text: "Because Europe and Asia are actually two separate landmasses connected only by a bridge of islands", correct: false, explanation: "The opposite is true — Europe and Asia are one continuous, unbroken landmass. There's no physical strait or ocean separating them, which is exactly why some models merge them." },
          { text: "Because there's no ocean or clear physical break between Europe and Asia — the divide is historical and cultural, not geographic", correct: true, explanation: "Correct. The Europe/Asia border runs through the Ural Mountains and other land features, not water — a boundary of convention, which is why some models treat them as one continent." },
          { text: "Because Europe is technically part of Africa", correct: false, explanation: "Europe and Africa are separated by the Mediterranean Sea and the narrow Strait of Gibraltar — they are clearly distinct landmasses by any model." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Counting continents by area (baseline case)</h3>
      <div className="prose-p">
      Using the standard seven-continent model, Asia is by far the largest at about 44.6 million km², nearly a third of Earth&apos;s total land area, followed by Africa at about 30.4 million km², North America at about 24.7 million km², South America at about 17.8 million km², Antarctica at about 14.2 million km² (larger than Europe, despite feeling like an afterthought on most maps), Europe at about 10.2 million km², and Australia at about 7.7 million km² — the smallest of the seven, which is part of why it&apos;s sometimes called an island continent rather than just an island.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: What happens if you switch to the six-continent model (edge case)</h3>
      <div className="prose-p">
      Under the &quot;Eurasia&quot; model used in parts of Russia, Eastern Europe, and some Asian curricula, Europe and Asia&apos;s combined area is about 54.8 million km², making Eurasia the single largest continent by a wide margin — larger than Africa and North America combined. Nothing about the physical world changed to produce that number; only the line on the map moved, from an imaginary cultural boundary through the Urals to no boundary at all.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why the ocean count matters in practice (real-world case)</h3>
      <div className="prose-p">
      Shipping forecasts, naval charts, and international maritime law still rely on named ocean boundaries even though the water is physically continuous — a cargo ship&apos;s insurance and routing depend on whether it&apos;s classified as crossing the Indian Ocean or the Southern Ocean near Antarctica, because different regions carry different weather-risk and piracy-risk classifications. The five-ocean convention isn&apos;t just a classroom simplification; it&apos;s baked into real maritime operations, which is one reason the Southern Ocean&apos;s 2021 recognition wasn&apos;t just symbolic.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The seven continents and five oceans, by relative area"
        type="comparison"
        svgSrc="/diagrams/continents-and-oceans-overview-area-comparison.svg"
        altText="Horizontal bar chart comparing the area of the seven continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia, largest to smallest) and a separate chart comparing the area of the five oceans (Pacific, Atlantic, Indian, Southern, Arctic, largest to smallest)."
      />
      <p>
      Notice the two charts aren&apos;t remotely proportional to each other — the Pacific Ocean alone, at roughly 165 million km², is bigger than all seven continents combined. Oceans cover about 71% of Earth&apos;s surface; land is very much the minority.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'seven continents' is a scientific fact rather than the most common convention.", fix: "Say 'the seven-continent model' when precision matters — geologists and some countries use different counts, and both are legitimate." },
          { mistake: "Treating oceans as separate bodies of water like separate lakes.", fix: "Remember all oceans are physically connected — the divisions are geographic conventions drawn at coastlines and currents, not walls of water." },
          { mistake: "Assuming continent shapes and positions are permanent.", fix: "Continents move a few centimeters a year via plate tectonics — roughly the speed fingernails grow — which adds up to enormous change over geological time." },
        ]}
      />
      <MisconceptionCallout
        myth="Australia is 'just an island,' not a real continent."
        reality={<p>Size is the only reason this feels intuitive, and it&apos;s not the deciding factor. Australia sits on its own continental crust and tectonic plate, distinct from the surrounding ocean floor, which is exactly the geological criterion that makes something a continent rather than an island — Greenland, by contrast, despite being larger than Australia in raw area, sits on the North American plate and is classified as the world&apos;s largest island, not a continent.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How much of Earth's surface is a given area?"
        fields={[
          { key: "areaKm2", label: "Area (square kilometers)", defaultValue: 30400000 },
        ]}
        resultLabel="Share of Earth's total surface area (%)"
        formula="shareOfEarthSurface"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a map, check whether it uses the four-, six-, or seven-continent model — the projection and the continent count both say something about who made the map.",
          "Look up which tectonic plate you're standing on right now — most people have never checked, and it explains a lot about local earthquake and volcano risk.",
          "Trace the Antarctic Circumpolar Current on a map — it's the actual boundary of the Southern Ocean, not a coastline.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many continents are there really?", answer: "Most commonly seven, but this is a convention, not a single scientific fact — models with four, five, or six continents are also taught and used, mainly differing in whether Europe/Asia and North/South America are merged." },
          { question: "Is Europe part of Asia?", answer: "Physically, Europe and Asia are one continuous landmass with no ocean between them; they're only treated as separate continents by historical and cultural convention, which is why some countries teach a combined 'Eurasia' model instead." },
          { question: "How many oceans are there?", answer: "Five are officially recognized today: Pacific, Atlantic, Indian, Southern, and Arctic. All five are physically one connected body of water — the names mark regions, not separate seas." },
          { question: "When was the Southern Ocean added as an official ocean?", answer: "The U.S. Board on Geographic Names formally recognized it in June 2021, and National Geographic updated its atlases the same year, though the idea of a distinct Southern Ocean had been used informally for much longer." },
          { question: "Do continents actually move?", answer: "Yes — tectonic plates carrying the continents move roughly 2 to 10 centimeters per year, about the speed fingernails grow. It's imperceptible day to day but has completely rearranged Earth's landmasses over hundreds of millions of years." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
