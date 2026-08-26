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
  title: "Zero-Based Budgeting Explained",
  category: "personal-finance-basics",
  order: 5,
  subtopic: "income-and-budgeting-basics",
  tags: ["zero-based budgeting", "budgeting methods", "budgeting basics", "personal finance"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Zero-based budgeting assigns every dollar of income a specific job — spending, saving, or debt repayment — until income minus assigned dollars equals zero, rather than just tracking leftover money.",
  summary: "Zero-based budgeting is a method where every dollar of income is deliberately assigned a job — a spending category, a savings goal, or a debt payment — before the month begins, so that income minus all assignments equals zero. It doesn't mean spending everything; money assigned to savings is still assigned, just to a savings job rather than being left unassigned. The method's value is forcing an explicit decision about every dollar rather than discovering at month's end what's left over.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
    { label: "Encyclopaedia Britannica — Budget", url: "https://www.britannica.com/topic/budget" },
  ],
  seeAlso: [
    "personal-finance-basics/the-50-30-20-budgeting-rule-explained",
    "personal-finance-basics/tracking-spending-methods-and-tools",
    "personal-finance-basics/setting-financial-goals-short-vs-long-term",
  ],
  glossary: [
    {"term":"Zero-based budget","definition":"A budgeting method where every dollar of income is assigned a specific job (spending, saving, or debt repayment) before the month begins, so income minus assignments equals zero."},
    {"term":"Assignment","definition":"In zero-based budgeting, the deliberate designation of a specific dollar amount to a specific category or goal."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>A note on this article:</strong> this content explains a budgeting method for general education and is not personalized financial advice. Whether zero-based budgeting fits a given situation depends on income stability, financial goals, and personal preference — a licensed financial advisor can help apply it to individual circumstances.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Zero-based budgeting assigns every dollar of income a specific job before the month begins, so income minus all assignments equals zero.",
      "\"Zero\" refers to unassigned dollars, not spent dollars — money assigned to savings or debt repayment still counts toward reaching zero.",
      "The method requires a fresh assignment plan each period since income and priorities can change, which is more effort than a fixed-percentage rule but gives more precise control.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">In a <TermLink href="/personal-finance-basics/zero-based-budgeting-explained">zero-based budget</TermLink>, every dollar earned gets a name before it&apos;s spent. Instead of spending throughout the month and seeing what&apos;s left for savings, this method starts by writing down income, then subtracting planned amounts for rent, groceries, savings, debt payments, and everything else — one at a time — until the number reaches exactly zero. Reaching zero means every dollar has a job, not that every dollar has been spent.</div>}
      detailed={<div className="prose-p">The mechanical process is: list total expected income for the period, then list every category the money needs to cover — starting with fixed obligations, then variable needs, then savings goals, then wants — subtracting each assignment from the running total until it hits zero. If the running total goes negative before all categories are covered, something has to be cut or reduced; if categories are covered but money remains unassigned, that remaining money should be assigned somewhere deliberate (extra debt payment, additional savings) rather than left as loose, undesignated cash, which is where zero-based budgeting differs most from just tracking spending after the fact. This upfront assignment is also what distinguishes it from percentage-based rules like the 50/30/20 rule — a zero-based budget doesn&apos;t use fixed percentages, it assigns exact dollar amounts based on the actual bills and goals for that specific period.</div>}
      />
      <FootnoteAside>Zero-based budgeting for personal finances borrows its name and core idea from zero-based budgeting in organizational and government finance, where each period&apos;s budget is built from a &quot;zero base&quot; and every expense must be justified fresh, rather than simply adjusting the prior period&apos;s budget up or down.</FootnoteAside>

      <p>
      The main tradeoff is effort: a zero-based budget requires a new assignment plan every period since income, bills, and priorities can all shift, whereas a fixed-percentage rule can mostly run on autopilot once set up.
      </p>

      <QuickCheck
      question="In a zero-based budget, if $3,000 in income is assigned to $2,600 of expenses and $400 to a savings account, what should the remaining balance be?"
      options={[
      { text: "$400, representing the amount not yet spent", correct: false, explanation: "Money assigned to savings is still an assignment — it isn't 'unspent' in the zero-based framework, it has a job (savings) just like the expense categories do." },
      { text: "$0, because both the $2,600 in expenses and the $400 in savings are deliberate assignments that together account for all of the income", correct: true, explanation: "Correct. Reaching zero means every dollar has a job — spending, saving, or debt repayment all count as valid assignments toward that zero." },
      { text: "A negative number, since savings shouldn't count as an assignment in a zero-based budget", correct: false, explanation: "Savings absolutely counts as an assignment in zero-based budgeting — the method doesn't require spending every dollar, only assigning every dollar a specific, deliberate purpose." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Building a basic zero-based budget from monthly income (baseline case)</h3>
      <div className="prose-p">
      Monthly income: $4,000. Assignments: rent $1,200, groceries $400, utilities $150, car payment $320, minimum debt payment $150, savings $500, dining/entertainment $280, remaining discretionary categories totaling $1,000 (insurance, gas, subscriptions, miscellaneous). Running total: $4,000 − $1,200 − $400 − $150 − $320 − $150 − $500 − $280 − $1,000 = $0. Every dollar has an assigned job; the budget is balanced at zero.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: What happens when the running total doesn&apos;t reach zero cleanly (edge case / variation)</h3>
      <div className="prose-p">
      Using the same income ($4,000) and the same fixed obligations, but adding a larger emergency-fund savings goal of $800 instead of $500, the assignments now total $4,300 — $300 more than income. A zero-based budget makes this shortfall visible immediately, before the month starts, rather than being discovered as an overdraft at month&apos;s end. The fix is to either reduce a discretionary assignment (dining, entertainment) by $300, or reduce the savings goal for this period, choosing deliberately rather than by default.
      </div>

      <QuickCheck
      question="A zero-based budget shows assignments totaling more than income. What does this reveal that a simple after-the-fact spending log might not catch until later?"
      options={[
      { text: "That there's an accounting error somewhere that needs correcting before the budget can be used at all", correct: false, explanation: "This isn't necessarily an error — it's the budget doing its job by surfacing a real conflict between goals and income before money is spent, so a deliberate choice can be made." },
      { text: "That the current spending and savings goals exceed available income, and a choice needs to be made about what to cut or reduce before the month starts, rather than finding out via an overdraft later", correct: true, explanation: "Correct. This upfront visibility — catching a shortfall before spending happens rather than after — is one of the main practical advantages zero-based budgeting has over passive expense tracking." },
      { text: "That the household should immediately open a line of credit to cover the shortfall", correct: false, explanation: "The point of surfacing the shortfall early is to allow a deliberate reduction in assignments, not to default to borrowing to cover a gap that was avoidable with planning." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Adjusting a zero-based budget mid-month when income changes (real-world / applied case)</h3>
      <div className="prose-p">
      A freelancer builds a zero-based budget assuming $3,500 in expected income, but only $2,900 actually arrives by mid-month. Because every dollar was already assigned a specific job, the shortfall is easy to trace to specific categories rather than being a vague sense of &quot;running low&quot; — the freelancer can see exactly which $600 of assignments (perhaps the discretionary and extra-savings portions) need to be delayed or reduced for this period, while the fixed obligations (rent, minimum debt payments) stay protected.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Zero-based budgeting: assigning income down to zero"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-zero-based-budgeting-explained-assign-to-zero.svg"
      altText="A vertical diagram showing income at the top as a starting number, with a series of subtraction steps for each assignment category — rent, groceries, savings, debt payment, discretionary spending — stacking downward until the running total reaches exactly zero at the bottom, labeled 'every dollar assigned.'"
      />
      <p>
      Each subtraction represents a deliberate assignment, not a passive expense — the process ends only when the running total hits exactly zero.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming zero-based budgeting means spending every dollar and leaving nothing for savings.", fix: "Remember that savings and debt repayment are valid assignments — 'zero' means zero unassigned dollars, not zero dollars saved." },
      { mistake: "Building the budget once and never revisiting it as income or bills change.", fix: "Rebuild the assignment plan each period, since zero-based budgeting is designed around current, actual numbers rather than a fixed formula." },
      { mistake: "Leaving a 'miscellaneous' catch-all category so large that it defeats the purpose of assigning every dollar deliberately.", fix: "Keep the miscellaneous category small and specific, or break it into named sub-categories, so most spending is genuinely planned rather than vaguely bucketed." },
      ]}
      />
      <MisconceptionCallout
      myth="Zero-based budgeting is the same as spending your entire paycheck."
      reality={<p>The &quot;zero&quot; refers to unassigned income, not unspent income. A household that assigns $4,000 of income to $2,800 in expenses and $1,200 to various savings and debt-payoff goals has run a correct zero-based budget — every dollar has a deliberate destination, even though a large share of it isn&apos;t being spent on goods or services.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "List total expected income for the upcoming period.",
      "Assign specific dollar amounts to each fixed obligation first, then variable needs, then savings goals, then wants.",
      "Subtract each assignment from the running total and confirm it reaches exactly zero — adjust assignments if it goes negative or leaves unassigned money.",
      "Rebuild the assignment plan each new period rather than reusing an old one automatically.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is zero-based budgeting?", answer: "A budgeting method where every dollar of income is assigned a specific job — spending, saving, or debt repayment — before the period begins, so income minus assignments equals zero." },
      { question: "Does zero-based budgeting mean I have to spend everything I earn?", answer: "No. Money assigned to savings or debt repayment still counts as an assignment — 'zero' means zero unassigned dollars, not zero dollars remaining after spending." },
      { question: "How is zero-based budgeting different from the 50/30/20 rule?", answer: "The 50/30/20 rule uses fixed percentage targets for broad categories; zero-based budgeting assigns exact dollar amounts to specific categories based on actual bills and goals for that period, with no fixed percentages." },
      { question: "What happens if my assignments add up to more than my income?", answer: "The budget surfaces this shortfall before spending happens, so a deliberate choice can be made about which assignment to reduce, rather than discovering the gap later as an overdraft." },
      { question: "How often does a zero-based budget need to be rebuilt?", answer: "Each budgeting period (usually monthly), since income, bills, and goals can all change and the method relies on actual current numbers rather than a fixed template." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
