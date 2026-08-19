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
  title: "Metals vs. Non-Metals: What Actually Separates Them on the Periodic Table",
  category: "general-science-facts",
  order: 17,
  subtopic: "chemistry",
  tags: [
    "metals",
    "non-metals",
    "metalloids",
    "periodic table",
    "electron behavior",
    "chemistry basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why metals conduct electricity and bend without breaking, why most non-metals don't, and where metalloids like silicon blur the line between them.",
  summary: "Metals and non-metals are separated by how tightly their atoms hold onto outer electrons — that single difference in electron behavior explains conductivity, malleability, luster, and nearly every everyday distinction between the two groups.",
  sources: [
    { label: "Royal Society of Chemistry — Interactive Periodic Table", url: "https://www.rsc.org/periodic-table" },
    { label: "Encyclopaedia Britannica — Metal", url: "https://www.britannica.com/science/metal" },
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
  ],
  seeAlso: [
    "general-science-facts/atoms-and-elements",
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Metal", definition: "An element whose atoms readily lose outer electrons to form a shared 'sea' of free electrons, giving it electrical conductivity, malleability, and typical shine." },
    { term: "Non-metal", definition: "An element whose atoms hold their outer electrons tightly and tend to gain rather than lose electrons, generally giving it poor conductivity and, if solid, brittleness." },
    { term: "Metalloid", definition: "An element with a mix of metallic and non-metallic properties, sitting along the staircase-shaped boundary on the periodic table between metals and non-metals." },
    { term: "Malleable", definition: "Able to be hammered or pressed into thin sheets without breaking — a hallmark property of metals." },
    { term: "Ductile", definition: "Able to be drawn out into thin wire without breaking — another hallmark property of metals, closely related to malleability." },
    { term: "Electron sea", definition: "The model describing outer electrons in a metal as delocalized and free to move throughout the whole structure, rather than bound to any single atom." },
    { term: "Luster", definition: "The characteristic shine of a polished metal surface, caused by free electrons reflecting light." },
    { term: "Alloy", definition: "A mixture, usually of two or more metals, engineered to combine the properties of its ingredients — bronze and stainless steel are both alloys." },
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
          "Metals lose their outer electrons easily, forming a shared 'sea' of free electrons — this single fact directly causes their electrical conductivity, malleability, and shine.",
          "Non-metals hold their electrons tightly and tend to gain electrons rather than lose them, giving them the opposite profile: poor conductors, and brittle rather than bendable if solid.",
          "Roughly 80% of elements on the periodic table are metals, with a thin staircase-shaped band of metalloids — like silicon and germanium — sharing traits of both groups.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Copper wire bends without snapping, conducts electricity, and shines — all classic <TermLink href="/general-science-facts/metals-vs-non-metals">metal</TermLink> traits. A lump of sulfur, by contrast, is dull, crumbles under pressure, and won&apos;t carry an electrical current at all — classic <TermLink href="/general-science-facts/metals-vs-non-metals">non-metal</TermLink> traits. Most of the elements you can name are metals: iron, aluminum, gold, copper. Familiar non-metals tend to be things like oxygen, carbon, sulfur, and the gases that make up most of air.</div>}
        detailed={<div className="prose-p">The dividing line comes down to how tightly an atom&apos;s outer electrons are held. Metal atoms lose their outer electrons easily, and in a solid metal those released electrons don&apos;t stay attached to any single atom — they spread out and move freely throughout the whole structure, a picture chemists call the <TermLink href="/general-science-facts/metals-vs-non-metals">electron sea</TermLink> model. That free-moving electron cloud is directly responsible for metallic conductivity (electrons can carry current easily), <TermLink href="/general-science-facts/metals-vs-non-metals">malleability</TermLink> and <TermLink href="/general-science-facts/metals-vs-non-metals">ductility</TermLink> (atomic layers can slide past each other without breaking bonds, since the electrons aren&apos;t tied to fixed positions), and metallic <TermLink href="/general-science-facts/metals-vs-non-metals">luster</TermLink> (free electrons readily absorb and re-emit light at the surface). Non-metal atoms do the opposite: they hold their own electrons tightly and often pull in extra electrons from other atoms, forming rigid covalent or ionic bonds with no free-moving electron sea, which is why solid non-metals tend to be brittle rather than bendable and are usually poor conductors. Along the staircase-shaped line separating the two groups on the periodic table sits a narrow band of <TermLink href="/general-science-facts/metals-vs-non-metals">metalloids</TermLink> — boron, silicon, germanium, arsenic, antimony, and tellurium — whose electrons are held loosely enough to conduct electricity somewhat, but only under the right conditions, a property called semiconduction that underpins virtually all modern computer chips.</div>}
      />
      <FootnoteAside>Mercury is the only metal that&apos;s liquid at normal room temperature, melting at just -38.83°C — a genuine outlier, since almost every other metal has a melting point well above 300°C. Its unusually weak metallic bonding, caused by a relativistic effect on its innermost electrons, is what keeps it liquid at temperatures where every other common metal is solid.</FootnoteAside>

      <p>
      That electron-holding difference isn&apos;t just a classroom rule — it&apos;s the actual mechanism engineers exploit every time they choose a specific metal, non-metal, or blend of the two for a real job.
      </p>

      <QuickCheck
        question="Electrical wiring is almost always made from copper or aluminum rather than a non-metal like sulfur. Why?"
        options={[
          { text: "Metals like copper have outer electrons that move freely through the material (the 'electron sea'), letting electrical current flow easily — sulfur's electrons are held tightly and don't move like that", correct: true, explanation: "Correct. Free-moving delocalized electrons are exactly what carries electrical current well in a metal. Non-metals like sulfur hold their electrons tightly, so they conduct poorly or not at all." },
          { text: "Metals are simply cheaper to manufacture than non-metals", correct: false, explanation: "Cost isn't the deciding factor for wiring — some metals are quite expensive. The real reason is the fundamental electron behavior that makes metals good conductors." },
          { text: "Non-metals melt at lower temperatures, so they can't be shaped into wire", correct: false, explanation: "Melting point isn't the core issue for wiring — plenty of low-melting materials still get used elsewhere. The deciding factor is electrical conductivity, which comes from metals' free-moving electrons." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing conductivity of copper and sulfur (baseline case)</h3>
      <div className="prose-p">
      Copper&apos;s electrical resistivity is about 1.68 × 10⁻⁸ ohm-meters — an extremely low number, meaning it strongly resists blocking current, which is exactly why it&apos;s the standard material for household wiring. Sulfur, a non-metal, behaves almost like an insulator, with a resistivity on the order of 10¹⁵ ohm-meters or higher — roughly a hundred trillion times more resistant to current flow than copper. That enormous gap traces directly back to copper&apos;s free electron sea versus sulfur&apos;s tightly bound electrons; it isn&apos;t a minor difference in degree, it&apos;s a difference measured in trillions.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Carbon — a non-metal that sometimes conducts (edge case / variation)</h3>
      <div className="prose-p">
      Carbon is classified as a non-metal, yet one of its solid forms, graphite, conducts electricity well enough to be used in electrodes and pencil &quot;lead,&quot; while another form, diamond, is one of the best electrical insulators known. Both are pure carbon — the difference is entirely structural. Graphite is arranged in flat, layered sheets where each carbon atom bonds to only three neighbors, leaving one outer electron per atom free to move within each layer, similar in effect to a metal&apos;s electron sea but confined to two dimensions. Diamond bonds every carbon atom to four neighbors in a rigid three-dimensional lattice, locking every outer electron into a fixed bond with no free electrons left over to conduct. Same element, same non-metal classification, completely different conductivity — because conductivity ultimately depends on whether electrons are free to move, not on which element is involved.
      </div>

      <QuickCheck
        question="Graphite and diamond are both pure carbon, yet graphite conducts electricity and diamond does not. What explains this?"
        options={[
          { text: "Graphite secretly contains trace metal impurities that diamond doesn't", correct: false, explanation: "The difference isn't about impurities — both are essentially pure carbon. The real explanation is the structural arrangement of the carbon atoms and their bonds." },
          { text: "Graphite's layered structure leaves one electron per carbon atom free to move within each layer, while diamond locks every electron into a fixed bond in its rigid 3D structure", correct: true, explanation: "Correct. Graphite's layered bonding leaves loose electrons that can move and conduct current, similar in effect to a metal's electron sea, while diamond's every-atom-bonded-to-four-neighbors structure leaves no free electrons at all." },
          { text: "Diamond is technically a metal, despite being classified as carbon", correct: false, explanation: "Diamond is not a metal — it's a non-metallic form (allotrope) of carbon, just like graphite. Both share the same non-metal classification; only their internal bonding structure differs." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why bronze and stainless steel are deliberately mixed metals (real-world / applied case)</h3>
      <p>
      Pure metals rarely have exactly the properties engineers want, so metals are frequently combined into <TermLink href="/general-science-facts/metals-vs-non-metals">alloys</TermLink> to blend properties. Bronze mixes copper with tin, producing a harder, more corrosion-resistant material than either metal alone — historically valuable enough to define the Bronze Age. Stainless steel mixes iron with chromium (and often nickel), where the chromium forms a thin, self-repairing oxide layer on the surface that resists rust far better than plain iron, while the iron provides strength and the whole mixture keeps a metal&apos;s characteristic conductivity and malleability. Alloying works because the free electron sea persists across the mixed metal atoms, so the blend keeps its overall metallic character while gaining new mechanical or chemical properties from the specific combination chosen.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where metals, metalloids, and non-metals sit on the periodic table"
        type="detail"
        svgSrc="/diagrams/general-science-facts-metals-vs-non-metals-periodic-table.svg"
        altText="A simplified periodic table grid with the large majority of elements on the left and center shaded as metals, a thin diagonal staircase-shaped band of metalloid elements including boron, silicon, germanium, arsenic, antimony, and tellurium running from upper-left to lower-right, and the remaining upper-right elements shaded as non-metals."
      />
      <p>
      Trace the staircase line running from boron down to astatine — everything to the lower-left of that line is a metal, everything to the upper-right is a non-metal, and the handful of elements sitting directly on the line are the metalloids. Silicon&apos;s position right on that boundary is exactly why it behaves as a semiconductor: metallic enough to conduct under the right conditions, non-metallic enough not to conduct freely like copper — the property the entire semiconductor industry is built on.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all non-metals must be gases.", fix: "Many non-metals are solids at room temperature — sulfur, carbon, iodine, and phosphorus are all solid non-metals. Only some non-metals, like oxygen and nitrogen, are gases under normal conditions." },
          { mistake: "Believing all metals are magnetic.", fix: "Ferromagnetism (strong attraction to a magnet) is actually rare even among metals — only iron, nickel, cobalt, and a few rare-earth elements show it strongly. Copper, aluminum, and gold are all metals but aren't magnetic." },
          { mistake: "Thinking a shiny appearance always means a substance is a metal.", fix: "A few non-metals, like solid iodine crystals, have a metallic-looking luster despite being non-metals — shine alone isn't a reliable test; conductivity and malleability are better indicators." },
        ]}
      />
      <MisconceptionCallout
        myth="If a material is attracted to a magnet, it must be a metal — and all metals should behave that way."
        reality={<p>Magnetism (specifically ferromagnetism, the strong kind that sticks to a fridge magnet) has nothing to do with the metal/non-metal boundary itself. Among all the metallic elements, only iron, nickel, cobalt, and a small number of rare-earth elements are strongly ferromagnetic at room temperature. The vast majority of metals — aluminum, copper, gold, silver, lead — show no noticeable attraction to an ordinary magnet at all. Magnetism depends on a specific, unusual arrangement of unpaired electron spins that most metals simply don&apos;t have, so &quot;magnetic&quot; and &quot;metal&quot; are overlapping but very different categories.</p>}
      />

      <QuickCheck
        question="A fridge magnet sticks strongly to a steel can but does not stick at all to an aluminum can. Does this mean aluminum isn't a metal?"
        options={[
          { text: "No — aluminum is genuinely a metal. Magnetism (ferromagnetism) is a rare property found in only a few metals like iron, nickel, and cobalt, not a requirement for being classified as a metal", correct: true, explanation: "Correct. Aluminum has all the defining metallic properties — conductivity, malleability, luster — it just isn't ferromagnetic, a separate and much rarer property shared by only a handful of metals." },
          { text: "Yes — any true metal must be attracted to a magnet, so aluminum must actually be a non-metal or metalloid", correct: false, explanation: "This gets the classification backwards. Aluminum is firmly classified as a metal based on its electron behavior and physical properties; ferromagnetism is a separate, much rarer trait that most metals simply don't have." },
          { text: "The steel can must contain a magnet itself, which is why it sticks", correct: false, explanation: "Plain steel cans don't contain magnets — the can is simply made from a ferromagnetic metal (steel is mostly iron) that responds to an external magnet's field, unlike aluminum." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Test a few household items with a magnet — notice how few actually stick, even though many of them are clearly metal (aluminum foil, a copper coin).",
          "Look at a pencil's graphite core and a diamond ring side by side and connect their opposite conductivity to the same element arranged two different ways.",
          "Check the ingredient list on a stainless steel item (often stamped '18/8' or '18/10') and connect those numbers to chromium and nickel content.",
          "Read the related entry on Atoms & Elements for the underlying electron structure that drives this whole metal/non-metal split.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the properties of metals and non-metals?", answer: "Metals are typically shiny, malleable, ductile, and good conductors of electricity and heat, because their outer electrons move freely through the material. Non-metals are typically dull (if solid), brittle rather than bendable, and poor conductors, because their electrons are held tightly." },
          { question: "Is carbon a metal or non-metal?", answer: "Carbon is a non-metal. It can still conduct electricity in one structural form, graphite, because graphite's layered bonding leaves some electrons free to move — but this doesn't change carbon's overall non-metal classification." },
          { question: "What is a metalloid?", answer: "A metalloid is an element with a mix of metallic and non-metallic properties, sitting on the staircase-shaped boundary line on the periodic table. Silicon and germanium are common examples, and their partial conductivity (semiconduction) is the basis of computer chips." },
          { question: "Why do metals conduct electricity?", answer: "Metal atoms release their outer electrons into a shared, freely moving 'electron sea' throughout the material. Because those electrons aren't bound to any single atom, they can carry electrical current easily when a voltage is applied." },
          { question: "Are all metals magnetic?", answer: "No. Strong magnetism (ferromagnetism) is actually rare — only iron, nickel, cobalt, and a few rare-earth metals show it at room temperature. Most metals, including aluminum, copper, and gold, are not noticeably magnetic." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
