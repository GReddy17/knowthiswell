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
  title: "Credit Cards Explained: Interest, Grace Periods, Minimum Payments",
  category: "personal-finance-basics",
  order: 25,
  subtopic: "credit-and-debt",
  tags: ["credit cards", "interest", "APR", "minimum payment", "grace period", "personal finance basics"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A credit card only charges interest on a carried balance, not on every purchase — the grace period, APR, and minimum payment formula each work by specific, learnable mechanics that determine exactly when and how much interest accrues.",
  summary: "Credit card interest, grace periods, and minimum payments each follow specific mechanical rules set by the card issuer and disclosed in the cardholder agreement — understanding how these mechanics interact explains why carrying even a small balance can be expensive, and why paying only the minimum extends repayment dramatically.",
  sources: [
    { label: "Consumer Financial Protection Bureau — What is a Grace Period for a Credit Card?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-grace-period-for-a-credit-card-en-45/" },
    { label: "Consumer Financial Protection Bureau — What is a Credit Card Minimum Payment?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-card-minimum-payment-en-45/" },
    { label: "Federal Trade Commission — Credit Cards", url: "https://consumer.ftc.gov/articles/credit-cards" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-credit-score-actually-measures",
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "personal-finance-basics/good-debt-vs-bad-debt-factual-framing",
  ],
  glossary: [
    {"term":"Grace period","definition":"The window between the end of a credit card billing cycle and the payment due date during which no interest accrues on new purchases, provided the previous statement balance was paid in full."},
    {"term":"APR","definition":"Annual Percentage Rate — the yearly interest rate a card issuer charges on a carried balance, which is divided down to a periodic (typically monthly or daily) rate to calculate actual interest charges."},
    {"term":"Minimum payment","definition":"The smallest amount a cardholder must pay by the due date to keep the account in good standing, typically calculated as a small percentage of the balance plus any interest and fees, which is far smaller than what's needed to pay off the balance quickly."}
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
      "Interest only accrues on a carried balance — if the previous statement balance is paid in full by the due date, the grace period means no interest is charged on new purchases at all.",
      "APR is an annual rate divided down to a periodic rate (commonly daily) to calculate the actual dollar interest charge on whatever balance is carried.",
      "The minimum payment is calculated to keep the account current, not to pay off the balance efficiently — paying only the minimum can stretch repayment across many years and multiply the total interest paid.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A credit card charges interest only on money you don&apos;t pay back by the due date. If you pay your full statement balance every month, the <TermLink href="/personal-finance-basics/credit-cards-explained-interest-grace-periods-minimum-payments">grace period</TermLink> means new purchases don&apos;t accrue interest at all. If you carry a balance, the card&apos;s <TermLink href="/personal-finance-basics/credit-cards-explained-interest-grace-periods-minimum-payments">APR</TermLink> gets applied to what you owe, and the <TermLink href="/personal-finance-basics/credit-cards-explained-interest-grace-periods-minimum-payments">minimum payment</TermLink> is just enough to keep the account in good standing — not enough to pay it off quickly.</div>}
      detailed={<div className="prose-p">A card&apos;s APR is an annual figure, but issuers typically apply it as a daily periodic rate (APR divided by 365) to the average daily balance across the billing cycle, then sum that daily interest for the cycle to produce the interest charge on the next statement. The grace period exists specifically for purchases when the account carries no prior balance forward — if the previous statement was paid in full, new purchases get a window (commonly 21-25 days after the statement closes) with zero interest; carrying any balance forward typically forfeits the grace period on new purchases too, meaning interest can start accruing immediately on everything, not just the old balance. Minimum payments are calculated by a formula the issuer discloses in the cardholder agreement — commonly the greater of a flat dollar amount (e.g. $25) or a small percentage of the balance (e.g. 1-3%) plus that period&apos;s interest and fees — a formula designed around keeping the account compliant with the issuer&apos;s minimum-payment policy, not around efficient debt payoff.</div>}
      />
      <FootnoteAside>Losing the grace period by carrying a balance is a common surprise: many cardholders assume interest only applies to the old balance, but once the grace period is forfeited, new purchases can start accruing interest from the date of purchase, not from the statement due date.</FootnoteAside>

      <p>
      The mechanical relationship between these three pieces — grace period, APR, minimum payment — determines almost everything about how expensive or cheap a given month of credit card use turns out to be.
      </p>

      <QuickCheck
      question="If a cardholder pays their full statement balance every month without exception, do new purchases ever accrue interest?"
      options={[
      { text: "Yes — some interest always accrues on a credit card regardless of payment behavior", correct: false, explanation: "This is a common misconception. A card's grace period specifically exists to make interest avoidable when the previous statement balance is paid in full." },
      { text: "No — as long as the grace period condition (paying the previous statement balance in full) is met, new purchases accrue zero interest during that grace period", correct: true, explanation: "Correct. This is exactly what a grace period does, and it's why paying in full every cycle is the single most effective way to use a credit card interest-free." },
      { text: "Only if the cardholder also has a zero balance at the start of the year", correct: false, explanation: "The grace period condition resets each billing cycle based on whether the previous statement balance was paid in full — it has nothing to do with the calendar year." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Carrying a $1,000 balance at 22% APR for one month (baseline case)</h3>
      <div className="prose-p">
      A card with 22% APR applied to a $1,000 carried balance for roughly one month works out to approximately $1,000 &times; (22/100) / 12 &asymp; $18.33 in interest for that month alone, assuming the balance doesn&apos;t change. That&apos;s the exact calculation the tool below performs — try adjusting the balance or APR to see how the monthly cost scales.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Monthly interest cost on a carried credit card balance"
      fields={[
      { key: "balance", label: "Carried balance ($)", defaultValue: 1000, step: 50 },
      { key: "aprPercent", label: "APR (%)", defaultValue: 22, step: 0.5 },
      ]}
      resultLabel="Approximate interest for one month"
      formula="creditCardMonthlyInterestCost"
      formatResult="currency"
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Losing the grace period by carrying a small balance (edge case / variation)</h3>
      <div className="prose-p">
      Someone pays $980 of a $1,000 statement balance, leaving $20 unpaid. Because the grace period condition (paying the full statement balance) wasn&apos;t met, the card can lose the grace period on that cycle&apos;s new purchases entirely — meaning a $20 shortfall can result in interest accruing on the full new balance, not just the leftover $20. This is a mechanical consequence of how many cardholder agreements define the grace period, not a penalty applied arbitrarily.
      </div>

      <QuickCheck
      question="A cardholder pays $980 of a $1,000 statement balance, leaving $20 unpaid. What's the likely mechanical consequence for the next billing cycle's new purchases?"
      options={[
      { text: "Only the remaining $20 accrues interest; new purchases still get the grace period since most of the balance was paid", correct: false, explanation: "Many cardholder agreements define the grace period as an all-or-nothing condition — paying anything less than the full statement balance can forfeit the grace period on new purchases too, not just leave the $20 shortfall accruing interest." },
      { text: "The full remaining balance plus new purchases may start accruing interest immediately, since the grace period condition (paying the statement balance in full) wasn't met", correct: true, explanation: "Correct. This all-or-nothing structure is exactly why partial payments can be much costlier than the shortfall amount alone would suggest." },
      { text: "There's no consequence as long as the minimum payment was met", correct: false, explanation: "Meeting the minimum payment keeps the account in good standing and avoids late fees, but it doesn't preserve the grace period — those are two separate mechanics in the cardholder agreement." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Paying only the minimum on a $3,000 balance (real-world / applied case)</h3>
      <div className="prose-p">
      A $3,000 balance at 22% APR with a minimum payment formula of &quot;greater of $25 or 2% of balance&quot; starts at a $60 minimum payment. Because a large share of that payment goes toward that month&apos;s interest rather than principal, paying only the calculated minimum each month — as the balance and minimum payment both slowly shrink — can take several years to reach zero and result in total interest paid that meaningfully exceeds the original $3,000, a mechanical outcome of how minimum-payment formulas interact with compounding interest, not a hypothetical worst case.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Grace period timeline vs. a carried balance"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-credit-cards-explained-interest-grace-periods-minimum-payments-timeline.svg"
      altText="A timeline diagram comparing two scenarios: one where the statement balance is paid in full by the due date and new purchases accrue zero interest during the grace period, and one where a balance is carried past the due date and interest begins accruing on both the carried balance and new purchases."
      />
      <p>
      The visual difference between the two timelines is the entire financial cost of carrying a balance versus not — same card, same APR, dramatically different outcome.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming any partial payment preserves the interest-free grace period.", fix: "Check the cardholder agreement — many cards require the full statement balance to be paid to keep the grace period on new purchases the following cycle." },
      { mistake: "Treating the minimum payment as a reasonable target for paying down a balance.", fix: "Recognize the minimum payment is calculated to keep the account current, not to pay off debt efficiently — paying more than the minimum, when possible, reduces total interest paid substantially." },
      { mistake: "Comparing cards only by looking at their advertised APR without checking how interest is calculated (daily balance vs. average balance vs. other methods).", fix: "Read the cardholder agreement's interest calculation method, since two cards with the same advertised APR can produce different actual charges depending on the calculation method used." },
      ]}
      />
      <MisconceptionCallout
      myth="Making the minimum payment on time means you're handling the debt responsibly and it will be paid off in a reasonable timeframe."
      reality={<p>Making the minimum payment on time does keep the account in good standing and avoids late fees and default — but the minimum payment formula is designed around that compliance goal, not around efficient payoff. On a meaningful balance, paying only the calculated minimum each month can take years and result in substantial extra interest, a mechanical fact worth knowing even though it isn&apos;t a reason to panic about any single month&apos;s minimum payment.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check your cardholder agreement's exact grace period condition — most require paying the full statement balance, not just the minimum, to keep it.",
      "Use the calculator above with your own balance and APR to see the actual monthly dollar cost of carrying that balance.",
      "If you're carrying a balance you're unsure how to pay down, a nonprofit credit counseling agency affiliated with the National Foundation for Credit Counseling (NFCC) can review your specific situation for free or low cost — this is a factual resource, not personalized advice from this article.",
      "Don't treat the minimum payment amount as a target — treat it as the floor required to avoid penalties, not the goal.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Do credit cards charge interest if I pay my balance in full every month?", answer: "No, as long as the grace period condition is met — paying the full statement balance by the due date — new purchases accrue zero interest during the following grace period." },
      { question: "What happens if I only pay the minimum payment?", answer: "The account stays in good standing, but because minimum payment formulas are calculated to keep accounts current rather than pay off debt quickly, paying only the minimum on a meaningful balance can take years and result in substantial additional interest." },
      { question: "How is credit card interest actually calculated?", answer: "Most issuers apply the APR as a daily periodic rate (APR divided by 365) to the average daily balance across the billing cycle, then sum that daily interest to produce the interest charge on the next statement — the exact method is disclosed in the cardholder agreement." },
      { question: "Does carrying a balance one month affect future grace periods?", answer: "It can. Many cardholder agreements make the grace period conditional on paying the previous statement balance in full — carrying any balance forward can forfeit the grace period on new purchases in the following cycle too." },
      { question: "What's the difference between APR and the actual interest I'm charged?", answer: "APR is the annual rate; the actual dollar interest charged depends on how much balance you carry, for how long, and the specific daily or monthly calculation method your issuer uses, as disclosed in your cardholder agreement." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
