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
  title: "How Diversification Actually Reduces Risk",
  category: "investing-markets-deep-dive",
  order: 8,
  subtopic: "market-fundamentals",
  tags: ["diversification", "risk", "correlation", "asset allocation", "portfolio"],
  date: "2026-10-01",
  updated: "2026-10-01",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-01",
  excerpt: "Diversification reduces risk because holdings that don't move together partly cancel each other's swings. It removes company-specific risk, not market-wide risk.",
  summary: "Diversification means spreading money across investments whose prices don't move in lockstep, so a loss in one is partly offset by others. The math, formalized by Harry Markowitz in 1952, shows portfolio volatility depends not only on each holding's volatility but on how they move together (correlation): two assets each swinging 20% a year, held 50/50, produce a portfolio swinging about 20% if perfectly correlated, about 17% at a correlation of 0.5, and about 14% if uncorrelated. Adding holdings shrinks company-specific (unsystematic) risk toward a floor set by market-wide (systematic) risk, which no amount of diversification removes; that floor is why diversified portfolios still fell sharply in 2008 and 2020. The SEC's Investor.gov and FINRA describe diversification as a way to manage risk, not to guarantee profits or prevent losses. Research by Bessembinder (2018) found most individual US stocks underperformed one-month Treasury bills over their lifetimes, which is the strongest practical case against concentration.",
  sources: [
    { label: "U.S. SEC, Investor.gov — Asset Allocation, Diversification and Rebalancing", url: "https://www.investor.gov/introduction-investing/getting-started/asset-allocation" },
    { label: "FINRA — Concentration Risk: Diversify to Mitigate Investment Risk", url: "https://www.finra.org/investors/insights/concentration-risk" },
    { label: "Markowitz, H. (1952) — Portfolio Selection, The Journal of Finance 7(1)", url: "https://doi.org/10.1111/j.1540-6261.1952.tb01525.x" },
    { label: "Bessembinder, H. (2018) — Do Stocks Outperform Treasury Bills?, Journal of Financial Economics 129(3)", url: "https://doi.org/10.1016/j.jfineco.2018.06.004" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/what-an-index-fund-actually-tracks",
    "investing-markets-deep-dive/what-a-mutual-fund-actually-is",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
    "investing-markets-deep-dive/what-a-bull-market-vs-bear-market-actually-means",
    "personal-finance-basics/why-insurance-exists-the-concept-of-pooled-risk",
  ],
  glossary: [
    { term: "Diversification", definition: "Spreading money across holdings whose prices don't all move together, so losses in some are partly offset by others." },
    { term: "Correlation", definition: "A number from -1 to +1 describing how closely two investments move together. +1 is lockstep, 0 is unrelated, -1 is opposite." },
    { term: "Volatility (standard deviation)", definition: "How widely an investment's returns typically swing around their average. A common measure of risk." },
    { term: "Unsystematic risk", definition: "Risk specific to one company or industry, such as a failed product or a fraud. Diversification can largely remove it." },
    { term: "Systematic risk", definition: "Market-wide risk, such as recessions or interest-rate shocks, that hits most investments at once. Diversification can't remove it." },
    { term: "Concentration risk", definition: "The extra risk of having a large share of your money in one stock, sector or asset, including an employer's stock." },
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
  {"question": "Why does holding several investments reduce a portfolio's swings?", "difficulty": "easy", "options": [{"text": "They don't all move together, so drops in some are partly offset by others", "correct": true, "explanation": "That partial cancelling is the entire mechanism."}, {"text": "More investments always earn higher returns", "correct": false, "explanation": "Diversification targets risk, not higher returns."}, {"text": "The government insures diversified portfolios", "correct": false, "explanation": "No such insurance exists for market losses."}]},
  {"question": "Two assets each swing about 20% a year and are perfectly correlated (+1). Held 50/50, how much does the portfolio swing?", "difficulty": "medium", "options": [{"text": "About 20%; perfectly correlated assets give no diversification benefit", "correct": true, "explanation": "If they move in lockstep, combining them changes nothing."}, {"text": "About 10%", "correct": false, "explanation": "Halving would need negative correlation effects."}, {"text": "0%", "correct": false, "explanation": "That's only possible with a correlation of -1."}]},
  {"question": "Same two 20%-volatility assets, but uncorrelated (0). What's the 50/50 portfolio's volatility?", "difficulty": "hard", "options": [{"text": "About 14%", "correct": true, "explanation": "With zero correlation, volatility falls to 20% divided by the square root of 2."}, {"text": "About 20%", "correct": false, "explanation": "That's the perfectly correlated case."}, {"text": "About 40%", "correct": false, "explanation": "Combining assets never adds their volatilities when weights sum to 100%."}]},
  {"question": "Which risk can diversification NOT remove?", "difficulty": "easy", "options": [{"text": "Market-wide (systematic) risk, like a recession hitting most stocks", "correct": true, "explanation": "That's the floor every diversified stock portfolio still carries."}, {"text": "One company's product recall", "correct": false, "explanation": "That's company-specific risk, which diversification dilutes."}, {"text": "One CEO's fraud", "correct": false, "explanation": "Also company-specific, and diluted when one holding is a small slice."}]},
  {"question": "What did Bessembinder (2018) find about individual US stocks since 1926?", "difficulty": "medium", "options": [{"text": "Most had lifetime returns below one-month Treasury bills; a small share created nearly all the wealth", "correct": true, "explanation": "About four in seven underperformed T-bills, and roughly 4% of companies accounted for the market's net wealth creation."}, {"text": "Almost every stock beat the market", "correct": false, "explanation": "Mathematically impossible, and the opposite of what was found."}, {"text": "Stocks and Treasury bills returned the same", "correct": false, "explanation": "The market as a whole beat T-bills, driven by a minority of stocks."}]},
  {"question": "During the 2008 crisis, many diversified stock portfolios still fell sharply. Why?", "difficulty": "medium", "options": [{"text": "Correlations between risky assets rose, and systematic risk dominated", "correct": true, "explanation": "In broad selloffs, assets that usually move somewhat independently tend to fall together."}, {"text": "Diversification stopped being legal", "correct": false, "explanation": "Nothing like that happened."}, {"text": "Diversified portfolios hold only one stock", "correct": false, "explanation": "That's the opposite of diversification."}]},
  {"question": "Owning 20 technology stocks is an example of what?", "difficulty": "easy", "options": [{"text": "Concentration in one sector, despite many holdings", "correct": true, "explanation": "Stocks in the same industry tend to be highly correlated."}, {"text": "Full diversification", "correct": false, "explanation": "Count matters less than how differently the holdings behave."}, {"text": "A risk-free portfolio", "correct": false, "explanation": "No stock portfolio is risk-free."}]},
  {"question": "According to Investor.gov and FINRA, what does diversification guarantee?", "difficulty": "easy", "options": [{"text": "Nothing; it helps manage risk but doesn't guarantee a profit or prevent losses", "correct": true, "explanation": "Both regulators state this limit explicitly."}, {"text": "That you won't lose money", "correct": false, "explanation": "Diversified portfolios can and do lose money."}, {"text": "Above-market returns", "correct": false, "explanation": "A broadly diversified portfolio is designed to roughly match markets, not beat them."}]},
  {"question": "Who first formalized the math of diversification, showing correlation matters as much as individual risk?", "difficulty": "medium", "options": [{"text": "Harry Markowitz, in 1952", "correct": true, "explanation": "His paper \"Portfolio Selection\" founded modern portfolio theory."}, {"text": "Adam Smith, in 1776", "correct": false, "explanation": "The Wealth of Nations predates portfolio mathematics."}, {"text": "John Bogle, in 1975", "correct": false, "explanation": "Bogle popularized index funds, a way to diversify cheaply, but didn't derive the math."}]},
  {"question": "Holding 1, 10 and 30 stocks that each swing 20% with pairwise correlation 0.3, what happens to volatility?", "difficulty": "hard", "options": [{"text": "It falls fast at first (about 20% to 12%), then levels off near 11%", "correct": true, "explanation": "The floor is set by the shared, market-wide component of risk."}, {"text": "It keeps falling toward zero", "correct": false, "explanation": "Only if correlations were zero would it keep falling toward zero."}, {"text": "It rises with every stock added", "correct": false, "explanation": "Adding imperfectly correlated holdings lowers volatility."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how diversification works, cited to the SEC&apos;s Investor.gov, FINRA and peer-reviewed research. It is financial literacy, not personal investment advice, and no investment named here is a recommendation.</strong> The numbers are illustrations, not forecasts. For decisions about your own money, talk to a licensed financial adviser.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Diversification works because investments that don't move in lockstep partly cancel each other's swings. How they move together (correlation) matters as much as how risky each one is.",
          "It removes most company-specific risk, but not market-wide risk. That floor is why diversified portfolios still fell sharply in 2008 and 2020.",
          "Counting holdings isn't enough: 20 stocks in one industry are still concentrated. Regulators are explicit that diversification manages risk; it doesn't guarantee profits or prevent losses.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture a street vendor who sells only umbrellas. Rainy weeks are great; sunny weeks are terrible. Add sunglasses to the cart and the weekly takings get much steadier, because the two products do well in opposite weather. That&apos;s diversification. It doesn&apos;t make the vendor earn more on average; it makes the income less jumpy, because a bad week for one product is a good week for the other. Investing works the same way, with one catch: most investments aren&apos;t umbrellas and sunglasses. They&apos;re more like umbrellas and raincoats, which mostly do well and badly at the same time. Spreading across them still helps, just less. And when something hits every product at once (the market closes, a recession), no mix of products protects you. That&apos;s the part of risk you can&apos;t diversify away.</div>}
        detailed={<div className="prose-p">Markowitz (1952) showed that portfolio variance is not the weighted average of the holdings&apos; variances. For two assets, it&apos;s w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂, where ρ is the correlation between them. Unless ρ equals +1, the portfolio&apos;s volatility is lower than the weighted average of the parts, and the lower the correlation, the bigger the reduction. Generalized to many equal-weighted holdings with the same volatility σ and average pairwise correlation ρ, portfolio variance becomes σ²[1/N + (1 − 1/N)ρ]. As N grows, the 1/N term (company-specific, or unsystematic, risk) shrinks toward zero, leaving σ²ρ, the systematic risk all the holdings share. That&apos;s the floor. FINRA frames the practical consequence as concentration risk: a large position in one stock, sector or employer adds risk that isn&apos;t compensated by higher expected return, because it could be diversified away at little cost. Bessembinder (2018) supplies the empirical bite: of US common stocks since 1926, about four in seven had lifetime buy-and-hold returns below one-month Treasury bills, and roughly 4% of companies accounted for the market&apos;s entire net wealth creation. A concentrated portfolio is, statistically, a bet on finding the few big winners.</div>}
      />
      <FootnoteAside>Markowitz shared the 1990 Nobel Memorial Prize in Economic Sciences for this work. The idea that you shouldn&apos;t &quot;put all your eggs in one basket&quot; is centuries old; his contribution was showing precisely how much the basket&apos;s risk depends on how the eggs relate to each other.</FootnoteAside>

      <p>In practice, most people get broad diversification through pooled funds, like <TermLink href="/investing-markets-deep-dive/what-an-index-fund-actually-tracks">index funds</TermLink> and <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">mutual funds</TermLink>, and through mixing asset types that tend to behave differently, such as <TermLink href="/investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs">stocks and bonds</TermLink>. The same pooling logic is what makes <TermLink href="/personal-finance-basics/why-insurance-exists-the-concept-of-pooled-risk">insurance</TermLink> work.</p>

      <QuickCheck
        question="Which pair is likely to give the biggest diversification benefit when combined?"
        options={[
          { text: "Two assets with a correlation near 0", correct: true, explanation: "Correct. Unrelated movements cancel more of each other's swings than assets that move together." },
          { text: "Two assets with a correlation near +1", correct: false, explanation: "Assets that move in lockstep give almost no benefit when combined." },
          { text: "Two shares of the same company", correct: false, explanation: "That's the same holding twice: correlation exactly +1." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>All numbers below are hypothetical illustrations of the math, not forecasts or historical returns of any real investment.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Two assets, three correlations (baseline case)</h3>
      <div className="prose-p">Take two investments that each swing about 20% a year (their volatility) and put half your money in each. If their correlation is +1, the portfolio swings about 20%: no benefit at all. At a correlation of 0.5, it swings about 17.3%. At 0, it swings about 14.1%. At -1 (perfect opposites, which almost never exists in practice), the swings would cancel completely. Same two assets, same weights, same individual risk. The only thing that changed was how they move together, and it cut volatility by up to 30% in the realistic cases.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adding more stocks, and hitting the floor (edge case)</h3>
      <div className="prose-p">Now imagine stocks that each swing 20% a year with an average correlation of 0.3 between any pair. One stock: 20% volatility. Ten stocks, equally weighted: about 12.2%. Thirty stocks: about 11.4%. A thousand: about 11%. The first ten holdings do most of the work, and then the line goes nearly flat. That flat line is systematic risk, the 0.3 correlation everything shares because every company lives in the same economy. This is exactly what investors saw in 2008 and in March 2020: broadly diversified stock portfolios still fell hard, because in a market-wide shock correlations rise and the shared risk dominates (see <TermLink href="/investing-markets-deep-dive/what-a-bull-market-vs-bear-market-actually-means">bull vs bear markets</TermLink>).</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The employee with half their savings in company stock (applied)</h3>
      <div className="prose-p">A worker holds $100,000 in savings, $50,000 of it in their employer&apos;s stock through a workplace plan. Their paycheck and half their savings now depend on one company. If it runs into trouble, they could lose income and savings at the same moment, which is the correlation problem at its sharpest. FINRA flags employer stock as a common source of concentration risk. Bessembinder&apos;s finding that most individual stocks underperform Treasury bills over their lifetimes is the sober backdrop: any single company, including a strong one today, carries a real chance of long-term disappointment. How much to hold is a personal decision involving taxes, plan rules and goals, which is where a licensed adviser earns their fee.</div>

      <QuickCheck
        question="Someone owns 25 different bank stocks and says they're well diversified. What's the problem?"
        options={[
          { text: "Stocks in one industry are highly correlated, so a banking crisis would hit nearly all of them at once", correct: true, explanation: "Correct. Count matters far less than how differently the holdings behave." },
          { text: "25 is too many stocks to own", correct: false, explanation: "The number isn't the issue; the lack of variety is." },
          { text: "Bank stocks can't be diversified", correct: false, explanation: "They can be part of a diversified portfolio, just not the whole of one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Volatility falls as holdings are added, then hits a floor"
        type="comparison"
        svgSrc="/diagrams/investing-markets-deep-dive-how-diversification-actually-reduces-risk-comparison.svg"
        altText="A chart of portfolio volatility against number of holdings, using illustrative stocks that each swing 20% a year with a 0.3 average correlation. Volatility drops from 20% with one stock to about 12% with ten, then flattens near 11%. The shrinking area is labeled company-specific risk (diversifiable) and the flat floor is labeled market-wide risk (not diversifiable)."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Counting holdings instead of checking how they relate.", fix: "Look at sectors, countries and asset types. Several funds that all track large US companies can overlap heavily." },
          { mistake: "Expecting diversification to prevent losses in a crash.", fix: "It reduces company-specific risk. Market-wide drops still hit diversified stock portfolios; how much stock versus other assets you hold is a separate decision." },
          { mistake: "Letting one winner grow into most of the portfolio.", fix: "Concentration can creep in when one holding rises. Investor.gov describes periodic rebalancing back to your chosen mix for this reason." },
          { mistake: "Assuming the past correlation will hold in a crisis.", fix: "Correlations between risky assets often rise in selloffs. Treat historical correlation as a rough guide, not a guarantee." },
        ]}
      />
      <MisconceptionCallout
        myth="Diversification lowers your returns, so it's for people who don't know how to pick stocks."
        reality={<p>Diversification lowers the range of outcomes, not necessarily the average. A broadly diversified portfolio earns roughly the market&apos;s return with far less single-company risk. Concentrating is a bet on finding the minority of stocks that, per Bessembinder&apos;s research, produced nearly all of the market&apos;s long-run gains.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "List what you hold by sector, country and asset type, not just by fund or stock name.",
          "Check for overlap: funds with different names can own many of the same companies.",
          "Note any single holding (including employer stock) that is a large share of your savings.",
          "Read Investor.gov's asset allocation and rebalancing guide before changing anything.",
          "For decisions specific to your situation, including taxes on selling, consult a licensed financial adviser.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does diversification reduce risk?", answer: "Investments that don't move in perfect lockstep partly offset each other's ups and downs, so the combined portfolio swings less than its parts. The less they move together, the bigger the effect." },
          { question: "How many stocks do you need to be diversified?", answer: "Older studies suggested a few dozen stocks remove most company-specific risk; later research found more may be needed as individual stocks became more volatile. Many people sidestep the question with broad index funds." },
          { question: "Does diversification protect against a market crash?", answer: "Only partly. It removes company-specific risk, but market-wide risk remains, and correlations often rise in crashes. Mixing in different asset types is a separate lever." },
          { question: "Can you be too diversified?", answer: "Owning many overlapping funds can add cost and complexity without reducing risk further. Past a point, more holdings barely move volatility." },
          { question: "What is the difference between diversification and asset allocation?", answer: "Asset allocation is how you split money between asset types such as stocks, bonds and cash. Diversification is spreading within and across those types so no single holding dominates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
