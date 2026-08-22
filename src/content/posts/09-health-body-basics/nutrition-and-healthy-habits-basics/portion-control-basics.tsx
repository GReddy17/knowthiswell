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
  title: "Portion Control Basics",
  category: "health-body-basics",
  order: 36,
  subtopic: "nutrition-and-healthy-habits-basics",
  tags: ["portion control", "portion size", "serving size", "nutrition basics", "MyPlate"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A 'serving size' on a label and a real-world 'portion' are two different things — the label figure is a fixed reference unit, while a portion is whatever amount actually ends up on your plate.",
  summary: "Portion control distinguishes between a labeled serving size (a fixed reference amount set for label comparability) and the actual portion eaten, which can differ substantially — USDA's MyPlate model offers a simple visual method for balancing portions across food groups without requiring exact measurement.",
  sources: [
    { label: "USDA — MyPlate: What Is MyPlate?", url: "https://www.myplate.gov/eat-healthy/what-is-myplate" },
    { label: "FDA — Serving Size on the New Nutrition Facts Label", url: "https://www.fda.gov/food/nutrition-facts-label/serving-size-new-nutrition-facts-label" },
    { label: "NIH — Portion Distortion", url: "https://www.nhlbi.nih.gov/health/educational/wecan/eat-right/portion-distortion.htm" },
  ],
  seeAlso: [
    "health-body-basics/how-to-read-a-nutrition-label",
    "health-body-basics/understanding-food-groups-and-dietary-variety",
    "health-body-basics/understanding-a-balanced-plate-macronutrients-overview",
  ],
  glossary: [
    {"term":"Serving size","definition":"A standardized reference amount of food set for nutrition-label purposes, used for comparing products — not a recommendation for how much to eat."},
    {"term":"Portion","definition":"The actual amount of food a person chooses to eat at one time, which can be larger, smaller, or equal to a labeled serving size."},
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
      <strong>This entry explains general nutrition literacy — it is not personalized dietary advice.</strong> Individual portion needs vary; consult a doctor or registered dietitian for a specific eating plan.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A labeled 'serving size' is a fixed reference amount set for comparing products on nutrition labels — it is not a recommendation for how much a person should eat.",
      "A 'portion' is the amount actually eaten, which research (including NIH's own Portion Distortion materials) shows has grown noticeably larger than labeled serving sizes for many common foods over recent decades.",
      "USDA's MyPlate offers a simple visual method — dividing a plate into food-group sections — for balancing portions without needing to weigh or measure anything.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/health-body-basics/portion-control-basics">serving size</TermLink> printed on a nutrition label is a fixed, standardized amount used so labels can be compared fairly between products — it isn&apos;t telling you how much to eat. A <TermLink href="/health-body-basics/portion-control-basics">portion</TermLink> is whatever amount actually ends up on your plate, which can be more, less, or the same as the labeled serving.</div>}
      detailed={<div className="prose-p">The FDA sets serving sizes based on Reference Amounts Customarily Consumed (RACC) — data on what people typically eat in one sitting for a given food category — specifically so that similar products can be compared on a like-for-like basis, not as dietary guidance. Separately, NIH&apos;s Portion Distortion research has documented how the real-world portions Americans eat for many common foods (bagels, sodas, burgers) have grown substantially larger than they were decades earlier, often without people perceiving the change — a gradual shift researchers call &quot;portion creep.&quot; Because portion size and calorie/nutrient intake scale together, unnoticed portion creep is one of the more subtle contributors to overall intake, alongside food choice itself.</div>}
      />
      <FootnoteAside>NIH&apos;s Portion Distortion materials note some restaurant and packaged portions have grown to two, three, or more times their size from several decades ago — a bagel that was once roughly 3 inches across, for instance, is commonly closer to 6 inches today, per NIH&apos;s illustrative comparison.</FootnoteAside>

      <p>
      Because the labeled serving size and the real portion eaten are two different numbers, reading a label accurately means checking both — the nutrient content shown, and how many labeled servings your actual portion represents.
      </p>

      <QuickCheck
      question="A bag of chips lists 'Serving size: 15 chips, Servings per container: 3' and 150 calories per serving. If someone eats the whole bag, how many calories have they eaten?"
      options={[
      { text: "150 calories, since that's what the label states", correct: false, explanation: "150 calories is per serving, and the label states there are 3 servings in the container — eating the whole bag means eating 3 servings, not 1." },
      { text: "450 calories — because eating the entire bag means eating all 3 labeled servings, at 150 calories each", correct: true, explanation: "Correct. 3 servings x 150 calories = 450 calories. This is exactly the kind of gap between serving size and actual portion eaten that portion-control literacy addresses." },
      { text: "It can't be determined from the label", correct: false, explanation: "The label gives everything needed: servings per container and calories per serving, multiplied together for the whole-bag total." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Serving size vs. portion eaten (baseline case)</h3>
      <div className="prose-p">
      A cereal&apos;s labeled serving size is 3/4 cup (about 30g). Someone pours what feels like a normal bowl and it turns out to be 1.5 cups when measured — exactly double the labeled serving. Every nutrient and calorie figure on the label needs doubling to reflect what was actually eaten.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The MyPlate visual method instead of measuring (edge case / variation)</h3>
      <div className="prose-p">
      Rather than weighing food, USDA&apos;s MyPlate model suggests visually filling half a plate with fruits and vegetables, a quarter with grains, and a quarter with protein foods, alongside a side of dairy. This sidesteps precise measurement entirely by using plate proportions as the portioning method — a genuinely different approach from reading labeled serving sizes, useful for meals that don&apos;t come with a label at all, like a home-cooked dinner or a restaurant plate.
      </div>

      <QuickCheck
      question="Does the MyPlate method require weighing or measuring food precisely?"
      options={[
      { text: "Yes, MyPlate requires a kitchen scale to follow correctly", correct: false, explanation: "MyPlate is explicitly a visual, proportion-based method — USDA designed it so no scale or measuring cup is required." },
      { text: "No — MyPlate uses plate proportions (roughly half fruits/vegetables, a quarter grains, a quarter protein, plus dairy) as a visual guide, without requiring precise measurement", correct: true, explanation: "Correct. This is exactly why MyPlate works for unlabeled meals like home cooking or restaurant food, where a labeled serving size isn't available at all." },
      { text: "No, but it only works for packaged foods with a printed serving size", correct: false, explanation: "MyPlate works especially well for unlabeled food, since it doesn't depend on a printed serving size — it's a plate-composition method, independent of labeling." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Portion creep at a restaurant (real-world / applied case)</h3>
      <div className="prose-p">
      NIH&apos;s Portion Distortion comparisons note that a fast-food cheeseburger and a soft drink have, in documented cases, grown by roughly 2 to 3 times their size from several decades ago to today, alongside proportional calorie increases. A person ordering &quot;a burger and a soda&quot; today, without realizing the reference size itself has shifted, may be eating a meaningfully larger portion than the same order decades ago — illustrating why portion awareness matters even without changing what&apos;s ordered.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="USDA MyPlate: portioning by plate proportion"
      type="detail"
      svgSrc="/diagrams/health-body-basics-portion-control-basics-myplate-proportions.svg"
      altText="A circular plate divided into four sections: a larger section for vegetables, a slightly smaller section for fruits, together making up half the plate, and two remaining quarter sections for grains and protein foods, with a small circle beside the plate representing a dairy serving, matching USDA's MyPlate model."
      />
      <p>
      The proportions, not exact weights, are the entire method — the same plate-division approach scales naturally to a small or large plate, which is part of why it&apos;s designed as a mental model rather than a measuring exercise.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a labeled serving size is the recommended amount to eat.", fix: "Remember a serving size is a fixed reference unit for label comparison, not a recommendation — check servings-per-container against what's actually eaten." },
      { mistake: "Not accounting for portion creep at restaurants or with packaged snacks.", fix: "Recognize that many common portions have grown larger than decades-old reference sizes, per NIH's Portion Distortion research." },
      { mistake: "Believing portion control requires weighing and measuring every meal.", fix: "Use a visual method like USDA's MyPlate proportions for unlabeled meals — precision measurement is one option, not the only one." },
      ]}
      />
      <MisconceptionCallout
      myth="If a food is 'healthy,' portion size doesn't matter."
      reality={<p>Portion size affects total calorie and nutrient intake regardless of how a food is otherwise categorized — a larger portion of any food, including a nutrient-dense one, still delivers proportionally more calories and nutrients. USDA&apos;s MyPlate guidance addresses both food choice and portion balance together, not food choice alone.</p>}
      />

      <QuickCheck
      question="If a food is generally considered nutritious, does that mean portion size stops mattering for it?"
      options={[
      { text: "Yes — nutritious foods can be eaten in any amount without portion size being a factor", correct: false, explanation: "Portion size affects total calorie and nutrient intake for any food, nutritious or not — a larger portion still delivers proportionally more of everything in it." },
      { text: "No — portion size affects total intake for any food regardless of how nutritious it's considered, which is why USDA's MyPlate addresses both food choice and portion balance together", correct: true, explanation: "Correct. Nutrient density and portion size are separate considerations that both matter for overall intake." },
      { text: "No, but only because most nutritious foods have no calories at all", correct: false, explanation: "Nutritious foods still contain calories — the point isn't that they're calorie-free, but that portion size scales total intake for any food." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check 'servings per container' on a label, not just calories per serving, before estimating a whole-package total.",
      "Try USDA's MyPlate plate-proportion method for unlabeled meals like home cooking or restaurant food.",
      "Be aware that many common restaurant and packaged portions have grown larger than older reference sizes.",
      "For personalized portion guidance tied to specific health goals, consult a doctor or registered dietitian.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a serving size and a portion?", answer: "A serving size is a fixed, standardized reference amount printed on labels for comparison purposes; a portion is the actual amount a person eats, which can differ from the labeled serving size." },
      { question: "Is a nutrition label's serving size a recommended amount to eat?", answer: "No — it's a reference unit for label comparability set by the FDA, not a dietary recommendation." },
      { question: "What is 'portion distortion'?", answer: "A term used by NIH to describe how real-world portions of many common foods have grown substantially larger than older reference sizes over recent decades." },
      { question: "How does USDA's MyPlate help with portion control?", answer: "It offers a visual plate-proportion method — roughly half fruits/vegetables, a quarter grains, a quarter protein, plus dairy — without requiring exact measurement." },
      { question: "Does eating a nutritious food in a large portion still add up in calories?", answer: "Yes — portion size scales total calorie and nutrient intake for any food, regardless of how nutritious it's considered." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
