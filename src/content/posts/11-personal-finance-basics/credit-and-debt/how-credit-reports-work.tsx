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
  title: "How Credit Reports Work",
  category: "personal-finance-basics",
  order: 24,
  subtopic: "credit-and-debt",
  tags: ["credit report", "credit bureaus", "credit history", "personal finance basics", "financial literacy"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A credit report is the raw record your credit score is calculated from — three separate companies each keep their own version, built from data lenders voluntarily report, which is why the same person can have three slightly different reports.",
  summary: "A credit report is a detailed record of a person's borrowing and repayment history, compiled independently by each of three major credit bureaus from data voluntarily reported by lenders — it's the underlying data source that credit scores are calculated from, not the score itself.",
  sources: [
    { label: "Consumer Financial Protection Bureau — How Do I Get a Copy of My Credit Report?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-copy-of-my-credit-reports-en-5/" },
    { label: "Federal Trade Commission — Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" },
    { label: "AnnualCreditReport.com — the official site mandated by federal law", url: "https://www.annualcreditreport.com/" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-credit-score-actually-measures",
    "personal-finance-basics/how-financial-scams-and-ponzi-schemes-work-protective-literacy",
    "personal-finance-basics/what-happens-when-you-default-on-a-loan",
  ],
  glossary: [
    {"term":"Credit report","definition":"A detailed record of a person's credit accounts, payment history, and public financial records, compiled by a credit bureau from data reported by lenders — the raw data a credit score is calculated from."},
    {"term":"Credit bureau","definition":"A company (in the US, one of Equifax, Experian, or TransUnion) that collects, stores, and sells consumer credit data to lenders and generates credit reports."},
    {"term":"Hard inquiry","definition":"A record created when a lender checks a credit report as part of an actual credit application, which can cause a small, temporary dip in a credit score — distinct from a soft inquiry, which has no score effect."}
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
      "A credit report is the underlying data — account history, payment record, public records — that a credit score is calculated from; the report and the score are two different things.",
      "In the US, three separate companies (Equifax, Experian, TransUnion) each keep their own independent report, built from data voluntarily reported by lenders, not shared automatically between bureaus.",
      "Because reporting is voluntary and not perfectly synchronized, the same person's three reports can genuinely differ — one bureau might have information another doesn't yet.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/personal-finance-basics/how-credit-reports-work">credit report</TermLink> is a written history of your credit accounts — credit cards, loans, mortgages — showing balances, credit limits, and whether payments were made on time. A <TermLink href="/personal-finance-basics/how-credit-reports-work">credit bureau</TermLink> compiles this from information that banks, credit card companies, and other lenders send them. In the US there are three major bureaus, and each keeps its own separate report, so your report from one bureau isn&apos;t automatically identical to the others.</div>}
      detailed={<div className="prose-p">Lenders that extend credit typically report account activity — new accounts opened, current balances, payment status — to some or all of the three bureaus on a recurring basis, commonly monthly. This reporting is voluntary, not legally mandated for every creditor, and different lenders report to different bureaus (some report to all three, some to only one or two), which is the direct mechanical reason a person&apos;s three reports can differ: an account update sent to Experian this month might not appear on the TransUnion or Equifax report until the following reporting cycle, or possibly never if that particular lender doesn&apos;t report to that bureau at all. A report also includes public record information like bankruptcies, and a log of <TermLink href="/personal-finance-basics/how-credit-reports-work">hard inquiries</TermLink> — records of when a lender checked the report for an actual credit application, as opposed to a soft inquiry that leaves no mark on the score.</div>}
      />
      <FootnoteAside>US federal law (the Fair Credit Reporting Act) entitles consumers to one free copy of their credit report from each of the three major bureaus every 12 months through the single federally mandated site, AnnualCreditReport.com — not to be confused with unrelated commercial sites that also use &quot;credit report&quot; in their name but charge fees or bundle other services.</FootnoteAside>

      <p>
      The gap between &quot;credit report&quot; and &quot;credit score&quot; is the single most common point of confusion in this whole system — the report is data, the score is a calculation performed on that data.
      </p>

      <QuickCheck
      question="Why might someone's credit report from Experian show a recently opened account that isn't yet listed on their TransUnion report?"
      options={[
      { text: "Because credit bureaus automatically share and synchronize all data with each other in real time", correct: false, explanation: "The three major bureaus do not automatically share data with each other — each maintains its own independent database, built from whatever lenders choose to report to that specific bureau." },
      { text: "Because credit reporting is voluntary and not perfectly synchronized — a lender might report to Experian on a different schedule than to TransUnion, or might not report to all three bureaus at all", correct: true, explanation: "Correct. Lenders decide which bureaus to report to and on what schedule, which is exactly why the same person's three credit reports can show different information at any given moment." },
      { text: "One of the two reports must contain an error, since real accounts always appear identically everywhere", correct: false, explanation: "A discrepancy between bureaus doesn't necessarily mean an error — it's a normal, expected consequence of how voluntary, non-synchronized reporting works, not evidence that something is wrong." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Pulling all three reports and finding a discrepancy (baseline case)</h3>
      <div className="prose-p">
      Someone requests all three free reports through AnnualCreditReport.com and notices their Equifax report lists a credit card with a $2,000 limit, but the same card shows a $1,800 limit on their TransUnion report. This is a realistic outcome of non-synchronized reporting — the lender likely updated the limit and reported the change to one bureau before the other, and it isn&apos;t automatically evidence of fraud or a report error requiring urgent correction, though it&apos;s still worth confirming with the lender directly if the discrepancy seems unusual.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A hard inquiry from a mortgage pre-approval (edge case / variation)</h3>
      <div className="prose-p">
      Applying for mortgage pre-approval triggers a hard inquiry, which appears on the credit report and can cause a small, typically temporary score dip. Because rate-shopping for a single loan type (mortgage, auto) within a short window (commonly 14-45 days depending on the scoring model version) is usually counted as a single inquiry rather than several separate ones, comparing offers from multiple mortgage lenders within that window doesn&apos;t multiply the score impact the way applying for several unrelated credit cards in the same period would.
      </div>

      <QuickCheck
      question="Does shopping around for a mortgage by applying with five different lenders in the same week typically create five separate hard-inquiry penalties?"
      options={[
      { text: "Yes — every single application is scored as an independent, fully separate hard inquiry", correct: false, explanation: "Most current scoring models specifically account for rate-shopping behavior — multiple inquiries for the same loan type within a defined short window are generally counted as a single inquiry, not stacked as several." },
      { text: "No — scoring models generally treat multiple inquiries for the same loan type within a short shopping window (commonly 14-45 days) as a single inquiry, precisely because comparing loan offers is expected consumer behavior", correct: true, explanation: "Correct. This rate-shopping accommodation exists specifically so that comparing offers doesn't get penalized as if it were five unrelated credit applications." },
      { text: "Hard inquiries only apply to credit cards, never to mortgage applications", correct: false, explanation: "Mortgage and auto loan applications do generate hard inquiries just like credit card applications — the difference is the rate-shopping window that groups similar-purpose inquiries together." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Disputing an error found on a credit report (real-world / applied case)</h3>
      <div className="prose-p">
      A consumer finds an account on their report that isn&apos;t theirs — a possible sign of identity theft or simply a data-matching mix-up. Under the Fair Credit Reporting Act, they can file a dispute directly with the bureau reporting the error, which is legally required to investigate (typically within 30 days) and correct or remove information it can&apos;t verify as accurate. This dispute process is a real, structured legal mechanism, not an informal request — it exists because the law recognizes credit reports carry real financial consequences and errors need a defined path to correction.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="How data flows from lenders into three separate credit reports"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-how-credit-reports-work-data-flow.svg"
      altText="A diagram showing multiple lender boxes (Bank, Credit Card Company, Auto Lender) each sending arrows to some or all of three separate bureau boxes labeled Equifax, Experian, and TransUnion, illustrating that not every lender reports to every bureau, which is why the three resulting reports can differ."
      />
      <p>
      Because each arrow represents an independent, voluntary reporting relationship rather than a single shared pipe, the three bureaus can each end up with a genuinely different snapshot of the same person&apos;s credit activity at any given moment.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Checking only one bureau's report and assuming it represents the complete picture.", fix: "Pull all three reports (free annually via AnnualCreditReport.com) since lenders may report to only one or two bureaus, leaving gaps in any single report." },
      { mistake: "Confusing a 'credit report' with a 'credit score' as the same document.", fix: "Remember the report is the underlying data; the score is a separate number calculated from that data by a scoring model like FICO or VantageScore, and isn't automatically included on every free report." },
      { mistake: "Assuming a discrepancy between two bureaus' reports always means fraud or an error requiring urgent action.", fix: "Recognize that non-synchronized voluntary reporting commonly produces minor differences between bureaus — verify with the lender before assuming something is wrong." },
      ]}
      />
      <MisconceptionCallout
      myth="There is one single, official 'credit report' that every lender sees the same version of."
      reality={<p>There are three separate, independently maintained reports (from Equifax, Experian, and TransUnion in the US), each built from whatever data lenders chose to report to that specific bureau. A lender pulling your &quot;credit report&quot; is pulling one bureau&apos;s version — possibly not all three — which is why decisions or scores can occasionally differ depending on which bureau a lender happens to use.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Request your free reports from all three bureaus through the official AnnualCreditReport.com — not a third-party site with a similar-sounding name.",
      "Review each report for accounts you don't recognize, incorrect balances, or payment statuses that don't match your own records.",
      "If you find an error, file a dispute directly with the bureau reporting it — this is a legal right under the Fair Credit Reporting Act, not an informal favor.",
      "Don't assume a small difference between bureaus is automatically fraud — check with the specific lender first before escalating.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is a credit report the same thing as a credit score?", answer: "No. A credit report is the underlying record of accounts and payment history; a credit score is a separate number calculated from that report's data by a scoring model like FICO or VantageScore." },
      { question: "How do I get my free credit report?", answer: "In the US, the federally mandated official source is AnnualCreditReport.com, which provides one free report from each of the three major bureaus (Equifax, Experian, TransUnion) every 12 months." },
      { question: "Why do my three credit reports show different information?", answer: "Because lenders report data to bureaus voluntarily and not always to all three at once or on the same schedule — a discrepancy between reports is a normal outcome of that non-synchronized process, not automatically an error." },
      { question: "What is a hard inquiry?", answer: "A record created when a lender checks your credit report as part of an actual application for credit, which can cause a small, usually temporary score dip — distinct from a soft inquiry (like checking your own report), which has no effect on the score." },
      { question: "How do I dispute an error on my credit report?", answer: "File a dispute directly with the credit bureau reporting the error. Under the Fair Credit Reporting Act, the bureau is legally required to investigate — typically within 30 days — and correct or remove information it cannot verify." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
