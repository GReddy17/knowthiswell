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
  title: "What an Index Fund Actually Tracks",
  category: "investing-markets-deep-dive",
  order: 5,
  subtopic: "market-fundamentals",
  tags: ["index fund", "s&p 500", "market cap weighting", "expense ratio", "passive investing"],
  date: "2026-09-26",
  updated: "2026-09-26",
  lastReviewed: "2026-09-26",
  excerpt: "An index fund doesn't pick stocks. It copies a published list, usually weighted by company size, so what you actually own depends entirely on the index's rules. The rules, and the fee, matter more than the fund's name.",
  summary: "An index fund is a mutual fund or ETF that tries to match the performance of a market index, per the SEC's Investor.gov, rather than beat it by picking stocks. The index is a rules-based list maintained by a company such as S&P Dow Jones Indices: the S&P 500, for example, holds about 500 large U.S. companies chosen by a committee under published eligibility rules and weighted by the market value of their publicly available shares. Because of that weighting, the biggest companies make up a much larger share of the fund than the smallest, so an index fund can be more concentrated than '500 stocks' suggests. Index funds usually charge low fees because no one is paid to pick stocks, and S&P's SPIVA scorecards have repeatedly found that most actively managed large-company funds trail the S&P 500 over long periods. An index fund still falls when its market falls. This is general education, not investment advice.",
  sources: [
    { label: "SEC Investor.gov — Index Funds (glossary)", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/index-funds" },
    { label: "SEC — Mutual Funds and ETFs: A Guide for Investors", url: "https://www.sec.gov/files/ib_mutualfunds.pdf" },
    { label: "S&P Dow Jones Indices — S&P 500 index overview", url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/" },
    { label: "S&P Dow Jones Indices — SPIVA (active vs. passive scorecards)", url: "https://www.spglobal.com/spdji/en/research-insights/spiva/" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/what-a-mutual-fund-actually-is",
    "investing-markets-deep-dive/how-the-stock-market-actually-works",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
    "investing-markets-deep-dive/how-dividend-investing-actually-works",
    "personal-finance-basics/understanding-retirement-accounts-basic-mechanics",
    "investing-markets-deep-dive/how-compound-interest-actually-builds-wealth-over-time",
    "investing-markets-deep-dive/what-a-bull-market-vs-bear-market-actually-means",
  ],
  glossary: [
    { term: "Index", definition: "A published, rules-based list of securities, with a formula for weighting them, used to measure a slice of the market. The index itself isn't something you can buy." },
    { term: "Index fund", definition: "A mutual fund or ETF that holds the securities in an index, in roughly the same proportions, to match its return." },
    { term: "Market-cap weighting", definition: "Weighting each company by its total market value, so larger companies take up a larger share of the index." },
    { term: "Expense ratio", definition: "The yearly fee a fund charges, as a percentage of your investment, taken out of the fund's returns." },
    { term: "Tracking error", definition: "How far a fund's return drifts from its index's return, due to fees, cash holdings, and trading costs." },
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
  {"question": "What is an index fund trying to do?", "difficulty": "easy", "options": [{"text": "Match the return of a specific market index", "correct": true, "explanation": "Per Investor.gov, it aims to track an index, not beat it."}, {"text": "Beat the market by picking the best stocks", "correct": false, "explanation": "That's the goal of an actively managed fund."}, {"text": "Guarantee it never loses money", "correct": false, "explanation": "It falls when its index falls."}]},
  {"question": "In a market-cap-weighted index, which company has the biggest influence on returns?", "difficulty": "easy", "options": [{"text": "The one with the largest total market value", "correct": true, "explanation": "Weight follows size, so the biggest companies move the index most."}, {"text": "Every company counts equally", "correct": false, "explanation": "That describes an equal-weight index, a different design."}, {"text": "The company with the highest share price", "correct": false, "explanation": "Share price alone doesn't matter. Total market value does."}]},
  {"question": "Who decides which companies are in the S&P 500?", "difficulty": "medium", "options": [{"text": "A committee at S&P Dow Jones Indices, using published eligibility rules", "correct": true, "explanation": "It isn't simply the 500 largest; the committee applies criteria such as size, liquidity and profitability."}, {"text": "The SEC", "correct": false, "explanation": "The SEC regulates funds but doesn't pick index members."}, {"text": "Each index fund's manager", "correct": false, "explanation": "The fund copies the index; it doesn't choose the members."}]},
  {"question": "Two funds track the same index. One charges 0.05% a year, the other 1%. What's the likely long-term result?", "difficulty": "medium", "options": [{"text": "The cheaper fund ends up with noticeably more money", "correct": true, "explanation": "Same holdings, so the fee difference compounds directly into the gap."}, {"text": "The expensive one does better because you get what you pay for", "correct": false, "explanation": "Both hold the same stocks; the fee just reduces returns."}, {"text": "They end up identical", "correct": false, "explanation": "The fee comes out every year and compounds."}]},
  {"question": "What is tracking error?", "difficulty": "hard", "options": [{"text": "The gap between a fund's return and its index's return", "correct": true, "explanation": "Fees, cash drag and trading costs cause it."}, {"text": "A mistake in the index's published list", "correct": false, "explanation": "It's about the fund's performance versus the index."}, {"text": "The fund's yearly loss", "correct": false, "explanation": "A fund can have tracking error in an up year too."}]},
  {"question": "What have S&P's SPIVA scorecards repeatedly found?", "difficulty": "medium", "options": [{"text": "Most actively managed large-company U.S. funds trail the S&P 500 over long periods", "correct": true, "explanation": "The share that underperform grows as the time horizon lengthens."}, {"text": "Active funds nearly always beat index funds", "correct": false, "explanation": "The scorecards show the opposite over long horizons."}, {"text": "Index funds and active funds always return the same", "correct": false, "explanation": "Returns differ, and on average fees tilt the result toward index funds."}]},
  {"question": "Can an S&P 500 index fund lose half its value?", "difficulty": "hard", "options": [{"text": "Yes, the index fell by more than half from its 2007 peak to its 2009 low", "correct": true, "explanation": "Diversifying across one market doesn't protect you from that market falling."}, {"text": "No, owning 500 companies makes large losses impossible", "correct": false, "explanation": "When the whole market falls, the fund falls with it."}, {"text": "No, index funds are government insured", "correct": false, "explanation": "Investments aren't FDIC insured."}]},
  {"question": "Which is a better description of what you own in an index fund?", "difficulty": "easy", "options": [{"text": "Small slices of every company in the index, in the index's proportions", "correct": true, "explanation": "The fund holds the underlying securities for you."}, {"text": "A loan to the fund company", "correct": false, "explanation": "That would be a bond, not a fund share."}, {"text": "A bet on whether the index goes up tomorrow", "correct": false, "explanation": "You own the holdings, not a short-term bet."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "An index fund copies a published list of investments (an index) instead of paying someone to pick stocks.",
          "Most big indexes are weighted by company size, so the largest companies make up a much bigger slice of your money than the smallest.",
          "Low fees are the main advantage. An index fund still drops when its market drops.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine a shopping list that someone else writes and updates, like &quot;the 500 biggest U.S. companies, in proportion to their size.&quot; An index fund is a basket that buys exactly what&apos;s on that list and nothing else. Nobody in the fund is trying to guess which company will win. When the list changes, the basket changes. So the most important question about an index fund isn&apos;t the fund&apos;s name. It&apos;s &quot;what list does it copy, and how does that list decide how much of each thing to hold?&quot; Because nobody is paid to pick, the fee is usually small, and that small fee is a big reason these funds tend to do well over time.</div>}
        detailed={<div className="prose-p">Investor.gov defines an index fund as a type of <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">mutual fund</TermLink> or ETF whose portfolio is built to match or track a market index. The index is intellectual property of an index provider, with a methodology covering three things. <strong>Eligibility</strong>: the S&amp;P 500 requires U.S. companies above a size threshold with enough trading volume and positive recent earnings, and a committee makes the final picks, so it isn&apos;t literally the 500 largest. <strong>Weighting</strong>: the S&amp;P 500 uses float-adjusted market capitalization, meaning each company counts by the market value of its publicly tradable shares. That makes it self-rebalancing (winners grow their weight automatically) but concentrated: a handful of the largest firms can account for a large share of the total. Equal-weight and other alternative indexes exist precisely to change that. <strong>Maintenance</strong>: indexes are rebalanced on a schedule and when members are added or dropped. The fund then replicates the index fully or by sampling. Its return equals the index return minus the expense ratio and small frictions (cash drag, trading costs), and that gap is the tracking error. The edge case worth knowing: when a company is announced as joining a major index, every tracking fund must buy it, which can move its price before inclusion.</div>}
      />
      <FootnoteAside>This is general education, not investment advice. Index composition and fees change over time; check a fund&apos;s current prospectus and fact sheet for its index, holdings and expense ratio.</FootnoteAside>

      <p>If you&apos;re new to how shares are bought and sold, start with <TermLink href="/investing-markets-deep-dive/how-the-stock-market-actually-works">how the stock market actually works</TermLink>. Index funds are one way of owning a slice of that whole market at once.</p>

      <QuickCheck
        question="An S&P 500 index fund holds about 500 stocks. Does each one make up about 0.2% of the fund?"
        options={[
          { text: "No. It's weighted by company size, so the largest companies are a far bigger share", correct: true, explanation: "Correct. Market-cap weighting means a few giant companies can make up a large portion of the fund." },
          { text: "Yes, every company gets an equal slice", correct: false, explanation: "That's how an equal-weight index works, not the standard S&P 500." },
          { text: "Yes, because the SEC requires equal weights", correct: false, explanation: "There's no such rule. Weighting is set by the index methodology." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: What $1,000 buys (baseline case)</h3>
      <div className="prose-p">You put $1,000 into an S&amp;P 500 index fund. You now indirectly own a slice of each company in the index, in proportion to its weight. If a company is 5% of the index, about $50 of your money is in it. If a small member is 0.02%, about 20 cents is. When the index rises 10% for the year, your fund rises about 10% minus its fee. You never chose any of these companies. The index&apos;s rules did.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Same index, different fees (the part that compounds)</h3>
      <div className="prose-p">Two funds track the same index, which earns 7% a year before fees. Fund A charges 0.05%. Fund B charges 1%. $10,000 left alone for 30 years grows to about <strong>$75,063</strong> in Fund A (6.95% a year) and about <strong>$57,435</strong> in Fund B (6% a year). That&apos;s roughly <strong>$17,600</strong> less for holding the exact same stocks. The fee is the one number that differs, which is why comparing expense ratios matters more than comparing names.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The index goes down (real-world test)</h3>
      <div className="prose-p">From its October 2007 peak to its March 2009 low, the S&amp;P 500 fell more than 50%. Every fund tracking it fell by about the same amount. That&apos;s the index fund working correctly: it delivers the market&apos;s return, bad years included. Investors who sold near the bottom locked in the loss. Those who held through the recovery didn&apos;t. Owning many companies protects you from any one company collapsing. It doesn&apos;t protect you from the whole market falling.</div>

      <QuickCheck
        question="In Example 2, why does Fund B end up with less money?"
        options={[
          { text: "Its higher yearly fee compounds into a large gap over 30 years", correct: true, explanation: "Correct. Same holdings, same market return. Only the fee differs." },
          { text: "It picked worse stocks", correct: false, explanation: "Both track the same index, so they hold the same stocks." },
          { text: "It was riskier", correct: false, explanation: "Same index, same risk. The cost is the difference." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From an index's rules to your fund's return"
        type="flow"
        svgSrc="/diagrams/investing-markets-deep-dive-what-an-index-fund-actually-tracks-flow.svg"
        altText="A five-step flow. 1: An index provider publishes rules for which companies qualify. 2: A weighting formula, usually company size, sets each company's share. 3: The index fund buys the same companies in the same proportions. 4: The index is rebalanced periodically and the fund follows. 5: Your return is the index's return minus fees and small frictions."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'owns 500 stocks' means evenly spread across 500 companies.", fix: "Check the fund's top 10 holdings. In a size-weighted index, a few companies can dominate." },
          { mistake: "Picking an index fund by its name without checking the fee.", fix: "Compare expense ratios. Two funds tracking the same index can differ many times over in cost." },
          { mistake: "Owning several 'different' index funds that track overlapping indexes.", fix: "A total-market fund and an S&P 500 fund overlap heavily. Look at what each index holds before assuming you're diversified." },
        ]}
      />
      <MisconceptionCallout
        myth="An index fund is safe because it's diversified across hundreds of companies."
        reality={<p>An index fund spreads risk across the companies in one index, which protects you from any single company failing. It doesn&apos;t protect you from the index itself falling. The S&amp;P 500 fell more than 50% between 2007 and 2009. And because most major indexes weight by size, you may be more concentrated in a few large companies than the number of holdings suggests. Diversification lowers some risks; it doesn&apos;t remove market risk.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "For any index fund you hold or are considering, find which index it tracks and how that index weights companies.",
          "Compare the expense ratio with other funds tracking the same index.",
          "Look at the top 10 holdings and what share of the fund they make up.",
          "Check how closely the fund's past returns match its index (tracking error).",
          "Decide in advance how you'll react to a large market drop, since the fund will fall with its index.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does an index fund actually track?", answer: "A specific market index: a published, rules-based list of securities with a formula for how much of each to hold. The fund buys the same securities in roughly the same proportions." },
          { question: "Is an S&P 500 index fund the 500 biggest companies?", answer: "Not exactly. A committee selects about 500 large U.S. companies using rules on size, trading volume and profitability, and weights them by the market value of their publicly available shares." },
          { question: "Why are index funds cheaper than actively managed funds?", answer: "No one is paid to research and pick stocks, and trading is limited to following the index. Lower costs are a major reason they tend to beat most active funds over long periods." },
          { question: "Can you lose money in an index fund?", answer: "Yes. An index fund falls when its index falls. The S&P 500 lost more than half its value from 2007 to 2009 before recovering." },
          { question: "Is an index fund the same as an ETF?", answer: "No. An index fund can be a mutual fund or an ETF. 'Index' describes the strategy; 'mutual fund' or 'ETF' describes how the fund is structured and traded." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
