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
  title: "What Cash Flow Actually Means for a Small Business",
  category: "business-entrepreneurship-basics",
  order: 6,
  subtopic: "money-and-cash-flow",
  tags: ["cash flow", "small business finance", "profit vs cash flow", "cash flow forecast", "accounts receivable", "statement of cash flows"],
  date: "2026-09-27",
  updated: "2026-09-27",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-27",
  excerpt: "Cash flow is the money actually moving in and out of your bank account, not the profit on paper. A profitable business can still run out of cash when customers pay late and bills come due first.",
  summary: "Cash flow is the movement of money into and out of a business over a period, and it differs from profit mainly in timing. Under accrual accounting, a sale counts as revenue when it's earned, even if the customer pays 30 or 60 days later; cash flow only counts it when the money arrives. That's why a profitable business can still be unable to pay rent or payroll. A statement of cash flows splits movement into three parts: operating activities (day-to-day sales and expenses), investing activities (buying or selling equipment and other long-term assets) and financing activities (loans, repayments and owner contributions or draws). Growth often makes the gap worse, because materials and wages are paid before customers pay. The standard defenses are a rolling 13-week cash forecast, invoicing promptly with clear payment terms, a cash reserve, and arranging a line of credit before it's needed. The U.S. Small Business Administration lists cash flow management as a core part of running a business's finances.",
  sources: [
    { label: "U.S. Small Business Administration — Manage your finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { label: "IRS Publication 538 — Accounting Periods and Methods (cash vs accrual)", url: "https://www.irs.gov/publications/p538" },
    { label: "OpenStax — Principles of Accounting, Volume 1: Financial Accounting (statement of cash flows)", url: "https://openstax.org/details/books/principles-financial-accounting" },
    { label: "U.S. Small Business Administration — Loans (including lines of credit through SBA programs)", url: "https://www.sba.gov/funding-programs/loans" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated",
    "government-schemes-benefits/how-small-business-government-grants-actually-get-awarded",
    "business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business",
    "business-entrepreneurship-basics/how-small-business-loans-actually-work",
    "business-entrepreneurship-basics/how-to-actually-price-a-product-or-service",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
    "business-entrepreneurship-basics/how-to-actually-find-your-first-customers",
    "business-entrepreneurship-basics/what-a-business-license-actually-requires",
    "business-entrepreneurship-basics/what-makes-a-side-hustle-different-from-a-real-business",
  ],
  glossary: [
    { term: "Cash flow", definition: "The money moving into and out of a business over a period, counted when it actually changes hands." },
    { term: "Accrual accounting", definition: "Recording revenue when it's earned and expenses when they're incurred, regardless of when cash moves." },
    { term: "Accounts receivable", definition: "Money customers owe you for work already delivered or invoiced but not yet paid." },
    { term: "Operating cash flow", definition: "Cash generated or used by the business's everyday activities, before equipment purchases and financing." },
    { term: "Cash runway", definition: "How long a business can keep paying its bills from the cash it has, at its current rate of spending." },
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
  {"question": "What is the main difference between profit and cash flow?", "difficulty": "easy", "options": [{"text": "Timing: profit counts sales when earned, cash flow counts money when it actually moves", "correct": true, "explanation": "An invoice can be profit today and cash 60 days from now."}, {"text": "Profit includes taxes and cash flow doesn't", "correct": false, "explanation": "Both can include taxes; that's not the core difference."}, {"text": "They're the same number reported twice", "correct": false, "explanation": "They often differ a lot, especially in growing businesses."}]},
  {"question": "Which of these belongs in 'investing activities' on a statement of cash flows?", "difficulty": "medium", "options": [{"text": "Buying a $30,000 delivery van", "correct": true, "explanation": "Buying or selling long-term assets is an investing activity."}, {"text": "Paying this month's rent", "correct": false, "explanation": "Rent is an operating expense."}, {"text": "Taking out a bank loan", "correct": false, "explanation": "Loans are financing activities."}]},
  {"question": "Why can a fast-growing business run out of cash?", "difficulty": "medium", "options": [{"text": "It pays for materials and wages before customers pay for the bigger orders", "correct": true, "explanation": "More sales on credit means more cash tied up in receivables."}, {"text": "Growth always lowers prices", "correct": false, "explanation": "Growth doesn't automatically change prices."}, {"text": "Profitable businesses aren't allowed to borrow", "correct": false, "explanation": "They can borrow; the issue is timing."}]},
  {"question": "What is a 13-week cash flow forecast?", "difficulty": "medium", "options": [{"text": "A week-by-week projection of cash in and out for the next quarter, updated regularly", "correct": true, "explanation": "It shows shortfalls early enough to act."}, {"text": "A tax form due every 13 weeks", "correct": false, "explanation": "It's a management tool, not a tax filing."}, {"text": "A summary of last quarter's profit", "correct": false, "explanation": "It looks forward, and it's about cash, not profit."}]},
  {"question": "A business shows $50,000 profit for the year but has $2,000 in the bank. What's the most likely explanation?", "difficulty": "hard", "options": [{"text": "Much of the profit is still sitting in unpaid invoices or was spent on equipment or loan repayments", "correct": true, "explanation": "Receivables, equipment purchases and debt principal all use cash without reducing profit the same way."}, {"text": "The accountant made an error, since profit always equals cash", "correct": false, "explanation": "Profit and cash routinely diverge."}, {"text": "The business must be losing money", "correct": false, "explanation": "It can be profitable and still cash-poor."}]},
  {"question": "Which step most directly speeds up cash coming in?", "difficulty": "easy", "options": [{"text": "Invoicing the day work is done, with clear due dates and easy payment options", "correct": true, "explanation": "Every day an invoice isn't sent is a day added to when you get paid."}, {"text": "Waiting until month-end to send all invoices together", "correct": false, "explanation": "Batching delays payment by weeks."}, {"text": "Offering longer payment terms to every customer", "correct": false, "explanation": "Longer terms slow cash down."}]},
  {"question": "When is the best time to arrange a business line of credit?", "difficulty": "hard", "options": [{"text": "While the business is healthy, before it's needed", "correct": true, "explanation": "Lenders look at your finances; they're most willing when you don't urgently need the money."}, {"text": "The week payroll bounces", "correct": false, "explanation": "By then, your numbers look risky and approval takes time."}, {"text": "Never, because credit always hurts small businesses", "correct": false, "explanation": "Used carefully, a credit line smooths timing gaps."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Cash flow is the money actually moving through your bank account. Profit is what the books say you earned. They often differ.",
          "A profitable business can run out of cash if customers pay late and bills, payroll and suppliers have to be paid first.",
          "A simple weekly cash forecast, fast invoicing and a reserve prevent most cash crunches.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">You finish a $10,000 job on June 1 and send the invoice. Your books say you earned $10,000 in June. But the customer pays on July 1, and your rent, your helper&apos;s wages and your supplier are all due in June. For that month you&apos;re profitable and broke at the same time. That gap is what cash flow is about. Profit tells you whether the business is worth running. Cash flow tells you whether you can pay the bills this week. Small businesses rarely fail because a single job lost money; they get into trouble when the cash runs out before the money they&apos;re owed arrives. Profit itself comes in layers; <TermLink href="/business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated">how profit margin actually gets calculated</TermLink> separates gross, operating and net.</div>}
        detailed={<div className="prose-p">Most businesses beyond the smallest use <strong>accrual accounting</strong> (IRS Publication 538 covers when it&apos;s required), which records revenue when earned and expenses when incurred. That makes profit a good measure of performance but a poor measure of liquidity. The <strong>statement of cash flows</strong> reconciles the two in three sections. <strong>Operating activities</strong>: cash from customers minus cash paid for supplies, wages, rent and taxes. Rising receivables or inventory reduce operating cash even when profit rises. <strong>Investing activities</strong>: buying or selling equipment, vehicles or property. A $30,000 van is one big cash outflow, but on the income statement it&apos;s spread over years as depreciation. <strong>Financing activities</strong>: loan proceeds, loan principal repayments, and owner contributions or draws. Principal repayments use cash but aren&apos;t an expense, another reason cash and profit diverge. Cash flow is closely tied to <TermLink href="/business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business">working capital</TermLink>: the cash tied up in receivables and inventory minus what you owe suppliers short-term. The useful management metric is <strong>runway</strong>: cash on hand divided by average weekly net outflow in a slow period. Don&apos;t count on a grant to close a gap: <TermLink href="/government-schemes-benefits/how-small-business-government-grants-actually-get-awarded">small business government grants</TermLink> are awarded through scored, competitive reviews for specific purposes, not as general bridge funding.</div>}
      />
      <FootnoteAside>This is general business education, not accounting or tax advice. Which accounting method your business must use depends on its size and structure; a CPA or enrolled agent can confirm what applies to you.</FootnoteAside>

      <QuickCheck
        question="You invoice $10,000 on June 1, and it's paid July 1. When does it show up in June's cash flow?"
        options={[
          { text: "It doesn't; June's cash flow only counts money that actually arrived in June", correct: true, explanation: "Correct. It's June revenue on an accrual basis, but July cash." },
          { text: "On June 1, when the invoice is sent", correct: false, explanation: "That's when accrual accounting records revenue, not when cash moves." },
          { text: "It never shows up, because invoices aren't cash", correct: false, explanation: "It shows up in July, when it's paid." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A month of cash in and out (baseline case)</h3>
      <div className="prose-p">A two-person cleaning company starts March with $6,000 in the bank. Customers pay $18,000 during March. Cash out: $9,000 in wages, $1,500 van lease, $1,200 supplies, $800 insurance and $600 software, totaling $13,100. Net operating cash flow is +$4,900, so it ends March with $10,900. If its average slow-month outflow is about $3,300 a week, that balance is roughly 3 weeks of runway. That single number is a better early warning than monthly profit.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The big contract that nearly sinks the business (edge case)</h3>
      <div className="prose-p">A landscaping company with $15,000 in the bank wins a $60,000 commercial job with a 20% margin. It has to buy $25,000 of materials up front and pay $20,000 in crew wages over six weeks. The client pays on net-60 terms after completion. On paper, the job adds $12,000 profit. In the bank, the company needs to fund $45,000 of costs for about three months with only $15,000 of cash. Without a deposit, progress billing or a line of credit, a profitable contract can empty the account. The fix is to negotiate a deposit (say 30% up front) and milestone payments before signing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Building a 13-week forecast (real-world use)</h3>
      <div className="prose-p">In a spreadsheet, make 13 columns, one per week. Row 1: opening cash. Next rows: expected cash in (invoices due that week, weighted by how reliably each customer pays). Then cash out: payroll dates, rent, loan payments, quarterly estimated taxes, known supplier bills. Last row: closing cash, which becomes next week&apos;s opening cash. Update it every Monday with actual numbers. When any week dips below your minimum (say, two weeks of expenses), you&apos;ll see it a month or more ahead, while there&apos;s still time to chase invoices, delay a purchase or draw on credit.</div>

      <QuickCheck
        question="In the landscaping example, what's the best fix before signing?"
        options={[
          { text: "Negotiate a deposit and milestone payments", correct: true, explanation: "Correct. It moves cash in closer to when costs go out." },
          { text: "Lower the price to win the client's goodwill", correct: false, explanation: "That cuts profit without solving the timing gap." },
          { text: "Ignore it, since the job is profitable", correct: false, explanation: "Profit on paper won't pay the crew in week two." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Profit vs cash flow"
        type="comparison"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-cash-flow-actually-means-for-a-small-business-comparison.svg"
        altText="Two columns. Profit, from the income statement: counts a sale when you invoice it, ignores when the customer pays, spreads equipment cost over years, and answers whether the business is worth running. Cash flow, the bank account reality: counts money when it actually lands, late payers drain it immediately, equipment hits cash all at once, and it answers whether you can pay bills this week."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging the business's health by profit alone.", fix: "Look at the bank balance, receivables and a forward cash forecast every week." },
          { mistake: "Invoicing late or with vague terms.", fix: "Invoice the day work is delivered, state the due date, and make paying easy (card, bank transfer)." },
          { mistake: "Forgetting lumpy bills like quarterly taxes, insurance and annual renewals.", fix: "Put every known lump payment into the forecast and set cash aside monthly for it." },
        ]}
      />
      <MisconceptionCallout
        myth="If my business is profitable, cash will take care of itself."
        reality={<p>Profit and cash move on different clocks. Customers who pay late, inventory bought ahead of sales, equipment purchases and loan principal repayments all drain cash without showing up as losses. Growth makes it worse, because costs arrive before the revenue from new work does. Plenty of profitable businesses have closed because they couldn&apos;t make payroll during that gap.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Build a simple 13-week cash forecast this week and update it every Monday.",
          "List who owes you money, how much and how late, and follow up on anything past due.",
          "Set a minimum cash balance (for example, two weeks of expenses) and treat dipping below it as an alarm.",
          "Ask your bank about a line of credit while the business is healthy, before you need it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is cash flow in a small business?", answer: "It's the money moving into and out of the business's accounts over a period: customer payments in; wages, rent, supplies, taxes and loan payments out. Positive cash flow means more came in than went out." },
          { question: "What is the difference between cash flow and profit?", answer: "Profit counts revenue when earned and expenses when incurred. Cash flow counts money when it actually moves. A sale invoiced today with 60-day terms is profit now and cash in two months." },
          { question: "Can a profitable business run out of money?", answer: "Yes. If customers pay slowly, inventory or equipment is bought up front, or loan principal is due, the bank balance can hit zero while the books show a profit." },
          { question: "How do you improve cash flow?", answer: "Invoice faster, shorten payment terms or take deposits, follow up on late payers, time big purchases, negotiate longer terms with suppliers, keep a cash reserve and arrange a line of credit before you need it." },
          { question: "What are the three types of cash flow?", answer: "Operating (day-to-day business activity), investing (buying or selling long-term assets like equipment) and financing (loans, repayments and owner contributions or draws)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
