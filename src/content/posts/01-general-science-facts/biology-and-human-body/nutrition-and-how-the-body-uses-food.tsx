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
  title: "Nutrition & How the Body Uses Food: Macronutrients, Calories, and Metabolism",
  category: "general-science-facts",
  order: 23,
  subtopic: "biology-and-human-body",
  tags: [
    "nutrition",
    "macronutrients",
    "calories",
    "metabolism",
    "digestion",
    "BMI",
    "biology basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How carbohydrates, protein, and fat give the body energy, how digestion breaks food into usable fuel, and what BMI actually measures (and doesn't).",
  summary: "Food provides energy measured in calories, drawn from three macronutrients — carbohydrates, protein, and fat — that the digestive system breaks down into molecules cells use for fuel, growth, and repair.",
  sources: [
    { label: "CDC — Nutrition", url: "https://www.cdc.gov/nutrition/index.html" },
    { label: "NIH MedlinePlus — Nutrition", url: "https://medlineplus.gov/nutrition.html" },
    { label: "World Health Organization — Healthy Diet", url: "https://www.who.int/health-topics/nutrition" },
    { label: "NIH National Institute of Diabetes and Digestive and Kidney Diseases — Weight Management", url: "https://www.niddk.nih.gov/health-information/weight-management" },
  ],
  seeAlso: [
    "general-science-facts/human-body-systems",
    "general-science-facts/energy-types-and-conservation",
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
  ],
  glossary: [
    { term: "Macronutrient", definition: "A nutrient the body needs in large amounts for energy and structure: carbohydrates, protein, and fat." },
    { term: "Micronutrient", definition: "A nutrient the body needs in small amounts, such as vitamins and minerals, that support specific body functions rather than providing bulk energy." },
    { term: "Calorie", definition: "A unit of energy; the 'Calorie' on a nutrition label is actually a kilocalorie, equal to 1,000 'small' calories used in chemistry." },
    { term: "Metabolism", definition: "The full set of chemical processes a body uses to convert food into energy and building materials." },
    { term: "Basal metabolic rate", definition: "The number of calories a body burns at complete rest just to maintain basic functions like breathing and circulation." },
    { term: "Body Mass Index (BMI)", definition: "A screening ratio of weight to height, used as a population-level indicator, not a direct measurement of body fat or individual health." },
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
          "Food provides energy measured in calories, and the body draws that energy mainly from three macronutrients — carbohydrates and protein at about 4 calories per gram, fat at about 9 calories per gram.",
          "Digestion breaks food down into absorbable molecules — glucose, amino acids, fatty acids — that cells use for energy, growth, and repair; food isn't generic 'fuel,' it's raw material for specific chemical processes.",
          "Body Mass Index (BMI) is a simple screening ratio of weight to height used at a population level — it is not a diagnostic measurement of body fat or individual health on its own, per CDC and NIH guidance.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/nutrition-and-how-the-body-uses-food">Nutrition</TermLink> is how the body gets and uses what it needs from food. Food is mostly made of three <TermLink href="/general-science-facts/nutrition-and-how-the-body-uses-food">macronutrients</TermLink> — carbohydrates, protein, and fat — plus smaller amounts of vitamins and minerals (micronutrients). Each macronutrient provides energy, measured in <TermLink href="/general-science-facts/nutrition-and-how-the-body-uses-food">calories</TermLink>, but fat provides more than twice as much energy per gram as carbohydrates or protein. Digestion breaks all of this down into smaller pieces the body can actually absorb and use — for energy right now, for storage later, or as building material for muscle, bone, and other tissue.</div>}
        detailed={<div className="prose-p">Using the standard Atwater energy system, carbohydrates and protein each provide about 4 kilocalories per gram, fat provides about 9 kilocalories per gram, and alcohol (not a nutrient the body needs, but still a calorie source) provides about 7 kilocalories per gram. Digestion physically and chemically breaks macronutrients into their absorbable building blocks: carbohydrates into simple sugars like glucose, protein into amino acids, and fat into fatty acids and glycerol — all absorbed primarily through the small intestine into the bloodstream. Cells then use these molecules through <TermLink href="/general-science-facts/nutrition-and-how-the-body-uses-food">metabolism</TermLink>, a network of chemical reactions that ultimately produces ATP, the molecule cells use as an immediate energy source. Energy not needed right away is stored short-term as glycogen (in the liver and muscles) or long-term as fat. Even at complete rest, the body burns energy just maintaining basic functions like breathing, circulation, and cell repair — this baseline is called <TermLink href="/general-science-facts/nutrition-and-how-the-body-uses-food">basal metabolic rate</TermLink>, and it typically accounts for the majority of total daily calorie use in most people.</div>}
      />
      <FootnoteAside>The &quot;Calorie&quot; printed on a nutrition label (capital C) is actually a kilocalorie — 1,000 of the smaller &quot;calories&quot; originally used in 19th-century chemistry to measure heat energy. This labeling convention, sometimes written as &quot;kcal,&quot; has stuck in food science ever since, even though it can read as a single, smaller unit to the average shopper.</FootnoteAside>

      <p>
      The energy numbers above aren&apos;t just trivia — they&apos;re the actual arithmetic behind how a meal&apos;s calorie content is calculated, and running real numbers through it makes the mechanism concrete.
      </p>

      <QuickCheck
        question="Gram for gram, which macronutrient provides the most energy (calories)?"
        options={[
          { text: "Carbohydrates, at roughly 4 calories per gram", correct: false, explanation: "Carbohydrates do provide about 4 calories per gram, but that's less than fat — this isn't the highest-energy macronutrient per gram." },
          { text: "Fat, at roughly 9 calories per gram — more than double carbohydrates or protein", correct: true, explanation: "Correct. Fat provides about 9 kilocalories per gram under the standard Atwater energy system, versus about 4 kilocalories per gram for both carbohydrates and protein." },
          { text: "Protein, at roughly 4 calories per gram", correct: false, explanation: "Protein does provide about 4 calories per gram, tied with carbohydrates — but fat provides more than double that amount per gram." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating a meal&apos;s total calories from its macronutrients (baseline case)</h3>
      <div className="prose-p">
      A meal contains 50g of carbohydrates, 20g of protein, and 10g of fat. Using the Atwater values (carbs and protein ≈ 4 kcal/g, fat ≈ 9 kcal/g): carbohydrates contribute 50 × 4 = 200 kcal, protein contributes 20 × 4 = 80 kcal, and fat contributes 10 × 9 = 90 kcal. Adding these together: 200 + 80 + 90 = <strong>370 kilocalories</strong> total. This is exactly the arithmetic behind the &quot;Calories&quot; figure printed on a nutrition label — it&apos;s calculated from the macronutrient breakdown, not measured as one single number.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Alcohol as an &quot;empty calorie&quot; source (edge case / variation)</h3>
      <div className="prose-p">
      Alcohol doesn&apos;t fit neatly into the three-macronutrient framework: it isn&apos;t a nutrient the body requires for any essential function, yet it still provides real, usable energy — about 7 kilocalories per gram, more than carbohydrates or protein and just under fat. Because it delivers energy without the vitamins, minerals, protein, or fiber that food sources typically provide alongside their calories, it&apos;s often described as an &quot;empty calorie&quot; source. A standard 150ml glass of wine or a 350ml beer commonly contributes roughly 100-150 kilocalories from alcohol content alone, on top of any calories from other ingredients — a real-world reason alcoholic drinks can meaningfully affect total daily calorie intake even though they aren&apos;t classified among the three core macronutrients.
      </div>

      <QuickCheck
        question="Alcohol provides about 7 kilocalories per gram of usable energy but is not classified as one of the three core macronutrients. Why?"
        options={[
          { text: "Alcohol doesn't actually provide the body with any usable energy", correct: false, explanation: "Alcohol does provide real, measurable energy — about 7 kilocalories per gram — which the body can and does use. The classification issue is about nutritional necessity, not whether it provides energy." },
          { text: "Macronutrients are nutrients the body requires for essential functions (energy, growth, repair); alcohol provides energy but isn't required for any essential body function", correct: true, explanation: "Correct. Carbohydrates, protein, and fat are all needed for essential processes beyond just energy. Alcohol supplies calories without serving any of those essential roles, which is why it's often called an 'empty calorie' source instead." },
          { text: "Alcohol contains more calories per gram than fat, so it's grouped in its own separate category", correct: false, explanation: "Alcohol's roughly 7 kcal/g is actually less than fat's roughly 9 kcal/g — calorie density isn't why it's excluded from the macronutrient category." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Calculating BMI and understanding its limits (real-world / applied case)</h3>
      <p>
      BMI is calculated as weight in kilograms divided by height in meters squared. For someone weighing 70 kg and standing 1.75 m tall: 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ <strong>22.9</strong>, which falls within the commonly cited &quot;normal weight&quot; range of 18.5-24.9 used by the CDC and WHO. BMI is useful as a quick, low-cost population-level screening tool, but per NIH and CDC guidance it does not directly measure body fat percentage or account for individual differences like muscle mass — a muscular athlete can register a high BMI despite having low body fat, because the formula can&apos;t distinguish muscle weight from fat weight. This is why BMI is treated as one screening indicator among several, not a standalone diagnosis, and why any individual health concern is best discussed with a healthcare provider who can consider the full picture.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From food to fuel: the macronutrient breakdown pathway"
        type="detail"
        svgSrc="/diagrams/general-science-facts-nutrition-and-how-the-body-uses-food-pathway.svg"
        altText="A flow diagram showing a meal breaking into three macronutrient streams — carbohydrates, protein, and fat — each digested into its absorbable building block (glucose, amino acids, fatty acids and glycerol), absorbed through the small intestine into the bloodstream, and then used by cells for either immediate energy (ATP production), short-term storage as glycogen, or long-term storage as fat."
      />
      <p>
      Follow any one of the three streams and notice it ends at the same fork: cells either use the absorbed molecules for energy right away, store a limited amount nearby as glycogen for the next few hours, or — once those stores are full — convert the surplus into fat for longer-term storage. This is the same basic pathway regardless of which macronutrient the energy originally came from, which is why &quot;eating too much fat&quot; and &quot;eating too much of anything beyond what the body uses&quot; both lead to the same storage outcome.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating all calories as nutritionally equal regardless of source.", fix: "Total calories determine energy balance, but the source matters for everything else — a 200-calorie serving of vegetables and a 200-calorie serving of candy deliver very different amounts of protein, fiber, vitamins, and minerals alongside that energy." },
          { mistake: "Assuming 'fat-free' or 'low-fat' automatically means low-calorie or healthy.", fix: "Manufacturers often replace removed fat with added sugar or refined carbohydrates to preserve taste and texture, which can leave a 'fat-free' product with a similar or even higher calorie count than the original." },
          { mistake: "Treating BMI as a precise, standalone diagnosis of an individual's health.", fix: "Per CDC and NIH guidance, use BMI only as one general screening indicator — it doesn't distinguish muscle from fat and doesn't account for factors like age, sex, or body composition on its own." },
        ]}
      />
      <MisconceptionCallout
        myth="Eating dietary fat directly makes you gain body fat."
        reality={<p>Body weight change is governed primarily by total calorie balance across all macronutrients combined — calories consumed versus calories used — not by dietary fat intake specifically. Dietary fat is also an essential nutrient: it&apos;s needed to absorb certain vitamins (A, D, E, and K), build cell membranes, and produce hormones. A diet can lead to weight gain from excess calories sourced entirely from carbohydrates or protein, just as it can from excess fat. The relevant number for weight change is total energy balance, not which single macronutrient the calories came from.</p>}
      />

      <QuickCheck
        question="Someone gains weight after several weeks of eating significantly more bread and sugary snacks, without increasing fat intake at all. What does this best illustrate?"
        options={[
          { text: "This shouldn't be possible, since only dietary fat can cause weight gain", correct: false, explanation: "Weight gain results from taking in more total calories than the body uses, regardless of which macronutrient those calories came from — carbohydrates and protein both provide usable calories that count toward that balance." },
          { text: "Excess calories from any macronutrient — including carbohydrates — can lead to weight gain, because total calorie balance is what matters, not the source macronutrient alone", correct: true, explanation: "Correct. Weight gain depends on total energy balance across all macronutrients. Excess carbohydrate calories that aren't used are stored the same way excess calories from any other source would be." },
          { text: "The person must be misreporting their fat intake", correct: false, explanation: "There's no need for an alternate explanation here — carbohydrate calories alone are fully capable of producing a calorie surplus and resulting weight gain, independent of fat intake." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate BMI (weight ÷ height²)"
        fields={[
          { key: "weightKg", label: "Weight (kg)", defaultValue: 70 },
          { key: "heightCm", label: "Height (cm)", defaultValue: 175 },
        ]}
        resultLabel="Body Mass Index (BMI)"
        formula="bmiFromWeightHeight"
        formatResult="number"
      />
      <p>
      BMI is a general screening ratio, not an individual diagnosis — per CDC and NIH guidance, it doesn&apos;t account for muscle mass, age, or body composition. Discuss what your results mean for you personally with a healthcare provider rather than using this calculator alone to draw conclusions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check a food label and practice the calorie-from-macronutrients math yourself using the 4/4/9 kcal-per-gram values from Example 1.",
          "Next time you see a 'fat-free' or 'low-fat' label, check the total calorie and sugar content rather than assuming fat-free means low-calorie.",
          "Try the BMI calculator above, and read the result as one general screening indicator, not a full picture of your individual health.",
          "For personalized nutrition guidance — especially around weight management or a medical condition — consult a healthcare provider or registered dietitian rather than relying on general reference numbers alone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many calories are in a gram of fat, protein, and carbs?", answer: "Fat provides about 9 kilocalories per gram; carbohydrates and protein each provide about 4 kilocalories per gram, using the standard Atwater energy system used on nutrition labels." },
          { question: "What is BMI and how is it calculated?", answer: "Body Mass Index is calculated as weight in kilograms divided by height in meters squared. It's a population-level screening ratio, not a direct measurement of body fat, and CDC/NIH guidance recommends not using it as a standalone individual diagnosis." },
          { question: "What are macronutrients?", answer: "Carbohydrates, protein, and fat — the three nutrients the body needs in large amounts for energy, growth, and repair. Vitamins and minerals, needed in much smaller amounts, are called micronutrients." },
          { question: "Does eating fat make you gain body fat?", answer: "Not directly. Weight change is driven by total calorie balance across all macronutrients, not fat intake specifically. Dietary fat is also essential for absorbing certain vitamins and producing hormones." },
          { question: "What happens to food after you eat it?", answer: "Digestion breaks macronutrients into absorbable molecules — glucose from carbohydrates, amino acids from protein, fatty acids and glycerol from fat — which are absorbed mainly in the small intestine and used by cells for immediate energy, short-term storage as glycogen, or long-term storage as fat." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
