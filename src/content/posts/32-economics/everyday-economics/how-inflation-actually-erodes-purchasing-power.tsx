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
  title: "How Inflation Actually Erodes Purchasing Power",
  category: "economics",
  order: 1,
  subtopic: "everyday-economics",
  tags: ["inflation", "purchasing power", "cost of living", "economics basics"],
  date: "2026-09-20",
  updated: "2026-10-09",
  youtubeShort: false, youtubeLong: false,
  seoScore: 77, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-20",
  excerpt: "Inflation doesn't mean prices went up once — it means money itself buys a little less over time, which compounds the same way interest does, just working against you instead of for you.",
  summary: "Inflation is a sustained rise in the general price level, tracked in the U.S. primarily through the Bureau of Labor Statistics' Consumer Price Index, which means a fixed amount of money buys progressively less over time — and because inflation compounds year over year, even a modest annual rate meaningfully erodes purchasing power over a decade if income doesn't rise at least as fast.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics — Consumer Price Index", url: "https://www.bls.gov/cpi/" },
    { label: "Federal Reserve — Frequently Asked Questions on the Economy", url: "https://www.federalreserve.gov/faqs/economy.htm" },
  ],
  seeAlso: [
    "economics/what-gdp-actually-measures",
    "economics/how-interest-rates-actually-get-set",
    "economics/what-supply-and-demand-actually-predicts",
  ],
  glossary: [
    { term: "Inflation", definition: "A sustained rise in the general price level of goods and services in an economy over time, measured most commonly in the U.S. through the Consumer Price Index." },
    { term: "Purchasing power", definition: "The amount of goods or services a fixed amount of money can actually buy — inflation erodes this even if the number of dollars a person holds stays the same." },
    { term: "Consumer Price Index (CPI)", definition: "A U.S. Bureau of Labor Statistics measure that tracks the average change over time in prices paid by consumers for a representative basket of goods and services." },
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
  {"question": "Which measure is the most commonly cited U.S. inflation rate?", "difficulty": "easy", "options": [{"text": "The year-over-year change in the BLS Consumer Price Index", "correct": true, "explanation": "Right. The CPI tracks a weighted basket of what households typically buy, and its yearly change is the headline number."}, {"text": "The change in the stock market over a year", "correct": false, "explanation": "Stock prices aren't a measure of consumer prices. Inflation is tracked through the CPI basket."}, {"text": "The Federal Reserve's interest rate target", "correct": false, "explanation": "That's a policy tool the Fed sets, not a measurement of how prices have changed."}]},
  {"question": "What inflation rate does the Federal Reserve generally aim for over time?", "difficulty": "easy", "options": [{"text": "About 2% a year on average", "correct": true, "explanation": "Yes. The Fed treats low, predictable inflation as more stable than either high inflation or falling prices."}, {"text": "Exactly 0%, so prices never change", "correct": false, "explanation": "Zero isn't the target. The Fed's view is that mild, steady inflation works better than zero or deflation."}, {"text": "About 10% a year", "correct": false, "explanation": "That would be high inflation, the very thing the Fed's price-stability mandate is meant to prevent."}]},
  {"question": "A household spends $500 a month on groceries and the CPI's food category rises 3% over a year. Roughly what does the same basket cost a year later?", "difficulty": "easy", "options": [{"text": "About $515 a month", "correct": true, "explanation": "Correct. 3% of $500 is $15, and that extra $15 buys no more food. It just keeps pace."}, {"text": "About $503 a month", "correct": false, "explanation": "That would be a 0.6% rise. 3% of $500 is $15, not $3."}, {"text": "Still $500, because the household buys the same items", "correct": false, "explanation": "Buying the same items is exactly why the cost rises. The basket got more expensive."}]},
  {"question": "Your savings account pays 1% interest while inflation runs at 5%. What happens to your money?", "difficulty": "medium", "options": [{"text": "The balance grows, but its real purchasing power falls by roughly 4% a year", "correct": true, "explanation": "Both are true at once. The number goes up while what it can buy goes down."}, {"text": "It loses nothing, because the balance is still going up", "correct": false, "explanation": "A rising balance is the nominal story. In real terms, prices are rising faster than your interest."}, {"text": "It gains 6% in real terms", "correct": false, "explanation": "The rates don't add. You subtract inflation from your interest rate to estimate the real return: about minus 4%."}]},
  {"question": "Roughly how much purchasing power does a steady 3% annual inflation rate erase over about 10 years?", "difficulty": "medium", "options": [{"text": "Roughly a quarter of a dollar's value", "correct": true, "explanation": "Right. Because each year's rise builds on the last, 3% a year adds up to about a 25% loss over a decade."}, {"text": "About 3% in total", "correct": false, "explanation": "That's one year. Inflation repeats and compounds every year, so the total is far bigger."}, {"text": "Almost all of it", "correct": false, "explanation": "That overshoots. 3% a year compounds to about a quarter of a dollar's value in 10 years, not nearly all of it."}]},
  {"question": "Why does purchasing power shrink faster in later years than the annual rate alone suggests?", "difficulty": "hard", "options": [{"text": "Each year's price rise builds on the previous year's higher prices, so the erosion compounds", "correct": true, "explanation": "Yes. It's the same math as compound interest, running in the opposite direction for savers."}, {"text": "Inflation rates always rise as time goes on", "correct": false, "explanation": "The rate can stay steady. The compounding happens even at a constant rate."}, {"text": "Banks charge extra fees on older savings", "correct": false, "explanation": "Fees aren't part of it. The effect comes from compounding prices alone."}]},
  {"question": "What is the difference between nominal income and real income?", "difficulty": "medium", "options": [{"text": "Nominal is the dollar amount; real is what that amount can actually buy after inflation", "correct": true, "explanation": "Correct. A flat nominal salary during inflation is a real pay cut."}, {"text": "Nominal is income before taxes; real is income after taxes", "correct": false, "explanation": "That's gross versus net pay. Nominal versus real is about inflation, not taxes."}, {"text": "They're two names for the same number", "correct": false, "explanation": "They split apart whenever prices change. That gap is the whole point of the distinction."}]},
  {"question": "A retiree's pension pays the same fixed amount every month and has no cost-of-living adjustment. What's the smartest way to plan for a 20-year retirement?", "difficulty": "hard", "options": [{"text": "Expect the pension to buy noticeably less over time and plan other savings to cover the gap", "correct": true, "explanation": "Right. Even modest inflation shrinks a fixed payment's real value a lot over 20 years."}, {"text": "Assume it will cover the same expenses for all 20 years", "correct": false, "explanation": "That's the mistake the article warns about. Without a COLA, the same dollars buy less each year."}, {"text": "Ignore inflation, since 2-3% a year is negligible", "correct": false, "explanation": "Small annual rates compound into large losses over decades, which is exactly why planners account for them."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Inflation means the same amount of money buys less over time — it&apos;s tracked in the U.S. mainly through the BLS Consumer Price Index, a basket of representative consumer goods and services.",
          "Inflation compounds year over year, the same mathematical way interest does — a modest annual rate adds up to a much larger erosion of purchasing power over a decade.",
          "If income doesn&apos;t rise at least as fast as inflation, real purchasing power falls even while the nominal dollar amount of income stays the same or grows slightly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Inflation means prices, on average, keep rising over time — so the same $100 buys less next year than it does today. It&apos;s not about any one item getting more expensive; it&apos;s a broad, sustained trend across the whole economy, tracked using a representative basket of everyday goods and services.</div>}
        detailed={<div className="prose-p">Per BLS methodology, the <TermLink href="/economics/how-inflation-actually-erodes-purchasing-power">Consumer Price Index</TermLink> tracks price changes across categories like housing, food, transportation, and medical care, weighted to reflect typical household spending, and the year-over-year percentage change in that index is the most commonly cited inflation rate. Because inflation compounds — this year&apos;s higher prices become next year&apos;s new starting point — a steady 3% annual inflation rate erodes roughly a quarter of a dollar&apos;s <TermLink href="/economics/how-inflation-actually-erodes-purchasing-power">purchasing power</TermLink> over about 10 years, which is why even &quot;moderate&quot; inflation rates matter enormously for long-term savings and fixed incomes.</div>}
      />
      <FootnoteAside>The Federal Reserve generally targets a 2% average inflation rate over time as consistent with its price-stability mandate — not zero inflation — reflecting a view that very low, predictable inflation supports economic stability better than either high inflation or deflation.</FootnoteAside>

      <p>This compounding effect is exactly why financial guidance emphasizes that savings sitting in an account earning less than the inflation rate are quietly losing real value every year, even as the account balance itself grows or stays flat.</p>

      <QuickCheck
        question="Someone's salary stays exactly the same dollar amount for three years in a row, during a period of steady 4% annual inflation. What actually happens to their purchasing power?"
        options={[
          { text: "Purchasing power stays exactly the same, since the dollar amount of their income didn't change", correct: false, explanation: "This confuses nominal (dollar amount) and real (purchasing power) income — even with an unchanged dollar salary, rising prices mean that same salary buys progressively less over those three years." },
          { text: "Purchasing power falls, because prices rose roughly 4% each year while the salary's dollar amount stayed flat, so the same income buys less each successive year", correct: true, explanation: "Correct. This is exactly what 'inflation erodes purchasing power' means in practice — a flat nominal income during a period of inflation is a real, gradual pay cut in terms of what it can actually buy." },
          { text: "Purchasing power actually increases, since more time has passed", correct: false, explanation: "More time passing doesn't increase purchasing power on its own — under sustained inflation with flat income, purchasing power moves in the opposite direction, decreasing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Grocery prices over a year (baseline case)</h3>
      <div className="prose-p">If the CPI&apos;s food category rises 3% over a year, a household spending $500 a month on groceries would need to spend roughly $515 a month to buy the same actual items a year later — the extra $15 isn&apos;t buying more food, it&apos;s just keeping pace with the same basket of goods costing more.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cash savings during high inflation (edge case / variation)</h3>
      <div className="prose-p">Money sitting in a savings account earning 1% interest during a period of 5% inflation is losing roughly 4% of its real purchasing power per year, even though the account balance itself is technically growing — a case where the nominal number going up and the real value going down are both true at the same time.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A fixed pension over 20 years (real-world / applied case)</h3>
      <div className="prose-p">A retiree receiving a fixed pension payment that never increases will see its real purchasing power shrink significantly over a 20-year retirement under even modest sustained inflation — which is exactly why many pensions and Social Security include cost-of-living adjustments tied to CPI, specifically to offset this compounding erosion.</div>

      <QuickCheck
        question="Why do many pensions and Social Security benefits include cost-of-living adjustments (COLAs) tied to the CPI?"
        options={[
          { text: "To specifically counteract the compounding erosion of purchasing power that a fixed payment amount would otherwise experience under ongoing inflation over a long retirement", correct: true, explanation: "Correct. Without a COLA, a genuinely fixed payment loses real value every year under inflation — COLAs exist specifically to preserve real purchasing power over time, not just to make payments look larger." },
          { text: "To make the payments appear larger on paper for political reasons only", correct: false, explanation: "While COLAs do increase the nominal payment, their actual documented economic purpose is preserving real purchasing power against inflation, not just a cosmetic increase." },
          { text: "Because the cost of administering the program requires it", correct: false, explanation: "Administrative cost isn't the rationale — COLAs are specifically designed to offset the real-purchasing-power erosion that inflation causes for a fixed payment amount." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a fixed amount of money loses purchasing power under compounding inflation"
        type="detail"
        svgSrc="/diagrams/economics-how-inflation-actually-erodes-purchasing-power-compounding.svg"
        altText="A diagram showing $100 today, and the real purchasing power that same $100 would represent after 5, 10, and 20 years under a steady 3 percent annual inflation rate, with the value shrinking at each step to illustrate compounding erosion over time."
      />
      <p>The shrinking isn&apos;t linear — because each year&apos;s erosion compounds on top of the previous years&apos;, purchasing power falls faster in later years than the annual rate alone might suggest.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging financial progress by nominal dollar amounts alone, ignoring inflation.", fix: "Compare income and savings growth against the inflation rate over the same period to see real, not just nominal, change." },
          { mistake: "Assuming a fixed payment (pension, contract, rent-controlled lease) keeps the same real value indefinitely.", fix: "Check whether the payment includes a cost-of-living adjustment, and if not, account for its shrinking real value in long-term planning." },
          { mistake: "Treating a single high-inflation year as the whole story, ignoring compounding over many years.", fix: "Consider inflation's cumulative, compounding effect over the relevant time horizon, not just one year's rate in isolation." },
        ]}
      />
      <MisconceptionCallout
        myth="A modest inflation rate like 2-3% a year is basically negligible and not worth planning around."
        reality={<p>Because inflation compounds the same way interest does, even a &quot;modest&quot; 3% annual rate erodes roughly a quarter of a dollar&apos;s real purchasing power over about a decade — per BLS CPI data and standard compounding math, small annual rates add up to genuinely significant long-term effects, which is exactly why financial planning explicitly accounts for inflation over multi-year and multi-decade horizons rather than dismissing it as negligible.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When evaluating a raise or a savings account's interest rate, compare it against the current inflation rate to see real, not just nominal, growth.",
          "Check whether any fixed payments you rely on (a pension, a long-term contract) include a cost-of-living adjustment.",
          "Use BLS.gov's published CPI data to check the actual current inflation rate rather than relying on a general impression.",
          "For long-term savings or retirement planning, account for inflation's compounding effect over the full time horizon, not just the near term."
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How is inflation actually measured in the U.S.?", answer: "Primarily through the Bureau of Labor Statistics' Consumer Price Index, which tracks price changes across a representative basket of goods and services (housing, food, transportation, medical care, and more) weighted to reflect typical household spending." },
          { question: "Is some inflation actually a good thing?", answer: "The Federal Reserve generally targets a low, steady rate (around 2% annually) rather than zero, reflecting a view that mild, predictable inflation supports economic stability better than either high inflation or deflation, though this is a subject of ongoing economic debate." },
          { question: "How does inflation affect savings accounts specifically?", answer: "If a savings account's interest rate is lower than the inflation rate, the account's real purchasing power falls over time even as its nominal dollar balance grows, since prices are rising faster than the interest being earned." },
          { question: "Why do some payments include cost-of-living adjustments?", answer: "Cost-of-living adjustments, tied to indexes like the CPI, exist specifically to offset inflation's erosion of a fixed payment's real purchasing power over time — without one, a genuinely fixed amount buys progressively less each year under inflation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
