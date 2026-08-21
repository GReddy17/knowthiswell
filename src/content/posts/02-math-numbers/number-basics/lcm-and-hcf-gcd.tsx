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
  title: "LCM & HCF/GCD",
  category: "math-numbers",
  order: 5,
  subtopic: "number-basics",
  tags: ["LCM", "HCF", "GCD", "factors", "multiples"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "LCM is the smallest number two numbers both divide into; HCF/GCD is the largest number that divides into both — opposite tools for opposite problems.",
  summary: "The Least Common Multiple (LCM) is the smallest multiple two or more numbers share. The Highest Common Factor (HCF), also called Greatest Common Divisor (GCD), is the largest factor they share. They solve opposite kinds of problems.",
  sources: [
    { label: "Britannica — Greatest common divisor", url: "https://www.britannica.com/science/greatest-common-divisor" },
    { label: "Khan Academy — Least common multiple", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-lcm/a/least-common-multiple-review" },
  ],
  seeAlso: [
    "math-numbers/factors-and-multiples",
    "math-numbers/prime-and-composite-numbers",
    "math-numbers/fractions-explained",
  ],
  glossary: [
    { term: "LCM (Least Common Multiple)", definition: "The smallest positive number that is a multiple of two or more given numbers." },
    { term: "HCF (Highest Common Factor)", definition: "The largest positive number that divides evenly into two or more given numbers, also called GCD." },
    { term: "GCD (Greatest Common Divisor)", definition: "Another name for HCF — the largest shared factor of two or more numbers." },
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
      "LCM (least common multiple) is the smallest number two or more numbers both divide into evenly.",
      "HCF/GCD (highest common factor / greatest common divisor) is the largest number that divides evenly into two or more numbers.",
      "LCM helps you combine things (like adding fractions); HCF helps you split things (like simplifying fractions or dividing groups evenly).",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The <TermLink href="/math-numbers/lcm-and-hcf-gcd">LCM</TermLink> of 4 and 6 is 12 — the smallest number both 4 and 6 divide into evenly. The <TermLink href="/math-numbers/lcm-and-hcf-gcd">HCF</TermLink> (same thing as GCD) of 12 and 18 is 6 — the largest number that divides evenly into both. LCM looks at multiples and finds the smallest match; HCF looks at factors and finds the biggest match.</div>}
      detailed={<div className="prose-p">Both quantities come directly from prime factorization. Write each number as its prime factors: 12 = 2²×3, 18 = 2×3². The HCF takes the <em>lowest</em> power of each shared prime: min(2²,2¹)=2¹, min(3¹,3²)=3¹, so HCF = 2×3 = 6. The LCM takes the <em>highest</em> power of every prime that appears in either number: max(2²,2¹)=2², max(3¹,3²)=3², so LCM = 4×9 = 36. There&apos;s also a shortcut identity worth knowing: for any two numbers a and b, LCM(a,b) × HCF(a,b) = a × b — which is a fast way to find one if you already know the other.</div>}
      />
      <FootnoteAside>The Euclidean algorithm — repeatedly replacing the larger number with the remainder of dividing it by the smaller, until the remainder hits 0 — finds HCF/GCD far faster than factoring for large numbers, and dates back to Euclid&apos;s Elements, written around 300 BCE.</FootnoteAside>

      <div className="prose-p">
      Both tools solve genuinely different classroom and real-world problems — mixing them up is the single most common error once the arithmetic itself is understood.
      </div>

      <QuickCheck
      question="You need to add the fractions 1/4 and 1/6. Which quantity tells you the smallest common denominator to use?"
      options={[
      { text: "HCF of 4 and 6", correct: false, explanation: "HCF(4,6)=2, which isn't even a multiple of both 4 and 6 — HCF is the wrong tool here entirely, since you need a shared multiple, not a shared factor." },
      { text: "LCM of 4 and 6", correct: true, explanation: "Correct. LCM(4,6)=12 is the smallest number both 4 and 6 divide into, which makes it the smallest valid common denominator — exactly what adding unlike fractions requires." },
      { text: "The product of 4 and 6 (24)", correct: false, explanation: "24 does work as a common denominator, but it's not the smallest one — 12 works too and keeps the numbers smaller, which is exactly what LCM guarantees you." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding LCM by listing multiples (baseline case)</h3>
      <div className="prose-p">
      Multiples of 4: 4, 8, 12, 16, 20... Multiples of 6: 6, 12, 18, 24... The first number that shows up in both lists is 12 — that&apos;s the LCM. This listing method works fine for small numbers but gets slow fast for larger ones, which is where prime factorization becomes worth the extra step.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Finding HCF of three numbers (edge/variation case)</h3>
      <div className="prose-p">
      Find the HCF of 12, 18, and 30. Prime factorize each: 12=2²×3, 18=2×3², 30=2×3×5. The prime factors common to all three are just 2 and 3, each to the lowest power present anywhere (2¹ and 3¹), so HCF = 2×3 = 6. Extending to three or more numbers works exactly the same way — take the shared primes at their lowest shared power.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Two buses on different schedules (applied case)</h3>
      <div className="prose-p">
      Bus A leaves every 15 minutes, Bus B leaves every 20 minutes. If they both leave at 9:00 AM, when do they next leave together? That&apos;s LCM(15,20) = 60 minutes — they&apos;ll next coincide at 10:00 AM. This exact pattern — repeating events with different cycles syncing back up — shows up constantly, from bus schedules to gear ratios to blinking lights.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Shared factors of 12 and 18 as a Venn diagram"
      type="comparison"
      svgSrc="/diagrams/math-numbers-lcm-and-hcf-gcd-venn-diagram.svg"
      altText="A Venn diagram of the factors of 12 and 18, with shared factors 1, 2, 3, and 6 in the overlap — the largest shared factor, 6, is the HCF"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using HCF when the problem actually calls for LCM, or vice versa.", fix: "Ask: am I combining/syncing things (LCM) or splitting/simplifying things (HCF)? The verb in the problem usually gives it away." },
      { mistake: "Assuming LCM is always the product of the two numbers.", fix: "That's only true when the numbers share no common factors. LCM(4,6)=12, not 24, because they share a factor of 2." },
      { mistake: "Forgetting the identity LCM × HCF = product of the numbers.", fix: "This shortcut lets you find either value instantly once you know the other and the two original numbers — useful for checking your work." },
      ]}
      />
      <MisconceptionCallout
      myth="HCF and GCD are two different concepts that happen to sound similar."
      reality={<p>They&apos;re exactly the same thing under two different names — HCF (Highest Common Factor) is more common in British/Indian curricula, GCD (Greatest Common Divisor) is more common in American ones. Same definition, same calculation, same answer.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Find the HCF (GCD) of two numbers"
      fields={[
      { key: "a", label: "First number", defaultValue: 24 },
      { key: "b", label: "Second number", defaultValue: 36 },
      ]}
      resultLabel="Highest common factor"
      formula="gcdOfTwo"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you add two fractions with different denominators, find the LCM of the denominators first — it's the fastest path to the answer.",
      "Practice the Euclidean algorithm on two numbers by hand — it's faster than factoring once numbers get into the hundreds.",
      "Use the LCM × HCF = a × b identity to double-check any LCM or HCF calculation you do.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between LCM and HCF?", answer: "LCM is the smallest number two or more numbers both divide into (built from shared multiples). HCF is the largest number that divides evenly into two or more numbers (built from shared factors). They solve opposite kinds of problems." },
      { question: "Is HCF the same as GCD?", answer: "Yes, exactly the same thing — HCF (Highest Common Factor) and GCD (Greatest Common Divisor) are two names for the identical calculation and result." },
      { question: "How do you find LCM using prime factorization?", answer: "Take every prime that appears in either number, at its highest power across both numbers, and multiply them together." },
      { question: "Why is LCM used for adding fractions?", answer: "Fractions need a common denominator to add or subtract. The LCM of the two denominators is the smallest valid common denominator, which keeps the numbers in the calculation as small as possible." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
