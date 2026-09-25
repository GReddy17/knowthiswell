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
  title: "How the Stock Market Actually Works",
  category: "investing-markets-deep-dive",
  order: 1,
  subtopic: "market-fundamentals",
  tags: ["stock market", "investing basics", "shares", "how stocks work"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "The stock market isn't a single place — it's a network of exchanges where ownership shares in companies are continuously priced by buyers and sellers, not by any company or government setting the price.",
  summary: "The stock market is a network of regulated exchanges where investors buy and sell small ownership shares in public companies, with prices set continuously by supply and demand between buyers and sellers rather than by the companies themselves, and share prices moving based on changing expectations about a company's future earnings, not just its current performance.",
  sources: [
    { label: "Investor.gov (SEC) — How the Stock Market Works", url: "https://www.investor.gov/introduction-investing/investing-basics/how-stock-market-works" },
    { label: "FINRA — Investor Education", url: "https://www.finra.org/investors" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/what-a-mutual-fund-actually-is",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
    "investing-markets-deep-dive/how-dividend-investing-actually-works",
  ],
  glossary: [
    { term: "Share", definition: "A single unit of ownership in a company — owning shares means owning a small fractional piece of that company, including a claim on its future profits." },
    { term: "Stock exchange", definition: "A regulated marketplace (such as the NYSE or Nasdaq) where shares of publicly traded companies are bought and sold according to standardized rules." },
    { term: "Market capitalization", definition: "The total value of a company's outstanding shares, calculated by multiplying the current share price by the total number of shares." },
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how markets mechanically function, not personalized investment advice.</strong> Investing involves risk, including possible loss of principal — consider your own circumstances or consult a licensed financial professional before making investment decisions.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A share of stock is a small unit of ownership in a company, not a betting slip — owning shares means owning a claim on that company&apos;s future profits and assets.",
          "Stock exchanges don&apos;t set prices — buyers and sellers do, continuously, based on what they&apos;re willing to pay or accept at any given moment.",
          "Share prices move based on changing expectations about future earnings, not just current performance — a company can report strong profits and still see its stock fall if results came in below what investors expected.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When a company &quot;goes public,&quot; it divides ownership into millions of small pieces called shares and sells some of them to investors. From then on, those shares trade between investors on an exchange — the company itself generally isn&apos;t part of most day-to-day trades. The price moves up or down based on how many people want to buy versus sell at any moment.</div>}
        detailed={<div className="prose-p">A <TermLink href="/investing-markets-deep-dive/how-the-stock-market-actually-works">stock exchange</TermLink> is fundamentally a continuous auction: buy orders and sell orders are matched electronically, and the last matched price becomes the quoted price. Per SEC investor education materials, share prices reflect the market&apos;s collective, constantly updating guess about a company&apos;s future cash flows — discounted back to a present value — which is why prices can react sharply to news that changes expectations about the future (a product launch, an earnings report, a regulatory decision) even when nothing about the company&apos;s current operations has changed yet.</div>}
      />
      <FootnoteAside>&quot;The market went down today&quot; usually refers to a broad index like the S&amp;P 500 — a basket of many companies&apos; stocks averaged together — not every individual stock; on most days, some stocks rise while the overall index falls, and vice versa.</FootnoteAside>

      <p>This forward-looking pricing mechanism is exactly why stock prices can seem disconnected from a company&apos;s current headlines — the market has usually already priced in what&apos;s publicly expected, and it&apos;s the gap between expectation and reality that moves prices.</p>

      <QuickCheck
        question="A company reports higher profits than last year, but its stock price drops the same day. What's the most likely explanation?"
        options={[
          { text: "The stock market is essentially random and this kind of move can't be explained", correct: false, explanation: "While short-term moves have noise, this specific pattern (profit up, price down) has a well-understood common explanation related to investor expectations, not randomness." },
          { text: "Investors had expected even higher profits than what the company actually reported, so the results were a disappointment relative to expectations, even though profits genuinely grew", correct: true, explanation: "Correct. Prices move based on results versus expectations, not results in isolation — 'beating expectations' and 'growing profits' are related but different things." },
          { text: "The company must have done something illegal that hasn't been reported yet", correct: false, explanation: "There's no basis to assume wrongdoing from a price drop after an earnings report — expectations-versus-results is the standard, well-documented explanation for this exact pattern." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Buying a single share (baseline case)</h3>
      <div className="prose-p">An investor places an order through a brokerage to buy one share of a company at the current market price. The order is routed to an exchange, matched against an existing sell order, and the trade executes in a fraction of a second — the investor now owns a tiny fractional piece of that company and is entitled to any dividends it pays.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A stock with no trading volume that day (edge case / variation)</h3>
      <div className="prose-p">For a very small or thinly-traded company, there may be few or no buyers and sellers actively matched on a given day. The last traded price stays &quot;stuck&quot; until a new trade occurs — a reminder that a quoted price reflects the last actual trade, not a live, constantly-updating guarantee of what you could buy or sell at right now.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A major stock index like the S&amp;P 500 (real-world / applied case)</h3>
      <div className="prose-p">The S&amp;P 500 tracks roughly 500 large U.S. companies, weighted by market capitalization, so larger companies move the index more than smaller ones. When news outlets say &quot;the market rose 1% today,&quot; they typically mean this kind of broad index moved, which is a summary of thousands of individual company price changes averaged together, not a statement about any one stock.</div>

      <QuickCheck
        question="Why does a large company's stock price movement affect a market-cap-weighted index like the S&P 500 more than a small company's movement does?"
        options={[
          { text: "Market-cap weighting means each company's influence on the index is proportional to its total market value, so a large company's percentage move shifts more total dollar value than the same percentage move in a small company", correct: true, explanation: "Correct. A 5% move in a company worth $2 trillion represents far more total value change than a 5% move in a company worth $2 billion, and market-cap weighting reflects exactly that." },
          { text: "Every company in the index counts equally regardless of size", correct: false, explanation: "That describes an equal-weighted index, not a market-cap-weighted one like the standard S&P 500 — the two behave differently precisely because of this distinction." },
          { text: "Large companies are simply given more votes by the exchange", correct: false, explanation: "There's no voting mechanism involved — the weighting is a mathematical function of each company's market capitalization relative to the whole index." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a stock trade actually gets matched and priced"
        type="flow"
        svgSrc="/diagrams/investing-markets-deep-dive-how-the-stock-market-actually-works-order-matching.svg"
        altText="A flow diagram showing a buy order and a sell order both arriving at a stock exchange, being matched by price and time priority, executing as a trade at an agreed price, and that price becoming the new quoted market price for the stock."
      />
      <p>Every quoted stock price is really just the record of the most recent successful match between a willing buyer and a willing seller — not a value assigned by the company or any single authority.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a rising profit automatically means a rising stock price.", fix: "Remember prices move on results relative to expectations, not results in isolation — a strong quarter can still disappoint if the market expected more." },
          { mistake: "Treating daily index moves as a statement about every individual stock.", fix: "Recognize a broad index like the S&P 500 averages many companies together — individual stocks can move opposite to the overall index on any given day." },
          { mistake: "Believing the company itself sets or controls its own stock price.", fix: "Understand price is set by buyers and sellers trading shares among themselves on an exchange, not by the company." },
        ]}
      />
      <MisconceptionCallout
        myth="Buying stock means giving your money directly to the company, and the company controls what happens to the share price."
        reality={<p>Once a company&apos;s shares are trading publicly, most day-to-day buying and selling happens between investors, not between an investor and the company itself — per SEC investor education materials, the company doesn&apos;t receive proceeds from these secondary-market trades, and it doesn&apos;t set or control the price; the market of buyers and sellers does.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before investing in an individual company, understand what it actually does and what investors currently expect from it, not just its recent stock chart.",
          "Distinguish an individual stock's movement from a broad index's movement when reading market news.",
          "Remember that a quoted price is the last executed trade, which may be stale for thinly-traded stocks.",
          "Consult a licensed financial professional or a reputable resource like Investor.gov before making investment decisions specific to your situation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What actually determines a stock's price?", answer: "The price at which the most recent buyer and seller agreed to trade — continuously updated as new buy and sell orders are matched on an exchange, driven by the collective expectations of everyone trading that stock." },
          { question: "Does the company get money every time its stock is traded?", answer: "No — the company generally only receives money when it originally issues new shares (such as at an IPO); ordinary day-to-day trading happens between investors on the secondary market." },
          { question: "Why do stock prices react to news before it directly affects a company's profits?", answer: "Because prices reflect expectations about future earnings, not just current results — news that changes what investors expect a company to earn later can move the price immediately, well before those effects show up in actual reported profits." },
          { question: "Is a rising stock market the same as a growing economy?", answer: "Not exactly — the stock market reflects investor expectations about company profits specifically, while the broader economy includes employment, wages, and output across sectors not directly tied to public companies; the two are related but can diverge." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
