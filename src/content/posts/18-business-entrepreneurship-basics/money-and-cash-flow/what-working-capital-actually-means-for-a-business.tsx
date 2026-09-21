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
  title: "What Working Capital Actually Means for a Business",
  category: "business-entrepreneurship-basics",
  order: 2,
  subtopic: "money-and-cash-flow",
  tags: ["working capital", "small business finance", "cash flow", "current assets and liabilities"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "A profitable business can still run out of cash and fail — working capital is the number that actually predicts whether a business can pay its bills in the next twelve months.",
  summary: "Working capital is the difference between a business's current assets (cash, inventory, and receivables expected to convert to cash within a year) and its current liabilities (bills and short-term debts due within that same year), and it measures a business's ability to fund its day-to-day operations — a business can be profitable on paper and still fail from a working capital shortfall if too much value is tied up in inventory or unpaid invoices.",
  sources: [
    { label: "SBA — Manage Your Finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { label: "SCORE — Understanding Working Capital", url: "https://www.score.org/resource/blog-post/what-working-capital-and-why-it-matters" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
  ],
  glossary: [
    { term: "Current assets", definition: "Cash and anything a business expects to convert to cash within twelve months, such as inventory and accounts receivable." },
    { term: "Current liabilities", definition: "Bills, short-term loans, and other obligations a business must pay within the next twelve months." },
    { term: "Cash flow", definition: "The actual movement of cash in and out of a business over a period, distinct from profit, which can include revenue not yet collected." },
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
          "Working capital = current assets minus current liabilities — it measures whether a business has enough short-term resources to cover its short-term bills.",
          "A business can be profitable on paper and still run into a real cash crunch if too much value is tied up in unsold inventory or unpaid customer invoices.",
          "Negative working capital is a real warning sign, but it isn't automatically fatal — some business models (like subscription businesses collecting cash upfront) run that way by design.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Working capital is simply: what a business owns that it can turn into cash soon, minus what it owes that&apos;s due soon. If that number is positive, the business can likely cover its near-term bills. If it&apos;s negative, the business might struggle to pay what it owes even if it&apos;s technically profitable — because profit on paper isn&apos;t the same as cash in the bank.</div>}
        detailed={<div className="prose-p">Per SBA financial-management guidance, working capital is calculated as <TermLink href="/business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business">current assets</TermLink> minus <TermLink href="/business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business">current liabilities</TermLink>. Current assets include cash on hand, inventory expected to sell within a year, and accounts receivable (money customers owe but haven&apos;t paid yet). Current liabilities include accounts payable, short-term loan payments due, and accrued expenses. This is a distinctly different number from profit: a business can report a healthy profit on its income statement while having most of that value locked up in unsold inventory or unpaid invoices — meaning it doesn&apos;t actually have the cash on hand to make payroll or pay a supplier, a gap between profit and <TermLink href="/business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business">cash flow</TermLink> that working capital is specifically designed to surface.</div>}
      />
      <FootnoteAside>The &quot;current ratio&quot; (current assets ÷ current liabilities) is a related metric that expresses the same underlying relationship as a ratio instead of a dollar amount — a current ratio above 1.0 roughly corresponds to positive working capital.</FootnoteAside>

      <p>This is why lenders and investors look at working capital specifically, separately from profit — it&apos;s a more direct signal of near-term survival than the profit figure alone.</p>

      <QuickCheck
        question="A business reports a $50,000 annual profit, but most of its revenue is sitting in unpaid customer invoices it hasn't collected yet. What does working capital specifically help reveal about this business?"
        options={[
          { text: "Whether the business actually has enough accessible cash and near-cash assets to cover its own near-term bills, regardless of the profit figure", correct: true, explanation: "Correct. Working capital measures near-term liquidity specifically — a business can be profitable on paper while genuinely short on the actual cash needed to pay its own bills, and working capital is designed to surface exactly that gap." },
          { text: "The exact same thing profit already tells you — they're interchangeable measures", correct: false, explanation: "They measure different things — profit is revenue minus expenses over a period; working capital is a snapshot of near-term liquid resources versus near-term obligations. A business can be strong on one and weak on the other." },
          { text: "Nothing useful beyond what the profit number already shows", correct: false, explanation: "Working capital reveals something profit specifically can't: whether the business's assets are actually liquid and available soon enough to meet its near-term obligations." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A healthy small retailer (baseline case)</h3>
      <div className="prose-p">A retail shop has $80,000 in current assets (cash, saleable inventory, and receivables) and $50,000 in current liabilities due within the year, giving it $30,000 in positive working capital — a reasonable cushion to cover upcoming bills even if sales slow temporarily.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A subscription business with negative working capital (edge case / variation)</h3>
      <div className="prose-p">A software subscription company collects a full year of payment upfront from customers, recording it as a liability (unearned revenue) until it&apos;s delivered over time, while spending relatively little on physical inventory. This can produce technically negative working capital by the standard formula while the business is financially healthy — a case where the formula&apos;s usual warning signal doesn&apos;t apply the same way, because of how the business model itself generates cash.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A seasonal business managing a working capital gap (real-world / applied case)</h3>
      <div className="prose-p">Per SBA guidance on managing seasonal cash flow, a landscaping business that earns most of its revenue in summer but has year-round expenses often needs a working capital line of credit specifically to bridge the gap during its slow season — a real, common, and manageable use of short-term borrowing to smooth over a predictable, not distressed, working capital shortfall.</div>

      <QuickCheck
        question="Is negative working capital always a sign a business is in financial trouble?"
        options={[
          { text: "No — some business models (like subscription businesses collecting payment upfront) can run with structurally negative working capital by design, without being in distress", correct: true, explanation: "Correct. The formula is a useful general signal, but its meaning depends on the business model — a subscription business's unearned-revenue liability doesn't carry the same risk as an inventory-heavy business unable to pay its bills." },
          { text: "Yes — negative working capital always means a business is at serious risk of failing", correct: false, explanation: "This overstates it — certain business models can run persistently with negative working capital under the standard formula without being financially distressed, because of how their revenue is structured." },
          { text: "Working capital being negative or positive has no real financial meaning either way", correct: false, explanation: "It does have real meaning as a general liquidity signal — it just needs to be interpreted alongside the specific business model, not read as an absolute rule in every case." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Working capital = current assets − current liabilities"
        type="detail"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-working-capital-actually-means-for-a-business-formula.svg"
        altText="A formula diagram: current assets (cash, inventory, receivables) minus current liabilities (bills due within a year) equals working capital, the cash available to run day-to-day operations, with an example of $80,000 minus $50,000 equaling $30,000."
      />

      <EntryCalculator
        title="Working capital calculator"
        description="Estimate working capital from current assets and current liabilities."
        fields={[
          { key: 'totalAssets', label: 'Current assets ($)', defaultValue: 80000, step: 1000, min: 0 },
          { key: 'totalLiabilities', label: 'Current liabilities ($)', defaultValue: 50000, step: 1000, min: 0 },
        ]}
        resultLabel="Working capital"
        formula="netWorth"
        formatResult="currency"
        disclaimer="A simplified illustration, not a substitute for a full balance sheet or professional financial analysis."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a profitable business is automatically financially safe.", fix: "Check working capital and cash flow specifically — profit and available cash are genuinely different numbers, and the gap between them is where businesses get into real trouble." },
          { mistake: "Treating all inventory as equally 'liquid' current assets.", fix: "Slow-moving or obsolete inventory may take far longer than a year to convert to cash, even though it's technically classified as a current asset." },
          { mistake: "Panicking over negative working capital without checking whether it fits the business model.", fix: "Compare against businesses with a similar revenue structure before concluding negative working capital signals distress." },
        ]}
      />
      <MisconceptionCallout
        myth="A business with strong profit margins doesn't need to worry about working capital."
        reality={<p>Profit margin measures how much of each sales dollar becomes profit — it says nothing about <em>when</em> that value actually becomes spendable cash. A business can have excellent margins and still run out of usable cash if too much of its value is tied up in inventory sitting on shelves or invoices customers haven&apos;t paid yet, which is exactly the gap working capital is built to expose.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Calculate your own business's working capital (current assets minus current liabilities) and revisit it monthly, not just at tax time.",
          "If working capital is thin or negative, check whether it fits your specific business model before assuming a crisis.",
          "Watch how quickly receivables actually get collected — a receivable that never converts to real cash isn't truly liquid, whatever the balance sheet says.",
          "For a real cash flow shortfall, talk to an accountant or SBA resource partner about working capital financing options before it becomes urgent.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is working capital the same thing as cash on hand?", answer: "No. Working capital includes cash but also inventory and receivables expected to convert to cash within a year — it's a broader liquidity measure, not literally the cash balance in the bank right now." },
          { question: "What's considered a 'good' working capital ratio?", answer: "A current ratio (current assets divided by current liabilities) between roughly 1.5 and 3 is commonly cited as healthy, though the right number varies significantly by industry — a ratio that's too high can also mean cash is being used inefficiently." },
          { question: "Can a business borrow money specifically to fix a working capital shortfall?", answer: "Yes — a working capital line of credit is a common financing tool specifically designed to bridge short-term cash gaps, distinct from a long-term loan used to fund equipment or expansion." },
          { question: "Does working capital matter for a business with no inventory, like a service business?", answer: "Yes, though it looks different — a service business's working capital concerns center more on accounts receivable (unpaid client invoices) and payroll obligations than on inventory." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
