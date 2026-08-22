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
  title: "Understanding the Circular Economy",
  category: "environment-nature",
  order: 48,
  subtopic: "environment-curiosities",
  tags: ["circular economy", "waste reduction", "sustainable design", "resource efficiency", "Ellen MacArthur Foundation"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "The circular economy is a design framework, not just a recycling slogan — it means designing products from the start so materials stay in use instead of becoming waste.",
  summary: "The circular economy is a framework, formalized by the Ellen MacArthur Foundation, for designing products and systems around three principles: eliminating waste and pollution by design, keeping materials in use at their highest value, and regenerating natural systems — replacing the traditional linear take-make-dispose model.",
  sources: [
    { label: "Ellen MacArthur Foundation — What Is a Circular Economy?", url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview" },
    { label: "UNEP — Circular Economy", url: "https://www.unep.org/topics/circular-economy" },
    { label: "EPA — Sustainable Materials Management", url: "https://www.epa.gov/smm" },
  ],
  seeAlso: [
    "environment-nature/the-reduce-reuse-recycle-hierarchy-explained",
    "environment-nature/how-cities-are-going-green-urban-sustainability-case-studies",
    "environment-nature/common-environmental-myths-and-misconceptions",
  ],
  glossary: [
    {"term":"Circular economy","definition":"An economic model, formalized by the Ellen MacArthur Foundation, designed around eliminating waste by design, keeping materials in use at their highest value for as long as possible, and regenerating natural systems — replacing the traditional linear take-make-dispose model."},
    {"term":"Linear economy","definition":"The traditional economic model of extracting raw materials, manufacturing products, and discarding them as waste at the end of use, with no built-in mechanism for materials to return to productive use."},
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
      "The circular economy is a design framework built on three principles: eliminate waste and pollution by design, keep materials in use at their highest value, and regenerate natural systems.",
      "It's fundamentally different from recycling alone — recycling happens after a product is designed, while circular design changes how a product is built in the first place so it can be repaired, reused, or fully recovered.",
      "The traditional linear economy (take raw materials, make a product, dispose of it) treats waste as an unavoidable end point; the circular model treats waste as a design failure that better upfront choices can prevent.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/environment-nature/understanding-the-circular-economy">circular economy</TermLink> designs products and systems so materials keep circulating instead of becoming waste. Instead of a phone designed to be replaced when the battery degrades, a circular-design phone has a battery that can be swapped, and the rest of the device is built to be repaired, refurbished, or its materials recovered at end of life. It&apos;s the opposite of the traditional <TermLink href="/environment-nature/understanding-the-circular-economy">linear economy</TermLink> — take materials, make a product, throw it away — which was never designed with an end-of-life plan for the materials at all.</div>}
      detailed={<div className="prose-p">The Ellen MacArthur Foundation, which formalized and popularized the modern circular economy framework, defines it around three explicit design principles rather than a single practice: eliminating waste and pollution before it&apos;s created (by rethinking product design itself, not just managing waste after the fact), circulating products and materials at their highest value for as long as possible (prioritizing reuse and repair over recycling, and recycling over disposal, since each step down that chain loses more value), and regenerating natural systems (returning biological materials safely to the environment instead of degrading it). This distinguishes the circular economy sharply from &quot;better recycling&quot; — recycling is one tool inside a circular system, but a genuinely circular product is designed from the outset for disassembly, repair, and material recovery, decisions that can&apos;t be retrofitted after a product already exists.</div>}
      />
      <FootnoteAside>The &quot;butterfly diagram,&quot; the Ellen MacArthur Foundation&apos;s signature visualization of the circular economy, separates materials into two cycles: a &quot;biological cycle&quot; for materials that safely return to the environment (like compostable packaging) and a &quot;technical cycle&quot; for durable materials (metals, plastics) that are designed to be reused, repaired, or remanufactured rather than returned to nature.</FootnoteAside>

      <p>
      The practical difference this makes is visible at the design stage, well before a product ever reaches a customer or a landfill.
      </p>

      <QuickCheck
      question="A company switches to using 100% recycled plastic in a product that's still glued together and impossible to disassemble or repair. Is this a genuinely circular-economy product?"
      options={[
      { text: "Yes — using recycled material automatically makes any product circular", correct: false, explanation: "Recycled content is one small piece of a circular system, but a product that can't be disassembled, repaired, or have its materials recovered at end of life still ends up as waste eventually, regardless of what its original materials were." },
      { text: "Not fully — using recycled input material is a positive step, but genuine circularity also requires the product to be designed for repair, disassembly, and material recovery at end of life, which gluing components together directly prevents", correct: true, explanation: "Correct. The circular economy framework specifically emphasizes design for reuse and repair, not just input material sourcing — a product that can't be taken apart still becomes waste eventually, however it was originally made." },
      { text: "No — using any recycled material at all disqualifies a product from ever being considered part of a circular economy", correct: false, explanation: "This overcorrects. Recycled content is a genuinely valuable part of circular design, particularly for the technical cycle — the issue in this example is the lack of repairability, not the use of recycled material itself." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A modular, repairable phone design (baseline case)</h3>
      <div className="prose-p">
      Some smartphone manufacturers now design phones with modular components — a battery, screen, and camera that can each be individually swapped with basic tools rather than requiring the whole device to be discarded when one part fails. This directly implements the &quot;circulate products and materials at highest value&quot; principle: repair (replacing one component) preserves far more of the product&apos;s original value and embedded manufacturing energy than recycling the whole device for raw materials would.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Furniture-as-a-service business models (edge case / variation)</h3>
      <div className="prose-p">
      Some office furniture companies now lease furniture rather than selling it outright, retaining ownership and taking responsibility for refurbishing and redistributing items at the end of a lease rather than the customer discarding them. This is a circular economy strategy operating at the business-model level, not just the product level — because the manufacturer keeps ownership of the material value, it has a direct financial incentive to design furniture that&apos;s durable and easy to refurbish, aligning profit motive with circular design in a way a one-time sale doesn&apos;t.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why compostable packaging isn&apos;t automatically &quot;circular&quot; everywhere (real-world / applied case)</h3>
      <div className="prose-p">
      A compostable coffee cup is designed for the biological cycle — intended to break down safely and return nutrients to soil. But if a city&apos;s waste system has no industrial composting infrastructure, that same cup gets landfilled alongside ordinary trash, where it may not break down meaningfully differently from conventional packaging, since many compostable materials require the higher, sustained heat of industrial composting facilities rather than a backyard compost bin or an anaerobic landfill environment. The product&apos;s design intent and the actual waste infrastructure it ends up in both have to align for the circular loop to actually close.
      </div>

      <QuickCheck
      question="Why might a compostable product fail to deliver its intended environmental benefit in a real city?"
      options={[
      { text: "Compostable materials are always a marketing myth and never break down under any conditions", correct: false, explanation: "Compostable materials genuinely do break down under the right conditions — the issue in this example is a mismatch between the product's design intent and the local waste infrastructure, not that composting itself doesn't work." },
      { text: "If the local waste system lacks industrial composting infrastructure, a compostable product may end up landfilled instead, where it may not break down the way it was designed to under proper composting conditions", correct: true, explanation: "Correct. A circular design choice only closes the loop if the surrounding infrastructure (in this case, composting facilities) actually exists to complete that loop — otherwise the product just becomes conventional waste." },
      { text: "Compostable products are heavier than conventional packaging, which is the actual problem", correct: false, explanation: "Weight isn't the mechanism here — the real issue is whether the necessary composting infrastructure exists to process the material as intended." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Linear economy vs. circular economy"
      type="comparison"
      svgSrc="/diagrams/environment-nature-understanding-the-circular-economy-linear-vs-circular.svg"
      altText="Two diagrams side by side. Left, labeled Linear Economy, shows a straight horizontal arrow flowing through four boxes in sequence: Raw Materials, Manufacture, Use, Waste, ending in a trash icon. Right, labeled Circular Economy, shows the same first three boxes — Raw Materials, Manufacture, Use — arranged in a closed loop with a curved return arrow leading from Use back through Repair and Recycle boxes and back to Manufacture, with no ending trash icon."
      />
      <p>
      The structural difference is the closed loop on the right — value keeps circulating back into the system through repair and recycling, instead of exiting the system permanently as waste the way the linear model does.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating \"circular economy\" and \"recycling\" as synonyms.", fix: "Remember recycling is one tool within a circular system, applied after a product's useful life — genuine circularity starts with how the product is designed in the first place, prioritizing reuse and repair before recycling." },
      { mistake: "Assuming any product made from recycled material is automatically \"circular.\"", fix: "Check whether the product is also designed for disassembly, repair, or further recovery at end of life — recycled input content alone doesn't guarantee the loop closes again after this use." },
      { mistake: "Assuming compostable or biodegradable materials work the same way in any waste system.", fix: "Check whether your local waste infrastructure actually supports the material's intended end-of-life path (industrial composting, specific recycling streams) before assuming the environmental claim applies where you live." },
      ]}
      />
      <MisconceptionCallout
      myth="The circular economy is just a rebranded, more fashionable term for recycling."
      reality={<p>Recycling is a single stage within a much broader circular framework that starts at the product design phase — eliminating waste before it&apos;s created, prioritizing repair and reuse over recycling, and only recycling as a later-priority option once reuse isn&apos;t possible. A product can be highly recyclable and still not be circularly designed if it can&apos;t be repaired, disassembled, or kept in use at high value first.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When buying durable goods, look for repairability features (modular parts, available spare parts, published repair guides) as a circular-design signal, not just recycled content claims.",
      "Before assuming a compostable or biodegradable product is automatically better, check whether your local waste system actually has the infrastructure to process it as intended.",
      "Support right-to-repair policies, which directly enable the \"keep materials in use at highest value\" principle at the consumer level.",
      "Look into product-as-a-service or leasing models for items you don't need to permanently own, which can align circular incentives at the business level.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the circular economy?", answer: "An economic and design framework built on three principles — eliminate waste and pollution by design, keep materials in use at their highest value for as long as possible, and regenerate natural systems — replacing the traditional linear take-make-dispose model." },
      { question: "Is the circular economy the same thing as recycling?", answer: "No. Recycling is one tool used within a circular system, applied after a product's use, while circular economy design starts earlier — building products so they can be repaired, reused, or disassembled for material recovery in the first place." },
      { question: "Who created the circular economy concept?", answer: "The underlying ideas draw on earlier industrial ecology and cradle-to-cradle design work, but the modern, widely-cited three-principle framework was formalized and popularized by the Ellen MacArthur Foundation." },
      { question: "Why doesn't recycling alone solve the waste problem?", answer: "Recycling happens after a product's design is already fixed, and many materials (like most plastic) lose quality each time they're reprocessed — a circular approach that designs for repair and reuse first preserves far more material value than relying on recycling as the only strategy." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
