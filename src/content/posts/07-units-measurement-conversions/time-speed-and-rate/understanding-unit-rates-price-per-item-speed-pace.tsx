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
  title: "Understanding Unit Rates (Price per Item, Speed, Pace)",
  category: "units-measurement-conversions",
  order: 38,
  subtopic: "time-speed-and-rate",
  tags: [
    "unit rate",
    "price per unit",
    "speed",
    "pace",
    "grocery math",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A unit rate is just a ratio reduced down to a denominator of exactly 1 — and every 'per' in everyday language (per ounce, per hour, per mile) is quietly one already.",
  summary: "A unit rate expresses a ratio as an amount per single unit of something else — price per ounce, distance per hour, minutes per mile — by dividing the total by the quantity, which is what makes two differently sized or priced things directly comparable.",
  sources: [
    { label: "NIST — Guide for the Use of the International System of Units (SI)", url: "https://www.nist.gov/pml/special-publication-811" },
    { label: "U.S. Federal Trade Commission — Unit Pricing Guidance", url: "https://www.ftc.gov/" },
    { label: "Encyclopaedia Britannica — Ratio and Proportion", url: "https://www.britannica.com/science/ratio-mathematics" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-fuel-efficiency-units-mpg-vs-l-100km",
    "math-numbers/ratios-and-proportions",
    "math-numbers/math-for-travel-distance-speed-time",
  ],
  glossary: [
    {"term":"Unit rate","definition":"A ratio expressed as an amount per exactly one unit of something else, found by dividing the total quantity by the number of units — such as price per ounce or miles per hour."},
    {"term":"Ratio","definition":"A comparison between two quantities expressed as a fraction or with a colon, which a unit rate simplifies down to a denominator of 1."},
    {"term":"Pace","definition":"An inverted rate — time per unit of distance (minutes per mile) rather than distance per unit of time (miles per hour) — commonly used by runners and walkers."},
    {"term":"Unit pricing","definition":"The practice, often legally required on grocery store shelf tags, of displaying a product's price per standard unit (per ounce, per liter) so shoppers can compare differently sized packages directly."},
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
      "A unit rate is a ratio simplified so the denominator is exactly 1 — 'dollars per ounce' or 'miles per hour' are both unit rates, found the same way: divide the total by the quantity.",
      "Unit rates make differently sized things directly comparable — a bigger, more expensive package can still be the better deal once both are reduced to price per single unit.",
      "Pace (time per distance, like minutes per mile) is a unit rate too, just inverted from speed (distance per time) — both describe the same motion from opposite directions of the same division.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/units-measurement-conversions/understanding-unit-rates-price-per-item-speed-pace">unit rate</TermLink> answers &quot;how much of this for exactly one of that?&quot; Dividing $3.60 by 12 ounces gives $0.30 per ounce — a unit rate. Dividing 240 miles by 4 hours gives 60 miles per hour — also a unit rate. The math is always the same single division: total amount ÷ number of units. What changes is only what&apos;s being counted as the &quot;amount&quot; and the &quot;unit.&quot;</div>}
      detailed={<div className="prose-p">The reason unit rates matter beyond just being a division exercise is comparability: a <TermLink href="/units-measurement-conversions/understanding-unit-rates-price-per-item-speed-pace">ratio</TermLink> like &quot;$5.60 for 20 ounces&quot; can&apos;t be directly compared to &quot;$3.60 for 12 ounces&quot; as written, because the two package sizes differ — you&apos;re not comparing like to like. Reducing both to a unit rate (price per single ounce) puts them on the exact same footing: $5.60 ÷ 20 = $0.28/oz versus $3.60 ÷ 12 = $0.30/oz, revealing the bigger, pricier package is actually the better per-ounce deal. This is precisely why many countries legally require grocery stores to display <TermLink href="/units-measurement-conversions/understanding-unit-rates-price-per-item-speed-pace">unit pricing</TermLink> on shelf tags — total price alone is a genuinely misleading way to compare differently sized packages, and unit rate math is the fix.</div>}
      />
      <FootnoteAside>Pace is the mirror image of speed — instead of distance per unit time (miles per hour), it&apos;s time per unit distance (minutes per mile), which is why a runner&apos;s pace and a car&apos;s speed use inverted arithmetic: a faster runner has a lower pace number (fewer minutes per mile), while a faster car has a higher speed number (more miles per hour) — the same underlying &quot;reduce to one unit&quot; idea, just built from opposite starting ratios.</FootnoteAside>

      <p>
      Once the single-division habit is automatic, unit rates stop looking like a special math topic and start looking like the natural way to compare almost anything priced, timed, or measured in bulk.
      </p>

      <QuickCheck
      question="A 12-ounce box costs $3.60 and a 20-ounce box costs $5.60. Which is the better deal per ounce?"
      options={[
      { text: "The 12-ounce box, since it has the lower total price", correct: false, explanation: "Total price alone doesn't account for the different package sizes — the 12-ounce box costs less overall but that doesn't automatically mean it's cheaper per ounce." },
      { text: "The 20-ounce box — its unit rate is $0.28/oz ($5.60 ÷ 20), compared to the 12-ounce box's $0.30/oz ($3.60 ÷ 12)", correct: true, explanation: "Correct. Reducing both to a unit rate (price per ounce) makes them directly comparable — the larger, pricier box actually costs 2 cents less per ounce, making it the better value despite the higher sticker price." },
      { text: "They're the same value, since both come out to about 30 cents an ounce", correct: false, explanation: "The two unit rates aren't equal — $0.30/oz and $0.28/oz differ by 2 cents per ounce, which adds up across a full package (roughly 40 cents on a 20-ounce box)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A basic price-per-unit comparison (baseline case)</h3>
      <div className="prose-p">
      Two jars of the same coffee: one is 10 oz for $8.00, the other is 16 oz for $11.20. Unit rates: $8.00 ÷ 10 = $0.80/oz, and $11.20 ÷ 16 = $0.70/oz. The 16 oz jar is cheaper per ounce, a straightforward case where the larger size is also the better deal — worth confirming rather than assuming, since it isn&apos;t always true.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Speed and pace as inverse unit rates (edge case / variation)</h3>
      <div className="prose-p">
      A runner covers 6 miles in 54 minutes. As a speed (distance per time): 6 miles ÷ 54 minutes ≈ 0.111 miles per minute, or scaled up, about 6.67 mph. As a pace (time per distance), the more common way runners actually track this: 54 minutes ÷ 6 miles = 9 minutes per mile. Both numbers describe the identical run — they&apos;re just built from dividing in opposite orders (distance/time vs. time/distance), which is exactly why a faster runner&apos;s pace number goes <em>down</em> while their speed number goes <em>up</em>.
      </div>

      <QuickCheck
      question="Runner A has a pace of 8 minutes per mile. Runner B has a pace of 9 minutes per mile. Who is faster?"
      options={[
      { text: "Runner B, since 9 is a bigger number", correct: false, explanation: "Pace is time per distance — a bigger pace number means it takes longer to cover each mile, which is slower, not faster." },
      { text: "Runner A — a lower pace (fewer minutes per mile) means covering each mile faster", correct: true, explanation: "Correct. Pace is inverted from speed: a smaller pace number means less time needed per mile, which is the faster runner. This is the opposite direction from a speed unit rate, where a bigger number is faster." },
      { text: "They're running at the same speed, since both paces are close in value", correct: false, explanation: "8 min/mile and 9 min/mile are meaningfully different paces — over a 10-mile run, that 1-minute-per-mile gap adds up to a full 10-minute difference in finishing time." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing job offers by an hourly unit rate (real-world / applied case)</h3>
      <div className="prose-p">
      One job offers $920 for a 40-hour week; another offers $2,000 for a 90-hour biweekly (two-week) schedule. Reducing both to an hourly unit rate: $920 ÷ 40 = $23.00/hour for the first job. The second job&apos;s total hours need converting to a comparable weekly basis first (90 hours ÷ 2 weeks = 45 hours/week), then: $2,000 ÷ 90 hours ≈ $22.22/hour. Once both are unit rates on the same basis (dollars per hour), the first job actually pays slightly more per hour, even though its total weekly pay figure looks smaller than half of the second job&apos;s biweekly total.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Reducing two differently sized packages to a comparable unit rate"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-understanding-unit-rates-price-per-item-speed-pace-comparison-table.svg"
      altText="A table comparing two grocery packages: a 12-ounce box priced at 3.60 dollars and a 20-ounce box priced at 5.60 dollars, each divided down to a unit rate of 30 cents per ounce and 28 cents per ounce respectively, with the 20-ounce box highlighted as the better value despite costing more in total"
      />
      <p>
      Neither box&apos;s sticker price can be compared directly, since the quantities differ — only after both are divided down to price-per-ounce does an honest comparison become possible.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Comparing total prices directly between differently sized packages, instead of reducing both to a unit rate first.", fix: "Always divide price by quantity for both options before deciding which is the better deal — the larger package isn't automatically cheaper per unit." },
      { mistake: "Confusing speed and pace, or assuming a bigger pace number means faster.", fix: "Speed (distance/time) is faster when bigger; pace (time/distance) is faster when smaller — they're inverses of each other, not the same kind of number." },
      { mistake: "Comparing rates that aren't on the same basis (e.g. a weekly rate against a biweekly total) without converting both to the same time unit first.", fix: "Convert every rate to the same denominator (hourly, weekly, whatever's common) before comparing — mixing time bases silently distorts the comparison." },
      ]}
      />
      <MisconceptionCallout
      myth="The item with the lower total price, or the item that costs more per package, tells you which is the better deal."
      reality={<p>Total price only tells you the better deal when the quantities being compared are identical. As soon as package sizes differ — 12 oz vs. 20 oz, 40 hours vs. 90 hours — the only fair comparison is a unit rate: divide the total by the quantity for each option, then compare those per-unit numbers directly. It&apos;s common for the larger, more expensive-looking option to actually be the better per-unit value, which total price alone hides.</p>}
      />

      <QuickCheck
      question="Why do many countries require grocery stores to display 'unit price' (like price per ounce) on shelf tags, separate from the total price?"
      options={[
      { text: "Because unit price is required by international trade law for all packaged goods", correct: false, explanation: "Unit pricing requirements are set by individual national or regional consumer-protection regulations, not a single universal international trade law." },
      { text: "Because total price alone doesn't let shoppers fairly compare differently sized packages — unit pricing puts every package on the same per-unit basis so the actual better deal is visible at a glance", correct: true, explanation: "Correct. This is a direct, practical application of unit-rate math: reducing every package to the same 'per ounce' or 'per liter' basis removes the size-based distortion that comparing sticker prices alone creates." },
      { text: "Because unit prices are always lower than total prices, making products look more affordable", correct: false, explanation: "Unit price isn't displayed to make products look cheaper — it's a genuinely different number (price per single unit) specifically meant to enable fair size-independent comparison, not a marketing framing choice." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate a unit rate"
      fields={[
      { key: "totalValue", label: "Total value (e.g. total price)", defaultValue: 5.6 },
      { key: "totalQuantity", label: "Total quantity (e.g. ounces)", defaultValue: 20 },
      ]}
      resultLabel="Unit rate (value per single unit)"
      formula="unitRatePerQuantity"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before assuming the bigger package is the better deal, divide its price by its quantity and compare that unit rate directly to the smaller option's.",
      "When comparing speeds and paces, check which direction the numbers should move — bigger is faster for speed, smaller is faster for pace.",
      "Convert any rates you're comparing to the same time or quantity basis first (both hourly, both per-ounce) before judging which is better.",
      "Use the unit-price tags already on most grocery shelves — they've done the division for you, so use them instead of comparing sticker prices.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a unit rate?", answer: "A unit rate is a ratio expressed as an amount per exactly one unit of something else — like price per ounce or miles per hour — found by dividing the total amount by the number of units." },
      { question: "How do you find the unit rate?", answer: "Divide the total quantity by the number of units. For $5.60 over 20 ounces: 5.60 ÷ 20 = $0.28 per ounce." },
      { question: "Is pace the same as speed?", answer: "No, they're inverses of each other. Speed is distance per unit time (miles per hour) — bigger is faster. Pace is time per unit distance (minutes per mile) — smaller is faster." },
      { question: "Why is the bigger package sometimes cheaper per ounce, even though it costs more overall?", answer: "Because total price and per-unit price are different measurements. A larger package can have a lower unit rate (price per ounce) even while its total sticker price is higher — the only way to know is to divide price by quantity for both options and compare those unit rates directly." },
      { question: "How do you convert running pace to speed?", answer: "Divide 60 by the pace in minutes per mile to get miles per hour. A 9-minute-per-mile pace: 60 ÷ 9 ≈ 6.67 mph." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
