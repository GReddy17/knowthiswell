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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Fixed vs Variable Expenses",
  category: "personal-finance-basics",
  order: 3,
  subtopic: "income-and-budgeting-basics",
  tags: ["fixed expenses", "variable expenses", "budgeting basics", "expense categories", "personal finance"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Fixed expenses stay the same amount each period; variable expenses change — knowing which category a cost falls into determines how much control a budget actually has over it.",
  summary: "A fixed expense is a cost that stays the same amount each billing period (like rent or a loan payment), while a variable expense changes in amount from period to period (like groceries or utility bills) — the distinction matters because fixed expenses are locked in by contract while variable expenses are the part of a budget that responds to day-to-day choices.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
    { label: "Encyclopaedia Britannica — Budget", url: "https://www.britannica.com/topic/budget" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
    "personal-finance-basics/needs-vs-wants-how-to-tell-the-difference",
    "personal-finance-basics/tracking-spending-methods-and-tools",
  ],
  glossary: [
    {"term":"Fixed expense","definition":"A cost that stays the same amount from one billing period to the next, typically set by a contract or agreement (rent, a loan payment, a subscription)."},
    {"term":"Variable expense","definition":"A cost that changes in amount from period to period based on usage or choices made (groceries, utilities, discretionary spending)."},
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
      "A fixed expense stays the same amount each period (rent, a car loan payment, a subscription); a variable expense changes in amount based on usage or choices (groceries, utility bills).",
      "Fixed expenses are set by a contract or agreement and generally can't change mid-period without renegotiating or switching providers — variable expenses can shift the very next time money is spent.",
      "Because fixed expenses are locked in, they set a hard floor under a budget; variable expenses are where most short-term budget adjustments actually happen.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/personal-finance-basics/fixed-vs-variable-expenses">fixed expense</TermLink> costs the same amount every billing period — rent of $1,200 is $1,200 whether the month was busy or quiet. A <TermLink href="/personal-finance-basics/fixed-vs-variable-expenses">variable expense</TermLink> changes based on what actually happens — a grocery bill might be $350 one month and $420 the next depending on what was bought. Sorting expenses into these two groups shows which costs are locked in and which ones respond to actual choices made during the month.</div>}
      detailed={<div className="prose-p">The distinction is really about who controls the amount and how quickly it can change. Fixed expenses are typically set by a contract (a lease, a loan agreement, a subscription term) and require an active step — renegotiating, refinancing, or canceling — to change; they don&apos;t respond to spending less during a given month. Variable expenses respond immediately to behavior: buying less at the grocery store, running the air conditioner less, or driving fewer miles changes the number the very next billing cycle. This is why budget cuts aimed at fixed expenses (moving to cheaper housing, refinancing a loan) take real effort and time to execute, while cuts to variable expenses can, in principle, take effect immediately — though in practice, some &quot;variable&quot; costs like insurance premiums or property tax escrow can behave more like semi-fixed costs, changing only once or twice a year rather than truly randomly.</div>}
      />
      <FootnoteAside>Some expenses sit in a middle category sometimes called &quot;periodic&quot; or &quot;semi-fixed&quot; — costs like an annual insurance premium or a quarterly subscription that don&apos;t change in amount from bill to bill, but also don&apos;t arrive every single month, which is why budgeting frameworks recommend averaging them into a monthly figure rather than sorting them purely as fixed or variable.</FootnoteAside>

      <p>
      The practical use of this split shows up the moment a budget needs to be cut — knowing which expenses can respond immediately versus which ones require a structural change changes what actually gets attempted first.
      </p>

      <QuickCheck
      question="A household needs to reduce spending this month. Which category of expense can realistically respond to that decision within the same billing period?"
      options={[
      { text: "Fixed expenses, since they're the largest costs and cutting the biggest number first makes the most sense", correct: false, explanation: "Fixed expenses are locked in by contract for the current period — rent or a loan payment won't change mid-month no matter what spending decision is made; cutting them requires a longer-term structural change like renegotiating or moving." },
      { text: "Variable expenses, since they change immediately based on choices made during the period — spending less on groceries or discretionary items shows up the very next purchase, unlike a fixed contractual payment", correct: true, explanation: "Correct. Variable expenses are the part of a budget that can realistically respond within the same billing period; fixed expenses require a separate, longer-term action to change." },
      { text: "Neither category can be adjusted once a billing period has started", correct: false, explanation: "Variable expenses are, by definition, still being determined throughout the period — spending decisions made partway through the month still affect the final variable total." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sorting a household&apos;s expenses into fixed and variable (baseline case)</h3>
      <div className="prose-p">
      Fixed: rent $1,200, car loan $320, streaming subscriptions $35, gym membership $40 — total $1,595, identical every month. Variable: groceries (averaging $400 but ranging $340–$460), utilities ($90–$160 depending on season), gas ($120–$180) — these numbers move based on usage and choices, not a locked-in contract.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why a &quot;fixed&quot; utility bill with a flat-rate plan is actually semi-fixed (edge case / variation)</h3>
      <div className="prose-p">
      Some utility providers offer flat-rate billing plans that charge the same amount every month regardless of actual usage, averaged over a year. On paper this looks fixed — the bill is identical month to month — but the underlying cost driver (electricity or gas usage) is still variable; the provider has simply smoothed it into a fixed payment for the customer&apos;s convenience. This distinction matters because reducing actual usage under a flat-rate plan won&apos;t lower that month&apos;s bill, even though it&apos;s reducing a genuinely variable underlying cost.
      </div>

      <QuickCheck
      question="Under a flat-rate utility billing plan, does using less electricity this month lower this month's bill?"
      options={[
      { text: "Yes, immediately, the same way it would under standard variable billing", correct: false, explanation: "A flat-rate plan smooths actual variable usage into a fixed monthly payment set in advance — this month's reduced usage affects the provider's future rate-setting, not this specific bill." },
      { text: "No — the bill amount is fixed for the billing plan's term regardless of actual usage that month, even though the underlying electricity cost is genuinely variable", correct: true, explanation: "Correct. This is exactly why flat-rate plans are worth recognizing as a special case: what appears as a fixed expense on a statement can still have a variable expense underneath it." },
      { text: "It depends on whether the reduction happens in the first half or second half of the billing period", correct: false, explanation: "Timing within the period isn't the relevant factor — a flat-rate plan's defining feature is that the billed amount doesn't respond to usage within its term at all." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using the split to plan a real budget cut (real-world / applied case)</h3>
      <div className="prose-p">
      A household needs to free up $200/month. Their fixed expenses ($1,595 from Example 1) can&apos;t move without a structural change like renegotiating the gym contract or refinancing the car loan — both possible, but not immediate. Their variable expenses (averaging $400 groceries, $130 gas) have more near-term flexibility: trimming groceries by $100 and reducing discretionary driving to save $50 on gas gets partway to the goal this month, while a longer-term plan (like refinancing the car loan for a lower payment) can close the remaining gap over the following months.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Fixed vs variable expenses: response time to a spending change"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-fixed-vs-variable-expenses-response-time.svg"
      altText="A comparison diagram with two columns. The left column, labeled Fixed Expenses, shows a flat horizontal line staying constant across months with a lock icon, representing rent or a loan payment unaffected by spending decisions. The right column, labeled Variable Expenses, shows a jagged line rising and falling across months, representing groceries or utilities that respond immediately to usage and choices."
      />
      <p>
      The flat line versus the jagged line is the entire practical difference — one category holds steady regardless of behavior, the other moves with it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a bill that's the same amount every month (like a flat-rate utility plan) is automatically a fixed expense in the budgeting sense.", fix: "Check whether the underlying cost driver still varies — a flat-rate plan smooths a variable cost into a fixed payment, but the usage behind it hasn't stopped being variable." },
      { mistake: "Trying to cut fixed expenses for an immediate, same-month budget fix.", fix: "Target variable expenses for immediate relief; treat fixed-expense reductions (refinancing, moving, canceling a contract) as a separate, longer-term project." },
      { mistake: "Forgetting to average irregular but predictable costs (an annual premium) into the monthly budget at all.", fix: "Treat semi-fixed/periodic costs as a third category, averaged monthly, rather than dropping them because they don't fit neatly as either fixed or variable." },
      ]}
      />
      <MisconceptionCallout
      myth="Variable expenses are the 'wasteful' spending and fixed expenses are always the 'necessary' spending."
      reality={<p>Fixed vs. variable is about how a cost responds to time and choices, not about whether it&apos;s necessary. Rent (fixed) and groceries (variable) are both needs; a gym membership (fixed) and a night out (variable) can both be wants. The needs-vs-wants distinction and the fixed-vs-variable distinction are independent categorizations that happen to overlap sometimes, not the same split by two different names.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "List your expenses and tag each one as fixed, variable, or semi-fixed/periodic.",
      "If a same-month budget adjustment is needed, focus on variable expenses first — they can respond within the current period.",
      "For fixed expenses that feel too high, treat reducing them as a separate project (refinance, renegotiate, or switch providers) rather than expecting an immediate change.",
      "Check bills that look flat for a hidden flat-rate or averaged-billing plan smoothing over what's actually a variable underlying cost.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between fixed and variable expenses?", answer: "A fixed expense stays the same amount each billing period (rent, a loan payment). A variable expense changes based on usage or choices (groceries, utilities)." },
      { question: "Is a subscription a fixed or variable expense?", answer: "Fixed — a subscription charges the same amount each period regardless of how much it's used, unlike a usage-based bill." },
      { question: "Can a fixed expense ever change?", answer: "Yes, but only through an active step like renegotiating, refinancing, or switching providers — it won't change on its own mid-period based on spending behavior." },
      { question: "Why does it matter whether an expense is fixed or variable?", answer: "Because it determines how quickly a budget can respond to a needed change — variable expenses can shift within the current period, while fixed expenses require a longer-term structural adjustment." },
      { question: "What is a semi-fixed or periodic expense?", answer: "A cost that's a set, unchanging amount each time it's billed, but doesn't recur every single month (like an annual insurance premium) — best handled by averaging it into a monthly budget figure." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
