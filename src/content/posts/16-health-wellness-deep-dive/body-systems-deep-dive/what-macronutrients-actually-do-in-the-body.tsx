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
  title: "What Macronutrients Actually Do in the Body",
  category: "health-wellness-deep-dive",
  order: 6,
  subtopic: "body-systems-deep-dive",
  tags: ["macronutrients", "carbohydrates", "protein", "dietary fat", "calories per gram", "AMDR", "nutrition"],
  date: "2026-09-27",
  updated: "2026-09-27",
  youtubeShort: false, youtubeLong: false,
  seoScore: 80, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-27",
  excerpt: "Carbohydrates fuel the brain and muscles, protein builds and repairs tissue, and fat stores energy, builds cells and carries vitamins A, D, E and K. Each gram gives 4, 4 and 9 calories respectively.",
  summary: "Macronutrients are the three nutrients the body needs in large amounts: carbohydrate, protein and fat. Carbohydrates provide 4 calories per gram and are broken down mainly to glucose, the brain's preferred fuel; the National Academies set the adult RDA for carbohydrate at 130 grams a day, based on the brain's glucose needs, and fiber, a carbohydrate humans can't digest, feeds gut bacteria. Protein also provides 4 calories per gram and supplies amino acids for muscle, enzymes, hormones and antibodies; 9 of the 20 amino acids are essential and must come from food, and the adult RDA is 0.8 grams per kilogram of body weight. Fat provides 9 calories per gram, is the body's densest energy store, forms cell membranes and some hormones, and is needed to absorb vitamins A, D, E and K; linoleic acid and alpha-linolenic acid are essential fatty acids. The National Academies' Acceptable Macronutrient Distribution Ranges for adults are 45–65% of calories from carbohydrate, 20–35% from fat and 10–35% from protein. Alcohol also provides calories (7 per gram) but isn't a nutrient the body needs.",
  sources: [
    { label: "National Academies — Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids (2005)", url: "https://doi.org/10.17226/10490" },
    { label: "U.S. FDA — How to Understand and Use the Nutrition Facts Label", url: "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label" },
    { label: "MedlinePlus — Carbohydrates", url: "https://medlineplus.gov/carbohydrates.html" },
    { label: "MedlinePlus — Dietary Proteins", url: "https://medlineplus.gov/dietaryproteins.html" },
    { label: "MedlinePlus — Dietary Fats", url: "https://medlineplus.gov/dietaryfats.html" },
    { label: "USDA — FoodData Central", url: "https://fdc.nal.usda.gov/" },
  ],
  seeAlso: [
    "health-body-basics/understanding-a-balanced-plate-macronutrients-overview",
    "health-body-basics/how-to-read-a-nutrition-label",
    "health-wellness-deep-dive/how-intermittent-fasting-actually-affects-metabolism",
    "general-science-facts/nutrition-and-how-the-body-uses-food",
    "health-wellness-deep-dive/how-the-lymphatic-system-actually-works",
  ],
  glossary: [
    { term: "Macronutrient", definition: "A nutrient needed in large amounts (grams a day) that provides energy: carbohydrate, protein or fat." },
    { term: "Essential amino acid", definition: "One of 9 amino acids the body can't make, so it must come from food." },
    { term: "Essential fatty acid", definition: "A fat the body can't make: linoleic acid (omega-6) and alpha-linolenic acid (omega-3)." },
    { term: "AMDR", definition: "Acceptable Macronutrient Distribution Range: the share of calories from each macronutrient linked to lower chronic disease risk while meeting nutrient needs." },
    { term: "Glycogen", definition: "The stored form of glucose in the liver and muscles, used for quick energy." },
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
  {"question": "How many calories does a gram of fat provide?", "difficulty": "easy", "options": [{"text": "9", "correct": true, "explanation": "More than twice the 4 calories per gram from carbohydrate or protein."}, {"text": "4", "correct": false, "explanation": "That's carbohydrate and protein."}, {"text": "7", "correct": false, "explanation": "That's alcohol."}]},
  {"question": "What is the brain's main fuel under normal conditions?", "difficulty": "easy", "options": [{"text": "Glucose, mostly from carbohydrates", "correct": true, "explanation": "The carbohydrate RDA of 130 g/day is based on the brain's glucose use."}, {"text": "Protein directly", "correct": false, "explanation": "Protein can be converted to glucose, but it's not the main direct fuel."}, {"text": "Vitamin C", "correct": false, "explanation": "Vitamins don't provide calories."}]},
  {"question": "What's the adult RDA for protein?", "difficulty": "medium", "options": [{"text": "0.8 grams per kilogram of body weight per day", "correct": true, "explanation": "About 56 g for a 70 kg adult. Needs can be higher for some groups."}, {"text": "0.8 grams per pound", "correct": false, "explanation": "The RDA is per kilogram, not per pound."}, {"text": "A flat 200 grams for everyone", "correct": false, "explanation": "The RDA scales with body weight."}]},
  {"question": "Why does a very low-fat diet risk certain vitamin shortfalls?", "difficulty": "medium", "options": [{"text": "Vitamins A, D, E and K need fat to be absorbed", "correct": true, "explanation": "They're fat-soluble."}, {"text": "Fat contains vitamin C", "correct": false, "explanation": "Vitamin C is water-soluble."}, {"text": "Fat is the only source of iron", "correct": false, "explanation": "Iron comes from many foods, not fat."}]},
  {"question": "What are the adult AMDRs for carbohydrate, fat and protein?", "difficulty": "hard", "options": [{"text": "45–65%, 20–35% and 10–35% of calories", "correct": true, "explanation": "These are the National Academies' ranges."}, {"text": "33% each", "correct": false, "explanation": "The ranges are wider and not equal."}, {"text": "10%, 10% and 80%", "correct": false, "explanation": "No official range looks like this."}]},
  {"question": "A food has 30 g carbohydrate, 10 g protein and 10 g fat. About how many calories?", "difficulty": "medium", "options": [{"text": "250", "correct": true, "explanation": "30×4 + 10×4 + 10×9 = 120 + 40 + 90 = 250."}, {"text": "200", "correct": false, "explanation": "That treats fat as 4 calories per gram."}, {"text": "50", "correct": false, "explanation": "That just adds grams, not calories."}]},
  {"question": "What is an essential amino acid?", "difficulty": "hard", "options": [{"text": "One the body can't make, so it must come from food", "correct": true, "explanation": "There are 9 of them."}, {"text": "The most important amino acid for muscles", "correct": false, "explanation": "'Essential' means required from diet, not most important."}, {"text": "An amino acid found only in meat", "correct": false, "explanation": "Plant foods provide essential amino acids too, especially in combination."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Carbohydrates are the main fuel for your brain and hard-working muscles; fiber, a carbohydrate you can't digest, feeds gut bacteria.",
          "Protein supplies the amino acids that build and repair muscle, enzymes, hormones and antibodies.",
          "Fat is your densest energy store (9 calories per gram vs 4), builds cell membranes and is needed to absorb vitamins A, D, E and K.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Macronutrients are the three things in food you need by the handful rather than the pinch: carbohydrates, protein and fat. All three give you energy, but each has a different main job. Carbs are fast fuel: your brain runs mostly on the sugar they break down into, and muscles lean on them during hard exercise. Protein is building material, used to repair muscle, make enzymes and keep your immune system stocked. Fat is long-term storage and structure: it packs the most energy per bite, forms the walls of every cell, and carries certain vitamins into your body. You need all three. The debate is mostly about how much of each and from which foods.</div>}
        detailed={<div className="prose-p"><strong>Carbohydrates</strong> (4 kcal/g) are digested to monosaccharides, mainly glucose, which is used directly or stored as glycogen in liver and muscle. The National Academies set the adult RDA at 130 g/day based on the brain&apos;s average glucose use. During prolonged fasting, the liver can make glucose from amino acids and glycerol and ketone bodies partly replace it (the mechanism behind <TermLink href="/health-wellness-deep-dive/how-intermittent-fasting-actually-affects-metabolism">fasting&apos;s metabolic effects</TermLink>). Fiber is a carbohydrate human enzymes can&apos;t break down; gut bacteria ferment some of it into short-chain fatty acids. The adequate intake is 14 g per 1,000 calories. <strong>Protein</strong> (4 kcal/g) is broken into amino acids; 9 are essential. The body constantly breaks down and rebuilds its own proteins, so a steady supply matters. The RDA is 0.8 g/kg/day, a floor to avoid deficiency rather than an optimum for everyone; older adults and athletes are often advised to eat more. <strong>Fat</strong> (9 kcal/g) is stored as triglycerides in adipose tissue, the body&apos;s largest energy reserve. Phospholipids and cholesterol form cell membranes; cholesterol is the starting material for steroid hormones; and vitamins A, D, E and K need dietary fat for absorption. Two fatty acids are essential: linoleic (omega-6) and alpha-linolenic (omega-3). The Acceptable Macronutrient Distribution Ranges for adults are 45–65% of calories from carbohydrate, 20–35% from fat and 10–35% from protein: wide ranges, because many healthy diets exist within them.</div>}
      />
      <FootnoteAside>This is general health information, not medical or dietary advice. People with diabetes, kidney disease, pregnancy or other conditions may have different needs; a doctor or registered dietitian can tailor them.</FootnoteAside>

      <p>Every Nutrition Facts label lists grams of each macronutrient. Multiply by 4, 4 and 9 and you&apos;ll land close to the label&apos;s calorie count (see <TermLink href="/health-body-basics/how-to-read-a-nutrition-label">how to read a nutrition label</TermLink>).</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calories from macronutrients"
        fields={[
          { key: "carbsG", label: "Carbohydrate (g)", defaultValue: 30 },
          { key: "proteinG", label: "Protein (g)", defaultValue: 10 },
          { key: "fatG", label: "Fat (g)", defaultValue: 10 },
        ]}
        resultLabel="Approximate calories"
        formula="macroCalories"
        formatResult="number"
        disclaimer="Uses 4 kcal/g for carbohydrate and protein and 9 kcal/g for fat. Labels round, and fiber provides fewer calories, so results are approximate."
      />

      <QuickCheck
        question="Why is fat the body's main long-term energy store rather than carbohydrate?"
        options={[
          { text: "It packs about 9 calories per gram, more than twice carbohydrate's 4", correct: true, explanation: "Correct. Glycogen is also stored with water, making it even bulkier per calorie." },
          { text: "The body can't store carbohydrate at all", correct: false, explanation: "It stores some as glycogen in liver and muscle, but only a limited amount." },
          { text: "Fat provides no energy, so it's safer to store", correct: false, explanation: "Fat is the most energy-dense macronutrient." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Checking a label (baseline case)</h3>
      <div className="prose-p">A granola bar label lists 30 g carbohydrate, 10 g protein and 10 g fat. Calories from each: 30 × 4 = 120 from carbs, 10 × 4 = 40 from protein, 10 × 9 = 90 from fat, for 250 total. As shares: 48% carbohydrate, 16% protein and 36% fat. Fat is only 20% of the bar&apos;s macronutrient grams but 36% of its calories, because each gram carries more than twice the energy. That&apos;s why small amounts of oil, butter or nuts add calories quickly.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Protein needs by body weight (edge case)</h3>
      <div className="prose-p">The RDA of 0.8 g per kilogram means a 70 kg (154 lb) adult needs about 56 g of protein a day, and a 90 kg (198 lb) adult about 72 g. A common mistake is applying 0.8 g per <em>pound</em>, which gives 123 g for the 70 kg person, more than double. Higher intakes aren&apos;t necessarily harmful for healthy people and are often recommended for older adults and strength athletes (roughly 1.0–1.6 g/kg in many sports nutrition guidelines), but the unit matters, and people with kidney disease may need to limit protein.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Building a day within the ranges (real-world use)</h3>
      <div className="prose-p">Someone eating 2,000 calories a day can fit anywhere in these ranges: 225–325 g carbohydrate (45–65%), 44–78 g fat (20–35%) and 50–175 g protein (10–35%). A sample day: oatmeal with milk and berries, a lentil and rice bowl with vegetables and olive oil, Greek yogurt, and salmon with potatoes and salad lands around 50% carbohydrate, 30% fat and 20% protein, well within all three ranges, with fiber from the oats, lentils, fruit and vegetables. The ranges leave room for very different cuisines; the quality of each source (whole grains vs refined sugar, fish vs processed meat) matters as much as the percentages.</div>

      <QuickCheck
        question="In the granola bar, why is fat 36% of calories but only 20% of the macronutrient grams?"
        options={[
          { text: "Each gram of fat has 9 calories, versus 4 for carbohydrate and protein", correct: true, explanation: "Correct. Energy density is what shifts the share." },
          { text: "The label is wrong", correct: false, explanation: "The math matches the Atwater factors." },
          { text: "Protein has no calories", correct: false, explanation: "Protein provides 4 calories per gram." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What each macronutrient does"
        type="comparison"
        svgSrc="/diagrams/health-wellness-deep-dive-what-macronutrients-actually-do-in-the-body-comparison.svg"
        altText="Two columns. Carbohydrate and protein, 4 calories per gram each: carbs provide glucose, the brain's main fuel; carbs include fiber that feeds gut bacteria; protein builds muscle, enzymes and antibodies; 9 amino acids must come from food. Fat, 9 calories per gram: the densest energy store in the body, builds cell membranes and hormones, carries vitamins A, D, E and K, and provides 2 essential fatty acids from food. Adult ranges: carbs 45-65%, fat 20-35%, protein 10-35% of calories."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating any one macronutrient as the enemy.", fix: "All three have essential roles. Focus on the quality of sources and total calories rather than eliminating a macronutrient." },
          { mistake: "Confusing grams per pound with grams per kilogram for protein.", fix: "The RDA is 0.8 g per kilogram. Divide your weight in pounds by 2.2 to get kilograms first." },
          { mistake: "Cutting fat so low that meals barely contain any.", fix: "Include some fat, such as olive oil, nuts or fish, so vitamins A, D, E and K can be absorbed." },
        ]}
      />
      <MisconceptionCallout
        myth="Carbs make you gain weight; fat makes you fat."
        reality={<p>Weight change depends on total energy intake versus expenditure over time, and calories from any macronutrient count. Fat is more calorie-dense, so it adds up faster by weight, and refined carbohydrates and sugary drinks are easy to overconsume. But whole-food sources of both, such as whole grains, legumes, fruit, nuts and olive oil, are part of eating patterns linked to good health. The type and amount matter more than the macronutrient label.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the macronutrient grams on three foods you eat often and multiply by 4, 4 and 9.",
          "Work out your protein RDA: your weight in kilograms × 0.8.",
          "Swap one refined-carb food this week for a high-fiber one (oats, beans, whole-grain bread).",
          "Make sure most meals include a little fat so fat-soluble vitamins get absorbed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the three macronutrients and what do they do?", answer: "Carbohydrates provide fast energy, especially for the brain and working muscles. Protein supplies amino acids for building and repairing tissue, enzymes and antibodies. Fat stores energy, builds cell membranes and hormones, and helps absorb vitamins A, D, E and K." },
          { question: "How many calories are in a gram of protein, carbs and fat?", answer: "Protein and carbohydrate each provide about 4 calories per gram; fat provides about 9. Alcohol provides about 7, though it isn't a nutrient the body needs." },
          { question: "What percentage of calories should come from each macronutrient?", answer: "The National Academies' ranges for adults are 45–65% carbohydrate, 20–35% fat and 10–35% protein. Many different healthy diets fit within those ranges." },
          { question: "How much protein do I need a day?", answer: "The adult RDA is 0.8 grams per kilogram of body weight, about 56 g for a 70 kg person. Older adults, athletes and people recovering from illness may benefit from more." },
          { question: "Can you live without carbohydrates?", answer: "The body can make glucose from protein and fat breakdown products and use ketones for much of the brain's fuel, so carbohydrate isn't strictly essential. But carbohydrate-rich foods supply fiber and many nutrients, and the RDA is 130 g a day for adults." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
