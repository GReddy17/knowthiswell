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
  title: "Fractions Explained",
  category: "math-numbers",
  order: 6,
  subtopic: "number-basics",
  tags: ["fractions", "numerator", "denominator"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A fraction is a division that hasn't been carried out yet — the top number split by the bottom number, expressed as parts of a whole.",
  summary: "A fraction represents a part of a whole, written as a numerator (the part) over a denominator (the total number of equal parts the whole is divided into).",
  sources: [
    { label: "Britannica — Fraction (mathematics)", url: "https://www.britannica.com/science/fraction-mathematics" },
    { label: "Khan Academy — Fractions", url: "https://www.khanacademy.org/math/arithmetic-home/arith-review-fractions" },
  ],
  seeAlso: [
    "math-numbers/decimals-explained",
    "math-numbers/percentages-explained",
    "math-numbers/lcm-and-hcf-gcd",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Numerator", definition: "The top number of a fraction — how many parts you have." },
    { term: "Denominator", definition: "The bottom number of a fraction — how many equal parts the whole is divided into." },
    { term: "Equivalent fractions", definition: "Different fractions that represent the same value, like 1/2 and 2/4." },
    { term: "Simplify (reduce)", definition: "Rewriting a fraction with the smallest possible numerator and denominator by dividing both by their HCF." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "scheduled",
  youtubeUrl: "https://www.youtube.com/watch?v=Nh7ua2Pjdiw",
  youtubeScheduledAt: "2026-09-21T16:00:00Z",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A fraction is a numerator (part) over a denominator (whole), and it's literally a division that just hasn't been carried out numerically yet.",
      "Two fractions can look completely different and still be equal — 2/4, 3/6, and 50/100 are all exactly 1/2.",
      "To add or subtract fractions they need a common denominator; to multiply or divide them, they don't.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/fractions-explained">fraction</TermLink> like 3/4 means &quot;3 parts out of 4 equal parts.&quot; The top number (<TermLink href="/math-numbers/fractions-explained">numerator</TermLink>) counts how many parts you have; the bottom number (<TermLink href="/math-numbers/fractions-explained">denominator</TermLink>) says how many equal parts make up the whole.</div>}
      detailed={<div className="prose-p">A fraction a/b is literally the division a÷b written in a paused, unevaluated form — 3/4 and 3÷4 are the same value (0.75), just written differently. This is why fractions and decimals aren&apos;t separate number types, just different notations for the same rational number. Multiplying or dividing both numerator and denominator by the same non-zero number never changes the fraction&apos;s value, since you&apos;re really just multiplying by a disguised form of 1 (like 2/2 or 5/5) — this is the entire basis for simplifying and for finding a common denominator, both of which are the same operation (scaling numerator and denominator together) run in opposite directions.</div>}
      />
      <FootnoteAside>Fractions with a numerator smaller than the denominator (like 3/4) are called proper fractions; ones where the numerator is larger (like 7/4) are improper fractions, equal to a whole number plus a proper fraction — 7/4 = 1¾.</FootnoteAside>

      <div className="prose-p">
      Most fraction mistakes come from applying whole-number instincts (like &quot;just add the tops and bottoms&quot;) to an operation where that instinct is wrong.
      </div>

      <QuickCheck
      question="What is 1/2 + 1/3?"
      options={[
      { text: "2/5 — add the numerators and add the denominators", correct: false, explanation: "That instinct works for multiplying fractions, never for adding them. Adding requires a common denominator first." },
      { text: "5/6 — convert both to sixths first, then add the numerators", correct: true, explanation: "Correct. 1/2 = 3/6 and 1/3 = 2/6; once they share a denominator, add the numerators: 3/6 + 2/6 = 5/6." },
      { text: "1/5 — multiply the numerators together and the denominators together", correct: false, explanation: "That gives 1×1 / 2×3 = 1/6, which is actually the correct process for multiplying (not adding) 1/2 and 1/3 — but the question asked for addition, and 1/5 isn't even that." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Simplifying a fraction (baseline case)</h3>
      <div className="prose-p">
      Simplify 12/18. Find the HCF of 12 and 18, which is 6. Divide both numerator and denominator by 6: 12÷6=2, 18÷6=3. So 12/18 simplifies to 2/3 — the same value, smallest possible whole-number form.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Multiplying and dividing fractions (edge/variation case)</h3>
      <div className="prose-p">
      Multiplying is the one operation that doesn&apos;t need a common denominator: 2/3 × 3/5 = (2×3)/(3×5) = 6/15, which simplifies to 2/5. Dividing fractions flips the second fraction and multiplies instead: 2/3 ÷ 3/5 = 2/3 × 5/3 = 10/9. This &quot;flip and multiply&quot; rule works because dividing by a fraction is the same as multiplying by its reciprocal.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Splitting a recipe (applied case)</h3>
      <div className="prose-p">
      A recipe calls for 3/4 cup of flour, and you want to make half the recipe. That&apos;s 3/4 × 1/2 = 3/8 cup. Recognizing this as fraction multiplication — not addition — is exactly the everyday skill that fraction fluency is actually for.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="3/4 shown as a bar model and a pie model"
      type="comparison"
      svgSrc="/diagrams/math-numbers-fractions-explained-bar-and-pie-model.svg"
      altText="A rectangle divided into 4 equal parts with 3 shaded, and a circle divided into 4 equal slices with 3 shaded, both representing the fraction three fourths"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Adding or subtracting fractions without finding a common denominator first.", fix: "Always convert both fractions to the same denominator (their LCM works best) before adding or subtracting the numerators." },
      { mistake: "Forgetting to simplify a final answer.", fix: "Divide numerator and denominator by their HCF at the end — 4/8 and 1/2 are equal, but 1/2 is the expected simplified form." },
      { mistake: "Applying \"add tops and bottoms\" to addition instead of the operations it actually applies to.", fix: "That shortcut never applies to addition or subtraction. Multiplication is (num×num)/(denom×denom); division flips the second fraction first." },
      ]}
      />
      <MisconceptionCallout
      myth="A bigger denominator always means a bigger fraction."
      reality={<p>The opposite is often true when the numerator is fixed — 1/8 is smaller than 1/4, because the whole is being split into more, smaller pieces. Denominator size alone tells you nothing about the fraction&apos;s value without also knowing the numerator.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Simplify a fraction to lowest terms"
      fields={[
      { key: "num", label: "Numerator", defaultValue: 12 },
      { key: "denom", label: "Denominator", defaultValue: 18 },
      ]}
      resultLabel="Simplified numerator (divide result and original denominator by their HCF)"
      formula="simplifyFractionNumerator"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice simplifying five random fractions by finding the HCF of numerator and denominator first.",
      "Next time you add fractions, write out the common-denominator conversion step explicitly rather than skipping to the answer.",
      "Try converting a handful of everyday fractions (like a recipe measurement) into decimals to build the fraction-decimal connection.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a numerator and a denominator?", answer: "The numerator is the top number of a fraction, showing how many parts you have. The denominator is the bottom number, showing how many equal parts make up the whole." },
      { question: "How do you add fractions with different denominators?", answer: "Convert both fractions to a common denominator (their LCM is the most efficient choice), then add the numerators while keeping the denominator the same." },
      { question: "Is a fraction the same as a decimal?", answer: "Yes — every fraction can be written as a decimal by dividing the numerator by the denominator, and every terminating or repeating decimal can be written back as a fraction. They're two notations for the same rational number." },
      { question: "How do you simplify a fraction?", answer: "Divide both the numerator and denominator by their highest common factor (HCF). The result is the same value in its smallest whole-number form." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
