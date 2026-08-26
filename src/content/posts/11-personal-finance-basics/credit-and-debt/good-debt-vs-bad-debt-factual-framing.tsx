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
  title: "Good Debt vs Bad Debt (Factual Framing)",
  category: "personal-finance-basics",
  order: 27,
  subtopic: "credit-and-debt",
  tags: ["good debt", "bad debt", "debt-to-income", "asset-backed debt", "personal finance basics"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "\"Good debt\" and \"bad debt\" are common financial-literacy shorthand, not formal categories — the underlying factual distinction financial educators point to is usually about what the debt is used to acquire and whether it can reasonably be expected to build value or income over time.",
  summary: "The commonly used \"good debt vs. bad debt\" framing is a financial-literacy heuristic, not a formal classification — it typically distinguishes debt used to acquire an appreciating or income-generating asset (like a mortgage or student loantied to earning potential) from debt used for depreciating purchases or consumption (like high-interest credit card debt for non-essential spending), though real situations often blend both categories.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" },
    { label: "Federal Trade Commission — Coping with Debt", url: "https://consumer.ftc.gov/articles/coping-debt" },
    { label: "Consumer Financial Protection Bureau — Choosing a Financial Advisor", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
  ],
  seeAlso: [
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "personal-finance-basics/how-debt-snowball-and-avalanche-methods-work",
    "personal-finance-basics/understanding-student-loans-general-mechanics",
  ],
  glossary: [
    {"term":"Appreciating asset","definition":"An asset that tends to increase in value over time, such as real estate in many markets — commonly cited in the good-debt heuristic as a reason mortgage debt is often categorized differently from consumption debt."},
    {"term":"Debt-to-income ratio","definition":"A common measure lenders use to compare a borrower's total monthly debt payments to their gross monthly income, used to assess how much additional debt a borrower may be able to manage."},
    {"term":"Depreciating asset","definition":"An asset that tends to lose value over time, such as most vehicles or consumer electronics — financing a depreciating asset with high-interest debt is frequently cited in the bad-debt heuristic."}
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
      "\"Good debt\" and \"bad debt\" are informal financial-literacy heuristics, not formal or legally defined categories of debt.",
      "The heuristic commonly distinguishes debt tied to an appreciating or income-generating asset (mortgages, some student loans) from debt used for depreciating purchases or consumption (high-interest credit card debt for non-essential spending).",
      "The same type of debt can fall on either side depending on cost (interest rate) and context — a low-rate loan for a reliable asset and a high-rate loan for the same asset aren't equally risky, even though both are technically the same debt category.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">You&apos;ll often hear debt described as &quot;good&quot; or &quot;bad.&quot; This isn&apos;t an official financial category — it&apos;s a common shorthand. The general idea: debt used to acquire something that can grow in value or increase your earning potential (like a home or an education) is often called &quot;good,&quot; while debt used for things that lose value quickly or for spending that doesn&apos;t build anything lasting (like high-interest credit card debt for everyday purchases) is often called &quot;bad.&quot; Real situations are usually more mixed than the labels suggest.</div>}
      detailed={<div className="prose-p">Financial educators typically build the good-debt/bad-debt heuristic around a few factual observations: whether the debt is tied to an <TermLink href="/personal-finance-basics/good-debt-vs-bad-debt-factual-framing">appreciating asset</TermLink> or a <TermLink href="/personal-finance-basics/good-debt-vs-bad-debt-factual-framing">depreciating asset</TermLink>, whether the debt&apos;s interest rate is relatively low or high, and whether the borrowed money is expected to increase future earning potential. A mortgage is frequently cited as an example of &quot;good&quot; debt because it&apos;s usually secured by real estate (historically appreciating in many markets over long horizons) and typically carries a lower interest rate than unsecured debt. High-interest credit card debt used for discretionary consumer purchases is frequently cited as &quot;bad&quot; debt because the purchase itself usually depreciates immediately and the interest rate is comparatively high. These are observational heuristics used in financial literacy education, not fixed rules — a mortgage taken on at an unaffordable payment relative to income, or a &quot;good&quot; asset purchased with a very high interest rate loan, doesn&apos;t automatically become risk-free just because it fits the general category.</div>}
      />
      <FootnoteAside>The debt-to-income ratio is one factual tool lenders and financial educators use to assess how much of any kind of debt — &quot;good&quot; or &quot;bad&quot; by the informal heuristic — a specific borrower can reasonably manage, since the category label alone doesn&apos;t account for an individual&apos;s income and existing obligations.</FootnoteAside>

      <p>
      Because the good/bad framing is a heuristic rather than a formal rule, the more precise underlying factors — asset type, interest rate, and how it fits an individual&apos;s overall financial picture — are usually more useful than the label itself.
      </p>

      <QuickCheck
      question="Is the good debt vs. bad debt framing a formal legal or financial classification of debt types?"
      options={[
      { text: "Yes — regulators formally classify all debt into these two categories", correct: false, explanation: "No regulatory body formally classifies debt this way. \"Good debt\" and \"bad debt\" are informal terms used in financial literacy education, not legal or regulatory categories." },
      { text: "No — it's an informal financial-literacy heuristic that generally distinguishes debt tied to appreciating or income-generating assets from debt used for depreciating purchases or consumption", correct: true, explanation: "Correct. It's a useful teaching shorthand, but real debt situations are usually more nuanced than a two-category label can capture." },
      { text: "No — the terms have no consistent meaning at all and are used randomly", correct: false, explanation: "The terms do have a fairly consistent general meaning in financial literacy contexts (tied to asset type, interest rate, and earning potential) — they're just not formal or legally defined categories." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A mortgage vs. high-interest credit card debt (baseline case)</h3>
      <div className="prose-p">
      A $250,000 mortgage at 6.5% secured by a home, compared with $5,000 in credit card debt at 24% APR used for discretionary purchases, illustrates the heuristic&apos;s core factual distinction cleanly: the mortgage is secured by an asset that historically tends to hold or increase value over long periods in many markets, at a comparatively low rate, while the credit card debt is unsecured, carries a much higher rate, and was used for purchases that don&apos;t build ongoing value. This is the textbook case the heuristic is built around.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A high-interest loan on a traditionally &quot;good debt&quot; asset category (edge case / variation)</h3>
      <div className="prose-p">
      Two people each finance a home purchase — one at a 6% mortgage rate, the other, due to a much lower credit score, at 11% on a subprime mortgage product. Both loans fall under the same asset category the heuristic labels &quot;good debt,&quot; but the second borrower is carrying meaningfully more interest cost and risk for the same category of debt. This shows why the asset type alone doesn&apos;t fully capture the actual cost or risk — the interest rate and the borrower&apos;s overall financial capacity matter just as much as the category label.
      </div>

      <QuickCheck
      question="If two people both take out mortgages — a category commonly labeled good debt — but one pays 6% interest and the other pays 11%, are their financial situations equally described by that label?"
      options={[
      { text: "Yes — since both are mortgages, the good-debt label fully describes both situations equally", correct: false, explanation: "The category label doesn't capture the significant difference in interest cost and risk between a 6% and an 11% mortgage — the label is a starting heuristic, not a complete risk assessment." },
      { text: "No — the interest rate and the borrower's overall financial capacity meaningfully affect the real cost and risk, even within the same debt category", correct: true, explanation: "Correct. This is exactly why the good-debt/bad-debt framing is described as a heuristic rather than a precise measure — real cost and risk depend on more factors than the asset category alone." },
      { text: "No — because one is technically \"good debt\" and the other becomes \"bad debt\" automatically at higher rates", correct: false, explanation: "The heuristic doesn't have a precise rate cutoff that reclassifies a loan from one category to the other — it's a general observational framing, not a rule with a numeric threshold." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Student loan debt with uncertain earning outcomes (real-world / applied case)</h3>
      <div className="prose-p">
      Student loan debt is frequently placed in the &quot;good debt&quot; category because it&apos;s tied to increased future earning potential, on average, across many fields and credential types. But actual outcomes vary by field of study, program cost, and individual circumstances — the same category label applied to two very different borrowing situations (a low-cost program in a high-demand field versus a high-cost program in a field with limited related job openings) can mask very different real financial outcomes, which is why factual data on program cost and typical outcomes matters more than the category label alone.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Factors the good-debt/bad-debt heuristic typically weighs"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-good-debt-vs-bad-debt-factual-framing-heuristic-factors.svg"
      altText="A two-column comparison diagram listing factors commonly associated with the 'good debt' heuristic (tied to an appreciating or income-generating asset, comparatively lower interest rate, potential to increase earning capacity) against factors commonly associated with the 'bad debt' heuristic (tied to a depreciating asset or consumption, comparatively higher interest rate, no expected increase in earning capacity), with a note that real debt situations often mix factors from both columns."
      />
      <p>
      Because most real debt situations mix factors from both columns to some degree, the diagram is best read as a checklist of relevant factors rather than a strict sorting rule.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating \"good debt\" as automatically safe or risk-free regardless of the interest rate or the borrower's income.", fix: "Evaluate the specific interest rate, payment amount relative to income, and overall financial context — even a traditionally \"good debt\" category can carry real risk at a high rate or an unaffordable payment." },
      { mistake: "Assuming all consumer debt used for non-essential purchases is automatically damaging.", fix: "Recognize the heuristic is about typical patterns (asset type, interest rate, consumption vs. investment), not a judgment on every individual purchase — a low-interest, affordable payment for a discretionary purchase is a different financial fact than a high-interest one." },
      { mistake: "Using the good-debt/bad-debt label as a substitute for reviewing actual loan terms.", fix: "Look at the interest rate, total cost, and repayment terms directly rather than relying on the category label to judge whether a specific loan fits your financial situation." },
      ]}
      />
      <MisconceptionCallout
      myth="Debt is either objectively 'good' or objectively 'bad' based on what it's used to buy."
      reality={<p>The good-debt/bad-debt framing is a financial-literacy heuristic built around general patterns — asset type, typical interest rate, and effect on earning potential — not a fixed, objective classification. The same category of debt (a mortgage, a student loan, an auto loan) can represent very different real financial outcomes depending on the specific interest rate, loan terms, and the borrower&apos;s broader financial situation.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When evaluating any debt, look past the general category label to the specific interest rate, total cost, and repayment terms.",
      "Calculate how a proposed loan payment fits against your income and existing obligations, rather than relying on whether it's commonly labeled \"good\" or \"bad.\"",
      "For decisions about whether a specific loan or debt strategy fits your personal financial situation, consult a financial advisor or a nonprofit credit counselor (such as one affiliated with the NFCC) — this article describes general patterns, not personalized advice.",
      "Compare loan offers within the same category (e.g. multiple mortgage quotes) using APR and total cost, not just the category label.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is \"good debt\" always a smart financial decision?", answer: "Not automatically. The \"good debt\" heuristic describes general patterns (asset type, interest rate, earning potential), but a specific loan within that category can still be a poor fit if the interest rate is high or the payment doesn't fit the borrower's income." },
      { question: "Is credit card debt always \"bad debt\"?", answer: "Credit card debt is commonly cited in the bad-debt heuristic because of its typically high interest rate and its frequent use for depreciating or consumption purchases, but the heuristic describes a general pattern, not every individual instance." },
      { question: "Are student loans good debt or bad debt?", answer: "Student loans are frequently placed in the \"good debt\" category because of their association with increased average earning potential, but actual outcomes vary significantly by field of study, program cost, and individual circumstances." },
      { question: "What factors do financial educators actually look at instead of the good/bad label?", answer: "Commonly cited factors include whether the debt is tied to an appreciating or income-generating asset, the interest rate, and how the payment fits the borrower's overall debt-to-income situation." },
      { question: "Who should I ask about whether a specific loan is a good fit for me?", answer: "A financial advisor or a nonprofit credit counselor, such as one affiliated with the National Foundation for Credit Counseling (NFCC), can review your specific numbers and goals — general financial-literacy content like this can't substitute for that personalized review." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
