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
  title: "Math in Cooking (measurement conversions, scaling recipes)",
  category: "math-numbers",
  order: 34,
  subtopic: "applied-and-everyday-math",
  tags: [
    "recipe scaling",
    "measurement conversion",
    "ratios",
    "cooking math",
    "baking",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why scaling a recipe is a ratio problem, why cups don't convert cleanly to grams across ingredients, and why doubling batter doesn't mean doubling bake time.",
  summary: "Scaling a recipe multiplies every ingredient by the same ratio of desired-to-original servings, but volume-to-weight conversions and cooking time depend on ingredient density and heat transfer, not on that same ratio.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory: Weights and Measures", url: "https://www.nist.gov/pml" },
    { label: "USDA — FoodData Central", url: "https://fdc.nal.usda.gov/" },
    { label: "Encyclopaedia Britannica — Weights and Measures", url: "https://www.britannica.com/topic/weights-and-measures" },
  ],
  seeAlso: [
    "math-numbers/unit-conversions-length-weight-volume",
    "math-numbers/ratios-and-proportions",
    "math-numbers/percentages-explained",
  ],
  glossary: [
    { term: "Scale factor", definition: "The ratio of a new quantity to an original quantity — desired servings divided by original servings — used to resize every ingredient in a recipe consistently." },
    { term: "Density", definition: "Mass per unit of volume; the reason a cup of flour and a cup of sugar don't weigh the same amount even though they fill the same-sized cup." },
    { term: "US customary cup", definition: "A volume unit equal to 236.588 milliliters, standard in U.S. recipes — distinct from the 250 mL 'metric cup' used in Australia, the UK, and elsewhere." },
    { term: "Thermal diffusion", definition: "The process by which heat spreads through a material over time; it's the reason thicker or larger portions of food take disproportionately longer to cook through, not just proportionally longer." },
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
      "Scaling a recipe means multiplying every ingredient by the same scale factor (desired servings ÷ original servings) — but not everything in a recipe scales at that same rate.",
      "A volume measurement like 'one cup' converts to a different weight for every ingredient, because different ingredients pack at different densities — a cup of flour and a cup of sugar are not the same number of grams.",
      "Cooking and baking time do not scale linearly with quantity, because heat has to physically penetrate the food, and that process slows disproportionately as thickness or volume increases.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Scaling a recipe up or down is a ratio problem: if a recipe serves 4 and you want to serve 10, multiply every ingredient by 10 ÷ 4 = 2.5. A cup of flour becomes 2.5 cups; a teaspoon of salt becomes 2.5 teaspoons. Measurement conversions are separate but related — recipes mix volume units (teaspoons, tablespoons, cups) and sometimes weight units (grams, ounces), and converting between them cleanly requires knowing an ingredient&apos;s <TermLink href="/math-numbers/math-in-cooking-measurement-conversions-scaling-recipes">density</TermLink>, since a cup of a light, airy ingredient weighs far less than a cup of a dense one.</div>}
      detailed={<div className="prose-p">The <TermLink href="/math-numbers/math-in-cooking-measurement-conversions-scaling-recipes">scale factor</TermLink> — desired servings ÷ original servings — applies cleanly to anything measured by mass or volume: flour, sugar, liquid, butter. It does not apply cleanly to a few categories: strong spices, salt, and leavening agents (baking soda, baking powder, yeast) are often scaled by less than the full factor, since their effect isn&apos;t perfectly linear with quantity relative to taste or chemical reaction; and cooking or baking time scales even less predictably, because it&apos;s governed by <TermLink href="/math-numbers/math-in-cooking-measurement-conversions-scaling-recipes">thermal diffusion</TermLink> — heat moving inward through the food — which depends roughly on the square of the material&apos;s thickness, not on its total volume or mass. Doubling a cake&apos;s batter in the same-shaped pan (making it twice as tall) can require noticeably more than double the extra baking time, because the center has to wait for heat to conduct through twice the depth of batter. Volume-to-weight conversion has the same rigor problem: 1 US cup is a fixed volume (236.588 mL by definition), but its weight in grams depends entirely on the ingredient&apos;s density — commonly cited baking references put a cup of all-purpose flour at roughly 120–125 grams and a cup of granulated sugar at roughly 200 grams, despite both filling an identical cup.</div>}
      />
      <FootnoteAside>Not all &quot;cups&quot; are the same size. The U.S. customary cup used in American recipes is 236.588 milliliters, but Australia, New Zealand, and several other countries use a &quot;metric cup&quot; of exactly 250 milliliters — a difference of about 5.7%, small enough to go unnoticed in a single ingredient but large enough to throw off a recipe converted carelessly between the two.</FootnoteAside>

      <p>
      The scale-factor math is the easy part. The harder, more interesting part is knowing exactly which pieces of a recipe genuinely follow that ratio and which ones don&apos;t — and that split is where most scaling mistakes happen.
      </p>

      <QuickCheck
      question="A recipe uses 3 teaspoons of an ingredient. How many tablespoons is that, given that 1 tablespoon equals exactly 3 teaspoons?"
      options={[
      { text: "1 tablespoon", correct: true, explanation: "Correct. 3 teaspoons ÷ 3 teaspoons per tablespoon = 1 tablespoon exactly — this fixed 3:1 ratio is why '3 tsp = 1 tbsp' is one of the most useful memorized conversions in cooking." },
      { text: "3 tablespoons", correct: false, explanation: "This treats teaspoons and tablespoons as the same size unit — they aren't. A tablespoon is a larger unit equal to 3 teaspoons, so the teaspoon count has to be divided by 3, not read directly as tablespoons." },
      { text: "9 tablespoons", correct: false, explanation: "This multiplies instead of divides. Converting from a smaller unit (teaspoon) to a larger unit (tablespoon) reduces the number, since fewer of the larger unit are needed to represent the same amount." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Scaling a recipe from 4 servings to 10 servings (baseline case)</h3>
      <div className="prose-p">
      A pancake recipe serving 4 calls for 2 cups of flour, 3 tablespoons of sugar, and 1.5 teaspoons of salt. Scale factor: 10 ÷ 4 = 2.5. Flour: 2 × 2.5 = 5 cups. Sugar: 3 × 2.5 = 7.5 tablespoons. Salt: 1.5 × 2.5 = 3.75 teaspoons. Every ingredient is multiplied by the identical 2.5 factor — this is the mechanical core of recipe scaling, and it&apos;s exactly right for flour, sugar, liquids, and most bulk ingredients.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting cup measurements to grams for two different ingredients (edge case / variation)</h3>
      <div className="prose-p">
      A recipe calls for 2 cups of flour and 1 cup of sugar, but a kitchen scale is more accurate than scooped cup measurements for baking. Using commonly cited baking-reference weights, 1 cup of all-purpose flour is roughly 120 grams, so 2 cups ≈ 240 grams. 1 cup of granulated sugar is roughly 200 grams, so 1 cup ≈ 200 grams. Both started as &quot;1 cup&quot; in the recipe&apos;s language, but flour and sugar don&apos;t weigh the same per cup because they pack to different densities — flour&apos;s fine, aerated particles trap more air per scoop than sugar&apos;s denser granules. This is exactly why professional and serious home bakers weigh ingredients in grams rather than scoop by volume: a &quot;cup&quot; of flour can vary by 10-15% in actual weight depending on how firmly it&apos;s packed into the cup, while a gram is a gram regardless of technique.
      </div>

      <QuickCheck
      question="A recipe calls for 1 cup of flour and 1 cup of sugar. Do these weigh the same amount in grams?"
      options={[
      { text: "Yes, since they're both measured as exactly 1 cup", correct: false, explanation: "Volume being equal doesn't make mass equal. Flour and sugar pack to different densities, so an identical 1-cup volume holds a different mass of each ingredient." },
      { text: "No — flour is roughly 120 grams per cup while sugar is roughly 200 grams per cup, because the two ingredients have different densities", correct: true, explanation: "Correct. A cup is a fixed volume, but weight depends on how densely an ingredient packs into that volume — flour's lighter, more aerated particles weigh less per cup than sugar's denser granules." },
      { text: "No, because a 'cup' of flour and a 'cup' of sugar are actually different-sized measuring cups", correct: false, explanation: "The measuring cup itself is the same fixed volume for any ingredient — the weight difference comes entirely from the ingredients' differing densities, not from using different-sized cups." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why doubling a cake recipe doesn&apos;t simply double the bake time (real-world / applied case)</h3>
      <div className="prose-p">
      A single-layer cake baked in a standard pan takes 30 minutes at 350°F. Doubling the batter and pouring it into a deeper pan of the same footprint roughly doubles the batter&apos;s depth. Heat has to conduct inward from the pan&apos;s edges and top surface to fully cook the center, and that heat-penetration process depends on the square of the thickness the heat has to travel through — not on total batter volume or mass. Practically, this means the doubled, deeper cake often needs considerably more than 60 minutes (commonly 75-90 minutes, adjusted by testing with a toothpick), and if it&apos;s pulled at a naively doubled &quot;60 minutes,&quot; the edges will be done while the center is still raw batter. The practical fix bakers use is either to keep the layer depth the same (splitting the doubled batter across two pans instead of one deeper pan) or to lower the oven temperature slightly and extend time substantially, testing doneness directly rather than trusting a doubled clock time.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Recipe scaling flowchart: what follows the scale factor and what doesn't"
      type="flow"
      svgSrc="/diagrams/math-numbers-math-in-cooking-measurement-conversions-scaling-recipes-flowchart.svg"
      altText="A flowchart starting from a box labeled Original recipe (servings, ingredients, time) branching into two paths: one path labeled Bulk ingredients (flour, sugar, liquid) leading to a box that says multiply directly by scale factor, and another path labeled Spices, salt, leavening, and cooking time leading to a box that says adjust by less than the scale factor and verify by taste or doneness test, with both paths converging into a final box labeled Scaled recipe."
      />
      <p>
      The left branch — bulk ingredients like flour, sugar, and liquid — follows the scale factor exactly, because their effect on the finished dish is roughly proportional to their quantity. The right branch — spices, salt, leavening agents, and time — doesn&apos;t follow the same straight-line rule, because taste intensity, chemical leavening reactions, and heat penetration all behave nonlinearly as quantity changes. Treating every ingredient on the diagram&apos;s left branch is safe; treating everything on the right branch the same way is where most scaling mistakes happen.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Scaling cooking or baking time by the same factor as the ingredients.", fix: "Test doneness directly (toothpick test, thermometer, visual cues) instead of trusting a linearly scaled clock time — heat penetration doesn't scale the way ingredient quantity does." },
      { mistake: "Treating a 'cup' measurement as interchangeable across different ingredients when converting to weight.", fix: "Look up (or weigh) each ingredient's specific density — a cup of flour, a cup of sugar, and a cup of butter are three different weights despite sharing the same volume." },
      { mistake: "Assuming spices, salt, and leavening agents (like baking soda) scale at the exact same rate as bulk ingredients.", fix: "Scale these more conservatively than the straight multiplication factor and adjust to taste or test — doubling salt or baking soda exactly can easily oversalt a dish or make it taste chemically bitter." },
      ]}
      />
      <MisconceptionCallout
      myth="Doubling a recipe means doubling every single ingredient, including cooking or baking time, in exact proportion."
      reality={<p>Bulk ingredients (flour, sugar, liquid) genuinely do scale by the same straight multiplication factor. But cooking and baking time depend on heat physically penetrating the food — a process governed by thickness, not total quantity — so doubling volume in a deeper container can require far more than double the time. Similarly, salt, spices, and leavening agents are frequently scaled down slightly from the full factor because their effect on taste or chemical reaction isn&apos;t strictly linear with quantity.</p>}
      />

      <QuickCheck
      question="You double a soup recipe, using twice the volume of every liquid and solid ingredient in a bigger pot. Should the simmering time on the stovetop also simply double?"
      options={[
      { text: "Yes, time always scales at exactly the same rate as quantity in cooking", correct: false, explanation: "This is the core misconception — time depends on heat penetration and physical dimensions (like liquid depth), not on total quantity scaled by the same factor as the ingredients." },
      { text: "Not necessarily — a soup simmering in a wider or deeper pot may need only a little more time, since heat moves through a thin liquid layer fairly efficiently, unlike a thick solid like cake batter", correct: true, explanation: "Correct. Liquids like soup circulate and transfer heat more efficiently than solid batters, so doubled soup often needs only modestly more time — but the safe approach is still to check doneness/temperature rather than assume a fixed doubled time." },
      { text: "No, doubling the ingredients means the simmering time should be cut in half", correct: false, explanation: "There's no mechanism that would make more liquid cook faster — if anything, more volume generally means as much or more time is needed to reach and hold a target temperature, not less." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Scale an ingredient quantity to a new number of servings"
      fields={[
      { key: "originalQuantity", label: "Original ingredient amount (e.g. cups)", defaultValue: 2, step: 0.25 },
      { key: "originalServings", label: "Original recipe servings", defaultValue: 4 },
      { key: "desiredServings", label: "Desired servings", defaultValue: 10 },
      ]}
      resultLabel="Scaled ingredient amount"
      formula="recipeScaledQuantity"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Try the calculator above with your own recipe's serving count and one ingredient amount to get its scaled equivalent instantly.",
      "Next time you bake, weigh flour and sugar on a kitchen scale instead of scooping by cup, and compare how much the gram totals differ from a generic cup-to-gram assumption.",
      "When you double a baked recipe, plan to test doneness directly (toothpick, thermometer) rather than trusting a simply-doubled clock time.",
      "Scale salt, spices, and leavening agents a little more conservatively than the full scale factor, and adjust to taste after cooking.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you scale a recipe up or down?", answer: "Divide the desired servings by the original servings to get a scale factor, then multiply every ingredient by that factor. A recipe serving 4, scaled to serve 10, uses a factor of 10 ÷ 4 = 2.5 applied to each ingredient." },
      { question: "How many teaspoons are in a tablespoon?", answer: "3 teaspoons equal 1 tablespoon exactly. This fixed ratio is one of the most commonly used conversions in cooking." },
      { question: "Does 1 cup of flour weigh the same as 1 cup of sugar?", answer: "No. A cup is a fixed volume, but weight depends on density — flour is commonly cited at roughly 120 grams per cup, while granulated sugar is commonly cited at roughly 200 grams per cup, despite both filling an identical cup." },
      { question: "If I double a recipe, do I need to double the baking time?", answer: "No, not automatically. Baking and cooking time depend on how quickly heat penetrates the food, which is governed by thickness rather than total quantity — a deeper or larger portion often needs proportionally more than double the time, and doneness should be tested directly." },
      { question: "Is a US cup the same as a metric cup?", answer: "No. A US customary cup is 236.588 milliliters, while the metric cup used in Australia, the UK, and several other countries is exactly 250 milliliters — about a 5.7% difference that matters more in precise baking than in casual cooking." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
