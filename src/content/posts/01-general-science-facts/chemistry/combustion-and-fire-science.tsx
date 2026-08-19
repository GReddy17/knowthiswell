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
  title: "Combustion & Fire Science: The Chemistry Behind Every Flame",
  category: "general-science-facts",
  order: 19,
  subtopic: "chemistry",
  tags: [
    "combustion",
    "fire science",
    "fire triangle",
    "oxidation",
    "heat of combustion",
    "chemistry basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What actually has to be present for fire to exist, why water can make a grease fire worse instead of better, and the real chemistry behind a flame.",
  summary: "Fire is a self-sustaining chemical reaction — rapid oxidation that releases heat and light — and it only exists where fuel, oxygen, and enough heat are all present together at once, a relationship known as the fire triangle.",
  sources: [
    { label: "Royal Society of Chemistry — Combustion resources", url: "https://edu.rsc.org/resources" },
    { label: "NIST Engineering Laboratory — Fire Research Division", url: "https://www.nist.gov/el/fire-research-division" },
    { label: "Encyclopaedia Britannica — Combustion", url: "https://www.britannica.com/science/combustion" },
  ],
  seeAlso: [
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/heat-and-temperature",
    "general-science-facts/energy-types-and-conservation",
  ],
  glossary: [
    { term: "Combustion", definition: "A rapid, exothermic chemical reaction between a fuel and an oxidizer (usually oxygen) that releases heat and light." },
    { term: "Oxidation", definition: "A chemical reaction in which a substance combines with oxygen (or otherwise loses electrons), releasing energy in the process during combustion." },
    { term: "Fire triangle", definition: "The three ingredients required for fire to start: fuel, oxygen, and enough heat to reach the fuel's ignition point." },
    { term: "Fire tetrahedron", definition: "An extended model of the fire triangle that adds a fourth requirement — an uninhibited chemical chain reaction — needed to sustain an ongoing flame." },
    { term: "Exothermic reaction", definition: "A chemical reaction that releases energy, usually as heat, to its surroundings." },
    { term: "Heat of combustion", definition: "The amount of energy released when a specific quantity of a fuel burns completely, usually measured in joules per gram or per kilogram." },
    { term: "Incomplete combustion", definition: "Combustion that occurs without enough oxygen present, producing carbon monoxide and soot instead of only carbon dioxide and water." },
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
          "Combustion is a chemical reaction, not just heat — fuel reacts with oxygen fast enough to release large amounts of heat and light, and removing any one of fuel, oxygen, or heat stops it.",
          "Once a flame is established, it's technically sustained by a fire tetrahedron, not just a triangle — the ongoing chemical chain reaction itself has to be interrupted, not only the original three ingredients.",
          "Different fuels need different suppression methods because the underlying chemistry differs — water works on ordinary combustibles but can make a burning-oil fire dramatically worse, which is why grease fires need smothering instead.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Fire needs three things at the same time: something that can burn (fuel), oxygen from the surrounding air, and enough heat to get the reaction started. This is called the <TermLink href="/general-science-facts/combustion-and-fire-science">fire triangle</TermLink>, and it&apos;s why blowing out a candle works — you&apos;re removing heat and disrupting the flame faster than the wick can resupply it — and why a campfire dies out if you smother it with dirt, cutting off its oxygen supply.</div>}
        detailed={<div className="prose-p"><TermLink href="/general-science-facts/combustion-and-fire-science">Combustion</TermLink> is technically a fast <TermLink href="/general-science-facts/combustion-and-fire-science">exothermic reaction</TermLink> — an <TermLink href="/general-science-facts/combustion-and-fire-science">oxidation</TermLink> reaction between a fuel and an oxidizer (almost always atmospheric oxygen) that releases energy as heat and light. Starting that reaction requires activation energy, usually supplied as heat from a spark, flame, or friction, to get fuel molecules reacting fast enough for the reaction to become self-sustaining. Once a flame exists, fire science actually extends the three-sided fire triangle into a <TermLink href="/general-science-facts/combustion-and-fire-science">fire tetrahedron</TermLink> by adding a fourth face: the uninhibited chemical chain reaction itself, propagated by short-lived free radicals in the flame. This matters practically because some fire extinguishing agents (like certain dry-chemical powders) work by chemically interrupting that chain reaction directly, rather than by removing fuel, oxygen, or heat. Combustion can also be complete or incomplete depending on oxygen supply: complete combustion, with plentiful oxygen, produces mostly carbon dioxide and water vapor, while <TermLink href="/general-science-facts/combustion-and-fire-science">incomplete combustion</TermLink>, starved of oxygen, produces dangerous carbon monoxide and visible soot particles instead.</div>}
      />
      <FootnoteAside>The blue region near the base of a candle flame burns at roughly 1,400°C, hotter than the familiar yellow-orange tip above it. The blue zone has enough oxygen mixing in for combustion to run more completely; the yellow glow higher up comes from tiny unburned soot particles heated to incandescence in a zone with comparatively less oxygen, and it&apos;s actually the cooler part of the flame despite looking more intense.</FootnoteAside>

      <p>
      That fuel-oxygen-heat relationship isn&apos;t just theory — it&apos;s the exact reasoning behind why some fire-suppression methods work brilliantly on one type of fire and make another type dramatically worse.
      </p>

      <QuickCheck
        question="Blowing out a candle interrupts the flame almost instantly. Which part of the fire triangle does this primarily remove?"
        options={[
          { text: "Oxygen — your breath displaces all the air around the wick", correct: false, explanation: "A single breath doesn't meaningfully remove oxygen from the room — plenty of air remains. The dominant effect of blowing on a small flame is carrying heat away faster than the wick can resupply it." },
          { text: "Heat — the moving air rapidly carries heat away from the wick faster than the small flame can replace it, dropping the fuel below its ignition point", correct: true, explanation: "Correct. A candle flame has very little heat reserve, so a burst of moving air strips heat away faster than the wick's wax vapor can keep reigniting, and the reaction simply stops." },
          { text: "Fuel — blowing physically removes the wax from the wick", correct: false, explanation: "Blowing doesn't remove the wax fuel itself; the wick and melted wax pool remain in place. The mechanism that stops the flame is heat being carried away, not fuel being taken away." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Energy released burning a kilogram of dry wood (baseline case)</h3>
      <div className="prose-p">
      Dry wood has a heat of combustion of roughly 18 megajoules per kilogram (18,000 joules per gram). Burning 1 kilogram (1,000 grams) of dry wood completely therefore releases approximately 1,000 × 18,000 = <strong>18,000,000 joules</strong> (18 megajoules) of energy. For comparison, gasoline releases roughly 44 megajoules per kilogram — more than double wood&apos;s energy density for the same mass — which is part of why liquid fuels pack so much more usable energy into a given weight than solid biomass fuels like wood.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why water makes a grease fire explode instead of putting it out (edge case / variation)</h3>
      <div className="prose-p">
      Water is denser than hot cooking oil, so pouring water onto a burning pan of oil sends the water sinking straight down beneath the flaming oil layer. Once submerged in oil well above water&apos;s 100°C boiling point, that water flash-boils almost instantly, and liquid water expands by roughly 1,700 times in volume as it converts to steam. That explosive volume of steam erupts upward through the oil layer, violently launching burning oil droplets into the air — turning a contained stovetop fire into a much larger, more dangerous fireball. This is exactly why fire safety guidance for grease and oil fires calls for smothering (a metal lid, baking soda, or a class-appropriate fire extinguisher) instead of water — cutting off oxygen removes one leg of the fire triangle without triggering the steam-expansion hazard.
      </div>

      <QuickCheck
        question="Why does pouring water onto a burning pan of oil make the fire dramatically worse instead of putting it out?"
        options={[
          { text: "Water is denser than the hot oil and sinks beneath it, then flash-boils into steam that expands roughly 1,700-fold, violently launching burning oil droplets into the air", correct: true, explanation: "Correct. The water sinks below the oil, flash-boils on contact with the superheated oil, and the explosive steam expansion scatters flaming oil outward — this is exactly why grease fires call for smothering, not water." },
          { text: "Water chemically reacts with hot oil to produce a more flammable gas", correct: false, explanation: "There's no chemical reaction between water and oil here — this is a purely physical effect. The danger comes from water sinking, flash-boiling, and expanding explosively into steam, not a new flammable chemical forming." },
          { text: "Oil floats on water and this somehow adds more fuel to the flame", correct: false, explanation: "No additional fuel is being added — the oil that was already burning is simply the same oil. The hazard is the physical steam-expansion effect from water sinking beneath the hot oil, not extra fuel appearing." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a campfire&apos;s oxygen and heat balance (real-world / applied case)</h3>
      <p>
      A small, newly lit match has almost no heat reserve, so a hard, sudden blast of air removes heat from it faster than the tiny flame can replace it, snuffing the match out — the same mechanism as blowing out a candle. A well-established bed of glowing campfire coals is the opposite case: it holds a large reserve of stored heat, so a gentle, steady stream of air (fanning it, or blowing softly) adds oxygen faster than it strips away heat, and the coals flare back into flame instead of going out. The same basic action — blowing air onto a fire — produces opposite results depending on how much heat is already banked in the fuel, which is exactly the fuel-oxygen-heat balance the fire triangle describes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The fire triangle, extended into the fire tetrahedron"
        type="detail"
        svgSrc="/diagrams/general-science-facts-combustion-and-fire-science-fire-triangle.svg"
        altText="A triangle diagram with its three sides labeled fuel, oxygen, and heat, shown converging in the center on a flame icon, with a fourth element labeled uninhibited chemical chain reaction shown as a fourth face folding the triangle into a tetrahedron shape around the same central flame."
      />
      <p>
      The three outer faces of the tetrahedron are the classic fire triangle — remove any one of fuel, oxygen, or heat, and a fire can&apos;t start or continues can&apos;t continue. The fourth, less obvious face is the ongoing chemical chain reaction itself: some extinguishing agents, like certain dry-chemical suppressants used in kitchen and vehicle fire extinguishers, work by interrupting that chain reaction directly rather than by removing fuel, oxygen, or heat at all.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing water is always the correct way to put out any fire.", fix: "Water works well on ordinary combustibles like wood or paper, but it can make burning-oil (grease) fires and energized electrical fires significantly more dangerous — smothering or an appropriate extinguisher is the correct response for those specific fire types." },
          { mistake: "Assuming anything that looks flammable will ignite the moment it's near a flame.", fix: "Ignition requires enough activation energy (heat) to get the reaction started, not just proximity to fire — this is why some materials need a sustained heat source or higher temperature before they'll actually catch." },
          { mistake: "Thinking a brighter or larger-looking flame always means a hotter fire.", fix: "Flame color and size don't map directly onto temperature — a candle's blue base is actually hotter than its more visually prominent yellow tip, because the blue zone gets more oxygen and burns more completely." },
        ]}
      />
      <MisconceptionCallout
        myth="You should always use water to put out a fire, no matter what's burning."
        reality={<p>Which suppression method is correct depends heavily on what&apos;s actually burning. Fires involving flammable liquids and grease (often labeled Class B) can become far more dangerous with water, due to the violent steam-expansion effect of water sinking beneath hot oil and flash-boiling. Fires involving live electrical equipment (Class C) carry a shock risk if water — which conducts electricity — is used before power is cut. For any fire you&apos;re not fully confident you can safely contain with the correct method on hand, the right move is to evacuate and call emergency services rather than experiment with suppression methods.</p>}
      />

      <QuickCheck
        question="Which of the following fire types is most likely to become more dangerous, not less, if water is poured directly onto it?"
        options={[
          { text: "A pan of burning cooking oil (a grease fire)", correct: true, explanation: "Correct. Water sinks beneath the hotter, less dense oil and flash-boils into steam, expanding roughly 1,700-fold and violently scattering burning oil — smothering, not water, is the correct response for a grease fire." },
          { text: "A pile of burning dry leaves in an open yard", correct: false, explanation: "Ordinary combustibles like dry leaves or wood are exactly the case where water works well and safely, cooling the fuel below its ignition point without any dangerous side reaction." },
          { text: "A small candle flame", correct: false, explanation: "A small candle flame is easily and safely extinguished with water (or simply by blowing it out) — there's no oil or live electrical hazard involved that would make water dangerous here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate heat energy released by burning a fuel"
        fields={[
          { key: "fuelMassGrams", label: "Mass of fuel burned (grams)", defaultValue: 1000 },
          { key: "heatOfCombustionJPerGram", label: "Heat of combustion (joules per gram)", defaultValue: 18000 },
        ]}
        resultLabel="Energy released (joules)"
        formula="combustionEnergyReleased"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you blow out a candle, notice you're removing heat, not just 'blowing the fire away.'",
          "Look at a gas stove or candle flame and try to spot the hotter blue region versus the cooler yellow-orange tip.",
          "Keep a metal lid or baking soda near your stovetop as the correct response to a small grease fire, and know that any fire you're not fully confident containing safely means evacuating and calling emergency services instead.",
          "Read the related entry on Chemical Reactions & Everyday Chemistry to see how combustion fits into the broader picture of exothermic reactions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the three things fire needs to burn?", answer: "Fuel, oxygen, and enough heat to reach the fuel's ignition point — known as the fire triangle. Removing any one of the three will stop or prevent combustion." },
          { question: "Why does water make a grease fire worse?", answer: "Water is denser than hot cooking oil and sinks beneath it, then flash-boils into steam that expands roughly 1,700-fold, violently launching burning oil droplets outward — smothering the fire (a lid, baking soda, or the right extinguisher) is the correct method instead." },
          { question: "What is the fire tetrahedron?", answer: "An extended model of the fire triangle that adds a fourth requirement for an ongoing flame: an uninhibited chemical chain reaction. Some fire-suppression agents work by interrupting that chain reaction directly rather than removing fuel, oxygen, or heat." },
          { question: "Why is the blue part of a flame hotter than the yellow part?", answer: "The blue region gets more oxygen mixed in, allowing more complete combustion and a higher temperature (around 1,400°C in a candle flame). The yellow-orange glow comes from unburned soot particles heated to incandescence in a comparatively oxygen-poorer zone, and is actually cooler despite looking more intense." },
          { question: "What is the difference between complete and incomplete combustion?", answer: "Complete combustion happens with plentiful oxygen and produces mostly carbon dioxide and water vapor. Incomplete combustion happens when oxygen is limited and produces dangerous carbon monoxide and visible soot instead." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
