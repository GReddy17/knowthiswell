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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Plastic Pollution & the Ocean",
  category: "environment-nature",
  order: 11,
  subtopic: "pollution-and-its-sources",
  tags: ["plastic pollution", "microplastics", "ocean gyres", "marine debris", "ocean pollution"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Ocean plastic doesn't biodegrade the way food waste does — it photodegrades into ever-smaller microplastic fragments that persist for centuries, which is why the 'Great Pacific Garbage Patch' is mostly not visible floating trash.",
  summary: "Plastic entering the ocean breaks down through sunlight-driven photodegradation into progressively smaller microplastic fragments rather than decomposing biologically, which is why large ocean gyres accumulate plastic as a diffuse soup of fragments rather than a solid visible island of trash.",
  sources: [
    { label: "NOAA — Marine Debris Program: What is Marine Debris?", url: "https://marinedebris.noaa.gov/what-marine-debris" },
    { label: "UN Environment Programme — Beat Plastic Pollution", url: "https://www.unep.org/interactives/beat-plastic-pollution/" },
    { label: "NOAA — Great Pacific Garbage Patch", url: "https://marinedebris.noaa.gov/info/patch.html" },
  ],
  seeAlso: [
    "environment-nature/water-pollution-causes-and-consequences",
    "environment-nature/understanding-e-waste-and-its-disposal",
    "environment-nature/soil-contamination-basics",
  ],
  glossary: [
    {"term":"Photodegradation","definition":"The breakdown of plastic caused by sunlight's ultraviolet radiation, which fragments the material into smaller pieces without fully breaking its polymer chains into harmless natural substances."},
    {"term":"Microplastic","definition":"A plastic fragment smaller than 5 millimeters, formed either by the breakdown of larger plastic debris or manufactured that small from the start (like some cosmetic microbeads)."},
    {"term":"Ocean gyre","definition":"A large system of rotating ocean currents that concentrates floating debris toward its calm center, such as the North Pacific Subtropical Gyre, home to the Great Pacific Garbage Patch."},
    {"term":"Marine debris","definition":"Any persistent, manufactured solid material that enters the marine environment through disposal, littering, or accidental loss, most commonly plastic."},
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
      "Plastic in the ocean doesn't decompose biologically the way food waste does — sunlight causes photodegradation, breaking it into progressively smaller fragments that persist for decades to centuries rather than disappearing.",
      "The Great Pacific Garbage Patch is not a solid floating island of trash — it's a diffuse concentration of microplastic fragments and larger debris spread across a vast area, concentrated by a rotating ocean current system called a gyre.",
      "A large share of ocean plastic enters not from ocean-based sources but from land, carried down rivers and coastlines, meaning inland waste management directly affects ocean plastic levels.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Plastic that ends up in the ocean doesn&apos;t rot away like a banana peel. Instead, sunlight slowly breaks it into smaller and smaller pieces — a process called <TermLink href="/environment-nature/plastic-pollution-and-the-ocean">photodegradation</TermLink> — without ever fully turning it back into harmless natural material. Ocean currents called <TermLink href="/environment-nature/plastic-pollution-and-the-ocean">gyres</TermLink> collect this debris into large rotating systems, the most famous being the Great Pacific Garbage Patch, which is less a visible trash island and more a spread-out soup of plastic fragments.</div>}
      detailed={<div className="prose-p">Most plastics are polymers held together by strong carbon-carbon bonds that ordinary marine bacteria can&apos;t efficiently break down, unlike organic material. Ultraviolet radiation from sunlight instead breaks the polymer chains into shorter fragments through photodegradation, eventually producing <TermLink href="/environment-nature/plastic-pollution-and-the-ocean">microplastics</TermLink> — pieces under 5 millimeters — that can persist in the water column for decades to centuries. An <TermLink href="/environment-nature/plastic-pollution-and-the-ocean">ocean gyre</TermLink> is a large system of rotating currents driven by wind patterns and the Earth&apos;s rotation; debris caught in the outer currents gets pushed toward the calm, slow-moving center, concentrating floating and suspended plastic there over time. Because photodegradation produces fragments rather than intact objects, the resulting concentration is mostly not visible from a boat or satellite image — it&apos;s measured by trawling nets through the water column, not by spotting a trash pile.</div>}
      />
      <FootnoteAside>Estimates from NOAA and independent research groups suggest a majority of ocean plastic by mass originates from land-based sources carried down rivers, not from ships or ocean-based activity directly — meaning inland waste management and river cleanup have an outsized effect on ocean plastic levels.</FootnoteAside>

      <p>
      Because photodegradation only fragments plastic rather than eliminating it, the total mass of plastic in a gyre doesn&apos;t meaningfully decrease on its own — it just gets distributed into smaller and smaller, harder-to-remove pieces over time.
      </p>

      <QuickCheck
      question="If you flew over the Great Pacific Garbage Patch in an airplane, would you expect to see a visible island of floating trash?"
      options={[
      { text: "Yes, it's a solid, continuous mass of trash large enough to be seen clearly from above", correct: false, explanation: "This is a common misconception. Photodegradation breaks plastic into small, often microscopic fragments spread across a huge area of ocean, not a solid visible mass." },
      { text: "No — most of the debris consists of small and often microscopic plastic fragments spread across a huge area, not a solid visible mass, so it's typically detected by trawling nets through the water rather than seen from above", correct: true, explanation: "Correct. The Garbage Patch is defined by elevated concentration of fragments in the water column across a large area, not a visible surface trash island." },
      { text: "The Great Pacific Garbage Patch is a myth and doesn't actually exist", correct: false, explanation: "It's real and well-documented by NOAA and independent research trawls — the misconception is about its visible appearance, not its existence." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A plastic bottle&apos;s fate at sea (baseline case)</h3>
      <div className="prose-p">
      A plastic bottle enters a river and eventually reaches the ocean. Over years of sun exposure, it becomes brittle and fragments into progressively smaller pieces — first centimeter-sized chunks, eventually microplastics under 5mm. None of this material fully biodegrades into natural compounds within any human-relevant timescale; it simply becomes harder to see and easier for marine organisms to accidentally ingest.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A microbead entering the water pre-fragmented (edge case / variation)</h3>
      <div className="prose-p">
      Some products historically used manufactured plastic microbeads (in exfoliants, for example) that entered wastewater already at microplastic size, skipping the years-long photodegradation process entirely. This illustrates that microplastics aren&apos;t only a breakdown product of larger litter — they can also enter the ocean already fragment-sized, which is part of why many jurisdictions have specifically banned manufactured microbeads.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The North Pacific Subtropical Gyre (real-world / applied case)</h3>
      <div className="prose-p">
      Plastic debris entering the Pacific from coastlines across Asia and the Americas gets caught in the North Pacific Subtropical Gyre&apos;s rotating currents and gradually concentrated toward its calmer center, forming the Great Pacific Garbage Patch. NOAA and independent researchers estimate its extent spans a huge area of ocean, dominated by microplastic concentration rather than large visible debris — a direct consequence of years of photodegradation acting on material that entered the gyre&apos;s currents from many different countries over time.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Photodegradation: from an intact bottle to microplastic fragments"
      type="flow"
      svgSrc="/diagrams/environment-nature-plastic-pollution-and-the-ocean-photodegradation-timeline.svg"
      altText="A left-to-right timeline showing a whole plastic bottle on the left, then a cracked and brittle bottle in the middle-left under a sun icon representing UV exposure, then medium plastic fragments in the middle-right, and finally a cluster of tiny microplastic dots on the right, with a caption noting the material persists rather than disappearing at each stage."
      />
      <p>
      At every stage of this timeline the plastic is still present — it just becomes smaller and less visible, which is precisely why photodegradation is described as fragmentation rather than decomposition.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming plastic in the ocean eventually biodegrades away like organic waste.", fix: "Recognize that photodegradation fragments plastic into smaller pieces without eliminating the underlying material — the total plastic mass persists for decades to centuries." },
      { mistake: "Picturing the Great Pacific Garbage Patch as a visible floating trash island.", fix: "Understand it's mostly a diffuse concentration of microplastics and suspended fragments, detected by trawling the water column, not visible from a boat or satellite." },
      { mistake: "Assuming ocean plastic pollution is caused mainly by ships and ocean-based activity.", fix: "Most ocean plastic by mass is estimated to originate from land-based sources carried down rivers, making inland waste management directly relevant to ocean plastic levels." },
      ]}
      />
      <MisconceptionCallout
      myth="Once plastic reaches the ocean, sunlight and waves eventually break it down into harmless natural material, similar to how wood or food waste decomposes."
      reality={<p>Sunlight-driven photodegradation fragments plastic&apos;s polymer structure into smaller pieces, but it doesn&apos;t convert the material back into naturally occurring, harmless compounds the way biological decomposition does for organic matter. The plastic mass persists as microplastics for decades to centuries, simply becoming smaller and more pervasive rather than disappearing.</p>}
      />

      <QuickCheck
      question="Why do manufactured plastic microbeads matter separately from photodegradation, even though both end up as small plastic particles?"
      options={[
      { text: "They don't matter separately — they're chemically identical to photodegraded fragments and enter the ocean the same way", correct: false, explanation: "The distinction is about origin and pathway, not necessarily chemistry: microbeads enter wastewater already at microplastic size, bypassing the years of sun exposure that photodegradation requires for larger debris to fragment." },
      { text: "Microbeads enter the water already at microplastic size through wastewater systems, skipping the years-long photodegradation process that breaks down larger litter — which is why several countries specifically banned them", correct: true, explanation: "Correct. This distinct, faster pathway into the water is exactly why manufactured microbeads became a specific regulatory target separate from general plastic litter reduction." },
      { text: "Microbeads are not actually plastic and pose no pollution risk", correct: false, explanation: "Microbeads are manufactured from plastic polymers and are considered a genuine microplastic pollution source, which is why they've been banned in personal care products in a number of countries." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Reduce single-use plastic where practical, since a large share of ocean plastic traces back to land-based litter and waste management gaps, not ocean-based sources.",
      "Check personal care product labels for 'polyethylene' or 'polypropylene' microbeads if concerned about pre-fragmented microplastic sources, though many jurisdictions have already banned them.",
      "Support or participate in river and coastal cleanup efforts — since most ocean plastic arrives via rivers, upstream cleanup has an outsized effect compared to open-ocean collection.",
      "When encountering claims about ocean plastic 'biodegrading,' check whether the source means full biological decomposition or just physical fragmentation — they are not the same outcome.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Does ocean plastic eventually disappear?", answer: "Not in any human-relevant timeframe. Sunlight-driven photodegradation breaks it into smaller microplastic fragments over decades to centuries, but it doesn't convert the material back into harmless natural compounds the way biological decomposition does." },
      { question: "What is the Great Pacific Garbage Patch made of?", answer: "Mostly microplastic fragments and suspended debris concentrated by the North Pacific Subtropical Gyre's rotating currents, not a solid visible trash island — it's typically measured by trawling nets through the water column." },
      { question: "Where does most ocean plastic come from?", answer: "A majority by mass is estimated to originate from land-based sources carried down rivers and coastlines, rather than from ships or other ocean-based activity directly." },
      { question: "What is a microplastic?", answer: "A plastic fragment smaller than 5 millimeters, formed either by photodegradation breaking down larger debris or manufactured that small from the start, as with banned cosmetic microbeads." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
