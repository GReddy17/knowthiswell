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
  title: "How Fire Extinguisher Class Ratings Actually Work",
  category: "home-diy-knowledge",
  order: 33,
  subtopic: "home-safety-and-detection-systems",
  tags: ["fire extinguisher", "extinguisher class rating", "fire safety", "grease fire", "electrical fire"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "Fire extinguisher classes (A, B, C, D, K) match specific fuel types, and using the wrong class — like water on a grease fire — can make a fire dramatically worse.",
  summary: "A fire extinguisher's class rating describes which fuel type its agent is actually built to fight, because putting out a fire means interrupting a specific chemical or physical process, and an agent that works perfectly on one fuel type can actively spread or reignite another.",
  sources: [
    { label: "NFPA — National Fire Protection Association, NFPA 10 Standard for Portable Fire Extinguishers", url: "https://www.nfpa.org/codes-and-standards/1/13/nfpa-10" },
    { label: "USFA — U.S. Fire Administration, Fire Extinguishers", url: "https://www.usfa.fema.gov/prevention/home-fires/" },
    { label: "CPSC — U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov" },
    { label: "UL Standards & Engagement — UL 299 Standard for Dry Chemical Fire Extinguishers", url: "https://www.ul.com" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke",
    "home-diy-knowledge/why-carbon-monoxide-detectors-are-essential",
    "home-diy-knowledge/why-gfci-outlets-exist",
    "home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit",
    "home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home",
  ],
  glossary: [
    { term: "Fire triangle", definition: "The three elements every fire needs to keep burning — fuel, oxygen, and heat — and the basic idea behind every extinguishing agent: remove at least one of the three." },
    { term: "Class rating", definition: "A letter (A, B, C, D, or K) printed on an extinguisher indicating which category of fuel its agent is designed and tested to put out safely." },
    { term: "Dry chemical agent", definition: "A fine powder-based extinguishing agent, commonly used in multipurpose A-B-C extinguishers, that interrupts the chemical chain reaction of combustion." },
    { term: "Saponification", definition: "A chemical reaction between a Class K wet-chemical agent and hot cooking oil that converts the oil's surface into a soap-like foam layer, smothering the fire and sealing out oxygen." },
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
  {"question": "What does Class A on a fire extinguisher cover?", "difficulty": "easy", "options": [{"text": "Ordinary combustibles like paper and wood", "correct": true, "explanation": "Class A is for everyday solid fuels."}, {"text": "Cooking oils", "correct": false, "explanation": "That's Class K."}, {"text": "Live electrical equipment", "correct": false, "explanation": "That's Class C."}]},
  {"question": "What does Class K cover?", "difficulty": "easy", "options": [{"text": "Combustible metals", "correct": false, "explanation": "That's Class D."}, {"text": "Cooking oils and fats", "correct": true, "explanation": "K units are built for deep fryers and kitchen grease."}, {"text": "Flammable liquids like gasoline", "correct": false, "explanation": "That's Class B."}]},
  {"question": "Are class letters a strength scale from weak to strong?", "difficulty": "easy", "options": [{"text": "Yes, K is the strongest", "correct": false, "explanation": "Letters aren't a strength ranking."}, {"text": "No, they're a compatibility match with the type of fuel", "correct": true, "explanation": "Each agent is built for a specific fuel category."}, {"text": "Yes, A is the strongest", "correct": false, "explanation": "They describe fuel type, not power."}]},
  {"question": "Why is water dangerous on a stovetop grease fire?", "difficulty": "hard", "options": [{"text": "Water makes grease burn hotter chemically", "correct": false, "explanation": "The danger is physical: flash boiling and splattering."}, {"text": "Water sinks under the hot oil, flashes to steam and throws flaming grease outward", "correct": true, "explanation": "Using the wrong class can spread burning fuel and make the fire far worse."}, {"text": "Water is harmless but just doesn't work", "correct": false, "explanation": "It's actively dangerous, not just ineffective."}]},
  {"question": "Which home most needs a Class D extinguisher in addition to an A-B-C unit?", "difficulty": "hard", "options": [{"text": "A home with a workshop that machines reactive metals like magnesium", "correct": true, "explanation": "Combustible metals need a specific Class D agent."}, {"text": "Any home with a fireplace", "correct": false, "explanation": "Wood fires are Class A, which A-B-C covers."}, {"text": "A home with a TV", "correct": false, "explanation": "Electrical fires are Class C, which A-B-C covers."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Extinguisher class ratings (A, B, C, D, K) exist because different fuels need different physical or chemical actions to actually stop burning, not because of arbitrary labeling.",
          "Using the wrong class isn't just ineffective — on some fuels, like a grease fire hit with water, it can actively spread flaming fuel and make the fire dramatically worse.",
          "A multipurpose A-B-C extinguisher covers the fuel types found in most homes, but a kitchen with a deep fryer or a workshop with reactive metals may genuinely need a Class K or Class D unit as well.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every fire extinguisher is labeled with one or more letters &#8212; A, B, C, D, or K &#8212; and each letter means the extinguisher&apos;s contents are built to put out a specific category of fuel: ordinary combustibles, flammable liquids, live electrical equipment, combustible metals, or cooking oils and fats. The letters aren&apos;t a marketing scale from weak to strong &#8212; they&apos;re a compatibility match. An agent that works safely on one fuel type can be genuinely dangerous on another.</div>}
        detailed={<div className="prose-p">Every fire needs the same three things to keep burning &#8212; fuel, oxygen, and heat, together called the <TermLink href="/home-diy-knowledge/how-a-fire-extinguisher-class-rating-works">fire triangle</TermLink> &#8212; and every extinguishing agent works by removing one or more of those three, but the physically correct way to do that depends heavily on the fuel. Class A covers ordinary solid combustibles like wood, paper, and cloth, where water or a <TermLink href="/home-diy-knowledge/how-a-fire-extinguisher-class-rating-works">dry chemical agent</TermLink> cools the fuel below its ignition point effectively. Class B covers flammable liquids and gases, where water is actively counterproductive: water is denser than most burning liquids, so it sinks beneath the fuel, flashes instantly to steam, and can violently scatter burning liquid outward instead of smothering it &#8212; Class B agents instead work by smothering the surface (foam, CO2, dry chemical) rather than cooling from below. Class C covers fires involving live electrical equipment — often started by the same kind of <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">circuit overload</TermLink> that a properly sized <TermLink href="/home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home">circuit breaker</TermLink> is designed to prevent — where the defining requirement for the extinguishing agent is that it be non-conductive, since a conductive stream could complete a circuit through the person holding it. Class D covers combustible metals like magnesium or titanium shavings, which can react violently and unpredictably with water, requiring specialized dry powder agents instead. Class K, a special case of flammable liquid, covers hot cooking oils and fats specifically, where a wet-chemical agent triggers <TermLink href="/home-diy-knowledge/how-a-fire-extinguisher-class-rating-works">saponification</TermLink> &#8212; a chemical reaction that converts the oil&apos;s surface into a soapy foam layer, smothering the fire far more safely than a general-purpose B-rated agent would on hot, deep oil.</div>}
      />
      <FootnoteAside>Most household fire extinguishers are labeled &quot;A-B-C,&quot; meaning a single multipurpose dry chemical agent has been tested and rated effective across all three of the most common home and small-office fuel categories.</FootnoteAside>

      <p>
        Because the class rating describes a genuine chemical or physical match to a fuel type, the label isn&apos;t a suggestion &#8212; using an extinguisher outside its rated classes can turn a small, manageable fire into a much larger one.
      </p>

      <QuickCheck
        question="What does a fire extinguisher's class rating (A, B, C, D, K) actually indicate?"
        options={[
          { text: "How powerful or large the extinguisher is compared to other models", correct: false, explanation: "Class letters don't rank strength or size — they indicate which specific fuel category the extinguisher's agent is designed to safely and effectively put out." },
          { text: "Which category of fuel the extinguishing agent is designed and tested to put out safely", correct: true, explanation: "Correct. Each class letter corresponds to a fuel category — ordinary combustibles, flammable liquids, electrical equipment, metals, or cooking oils — matched to an appropriate extinguishing method." },
          { text: "How many times the extinguisher can be discharged before needing a refill", correct: false, explanation: "Discharge capacity is a separate spec from the class rating — the class letters are strictly about fuel-type compatibility, not how much agent the unit holds." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A small wastebasket paper fire (baseline case)</h3>
      <p>
        A lit cigarette starts a small fire in a wastebasket full of paper &#8212; a straightforward Class A fuel. A multipurpose A-B-C extinguisher, or even a controlled amount of water, cools the burning paper below its ignition point and stops the fire with no unusual risk. This is the simplest and most forgiving case: ordinary combustibles are the fuel type water and most common agents were originally designed around.
      </p>
      <QuickCheck
        question="Why is water generally an effective and safe choice on a small paper or wood fire?"
        options={[
          { text: "Because water cools the solid fuel below its ignition temperature, which is an effective way to stop a Class A fire", correct: true, explanation: "Correct. Ordinary combustibles like paper and wood respond well to cooling, making water (or a general agent) effective and safe for this fuel type." },
          { text: "Because water is always safe to use on any fire, regardless of fuel type", correct: false, explanation: "Water is not safe on every fuel type — it's specifically dangerous on flammable liquids, electrical equipment, and reactive metal fires, which is the whole point of class ratings." },
          { text: "Because paper fires don't actually need any extinguishing agent and burn out on their own quickly", correct: false, explanation: "Paper fires can spread quickly to nearby combustibles — they aren't self-limiting, which is why prompt extinguishing still matters." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A grease fire on a stovetop (edge case / variation)</h3>
      <div className="prose-p">
        Oil in a frying pan overheats and ignites on the stovetop &#8212; a Class K (and more broadly Class B) fuel. Throwing water on it is the single most dangerous mistake possible here: water sinks below the much-denser hot oil, flash-boils into steam almost instantly, and can launch burning oil droplets outward in a fireball, spreading fire rather than stopping it. The correct response is smothering the pan with a metal lid or a Class K-rated extinguisher (or, in a broader kitchen-fire context, a general Class B/C multipurpose agent if a K-rated unit isn&apos;t available), cutting off the oxygen the fire needs rather than trying to cool it with water.
      </div>
      <QuickCheck
        question="Why is throwing water on a stovetop grease fire specifically dangerous, compared to a Class A fire?"
        options={[
          { text: "Water sinks beneath the denser hot oil and flash-boils into steam, which can violently scatter burning oil outward", correct: true, explanation: "Correct. This is exactly why grease fires (Class K/B) require a smothering approach, not the cooling approach that works on Class A fuels like paper or wood." },
          { text: "Water reacts chemically with cooking oil to produce a more flammable compound", correct: false, explanation: "The danger isn't a new flammable compound — it's the physical effect of water sinking below hot oil and flashing to steam, which scatters burning fuel." },
          { text: "Water has no effect at all on a grease fire, so it's simply a wasted, but harmless, action", correct: false, explanation: "Water on a grease fire is actively dangerous, not merely ineffective — the steam-flash effect can spread the fire and cause burn injuries." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing which extinguishers to keep in a home (real-world / applied case)</h3>
      <p>
        A homeowner stocking fire safety equipment puts a multipurpose A-B-C extinguisher in the garage and hallway, and adds a small Class K unit specifically in the kitchen because of regular deep frying. This mirrors how NFPA and fire-safety guidance actually recommend equipping a home: a general-purpose extinguisher for most rooms, supplemented by a specialty-rated unit anywhere a specific higher-risk fuel &#8212; deep frying oil, a metalworking bench with magnesium shavings &#8212; is a regular part of that space&apos;s normal use. The goal is matching the extinguisher to the fuel actually present, not assuming one unit covers every room equally well.
      </p>
      <QuickCheck
        question="Why might a household keep a Class K extinguisher in the kitchen in addition to a general A-B-C unit elsewhere in the home?"
        options={[
          { text: "Because Class K units are simply a stronger, upgraded version of an A-B-C extinguisher", correct: false, explanation: "Class K isn't a stronger general-purpose unit — it's a specialized wet-chemical agent matched specifically to hot cooking oil fires, a fuel type where a general A-B-C agent is less well suited." },
          { text: "Because a room with a specific higher-risk fuel, like deep frying oil, benefits from an extinguisher specifically matched to that fuel's correct extinguishing method", correct: true, explanation: "Correct. This is exactly the reasoning behind class ratings — matching the agent's method to the fuel actually present in that space." },
          { text: "Because A-B-C extinguishers are not legally permitted in a kitchen under any circumstances", correct: false, explanation: "A-B-C extinguishers are commonly present in kitchens too — the point of adding a Class K unit is better-matched protection for oil fires specifically, not a prohibition on general-purpose units." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Wrong class vs. right class on the same grease fire"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-how-a-fire-extinguisher-class-rating-works-comparison.svg"
        altText="Comparison showing why using a water-type Class A fire extinguisher on a grease fire is dangerous, spreading burning oil and creating a fireball, versus a Class K extinguisher, which smothers a grease fire safely by forming a foam layer that cuts off oxygen and cools the oil."
      />
      <p>
        Same fuel, same starting fire &#8212; the outcome flips entirely based on whether the agent&apos;s method actually matches how that fuel needs to be extinguished.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using water, or a water-based extinguisher, on a grease or oil fire.", fix: "Smother a grease fire with a metal lid or use a Class K (or B-rated) extinguisher — never water, which can scatter burning oil." },
          { mistake: "Using a conductive extinguishing agent, like a plain water stream, near live electrical equipment.", fix: "Use a Class C-rated (or multipurpose) extinguisher near anything electrical, since a conductive stream risks shocking the person holding it." },
          { mistake: "Assuming one general-purpose extinguisher covers every fuel type equally well in every room.", fix: "Match specialty extinguishers — Class K for deep-frying kitchens, Class D for metalworking areas — to any room with a specific higher-risk fuel." },
        ]}
      />
      <MisconceptionCallout
        myth="Water works fine on any small fire — it's cooling, so it can't make things worse."
        reality={<p>Water is genuinely effective at cooling ordinary solid fuels like wood and paper below their ignition temperature, which is why it works well on Class A fires. But on a flammable-liquid or hot-oil fire, water&apos;s higher density means it sinks beneath the burning fuel and flash-boils into steam almost instantly, which can violently scatter burning liquid outward rather than putting the fire out. Water is also conductive, making it dangerous near live electrical equipment. &quot;Cooling&quot; isn&apos;t the universal mechanism every fire needs stopped &#8212; some fuels need smothering, some need a non-conductive agent, and matching the method to the fuel is the entire reason class ratings exist.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the class letters on any extinguisher you already own, and confirm they match the fuel types actually present in that room.",
          "Add a Class K extinguisher near any kitchen with regular deep frying, and a Class D unit near any workshop with reactive metal shavings.",
          "Keep at least one multipurpose A-B-C extinguisher easily accessible on each level of the home, per NFPA guidance.",
          "If a fire is larger than a small, contained flame, or you're unsure of the correct extinguisher class, evacuate and call the fire department rather than attempting to fight it yourself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What do the letters A, B, C, D, and K mean on a fire extinguisher?", answer: "Each letter marks a fuel category the extinguisher's agent is designed to safely put out: A for ordinary combustibles like wood and paper, B for flammable liquids and gases, C for live electrical equipment, D for combustible metals, and K for cooking oils and fats." },
          { question: "Is it safe to use water on a grease fire?", answer: "No. Water is denser than hot oil, sinks beneath it, and flash-boils into steam, which can violently scatter burning oil outward. A grease fire should be smothered with a metal lid or put out with a Class K or Class B-rated extinguisher, never water." },
          { question: "What's the difference between a Class B and a Class K extinguisher?", answer: "Both address flammable liquids, but Class K is a specialized wet-chemical agent tuned specifically for hot cooking oils and fats, triggering a soap-forming reaction that smothers deep-fryer-style fires more effectively and safely than a general Class B agent." },
          { question: "Do I need a special extinguisher for an electrical fire?", answer: "You need one rated Class C, which specifically means the agent is non-conductive and safe to use near live electrical equipment — this rating is commonly combined with A and B on standard multipurpose home extinguishers." },
          { question: "How many fire extinguishers should a home have?", answer: "General fire-safety guidance recommends at least one general-purpose extinguisher per level of the home, plus a specialty-rated unit (such as Class K) in any room with a specific higher-risk fuel, like a kitchen with regular deep frying." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
