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
  title: "Common Tax Filing Terms Explained",
  category: "personal-finance-basics",
  order: 36,
  subtopic: "taxes-and-paychecks",
  tags: ["tax terms", "gross income", "AGI", "standard deduction", "filing status"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Gross income, AGI, taxable income, and filing status all sound similar but each means something distinct — and mixing them up is one of the easiest ways to misread a tax form or a tax bracket table.",
  summary: "A tax return moves through a specific sequence of terms — gross income, adjustments, adjusted gross income (AGI), deductions, taxable income, and filing status — each narrowing or classifying the number differently, and each playing a distinct role in how the final tax bill is calculated.",
  sources: [
    { label: "IRS — Definition of Adjusted Gross Income", url: "https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income" },
    { label: "IRS — Publication 501, Standard Deduction and Filing Information", url: "https://www.irs.gov/publications/p501" },
  ],
  seeAlso: [
    "personal-finance-basics/income-tax-basics-how-brackets-actually-work",
    "personal-finance-basics/understanding-tax-deductions-vs-tax-credits",
    "personal-finance-basics/reading-a-pay-stub-what-each-line-means",
  ],
  glossary: [
    {"term":"Gross income","definition":"Total income from all sources before any adjustments, deductions, or exemptions are applied."},
    {"term":"Adjusted gross income (AGI)","definition":"Gross income minus specific IRS-allowed adjustments, such as certain retirement contributions or student loan interest, used as the basis for many further tax calculations."},
    {"term":"Taxable income","definition":"Adjusted gross income minus either the standard deduction or itemized deductions, representing the actual amount tax rates are applied to."},
    {"term":"Filing status","definition":"A classification (such as single, married filing jointly, or head of household) that determines which tax brackets, standard deduction amount, and eligibility rules apply to a return."},
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
      "A tax return moves through a specific sequence: gross income → adjustments → adjusted gross income (AGI) → deductions → taxable income — each step narrows the number further.",
      "Filing status (single, married filing jointly, head of household, etc.) changes which tax brackets and standard deduction amount apply, independent of the income calculation itself.",
      "Confusing gross income, AGI, and taxable income is one of the most common ways people misjudge which tax bracket they're actually in.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Tax forms use several similar-sounding terms for what looks like &quot;your income,&quot; but each one means something different. <TermLink href="/personal-finance-basics/common-tax-filing-terms-explained">Gross income</TermLink> is everything you earned before anything is subtracted. <TermLink href="/personal-finance-basics/common-tax-filing-terms-explained">Adjusted gross income (AGI)</TermLink> is gross income after a specific set of IRS-allowed subtractions. <TermLink href="/personal-finance-basics/common-tax-filing-terms-explained">Taxable income</TermLink> is AGI after the standard deduction (or itemized deductions) is subtracted — and it&apos;s taxable income, not gross income, that tax brackets actually apply to. <TermLink href="/personal-finance-basics/common-tax-filing-terms-explained">Filing status</TermLink> is a separate classification that determines which specific bracket thresholds and deduction amounts apply to you.</div>}
      detailed={<div className="prose-p">Gross income includes wages, self-employment income, interest, dividends, and most other income sources, with essentially nothing subtracted yet. Certain &quot;adjustments to income&quot; — like specific retirement account contributions or student loan interest, subject to IRS rules and limits — are subtracted from gross income to get AGI; AGI is a load-bearing number used to determine eligibility for many other credits and deductions, not just an intermediate step. From AGI, either the standard deduction (a fixed dollar amount based on filing status) or itemized deductions (a taxpayer&apos;s actual eligible expenses, if they exceed the standard deduction) are subtracted to reach taxable income — the number that tax bracket rates are actually applied to. Filing status runs alongside this whole calculation rather than being a step within it: it sets the specific bracket thresholds, the standard deduction amount, and eligibility for certain credits, so two people with identical taxable income but different filing statuses can owe different amounts.</div>}
      />
      <FootnoteAside>Standard deduction amounts and specific adjustment rules are set and updated by the IRS each tax year — always check the current figures on irs.gov rather than relying on a prior year&apos;s numbers.</FootnoteAside>

      <p>
      Walking through where each term sits in the sequence makes the relationships concrete.
      </p>

      <QuickCheck
      question="Which of these is the number that tax bracket rates are actually applied to?"
      options={[
      { text: "Gross income", correct: false, explanation: "Gross income is the starting total before any adjustments or deductions — brackets aren't applied directly to this number." },
      { text: "Adjusted gross income (AGI)", correct: false, explanation: "AGI is an important intermediate number used for many eligibility calculations, but deductions still need to be subtracted from it before brackets are applied." },
      { text: "Taxable income — AGI minus the standard deduction or itemized deductions", correct: true, explanation: "Correct. Taxable income is the final narrowed-down number, after all adjustments and deductions, that tax bracket rates are actually applied to." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Walking the full sequence (baseline case)</h3>
      <div className="prose-p">
      Gross income: $60,000. Adjustments (e.g., a deductible retirement contribution): −$3,000, giving AGI of $57,000. Standard deduction for this filing status: −$14,600, giving taxable income of $42,400. Tax brackets apply to that final $42,400 — not to the original $60,000.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Same income, different filing status (edge case / variation)</h3>
      <div className="prose-p">
      Two taxpayers each have $42,400 in taxable income — one files as single, one as head of household. Because filing status changes the bracket thresholds and standard deduction amount used to arrive at that number, their actual tax bills can differ even with identical taxable income, since the bracket boundaries themselves shift by filing status.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why AGI matters beyond just the tax calculation (real-world / applied case)</h3>
      <div className="prose-p">
      A taxpayer wants to know if they qualify for a specific tax credit that has an AGI-based income limit. Even though their gross income is above the stated limit, their AGI — after allowed adjustments are subtracted — falls below it, making them eligible. This is a common reason AGI, not gross income, is the number to check first when looking at eligibility rules for credits or deductions.
      </div>

      <QuickCheck
      question="Why can two taxpayers with the exact same taxable income end up owing different amounts of tax?"
      options={[
      { text: "It's not possible — identical taxable income always produces an identical tax bill regardless of any other factor", correct: false, explanation: "Filing status changes which bracket thresholds apply to a given amount of taxable income, so identical taxable income can still produce different tax bills." },
      { text: "Because their filing statuses may differ, and filing status changes which bracket thresholds and rates apply to that taxable income", correct: true, explanation: "Correct. Filing status sets the specific bracket boundaries used — the same taxable income can fall into different effective rates depending on filing status." },
      { text: "Because taxable income is rounded differently depending on the taxpayer's state of residence", correct: false, explanation: "Rounding conventions aren't the mechanism here — filing status genuinely changes which federal bracket thresholds and standard deduction apply." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From gross income to taxable income, step by step"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-common-tax-filing-terms-explained-tax-terms-sequence.svg"
      altText="A vertical flow diagram: Gross Income, then an arrow labeled minus Adjustments leading to Adjusted Gross Income (AGI), then an arrow labeled minus Standard or Itemized Deductions leading to Taxable Income, with a side note that Filing Status determines the specific bracket thresholds and deduction amount used throughout."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming gross income and taxable income are the same number.", fix: "Remember taxable income is gross income minus adjustments and then minus deductions — it's always equal to or less than gross income." },
      { mistake: "Checking an income-based eligibility limit using gross income instead of AGI.", fix: "Read the specific rule carefully — many credits and deduction limits are based on AGI or a modified version of it, not gross income." },
      { mistake: "Assuming filing status doesn't matter if taxable income is already known.", fix: "Filing status changes the bracket thresholds themselves, so it affects the final tax bill even for an identical taxable income figure." },
      ]}
      />
      <MisconceptionCallout
      myth="Your gross income is the number your tax bracket and rate get applied to."
      reality={<p>Tax brackets apply to taxable income, which is gross income after adjustments and then deductions have been subtracted — a smaller number than gross income for nearly everyone. Confusing the two is a common reason people misjudge which bracket they&apos;re actually in.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When checking eligibility for a tax credit or deduction, confirm whether the limit is based on gross income, AGI, or taxable income — they're rarely interchangeable.",
      "Locate your AGI on last year's tax return (it's typically labeled clearly) to get familiar with where it sits relative to your gross income.",
      "Check the current year's standard deduction amount for your filing status on irs.gov before estimating your taxable income.",
      "For a specific eligibility question or filing decision, consult a licensed tax professional rather than general literacy content like this.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between gross income and AGI?", answer: "Gross income is total income before anything is subtracted. AGI (adjusted gross income) is gross income minus a specific set of IRS-allowed adjustments, such as certain retirement contributions or student loan interest." },
      { question: "What is taxable income?", answer: "Taxable income is AGI minus either the standard deduction or itemized deductions — it's the final number that tax bracket rates are actually applied to." },
      { question: "Does filing status change how much tax I owe?", answer: "Yes. Filing status determines which bracket thresholds and standard deduction amount apply, so two taxpayers with identical taxable income can owe different amounts if their filing status differs." },
      { question: "Why does AGI matter if it's not the final taxable amount?", answer: "AGI is used as the basis for determining eligibility for many other tax credits, deductions, and income limits, in addition to being a step on the way to taxable income." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
