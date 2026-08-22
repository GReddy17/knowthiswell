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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How to Read a Nutrition Label",
  category: "health-body-basics",
  order: 34,
  subtopic: "nutrition-and-healthy-habits-basics",
  tags: ["nutrition label", "percent daily value", "FDA labeling", "serving size", "nutrition literacy"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "The Percent Daily Value column on a nutrition label tells you how one serving compares to a full day's recommended amount — 5% or less is low, 20% or more is high, per FDA's own published rule.",
  summary: "A nutrition label's Percent Daily Value (%DV) column expresses each nutrient amount in a serving as a percentage of a standardized daily reference value, calculated by dividing the nutrient amount by its daily reference value and multiplying by 100 — the same %DV math applies whether the nutrient is one to limit (like sodium) or one to seek out (like fiber).",
  sources: [
    { label: "FDA — How to Understand and Use the Nutrition Facts Label", url: "https://www.fda.gov/food/nutrition-education-resources-materials/how-understand-and-use-nutrition-facts-label" },
    { label: "FDA — Daily Value on the New Nutrition and Supplement Facts Labels", url: "https://www.fda.gov/food/nutrition-facts-label/daily-value-new-nutrition-and-supplement-facts-labels" },
    { label: "USDA — MyPlate: What Is MyPlate?", url: "https://www.myplate.gov/eat-healthy/what-is-myplate" },
  ],
  seeAlso: [
    "health-body-basics/understanding-a-balanced-plate-macronutrients-overview",
    "health-body-basics/portion-control-basics",
  ],
  glossary: [
    {"term":"Percent Daily Value (%DV)","definition":"A percentage on a nutrition label showing how much a nutrient in one serving contributes to a total daily diet, based on a standardized 2,000-calorie reference diet."},
    {"term":"Daily Value","definition":"A standardized reference amount of a nutrient (like 2,300 mg for sodium) set by the FDA, used as the denominator for calculating %DV."},
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
      <strong>This entry explains how to read a nutrition label — it is general literacy, not personalized dietary advice.</strong> Individual nutrient targets vary; consult a doctor or registered dietitian for a specific eating plan.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The Percent Daily Value (%DV) column shows how much one serving of a nutrient contributes toward a standardized full day's amount — it is not a percentage of the whole package unless the package is one serving.",
      "FDA's published rule of thumb: 5% DV or less per serving is considered low for a nutrient, and 20% DV or more is considered high.",
      "%DV is calculated the same simple way for every nutrient: (amount in serving ÷ daily value reference) × 100 — the same arithmetic whether the nutrient is one to limit or one to get more of.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Every nutrition label lists a <TermLink href="/health-body-basics/how-to-read-a-nutrition-label">Percent Daily Value</TermLink> next to nutrients like sodium, fiber, and calcium. That percentage tells you what share of a full day&apos;s recommended amount is in one serving. A sodium %DV of 20% means one serving supplies a fifth of the daily reference amount FDA has set for sodium.</div>}
      detailed={<div className="prose-p">The <TermLink href="/health-body-basics/how-to-read-a-nutrition-label">Daily Value</TermLink> figures behind %DV are standardized reference amounts set by the FDA for a general 2,000-calorie diet — they are not personalized targets, but a common yardstick that makes labels comparable across products. The %DV formula itself is simple division: nutrient amount per serving ÷ that nutrient&apos;s Daily Value, times 100. FDA&apos;s own consumer guidance publishes the 5%/20% thresholds as a quick screening tool — 5% DV or less flags a nutrient as low in that serving, 20% DV or more flags it as high, useful for comparing added sugars or sodium (nutrients to limit) against fiber or vitamin D (nutrients to seek more of) using the exact same number scale.</div>}
      />
      <FootnoteAside>The %DV reference values were last substantially updated by the FDA&apos;s 2016 nutrition label overhaul (fully required on products starting 2020-2021), which also added &quot;Added Sugars&quot; as its own labeled line with its own %DV — a distinction from naturally occurring sugars that didn&apos;t exist on the older label format.</FootnoteAside>

      <p>
      Because %DV always uses the same formula, comparing two products&apos; %DV numbers for the same nutrient is a fast, apples-to-apples comparison — even without knowing the raw milligram or gram amounts.
      </p>

      <QuickCheck
      question="A label shows sodium at 15% DV per serving. What does that number mean?"
      options={[
      { text: "15% of the calories in the package come from sodium", correct: false, explanation: "%DV isn't a share of calories — it's a share of a standardized daily reference amount for that specific nutrient (sodium's Daily Value, set in milligrams), unrelated to the calorie count." },
      { text: "One serving supplies 15% of the FDA's standardized daily reference amount for sodium", correct: true, explanation: "Correct. %DV expresses the serving's nutrient amount as a percentage of that nutrient's own Daily Value reference, set by the FDA for a general 2,000-calorie diet." },
      { text: "15% of the package's total weight is sodium", correct: false, explanation: "%DV has nothing to do with weight proportion of the package — it's the serving's nutrient amount compared to a fixed daily reference figure." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating %DV from a nutrient amount (baseline case)</h3>
      <div className="prose-p">
      Sodium&apos;s Daily Value is 2,300 mg. A serving contains 460 mg. %DV = (460 ÷ 2,300) × 100 = 20%. Per FDA&apos;s rule of thumb, 20% DV is at the high end for a single serving.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same %DV logic applied to a nutrient you want more of (edge case / variation)</h3>
      <div className="prose-p">
      Dietary fiber&apos;s Daily Value is 28g. A serving contains 7g. %DV = (7 ÷ 28) × 100 = 25%. The arithmetic is identical to the sodium example — the only difference is that a high %DV for fiber is generally viewed as favorable, while a high %DV for sodium or added sugars is generally viewed as something to watch, per USDA/FDA dietary guidance. The formula doesn&apos;t judge the nutrient; the reader applies that judgment based on which nutrient it is.
      </div>

      <QuickCheck
      question="Is a high %DV always something to avoid?"
      options={[
      { text: "Yes — a high %DV always means too much of something undesirable", correct: false, explanation: "%DV is a neutral measurement of proportion, not a verdict — a high %DV for fiber or vitamin D is generally favorable, while a high %DV for sodium or added sugars is generally something to watch." },
      { text: "No — whether a high %DV is good or something to watch depends on which nutrient it is, since %DV is calculated the same way for every nutrient regardless of whether more or less of it is desirable", correct: true, explanation: "Correct. The %DV formula is nutrient-neutral; the desirability of a high or low number depends on the specific nutrient, per general dietary guidance." },
      { text: "Only vitamins and minerals get %DV labels — macronutrients don't", correct: false, explanation: "Nutrition labels show %DV for many macronutrient-related lines too, including total fat, saturated fat, and total carbohydrate, not only vitamins and minerals." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two products by %DV without needing raw numbers (real-world / applied case)</h3>
      <div className="prose-p">
      Two brands of bread list fiber %DV as 8% and 18% per serving respectively. Without knowing the exact gram amounts, the %DV alone tells you the second bread supplies more than double the share of the daily fiber reference per serving — a fast comparison tool exactly because both labels use the same Daily Value denominator (28g) behind the scenes.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="How %DV is calculated: nutrient amount over Daily Value reference"
      type="flow"
      svgSrc="/diagrams/health-body-basics-how-to-read-a-nutrition-label-percent-dv-formula.svg"
      altText="A flow diagram showing a nutrition label's sodium amount of 460 milligrams divided by the Daily Value reference of 2300 milligrams, multiplied by 100, resulting in a Percent Daily Value of 20 percent, with a scale below showing 5 percent as the low threshold and 20 percent as the high threshold per FDA guidance."
      />
      <p>
      The same three-step calculation — amount, divided by Daily Value, times 100 — sits behind every %DV number on every label, which is why the 5%/20% thresholds work as a universal quick-read tool across any nutrient.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming %DV is a percentage of the whole package rather than one serving.", fix: "Check the stated serving size first — %DV is always per serving, and a package can contain multiple servings." },
      { mistake: "Treating every high %DV as bad or every low %DV as good.", fix: "Consider which nutrient it is — a high %DV is favorable for nutrients like fiber and unfavorable for nutrients like sodium or added sugars." },
      { mistake: "Ignoring %DV and only looking at raw gram or milligram numbers.", fix: "Use %DV for quick comparisons between products, since it normalizes different serving sizes to the same daily reference scale." },
      ]}
      />
      <MisconceptionCallout
      myth="The 2,000-calorie reference diet behind %DV is a recommendation for how much everyone should eat."
      reality={<p>The 2,000-calorie figure is a standardized reference point the FDA uses so labels are comparable across products — it is explicitly not a personal calorie recommendation. Actual calorie needs vary by age, sex, size, and activity level, which is why the label itself states the %DV values &quot;may be higher or lower depending on your calorie needs,&quot; per FDA&apos;s own label text.</p>}
      />

      <QuickCheck
      question="Does the 2,000-calorie reference used to calculate %DV mean everyone should eat exactly 2,000 calories a day?"
      options={[
      { text: "Yes, it's a universal recommended calorie target", correct: false, explanation: "It's a standardized reference for label comparability, not a personal recommendation — the FDA's own label text notes individual needs vary." },
      { text: "No — it's a standardized reference point so labels are comparable across products; actual individual calorie needs vary by age, sex, size, and activity level", correct: true, explanation: "Correct. This is exactly why the label includes the disclaimer that %DV may be higher or lower depending on individual calorie needs." },
      { text: "No — the 2,000-calorie figure only applies to sodium, not other nutrients", correct: false, explanation: "The 2,000-calorie reference diet underlies the Daily Values for multiple nutrients on the label, not sodium alone." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate Percent Daily Value"
      fields={[
      { key: "amount", label: "Nutrient amount in serving (e.g. mg)", defaultValue: 460 },
      { key: "dailyValueReference", label: "Daily Value reference (e.g. mg)", defaultValue: 2300 },
      ]}
      resultLabel="Percent Daily Value"
      formula="dailyValuePercent"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check the serving size first — every other number on the label, including %DV, is relative to it.",
      "Use the 5%/20% rule of thumb: 5% DV or less is low, 20% DV or more is high, per FDA guidance.",
      "Use %DV, not just raw grams or milligrams, when comparing two similar products quickly.",
      "Remember the 2,000-calorie reference is a labeling standard, not a personal target — ask a registered dietitian for individualized numbers.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does Percent Daily Value mean on a nutrition label?", answer: "It shows how much a nutrient in one serving contributes to a standardized full day's recommended amount, calculated as (amount ÷ Daily Value) × 100." },
      { question: "Is 20% DV a lot?", answer: "Per FDA's rule of thumb, yes — 20% DV or more per serving is considered high for that nutrient, while 5% DV or less is considered low." },
      { question: "Is %DV based on my personal calorie needs?", answer: "No — it's based on a standardized 2,000-calorie reference diet used for label comparability, not an individual recommendation; actual needs vary by person." },
      { question: "How do you calculate %DV yourself?", answer: "Divide the nutrient amount in one serving by that nutrient's Daily Value reference, then multiply by 100." },
      { question: "Does a high %DV always mean a food is unhealthy?", answer: "No — it depends on the nutrient. A high %DV for fiber or vitamin D is generally favorable; a high %DV for sodium or added sugars is generally something to watch, per general dietary guidance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
