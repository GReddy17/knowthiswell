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
  title: "Do Thick and Thin Wires Carry the Same Current Safely?",
  category: "general-science-facts",
  order: 60,
  subtopic: "physical-science",
  pillar: true,
  tags: ["electrical resistance", "wire gauge", "electrical safety", "Ohm's law", "physics misconceptions"],
  date: "2026-09-19",
  updated: "2026-09-24",
  lastReviewed: "2026-09-19",
  excerpt: "A thin wire isn't just a smaller version of a thick one — it has more electrical resistance per foot, which makes it heat up more for the same current, the real reason wire gauge matters.",
  summary: "A thinner wire has a smaller cross-sectional area, and electrical resistance is inversely proportional to that area — meaning the same length of thinner wire has meaningfully more resistance than a thicker one made of the same material. Since resistive heating scales with the square of current times resistance, a thin wire forced to carry too much current heats up dramatically faster than a thick wire carrying the identical current, which is exactly why household circuits are protected by breakers sized to the wire gauge actually installed, not to the appliance plugged in.",
  sources: [
    { label: "National Fire Protection Association (NFPA) — National Electrical Code, Wire Ampacity Tables", url: "https://www.nfpa.org/" },
    { label: "National Institute of Standards and Technology (NIST) — Electrical Resistivity Reference Data", url: "https://www.nist.gov/" },
    { label: "U.S. Consumer Product Safety Commission (CPSC) — Electrical Wiring Safety", url: "https://www.cpsc.gov/" },
  ],
  seeAlso: [
    "general-science-facts/electricity-and-magnetism-basics",
    "general-science-facts/why-a-bird-can-safely-sit-on-a-live-power-line",
    "home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit",
    "home-diy-knowledge/what-amps-volts-and-watts-actually-measure",
  ],
  glossary: [
    { term: "Resistance", definition: "A material's opposition to the flow of electric current, measured in ohms — for a given material, resistance increases with length and decreases with cross-sectional area." },
    { term: "Ampacity", definition: "The maximum electrical current a conductor can carry continuously without exceeding its safe temperature rating, which depends heavily on the wire's gauge (thickness), material, and insulation type." },
    { term: "Resistive heating", definition: "The heat generated in a conductor as current flows through its resistance, calculated as current squared times resistance (I²R) — the same physical effect used deliberately in toasters and heaters, but unwanted and dangerous in overloaded wiring." },
    { term: "Wire gauge", definition: "A standardized numbering system (such as American Wire Gauge, AWG) describing a wire's cross-sectional thickness — counterintuitively, a lower gauge number means a thicker wire." },
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
  {"question": "Which has more electrical resistance: a thin or a thick wire of the same material and length?", "difficulty": "easy", "options": [{"text": "The thin wire", "correct": true, "explanation": "Resistance depends on cross-sectional area."}, {"text": "The thick wire", "correct": false, "explanation": "More area means less resistance."}, {"text": "They're equal", "correct": false, "explanation": "Thickness changes resistance."}]},
  {"question": "What is a wire's \"ampacity\"?", "difficulty": "easy", "options": [{"text": "The maximum current it can safely carry", "correct": true, "explanation": "Every gauge has a rated ampacity."}, {"text": "Its length", "correct": false, "explanation": "Ampacity is a safe current rating."}, {"text": "Its color code", "correct": false, "explanation": "It's about current, not color."}]},
  {"question": "What can happen if a wire carries more current than it's rated for?", "difficulty": "easy", "options": [{"text": "It can overheat, melting insulation or starting a fire", "correct": true, "explanation": "Extra resistance turns into extra heat."}, {"text": "It gets stronger", "correct": false, "explanation": "Overloading only causes heat."}, {"text": "Nothing", "correct": false, "explanation": "Overloaded wires heat up dangerously."}]},
  {"question": "Resistive heating scales with current squared times resistance. What happens if current doubles in the same wire?", "difficulty": "hard", "options": [{"text": "Heating becomes about four times greater", "correct": true, "explanation": "2² = 4."}, {"text": "Heating doubles", "correct": false, "explanation": "Current is squared, so doubling gives 4x."}, {"text": "Heating stays the same", "correct": false, "explanation": "More current means much more heat."}]},
  {"question": "Why are circuit breakers sized to the wire, not to the appliance plugged in?", "difficulty": "hard", "options": [{"text": "The breaker protects the wire in the wall from carrying more current than it can safely handle", "correct": true, "explanation": "The installed wire is what could overheat inside the walls."}, {"text": "Appliances don't use current", "correct": false, "explanation": "They do; the breaker protects the wiring."}, {"text": "Breakers are always the same size", "correct": false, "explanation": "They're matched to each wire's ampacity."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Electrical resistance depends on a wire's cross-sectional area — a thinner wire of the same material and length has meaningfully more resistance than a thicker one.",
          "Resistive heating scales with current squared times resistance, so a thin wire forced to carry a large current heats up dramatically faster than a thick wire carrying that identical current.",
          "This is exactly why every wire gauge has a rated ampacity, and why circuit breakers are sized to match the installed wire, not the appliance plugged into it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It&apos;s tempting to think of a wire as just a pipe for electricity, where thickness only matters the way pipe diameter affects water flow rate, not safety. But a thinner wire genuinely resists the flow of current more than a thick one, and that extra resistance turns into extra heat. Push too much current through a wire that&apos;s too thin for the job, and it can get hot enough to melt its insulation or start a fire &#8212; which is exactly why every wire size has a maximum safe current rating.</div>}
        detailed={<div className="prose-p">A wire&apos;s electrical <TermLink href="/general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely">resistance</TermLink> is calculated as resistivity (a property of the material) multiplied by length, divided by cross-sectional area. Doubling a wire&apos;s length doubles its resistance, but halving its cross-sectional area also doubles its resistance &#8212; a thinner wire simply offers charge carriers less room to move through per unit length, creating more collisions and more opposition to flow. That matters enormously for heat, because <TermLink href="/general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely">resistive heating</TermLink> is proportional to current squared times resistance (P = I&#178;R) &#8212; for the same current, a wire with twice the resistance generates twice the heat, and because the relationship involves current squared, even a modest current overload compounds quickly into serious overheating. This is why wire is rated by <TermLink href="/general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely">ampacity</TermLink>, the maximum current it can carry continuously without exceeding a safe temperature, and why standardized <TermLink href="/general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely">wire gauge</TermLink> tables (like those in the National Electrical Code) specify exactly how much current each thickness can safely handle.</div>}
      />
      <FootnoteAside>This is exactly why extension cords carry their own ampacity ratings, often lower than a wall outlet&apos;s breaker — running a high-draw appliance through a long, thin extension cord can overheat the cord itself well before the household breaker ever trips, since the breaker is sized to the home&apos;s wiring, not the cord.</FootnoteAside>

      <p>
        Once resistance and resistive heating are understood as functions of a wire&apos;s cross-sectional area, wire gauge charts, breaker sizing, and extension cord warnings all become the same underlying physics applied to different situations.
      </p>

      <QuickCheck
        question="A homeowner uses a thin lamp-cord-style extension cord to power a high-draw space heater rated well above the cord's ampacity. What is the actual danger mechanism?"
        options={[
          { text: "The thin cord has significantly more resistance than a properly rated cord, and the heater's current forces far more resistive heating (I²R) through it than it can safely dissipate", correct: true, explanation: "Correct. The thin cord's higher resistance means more heat is generated for the same current, and that heat can build up faster than the thin cord and its insulation can safely handle." },
          { text: "The extension cord will simply fail to deliver enough current to power the heater, with no safety risk", correct: false, explanation: "The cord doesn't just 'fail to deliver' current safely — it can still carry the current while overheating dangerously in the process, since current isn't blocked outright by higher resistance, just impeded and converted partly into heat." },
          { text: "The danger only exists because of the heater's plug design, not the cord's thickness", correct: false, explanation: "The core issue here is the cord's cross-sectional area (thickness) relative to the current demanded — a properly rated, thicker cord would carry the same current far more safely." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing resistance of two wire gauges (baseline case)</h3>
      <p>
        A 100-foot run of 14-gauge copper wire has meaningfully more resistance than the same 100-foot length of thicker 10-gauge copper wire, purely because of the smaller cross-sectional area of the 14-gauge wire — both are the same material (copper) and the same length, so cross-sectional area is the only variable. This is precisely why the National Electrical Code assigns different ampacity ratings to each gauge: 14-gauge is commonly rated around 15 amps for standard household circuits, while 10-gauge is commonly rated around 30 amps, reflecting how much more current the thicker wire can carry before generating unsafe amounts of resistive heat.
      </p>
      <QuickCheck
        question="Why does a thinner 14-gauge copper wire have more electrical resistance than a thicker 10-gauge copper wire of the exact same length?"
        options={[
          { text: "Resistance is inversely proportional to cross-sectional area, so the thinner wire's smaller area gives it more resistance for the same material and length", correct: true, explanation: "Correct. With material and length held constant, only cross-sectional area differs, and resistance increases as that area shrinks." },
          { text: "Thinner wires are made of a different, more resistive metal alloy than thicker wires", correct: false, explanation: "Both wires in this comparison are the same material (copper) — the resistance difference comes entirely from cross-sectional area, not a difference in material composition." },
          { text: "Wire gauge has no real effect on resistance, only on physical durability", correct: false, explanation: "Wire gauge directly determines cross-sectional area, which is one of the two variables (along with material) that determine a wire's resistance — this is the central mechanism behind ampacity ratings." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same current through both gauges (edge case / variation)</h3>
      <div className="prose-p">
        Force the same 20-amp current through both the 14-gauge and 10-gauge wires from the previous example. Since resistive heating scales with current squared times resistance, and the 14-gauge wire has meaningfully higher resistance, it generates noticeably more heat carrying that same 20 amps than the 10-gauge wire does &#8212; heat the thinner wire is not rated to safely dissipate on a continuous basis. This is exactly the scenario a correctly sized circuit breaker prevents: a 15-amp breaker protecting a 14-gauge circuit would trip before reaching this dangerous 20-amp condition, while a 30-amp breaker on the 10-gauge circuit would allow it to continue operating safely.
      </div>
      <QuickCheck
        question="Forcing the identical 20-amp current through both a 14-gauge and a 10-gauge wire, why does the thinner 14-gauge wire become the more dangerous one?"
        options={[
          { text: "Its higher resistance means the same current generates more resistive heat (I²R) in it than in the lower-resistance 10-gauge wire", correct: true, explanation: "Correct. Since both wires carry the identical current, the difference in heat generated comes entirely from the difference in resistance between the two gauges." },
          { text: "Current itself is somehow larger inside the thinner wire even though the same 20 amps was specified for both", correct: false, explanation: "Current is a property of the whole series circuit, so both wires do carry the same 20 amps as stated — what differs between them is how much heat that current generates, driven by their differing resistance." },
          { text: "Thinner wires are simply less durable and would fail from physical wear, not heat", correct: false, explanation: "The actual failure mechanism in this scenario is resistive heating exceeding what the thinner wire's insulation and material can safely handle, not general physical wear." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why circuit breakers are matched to wire gauge (real-world / applied case)</h3>
      <p>
        A residential electrician wiring a new kitchen circuit selects both the wire gauge and the circuit breaker together, matching a 20-amp breaker to 12-gauge wire, per NEC ampacity tables — never sizing a breaker based on the appliances that might eventually be plugged in. The breaker&apos;s entire job is to interrupt current before the installed wire&apos;s resistive heating becomes dangerous, so a breaker rated higher than the wire&apos;s safe ampacity would let a genuinely hazardous overload continue undetected, while a breaker rated lower would trip needlessly on normal loads the wire could safely handle.
      </p>
      <QuickCheck
        question="Why do electricians size circuit breakers to match the installed wire's ampacity, rather than to the appliances expected to be plugged in?"
        options={[
          { text: "The breaker's job is to interrupt current before it generates unsafe resistive heating in the actual installed wire, so it must be matched to what that specific wire can safely carry", correct: true, explanation: "Correct. A breaker sized to appliances rather than the wire could allow a current the wire itself can't safely dissipate, defeating the entire purpose of overcurrent protection." },
          { text: "Breaker sizing has no relationship to wire gauge at all — the two are selected completely independently", correct: false, explanation: "The two are directly linked precisely because the breaker exists to protect the specific wire it's paired with from exceeding its safe current-carrying (ampacity) limit." },
          { text: "A higher-rated breaker than the wire's ampacity is always safer, since it allows more current for convenience", correct: false, explanation: "The opposite is true — an oversized breaker relative to the wire's ampacity would fail to trip before the wire overheats, creating a genuine fire hazard rather than added convenience." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same current, different cross-sectional area, different heat generated"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-do-thick-and-thin-wires-carry-the-same-current-safely-comparison.svg"
        altText="Diagram comparing a thick wire and a thin wire carrying the identical current, showing the thin wire's smaller cross-section producing noticeably more resistive heating along its length than the thick wire."
      />
      <p>
        The current entering each wire is identical in this diagram — the heat difference comes entirely from each wire&apos;s cross-sectional area and the resistance that area determines.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using an extension cord or wire gauge based only on whether it physically fits, without checking its ampacity rating.", fix: "Match wire gauge (and any extension cord) to the actual current the connected device will draw, using published ampacity tables." },
          { mistake: "Assuming a circuit breaker protects any device plugged into it, regardless of the wire gauge feeding that outlet.", fix: "Remember the breaker is sized to protect the installed wire specifically — running a high-draw device through a too-thin extension cord can overheat the cord well before the breaker trips." },
          { mistake: "Thinking wire thickness is purely about physical durability, not electrical safety.", fix: "Recognize that thickness (cross-sectional area) directly determines resistance and therefore how much current a wire can carry without dangerous resistive heating." },
        ]}
      />
      <MisconceptionCallout
        myth="Any wire can safely carry any amount of current, as long as it doesn't physically melt or break under the load."
        reality={<p>A wire&apos;s cross-sectional area directly determines its electrical resistance, and resistance is what turns current into heat &#8212; a thinner wire has meaningfully more resistance than a thicker one of the same material and length, so it generates more heat carrying the identical current. Because resistive heating scales with the square of current, even a moderate overload on an undersized wire can produce dangerous, fire-risk levels of heat well before any visible physical failure occurs. This is exactly why every wire gauge carries a published ampacity rating, and why circuit breakers are deliberately matched to the specific wire gauge they protect, not to whatever might eventually be plugged in downstream.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate wire resistance from length and cross-section"
        description="Uses R = resistivity x length / cross-sectional area. Copper's resistivity is about 1.68 x 10⁻⁸ ohm-meters."
        fields={[
          { key: "resistivityOhmM", label: "Resistivity (ohm-meters) — copper ≈ 0.0000000168", defaultValue: 0.0000000168, step: 0.0000000001 },
          { key: "lengthM", label: "Wire length (meters)", defaultValue: 30, step: 1 },
          { key: "crossSectionAreaMm2", label: "Cross-sectional area (mm²)", defaultValue: 2.5, step: 0.1 },
        ]}
        resultLabel="Estimated resistance (ohms)"
        formula="wireResistanceOhms"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check that any extension cord you use is rated for the actual amperage of the device plugged into it, especially for space heaters or high-draw appliances.",
          "Never assume a circuit breaker protects a downstream extension cord or accessory wire — it's sized only to the home's own installed wiring.",
          "If a cord or wire feels warm to the touch during normal use, treat it as a sign of undersized wiring for the load, not something to ignore.",
          "When adding a new circuit or outlet, follow National Electrical Code ampacity tables to match wire gauge to the expected current draw and breaker size.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Do thick and thin wires carry electricity the same way?", answer: "They carry current using the same basic physics, but a thinner wire has more electrical resistance for the same length and material, which means it generates more heat carrying the identical current — a real safety difference, not just a durability one." },
          { question: "Why do wire gauge charts list a maximum current (ampacity) for each thickness?", answer: "Because resistive heating scales with current squared times resistance, and thinner wires have higher resistance — ampacity ratings specify the maximum current each gauge can carry continuously without generating unsafe heat." },
          { question: "Why does an extension cord sometimes get hot even though the wall breaker never trips?", answer: "The breaker is sized to protect the home's own installed wiring, not the extension cord — a thin cord carrying a high-draw device's current can overheat well below the current level the breaker is designed to interrupt." },
          { question: "Is a lower wire gauge number thicker or thinner?", answer: "Thicker. In the American Wire Gauge (AWG) system, counterintuitively, a lower number means a larger cross-sectional area and thicker wire, while a higher number means thinner wire." },
          { question: "Why are circuit breakers matched to specific wire gauges rather than to appliances?", answer: "A breaker's job is to interrupt current before it generates dangerous resistive heating in the wire it protects, so it must be sized to that wire's actual ampacity rating, not to whatever device happens to be plugged in downstream." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
