import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  EntryCalculator,
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
  title: "Understanding Student Loans (General Mechanics)",
  category: "personal-finance-basics",
  order: 29,
  subtopic: "credit-and-debt",
  tags: ["student loans", "federal student aid", "loan repayment", "personal finance basics", "interest"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Student loans work like other installment loans in the basics — principal, interest, a repayment term — but federal loans add distinct mechanics around subsidized interest, grace periods, and income-driven repayment that private loans don't have.",
  summary: "A student loan is principal borrowed for education that accrues interest and gets repaid over a set term, with federal loans (originated and guaranteed by the U.S. Department of Education) offering mechanics private lenders generally don't, including a grace period before repayment starts, subsidized loans where the government pays interest while a borrower is in school, and income-driven repayment plans that tie the monthly payment to income rather than a fixed amortization schedule.",
  sources: [
    { label: "Federal Student Aid — Interest Rates and Fees", url: "https://studentaid.gov/understand-aid/types/loans/interest-rates" },
    { label: "Federal Student Aid — Loan Repayment Plans", url: "https://studentaid.gov/manage-loans/repayment/plans" },
    { label: "Federal Student Aid — Subsidized and Unsubsidized Loans", url: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" },
    { label: "Consumer Financial Protection Bureau — Student Loans", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
  ],
  seeAlso: [
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "personal-finance-basics/how-debt-snowball-and-avalanche-methods-work",
    "personal-finance-basics/what-happens-when-you-default-on-a-loan",
  ],
  glossary: [
    {"term":"Subsidized loan","definition":"A federal student loan on which the U.S. Department of Education pays the accruing interest while the borrower is enrolled in school at least half-time and during the grace period, so the balance doesn't grow during that time."},
    {"term":"Grace period","definition":"A set window after a borrower leaves school or drops below half-time enrollment, typically six months for federal loans, before regular loan repayment is required to begin."},
    {"term":"Income-driven repayment","definition":"A federal student loan repayment plan that sets the monthly payment as a percentage of discretionary income rather than a fixed amortization amount, and can change each year as income is recertified."},
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
      "A student loan follows the same basic mechanics as any installment loan — principal, an interest rate, and a repayment term — but federal loans add rules private loans generally don't have.",
      "On a subsidized federal loan, the government pays the accruing interest while the borrower is in school and during the grace period; on an unsubsidized loan, interest accrues the entire time, including while in school.",
      "Federal loans offer income-driven repayment plans that set the monthly payment as a percentage of income rather than a fixed schedule — a mechanic that doesn't exist on most private loans or other consumer debt.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A student loan is money borrowed to pay for education that has to be paid back with interest, same as any other loan. What makes federal student loans different from a typical personal loan is the extra structure built in: a <TermLink href="/personal-finance-basics/understanding-student-loans-general-mechanics">grace period</TermLink> after leaving school before payments start, some loans where the government covers interest while you&apos;re in school (called <TermLink href="/personal-finance-basics/understanding-student-loans-general-mechanics">subsidized</TermLink> loans), and repayment plans that can be based on income instead of a fixed monthly amount.</div>}
      detailed={<div className="prose-p">Federal student loans are originated and guaranteed by the U.S. Department of Education under a small number of standardized loan types (Direct Subsidized, Direct Unsubsidized, Direct PLUS), each with statutorily fixed interest rates set annually rather than rates that vary borrower-to-borrower based on credit. Interest still accrues the same way it does on any installment loan — as a percentage of the outstanding principal, typically calculated daily — but subsidized loans have the federal government pay that accruing interest during in-school enrollment (at least half-time) and during the six-month grace period, so the balance a borrower starts repayment with equals what they originally borrowed. On unsubsidized loans, interest accrues the whole time, including while in school, and if unpaid, gets added to (capitalized into) the principal balance when repayment begins — meaning subsequent interest is calculated on a larger number. Private student loans, by contrast, are underwritten like other private consumer loans, with rates based on the borrower&apos;s (or a cosigner&apos;s) credit, and typically without the grace period, subsidy, or income-driven repayment mechanics that only exist on federal loans by law.</div>}
      />
      <FootnoteAside>Loan forgiveness programs, deferment, and forbearance rules for federal student loans change periodically through legislation and Department of Education policy — current terms should always be checked directly at studentaid.gov rather than assumed from a general explanation like this one.</FootnoteAside>

      <p>
      The subsidized-versus-unsubsidized distinction and the grace period are the two mechanics most specific to student loans, so it&apos;s worth walking through concrete numbers for each.
      </p>

      <QuickCheck
      question="A borrower has a subsidized federal loan while enrolled in school. What happens to the interest that accrues during that time?"
      options={[
      { text: "It's paid by the U.S. Department of Education, so the loan balance doesn't grow while the borrower is in school", correct: true, explanation: "Correct. That's the defining feature of a subsidized loan — the government covers interest accrual during at-least-half-time enrollment and the grace period, unlike an unsubsidized loan." },
      { text: "It's added to the principal balance automatically every month", correct: false, explanation: "That's closer to how unsubsidized loan interest is treated if left unpaid (capitalized at the start of repayment) — a subsidized loan specifically avoids this by having the government pay the interest instead." },
      { text: "It's forgiven permanently regardless of loan type", correct: false, explanation: "Subsidized status only covers who pays the interest during school and the grace period — it isn't a forgiveness program and doesn't apply to all loan types." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Estimating a standard repayment amount (baseline case)</h3>
      <div className="prose-p">
      A borrower has $25,000 in federal student loan debt at a 6% fixed rate on the standard 10-year repayment plan. Treating this as a standard amortizing installment loan — the same math used for a personal loan or a car loan — produces a fixed monthly payment for the full term. This is what the standard repayment plan looks like mechanically: same formula as any fixed-rate installment loan, just applied to a balance that (for a subsidized loan) never grew while the borrower was in school.
      </div>

      <EntryCalculator
      title="Estimate a fixed monthly student loan payment (standard repayment plan)"
      fields={[
      { key: "principal", label: "Loan balance ($)", defaultValue: 25000, step: 500 },
      { key: "rate", label: "Annual interest rate (%)", defaultValue: 6, step: 0.25 },
      { key: "years", label: "Repayment term (years)", defaultValue: 10, step: 1 },
      ]}
      resultLabel="Estimated monthly payment"
      formula="loanMonthlyPayment"
      formatResult="currency"
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Subsidized vs. unsubsidized, same amount borrowed (edge case / variation)</h3>
      <div className="prose-p">
      Two students each borrow $10,000 their freshman year and take four years to graduate. Student A&apos;s loan is subsidized: no interest accrues while in school, so at graduation their balance is still $10,000. Student B&apos;s loan is unsubsidized at the same rate: interest has been accruing the entire four years, and when repayment begins, that accrued interest is added to (capitalized into) the principal — so Student B starts repayment with a balance higher than $10,000, even though both students borrowed the identical amount. The subsidized/unsubsidized distinction, not the amount borrowed, is what produces the difference.
      </div>

      <QuickCheck
      question="Two students each borrow the same $10,000 at the same rate, one with a subsidized loan and one with an unsubsidized loan, both taking four years to graduate. Why does the unsubsidized borrower typically start repayment with a higher balance?"
      options={[
      { text: "Because unsubsidized loans have a higher interest rate by definition", correct: false, explanation: "The rate itself isn't necessarily different — Direct Subsidized and Unsubsidized loans for undergraduates are often set at the same rate. The difference is who pays the interest that accrues during school." },
      { text: "Because interest accrued on the unsubsidized loan during the in-school years and got capitalized into the principal, while the government covered the subsidized loan's in-school interest", correct: true, explanation: "Correct. Same amount borrowed, same accrual mechanics — the only difference is that subsidized in-school interest is paid by the government instead of accumulating onto the loan." },
      { text: "Because unsubsidized loans require larger origination fees", correct: false, explanation: "Origination fees exist on federal loans but aren't the mechanism driving this specific difference — the difference here comes from interest accrual and capitalization during the in-school period." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: When income-driven repayment changes the math entirely (real-world / applied case)</h3>
      <div className="prose-p">
      A borrower with $40,000 in federal loans and a modest income enrolls in an income-driven repayment plan instead of the standard 10-year plan. Their monthly payment is calculated as a percentage of discretionary income (income above a threshold tied to the federal poverty guidelines) rather than from the loan&apos;s amortization schedule — meaning two borrowers with identical loan balances and rates can have very different monthly payments if their incomes differ, and the same borrower&apos;s payment can change from year to year as income is recertified. This is a fundamentally different payment mechanic than the fixed-schedule installment-loan math used in the standard plan, which is why the studentaid.gov repayment estimator (not a generic loan calculator) is the accurate tool for income-driven amounts.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Timeline of a subsidized vs. unsubsidized federal student loan"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-understanding-student-loans-general-mechanics-timeline.svg"
      altText="A horizontal timeline split into three phases: In School, Grace Period, and Repayment. Two parallel tracks run beneath it, one for a subsidized loan showing a flat interest line during the first two phases, and one for an unsubsidized loan showing interest accruing and rising during the same two phases before both converge into a repayment phase."
      />
      <p>
      The two loan types behave identically once repayment begins — the entire mechanical difference happens earlier, during the in-school and grace-period phases.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming all student loans work the same way regardless of federal or private origin.", fix: "Federal loans have statutory features (grace periods, subsidized interest, income-driven repayment) that most private student loans simply don't offer — check studentaid.gov for federal loan terms and the private lender's own disclosures for private loans." },
      { mistake: "Ignoring accrued interest on unsubsidized loans while still in school.", fix: "Unsubsidized loan interest accrues from disbursement, even while enrolled — paying it during school, if possible, avoids having it capitalized into a larger principal balance at graduation." },
      { mistake: "Assuming an income-driven repayment estimate can be calculated the same way as a fixed-rate installment loan.", fix: "Income-driven plans set payments as a percentage of discretionary income, not from an amortization formula — use the official studentaid.gov Loan Simulator for an accurate income-driven estimate." },
      ]}
      />
      <MisconceptionCallout
      myth="A subsidized student loan is just a loan with a lower interest rate."
      reality={<p>Subsidized status doesn&apos;t necessarily change the interest rate itself — Direct Subsidized and Direct Unsubsidized loans for undergraduates are often issued at the same rate. What changes is who pays the interest that accrues during school and the grace period: the federal government pays it on a subsidized loan, while it accrues onto the unsubsidized loan the entire time.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check studentaid.gov (or your loan servicer's account portal) to see whether each of your loans is subsidized or unsubsidized, and its current interest rate.",
      "Use the official studentaid.gov Loan Simulator, not a generic loan calculator, to estimate income-driven repayment amounts — those plans don't follow standard amortization math.",
      "Note your grace period end date so you know when payments are expected to begin after leaving school.",
      "For decisions about which specific repayment plan fits your situation, or about loan forgiveness eligibility, consult your loan servicer directly or a nonprofit credit counselor (such as one affiliated with the NFCC) rather than treating this article as personalized advice.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a subsidized and unsubsidized federal student loan?", answer: "On a subsidized loan, the U.S. Department of Education pays the interest that accrues while the borrower is in school at least half-time and during the grace period. On an unsubsidized loan, interest accrues the entire time, including while in school, and unpaid interest is added to the principal when repayment begins." },
      { question: "How long is the grace period on federal student loans?", answer: "Federal Direct Loans typically have a six-month grace period after a borrower graduates, leaves school, or drops below half-time enrollment before regular repayment is required to begin." },
      { question: "Do private student loans have the same grace period and subsidized interest features?", answer: "Not necessarily. Grace periods, interest subsidies, and income-driven repayment are specific to federal student loan programs by law — private lenders set their own terms, which vary and often don't include these features." },
      { question: "How is an income-driven repayment amount calculated?", answer: "It's based on a percentage of discretionary income (income above a threshold tied to federal poverty guidelines), not on the loan's balance, rate, and term the way a standard fixed payment is — the official studentaid.gov Loan Simulator calculates it precisely." },
      { question: "What happens to unpaid interest on an unsubsidized loan?", answer: "If interest isn't paid while it accrues, it can be capitalized — added to the principal balance — typically when a borrower enters repayment, meaning subsequent interest is calculated on the new, larger balance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
