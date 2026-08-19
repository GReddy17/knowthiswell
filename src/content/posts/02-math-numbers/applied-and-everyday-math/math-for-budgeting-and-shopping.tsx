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
  title: "Math for Budgeting & Shopping",
  category: "math-numbers",
  order: 33,
  subtopic: "applied-and-everyday-math",
  tags: [
    "budgeting",
    "percentages",
    "unit price",
    "personal finance math",
    "shopping math",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How percentage allocation turns a paycheck into a budget, and how unit price math finds the actually-cheaper option at the store.",
  summary: "Budgeting math allocates income by percentage across spending categories, while shopping math compares unit price — cost per unit of quantity — rather than sticker price alone.",
  sources: [
    { label: "Khan Academy — Personal Finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance" },
    { label: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/" },
    { label: "U.S. Bureau of Labor Statistics — Consumer Expenditure Surveys", url: "https://www.bls.gov/cex/" },
  ],
  seeAlso: [
    "math-numbers/percentages-explained",
    "math-numbers/math-behind-discounts-and-sales",
    "math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Budget allocation", definition: "The portion of income assigned to a specific spending category, usually expressed as a percentage of total income." },
    { term: "Unit price", definition: "The cost of a product divided by its quantity (per ounce, per liter, per item), used to compare differently sized packages on equal footing." },
    { term: "Take-home pay", definition: "Income remaining after taxes and payroll deductions — the actual amount available to budget, as opposed to gross pay." },
    { term: "Fixed expense", definition: "A recurring cost that stays roughly the same each period, like rent or a loan payment, as opposed to a variable expense like groceries." },
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
      "Budgeting math is percentage allocation: you assign each dollar of income a category share, like the well-known 50/30/20 split between needs, wants, and savings.",
      "Comparing prices while shopping means computing unit price — price divided by quantity — because package sizes rarely match, and the sticker price alone can mislead.",
      "Small recurring costs compound arithmetically fast: a $5 daily habit is $150 a month and $1,825 a year, numbers that feel very different from 'just five dollars.'",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Budgeting math is mostly about splitting income into percentages. A common rule of thumb is <strong>50/30/20</strong>: 50% of income to needs (rent, groceries, utilities), 30% to wants (dining out, entertainment), and 20% to savings and debt paydown. If you earn $3,000 a month after taxes, that&apos;s $1,500 needs, $900 wants, and $600 savings. Shopping math is a separate but related skill — figuring out which of two differently-sized packages is actually the better deal by comparing <TermLink href="/math-numbers/math-for-budgeting-and-shopping">unit price</TermLink> (cost per ounce, per item, per liter) instead of just looking at which price tag is bigger or smaller.</div>}
      detailed={<div className="prose-p">Formally, a <TermLink href="/math-numbers/math-for-budgeting-and-shopping">budget allocation</TermLink> for a category is allocation = income × (percent ÷ 100), the same percent-of-a-number arithmetic used everywhere else in math — budgeting doesn&apos;t need new math, just a consistent application of it. One real edge case: budgeting is usually planned monthly, but many workers are paid biweekly (every two weeks, 26 pay periods a year) rather than semi-monthly (twice a month, 24 pay periods a year). Twenty-six divided by twelve is not a whole number — it works out to roughly 2.17 paychecks per month on average, meaning two months out of every year bring in a third &quot;extra&quot; paycheck. Budgets built assuming exactly two paychecks a month will misjudge those two months unless this is accounted for explicitly. Unit price math is equally mechanical: unit price = total price ÷ quantity, and the lowest unit price (not the lowest sticker price, and not automatically the largest package) is the objectively cheaper option per unit — assuming you&apos;ll actually use the full quantity before it spoils or expires, which is its own separate judgment call.</div>}
      />
      <FootnoteAside>The 50/30/20 budgeting rule was popularized by U.S. Senator (then Harvard law professor) Elizabeth Warren and her daughter Amelia Warren Tyagi in their 2005 book <em>All Your Worth: The Ultimate Lifetime Money Plan</em> — it predates most budgeting apps by well over a decade.</FootnoteAside>

      <p>
      That unit-price idea sounds obvious in the abstract, but store shelves are specifically designed to make sticker-price comparisons easy and unit-price comparisons hard — different brands sell in different-sized containers on purpose.
      </p>

      <QuickCheck
      question="A 12-ounce bottle of juice costs $3.60. A 16-ounce bottle of the same juice costs $4.80. Which is the better deal per ounce?"
      options={[
      { text: "The 16-ounce bottle, because $4.80 is more total juice per dollar spent overall", correct: false, explanation: "Total price doesn't answer a per-ounce question by itself — you have to actually divide price by quantity for each option before comparing them." },
      { text: "They're the same value per ounce — $3.60 / 12 = $0.30/oz and $4.80 / 16 = $0.30/oz", correct: true, explanation: "Correct. Both work out to exactly $0.30 per ounce. Neither is the better deal — the larger bottle just costs more in total because it holds more, not because it's priced better." },
      { text: "The 12-ounce bottle, because smaller packages are always cheaper per unit", correct: false, explanation: "There's no rule that smaller packages are cheaper per unit — sometimes bulk sizes are cheaper per unit, sometimes they're not. You have to calculate it, not assume a direction." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A 50/30/20 budget on a real paycheck (baseline case)</h3>
      <div className="prose-p">
      Take-home pay of $4,200 a month. Needs (50%): 4,200 × 0.50 = $2,100. Wants (30%): 4,200 × 0.30 = $1,260. Savings and debt paydown (20%): 4,200 × 0.20 = $840. Check the total: 2,100 + 1,260 + 840 = 4,200 — the three categories account for every dollar of take-home pay, which is the entire point of allocating by percentage rather than guessing category-by-category and hoping it adds up.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Budgeting around biweekly pay, not monthly pay (edge case / variation)</h3>
      <div className="prose-p">
      Someone paid $1,800 every two weeks assumes $3,600 a month (two paychecks × $1,800). But 52 weeks ÷ 2 = 26 pay periods a year, and 26 × $1,800 = $46,800 a year — while 12 months × $3,600 = $43,200. The $3,600 monthly figure undercounts actual annual income by $3,600, because two months each year receive three paychecks instead of two (this happens whenever a pay date falls at the start, middle, and end of the same calendar month). Treating those &quot;extra&quot; paychecks as a predictable bonus for savings or debt paydown, rather than spending them as if they were ordinary monthly income, avoids both under- and over-budgeting across the year.
      </div>

      <QuickCheck
      question="Someone paid biweekly ($1,800 every two weeks) assumes their monthly income is always $3,600. What's the actual issue with this assumption?"
      options={[
      { text: "There's no issue — biweekly pay always works out to exactly two paychecks per calendar month", correct: false, explanation: "26 pay periods a year don't divide evenly into 12 months. Two months a year get a third paycheck, which this assumption misses entirely." },
      { text: "Biweekly pay periods (26/year) don't divide evenly into 12 months, so two months a year receive a third paycheck the $3,600 estimate doesn't account for", correct: true, explanation: "Correct. 26 paychecks a year, spread across 12 months, means two months get three paychecks instead of two — real annual income is $46,800, not the $43,200 implied by assuming $3,600 every month." },
      { text: "Biweekly pay is always less reliable than monthly pay for budgeting purposes", correct: false, explanation: "Reliability isn't the issue — the math of dividing 26 pay periods across 12 months unevenly is. Once that's accounted for, biweekly pay budgets just as reliably as any other schedule." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing store-brand package sizes with unit price (real-world / applied case)</h3>
      <div className="prose-p">
      A store shelf has three sizes of the same cereal: a 12-ounce box for $3.99, an 18-ounce box for $5.49, and a 24-ounce &quot;family size&quot; box for $7.99. Unit prices: 3.99 ÷ 12 = $0.333/oz, 5.49 ÷ 18 = $0.305/oz, 7.99 ÷ 24 = $0.333/oz. The middle size is actually the cheapest per ounce — the largest &quot;family size&quot; box, despite looking like the obvious bulk-savings choice, ties with the smallest box instead of beating it. This is a common real-world pattern: retailers don&apos;t guarantee larger packages are proportionally cheaper, and the only way to know is to check unit price directly, which many stores print on the shelf tag in small print specifically for this reason.
      </div>

      <QuickCheck
      question="On the cereal shelf, the 24-ounce 'family size' box has the same unit price as the smallest 12-ounce box, while the mid-size 18-ounce box is actually cheapest per ounce. What does this demonstrate?"
      options={[
      { text: "Larger packages are always the best value, this is just an unusual exception", correct: false, explanation: "There's no general rule that larger packages are the best value — this isn't a rare exception, it's a normal outcome of how retailers price different sizes independently." },
      { text: "Package size and unit price aren't reliably correlated, so unit price has to be checked directly rather than assumed from size", correct: true, explanation: "Correct. Retailers price each package size somewhat independently, so bigger doesn't automatically mean cheaper per unit — the shelf tag's unit price (or your own division) is the only reliable way to know." },
      { text: "The store made a pricing error that should be reported", correct: false, explanation: "This kind of pricing pattern is common and not an error — different package sizes are frequently priced without a strict per-unit discount for size, especially across different manufacturing runs or promotions." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A $4,200 paycheck split by the 50/30/20 rule"
      type="comparison"
      svgSrc="/diagrams/math-numbers-math-for-budgeting-and-shopping-50-30-20-split.svg"
      altText="A horizontal bar divided into three proportional segments: a large left segment labeled Needs 50% ($2,100), a medium middle segment labeled Wants 30% ($1,260), and a smaller right segment labeled Savings 20% ($840), with the three segments together spanning the full width representing $4,200 total take-home pay."
      />
      <p>
      The bar&apos;s full width represents 100% of take-home pay, and each segment&apos;s width is proportional to its percentage — this is exactly why percentage allocation works for budgeting regardless of income size: double the income and every segment doubles too, but the proportions (and the underlying logic) stay identical. The same visual logic applies to unit price comparisons — picture each package&apos;s price as a bar scaled to its quantity, and the &quot;true&quot; comparison is the slope (price per unit), not the bar&apos;s raw height (total price).
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Budgeting off gross (pre-tax) income instead of net take-home pay.", fix: "Use the amount that actually lands in your bank account after taxes and deductions — budgeting off gross income overstates what's really available and leads to overspending." },
      { mistake: "Building a monthly budget around biweekly pay without accounting for the two 'three-paycheck' months each year.", fix: "Multiply the per-paycheck amount by 26 and divide by 12 for a true monthly average, or treat the extra paychecks as a separate annual bonus for savings." },
      { mistake: "Comparing sticker price instead of unit price when choosing between package sizes.", fix: "Divide price by quantity for each option before deciding — many stores print unit price on the shelf tag specifically so shoppers can skip doing the division by hand." },
      ]}
      />
      <MisconceptionCallout
      myth="The bigger package size is always the better value per unit."
      reality={<p>Not necessarily. Retailers price different package sizes somewhat independently — sometimes a &quot;family size&quot; box genuinely costs less per ounce, and sometimes, as in the cereal example above, it ties or even loses to a smaller size. The only reliable check is computing unit price (price ÷ quantity) directly for each option, not assuming a direction based on size alone.</p>}
      />

      <QuickCheck
      question="Why can't you assume the largest package size is automatically the cheapest per unit without checking?"
      options={[
      { text: "Because retailers price package sizes independently, so unit price has to be calculated for each option rather than inferred from size", correct: true, explanation: "Correct. There's no guarantee larger packages carry a proportional discount — unit price (price divided by quantity) has to be computed directly to know for sure." },
      { text: "Because larger packages are actually almost always more expensive per unit", correct: false, explanation: "This overcorrects in the opposite direction — there's no reliable rule either way. It genuinely depends on the specific pricing, which is why you calculate rather than assume." },
      { text: "Because unit price only applies to liquid products, not solids like cereal", correct: false, explanation: "Unit price applies to any quantity-based product — solids, liquids, counts of items — the math (price divided by quantity) doesn't change based on what's being measured." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="50/30/20-style budget category calculator"
      fields={[
      { key: "monthlyIncome", label: "Monthly take-home income ($)", defaultValue: 4200 },
      { key: "allocationPercent", label: "Category allocation", defaultValue: 50, suffix: "%" },
      ]}
      resultLabel="Amount allocated to this category ($)"
      formula="budgetAllocationAmount"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Run your own take-home pay through the 50/30/20 split above and compare it to what you're actually spending in each category.",
      "If you're paid biweekly, calculate your true monthly average (paycheck × 26 ÷ 12) instead of assuming exactly two paychecks every month.",
      "Next time you're comparing two package sizes at the store, divide price by quantity for both before deciding — don't trust size alone.",
      "Track one small recurring purchase (coffee, a subscription) for a month and multiply it out to a full year to see its real annual cost.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the 50/30/20 budgeting rule?", answer: "A guideline that allocates take-home income as 50% to needs (rent, groceries, utilities), 30% to wants (dining out, entertainment), and 20% to savings and debt paydown. It's a starting framework, not a fixed law — actual proportions vary by income and cost of living." },
      { question: "How do you calculate unit price?", answer: "Divide the total price by the quantity: unit price = total price ÷ quantity. A $4.80 bottle holding 16 ounces has a unit price of $4.80 ÷ 16 = $0.30 per ounce." },
      { question: "Should I budget with gross pay or net pay?", answer: "Net (take-home) pay — the amount actually deposited after taxes and deductions. Budgeting off gross pay overstates available money and leads to consistently overspending." },
      { question: "Is the bigger package always cheaper per unit at the store?", answer: "No. Larger package sizes are often, but not always, cheaper per unit — retailers price sizes independently. Checking the unit price (price ÷ quantity) directly is the only reliable way to know." },
      { question: "How much does a small daily expense really cost per year?", answer: "Multiply the daily amount by 365. A $5 daily coffee habit is $5 × 365 = $1,825 a year — a useful reality check before dismissing a small recurring cost as insignificant." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
