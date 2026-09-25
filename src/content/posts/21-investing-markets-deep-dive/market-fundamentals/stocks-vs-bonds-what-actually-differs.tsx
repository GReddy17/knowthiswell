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
  title: "Stocks vs Bonds: What Actually Differs",
  category: "investing-markets-deep-dive",
  order: 3,
  subtopic: "market-fundamentals",
  tags: ["stocks", "bonds", "equity", "fixed income", "investing basics"],
  date: "2026-09-23",
  updated: "2026-09-23",
  lastReviewed: "2026-09-23",
  excerpt: "A stock is an ownership claim with a variable, uncapped return; a bond is a loan with a fixed claim that gets paid before stockholders if the issuer goes bankrupt.",
  summary: "Per SEC Investor.gov and FINRA investor education materials, a stock represents a fractional ownership (equity) claim on a company with a variable return and no repayment guarantee, while a bond represents a loan (debt) to a company or government that carries a fixed interest claim and repayment schedule and stands ahead of stockholders in bankruptcy — the structural difference between owning a piece of a business and lending money to one is what drives their different risk and return characteristics, not one being simply \"safer\" or \"better\" than the other.",
  sources: [
    { label: "Investor.gov (U.S. Securities and Exchange Commission) — Stocks", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks" },
    { label: "Investor.gov (U.S. Securities and Exchange Commission) — Bonds or Fixed Income Products", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products" },
    { label: "FINRA — Bonds", url: "https://www.finra.org/investors/investing/investment-products/bonds" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/how-the-stock-market-actually-works",
    "investing-markets-deep-dive/what-a-brokerage-account-actually-is",
    "investing-markets-deep-dive/what-a-mutual-fund-actually-is",
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "investing-markets-deep-dive/how-dividend-investing-actually-works",
  ],
  glossary: [
    { term: "Stock (equity)", definition: "A security representing a fractional ownership claim in a company, whose return depends on the company's performance — through price changes and, sometimes, dividends — with no guaranteed payment." },
    { term: "Bond (fixed income)", definition: "A security representing a loan from an investor to a company or government, which promises to pay a fixed rate of interest and return the original amount (principal) at a set future date." },
    { term: "Coupon rate", definition: "The fixed interest rate a bond issuer agrees to pay the bondholder, usually expressed as an annual percentage of the bond's face value." },
    { term: "Maturity", definition: "The date on which a bond's issuer is scheduled to repay the bond's full face value (principal) to the bondholder." },
    { term: "Priority claim (seniority)", definition: "The order in which different investors are legally entitled to be repaid if a company becomes insolvent — bondholders, as creditors, are repaid ahead of stockholders, who are paid only from what remains." },
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
          "A stock is an ownership (equity) claim on a company; a bond is a loan (debt) to a company or government — that structural difference, not just risk level, is what actually separates them.",
          "Stock returns are variable and uncapped but never guaranteed; bonds typically pay a fixed interest rate and return principal at maturity, but with a capped return.",
          "If a company goes bankrupt, bondholders are creditors with a legal priority claim on remaining assets, paid before stockholders, who receive only whatever is left, if anything.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Per SEC Investor.gov, buying a stock means buying a small piece of ownership in a company. Its value moves up or down with how the company performs, and there&apos;s no promise you&apos;ll get any specific amount back — or anything at all. Buying a bond is different: you&apos;re lending money to a company or government, which agrees to pay you a set interest rate and give your money back on a specific future date. Bonds generally feel more predictable because the payment terms are spelled out upfront, while stocks generally offer more potential upside because there&apos;s no ceiling on how much a company&apos;s value can grow — but also no floor protecting you from loss.</div>}
        detailed={<div className="prose-p">Per SEC Investor.gov, a stock is an equity security: buying shares makes you a fractional owner of the company, entitled to a share of its residual value and, in some cases, dividend payments the company chooses to distribute — but with no fixed repayment obligation from the company to you at any point. A <TermLink href="/investing-markets-deep-dive/how-the-stock-market-actually-works">bond, by contrast, is a debt security</TermLink> — per FINRA&apos;s investor education materials, buying a bond means lending the issuer a specific principal amount in exchange for a defined coupon rate (interest) paid on a schedule, plus repayment of the principal at maturity. This debt-versus-equity structure is what drives the two securities&apos; different risk and return profiles: because a bond is a legal loan obligation, bondholders are creditors with a contractual right to be repaid, and if the issuer becomes insolvent, bondholders have priority in bankruptcy — they&apos;re repaid from remaining assets before stockholders, who are the residual claimants and may receive nothing. That legal priority is why bonds are generally considered lower-risk than stocks of the same issuer, though FINRA is explicit that bonds still carry real risks of their own: issuer default, interest-rate risk (a bond&apos;s market price falls when prevailing rates rise), and inflation risk eroding a fixed coupon&apos;s real value over time.</div>}
      />
      <FootnoteAside>Investor.gov notes that a company has no legal obligation to ever pay a stock dividend, and can reduce or cancel one at any time — dividends, unlike a bond&apos;s coupon payments, aren&apos;t a contractual promise.</FootnoteAside>

      <p>This is general educational information about how these two security types are structured, not personalized investment guidance — per SEC Investor.gov, an individual&apos;s actual allocation between stocks and bonds should reflect that person&apos;s own goals, time horizon, and risk tolerance. A bond&apos;s basic loan structure &mdash; principal, a fixed rate, and a repayment schedule &mdash; mirrors the same mechanics behind <TermLink href="/personal-finance-basics/understanding-loans-principal-interest-and-terms">an everyday consumer loan</TermLink>, just with the individual investor as the lender rather than the borrower. Most individual investors buy stocks and bonds through <TermLink href="/investing-markets-deep-dive/what-a-brokerage-account-actually-is">a brokerage account</TermLink>, and many hold both security types indirectly through <TermLink href="/investing-markets-deep-dive/what-a-mutual-fund-actually-is">a mutual fund</TermLink> rather than buying individual stocks or bonds directly.</p>

      <QuickCheck
        question="A company issues both stock and bonds, then later goes bankrupt and liquidates its remaining assets. Per FINRA and SEC Investor.gov guidance, who has the stronger legal claim to what's left?"
        options={[
          { text: "Bondholders — as creditors, they have a legal priority claim and are repaid before stockholders", correct: true, explanation: "Correct. Bonds represent a legal debt obligation, which gives bondholders priority over stockholders, who are residual claimants entitled only to whatever remains afterward." },
          { text: "Stockholders — since they took on more risk, they're repaid first as compensation", correct: false, explanation: "This inverts the actual legal order. Stockholders' higher risk is precisely because they are paid last, not first, in a bankruptcy liquidation." },
          { text: "Both are repaid at exactly the same time and priority, regardless of whether they hold stock or bonds", correct: false, explanation: "Stock and bonds have different legal statuses — bonds are debt with contractual repayment priority, while stock is a residual ownership claim paid only after debts are satisfied." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Buying a single company&apos;s stock (baseline case)</h3>
      <div className="prose-p">An investor buys shares of a company. If the company grows and becomes more valuable, or distributes a dividend, the shareholder benefits — there&apos;s no cap on how much the shares could theoretically appreciate. If the company performs poorly, the shares can lose significant value, and the company owes the shareholder nothing back — a stock, per Investor.gov, carries no repayment guarantee of any kind.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Buying a fixed-rate government bond (edge case / variation)</h3>
      <div className="prose-p">An investor buys a bond with a stated coupon rate and a maturity date years in the future. Per FINRA guidance, the investor knows upfront, assuming no default, exactly how much interest they&apos;ll receive and when the principal will be repaid — a far more predictable structure than a stock&apos;s variable return. This predictability is the tradeoff for a typically lower return ceiling than stocks offer over the long run.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The same company issuing both stock and bonds (real-world / applied case)</h3>
      <div className="prose-p">A company raises money two ways: selling stock (giving up a slice of ownership, no repayment obligation) and issuing bonds (borrowing money, with a contractual obligation to pay interest and repay principal). If that company later runs into severe financial trouble and liquidates, per SEC and FINRA guidance its bondholders — as creditors — are repaid from remaining assets before its stockholders see anything at all. This is a concrete illustration of the structural priority difference discussed above, not a hypothetical.</div>

      <QuickCheck
        question="Why does a bond's fixed coupon rate typically mean a lower long-run return ceiling than a stock in the same company, per SEC Investor.gov and FINRA materials?"
        options={[
          { text: "Because a bond's return is contractually capped at its stated interest rate, while a stock's return has no such ceiling and rises or falls with the company's value", correct: true, explanation: "Correct. A bond promises a fixed, defined return; a stock has no repayment guarantee at all but also no upper limit on how much its value could grow." },
          { text: "Because bonds are illegal to trade after they're issued, unlike stocks", correct: false, explanation: "Bonds can be bought and sold before maturity, similar to stocks. The return ceiling difference comes from the bond's fixed coupon structure, not a trading restriction." },
          { text: "Because stocks are guaranteed by the government while bonds are not", correct: false, explanation: "This reverses reality — government bonds carry government backing in many cases, while stocks carry no such guarantee of any kind." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Stocks vs bonds: ownership claim vs loan claim"
        type="comparison"
        svgSrc="/diagrams/investing-markets-deep-dive-stocks-vs-bonds-what-actually-differs-comparison.svg"
        altText="A comparison diagram showing stocks as an equity ownership claim with variable, uncapped return and last priority in bankruptcy, next to bonds as a debt loan claim with fixed interest and repayment and first priority in bankruptcy among these two security types."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming bonds are entirely risk-free investments.", fix: "Recognize that per FINRA guidance, bonds carry real risks of their own — issuer default, interest-rate risk, and inflation eroding a fixed coupon's value — they are generally lower-risk than stocks of the same issuer, not risk-free." },
          { mistake: "Thinking a stock's return is guaranteed once you buy it, similar to a bond's coupon.", fix: "Understand a stock carries no repayment or return guarantee at all, per Investor.gov — its value depends entirely on company performance and market conditions." },
          { mistake: "Believing stockholders and bondholders have equal legal standing if a company goes bankrupt.", fix: "Recognize bondholders are creditors with a legal priority claim, repaid before stockholders — who are residual claimants entitled only to whatever, if anything, remains." },
        ]}
      />
      <MisconceptionCallout
        myth="Bonds are a completely safe investment, while stocks are the only 'risky' one."
        reality={<p>Per FINRA&apos;s investor education materials, bonds are generally lower-risk than stocks of the same issuer because of their fixed claim and legal repayment priority — but they are not risk-free. A bond issuer can still default and fail to repay; a bond&apos;s market price can fall if interest rates rise before maturity; and a fixed coupon&apos;s purchasing power erodes over time with inflation. The real structural difference is that a stock is an ownership claim with a variable, uncapped return and no repayment guarantee, while a bond is a loan claim with a fixed, capped return and a legal repayment priority — not that one carries risk and the other carries none.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before comparing a specific stock and bond, identify which one you'd actually be holding: an ownership claim with variable return, or a loan claim with a fixed, defined return.",
          "Read Investor.gov's and FINRA's investor education pages on stocks and bonds, linked in the sources above, for the full detail on how each security type is structured.",
          "Remember that 'lower risk' for a bond is relative to stocks of the same issuer, not the same thing as 'no risk' — default, interest-rate, and inflation risk still apply.",
          "This is general educational information, not personalized financial advice — consult a licensed financial professional before making decisions about your own portfolio allocation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the main structural difference between a stock and a bond?", answer: "A stock is an equity security representing fractional ownership in a company, with a variable, uncapped return and no repayment guarantee; a bond is a debt security representing a loan to a company or government, with a fixed interest rate and a scheduled repayment of principal, per SEC Investor.gov and FINRA guidance." },
          { question: "Are bonds always safer than stocks?", answer: "Bonds are generally lower-risk than stocks of the same issuer because of their fixed claim and legal repayment priority, per FINRA guidance — but they aren't risk-free; issuer default, interest-rate risk, and inflation risk can all affect a bond's value or repayment." },
          { question: "Do bonds always pay a fixed return?", answer: "Most bonds pay a fixed coupon rate set at issuance, per FINRA — though a bond's market price can still fluctuate before maturity based on interest-rate changes, even though the coupon payments themselves stay fixed." },
          { question: "What happens to stockholders and bondholders if a company goes bankrupt?", answer: "Per SEC Investor.gov and FINRA guidance, bondholders are creditors with a legal priority claim and are repaid from remaining assets before stockholders, who are residual claimants and may receive nothing if assets run out first." },
          { question: "Can a bond lose value even if the issuer never defaults?", answer: "Yes — per FINRA guidance, a bond's market price can fall before maturity if prevailing interest rates rise, since newer bonds paying higher rates make existing lower-rate bonds less attractive to buy at full face value on the secondary market." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
