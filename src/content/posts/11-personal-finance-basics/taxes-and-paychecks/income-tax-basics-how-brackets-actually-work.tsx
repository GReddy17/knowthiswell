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
  title: "Income Tax Basics: How Brackets Actually Work",
  category: "personal-finance-basics",
  order: 32,
  subtopic: "taxes-and-paychecks",
  tags: ["tax brackets", "marginal tax rate", "effective tax rate", "progressive tax", "income tax basics"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Moving into a higher tax bracket doesn't tax your whole income at the higher rate — only the slice of income that falls inside that bracket gets taxed at it.",
  summary: "A progressive income tax system taxes income in slices: each bracket's rate applies only to the portion of income that falls within that bracket, not to the entire income once a higher bracket is reached — which is why the top rate you're 'in' (marginal rate) is always higher than the average rate you actually pay (effective rate).",
  sources: [
    { label: "IRS — Tax Brackets and Federal Income Tax Rates", url: "https://www.irs.gov/filing/federal-income-tax-rates-and-brackets" },
    { label: "Tax Policy Center — Briefing Book: How Do Federal Income Tax Rates Work", url: "https://www.taxpolicycenter.org/briefing-book" },
  ],
  seeAlso: [
    "personal-finance-basics/reading-a-pay-stub-what-each-line-means",
    "personal-finance-basics/understanding-tax-deductions-vs-tax-credits",
    "personal-finance-basics/what-withholding-means-and-why-refunds-happen",
  ],
  glossary: [
    {"term":"Marginal tax rate","definition":"The tax rate applied to the last (highest) slice of a person's income — the rate of the bracket their top dollar of income falls into, not their overall average rate."},
    {"term":"Effective tax rate","definition":"The average rate actually paid across all income, calculated as total tax owed divided by total income — always lower than or equal to the marginal rate in a progressive system."},
    {"term":"Progressive tax system","definition":"A tax structure where different slices (brackets) of income are taxed at different, increasing rates, so higher earners pay a higher rate only on the portion of income above each threshold."},
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
      "A progressive tax bracket applies only to the slice of income that falls inside it — not to a person's entire income once they cross into that bracket.",
      "This is why marginal tax rate (the rate on your last dollar earned) and effective tax rate (your actual average rate across all income) are different numbers, and effective rate is always the lower of the two.",
      "This entry uses an illustrative simplified two-bracket example to explain the mechanism — for actual current bracket thresholds and rates, see irs.gov, not this article.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A common misunderstanding is thinking that moving into a higher tax bracket means your entire income suddenly gets taxed at that higher rate. It doesn&apos;t. A <TermLink href="/personal-finance-basics/income-tax-basics-how-brackets-actually-work">progressive tax system</TermLink> taxes income in slices — the first slice at the lowest rate, the next slice (only the amount above the first threshold) at the next rate, and so on. Crossing into a new bracket only raises the rate on the portion of income that falls inside that new bracket, not on everything you earned.</div>}
      detailed={<div className="prose-p">This is the distinction between <TermLink href="/personal-finance-basics/income-tax-basics-how-brackets-actually-work">marginal tax rate</TermLink> and <TermLink href="/personal-finance-basics/income-tax-basics-how-brackets-actually-work">effective tax rate</TermLink>. Marginal rate is the rate applied to your last dollar earned — the bracket your top slice of income sits in. Effective rate is total tax owed divided by total income — a blended average across every bracket your income passed through on the way up. Because only the top slice is taxed at the marginal rate while every lower slice keeps its lower rate, effective rate is always less than or equal to marginal rate in a genuinely progressive system. A person &quot;in the 24% bracket&quot; is not paying 24% of their entire income — they&apos;re paying a lower blended rate, with only their top slice taxed at 24%.</div>}
      />
      <FootnoteAside>Real income tax systems (like the current U.S. federal system) typically have more than two brackets, and the exact thresholds and rates change periodically — always check irs.gov for the current-year numbers rather than treating any specific bracket figure as permanent.</FootnoteAside>

      <p>
      Once the slicing mechanism is clear, the arithmetic behind &quot;why a raise never leaves you worse off&quot; (a common, related worry) follows directly from it.
      </p>

      <QuickCheck
      question="Someone earning $95,000 is offered a raise to $105,000, and the $100,000 mark is the threshold into a higher tax bracket. Could taking the raise ever leave them with less take-home pay than before?"
      options={[
      { text: "Yes — once total income crosses $100,000, the entire $105,000 gets taxed at the higher bracket's rate", correct: false, explanation: "This describes a flat-tax system, not how progressive brackets actually work. Only the $5,000 above the $100,000 threshold is taxed at the higher rate — the first $100,000 keeps being taxed exactly as it was before the raise." },
      { text: "No — in a progressive bracket system, only the portion of income above $100,000 is taxed at the higher rate, so the raise can only ever increase take-home pay, never decrease it", correct: true, explanation: "Correct. This is the core mechanism of bracket-based taxation — a raise can never make someone worse off purely from crossing a bracket threshold, because only the newly-earned slice above the threshold faces the higher rate." },
      { text: "It depends entirely on the person's state of residence, with no connection to how federal brackets work", correct: false, explanation: "State tax systems vary, but the core question here is about how bracket-based taxation itself works, which follows the same slicing logic regardless of which specific jurisdiction's brackets are involved." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A simplified two-bracket calculation (baseline case)</h3>
      <div className="prose-p">
      Using an illustrative two-bracket system: 10% on income up to $50,000, and 22% on any income above $50,000. Someone earning $70,000 pays 10% on the first $50,000 ($5,000) plus 22% on the remaining $20,000 ($4,400), for a total of $9,400 — not 22% of the full $70,000 (which would be $15,400, a very different and incorrect number).
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Marginal vs effective rate on the same income (edge case / variation)</h3>
      <div className="prose-p">
      Same $70,000 earner from Example 1, owing $9,400 total. Their marginal rate is 22% (the rate on their last, highest dollar). Their effective rate is $9,400 ÷ $70,000 ≈ 13.4% — noticeably lower than the 22% marginal rate, because most of their income was still taxed at the lower 10% bracket. Someone describing themselves as being &quot;in the 22% bracket&quot; is accurately describing their marginal rate, but their actual overall tax burden (13.4%) is meaningfully smaller.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a raise can&apos;t reduce take-home pay through bracket-crossing alone (real-world / applied case)</h3>
      <div className="prose-p">
      Using the same two-bracket system, compare $95,000 of income to $105,000. At $95,000: 10% on $50,000 ($5,000) plus 22% on $45,000 ($9,900) = $14,900 owed, leaving $80,100 after tax. At $105,000: 10% on $50,000 ($5,000) plus 22% on $55,000 ($12,100) = $17,100 owed, leaving $87,900 after tax — still $7,800 more take-home pay than before, despite $5,000 of the raise now sitting in the higher bracket. The bracket only ever taxes the incremental slice; it never reaches back and re-taxes income that was already below the threshold.
      </div>

      <QuickCheck
      question="If effective tax rate is always less than or equal to marginal tax rate in a progressive system, when would the two be closest to equal?"
      options={[
      { text: "When someone's total income is entirely within the lowest bracket, so their marginal and effective rates are the same single rate", correct: true, explanation: "Correct. If all of a person's income falls within one bracket, every dollar is taxed at that same rate — so the marginal rate (rate on the last dollar) and effective rate (average rate overall) are identical in that specific case." },
      { text: "When someone's income is extremely high and spans many brackets", correct: false, explanation: "The opposite is generally true — the more brackets an income spans, the more of it was taxed at various lower rates on the way up, which tends to widen the gap between the (higher) marginal rate and the (lower) blended effective rate." },
      { text: "The two rates can never be equal under any circumstances", correct: false, explanation: "They can be exactly equal in the specific case where all income sits within a single bracket — there's no second, higher-rate slice pulling the effective rate down from the marginal rate." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Progressive taxation: only the slice above each threshold is taxed at the higher rate"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-income-tax-basics-how-brackets-actually-work-bracket-slices.svg"
      altText="A horizontal income bar divided into two segments: a lower segment from $0 to $50,000 labeled 10% tax rate, and an upper segment from $50,000 to $70,000 labeled 22% tax rate, with an arrow showing only the upper segment is taxed at the higher rate while the lower segment keeps its original 10% regardless of total income."
      />
      <p>
      The lower slice never changes rate no matter how much additional income stacks on top of it — each bracket&apos;s rate is locked to that specific slice of income, which is the entire mechanism behind why crossing a bracket boundary can&apos;t retroactively raise the tax on income already earned below it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Believing that crossing into a higher tax bracket means your entire income gets taxed at the new, higher rate.", fix: "Remember only the slice of income above the bracket threshold is taxed at the higher rate — every dollar below the threshold keeps its original, lower rate." },
      { mistake: "Using 'tax bracket' and 'effective tax rate' interchangeably.", fix: "Marginal rate (the bracket you're 'in') describes only your last dollar earned; effective rate is your actual average rate across all income, and it's always lower in a genuinely progressive system." },
      { mistake: "Turning down a raise or bonus out of fear it will result in less take-home pay overall.", fix: "In a progressive system, a raise can only ever increase total take-home pay — the higher rate applies only to the new, incremental income, never retroactively to income already earned." },
      ]}
      />
      <MisconceptionCallout
      myth="If you're 'in the 22% bracket,' you're paying 22% of your total income in tax."
      reality={<p>The 22% (or whatever bracket rate) applies only to the slice of income within that specific bracket — not to your total income. Your actual overall tax burden, the effective rate, blends in the lower rates paid on every slice of income below that bracket, and is always a lower number than the marginal rate itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Illustrative two-bracket progressive tax calculator (not real current IRS brackets)"
      fields={[
      { key: "income", label: "Total income ($)", defaultValue: 70000 },
      { key: "bracketThreshold", label: "Bracket threshold ($)", defaultValue: 50000 },
      { key: "lowRatePercent", label: "Lower bracket rate (%)", defaultValue: 10 },
      { key: "highRatePercent", label: "Upper bracket rate (%)", defaultValue: 22 },
      ]}
      resultLabel="Total tax owed (illustrative)"
      formula="progressiveTaxTwoBracket"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check irs.gov for the actual current-year federal tax brackets rather than relying on any specific number from a general reference article.",
      "When comparing your own tax situation, distinguish between your marginal rate (the bracket you're in) and your effective rate (your real average burden) — they answer different questions.",
      "Don't decline a raise or bonus out of a mistaken fear of bracket-crossing — in a progressive system, more gross income always means more net income, even after tax.",
      "For a real filing question specific to your income and deductions, consult a licensed tax professional rather than general literacy content like this.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Does moving into a higher tax bracket mean all my income is taxed at the higher rate?", answer: "No. Only the slice of income above the bracket threshold is taxed at the higher rate — income below the threshold keeps being taxed at the lower rate it always was." },
      { question: "What's the difference between marginal and effective tax rate?", answer: "Marginal rate is the rate on your last (highest) dollar of income — the bracket you're 'in.' Effective rate is total tax owed divided by total income, a blended average that's always lower than or equal to the marginal rate in a progressive system." },
      { question: "Can a raise ever leave me with less take-home pay because of taxes?", answer: "No, not from crossing a tax bracket threshold alone — a progressive system only taxes the newly-earned slice at the higher rate, so total after-tax income always increases with a raise, even if part of it falls in a higher bracket." },
      { question: "Where can I find the actual current tax brackets?", answer: "The IRS publishes current federal tax brackets and rates at irs.gov — always check there for real numbers rather than treating any example figure as current." },
      { question: "Why do some people say they're in a bracket but pay a much lower rate overall?", answer: "Because the bracket they cite is their marginal rate (their top slice), while their effective rate — the actual average across all their income — blends in the lower rates paid on every slice below that top bracket." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
