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
  title: "Why Emergency Funds Matter (and How Big to Build One)",
  category: "personal-finance-basics",
  order: 9,
  subtopic: "saving-and-emergency-funds",
  tags: ["emergency fund", "savings", "financial safety net", "budgeting", "personal finance basics"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "An emergency fund exists to stop a single unexpected expense from turning into debt — the actual mechanism is substituting cash you already have for a loan you'd otherwise be forced to take.",
  summary: "An emergency fund is cash set aside specifically to cover unplanned expenses or income loss without borrowing, commonly sized as three to six months of essential expenses, though the right size depends on job stability and other factors — this is general financial literacy, not a personal recommendation for your situation.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Saving for Emergencies", url: "https://www.consumerfinance.gov/consumer-tools/save-and-build-wealth/" },
    { label: "FDIC — Deposit Insurance Basics", url: "https://www.fdic.gov/deposit-insurance" },
    { label: "Federal Reserve — Report on the Economic Well-Being of U.S. Households", url: "https://www.federalreserve.gov/publications/report-economic-well-being-us-households.htm" },
  ],
  seeAlso: [
    "personal-finance-basics/savings-accounts-explained-how-interest-actually-works",
    "personal-finance-basics/saving-for-short-term-vs-long-term-goals",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
  ],
  glossary: [
    {"term":"Emergency fund","definition":"Cash set aside specifically to cover unplanned expenses or a loss of income, kept separate from everyday spending money so it isn't accidentally spent."},
    {"term":"Liquidity","definition":"How quickly and easily an asset can be turned into usable cash without losing value — a savings account is highly liquid, a house is not."},
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
      "An emergency fund's actual mechanism is substitution: it replaces a loan (credit card debt, a payday loan) with cash you already own, avoiding interest entirely.",
      "A commonly cited general benchmark is three to six months of essential expenses, though the right amount for any individual depends on job stability, dependents, and other factors — this is general literacy, not personalized advice.",
      "The fund's value comes from being liquid and separate — money that's easy to access but not sitting in a checking account where it blends into everyday spending.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">An <TermLink href="/personal-finance-basics/why-emergency-funds-matter-and-how-big-to-build-one">emergency fund</TermLink> is money set aside just for unplanned costs — a car repair, a medical bill, a period without income — kept separate from regular spending money. The mechanism is simple: when the unexpected expense hits, you pay from the fund instead of a credit card, so there&apos;s no interest charge and no new debt.</div>}
      detailed={<div className="prose-p">The Consumer Financial Protection Bureau and the Federal Reserve both track how many households could cover a modest unexpected expense (commonly studied around the $400 mark) using cash or its equivalent, versus needing to borrow, sell something, or skip the expense — that gap is exactly what an emergency fund is built to close. The fund needs to be <TermLink href="/personal-finance-basics/why-emergency-funds-matter-and-how-big-to-build-one">liquid</TermLink> (accessible within a day or two, not locked in an investment that could be down in value when you need it) but also separate enough from checking-account spending money that it doesn&apos;t quietly get absorbed into everyday purchases. A common general guideline is three to six months of essential expenses — rent/mortgage, utilities, food, insurance, minimum debt payments — not total income, since the fund only needs to replace what&apos;s actually necessary to keep afloat, not full pre-emergency spending.</div>}
      />
      <FootnoteAside>The &quot;three to six months&quot; figure is a general starting heuristic, not a rule — someone with unstable freelance income or a single-income household commonly leans toward the higher end, while a stable dual-income household with no dependents commonly needs less; this is exactly the kind of judgment call worth discussing with a financial advisor for an actual number.</FootnoteAside>

      <p>
      Turning that guideline into an actual dollar figure just means multiplying monthly essential expenses by however many months of coverage feels appropriate.
      </p>

      <QuickCheck
      question="Someone has $2,000 in essential monthly expenses (rent, utilities, food, insurance, minimum debt payments) and wants a general benchmark using the commonly cited 3-6 month range. What's the resulting dollar range?"
      options={[
      { text: "$2,000 to $4,000", correct: false, explanation: "This uses roughly 1-2 months, not the commonly cited 3-6 month range." },
      { text: "$6,000 to $12,000", correct: true, explanation: "Correct. $2,000 x 3 months = $6,000, and $2,000 x 6 months = $12,000 — the commonly cited general range for essential-expense coverage." },
      { text: "$24,000, using a full year of expenses", correct: false, explanation: "A full year is well beyond the commonly cited 3-6 month general guideline for an emergency fund specifically (as opposed to broader long-term savings)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating a target using the 3-month baseline (baseline case)</h3>
      <div className="prose-p">
      Essential monthly expenses of $1,800 (rent $1,200, utilities $150, food $300, insurance $150) at the 3-month baseline: $1,800 x 3 = $5,400. This is the minimum end of the commonly cited general range, appropriate as a starting benchmark for someone in a stable dual-income household.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why essential expenses, not total income, is the right base (edge case / variation)</h3>
      <div className="prose-p">
      Someone earning $5,000/month in take-home pay but with essential expenses of only $2,200/month (the rest goes to discretionary spending, entertainment, and additional savings) would size a fund off the $2,200 figure, not the $5,000 — during an actual emergency, discretionary spending is exactly what gets cut first, so it shouldn&apos;t be built into the target. Using total income instead of essential expenses would more than double the target unnecessarily.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The interest-avoidance mechanism in a real emergency (real-world / applied case)</h3>
      <div className="prose-p">
      A $1,500 car repair with no emergency fund often gets paid via credit card. At a representative 22% APR, carrying that $1,500 for 12 months while paying it down adds roughly $170-180 in interest (using the standard credit-card interest math), depending on the payment schedule. Paying from an emergency fund instead means the $1,500 repair costs exactly $1,500 — the entire value of the fund in this scenario is the avoided interest, not some abstract &quot;safety&quot; benefit.
      </div>

      <QuickCheck
      question="What is the actual financial mechanism that makes an emergency fund valuable, beyond just psychological comfort?"
      options={[
      { text: "It earns a uniquely high interest rate compared to other accounts", correct: false, explanation: "An emergency fund doesn't require any special interest rate to be valuable — even in a plain savings account, its value comes from avoiding borrowing costs, not from its own yield." },
      { text: "It substitutes cash you already own for a loan you'd otherwise need, avoiding the interest charges that borrowing for the same expense would create", correct: true, explanation: "Correct. The core mechanism is substitution — paying an unexpected expense in cash instead of financing it means no interest accrues, which is the concrete financial benefit beyond any peace-of-mind factor." },
      { text: "It reduces the total cost of the emergency itself", correct: false, explanation: "The emergency's cost (the $1,500 repair, for example) is the same either way — what changes is whether interest gets added on top by financing it, not the underlying cost of the emergency." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Two paths for the same $1,500 emergency: cash fund vs. credit card"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-why-emergency-funds-matter-and-how-big-to-build-one-cash-vs-credit.svg"
      altText="Two horizontal paths starting from the same labeled emergency expense of 1500 dollars. The top path, labeled Emergency Fund, leads directly to a box reading Total Cost: $1,500. The bottom path, labeled Credit Card at 22% APR over 12 months, leads to a box reading Total Cost: approximately $1,675, with the difference highlighted as Interest Paid: approximately $175."
      />
      <p>
      Both paths cover the exact same $1,500 repair — the only difference between them is whether interest gets added, which is entirely a function of whether cash was available or borrowing was necessary.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Sizing an emergency fund off total income instead of essential expenses.", fix: "Base the target on essential, non-discretionary monthly costs (housing, utilities, food, insurance, minimum debt payments) — that's what actually needs covering during a real emergency." },
      { mistake: "Keeping the emergency fund in the same account as everyday spending money.", fix: "Use a separate account so the fund doesn't blend into regular spending and quietly shrink over time." },
      { mistake: "Investing the emergency fund in something that can lose value (stocks, for example) to chase higher returns.", fix: "Keep it in a liquid, stable account — the fund's job is to be reliably there when needed, not to maximize growth." },
      ]}
      />
      <MisconceptionCallout
      myth="An emergency fund needs to cover a full year of income to be considered 'real' protection."
      reality={<p>A full year of income is well beyond the commonly cited general benchmark of three to six months of essential expenses. Sizing a fund off total income (rather than essential expenses) and stretching the timeframe unnecessarily can make the goal feel unreachable and discourage starting at all — a smaller, genuinely achievable target based on essential expenses is more useful in practice than an oversized target based on the wrong inputs.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate an emergency fund target"
      fields={[
      { key: "monthlyExpenses", label: "Essential monthly expenses ($)", defaultValue: 2000 },
      { key: "monthsOfCoverage", label: "Months of coverage (commonly 3-6)", defaultValue: 3, step: 1 },
      ]}
      resultLabel="Estimated target"
      formula="emergencyFundTarget"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Calculate essential monthly expenses (not total income) as the base for any emergency fund target.",
      "Keep the fund in a separate, liquid account rather than blended into everyday checking.",
      "Start with a smaller, genuinely achievable milestone (even one month of expenses) rather than being discouraged by a larger long-term target.",
      "Discuss the right target size for your specific situation with a financial advisor rather than applying a general benchmark uncritically.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How much should be in an emergency fund?", answer: "A commonly cited general benchmark is three to six months of essential expenses, though the right amount depends on job stability, dependents, and other individual factors — this is general literacy, not a personalized recommendation." },
      { question: "Should an emergency fund be based on income or expenses?", answer: "Essential expenses, not total income — during a real emergency, discretionary spending is what gets cut, so the fund only needs to cover the non-negotiable costs." },
      { question: "Where should an emergency fund be kept?", answer: "In a liquid, stable, separate account (such as a standard or high-yield savings account) rather than blended with everyday spending money or invested in something that can lose value." },
      { question: "Is a $1,000 emergency fund enough?", answer: "It can serve as a genuinely useful starting milestone, though it's smaller than the commonly cited 3-6 month general benchmark — many financial educators frame a smaller starter fund as step one before building toward the larger target." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
