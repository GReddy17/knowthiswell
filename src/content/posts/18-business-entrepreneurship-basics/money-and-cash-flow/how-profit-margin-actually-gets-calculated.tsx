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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Profit Margin Actually Gets Calculated",
  category: "business-entrepreneurship-basics",
  order: 9,
  subtopic: "money-and-cash-flow",
  tags: ["profit margin", "gross margin", "net profit margin", "markup vs margin", "small business finance"],
  date: "2026-10-03",
  updated: "2026-10-03",
  seoScore: 80, seoScoredOn: "2026-10-08",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-03",
  excerpt: "Profit margin is profit divided by revenue, but which profit? Gross, operating and net margin subtract different costs, and confusing margin with markup quietly underprices products.",
  summary: "Profit margin is profit expressed as a percentage of revenue, and there are three standard versions depending on which costs are subtracted. Gross margin subtracts only the direct cost of the goods or services sold (COGS): a bakery with $20,000 of monthly sales and $7,000 of ingredients and packaging has a 65% gross margin. Operating margin also subtracts running costs such as rent, wages and software, and net margin subtracts everything, including interest and taxes, so the same bakery might keep 7 cents of every dollar. Margin is not the same as markup: markup divides profit by cost, margin divides it by price, so a 50% markup is only a 33% margin. Small price cuts hit margins hard: at a 40% gross margin, a 10% discount needs about a third more sales just to earn the same gross profit. Margins vary widely by industry, as NYU Stern's Aswath Damodaran's annual dataset shows, so comparisons are only meaningful within an industry. The IRS's Schedule C and the SBA's financial-management guidance use the same building blocks: revenue, cost of goods sold, expenses and net profit.",
  sources: [
    { label: "U.S. Small Business Administration — Manage your finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { label: "IRS Publication 334 — Tax Guide for Small Business", url: "https://www.irs.gov/publications/p334" },
    { label: "IRS — Schedule C (Form 1040), Profit or Loss From Business", url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040" },
    { label: "Damodaran, A. — Operating and Net Margins by Industry (NYU Stern, updated annually)", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/margin.html" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-to-actually-price-a-product-or-service",
    "business-entrepreneurship-basics/what-cash-flow-actually-means-for-a-small-business",
    "business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "personal-finance-basics/self-employment-and-freelance-tax-basics",
    "business-entrepreneurship-basics/what-makes-a-side-hustle-different-from-a-real-business",
  ],
  glossary: [
    { term: "Revenue", definition: "The total money a business brings in from sales before any costs are subtracted. Also called sales or the top line." },
    { term: "Cost of goods sold (COGS)", definition: "The direct cost of producing what was sold, such as materials, inventory purchased for resale, and directly involved labor." },
    { term: "Gross margin", definition: "(Revenue minus COGS) divided by revenue. Shows how much of each sale is left to cover running costs and profit." },
    { term: "Operating margin", definition: "Operating income (gross profit minus operating expenses such as rent, wages and marketing) divided by revenue." },
    { term: "Net profit margin", definition: "Net income after every cost, including interest and taxes, divided by revenue. The bottom line as a percentage." },
    { term: "Markup", definition: "Profit divided by cost. A product costing $10 and selling for $15 has a 50% markup but a 33% margin." },
    { term: "Contribution margin", definition: "Price minus the variable cost of one unit; what each extra sale contributes toward fixed costs and profit." },
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

export const quiz: QuizBankItem[] = [
  {"question": "What is the basic formula for any profit margin?", "difficulty": "easy", "options": [{"text": "Profit divided by revenue, shown as a percentage", "correct": true, "explanation": "Gross, operating and net margin all use revenue as the denominator; they differ in which profit."}, {"text": "Profit divided by cost", "correct": false, "explanation": "That's markup, a different measure."}, {"text": "Revenue minus costs, in dollars", "correct": false, "explanation": "That's profit in dollars. Margin is the percentage."}]},
  {"question": "A shop has $50,000 in sales and $30,000 in cost of goods sold. What is its gross margin?", "difficulty": "easy", "options": [{"text": "40%", "correct": true, "explanation": "($50,000 − $30,000) ÷ $50,000 = 0.40."}, {"text": "60%", "correct": false, "explanation": "That's COGS as a share of revenue."}, {"text": "67%", "correct": false, "explanation": "That's $20,000 ÷ $30,000, the markup."}]},
  {"question": "An item costs $10 and sells for $15. What are its markup and margin?", "difficulty": "medium", "options": [{"text": "50% markup, about 33% margin", "correct": true, "explanation": "$5 ÷ $10 = 50% markup; $5 ÷ $15 ≈ 33% margin."}, {"text": "50% markup and 50% margin", "correct": false, "explanation": "They'd only match if cost equalled price, which means zero profit."}, {"text": "33% markup and 50% margin", "correct": false, "explanation": "The two are swapped."}]},
  {"question": "An item costs $12. What price gives a 40% gross margin?", "difficulty": "hard", "options": [{"text": "$20", "correct": true, "explanation": "Price = cost ÷ (1 − margin) = $12 ÷ 0.6 = $20. Check: $8 ÷ $20 = 40%."}, {"text": "$16.80", "correct": false, "explanation": "That's a 40% markup, which is only about a 29% margin."}, {"text": "$17", "correct": false, "explanation": "That gives about a 29% margin."}]},
  {"question": "Which costs does operating margin subtract that gross margin doesn't?", "difficulty": "medium", "options": [{"text": "Running costs such as rent, salaries, marketing and software", "correct": true, "explanation": "Gross margin subtracts only the direct cost of what was sold."}, {"text": "Income taxes and loan interest", "correct": false, "explanation": "Those are subtracted for net margin, below operating income."}, {"text": "Nothing; they're the same", "correct": false, "explanation": "They differ by operating expenses."}]},
  {"question": "A product has a 40% gross margin. If you discount it 10%, how much more must you sell to earn the same gross profit?", "difficulty": "hard", "options": [{"text": "About 33% more units", "correct": true, "explanation": "Gross profit per $100 sale falls from $40 to $30, so you need 40 ÷ 30 ≈ 1.33 times the units."}, {"text": "10% more units", "correct": false, "explanation": "The discount comes entirely out of the profit, not the cost, so the effect is magnified."}, {"text": "No more; discounts don't affect margin", "correct": false, "explanation": "The cost stays the same while the price drops, so margin shrinks."}]},
  {"question": "Two businesses: a grocery store with a 2% net margin and a software firm with a 20% net margin. What's the right conclusion?", "difficulty": "medium", "options": [{"text": "You can't judge which is better run without comparing each to its own industry", "correct": true, "explanation": "Industry structure drives margins; Damodaran's data shows wide gaps between sectors."}, {"text": "The grocery store is badly managed", "correct": false, "explanation": "Thin margins are typical for grocery, which relies on high volume."}, {"text": "The software firm makes more money in dollars", "correct": false, "explanation": "Margin is a percentage; a low-margin firm with huge sales can earn more in dollars."}]},
  {"question": "Where does a US sole proprietor report revenue, cost of goods sold and expenses to arrive at net profit for tax purposes?", "difficulty": "medium", "options": [{"text": "Schedule C of Form 1040", "correct": true, "explanation": "Its lines follow the same path: gross receipts, COGS, gross profit, expenses, net profit."}, {"text": "Form W-2", "correct": false, "explanation": "A W-2 reports wages paid to employees."}, {"text": "Form 1099-INT", "correct": false, "explanation": "That reports interest income received."}]},
  {"question": "A business shows a healthy 15% net margin but keeps running out of cash. How can that be?", "difficulty": "hard", "options": [{"text": "Profit is measured when sales are earned; cash can be tied up in unpaid invoices or inventory", "correct": true, "explanation": "Margin measures profitability, not timing. Cash flow is a separate check."}, {"text": "A 15% margin means the business is losing money", "correct": false, "explanation": "A positive net margin means it is profitable on paper."}, {"text": "Margins can't be positive if cash is low", "correct": false, "explanation": "They can, and often are, in growing businesses."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Every profit margin is profit divided by revenue. The three standard ones differ in which costs come off first: gross (direct costs only), operating (plus running costs), net (everything, including interest and taxes).",
          "Margin is not markup. Markup divides profit by cost, margin divides it by price, so a 50% markup is only a 33% margin. Mixing them up is a classic way to underprice.",
          "Margins compare well only within an industry, and a 10% discount at a 40% margin needs about a third more sales just to stand still.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Take one dollar a customer hands you and follow where it goes. First, part of it pays for the thing you sold: the flour in the bread, the shirt you bought wholesale. What&apos;s left is your gross margin. Then part of what&apos;s left pays the rent, the staff, the card reader and the website. What survives that is your operating margin. Finally, interest on any loan and taxes take their share, and the few cents still in your hand are your net margin. A bakery might keep 65 cents after ingredients, 10 cents after running the shop, and 7 cents at the very end. All three numbers are &quot;profit margin.&quot; When someone quotes one, the first question is always: which one?</div>}
        detailed={<div className="prose-p">The income statement runs top to bottom, and each margin is a line on it divided by revenue. <strong>Gross margin</strong> = (revenue − cost of goods sold) ÷ revenue. COGS covers costs that rise with each unit sold: materials, inventory bought for resale, and, for many businesses, direct production labor. The IRS&apos;s Schedule C follows the same path (gross receipts, cost of goods sold, gross profit, then expenses, then net profit). <strong>Operating margin</strong> = (gross profit − operating expenses) ÷ revenue, where operating expenses are the costs of running the business regardless of each sale: rent, salaries not tied to production, marketing, software, depreciation. <strong>Net margin</strong> = net income ÷ revenue, after interest and income taxes. The edge case is <strong>markup</strong>, which divides profit by cost instead of price. The conversions are margin = markup ÷ (1 + markup) and price = cost ÷ (1 − target margin). A related tool is <strong>contribution margin</strong>, price minus variable cost per unit, which tells you how many sales cover fixed costs (break-even units = fixed costs ÷ contribution per unit). Industry structure dominates: NYU Stern&apos;s Damodaran dataset shows net margins in the low single digits for grocery and much higher for software, so a margin is only meaningful against peers. And margin is not cash: profit is recognized when earned, while cash arrives when customers actually pay.</div>}
      />
      <FootnoteAside>Where a cost sits matters. A café that counts barista wages in cost of goods sold will show a lower gross margin than one that books them as operating expenses, with identical net profit. Compare gross margins only when you know both businesses classify costs the same way.</FootnoteAside>

      <p>Margins feed straight into <TermLink href="/business-entrepreneurship-basics/how-to-actually-price-a-product-or-service">pricing</TermLink>, and a profitable margin can still sit alongside an empty bank account, which is why <TermLink href="/business-entrepreneurship-basics/what-cash-flow-actually-means-for-a-small-business">cash flow</TermLink> is tracked separately.</p>

      <QuickCheck
        question="A freelancer quotes a 30% profit margin. Which number did they most likely mean?"
        options={[
          { text: "You can't tell until they say gross, operating or net", correct: true, explanation: "Correct. The same business can have a 65% gross margin and a 7% net margin." },
          { text: "Always net margin", correct: false, explanation: "People often quote gross margin because it's the bigger number." },
          { text: "Always markup", correct: false, explanation: "Markup is a different calculation, though it's often mislabeled as margin." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The bakery and its numbers are hypothetical, chosen to make the arithmetic easy to follow.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One month at a bakery, three margins (baseline case)</h3>
      <div className="prose-p">Revenue: $20,000. Ingredients and packaging (COGS): $7,000. Gross profit: $13,000, so gross margin = 13,000 ÷ 20,000 = <strong>65%</strong>. Operating expenses: rent $4,000, wages $6,000, utilities, card fees and software $1,000, total $11,000. Operating income: $2,000, so operating margin = <strong>10%</strong>. Loan interest: $200. Estimated income tax: $400. Net income: $1,400, so net margin = <strong>7%</strong>. The owner who says &quot;bread is a 65% margin business&quot; is right about the ingredients and wrong about what reaches the bank: 7 cents per dollar.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The markup trap (edge case)</h3>
      <div className="prose-p">A reseller buys a lamp for $30 and wants a &quot;40% margin.&quot; They add 40% to cost: $30 × 1.4 = $42. Profit is $12, and $12 ÷ $42 is about <strong>28.6%</strong>, not 40%. To hit a true 40% margin, divide instead: $30 ÷ (1 − 0.40) = <strong>$50</strong>, giving $20 profit on a $50 price. Across 1,000 lamps a year, the gap between the two prices is $8,000 of gross profit. The confusion is common because markup and margin are both &quot;percent profit&quot;; they just measure against different bases.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What a 10% sale really costs (applied)</h3>
      <div className="prose-p">A product sells for $100 and costs $60: gross profit $40, margin 40%. Run a 10% discount and the price is $90, but the cost is still $60, so gross profit falls to $30 and margin to 33.3%. The discount took 10% off the price but 25% off the profit per sale. To earn the same $4,000 of gross profit that 100 full-price sales produced, you now need about 134 sales, roughly a third more. At a 20% gross margin the same 10% discount halves profit per sale and requires twice the volume. This is the arithmetic to run before any promotion, and it&apos;s why <TermLink href="/business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business">working capital</TermLink> gets tight when discounts don&apos;t bring the extra customers.</div>

      <QuickCheck
        question="A product costs $40. Which price gives exactly a 50% gross margin?"
        options={[
          { text: "$80", correct: true, explanation: "Correct. $40 profit ÷ $80 price = 50%. Price = cost ÷ (1 − 0.5)." },
          { text: "$60", correct: false, explanation: "That's a 50% markup, which is only a 33% margin." },
          { text: "$70", correct: false, explanation: "$30 ÷ $70 is about a 43% margin." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where each dollar of revenue goes: gross, operating and net margin"
        type="flow"
        svgSrc="/diagrams/business-entrepreneurship-basics-how-profit-margin-actually-gets-calculated-flow.svg"
        altText="A waterfall for a hypothetical bakery with $20,000 of monthly revenue. Subtracting $7,000 of ingredients leaves $13,000 gross profit, a 65% gross margin. Subtracting $11,000 of rent, wages and other running costs leaves $2,000 operating income, a 10% operating margin. Subtracting $600 of interest and tax leaves $1,400 net income, a 7% net margin. A side note shows markup versus margin: cost $10, price $15 is a 50% markup but a 33% margin."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Adding a percentage to cost and calling it margin.", fix: "That's markup. For a target margin, price = cost ÷ (1 − margin). A 40% margin on a $30 item is $50, not $42." },
          { mistake: "Quoting gross margin as if it were take-home profit.", fix: "Always say which margin. Net margin is what's left after rent, wages, interest and taxes." },
          { mistake: "Comparing your margin to a business in a different industry.", fix: "Use industry benchmarks, such as Damodaran's annual dataset, and compare against peers with similar costs." },
          { mistake: "Running discounts without checking the volume needed.", fix: "Compute gross profit per sale after the discount and how many more sales you need to match the old total." },
        ]}
      />
      <MisconceptionCallout
        myth="A high profit margin means the business is doing well."
        reality={<p>Margin is a ratio, not a total, and not cash. A 40% margin on very few sales may not cover the owner&apos;s living costs, while a 3% margin on large volume can be a strong business. A high margin can also coexist with running out of money if customers pay slowly or cash is tied up in stock. Read margin alongside total profit and cash flow. Knowing your margins at all is one of the habits that separates <TermLink href="/business-entrepreneurship-basics/what-makes-a-side-hustle-different-from-a-real-business">a side hustle from a real business</TermLink>.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Pull last month's revenue, cost of goods sold and operating expenses from your books or bank records.",
          "Calculate all three margins, and label each one clearly.",
          "For your top three products, compute margin per item using price = cost ÷ (1 − target margin).",
          "Before your next promotion, work out how many extra sales the discount needs to break even.",
          "Look up your industry's typical margins and note where you sit; an accountant can help adjust for how costs are classified.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you calculate profit margin?", answer: "Divide profit by revenue and multiply by 100. Use gross profit for gross margin, operating income for operating margin, or net income for net margin." },
          { question: "What is the difference between markup and margin?", answer: "Markup is profit divided by cost; margin is profit divided by selling price. The same $5 profit on a $10 cost and $15 price is a 50% markup but a 33% margin." },
          { question: "What is a good profit margin for a small business?", answer: "It depends heavily on industry. Grocery and other high-volume retail often run net margins in the low single digits, while software and professional services can be much higher. Compare against your own industry." },
          { question: "How do I calculate price from a desired margin?", answer: "Price = cost ÷ (1 − target margin as a decimal). For a $12 cost and a 40% margin: $12 ÷ 0.6 = $20." },
          { question: "Is gross margin the same as gross profit?", answer: "No. Gross profit is a dollar amount (revenue minus cost of goods sold); gross margin is that amount as a percentage of revenue." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
