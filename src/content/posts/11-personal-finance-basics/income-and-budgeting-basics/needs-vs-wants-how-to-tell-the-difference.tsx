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
  title: "Needs vs Wants: How to Tell the Difference",
  category: "personal-finance-basics",
  order: 4,
  subtopic: "income-and-budgeting-basics",
  tags: ["needs vs wants", "budgeting basics", "spending priorities", "personal finance"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A need is something required to maintain basic health, safety, and ability to work or live; a want improves comfort or enjoyment beyond that baseline — the line is about function, not price or feeling.",
  summary: "A need is a cost required to maintain basic health, safety, employment, and shelter — the baseline a person cannot go without for long without real consequences. A want improves comfort, enjoyment, or convenience beyond that baseline. The distinction is functional, not about price, guilt, or how essential something feels in the moment, and most budgeting frameworks rely on making this call honestly rather than by rigid formula.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Your Money, Your Goals", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" },
    { label: "Encyclopaedia Britannica — Budget", url: "https://www.britannica.com/topic/budget" },
  ],
  seeAlso: [
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
    "personal-finance-basics/the-50-30-20-budgeting-rule-explained",
    "personal-finance-basics/zero-based-budgeting-explained",
  ],
  glossary: [
    {"term":"Need","definition":"A cost required to maintain basic health, safety, shelter, and the ability to work or attend school — the baseline a person cannot go without for long without real consequences."},
    {"term":"Want","definition":"A cost that improves comfort, enjoyment, or convenience beyond the baseline covered by needs."},
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
      <strong>A note on this article:</strong> this content is for general education only and is not personalized financial advice. What counts as a need versus a want depends on individual circumstances (a car may be a need for a rural commute and a want in a city with transit); use the framework here as a starting point, not a rule to apply mechanically to someone else&apos;s situation.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A need is a cost required to maintain basic health, safety, shelter, and the ability to work; a want improves comfort or enjoyment beyond that baseline.",
      "Price and how essential something feels are not reliable signals — an expensive item can be a need (a work laptop) and a cheap habitual purchase can be a want (daily coffee).",
      "The same category of spending can be a need for one person and a want for another depending on individual circumstances like job requirements, health conditions, or location.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/personal-finance-basics/needs-vs-wants-how-to-tell-the-difference">need</TermLink> is something required to keep basic life running — food, shelter, utilities, transportation to work, minimum debt payments. A <TermLink href="/personal-finance-basics/needs-vs-wants-how-to-tell-the-difference">want</TermLink> makes life more comfortable or enjoyable but isn&apos;t required — dining out, streaming subscriptions, upgraded electronics. The test is simple to state and harder to apply honestly: if this spending stopped entirely, would there be a real, near-term consequence to health, safety, housing, or income?</div>}
      detailed={<div className="prose-p">The functional test holds up better than a price-based or category-based test because both needs and wants exist at every price point. Groceries are a need, but a $40 steak dinner at the grocery store is partly a want layered on top of a need (a $4 bag of rice would also satisfy the underlying need). This is why budgeting frameworks like the 50/30/20 rule ask users to split even a single spending category into its needs portion and wants portion rather than assuming a whole category is one or the other. The honesty problem is real: it&apos;s easy to reclassify a want as a need under psychological pressure (&quot;I need this to relax,&quot; &quot;I need this to stay professional&quot;), and budgeting frameworks generally rely on the person doing the classifying to apply the functional test consistently rather than motivated reasoning in the moment.</div>}
      />
      <FootnoteAside>Some frameworks add a third category — &quot;obligations&quot; or &quot;debt repayment&quot; — for money that must be paid regardless of need-or-want status, like a minimum credit card payment on debt already taken on. This is a needs vs. wants variant, not a contradiction of it: an obligation is functionally a need in the sense that skipping it has real, often costly, consequences.</FootnoteAside>

      <p>
      The line matters most when a budget needs to be cut — a want can usually be reduced or eliminated without lasting harm, while cutting a true need has real costs that go beyond the dollar amount saved.
      </p>

      <QuickCheck
      question="A household needs to cut $150/month from the budget. Which is the more defensible first target under the needs vs. wants framework?"
      options={[
      { text: "Reducing the grocery budget below what covers adequate nutrition", correct: false, explanation: "Groceries at a level that maintains basic nutrition are a need — cutting below that level has real health consequences, even though it's tempting because groceries are often the largest variable line item." },
      { text: "Canceling or downgrading a streaming subscription and reducing dining-out frequency", correct: true, explanation: "Correct. These are wants — spending that improves comfort or enjoyment beyond baseline needs — and can typically be reduced without a real functional consequence." },
      { text: "Skipping the minimum payment on a credit card this month", correct: false, explanation: "A minimum debt payment is an obligation with real consequences (fees, credit score damage, rising interest) if skipped — it functions like a need, not a want, despite not fitting neatly in either original category." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Splitting a single spending category into its need and want portions (baseline case)</h3>
      <div className="prose-p">
      A household spends $500/month on groceries. Comparing prices, roughly $350 covers a basic, nutritionally adequate diet with generic brands and simple meals; the remaining $150 reflects name-brand preferences, pre-made convenience items, and occasional treats. The $350 is the need; the $150 on top of it is a want layered onto the same category — useful to know precisely because it identifies where the first $150 of potential savings sits without touching actual nutrition.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same expense category as a need for one person and a want for another (edge case / variation)</h3>
      <div className="prose-p">
      A car payment is a need for someone whose job requires a 40-minute commute with no public transit option — without the car, they cannot get to work and lose income. The identical car payment is more of a want for someone living in a city with reliable transit who chose a car for convenience and could get to work another way. Same expense, same dollar amount, different classification, because the functional test depends on individual circumstances, not the expense category itself.
      </div>

      <QuickCheck
      question="Why can the same expense (a car payment) be a need for one person and a want for another?"
      options={[
      { text: "Because car payments are always classified based on the monthly amount", correct: false, explanation: "Price is not the deciding factor in the needs vs. wants test — the same or even higher-priced item can still be a need if it's functionally required." },
      { text: "Because the needs-vs-wants test depends on individual circumstances (like whether there's a real alternative way to get to work), not on the category of spending itself", correct: true, explanation: "Correct. The functional test asks what would happen if the spending stopped — and that answer depends on the person's specific situation, not a fixed list of need categories." },
      { text: "Because wants can be converted into needs simply by using them for a long enough time", correct: false, explanation: "Duration of ownership doesn't change the functional classification — what matters is whether a real, near-term consequence follows from not having it." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Applying the test honestly under psychological pressure (real-world / applied case)</h3>
      <div className="prose-p">
      Someone reviewing their spending labels a $120/month premium gym membership a &quot;need&quot; because &quot;I need it for my mental health.&quot; Applying the functional test honestly: is there a real, near-term consequence to health or safety if this specific membership stops? A basic gym membership or free home workouts would still support physical and mental health — so the $120 premium tier is more accurately a want, even though exercise itself supports genuine wellbeing. The honest reclassification doesn&apos;t mean the gym has no value; it means the budget should treat it as a want when deciding what to cut first.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The needs vs. wants functional test"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-needs-vs-wants-how-to-tell-the-difference-decision-test.svg"
      altText="A decision flowchart starting with the question: if this spending stopped entirely, would there be a real, near-term consequence to health, safety, housing, or ability to work? A Yes answer leads to a box labeled Need. A No answer leads to a box labeled Want."
      />
      <p>
      One question does most of the work — whether stopping the spending creates a real, near-term consequence, not how the spending feels or what it costs.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Classifying an entire spending category as all-need or all-want instead of splitting it.", fix: "Break categories like groceries or transportation into a baseline need portion and an additional want portion layered on top." },
      { mistake: "Using price as the deciding factor (assuming expensive = want, cheap = need).", fix: "Apply the functional test instead — ask what real consequence follows from stopping the spending, regardless of its price." },
      { mistake: "Assuming the classification is universal rather than dependent on individual circumstances.", fix: "Reassess the classification when circumstances change (a new job with a commute, a health condition) rather than applying a fixed list learned once." },
      ]}
      />
      <MisconceptionCallout
      myth="Wants are frivolous or wasteful spending that a disciplined budget should eliminate entirely."
      reality={<p>The needs vs. wants split is a prioritization tool for when cuts are needed, not a moral judgment on wants themselves. Frameworks like the 50/30/20 rule deliberately allocate a real, planned percentage to wants — spending on things that improve quality of life is a legitimate part of a functioning budget, not a failure of discipline.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Go through last month's spending and label each line as a need, a want, or a mix of both.",
      "For mixed categories (like groceries), estimate what portion covers the baseline need versus what's layered on top as a want.",
      "Apply the functional test consistently: what real, near-term consequence follows if this specific spending stopped?",
      "Revisit the classification when circumstances change — a new job, a move, a health condition can shift something from want to need or back.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a need and a want?", answer: "A need is required to maintain basic health, safety, shelter, and the ability to work; a want improves comfort or enjoyment beyond that baseline." },
      { question: "Is a car a need or a want?", answer: "It depends on the person — a car can be a need if there's no reasonable alternative way to get to work, or a want if reliable transit or another option exists." },
      { question: "Can a single expense category contain both needs and wants?", answer: "Yes — groceries, for example, usually split into a baseline nutritional need and additional spending on preference or convenience layered on top." },
      { question: "How should minimum debt payments be classified?", answer: "As an obligation that functions like a need — skipping one has real, often costly consequences (fees, credit damage), even though it doesn't fit the original needs/wants split cleanly." },
      { question: "Why does the needs vs. wants split matter for budgeting?", answer: "Because it helps identify what can be reduced with minimal real consequence (wants) versus what requires a more careful, longer-term approach to change (needs)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
