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
  title: "Mountains & Mountain Ranges",
  category: "geography-world-facts",
  order: 2,
  subtopic: "physical-geography",
  tags: ["mountains", "plate tectonics", "physical geography", "erosion"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How mountains form, why the Himalayas are still growing, and why the Appalachians are shorter than a mountain range their age has any right to be.",
  summary: "Mountains form mainly where tectonic plates collide, volcanoes erupt, or crust cracks and lifts along faults — and once formed, they're locked in a permanent tug-of-war between the forces building them up and erosion wearing them back down.",
  sources: [
    { label: "USGS — This Dynamic Earth: Mountain Building", url: "https://pubs.usgs.gov/gip/dynamic/dynamic.html" },
    { label: "National Geographic — Mountain", url: "https://education.nationalgeographic.org/resource/mountain/" },
    { label: "NOAA — Plate Tectonics and People", url: "https://www.noaa.gov/education/resource-collections/marine-geology-geophysics/plate-tectonics" },
  ],
  seeAlso: [
    "geography-world-facts/continents-and-oceans-overview",
    "geography-world-facts/volcanoes-around-the-world",
    "general-science-facts/earths-structure-and-plate-tectonics",
  ],
  glossary: [
    { term: "Fold mountains", definition: "Mountains formed when two tectonic plates collide and compress the crust between them into folds, like a rug pushed from both ends." },
    { term: "Fault-block mountains", definition: "Mountains formed when the crust cracks along faults and large blocks are pushed up or tilted, rather than folded." },
    { term: "Orogeny", definition: "The geological process of mountain formation, typically driven by tectonic plate collision over millions of years." },
    { term: "Isostasy", definition: "The equilibrium between the crust and the denser mantle beneath it — crust 'floats' on the mantle, and thicker crust (like a mountain root) sits both higher and deeper, like a large iceberg riding higher and deeper than a small one." },
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
          "Most great mountain ranges form where tectonic plates collide and crumple the crust between them — the Himalayas are still rising today because India is still colliding with Asia.",
          "A mountain's height is a balance, not a one-time event — uplift from tectonic forces fights a constant, ongoing battle against erosion from wind, water, and ice.",
          "Old mountain ranges look different from young ones: the Appalachians, once possibly taller than the Himalayas, have been worn down and rounded over roughly 300 million years of erosion.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Mountains mostly form when two pieces of Earth&apos;s crust push into each other and the ground has nowhere to go but up. The most dramatic example is the <TermLink href="/geography-world-facts/mountains-and-mountain-ranges">Himalayas</TermLink>, created by India — once a separate landmass — slowly ramming into Asia over tens of millions of years and still pushing today. Not every mountain forms this way, though: volcanoes build mountains out of erupted material, and some mountains form when cracks in the crust let huge blocks of rock get pushed upward.</div>}
        detailed={<div className="prose-p">Geologists group mountain formation into three main mechanisms. <TermLink href="/geography-world-facts/mountains-and-mountain-ranges">Fold mountains</TermLink> — the Himalayas, the Alps, the Andes — form at convergent plate boundaries, where compression folds and thickens the crust like a rug bunched up from both ends; the Himalayas specifically are the result of the Indian Plate, moving north at a few centimeters a year, colliding with the Eurasian Plate roughly 50 million years ago and never stopping. Volcanic mountains build up from repeated eruptions depositing lava and ash, which is why volcanoes tend to be cone-shaped rather than folded and jagged. Fault-block mountains, like the Sierra Nevada in California, form when the crust fractures along a fault and one block is pushed or tilted upward relative to its neighbor, rather than compressed into folds. Underlying all three is <TermLink href="/geography-world-facts/mountains-and-mountain-ranges">isostasy</TermLink> — thicker crust doesn&apos;t just rise higher, it also extends deeper into the mantle beneath it, the same way a large iceberg rides both higher and deeper than a small one, which is part of why mountain ranges have unusually deep crustal &quot;roots.&quot;</div>}
      />
      <FootnoteAside>The Himalayas gain roughly 5 millimeters of height per year from ongoing tectonic collision — but erosion removes some of that too, so the net gain is smaller and harder to measure precisely.</FootnoteAside>

      <p>
      Formation explains where a mountain comes from. What happens next — the slow fight between uplift and erosion — explains why mountain ranges of different ages look so different from each other.
      </p>

      <QuickCheck
        question="The Appalachian Mountains are geologically much older than the Himalayas but are far shorter today. What's the main reason?"
        options={[
          { text: "The Appalachians were never as tall as the Himalayas to begin with", correct: false, explanation: "Geological evidence suggests the ancient Appalachians may once have rivaled or exceeded the Himalayas in height — their current modest height is the result of what happened after formation, not how they started." },
          { text: "Roughly 300 million years of erosion has worn the Appalachians down, while active tectonic collision keeps pushing the Himalayas up faster than erosion can wear them down", correct: true, explanation: "Correct. The Appalachians stopped being actively uplifted long ago and have been eroding ever since; the Himalayas are still being actively pushed up by ongoing plate collision, so uplift is currently outpacing erosion there." },
          { text: "The Appalachians are made of a different, naturally shorter type of rock", correct: false, explanation: "Rock type affects how mountains erode, but it isn't the primary reason for the height difference — the age of the range and whether uplift is still active are the deciding factors." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Mount Everest and active fold-mountain growth (baseline case)</h3>
      <div className="prose-p">
      Mount Everest, part of the Himalayas, stands at 8,849 meters — the current official height, confirmed by a joint Nepal-China survey published in 2020, using GPS measurements taken at the summit. Because the Indian Plate is still pushing north into the Eurasian Plate, Everest is still rising, by roughly a few millimeters a year, while also shifting slightly northeast due to the same tectonic motion. It&apos;s a textbook fold-mountain case: two plates colliding, crust folding upward, and the process still actively running today.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Appalachians as an eroded, ancient range (edge case)</h3>
      <div className="prose-p">
      The Appalachian Mountains formed roughly 480 million years ago and were built up further through several later collisions, including the assembly of the supercontinent Pangaea around 300 million years ago. At their peak, some estimates suggest they may have reached heights comparable to the modern Himalayas or Alps. But active uplift stopped long ago, and roughly 300 million years of wind, water, and ice erosion has worn them down to a highest point — Mount Mitchell, in North Carolina — of just 2,037 meters. The rounded, worn shape of the Appalachians versus the Himalayas&apos; sharp, jagged peaks is a direct visual record of that difference in age and ongoing activity.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why mountain height estimates get revised (real-world case)</h3>
      <div className="prose-p">
      Mount Everest&apos;s official height has changed more than once — a 1955 Indian survey measured 8,848 meters, and the 2020 Nepal-China joint survey revised it to 8,848.86 meters (rounded to 8,849). The revision reflects both better GPS and satellite measurement technology and the fact that Everest&apos;s height genuinely changes slowly over time due to ongoing tectonic uplift, a 2015 earthquake that may have affected regional elevation, and snow/ice depth at the summit varying by season — which is why surveys specify whether they&apos;re measuring the rock summit or the snow cap on top of it.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three ways mountains form: fold, fault-block, and volcanic"
        type="comparison"
        svgSrc="/diagrams/mountains-and-mountain-ranges-formation-types.svg"
        altText="Three simplified cross-section diagrams side by side: fold mountains showing two converging crust arrows compressing rock layers into upward folds, fault-block mountains showing a crack in the crust with one block pushed upward relative to another, and a volcanic mountain showing a cone built from layered eruption material above a magma chamber."
      />
      <p>
      Notice that all three mechanisms move rock upward, but through completely different physical processes — compression and folding, fracturing and block uplift, or eruption and accumulation. A single real-world mountain range can even show more than one process at once.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all mountains form the same way (plate collision).", fix: "Remember there are at least three distinct mechanisms — fold, fault-block, and volcanic — and a single mountain can involve more than one." },
          { mistake: "Assuming a mountain's current height is fixed and permanent.", fix: "Treat height as a snapshot of an ongoing balance between uplift and erosion — it changes over geological time, and sometimes measurably within a human lifetime." },
          { mistake: "Judging a mountain range's 'impressiveness' only by height.", fix: "Age and geological activity matter as much as height — an eroded 300-million-year-old range like the Appalachians tells a different, equally significant story than a young, still-rising range like the Himalayas." },
        ]}
      />
      <MisconceptionCallout
        myth="Mountains, once formed, stay the same height forever."
        reality={<p>Mountains are constantly changing, just slowly enough that it&apos;s invisible on human timescales without precise instruments. Active ranges like the Himalayas are still gaining height from tectonic uplift; inactive, ancient ranges like the Appalachians have been net losing height to erosion for hundreds of millions of years. &quot;Mountain height&quot; is really a live balance between two competing forces, not a fixed number.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate future height gain from steady uplift"
        fields={[
          { key: "currentHeightM", label: "Current height (meters)", defaultValue: 8849 },
          { key: "upliftMmPerYear", label: "Uplift rate (mm per year)", defaultValue: 5 },
          { key: "years", label: "Years from now", defaultValue: 1000 },
        ]}
        resultLabel="Estimated height after that many years (meters)"
        formula="mountainUpliftProjection"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up which mountain range is closest to you and check whether it's still tectonically active or an old, eroded range — it changes what you're actually looking at.",
          "Next time you see a jagged, sharp-peaked mountain versus a rounded, smooth one, guess which is geologically younger before checking — sharpness is a real, visible age clue.",
          "Check whether your region sits near a fold, fault-block, or volcanic mountain system — it also tells you what kind of geological hazards (earthquakes, volcanic activity) are relevant nearby.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do mountains form?", answer: "Mostly through tectonic plate collision compressing and folding crust upward (fold mountains), crust fracturing and blocks lifting along faults (fault-block mountains), or repeated volcanic eruptions building up layered material (volcanic mountains)." },
          { question: "Is Mount Everest still growing?", answer: "Yes — ongoing collision between the Indian and Eurasian tectonic plates continues to push Everest upward by roughly a few millimeters per year, though erosion offsets some of that gain." },
          { question: "Why are the Appalachian Mountains shorter than the Himalayas?", answer: "The Appalachians are far older (roughly 480 million years vs. the Himalayas' roughly 50 million years) and stopped being actively uplifted long ago, so hundreds of millions of years of erosion have worn them down substantially." },
          { question: "What is the tallest mountain range in the world?", answer: "The Himalayas contain the highest peaks above sea level, including Mount Everest, the tallest. Measured base-to-peak from the ocean floor, Mauna Kea in Hawaii is taller overall, though most of it is underwater." },
          { question: "Do all mountains come from volcanoes?", answer: "No — volcanic mountains are only one of at least three main formation types. Most of the world's largest mountain ranges, including the Himalayas, Alps, and Andes, are fold mountains formed by tectonic collision, not volcanic activity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
