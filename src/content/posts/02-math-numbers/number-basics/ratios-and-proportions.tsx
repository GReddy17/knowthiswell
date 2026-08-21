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
  title: "Ratios & Proportions",
  category: "math-numbers",
  order: 9,
  subtopic: "number-basics",
  tags: ["ratios", "proportions", "scaling"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A ratio compares two quantities; a proportion says two ratios are equal — the tool behind scaling recipes, maps, and mixtures correctly.",
  summary: "A ratio compares two quantities (like 2:3). A proportion is a statement that two ratios are equal, which is what lets you scale a ratio up or down while keeping it exactly the same relationship.",
  sources: [
    { label: "Britannica — Ratio and proportion", url: "https://www.britannica.com/science/ratio-and-proportion" },
    { label: "Khan Academy — Ratios and proportions", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates" },
  ],
  seeAlso: [
    "math-numbers/fractions-explained",
    "math-numbers/percentages-explained",
    "math-numbers/math-in-cooking-measurement-conversions-scaling-recipes",
  ],
  glossary: [
    { term: "Ratio", definition: "A comparison of two quantities, written as a:b or a/b, showing their relative size." },
    { term: "Proportion", definition: "An equation stating that two ratios are equal, e.g. 2/3 = 4/6." },
    { term: "Cross-multiplication", definition: "A method for solving proportions by multiplying diagonally across an equals sign." },
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
      "A ratio compares two quantities directly, like 2:3 — for every 2 of one thing, there are 3 of the other.",
      "A proportion is just a statement that two ratios are equal, which is exactly what lets you scale a recipe, map, or mixture up or down.",
      "Cross-multiplication is the standard tool for solving an unknown value in a proportion — multiply diagonally, then divide.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/ratios-and-proportions">ratio</TermLink> like 2:3 compares two amounts directly — for every 2 units of one thing, there are 3 of another. A <TermLink href="/math-numbers/ratios-and-proportions">proportion</TermLink> says two ratios are equal, like 2:3 = 4:6, which is exactly what lets you scale the same relationship up or down to a different size.</div>}
      detailed={<div className="prose-p">A ratio a:b can always be rewritten as the fraction a/b, which is why ratio and fraction problems use identical arithmetic underneath. A proportion, a/b = c/d, can be solved for an unknown using cross-multiplication: a×d = b×c. This works because multiplying both sides of the equation a/b = c/d by bd clears both denominators simultaneously, leaving ad = bc — it&apos;s not a special trick, just standard equation-solving applied to a fraction equation.</div>}
      />
      <FootnoteAside>Ratios don&apos;t have to compare only two quantities — a ratio of 2:3:5 (three parts) works the same way, just with more terms to keep proportional when scaling.</FootnoteAside>

      <div className="prose-p">
      The one place ratios trip people up consistently is order — 2:3 and 3:2 describe genuinely different relationships, not the same one written backward by accident.
      </div>

      <QuickCheck
      question="A recipe uses flour and sugar in a ratio of 3:1. If you use 9 cups of flour, how much sugar do you need?"
      options={[
      { text: "3 cups", correct: true, explanation: "Correct. 9 cups of flour is 3 times the original 3 cups, so scale the sugar by the same factor: 1 × 3 = 3 cups, keeping the 3:1 ratio intact." },
      { text: "9 cups", correct: false, explanation: "That would make the ratio 9:9, or 1:1 — completely different from the required 3:1 ratio." },
      { text: "1 cup", correct: false, explanation: "That's the original sugar amount, but the flour amount tripled — the ratio only stays the same (proportional) if both quantities scale by the same factor." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Simplifying a ratio (baseline case)</h3>
      <div className="prose-p">
      Simplify the ratio 12:18. Just like a fraction, divide both terms by their HCF (6): 12÷6=2, 18÷6=3, giving 2:3. This is the smallest whole-number form of the same relationship.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Solving a proportion with cross-multiplication (edge/variation case)</h3>
      <div className="prose-p">
      Solve for x: 4/5 = x/20. Cross-multiply: 4 × 20 = 5 × x, giving 80 = 5x, so x = 16. Cross-multiplication turns any proportion into a simple one-step equation, regardless of which position the unknown sits in.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a map scale (applied case)</h3>
      <div className="prose-p">
      A map&apos;s legend shows a scale of 1:50,000 — every 1 unit on the map represents 50,000 of the same unit in reality. If two towns are 3 cm apart on the map, the real distance is 3 × 50,000 = 150,000 cm, or 1.5 km. This is a direct proportion: map distance : real distance stays constant at 1:50,000 everywhere on that map.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="12:18 shown as a 2:3 ratio bar"
      type="comparison"
      svgSrc="/diagrams/math-numbers-ratios-and-proportions-bar-model.svg"
      altText="A bar split into a 2 to 3 ratio, with 2 equal green segments on the left and 3 equal red segments on the right, showing the same relationship as 12 to 18"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reversing the order of a ratio and treating it as equivalent.", fix: "2:3 and 3:2 are different relationships. Keep the same order on both sides of a proportion — if flour comes first on one side, it must come first on the other." },
      { mistake: "Scaling only one quantity in a ratio and leaving the other unchanged.", fix: "Both quantities must scale by the same factor to preserve the ratio — find that factor first, then apply it to every term." },
      { mistake: "Setting up a proportion with mismatched units on each side.", fix: "Keep the same quantity type in the same position on both sides (e.g. flour/sugar = flour/sugar), never flour/sugar = sugar/flour." },
      ]}
      />
      <MisconceptionCallout
      myth="A ratio and a fraction are completely different mathematical objects."
      reality={<p>A ratio a:b and the fraction a/b carry the same information and follow the same simplification and scaling rules — the colon notation is really just a stylistic convention for comparing two (or more) quantities, not a fundamentally different kind of math.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice simplifying a handful of ratios by dividing both terms by their HCF, the same way you'd simplify a fraction.",
      "Next time you scale a recipe up or down, write it out as a formal proportion first to avoid scaling only one ingredient by accident.",
      "Try reading a real map's scale and calculating an actual distance using the proportion method.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a ratio and a proportion?", answer: "A ratio compares two quantities directly (2:3). A proportion is a statement that two ratios are equal (2:3 = 4:6) — a ratio is a comparison, a proportion is an equation." },
      { question: "How do you solve a proportion?", answer: "Cross-multiply: for a/b = c/d, multiply a×d and b×c, set them equal, then solve for whichever value is unknown." },
      { question: "Can a ratio have more than two numbers?", answer: "Yes — ratios can compare three or more quantities at once (like 2:3:5), and scaling works the same way: every term must be multiplied by the same factor." },
      { question: "Is a ratio the same as a fraction?", answer: "They carry the same mathematical information and follow the same rules for simplifying and scaling, though a ratio (a:b) compares two separate quantities while a fraction (a/b) more often represents a part of a single whole." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
