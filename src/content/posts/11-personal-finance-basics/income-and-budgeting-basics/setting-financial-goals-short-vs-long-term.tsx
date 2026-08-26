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
  title: "Setting Financial Goals (Short vs Long Term)",
  category: "personal-finance-basics",
  order: 8,
  subtopic: "income-and-budgeting-basics",
  tags: ["financial goals", "short-term goals", "long-term goals", "personal finance basics", "goal setting"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Financial goals are typically grouped by time horizon — short-term (under a year), medium-term (one to five years), and long-term (five-plus years) — because the time horizon determines how the money for that goal should be saved or invested.",
  summary: "Setting financial goals means defining a specific target amount and timeframe, then grouping goals by how soon the money is needed (short, medium, or long term), since the appropriate savings or investment approach differs sharply based on that timeframe.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
    { label: "U.S. Securities and Exchange Commission — Saving and Investing", url: "https://www.investor.gov/introduction-investing/investing-basics/save-and-invest" },
  ],
  seeAlso: [
    "personal-finance-basics/understanding-net-worth-assets-minus-liabilities",
    "personal-finance-basics/zero-based-budgeting-explained",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
  ],
  glossary: [
    {"term":"Financial goal","definition":"A specific target amount of money to be saved or paid off by a defined date, used to guide budgeting and saving decisions."},
    {"term":"Time horizon","definition":"The length of time between now and when a financial goal's target date arrives, used to determine an appropriate savings or investment approach."},
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
        <strong>This entry explains how financial goals are typically categorized — it is financial literacy, not personalized advice.</strong> Which savings or investment vehicles fit a specific goal depends on individual circumstances and risk tolerance; a financial advisor can help with that decision.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Financial goals are grouped by time horizon — short-term (under a year), medium-term (one to five years), and long-term (five-plus years) — because the horizon determines the appropriate way to hold the money.",
          "A specific, dated goal (\"$3,000 for a car repair fund by next June\") is more actionable than a vague one (\"save more money\") because it defines exactly how much needs to be set aside and by when.",
          "Mismatching a goal's time horizon with how the money is held — for example, investing a short-term goal's funds in a volatile asset — creates the risk of the money losing value right when it's needed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A financial goal is just a specific amount of money someone wants to have by a certain date, for a certain purpose — a vacation, a car repair fund, a house down payment, retirement. Goals get grouped by how soon the money is needed: short-term goals (within a year, like a holiday fund) usually sit in a regular savings account since the money needs to stay safe and accessible. Long-term goals (five-plus years away, like retirement) have more room to ride out ups and downs, so they&apos;re more often invested for growth. The time horizon is really what should drive the decision of where to put the money.</div>}
        detailed={<div className="prose-p">A well-formed <TermLink href="/personal-finance-basics/setting-financial-goals-short-vs-long-term">financial goal</TermLink> specifies three things: a target amount, a target date, and a purpose — vague intentions like &quot;save more&quot; don&apos;t translate into an actionable monthly savings figure the way &quot;$3,000 by next June for a car repair fund&quot; does. Goals are typically bucketed by <TermLink href="/personal-finance-basics/setting-financial-goals-short-vs-long-term">time horizon</TermLink>: short-term (under one year), medium-term (one to five years), and long-term (five-plus years). This bucketing matters because time horizon determines the appropriate tradeoff between safety and growth potential — a short-term goal&apos;s funds generally belong somewhere stable and immediately accessible (a savings account), since there&apos;s little time to recover from a decline in value right before the money is needed, while a long-term goal has enough time to potentially ride out volatility in pursuit of higher growth.</div>}
      />
      <FootnoteAside>The CFPB&apos;s goal-setting materials in its &quot;Your Money, Your Goals&quot; toolkit consistently emphasize specificity — a dollar amount and a date — as the single biggest factor separating goals people actually reach from ones that stay vague intentions indefinitely.</FootnoteAside>

      <p>
        The time-horizon grouping mainly exists to guide one practical decision: where the money for a given goal should sit while it accumulates.
      </p>

      <QuickCheck
        question="Someone is saving for a house down payment they expect to make in 18 months. Which time-horizon bucket does this goal fall into, and what does that suggest about where to hold the funds?"
        options={[
          { text: "Short-term (under a year), so the funds should be invested aggressively to maximize growth before the purchase", correct: false, explanation: "18 months falls into the medium-term bucket, not short-term — and even for medium-term goals, aggressive investing carries meaningful risk of loss right before the money is needed." },
          { text: "Medium-term (one to five years), which generally favors safer, more accessible options over volatile investments, since there's limited time to recover from a decline in value before the money is needed", correct: true, explanation: "Correct. 18 months sits in the one-to-five-year medium-term range, where the priority is typically preserving the funds' value and keeping them accessible rather than maximizing growth." },
          { text: "Long-term (five-plus years), so it doesn't matter where the funds are held", correct: false, explanation: "18 months is well short of the five-plus-year long-term range — and time horizon does matter for where funds are held, regardless of which bucket a goal falls into." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A short-term goal with a clear monthly savings target (baseline case)</h3>
      <div className="prose-p">
        Someone wants $2,400 saved in 12 months for a holiday fund. Dividing the goal by the number of months gives the monthly savings target: $2,400 ÷ 12 = $200 per month. This single number turns a vague intention into a concrete, checkable monthly action.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Multiple goals with different horizons competing for the same budget (edge case / variation)</h3>
      <div className="prose-p">
        A household has three goals at once: a $1,200 short-term car repair fund (6 months away), a $15,000 medium-term down payment fund (3 years away), and long-term retirement saving. With a limited amount available each month for saving, they prioritize the short-term goal first (since it&apos;s both urgent and a relatively small amount), while contributing smaller ongoing amounts to the medium- and long-term goals in parallel — rather than fully funding one goal before starting the others.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A goal&apos;s time horizon shortening as the deadline approaches (real-world / applied case)</h3>
      <div className="prose-p">
        Someone set a long-term goal five years ago to save for a home down payment, contributing to an investment account meant for higher growth over that horizon. As the goal approaches its final year, it has effectively become a short-term goal — the same time-horizon logic that justified investing five years ago now suggests to shift toward safer, more accessible savings, since there&apos;s much less time left to recover from a decline in value right before the money is needed for the purchase.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Financial goals grouped by time horizon"
        type="comparison"
        svgSrc="/diagrams/personal-finance-basics-setting-financial-goals-short-vs-long-term-time-horizon-buckets.svg"
        altText="Three buckets arranged left to right: Short-Term (under 1 year, favoring safety and accessibility), Medium-Term (1 to 5 years, balancing safety and modest growth), and Long-Term (5-plus years, more room for growth-oriented approaches), each labeled with an example goal."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Setting a vague goal (\"save more this year\") with no specific target amount or date.", fix: "Define every goal with a specific dollar amount and target date, so it can be broken into a concrete monthly savings figure." },
          { mistake: "Holding short-term goal funds in a volatile, growth-oriented vehicle where a downturn right before the deadline could shrink the available amount.", fix: "Match each goal's time horizon to an appropriately safe and accessible place to hold the funds — the shorter the horizon, the more that safety and accessibility should be prioritized over growth potential." },
          { mistake: "Waiting to start a long-term goal until all short-term goals are fully funded first.", fix: "Contribute to short-, medium-, and long-term goals in parallel where possible, since long-term goals benefit disproportionately from starting earlier." },
        ]}
      />
      <MisconceptionCallout
        myth="Only large goals like retirement count as real financial goals — small short-term savings targets don't need the same structure."
        reality={<p>The same specificity (a target amount and a target date) that makes a long-term goal actionable applies just as much to a small short-term one. A $300 goal for a specific purchase in two months benefits from the same clear monthly target-setting as a $300,000 retirement goal — the size of the goal doesn&apos;t change the value of defining it clearly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Months-to-Goal Calculator"
        formula="monthsToSavingsGoal"
        fields={[
          { key: "goalAmount", label: "Goal amount", defaultValue: 2400, step: 50 },
          { key: "monthlySavings", label: "Monthly savings", defaultValue: 200, step: 10 },
        ]}
        resultLabel="Months to reach goal"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Write down each financial goal with a specific dollar amount and target date.",
          "Sort goals into short-term (under 1 year), medium-term (1-5 years), and long-term (5-plus years) buckets.",
          "For each goal, divide the target amount by the number of months remaining to get a monthly savings target.",
          "Match where each goal's funds are held to its time horizon, favoring safety and accessibility for shorter horizons.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What counts as a short-term vs long-term financial goal?", answer: "Short-term goals are typically under a year away, medium-term goals fall between one and five years, and long-term goals are five-plus years out. The exact cutoffs vary by source, but the underlying idea — grouping by how soon the money is needed — stays consistent." },
          { question: "Why does the time horizon of a goal matter?", answer: "It determines the appropriate tradeoff between safety and growth potential for where the money is held. Shorter horizons generally favor safer, more accessible options since there's less time to recover from a decline in value before the money is needed." },
          { question: "How do I set a realistic financial goal?", answer: "Define a specific target amount and target date, then divide the amount by the number of months remaining to get a concrete monthly savings figure that can be checked against what's actually feasible in a budget." },
          { question: "Should I focus on one financial goal at a time or several at once?", answer: "Many households contribute to short-, medium-, and long-term goals in parallel rather than fully funding one before starting another, since long-term goals in particular benefit from starting as early as possible." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
