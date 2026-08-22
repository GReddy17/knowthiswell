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
  title: "Understanding Food Groups & Dietary Variety",
  category: "health-body-basics",
  order: 37,
  subtopic: "nutrition-and-healthy-habits-basics",
  tags: ["food groups", "dietary variety", "MyPlate", "nutrition basics", "micronutrients"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "No single food group supplies every nutrient the body needs — dietary variety exists because different food groups specialize in different nutrients that don't fully overlap.",
  summary: "USDA's MyPlate organizes food into five groups — fruits, vegetables, grains, protein foods, and dairy — because each group tends to supply a different, only partially overlapping profile of nutrients, which is the structural reason dietary variety across groups (not just within one group) is emphasized in dietary guidance.",
  sources: [
    { label: "USDA — MyPlate: What Is MyPlate?", url: "https://www.myplate.gov/eat-healthy/what-is-myplate" },
    { label: "USDA — Dietary Guidelines for Americans", url: "https://www.dietaryguidelines.gov/" },
    { label: "NIH — Dietary Reference Intakes for vitamins and minerals", url: "https://www.ncbi.nlm.nih.gov/books/NBK56068/" },
  ],
  seeAlso: [
    "health-body-basics/understanding-a-balanced-plate-macronutrients-overview",
    "health-body-basics/portion-control-basics",
  ],
  glossary: [
    {"term":"Food group","definition":"A category of foods (such as fruits, vegetables, grains, protein foods, or dairy) grouped together because they tend to share a similar nutrient profile."},
    {"term":"Micronutrient","definition":"A vitamin or mineral the body needs in smaller amounts than macronutrients, but that is still essential for specific bodily functions."},
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
      <strong>This entry explains general nutrition literacy — it is not personalized dietary advice.</strong> Individual dietary needs vary, including for those with allergies or medical restrictions; consult a doctor or registered dietitian for a specific plan.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "USDA's MyPlate organizes food into five groups — fruits, vegetables, grains, protein foods, and dairy — because each group tends to supply a different, only partially overlapping nutrient profile.",
      "No single food group is nutritionally complete on its own; dietary variety across groups exists specifically to cover nutrient gaps that any one group leaves.",
      "Variety also matters within a group — different vegetables, for instance, supply different specific micronutrients, so eating the same one repeatedly still leaves gaps a different choice would fill.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">USDA&apos;s MyPlate divides food into five <TermLink href="/health-body-basics/understanding-food-groups-and-dietary-variety">food groups</TermLink>: fruits, vegetables, grains, protein foods, and dairy. Each group tends to be a strong source of certain nutrients and a weaker source of others — grains are a strong source of carbohydrate and some fiber, protein foods for protein and iron, dairy for calcium, and fruits and vegetables for a wide range of vitamins, minerals, and fiber depending on the specific item.</div>}
      detailed={<div className="prose-p">The reason food-group variety is emphasized rather than &quot;eat enough calories from any source&quot; is that <TermLink href="/health-body-basics/understanding-food-groups-and-dietary-variety">micronutrients</TermLink> — vitamins and minerals the body needs in smaller amounts — are distributed unevenly across food groups and even across specific foods within a group. Vitamin C, for instance, is concentrated in certain fruits and vegetables and largely absent from grains and most protein foods; vitamin B12 is found reliably in animal-based protein and dairy sources but not in plant foods (a genuinely important consideration for anyone following a plant-based diet, per NIH&apos;s Dietary Reference Intakes). No single food group&apos;s nutrient profile substitutes for another&apos;s, which is the structural, evidence-based reason USDA&apos;s Dietary Guidelines frame variety across groups — not just adequate calories — as core dietary guidance.</div>}
      />
      <FootnoteAside>NIH&apos;s Dietary Reference Intakes specifically flag vitamin B12 as a nutrient of concern for those following exclusively plant-based diets, since reliable food sources are concentrated in animal products — one of the clearer, most cited examples of a nutrient gap that crosses food-group lines.</FootnoteAside>

      <p>
      Because different food groups specialize in different nutrients, thinking of a day&apos;s meals in terms of &quot;which groups did I include&quot; is a more direct check on nutritional coverage than thinking only in terms of total calories.
      </p>

      <QuickCheck
      question="If someone eats enough total calories every day, but almost exclusively from grains, are they likely getting complete nutrition?"
      options={[
      { text: "Yes, since total calories are the only thing that matters nutritionally", correct: false, explanation: "Calorie sufficiency alone doesn't guarantee micronutrient adequacy — different food groups supply different, only partially overlapping nutrient profiles that calories alone don't capture." },
      { text: "No — grains alone don't supply the full range of nutrients found across other food groups, such as certain vitamins concentrated in fruits/vegetables or specific nutrients found mainly in protein foods and dairy", correct: true, explanation: "Correct. This is exactly why USDA's guidance emphasizes variety across food groups, not just adequate total calories from any single source." },
      { text: "Yes, because grains contain every vitamin and mineral the body needs", correct: false, explanation: "Grains are a strong source of certain nutrients (like carbohydrate and some fiber) but are not a complete nutrient source on their own — several vitamins and minerals are concentrated elsewhere." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: What each food group tends to specialize in (baseline case)</h3>
      <div className="prose-p">
      Grains: carbohydrate and some fiber (more in whole grains). Protein foods: protein and iron. Dairy: calcium and often vitamin D (when fortified). Fruits and vegetables: a wide, item-specific range of vitamins, minerals, and fiber. Recognizing these five general specializations is the starting mental model for checking whether a day&apos;s meals cover the bases.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Variety within a group, not just across groups (edge case / variation)</h3>
      <div className="prose-p">
      Within the vegetable group alone, carrots are a strong source of vitamin A (as beta-carotene), while bell peppers are a strong source of vitamin C, and leafy greens like spinach are a strong source of vitamin K and folate — three different vegetables covering three largely different micronutrients. Eating &quot;vegetables&quot; every day but always the same one vegetable still leaves gaps that a different vegetable would fill — variety matters within a food group, not just between the five groups.
      </div>

      <QuickCheck
      question="Does eating vegetables every day guarantee good micronutrient coverage, regardless of which specific vegetables are chosen?"
      options={[
      { text: "Yes, all vegetables provide essentially the same nutrients", correct: false, explanation: "Different vegetables concentrate different micronutrients — carrots, bell peppers, and leafy greens each specialize in different vitamins, so the specific choice matters, not just the food-group category." },
      { text: "No — different vegetables concentrate different specific micronutrients, so variety within the vegetable group, not just eating 'a vegetable,' affects overall nutrient coverage", correct: true, explanation: "Correct. This is why dietary guidance encourages variety both across the five food groups and within each group." },
      { text: "No, because vegetables provide negligible nutrition compared to other food groups", correct: false, explanation: "Vegetables are a significant source of a wide range of vitamins, minerals, and fiber — the point isn't that they're low-value, but that different vegetables specialize differently." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A specific documented cross-group nutrient gap (real-world / applied case)</h3>
      <div className="prose-p">
      Vitamin B12, essential for nerve function and red blood cell formation, is reliably found in animal-based protein foods and dairy but is largely absent from plant foods, per NIH&apos;s Dietary Reference Intakes. Someone following an exclusively plant-based diet needs a specific plan — fortified foods or a supplement, guided by a doctor or dietitian — to cover this particular gap, since no combination of grains, fruits, and vegetables reliably substitutes for it. This is a concrete, well-documented case of why food-group awareness has real practical stakes, not just theoretical ones.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Five food groups, five different nutrient specializations"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-understanding-food-groups-and-dietary-variety-five-groups.svg"
      altText="Five labeled boxes arranged side by side, one for each USDA MyPlate food group — fruits, vegetables, grains, protein foods, and dairy — each box listing its typical nutrient specialization, illustrating that the five groups' nutrient contributions only partially overlap."
      />
      <p>
      The five boxes are deliberately non-identical — the whole point of the diagram is that no single box&apos;s list of nutrients duplicates another&apos;s, which is the structural reason variety across all five groups is the guidance, not just adequate intake from a preferred one or two.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming any food group can nutritionally substitute for another as long as calories match.", fix: "Recognize each group specializes in a different, only partially overlapping set of nutrients — calorie matching doesn't guarantee micronutrient matching." },
      { mistake: "Treating 'eating vegetables' as a single checkbox rather than varying which vegetables are chosen.", fix: "Rotate choices within a food group, since different specific foods concentrate different micronutrients even within the same group." },
      { mistake: "Not planning around known cross-group nutrient gaps, such as vitamin B12 on an exclusively plant-based diet.", fix: "Identify documented gaps for your specific eating pattern and address them with fortified foods, supplements, or professional guidance as appropriate." },
      ]}
      />
      <MisconceptionCallout
      myth="A 'superfood' from one food group can cover for skipping other food groups entirely."
      reality={<p>No single food, however nutrient-dense, supplies the full range of nutrients spread across all five USDA food groups — an item praised as a &quot;superfood&quot; is still concentrated in the nutrient profile of its own food group and doesn&apos;t substitute for the others. USDA&apos;s Dietary Guidelines frame nutritional adequacy around variety across groups, not around finding one uniquely complete food.</p>}
      />

      <QuickCheck
      question="Can a single 'superfood' realistically replace the need for dietary variety across all five food groups?"
      options={[
      { text: "Yes, certain foods are nutritionally complete substitutes for all five food groups", correct: false, explanation: "No single food supplies the full, combined nutrient range spread across fruits, vegetables, grains, protein foods, and dairy — even nutrient-dense foods are concentrated within their own group's typical profile." },
      { text: "No — even a nutrient-dense food remains concentrated in its own food group's typical nutrient profile and doesn't cover the specializations of the other groups", correct: true, explanation: "Correct. This is why USDA's Dietary Guidelines emphasize variety across groups rather than identifying one food as sufficient on its own." },
      { text: "No, because 'superfood' foods contain no measurable nutrients at all", correct: false, explanation: "Foods marketed as 'superfoods' typically are nutrient-dense within their category — the issue isn't that they lack nutrients, but that they can't cover every other food group's specialization." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check which of the five MyPlate food groups (fruits, vegetables, grains, protein foods, dairy) show up across a typical day, not just total calories.",
      "Rotate specific food choices within each group rather than repeating the same item, since different foods within a group specialize differently.",
      "If following a restricted diet (such as exclusively plant-based), identify documented nutrient gaps like vitamin B12 and address them with a doctor or dietitian's guidance.",
      "Treat any single food marketed as nutritionally complete with skepticism — no one food replaces variety across all five groups.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What are the five USDA MyPlate food groups?", answer: "Fruits, vegetables, grains, protein foods, and dairy — each tends to supply a different, only partially overlapping profile of nutrients." },
      { question: "Why is dietary variety important?", answer: "Because different food groups, and different foods within a group, specialize in different nutrients — no single group or food covers every nutrient the body needs." },
      { question: "Can one 'superfood' provide complete nutrition on its own?", answer: "No — even nutrient-dense foods remain concentrated within their own food group's typical profile and don't substitute for the specializations of the other groups." },
      { question: "What nutrient is a common gap on a plant-based diet?", answer: "Vitamin B12 is reliably found mainly in animal-based protein and dairy sources, per NIH's Dietary Reference Intakes — those on an exclusively plant-based diet often need fortified foods or a supplement, guided by a doctor or dietitian." },
      { question: "Does eating vegetables every day guarantee good nutrition?", answer: "Not entirely on its own — different vegetables concentrate different micronutrients, so varying which vegetables are chosen matters, in addition to eating vegetables generally." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
