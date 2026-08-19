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
  title: "Rocks, Minerals & Natural Resources: What They're Made Of and How They Form",
  category: "general-science-facts",
  order: 43,
  subtopic: "earth-science",
  tags: [
    "rocks",
    "minerals",
    "rock cycle",
    "natural resources",
    "geology",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "A rock is a mix of minerals; a mineral has a fixed chemical recipe. Here's how the rock cycle turns one type into another, and what actually makes a mineral worth mining.",
  summary: "Minerals are naturally occurring solids with a defined chemical composition and crystal structure, and rocks are aggregates of one or more minerals formed through igneous, sedimentary, or metamorphic processes.",
  sources: [
    { label: "USGS — Science of Rocks and Minerals", url: "https://www.usgs.gov/" },
    { label: "Smithsonian National Museum of Natural History", url: "https://naturalhistory.si.edu/" },
    { label: "Encyclopaedia Britannica", url: "https://www.britannica.com/" },
  ],
  seeAlso: [
    "general-science-facts/density-and-buoyancy",
    "general-science-facts/atoms-and-elements",
    "general-science-facts/earths-structure-and-plate-tectonics",
    "general-science-facts/fossils-and-geological-time",
    "general-science-facts/renewable-vs-non-renewable-resources",
  ],
  glossary: [
    { term: "Mineral", definition: "A naturally occurring, inorganic solid with a definite chemical composition and an ordered, repeating crystal structure." },
    { term: "Rock", definition: "A naturally occurring solid aggregate made of one or more minerals (or mineraloid material), classified as igneous, sedimentary, or metamorphic by how it formed." },
    { term: "Igneous rock", definition: "Rock formed when molten magma or lava cools and solidifies, either underground (intrusive) or on the surface (extrusive)." },
    { term: "Sedimentary rock", definition: "Rock formed from compacted and cemented sediment — fragments of other rock, minerals, or organic material — deposited in layers over time." },
    { term: "Metamorphic rock", definition: "Rock formed when existing rock is transformed by heat, pressure, or chemically active fluids without fully melting." },
    { term: "Mohs hardness scale", definition: "A 1-to-10 ordinal scale ranking minerals by their resistance to scratching, from talc (softest) to diamond (hardest)." },
    { term: "Rock cycle", definition: "The continuous, multi-directional process by which rock transforms between igneous, sedimentary, and metamorphic forms over geologic time." },
    { term: "Ore", definition: "A mineral deposit concentrated enough, in a large enough quantity, to be profitably extracted and processed with current technology — the same mineral dispersed too thinly through ordinary rock isn't considered ore." },
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
          "A mineral has a fixed chemical recipe and an orderly crystal structure; a rock is simply an aggregate of one or more minerals — granite, for example, is a rock made of the minerals quartz, feldspar, and mica bound together.",
          "Rocks form through three fundamentally different processes — cooling molten rock (igneous), compacting and cementing sediment (sedimentary), or transforming existing rock under heat and pressure without melting it (metamorphic) — and the rock cycle can move rock between all three categories over geologic time.",
          "Density, hardness, and crystal structure — not color or size — are what geologists actually use to identify a mineral, because two minerals with identical chemistry can look completely different depending on how their atoms are arranged.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">mineral</TermLink> is a specific natural substance with its own fixed chemical makeup — quartz is always silicon and oxygen in the same ratio, arranged the same crystalline way. A <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">rock</TermLink> is what you get when minerals combine: granite is a rock made of the minerals quartz, feldspar, and mica all mixed together. Rocks form in three main ways — cooling from molten rock, building up from layers of sediment, or getting transformed by intense heat and pressure — and those three paths give geologists the basic categories: <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">igneous</TermLink>, <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">sedimentary</TermLink>, and <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">metamorphic</TermLink> rock.</div>}
        detailed={<div className="prose-p">Mineralogists define a true mineral by five criteria: it must be naturally occurring, inorganic, solid, have a definite (though sometimes slightly variable) chemical composition, and have an ordered, repeating internal crystal structure — this last property is what separates a mineral like quartz from a mineraloid like natural glass (obsidian), which has the same general chemistry but no ordered crystal lattice. Because identical minerals can form different-looking specimens, and different minerals can look superficially similar, geologists rely on measurable physical properties rather than appearance: density (mass per unit volume), hardness on the <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">Mohs hardness scale</TermLink> (a 1-10 scratch-resistance ranking devised in 1812), cleavage (how a mineral breaks along weak planes in its crystal structure), and streak (the color of a mineral&apos;s powder, which can differ from the specimen&apos;s surface color). The <TermLink href="/general-science-facts/rocks-minerals-and-natural-resources">rock cycle</TermLink> connects all three rock categories: igneous rock can erode into sediment that becomes sedimentary rock, either type can be heated and compressed into metamorphic rock, and any rock type can melt back into magma to eventually cool as new igneous rock — there&apos;s no fixed starting or ending point.</div>}
      />
      <FootnoteAside>Sedimentary rocks make up only about 5% of Earth&apos;s crust by volume, yet because they form in flat, exposed layers rather than deep underground, they cover roughly 75% of continental land surfaces — which is why most fossils, found almost exclusively in sedimentary rock, are so accessible to find.</FootnoteAside>

      <p>
      Knowing the three rock categories explains how geologists classify what they find in the field. The physical properties that identify a specific mineral within a rock are where the practical, hands-on science actually happens.
      </p>

      <p className="prose-p">
      This same rock-and-mineral science is what defines a natural resource in the ground. A mineral only becomes an <strong>ore</strong> — worth mining — when it&apos;s concentrated enough, in a large enough deposit, to extract profitably with current technology: iron ore is rock with a high enough concentration of iron-bearing minerals like hematite or magnetite to be worth processing, while the same iron dispersed thinly through ordinary rock isn&apos;t. Quarried rock itself is a resource too — limestone for cement, granite for countertops and construction, sand and gravel for concrete — extracted directly rather than refined for a specific element. Because ore grade and rock type are set by which of the three formation processes a deposit went through (metal ores often concentrate through igneous or hydrothermal processes; building stone is usually quarried igneous, sedimentary, or metamorphic rock directly), the same rock cycle covered above is what determines where on Earth these resources are found at all.
      </p>

      <QuickCheck
        question="Two mineral specimens have the exact same chemical formula but look completely different — one is soft and dull, the other is hard and glassy. What's the most likely explanation?"
        options={[
          { text: "They have different internal crystal structures — the same atoms can be arranged differently, producing minerals with different physical properties despite identical chemistry", correct: true, explanation: "Correct. This is called polymorphism — graphite and diamond, both pure carbon, are the classic example of identical chemistry producing dramatically different minerals due to different atomic arrangement." },
          { text: "One of the two specimens must not actually be a real mineral", correct: false, explanation: "Both can be legitimate minerals — chemistry alone doesn't fully determine a mineral's physical properties. The internal crystal structure matters just as much as the chemical formula." },
          { text: "The difference must be due to one specimen being much older than the other", correct: false, explanation: "Age isn't what produces different physical properties in minerals with identical chemistry — the arrangement of atoms into a specific crystal structure is the determining factor, not how long the mineral has existed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Identifying a mineral by density (baseline case)</h3>
      <div className="prose-p">
      A geologist finds an unlabeled clear crystal and wants to confirm it&apos;s quartz. Quartz has a well-documented density of about 2.65 grams per cubic centimeter. Measuring the sample&apos;s mass (26.5 grams) and its volume by water displacement (10 cubic centimeters) gives density = mass ÷ volume = 26.5 ÷ 10 = 2.65 g/cm³ — a match. This is a genuinely reliable identification method because density, unlike color, is an intrinsic property of a mineral&apos;s composition and crystal structure and doesn&apos;t change with the size or shape of the sample, which is exactly why it&apos;s one of the first tests geologists reach for in the field.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Diamond and graphite — same element, opposite minerals (edge case / variation)</h3>
      <div className="prose-p">
      Diamond and graphite are both made of pure carbon, nothing else — yet diamond is the hardest known natural mineral (a 10 on the Mohs scale) while graphite is soft enough to leave a mark on paper (about a 1-2 on the same scale, and the &quot;lead&quot; in pencils). The difference is entirely in how the carbon atoms are bonded. In diamond, every carbon atom bonds tightly to four neighbors in a rigid three-dimensional lattice, distributing stress across the whole structure. In graphite, each carbon atom bonds to only three neighbors within flat, hexagonal sheets, and those sheets are held together weakly enough to slide past one another — which is exactly why graphite works as a lubricant and pencil marking material, while diamond does the opposite job in cutting tools. Same element, opposite mechanical behavior, purely from atomic arrangement.
      </div>

      <QuickCheck
        question="Diamond and graphite are both pure carbon, yet one is the hardest known mineral and the other is soft enough to write with. What accounts for the difference?"
        options={[
          { text: "The carbon atoms are bonded in different structures — diamond's rigid, four-bonded 3D lattice versus graphite's loosely stacked, three-bonded flat sheets — not a difference in the element itself", correct: true, explanation: "Correct. Diamond and graphite are carbon polymorphs: identical chemistry, dramatically different physical properties, entirely due to how the carbon atoms are arranged and bonded." },
          { text: "Graphite contains impurities that diamond does not, which is what makes it softer", correct: false, explanation: "Both diamond and graphite can occur in very pure form — the hardness difference isn't from impurities, it's from the fundamentally different bonding structure between the same carbon atoms." },
          { text: "Diamond is simply much older than graphite, and age increases hardness", correct: false, explanation: "Age doesn't determine a mineral's hardness — hardness comes from its crystal structure and bonding, which is set by the conditions it formed under, not by how long it has existed since." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Limestone into marble — the rock cycle in action (real-world / applied case)</h3>
      <div className="prose-p">
      Limestone is a sedimentary rock, largely made of calcium carbonate from the accumulated shells and skeletons of marine organisms deposited on ancient seafloors. When limestone gets buried deep enough, or caught at a colliding plate boundary, to experience intense heat and pressure without fully melting, its calcite crystals recrystallize into a denser, interlocking structure — the same calcium carbonate chemistry, but transformed into marble, a metamorphic rock. This exact transformation is why marble, prized for sculpture and construction for millennia (the Parthenon and Michelangelo&apos;s David are both carved from it), retains a fine, uniform texture that its parent limestone doesn&apos;t have — a direct, visible consequence of the rock cycle moving a rock from one category into another.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The rock cycle: igneous, sedimentary, and metamorphic transformations"
        type="flow"
        svgSrc="/diagrams/general-science-facts-rocks-minerals-and-natural-resources-rock-cycle.svg"
        altText="Circular diagram with magma at the center, arrows showing magma cooling into igneous rock, igneous rock weathering and eroding into sediment, sediment compacting and cementing into sedimentary rock, any rock type being heated and compressed into metamorphic rock, and any rock type melting back down into magma to restart the cycle, with labeled arrows for cooling, weathering and erosion, compaction and cementation, heat and pressure, and melting."
      />
      <p>
      Notice there&apos;s no single starting point in this diagram — every arrow points to another category, and every rock type can eventually become any other type given enough time and the right conditions. Follow one path: magma cools into igneous rock at the top, weathering breaks it into sediment, compaction and cementation turn that sediment into sedimentary rock, heat and pressure at a plate boundary transform it into metamorphic rock, and if it&apos;s ever driven deep enough to melt, it becomes magma again — closing the loop over a timescale of millions of years.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'rock' and 'mineral' interchangeably, as if they mean the same thing.", fix: "A mineral is a single, chemically defined substance; a rock is an aggregate made of one or more minerals. Granite is a rock made of the minerals quartz, feldspar, and mica." },
          { mistake: "Assuming a mineral's hardness (Mohs scale) tells you how tough or durable it is overall.", fix: "Hardness measures scratch resistance only. Diamond is the hardest mineral but can still fracture along weak crystal planes (cleavage) with a sharp, well-aimed blow — hardness and toughness (resistance to breaking) are different properties." },
          { mistake: "Judging a mineral's identity mainly by its color.", fix: "Color is one of the least reliable identifiers — impurities can change a mineral's color dramatically (quartz alone appears clear, purple, pink, and smoky-brown depending on trace impurities) while density, hardness, and crystal structure stay far more consistent." },
        ]}
      />
      <MisconceptionCallout
        myth="Diamonds and pencil graphite can't really be related — one is a rare, priceless gem and the other is cheap and everywhere."
        reality={<p>They&apos;re both pure carbon, chemically identical — the enormous difference in appearance, hardness, and value comes entirely from how the carbon atoms are bonded. Diamond forms deep in the mantle under extreme pressure and temperature, locking carbon atoms into a rigid lattice where each atom bonds to four neighbors. Graphite forms under far milder conditions, with carbon atoms bonding to only three neighbors in loosely stacked flat sheets. Same element, same periodic table entry, radically different mineral — a clean demonstration that a mineral&apos;s identity depends on structure, not just composition.</p>}
      />

      <QuickCheck
        question="Since diamond and graphite are both 100% carbon, shouldn't they have essentially the same properties?"
        options={[
          { text: "No — despite identical chemistry, their properties differ dramatically because their carbon atoms are bonded into entirely different crystal structures", correct: true, explanation: "Correct. Chemical composition alone doesn't determine a mineral's physical properties — the internal crystal structure (how the atoms are arranged and bonded) matters just as much, which is exactly what makes diamond and graphite so different despite sharing one element." },
          { text: "Yes — any measured differences between diamond and graphite are due to experimental error, not real physical differences", correct: false, explanation: "The hardness, appearance, and use differences between diamond and graphite are well-established, real, and consistently reproducible — not measurement error." },
          { text: "No — diamond actually contains a small amount of a second element that graphite doesn't", correct: false, explanation: "Both diamond and graphite can occur as pure, single-element carbon — the difference isn't a hidden second element, it's the arrangement of the carbon atoms themselves." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate a mineral sample's density (density = mass ÷ volume)"
        fields={[
          { key: "massGrams", label: "Sample mass (grams)", defaultValue: 26.5 },
          { key: "volumeCm3", label: "Sample volume (cm³)", defaultValue: 10 },
        ]}
        resultLabel="Density (g/cm³)"
        formula="densityFromMassVolume"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a countertop, building facade, or piece of jewelry, try to identify whether the stone is igneous (granite), sedimentary (limestone), or metamorphic (marble) from its texture.",
          "Try the density calculator above on a rock or mineral sample at home using a kitchen scale and water displacement in a measuring cup.",
          "Look up your region's dominant rock type and connect it to its likely formation history — volcanic activity, ancient seafloor, or mountain-building pressure.",
          "Read the related entry on Earth's Structure & Plate Tectonics to see how plate collisions supply the heat and pressure that drive metamorphic rock formation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the difference between a rock and a mineral?", answer: "A mineral is a naturally occurring solid with a fixed chemical composition and ordered crystal structure. A rock is an aggregate made of one or more minerals — granite, for example, is a rock composed of the minerals quartz, feldspar, and mica." },
          { question: "How is marble different from limestone?", answer: "Marble is limestone that has been transformed by heat and pressure without fully melting. Both are largely calcium carbonate, but marble's calcite crystals have recrystallized into a denser, more uniform interlocking structure, making it a metamorphic rather than sedimentary rock." },
          { question: "What is the hardest natural mineral?", answer: "Diamond, ranking 10 on the Mohs hardness scale — the hardest known naturally occurring mineral, due to its rigid crystal structure where every carbon atom bonds to four neighbors." },
          { question: "How do rocks form?", answer: "Rocks form in three main ways: igneous rocks cool from molten magma or lava, sedimentary rocks form from compacted and cemented sediment, and metamorphic rocks form when existing rock is transformed by heat and pressure without melting." },
          { question: "Are diamonds made of the same thing as pencil lead?", answer: "Yes — pencil 'lead' is actually graphite, and both diamond and graphite are pure carbon. Their dramatically different hardness and appearance come from how their carbon atoms are bonded, not from any difference in the element itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
