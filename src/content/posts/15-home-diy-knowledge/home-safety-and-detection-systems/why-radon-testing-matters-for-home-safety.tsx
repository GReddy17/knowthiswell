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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Radon Testing Matters for Home Safety",
  category: "home-diy-knowledge",
  order: 35,
  subtopic: "home-safety-and-detection-systems",
  tags: ["radon testing", "radon gas", "indoor air quality", "radon mitigation", "home safety"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "Radon is an odorless, radioactive gas that seeps into homes from the soil below — testing in pCi/L is the only way to know it's there, and mitigation systems can safely remove it.",
  summary: "Radon forms continuously underground from the natural radioactive decay of uranium in soil and rock, seeps into homes through foundation cracks and gaps, and — because it has no smell, color, or taste — a pCi/L test result is the only realistic way to know whether a given home's indoor level is high enough to warrant mitigation.",
  sources: [
    { label: "EPA — U.S. Environmental Protection Agency, A Citizen's Guide to Radon", url: "https://www.epa.gov/radon/citizens-guide-radon-guide-protecting-yourself-and-your-family-radon" },
    { label: "CDC — Centers for Disease Control and Prevention, Radon", url: "https://www.cdc.gov/radon/" },
    { label: "National Cancer Institute (NCI) — Radon and Cancer", url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/substances/radon" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-carbon-monoxide-detectors-are-essential",
    "home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke",
    "home-diy-knowledge/why-air-filters-need-regular-replacement",
    "home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house",
  ],
  glossary: [
    { term: "pCi/L", definition: "Picocuries per liter — the standard U.S. unit for radon concentration in air, measuring the rate of radioactive decay events happening in that volume of air." },
    { term: "Alpha particle", definition: "A type of radiation released when radon decays, capable of damaging lung tissue if inhaled, which is the basis of radon's link to lung cancer risk." },
    { term: "Sub-slab depressurization", definition: "The most common radon mitigation method, using a fan and pipe system to draw radon gas from beneath a home's foundation and vent it safely above the roofline before it can enter living space." },
    { term: "Radioactive decay chain", definition: "The sequence of radioactive elements, starting with uranium in soil and rock, that one element transforms into as it decays — radon is one link in that chain, formed from decaying radium." },
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
  {"question": "Where does radon come from?", "difficulty": "easy", "options": [{"text": "Uranium and radium naturally decaying in soil and rock", "correct": true, "explanation": "It's produced continuously in the ground."}, {"text": "Household cleaning products", "correct": false, "explanation": "Radon is natural and comes from the ground."}, {"text": "Car exhaust", "correct": false, "explanation": "That's carbon monoxide, not radon."}]},
  {"question": "What level does the EPA recommend acting on?", "difficulty": "easy", "options": [{"text": "4 pCi/L or higher", "correct": true, "explanation": "Lower levels still carry some risk."}, {"text": "Any level above zero", "correct": false, "explanation": "The action level is 4 pCi/L."}, {"text": "Only above 100 pCi/L", "correct": false, "explanation": "The EPA's action level is far lower."}]},
  {"question": "How can you know a specific home's radon level?", "difficulty": "easy", "options": [{"text": "Only by testing it", "correct": true, "explanation": "Radon has no smell, color or taste."}, {"text": "By the home's age", "correct": false, "explanation": "Age doesn't reliably predict radon."}, {"text": "By asking the neighbors", "correct": false, "explanation": "Neighboring homes can have very different levels."}]},
  {"question": "Two similar homes on the same street test very differently. Why is that possible?", "difficulty": "hard", "options": [{"text": "Local soil, foundation cracks and entry paths vary from house to house", "correct": true, "explanation": "That's why each home needs its own test."}, {"text": "One test must be wrong", "correct": false, "explanation": "Large differences between neighbors are normal."}, {"text": "Radon only affects older homes", "correct": false, "explanation": "New homes can have high levels too."}]},
  {"question": "How does a sub-slab depressurization system lower indoor radon?", "difficulty": "hard", "options": [{"text": "A fan pulls soil gas from under the slab and vents it outside before it enters the house", "correct": true, "explanation": "It reverses the pressure that draws radon inside."}, {"text": "It filters radon out of the living room air", "correct": false, "explanation": "It works below the slab, not by filtering room air."}, {"text": "It neutralizes radon chemically", "correct": false, "explanation": "Radon is vented away, not neutralized."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Radon is a naturally occurring radioactive gas, produced continuously by decaying uranium and radium in soil and rock, and it has no smell, color, or taste to warn anyone of its presence.",
          "Radon concentration is measured in pCi/L (picocuries per liter), and the EPA recommends taking action to reduce levels at or above 4 pCi/L, though even lower levels still carry some risk.",
          "A simple test kit, not intuition or the home's age or location alone, is the only reliable way to know a specific home's radon level — nearby homes can have very different readings even on the same street.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Radon is a gas that comes up naturally from the ground almost everywhere, formed as uranium in soil and rock slowly breaks down. It seeps into homes through foundation cracks, gaps around pipes, and sump pits, and because it has no smell, color, or taste, nobody can tell it&apos;s there without testing. At low outdoor levels it&apos;s not a major concern, but it can build up to concerning concentrations indoors, especially in basements, which is why testing &#8212; not guessing based on the house&apos;s age or location &#8212; is the only real way to know.</div>}
        detailed={<div className="prose-p">Radon is a link in a naturally occurring <TermLink href="/home-diy-knowledge/why-radon-testing-matters-for-home-safety">radioactive decay chain</TermLink> that starts with uranium present in nearly all soil and rock: uranium decays into a series of other elements over a very long timescale, one of which is radium, and radium&apos;s decay produces radon gas directly. As a gas, radon can migrate upward through soil and enter a building through any point of contact with the ground &#8212; foundation cracks, gaps around utility penetrations, sump pits, or even porous concrete block &#8212; typically drawn inward by the slight negative pressure a heated or cooled home creates relative to the soil beneath it. Once radon itself decays, it produces further decay products that emit <TermLink href="/home-diy-knowledge/why-radon-testing-matters-for-home-safety">alpha particles</TermLink>, a type of radiation that can damage lung tissue if inhaled deeply enough and often enough over time; this is the documented basis of radon&apos;s link to lung cancer risk, distinct from any immediate or acute symptom. Concentration is measured in <TermLink href="/home-diy-knowledge/why-radon-testing-matters-for-home-safety">pCi/L</TermLink>, and because radon behaves as a gas subject to the same pressure differentials that drive ordinary air movement through a house, concentration can vary meaningfully by floor, by season, and even by whether windows are open, which is exactly why a short-term test is only a snapshot and a longer-term test gives a more representative picture.</div>}
      />
      <FootnoteAside>The EPA estimates radon is the second leading cause of lung cancer in the United States after smoking, and the leading cause among people who have never smoked — a genuinely documented risk, not a scare figure, which is why testing is recommended regardless of a home&apos;s age, construction type, or location.</FootnoteAside>

      <p>
        Because radon is undetectable without instrumentation and its concentration can vary by floor and season, a single informal impression of a house &#8212; &quot;it&apos;s new construction&quot; or &quot;the neighbors never mentioned it&quot; &#8212; tells you nothing reliable about its actual radon level.
      </p>

      <QuickCheck
        question="Why can't a homeowner simply tell whether radon is present in their house without testing?"
        options={[
          { text: "Radon has no smell, color, or taste, so there's no sensory way to notice it regardless of concentration", correct: true, explanation: "Correct. This is exactly why testing with a kit that measures pCi/L is the only reliable way to know a home's radon level." },
          { text: "Radon only appears in older homes, so new construction can be assumed to be radon-free", correct: false, explanation: "Radon comes from the soil beneath a house, not from the building materials or age of construction — new homes can have high levels and old homes can have low levels." },
          { text: "Radon causes a distinctive musty smell that experienced homeowners can learn to recognize", correct: false, explanation: "Radon is completely odorless — any musty smell in a home has an unrelated cause, and its presence provides no information about radon levels." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A basement short-term test result of 2.1 pCi/L (baseline case)</h3>
      <p>
        A homeowner runs a short-term radon test kit in their basement for 48 hours and gets a result of 2.1 pCi/L. This falls below the EPA&apos;s 4 pCi/L action-recommended threshold, so immediate mitigation isn&apos;t required, but it&apos;s not zero risk either &#8212; the EPA notes that risk decreases with concentration but doesn&apos;t disappear entirely below the action level. A reasonable response here is simply retesting periodically, since levels can shift with seasonal changes in ventilation and ground moisture, rather than assuming a single low reading is permanent.
      </p>
      <QuickCheck
        question="A short-term radon test comes back at 2.1 pCi/L, below the EPA's 4 pCi/L action level. What does this result mean?"
        options={[
          { text: "The home has zero radon-related risk and never needs to be tested again", correct: false, explanation: "Radon risk decreases with lower concentration but doesn't disappear at any level above zero, and levels can shift over time — periodic retesting is still reasonable." },
          { text: "The result is below the level the EPA recommends taking action on, though some residual risk remains and periodic retesting is still reasonable", correct: true, explanation: "Correct. Being under the action threshold doesn't mean zero risk — it means mitigation isn't specifically recommended at that reading, while retesting periodically still makes sense." },
          { text: "The test must have been performed incorrectly, since all basements have radon levels above 4 pCi/L", correct: false, explanation: "Radon levels vary enormously by location and specific home — a below-threshold basement reading is common and doesn't indicate a testing error." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A neighboring home testing very differently (edge case / variation)</h3>
      <div className="prose-p">
        Two nearly identical houses next door to each other test at very different radon levels &#8212; one at 1.5 pCi/L, the other at 6.8 pCi/L. This isn&apos;t a testing error; radon entry depends heavily on very local soil composition, exact foundation crack patterns, sump pit design, and even the specific pressure differential each house creates, all of which can vary meaningfully between adjacent lots. This is the core reason radon guidance never recommends skipping a test just because a neighboring or similar home tested low &#8212; the mechanism is genuinely local, not neighborhood-wide.
      </div>
      <QuickCheck
        question="Why might two neighboring, similarly built homes have very different radon test results?"
        options={[
          { text: "Because radon entry depends on very local factors — soil composition, foundation cracks, pressure differentials — that can vary meaningfully even between adjacent properties", correct: true, explanation: "Correct. Radon's entry mechanism is genuinely local to each specific structure and lot, which is why a neighbor's result doesn't substitute for testing your own home." },
          { text: "Because radon test kits are unreliable and often produce essentially random results", correct: false, explanation: "Properly used radon test kits are a reliable, standard measurement method — the variation between neighboring homes reflects real differences in radon entry conditions, not measurement error." },
          { text: "Because only homes built after a certain year are capable of having elevated radon levels", correct: false, explanation: "Radon entry is unrelated to construction year — it depends on the soil beneath the home and the pathways available for the gas to enter, not the home's age." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Installing a mitigation system after a high reading (real-world / applied case)</h3>
      <p>
        A homeowner gets a confirmed result of 8.4 pCi/L and has a <TermLink href="/home-diy-knowledge/why-radon-testing-matters-for-home-safety">sub-slab depressurization</TermLink> system installed &#8212; a fan and pipe network that draws radon gas from beneath the foundation and vents it above the roofline before it can seep indoors. After installation, a follow-up test typically shows a dramatic reduction, often into the range below the 4 pCi/L action level, confirming the system is working as intended. This mirrors standard EPA guidance: mitigation systems are a well-established, generally effective response to a confirmed elevated reading, not an experimental or last-resort measure, and the same basic principle &#8212; managing air pressure and pathways rather than trying to &quot;filter&quot; radon out of already-indoor air &#8212; is why proper ventilation design matters throughout a house, not just in the basement. It&apos;s a genuinely different job from the one a home&apos;s regular <TermLink href="/home-diy-knowledge/why-air-filters-need-regular-replacement">air filter</TermLink> does: a filter captures particles already circulating through <TermLink href="/home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house">the central air system</TermLink>, while a radon mitigation fan intercepts a gas before it ever reaches that indoor air loop.
      </p>
      <QuickCheck
        question="How does a sub-slab depressurization mitigation system actually reduce indoor radon levels?"
        options={[
          { text: "It filters radon gas out of the household air after it has already entered the living space", correct: false, explanation: "This isn't how the standard system works — it intercepts radon beneath the foundation with a fan and pipe, venting it outdoors before it ever reaches indoor air." },
          { text: "It uses a fan and pipe system to draw radon gas from beneath the foundation and vent it above the roofline before it enters the home", correct: true, explanation: "Correct. This is the standard, EPA-documented mechanism, and it's typically very effective at reducing indoor radon concentration." },
          { text: "It seals every window and door in the home to prevent any air exchange with the outdoors", correct: false, explanation: "Sealing a home tighter without addressing the soil-gas pathway can actually worsen indoor radon concentration — mitigation works by managing pressure and pathways at the source, not by sealing the living space." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Radon entry, with and without mitigation"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-why-radon-testing-matters-for-home-safety-detail.svg"
        altText="Cross-section of a house foundation showing radon gas rising from uranium decay in the soil, entering the basement through foundation cracks and gaps around pipes, versus the same house with a sub-slab depressurization mitigation pipe venting the gas above the roofline instead."
      />
      <p>
        The soil below both houses is producing the same radon &#8212; the only real difference is whether that gas has an easy path into the living space or a redirected path venting it above the roof.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a home doesn't need testing because it's new construction, or because a neighboring house tested low.", fix: "Test every home regardless of age or a neighbor's result — radon entry depends on very local soil and foundation conditions specific to that structure." },
          { mistake: "Treating a single short-term test result as a permanent, unchanging fact about the home.", fix: "Retest periodically, especially after any foundation work, and consider a longer-term test kit for a more representative seasonal average." },
          { mistake: "Sealing up a home more tightly for energy efficiency without addressing radon, assuming better insulation alone reduces radon risk.", fix: "Address radon specifically through testing and, if needed, a mitigation system — general air-sealing and insulation work targets heat loss, not the soil-gas pathway radon actually uses." },
        ]}
      />
      <MisconceptionCallout
        myth="Radon is only a problem in certain regions or in old, poorly built homes."
        reality={<p>Radon comes from uranium naturally present in soil and rock nearly everywhere, and elevated levels have been documented in homes across virtually every U.S. state, in new and old construction alike, and in well-built as well as poorly built homes. Regional radon-potential maps exist and can suggest likelihood, but they describe an average tendency across an area, not a guarantee for any individual property &#8212; a single home&apos;s actual level depends on its own specific soil conditions, foundation, and construction details, which is exactly why the EPA and CDC recommend testing every home rather than relying on general location or age as a substitute.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert a radon reading between pCi/L and Bq/m³"
        description="Radon results in the U.S. are reported in pCi/L, while many other countries use Bq/m³ (becquerels per cubic meter). Enter a pCi/L reading to see its Bq/m³ equivalent."
        fields={[
          { key: "picocuriesPerLiter", label: "Radon reading", defaultValue: 4, step: 0.1, suffix: "pCi/L" },
        ]}
        resultLabel="Equivalent concentration (Bq/m³)"
        formula="radonPicocuriesToBqPerM3"
        formatResult="number"
        disclaimer="Based on the standard unit conversion: 1 pCi/L = 37 Bq/m³. The EPA's 4 pCi/L action-recommended level is equivalent to about 148 Bq/m³."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Test your home for radon with an EPA-approved test kit, regardless of its age, construction type, or a neighboring home's result.",
          "If a short-term test comes back at or above 4 pCi/L, follow up with a second test to confirm before deciding on mitigation.",
          "Have a qualified radon mitigation professional install a sub-slab depressurization system if a confirmed reading warrants it.",
          "Retest periodically, especially after foundation repairs, renovations, or significant changes to the home's heating and cooling system.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What radon level is considered dangerous?", answer: "The EPA recommends taking action to reduce radon levels at or above 4 pCi/L, though the agency notes that risk decreases with concentration rather than disappearing entirely below that threshold — even lower levels carry some non-zero risk." },
          { question: "Can radon be smelled or seen?", answer: "No. Radon has no smell, color, or taste at any concentration relevant to human health, which is exactly why testing with a dedicated kit is the only reliable way to know a home's level." },
          { question: "How long does a radon test take?", answer: "Short-term test kits typically run 2 to 90 days and give a snapshot reading, while long-term kits run more than 90 days and give a more representative year-round average, since radon levels can shift by season." },
          { question: "Does every home need a radon mitigation system?", answer: "No — mitigation is generally recommended only after a confirmed test result at or above the EPA's 4 pCi/L action level. Testing first is the necessary step; mitigation is a targeted response to an actual measured result, not a universal requirement." },
          { question: "Is radon only a concern in basements?", answer: "Basements often have the highest readings since they're closest to the soil, but radon can migrate to upper floors as well, especially through internal stairwells and ductwork — testing guidance generally recommends checking the lowest lived-in level of the home." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
