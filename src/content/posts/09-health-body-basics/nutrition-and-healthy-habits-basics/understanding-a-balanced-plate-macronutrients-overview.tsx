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
  title: "Understanding a Balanced Plate (Macronutrients Overview)",
  category: "health-body-basics",
  order: 33,
  subtopic: "nutrition-and-healthy-habits-basics",
  tags: ["macronutrients", "balanced plate", "nutrition basics", "calories", "USDA MyPlate"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Protein, carbohydrates, and fat each supply a different number of calories per gram — knowing those three numbers is the entire arithmetic behind reading how a meal is actually composed.",
  summary: "A balanced plate is one that includes all three macronutrients — protein, carbohydrates, and fat — each of which supplies energy at a different fixed rate per gram (4, 4, and 9 calories respectively), which is why the same gram count of fat contributes far more energy than the same gram count of protein or carbohydrate.",
  sources: [
    { label: "USDA — MyPlate: What Is MyPlate?", url: "https://www.myplate.gov/eat-healthy/what-is-myplate" },
    { label: "FDA — Nutrition Facts Label: Calories", url: "https://www.fda.gov/food/nutrition-facts-label/calories-nutrition-facts-label" },
    { label: "NIH — Dietary Reference Intakes for macronutrients", url: "https://www.ncbi.nlm.nih.gov/books/NBK56068/" },
  ],
  seeAlso: [
    "health-body-basics/how-to-read-a-nutrition-label",
    "health-body-basics/understanding-food-groups-and-dietary-variety",
    "health-body-basics/portion-control-basics",
  ],
  glossary: [
    {"term":"Macronutrient","definition":"One of the three nutrients the body needs in large amounts for energy and function: protein, carbohydrate, and fat."},
    {"term":"Atwater factors","definition":"The standard, long-established calorie-per-gram values used on nutrition labels: 4 calories per gram of protein, 4 per gram of carbohydrate, and 9 per gram of fat."},
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
      <strong>This entry explains general nutrition literacy — it is not personalized dietary advice.</strong> Individual calorie and macronutrient needs vary with age, activity, health status, and goals. For a specific eating plan, consult a doctor or registered dietitian.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A balanced plate contains all three macronutrients — protein, carbohydrate, and fat — each doing a different job the other two can't fully substitute for.",
      "Each macronutrient supplies a fixed number of calories per gram: 4 for protein, 4 for carbohydrate, and 9 for fat — these are the real, published Atwater general factors used on every nutrition label.",
      "Because fat supplies more than double the calories per gram of protein or carbohydrate, small differences in fat content can shift a meal's total calories far more than the same gram difference in the other two.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Food supplies energy through three <TermLink href="/health-body-basics/understanding-a-balanced-plate-macronutrients-overview">macronutrients</TermLink>: protein, carbohydrate, and fat. Protein and carbohydrate each supply about 4 calories per gram; fat supplies about 9 calories per gram — more than double. USDA&apos;s MyPlate model illustrates a balanced meal as portions of vegetables, fruits, grains, protein, and dairy, which in practice means combining all three macronutrients rather than relying heavily on just one.</div>}
      detailed={<div className="prose-p">The 4/4/9 calories-per-gram figures are the <TermLink href="/health-body-basics/understanding-a-balanced-plate-macronutrients-overview">Atwater factors</TermLink>, published general-use values that nutrition labels rely on to calculate total calories from a food&apos;s macronutrient breakdown — a label doesn&apos;t measure calories directly so much as compute them from grams of protein, carbohydrate, and fat multiplied by these fixed rates. This is exactly why a food&apos;s calorie count is derivable: if a label states grams of each macronutrient, multiplying and summing (protein g × 4) + (carbohydrate g × 4) + (fat g × 9) reproduces the total calories shown, within rounding. Alcohol, when present, adds a fourth factor (7 calories per gram) but isn&apos;t generally classified as a macronutrient the body needs.</div>}
      />
      <FootnoteAside>The Atwater system dates to 19th-century chemist Wilbur Atwater&apos;s original combustion-based measurements of food energy, later refined — the general 4/4/9 figures are still the standard used on food labels today, per FDA labeling rules, even though more precise food-specific factors exist for some ingredients.</FootnoteAside>

      <p>
      Once the three per-gram rates are memorized, it becomes possible to reconstruct — or sanity-check — a food&apos;s total calorie count directly from its macronutrient breakdown, which is the exact arithmetic behind the calculator further down this page.
      </p>

      <QuickCheck
      question="A snack contains 10g of protein, 10g of carbohydrate, and 10g of fat. Do all three contribute equally to its total calories?"
      options={[
      { text: "Yes, since all three have the same gram amount", correct: false, explanation: "Equal gram amounts don't mean equal calorie contributions — the three macronutrients have different calories-per-gram rates." },
      { text: "No — the fat contributes more calories than the protein or carbohydrate, even though all three are 10g, because fat supplies 9 calories per gram versus 4 for the other two", correct: true, explanation: "Correct. 10g protein = 40 calories, 10g carbohydrate = 40 calories, but 10g fat = 90 calories — fat's share of the total is more than double either of the others despite the identical gram amount." },
      { text: "No — protein always contributes the most calories regardless of gram amount", correct: false, explanation: "Protein doesn't have a special calorie advantage — gram for gram, it supplies the same 4 calories as carbohydrate, and less than half of fat's 9 calories per gram." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Computing total calories from a macronutrient breakdown (baseline case)</h3>
      <div className="prose-p">
      A meal lists 25g protein, 40g carbohydrate, and 15g fat. Total calories: (25 × 4) + (40 × 4) + (15 × 9) = 100 + 160 + 135 = 395 calories. This is the same arithmetic a nutrition label&apos;s calorie count is built from.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two meals with the same total grams but different calorie counts (edge case / variation)</h3>
      <div className="prose-p">
      Meal A: 30g protein, 30g carbohydrate, 10g fat (70g total macronutrients). Meal B: 10g protein, 10g carbohydrate, 50g fat (also 70g total). Meal A: (30×4)+(30×4)+(10×9) = 120+120+90 = 330 calories. Meal B: (10×4)+(10×4)+(50×9) = 40+40+450 = 530 calories — 200 calories more, from the identical total gram weight, purely because more of those grams are fat. Gram-for-gram totals alone don&apos;t determine calories; the macronutrient mix does.
      </div>

      <QuickCheck
      question="Why can two foods with the same total weight in grams have very different calorie counts?"
      options={[
      { text: "They can't — total weight in grams always determines total calories", correct: false, explanation: "Total weight doesn't determine calories on its own — water and fiber, for instance, contribute weight but little or no usable calories, and the macronutrient mix among protein/carb/fat changes the calorie total even at equal weight." },
      { text: "Because the proportion of fat versus protein/carbohydrate differs, and fat supplies more than double the calories per gram of the other two macronutrients", correct: true, explanation: "Correct. At equal total macronutrient weight, a higher proportion of fat means more total calories, since fat's calories-per-gram rate is more than double protein's or carbohydrate's." },
      { text: "Because protein grams don't count toward the calorie total", correct: false, explanation: "Protein does count — it supplies 4 calories per gram, the same rate as carbohydrate, just less than fat's 9." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sanity-checking a nutrition label against its stated calorie count (real-world / applied case)</h3>
      <div className="prose-p">
      A label states 8g protein, 22g carbohydrate, 6g fat, and &quot;150 calories.&quot; Checking: (8×4)+(22×4)+(6×9) = 32+88+54 = 174 — noticeably higher than the label&apos;s stated 150. This kind of gap is usually explained by fiber (a carbohydrate subtype the FDA allows to be partly excluded from the calorie calculation) or rounding on the label, per FDA labeling guidance — it&apos;s a useful literacy check, not proof of an error, but it shows the same 4/4/9 math underlies every calorie count on every label.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Same weight, different calories: how macronutrient mix changes a food's total energy"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-understanding-a-balanced-plate-macronutrients-overview-atwater-comparison.svg"
      altText="A bar comparison of three macronutrient bars each labeled with grams and calories per gram: protein at 4 calories per gram, carbohydrate at 4 calories per gram, and fat at 9 calories per gram, with the fat bar's calorie total visually more than double the height of the equal-weight protein and carbohydrate bars."
      />
      <p>
      The visual point is the height difference at equal gram weight — fat&apos;s bar reaches more than double the height of protein&apos;s or carbohydrate&apos;s, which is the entire reason fat content moves a food&apos;s total calorie count more than the same weight of the other two macronutrients.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming equal gram amounts of different macronutrients contribute equal calories.", fix: "Remember the 4/4/9 rule — fat's calories-per-gram rate is more than double protein's or carbohydrate's." },
      { mistake: "Judging a food as 'healthy' or 'unhealthy' from its calorie count alone, ignoring which macronutrients make up those calories.", fix: "Look at the full macronutrient breakdown, not just the total calorie number, since USDA's MyPlate guidance emphasizes variety across all three, not minimizing any one outright." },
      { mistake: "Treating a label's stated calorie count and a hand-calculated 4/4/9 total as if they must match exactly.", fix: "Expect small gaps from fiber accounting and rounding — the FDA permits both, so an exact match isn't required for the label to be accurate." },
      ]}
      />
      <MisconceptionCallout
      myth="Fat is 'bad' and should be minimized as much as possible on a balanced plate."
      reality={<p>Fat is one of three macronutrients the body needs — USDA&apos;s MyPlate and NIH dietary guidance both include fat as part of a balanced diet, not as something to eliminate. The literacy point of the Atwater factors isn&apos;t that fat is undesirable; it&apos;s that fat&apos;s higher calories-per-gram rate means its proportion has an outsized effect on a food&apos;s total calorie count, which is useful to know, not a reason to avoid it entirely.</p>}
      />

      <QuickCheck
      question="Does understanding the 4/4/9 calorie rule mean fat should be avoided entirely on a balanced plate?"
      options={[
      { text: "Yes — since fat has the highest calories per gram, it should be eliminated", correct: false, explanation: "Fat is a macronutrient the body needs; USDA and NIH guidance includes it as part of a balanced diet. The 4/4/9 rule is about understanding calorie contribution, not a recommendation to eliminate fat." },
      { text: "No — the rule explains why fat affects total calories more per gram, which is useful for understanding a label, not a reason to remove fat from a balanced diet", correct: true, explanation: "Correct. All three macronutrients serve real functions; the calorie-per-gram figures are a literacy tool, not a verdict on which macronutrient is 'good' or 'bad.'" },
      { text: "Yes, because carbohydrate and protein alone can fully replace fat's role in the body", correct: false, explanation: "Fat has distinct biological roles (such as absorbing certain vitamins) that protein and carbohydrate don't replace — it isn't interchangeable with the other two macronutrients." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate total calories from a macronutrient breakdown"
      fields={[
      { key: "proteinG", label: "Protein (grams)", defaultValue: 25 },
      { key: "carbsG", label: "Carbohydrate (grams)", defaultValue: 40 },
      { key: "fatG", label: "Fat (grams)", defaultValue: 15 },
      ]}
      resultLabel="Total calories"
      formula="caloriesFromMacros"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you check a nutrition label, try the 4/4/9 math yourself against the stated calorie count as a literacy exercise.",
      "Use USDA's MyPlate model as a mental checklist for including all three macronutrients across a day's meals, not just one.",
      "Remember fat's higher calories-per-gram rate when comparing two foods by weight alone — weight isn't calories.",
      "For any personalized calorie or macronutrient target, consult a doctor or registered dietitian rather than a general reference figure.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many calories are in a gram of protein, carbs, and fat?", answer: "4 calories per gram of protein, 4 per gram of carbohydrate, and 9 per gram of fat — the standard Atwater general factors used on nutrition labels." },
      { question: "Why does fat have more calories per gram than protein or carbs?", answer: "It's a property of fat's chemical structure — fat molecules store more energy per gram than protein or carbohydrate molecules, a long-established finding from food combustion measurements." },
      { question: "What is a balanced plate?", answer: "USDA's MyPlate model describes a balanced plate as a mix of vegetables, fruits, grains, protein foods, and dairy — in macronutrient terms, this means including protein, carbohydrate, and fat rather than relying heavily on just one." },
      { question: "Why doesn't my hand-calculated calorie total always match the label exactly?", answer: "Small gaps are normal — FDA labeling rules allow partial exclusion of fiber from the carbohydrate calorie count and permit rounding, so an exact match to the 4/4/9 formula isn't required." },
      { question: "Is this page medical or dietary advice?", answer: "No — this explains the general arithmetic behind macronutrients and calories. For a personal eating plan, consult a doctor or registered dietitian." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
