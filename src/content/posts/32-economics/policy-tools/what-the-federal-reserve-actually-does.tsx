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
  title: "What the Federal Reserve Actually Does",
  category: "economics",
  order: 6,
  subtopic: "policy-tools",
  tags: ["Federal Reserve", "the Fed", "FOMC", "federal funds rate", "dual mandate", "monetary policy", "central bank"],
  date: "2026-09-27",
  updated: "2026-09-27",
  lastReviewed: "2026-09-27",
  excerpt: "The Federal Reserve is the U.S. central bank. It steers short-term interest rates to pursue maximum employment and stable prices, supervises banks, and runs payment systems. It doesn't set mortgage rates directly or print paper money.",
  summary: "The Federal Reserve is the central bank of the United States, created by the Federal Reserve Act of 1913. It is made up of a seven-member Board of Governors in Washington, whose members serve 14-year terms, and 12 regional Reserve Banks. Its best-known job is monetary policy, set by the Federal Open Market Committee (FOMC): the seven governors, the president of the New York Fed and four other Reserve Bank presidents on a rotating basis. The FOMC meets eight times a year and sets a target range for the federal funds rate, the rate banks charge each other for overnight loans. It keeps rates in that range mainly by setting the interest it pays banks on their reserves. Congress gave the Fed the goals of maximum employment, stable prices and moderate long-term interest rates, and since 2012 the Fed has defined stable prices as 2% inflation measured by the PCE price index. The Fed also supervises and regulates banks, acts as a lender of last resort through its discount window, and runs payment systems including Fedwire and the FedNow instant payment service launched in 2023. It does not set mortgage rates directly, and the Bureau of Engraving and Printing, not the Fed, prints paper currency.",
  sources: [
    { label: "Board of Governors of the Federal Reserve System — About the Fed", url: "https://www.federalreserve.gov/aboutthefed.htm" },
    { label: "Federal Reserve — Federal Open Market Committee", url: "https://www.federalreserve.gov/monetarypolicy/fomc.htm" },
    { label: "Federal Reserve Act — Section 2A: Monetary Policy Objectives", url: "https://www.federalreserve.gov/aboutthefed/section2a.htm" },
    { label: "Federal Reserve FAQ — Why does the Federal Reserve aim for inflation of 2 percent over the longer run?", url: "https://www.federalreserve.gov/faqs/economy_14400.htm" },
    { label: "Federal Reserve Financial Services — FedNow Service", url: "https://www.frbservices.org/financial-services/fednow" },
  ],
  seeAlso: [
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "economics/how-interest-rates-actually-get-set",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/how-a-recession-actually-gets-defined",
    "general-awareness-basics/understanding-central-banks-conceptual-overview",
  ],
  glossary: [
    { term: "Federal funds rate", definition: "The interest rate banks charge each other for overnight loans of reserves; the Fed sets a target range for it." },
    { term: "FOMC", definition: "The Federal Open Market Committee, the 12-member Fed body that sets monetary policy." },
    { term: "Dual mandate", definition: "Congress's goals for the Fed of maximum employment and stable prices (the law also names moderate long-term interest rates)." },
    { term: "Interest on reserve balances (IORB)", definition: "The rate the Fed pays banks on money they keep at the Fed; its main tool for steering the federal funds rate." },
    { term: "Quantitative easing (QE)", definition: "Large-scale Fed purchases of Treasury and mortgage-backed securities to push down longer-term interest rates." },
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
  {"question": "What are the Fed's two main goals, often called the dual mandate?", "difficulty": "easy", "options": [{"text": "Maximum employment and stable prices", "correct": true, "explanation": "Congress set them in the Federal Reserve Act; the law also mentions moderate long-term interest rates."}, {"text": "Balancing the federal budget and cutting taxes", "correct": false, "explanation": "Those are fiscal policy, set by Congress and the President."}, {"text": "Maximizing stock prices and bank profits", "correct": false, "explanation": "Neither is a Fed goal."}]},
  {"question": "Which inflation rate does the Fed aim for over the longer run?", "difficulty": "easy", "options": [{"text": "2%, measured by the PCE price index", "correct": true, "explanation": "The Fed formally adopted this target in 2012."}, {"text": "0%, meaning no price change at all", "correct": false, "explanation": "The Fed sees a little inflation as healthier than zero."}, {"text": "5%", "correct": false, "explanation": "That's well above the target."}]},
  {"question": "Who votes on the FOMC?", "difficulty": "medium", "options": [{"text": "The 7 Board governors, the New York Fed president and 4 rotating Reserve Bank presidents", "correct": true, "explanation": "That's 12 voting members."}, {"text": "Members of Congress", "correct": false, "explanation": "Congress oversees the Fed but doesn't vote on policy."}, {"text": "The CEOs of the largest banks", "correct": false, "explanation": "Commercial bank executives don't vote on monetary policy."}]},
  {"question": "What is the main tool the Fed uses today to keep the federal funds rate in its target range?", "difficulty": "hard", "options": [{"text": "Setting the interest rate it pays banks on their reserve balances", "correct": true, "explanation": "Banks won't lend reserves overnight for much less than they can earn at the Fed."}, {"text": "Printing more paper money each week", "correct": false, "explanation": "Paper currency is printed by the Bureau of Engraving and Printing to meet demand; it's not a rate tool."}, {"text": "Ordering banks to charge a specific mortgage rate", "correct": false, "explanation": "The Fed doesn't set mortgage rates."}]},
  {"question": "If the Fed cuts rates, why might 30-year mortgage rates barely move?", "difficulty": "hard", "options": [{"text": "Mortgage rates track longer-term bond yields, which depend on expectations for inflation and future policy", "correct": true, "explanation": "Markets often price in a cut before it happens."}, {"text": "Mortgages are exempt from all interest rates", "correct": false, "explanation": "They're heavily influenced by long-term rates."}, {"text": "The Fed only affects rates in New York", "correct": false, "explanation": "Its policy affects the whole U.S. financial system."}]},
  {"question": "Which of these does the Fed NOT do?", "difficulty": "medium", "options": [{"text": "Print paper dollar bills", "correct": true, "explanation": "The Treasury's Bureau of Engraving and Printing prints them; the Fed orders and distributes them."}, {"text": "Supervise banks", "correct": false, "explanation": "Bank supervision is one of its core jobs."}, {"text": "Run payment systems like FedNow", "correct": false, "explanation": "The Fed launched FedNow in 2023."}]},
  {"question": "Why does the Fed usually raise rates when inflation runs well above 2%?", "difficulty": "medium", "options": [{"text": "Higher borrowing costs cool spending and hiring, which eases price pressure over time", "correct": true, "explanation": "The effect works with a lag of months or more."}, {"text": "Higher rates make prices fall immediately", "correct": false, "explanation": "The effect is gradual, not instant."}, {"text": "To increase government tax revenue", "correct": false, "explanation": "That's not the purpose of rate policy."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The Federal Reserve is the U.S. central bank. Its main job is steering short-term interest rates to pursue maximum employment and 2% inflation.",
          "It sets a target for the federal funds rate eight times a year; that ripples out to credit cards, car loans and savings rates, and more loosely to mortgages.",
          "It also supervises banks, lends in emergencies and runs payment systems, but it doesn't print paper money or set mortgage rates directly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of the Fed as the economy&apos;s thermostat for borrowing. When prices are rising too fast, it raises interest rates, which makes loans more expensive, so people and businesses borrow and spend less, and price increases slow down. When the economy is weak and jobs are disappearing, it lowers rates to encourage borrowing and spending. It doesn&apos;t control every rate directly. It sets one key rate for overnight loans between banks, and other rates tend to follow. The Fed also keeps an eye on banks to make sure they&apos;re safe and runs some of the plumbing that moves money between banks.</div>}
        detailed={<div className="prose-p">Structure first: a seven-member <strong>Board of Governors</strong> (14-year terms, nominated by the President and confirmed by the Senate) and 12 regional <strong>Reserve Banks</strong>. Monetary policy is set by the <strong>FOMC</strong>: the seven governors, the New York Fed president and four of the other 11 Reserve Bank presidents on a rotating basis. Its goals come from Section 2A of the Federal Reserve Act: maximum employment, stable prices and moderate long-term interest rates. Since 2012 the Fed has defined price stability as 2% inflation, measured by the PCE price index, over the longer run. The FOMC meets eight times a year and sets a target range for the <strong>federal funds rate</strong>. Because banks now hold ample reserves, the Fed steers that rate mainly through <strong>interest on reserve balances</strong> (banks won&apos;t lend overnight for much less than the Fed pays them) and an overnight reverse repo facility that sets a floor for other lenders. Changes pass through to the prime rate, credit cards and auto loans quickly; <TermLink href="/economics/how-interest-rates-actually-get-set">longer-term rates</TermLink> like mortgages depend on bond markets&apos; expectations for inflation and future policy. In crises, the Fed can also buy large amounts of Treasury and mortgage bonds (quantitative easing) to push long rates down, and shrink those holdings later (quantitative tightening). Beyond monetary policy: it supervises banks, lends to them through the discount window, and runs Fedwire and FedNow. Unlike <TermLink href="/economics/what-fiscal-policy-actually-means-vs-monetary-policy">fiscal policy</TermLink>, none of this involves taxing or spending.</div>}
      />
      <FootnoteAside>Current rate levels change at each FOMC meeting. For the latest target range and statements, see federalreserve.gov. This page explains how the system works, not where rates are headed.</FootnoteAside>

      <QuickCheck
        question="Which rate does the Fed set a target for directly?"
        options={[
          { text: "The federal funds rate, for overnight loans between banks", correct: true, explanation: "Correct. Other rates respond to it rather than being set by the Fed." },
          { text: "The 30-year mortgage rate", correct: false, explanation: "Mortgage rates are set by lenders and track long-term bond yields." },
          { text: "Your credit card's APR", correct: false, explanation: "Card issuers set APRs, usually as the prime rate plus a margin." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A quarter-point hike on a credit card (baseline case)</h3>
      <div className="prose-p">The FOMC raises its target range by 0.25 percentage points. Banks raise the prime rate by the same amount within a day or two, and most credit card APRs are set as prime plus a fixed margin. A card at 22.00% becomes 22.25%. On a $5,000 balance, yearly interest rises by about 0.25% × $5,000 = $12.50. A single hike is small; a series of them adds up. In 2022–2023, the FOMC raised its target by a total of 5.25 percentage points, which added roughly $260 a year in interest to that same $5,000 balance.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Fed cuts, mortgages don&apos;t budge (edge case)</h3>
      <div className="prose-p">Homebuyers often expect mortgage rates to drop the day the Fed cuts. They often don&apos;t, and sometimes they rise. A 30-year mortgage is priced off long-term bond yields, like the 10-year Treasury, which reflect what investors expect for inflation and Fed policy over many years. If markets already expected the cut, it was priced in weeks earlier. If investors think the cut could fuel inflation later, long-term yields can even rise. The Fed steers the short end of the yield curve directly and the long end only through expectations.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a Fed announcement (real-world use)</h3>
      <div className="prose-p">On FOMC decision days, the Fed releases a short statement at 2:00 p.m. Eastern, and the chair holds a press conference at 2:30. Four times a year the release includes the Summary of Economic Projections, with each participant&apos;s rate forecast shown as a dot on the &quot;dot plot.&quot; For your own finances, the useful questions are: did the target range change, what does the statement say about inflation and jobs, and do the projections suggest more moves ahead? If you&apos;re carrying variable-rate debt, that tells you whether your rate is likely to rise or fall. If you&apos;re saving, high-yield savings rates tend to follow within weeks.</div>

      <QuickCheck
        question="Why didn't mortgage rates fall in Example 2 when the Fed cut?"
        options={[
          { text: "Mortgages follow long-term bond yields, which already reflected expected cuts and inflation", correct: true, explanation: "Correct. The Fed affects long rates mainly through expectations." },
          { text: "The Fed forbids banks from lowering mortgage rates", correct: false, explanation: "There's no such rule." },
          { text: "Mortgage rates are fixed by law", correct: false, explanation: "Lenders set them based on market conditions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a Fed rate decision reaches you"
        type="flow"
        svgSrc="/diagrams/economics-what-the-federal-reserve-actually-does-flow.svg"
        altText="A five-step flow. 1: The FOMC meets 8 times a year and sets a federal funds target range. 2: The Fed moves the interest it pays banks on their reserves. 3: Overnight bank-to-bank lending rates follow into the range. 4: Card, auto and savings rates shift; mortgages react more loosely. 5: Borrowing, spending and hiring adjust, then inflation, with a lag."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a Fed cut means mortgage rates will drop by the same amount.", fix: "Watch the 10-year Treasury yield and lender quotes; long rates move on expectations." },
          { mistake: "Blaming or crediting the Fed for government spending or tax decisions.", fix: "Those are fiscal policy, decided by Congress and the President. The Fed runs monetary policy." },
          { mistake: "Expecting a rate change to affect inflation within weeks.", fix: "Monetary policy works with long lags, often a year or more for its full effect." },
        ]}
      />
      <MisconceptionCallout
        myth="The Federal Reserve prints money and hands it to the government."
        reality={<p>Paper currency is printed by the Treasury&apos;s Bureau of Engraving and Printing; the Fed orders it and distributes it through banks to meet public demand. The Fed doesn&apos;t fund government spending directly. It buys Treasury securities in the open market, not from the Treasury at issue, and when it does quantitative easing it creates bank reserves, not cash handouts. The Fed also sends its net earnings to the Treasury after covering expenses.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check whether any of your debts have variable rates tied to prime; those move with the Fed.",
          "Look up the FOMC meeting calendar on federalreserve.gov and read one post-meeting statement.",
          "When shopping for a mortgage, compare lender quotes rather than waiting on a Fed decision.",
          "If you're saving, compare your savings rate with current high-yield accounts after rate changes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does the Federal Reserve do?", answer: "It sets U.S. monetary policy by steering short-term interest rates toward maximum employment and 2% inflation, supervises and regulates banks, lends to banks in emergencies, and operates payment systems such as Fedwire and FedNow." },
          { question: "Who controls the Federal Reserve?", answer: "It's independent within government. The President nominates and the Senate confirms the seven Board governors, including the chair, and Congress sets its goals and oversees it. Monetary policy decisions are made by the 12-member FOMC." },
          { question: "How does the Fed raise interest rates?", answer: "The FOMC raises the target range for the federal funds rate and raises the interest it pays banks on their reserves. Overnight lending rates follow, and other short-term rates move with them." },
          { question: "Does the Fed set mortgage rates?", answer: "No. Lenders set mortgage rates, which mostly follow long-term Treasury yields. Fed policy influences them indirectly through expectations about inflation and future rates." },
          { question: "Why does the Fed target 2% inflation?", answer: "The Fed judges that 2% over the longer run, measured by the PCE price index, is most consistent with its mandate. It gives room to cut rates in downturns and lowers the risk of harmful falling prices." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
