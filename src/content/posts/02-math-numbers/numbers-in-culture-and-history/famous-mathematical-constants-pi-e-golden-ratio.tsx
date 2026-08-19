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
  title: "Famous Mathematical Constants (pi, e, golden ratio)",
  category: "math-numbers",
  order: 44,
  subtopic: "numbers-in-culture-and-history",
  tags: [
    "pi",
    "e",
    "Euler's number",
    "golden ratio",
    "mathematical constants",
    "irrational numbers",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What pi, e, and the golden ratio actually measure, why all three are irrational, and how each one shows up in a real, verifiable calculation you can run yourself.",
  summary: "Pi, e, and the golden ratio are irrational constants that each arise from a specific, concrete relationship — circles, continuous growth, and a self-repeating proportion — not from mysticism or coincidence.",
  sources: [
    { label: "MacTutor History of Mathematics (University of St Andrews) — Pi through the ages", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Pi_through_the_ages/" },
    { label: "MacTutor History of Mathematics (University of St Andrews) — The number e", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/e/" },
    { label: "MacTutor History of Mathematics (University of St Andrews) — The Golden ratio", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Golden_ratio/" },
  ],
  seeAlso: [
    "math-numbers/fibonacci-sequence-and-nature",
    "math-numbers/history-of-the-number-zero",
  ],
  glossary: [
    { term: "Irrational number", definition: "A number that cannot be written as a simple fraction of two integers; its decimal expansion continues forever without repeating." },
    { term: "Transcendental number", definition: "An irrational number that is not the root of any polynomial equation with rational-number coefficients — pi and e are both transcendental; the golden ratio is not." },
    { term: "Pi (π)", definition: "The ratio of a circle's circumference to its diameter, approximately 3.14159, true for every circle regardless of size." },
    { term: "Euler's number (e)", definition: "A constant, approximately 2.71828, that arises as the limit of continuous compound growth and is the base of the natural logarithm." },
    { term: "Golden ratio (φ)", definition: "A constant, approximately 1.61803, defined by dividing a line so the ratio of the whole to the larger part equals the ratio of the larger part to the smaller part." },
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
          "Pi (≈3.14159) is the ratio of any circle's circumference to its diameter; e (≈2.71828) is the limit of continuous compound growth; the golden ratio phi (≈1.61803) is the proportion where the whole is to the larger part as the larger part is to the smaller.",
          "All three constants are irrational — their decimal digits never terminate or repeat — and pi and e are additionally transcendental, meaning they can't be the solution to any polynomial equation with whole-number coefficients.",
          "Each constant comes from a specific, verifiable relationship, not mysticism: pi from circle geometry, e from growth processes like continuous compounding, and phi from a precise self-repeating ratio also approximated by the Fibonacci sequence.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/math-numbers/famous-mathematical-constants-pi-e-golden-ratio">Pi</TermLink> is the number you get by dividing any circle&apos;s distance around (circumference) by its distance across (diameter) — it always comes out to about 3.14159, no matter how big or small the circle is. <TermLink href="/math-numbers/famous-mathematical-constants-pi-e-golden-ratio">Euler&apos;s number, e</TermLink>, (about 2.71828) shows up whenever something grows continuously, like money compounding every instant instead of once a year. The <TermLink href="/math-numbers/famous-mathematical-constants-pi-e-golden-ratio">golden ratio</TermLink> (about 1.61803) is a proportion: split a line into two pieces so the ratio of the whole line to the bigger piece equals the ratio of the bigger piece to the smaller piece. All three numbers go on forever without repeating — they&apos;re irrational — which is part of why mathematicians find them so interesting.</div>}
        detailed={<div className="prose-p">Formally, pi is defined as circumference divided by diameter (C/d = π) for any circle, and it&apos;s proven <TermLink href="/math-numbers/famous-mathematical-constants-pi-e-golden-ratio">transcendental</TermLink> (not the root of any polynomial with rational coefficients) — a result established by Ferdinand von Lindemann in 1882, which also proved that &quot;squaring the circle&quot; using only a compass and straightedge is mathematically impossible. Euler&apos;s number e is defined as the limit of (1 + 1/n)ⁿ as n grows without bound, which is exactly the mathematical description of continuous compounding; e is also transcendental, proven by Charles Hermite in 1873. The golden ratio φ solves the equation a/b = (a+b)/a, which rearranges into x² - x - 1 = 0, giving the exact value φ = (1+√5)/2. Unlike pi and e, phi is an <TermLink href="/math-numbers/famous-mathematical-constants-pi-e-golden-ratio">irrational number</TermLink> but not a transcendental one — it&apos;s algebraic, since it&apos;s literally the root of that polynomial. Phi connects directly to the Fibonacci sequence: as you go further into the sequence, the ratio of each term to the one before it gets closer and closer to phi. All three constants also connect through Euler&apos;s identity, e^(iπ) + 1 = 0, an equation often called the most elegant in mathematics because it links five fundamental constants — 0, 1, e, i (the imaginary unit), and π — in a single line.</div>}
      />
      <FootnoteAside>Supercomputers have pushed the calculation of pi&apos;s digits into the tens of trillions, far beyond any conceivable engineering need — NASA&apos;s Jet Propulsion Laboratory has noted that just 15 digits of pi are enough to calculate the circumference of a circle the size of the observable universe to within the width of a hydrogen atom. Modern record-setting pi calculations are really tests of computer hardware and algorithms, not attempts to find a &quot;useful&quot; number of digits.</FootnoteAside>

      <p>
      Each constant earns its fame from a different kind of relationship — geometric, growth-based, and proportional. Real numbers make the difference between them click fastest.
      </p>

      <QuickCheck
        question="Pi is defined as a circle's circumference divided by its diameter. What happens to the value of pi as the circle gets bigger?"
        options={[
          { text: "Pi gets larger too, since a bigger circle has a bigger circumference", correct: false, explanation: "Circumference does grow with the circle, but so does the diameter, in exact proportion — dividing one by the other always cancels out to the same value, regardless of the circle's size." },
          { text: "Pi stays exactly the same value, about 3.14159, for every circle no matter its size", correct: true, explanation: "Correct. Because circumference and diameter scale together in fixed proportion for any circle, their ratio — pi — is a true constant, identical whether the circle is a coin or a planet's orbit." },
          { text: "Pi gets smaller, since larger circles are more 'circular'", correct: false, explanation: "Circularity itself doesn't change the ratio — every circle, regardless of size, has the exact same circumference-to-diameter ratio. Pi doesn't shrink or grow with circle size." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Using pi to find a circle&apos;s circumference (baseline case)</h3>
      <div className="prose-p">
      A circular garden bed has a radius of 10 cm (measured from center to edge). Circumference = 2 x π x radius = 2 x 3.14159 x 10 ≈ <strong>62.83 cm</strong> around the outer edge. This is the same formula whether you&apos;re measuring a garden bed, a car tire, or a planetary orbit — pi never changes, only the radius does.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: e and the real gap between annual and continuous compounding (edge case / variation)</h3>
      <div className="prose-p">
      Invest $1,000 at a 5% annual rate for 10 years. Compounded once a year: A = 1000 x (1 + 0.05)¹⁰ ≈ <strong>$1,628.89</strong>. Now compound continuously — imagine interest applying at every conceivable instant rather than once a year — using A = P x e^(rt): A = 1000 x e^(0.05 x 10) = 1000 x e^0.5 ≈ <strong>$1,648.72</strong>. The gap, about $19.83, is the mathematical ceiling on how much more frequent compounding can ever help at this rate and term — no matter how often you compound (daily, hourly, by the second), you can never earn more than the continuous-compounding result, because e is defined as exactly that limit.
      </div>

      <QuickCheck
        question="Compounding interest daily instead of annually increases your return. Could compounding it every microsecond eventually beat the continuous-compounding formula using e?"
        options={[
          { text: "Yes, given a short enough compounding interval, returns can climb indefinitely", correct: false, explanation: "Returns from more frequent compounding do increase, but they don't climb indefinitely — they approach a fixed ceiling as the compounding interval shrinks toward zero." },
          { text: "No — the continuous-compounding formula using e represents the mathematical limit; no finite compounding frequency can exceed it", correct: true, explanation: "Correct. e is defined as the limit of (1 + 1/n)ⁿ as n approaches infinity — continuous compounding is literally that limit, so no real, finite compounding schedule (daily, hourly, by the second) can ever produce a higher return than it." },
          { text: "It depends on the interest rate, not on the compounding frequency", correct: false, explanation: "The interest rate affects the total amount earned, but the mathematical ceiling set by continuous compounding (using e) applies at any rate — more frequent compounding always approaches, but never exceeds, that same limit." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The golden ratio in financial chart analysis (real-world / applied case)</h3>
      <p>
      Financial technical analysts use a set of &quot;Fibonacci retracement&quot; levels — including 61.8%, which is simply 1 divided by phi (1/1.618... ≈ 0.618) — to mark potential support and resistance levels after a stock or currency has a significant price swing. If a stock rises from $100 to $150 (a $50 move) and then pulls back, a trader watching the 61.8% retracement level would calculate: $150 - (0.618 x $50) = $150 - $30.90 = <strong>$119.10</strong>, marking that price as a level worth watching for the pullback to stabilize. Whether or not markets truly &quot;respect&quot; these levels is debated among analysts and economists, but the technique itself is a real, widely documented, and precisely calculable application of phi&apos;s numeric ratio outside pure mathematics.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where pi, e, and the golden ratio each come from"
        type="detail"
        svgSrc="/diagrams/math-numbers-famous-mathematical-constants-comparison.svg"
        altText="A three-panel diagram: the first panel shows a circle with its diameter and circumference labeled and pi marked as their ratio, the second panel shows a smooth exponential growth curve labeled with the continuous compounding formula P times e to the rt, and the third panel shows a line segment split into a longer and shorter piece with the golden ratio proportion labeled, alongside a small golden rectangle built from the same proportion."
      />
      <p>
      Each panel isolates exactly one relationship: circle geometry for pi, continuous growth for e, and a self-repeating division for phi. None of the three constants require the others to be defined — they&apos;re independent discoveries that happen to reappear across very different branches of mathematics, which is precisely why Euler&apos;s identity (linking pi, e, and other constants in one equation) is considered such a remarkable, non-obvious result.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Rounding pi to 3.14 and treating that as the exact value for precise calculations.", fix: "3.14 is a convenient approximation, not the exact value — pi's decimal digits continue forever without repeating, so more precision (3.14159265...) matters for anything requiring real accuracy." },
          { mistake: "Assuming e is just 'a constant used in advanced math' with no concrete meaning.", fix: "e has a specific, concrete definition: it's the limit of continuous compound growth. Anywhere something grows continuously and proportionally to its current size, e shows up." },
          { mistake: "Treating the golden ratio and the Fibonacci sequence as literally the same thing.", fix: "They're related but distinct — the golden ratio is an exact, fixed number (φ = (1+√5)/2 ≈ 1.61803), while the Fibonacci sequence is a list of whole numbers whose consecutive ratios only approach phi as the sequence continues." },
        ]}
      />
      <MisconceptionCallout
        myth="The golden ratio appears in essentially every beautiful or well-designed object in art, architecture, and nature."
        reality={<p>Many widely repeated claims — that the Parthenon, the Great Pyramid of Giza, or the Mona Lisa were deliberately designed using the golden ratio — are not supported by historical evidence and have been directly challenged by historians of mathematics and art historians who&apos;ve re-measured the actual proportions involved. A 1992 analysis by mathematician George Markowsky, published in The College Mathematics Journal, traced many of these claims to loose measurements and retroactive pattern-matching rather than documented design intent. Genuine, well-documented mathematical appearances of the golden ratio do exist — its precise algebraic definition, its connection to the Fibonacci sequence&apos;s limiting ratio, and specific geometric constructions — but the sweeping claim that it explains beauty wherever it&apos;s &quot;found&quot; is a popular myth that outpaces the actual evidence.</p>}
      />

      <QuickCheck
        question="Historians have re-measured famous buildings and artworks often claimed to use the golden ratio, like the Parthenon and the Mona Lisa. What have they generally found?"
        options={[
          { text: "The golden ratio is mathematically undefined, so the claims can't be tested", correct: false, explanation: "The golden ratio is a precisely defined constant (φ = (1+√5)/2), which is exactly what makes these claims testable — and testing them is what has revealed many popular claims don't hold up to careful measurement." },
          { text: "Precise re-measurement often doesn't support the specific golden-ratio claims, which historians trace to loose measurement and retroactive pattern-matching rather than documented design intent", correct: true, explanation: "Correct. Careful analysis, including a well-known 1992 study by mathematician George Markowsky, found many popular golden-ratio claims in art and architecture don't hold up against precise measurement or historical evidence of intentional design." },
          { text: "Every one of the claims has been fully confirmed by precise modern measurement", correct: false, explanation: "The opposite is closer to the truth for many famous claims — careful re-measurement and historical research have challenged, rather than confirmed, much of the popular golden-ratio mythology around specific artworks and buildings." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Circle circumference from radius (C = 2 x pi x r)"
        fields={[
          { key: "radius", label: "Radius (cm)", defaultValue: 10 },
        ]}
        resultLabel="Circumference (cm)"
        formula="circleCircumferenceFromRadius"
        formatResult="number"
      />
      <EntryCalculator
        title="Continuous compound growth using e (A = P x e^(rt))"
        fields={[
          { key: "principal", label: "Starting amount ($)", defaultValue: 1000 },
          { key: "rate", label: "Annual rate (%)", defaultValue: 5 },
          { key: "years", label: "Years", defaultValue: 10 },
        ]}
        resultLabel="Final amount ($)"
        formula="continuousCompoundGrowth"
        formatResult="number"
      />
      <EntryCalculator
        title="Check whether a rectangle's proportions match the golden ratio"
        fields={[
          { key: "longSideCm", label: "Long side (cm)", defaultValue: 16.18 },
          { key: "shortSideCm", label: "Short side (cm)", defaultValue: 10 },
        ]}
        resultLabel="Ratio (compare to phi ≈ 1.618)"
        formula="goldenRatioFromDimensions"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the circumference calculator on a real circular object (a plate, a wheel) and check it against a tape measure.",
          "Try the compound growth calculator with your own numbers and compare it to a standard once-a-year compounding calculation — see how close (but never over) the continuous result gets.",
          "Measure a rectangle you have on hand (a book, a card, a screen) and run its dimensions through the golden ratio calculator to see how close it lands to 1.618.",
          "Read the related entry on Fibonacci Sequence & Nature to see exactly how phi emerges from a simple whole-number sequence.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is pi used for in real life?", answer: "Pi is used anywhere circular or curved geometry needs to be calculated precisely — engineering, construction, GPS and satellite calculations, manufacturing round parts, and any formula involving circles, spheres, or periodic (wave-like) motion." },
          { question: "Why is e called 'Euler's number' if it wasn't discovered by Euler?", answer: "The constant first appeared in a 1618 appendix to John Napier's work on logarithms, but Leonhard Euler's extensive 18th-century work studying and popularizing its properties led to it being named after him and denoted with the letter e." },
          { question: "Is the golden ratio the same as the Fibonacci sequence?", answer: "No, though they're closely related. The golden ratio is one fixed irrational number (≈1.61803). The Fibonacci sequence is a list of whole numbers (0, 1, 1, 2, 3, 5, 8...) whose ratio of consecutive terms gets closer and closer to the golden ratio the further the sequence continues, but never reaches it exactly." },
          { question: "Are pi and e related to each other?", answer: "Yes — Euler's identity, e^(iπ) + 1 = 0, links pi, e, the imaginary unit i, and the numbers 0 and 1 in a single equation. It's often called the most beautiful equation in mathematics because it connects five fundamental constants from otherwise separate branches of math." },
          { question: "How many digits of pi have been calculated?", answer: "Supercomputers have calculated pi to well over 100 trillion digits, far beyond any practical engineering use — NASA has noted that just 15 digits are precise enough to calculate the circumference of the observable universe to within the width of a single hydrogen atom." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
