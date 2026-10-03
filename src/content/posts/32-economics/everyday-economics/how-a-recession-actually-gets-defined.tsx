import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "How a Recession Actually Gets Defined",
  category: "economics",
  order: 5,
  subtopic: "everyday-economics",
  tags: ["recession", "nber", "business cycle", "two quarters rule", "sahm rule"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 77, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "'Two quarters of shrinking GDP' is a rule of thumb, not the official U.S. definition. A private committee of economists at the NBER decides, looking at jobs and income across the economy, and it usually announces a recession months after it began.",
  summary: "In the United States, recessions are officially dated by the Business Cycle Dating Committee of the National Bureau of Economic Research (NBER), a private, nonprofit research organization. Its definition is 'a significant decline in economic activity that is spread across the economy and lasts more than a few months,' judged on three criteria, depth, diffusion and duration, which the committee treats as somewhat interchangeable. It relies mainly on monthly data such as real personal income less government transfers and nonfarm payroll employment, alongside real consumer spending, household-survey employment, inflation-adjusted manufacturing and trade sales, industrial production, and quarterly GDP and GDI. The popular 'two consecutive quarters of falling real GDP' test is only a rule of thumb: in 2022, first estimates showed two quarters of GDP decline without a recession being declared, while the 2020 downturn lasted only two months and still counted because it was so deep and widespread. The committee dates peaks and troughs after the fact, often many months later, so real-time signals like the Sahm rule, based on rising unemployment, are used to spot recessions sooner.",
  sources: [
    { label: "National Bureau of Economic Research — Business Cycle Dating", url: "https://www.nber.org/research/business-cycle-dating" },
    { label: "NBER — US Business Cycle Expansions and Contractions", url: "https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions" },
    { label: "U.S. Bureau of Economic Analysis — Gross Domestic Product", url: "https://www.bea.gov/data/gdp/gross-domestic-product" },
    { label: "Federal Reserve Bank of St. Louis (FRED) — Real-time Sahm Rule Recession Indicator", url: "https://fred.stlouisfed.org/series/SAHMREALTIME" },
  ],
  seeAlso: [
    "economics/what-gdp-actually-measures",
    "economics/how-interest-rates-actually-get-set",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "government-schemes-benefits/how-unemployment-benefits-actually-get-calculated",
    "investing-markets-deep-dive/what-a-bull-market-vs-bear-market-actually-means",
    "economics/how-tariffs-actually-affect-prices",
  ],
  glossary: [
    { term: "Recession", definition: "Per the NBER, a significant decline in economic activity that is spread across the economy and lasts more than a few months." },
    { term: "Business cycle", definition: "The repeating pattern of expansion (growth) and contraction (recession) in an economy, marked by peaks and troughs." },
    { term: "Peak and trough", definition: "The peak is the last month of an expansion; the trough is the last month of a recession. The recession is the period between them." },
    { term: "Two-quarter rule", definition: "A popular rule of thumb that two consecutive quarters of falling real GDP signal a recession. It isn't the official U.S. definition." },
    { term: "Sahm rule", definition: "A real-time recession signal that triggers when the three-month average unemployment rate rises at least 0.5 percentage points above its low of the previous 12 months." },
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

export const quiz: QuizBankItem[] = [
  {"question": "Who officially dates U.S. recessions?", "difficulty": "easy", "options": [{"text": "The NBER's Business Cycle Dating Committee", "correct": true, "explanation": "A committee of economists at a private, nonprofit research organization."}, {"text": "The President", "correct": false, "explanation": "The White House doesn't declare recessions."}, {"text": "The Federal Reserve", "correct": false, "explanation": "The Fed responds to recessions but doesn't officially date them."}]},
  {"question": "What are the NBER's three criteria for a recession?", "difficulty": "medium", "options": [{"text": "Depth, diffusion and duration", "correct": true, "explanation": "How big, how widespread, and how long the decline is."}, {"text": "Inflation, interest rates and stock prices", "correct": false, "explanation": "These matter to the economy but aren't the dating criteria."}, {"text": "GDP, GDP and GDP", "correct": false, "explanation": "The NBER looks well beyond GDP."}]},
  {"question": "Is 'two consecutive quarters of falling real GDP' the official U.S. definition?", "difficulty": "easy", "options": [{"text": "No, it's a rule of thumb", "correct": true, "explanation": "The NBER uses a broader definition and several indicators."}, {"text": "Yes, written into federal law", "correct": false, "explanation": "No law defines a recession that way."}, {"text": "Yes, but only since 2020", "correct": false, "explanation": "It has never been the official definition."}]},
  {"question": "Why did the 2020 downturn count as a recession even though it lasted only two months?", "difficulty": "medium", "options": [{"text": "It was so deep and widespread that it outweighed the short duration", "correct": true, "explanation": "The NBER treats the criteria as somewhat interchangeable."}, {"text": "Because GDP fell for two quarters", "correct": false, "explanation": "The decision was based on depth and diffusion, not the two-quarter rule."}, {"text": "Because the stock market fell", "correct": false, "explanation": "Stock prices aren't one of the main dating indicators."}]},
  {"question": "Which two monthly measures has the NBER said it weights most in recent decades?", "difficulty": "hard", "options": [{"text": "Real personal income less transfers, and nonfarm payroll employment", "correct": true, "explanation": "Both are economy-wide and available monthly."}, {"text": "Home prices and oil prices", "correct": false, "explanation": "Neither is among the core measures listed."}, {"text": "Consumer confidence and stock returns", "correct": false, "explanation": "These are sentiment and market measures, not the core indicators."}]},
  {"question": "Why are recessions usually announced months after they start?", "difficulty": "medium", "options": [{"text": "The committee waits for enough data to be confident and avoid major revisions", "correct": true, "explanation": "Its approach is deliberately retrospective."}, {"text": "The government delays it for political reasons", "correct": false, "explanation": "The NBER is private and nonpartisan."}, {"text": "Recessions can only be announced in January", "correct": false, "explanation": "There's no fixed announcement month."}]},
  {"question": "What does the Sahm rule track?", "difficulty": "hard", "options": [{"text": "A rise in the three-month average unemployment rate of 0.5 points or more above its 12-month low", "correct": true, "explanation": "It's designed to signal a recession in real time."}, {"text": "Two quarters of negative GDP", "correct": false, "explanation": "That's the two-quarter rule of thumb."}, {"text": "Changes in the price of gold", "correct": false, "explanation": "The rule is based on unemployment."}]},
  {"question": "In 2022, first estimates showed two quarters of falling GDP. Why wasn't a recession declared?", "difficulty": "hard", "options": [{"text": "Jobs and income kept growing, so the decline wasn't broad across the economy", "correct": true, "explanation": "Payroll employment rose strongly, failing the diffusion test."}, {"text": "The NBER was closed that year", "correct": false, "explanation": "It kept operating."}, {"text": "Recessions can't happen when inflation is high", "correct": false, "explanation": "Stagflation shows they can."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "In the U.S., a committee of economists at the NBER decides when recessions start and end. There's no automatic formula.",
          "Its test is a significant, widespread decline lasting more than a few months, judged mainly by jobs and income, not just GDP.",
          "'Two quarters of falling GDP' is a rule of thumb. It has flagged recessions that didn't happen and would miss some that did.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a doctor deciding whether someone has the flu. A single high temperature reading isn&apos;t enough. The doctor looks at how bad the symptoms are, whether they&apos;re affecting the whole body, and how long they&apos;ve lasted. Recessions are called the same way. A group of economists looks at how much the economy shrank, whether the drop hit most industries and regions or just one, and how long it lasted. They mostly watch jobs and incomes, because those show whether ordinary people are feeling it. Because they want to be sure, they usually make the call months after the recession has already started.</div>}
        detailed={<div className="prose-p">The NBER&apos;s Business Cycle Dating Committee defines a recession as a significant decline in economic activity that is spread across the economy and lasts more than a few months, and it treats the three criteria, <strong>depth, diffusion and duration</strong>, as somewhat interchangeable: extreme conditions on one can offset weaker readings on another. It dates the <strong>peak</strong> (last month of expansion) and <strong>trough</strong> (last month of recession) using monthly, economy-wide indicators: real personal income less transfers, nonfarm payroll employment, household-survey employment, real personal consumption expenditures, real manufacturing and trade sales, and industrial production. The committee says it has recently weighted income less transfers and payrolls most heavily. For quarterly dating it also uses real <TermLink href="/economics/what-gdp-actually-measures">GDP</TermLink> and GDI. The two-quarter rule fails in both directions. Early estimates of 2022 showed two quarters of falling GDP while payrolls grew strongly, which is weak diffusion, and no recession was declared. The 2020 contraction ran just two months, from the February peak to the April trough, but its depth and breadth were extreme. The committee is deliberately retrospective and waits for data to settle, so announcements can lag the actual turning point by many months. That lag is why real-time indicators like the Sahm rule exist. It triggers when the three-month average unemployment rate rises 0.5 percentage points or more above its low of the prior 12 months.</div>}
      />
      <FootnoteAside>Other countries use different conventions. Many statistical agencies and news outlets outside the U.S. do use the two-quarter rule as a working definition. This page describes how U.S. recessions are officially dated.</FootnoteAside>

      <p>A recession usually shows up in people&apos;s lives through jobs, which is why the unemployment rate and <TermLink href="/government-schemes-benefits/how-unemployment-benefits-actually-get-calculated">unemployment benefits</TermLink> both rise when one hits, and why central banks often respond by <TermLink href="/economics/how-interest-rates-actually-get-set">cutting interest rates</TermLink>.</p>

      <QuickCheck
        question="GDP falls in two back-to-back quarters, but employment and incomes keep rising across most industries. What would the NBER most likely conclude?"
        options={[
          { text: "Probably not a recession, since the decline isn't spread across the economy", correct: true, explanation: "Correct. That's roughly what happened in 2022. Diffusion is one of the three criteria." },
          { text: "Definitely a recession, because two quarters of GDP decline is the official rule", correct: false, explanation: "The two-quarter test is a rule of thumb, not the NBER's definition." },
          { text: "A depression", correct: false, explanation: "A depression is a far more severe and prolonged downturn." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The 2007 to 2009 recession (baseline case)</h3>
      <div className="prose-p">Payroll employment, income, spending and production all turned down together, across nearly every industry and region, and kept falling for a long time. The NBER dated the peak to December 2007 and the trough to June 2009, an 18-month recession. Every criterion was clearly met. But the committee didn&apos;t announce the December 2007 peak until December 2008, a year after the recession had begun. By then, most people had already felt it.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two short, different cases (the edge cases)</h3>
      <div className="prose-p">In 2020, activity collapsed in March and April as the pandemic hit, then began recovering. The recession lasted two months, the shortest on the NBER&apos;s record, and still counted because the drop was so deep and so widespread. In 2022, first estimates showed real GDP shrinking in the first and second quarters, which met the two-quarter rule of thumb. But employers added jobs month after month and incomes held up, so the decline wasn&apos;t spread across the economy, and the NBER declared no recession. Together they show why the committee looks at depth, diffusion and duration rather than one number.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading the headlines (real-world use)</h3>
      <div className="prose-p">A news report says &quot;Economy shrank last quarter: are we in a recession?&quot; You now know what to check. Did payrolls fall, or just GDP? Is the weakness in one sector (say, housing) or many? Has unemployment risen enough to trigger the Sahm rule? And remember that the official answer may not arrive for months. For personal decisions, the job market in your own field is usually a better signal than waiting for the official call.</div>

      <QuickCheck
        question="Why did the 2020 recession count despite lasting only two months?"
        options={[
          { text: "Its depth and breadth were extreme enough to offset the short duration", correct: true, explanation: "Correct. The NBER treats the three criteria as somewhat interchangeable." },
          { text: "Any downturn during a pandemic automatically counts", correct: false, explanation: "There's no such automatic rule." },
          { text: "It lasted two quarters", correct: false, explanation: "It lasted two months, February to April 2020." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Rule of thumb vs. the official NBER approach"
        type="comparison"
        svgSrc="/diagrams/economics-how-a-recession-actually-gets-defined-comparison.svg"
        altText="A two-column comparison. The official NBER approach: a significant, widespread decline lasting more than a few months; judged mainly on jobs and income plus GDP; dated after the fact by a committee. The two-quarter rule of thumb: two quarters of falling real GDP; one number only; flagged 2022 when there was no recession."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating two quarters of negative GDP as an official declaration.", fix: "Check what jobs and incomes are doing too. In the U.S., the NBER makes the call on broader evidence." },
          { mistake: "Assuming there's no recession because none has been announced.", fix: "Official dating lags by months. Watch real-time signals like unemployment and payrolls." },
          { mistake: "Equating a stock market drop with a recession.", fix: "Markets can fall sharply without a recession and rise during one. Stock prices aren't one of the NBER's dating measures." },
        ]}
      />
      <MisconceptionCallout
        myth="A recession is officially defined as two consecutive quarters of falling GDP."
        reality={<p>In the U.S., that&apos;s a rule of thumb, not the definition. The NBER&apos;s committee looks for a significant decline spread across the economy that lasts more than a few months, and it relies mostly on monthly jobs and income data. The rule of thumb misfires both ways: it would have flagged 2022, when employment kept growing and no recession was declared, and a sharp downturn that starts and ends within the same quarter could slip past it.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you see a recession headline, check payroll employment and the unemployment rate, not just GDP.",
          "Look up the NBER's business cycle table to see the dates and lengths of past U.S. recessions.",
          "Build or maintain an emergency fund, since recessions are usually confirmed only after they start.",
          "Watch conditions in your own industry, which can matter more to you than the national call.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the official definition of a recession?", answer: "In the U.S., the NBER defines it as a significant decline in economic activity that is spread across the economy and lasts more than a few months, judged by depth, diffusion and duration." },
          { question: "Is a recession two quarters of negative GDP?", answer: "That's a popular rule of thumb, and some countries use it, but it isn't the official U.S. definition. The NBER looks at jobs, income, spending and production too." },
          { question: "Who decides if the U.S. is in a recession?", answer: "The Business Cycle Dating Committee of the National Bureau of Economic Research, a private, nonprofit research organization." },
          { question: "Why are recessions announced so late?", answer: "The committee waits until data are solid enough to be confident and avoid revisions, so announcements often come many months after a recession starts." },
          { question: "What is the Sahm rule?", answer: "A real-time recession indicator that triggers when the three-month average unemployment rate rises at least 0.5 percentage points above its lowest level in the previous 12 months." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
