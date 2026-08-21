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
  title: "Land Area Units: Acres, Hectares & Square Feet",
  category: "units-measurement-conversions",
  order: 6,
  subtopic: "length-and-distance",
  tags: ["acres", "hectares", "square feet", "land area", "unit conversion"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "An acre and a hectare both measure land area but come from unrelated origins — an acre was historically how much land one ox-team could plow in a day, while a hectare is simply 10,000 square meters, a clean metric unit.",
  summary: "1 acre equals 43,560 square feet or approximately 4,046.86 square meters, while 1 hectare is exactly 10,000 square meters — an acre is about 40.5% the size of a hectare, so converting between them means multiplying by roughly 0.4047 (acres to hectares) or 2.47105 (hectares to acres).",
  sources: [
    { label: "NIST — Weights and Measures: Land Area Units", url: "https://www.nist.gov/pml/owm" },
    { label: "Encyclopaedia Britannica — Acre", url: "https://www.britannica.com/science/acre-unit-of-measurement" },
    { label: "USDA — National Agricultural Statistics Service, Land Area Definitions", url: "https://www.nass.usda.gov/" },
  ],
  seeAlso: [
    "units-measurement-conversions/metric-vs-imperial-length-units-explained",
    "math-numbers/geometry-basics",
    "units-measurement-conversions/how-map-scale-relates-to-real-world-distance",
  ],
  glossary: [
    { term: "Acre", definition: "A unit of land area equal to 43,560 square feet, originally derived from the amount of land a yoke of oxen could plow in a single day." },
    { term: "Hectare", definition: "A metric unit of land area equal to exactly 10,000 square meters, or 2.47105 acres." },
    { term: "Furlong", definition: "A historical unit of length equal to 660 feet, whose width (one chain, 66 feet) multiplied by its length defines the traditional acre's dimensions." },
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
      "An acre (43,560 sq ft, ~4,046.86 m²) has a farming-tool origin — historically the area one ox-team could plow in a single day.",
      "A hectare is a clean metric unit: exactly 10,000 square meters, with no historical baggage in its definition.",
      "1 hectare ≈ 2.47 acres, and 1 acre ≈ 0.4047 hectares — an acre is a little over 40% the size of a hectare.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">An <TermLink href="/units-measurement-conversions/land-area-units-acres-hectares-and-square-feet">acre</TermLink> is a unit of land area equal to 43,560 square feet, used mainly in the US, UK, and a handful of other countries. A <TermLink href="/units-measurement-conversions/land-area-units-acres-hectares-and-square-feet">hectare</TermLink> is the metric equivalent, defined simply as 10,000 square meters. They measure the same thing — land area — but a hectare is noticeably bigger: about 2.47 acres fit inside one hectare.</div>}
      detailed={<div className="prose-p">The acre&apos;s odd number (43,560 sq ft) isn&apos;t arbitrary — it comes from medieval English agriculture, where a standard plowed strip was one <TermLink href="/units-measurement-conversions/land-area-units-acres-hectares-and-square-feet">furlong</TermLink> long (660 feet, itself &quot;a furrow&apos;s length&quot;) by one chain wide (66 feet, a standard surveying tool length), giving 660 × 66 = 43,560 square feet as the amount of land a team of oxen could plow in a single day without turning. The hectare, by contrast, was defined during the French metric reforms as exactly 100 meters × 100 meters — a clean geometric square with no reference to farming practice at all. This is a recurring pattern across the imperial-vs-metric divide: imperial units tend to encode a practical historical origin story, while metric units are defined by round geometric or decimal relationships from the start.</div>}
      />
      <FootnoteAside>The word &quot;acre&quot; itself comes from an old Germanic root meaning simply &quot;open field&quot; — the same root gives us the German word &quot;Acker,&quot; still used today for a cultivated field, independent of any specific area measurement.</FootnoteAside>

      <p>
      Because both units describe area rather than length, converting between them isn&apos;t a simple linear scale-up the way converting feet to meters is — but the conversion is still handled the same way, by a single fixed multiplication factor, since a fixed area ratio exists between any two area units once their definitions are pinned down.
      </p>

      <QuickCheck
      question="If 1 meter is about 9% longer than 1 yard, why is 1 hectare (2.47 acres) so much bigger than 1 acre, rather than just 9% bigger?"
      options={[
      { text: "Because hectares and acres aren't actually both area units", correct: false, explanation: "Both are genuinely area units — the size difference isn't about category, it's about how area scales compared to length." },
      { text: "Because area scales with the square of length, so a modest difference in the base length units compounds into a much larger difference in area", correct: true, explanation: "Correct. Area is length × width, so if one system's units were even modestly different in length, that difference gets squared when comparing area — this, combined with the acre and hectare having genuinely different historical definitions (not just a metric/imperial version of the 'same' shape), explains the larger area gap." },
      { text: "Because a hectare is defined as exactly 10 acres", correct: false, explanation: "A hectare is not defined as 10 acres — it's independently defined as 10,000 m². The 2.47 relationship is simply what falls out when both independent definitions are compared." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting acres to square feet (baseline case)</h3>
      <div className="prose-p">
      A residential lot is listed as 0.25 acres. In square feet: 0.25 × 43,560 = 10,890 sq ft — a common way US real estate listings translate between the two units, since buyers often think in square feet for a house lot but acres for larger rural parcels.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting hectares to acres for an international comparison (edge case / variation)</h3>
      <div className="prose-p">
      A vineyard in France is listed as 12 hectares. In acres: 12 × 2.47105 ≈ 29.65 acres. A US buyer comparing this to a 30-acre California vineyard would find the two properties are almost identical in size, despite being listed in entirely different unit systems.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A farm subdivision calculation (real-world / applied case)</h3>
      <div className="prose-p">
      A 200-hectare farm in the EU is being subdivided into equal 5-acre parcels for a US-based buyer group. First, total area in acres: 200 × 2.47105 ≈ 494.21 acres. Then, number of parcels: 494.21 ÷ 5 ≈ 98.84, meaning the farm splits into 98 full 5-acre parcels with about 4.21 acres left over. Getting the hectare-to-acre conversion wrong by even a small percentage here would misstate how many parcels the land can actually support — a real financial consequence in a land deal.
      </div>

      <QuickCheck
      question="A 200-hectare farm is divided into 5-acre parcels. Why does the calculation leave a remainder instead of dividing evenly?"
      options={[
      { text: "Because acres and hectares can never divide evenly into each other", correct: false, explanation: "It's not that they can never divide evenly — it's simply that 200 hectares converts to about 494.21 acres, and 494.21 isn't a clean multiple of 5. A different starting hectare figure could well divide evenly." },
      { text: "Because 200 hectares converts to approximately 494.21 acres, and 494.21 isn't an exact multiple of 5, so the division leaves a fractional remainder", correct: true, explanation: "Correct. The conversion factor (2.47105) rarely produces a round number from a round hectare figure, so subsequent division into fixed-size parcels will usually leave a remainder unless the numbers happen to align." },
      { text: "Because the conversion factor itself is only an approximation, not an exact value", correct: false, explanation: "2.47105 acres per hectare is accurate to 5 decimal places and plenty precise for this calculation — the remainder comes from the division step, not from any imprecision in the conversion factor." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="1 hectare vs. 1 acre, to scale by area"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-land-area-units-acres-hectares-and-square-feet-nested-squares.svg"
      altText="A large square representing one hectare, ten thousand square meters, with a smaller square nested inside it representing one acre, about four thousand and forty seven square meters, showing an acre is a little over forty percent the size of a hectare."
      />
      <p>
      Nesting the acre inside the hectare at true relative scale makes the roughly 2.47-to-1 ratio visually obvious — a hectare isn&apos;t just &quot;a bit bigger&quot; than an acre, it&apos;s well over double.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a hectare and an acre are roughly the same size because they're both 'big land units.'", fix: "Remember the ratio: 1 hectare ≈ 2.47 acres. A hectare is more than double an acre, not roughly equal to it." },
      { mistake: "Using the linear length conversion factor (like 0.3048 for feet to meters) directly for an area conversion.", fix: "Area conversions require squaring the linear factor (or using the correct pre-computed area factor) — never apply a length conversion factor directly to an area figure." },
      { mistake: "Forgetting that 'acre' historically implied a specific rectangular shape (1 furlong by 1 chain), not just any 43,560 sq ft plot.", fix: "For modern purposes, an acre is just a unit of area regardless of shape — the historical furlong-by-chain rectangle is background, not a requirement for how the unit is used today." },
      ]}
      />
      <MisconceptionCallout
      myth="A hectare is 'metric for acre' the same way a meter is 'metric for yard' — a similarly-sized unit just measured differently."
      reality={<p>Unlike the meter and yard (which are close in size, about 9% apart), the hectare and acre differ by a much larger factor — 2.47x. A hectare isn&apos;t a metric restatement of roughly-the-same-sized land unit; it&apos;s an independently defined, considerably larger unit that happens to be used for the same broad purpose (describing land parcels).</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert acres to hectares (or any area by a fixed factor)"
      fields={[
      { key: "value", label: "Acres", defaultValue: 12 },
      { key: "conversionFactor", label: "Conversion factor (0.404686 for acres to hectares)", defaultValue: 0.404686, step: 0.000001 },
      ]}
      resultLabel="Hectares"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize the core ratio: 1 hectare ≈ 2.47 acres, or the reverse, 1 acre ≈ 0.4047 hectares.",
      "Never apply a length conversion factor directly to an area — square it first, or use a dedicated area conversion factor.",
      "When comparing international land listings (like vineyards or farms), convert to one common unit before judging relative size.",
      "Use the calculator above with real acreage or hectare figures from a property listing you're curious about.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many square feet are in an acre?", answer: "43,560 square feet exactly." },
      { question: "How many acres are in a hectare?", answer: "Approximately 2.47105 acres per hectare." },
      { question: "Is a hectare bigger than an acre?", answer: "Yes, significantly — a hectare is about 2.47 times the size of an acre." },
      { question: "Why is an acre 43,560 square feet instead of a rounder number?", answer: "It comes from a historical rectangle: one furlong (660 ft) by one chain (66 ft), the standard strip a medieval ox-team could plow in a day — 660 × 66 = 43,560." },
      { question: "What's a quick way to estimate acres from hectares?", answer: "Multiply the hectare figure by roughly 2.5 for a fast estimate, or by the more precise 2.47105 when accuracy matters." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
