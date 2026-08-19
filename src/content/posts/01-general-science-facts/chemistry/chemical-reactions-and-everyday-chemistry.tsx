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
  title: "Chemical Reactions & Everyday Chemistry: What's Actually Happening",
  category: "general-science-facts",
  order: 12,
  subtopic: "chemistry",
  tags: [
    "chemical reactions",
    "chemistry basics",
    "reactants and products",
    "exothermic endothermic",
    "everyday chemistry",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "How to tell a chemical reaction from a physical change, why rust and rising bread dough are both real chemistry, and how a catalyst speeds a reaction up without being consumed.",
  summary: "A chemical reaction rearranges atoms into new substances with new properties, and the total mass of everything involved never changes.",
  sources: [
    { label: "Royal Society of Chemistry — What Is a Chemical Reaction?", url: "https://edu.rsc.org/resources" },
    { label: "NIST — Chemical Reference Data", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — Chemical Reaction", url: "https://www.britannica.com/science/chemical-reaction" },
  ],
  seeAlso: [
    "general-science-facts/atoms-and-elements",
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/acids-bases-and-ph",
  ],
  glossary: [
    { term: "Chemical reaction", definition: "A process where reactants are transformed into new substances (products) with different chemical properties, by breaking and forming atomic bonds." },
    { term: "Reactant", definition: "A starting substance that is consumed and chemically changed during a reaction." },
    { term: "Product", definition: "A new substance formed as the result of a chemical reaction." },
    { term: "Conservation of mass", definition: "The principle that mass is neither created nor destroyed in a chemical reaction — the total mass of reactants equals the total mass of products." },
    { term: "Exothermic reaction", definition: "A chemical reaction that releases energy, usually as heat, to its surroundings." },
    { term: "Endothermic reaction", definition: "A chemical reaction that absorbs energy from its surroundings, often causing the surroundings to feel cooler." },
    { term: "Catalyst", definition: "A substance that speeds up a chemical reaction without being permanently consumed by it." },
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
          "A chemical reaction rearranges atoms into new substances with genuinely different properties — this is what separates it from a physical change like melting or cutting.",
          "Mass is always conserved in a chemical reaction: the total mass of everything you start with exactly equals the total mass of everything you end with, even if a gas escapes and it looks like mass 'disappeared'.",
          "Reactions either release energy (exothermic, like combustion or rusting) or absorb it (endothermic, like a cold pack activating), and this energy direction explains why some reactions feel hot and others feel cold.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">chemical reaction</TermLink> happens when substances combine or break apart to form something genuinely new — not just a new shape or state, but a new substance with different properties. Rusting iron, baking a cake, digesting food, and burning a candle are all chemical reactions happening around you constantly. Cutting paper or melting ice, by contrast, are physical changes — the same substance, just rearranged or in a different state, with no new substance formed.</div>}
        detailed={<div className="prose-p">At the atomic level, a chemical reaction breaks bonds between atoms in the <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">reactants</TermLink> and forms new bonds to create the <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">products</TermLink>. Crucially, no atoms are created or destroyed in this process — only rearranged — which is the basis of <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">conservation of mass</TermLink>: the total mass of reactants always equals the total mass of products. Reactions also involve an energy exchange. Breaking bonds requires energy input; forming new bonds releases energy. When more energy is released than absorbed, the reaction is <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">exothermic</TermLink> and the surroundings warm up (combustion, rusting, most explosions). When more energy is absorbed than released, the reaction is <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">endothermic</TermLink> and the surroundings cool down (instant cold packs, photosynthesis).</div>}
      />
      <FootnoteAside>Antoine Lavoisier formalized conservation of mass in the 1770s by weighing sealed reaction vessels before and after reactions, showing total mass never changed — a foundational result that helped establish chemistry as a quantitative science rather than a descriptive one.</FootnoteAside>

      <p>
      Conservation of mass sounds like a rule for a chemistry classroom until you apply it to something that seems to violate it at first glance — like an object that appears to lose mass simply by burning.
      </p>

      <QuickCheck
        question="A piece of wood is weighed, then burned completely, and the leftover ash weighs far less than the original wood. Has mass been destroyed?"
        options={[
          { text: "No — the missing mass left as gases (mostly carbon dioxide and water vapor) that escaped into the air and weren't weighed", correct: true, explanation: "Correct. Combustion combines wood with oxygen from the air and releases gaseous products. If you captured and weighed all the gases produced too, total mass before and after would match exactly — mass isn't destroyed, it just left as invisible gas." },
          { text: "Yes — burning is one of the rare reactions where conservation of mass doesn't apply", correct: false, explanation: "Conservation of mass applies to every chemical reaction without exception, combustion included. The apparent mass loss is fully accounted for by escaping gaseous products that weren't captured on the scale." },
          { text: "The ash simply weighs less because heat makes matter lighter", correct: false, explanation: "Heat doesn't reduce an object's mass on its own — the actual explanation is that much of the original wood's mass left as gas, not that heating itself destroys mass." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Baking soda and vinegar (baseline case)</h3>
      <div className="prose-p">
      Mixing baking soda (sodium bicarbonate) and vinegar (acetic acid) produces immediate fizzing — carbon dioxide gas bubbling out, along with water and sodium acetate remaining in solution. This is a clear chemical reaction: two very different starting substances combine to form entirely new products, including a gas that wasn&apos;t present in either starting ingredient. If you weighed the sealed container before and after (so no gas could escape), the total mass would be identical — the visible fizzing is simply gas being formed and escaping, not mass vanishing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Rusting iron — a slow reaction with the same rules (edge case / variation)</h3>
      <div className="prose-p">
      Rust doesn&apos;t look explosive or dramatic like baking soda and vinegar, but it follows the identical chemical logic. Iron reacts slowly with oxygen and moisture in the air to form iron oxide (rust) — a genuinely new substance, reddish-brown, brittle, and chemically distinct from the shiny metallic iron it came from. This is exothermic, releasing a small amount of heat, though far too slowly and diffusely to notice by touch. The key insight: reaction speed varies enormously (rusting takes weeks, an explosion takes milliseconds) but the underlying chemistry — atoms rearranging into new bonds, mass conserved, energy exchanged — is identical.
      </div>

      <QuickCheck
        question="Rusting happens over weeks while an explosive reaction happens in milliseconds. What does this difference in speed tell you about whether both are 'real' chemical reactions?"
        options={[
          { text: "Both are equally real chemical reactions — reaction speed varies enormously depending on the substances and conditions, but the underlying atom-rearranging process is the same", correct: true, explanation: "Correct. Chemical reactions can range from imperceptibly slow (rusting, weathering of rock) to nearly instantaneous (explosions). Speed depends on factors like concentration, temperature, and surface area — it doesn't determine whether something counts as a genuine chemical reaction." },
          { text: "Only fast reactions like explosions count as true chemical reactions; slow processes like rusting are physical changes", correct: false, explanation: "Speed isn't the defining feature of a chemical reaction — new substance formation with new properties is. Rusting genuinely forms a new substance (iron oxide) just as much as an explosive reaction forms new products, only far more slowly." },
          { text: "Rusting is slow because it doesn't actually involve a chemical reaction, just physical weathering", correct: false, explanation: "Rusting is a textbook chemical reaction — iron combining with oxygen and water to form iron oxide, a new substance with different properties from metallic iron. It's simply a slow one due to how the reaction conditions favor a low rate." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Instant cold packs and hot packs (real-world / applied case)</h3>
      <div className="prose-p">
      Instant cold packs, used for sports injuries, work by triggering an endothermic reaction on demand: squeezing the pack breaks an internal seal, mixing water with a salt like ammonium nitrate, and the dissolving process absorbs heat energy from its surroundings, dropping the pack&apos;s temperature noticeably within seconds. Instant hot packs use the opposite principle — an exothermic reaction, often the rapid oxidation (rusting) of powdered iron once exposed to air, releasing heat instead of absorbing it. Both are ordinary chemistry, engineered into a sealed, on-demand package, and both directly demonstrate that a reaction&apos;s energy direction (exothermic versus endothermic) is a measurable, predictable, and usable physical property.
      </div>

      <p>
      One more variable changes how fast any of these reactions run without changing what they produce: a <TermLink href="/general-science-facts/chemical-reactions-and-everyday-chemistry">catalyst</TermLink>. A catalyst provides an alternative reaction pathway that needs less activation energy to get started, so the same reaction happens faster at the same temperature — without the catalyst itself being consumed or showing up in the final products. The catalytic converter under a car is an everyday example: exhaust gases pass over a honeycomb coated in platinum, palladium, and rhodium, and those metals speed up the conversion of toxic carbon monoxide and unburned fuel into carbon dioxide and water vapor, without the metals themselves being used up — the same small amount of catalyst keeps working for the life of the car. The human body runs on the same principle at a much smaller scale: enzymes are biological catalysts that speed up digestion and metabolism by factors of millions, which is the only reason reactions that would otherwise take hours in a lab happen fast enough inside you to sustain life.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Reactants rearranging into products, with mass conserved"
        type="detail"
        svgSrc="/diagrams/general-science-facts-chemical-reactions-mass-conservation.svg"
        altText="Diagram showing labeled reactant molecules on the left combining through an arrow labeled reaction into differently arranged product molecules on the right, with a balance scale beneath showing the total mass of reactants exactly equal to the total mass of products."
      />
      <p>
      The atoms present before the arrow are the exact same atoms present after it — none are added or removed, only rearranged into new bonding patterns. This is why chemical equations must always be &quot;balanced&quot;: the same number of each type of atom has to appear on both sides, a direct bookkeeping consequence of conservation of mass.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Confusing a physical change (melting, dissolving, cutting) with a chemical reaction.", fix: "Ask whether a genuinely new substance formed with different properties. Melting ice is still H₂O — a physical change. Rusting iron becomes iron oxide, a different substance — a chemical reaction." },
          { mistake: "Thinking mass disappears when a reaction produces a gas or a visible flame.", fix: "Mass is always conserved — gases and heat carry mass and energy away in ways that are easy to miss on a simple kitchen scale, but nothing is actually destroyed." },
          { mistake: "Assuming a fast, dramatic reaction is more 'chemical' than a slow one.", fix: "Reaction speed depends on conditions like concentration and temperature, not on whether a genuine chemical reaction is occurring. Rusting and explosions are both real chemical reactions at very different speeds." },
        ]}
      />
      <MisconceptionCallout
        myth="Mixing chemicals that fizz, bubble, or change color always means something dangerous or unnatural is happening."
        reality={<p>Fizzing, color changes, and heat release are simply visible signs that bonds are breaking and reforming — they happen constantly in safe, everyday contexts: bread rising uses a biological reaction producing carbon dioxide bubbles, and antacid tablets fizzing in water use the same acid-base chemistry as baking soda and vinegar. The visible drama of a reaction says nothing about whether it&apos;s dangerous — that depends entirely on the specific substances and products involved, which is why reading labels and following safety guidance matters more than judging a reaction by how dramatic it looks.</p>}
      />

      <QuickCheck
        question="An antacid tablet fizzes vigorously when dropped in water. Does the visible fizzing alone tell you whether this reaction is dangerous?"
        options={[
          { text: "No — visible fizzing just indicates gas is being released from a chemical reaction; safety depends on the specific substances involved, not how dramatic it looks", correct: true, explanation: "Correct. Fizzing (gas release) is a common, often completely safe, sign of a chemical reaction — the same visible effect appears in harmless everyday reactions like antacids and baking soda with vinegar. Danger depends on the actual chemistry involved, not the visual drama." },
          { text: "Yes — any reaction that fizzes or bubbles should be treated as hazardous", correct: false, explanation: "Fizzing alone doesn't indicate hazard level — many completely safe household and biological reactions fizz. Judging danger requires knowing the actual substances and products, not just the visible reaction." },
          { text: "Fizzing only happens in reactions involving dangerous acids", correct: false, explanation: "Fizzing results from gas being released, which happens across a wide range of both hazardous and completely harmless reactions — acid strength isn't the determining factor for whether bubbles form." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see rust, bread rising, or a fizzing tablet, identify what new substance is actually forming — that's the signature of a genuine chemical reaction.",
          "Try the baking soda and vinegar reaction in a sealed balloon-topped bottle at home and notice the balloon inflate — that's the escaping gas mass made visible.",
          "Notice whether a reaction feels warm (exothermic) or cool (endothermic) to the touch, and connect it to whether bond-forming or bond-breaking is winning out energetically.",
          "Read the related entry on Atoms & Elements to see what's actually being rearranged during a chemical reaction at the atomic level.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a chemical reaction and a physical change?", answer: "A chemical reaction forms a genuinely new substance with different properties by breaking and forming atomic bonds. A physical change (melting, cutting, dissolving without reacting) rearranges the same substance's form or state without creating anything chemically new." },
          { question: "Is rusting a chemical reaction?", answer: "Yes. Iron reacts with oxygen and moisture in the air to form iron oxide (rust), a new substance with different properties from metallic iron. It's simply a very slow, low-heat exothermic reaction compared to something like combustion." },
          { question: "Does mass ever get destroyed in a chemical reaction?", answer: "No. Conservation of mass means the total mass of reactants always equals the total mass of products. Cases that look like mass loss — such as burning wood down to ash — are explained by gaseous products escaping and carrying that mass away unseen." },
          { question: "What makes a reaction exothermic versus endothermic?", answer: "It depends on whether more energy is released forming new bonds than was absorbed breaking old ones (exothermic, releases heat, like combustion) or the reverse (endothermic, absorbs heat, like an instant cold pack activating)." },
          { question: "What is a catalyst?", answer: "A substance that speeds up a chemical reaction without being permanently consumed or changed by it. Enzymes in the human body are biological catalysts that make digestion and metabolism happen fast enough to sustain life." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
