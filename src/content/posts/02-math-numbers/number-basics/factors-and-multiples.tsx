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
  title: "Factors & Multiples",
  category: "math-numbers",
  order: 4,
  subtopic: "number-basics",
  tags: ["factors", "multiples", "divisibility"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Factors divide into a number evenly; multiples are what you get by multiplying it — two mirror-image ideas that people mix up constantly.",
  summary: "A factor of a number divides into it with no remainder. A multiple of a number is what you get when you multiply it by a whole number. Every number is both a factor and a multiple of itself.",
  sources: [
    { label: "Britannica — Divisor (factor)", url: "https://www.britannica.com/science/divisor" },
    { label: "Khan Academy — Factors and multiples", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples" },
  ],
  seeAlso: [
    "math-numbers/prime-and-composite-numbers",
    "math-numbers/lcm-and-hcf-gcd",
    "math-numbers/fractions-explained",
  ],
  glossary: [
    { term: "Factor", definition: "A whole number that divides evenly into another number, with no remainder." },
    { term: "Multiple", definition: "The result of multiplying a number by a whole number (1, 2, 3...)." },
    { term: "Divisibility", definition: "Whether one number divides evenly into another with no remainder left over." },
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
      "A factor divides into a number with nothing left over; a multiple is what you get by multiplying a number up.",
      "Factors of a number are always finite and no larger than the number itself; multiples of a number go on forever.",
      "Every whole number is both a factor of itself and a multiple of itself — the two ideas meet at that one point.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/factors-and-multiples">factor</TermLink> of 12 is any number that divides into it evenly — 1, 2, 3, 4, 6, and 12. A <TermLink href="/math-numbers/factors-and-multiples">multiple</TermLink> of 12 is what you get by multiplying it: 12, 24, 36, 48, and so on, forever. Factors shrink inward toward 1; multiples grow outward without limit.</div>}
      detailed={<div className="prose-p">Formally, b is a factor (or divisor) of a if there exists an integer k such that a = b × k, with no remainder — equivalently, a mod b = 0. Multiples run the relationship the other direction: m is a multiple of n if m = n × k for some integer k. Because k can be any whole number starting at 1, every number has infinitely many multiples but only finitely many factors, bounded above by the number itself. This asymmetry — finite factors, infinite multiples — is exactly why &quot;greatest common factor&quot; is a meaningful, findable thing, while &quot;greatest common multiple&quot; isn&apos;t (there&apos;s no upper bound), and why the useful multiple-based quantity is instead the <em>least</em> common multiple.</div>}
      />
      <FootnoteAside>1 is a factor of every whole number, and every whole number is a multiple of 1 — it&apos;s the one number that sits at the intersection of every factor list and every multiple list simultaneously.</FootnoteAside>

      <div className="prose-p">
      The confusion between the two almost always comes from treating them as synonyms instead of opposite directions of the same relationship — a quick check settles it every time.
      </div>

      <QuickCheck
      question="Is 6 a factor of 24, a multiple of 24, or both?"
      options={[
      { text: "A multiple of 24", correct: false, explanation: "24 ÷ 6 = 4 exactly, which means 6 divides into 24, not the other way around — that makes 6 a factor of 24, not a multiple." },
      { text: "A factor of 24", correct: true, explanation: "Correct. 6 × 4 = 24, so 6 divides evenly into 24 with nothing left over — that's exactly what makes it a factor." },
      { text: "Neither — 6 and 24 aren't related", correct: false, explanation: "They are directly related: 24 is a multiple of 6 (6×4=24), and equivalently, 6 is a factor of 24." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Listing all factors of a number (baseline case)</h3>
      <div className="prose-p">
      Find every factor of 18 by testing each number from 1 up to 18: 1 (18÷1=18 ✓), 2 (18÷2=9 ✓), 3 (18÷3=6 ✓), then 4, 5 don&apos;t divide evenly, 6 does (already found as a pair with 3), and beyond 6 you&apos;re just re-finding factors you already have as pairs. The complete list: 1, 2, 3, 6, 9, 18.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Listing the first several multiples (edge/variation case)</h3>
      <div className="prose-p">
      The first five multiples of 7 are 7, 14, 21, 28, 35 — just 7×1, 7×2, 7×3, 7×4, 7×5. Unlike the factor list for 18, this list never ends; there&apos;s always a next multiple by adding 7 again. This is the key structural difference worth internalizing: factor lists terminate, multiple lists don&apos;t.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using factors to simplify a real problem (applied case)</h3>
      <div className="prose-p">
      A teacher has 24 students and wants to split them into equal groups with no one left over. The valid group sizes are exactly the factors of 24 — 1, 2, 3, 4, 6, 8, 12, or 24 students per group. Trying to split into groups of 5 or 7 would leave students without a group, since 5 and 7 aren&apos;t factors of 24.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The factor pairs of 18"
      type="detail"
      svgSrc="/diagrams/math-numbers-factors-and-multiples-factor-pairs-of-18.svg"
      altText="The number 18 with its factor pairs connected by arcs: 1 and 18, 2 and 9, 3 and 6, showing every factor comes paired with another factor"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Mixing up which number is the factor and which is the multiple in a sentence like \"4 is a ___ of 20.\"", fix: "Ask which direction the division works: does 4 divide evenly into 20? Yes (20÷4=5), so 4 is a factor of 20, and 20 is a multiple of 4." },
      { mistake: "Forgetting 1 and the number itself when listing factors.", fix: "Every number (except 0) has at least 1 and itself as factors — always include both at the start and end of your list." },
      { mistake: "Trying to list \"all the multiples\" of a number as if the list ends.", fix: "Multiple lists are infinite by definition — when a problem asks for multiples, it almost always means \"the first few\" or \"multiples up to some limit,\" not literally all of them." },
      ]}
      />
      <MisconceptionCallout
      myth="Factors and multiples are basically the same thing, just different words for it."
      reality={<p>They describe opposite relationships. If A is a factor of B, then B is a multiple of A — but A is not a multiple of B (unless A=B), and B is not a factor of A (unless B=A). They&apos;re inverses of each other, not synonyms.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Count how many factors a number has"
      fields={[
      { key: "target", label: "Enter a whole number", defaultValue: 36 },
      ]}
      resultLabel="Total number of factors"
      formula="countFactors"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Pick a number under 30 and write out its complete factor list by testing divisibility from 1 upward.",
      "Write the first ten multiples of that same number, and notice how the two lists behave completely differently.",
      "Next time you need to split a group evenly, check the factor list of the group size first — it tells you every option that works with no leftovers.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a factor and a multiple?", answer: "A factor divides evenly into a number (a smaller or equal piece); a multiple is what you get by multiplying a number up (equal or larger). They describe opposite directions of the same relationship." },
      { question: "How many factors does a number have?", answer: "It varies — prime numbers always have exactly 2 (1 and itself); other numbers have as many as their divisibility allows. There's no fixed count, but the list is always finite." },
      { question: "Do multiples of a number ever stop?", answer: "No. Multiples continue infinitely, since you can always multiply by the next whole number to get another one." },
      { question: "Is a number a factor and a multiple of itself?", answer: "Yes — every whole number (except 0) is both a factor of itself (n ÷ n = 1) and a multiple of itself (n × 1 = n)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
