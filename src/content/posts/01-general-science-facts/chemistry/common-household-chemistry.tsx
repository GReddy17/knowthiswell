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
  title: "Common Household Chemistry: The Real Chemistry Behind Cleaning Products",
  category: "general-science-facts",
  order: 14,
  subtopic: "chemistry",
  tags: [
    "household chemistry",
    "cleaning chemicals",
    "bleach and ammonia",
    "soap and surfactants",
    "chemical safety",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How soap actually lifts away grease, why bleach and ammonia must never be mixed, and what's really going on inside common household cleaning chemistry.",
  summary: "Household cleaning products work through real, predictable chemistry — soap bridges water and oil, and certain combinations like bleach and ammonia react dangerously, not just as a warning label.",
  sources: [
    { label: "U.S. CPSC — Chemical Hazards in the Home", url: "https://www.cpsc.gov/" },
    { label: "Royal Society of Chemistry — Soap and Surfactants", url: "https://edu.rsc.org/resources" },
    { label: "CDC — Chemical Safety: Never Mix Bleach and Ammonia", url: "https://www.cdc.gov/" },
  ],
  seeAlso: [
    "general-science-facts/acids-bases-and-ph",
    "general-science-facts/mixtures-solutions-and-separation",
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
  ],
  glossary: [
    { term: "Surfactant", definition: "A compound (like soap) that reduces water's surface tension and bridges water and oil-based substances, letting them mix and be rinsed away together." },
    { term: "Hydrophilic", definition: "'Water-loving' — a molecular part that is attracted to and dissolves in water." },
    { term: "Hydrophobic", definition: "'Water-fearing' — a molecular part that repels water and instead is attracted to oils and fats." },
    { term: "Oxidizer", definition: "A substance (like bleach) that reacts by taking electrons from other substances, often used to break down stains and kill microorganisms." },
    { term: "Toxic gas reaction", definition: "A chemical reaction between household products that produces a harmful gas, such as chloramine vapors from mixing bleach and ammonia-based cleaners." },
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
          "Soap works because its molecules have two different ends — one that bonds with water, one that bonds with oil and grease — physically bridging the two so grease can be rinsed away with water.",
          "Bleach and ammonia-based cleaners must never be mixed: the reaction produces toxic chloramine vapors that can cause serious respiratory injury, and this is real, documented chemistry, not an exaggerated warning.",
          "Most cleaning chemistry boils down to a handful of principles — surfactants, oxidizers, and acid-base reactions — repeated across dozens of different product formulations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Water alone doesn&apos;t wash away grease and oil, because water and oil don&apos;t mix — that&apos;s why a greasy pan rinsed with plain water still feels slick. Soap solves this by having one end of its molecule that likes water and one end that likes oil, letting it grab onto grease and carry it into the water to be rinsed away. Bleach works differently, breaking down stains and killing germs through a strong chemical reaction — and that reactive strength is exactly why bleach becomes dangerous if combined with the wrong other chemical, like ammonia.</div>}
        detailed={<div className="prose-p">Soap and most liquid detergents are <TermLink href="/general-science-facts/common-household-chemistry">surfactants</TermLink> — molecules with a <TermLink href="/general-science-facts/common-household-chemistry">hydrophilic</TermLink> (water-attracting) head and a <TermLink href="/general-science-facts/common-household-chemistry">hydrophobic</TermLink> (water-repelling, oil-attracting) tail. In water, surfactant molecules surround grease droplets with their oily tails pointed inward and their water-loving heads pointed outward, forming tiny spheres called micelles that stay suspended in water instead of clinging to a surface — this is what lets rinsing carry grease away instead of just spreading it around. Bleach (typically sodium hypochlorite) is an <TermLink href="/general-science-facts/common-household-chemistry">oxidizer</TermLink> — it breaks down colored stains and disrupts microorganisms by stripping electrons from other molecules. Mixed with ammonia (found in some glass cleaners and homemade solutions), bleach reacts to form <TermLink href="/general-science-facts/common-household-chemistry">toxic gases</TermLink> including chloramine vapors, which can cause coughing, chest pain, and serious respiratory damage even in a well-ventilated space.</div>}
      />
      <FootnoteAside>Poison control centers across multiple countries report bleach-ammonia mixing as one of the most common accidental household chemical exposure incidents — most cases happen not from deliberate mixing, but from combining two separately labeled cleaning products that both happen to contain one of these ingredients.</FootnoteAside>

      <p>
      Understanding surfactants explains why soap works at all — but the more urgent, practical chemistry to internalize is exactly which combinations of ordinary cleaning products turn a safe routine into a genuine hazard.
      </p>

      <QuickCheck
        question="Why doesn't rinsing a greasy pan with plain water alone remove the grease?"
        options={[
          { text: "Water and oil don't mix — water molecules can't bond with or surround oily grease molecules without a surfactant like soap to bridge them", correct: true, explanation: "Correct. Water is a poor solvent for oils and fats on its own. Soap's surfactant molecules bridge the two, surrounding grease with a water-friendly outer layer so it can be carried away by rinsing." },
          { text: "Water isn't hot enough at typical tap temperatures to interact with grease at all", correct: false, explanation: "Temperature helps loosen grease somewhat, but the fundamental problem is chemical, not thermal — water and oil simply don't mix regardless of temperature, which is why soap (not just hot water) is needed." },
          { text: "Grease actively repels water through an electric charge", correct: false, explanation: "This isn't the mechanism — the real issue is that water and oil molecules aren't chemically compatible enough to mix on their own, a property called being immiscible, not an active repulsion force." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Washing a greasy plate with soap (baseline case)</h3>
      <div className="prose-p">
      Rub soap onto a greasy plate under running water, and surfactant molecules immediately begin surrounding grease droplets with their oily tails burrowing into the fat and their water-loving heads facing outward into the surrounding water. This forms micelles — microscopic grease-carrying spheres that stay suspended in the water rather than re-sticking to the plate — which is why the water runs cloudy rather than the grease simply spreading thinner across the surface. Rinsing then carries those suspended micelles away entirely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why bleach and ammonia must never be combined (edge case / variation)</h3>
      <div className="prose-p">
      Bleach (sodium hypochlorite solution) reacting with ammonia produces a cascade of reactions generating chloramine gases — compounds that are respiratory irritants at low exposure and can cause serious lung injury at higher concentrations. This danger applies even when neither product is labeled with the word &quot;ammonia&quot; explicitly: some glass cleaners, some multi-purpose cleaners, and even urine (which breaks down into ammonia-related compounds) can trigger the same reaction if combined with bleach in an enclosed space like a bathroom. This is exactly why cleaning product labels warn against mixing different cleaning chemicals in general, rather than just naming bleach and ammonia specifically — the safest default is never combining two different cleaning products at all.
      </div>

      <QuickCheck
        question="A bathroom cleaner doesn't have 'ammonia' printed on its label, but a person mixes it with bleach anyway and experiences coughing and eye irritation. What's the most likely explanation?"
        options={[
          { text: "The cleaner likely contains ammonia-related compounds not obviously labeled as such, and reacted with the bleach to produce toxic chloramine gases", correct: true, explanation: "Correct. Many cleaning products contain ammonia or ammonia-related compounds without the word appearing prominently on the label — this is exactly why general advice is to never mix different cleaning products, not just to avoid products explicitly labeled ammonia." },
          { text: "Bleach alone, without any other chemical involved, always produces irritating fumes when opened", correct: false, explanation: "Bleach used alone, with adequate ventilation and away from other chemicals, doesn't typically produce the severe irritation described — the reaction with another chemical (likely ammonia-related) is the more consistent explanation." },
          { text: "The symptoms were unrelated to the cleaning products and coincidental", correct: false, explanation: "Coughing and eye irritation immediately following mixing two cleaning chemicals is a well-documented pattern matching chloramine gas exposure — treating it as coincidence ignores the known chemistry." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How dishwasher detergent handles hard water minerals (real-world / applied case)</h3>
      <div className="prose-p">
      Hard water contains dissolved calcium and magnesium ions that react with ordinary soap to form a sticky, insoluble residue — soap scum — instead of rinsing cleanly. Dishwasher and laundry detergents address this with added water softeners (often compounds that bind to calcium and magnesium ions, effectively removing them from solution before they can interfere) alongside the primary surfactants. This is why a detergent formulated for hard water regions performs noticeably better there than plain bar soap would, and why some regions see more scale buildup and cleaning difficulty than others purely due to their local water mineral content.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a surfactant molecule surrounds a grease droplet"
        type="detail"
        svgSrc="/diagrams/general-science-facts-household-chemistry-micelle.svg"
        altText="Diagram of a cross-section circle labeled micelle, showing many soap molecules arranged with their water-loving round heads pointing outward toward surrounding water and their oily tails pointing inward toward a trapped grease droplet at the center."
      />
      <p>
      Each soap molecule orients itself at the boundary between water and grease, tail-first into the fat. Enough molecules surrounding a single grease droplet form a stable sphere — a micelle — small enough to stay suspended in water rather than settling back onto a surface, which is the entire physical mechanism that makes rinsing effective.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'natural' or 'homemade' cleaning mixtures are automatically safe to combine.", fix: "Danger comes from chemical composition, not from whether a product is store-bought or homemade — vinegar mixed with bleach, for example, releases toxic chlorine gas, regardless of how natural either ingredient sounds." },
          { mistake: "Thinking hotter water alone can substitute for soap when washing greasy dishes.", fix: "Heat can loosen grease somewhat, but water and oil remain fundamentally immiscible at any reasonable temperature — a surfactant is still needed to actually lift grease away rather than just spread it." },
          { mistake: "Believing a cleaning product is safe to mix with anything as long as it doesn't say 'ammonia' or 'bleach' on the front label.", fix: "Check full ingredient lists, not just prominent labels — many multi-purpose cleaners contain ammonia-related or bleach-related compounds without those exact words being the headline term." },
        ]}
      />
      <MisconceptionCallout
        myth="Using more cleaning product, or combining several different cleaners at once, always cleans better."
        reality={<p>Combining cleaning chemicals is far more likely to create a hazardous reaction (like bleach and ammonia producing toxic chloramine gas) than to clean more effectively — most cleaning products are formulated to work best alone, and layering them can even leave more residue or damage surfaces. Using significantly more than the recommended amount of a single product also rarely improves results past a certain point, since surfactants and other active ingredients work by a fixed, saturating chemical mechanism, not an unlimited scaling one.</p>}
      />

      <QuickCheck
        question="A person combines two different bathroom cleaning sprays hoping for extra cleaning power. What is the actual, well-documented risk of this habit?"
        options={[
          { text: "The combination could trigger a dangerous chemical reaction (such as toxic gas release) rather than improved cleaning performance", correct: true, explanation: "Correct. Many household cleaning chemical combinations, especially those involving bleach and ammonia-related compounds, react to produce toxic gases rather than providing any cleaning benefit — this is a well-documented household safety hazard." },
          { text: "The combination is guaranteed to clean more effectively, with no meaningful safety concern", correct: false, explanation: "This ignores real, documented chemical hazards. Certain common cleaning product combinations react dangerously rather than combining their cleaning power additively." },
          { text: "Combining cleaners has no chemical effect at all, positive or negative", correct: false, explanation: "Combining certain cleaning chemicals absolutely has a chemical effect — in hazardous cases, a genuine reaction occurs that can produce harmful gases, which is why general safety guidance warns against mixing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the ingredient labels of your household cleaners for ammonia or bleach (sodium hypochlorite), and store them separately, never combining them.",
          "Next time you wash greasy dishes, notice how the water turns cloudy rather than the grease simply spreading — that's micelles forming and carrying grease away.",
          "Ventilate any space well when using bleach-based products, and never use them in an already-cleaned space that may still have ammonia-based residue.",
          "Read the related entry on Acids, Bases & pH to see how the acid-base chemistry in some cleaners connects to this same reactive framework.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why should you never mix bleach and ammonia?", answer: "The reaction produces toxic chloramine gases that irritate the respiratory system and can cause serious lung injury at higher exposure, even in a well-ventilated space. This applies to any ammonia-containing product, not just bottles explicitly labeled 'ammonia.'" },
          { question: "How does soap actually remove grease?", answer: "Soap molecules have a water-attracting head and an oil-attracting tail. They surround grease droplets, tail-first, forming microscopic spheres called micelles that stay suspended in water and get carried away when rinsed, instead of the grease simply spreading around." },
          { question: "Is it safe to mix different brands of the same type of cleaning product?", answer: "Generally the concern is about mixing different active chemical types (like bleach-based and ammonia-based products), not brands specifically — but the safest practice is to avoid combining any two different cleaning products unless a label explicitly confirms it's safe." },
          { question: "Why doesn't hot water alone clean greasy dishes as well as soap and water?", answer: "Water and oil remain chemically immiscible even when heated — a surfactant like soap is still required to bridge water and grease so it can be rinsed away, rather than just loosened and spread." },
          { question: "What household products commonly contain ammonia even if not labeled that way?", answer: "Some glass cleaners and multi-purpose cleaners contain ammonia or ammonia-related compounds without prominently stating it on the front label — checking full ingredient lists, and avoiding combining cleaning products altogether, is the safest approach." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
