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
  title: "What a Mutual Fund Actually Is",
  category: "investing-markets-deep-dive",
  order: 2,
  subtopic: "market-fundamentals",
  tags: ["mutual fund", "investing basics", "diversification", "fund manager", "shares"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "Buying one share of a mutual fund means owning a small slice of dozens or hundreds of different investments at once, not betting on a single stock.",
  summary: "A mutual fund pools money from many investors into a single professionally managed portfolio that buys a diversified basket of stocks, bonds, or other securities on their behalf, then divides ownership of that basket into shares — each investor's returns rise and fall with the value of the whole pooled portfolio, in proportion to the shares they own, rather than depending on the performance of any single underlying investment.",
  sources: [
    { label: "SEC Investor.gov — Mutual Funds", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1" },
    { label: "FINRA — Mutual Funds", url: "https://www.finra.org/investors/investing/investment-products/mutual-funds" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/what-a-brokerage-account-actually-is",
    "investing-markets-deep-dive/how-the-stock-market-actually-works",
    "personal-finance-basics/understanding-retirement-accounts-basic-mechanics",
  ],
  glossary: [
    { term: "Net asset value (NAV)", definition: "The per-share value of a mutual fund, calculated by dividing the total value of everything the fund owns (minus liabilities) by the number of shares outstanding, typically once per trading day." },
    { term: "Diversification", definition: "Spreading money across many different investments so that poor performance in any single one has a limited effect on the overall portfolio." },
    { term: "Expense ratio", definition: "The annual percentage of a fund's assets charged to cover management and operating costs, deducted automatically from returns rather than billed separately." },
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
          "A mutual fund pools money from many investors into one professionally managed portfolio holding many different securities at once.",
          "Each investor owns shares of the fund itself, not the underlying stocks or bonds directly — returns track the whole pooled portfolio's performance.",
          "Per SEC and FINRA guidance, a fund's expense ratio and stated investment strategy are two of the most important things to check before investing, since fees compound over time just as returns do.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A mutual fund takes money from lots of different investors, pools it together, and a professional manager uses that pooled money to buy a mix of stocks, bonds, or other investments. When you buy into the fund, you own a small slice of that whole mix — not any single company directly — so your results depend on how the whole basket performs, not on one stock&apos;s ups and downs.</div>}
        detailed={<div className="prose-p">Per SEC Investor.gov and FINRA descriptions, a mutual fund is an investment company that pools money from many shareholders and invests it according to a stated strategy — for example, large U.S. company stocks, government bonds, or a mix of both. The fund&apos;s total holdings are valued each trading day, producing a <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">net asset value (NAV)</TermLink> per share, which is the price at which shares are bought and sold that day. Because a single fund share represents a proportional claim on dozens or hundreds of underlying securities, buying one share provides built-in <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">diversification</TermLink> that would take substantial individual purchases to replicate directly. Funds charge an ongoing <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">expense ratio</TermLink> — an annual percentage of assets, automatically deducted — to cover management and operating costs; per FINRA guidance, this fee compounds over long holding periods the same way returns do, so a seemingly small difference in expense ratio can meaningfully affect long-term outcomes.</div>}
      />
      <FootnoteAside>Mutual fund shares are typically priced and traded only once per day, after markets close, using that day&apos;s NAV — unlike a stock or an exchange-traded fund (ETF), which trade continuously throughout the day at fluctuating prices.</FootnoteAside>

      <p>This once-a-day pricing is a structural feature, not a limitation — since a mutual fund&apos;s value is based on all its underlying holdings, a single end-of-day calculation is enough to fairly price shares for anyone buying or selling that day.</p>

      <QuickCheck
        question="An investor buys one share of a mutual fund that holds 200 different company stocks. One of those 200 companies has a very bad quarter. What is the most accurate description of the effect on the investor?"
        options={[
          { text: "A small, proportional effect, since that one company is only a fraction of the fund's total diversified holdings", correct: true, explanation: "Correct. Because the fund pools money across many holdings, poor performance in any single underlying investment has a limited, proportional effect on the whole fund's value — this is the core benefit of diversification." },
          { text: "A large effect, similar to owning that one company's stock directly", correct: false, explanation: "This misunderstands diversification — owning a fund share means exposure is spread across all 200 holdings, not concentrated in any single one." },
          { text: "No effect at all, since mutual funds are insulated from individual stock performance", correct: false, explanation: "The fund isn't fully insulated — it still reflects the combined performance of its holdings, including that one company, just diluted across the whole diversified portfolio rather than eliminated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Buying shares of a broad stock market fund (baseline case)</h3>
      <div className="prose-p">An investor buys shares of a fund that tracks a broad index of large U.S. companies — one purchase provides proportional exposure to hundreds of companies across many industries, instead of requiring separate purchases of each one.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing two funds with different expense ratios (edge case / variation)</h3>
      <div className="prose-p">Per FINRA&apos;s guidance on fees, two funds with similar holdings but expense ratios of 0.05% versus 1.00% can produce meaningfully different long-term results purely from the fee difference compounding over decades — a detail that&apos;s easy to overlook when comparing funds mainly by their recent returns.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Redeeming shares during a market downturn (real-world / applied case)</h3>
      <div className="prose-p">If an investor sells mutual fund shares on a day when markets have fallen sharply, they receive that day&apos;s lower NAV per share — mutual funds don&apos;t protect against market declines; they provide diversification across many holdings, which is a distinct benefit from loss protection.</div>

      <QuickCheck
        question="Two mutual funds have nearly identical holdings and historical returns, but one has a much higher expense ratio. According to FINRA guidance, why does this difference matter?"
        options={[
          { text: "The higher fee is deducted from returns every year and compounds over time, which can meaningfully reduce long-term results even with similar underlying holdings", correct: true, explanation: "Correct. FINRA specifically highlights that ongoing fees compound the same way returns do, so a persistent fee difference can meaningfully affect outcomes over a long holding period." },
          { text: "It doesn't matter, since both funds hold similar investments", correct: false, explanation: "Similar holdings don't cancel out a real, ongoing fee difference — the higher expense ratio is deducted regardless of how similar the underlying investments are." },
          { text: "Higher fees always indicate better fund management", correct: false, explanation: "A higher expense ratio isn't itself an indicator of quality — it's simply a larger ongoing cost that reduces net returns to the investor." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From pooled money to a diversified share"
        type="flow"
        svgSrc="/diagrams/investing-markets-deep-dive-what-a-mutual-fund-actually-is-flow.svg"
        altText="A flow diagram: money from many investors is pooled together, a professional manager invests the pool in a diversified basket of stocks and bonds according to a stated strategy, and each investor owns shares representing a proportional claim on the whole basket."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming buying a mutual fund share means owning a specific stock directly.", fix: "Understand you own a proportional claim on the fund's whole diversified pool of holdings, not any single underlying security." },
          { mistake: "Ignoring the expense ratio when comparing funds.", fix: "Check the expense ratio for any fund under consideration — per FINRA guidance, it directly and predictably reduces long-term net returns." },
          { mistake: "Believing diversification means a fund can't lose value.", fix: "Recognize diversification spreads risk across holdings; it doesn't eliminate market-wide declines affecting most or all of the fund's holdings at once." },
        ]}
      />
      <MisconceptionCallout
        myth="A mutual fund is basically the same thing as investing directly in one company's stock, just with more paperwork."
        reality={<p>A mutual fund share represents proportional ownership of a whole diversified basket of many different holdings, priced once per day via NAV, per SEC and FINRA descriptions. This is structurally different from owning a single company&apos;s stock, which trades continuously and depends entirely on that one company&apos;s performance. The pooled, diversified structure — and its ongoing expense ratio — are the two defining features that distinguish a mutual fund from a direct individual stock purchase.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before investing in any mutual fund, check its stated investment strategy and confirm it matches your actual goals and risk tolerance.",
          "Compare expense ratios across similar funds — per FINRA guidance, even small ongoing fee differences compound meaningfully over long periods.",
          "Understand that diversification reduces single-holding risk, not overall market risk — a fund can still lose value in a broad market downturn.",
          "This is general educational information, not personalized investment advice — consult a licensed financial professional for decisions specific to your situation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a mutual fund in simple terms?", answer: "It's a pooled investment — money from many investors combined into one professionally managed portfolio of stocks, bonds, or other securities, divided into shares that each investor owns proportionally." },
          { question: "How is a mutual fund different from an ETF?", answer: "Both provide diversified, pooled exposure, but mutual fund shares are priced and traded once per day at NAV, while ETF shares trade continuously throughout the day like a stock, per SEC descriptions of each structure." },
          { question: "Do mutual funds guarantee a profit?", answer: "No — per SEC guidance, all investing carries risk, and a mutual fund's value moves with its underlying holdings, which can decline as well as rise." },
          { question: "Why do expense ratios matter so much for long-term investors?", answer: "Because the fee is deducted every year and compounds over time the same way returns do, per FINRA guidance — a persistently higher fee can meaningfully reduce long-term net results even between otherwise similar funds." },
          { question: "Can I lose money in a mutual fund?", answer: "Yes — a mutual fund's value reflects its underlying holdings, and if those holdings decline in value, the fund's NAV per share declines too; diversification reduces single-holding risk but doesn't eliminate market risk." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
