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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "The 50/30/20 Budgeting Rule Explained",
  category: "personal-finance-basics",
  order: 2,
  subtopic: "income-and-budgeting-basics",
  tags: ["50/30/20 rule", "budgeting basics", "needs vs wants", "savings rate", "personal finance"],
  date: "2026-08-22",
  updated: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  seoScore: 76, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-10-10",
  excerpt: "The 50/30/20 rule splits after-tax income into three rough buckets — needs, wants, and savings — as a starting framework, not a rigid formula that fits every income level.",
  summary: "The 50/30/20 rule is a budgeting framework that allocates after-tax income into three categories: roughly 50% to needs, 30% to wants, and 20% to savings and debt repayment, popularized as a simple starting split rather than a precise formula every household must follow exactly.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
    { label: "Encyclopaedia Britannica — Budget", url: "https://www.britannica.com/topic/budget" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
    "personal-finance-basics/needs-vs-wants-how-to-tell-the-difference",
    "personal-finance-basics/zero-based-budgeting-explained",
  ],
  glossary: [
    {"term":"50/30/20 rule","definition":"A budgeting framework allocating after-tax income as roughly 50% to needs, 30% to wants, and 20% to savings and debt repayment."},
    {"term":"After-tax income","definition":"Income remaining after taxes and mandatory payroll deductions are removed — the actual amount available to allocate in a budget, also called take-home pay."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  draft: false,
};

export const quiz: QuizBankItem[] = [
  {"question": "What do the three numbers in the 50/30/20 rule stand for?", "difficulty": "easy", "options": [{"text": "50% needs, 30% wants, 20% savings and debt repayment", "correct": true, "explanation": "That's the standard split of after-tax income."}, {"text": "50% savings, 30% needs, 20% wants", "correct": false, "explanation": "The order is needs, wants, then savings."}, {"text": "50% rent, 30% food, 20% everything else", "correct": false, "explanation": "The buckets are needs, wants and savings, not specific bills."}]},
  {"question": "Should the 50/30/20 split be based on gross or take-home pay?", "difficulty": "easy", "options": [{"text": "Gross pay before taxes", "correct": false, "explanation": "Using gross pay makes the budget look roomier than it is."}, {"text": "Take-home (after-tax) pay", "correct": true, "explanation": "Gross income overstates what you can actually spend."}, {"text": "Whichever number is bigger", "correct": false, "explanation": "The rule is built on after-tax income."}]},
  {"question": "On $4,000 a month of take-home pay, what is the 20% savings target?", "difficulty": "easy", "options": [{"text": "$1,200", "correct": false, "explanation": "$1,200 is the 30% wants target."}, {"text": "$2,000", "correct": false, "explanation": "$2,000 is the 50% needs target."}, {"text": "$800", "correct": true, "explanation": "20% of $4,000 is $800."}]},
  {"question": "Which of these counts as a need under the 50/30/20 rule?", "difficulty": "medium", "options": [{"text": "A minimum debt payment", "correct": true, "explanation": "Minimum payments are a basic obligation."}, {"text": "A streaming subscription", "correct": false, "explanation": "That stays a want, even if it feels routine."}, {"text": "Dining out every Friday", "correct": false, "explanation": "Discretionary dining is a want."}]},
  {"question": "Rent, utilities, groceries and minimum payments total $2,300 on $3,000 of take-home pay. About what share goes to needs?", "difficulty": "medium", "options": [{"text": "About 77%", "correct": true, "explanation": "$2,300 divided by $3,000."}, {"text": "About 50%", "correct": false, "explanation": "That's the target, not this household's real share."}, {"text": "About 30%", "correct": false, "explanation": "Needs here are far above 30%."}]},
  {"question": "Take-home pay is $4,500 a month and the household saves $300. How big is the gap to the 20% target?", "difficulty": "medium", "options": [{"text": "$300 a month", "correct": false, "explanation": "$300 is what they already save."}, {"text": "$600 a month", "correct": true, "explanation": "20% of $4,500 is $900; $900 minus $300 is $600."}, {"text": "$900 a month", "correct": false, "explanation": "$900 is the full target, not the gap."}]},
  {"question": "What is the rule's main value, according to this guide?", "difficulty": "medium", "options": [{"text": "It forces an honest sort of spending into needs and wants", "correct": true, "explanation": "That sorting step is often where budgets break down."}, {"text": "It is a legal standard every budget must meet", "correct": false, "explanation": "It is a rule of thumb, not a regulation."}, {"text": "It guarantees you'll be debt-free", "correct": false, "explanation": "No budgeting rule guarantees an outcome."}]},
  {"question": "Who is the 50/30/20 rule commonly attributed to?", "difficulty": "hard", "options": [{"text": "The IRS", "correct": false, "explanation": "It is not a government rule."}, {"text": "The Federal Reserve", "correct": false, "explanation": "The Fed sets monetary policy, not household budget rules."}, {"text": "Elizabeth Warren and Amelia Warren Tyagi", "correct": true, "explanation": "Their writing on household finance popularized it."}]},
];


export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains a general budgeting framework — it is financial literacy, not personalized advice.</strong> The right split for any individual depends on their cost of living, debt, and goals; a financial advisor can help apply a framework like this to a specific situation.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The 50/30/20 rule splits after-tax income into three buckets: roughly 50% needs, 30% wants, and 20% savings/debt repayment.",
      "It's a starting framework, not a mandatory formula — someone with a high cost of living or significant debt may need a different split to reflect their real numbers.",
      "The rule's usefulness comes from forcing a distinction between needs and wants, which is often the actual gap in an unstructured budget.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The <TermLink href="/personal-finance-basics/the-50-30-20-budgeting-rule-explained">50/30/20 rule</TermLink> takes <TermLink href="/personal-finance-basics/the-50-30-20-budgeting-rule-explained">after-tax income</TermLink> and splits it into three rough categories: about 50% for needs (rent, groceries, utilities, minimum debt payments), 30% for wants (dining out, entertainment, subscriptions), and 20% for savings and extra debt repayment. On $4,000 of monthly take-home pay, that&apos;s roughly $2,000 for needs, $1,200 for wants, and $800 for savings — a starting point to compare actual spending against, not a rule that has to be hit exactly.</div>}
      detailed={<div className="prose-p">The framework&apos;s value is structural, not mathematical — it forces a household to sort every expense into needs or wants before totaling anything, which is often where an unstructured budget quietly breaks down (subscriptions and discretionary dining frequently get miscounted as needs). The percentages themselves are a general guideline that assumes a moderate cost of living relative to income; someone in a high-cost area, supporting dependents, or carrying significant debt may find needs alone exceed 50%, in which case the framework still works as a diagnostic — it shows exactly how far off the &quot;ideal&quot; split is and by how much, which is useful information even when the exact ratio isn&apos;t achievable yet.</div>}
      />
      <FootnoteAside>The 50/30/20 framework is commonly attributed to U.S. Senator Elizabeth Warren and Amelia Warren Tyagi&apos;s writing on household finance, though the specific percentages function as a widely-cited rule of thumb rather than a formally standardized financial regulation or requirement.</FootnoteAside>

      <p>
      Applying the rule starts with the hardest and most honest step: sorting every actual expense into needs or wants before comparing the totals to the 50/30 split.
      </p>

      <QuickCheck
      question="A household categorizes their $150/month streaming and dining subscriptions as 'needs' because they've become part of the routine. What's the issue with this classification under the 50/30/20 framework?"
      options={[
      { text: "There's no issue — anything spent regularly counts as a need", correct: false, explanation: "Regularity doesn't determine the category — a need is something required to maintain basic living and work obligations (housing, food, utilities, minimum debt payments), while discretionary entertainment stays a want regardless of how habitual it's become." },
      { text: "Streaming and dining subscriptions are discretionary spending and belong in the 'wants' category, even if they feel routine — miscategorizing them inflates the 'needs' bucket and hides how much is actually discretionary", correct: true, explanation: "Correct. The framework's value depends on an honest needs/wants split — moving discretionary spending into 'needs' defeats the entire diagnostic purpose of the rule." },
      { text: "The categories don't matter as long as the household stays within their total income", correct: false, explanation: "Staying within total income is necessary but separate from what the 50/30/20 split is actually diagnosing — the categorization itself is what reveals whether discretionary spending has grown disproportionately." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Applying the split to a straightforward income (baseline case)</h3>
      <div className="prose-p">
      Take-home pay: $5,000/month. 50% needs = $2,500. 30% wants = $1,500. 20% savings/debt = $1,000. If actual needs (rent, groceries, utilities, minimum payments) total $2,300, that&apos;s comfortably under the 50% target, leaving room to potentially shift more toward the savings bucket if desired.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When needs genuinely exceed 50% (edge case / variation)</h3>
      <div className="prose-p">
      Take-home pay: $3,000/month in a high-cost area. Rent alone is $1,400, plus $300 utilities, $400 groceries, and $200 minimum debt payments — needs total $2,300, which is about 77% of income, far above the 50% target. The framework doesn&apos;t change the household&apos;s real costs, but it does make the gap explicit: either wants and savings have to shrink well below 30/20, or the underlying needs (most likely housing) need to change for the ratio to become achievable.
      </div>

      <QuickCheck
      question="If a household's needs genuinely take up 70% of income instead of the target 50%, does that mean the 50/30/20 rule 'doesn't work' for them?"
      options={[
      { text: "Yes — if the percentages can't be hit exactly, the framework provides no value", correct: false, explanation: "The framework still provides diagnostic value even when the exact split isn't achievable — it quantifies exactly how far off the ratio is, which is useful information for prioritizing what to address." },
      { text: "No — the rule still works as a diagnostic tool, showing precisely how much needs exceed the target and by how much wants/savings would have to shrink to compensate", correct: true, explanation: "Correct. A framework that can't be hit exactly is still informative — it quantifies the gap rather than leaving the household to guess whether their spending pattern is unusual." },
      { text: "It means the household should stop tracking needs vs. wants entirely", correct: false, explanation: "The needs-vs-wants distinction remains useful regardless of what percentage split results — abandoning the categorization removes the diagnostic value entirely, not just the target percentages." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using the rule to set a savings target (real-world / applied case)</h3>
      <div className="prose-p">
      Take-home pay: $4,500/month. The 20% savings/debt bucket targets $900/month. If current savings are only $300/month, the framework surfaces a concrete $600/month gap — a specific number to investigate, whether by trimming the wants category, increasing income, or accepting a lower savings rate deliberately rather than by default.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The 50/30/20 split of after-tax income"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-the-50-30-20-budgeting-rule-explained-three-buckets.svg"
      altText="A horizontal bar divided into three proportional segments representing after-tax income: a 50 percent segment labeled Needs, a 30 percent segment labeled Wants, and a 20 percent segment labeled Savings and Debt Repayment, with a caption noting these are target proportions, not fixed requirements."
      />
      <p>
      The bar&apos;s proportions are a target, not a law — the diagnostic value comes from comparing a household&apos;s real, honestly-categorized spending against these three target widths.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Categorizing discretionary spending (subscriptions, dining out, entertainment) as 'needs' because it feels routine.", fix: "Apply a strict test: a need is required to maintain basic living and work obligations; everything else is a want, regardless of habit." },
      { mistake: "Treating the 50/30/20 percentages as mandatory rather than a starting reference point.", fix: "Use the framework to quantify the gap between actual and target spending, and adjust expectations for genuinely high-cost situations rather than forcing an unrealistic ratio." },
      { mistake: "Applying the rule to gross income instead of after-tax take-home pay.", fix: "Always base the split on take-home pay — using gross income overstates what's actually available and understates how tight the real budget is." },
      ]}
      />
      <MisconceptionCallout
      myth="The 50/30/20 rule is a strict formula that everyone's budget must match exactly to be considered financially healthy."
      reality={<p>The rule is a widely-cited rule of thumb, not a formal financial standard. It&apos;s most useful as a diagnostic starting point — someone whose needs genuinely exceed 50% due to cost of living or family size isn&apos;t failing at budgeting, they simply have a different starting ratio, and the framework still helps by quantifying exactly how different.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate a 50/30/20 category amount from take-home pay"
      fields={[
      { key: "monthlyIncome", label: "Monthly after-tax income", defaultValue: 4000 },
      { key: "allocationPercent", label: "Category percent (e.g. 50, 30, or 20)", defaultValue: 50 },
      ]}
      resultLabel="Target amount for that category"
      formula="budgetAllocationAmount"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Calculate the 50/30/20 target amounts for your own take-home pay using the calculator above.",
      "Sort every real expense honestly into needs or wants before comparing totals to the targets.",
      "If needs genuinely exceed 50%, use that gap as information rather than a sign of failure — it points to where the real constraint is (usually housing).",
      "Revisit the split periodically, since income, debt, and cost of living all change over time.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the 50/30/20 rule?", answer: "A budgeting framework that allocates after-tax income as roughly 50% to needs, 30% to wants, and 20% to savings and debt repayment." },
      { question: "Is the 50/30/20 rule based on gross or net income?", answer: "Net (after-tax, take-home) income — using gross income overstates what's actually available to allocate." },
      { question: "What counts as a 'need' vs a 'want' in the 50/30/20 rule?", answer: "Needs are required for basic living and work obligations (housing, groceries, utilities, minimum debt payments). Wants are discretionary (dining out, entertainment, subscriptions) even if they feel routine." },
      { question: "What if my needs are more than 50% of my income?", answer: "The framework still works as a diagnostic — it quantifies the gap, which helps prioritize whether to address housing costs, debt, or income rather than treating the percentages as mandatory." },
      { question: "Who created the 50/30/20 rule?", answer: "It's commonly attributed to Senator Elizabeth Warren and Amelia Warren Tyagi's writing on household finance, functioning as a widely-cited guideline rather than a formal standard." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
