import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
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
  title: "Interest: Simple vs Compound (cross-link to Personal Finance topic)",
  category: "math-numbers",
  order: 38,
  subtopic: "applied-and-everyday-math",
  tags: [
    "simple interest",
    "compound interest",
    "exponential growth",
    "interest math",
    "rule of 72",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The math difference between simple and compound interest, why compounding pulls ahead over time, and how the Rule of 72 quickly estimates doubling time.",
  summary: "Simple interest grows a balance by a fixed amount every period based only on the original principal, while compound interest grows it by a percentage of the current balance, which includes previously earned interest — a difference that widens dramatically over long time spans.",
  sources: [
    { label: "Investor.gov (U.S. SEC) — Compound Interest Calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" },
    { label: "Khan Academy — Personal Finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance" },
    { label: "Federal Reserve Bank of St. Louis — Economic Education", url: "https://www.stlouisfed.org/education" },
  ],
  seeAlso: [
    "math-numbers/math-behind-discounts-and-sales",
    "math-numbers/math-for-budgeting-and-shopping",
    "math-numbers/percentages-explained",
  ],
  glossary: [
    { term: "Principal", definition: "The original amount of money deposited or borrowed, before any interest is added." },
    { term: "Simple interest", definition: "Interest calculated only on the original principal each period, so it grows a balance by a fixed dollar amount every cycle." },
    { term: "Compound interest", definition: "Interest calculated on the current balance — original principal plus previously earned interest — so the dollar amount it adds grows larger each period." },
    { term: "Rule of 72", definition: "A quick estimation shortcut: dividing 72 by an annual interest rate (as a whole number, not a decimal) gives an approximate number of years for an amount to double under compound growth." },
    { term: "Compounding frequency", definition: "How often interest is calculated and added to a balance — annually, monthly, or daily — with more frequent compounding producing slightly faster growth at the same stated annual rate." },
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
      "Simple interest grows a balance by a fixed dollar amount every period, calculated only on the original principal — it's linear growth.",
      "Compound interest grows a balance based on the current total (principal plus previously earned interest), so the dollar amount it adds gets larger every period — it's exponential growth.",
      "The gap between simple and compound interest is small over short periods but becomes dramatic over long ones — this is why compounding is often called the most powerful force in long-term saving and the most costly one in long-term debt.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic">Simple interest</TermLink> pays you the same dollar amount every period, based only on your starting balance. Put $1,000 in an account earning 5% simple interest, and you get $50 every year, forever, no matter how large your balance has grown from past interest. <TermLink href="/math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic">Compound interest</TermLink> instead pays interest on your whole current balance, including interest you&apos;ve already earned — so the $50 you earn in year one starts earning its own interest in year two, and the dollar amounts get larger every year instead of staying flat.</div>}
      detailed={<div className="prose-p">Simple interest follows A = P(1 + rt), where P is the <TermLink href="/math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic">principal</TermLink>, r is the annual rate as a decimal, and t is time in years — this is linear growth, adding a constant amount (P × r) each year. Compound interest follows A = P(1 + r)^t (for annual compounding), which is exponential growth — each year&apos;s interest is calculated on the previous year&apos;s ending balance, not the original principal, so the growth curve gets steeper over time rather than staying a straight line. A useful mental shortcut for compound growth is the <TermLink href="/math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic">Rule of 72</TermLink>: dividing 72 by the annual interest rate (as a whole number) gives a rough estimate of how many years it takes an amount to double — at 6% annual compound growth, 72 ÷ 6 = 12 years to double, without needing to solve the exponential equation directly. <TermLink href="/math-numbers/interest-simple-vs-compound-cross-link-to-personal-finance-topic">Compounding frequency</TermLink> also matters at the margins: a 6% annual rate compounded monthly grows slightly faster than the same 6% compounded just once a year, because each month&apos;s interest starts earning its own interest sooner.</div>}
      />
      <FootnoteAside>Albert Einstein is very widely quoted as having called compound interest &quot;the eighth wonder of the world&quot; or &quot;the most powerful force in the universe&quot; — but no reliable primary source for either quote has ever been found in his verified writings or speeches, making it one of the most persistent misattributed quotes in personal finance writing.</FootnoteAside>

      <p>
      The formulas above look similar on paper, but the practical gap between them only becomes obvious once you run the same principal, rate, and time through both side by side.
      </p>

      <QuickCheck
      question="$1,000 is invested for 20 years at a 5% annual rate. Which grows to a larger amount: simple interest or compound interest (compounded annually)?"
      options={[
      { text: "They grow to the same amount, since the rate and time are identical", correct: false, explanation: "Identical rate and time doesn't mean identical growth — the two formulas apply that rate differently. Simple interest applies it only to the original principal every year; compound interest applies it to a growing balance." },
      { text: "Compound interest grows to a larger amount, because each year's interest is calculated on a growing balance instead of a fixed original amount", correct: true, explanation: "Correct. Simple interest reaches $1,000 × (1 + 0.05 × 20) = $2,000. Compound interest reaches $1,000 × (1.05)^20 ≈ $2,653.30 — meaningfully more, because interest is earning interest." },
      { text: "Simple interest grows to a larger amount, because it doesn't get reduced by compounding fees", correct: false, explanation: "There's no 'compounding fee' concept here — compound interest isn't smaller because of fees, it's actually larger, because interest is calculated on an ever-growing balance instead of a fixed one." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Simple interest on a fixed deposit (baseline case)</h3>
      <div className="prose-p">
      $2,000 deposited at 4% simple annual interest for 5 years: A = 2,000 × (1 + 0.04 × 5) = 2,000 × 1.20 = $2,400. Each of the 5 years contributes exactly $80 in interest (2,000 × 0.04), for a total of $400 in interest over the 5 years — a flat, predictable, linear amount every year.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same numbers under compound interest, and how the gap grows with time (edge case / variation)</h3>
      <div className="prose-p">
      The same $2,000 at 4% compounded annually for 5 years: A = 2,000 × (1.04)^5 ≈ $2,433.31 — about $33 more than the simple interest result over 5 years, a modest difference. Extend the same comparison to 30 years: simple interest reaches 2,000 × (1 + 0.04 × 30) = 2,000 × 2.20 = $4,400, while compound interest reaches 2,000 × (1.04)^30 ≈ $6,486.80 — a gap of over $2,000, more than the entire original principal. The short-term gap looked negligible; the long-term gap does not. This is the core reason the two methods can seem &quot;close enough to not matter&quot; over a few years while diverging sharply over decades.
      </div>

      <QuickCheck
      question="Over a short time span (a few years), the difference between simple and compound interest on the same principal and rate is often small. Does this mean the choice between them 'doesn't matter much' in general?"
      options={[
      { text: "Yes, since the two are always close in value regardless of the time span", correct: false, explanation: "The two methods are close only over short time spans. Extended over decades, compound interest's exponential growth pulls dramatically ahead of simple interest's linear growth — the gap is far from negligible long-term." },
      { text: "No — the gap between simple and compound interest starts small but grows dramatically larger the longer the time span, so the choice matters far more for long-term money", correct: true, explanation: "Correct. Over 5 years the gap might be a few dollars; over 30 years, on the same principal and rate, it can exceed the entire original principal — compounding's exponential curve gets steeper with time in a way simple interest's straight line never does." },
      { text: "No, because simple interest is only used for short-term loans and compound interest is only used for long-term ones, so they're never actually compared", correct: false, explanation: "Both simple and compound interest appear across short-term and long-term products (some loans and bonds use simple interest for decades, some savings accounts compound over just months) — they're genuinely comparable across any timeframe, which is exactly why the growing gap matters." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using the Rule of 72 to estimate doubling time (real-world / applied case)</h3>
      <div className="prose-p">
      An investment grows at an average annual compound rate of 8%. Rather than solving 2 = (1.08)^t directly, the Rule of 72 estimates it instantly: 72 ÷ 8 = 9 years to roughly double. Checking against the exact exponential formula: (1.08)^9 ≈ 1.999 — essentially exactly double, confirming the shortcut&apos;s accuracy at this rate. The same shortcut applied to debt is a genuine warning sign: a credit card balance compounding at a 24% annual rate would double in about 72 ÷ 24 = 3 years if left completely unpaid — a fast, concrete illustration of why compounding works exactly as powerfully against a borrower carrying debt as it does for a saver building wealth.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Simple interest (straight line) vs. compound interest (curve) on $2,000 at 4% over 30 years"
      type="comparison"
      svgSrc="/diagrams/math-numbers-interest-simple-vs-compound-growth-chart.svg"
      altText="A line chart with years from 0 to 30 on the horizontal axis and account balance in dollars on the vertical axis, showing two lines starting together at $2,000: a straight diagonal line labeled Simple interest reaching $4,400 at year 30, and a curve labeled Compound interest that tracks close to the straight line for the first several years before bending upward increasingly steeply, reaching about $6,487 at year 30, with the growing vertical gap between the two lines highlighted in the final third of the chart."
      />
      <p>
      Notice the two lines sit almost on top of each other for the first several years — this is exactly why the difference feels unimportant early on. The compound curve&apos;s slope keeps increasing over time (it&apos;s earning interest on a constantly growing balance), while the simple interest line&apos;s slope never changes at all. The visual gap between the two, which looks trivial in year 5, becomes the chart&apos;s dominant feature by year 30.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming simple and compound interest produce similar results regardless of the time span involved.", fix: "Check the actual time horizon — the gap between the two is small over a few years but can become larger than the principal itself over a few decades." },
      { mistake: "Using the annual rate directly in the Rule of 72 as a decimal instead of a whole number.", fix: "Divide 72 by the rate as a whole number (e.g., use 6 for 6%, not 0.06) — using the decimal form produces a nonsensical result." },
      { mistake: "Forgetting that compounding works identically against a borrower with unpaid debt as it does for a saver's growing balance.", fix: "Apply the same compound growth formula to a credit card or loan balance to see how quickly unpaid interest itself starts generating more interest." },
      ]}
      />
      <MisconceptionCallout
      myth="Since compound interest and simple interest end up close for short periods, it doesn't matter which one you're actually being offered."
      reality={<p>The closeness is temporary and specifically limited to short time horizons — it&apos;s a feature of how exponential and linear curves start out nearly overlapping near their common starting point, not a sign that the two methods are functionally equivalent. Over long time spans (retirement savings, long-term loans, multi-decade investments), compound interest&apos;s exponential curve diverges sharply from simple interest&apos;s straight line, and the method used can change the outcome by a substantial fraction of the total amount involved.</p>}
      />

      <QuickCheck
      question="A friend says, 'Simple and compound interest give basically the same result over a few years, so the difference is never a big deal.' What's the flaw in this reasoning?"
      options={[
      { text: "There's no flaw — the two methods are functionally identical in all cases", correct: false, explanation: "They are not identical — they use fundamentally different growth formulas (linear versus exponential). They only happen to look similar over short time spans." },
      { text: "The reasoning only holds for short time spans; the two methods diverge substantially over longer time spans, so the difference absolutely can be a big deal depending on the timeframe", correct: true, explanation: "Correct. The near-equality over a few years is a short-term coincidence of how the two curves start near the same point — extend the same comparison to decades and the gap becomes large, sometimes exceeding the original principal." },
      { text: "The reasoning is correct only because simple interest is never actually used by any real financial product", correct: false, explanation: "Simple interest is genuinely used by some real financial products (certain short-term loans and bonds, for example) — the flaw in the reasoning is about time horizon, not about whether simple interest exists in practice." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Compound growth calculator"
      fields={[
      { key: "principal", label: "Starting principal ($)", defaultValue: 2000 },
      { key: "rate", label: "Annual rate", defaultValue: 4, suffix: "%" },
      { key: "years", label: "Years", defaultValue: 30 },
      ]}
      resultLabel="Ending balance, compound interest ($)"
      formula="compoundGrowth"
      formatResult="currency"
      />
      <EntryCalculator
      title="Simple interest calculator"
      fields={[
      { key: "principal", label: "Starting principal ($)", defaultValue: 2000 },
      { key: "rate", label: "Annual rate", defaultValue: 4, suffix: "%" },
      { key: "years", label: "Years", defaultValue: 30 },
      ]}
      resultLabel="Ending balance, simple interest ($)"
      formula="simpleInterest"
      formatResult="currency"
      />
      <EntryCalculator
      title="Rule of 72: estimate years to double"
      fields={[
      { key: "rate", label: "Annual rate (whole number, e.g. 8 for 8%)", defaultValue: 8 },
      ]}
      resultLabel="Approximate years to double"
      formula="ruleOf72"
      formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Run the same principal, rate, and a long time horizon (20-30 years) through both calculators above to see the real gap between simple and compound growth.",
      "Use the Rule of 72 calculator to quickly estimate the doubling time on any savings or debt balance you're tracking.",
      "Check whether a specific savings account, bond, or loan you hold uses simple or compound interest — the terms should state this explicitly.",
      "See the related Personal Finance category (once published) for how these same formulas apply directly to retirement accounts and credit card debt.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between simple and compound interest?", answer: "Simple interest is calculated only on the original principal each period, growing a balance by a fixed dollar amount every time. Compound interest is calculated on the current balance, including previously earned interest, so it grows the balance by an increasing dollar amount each period." },
      { question: "What is the formula for compound interest?", answer: "A = P(1 + r)^t for annual compounding, where P is the principal, r is the annual rate as a decimal, and t is the number of years. More frequent compounding (monthly, daily) uses a slightly adjusted version of this formula." },
      { question: "What is the Rule of 72?", answer: "A quick estimation shortcut: divide 72 by the annual interest rate (as a whole number) to estimate how many years it takes an amount to double under compound growth. At 8% annual growth, 72 ÷ 8 = roughly 9 years to double." },
      { question: "Does compound interest always beat simple interest?", answer: "At the same stated rate and principal, compound interest produces an equal or larger ending balance than simple interest for any period longer than one compounding cycle, and the gap widens the longer the money grows." },
      { question: "Does compound interest work against you on debt?", answer: "Yes. Interest compounding on an unpaid balance, such as a credit card, grows using the same exponential formula as compound growth on savings — which is why unpaid high-interest debt can grow very quickly if left unaddressed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
