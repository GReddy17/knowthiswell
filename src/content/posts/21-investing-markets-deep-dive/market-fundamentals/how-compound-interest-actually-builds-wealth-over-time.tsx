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
  TermLink,
  EntryCalculator
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Compound Interest Actually Builds Wealth Over Time",
  category: "investing-markets-deep-dive",
  order: 6,
  subtopic: "market-fundamentals",
  tags: ["compound interest", "compounding", "rule of 72", "investing early", "investment fees", "time value of money"],
  date: "2026-09-27",
  updated: "2026-09-27",
  lastReviewed: "2026-09-27",
  excerpt: "Compounding means your returns start earning returns. At 7% a year, $10,000 grows to about $76,000 in 30 years, and most of that is growth on earlier growth. Time and fees matter more than people expect.",
  summary: "Compound interest is growth calculated on both the original amount and on the returns already earned, so the balance grows faster each year. The formula is A = P(1 + r)^t for annual compounding. At a 7% average annual return, $10,000 becomes about $19,700 after 10 years, $38,700 after 20 and $76,100 after 30; the last decade adds more than the first two combined. The rule of 72 estimates doubling time: 72 divided by the rate, about 10 years at 7%. Starting earlier matters: $200 a month at 7% for 40 years grows to about $525,000, versus about $244,000 over 30 years, even though the extra decade adds only $24,000 in contributions. The same math works against you with fees and debt. A 1% annual fee cuts that 30-year $10,000 result from about $76,000 to about $57,000, and an unpaid credit card balance at 24% APR compounded monthly grows about 27% in a year. Stock returns are not guaranteed and vary year to year; 7% is an illustration, not a promise.",
  sources: [
    { label: "SEC Investor.gov — Compound Interest Calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" },
    { label: "SEC Investor Bulletin — How Fees and Expenses Affect Your Investment Portfolio", url: "https://www.sec.gov/investor/alerts/ib_fees_expenses.pdf" },
    { label: "FINRA — Fund Analyzer (fee and expense comparison tool)", url: "https://tools.finra.org/fund_analyzer/" },
    { label: "OpenStax — Principles of Finance (time value of money chapters)", url: "https://openstax.org/details/books/principles-finance" },
    { label: "Consumer Financial Protection Bureau — Credit cards: interest and fees", url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/" },
  ],
  seeAlso: [
    "personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers",
    "investing-markets-deep-dive/what-an-index-fund-actually-tracks",
    "investing-markets-deep-dive/how-dividend-investing-actually-works",
    "personal-finance-basics/understanding-retirement-accounts-basic-mechanics",
    "personal-finance-basics/credit-cards-explained-interest-grace-periods-minimum-payments",
    "investing-markets-deep-dive/what-a-bull-market-vs-bear-market-actually-means",
  ],
  glossary: [
    { term: "Compound interest", definition: "Interest or returns earned on both the original amount and on returns already added to it." },
    { term: "Simple interest", definition: "Interest calculated only on the original principal, so it grows by the same amount every period." },
    { term: "Rule of 72", definition: "A shortcut for doubling time: divide 72 by the annual percentage rate. At 8%, money doubles in about 9 years." },
    { term: "Compounding frequency", definition: "How often returns are added to the balance, such as yearly, monthly or daily. More frequent compounding grows slightly faster at the same stated rate." },
    { term: "Expense ratio", definition: "The yearly fee a fund charges, as a percentage of your balance. It compounds against you." },
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
  {"question": "What makes compound interest different from simple interest?", "difficulty": "easy", "options": [{"text": "It earns returns on past returns, not just on the original amount", "correct": true, "explanation": "That's why the yearly gain keeps getting bigger."}, {"text": "It always has a higher interest rate", "correct": false, "explanation": "The rate can be the same. The difference is what the rate is applied to."}, {"text": "It's only available from banks, not investments", "correct": false, "explanation": "Compounding happens anywhere returns are reinvested, including stock funds."}]},
  {"question": "Using the rule of 72, about how long does money take to double at 6% a year?", "difficulty": "easy", "options": [{"text": "About 12 years", "correct": true, "explanation": "72 ÷ 6 = 12."}, {"text": "About 6 years", "correct": false, "explanation": "That would require about 12% a year."}, {"text": "About 72 years", "correct": false, "explanation": "You divide 72 by the rate; you don't use 72 as the answer."}]},
  {"question": "$10,000 grows at 7% a year for 30 years. Roughly what's the ending balance?", "difficulty": "medium", "options": [{"text": "About $76,000", "correct": true, "explanation": "10,000 × 1.07^30 ≈ 76,123."}, {"text": "About $31,000", "correct": false, "explanation": "That's simple interest: 10,000 + 30 × 700."}, {"text": "About $210,000", "correct": false, "explanation": "That's far too high for 7% over 30 years."}]},
  {"question": "Why does starting 10 years earlier make such a big difference?", "difficulty": "medium", "options": [{"text": "Early money has the most years to compound, and late years produce the biggest gains", "correct": true, "explanation": "In the $200/month example, 10 extra years add about $24,000 in contributions but about $281,000 in ending value."}, {"text": "Young investors get higher interest rates", "correct": false, "explanation": "Rates don't depend on your age."}, {"text": "Contributions made early are tax-free", "correct": false, "explanation": "Tax treatment depends on the account, not when you start."}]},
  {"question": "A fund charges a 1% annual fee on a 7% return. Over 30 years on $10,000, what happens?", "difficulty": "hard", "options": [{"text": "The ending balance drops from about $76,000 to about $57,000", "correct": true, "explanation": "A 6% net return compounds to about $57,400, so the fee costs about a quarter of the result."}, {"text": "You lose exactly 1% of the final balance", "correct": false, "explanation": "The fee compounds every year, so it takes far more than 1% of the end result."}, {"text": "Nothing, because fees are taken from profits only", "correct": false, "explanation": "Expense ratios are charged on your whole balance, every year."}]},
  {"question": "How does compounding affect an unpaid credit card balance at 24% APR?", "difficulty": "medium", "options": [{"text": "It grows about 27% in a year if nothing is paid, because interest is charged on interest", "correct": true, "explanation": "2% a month compounded 12 times is 1.02^12 ≈ 1.268."}, {"text": "It grows exactly 24% in a year", "correct": false, "explanation": "Monthly compounding pushes the effective rate above the stated APR."}, {"text": "Compounding only applies to savings, not debt", "correct": false, "explanation": "The math is the same in both directions."}]},
  {"question": "Which change most increases a 30-year result: higher contributions early, or the same total contributed late?", "difficulty": "hard", "options": [{"text": "Contributing early, because each dollar compounds for longer", "correct": true, "explanation": "Timing matters as much as the total amount."}, {"text": "They produce the same result if the total contributed is the same", "correct": false, "explanation": "Late dollars have fewer years to grow."}, {"text": "Contributing late, because you'll earn more then", "correct": false, "explanation": "Higher later income doesn't make up for lost compounding years in this comparison."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Compounding means your returns start earning returns, so each year's gain is bigger than the last.",
          "Time matters most: at 7% a year, $10,000 grows to about $76,000 in 30 years, and the last decade adds more than the first two combined.",
          "The same math works against you: a 1% yearly fee or a credit card balance compounds too.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Put $10,000 in an investment that grows 7% a year and leave it alone. Year one earns $700. Year two earns 7% of $10,700, which is $749. Year three earns 7% of $11,449, about $801. The rate never changes, but the amount it applies to keeps growing, so the dollar gain keeps growing too. Early on it barely looks like anything is happening. After a few decades, most of your balance is growth on earlier growth. That&apos;s compounding, and the main ingredient is time. It works the same way on money you owe, which is why an unpaid credit card balance can snowball.</div>}
        detailed={<div className="prose-p">With annual compounding, the balance after t years is <strong>A = P(1 + r)^t</strong>, where P is the starting amount and r is the yearly rate. With n compounding periods a year, it becomes A = P(1 + r/n)^(nt). Unlike <TermLink href="/personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers">simple interest</TermLink>, which adds the same amount every year, compound growth is exponential. The <strong>rule of 72</strong> gives a quick doubling time: 72 divided by the rate, so about 10.3 years at 7% and 9 years at 8%. Regular contributions add a second formula: the future value of a series of monthly payments is PMT × [(1 + i)^n − 1] / i, where i is the monthly rate. For investments, &quot;interest&quot; is loose language: a stock <TermLink href="/investing-markets-deep-dive/what-an-index-fund-actually-tracks">index fund</TermLink> doesn&apos;t pay a fixed rate, but reinvested dividends and price gains compound the same way, around a long-run average with big swings year to year. Two forces compound against you. <strong>Fees</strong>: an expense ratio is taken from your whole balance every year, so a 1% fee turns a 7% return into 6%, and over 30 years that removes about a quarter of the ending value. <strong>Debt</strong>: a 24% APR card compounds monthly, an effective rate of about 26.8% a year.</div>}
      />
      <FootnoteAside>This is general education, not investment advice. The 7% figure is an illustration, not a forecast; real market returns vary widely year to year, can be negative, and are not guaranteed. Inflation also reduces what future dollars can buy.</FootnoteAside>

      <p>The calculator below uses annual compounding. Try changing only the years and watch how much more the last decade adds than the first.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Project compound growth"
        fields={[
          { key: "principal", label: "Starting amount ($)", defaultValue: 10000 },
          { key: "rate", label: "Average annual return (%)", defaultValue: 7, step: 0.1 },
          { key: "years", label: "Years", defaultValue: 30, step: 1 },
        ]}
        resultLabel="Projected balance"
        formula="compoundGrowth"
        formatResult="currency"
        disclaimer="Illustration only. Assumes a steady return with no fees, taxes or withdrawals; real returns vary."
      />

      <QuickCheck
        question="Why does year 2 earn more than year 1 at the same 7% rate?"
        options={[
          { text: "Year 1's gain was added to the balance, so 7% applies to a bigger amount", correct: true, explanation: "Correct. That's compounding: the base grows every year." },
          { text: "The rate automatically rises each year", correct: false, explanation: "The rate stays at 7% in this example." },
          { text: "Year 2 includes a bonus for loyalty", correct: false, explanation: "No bonus involved; it's just a bigger base." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One lump sum left alone (baseline case)</h3>
      <div className="prose-p">$10,000 at 7% a year: after 10 years, 10,000 × 1.07^10 ≈ $19,672. After 20 years, ≈ $38,697. After 30 years, ≈ $76,123. The first decade adds about $9,700, the second about $19,000, and the third about $37,400. Nothing changed except time. With simple interest at the same rate, you&apos;d have $31,000 after 30 years, so compounding more than doubles the result.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The 1% fee (edge case)</h3>
      <div className="prose-p">Same $10,000, same 7% market return, but the fund charges a 1% expense ratio, so you net 6%. After 30 years: 10,000 × 1.06^30 ≈ $57,435, about $18,700 less than the $76,123 you&apos;d have with no fee. A fee that sounds tiny takes roughly a quarter of the ending value, because it&apos;s charged on the whole balance every year and the money it removes never gets to compound. That&apos;s why the SEC and FINRA encourage investors to compare expense ratios before choosing a fund.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Starting at 25 vs 35 (real-world use)</h3>
      <div className="prose-p">Two people invest $200 a month at an average 7% until 65. Alex starts at 25: 40 years, $96,000 contributed, ending near $525,000. Sam starts at 35: 30 years, $72,000 contributed, ending near $244,000. Alex put in only $24,000 more but ends with about $281,000 more, because the earliest dollars had the longest to compound. For Sam to catch up starting at 35, they&apos;d need to invest about $430 a month instead of $200.</div>

      <QuickCheck
        question="Alex contributes $24,000 more than Sam but ends with about $281,000 more. Why?"
        options={[
          { text: "Alex's early contributions had 10 extra years to compound", correct: true, explanation: "Correct. The extra growth comes from time, not the extra deposits." },
          { text: "Alex picked a fund with a higher guaranteed rate", correct: false, explanation: "Both used the same 7% assumption." },
          { text: "Sam paid higher taxes", correct: false, explanation: "Taxes weren't part of the example." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How compound interest builds on itself"
        type="flow"
        svgSrc="/diagrams/investing-markets-deep-dive-how-compound-interest-actually-builds-wealth-over-time-flow.svg"
        altText="A five-step flow. 1: Invest $10,000 at an average 7% a year. 2: Year 1 earns $700 and the balance becomes $10,700. 3: Reinvested, year 2 earns 7% of $10,700, which is $749. 4: Each year's gain is bigger because the base keeps growing. 5: After 30 years the balance is about $76,000, most of it growth on earlier growth."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Waiting to invest until you can put in a 'real' amount.", fix: "Small amounts started early often beat larger amounts started later. Start with what you can and increase it over time." },
          { mistake: "Ignoring fees because 1% sounds small.", fix: "Compare expense ratios with FINRA's Fund Analyzer. Over decades, fees compound just like returns." },
          { mistake: "Cashing out and restarting, or withdrawing gains.", fix: "Compounding needs the returns to stay invested. Reinvest dividends and avoid early withdrawals." },
        ]}
      />
      <MisconceptionCallout
        myth="Compound interest makes you rich quickly."
        reality={<p>Compounding is slow at first and powerful only over long periods. In the first few years, the gains look like simple interest. The dramatic growth shows up in years 20 to 40. That&apos;s why it rewards patience and early starts, not quick trades, and why interrupting it with withdrawals is so costly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Plug your own numbers into the calculator above, then try the same amount with 10 fewer years.",
          "Look up the expense ratio on every fund you hold and compare it with low-cost alternatives.",
          "Turn on automatic dividend reinvestment if your account offers it.",
          "Pay off high-interest card balances first: compounding at 24% against you beats almost any investment return.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does compound interest work?", answer: "Each period, returns are added to your balance, and the next period's returns are calculated on that bigger balance. Over time you earn returns on your returns, so growth speeds up." },
          { question: "What is the rule of 72?", answer: "It's a shortcut to estimate how long money takes to double: divide 72 by the annual rate. At 6% it's about 12 years; at 9%, about 8 years." },
          { question: "Do stocks earn compound interest?", answer: "Stocks don't pay a fixed interest rate, but their returns compound when you reinvest dividends and let price gains stay invested. The growth is uneven year to year rather than steady." },
          { question: "How much will $10,000 be worth in 30 years?", answer: "It depends on the return. At a steady 7% a year it would be about $76,000; at 5%, about $43,000; at 9%, about $133,000. Real returns vary and aren't guaranteed." },
          { question: "Does compound interest work against you with debt?", answer: "Yes. Unpaid credit card interest is added to the balance and then charged interest itself. At 24% APR compounded monthly, an unpaid balance grows about 27% in a year." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
