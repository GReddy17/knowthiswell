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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Oven Temperature Conversions Worldwide",
  category: "units-measurement-conversions",
  order: 27,
  subtopic: "temperature-and-energy",
  tags: [
    "oven temperature",
    "gas mark",
    "celsius",
    "fahrenheit",
    "cooking measurement",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "UK recipes use gas marks, US recipes use Fahrenheit, and most of the world uses Celsius — converting between them means combining the standard temperature formula with a rough gas-mark approximation.",
  summary: "Oven temperatures appear in three common systems worldwide — Celsius, Fahrenheit, and UK gas marks — and converting between them combines the standard Celsius-Fahrenheit formula with an approximate gas-mark-to-Celsius relationship.",
  sources: [
    { label: "NIST — Temperature Scales", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — Temperature Scale", url: "https://www.britannica.com/science/temperature-scale" },
    { label: "UK Food Standards Agency — Cooking Temperatures", url: "https://www.food.gov.uk" },
  ],
  seeAlso: [
    "units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula",
    "math-numbers/math-in-cooking-measurement-conversions-scaling-recipes",
    "units-measurement-conversions/converting-recipe-measurements-between-countries",
  ],
  glossary: [
    {"term":"Gas mark","definition":"A numbered oven temperature scale (1 through 9) used mainly in the UK and Ireland, historically tied to gas oven regulator settings rather than a direct temperature reading."},
    {"term":"Fan oven offset","definition":"A common rule of thumb that a fan (convection) oven cooks about 20°C hotter than the same dial setting on a conventional oven, because forced air circulation transfers heat more efficiently."},
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
      "Recipes worldwide specify oven temperature in one of three systems: Celsius (most of the world), Fahrenheit (US), or UK gas marks (1 through 9).",
      "Gas mark to Celsius is only an approximation — roughly °C ≈ (gas mark × 14) + 121 — because gas marks were never a precise linear temperature scale to begin with.",
      "A fan (convection) oven typically runs about 20°C hotter than the same dial number on a conventional oven, so recipes often list both a conventional and a fan temperature.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A recipe from the UK might say &quot;<TermLink href="/units-measurement-conversions/oven-temperature-conversions-worldwide">Gas Mark</TermLink> 4,&quot; a US recipe might say 350°F, and a recipe from most of the rest of the world will say 180°C — all roughly the same oven heat. To move between Celsius and Fahrenheit, use the standard formula (°F = °C × 9/5 + 32). To estimate a gas mark from Celsius, a workable rule of thumb is: gas mark ≈ (°C − 121) ÷ 14.</div>}
      detailed={<div className="prose-p">Celsius and Fahrenheit both have a precise mathematical relationship because they&apos;re both direct, continuous temperature scales. <TermLink href="/units-measurement-conversions/oven-temperature-conversions-worldwide">Gas mark</TermLink> is different — it originated as a set of regulator positions on early UK gas ovens, not as a scientifically calibrated temperature scale, so its relationship to Celsius or Fahrenheit is only an approximation, and different sources round slightly differently. On top of the base conversion, many ovens are fan (convection) ovens, which circulate hot air and cook faster and more evenly than a conventional oven at the same set temperature — the common adjustment is to lower a conventional-oven temperature by about 20°C (or about 25°F) when using a fan setting, which is why UK recipes often print two Celsius numbers side by side, one for &quot;conventional&quot; and one for &quot;fan.&quot;</div>}
      />
      <FootnoteAside>Gas Mark 1 is roughly 140°C (275°F) and Gas Mark 9 is roughly 240°C (475°F) — the scale tops out there because that was the practical upper range of early domestic gas regulators, not because higher cooking temperatures don&apos;t exist.</FootnoteAside>

      <p>
      With the base formulas established, the practical skill is reading a recipe correctly regardless of which of the three systems it was written in.
      </p>

      <QuickCheck
      question="A US recipe calls for baking at 375°F. Roughly what Celsius temperature should you set on an oven that only displays Celsius?"
      options={[
      { text: "Roughly 190°C", correct: true, explanation: "Correct. (375 − 32) × 5/9 ≈ 190.6°C, which rounds to the commonly used 190°C setting." },
      { text: "Roughly 210°C", correct: false, explanation: "This overshoots the correct conversion — 375°F converts to approximately 190°C, not 210°C." },
      { text: "Roughly 170°C", correct: false, explanation: "This undershoots the correct conversion — 375°F is closer to 190°C than 170°C." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a common baking temperature (baseline case)</h3>
      <div className="prose-p">
      A recipe calls for 180°C, a very common baking temperature. In Fahrenheit: (180 × 9/5) + 32 = 356°F, usually rounded to 350°F on a US oven dial. In gas mark terms, using the approximation gas mark ≈ (180 − 121) ÷ 14 ≈ 4.2, which matches the commonly cited &quot;180°C = Gas Mark 4&quot; equivalence closely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adjusting for a fan oven (edge case / variation)</h3>
      <div className="prose-p">
      A recipe written for a conventional oven at 200°C needs to be run on a fan oven. Applying the common fan-oven offset: 200°C − 20°C ≈ 180°C on the fan setting. This isn&apos;t a strict formula — different oven manufacturers suggest slightly different offsets (some suggest 10°C, others 20°C) — which is why it&apos;s presented as a rule of thumb rather than an exact conversion, unlike the Celsius-Fahrenheit relationship.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading an old UK recipe with only a gas mark listed (real-world / applied case)</h3>
      <div className="prose-p">
      An heirloom UK recipe says &quot;Gas Mark 6, no fan.&quot; Using gas mark ≈ (°C − 121) ÷ 14 rearranged: °C ≈ (gas mark × 14) + 121 = (6 × 14) + 121 = 84 + 121 = 205°C. Converting further to Fahrenheit: (205 × 9/5) + 32 ≈ 401°F, typically rounded to 400°F — letting a modern US or Celsius-only oven reproduce a decades-old British recipe with reasonable accuracy.
      </div>

      <QuickCheck
      question="Why is the gas-mark-to-Celsius formula described as an approximation rather than an exact conversion, unlike Celsius-to-Fahrenheit?"
      options={[
      { text: "Because gas ovens physically cannot reach precise, consistent temperatures", correct: false, explanation: "Modern gas ovens can reach precise temperatures — the issue is with the gas mark scale itself, which was never designed as a precise linear temperature measurement." },
      { text: "Because gas mark originated as a set of regulator positions on early gas ovens rather than a scientifically defined, continuous temperature scale, so different sources round the equivalence slightly differently", correct: true, explanation: "Correct. Celsius and Fahrenheit are both precisely defined, continuous scales with an exact mathematical relationship. Gas mark is a coarser, historically derived scale, so its Celsius equivalent is necessarily approximate." },
      { text: "Because gas mark measures a completely different physical quantity than Celsius", correct: false, explanation: "Gas mark still represents oven temperature — it's the same physical quantity as Celsius, just expressed on a coarser, less precisely defined scale." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Three oven temperature systems compared side by side"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-oven-temperature-conversions-worldwide-three-systems.svg"
      altText="A horizontal table-style diagram with three columns labeled Celsius, Fahrenheit, and Gas Mark, and four rows showing approximately matching oven temperatures: 140C/275F/Gas Mark 1, 180C/350F/Gas Mark 4, 200C/400F/Gas Mark 6, and 230C/450F/Gas Mark 8, with a note that gas mark values are approximate."
      />
      <p>
      Reading across any row gives roughly the same oven heat in all three systems — useful as a quick lookup when a recipe uses a system your oven doesn&apos;t display, without doing the arithmetic each time.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating gas mark as if it converts to Celsius with the same precision as Fahrenheit does.", fix: "Use the gas mark equivalence as a reasonable starting point, but expect minor variation between sources — it was never a precisely calibrated scale." },
      { mistake: "Forgetting to adjust for a fan (convection) oven when a recipe was written for a conventional oven, or vice versa.", fix: "Apply the roughly 20°C fan-oven offset (lower for fan, higher for conventional), and check your oven manufacturer's specific guidance since offsets vary." },
      { mistake: "Rounding an oven temperature conversion so aggressively that it changes the cooking outcome (e.g. rounding 190°C down to 175°C).", fix: "Round to the nearest 5 or 10 degrees on the target scale, not further — ovens have enough thermostat variance already without adding avoidable rounding error." },
      ]}
      />
      <MisconceptionCallout
      myth="Gas mark, Celsius, and Fahrenheit all convert to each other with the same mathematical precision."
      reality={<p>Celsius and Fahrenheit have an exact, continuous mathematical relationship (°F = °C × 9/5 + 32). Gas mark is a coarser, historically derived scale from early UK gas oven regulators, so its relationship to Celsius is only ever an approximation — useful for cooking, but not exact the way the Celsius-Fahrenheit formula is.</p>}
      />

      <QuickCheck
      question="A recipe from the UK lists both a conventional oven temperature and a lower fan oven temperature. Why does it list two numbers instead of one?"
      options={[
      { text: "It's a printing error — only one number should be correct", correct: false, explanation: "This is a deliberate and standard practice in UK recipe writing, not an error — fan ovens genuinely cook differently than conventional ovens at the same set temperature." },
      { text: "A fan oven circulates hot air and transfers heat more efficiently, so it needs a lower set temperature (commonly about 20°C less) to produce the same cooking result as a conventional oven", correct: true, explanation: "Correct. This is the standard fan-oven offset — listing both numbers lets a cook use either type of oven correctly without doing the adjustment math themselves." },
      { text: "Fan ovens and conventional ovens use entirely different temperature scales", correct: false, explanation: "Both oven types use the same Celsius or Fahrenheit scale — the difference is in how efficiently each transfers heat to the food, not in the units used to measure temperature." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate Celsius from a UK gas mark"
      fields={[
      { key: "gasMark", label: "Gas mark", defaultValue: 4 },
      ]}
      resultLabel="Approximate temperature (°C)"
      formula="ovenGasMarkToCelsius"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Keep a quick reference table of the three oven systems (Celsius, Fahrenheit, gas mark) near your oven if you regularly cook recipes from different regions.",
      "When a recipe specifies \"fan\" or \"conventional,\" match it to your actual oven type, or apply the roughly 20°C adjustment if it doesn't.",
      "Use the standard Celsius-Fahrenheit formula for precision, and treat gas mark conversions as approximate — round sensibly, don't over-calculate.",
      "Trust your oven thermometer over the dial label when precision really matters — domestic oven dials are commonly off by 10-15°C from the true internal temperature.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is Gas Mark 4 in Celsius and Fahrenheit?", answer: "Gas Mark 4 is approximately 180°C (350°F), one of the most commonly used baking temperatures." },
      { question: "How do you convert gas mark to Celsius?", answer: "A workable approximation is °C ≈ (gas mark × 14) + 121. It's not exact, since gas mark was never a precisely calibrated linear scale, but it's close enough for cooking purposes." },
      { question: "Should I lower the temperature for a fan oven?", answer: "Yes, generally by about 20°C (or about 25°F) compared to a conventional oven setting, though some manufacturers recommend smaller adjustments — check your oven's manual for its specific guidance." },
      { question: "What temperature is 350°F in Celsius?", answer: "350°F converts to approximately 177°C using the standard formula ((350 − 32) × 5/9), commonly rounded to 180°C on oven dials." },
      { question: "Why does UK use gas mark instead of just Celsius?", answer: "Gas mark is a historical holdover from early domestic gas ovens, whose regulators were labeled with numbered positions rather than a temperature readout. It persists in British recipe writing by convention even though modern ovens display Celsius directly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
