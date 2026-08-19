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
  title: "Understanding Percentages in Real Life (discounts, tax, tips)",
  category: "math-numbers",
  order: 32,
  subtopic: "statistics-and-data",
  tags: [
    "percentages",
    "discount math",
    "sales tax",
    "tipping",
    "percentage change",
    "consumer math",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How to calculate discounts, sales tax, and tips correctly, and why stacking two 50%-off discounts doesn't make an item free.",
  summary: "A percentage is a rate 'per hundred,' and every real-world percentage calculation — discount, tax, or tip — comes down to converting that rate to a decimal and multiplying it against the right starting amount.",
  sources: [
    { label: "Khan Academy — Percent word problems", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percent-word-problems/a/percent-word-problems" },
    { label: "Encyclopaedia Britannica — Percentage", url: "https://www.britannica.com/science/percentage" },
    { label: "Consumer Financial Protection Bureau — Consumer Tools", url: "https://www.consumerfinance.gov/consumer-tools/" },
    { label: "NIST/SEMATECH e-Handbook of Statistical Methods", url: "https://www.itl.nist.gov/div898/handbook/" },
  ],
  seeAlso: [
    "math-numbers/percentages-explained",
    "math-numbers/reading-graphs-and-charts",
    "math-numbers/probability-basics",
    "math-numbers/data-collection-and-sampling-basics",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Percentage", definition: "A rate expressed as a portion 'per hundred' — 25% means 25 out of every 100, or the decimal 0.25." },
    { term: "Percentage point", definition: "A unit for describing the raw difference between two percentages, distinct from the percentage (relative) change between them — a tax rate rising from 5% to 6% is a 1 percentage point increase, but a 20% relative increase in the rate itself." },
    { term: "Discount", definition: "A percentage subtracted from an original price, calculated as original price × (1 − discount rate)." },
    { term: "Sales tax", definition: "A percentage added on top of a purchase price by a government, calculated as price × (1 + tax rate)." },
    { term: "Tip (gratuity)", definition: "A percentage of a bill given voluntarily, most commonly calculated on the pre-tax subtotal rather than the post-tax total." },
    { term: "Compounding percentages", definition: "The effect of applying two or more percentages in sequence, where each one acts on the result of the previous step (multiplicative), rather than adding the percentages together." },
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
          "A percentage is just 'per hundred' — converting a percent to a decimal (divide by 100) is the one step that makes every discount, tax, and tip calculation simple.",
          "Applying multiple percentages in sequence, like a discount followed by tax, is multiplicative, not additive — a 30% discount followed by 8% tax is not the same as a flat 22% off.",
          "Tax is added to a price, a discount is subtracted from it, and a tip is conventionally calculated on the pre-tax subtotal — mixing up which base a percentage applies to is the most common way people miscalculate a total.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">percentage</TermLink> is a way of saying &quot;out of 100.&quot; A 25% <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">discount</TermLink> means you subtract 25 out of every 100 dollars from the price. An 8% <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">sales tax</TermLink> means you add 8 out of every 100 dollars on top. An 18% <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">tip</TermLink> means you add 18 out of every 100 dollars of the bill as a gratuity. All three use the exact same mechanic — convert the percent to a decimal by dividing by 100, then multiply it by the amount it applies to.</div>}
        detailed={<div className="prose-p">Every percentage calculation follows Price_final = Price × (1 ± rate ÷ 100), with a minus sign for a discount and a plus sign for tax. The part that trips people up is what happens when percentages are applied one after another: each step operates on the <em>result</em> of the previous step, not on the original number, which means percentages <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">compound</TermLink> multiplicatively rather than adding together. A 30% discount followed by an 8% tax is not &quot;22% off&quot; — it&apos;s Price × 0.70 × 1.08, a different result entirely. It also matters to distinguish a percentage change from a <TermLink href="/math-numbers/understanding-percentages-in-real-life-discounts-tax-tips">percentage point</TermLink> change: if a sales tax rate rises from 5% to 6%, that&apos;s a 1 percentage point increase, but it&apos;s actually a 20% relative increase in the tax rate itself (1 ÷ 5 = 20%) — both descriptions are correct, but they answer different questions, and news headlines routinely blur the two.</div>}
      />
      <FootnoteAside>The word &quot;percent&quot; comes from the Latin <em>per centum</em>, &quot;by the hundred.&quot; The % symbol itself evolved from an abbreviation used in 15th-century Italian manuscripts — &quot;per cento&quot; was shortened to &quot;p cento,&quot; then to &quot;p c⁰,&quot; and over generations of hand-copying that &quot;c⁰&quot; gradually flattened into the two circles and slash we use today.</FootnoteAside>

      <p>
      That compounding behavior — each percentage acting on the result of the last one, not the original number — is the single biggest source of real-world percentage mistakes, and it&apos;s worth testing against your own intuition before walking through the arithmetic.
      </p>

      <QuickCheck
        question="A $100 item gets 20% off, and then a 20% coupon is applied to the already-discounted price. Is the final price the same as taking a flat 40% off the original $100?"
        options={[
          { text: "Yes — 20% off plus another 20% off is the same as 40% off in total", correct: false, explanation: "This adds the two percentages together, which only works if both are applied to the same original amount. Here, the second 20% applies to the already-reduced price, not the original $100." },
          { text: "No — the two 20% discounts compound to a final price of $64, not the $60 that a flat 40% discount would give", correct: true, explanation: "Correct. $100 × 0.80 × 0.80 = $64. A flat 40% off would be $100 × 0.60 = $60. Applying two discounts in sequence is always less generous to the buyer than adding the percentages and taking one flat discount." },
          { text: "It depends on which discount is applied first", correct: false, explanation: "Multiplication is commutative, so the order of two percentage discounts doesn't change the final result ($100 × 0.8 × 0.8 gives the same answer either order) — the actual issue is that stacking is multiplicative, not additive, regardless of order." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating a single discount (baseline case)</h3>
      <div className="prose-p">
      A jacket is priced at $80 and is 25% off. Convert the percentage to a decimal: 25 ÷ 100 = 0.25. Discount amount = $80 × 0.25 = $20. Final price = $80 − $20 = <strong>$60</strong>, or equivalently in one step: $80 × (1 − 0.25) = $80 × 0.75 = $60. Both routes give the identical answer — computing the discount amount separately is just a way of showing your work, not a different calculation.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Discount followed by tax — why percentages compound instead of adding (edge case / variation)</h3>
      <div className="prose-p">
      A $50 item is 30% off, and 8% sales tax applies to the discounted price. Step 1 — apply the discount: $50 × (1 − 0.30) = $50 × 0.70 = $35.00. Step 2 — apply tax to that new amount: $35.00 × (1 + 0.08) = $35.00 × 1.08 = <strong>$37.80</strong>. Compare this to the common shortcut mistake of simply subtracting the tax rate from the discount rate (30% − 8% = 22% off): $50 × (1 − 0.22) = $50 × 0.78 = $39.00 — a different, and incorrect, answer. The two percentages apply to different bases (one to the original price, one to the discounted price), so they can&apos;t be combined by simple subtraction; each step has to be worked in the actual order it happens.
      </div>

      <QuickCheck
        question="A $40 shirt is 50% off, and then an extra 50% off is applied to the already-discounted sale price. What is the final price — free, $10, or $20?"
        options={[
          { text: "Free ($0), since 50% + 50% = 100% off", correct: false, explanation: "This adds the two percentages as if both applied to the original $40. The second 50% actually applies to the already-discounted $20 price, not the original amount." },
          { text: "$10, because the second 50% discount is taken off the already-discounted $20 price, not the original $40", correct: true, explanation: "Correct. $40 × 0.50 = $20 after the first discount, then $20 × 0.50 = $10 after the second. Two stacked 50% discounts equal 75% off total, not 100% off." },
          { text: "$20, because only the first discount actually counts", correct: false, explanation: "The second discount does apply and does reduce the price further — it just applies to the new $20 price, not the original $40, bringing the final total down to $10." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Tipping on the pre-tax vs. post-tax amount (real-world / applied case)</h3>
      <div className="prose-p">
      A restaurant bill totals $64.50 before tax, with an 8% sales tax and a planned 18% tip. Tax first: $64.50 × 0.08 = $5.16, making the post-tax total $69.66. Convention in most of the U.S. is to tip on the pre-tax subtotal: $64.50 × 0.18 = <strong>$11.61</strong>, for a total payment of $69.66 + $11.61 = $81.27. If the same 18% were calculated on the post-tax total instead ($69.66 × 0.18 = $12.54), the tip would be about 93 cents higher — a small but real difference that comes entirely from which base amount the percentage is applied to, the same underlying issue as Example 2.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a price moves through a discount, tax, and tip in sequence"
        type="flow"
        svgSrc="/diagrams/math-numbers-understanding-percentages-in-real-life-discounts-tax-tips-price-flow.svg"
        altText="A left-to-right flow diagram starting with an original price box, an arrow labeled multiply by (1 minus discount rate) leading to a discounted price box, a second arrow labeled multiply by (1 plus tax rate) leading to a post-tax price box, and a third branch labeled multiply the pre-tax subtotal by the tip rate leading to a tip amount box, with a final box summing post-tax price plus tip into the total amount paid."
      />
      <p>
      Each arrow in the flow represents multiplying by a factor built from a percentage, and the key detail is that every arrow acts on the box directly before it, not on the original starting box. That&apos;s the visual version of &quot;percentages compound, they don&apos;t add&quot; — tracing the diagram left to right is the same sequence of steps worked out numerically in Example 2 and Example 3.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Adding or subtracting percentages directly instead of applying them one at a time in sequence (treating 30% off then 8% tax as a flat 22% off).", fix: "Apply each percentage as its own multiplication step, in the actual order it happens, to whatever amount exists at that point — not to the original price each time." },
          { mistake: "Confusing 'percentage' with 'percentage point,' especially when reading about a rate change (a tax rate rising from 5% to 6%).", fix: "A change from 5% to 6% is a 1 percentage point increase, but a 20% relative increase in the rate itself. Check which one a headline or claim actually means before repeating it." },
          { mistake: "Assuming two equal successive discounts add up to their sum (two 50%-off discounts making an item free).", fix: "Each discount applies to the price left after the previous one. Work it step by step: $40 × 0.5 = $20, then $20 × 0.5 = $10 — 75% off total, not 100%." },
        ]}
      />
      <MisconceptionCallout
        myth="An item that's 50% off, with an extra 50% off on top, ends up free."
        reality={<p>Stacked percentage discounts multiply against the price remaining after each step, they don&apos;t add up to their sum. A $40 item at 50% off becomes $20; applying the second 50% off to that new $20 price gives $10, not $0. Two stacked 50%-off discounts equal 75% off in total — a real and generous discount, but nowhere near free. The same multiplicative logic is exactly why a 100%-off-equivalent claim (&quot;buy one get one free,&quot; described as &quot;50% off two items&quot;) is genuinely 50% off, while two separate 50%-off coupons stacked on one item is not.</p>}
      />

      <QuickCheck
        question="A store advertises 'Take an extra 50% off already-reduced clearance prices.' A jacket's clearance price is already 50% off the original $120. What is the final price?"
        options={[
          { text: "$0 — two 50% discounts cancel the price out completely", correct: false, explanation: "This treats the discounts as additive (50% + 50% = 100%), but each discount is applied to the price remaining after the previous one, not the original $120." },
          { text: "$30 — the clearance price is $60 after the first 50% off, and the extra 50% off is applied to that $60, not the original $120", correct: true, explanation: "Correct. $120 × 0.5 = $60 (clearance price), then $60 × 0.5 = $30 (extra 50% off). The two stacked discounts total 75% off the original $120, landing at $30 — not free." },
          { text: "$60 — the second discount doesn't actually apply to clearance items", correct: false, explanation: "The scenario states the extra 50% off does apply to the already-reduced clearance price — the error here is stopping after only the first discount instead of applying both steps." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Price after a single discount"
        fields={[
          { key: "originalPrice", label: "Original price ($)", defaultValue: 80 },
          { key: "discountPercent", label: "Discount rate (%)", defaultValue: 25 },
        ]}
        resultLabel="Price after discount"
        formula="discountedPrice"
        formatResult="currency"
      />
      <EntryCalculator
        title="Price after adding sales tax"
        fields={[
          { key: "preTaxPrice", label: "Pre-tax price ($)", defaultValue: 35 },
          { key: "taxPercent", label: "Sales tax rate (%)", defaultValue: 8 },
        ]}
        resultLabel="Price after tax"
        formula="priceWithTax"
        formatResult="currency"
      />
      <EntryCalculator
        title="Tip amount from a bill"
        fields={[
          { key: "billAmount", label: "Bill amount, pre-tax ($)", defaultValue: 64.5, step: 0.01 },
          { key: "tipPercent", label: "Tip rate (%)", defaultValue: 18 },
        ]}
        resultLabel="Tip amount"
        formula="tipAmount"
        formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time a receipt shows a discount and tax together, work out each step separately (discount first, then tax on the new amount) instead of subtracting the two rates.",
          "Try the calculators above with your own numbers from a recent purchase and check the total against your actual receipt.",
          "Before splitting a restaurant bill, decide as a group whether the tip is on the pre-tax or post-tax amount — the difference is usually small but avoids a mismatched total.",
          "Read the related entry on Percentages Explained for the underlying fraction-decimal-percent conversions this entry builds on.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you calculate a discount percentage?", answer: "Convert the discount rate to a decimal (divide by 100), then multiply the original price by (1 − that decimal). A $80 item at 25% off: $80 × (1 − 0.25) = $60." },
          { question: "Do you tip before or after tax?", answer: "Convention in most of the U.S. is to calculate a tip on the pre-tax subtotal, not the post-tax total. The difference is usually small (roughly the tip rate multiplied by the tax amount) but it's worth agreeing on before splitting a bill." },
          { question: "How do you calculate sales tax on a purchase?", answer: "Convert the tax rate to a decimal and multiply the pre-tax price by (1 + that decimal). A $35 item with 8% tax: $35 × (1 + 0.08) = $37.80." },
          { question: "Is 50% off plus another 50% off the same as free?", answer: "No. Each discount applies to the price remaining after the previous one, not the original price. A $40 item with two stacked 50%-off discounts ends at $10 (75% off total), not $0." },
          { question: "What is the difference between a percentage and a percentage point?", answer: "A percentage point measures the raw difference between two percentages (5% to 6% is a 1 percentage point rise), while a percentage change measures the relative change (that same move is a 20% relative increase in the rate). Both are correct descriptions of the same change, but they answer different questions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
