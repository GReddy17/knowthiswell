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
  title: "Earth's Structure & Plate Tectonics: The Layers Below Your Feet, Moving",
  category: "general-science-facts",
  order: 41,
  subtopic: "earth-science",
  tags: [
    "plate tectonics",
    "earth's layers",
    "earth's crust",
    "mantle",
    "earth's core",
    "earthquakes",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Earth is built from four layers, and the outermost one is broken into plates that drift a few centimeters a year — slow enough to ignore, powerful enough to build mountains.",
  summary: "Earth is made of a thin crust, a thick mostly-solid mantle, a liquid outer core, and a solid inner core, with the crust broken into moving tectonic plates.",
  sources: [
    { label: "USGS — Earthquake Hazards Program", url: "https://earthquake.usgs.gov/" },
    { label: "USGS — Volcano Hazards Program", url: "https://volcanoes.usgs.gov/" },
    { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
    { label: "Encyclopaedia Britannica — Plate Tectonics", url: "https://www.britannica.com/science/plate-tectonics" },
  ],
  seeAlso: [
    "general-science-facts/density-and-buoyancy",
    "general-science-facts/pressure",
    "general-science-facts/rocks-minerals-and-natural-resources",
    "general-science-facts/natural-disasters",
    "general-science-facts/fossils-and-geological-time",
  ],
  glossary: [
    { term: "Crust", definition: "Earth's thin, rigid outermost layer — roughly 5-10 km thick under oceans and 30-50 km thick under continents." },
    { term: "Mantle", definition: "The thick, mostly-solid rock layer beneath the crust, about 2,900 km deep, that flows extremely slowly over millions of years." },
    { term: "Core", definition: "Earth's center, split into a liquid iron-nickel outer core (which generates the magnetic field) and a solid iron-nickel inner core." },
    { term: "Lithosphere", definition: "The rigid outer shell combining the crust and the uppermost mantle, broken into the tectonic plates that move across the planet's surface." },
    { term: "Plate tectonics", definition: "The theory that Earth's lithosphere is divided into large plates that move slowly atop the more pliable mantle beneath, driven by mantle convection." },
    { term: "Subduction", definition: "The process where one tectonic plate is forced beneath another and sinks into the mantle, typically at a convergent plate boundary." },
    { term: "Hotspot", definition: "A relatively fixed source of magma rising from deep in the mantle that punches through a moving plate above it, producing a chain of volcanoes over time." },
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
          "Earth has four main layers — crust, mantle, outer core, and inner core — defined by composition and physical state, not just depth: the mantle is mostly solid rock that flows like extremely thick tar over millions of years, and only the outer core is liquid.",
          "Earth's rigid outer shell (the lithosphere) is broken into roughly 15 major tectonic plates that drift a few centimeters per year — about the rate a fingernail grows — driven by heat-driven convection in the mantle beneath them.",
          "Where plates meet determines what happens there: pulling apart builds new ocean floor, colliding builds mountains or sinks one plate beneath the other, and sliding past each other produces the friction that causes most major earthquakes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Earth isn&apos;t solid rock all the way through. Peel it back like an onion and you&apos;d find a thin outer <TermLink href="/general-science-facts/earths-structure-and-plate-tectonics">crust</TermLink> (the ground under your feet), a much thicker <TermLink href="/general-science-facts/earths-structure-and-plate-tectonics">mantle</TermLink> of hot rock beneath it, and finally a metal <TermLink href="/general-science-facts/earths-structure-and-plate-tectonics">core</TermLink> at the very center. That crust isn&apos;t one solid shell — it&apos;s cracked into giant pieces called tectonic plates, and those plates are slowly sliding around, which is why continents have moved over Earth&apos;s history and why earthquakes and volcanoes cluster in predictable bands.</div>}
        detailed={<div className="prose-p">The crust comes in two types: thin, dense oceanic crust (5-10 km, mostly basalt) and thicker, less dense continental crust (30-50 km, mostly granite, thickening to around 70 km under major mountain ranges). Beneath the crust, the mantle extends roughly 2,900 km down and makes up about 84% of Earth&apos;s volume; despite being solid rock under most conditions, it flows on geologic timescales through a process called convection, driven by heat escaping from the core. The crust plus the rigid uppermost mantle together form the <TermLink href="/general-science-facts/earths-structure-and-plate-tectonics">lithosphere</TermLink>, which is broken into plates that ride atop the softer, more ductile mantle layer below. The outer core (roughly 2,200 km thick, liquid iron-nickel) generates Earth&apos;s magnetic field through its motion; the inner core (about 1,220 km in radius) is solid despite being hotter than the outer core, because the immense pressure at that depth raises iron&apos;s melting point high enough to keep it solid.</div>}
      />
      <FootnoteAside>Earth&apos;s deepest borehole, the Soviet-era Kola Superdeep Borehole, reached about 12.3 km down — deep enough to be a scientific landmark, yet barely a scratch through the thinnest part of the crust, which itself is less than 0.2% of the distance to Earth&apos;s center.</FootnoteAside>

      <p>
      Knowing the layers explains what Earth is made of. The more useful question — and the one that explains earthquakes, volcanoes, and mountain ranges — is what happens at the boundaries where the rigid plates on top meet each other.
      </p>

      <QuickCheck
        question="Tectonic plates move only a few centimeters per year, about as fast as a fingernail grows. Why does this slow motion matter?"
        options={[
          { text: "It doesn't — motion that slow has no measurable effect on Earth's surface", correct: false, explanation: "A few centimeters per year sounds negligible on a human timescale, but Earth has been around for billions of years — that's plenty of time for small annual motions to add up to thousands of kilometers of continental drift." },
          { text: "Compounded over millions of years, a few centimeters annually adds up to thousands of kilometers of plate motion, enough to open oceans, build mountain ranges, and split or merge continents", correct: true, explanation: "Correct. Geologic processes operate on deep time — small annual rates, multiplied by millions of years, are exactly what reshapes continents and builds mountain ranges like the Himalayas." },
          { text: "The plates only move that slowly during earthquakes; between earthquakes they are completely stationary", correct: false, explanation: "It's the reverse — plates creep continuously at that slow background rate, and earthquakes are the sudden, brief release of stress that has built up where that steady motion gets stuck at a fault." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: What&apos;s actually beneath your feet, layer by layer (baseline case)</h3>
      <div className="prose-p">
      Standing on continental crust, you&apos;re on top of roughly 30-50 km of granite-rich rock — a thin skin compared to Earth&apos;s 6,371 km radius, proportionally thinner than an apple&apos;s skin relative to the apple. Below that sits the mantle, extending down to about 2,900 km, hot enough to flow slowly as solid rock over geologic time. Past that boundary is the liquid outer core (to about 5,150 km depth), and finally the solid inner core at the very center. Temperature rises with depth throughout — the mantle-core boundary is estimated near 4,000-5,000°C, and the inner core&apos;s center may exceed 5,200°C, comparable to the surface of the sun, held in check from melting by crushing pressure rather than by being cooler.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the inner core is solid despite being the hottest layer (edge case / variation)</h3>
      <div className="prose-p">
      It seems backwards: the inner core is hotter than the outer core, yet the inner core is solid and the outer core is liquid. The resolution is pressure, not just temperature. A material&apos;s melting point rises under higher pressure, because atoms need even more thermal energy to break free of a tightly compressed crystal structure. At the inner core, pressure reaches roughly 3.6 million atmospheres — high enough to push iron&apos;s melting point above the actual temperature there, keeping it solid. In the outer core, pressure is lower (though still enormous), so despite being somewhat cooler than the inner core, it&apos;s still above the local melting point and stays liquid. This is the same physical principle — melting point shifting with pressure — that also explains why some glaciers can melt slightly at their base under their own weight even in freezing air.
      </div>

      <QuickCheck
        question="The inner core is hotter than the outer core, yet the inner core is solid while the outer core is liquid. What explains this?"
        options={[
          { text: "The immense pressure at the inner core raises iron's melting point above the actual temperature there, keeping it solid despite the higher heat", correct: true, explanation: "Correct. Melting point rises with pressure — at the inner core's extreme pressure (roughly 3.6 million atmospheres), iron stays solid even though it's the hottest layer of the planet." },
          { text: "The inner core is actually cooler than the outer core, despite common descriptions", correct: false, explanation: "The inner core is genuinely hotter, potentially exceeding 5,200°C. The reason it stays solid isn't lower temperature — it's the much higher pressure raising the melting point." },
          { text: "The inner core is made of a completely different, higher-melting-point material than the outer core", correct: false, explanation: "Both the inner and outer core are primarily iron-nickel alloy — the difference in state (solid vs. liquid) comes from the pressure difference between the two layers, not a different material." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Hawaiian Islands as a moving-plate record (real-world / applied case)</h3>
      <div className="prose-p">
      The Hawaiian Islands sit in the middle of the Pacific Plate, far from any plate boundary, yet they&apos;re one of Earth&apos;s most active volcanic chains — because a stationary hotspot of rising magma deep in the mantle has been punching through the moving Pacific Plate above it for millions of years. As the plate slides northwest over the fixed hotspot at roughly 7 cm per year, each island forms directly above the hotspot, then gets carried away and goes volcanically dormant as the plate carries it onward, while a new island begins forming behind it. This is why the islands get progressively older moving northwest: the Big Island, still directly over the hotspot, is geologically young (under 1 million years), while Kauai, roughly 500 km northwest, is around 5 million years old — a distance and age gap consistent with a plate creeping along at a few centimeters a year.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Earth's internal layers and the three types of tectonic plate boundaries"
        type="detail"
        svgSrc="/diagrams/general-science-facts-earths-structure-and-plate-tectonics-cross-section.svg"
        altText="Cross-section of Earth from surface to center labeled crust, mantle, liquid outer core, and solid inner core with approximate depths, alongside three smaller diagrams showing a divergent boundary where plates pull apart and magma rises, a convergent boundary where one plate subducts beneath another forming a volcanic arc, and a transform boundary where two plates slide past each other."
      />
      <p>
      Notice how thin the crust is relative to the other three layers — if Earth were scaled down to the size of an apple, the crust would be thinner than the apple&apos;s skin. Then look at the three boundary types on the right: divergent boundaries (like the Mid-Atlantic Ridge) create new crust as plates pull apart; convergent boundaries either crumple rock upward into mountains (continent-continent collisions, like the Himalayas) or force one plate down into the mantle at a subduction zone (ocean-continent collisions, producing volcanic arcs and the deepest ocean trenches); transform boundaries, like California&apos;s San Andreas Fault, simply grind two plates past each other sideways, building up the stress that releases as earthquakes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming oceanic crust is thicker than continental crust because oceans are so large.", fix: "It's the opposite — oceanic crust is thin (5-10 km) but dense basalt, while continental crust is much thicker (30-50 km) but less dense granite. Thickness and surface area aren't related." },
          { mistake: "Thinking Earth's entire core is molten liquid.", fix: "Only the outer core is liquid. The inner core, despite being hotter, is solid because the pressure there is high enough to keep iron from melting." },
          { mistake: "Assuming plate motion is too slow to matter within any meaningful timeframe.", fix: "A few centimeters a year compounds dramatically over millions of years — enough to open the Atlantic Ocean, build the Himalayas, and reposition entire continents since Earth's early history." },
        ]}
      />
      <MisconceptionCallout
        myth="Earthquakes and volcanoes only happen exactly on the plate boundary lines you'd see drawn on a map."
        reality={<p>Most major earthquakes and volcanoes do cluster along plate boundaries, but genuine exceptions exist well within plate interiors. The New Madrid Seismic Zone in the central United States, far from any modern plate boundary, produced a sequence of severe earthquakes in 1811-1812 — among the largest in recorded U.S. history — caused by ancient, buried zones of crustal weakness reactivated by regional stress, as documented by the USGS. Hotspot volcanism, like Hawaii&apos;s, is a second exception: it&apos;s driven by a fixed plume of rising mantle magma with no relationship to a nearby plate edge at all. Plate boundaries explain most, but not all, of Earth&apos;s seismic and volcanic activity.</p>}
      />

      <QuickCheck
        question="The central United States, far from any tectonic plate boundary, experienced a sequence of major earthquakes in 1811-1812. How is this possible if earthquakes only happen at plate boundaries?"
        options={[
          { text: "They don't only happen at plate boundaries — ancient, buried zones of crustal weakness within a plate interior, like the New Madrid Seismic Zone, can be reactivated by regional stress and produce major earthquakes far from any boundary", correct: true, explanation: "Correct. Intraplate earthquakes are a real, USGS-documented exception to the general pattern of boundary-clustered seismic activity." },
          { text: "The historical record of those earthquakes must be inaccurate, since earthquakes cannot occur away from plate boundaries", correct: false, explanation: "The 1811-1812 New Madrid earthquakes are well documented historically and geologically — the constraint that earthquakes only occur at boundaries is the inaccurate part, not the historical record." },
          { text: "A new, temporary plate boundary must have briefly formed in the central United States during that period", correct: false, explanation: "No new plate boundary formed — this was intraplate seismic activity along a reactivated ancient fault zone, a recognized category of earthquake distinct from boundary-driven ones." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a hotspot island's age from distance and plate speed"
        fields={[
          { key: "distanceFromHotspotKm", label: "Distance from the active hotspot (km)", defaultValue: 500 },
          { key: "plateSpeedCmPerYear", label: "Plate speed (cm/year)", defaultValue: 7 },
        ]}
        resultLabel="Estimated island age (millions of years)"
        formula="hotspotIslandAge"
        formatResult="number"
      />
      <EntryCalculator
        title="Project a mountain's future height from its uplift rate"
        fields={[
          { key: "currentHeightM", label: "Current height (meters)", defaultValue: 8849 },
          { key: "upliftMmPerYear", label: "Uplift rate (mm/year)", defaultValue: 4 },
          { key: "years", label: "Years into the future", defaultValue: 1000 },
        ]}
        resultLabel="Projected height (meters)"
        formula="mountainUpliftProjection"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up your region on a global plate boundary map to see whether you live near a divergent, convergent, or transform boundary — or well within a plate interior.",
          "Try the hotspot calculator above with Kauai's real distance (~500 km) from Hawaii's active hotspot to see how well it matches Kauai's known age of roughly 5 million years.",
          "Next time you read about an earthquake, check whether it happened at a plate boundary or is a rarer intraplate event.",
          "Read the related entry on Natural Disasters to see how plate boundary type predicts earthquake and volcano risk in more detail.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the layers of the Earth?", answer: "From outside in: the crust (thin, rigid, 5-50 km depending on location), the mantle (thick, mostly-solid rock, about 2,900 km), the liquid outer core (iron-nickel, about 2,200 km), and the solid inner core (iron-nickel, about 1,220 km radius)." },
          { question: "How fast do tectonic plates move?", answer: "Typically a few centimeters per year — roughly the rate a fingernail grows. Over millions of years, that slow rate accumulates into thousands of kilometers of plate motion." },
          { question: "What causes earthquakes?", answer: "Most earthquakes happen when stress builds up along a fault, often at a plate boundary where plates are sliding past, colliding with, or pulling apart from each other, and that stress is suddenly released as seismic waves." },
          { question: "Why is Earth's inner core solid if it's so hot?", answer: "Because pressure at that depth (roughly 3.6 million atmospheres) raises iron's melting point above the actual temperature there — pressure, not just temperature, determines whether a material stays solid." },
          { question: "How did the Hawaiian Islands form?", answer: "A stationary hotspot of magma deep in the mantle punches through the moving Pacific Plate above it, creating a new volcanic island above the hotspot every so often while older islands are carried away and go dormant as the plate continues sliding northwest." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
