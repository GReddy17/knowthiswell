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
  title: "How Small Business Loans Actually Work",
  category: "business-entrepreneurship-basics",
  order: 3,
  subtopic: "starting-from-zero",
  tags: ["small business loans", "SBA loans", "term loans", "line of credit", "underwriting", "business entrepreneurship basics"],
  date: "2026-09-23",
  updated: "2026-09-23",
  lastReviewed: "2026-09-23",
  excerpt: "Most small business loans aren't made by the government — a bank makes the loan and evaluates the risk, and an SBA guarantee just covers part of the bank's loss if the borrower defaults.",
  summary: "A small business loan is fundamentally a bank deciding whether to lend its own money to a business, evaluated against a real underwriting framework — capacity, capital, collateral, conditions, and character — and where a program is described as an 'SBA loan,' the Small Business Administration is not the lender; per SBA.gov, the agency instead guarantees a portion of the loan so the bank carries less risk, which is why SBA-backed loans often reach businesses a bank wouldn't otherwise approve.",
  sources: [
    { label: "U.S. Small Business Administration — Loans", url: "https://www.sba.gov/funding-programs/loans" },
    { label: "U.S. Small Business Administration — 7(a) Loans", url: "https://www.sba.gov/funding-programs/loans/7a-loans" },
    { label: "U.S. Small Business Administration — Lender Match", url: "https://www.sba.gov/funding-programs/loans/lender-match" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business",
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "personal-finance-basics/what-a-credit-score-actually-measures",
  ],
  glossary: [
    { term: "SBA guarantee", definition: "A commitment from the U.S. Small Business Administration to repay a lender a set percentage of a loan if the borrower defaults — it reduces the lender's risk, but the lender still makes and services the loan with its own money." },
    { term: "Term loan", definition: "A loan for a fixed amount, repaid in scheduled installments (usually monthly) over a set period, at a fixed or variable rate." },
    { term: "Line of credit", definition: "A revolving pool of approved credit a business can draw from, repay, and draw from again, up to a set limit — interest is charged only on the amount actually drawn." },
    { term: "Underwriting", definition: "The lender's process of evaluating a loan applicant's risk before approving or denying the loan and setting its terms." },
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
          "A bank or other private lender makes a small business loan with its own money and carries the risk — the SBA almost never lends directly.",
          "Lenders evaluate applicants against a real underwriting framework: capacity, capital, collateral, conditions, and character.",
          "An 'SBA loan' means the SBA has agreed to guarantee a portion of the loan, which lowers the lender's risk and can unlock financing a bank wouldn't otherwise approve.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When people talk about a &quot;small business loan,&quot; they usually mean money borrowed from a bank or online lender to start or grow a business, paid back over time with interest. Some of these loans come with an SBA guarantee attached, which people sometimes mistake for the government directly lending the money. It doesn&apos;t — the bank is still the one deciding whether to approve you, still the one funding the loan, and still the one collecting your payments. The SBA guarantee just means that if you default, the government covers part of the bank&apos;s loss, which makes the bank more willing to say yes to a business that looks riskier on paper.</div>}
        detailed={<div className="prose-p">Per the U.S. Small Business Administration, most small business financing falls into a few structural types: a <TermLink href="/business-entrepreneurship-basics/how-small-business-loans-actually-work">term loan</TermLink> (a fixed amount repaid on a set schedule, good for a one-time purchase like equipment), a <TermLink href="/business-entrepreneurship-basics/how-small-business-loans-actually-work">line of credit</TermLink> (a revolving limit you draw against as needed, better for managing uneven cash flow), and SBA-guaranteed loans such as the 7(a) program, which aren&apos;t a separate pool of government money but a guarantee structure layered on top of a private lender&apos;s own loan. Before approving any of these, a lender runs the application through <TermLink href="/business-entrepreneurship-basics/how-small-business-loans-actually-work">underwriting</TermLink> — a real, structured evaluation, commonly organized around five factors sometimes called the &quot;5 C&apos;s&quot;: capacity (can the business&apos;s cash flow realistically cover the payments), capital (how much of their own money the owner has already put in), collateral (assets that could be seized or pledged if the loan defaults), conditions (the loan&apos;s purpose, amount, and the state of the industry/economy), and character (the owner&apos;s credit history and track record). An SBA guarantee doesn&apos;t remove this underwriting step — it changes the math the lender is doing, since a bank willing to accept, say, a 15% chance of default at 100% of its own money at risk might accept a 25% chance of default when the government guarantee covers a meaningful share of any loss.</div>}
      />
      <FootnoteAside>Per SBA.gov, the SBA doesn&apos;t set the interest rate a business pays directly either — participating lenders set rates within SBA-established maximums, and rates vary by loan size, term, and lender.</FootnoteAside>

      <p>This structure — private lender funds and services the loan, SBA guarantees a portion — is also why applying for an SBA-backed loan still means applying through a bank or an SBA-approved lender, not through a government office, and why approval still depends on the lender&apos;s own underwriting decision.</p>

      <QuickCheck
        question="A business owner is approved for an SBA 7(a) loan through a local bank. Who actually funds and services the loan month to month?"
        options={[
          { text: "The bank — the SBA guarantees a portion of the loan but doesn't fund or service it directly", correct: true, explanation: "Correct. Per SBA.gov, the participating lender funds the loan with its own money and handles servicing; the SBA's role is guaranteeing part of the loan against default." },
          { text: "The Small Business Administration, using the bank only to process the paperwork", correct: false, explanation: "The SBA doesn't fund the loan directly in the vast majority of cases — the bank supplies the money and carries the day-to-day servicing." },
          { text: "The business owner's collateral is converted into the loan amount directly, with no lender involved", correct: false, explanation: "Collateral is one factor a lender weighs during underwriting, not a substitute for a lender funding the loan." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward equipment term loan (baseline case)</h3>
      <div className="prose-p">A bakery owner needs $30,000 for a commercial oven. She applies for a term loan at her bank, which evaluates her cash flow (capacity), the down payment she&apos;s putting in (capital), the oven itself as collateral, the purpose and loan amount (conditions), and her personal credit history (character). Approved, she repays the loan in fixed monthly installments over five years at a fixed rate — a standard term loan, no SBA guarantee involved.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A newer business that only qualifies with an SBA guarantee (edge case / variation)</h3>
      <div className="prose-p">A two-year-old landscaping business wants a $75,000 loan to buy a second truck crew&apos;s worth of equipment. On its own, the business&apos;s short track record and thin cash reserves would likely get it declined by a bank&apos;s standard underwriting. Applying through the SBA 7(a) program, the same bank runs the same underwriting evaluation, but because the SBA guarantees a percentage of the loan against default, the bank is willing to accept the risk it wouldn&apos;t take on an unguaranteed loan. The business still deals only with the bank for approval, funding, and repayment — the SBA guarantee operates in the background.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using a line of credit instead of a term loan for uneven cash flow (real-world / applied case)</h3>
      <div className="prose-p">A retail shop with seasonal sales spikes doesn&apos;t need one lump sum — it needs flexible access to cash during slow months and the ability to pay it back quickly once sales pick up. A line of credit fits that pattern better than a term loan: the shop draws what it needs, pays interest only on the drawn amount, repays it, and can draw again later, up to its approved limit, without reapplying each time.</div>

      <QuickCheck
        question="Why might a business with uneven, seasonal cash flow prefer a line of credit over a term loan?"
        options={[
          { text: "A line of credit lets the business draw only what it needs when it needs it and pay interest only on the amount drawn, rather than committing to a fixed lump-sum repayment schedule", correct: true, explanation: "Correct. A line of credit's revolving structure matches uneven cash flow better than a term loan's fixed schedule on a lump sum." },
          { text: "A line of credit never requires any underwriting evaluation", correct: false, explanation: "Lenders still underwrite lines of credit — capacity, capital, collateral, conditions, and character are still evaluated before approval." },
          { text: "A line of credit is only available to businesses with an SBA guarantee", correct: false, explanation: "Lines of credit are offered by private lenders with or without an SBA guarantee attached — the guarantee is a separate structural layer, not a requirement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a monthly payment on a fixed-rate business term loan"
        description="Enter a principal amount, annual interest rate, and repayment term to see the estimated fixed monthly payment. This is a general amortization estimate, not a loan offer — actual lender terms vary."
        fields={[
          { key: "principal", label: "Loan amount ($)", defaultValue: 50000, step: 1000 },
          { key: "rate", label: "Annual interest rate (%)", defaultValue: 9, step: 0.25 },
          { key: "years", label: "Term (years)", defaultValue: 5, step: 1 },
        ]}
        resultLabel="Estimated monthly payment"
        formula="loanMonthlyPayment"
        formatResult="currency"
        disclaimer="This is a general estimate using a standard amortization formula, not a loan quote — actual business loan rates, fees, and terms vary by lender, industry, and creditworthiness."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What a lender actually evaluates before approving a small business loan"
        type="detail"
        svgSrc="/diagrams/business-entrepreneurship-basics-how-small-business-loans-actually-work-detail.svg"
        altText="A diagram showing the five underwriting factors lenders evaluate for a small business loan: capacity, capital, collateral, conditions, and character, with a note that an SBA guarantee reduces lender risk rather than replacing this evaluation."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the SBA hands out loans directly to small businesses.", fix: "Understand that per SBA.gov, a private lender funds and services the loan — the SBA guarantees a portion of it, reducing the lender's risk." },
          { mistake: "Applying for financing without understanding what a lender is actually evaluating.", fix: "Prepare to speak to all five underwriting factors — capacity, capital, collateral, conditions, and character — before you apply, not after a decline." },
          { mistake: "Defaulting to a term loan for financing needs that are actually recurring and uneven.", fix: "Match the loan structure to the need: a term loan for a one-time purchase, a line of credit for ongoing or seasonal cash-flow gaps." },
        ]}
      />
      <MisconceptionCallout
        myth="An 'SBA loan' is free or low-cost government money, separate from the regular banking system."
        reality={<p>Per SBA.gov, an SBA-backed loan is still a private loan from a bank or other approved lender, funded with that lender&apos;s own money and underwritten by that lender&apos;s own process. The SBA&apos;s role is to guarantee a percentage of the loan against default, which lowers the lender&apos;s risk and can make approval possible for businesses a bank might otherwise decline — but the business still pays interest to the lender, still applies through the lender, and still deals with the lender for servicing, not a government office.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Identify which financing structure actually fits your need: a term loan for a one-time purchase, a line of credit for recurring or uneven cash flow.",
          "Prepare documentation that speaks to all five underwriting factors — cash flow projections, your own capital contribution, available collateral, loan purpose, and your credit history.",
          "If a bank declines you on standard terms, ask whether an SBA-guaranteed option changes the outcome, or use the SBA's Lender Match tool to find participating lenders.",
          "This is general educational information, not financial or lending advice — consult SBA.gov directly or a qualified lender for guidance specific to your business.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Does the SBA lend money directly to small businesses?", answer: "In the vast majority of cases, no — per SBA.gov, private lenders fund and service SBA-backed loans, and the SBA guarantees a portion of the loan to reduce the lender's risk." },
          { question: "What are the 5 C's of loan underwriting?", answer: "Capacity, capital, collateral, conditions, and character — the factors lenders commonly evaluate when deciding whether to approve a loan and on what terms." },
          { question: "What's the difference between a term loan and a line of credit?", answer: "A term loan provides a fixed amount repaid on a set schedule, suited to a one-time purchase. A line of credit is a revolving limit you can draw from, repay, and draw from again, better suited to ongoing or uneven cash-flow needs." },
          { question: "Why would a business apply for an SBA-guaranteed loan instead of a regular bank loan?", answer: "Because the SBA guarantee reduces the lender's risk, it can make approval possible for businesses — often newer or thinner-margin ones — that wouldn't qualify for an unguaranteed loan on the same terms." },
          { question: "Does getting an SBA guarantee mean a business skips a lender's underwriting process?", answer: "No — the lender still evaluates the application against the same underwriting factors. The guarantee changes how much risk the lender is willing to accept, not whether underwriting happens." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
