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
  title: "How Interest Rate Changes Actually Affect Investments",
  category: "investing-markets-deep-dive",
  order: 10,
  subtopic: "market-fundamentals",
  tags: ["interest rates", "bond prices", "duration", "federal reserve", "rate hikes", "stock valuation", "interest rate risk"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 81, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "When interest rates rise, existing bond prices fall, savings yields climb and future profits are worth less today. How much each investment moves depends mostly on how far away its cash arrives.",
  summary: "Interest rate changes affect investments through one mechanism: the rate used to value future cash. When market rates rise, existing fixed-rate bonds fall in price because new bonds pay more, and the fall is larger the longer the bond's duration. A 10-year bond paying 3% loses about 8% of its price if comparable rates rise to 4%, while a 2-year bond loses about 2%. Savings accounts and money market funds start paying more fairly quickly. Stocks are affected because higher rates make far-off profits worth less today and raise companies' borrowing costs, which tends to hit companies whose profits are furthest in the future hardest. Markets price expected changes in advance, so the surprise matters more than the announcement. The Federal Reserve sets a target for short-term rates, while longer-term rates are set by the bond market.",
  sources: [
    { label: "Board of Governors of the Federal Reserve System — Monetary Policy", url: "https://www.federalreserve.gov/monetarypolicy.htm" },
    { label: "Federal Reserve — Open Market Operations: history of federal funds target rate changes", url: "https://www.federalreserve.gov/monetarypolicy/openmarket.htm" },
    { label: "U.S. SEC, Investor.gov — Interest rate risk (glossary)", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/interest-rate-risk" },
    { label: "U.S. SEC, Investor.gov — Bonds", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds" },
    { label: "FINRA — Bonds (investment products)", url: "https://www.finra.org/investors/investing/investment-products/bonds" },
    { label: "U.S. Department of the Treasury — Daily Treasury Par Yield Curve Rates", url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates" },
  ],
  seeAlso: [
    "economics/how-interest-rates-actually-get-set",
    "economics/what-the-federal-reserve-actually-does",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
    "investing-markets-deep-dive/how-diversification-actually-reduces-risk",
    "personal-finance-basics/high-yield-savings-accounts-explained",
    "economics/what-gdp-actually-measures",
  ],
  glossary: [
    { term: "Federal funds rate", definition: "The interest rate banks charge each other for overnight loans of reserves. The Federal Reserve sets a target range for it, which anchors other short-term rates." },
    { term: "Yield", definition: "The return an investor earns on a bond at its current price, expressed as an annual percentage. When a bond's price falls, its yield rises." },
    { term: "Coupon", definition: "The fixed interest payment a bond makes, set when the bond is issued and stated as a percentage of its face value." },
    { term: "Duration", definition: "A measure of a bond's sensitivity to interest rate changes, in years. Roughly, a bond's price moves about duration × the rate change, in the opposite direction." },
    { term: "Interest rate risk", definition: "The risk that a rise in market interest rates lowers the price of an investment, especially fixed-rate bonds." },
    { term: "Discount rate", definition: "The rate used to convert money expected in the future into its value today. A higher discount rate makes future cash worth less now." },
    { term: "Yield curve", definition: "A chart of bond yields across different maturities, from short-term to long-term, at one point in time." },
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
  {"question": "When market interest rates rise, what usually happens to the price of an existing fixed-rate bond?", "difficulty": "easy", "options": [{"text": "It falls", "correct": true, "explanation": "New bonds pay more, so the older, lower-paying bond must get cheaper to attract a buyer."}, {"text": "It rises", "correct": false, "explanation": "That happens when rates fall."}, {"text": "It stays the same until maturity", "correct": false, "explanation": "The face value at maturity is fixed, but the market price moves every day."}]},
  {"question": "A $1,000 10-year bond pays a 3% coupon. Comparable rates rise to 4%. Roughly what is it now worth?", "difficulty": "medium", "options": [{"text": "About $919", "correct": true, "explanation": "Discounting its $30 payments and $1,000 repayment at 4% gives about $918.89, an 8% drop."}, {"text": "About $990", "correct": false, "explanation": "That understates the effect; ten years of below-market payments add up."}, {"text": "About $750", "correct": false, "explanation": "That overstates it; the bond still pays $1,000 at maturity."}]},
  {"question": "Two bonds both pay 3%. Rates rise 1 point. Which falls more in price?", "difficulty": "medium", "options": [{"text": "The 20-year bond", "correct": true, "explanation": "It falls about 13.6% versus about 1.9% for a 2-year bond; longer duration means more sensitivity."}, {"text": "The 2-year bond", "correct": false, "explanation": "Short bonds are repaid soon, so they're less exposed."}, {"text": "They fall the same amount", "correct": false, "explanation": "Same coupon, different maturity, very different sensitivity."}]},
  {"question": "A bond fund has a duration of 6 years. Rates rise by 1 percentage point. What is the rough expected price change?", "difficulty": "medium", "options": [{"text": "About −6%", "correct": true, "explanation": "Price change ≈ −duration × rate change = −6 × 1%."}, {"text": "About −1%", "correct": false, "explanation": "That ignores duration."}, {"text": "About +6%", "correct": false, "explanation": "Rising rates push bond prices down, not up."}]},
  {"question": "What does the Federal Reserve directly set?", "difficulty": "easy", "options": [{"text": "A target range for the federal funds rate, a short-term rate", "correct": true, "explanation": "Longer-term rates, such as the 10-year Treasury yield and mortgage rates, are set by markets."}, {"text": "The 30-year mortgage rate", "correct": false, "explanation": "Mortgage rates follow longer-term market yields, not a Fed decree."}, {"text": "Stock prices", "correct": false, "explanation": "The Fed doesn't set stock prices."}]},
  {"question": "$100 arrives in 10 years. What happens to its value today if the discount rate rises from 3% to 5%?", "difficulty": "hard", "options": [{"text": "It falls from about $74 to about $61", "correct": true, "explanation": "100 ÷ 1.03¹⁰ ≈ $74.41; 100 ÷ 1.05¹⁰ ≈ $61.39, a drop of about 17.5%."}, {"text": "It falls from about $97 to about $95", "correct": false, "explanation": "Those are the values for $100 arriving in one year."}, {"text": "It doesn't change", "correct": false, "explanation": "A higher discount rate always lowers the value of future money."}]},
  {"question": "Why do rate rises tend to hit fast-growing companies with distant profits harder than mature, steady ones?", "difficulty": "hard", "options": [{"text": "More of their value comes from cash expected far in the future, which higher rates discount most", "correct": true, "explanation": "Like a long-duration bond, far-off cash is the most rate-sensitive."}, {"text": "They pay more taxes", "correct": false, "explanation": "Taxes aren't the mechanism here."}, {"text": "The Fed regulates growth companies differently", "correct": false, "explanation": "There's no separate regulation; it's discounting math."}]},
  {"question": "The Fed raises rates by exactly the amount markets expected. What often happens to bond prices that day?", "difficulty": "medium", "options": [{"text": "Little, because the expected move was already priced in", "correct": true, "explanation": "Markets move on surprises and on changed expectations about future decisions."}, {"text": "They always crash", "correct": false, "explanation": "An expected move is mostly reflected in prices beforehand."}, {"text": "They always rise sharply", "correct": false, "explanation": "There's no automatic jump; the surprise is what matters."}]},
  {"question": "What happened to broad US stock and bond markets in 2022, as the Fed raised rates from near zero?", "difficulty": "hard", "options": [{"text": "Both fell, with broad US bond indexes having their worst year in decades", "correct": true, "explanation": "Rising rates hurt both at once, a reminder that bonds don't always offset stock losses."}, {"text": "Stocks fell and bonds rose, as usual", "correct": false, "explanation": "That common pattern broke in 2022."}, {"text": "Both rose", "correct": false, "explanation": "Both declined."}]},
  {"question": "You own an individual high-quality bond and plan to hold it to maturity. Rates rise. What happens to what you receive?", "difficulty": "medium", "options": [{"text": "You still get the coupons and face value as scheduled, assuming no default; only the interim price drops", "correct": true, "explanation": "The loss is a market-price loss you only lock in if you sell early, though you miss out on the higher rates available."}, {"text": "Your coupon payments are cut", "correct": false, "explanation": "A fixed-rate bond's coupon doesn't change."}, {"text": "You lose the difference at maturity", "correct": false, "explanation": "Face value is repaid in full at maturity barring default."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how interest rates affect investment prices, cited to the Federal Reserve, the SEC&apos;s Investor.gov, FINRA and the US Treasury. It is financial literacy, not personal investment advice, and nothing here recommends any security or predicts future rates.</strong> Examples are simplified illustrations; past market behavior does not guarantee future results. For decisions about your own money, talk to a licensed financial adviser.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Rates are the price of waiting for money. When they rise, any cash you're due in the future is worth less today, so investments that pay you later fall in price.",
          "Bonds show it most clearly: a 3% bond with 10 years left loses about 8% of its price if similar bonds start paying 4%. A 2-year bond loses about 2%. Longer means more sensitive.",
          "Savings yields rise fairly quickly, stocks react through valuations and borrowing costs, and markets move on surprises, not on decisions they already expected.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine you lent a friend $1,000 and they promised $30 a year for 10 years, then your $1,000 back. A week later, banks start offering $40 a year for the same deal. If you wanted to sell your IOU to someone else, nobody would pay the full $1,000 for $30 a year when $40 is on offer. You&apos;d have to knock the price down until the deal looked as good as the new one. That&apos;s exactly what happens to bonds when interest rates rise: their prices fall. The longer the IOU has left to run, the bigger the discount, because the buyer is stuck with the lower payment for longer. The same idea spreads to everything else. Your savings account starts paying more. Stocks get pushed around too, because a company&apos;s value is really a long string of future profits, and higher rates make far-off profits worth less in today&apos;s money. When rates fall, all of this runs in reverse.</div>}
        detailed={<div className="prose-p">The Federal Reserve sets a target range for the <strong>federal funds rate</strong>, an overnight rate, and that anchors other short-term rates such as savings and money market yields. Longer rates, like the 10-year Treasury yield, are set in the bond market and reflect expected future short rates plus a term premium (see <TermLink href="/economics/how-interest-rates-actually-get-set">how interest rates get set</TermLink>). Every investment&apos;s price is the present value of its expected cash flows, discounted at a rate that includes the market rate. For a fixed-rate bond, the cash flows are known, so the price moves mechanically with yields. The sensitivity is measured by <strong>duration</strong>: price change ≈ −duration × change in yield. Duration rises with maturity and falls with higher coupons, which is why a 30-year bond is far more rate-sensitive than a 2-year one. For stocks, rates enter in two ways: through the discount rate, which hits companies whose cash flows are furthest away hardest (high-growth stocks behave like long-duration assets), and through the economy, since higher borrowing costs squeeze profits and slow spending. The edge case is expectations: prices already reflect the path of rates markets expect, so a widely anticipated Fed move can barely register, while a surprise in guidance can move markets sharply. Falling rates reverse all of it.</div>}
      />
      <FootnoteAside>2022 is the recent test case. The Fed raised its target from 0–0.25% in March 2022 to 5.25–5.50% by July 2023, one of the fastest increases in decades. In 2022, broad US stock and investment-grade bond indexes both fell by double digits, which is unusual: bonds normally cushion stock losses. Rising rates were the common cause.</FootnoteAside>

      <p>That&apos;s why the classic idea that bonds offset stocks is a tendency, not a law. It holds best when stocks fall because of a growth scare, and fails when both fall because rates jump. Understanding the mechanism is what makes <TermLink href="/investing-markets-deep-dive/how-diversification-actually-reduces-risk">diversification</TermLink> realistic rather than magical.</p>

      <QuickCheck
        question="Why does a bond's price fall when interest rates rise?"
        options={[
          { text: "Its fixed payments now look worse than what new bonds offer, so it must sell at a discount", correct: true, explanation: "Correct. The price drops until its yield matches the new market rate." },
          { text: "The issuer cuts the coupon payments", correct: false, explanation: "Fixed-rate coupons don't change after issue." },
          { text: "The Fed buys up old bonds", correct: false, explanation: "The price change comes from market competition with new, higher-paying bonds." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The bonds and numbers below are hypothetical, using standard present-value arithmetic with annual payments. They are illustrations, not forecasts or real securities.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One bond, one rate rise (baseline case)</h3>
      <div className="prose-p">A $1,000 bond with 10 years left pays a 3% coupon, $30 a year. Comparable bonds now yield 4%. Its price is the present value of ten $30 payments plus the $1,000 repayment, discounted at 4%: about <strong>$918.89</strong>, an 8.1% fall. A buyer paying $918.89 earns $30 a year plus a $81 gain at maturity, which works out to the 4% market rate. If rates had instead fallen to 2%, the same bond would be worth about $1,089.83. The bond didn&apos;t change. The alternative did.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Same rise, different maturities (edge case)</h3>
      <div className="prose-p">Run the same 1-point rise, 3% to 4%, on 3% bonds of different lengths. A 2-year bond falls to about $981 (<strong>−1.9%</strong>). A 10-year falls 8.1%. A 20-year falls to about $864 (<strong>−13.6%</strong>), and a 30-year to about $827 (−17.3%). That spread is duration at work. For a bond fund, the rule of thumb is the fund&apos;s stated duration: one with a duration of 6 would be expected to lose roughly 6% on a 1-point rise. It also earns higher yields as it reinvests, which over time offsets part of the price drop.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Stocks and savings (applied)</h3>
      <div className="prose-p">Discounting works the same way for stock valuations. $100 of profit expected next year is worth about $97.09 today at 3% and $95.24 at 5%, a 1.9% difference. $100 expected in 10 years is worth $74.41 at 3% but only $61.39 at 5%, a <strong>17.5%</strong> difference. A company whose value depends mainly on profits a decade out is much more exposed to rising rates than one earning steady profits now. Meanwhile, cash benefits: a <TermLink href="/personal-finance-basics/high-yield-savings-accounts-explained">high-yield savings account</TermLink> or money market fund usually raises its rate within weeks of a Fed increase, though by how much varies by provider. A certificate of deposit opened before the rise stays locked at its old rate until it matures.</div>

      <QuickCheck
        question="Rates rise 1 point. Which holding is likely to fall most in price?"
        options={[
          { text: "A bond fund with a duration of 15 years", correct: true, explanation: "Correct. Roughly −15%, versus about −2% for a duration-2 fund." },
          { text: "A bond fund with a duration of 2 years", correct: false, explanation: "Short duration means low sensitivity, about −2%." },
          { text: "A money market fund", correct: false, explanation: "Its price is designed to be stable, and its yield tends to rise with rates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What a 1-point rate rise does to different investments"
        type="comparison"
        svgSrc="/diagrams/investing-markets-deep-dive-how-interest-rate-changes-actually-affect-investments-comparison.svg"
        altText="A bar chart of the price change on $1,000 bonds paying 3% when comparable rates rise from 3% to 4%: 2-year bond minus 1.9%, 10-year minus 8.1%, 20-year minus 13.6%, 30-year minus 17.3%. A side panel shows the same logic for stocks: $100 due in 1 year loses 1.9% of its present value when the discount rate rises from 3% to 5%, while $100 due in 10 years loses 17.5%. A note says savings yields tend to rise, and the further away the cash, the bigger the hit."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating bonds as risk-free because they're 'safe'.", fix: "High-quality bonds have low default risk, but their prices still carry interest rate risk. Check a bond fund's duration to gauge it." },
          { mistake: "Trading on the Fed announcement itself.", fix: "Expected moves are already in prices. What moves markets is a surprise or a change in the expected path." },
          { mistake: "Assuming the Fed sets mortgage and long-term rates.", fix: "The Fed sets a short-term target. Long rates come from the bond market and can move in the opposite direction." },
          { mistake: "Panic-selling a bond held to maturity after rates rise.", fix: "If the issuer doesn't default, you still receive the scheduled payments and face value. Understand the trade-off before selling at a loss." },
        ]}
      />
      <MisconceptionCallout
        myth="When the Fed raises rates, the stock market always goes down."
        reality={<p>Higher rates are a headwind for valuations, but stocks respond to the surprise relative to expectations and to what the rate move says about the economy. Markets have risen during some hiking cycles and fallen in others. The reliable relationship is the one for fixed-rate bonds: when their yields rise, their prices fall.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up the duration of any bond fund you hold; it's usually listed on the fund's fact sheet.",
          "Check the Fed's current federal funds target range on federalreserve.gov rather than relying on headlines.",
          "Compare current Treasury yields across maturities on the Treasury's daily yield curve page.",
          "Check what your savings account or money market fund currently pays, and compare it with the market.",
          "Read Investor.gov's explanation of interest rate risk before buying long-term bonds.",
          "For how rate changes should affect your own portfolio, talk to a licensed financial adviser.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do bond prices go down when interest rates go up?", answer: "Because new bonds pay the higher rate, an existing bond with a lower fixed payment has to sell for less to give a buyer the same return. Its price falls until its yield matches the market." },
          { question: "How do interest rate cuts affect stocks?", answer: "Cuts lower the rate used to value future profits and reduce borrowing costs, which tends to support stock valuations. But markets usually price expected cuts in advance, and cuts made because the economy is weakening can come alongside falling profits." },
          { question: "What is bond duration in simple terms?", answer: "A number, in years, that tells you roughly how much a bond's price will move for a 1-point change in rates. A duration of 7 means about a 7% price move, in the opposite direction to rates." },
          { question: "Are savings accounts affected by Fed rate changes?", answer: "Yes. Savings and money market yields usually follow the federal funds rate up and down fairly quickly, though each bank decides its own rate. Fixed-rate CDs stay at their rate until maturity." },
          { question: "Do higher interest rates hurt all investments?", answer: "Not all. They lower the prices of existing bonds and pressure stock valuations, but new bonds, CDs, savings and money market funds pay more, so savers and new bond buyers benefit." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
