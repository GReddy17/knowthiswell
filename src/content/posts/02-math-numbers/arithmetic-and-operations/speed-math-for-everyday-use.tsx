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
  title: "Speed Math for Everyday Use: Discounts, Unit Prices & Quick Tax",
  category: "math-numbers",
  order: 17,
  subtopic: "arithmetic-and-operations",
  tags: [
    "speed math",
    "quick math",
    "unit price",
    "successive discounts",
    "percentage change",
    "sales tax estimate",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Fast, reliable math for checkout-line situations — stacking discounts correctly, comparing unit prices, and estimating tax without a calculator.",
  summary: "Everyday 'speed math' situations — discounts, tax, comparing package sizes — reduce to a handful of repeatable patterns, and the single biggest trap is treating stacked percentage changes as if they simply add together.",
  sources: [
    { label: "Khan Academy — Percent Word Problems", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percent-word-problems/a/percent-word-problems" },
    { label: "Britannica — Percentage", url: "https://www.britannica.com/science/percentage" },
    { label: "NIST — Office of Weights and Measures", url: "https://www.nist.gov/pml/weights-and-measures" },
  ],
  seeAlso: [
    "math-numbers/mental-math-tricks",
    "math-numbers/percentages-explained",
    "math-numbers/estimation-and-rounding",
    "math-numbers/averages-mean-median-mode",
  ],
  glossary: [
    { term: "Unit price", definition: "The price of an item divided by its quantity (per ounce, per item), used to compare value across differently sized packages." },
    { term: "Percentage change", definition: "How much a value increases or decreases relative to its starting value, expressed as a percentage of that starting value." },
    { term: "Multiplicative stacking", definition: "The correct way to combine successive percentage changes — by multiplying the remaining fractions together, not by adding the percentages." },
    { term: "Sales tax", definition: "A percentage-based charge added to a purchase price at the point of sale, set by state or local government." },
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
      "Most everyday 'speed math' situations reduce to one of a few repeatable patterns — percentage of a number, unit price comparison, or splitting a total evenly — recognizing the pattern is faster than reinventing the arithmetic each time.",
      "Successive discounts and price changes stack multiplicatively, not additively: a 20% discount followed by a 10% discount leaves you paying 0.8 × 0.9 = 72% of the original price, a 28% total discount, not 30%.",
      "Comparing unit price (price per ounce, per item) rather than sticker price is the fastest reliable way to tell which of two differently sized options is the better deal — and the bigger package isn't always the cheaper one per unit.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Everyday &quot;speed math&quot; isn&apos;t a separate branch of arithmetic — it&apos;s applying a small set of patterns to real numbers fast enough to be useful in a checkout line. Finding a percentage of a number (a tip, a tax, a discount) is one pattern: move the decimal for 10%, then scale from there. Comparing two different-sized packages is another: divide each price by its quantity to get a <TermLink href="/math-numbers/speed-math-for-everyday-use">unit price</TermLink>, then compare those instead of the sticker prices. Splitting a bill evenly among friends is a third: divide the total by the number of people. Once you recognize which pattern a situation calls for, the actual arithmetic is usually simple.</div>}
      detailed={<div className="prose-p">The pattern most likely to produce a wrong answer under time pressure is stacking two or more percentage changes. Percentages don&apos;t add across separate events the way flat dollar amounts do — each percentage change applies to whatever value is currently on the table, not to the original value. A 20% discount leaves 80% of the price (a multiplier of 0.8); a further 10% discount leaves 90% of whatever remains (a multiplier of 0.9). Applied in sequence, the combined multiplier is 0.8 × 0.9 = 0.72, meaning the buyer pays 72% of the original price — a 28% total discount, not the 30% naive addition suggests. The same multiplicative logic governs tax-then-tip, markup-then-markdown, and raise-then-cut scenarios: whenever you see &quot;X% off, then another Y% off&quot; or &quot;X% up, then Y% down,&quot; multiply the remaining fractions (1 - X/100) and (1 - Y/100 or 1 + Y/100) together rather than adding or subtracting the raw percentages.</div>}
      />
      <FootnoteAside>A classic example of percentage stacking catching people off guard: if a stock drops 50% one year and then rises 50% the next, it does not return to its original value. Dropping 50% leaves 0.5 of the original price; rising 50% from there multiplies that by 1.5, giving 0.5 × 1.5 = 0.75 — the stock ends up worth only 75% of where it started, a net 25% loss, even though the percentage drop and the percentage gain were numerically equal.</FootnoteAside>

      <div className="prose-p">
      Recognizing the pattern is half the job. The other half is running the arithmetic fast and correctly under real conditions — a register line, a grocery aisle, a bill split among friends — which is exactly where the worked examples below are aimed.
      </div>

      <QuickCheck
      question="A $50 jacket is 20% off. What is the sale price?"
      options={[
      { text: "$40, since 20% of $50 is $10, and $50 − $10 = $40", correct: true, explanation: "Correct. 20% of $50 is $10 (move the decimal for 10% = $5, then double it). Subtracting that $10 discount from $50 leaves a sale price of $40." },
      { text: "$30, since 20% off means paying 20% of the price", correct: false, explanation: "20% off means the discount is 20%, so you pay the remaining 80%, not just 20%. Paying only 20% ($10) would represent an 80% discount, far more than stated." },
      { text: "$45, since 20% off is roughly a $5 discount", correct: false, explanation: "20% of $50 is $10, not $5 — $5 would only be a 10% discount. The actual discount here is twice that, bringing the price down to $40." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Estimating sales tax at checkout (baseline case)</h3>
      <div className="prose-p">
      A purchase totals $65 before an 8% sales tax. Find 10% first, since it&apos;s the fastest percentage to compute (move the decimal one place): 10% of $65 is $6.50. Since 8% is 2 percentage points less than 10%, find 2% (one-fifth of the 10% figure, since 2 is one-fifth of 10): $6.50 ÷ 5 = $1.30. Subtract that from the 10% figure: $6.50 - $1.30 = $5.20. The estimated tax is $5.20, for a total of roughly $70.20 — close enough to confirm you&apos;re carrying enough cash, computed entirely from the easy 10% benchmark.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two discounts stacked in sequence (edge case / variation)</h3>
      <div className="prose-p">
      An $80 jacket is marked 25% off, and a loyalty coupon takes an additional 10% off the already-discounted price. The intuitive-but-wrong approach adds the percentages: 25% + 10% = 35% off, giving a sale price of $80 × 0.65 = $52. The correct approach multiplies the remaining fractions in sequence: first 25% off leaves 75% of the price, $80 × 0.75 = $60; then 10% off that new price leaves 90% of it, $60 × 0.90 = $54. The true sale price is $54, not $52 — the two discounts combined only remove 32.5% of the original price (since $54 is 67.5% of $80), not the naively-added 35%, because the second discount was applied to an already-reduced amount.
      </div>
      <QuickCheck
      question="A $200 TV is discounted 30%, then an extra 15% is taken off at checkout. What is the final price?"
      options={[
      { text: "$110, using $200 × (1 - 0.30 - 0.15) = $200 × 0.55", correct: false, explanation: "This adds the two discount percentages together (30% + 15% = 45% off) instead of applying them one after another. The second discount should be applied to the already-reduced price, not to the original price." },
      { text: "$119, using $200 × 0.70 × 0.85", correct: true, explanation: "Correct. The first discount leaves 70% of $200 = $140. The second discount leaves 85% of that $140 = $119. Multiplying the remaining fractions in sequence (0.70 × 0.85 = 0.595) gives the correct combined result." },
      { text: "$90, using $200 × 0.45", correct: false, explanation: "This treats 45% as the fraction paid rather than the fraction removed, and it's also based on the incorrect additive approach to begin with. Neither the method nor the resulting number is correct here." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing unit prices between two package sizes (real-world / applied case)</h3>
      <p>
      A &quot;value size&quot; bag of coffee is 30 oz for $12.99. A &quot;standard&quot; bag of the same coffee is 12 oz for $4.99. It&apos;s tempting to assume the bigger bag is automatically the better deal, but check the unit price instead: the value bag costs $12.99 ÷ 30 = $0.433 per ounce, while the standard bag costs $4.99 ÷ 12 = $0.416 per ounce. The smaller standard bag is actually slightly cheaper per ounce, despite the &quot;value size&quot; label. Dividing price by quantity, rather than comparing total sticker prices, is the only reliable way to catch cases like this — and larger package sizes are not always the better per-unit deal, contrary to what shoppers usually assume.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Stacking two discounts: multiplying remaining fractions vs. adding percentages"
      type="detail"
      svgSrc="/diagrams/math-numbers-speed-math-for-everyday-use-stacked-discounts.svg"
      altText="Bar diagram showing an original price as a full-length bar, with a first shaded segment removed representing a 25% discount (leaving 75% of the bar), followed by a second shaded segment removed from that already-shortened bar representing a 10% discount (leaving 90% of the 75%), ending at a final bar length of 67.5% of the original, contrasted against an incorrect dashed marker at 65% showing where simple addition of the two percentages would have landed."
      />
      <p>
      Each discount shortens whatever bar length remains at that point, not the original full-length bar. That&apos;s the entire visual explanation for why stacked percentages multiply instead of add: the second discount has a smaller base to work from than the first one did, so it removes a smaller absolute amount even though its percentage rate is applied in full. The gap between the correctly stacked endpoint (67.5%) and the naively added endpoint (65%) is small in this example, but it grows quickly with larger percentages or more discounts stacked in sequence.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Adding two successive percentage discounts together instead of multiplying the remaining fractions (treating 25% off then 10% off as 35% off).", fix: "Apply each discount to the price that remains after the previous one, multiplying the remaining fractions: (1 - 0.25) × (1 - 0.10) = 0.675, a 32.5% total discount, not 35%." },
      { mistake: "Comparing total sticker prices between different package sizes instead of unit prices.", fix: "Divide each price by its quantity (price ÷ ounces, price ÷ item count) before comparing. The bigger package is not automatically the cheaper one per unit." },
      { mistake: "Defaulting to a familiar percentage (like always estimating with 10%) without adjusting it to match the actual required rate.", fix: "Use 10% as a starting benchmark, then scale it up or down to the actual rate needed — for an 8% tax, subtract a fifth of the 10% figure; for a 15% tip, add half of it." },
      ]}
      />
      <MisconceptionCallout
      myth="A 20% discount followed by another 10% discount is the same as one 30% discount."
      reality={<p>It isn&apos;t — the two discounts multiply the remaining fraction rather than adding the percentages. The first discount leaves 80% of the price (a multiplier of 0.8); the second discount removes 10% of that already-reduced amount, leaving 90% of it (a multiplier of 0.9). Combined, the buyer pays 0.8 × 0.9 = 0.72, or 72% of the original price — a 28% total discount, not 30%. The same logic runs in the other direction too: a 50% pay cut followed by a 50% raise doesn&apos;t return you to your original salary; it leaves you at 0.5 × 1.5 = 0.75, or 75% of where you started.</p>}
      />
      <QuickCheck
      question="An item's price goes up 50% one month, then down 50% the next month. Is the final price the same as the original price?"
      options={[
      { text: "Yes, since the two 50% changes are equal in size and cancel out", correct: false, explanation: "Equal percentages don't cancel when applied in sequence, because the second percentage is taken from a different (larger) base than the first. A 50% increase followed by a 50% decrease does not return to the starting value." },
      { text: "No — the final price is 75% of the original, since a 50% increase (×1.5) followed by a 50% decrease (×0.5) multiplies to 0.75", correct: true, explanation: "Correct. Multiplying the two changes in sequence, 1.5 × 0.5 = 0.75, leaves the item at 75% of its original price — a net 25% loss, not a return to the starting price." },
      { text: "No — the final price ends up higher than the original, since the increase happened first", correct: false, explanation: "Multiplying 1.5 × 0.5 = 0.75 gives a price lower than the original, not higher. Doing the increase first doesn't protect the final value from ending up below the starting point." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Find a percentage of a number (tips, tax, discounts)"
      fields={[
      { key: "percent", label: "Percent (%)", defaultValue: 8 },
      { key: "number", label: "Amount", defaultValue: 65 },
      ]}
      resultLabel="Percent of amount"
      formula="percentOfNumber"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you see two stacked discounts advertised, compute the actual combined multiplier ((1 - first%) × (1 - second%)) instead of adding the two percentages.",
      "Before buying the larger of two package sizes, do the quick division for unit price on both — don't assume bigger is automatically cheaper per unit.",
      "Practice the '10%, then scale' method for estimating tax and tips on a few real receipts until the scaling step (halving for 5%, fifths for 2%) becomes automatic.",
      "Read the related entry on Percentages Explained for the full mechanics of percentage change, percentage points, and percent-of-a-percent calculations.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you calculate a discount quickly in your head?", answer: "Find 10% first by moving the decimal one place left, then scale that figure up or down to the actual discount rate — for 20% off, double the 10% figure; for 5% off, halve it." },
      { question: "Do two discounts stack by adding their percentages?", answer: "No. Successive discounts multiply the remaining fractions of the price, not add the percentages. A 25% discount followed by a 10% discount leaves 0.75 × 0.90 = 67.5% of the original price, a 32.5% total discount, not 35%." },
      { question: "How do you compare prices between different package sizes?", answer: "Divide each item's price by its quantity to get a unit price (price per ounce, per item, per count), and compare those unit prices directly rather than comparing the total sticker prices." },
      { question: "What's the fastest way to estimate sales tax without a calculator?", answer: "Compute 10% of the purchase total by moving the decimal one place left, then scale that figure to the actual tax rate — for an 8% tax, subtract one-fifth of the 10% figure from itself." },
      { question: "If a value drops 50% and then rises 50%, does it return to its original amount?", answer: "No. A 50% drop leaves 50% of the original value; a 50% rise from there multiplies that by 1.5, giving 75% of the original — a net 25% loss, even though the two percentage changes were numerically equal." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
