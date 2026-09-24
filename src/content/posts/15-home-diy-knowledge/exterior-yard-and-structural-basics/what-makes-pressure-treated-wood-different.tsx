import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Actually Makes Pressure-Treated Wood Different",
  category: "home-diy-knowledge",
  order: 49,
  subtopic: "exterior-yard-and-structural-basics",
  tags: ["pressure-treated wood", "wood preservatives", "outdoor construction", "fasteners", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-24",
  lastReviewed: "2026-09-17",
  excerpt: "Pressure-treated wood isn't a stronger or denser type of lumber — it's ordinary wood with a chemical preservative forced deep into its cells to resist rot and insects.",
  summary: "Pressure treatment doesn't change what species of wood is used or make it structurally stronger; it forces a chemical preservative (commonly a copper-based compound) deep into the wood's cell structure using vacuum and pressure cycles, so the wood resists fungal decay and insect damage from the inside out — the tradeoff is that the copper content is corrosive to standard steel fasteners, which is why treated-wood projects require specific corrosion-resistant hardware.",
  sources: [
    { label: "USDA Forest Products Laboratory — Wood Handbook: Wood as an Engineering Material", url: "https://www.fpl.fs.usda.gov/products/publications/" },
    { label: "American Wood Protection Association (AWPA) — Standards for Treated Wood", url: "https://awpa.com/" },
    { label: "U.S. Environmental Protection Agency — Wood Preservatives Regulation", url: "https://www.epa.gov/ingredients-used-pesticide-products" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-screws-hold-better-than-nails",
    "home-diy-knowledge/machine-screws-vs-wood-screws-vs-bolts-explained",
    "home-diy-knowledge/what-makes-super-glue-actually-bond-so-fast",
    "home-diy-knowledge/how-a-home-foundation-actually-supports-a-house",
  ],
  glossary: [
    { term: "Wood preservative", definition: "A chemical compound, commonly copper-based in modern residential lumber, forced into wood to make it resistant to fungal decay and insect damage." },
    { term: "Vacuum-pressure cycle", definition: "The industrial process of placing wood in a sealed cylinder, drawing a vacuum to remove air from the wood's cells, then applying pressure to force preservative solution deep into that same cell structure." },
    { term: "Galvanic corrosion", definition: "Accelerated corrosion that occurs when two dissimilar metals are in contact in the presence of moisture; copper-based wood preservative can accelerate corrosion of standard steel fasteners through a related chemical reaction." },
    { term: "Hot-dip galvanized", definition: "A fastener coated with a thick zinc layer through a hot-dipping process, providing enough corrosion resistance to be used safely with modern copper-based pressure-treated wood." },
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

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "What makes wood \"pressure-treated\"?", "difficulty": "easy", "options": [{"text": "It's a stronger species of tree", "correct": false, "explanation": "It's usually ordinary softwood like pine."}, {"text": "A preservative is forced deep into the wood's cells to resist rot and insects", "correct": true, "explanation": "The process is chemical protection, not a different wood."}, {"text": "It's painted with sealant", "correct": false, "explanation": "The preservative goes deep inside, not just on the surface."}]},
  {"question": "Is pressure-treated wood structurally stronger than the same untreated wood?", "difficulty": "easy", "options": [{"text": "Yes, much stronger", "correct": false, "explanation": "Treatment doesn't change strength."}, {"text": "No, its advantage is surviving moisture and pests", "correct": true, "explanation": "It won't hold more weight or bend less."}, {"text": "Only in winter", "correct": false, "explanation": "Season doesn't affect its strength."}]},
  {"question": "Which fasteners should be used with modern pressure-treated wood?", "difficulty": "easy", "options": [{"text": "Standard steel screws", "correct": false, "explanation": "Copper-based preservatives corrode standard steel."}, {"text": "Hot-dip galvanized or stainless steel", "correct": true, "explanation": "They resist the preservative's corrosive effect."}, {"text": "Any fastener works the same", "correct": false, "explanation": "The wrong fasteners can fail years before the wood does."}]},
  {"question": "Why is lumber rated for ground contact treated differently from above-ground lumber?", "difficulty": "hard", "options": [{"text": "Soil keeps wood constantly damp and full of decay organisms, so it needs a higher preservative level", "correct": true, "explanation": "Exposure category sets the required retention level."}, {"text": "Ground-contact wood is a different color", "correct": false, "explanation": "Color isn't the reason."}, {"text": "There is no difference between ratings", "correct": false, "explanation": "The ratings reflect very different exposure risks."}]},
  {"question": "A fence post rated only for above-ground use is set in soil. What is the likely result?", "difficulty": "hard", "options": [{"text": "It lasts just as long as a ground-contact post", "correct": false, "explanation": "Its treatment level isn't made for constant soil contact."}, {"text": "Premature decay, because its preservative level is too low for ground contact", "correct": true, "explanation": "Using the wrong rating shortens the post's life."}, {"text": "It gets stronger over time", "correct": false, "explanation": "Wood doesn't strengthen in soil; it decays."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Pressure treatment doesn't change the wood species or make it structurally stronger — it forces a chemical preservative deep into ordinary wood's cells to resist rot and insects.",
          "The preservative is driven in using a vacuum-pressure cycle, not just surface-brushed or dipped on, which is why the protection extends through the wood rather than sitting only on its outer surface.",
          "Modern copper-based preservatives are corrosive to standard steel fasteners, which is why pressure-treated wood construction requires hot-dip galvanized or stainless steel screws and connectors, not standard hardware.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">&quot;Pressure-treated&quot; describes a chemical process, not a different, tougher kind of wood. It typically starts as the same common softwood species (often pine) used for plenty of untreated lumber, but it&apos;s been through a process that forces a <TermLink href="/home-diy-knowledge/what-makes-pressure-treated-wood-different">wood preservative</TermLink> deep into the wood, making it resistant to rot and insect damage in ways untreated wood isn&apos;t. It won&apos;t hold more weight or bend less than the same untreated board — its advantage is purely about surviving outdoor exposure to moisture and pests over many years.</div>}
        detailed={<div className="prose-p">The treatment process uses a <TermLink href="/home-diy-knowledge/what-makes-pressure-treated-wood-different">vacuum-pressure cycle</TermLink>: raw lumber is loaded into a large sealed cylinder, a vacuum is drawn to pull air out of the wood&apos;s cellular structure, and then the preservative solution is introduced under pressure, forcing it into the space the vacuum just cleared. This gets the preservative meaningfully deeper into the wood than a surface treatment like a brushed-on sealant ever could, which is why pressure-treated wood remains protected even after its outer surface is cut, drilled, or worn down (though any freshly cut end should still be treated with a compatible end-cut sealant, since the cut exposes untreated inner wood at that specific spot). Most modern residential pressure-treated lumber uses a copper-based compound as the active preservative, since copper is effective against both fungal decay and many wood-boring insects. That same copper content, however, creates a real tradeoff: it accelerates corrosion in ordinary steel through a process related to <TermLink href="/home-diy-knowledge/what-makes-pressure-treated-wood-different">galvanic corrosion</TermLink>, which is why building codes and manufacturer guidance require <TermLink href="/home-diy-knowledge/what-makes-pressure-treated-wood-different">hot-dip galvanized</TermLink> or stainless steel fasteners and connectors for any pressure-treated wood project — standard uncoated or lightly coated steel hardware can corrode and fail years earlier than it would in an untreated-wood project.</div>}
      />
      <FootnoteAside>Older pressure-treated lumber (before the early 2000s) commonly used chromated copper arsenate (CCA), which contained arsenic and was phased out for most residential uses; modern treated lumber uses arsenic-free copper-based compounds instead.</FootnoteAside>

      <p>
        This is also why treated wood is rated by exposure category (ground contact versus above-ground use) — the required preservative retention level is higher for lumber that will sit in direct contact with soil, since that exposure creates the highest decay risk.
      </p>

      <QuickCheck
        question="Why is pressure-treated wood not considered structurally stronger than the same species of untreated wood?"
        options={[
          { text: "The treatment process adds a chemical preservative for decay and insect resistance, but doesn't alter the wood's fiber structure or add strength", correct: true, explanation: "Correct. Pressure treatment is a chemical decay/pest-resistance process, entirely separate from and not designed to affect the wood's structural strength properties." },
          { text: "Pressure-treated wood is actually made from a completely different, harder wood species", correct: false, explanation: "It's typically the same common softwood species used for many untreated lumber products — the treatment process, not a different species, is what distinguishes it." },
          { text: "The vacuum-pressure process compresses the wood fibers, making the wood denser and stronger", correct: false, explanation: "The vacuum-pressure cycle is designed to drive preservative into the wood's existing cell structure, not to compress or densify the wood fiber itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: An above-ground deck frame (baseline case)</h3>
      <p>
        A deck frame built with pressure-treated lumber rated for above-ground use is exposed to rain and humidity but never sits in direct contact with soil. The preservative treatment level appropriate for this exposure category protects the wood from decay driven by repeated wetting and drying, and the frame lasts for decades under normal outdoor conditions — provided it&apos;s assembled with hot-dip galvanized or stainless steel fasteners rather than standard uncoated screws.
      </p>
      <QuickCheck
        question="Why does an above-ground deck frame use a different treatment rating than lumber intended for direct ground contact?"
        options={[
          { text: "Direct ground contact exposes wood to a higher, more sustained decay risk than above-ground exposure, so it requires a higher preservative retention level", correct: true, explanation: "Correct. Exposure category directly affects the decay risk the wood faces, which is why treatment retention levels are matched to the specific use case rather than being uniform across all treated lumber." },
          { text: "Above-ground treated lumber isn't actually pressure-treated at all", correct: false, explanation: "Above-ground-rated lumber is still pressure-treated — it simply carries a different, generally lower preservative retention level appropriate to its lower decay exposure." },
          { text: "The exposure rating only affects appearance, not actual decay resistance", correct: false, explanation: "The rating reflects a real, functional difference in preservative retention level matched to the wood's expected moisture and soil-contact exposure." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A fence post set directly in soil (edge case / variation)</h3>
      <div className="prose-p">
        A fence post is set in direct contact with soil, a substantially higher-decay-risk exposure than an above-ground deck board. This application requires ground-contact-rated pressure-treated lumber, carrying a higher preservative retention level specifically formulated for that sustained soil-moisture exposure — using standard above-ground-rated lumber for a below-grade fence post is a common and costly mistake, since it will decay years earlier than ground-contact-rated lumber would in the same location.
      </div>
      <QuickCheck
        question="Why would using above-ground-rated treated lumber for a fence post set in soil likely lead to premature decay?"
        options={[
          { text: "Ground contact exposes wood to sustained soil moisture, a higher decay risk than the above-ground-rated lumber's preservative retention level was formulated to withstand", correct: true, explanation: "Correct. Matching the treatment's rated exposure category to the actual use case matters — using an under-rated product in a higher-risk application undermines the treatment's effectiveness." },
          { text: "All pressure-treated lumber provides identical protection regardless of exposure rating", correct: false, explanation: "Preservative retention levels differ meaningfully by rated exposure category, which is exactly why using the wrong rating for a given application creates a real decay risk." },
          { text: "Fence posts don't actually need any special treatment consideration compared to deck boards", correct: false, explanation: "Direct soil contact is a meaningfully higher decay risk than above-ground exposure, which is why ground-contact-rated lumber specifically exists for applications like fence posts." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A deck built with standard steel screws (real-world / applied case)</h3>
      <p>
        A homeowner builds a deck using correctly rated pressure-treated lumber but fastens it with ordinary steel screws left over from an indoor project, unaware of the corrosion risk. Within a few years, the screw heads show significant rust and corrosion, some snapping under load, well before the treated lumber itself shows any decay. The wood treatment did its job protecting against rot; the actual point of failure was the mismatched hardware, which the copper-based preservative accelerated the corrosion of — a completely avoidable outcome with the correct fastener choice from the start.
      </p>
      <QuickCheck
        question="In this deck example, why did the fasteners fail years before the pressure-treated wood itself showed decay?"
        options={[
          { text: "The copper-based preservative in the wood accelerates corrosion of standard steel fasteners, and the wrong hardware was used instead of hot-dip galvanized or stainless steel", correct: true, explanation: "Correct. The wood treatment worked as intended against decay; the failure point was a documented, well-known hardware compatibility issue that the correct fastener choice would have avoided." },
          { text: "The pressure-treated lumber used was defective and released fewer decay-resistant chemicals than expected", correct: false, explanation: "The scenario describes correctly rated, functioning treated lumber — the failure traces specifically to fastener corrosion, not a defect in the wood treatment itself." },
          { text: "Steel fasteners always fail this quickly in any outdoor application regardless of the wood used", correct: false, explanation: "Standard steel fasteners can perform reasonably in many outdoor applications with untreated wood — it's specifically the copper content in modern pressure-treated wood that accelerates their corrosion." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Vacuum out the air, pressure in the preservative"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-what-makes-pressure-treated-wood-different-flow.svg"
        altText="Diagram showing raw lumber loaded into a sealed treatment cylinder, a vacuum stage removing air from the wood's cell structure, and a pressure stage forcing preservative solution deep into that same cell structure, resulting in wood protected from the inside out rather than just on the surface."
      />
      <p>
        The vacuum stage clears space inside the wood&apos;s own cells; the pressure stage is what actually forces the preservative into that space, rather than leaving it sitting on the surface.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Fastening pressure-treated wood with standard, uncoated steel screws or nails.", fix: "Use hot-dip galvanized or stainless steel fasteners and connectors rated for use with modern copper-based pressure-treated lumber." },
          { mistake: "Using above-ground-rated treated lumber for a post or structure set in direct soil contact.", fix: "Match the lumber's rated exposure category (ground contact versus above-ground) to the actual application before purchasing." },
          { mistake: "Assuming pressure-treated wood is structurally stronger and can span farther or hold more weight than the same untreated species.", fix: "Use the same span and load tables for the wood species regardless of treatment — pressure treatment addresses decay resistance, not structural capacity." },
        ]}
      />
      <MisconceptionCallout
        myth="Pressure-treated wood is a special, stronger type of lumber, not just regular wood that's been chemically treated."
        reality={<p>Pressure-treated lumber typically starts as the same common softwood species used in plenty of untreated products &#8212; the difference is entirely a chemical process, not a different or reinforced wood material. A vacuum-pressure cycle forces a preservative, commonly a copper-based compound in modern residential lumber, deep into the wood&apos;s cell structure to resist fungal decay and insect damage. It does not add structural strength, density, or load-bearing capacity beyond what the same untreated species would have. The real, practical difference to plan around isn&apos;t strength &#8212; it&apos;s that the preservative&apos;s copper content is corrosive to standard steel fasteners, requiring hot-dip galvanized or stainless steel hardware instead.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Match the lumber's rated exposure category (above-ground versus ground contact) to your actual application before buying.",
          "Use only hot-dip galvanized or stainless steel fasteners and structural connectors with modern pressure-treated wood.",
          "Apply a compatible end-cut sealant to any freshly cut end of pressure-treated lumber, since cutting exposes untreated inner wood at that spot.",
          "Use standard structural span and load tables for the wood's species and grade — don't assume pressure treatment allows for a longer span or heavier load than the same untreated species could support.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is pressure-treated wood stronger than regular wood?", answer: "No. It's typically the same wood species as many untreated products, chemically treated for decay and insect resistance. It has the same structural strength and span capacity as the equivalent untreated species and grade." },
          { question: "Why do you need special screws for pressure-treated wood?", answer: "Modern pressure-treated lumber commonly uses a copper-based preservative, and that copper content accelerates corrosion in standard steel fasteners. Hot-dip galvanized or stainless steel screws and connectors are required to avoid premature fastener failure." },
          { question: "How is pressure-treated wood actually made?", answer: "Raw lumber is placed in a sealed cylinder, a vacuum removes air from its cell structure, and then a preservative solution is forced in under pressure, driving it deep into the wood rather than leaving it as just a surface coating." },
          { question: "Can pressure-treated wood be used for a deck touching the ground?", answer: "Only if it's rated specifically for ground contact, which carries a higher preservative retention level than above-ground-rated lumber. Using above-ground-rated lumber in direct soil contact risks earlier decay than the rating was designed to prevent." },
          { question: "Is older pressure-treated wood dangerous?", answer: "Pressure-treated lumber made before the early 2000s commonly used chromated copper arsenate (CCA), which contained arsenic and was phased out of most residential uses; modern treated lumber uses arsenic-free copper-based preservatives instead. If you have older treated wood, avoid sanding or burning it, and wash hands after handling it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
