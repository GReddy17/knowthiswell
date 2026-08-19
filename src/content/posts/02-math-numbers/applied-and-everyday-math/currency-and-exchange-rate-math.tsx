import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Currency & Exchange Rate Math",
  category: "math-numbers",
  order: 36,
  subtopic: "applied-and-everyday-math",
  tags: [
    "exchange rate",
    "currency conversion",
    "ratios",
    "foreign exchange",
    "travel math",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How exchange rates work as a ratio, why converting there-and-back doesn't return your original amount, and how conversion fees quietly eat into the rate you actually get.",
  summary: "An exchange rate is a ratio expressing how much of one currency equals one unit of another, and the amount you actually receive when converting money is that rate applied to your amount, minus whatever fee or spread the converter charges.",
  sources: [
    { label: "Federal Reserve — Foreign Exchange Rates (H.10 Release)", url: "https://www.federalreserve.gov/releases/h10/" },
    { label: "Khan Academy — Ratios and Rates", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates" },
    { label: "Encyclopaedia Britannica — Foreign Exchange Market", url: "https://www.britannica.com/topic/foreign-exchange-market" },
  ],
  seeAlso: [
    "math-numbers/unit-conversions-length-weight-volume",
    "math-numbers/percentages-explained",
    "math-numbers/math-for-travel-distance-speed-time",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Exchange rate", definition: "The ratio at which one currency can be traded for another — e.g., an exchange rate of 1.10 USD/EUR means 1 euro converts to 1.10 US dollars." },
    { term: "Spread", definition: "The gap between the rate a currency exchanger buys at and the rate it sells at, which functions as a hidden fee even when no separate 'fee' is listed." },
    { term: "Base currency", definition: "The currency being converted from — the '1 unit' side of an exchange rate ratio." },
    { term: "Reciprocal rate", definition: "The inverse of an exchange rate (1 ÷ rate), used to convert in the opposite direction between the same two currencies." },
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
      "An exchange rate is a ratio — it tells you how many units of one currency equal one unit of another — and converting an amount is just multiplying by that ratio.",
      "Converting money back and forth between two currencies does not return your original amount, even with a 'fair' rate and zero fees, once rates move between the two conversions.",
      "Currency exchangers rarely charge a labeled 'fee' — instead they often use a spread, quoting a worse rate than the real market rate, which functions as a hidden cost.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">An <TermLink href="/math-numbers/currency-and-exchange-rate-math">exchange rate</TermLink> tells you how much of one currency you get for one unit of another. If the rate is 1 euro = 1.10 US dollars, then converting 200 euros gets you 200 × 1.10 = $220. Converting the other direction uses the flipped ratio: to turn dollars back into euros, divide by 1.10 instead of multiplying. That&apos;s the entire mechanical core of currency math — multiply by the rate going one way, divide by it (or multiply by its reciprocal) going the other way.</div>}
      detailed={<div className="prose-p">Formally, converted amount = original amount × exchange rate, where the rate is expressed as (units of target currency) per (1 unit of <TermLink href="/math-numbers/currency-and-exchange-rate-math">base currency</TermLink>). Converting back uses the <TermLink href="/math-numbers/currency-and-exchange-rate-math">reciprocal rate</TermLink> (1 ÷ original rate) — but critically, that reciprocal is only exact at the same instant, since real market exchange rates fluctuate continuously based on trade flows, interest rate differences, and macroeconomic conditions. In practice, few currency exchangers (banks, airport kiosks, currency apps) give you the exact real market rate. Instead, most operate on a <TermLink href="/math-numbers/currency-and-exchange-rate-math">spread</TermLink>: they buy currency from you at a slightly worse rate and sell it to you at a slightly better-for-them rate than the true market mid-point, pocketing the gap as their built-in profit — meaning a currency exchange advertised as &quot;no fee&quot; can still cost you meaningfully more than the real market rate, just without an explicit line-item charge.</div>}
      />
      <FootnoteAside>The Federal Reserve publishes official daily and historical foreign exchange rate data in its H.10 statistical release — a real, continuously updated public record of how major currency pairs move against the US dollar, used by economists, businesses, and researchers worldwide.</FootnoteAside>

      <p>
      The reciprocal-rate idea seems like it should make round-trip conversions a wash, but the math only balances at a single frozen moment — the moment rates move even slightly, that symmetry breaks.
      </p>

      <QuickCheck
      question="If 1 euro = 1.10 US dollars, how many euros do you get for $220?"
      options={[
      { text: "242 euros, by multiplying 220 by 1.10", correct: false, explanation: "This applies the rate in the wrong direction. Multiplying by the same rate used to go euros-to-dollars would overstate the euro amount — converting dollars back to euros requires dividing by the rate, not multiplying by it again." },
      { text: "200 euros, by dividing 220 by 1.10", correct: true, explanation: "Correct. 220 ÷ 1.10 = 200 euros. Converting from dollars back to euros uses the reciprocal of the original rate — dividing by 1.10 undoes the earlier multiplication by 1.10." },
      { text: "220 euros, since the amounts should match on both sides of a fair exchange", correct: false, explanation: "The numeric amount doesn't stay the same across currencies — only the underlying value does, adjusted by the exchange rate. $220 and €200 represent the same value at this specific rate, not the same number." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a fixed amount at a given rate (baseline case)</h3>
      <div className="prose-p">
      You&apos;re converting $500 to Japanese yen, and the current exchange rate is 1 USD = 149.50 JPY. Converted amount: 500 × 149.50 = 74,750 yen. This is the direct application of the core formula — amount × rate — with no complications from fees or rate movement.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why converting money there and back doesn&apos;t return your original amount (edge case / variation)</h3>
      <div className="prose-p">
      You convert $1,000 to euros at a rate of 1 EUR = 1.08 USD, getting 1,000 ÷ 1.08 ≈ 925.93 euros. A week later, the rate shifts to 1 EUR = 1.05 USD (the dollar strengthened slightly against the euro), and you convert those euros back: 925.93 × 1.05 ≈ $972.22. You&apos;ve lost about $27.78, not because of any fee, but purely because the exchange rate itself moved between the two conversions. This is the core reason currency math isn&apos;t just &quot;reversible&quot; arithmetic the way, say, adding and then subtracting the same number is — a rate looked up at two different moments in time is effectively two different numbers, even with zero explicit fees charged either time.
      </div>

      <QuickCheck
      question="You convert dollars to euros, then convert the resulting euros back to dollars a week later. The exchange rate moved slightly in between. Assuming no fees were charged either time, will you get back exactly your original dollar amount?"
      options={[
      { text: "Yes, always — converting back and forth with no fees is always a wash", correct: false, explanation: "This is only true if the rate is identical at both conversion moments. Real exchange rates fluctuate continuously, so a rate change between the two conversions changes the final amount even with zero fees." },
      { text: "No — if the exchange rate moved between the two conversions, you'll end up with a different amount than you started with, even with no fees", correct: true, explanation: "Correct. The reciprocal-rate relationship only holds exactly at a single frozen rate. Once the rate shifts between conversions, the round trip no longer perfectly cancels out." },
      { text: "No, because currency conversions always round down regardless of the rate", correct: false, explanation: "Rounding on small transactions is a separate, usually negligible effect. The real driver of a mismatched round-trip amount here is the exchange rate itself changing over time, not rounding." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How a currency exchange spread quietly costs you money (real-world / applied case)</h3>
      <div className="prose-p">
      The true market mid-rate is 1 GBP = 1.27 USD (meaning it takes $1.27 to buy £1 at the real market rate). An airport kiosk advertises &quot;no fee&quot; currency exchange but actually charges $1.35 for every pound it sells you — a worse rate for you, with no separate fee listed anywhere. Converting $1,000 at the true market rate: 1,000 ÷ 1.27 ≈ £787.40. Converting the same $1,000 at the kiosk&apos;s rate: 1,000 ÷ 1.35 ≈ £740.74. You walk away with about £46.66 less than the fair market rate would have given you — roughly $60 of real cost — despite never seeing a line labeled &quot;fee&quot; anywhere on the transaction. Comparing the kiosk&apos;s quoted rate against a real-time market rate (easily checked on a phone before converting) is the only way to see that hidden cost directly.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Converting currency forward and back through a moving exchange rate"
      type="flow"
      svgSrc="/diagrams/math-numbers-currency-and-exchange-rate-math-round-trip-diagram.svg"
      altText="A flow diagram showing $1,000 on the left converting through an arrow labeled rate 1 EUR = 1.08 USD (divide) into approximately 925.93 euros in the middle, then a second arrow labeled one week later, rate 1 EUR = 1.05 USD (multiply) pointing right to approximately 972.22 dollars, with a bracket highlighting the roughly 27.78 dollar gap between the starting and ending dollar amounts caused purely by the rate shift between the two conversions."
      />
      <p>
      The diagram&apos;s two arrows use two different numeric rates, even though both are labeled with the same currency pair — that&apos;s the entire source of the gap on the right. If both arrows used the identical rate (no time gap, or a rate that happened not to move), the round trip would land exactly back on $1,000. The gap only appears because real exchange rates are a moving target, not a fixed constant.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Multiplying by the exchange rate in both directions instead of using the reciprocal for the return conversion.", fix: "Multiply going from base currency to target currency, and divide (or multiply by 1 ÷ rate) going the other direction — mixing these up produces a wildly wrong result, not just a slightly wrong one." },
      { mistake: "Assuming a 'no fee' currency exchange has no real cost.", fix: "Compare the quoted rate against the real-time market mid-rate — a worse rate built into the spread is still a real cost, even without a separate itemized fee." },
      { mistake: "Expecting a round-trip currency conversion to return the exact original amount.", fix: "Remember the reciprocal relationship only holds at a single frozen rate — any time gap between the two conversions introduces a real rate change and a real difference in the result." },
      ]}
      />
      <MisconceptionCallout
      myth="A currency exchange advertised as having no fee is genuinely free to use."
      reality={<p>Very few currency exchangers actually operate at zero cost. Most build their profit into the spread — quoting you a rate that&apos;s worse than the true market mid-rate — rather than charging a separately itemized fee. A &quot;no fee&quot; exchange offering meaningfully less favorable pounds-per-dollar (or any currency pair) than the live market rate is still charging you a real cost; it&apos;s just built into the exchange rate itself instead of listed as a line item.</p>}
      />

      <QuickCheck
      question="An airport kiosk advertises 'zero fees' on currency exchange, but its quoted rate is noticeably worse than the real-time market rate you can check on your phone. Is this exchange actually free?"
      options={[
      { text: "Yes — if there's no separate fee listed, the exchange is free by definition", correct: false, explanation: "A missing line-item fee doesn't mean there's no cost. The cost can be built directly into a worse-than-market exchange rate, known as the spread, which functions the same as a fee even without being labeled one." },
      { text: "No — the worse-than-market rate is functioning as a hidden cost, built into the spread rather than an itemized fee", correct: true, explanation: "Correct. Comparing the kiosk's rate against the true market rate reveals the real cost — it's just embedded in the exchange rate rather than charged as a separate, visible fee." },
      { text: "No, because all currency exchange kiosks are required by law to charge an itemized fee", correct: false, explanation: "There's no such universal requirement — many currency exchangers legally and commonly build their entire profit into the spread instead of charging any itemized fee at all." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Currency conversion, net of a conversion fee"
      fields={[
      { key: "amount", label: "Amount to convert", defaultValue: 500 },
      { key: "exchangeRate", label: "Exchange rate (target currency per unit)", defaultValue: 1.10, step: 0.01 },
      { key: "feePercent", label: "Conversion fee/spread", defaultValue: 2, suffix: "%" },
      ]}
      resultLabel="Amount received after fee"
      formula="currencyConversionAfterFee"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before your next trip, check the real-time market exchange rate on your phone and compare it against whatever rate a bank, kiosk, or app quotes you.",
      "Use the calculator above with a realistic fee percentage to see how much a 'small' 2-3% spread actually costs on a larger conversion.",
      "Practice converting in both directions (multiply one way, use the reciprocal the other way) until it feels automatic.",
      "If you're converting money for a future trip, remember the rate you lock in today may differ from the rate on your travel date — check again closer to departure if timing allows.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you calculate currency conversion?", answer: "Multiply the amount you're converting by the exchange rate, expressed as units of the target currency per one unit of your starting currency. Converting $500 at a rate of 1 USD = 149.50 JPY gives 500 × 149.50 = 74,750 yen." },
      { question: "Why don't I get back my original amount when I convert money back and forth?", answer: "Because exchange rates change continuously. The reciprocal relationship between converting one way and back only holds exactly at a single frozen rate — any time gap between the two conversions introduces a real rate shift that changes the result." },
      { question: "What is a currency exchange spread?", answer: "The gap between the rate an exchanger buys currency at and the rate it sells currency at, compared to the true market mid-rate. It functions as a built-in cost even when no separate fee is charged or advertised." },
      { question: "Is a 'no fee' currency exchange actually free?", answer: "Not necessarily. Many 'no fee' exchangers still profit through the spread — offering a rate noticeably worse than the real market rate — which is a real cost even without an itemized fee line." },
      { question: "How do you convert currency in the opposite direction?", answer: "Use the reciprocal of the original rate — divide by the rate instead of multiplying, or equivalently multiply by 1 divided by the rate. If 1 EUR = 1.10 USD, converting dollars to euros means dividing the dollar amount by 1.10." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
