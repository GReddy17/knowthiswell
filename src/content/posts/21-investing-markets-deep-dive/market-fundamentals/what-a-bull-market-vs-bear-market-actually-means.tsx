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
  title: "What a Bull Market vs Bear Market Actually Means",
  category: "investing-markets-deep-dive",
  order: 7,
  subtopic: "market-fundamentals",
  tags: ["bull market", "bear market", "market correction", "S&P 500", "stock market cycles"],
  date: "2026-09-30",
  updated: "2026-09-30",
  youtubeShort: false, youtubeLong: false,
  seoScore: 81, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-30",
  excerpt: "A bear market is a drop of 20% or more from a recent high in a broad index; a bull market is a rise of 20% or more from a low. The labels are conventions, not official declarations, and they are only ever confirmed in hindsight.",
  summary: "Bull and bear markets are labels for the direction and size of a broad market move. By the convention FINRA describes, a bear market is a decline of 20% or more in a broad index such as the S&P 500 from its recent high, a correction is a decline of at least 10%, and a bull market is a rise of 20% or more from a low. No regulator or exchange declares them; financial media and analysts apply the threshold after the fact, measured on closing prices. Real examples show the range: the S&P 500 fell about 57% from October 2007 to March 2009, about 34% in just over a month in early 2020, and about 25% across most of 2022, after which a new bull market was dated from the October 2022 low once the index closed 20% above it in June 2023. Because the labels are applied in hindsight, they describe what already happened rather than predicting what comes next. Losses also need larger percentage gains to recover: a 50% fall requires a 100% rise to get back to even.",
  sources: [
    { label: "FINRA — Key Terms for Tough Times: The Vocabulary of Stressed Markets", url: "https://www.finra.org/investors/insights/key-terms-tough-times-vocabulary-stressed-markets" },
    { label: "Investor.gov (SEC) — Glossary: Bear Market", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/bear-market" },
    { label: "Investor.gov (SEC) — Glossary of investing terms", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary" },
    { label: "Investor.gov (SEC) — Beginners' Guide to Asset Allocation, Diversification, and Rebalancing", url: "https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset" },
    { label: "National Bureau of Economic Research — US Business Cycle Expansions and Contractions", url: "https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions" },
    { label: "Federal Reserve Bank of St. Louis (FRED) — S&P 500 daily closes (SP500)", url: "https://fred.stlouisfed.org/series/SP500" },
    { label: "Investor.gov (SEC) — Glossary: Stock Market Circuit Breakers", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/stock-market-circuit-breakers" },
    { label: "CNBC (June 13, 2022) — The S&P 500 is now in an official bear market, according to S&P Dow Jones Indices", url: "https://www.cnbc.com/2022/06/13/sp-500-is-in-official-bear-market-according-to-sp-dow-jones-indices.html" },
    { label: "CNN (June 8, 2023) — It's official. We're in a bull market", url: "https://www.cnn.com/2023/06/08/investing/bull-market-story" },
    { label: "CNBC (August 18, 2020) — Here's a list of stock bull markets through time and how this new one stacks up", url: "https://www.cnbc.com/2020/08/18/heres-a-list-of-stock-bull-markets-through-time-and-how-this-new-one-stacks-up.html" },
    { label: "CNN (March 9, 2020) — Here's what caused the last 12 bear markets", url: "https://www.cnn.com/2020/03/09/investing/bear-market-history" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/how-the-stock-market-actually-works",
    "investing-markets-deep-dive/what-an-index-fund-actually-tracks",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
    "economics/how-a-recession-actually-gets-defined",
  ],
  glossary: [
    { term: "Bear market", definition: "A decline of 20% or more in a broad market index from its most recent high, by common market convention." },
    { term: "Bull market", definition: "A rise of 20% or more in a broad market index from its most recent low, by common market convention." },
    { term: "Market correction", definition: "A decline of at least 10% (but less than 20%) from a recent high, often followed by a resumption of the earlier trend." },
    { term: "Drawdown", definition: "The percentage fall from a peak value to the lowest point that follows, before a new peak is reached." },
    { term: "Market circuit breaker", definition: "An exchange rule that pauses trading market-wide after large single-day falls in the S&P 500: 15-minute halts at 7% and 13% (if triggered before 3:25 p.m. Eastern), and a halt for the rest of the day at 20%." },
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
  {"question": "By common convention, how far must a broad index fall from its recent high to be called a bear market?", "difficulty": "easy", "options": [{"text": "20% or more", "correct": true, "explanation": "FINRA describes a 20% decline in a broad index as the bear-market threshold."}, {"text": "5% or more", "correct": false, "explanation": "A 5% dip is ordinary volatility and gets no special label."}, {"text": "50% or more", "correct": false, "explanation": "Falls that deep have happened, but the threshold is 20%."}]},
  {"question": "What is a market correction?", "difficulty": "easy", "options": [{"text": "A decline of at least 10% from a recent high", "correct": true, "explanation": "Corrections sit between ordinary dips and bear markets."}, {"text": "A government action that fixes stock prices", "correct": false, "explanation": "No agency sets or corrects stock prices. The term just describes a move."}, {"text": "A rise of 10% after a crash", "correct": false, "explanation": "A correction is a fall, not a rebound."}]},
  {"question": "Who officially declares that a bear market has started?", "difficulty": "medium", "options": [{"text": "Nobody. It's a convention applied by analysts and media once the 20% threshold is crossed", "correct": true, "explanation": "Unlike recessions, which the NBER dates, bull and bear markets have no official referee."}, {"text": "The SEC", "correct": false, "explanation": "The SEC regulates markets. It doesn't label market phases."}, {"text": "The Federal Reserve", "correct": false, "explanation": "The Fed sets monetary policy. It doesn't declare market phases."}]},
  {"question": "The S&P 500 fell about 57% from October 2007 to March 2009. What percentage gain was then needed just to get back to the old high?", "difficulty": "hard", "options": [{"text": "About 131%", "correct": true, "explanation": "After a 57% fall, 43% of the value remains. Getting back to 100% means a gain of about 57/43, or roughly 131%."}, {"text": "57%", "correct": false, "explanation": "A 57% gain on a smaller base doesn't get back to the starting point."}, {"text": "About 75%", "correct": false, "explanation": "That falls well short. Losses need larger percentage gains to recover."}]},
  {"question": "In early 2020, the S&P 500 dropped about 34% from its February 19 high. Roughly how long did that fall take?", "difficulty": "medium", "options": [{"text": "About a month (to March 23, 2020)", "correct": true, "explanation": "It was one of the fastest bear markets on record."}, {"text": "About three years", "correct": false, "explanation": "That's closer to slow bear markets like 2000 to 2002."}, {"text": "One trading day", "correct": false, "explanation": "Single-day falls that large trigger circuit breakers that halt trading."}]},
  {"question": "Why can a new bull market only be confirmed in hindsight?", "difficulty": "medium", "options": [{"text": "Because the low it's measured from is only known once prices have risen 20% above it", "correct": true, "explanation": "The 2022 low was only confirmed as the start of a bull market in June 2023."}, {"text": "Because exchanges publish the label a year later", "correct": false, "explanation": "Exchanges don't publish these labels at all."}, {"text": "Because bull markets are measured with bond prices", "correct": false, "explanation": "They're measured on broad stock indexes."}]},
  {"question": "How is a bear market different from a recession?", "difficulty": "medium", "options": [{"text": "A bear market is a fall in stock prices; a recession is a broad decline in economic activity", "correct": true, "explanation": "They often overlap, but stocks can fall without a recession, as in 2022, and vice versa."}, {"text": "They're two names for the same thing", "correct": false, "explanation": "One measures prices in a market, the other measures the real economy."}, {"text": "A recession is any 20% fall in the stock market", "correct": false, "explanation": "Recessions are dated by the NBER using jobs, income, spending and production."}]},
  {"question": "What happens if the S&P 500 falls 20% within a single trading day?", "difficulty": "hard", "options": [{"text": "A market-wide circuit breaker halts trading for the rest of the day", "correct": true, "explanation": "Level 3 circuit breakers close the market for the day. Levels 1 and 2 (7% and 13%) pause it for 15 minutes if hit before 3:25 p.m."}, {"text": "The SEC buys stocks to push prices back up", "correct": false, "explanation": "The SEC doesn't trade in the market."}, {"text": "Nothing; trading continues as normal", "correct": false, "explanation": "Circuit breakers exist precisely for falls this large."}]},
  {"question": "An index rises from 3,000 to 3,500 after a long fall. Has a new bull market begun, by the 20% convention?", "difficulty": "easy", "options": [{"text": "No, it needs to reach 3,600, which is 20% above the low", "correct": true, "explanation": "3,500 is about 16.7% above 3,000."}, {"text": "Yes, any rise of 500 points counts", "correct": false, "explanation": "The threshold is a percentage, not a point count."}, {"text": "Yes, because it's above the low", "correct": false, "explanation": "Being above the low isn't enough. The convention needs a 20% rise."}]},
  {"question": "Which statement best describes what the bull and bear labels tell an investor?", "difficulty": "medium", "options": [{"text": "What has already happened, not what will happen next", "correct": true, "explanation": "The labels are backward-looking measurements, not forecasts."}, {"text": "When to buy and when to sell", "correct": false, "explanation": "Nobody knows in real time where the bottom or top is."}, {"text": "How long the current trend will last", "correct": false, "explanation": "Historical lengths vary widely, so the label carries no timetable."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains what market labels mean and how they&apos;re measured, not personalized investment advice.</strong> Past market moves don&apos;t predict future ones, and investing involves risk, including loss of principal. For decisions about your own money, consult a licensed financial professional.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A bear market is a fall of 20% or more from a recent high in a broad index. A bull market is a rise of 20% or more from a low. A correction is a fall of at least 10%.",
          "These are conventions, not official rulings. Nobody declares them, and they're confirmed only after the move has happened.",
          "Losses need bigger percentage gains to recover: a 25% fall needs a 33% gain, and a 50% fall needs a 100% gain.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">&quot;Bull&quot; and &quot;bear&quot; are just shorthand for big moves up and big moves down. The usual story is that a bull thrusts its horns upward and a bear swipes its paws downward. The working definitions are simple percentages. If a broad index like the <TermLink href="/investing-markets-deep-dive/what-an-index-fund-actually-tracks">S&amp;P 500</TermLink> falls 20% or more from its most recent high, people call it a bear market. If it rises 20% or more from a low, that&apos;s a bull market. A fall of 10% to 20% is called a correction. The catch is that you only know which one you&apos;re in after the fact. On the day the market hits bottom, nobody knows it&apos;s the bottom. It only becomes &quot;the low&quot; once prices have climbed well away from it.</div>}
        detailed={<div className="prose-p"><strong>The thresholds.</strong> FINRA&apos;s investor guide describes a bear market as a decline of 20% or more in a broad market index, a correction as a reversal of at least 10%, and a bull market as a rise of 20% or more. Analysts usually measure on daily closing prices of a broad index, most often the S&amp;P 500, from the highest close to the lowest close (the <strong>drawdown</strong>). <strong>No referee.</strong> Unlike recessions, which the National Bureau of Economic Research dates using jobs, income, spending and production, no agency declares a bear or bull market. The SEC, the Federal Reserve and the exchanges don&apos;t issue these labels. <strong>Dating in hindsight.</strong> A bear market is dated from the prior peak, and a new bull market is dated back to the low once the index closes 20% above it. After the 2022 decline, the S&amp;P 500 closed about 20% above its October 12, 2022 low on June 8, 2023, and the new bull market was then dated from October. <strong>The edge case.</strong> A bear market can happen inside a strong economy and a bull market can begin while a recession is still underway; in 2009 stocks bottomed in March, three months before the NBER-dated recession ended in June. Prices react to expectations, so they often turn before the economic data does.</div>}
      />
      <FootnoteAside>Index levels and dates here are S&amp;P 500 daily closes (price only, excluding dividends), checked against the St. Louis Fed&apos;s FRED series and contemporaneous CNBC and CNN market reports citing S&amp;P Dow Jones Indices. Figures are rounded and were checked as of September 2026. Other indexes, or intraday prices, give slightly different numbers.</FootnoteAside>

      <QuickCheck
        question="The S&P 500 is 14% below its record high. Which label fits by the usual convention?"
        options={[
          { text: "A correction", correct: true, explanation: "Correct. A fall of at least 10% but less than 20% is a correction." },
          { text: "A bear market", correct: false, explanation: "Not yet. The bear-market threshold is a 20% decline." },
          { text: "A recession", correct: false, explanation: "A recession is about the economy, not stock prices, and is dated by the NBER." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The 2022 bear market (baseline case)</h3>
      <div className="prose-p">The S&amp;P 500 closed at about 4,797 on January 3, 2022. As inflation rose and the Federal Reserve raised interest rates, it slid to about 3,577 by October 12, 2022. The drawdown: (4,797 − 3,577) ÷ 4,797 ≈ 25.4%. It crossed the 20% line in June 2022, which is when headlines started saying &quot;bear market,&quot; though by then most of the fall had already happened. For a new bull market, the index needed a close 20% above the low: 3,577 × 1.2 ≈ 4,292. It got there on June 8, 2023, eight months after the bottom.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Fast and slow bears (edge case)</h3>
      <div className="prose-p">Bear markets differ enormously in speed and depth. In 2020 the S&amp;P 500 fell from about 3,386 on February 19 to about 2,237 on March 23, a drop of roughly 34% in just over a month, and it was back at a record high by August 2020. The 2007 to 2009 bear market ran from about 1,565 in October 2007 to about 677 in March 2009, roughly 57% over 17 months, and the index took more than four years to regain its 2007 high. Same label, very different experience. The label tells you the size of the fall that already happened, nothing about how long recovery will take.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why recovery takes a bigger percentage (applied)</h3>
      <div className="prose-p">Say $10,000 sits in a broad index fund. A 25% bear market cuts it to $7,500. To get back to $10,000, it needs to gain $2,500 on a $7,500 base, which is 33%, not 25%. A 50% fall turns $10,000 into $5,000, and getting back needs a 100% gain. This arithmetic is why the depth of a fall matters so much, and why rebounds off a bottom look so large in percentage terms. It works the same way as{" "}<TermLink href="/investing-markets-deep-dive/how-compound-interest-actually-builds-wealth-over-time">compounding</TermLink>: every percentage applies to whatever balance you have at that moment. It&apos;s also why, according to the SEC&apos;s Investor.gov, matching how much you hold in stocks to your time horizon and tolerance for losses matters before a bear market arrives, not during one.</div>

      <QuickCheck
        question="Your investment falls 40%. What gain do you need to break even?"
        options={[
          { text: "About 67%", correct: true, explanation: "Correct. 60% of the value remains, and 40 ÷ 60 ≈ 0.67, so you need about a 67% gain." },
          { text: "40%", correct: false, explanation: "A 40% gain on the smaller balance only gets you to 84% of where you started." },
          { text: "20%", correct: false, explanation: "That isn't close. Recovery needs a larger percentage than the loss." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How bull, bear and correction labels are measured"
        type="detail"
        svgSrc="/diagrams/investing-markets-deep-dive-what-a-bull-market-vs-bear-market-actually-means-timeline.svg"
        altText="A stylized index line rising to a peak, falling 10% (labelled correction zone) and then past 20% (labelled bear market), reaching a low, and climbing back. A marker 20% above the low is labelled: new bull market confirmed here and dated back to the low. Below, an example from 2022 and 2023: S&P 500 peak about 4,797 in January 2022, low about 3,577 in October 2022 (down about 25%), and the 20% recovery mark about 4,292 reached in June 2023."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the bear-market headline as a signal to sell.", fix: "By the time the 20% line is crossed, much of the fall has usually happened already. The label describes the past. Decisions belong to your plan, time horizon and risk tolerance." },
          { mistake: "Assuming a 30% loss needs a 30% gain to recover.", fix: "It needs about 43%. Work from the smaller balance: loss ÷ (100% − loss)." },
          { mistake: "Using 'bear market' and 'recession' interchangeably.", fix: "One is a fall in stock prices, the other a broad decline in economic activity dated by the NBER. They often overlap, but not always: 2022 had a bear market without an NBER-dated recession." },
        ]}
      />
      <MisconceptionCallout
        myth="Someone officially announces when a bull or bear market begins."
        reality={<p>No regulator, exchange or central bank declares them. The 20% threshold is a convention, and the start of a bull market is dated backward to the low only once prices have risen 20% from it. That&apos;s why you&apos;ll often see a new bull market &quot;begin&quot; months before anyone called it one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check which index a headline is measuring (S&P 500, Nasdaq, Dow) and whether the figure is from closing or intraday prices.",
          "Calculate the gain needed to recover from any loss with: loss ÷ (100% − loss).",
          "Read Investor.gov's guide to asset allocation and rebalancing before markets fall, not during a decline.",
          "If a market drop is pushing you toward a big decision, talk it through with a licensed financial professional first.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a bull market and a bear market?", answer: "A bull market is a rise of 20% or more in a broad index from a low. A bear market is a fall of 20% or more from a recent high. Both are conventions used by analysts and media, not official designations." },
          { question: "How long do bear markets usually last?", answer: "It varies widely. The 2020 bear market lasted about a month, the 2022 one about nine months from peak to low, and the 2007 to 2009 one about 17 months. The label doesn't predict duration." },
          { question: "Is a 10% drop a bear market?", answer: "No. A 10% to 20% decline is usually called a correction. A bear market starts at a 20% decline from the recent high." },
          { question: "Why is it called a bull or bear market?", answer: "The common explanation is how each animal attacks: a bull thrusts its horns up, a bear swipes its paws down. The exact origin of the terms is uncertain, but they've been used in markets for centuries." },
          { question: "Does a bear market mean a recession is coming?", answer: "Not necessarily. Stocks and the economy often move together, but 2022 had a bear market without an NBER-dated recession, and in 2009 stocks bottomed months before the recession ended." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
