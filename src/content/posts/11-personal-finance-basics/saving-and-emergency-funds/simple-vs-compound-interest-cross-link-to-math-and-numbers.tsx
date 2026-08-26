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
  title: "Simple vs. Compound Interest: What's the Real Difference?",
  category: "personal-finance-basics",
  order: 12,
  subtopic: "saving-and-emergency-funds",
  tags: ["simple interest", "compound interest", "savings math", "personal finance basics", "money math"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Simple interest is calculated only on the original amount every period. Compound interest is calculated on the original amount plus any interest already earned — which is why the gap between the two grows larger every year.",
  summary: "Simple interest pays a fixed amount each period based only on the original principal, while compound interest pays interest on the principal plus all previously earned interest, so the compound total grows faster the longer money sits — the same mathematical distinction covered generally in the site's math and numbers section, applied here directly to savings.",
  sources: [
    { label: "Consumer Financial Protection Bureau — How Interest Works", url: "https://www.consumerfinance.gov/consumer-tools/save-and-build-wealth/" },
    { label: "FDIC — Deposit Insurance Basics", url: "https://www.fdic.gov/deposit-insurance" },
    { label: "Federal Reserve — Selected Interest Rates (H.15)", url: "https://www.federalreserve.gov/releases/h15/" },
  ],
  seeAlso: [
    "personal-finance-basics/savings-accounts-explained-how-interest-actually-works",
    "personal-finance-basics/high-yield-savings-accounts-explained",
    "math-numbers/percentages-explained",
  ],
  glossary: [
    {"term":"Simple interest","definition":"Interest calculated only on the original principal amount for every period, regardless of how much interest has already accumulated."},
    {"term":"Compound interest","definition":"Interest calculated on the original principal plus any interest already earned, so each period's interest is calculated on a growing balance."},
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
      "Simple interest is calculated only on the original principal, every period, for as long as the money sits.",
      "Compound interest is calculated on the principal plus all interest already earned, which means the base it's calculated on keeps growing.",
      "The two methods produce identical results in year one — the gap only appears and then widens starting in year two.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers">Simple interest</TermLink> pays the same dollar amount every year because it&apos;s always calculated on the original deposit. <TermLink href="/personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers">Compound interest</TermLink> pays a growing dollar amount every year because each year&apos;s interest gets added to the balance the next year&apos;s interest is calculated on — interest earning interest, essentially.</div>}
      detailed={<div className="prose-p">Almost all everyday savings and checking accounts pay compound interest, not simple interest — simple interest shows up more often in certain loan structures or short-term calculations used for comparison. The mathematical difference is straightforward: simple interest for principal P at rate r over t years is P × r × t, a straight line that grows by the same fixed amount every year. Compound interest is P × (1 + r)^t, a curve that grows faster each year because the base amount itself increases. This is the same exponential-growth pattern covered more generally in the site&apos;s math and numbers section on percentages and growth — savings interest is simply one concrete, dollar-denominated application of that same underlying math.</div>}
      />
      <FootnoteAside>Banks are required to disclose the Annual Percentage Yield (APY) for deposit accounts, which already accounts for compounding frequency — so comparing APY figures directly between two accounts is a fair comparison even if one compounds daily and the other compounds monthly.</FootnoteAside>

      <p>
      The examples below use the same principal and rate under both methods so the growing gap is easy to see directly.
      </p>

      <QuickCheck
      question="In year one, how do simple interest and compound interest amounts compare on the same principal and rate?"
      options={[
      { text: "Compound interest is always higher, even in year one", correct: false, explanation: "In the very first period, there's no prior interest yet to compound on, so simple and compound interest produce the identical dollar amount." },
      { text: "They produce the identical result in year one, since there's no previously earned interest yet for compounding to act on", correct: true, explanation: "Correct. The gap between the two methods only starts to appear from year two onward, once compound interest has interest-on-interest to work with." },
      { text: "Simple interest is always higher, even in year one", correct: false, explanation: "Simple interest doesn't front-load any advantage — year one is identical between the two methods; simple interest only becomes lower starting in later years." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: $5,000 at 4% over 3 years (baseline case)</h3>
      <div className="prose-p">
      Simple interest: $5,000 × 4% × 3 = $600 total interest, ending balance $5,600. Compound interest: $5,000 × (1.04)^3 ≈ $5,624.32, about $624.32 total interest. The compound total is about $24 higher after just 3 years — a small but real gap that starts to build.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same $5,000 at 4% over 20 years (edge case / long horizon)</h3>
      <div className="prose-p">
      Simple interest over 20 years: $5,000 × 4% × 20 = $4,000 total interest, ending balance $9,000. Compound interest over 20 years: $5,000 × (1.04)^20 ≈ $10,955.61, about $5,955.61 total interest. Over a 20-year horizon, compounding nearly triples the interest earned compared to simple interest on the identical principal and rate — the gap doesn&apos;t grow in a straight line, it accelerates.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why compounding frequency also matters (real-world / applied case)</h3>
      <div className="prose-p">
      Two accounts can both advertise a 4% annual rate, but one compounds monthly and the other compounds annually. The monthly-compounding account effectively earns a slightly higher APY, because interest gets added to the balance twelve times a year instead of once — each of those additions then earns its own interest for the rest of the year. This is exactly why comparing accounts by APY (which already accounts for compounding frequency) rather than by the stated nominal rate alone gives an accurate comparison.
      </div>

      <QuickCheck
      question="Two savings accounts both advertise the same 4% nominal annual rate, but one compounds monthly and the other compounds annually. Will they earn the exact same amount of interest over a year?"
      options={[
      { text: "Yes, the nominal rate is 4% for both, so the dollar interest earned will be identical", correct: false, explanation: "Compounding frequency changes the effective yield even at the identical nominal rate — the monthly-compounding account earns interest on interest more often within the year." },
      { text: "No — the monthly-compounding account will typically earn slightly more, since interest is added to the balance more often and starts earning its own interest sooner", correct: true, explanation: "Correct. This is exactly why APY (which factors in compounding frequency) rather than the nominal rate is the fair number to compare between accounts." },
      { text: "No — the annually-compounding account will always earn more because interest accumulates in a single larger sum", correct: false, explanation: "More frequent compounding increases, not decreases, the effective yield — the annual account doesn't get an advantage from compounding just once." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Simple interest (straight line) vs. compound interest (curve)"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-simple-vs-compound-interest-cross-link-to-math-and-numbers-line-vs-curve.svg"
      altText="A chart showing simple interest growing as a straight line and compound interest growing as an upward curve, both starting from the same principal, with the curve pulling further above the line each year."
      />
      <p>
      The straight line represents a fixed dollar amount added every year; the curve represents a dollar amount that itself gets larger every year, since it&apos;s calculated on an ever-growing balance.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming simple and compound interest will always produce noticeably different results.", fix: "Check the time horizon — over a single year, the two methods produce identical results; the difference only becomes meaningful over multiple years." },
      { mistake: "Comparing two accounts by their nominal annual rate instead of their APY.", fix: "Compare APY directly, since it already accounts for how often each account compounds — nominal rate alone can be misleading." },
      { mistake: "Assuming compounding only benefits savers and never costs borrowers.", fix: "Recognize that compound interest works the same way on debt — credit card balances that aren't paid off in full compound against the borrower, which is why carried balances grow quickly." },
      ]}
      />
      <MisconceptionCallout
      myth="Compound interest and simple interest are two totally different types of financial products, not two ways of calculating the same thing."
      reality={<p>Simple and compound interest are two different calculation methods, not two different products — the same $5,000 deposit at the same 4% rate produces different totals depending only on which calculation method applies. Nearly all everyday deposit accounts use compound interest; the comparison matters mainly for understanding why a long-term balance grows faster than a straight-line estimate would suggest.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Simple interest total"
      fields={[
      { key: "principal", label: "Principal ($)", defaultValue: 5000 },
      { key: "rate", label: "Annual rate (%)", defaultValue: 4, step: 0.1 },
      { key: "years", label: "Years", defaultValue: 3, step: 1 },
      ]}
      resultLabel="Interest earned (simple)"
      formula="simpleInterest"
      formatResult="currency"
      />
      <EntryCalculator
      title="Compound growth total"
      fields={[
      { key: "principal", label: "Principal ($)", defaultValue: 5000 },
      { key: "rate", label: "Annual rate (%)", defaultValue: 4, step: 0.1 },
      { key: "years", label: "Years", defaultValue: 3, step: 1 },
      ]}
      resultLabel="Ending balance (compound)"
      formula="compoundGrowth"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Compare savings accounts by APY, not by the nominal rate alone, since APY already reflects compounding frequency.",
      "Use the compound growth calculator above (not simple interest) to estimate realistic long-term savings growth in an ordinary deposit account.",
      "Remember that compounding works against you on debt too — an unpaid credit card balance compounds the same way a savings balance does.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Do savings accounts use simple or compound interest?", answer: "Nearly all everyday savings and checking accounts use compound interest, typically compounding daily or monthly and crediting the account periodically." },
      { question: "Why do simple and compound interest give the same result in year one?", answer: "Because there's no previously earned interest yet for compounding to act on — the gap only appears starting in year two, once compound interest has interest-on-interest to calculate." },
      { question: "Is a higher compounding frequency always better for a saver?", answer: "Yes, all else being equal, more frequent compounding produces a slightly higher effective yield — this is exactly why APY, which accounts for compounding frequency, is the fairer number to compare between accounts." },
      { question: "Does compound interest apply to debt as well as savings?", answer: "Yes — an unpaid balance on a compounding debt, such as a credit card, grows the same way a compounding savings balance does, which is why carried balances can grow quickly if not paid down." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
