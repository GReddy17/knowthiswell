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
  title: "Math Behind Discounts & Sales",
  category: "math-numbers",
  order: 39,
  subtopic: "applied-and-everyday-math",
  tags: [
    "discounts",
    "percentages",
    "sales math",
    "markup",
    "stacked discounts",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why stacked percentage discounts multiply instead of add, and how to see through markup-then-discount pricing tricks with real arithmetic.",
  summary: "A percentage discount multiplies a price by (1 minus the discount rate), and applying two discounts in sequence multiplies the price by both remaining fractions, which is always less savings than adding the two percentages together.",
  sources: [
    { label: "Khan Academy — Percent Word Problems", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percent-word-problems" },
    { label: "Federal Trade Commission — Consumer Advice", url: "https://consumer.ftc.gov/" },
    { label: "Encyclopaedia Britannica — Percentage", url: "https://www.britannica.com/science/percentage" },
  ],
  seeAlso: [
    "math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic",
    "math-numbers/percentages-explained",
    "math-numbers/math-for-budgeting-and-shopping",
  ],
  glossary: [
    { term: "Discount rate", definition: "The percentage subtracted from a price, expressed as a decimal when used in calculation (20% becomes 0.20)." },
    { term: "Stacked discount", definition: "Two or more discounts applied one after another to the same item, each calculated on the price remaining after the previous discount." },
    { term: "Markup", definition: "A percentage increase applied to a cost or price, calculated the same way as a discount but adding instead of subtracting." },
    { term: "Effective discount", definition: "The single overall percentage a combination of stacked discounts actually removes from the original price, which is always less than the sum of the individual percentages." },
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
      "A percentage discount multiplies the price by (1 minus the discount rate) — 20% off means paying 80% of the original price, not subtracting 20 from the price directly.",
      "Two discounts applied in sequence multiply, they don't add: 20% off then 10% off is not 30% off — it's a smaller combined discount, about 28%.",
      "A markup followed by an equal-percentage discount (or vice versa) never returns the original price, because each percentage is calculated on a different base amount.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/math-behind-discounts-and-sales">discount rate</TermLink> of 25% means you pay 75% of the sticker price. A $80 item at 25% off costs 80 × 0.75 = $60. The trickier case is a &quot;<TermLink href="/math-numbers/math-behind-discounts-and-sales">stacked discount</TermLink>&quot; — two discounts applied one after another, like &quot;25% off, plus an extra 10% off at checkout.&quot; It&apos;s tempting to add those to 35% off, but that&apos;s not how it actually works: the second discount applies to the already-discounted price, not the original one, so the real combined savings is always a little less than simply adding the two percentages.</div>}
      detailed={<div className="prose-p">A single discount transforms price P into P × (1 − d), where d is the discount rate as a decimal. Two stacked discounts d₁ and d₂ transform price P into P × (1 − d₁) × (1 − d₂) — multiplying two separate reduction factors, not subtracting two percentages from 1 at once. Expanding this algebraically: (1 − d₁)(1 − d₂) = 1 − d₁ − d₂ + d₁d₂, which is always greater than 1 − d₁ − d₂ (the naive &quot;just add them&quot; result) whenever both d₁ and d₂ are positive, because the +d₁d₂ term partially offsets the subtraction. In plain terms: stacked percentage discounts are always weaker than their sum suggests, and the gap grows larger as the individual discounts get bigger. The same asymmetry appears with <TermLink href="/math-numbers/math-behind-discounts-and-sales">markup</TermLink>: marking a price up 50% and then discounting the new price 50% does not restore the original price, because the markup&apos;s 50% and the discount&apos;s 50% are computed on two different base amounts (P and 1.5P respectively) — a genuinely common source of confusion in retail pricing psychology.</div>}
      />
      <FootnoteAside>Retailers sometimes deliberately structure pricing as &quot;50% off, plus an extra 30% off&quot; rather than a single equivalent number, because studies in behavioral pricing research have found that stacked-looking discounts are frequently perceived by shoppers as a bigger total saving than the identical single percentage discount would be, even when the actual combined discount is smaller than the sum implies.</FootnoteAside>

      <p>
      The algebra above explains why stacking underperforms addition, but the effect is easiest to actually feel by running one concrete stacked-discount example start to finish.
      </p>

      <QuickCheck
      question="A $100 item is marked '30% off, plus an extra 20% off at checkout.' What is the final price?"
      options={[
      { text: "$50, treating the two discounts as a combined 50% off", correct: false, explanation: "Adding the two percentages together isn't how stacked discounts work — the second discount applies to the already-reduced price from the first discount, not to the original $100." },
      { text: "$56, applying 30% off first ($100 → $70), then 20% off that new price ($70 → $56)", correct: true, explanation: "Correct. 100 × 0.70 = $70 after the first discount, then 70 × 0.80 = $56 after the second — a combined discount of $44, or 44% off, less than the naively expected 50%." },
      { text: "$44, subtracting 30 and then 20 directly from the original $100 price", correct: false, explanation: "This treats the discounts as flat dollar subtractions rather than percentages of a shrinking base — percentage discounts are multiplicative, not simple dollar subtraction from the starting price." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A single straightforward percentage discount (baseline case)</h3>
      <div className="prose-p">
      A $150 jacket is 40% off. Final price = 150 × (1 − 0.40) = 150 × 0.60 = $90. The savings is 150 − 90 = $60, which also checks out directly as 150 × 0.40 = $60. This is the simplest case: one discount rate applied once to one starting price.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two stacked discounts vs. their naive sum (edge case / variation)</h3>
      <div className="prose-p">
      A $200 item is &quot;20% off, plus an additional 10% off.&quot; Applied correctly: 200 × (1 − 0.20) = $160, then 160 × (1 − 0.10) = $144. Total savings: 200 − 144 = $56, which is a 28% effective discount (56 ÷ 200 = 0.28) — not the 30% a shopper might expect from simply adding 20% + 10%. The gap here (28% actual versus 30% naive) is modest with two smaller discounts, but the same algebra applied to two 50% discounts stacked together shows the effect scaling up sharply: 200 × 0.50 × 0.50 = $50 final price, a 75% effective discount — well short of the &quot;100% off, i.e., free&quot; a naive addition of 50% + 50% would incorrectly suggest.
      </div>

      <QuickCheck
      question="A store stacks two 50%-off discounts on the same item, one after another. Does this make the item free (100% off)?"
      options={[
      { text: "Yes, because 50% plus 50% equals 100%", correct: false, explanation: "Stacked percentage discounts multiply the remaining price fractions, they don't add the discount percentages — this naive addition dramatically overstates the real combined discount." },
      { text: "No — applying 50% off twice in sequence leaves the item at 25% of its original price, a 75% effective discount, not free", correct: true, explanation: "Correct. 100% × 0.50 × 0.50 = 25% of the original price remaining, meaning a 75% effective discount — a big markdown, but nowhere near free." },
      { text: "No, because retailers are legally prohibited from ever discounting an item by more than 90% in total", correct: false, explanation: "There's no such universal legal cap being demonstrated here — the reason it isn't free is purely the multiplicative math of stacked percentages, not a regulatory limit." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a 50% markup followed by a 50% discount doesn&apos;t return the original price (real-world / applied case)</h3>
      <div className="prose-p">
      A retailer buys an item for $80 and marks it up 50% for the sticker price: 80 × 1.50 = $120. Later, the item goes on sale for &quot;50% off&quot;: 120 × 0.50 = $60. The final $60 sale price is actually below the original $80 cost — not because the retailer is taking a bigger loss than expected by symmetry, but because the 50% markup was calculated on the smaller $80 base, while the 50% discount was calculated on the larger $120 base. Equal percentages applied to two different base amounts almost never produce numbers that cancel out to the original value — the only case where markup-then-discount returns to the exact starting price is when the two percentages are deliberately chosen to be unequal in a specific, calculated way, not when they&apos;re the same round number.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Stacked discounts: 20% off then 10% off, applied to a $200 item"
      type="flow"
      svgSrc="/diagrams/math-numbers-math-behind-discounts-and-sales-stacked-discount-flow.svg"
      altText="A flow diagram showing a starting price box of $200, an arrow labeled multiply by 0.80 (20% off) pointing to a middle box of $160, then a second arrow labeled multiply by 0.90 (10% off) pointing to a final box of $144, with a side note comparing this to a naive incorrect path showing 200 multiplied by 0.70 (a flat 30% off) landing at $140, highlighting that the correct stacked-discount path ends at a higher, less-discounted $144."
      />
      <p>
      The two arrows in the correct path each shrink the running price by a multiplying factor, and multiplying two factors that are each less than 1 together always produces a smaller reduction than subtracting their percentages from 1 in one step — which is exactly why the correctly stacked path ($144) lands above the naive flat-30%-off path ($140). The gap between the two paths is the visual signature of exactly how much &quot;extra&quot; a naive addition overstates the real savings.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Adding two stacked discount percentages together instead of multiplying the remaining-price fractions in sequence.", fix: "Apply each discount one at a time to the running price (multiply by 1 minus each rate in turn), then compare the final result to the original price to find the true effective discount." },
      { mistake: "Assuming a markup and an equal-percentage discount cancel each other out to return the original price.", fix: "Remember each percentage is calculated on a different base amount — the markup's base is the lower original price, while the discount's base is the higher marked-up price." },
      { mistake: "Treating a percentage discount as a flat dollar subtraction from the price rather than a multiplication.", fix: "Convert the percentage to a decimal and multiply the price by (1 minus that decimal) — '20% off $50' means 50 × 0.80 = $40, not simply 50 − 20 = $30." },
      ]}
      />
      <MisconceptionCallout
      myth="Two stacked percentage discounts are equivalent to one discount equal to their sum — 'save 20%, plus an extra 10%' is the same as '30% off.'"
      reality={<p>Stacked discounts multiply the remaining fraction of the price at each step rather than adding the percentages. A $200 item with 20% off then 10% off ends at $144 (a 28% effective discount) — slightly less generous than a straight 30% off, which would land at $140. The gap between the naive sum and the true stacked result grows larger the bigger the individual discount percentages are.</p>}
      />

      <QuickCheck
      question="Why does a stacked '20% off, then 10% off' end up being a smaller total discount than a flat '30% off' on the same starting price?"
      options={[
      { text: "Because the second discount (10%) is calculated on the already-reduced price from the first discount, which is a smaller number than the original price, so it removes fewer total dollars than 10% of the original would", correct: true, explanation: "Correct. The 10% discount applies to $160 (after the first 20% off), not the original $200 — 10% of $160 is $16, while 10% of the full $200 would have been $20, accounting for the shortfall versus a flat 30% off." },
      { text: "Because retailers round stacked discounts down to the nearest dollar", correct: false, explanation: "Rounding isn't the mechanism here — the shortfall comes directly from the multiplicative math of applying each percentage to a shrinking base price, not from any rounding convention." },
      { text: "Because a stacked discount and a flat discount are actually mathematically identical, and this is just an isolated pricing coincidence", correct: false, explanation: "They are not mathematically identical in general — a stacked discount is always less than or equal to the sum of its parts as a flat discount, a consistent algebraic result, not a one-off coincidence." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Stacked discount calculator (two sequential percentage discounts)"
      fields={[
      { key: "originalPrice", label: "Original price ($)", defaultValue: 200 },
      { key: "discount1Percent", label: "First discount", defaultValue: 20, suffix: "%" },
      { key: "discount2Percent", label: "Second discount", defaultValue: 10, suffix: "%" },
      ]}
      resultLabel="Final price after both discounts ($)"
      formula="stackedDiscountPrice"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you see a stacked discount ('X% off, plus an extra Y% off'), use the calculator above to find the real final price instead of mentally adding the percentages.",
      "Compare the true effective discount percentage (savings ÷ original price) against the naive sum to see exactly how much smaller it really is.",
      "If you see a price that was marked up and is now 'on sale' at the same percentage, calculate both steps separately to check whether it's genuinely below the original cost.",
      "Practice converting a percentage discount to its multiplying factor (100% − discount%) before doing the arithmetic, rather than subtracting the discount from the price directly.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you calculate a percentage discount?", answer: "Multiply the original price by (1 minus the discount rate as a decimal). A $50 item at 20% off costs 50 × (1 − 0.20) = 50 × 0.80 = $40." },
      { question: "Do two stacked discounts add together?", answer: "No. Stacked discounts multiply the remaining price fraction at each step — 20% off then 10% off on the same item results in a combined 28% effective discount, not 30%, because the second discount applies to the already-reduced price." },
      { question: "Does a 50% markup followed by a 50% discount return the original price?", answer: "No. The markup is calculated on the original (lower) price, while the discount is calculated on the marked-up (higher) price — these are different base amounts, so equal percentages applied to each don't cancel out." },
      { question: "What is the effective discount of two stacked percentages?", answer: "It's less than the sum of the two individual percentages. For discounts d1 and d2, the effective discount is 1 − (1 − d1)(1 − d2), which is always slightly smaller than d1 + d2." },
      { question: "Why do stores advertise stacked discounts instead of one combined percentage?", answer: "Stacked discounts (like '30% off, plus an extra 20% off') often appear more generous to shoppers than the mathematically smaller equivalent single percentage, even though the actual combined discount is less than a simple addition of the two would suggest." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
