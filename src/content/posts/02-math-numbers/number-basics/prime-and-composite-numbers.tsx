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
  title: "Prime & Composite Numbers",
  category: "math-numbers",
  order: 3,
  subtopic: "number-basics",
  tags: ["prime numbers", "composite numbers", "factors", "number theory"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Prime numbers have exactly two factors, composite numbers have more than two, and 1 is neither — the one-sentence rule that ends most of the confusion.",
  summary: "A prime number has exactly two whole-number factors — 1 and itself. A composite number has more than two. The number 1 is a special case that belongs to neither group.",
  sources: [
    { label: "Britannica — Prime number", url: "https://www.britannica.com/science/prime-number" },
    { label: "Wolfram MathWorld — Prime Number", url: "https://mathworld.wolfram.com/PrimeNumber.html" },
    { label: "Khan Academy — Prime and composite numbers", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-prime-numbers/a/prime-numbers" },
  ],
  seeAlso: [
    "math-numbers/factors-and-multiples",
    "math-numbers/lcm-and-hcf-gcd",
    "math-numbers/types-of-numbers-natural-whole-integers-rational-irrational",
  ],
  glossary: [
    { term: "Prime number", definition: "A whole number greater than 1 with exactly two factors: 1 and itself." },
    { term: "Composite number", definition: "A whole number greater than 1 with more than two factors." },
    { term: "Factor", definition: "A whole number that divides evenly into another number, leaving no remainder." },
    { term: "Prime factorization", definition: "Breaking a composite number down into the unique set of prime numbers that multiply together to make it." },
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
      "A prime number has exactly two factors — 1 and itself — no more, no fewer.",
      "1 is neither prime nor composite, because it has only one factor (itself), not two.",
      "Every composite number breaks down into a unique set of prime factors — this is the foundation of modern encryption.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/prime-and-composite-numbers">prime number</TermLink> can only be divided evenly by 1 and itself — nothing else. 7 is prime: only 1×7 makes it. A <TermLink href="/math-numbers/prime-and-composite-numbers">composite number</TermLink> has at least one other factor pair too. 8 is composite: 1×8, but also 2×4. The number 1 is odd one out — it only has one factor (itself), so it doesn&apos;t qualify as either.</div>}
      detailed={<div className="prose-p">Formally, a prime is a natural number greater than 1 whose only positive divisors are 1 and itself; a composite number is a natural number greater than 1 with at least one divisor other than 1 and itself. This &quot;greater than 1&quot; clause is why 1 is excluded from both categories by definition, not by convention — if 1 counted as prime, the Fundamental Theorem of Arithmetic (that every integer greater than 1 has a unique prime factorization) would break, since you could pad any factorization with extra 1s and still call it valid. Every composite number&apos;s prime factorization is unique up to the order of factors — 12 is always 2×2×3, never anything else — which is why prime factorization is so foundational, not just a classroom exercise.</div>}
      />
      <FootnoteAside>2 is the only even prime number. Every other even number is divisible by 2 in addition to 1 and itself, which automatically makes it composite — so &quot;even and prime&quot; only ever happens once, at 2.</FootnoteAside>

      <div className="prose-p">
      Testing whether a number is prime is simple in principle but gets slow fast for large numbers — which is exactly the property that makes primes so useful for real-world security.
      </div>

      <QuickCheck
      question="Is 1 a prime number?"
      options={[
      { text: "Yes, because its only factors are 1 and itself", correct: false, explanation: "1's only factor is itself (1×1=1) — that's one factor, not the two distinct factors (1 and itself) the definition of prime requires." },
      { text: "No, 1 is neither prime nor composite", correct: true, explanation: "Correct. The definitions of both prime and composite require the number to have exactly two, or more than two, distinct factors respectively — 1 has only one, so it's excluded from both categories by definition." },
      { text: "No, 1 is composite", correct: false, explanation: "Composite numbers need more than two factors; 1 has only one factor total, so it doesn't meet the composite definition either." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Checking a small number by hand (baseline case)</h3>
      <div className="prose-p">
      Is 17 prime? Check every number from 2 up to √17 (about 4.1) for a factor: 2 doesn&apos;t divide evenly, 3 doesn&apos;t, 4 doesn&apos;t. Since none of them work, and you only need to check up to the square root (because factor pairs always have one factor ≤ √n and one ≥ √n), 17 is prime.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Prime factorization of a composite number (edge/variation case)</h3>
      <div className="prose-p">
      Break 60 down completely: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. Written as prime factors only, 60 = 2² × 3 × 5. No matter which factor pair you start peeling off first (2×30, or 4×15, or 6×10), you always land on the same final set of primes — that&apos;s the &quot;unique&quot; part of the Fundamental Theorem of Arithmetic in action.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why primes matter outside the classroom (applied case)</h3>
      <div className="prose-p">
      Modern encryption (the kind protecting your online banking and every HTTPS website) relies on the fact that multiplying two large primes together is fast, but factoring the resulting huge composite number back into those two primes is, with current computers, prohibitively slow if the primes are large enough. RSA encryption is built directly on this asymmetry — easy one direction, hard the other.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming 1 is prime because it's \"only divisible by itself.\"", fix: "The definition needs exactly two distinct factors. 1 has only one factor total (itself), so it fails the definition and is excluded from both categories." },
      { mistake: "Assuming all odd numbers are prime.", fix: "Plenty of odd numbers are composite — 9 (3×3), 15 (3×5), 21 (3×7) are all odd and composite. Being odd only rules out one specific factor (2), not all others." },
      { mistake: "Checking every number up to n instead of up to √n when testing primality by hand.", fix: "You only need to check divisors up to the square root of the number — if no factor exists below that point, none exists above it either." },
      { mistake: "Forgetting that a prime factorization can repeat the same prime.", fix: "Repeated factors are normal and expected — 8 = 2×2×2 (written 2³), not just \"2 and something else.\"" },
      ]}
      />
      <MisconceptionCallout
      myth="Prime numbers become rarer and eventually run out as numbers get bigger."
      reality={<p>Primes do get sparser on average as numbers grow, but they never run out — Euclid proved over 2,000 years ago that there are infinitely many primes. The largest known prime (as of recent record-setting searches) has tens of millions of digits, and there&apos;s always a next one to find.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Check if a number is prime"
      fields={[
      { key: "candidate", label: "Enter a whole number to test", defaultValue: 29 },
      ]}
      resultLabel="1 if prime, 0 if not (checked up to its square root)"
      formula="isPrimeCheck"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice listing all primes under 50 by hand using the sieve method: cross out multiples of 2, then 3, then 5, then 7 — everything left over is prime.",
      "Take any composite number you see today (a price, a house number) and find its full prime factorization.",
      "Remember 2 as the one exception whenever someone claims \"all primes are odd\" — it isn't quite true.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is 1 a prime number?", answer: "No. Prime numbers are defined as having exactly two distinct factors (1 and itself); 1 has only one factor total, so by definition it's neither prime nor composite." },
      { question: "What is the smallest prime number?", answer: "2 is the smallest prime number, and the only even one — every other even number has 2 as an additional factor beyond 1 and itself, making it composite." },
      { question: "How do you know if a number is prime?", answer: "Check whether any whole number from 2 up to its square root divides into it evenly. If none do, it's prime. This is slow for very large numbers, which is exactly why large primes are useful in encryption." },
      { question: "What is prime factorization used for?", answer: "It's used to find the greatest common factor and least common multiple of numbers, to simplify fractions, and — at a much larger scale — as the mathematical basis of modern encryption like RSA." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
