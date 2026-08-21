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
  title: "Height Measurement Conventions (Feet/Inches vs Centimeters)",
  category: "units-measurement-conversions",
  order: 5,
  subtopic: "length-and-distance",
  tags: ["height conversion", "feet and inches", "centimeters", "measurement conventions", "unit conversion"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Human height is one of the few measurements still routinely written as a mixed-unit combination (feet AND inches) rather than a single decimal number — converting it to centimeters requires combining both parts before applying the conversion factor.",
  summary: "Converting a height given in feet and inches to centimeters means first combining both parts into a single number of inches, then multiplying by 2.54 — skipping the combination step and converting feet and inches separately produces a wrong answer unless the results are added correctly.",
  sources: [
    { label: "NIST — International Yard and Pound Agreement (1959)", url: "https://www.nist.gov/pml/us-surveyfoot" },
    { label: "CDC — National Health and Nutrition Examination Survey: Anthropometry", url: "https://www.cdc.gov/nchs/nhanes/index.htm" },
    { label: "Encyclopaedia Britannica — Foot (Unit of Measurement)", url: "https://www.britannica.com/science/foot-unit-of-measurement" },
  ],
  seeAlso: [
    "units-measurement-conversions/metric-vs-imperial-length-units-explained",
    "units-measurement-conversions/converting-millimeters-to-kilometers-and-back",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    { term: "Mixed-unit measurement", definition: "A measurement expressed using two units of the same category at once (like feet and inches), rather than a single unit with a decimal — common for height and less common elsewhere in measurement." },
    { term: "Decimal feet", definition: "Height expressed as a single number of feet with a decimal fraction (e.g. 5.75 ft) instead of the mixed feet-and-inches form (5'9\")." },
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
      "Human height in the US and UK is conventionally written as a mixed-unit measurement — feet AND inches together (5'9\") — rather than a single decimal number, unlike almost any other everyday length measurement.",
      "Converting to centimeters requires first combining both parts into a single number of inches (feet × 12 + inches), then multiplying that combined total by 2.54.",
      "Converting feet and inches to centimeters separately and adding the results is a common shortcut that actually works, as long as both parts are converted using the same 2.54 cm/inch factor consistently.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A height like 5 feet 9 inches is a <TermLink href="/units-measurement-conversions/height-measurement-conventions-feet-inches-vs-centimeters">mixed-unit measurement</TermLink> — it uses two different units (feet and inches) together to express one quantity, which is unusual compared to how most measurements are written. To convert it to centimeters, first turn the whole height into a single number of inches: (5 × 12) + 9 = 69 inches. Then multiply by 2.54: 69 × 2.54 = 175.26 cm.</div>}
      detailed={<div className="prose-p">This mixed-unit convention for height is a holdover from a time before pocket calculators, when it was easier to communicate and reason about a person&apos;s height as &quot;5 feet, a bit more&quot; than as a single number like 5.75 feet — the inches component acts as a human-friendly remainder. Converting requires two operations chained together: first, collapsing the mixed representation into a single unit (<TermLink href="/units-measurement-conversions/height-measurement-conventions-feet-inches-vs-centimeters">decimal feet</TermLink> or total inches), then applying the standard length-conversion factor. The most reliable method converts to total inches first, since inches-to-centimeters is a single clean multiplication (×2.54), whereas converting to decimal feet first introduces an extra division step (inches ÷ 12) that adds an unnecessary place for rounding error to creep in.</div>}
      />
      <FootnoteAside>Not every country writes height this way — most of the world, including nearly all of continental Europe, Asia, and Latin America, states height as a single centimeter figure (like 175 cm) with no equivalent mixed-unit convention, which is one reason height conversion trips up cross-border communication more than most other measurements.</FootnoteAside>

      <p>
      The core skill here isn&apos;t really about the conversion factor itself — it&apos;s about correctly collapsing a two-part mixed measurement into one number before that factor gets applied, since applying the factor to the parts separately and forgetting to recombine them correctly is where most height-conversion mistakes happen.
      </p>

      <QuickCheck
      question="Someone converts a height of 5 feet 9 inches to centimeters by calculating 5 × 2.54 = 12.7 cm and stopping there. What went wrong?"
      options={[
      { text: "They used the wrong conversion factor entirely", correct: false, explanation: "2.54 cm/inch is correct — the problem isn't the factor, it's what it was applied to. They multiplied by 2.54 as if 5 were a number of inches, when it's actually a number of feet." },
      { text: "They multiplied the '5' as if it were inches, when it's actually feet — and they dropped the 9 inches entirely, never combining the two parts of the height", correct: true, explanation: "Correct. The '5' in 5'9\" means 5 feet, which needs its own conversion (5 × 12 = 60 inches, or 5 × 30.48 = 152.4 cm), and the 9 inches must be added on top — the correct total is 175.26 cm, not 12.7 cm." },
      { text: "Nothing is wrong; 12.7 cm is a valid partial answer for the feet portion", correct: false, explanation: "12.7 cm doesn't correctly represent even the feet portion — 5 feet alone is 152.4 cm (5 × 30.48), not 12.7 cm, which would actually be the conversion of 5 inches, not 5 feet." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a common height to centimeters (baseline case)</h3>
      <div className="prose-p">
      A height of 5 feet 9 inches: combine to inches first, (5 × 12) + 9 = 69 inches, then convert: 69 × 2.54 = 175.26 cm.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting the parts separately and adding (edge case / variation)</h3>
      <div className="prose-p">
      The same height, converted a different way: 5 feet = 5 × 30.48 = 152.4 cm, and 9 inches = 9 × 2.54 = 22.86 cm. Adding: 152.4 + 22.86 = 175.26 cm — identical to Example 1. Both methods are mathematically equivalent; the combine-first method just involves fewer multiplication steps and less chance of forgetting to add the second part.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Converting centimeters back to feet and inches (real-world / applied case)</h3>
      <div className="prose-p">
      A European visitor&apos;s passport lists their height as 182 cm, and they need to fill out a US form asking for feet and inches. First, total inches: 182 ÷ 2.54 ≈ 71.65 inches. Then split into feet and remaining inches: 71.65 ÷ 12 ≈ 5.97, so 5 whole feet, leaving 71.65 − (5 × 12) = 11.65 inches, which rounds to 5 feet 12 inches — except 12 inches is a full foot, so this actually rounds up cleanly to 6 feet 0 inches. This rounding-carryover step (11.65 rounding to 12, which then becomes a whole additional foot) is a common place for a small error to slip through if the rounding isn&apos;t checked against the 12-inch boundary.
      </div>

      <QuickCheck
      question="Why does converting 182 cm to feet and inches require checking whether the 'inches remainder' rounds up to 12?"
      options={[
      { text: "Because 12 is an arbitrary cutoff with no real significance in the calculation", correct: false, explanation: "12 isn't arbitrary — it's the exact number of inches in one foot, so an inches remainder that rounds to 12 actually represents a full additional foot, not a valid 'inches' value." },
      { text: "Because if the remaining-inches figure rounds to 12, it means a full extra foot has been reached, and the answer should carry over to the next whole foot with 0 inches remaining", correct: true, explanation: "Correct. Inches only make sense as a remainder from 0 to 11 — a remainder that rounds to 12 signals the foot count itself needs to increase by one, exactly like carrying a digit in addition." },
      { text: "Because centimeters and inches use different rounding rules by convention", correct: false, explanation: "There's no special rounding rule difference between the units — the issue is purely that 12 inches equals exactly 1 foot, so a remainder can't validly reach or exceed 12 without becoming a whole foot instead." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Two rulers, one height: 5 feet 9 inches aligned against 175 cm"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-height-measurement-conventions-feet-inches-vs-centimeters-scale.svg"
      altText="Two vertical measuring scales side by side, one marked in feet and inches from 0 to 6 feet 6 inches and one marked in centimeters from 0 to 198, aligned so 5 feet 9 inches lines up exactly with 175 centimeters."
      />
      <p>
      Lining up the two scales side by side shows the same physical height read two completely different ways — the feet-and-inches scale requires two numbers to pin down a height, while the centimeter scale needs only one.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Converting only the feet portion of a height and forgetting to add the inches portion.", fix: "Always combine feet and inches into a single number (either total inches or decimal feet) before doing the final unit conversion." },
      { mistake: "Letting an inches remainder round up to 12 or higher without carrying it over into an extra foot.", fix: "After converting cm back to feet and inches, check that the leftover inches value is less than 12 — if not, carry the extra into the foot count." },
      { mistake: "Mixing decimal feet (5.75 ft) with feet-and-inches notation (5'9\") without realizing 0.75 feet is 9 inches, not 75 inches.", fix: "Remember 0.75 feet means 0.75 × 12 = 9 inches — the decimal fraction of a foot must be multiplied by 12, not read as inches directly." },
      ]}
      />
      <MisconceptionCallout
      myth="5.75 feet and 5 feet 75 inches represent the same height, just written differently."
      reality={<p>They&apos;re very different. 5.75 feet means 5 feet plus 0.75 of a foot, and since 1 foot is 12 inches, that 0.75 converts to 0.75 × 12 = 9 inches — so 5.75 feet equals 5&apos;9&quot;, not 5&apos;75&quot;. Reading the decimal portion of a foot value as if it were directly a number of inches is a common and sizeable error (75 inches is over 6 feet on its own).</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a height in feet and inches to centimeters"
      fields={[
      { key: "feet", label: "Feet", defaultValue: 5 },
      { key: "inches", label: "Inches", defaultValue: 9 },
      ]}
      resultLabel="Height in centimeters"
      formula="heightFeetInchesToCm"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Always combine feet and inches into one number before applying the 2.54 cm/inch conversion factor.",
      "When converting cm back to feet/inches, double-check the inches remainder doesn't round up to 12 or more.",
      "Remember that a decimal fraction of a foot must be multiplied by 12 to get inches — it isn't the inches value directly.",
      "Use the calculator above to check any height conversion you need for a form, a passport, or a comparison across countries.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert feet and inches to cm?", answer: "Combine into total inches (feet × 12 + inches), then multiply by 2.54. For 5'9\": (5×12+9) × 2.54 = 175.26 cm." },
      { question: "How tall is 5'9\" in cm?", answer: "175.26 centimeters, commonly rounded to 175 cm." },
      { question: "How do you convert cm to feet and inches?", answer: "Divide the centimeter value by 2.54 to get total inches, then divide that by 12 for whole feet, with the remainder as inches — checking that the remainder doesn't round up to a full extra foot." },
      { question: "Why is human height written in feet and inches instead of just feet?", answer: "It's a legacy convention that predates easy decimal calculation — expressing height as a whole number of feet plus a small inches remainder was historically easier to communicate and compare than a decimal fraction of a foot." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
