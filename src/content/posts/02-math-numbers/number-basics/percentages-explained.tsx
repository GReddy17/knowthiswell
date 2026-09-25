import React from 'react';
import { PostMeta, PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "Percentages Explained",
  category: "math-numbers",
  order: 8,
  subtopic: "number-basics",
  tags: ["percentages", "percent", "fractions", "decimals"],
  date: "2026-08-16",
  updated: "2026-09-24",
  lastReviewed: "2026-08-16",
  excerpt: "A percentage is just a fraction with a fixed denominator of 100 — \"per cent\" literally means \"per hundred.\"",
  summary: "A percentage expresses a number as a fraction of 100. 25% means 25 out of every 100, which is the same value as the fraction 1/4 and the decimal 0.25.",
  sources: [
    { label: "Britannica — Percentage", url: "https://www.britannica.com/science/percentage" },
    { label: "Khan Academy — Percentages", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percent-word-problems" },
  ],
  seeAlso: [
    "math-numbers/fractions-explained",
    "math-numbers/decimals-explained",
    "math-numbers/ratios-and-proportions",
    "math-numbers/understanding-percentages-in-real-life-discounts-tax-tips",
  ],
  glossary: [
    { term: "Percent", definition: "\"Per hundred\" — a way of expressing a number as parts out of 100, written with the % symbol." },
    { term: "Percentage point", definition: "A unit used when comparing two percentages directly, to avoid confusion with percent change." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "published",
  youtubeUrl: "https://www.youtube.com/watch?v=lUrDd3XzDQ4",
  draft: false,
};

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "What does \"percent\" literally mean?", "difficulty": "easy", "options": [{"text": "Per hundred", "correct": true, "explanation": "40% is 40 out of every 100."}, {"text": "Per thousand", "correct": false, "explanation": "That's per mille."}, {"text": "Per ten", "correct": false, "explanation": "Percent is per hundred."}]},
  {"question": "Which pair shows the same value as 25%?", "difficulty": "easy", "options": [{"text": "1/4 and 0.25", "correct": true, "explanation": "Three notations, one value."}, {"text": "1/25 and 0.025", "correct": false, "explanation": "Those are 4% and 2.5%."}, {"text": "2/5 and 0.4", "correct": false, "explanation": "Those are 40%."}]},
  {"question": "How do you convert 0.6 to a percentage?", "difficulty": "easy", "options": [{"text": "Multiply by 100: 60%", "correct": true, "explanation": "Then add the % sign."}, {"text": "Divide by 100: 0.006%", "correct": false, "explanation": "Dividing goes the other way."}, {"text": "It's already 6%", "correct": false, "explanation": "0.6 is 60 hundredths, so 60%."}]},
  {"question": "What is 15% of 80?", "difficulty": "medium", "options": [{"text": "12", "correct": true, "explanation": "10% is 8, 5% is 4, total 12."}, {"text": "15", "correct": false, "explanation": "That treats the percent as a plain number."}, {"text": "5.3", "correct": false, "explanation": "That's 80 divided by 15."}]},
  {"question": "60% simplifies to which fraction?", "difficulty": "medium", "options": [{"text": "3/5", "correct": true, "explanation": "60/100 divided by 20 top and bottom."}, {"text": "3/50", "correct": false, "explanation": "That is 6%, not 60%."}, {"text": "1/6", "correct": false, "explanation": "That's about 16.7%."}]},
  {"question": "A price rises from $50 to $60. What's the percent increase?", "difficulty": "medium", "options": [{"text": "20%", "correct": true, "explanation": "A $10 rise on a $50 start is 10/50."}, {"text": "10%", "correct": false, "explanation": "That's the dollar change, not the percent."}, {"text": "16.7%", "correct": false, "explanation": "That divides by the new price, not the starting one."}]},
  {"question": "A price drops 50%, then rises 50%. Where does it end up?", "difficulty": "hard", "options": [{"text": "75% of the original", "correct": true, "explanation": "$100 falls to $50, then 50% of $50 adds $25."}, {"text": "Back at the original", "correct": false, "explanation": "The second 50% is of a smaller base."}, {"text": "125% of the original", "correct": false, "explanation": "It ends lower, not higher."}]},
  {"question": "A tax rate goes from 10% to 12%. Which statement is correct?", "difficulty": "hard", "options": [{"text": "It rose 2 percentage points, which is a 20% increase", "correct": true, "explanation": "Points measure the gap; percent change measures it relative to the start."}, {"text": "It rose 2%", "correct": false, "explanation": "Ambiguous and wrong as percent change, which is 20%."}, {"text": "It rose 12%", "correct": false, "explanation": "12% is the new rate, not the change."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "\"Percent\" literally means \"per hundred\" — 40% is exactly 40 out of every 100, no more complicated than that.",
      "Percentages, fractions, and decimals are three notations for the same value: 25% = 1/4 = 0.25.",
      "\"Percentage points\" and \"percent change\" are different measurements — mixing them up produces genuinely wrong numbers, not just sloppy wording.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/percentages-explained">percentage</TermLink> is a fraction where the denominator is always 100. 60% means 60/100, which simplifies to 3/5, and equals the decimal 0.6. To convert a decimal to a percentage, multiply by 100 and add the % sign; to convert back, divide by 100.</div>}
      detailed={<div className="prose-p">Formally, x% = x/100 as a rational number. This fixed-denominator convention exists purely for readability and comparison — saying &quot;17.5% tax&quot; is easier to reason about at a glance than &quot;0.175 tax&quot; or &quot;7/40 tax,&quot; even though all three are identical. The genuinely important distinction is between a <TermLink href="/math-numbers/percentages-explained">percentage point</TermLink> (a direct arithmetic difference between two percentages) and <em>percent change</em> (a relative, multiplicative change): going from 20% to 25% is a 5 percentage point increase, but a 25% relative increase (5/20 = 0.25), since the increase is measured against the original value, not against 100.</div>}
      />
      <FootnoteAside>The % symbol itself likely evolved from Italian &quot;per cento&quot; abbreviations used by merchants in the 1400s-1600s, gradually simplifying through handwritten shorthand into the two-circle-and-slash symbol used today.</FootnoteAside>

      <div className="prose-p">
      The percentage-point-versus-percent-change distinction sounds pedantic until you see how differently the two numbers can turn out on the exact same underlying change.
      </div>

      <QuickCheck
      question="Interest rates rise from 4% to 6%. How would you correctly describe this change?"
      options={[
      { text: "A 2% increase", correct: false, explanation: "This is the single most common percentage error in news and finance writing — it blurs percentage points and percent change into one ambiguous number." },
      { text: "A 2 percentage point increase, which is also a 50% relative increase", correct: true, explanation: "Correct. The rate rose by 2 percentage points (6-4=2) in absolute terms, but that's a 50% relative increase (2/4 = 0.5) compared to the starting rate — both descriptions are accurate, but they answer different questions." },
      { text: "A 33% increase", correct: false, explanation: "33% would be the change measured against the new value (2/6), not the original — percent change is conventionally measured against the starting point, not the ending point." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding a percentage of a number (baseline case)</h3>
      <div className="prose-p">
      What is 15% of 80? Convert 15% to a decimal (0.15) and multiply: 0.15 × 80 = 12. That&apos;s the entire method — convert to decimal, then multiply.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Working backward from a percentage (edge/variation case)</h3>
      <div className="prose-p">
      If 12 is 15% of some number, what&apos;s the number? Set up 0.15 × x = 12, so x = 12 ÷ 0.15 = 80. This &quot;reverse percentage&quot; problem is exactly the inverse of Example 1, and it&apos;s the version people struggle with most, because it requires dividing instead of the more intuitive multiplying.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A price after two sequential discounts (applied case)</h3>
      <div className="prose-p">
      A $100 item is discounted 20%, then an additional 10% off the already-discounted price. After the first discount: $100 × 0.8 = $80. After the second: $80 × 0.9 = $72. The total isn&apos;t a flat 30% off (which would be $70) — sequential percentage discounts multiply, they don&apos;t add, because each one applies to a smaller base than the last.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="35% shown as 35 shaded squares out of 100"
      type="detail"
      svgSrc="/diagrams/math-numbers-percentages-explained-hundred-grid.svg"
      altText="A 10 by 10 grid of 100 small squares with 35 of them shaded, representing 35 percent as 35 out of 100"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Adding two sequential percentage discounts together instead of applying them one after another.", fix: "Multiply the remaining fraction at each step (× 0.8 then × 0.9), never just add the percentages — 20% + 10% off is not the same as 20% off then 10% off." },
      { mistake: "Confusing percentage points with percent change.", fix: "A change from 10% to 15% is 5 percentage points, but a 50% relative increase — state which one you mean, since they're both correct answers to different questions." },
      { mistake: "Forgetting to convert a percentage to a decimal before multiplying.", fix: "Always divide by 100 first (or move the decimal point two places left) before using a percentage in a calculation." },
      ]}
      />
      <MisconceptionCallout
      myth="A discount followed by an equal-sized markup (or vice versa) brings you back to the original price."
      reality={<p>It doesn&apos;t, because each percentage applies to a different base. A $100 item marked up 50% becomes $150; discounting that $150 by 50% gives $75, not the original $100 — the markup and discount were applied to different starting amounts.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Find X% of a number"
      fields={[
      { key: "number", label: "Number", defaultValue: 80 },
      { key: "percent", label: "Percentage", defaultValue: 15, suffix: "%" },
      ]}
      resultLabel="Result (percentage of the number)"
      formula="percentOfNumber"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice converting between percentages, decimals, and fractions until the three feel interchangeable rather than like separate topics.",
      "Next time you see a sale with two stacked discounts, calculate the real combined price by multiplying, not adding, the percentages.",
      "When you read a news headline about a rate \"rising by X%,\" check whether X is a percentage-point change or a relative percent change.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does percent mean?", answer: "\"Percent\" comes from the Latin \"per centum,\" meaning \"per hundred\" — a percentage expresses a value as a portion of 100." },
      { question: "How do you convert a percentage to a decimal?", answer: "Divide by 100 (or move the decimal point two places to the left). 45% becomes 0.45." },
      { question: "What is the difference between a percentage point and a percent?", answer: "A percentage point is the raw arithmetic difference between two percentages (25% to 30% is 5 percentage points). Percent change measures that same difference relative to the starting value (5/25 = 20% relative increase)." },
      { question: "Can a percentage be more than 100%?", answer: "Yes — percentages above 100% represent more than the whole original amount, which is common when describing growth, like a stock that's \"up 150%\" (meaning it's now worth 2.5 times its starting value)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
