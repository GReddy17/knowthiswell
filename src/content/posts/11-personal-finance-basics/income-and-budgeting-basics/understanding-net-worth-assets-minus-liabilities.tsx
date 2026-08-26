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
  title: "Understanding Net Worth (Assets Minus Liabilities)",
  category: "personal-finance-basics",
  order: 7,
  subtopic: "income-and-budgeting-basics",
  tags: ["net worth", "assets and liabilities", "personal finance basics", "financial statements", "money management"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Net worth is a single number — total assets minus total liabilities — that summarizes overall financial position at a point in time, distinct from income, which measures cash flow over a period.",
  summary: "Net worth is calculated by subtracting everything owed (liabilities) from everything owned of value (assets), producing a single snapshot figure that reflects overall financial position rather than income or cash flow.",
  sources: [
    { label: "Federal Reserve — Survey of Consumer Finances", url: "https://www.federalreserve.gov/econres/scfindex.htm" },
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
    "personal-finance-basics/setting-financial-goals-short-vs-long-term",
    "personal-finance-basics/tracking-spending-methods-and-tools",
  ],
  glossary: [
    {"term":"Net worth","definition":"The value of everything a person owns (assets) minus everything they owe (liabilities), calculated as a single number at a specific point in time."},
    {"term":"Liability","definition":"A financial obligation or debt owed to another party, such as a mortgage balance, credit card balance, or student loan."},
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
        <strong>This entry explains how net worth is calculated — it is financial literacy, not personalized advice.</strong> What counts as a healthy net worth varies widely by age, location, and circumstances; a financial advisor can help interpret an individual figure.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Net worth equals total assets minus total liabilities — a single snapshot number, not a rate of income or spending.",
          "Assets are anything of monetary value owned (cash, investments, property); liabilities are anything owed (loans, credit card balances, mortgages).",
          "Net worth can be negative — this is common early in adulthood (student loans, no assets yet) and isn't itself a sign of financial distress.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Net worth is what someone would theoretically have left if they sold everything they own and paid off everything they owe. Add up the value of everything owned — cash, a car, a house, retirement accounts — then subtract everything owed — credit card balances, a mortgage, student loans, a car loan. Whatever&apos;s left is the net worth. It can be positive or negative, and it&apos;s different from income, which is about money coming in over time, not a total snapshot.</div>}
        detailed={<div className="prose-p"><TermLink href="/personal-finance-basics/understanding-net-worth-assets-minus-liabilities">Net worth</TermLink> is calculated as total assets minus total <TermLink href="/personal-finance-basics/understanding-net-worth-assets-minus-liabilities">liabilities</TermLink>, evaluated at one specific moment rather than over a period. Assets are typically split into liquid assets (cash, checking/savings balances) and non-liquid or illiquid assets (retirement accounts, home equity, vehicles) — the distinction matters because liquid assets can cover an expense immediately, while illiquid assets generally take time or cost something to convert to cash. Liabilities include both short-term debt (credit card balances) and long-term debt (mortgages, student loans). Net worth is a stock measure (a snapshot at a point in time), which makes it fundamentally different from income, a flow measure (an amount over a period) — a high earner with high debt can have a lower net worth than a modest earner who has saved consistently.</div>}
      />
      <FootnoteAside>The Federal Reserve&apos;s Survey of Consumer Finances is the primary source used by economists to track how net worth is distributed across U.S. households by age, income, and other factors — it&apos;s conducted roughly every three years and consistently shows net worth rising with age for most households, since assets like home equity and retirement savings accumulate over decades.</FootnoteAside>

      <p>
        Understanding which side of the equation something belongs on — asset or liability — is the most common point of confusion.
      </p>

      <QuickCheck
        question="A person owns a home worth $300,000 with a $220,000 mortgage balance remaining. How should this be reflected in a net worth calculation?"
        options={[
          { text: "The home isn't counted at all since it has a mortgage against it", correct: false, explanation: "The home is still an asset with real value — it's counted in full on the asset side, with the mortgage balance counted separately on the liability side." },
          { text: "The home's full $300,000 value counts as an asset, and the $220,000 mortgage balance counts separately as a liability — the net effect on net worth from this one item is $80,000 ($300,000 minus $220,000)", correct: true, explanation: "Correct. Assets and liabilities are counted on their own sides of the equation; the home contributes $300,000 in assets and $220,000 in liabilities, for a net contribution of $80,000 to overall net worth." },
          { text: "Only the $80,000 of home equity should be listed, with no separate liability entry", correct: false, explanation: "While the net effect is $80,000, a proper net worth statement lists the full asset value and the full liability separately — combining them into a single equity figure skips the detail of how much is owned outright versus how much is still owed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A simple net worth calculation (baseline case)</h3>
      <div className="prose-p">
        Someone has $3,000 in a checking account, $8,000 in a retirement account, and a car worth $12,000, for total assets of $23,000. They owe $2,000 on a credit card and $9,000 on a car loan, for total liabilities of $11,000. Net worth: $23,000 − $11,000 = $12,000.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Negative net worth early in adulthood (edge case / variation)</h3>
      <div className="prose-p">
        A recent graduate has $1,500 in savings and no other significant assets, for total assets of $1,500. They have $35,000 in student loans, for total liabilities of $35,000. Net worth: $1,500 − $35,000 = −$33,500. This negative figure is common for recent graduates with education debt and doesn&apos;t by itself indicate financial trouble — it reflects an investment (education) whose return (higher future earning potential) isn&apos;t captured as a dollar-value asset on the balance sheet.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Net worth changing over time as debt is paid down (real-world / applied case)</h3>
      <div className="prose-p">
        A household tracks net worth annually. Year one: $150,000 in assets (mostly home equity and retirement accounts), $130,000 in liabilities (mortgage and a car loan), for a net worth of $20,000. By year five, the mortgage balance has dropped through regular payments, the home has appreciated, and retirement contributions have grown — assets are now $210,000 and liabilities are $95,000, for a net worth of $115,000. Tracking net worth annually (rather than obsessively) shows the trend of overall financial position, which is more informative than any single year&apos;s number.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Net worth as the balance between assets and liabilities"
        type="comparison"
        svgSrc="/diagrams/personal-finance-basics-understanding-net-worth-assets-minus-liabilities-balance-scale.svg"
        altText="A balance-scale diagram with 'Assets' (cash, investments, property) on the left pan and 'Liabilities' (loans, credit card balances, mortgages) on the right pan, with 'Net Worth' labeled below as the difference between the two sides, which can tip positive or negative."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Confusing net worth with income, treating a high salary as automatically meaning a high net worth.", fix: "Remember net worth is a snapshot of assets minus liabilities, unrelated to how much is earned in a given period — a high earner can have low or negative net worth if spending and debt outpace saving." },
          { mistake: "Leaving out smaller liabilities (a personal loan, a buy-now-pay-later balance) when calculating total debt.", fix: "List every liability, even small ones, since omitting them overstates net worth and can mask a less healthy financial position than it appears." },
          { mistake: "Treating a single net worth number as a verdict on financial success or failure.", fix: "Track net worth over time (annually) rather than judging one number in isolation — the trend matters more than any single snapshot, especially early in adulthood." },
        ]}
      />
      <MisconceptionCallout
        myth="A negative net worth means someone is in financial trouble."
        reality={<p>Negative net worth is common and often expected at certain life stages — most notably right after taking on student loans or a mortgage, before assets have had time to accumulate. It becomes a concern mainly when it&apos;s persistent or trending more negative over time, not simply because it&apos;s below zero at a single point.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Net Worth Calculator"
        formula="netWorth"
        fields={[
          { key: "totalAssets", label: "Total assets", defaultValue: 23000, step: 100 },
          { key: "totalLiabilities", label: "Total liabilities", defaultValue: 11000, step: 100 },
        ]}
        resultLabel="Net worth"
        formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "List every asset you own with its current estimated value (cash, investments, property, vehicles).",
          "List every liability you owe with its current balance (loans, credit cards, mortgages).",
          "Subtract total liabilities from total assets to get a single net worth figure.",
          "Recalculate annually (or at a regular interval) and track the trend rather than judging a single snapshot.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is net worth?", answer: "Net worth is the total value of everything a person owns (assets) minus everything they owe (liabilities), calculated at a single point in time." },
          { question: "Is it normal to have a negative net worth?", answer: "Yes — it's common early in adulthood, particularly for people with student loans or little accumulated savings yet. It becomes more of a concern if it persists or worsens over many years rather than at a single early snapshot." },
          { question: "How is net worth different from income?", answer: "Income measures money earned over a period (a flow); net worth measures total assets minus liabilities at one moment (a snapshot). A high income doesn't automatically mean a high net worth." },
          { question: "How often should I calculate my net worth?", answer: "Once a year is a common interval — frequent enough to see a meaningful trend, infrequent enough to avoid overreacting to short-term market swings in asset values." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
