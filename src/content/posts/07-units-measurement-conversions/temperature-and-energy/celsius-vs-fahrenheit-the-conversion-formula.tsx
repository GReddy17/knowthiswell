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
  title: "Celsius vs Fahrenheit: The Conversion Formula",
  category: "units-measurement-conversions",
  order: 25,
  subtopic: "temperature-and-energy",
  tags: [
    "celsius",
    "fahrenheit",
    "temperature conversion",
    "measurement",
    "conversion formula",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Celsius to Fahrenheit isn't a simple multiplication — it's °F = (°C × 9/5) + 32, because the two scales assign different numbers to the same zero point.",
  summary: "Converting between Celsius and Fahrenheit requires both scaling and an offset — °F = (°C × 9/5) + 32 — because the two scales don't share a common zero point the way length or weight units do.",
  sources: [
    { label: "NIST — Temperature Scales", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — Temperature Scale", url: "https://www.britannica.com/science/temperature-scale" },
    { label: "National Weather Service — Temperature Conversion", url: "https://www.weather.gov" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-the-kelvin-scale",
    "units-measurement-conversions/oven-temperature-conversions-worldwide",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"Celsius scale","definition":"A temperature scale where 0°C is defined as water's freezing point and 100°C as water's boiling point at standard atmospheric pressure."},
    {"term":"Fahrenheit scale","definition":"A temperature scale, used mainly in the United States, where water freezes at 32°F and boils at 212°F under standard atmospheric pressure."},
    {"term":"Zero-point offset","definition":"A fixed amount added or subtracted during a conversion because two scales assign different numeric values to the same physical starting point."},
    {"term":"Degree interval","definition":"The size of one unit step on a scale — a Fahrenheit degree is a smaller temperature interval than a Celsius degree, which is why the 9/5 scaling factor exists."},
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
      "Celsius-to-Fahrenheit conversion is not a pure multiplication — it's °F = (°C × 9/5) + 32, combining a scaling factor with a fixed offset.",
      "The 9/5 factor exists because a Fahrenheit degree is a smaller temperature interval than a Celsius degree — it takes 180 Fahrenheit degrees to span the same range as 100 Celsius degrees.",
      "The +32 offset exists because the two scales don't share a zero point: 0°C (water's freezing point) is 32°F, not 0°F.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">To convert <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">Celsius</TermLink> to <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">Fahrenheit</TermLink>, multiply by 9/5 (1.8) and add 32: °F = (°C × 9/5) + 32. To go the other way, subtract 32 first, then multiply by 5/9: °C = (°F − 32) × 5/9. Both steps matter — skipping the addition or subtraction is the single most common mistake people make with this conversion.</div>}
      detailed={<div className="prose-p">Most unit conversions — miles to kilometers, pounds to kilograms — are a single multiplication because both units measure &quot;zero&quot; the same way: zero miles is the same physical amount as zero kilometers. Temperature is different. The <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">Celsius scale</TermLink> sets 0°C at water&apos;s freezing point; the <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">Fahrenheit scale</TermLink> sets that same physical temperature at 32°F. Because the two scales&apos; zero points don&apos;t line up, converting between them needs a <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">zero-point offset</TermLink> (the +32) on top of the scaling. The scaling factor itself, 9/5, comes from how finely each scale divides the same physical range: water&apos;s freezing-to-boiling range spans exactly 100 Celsius degrees but exactly 180 Fahrenheit degrees, so each <TermLink href="/units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula">degree interval</TermLink> in Fahrenheit is smaller — 180/100 = 9/5 as many Fahrenheit degrees are needed to cover the same physical temperature change.</div>}
      />
      <FootnoteAside>Daniel Gabriel Fahrenheit devised his scale in 1724 using a brine solution&apos;s freezing point as his original zero, later refined so water freezes at 32°F — an odd-looking number that&apos;s simply an artifact of that historical calibration, not a rounded or designed value the way Celsius&apos;s 0 and 100 are.</FootnoteAside>

      <p>
      Once the formula is internalized, applying it to real numbers — room temperature, oven settings, a weather forecast — is where it actually becomes useful.
      </p>

      <QuickCheck
      question="A recipe calls for baking at 180°C, but your oven only shows Fahrenheit. Which calculation gets you the right dial setting?"
      options={[
      { text: "180 × 1.8 = 324°F", correct: false, explanation: "This skips the required +32 offset. Multiplying alone gives a number 32 degrees too low." },
      { text: "(180 × 9/5) + 32 = 356°F", correct: true, explanation: "Correct. 180 × 1.8 = 324, then +32 = 356°F — the actual equivalent oven temperature." },
      { text: "180 + 32 = 212°F", correct: false, explanation: "This skips the multiplication step entirely and only applies the offset, which isn't the correct formula." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting room temperature (baseline case)</h3>
      <div className="prose-p">
      A comfortable room temperature is about 20°C. Applying the formula: (20 × 9/5) + 32 = 36 + 32 = 68°F. This is the single most useful reference point to memorize — 20°C ≈ 68°F — since it lets you sanity-check any other conversion against a number you already know feels right.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting a sub-zero temperature (edge case / variation)</h3>
      <div className="prose-p">
      A winter forecast reads −10°C. Applying the formula: (−10 × 9/5) + 32 = −18 + 32 = 14°F. Negative inputs don&apos;t change the formula at all — multiply first, then add 32 — but they&apos;re a common place for arithmetic slips, since a negative number multiplied by a positive fraction stays negative before the offset is added back in.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Converting Fahrenheit back to Celsius (real-world / applied case)</h3>
      <div className="prose-p">
      A US weather app shows 95°F on a summer day, and you want to know the Celsius equivalent. Reverse the formula: °C = (°F − 32) × 5/9 = (95 − 32) × 5/9 = 63 × 5/9 = 35°C. Subtracting 32 first undoes the offset, then multiplying by 5/9 (the reciprocal scaling direction) undoes the degree-interval difference — the two steps mirror the forward formula but in reverse order.
      </div>

      <QuickCheck
      question="Why does converting Fahrenheit to Celsius require subtracting 32 first, rather than multiplying by 5/9 first?"
      options={[
      { text: "It doesn't matter which order you do it in — both give the same result", correct: false, explanation: "Order matters here because the offset and the scaling apply in a specific sequence to correctly reverse the forward formula. Multiplying by 5/9 before subtracting 32 produces a different, incorrect number." },
      { text: "Subtracting 32 first removes the zero-point offset, leaving a pure temperature-interval value that can then be correctly rescaled by 5/9", correct: true, explanation: "Correct. The forward formula scales first, then offsets; reversing it means undoing the offset first (subtract 32), then undoing the scaling (multiply by 5/9) — the exact mirror image of the forward steps." },
      { text: "Fahrenheit values must always be positive before you can convert them", correct: false, explanation: "Fahrenheit values can be negative (extreme cold) and the same subtract-then-multiply formula still applies correctly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Celsius and Fahrenheit scales side by side, showing the offset zero points"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-celsius-vs-fahrenheit-the-conversion-formula-scale-comparison.svg"
      altText="Two vertical thermometer-style scales side by side. The left scale is labeled Celsius with marks at 0 (water freezes), 20 (room temperature), and 100 (water boils). The right scale is labeled Fahrenheit with the same three physical points marked at 32, 68, and 212 respectively, with dashed horizontal lines connecting each pair to show they represent the same physical temperature despite different numbers."
      />
      <p>
      The dashed connecting lines are the whole point of this diagram: 0°C and 32°F sit at the same height because they represent the identical physical temperature, just labeled differently. The gap between the two scales&apos; zero marks is exactly the +32 offset baked into the conversion formula.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Multiplying by 1.8 but forgetting to add 32 (or vice versa when converting back).", fix: "Remember it's a two-step formula, not one: scale first, then shift. Sanity-check with 20°C = 68°F — if your answer isn't close to that pattern, you likely dropped a step." },
      { mistake: "Using 5/9 when converting Celsius to Fahrenheit, or 9/5 when converting Fahrenheit to Celsius (mixing up the direction).", fix: "Celsius-to-Fahrenheit multiplies by 9/5 (since Fahrenheit degrees are smaller, you need more of them); Fahrenheit-to-Celsius multiplies by 5/9 (the reciprocal) after subtracting 32 first." },
      { mistake: "Treating this like a standard multiply-by-a-factor conversion (as with length or weight).", fix: "Temperature is a genuine exception among common conversions — it needs an added or subtracted offset because the two scales' zero points don't match, unlike length, weight, or volume units." },
      ]}
      />
      <MisconceptionCallout
      myth="Celsius and Fahrenheit measure different things, which is why the conversion is more complicated than other unit conversions."
      reality={<p>Both scales measure the exact same physical quantity — temperature. The conversion is more complex only because the two scales assign different numbers to the same zero point and divide the same range into different-sized degree intervals, not because they&apos;re measuring anything different.</p>}
      />

      <QuickCheck
      question="Which of these is the correct reason Celsius-to-Fahrenheit conversion needs both a multiplication and an addition?"
      options={[
      { text: "Because Fahrenheit only works for positive temperatures", correct: false, explanation: "Fahrenheit handles negative temperatures the same way Celsius does — extreme cold is simply a negative number on either scale." },
      { text: "Because the two scales have both a different-sized degree interval (needing multiplication) and a different zero point (needing an offset)", correct: true, explanation: "Correct. The 9/5 multiplication corrects for the different degree-interval sizes; the +32 addition corrects for the mismatched zero points. Both corrections are needed simultaneously." },
      { text: "Because Fahrenheit is an older measurement system than Celsius", correct: false, explanation: "The historical age of a scale has no bearing on why its conversion formula looks the way it does — the formula's structure comes entirely from how the two scales are defined relative to each other." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert Celsius to Fahrenheit"
      fields={[
      { key: "celsius", label: "Temperature (°C)", defaultValue: 20 },
      ]}
      resultLabel="Fahrenheit equivalent"
      formula="celsiusToFahrenheit"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize one reference point — 20°C ≈ 68°F — and use it to sanity-check any conversion you calculate.",
      "Write out both steps every time (multiply, then add) rather than trying to do it in one mental leap, especially with negative temperatures.",
      "Use the calculator above to build intuition for how the two scales relate before relying on it for anything important.",
      "When converting Fahrenheit back to Celsius, remember the steps reverse in both operation and order: subtract 32 first, then multiply by 5/9.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert Celsius to Fahrenheit?", answer: "Multiply the Celsius value by 9/5 (1.8), then add 32: °F = (°C × 9/5) + 32. For example, 20°C becomes (20 × 1.8) + 32 = 68°F." },
      { question: "How do you convert Fahrenheit to Celsius?", answer: "Subtract 32 from the Fahrenheit value, then multiply by 5/9: °C = (°F − 32) × 5/9. For example, 68°F becomes (68 − 32) × 5/9 = 20°C." },
      { question: "Why isn't Celsius to Fahrenheit just a simple multiplication like other unit conversions?", answer: "Because the two scales assign different numbers to the same physical zero point — 0°C equals 32°F, not 0°F — so a fixed offset has to be added on top of the scaling to correctly convert between them." },
      { question: "What temperature is the same in both Celsius and Fahrenheit?", answer: "−40 degrees. Solving (°C × 9/5) + 32 = °C shows the two scales cross at exactly −40, meaning −40°C and −40°F represent the same physical temperature." },
      { question: "Is 100°F the same as 100°C?", answer: "No. 100°C is water's boiling point (212°F), while 100°F is a hot summer day (about 37.8°C) — the two scales only share numeric values at −40." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
