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
  title: "Fibonacci Sequence & Nature",
  category: "math-numbers",
  order: 45,
  subtopic: "numbers-in-culture-and-history",
  tags: [
    "Fibonacci sequence",
    "golden ratio",
    "phyllotaxis",
    "Leonardo of Pisa",
    "nature patterns",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the Fibonacci sequence actually works, why it wasn't originally discovered by Fibonacci, and the real mechanism that makes it show up in sunflowers and pinecones.",
  summary: "The Fibonacci sequence is a list of numbers where each term is the sum of the two before it, and it appears in certain plant growth patterns because of an efficient packing mechanism, not mysticism.",
  sources: [
    { label: "MacTutor History of Mathematics (University of St Andrews) — Fibonacci biography", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Fibonacci/" },
    { label: "MacTutor History of Mathematics (University of St Andrews) — The Golden ratio", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Golden_ratio/" },
    { label: "Smithsonian Magazine — The Fibonacci Sequence Is Everywhere — Even the Troubled Stock Market", url: "https://www.smithsonianmag.com/science-nature/fibonacci-sequence-stock-market-180974487/" },
  ],
  seeAlso: [
    "math-numbers/famous-mathematical-constants-pi-e-golden-ratio",
    "math-numbers/history-of-the-number-zero",
  ],
  glossary: [
    { term: "Fibonacci sequence", definition: "A sequence of numbers starting 0, 1, 1, 2, 3, 5, 8, 13... where each term equals the sum of the two terms before it." },
    { term: "Golden ratio (φ)", definition: "An irrational constant, approximately 1.61803, that the ratio of consecutive Fibonacci numbers approaches as the sequence continues." },
    { term: "Phyllotaxis", definition: "The arrangement of leaves, seeds, or other structures on a plant, often following spiral patterns as the plant grows." },
    { term: "Golden angle", definition: "An angle of approximately 137.5 degrees that produces the most efficient, non-overlapping packing of new growth around a plant's growing tip." },
    { term: "Recurrence relation", definition: "A rule that defines each term in a sequence based on one or more previous terms, such as F(n) = F(n-1) + F(n-2) for the Fibonacci sequence." },
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
          "The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, 21...) is built by a simple rule — each term is the sum of the two terms before it — first popularized in Europe by Leonardo of Pisa (Fibonacci) in 1202, though Indian mathematicians described the same pattern centuries earlier.",
          "The ratio between consecutive Fibonacci numbers gets closer and closer to the golden ratio (≈1.61803) the further the sequence continues, but never reaches it exactly.",
          "Fibonacci-numbered spirals genuinely appear in plants like sunflowers and pinecones because of a real growth mechanism — new growth emerging at a repeating 137.5-degree 'golden angle' packs most efficiently — not because nature is 'designed' around the sequence.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/math-numbers/fibonacci-sequence-and-nature">Fibonacci sequence</TermLink> is a list of numbers that starts 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... Each new number is just the two numbers before it added together (3 + 5 = 8, 5 + 8 = 13, and so on). It&apos;s named after Leonardo of Pisa, nicknamed Fibonacci, who introduced it to Western Europe in 1202 using a hypothetical problem about how fast rabbits multiply. The sequence shows up in real, observable places in nature — count the spirals on a sunflower&apos;s seed head or a pinecone&apos;s scales, and you&apos;ll very often land on a Fibonacci number.</div>}
        detailed={<div className="prose-p">Formally, the sequence follows the <TermLink href="/math-numbers/fibonacci-sequence-and-nature">recurrence relation</TermLink> F(n) = F(n-1) + F(n-2), with starting values F(0) = 0 and F(1) = 1. As n grows large, the ratio F(n)/F(n-1) converges toward the <TermLink href="/math-numbers/fibonacci-sequence-and-nature">golden ratio</TermLink>, φ ≈ 1.61803 — a genuinely elegant, provable result. The nature connection isn&apos;t mystical; it comes from <TermLink href="/math-numbers/fibonacci-sequence-and-nature">phyllotaxis</TermLink>, the pattern by which plants arrange new growth (leaves, seeds, petals) around a central growing point. Botanists have shown, including through physical modeling experiments (Douady and Couder&apos;s 1990s magnetic-droplet experiments recreating spiral growth), that when each new element emerges rotated by the <TermLink href="/math-numbers/fibonacci-sequence-and-nature">golden angle</TermLink> (≈137.5°, derived directly from the golden ratio) from the one before it, the resulting arrangement packs elements against each other with minimal wasted space and minimal overlap — no other fixed rotation angle packs as efficiently. That efficient packing mechanically produces spiral counts that are Fibonacci numbers as a side effect of geometry, not because the plant is &quot;using&quot; Fibonacci numbers intentionally.</div>}
      />
      <FootnoteAside>Fibonacci didn&apos;t discover this sequence — Indian mathematicians described the identical pattern centuries earlier while analyzing the rhythms of Sanskrit poetic meter. Scholars including Pingala, Virahanka, and Hemachandra worked out the same recurrence (counting the number of ways to build a rhythm from short and long syllables) between roughly the 3rd century BCE and the 12th century CE — before Fibonacci&apos;s 1202 book Liber Abaci introduced the sequence to Western Europe through an unrelated rabbit-breeding problem.</FootnoteAside>

      <p>
      That recurrence rule is simple to state but easy to underuse — its real payoff shows up once you follow it through actual numbers and see how fast it grows, and how precisely it tracks the golden ratio.
      </p>

      <QuickCheck
        question="The Fibonacci sequence begins 0, 1, 1, 2, 3, 5, 8, 13... What determines the next number after 13?"
        options={[
          { text: "It's always double the previous number, so 26", correct: false, explanation: "The Fibonacci rule isn't doubling — it's summing the two previous terms. 13 x 2 = 26 isn't how the sequence is generated at all." },
          { text: "It's the sum of the two numbers immediately before it: 8 + 13 = 21", correct: true, explanation: "Correct. The defining rule of the Fibonacci sequence is that each term equals the sum of the two terms before it — 8 + 13 = 21 is the next term." },
          { text: "It follows no fixed rule and was chosen arbitrarily by Fibonacci", correct: false, explanation: "The sequence follows a precise, fixed rule (each term is the sum of the two before it) — it's not an arbitrary list of numbers." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Generating the first ten Fibonacci numbers by hand (baseline case)</h3>
      <div className="prose-p">
      Start with 0 and 1. Add them to get the next term: 0+1=1. Add the last two terms again: 1+1=2. Continue the same rule: 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34, 21+34=55. Laid out in order, the first ten terms are: <strong>0, 1, 1, 2, 3, 5, 8, 13, 21, 34</strong>. Notice how quickly the numbers accelerate — each term is roughly 1.6 times the one before it once you&apos;re several terms in, a preview of the golden ratio connection.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Watching the ratio of consecutive terms converge on phi (edge case / variation)</h3>
      <div className="prose-p">
      Early in the sequence, the ratio between consecutive terms swings around noticeably: 1/1 = 1.0, 2/1 = 2.0, 3/2 = 1.5, 5/3 ≈ 1.667, 8/5 = 1.6. But push further into the sequence and the ratio settles down fast: 34/21 ≈ 1.6190, 55/34 ≈ 1.6176, 89/55 ≈ 1.6182. The true golden ratio is φ ≈ 1.61803. By the 89/55 term, the approximation is already accurate to three decimal places — this is a genuine edge case worth seeing directly, because it shows the golden ratio isn&apos;t an approximate pattern loosely associated with Fibonacci numbers, but their exact mathematical limit as the sequence continues forever.
      </div>

      <QuickCheck
        question="Early Fibonacci ratios (like 2/1 = 2.0 and 1/1 = 1.0) are far from the golden ratio (≈1.618). What happens to the ratio as you move further into the sequence?"
        options={[
          { text: "It keeps swinging unpredictably and never settles down", correct: false, explanation: "The ratio's swings shrink rapidly and it settles into a very stable, predictable pattern — by around the 10th-15th terms, the ratio is already accurate to several decimal places." },
          { text: "It converges steadily toward the golden ratio, getting closer with each additional term", correct: true, explanation: "Correct. As Fibonacci terms grow larger, the ratio of consecutive terms approaches phi (≈1.61803) as a true mathematical limit — the further you go, the closer (and more stable) the approximation becomes." },
          { text: "It eventually reaches exactly 1.618 and then stays fixed at that exact value forever", correct: false, explanation: "The ratio gets arbitrarily close to phi but never reaches it exactly at any finite term — phi is the limit the ratio approaches, not a value the sequence ever lands on precisely." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Counting real spirals on a sunflower head (real-world / applied case)</h3>
      <p>
      Look closely at a sunflower&apos;s seed head and you&apos;ll see two sets of spirals winding in opposite directions — one set curving clockwise, the other counterclockwise. Botanists studying real sunflowers (including citizen-science counting projects) have repeatedly found the spiral counts land on adjacent Fibonacci numbers: commonly 34 spirals one direction and 55 the other, or 55 and 89 on larger flower heads. This isn&apos;t a coincidence or a cherry-picked example — it&apos;s the direct, mechanical result of each new seed forming at the golden angle (≈137.5°) from the one before it during the flower&apos;s growth, which packs the maximum number of seeds into the seed head with minimal wasted space. The same spiral-counting pattern shows up in pinecone scales and pineapple eyes for the identical structural reason.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Fibonacci spiral built from squares, and the 137.5° golden angle in plant growth"
        type="detail"
        svgSrc="/diagrams/math-numbers-fibonacci-sequence-and-nature-spiral.svg"
        altText="A diagram showing a Fibonacci spiral constructed from a sequence of squares with side lengths 1, 1, 2, 3, 5, 8, and 13, with a smooth curved spiral drawn through the corners of each square, alongside a second panel showing a sunflower seed head viewed from above with new seeds emerging at a repeating 137.5-degree golden angle from the previous seed, producing two families of spirals winding in opposite directions."
      />
      <p>
      In the left panel, each new square&apos;s side length is the sum of the two previous squares&apos; side lengths — the same recurrence rule as the number sequence itself, just drawn geometrically. In the right panel, the 137.5-degree rotation between each new seed is what generates the visible spiral families; because that specific angle is derived from the golden ratio, the resulting spiral counts consistently land on Fibonacci numbers as the seed head fills in.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing Fibonacci himself first discovered or invented the sequence.", fix: "Indian mathematicians (including Pingala, Virahanka, and Hemachandra) described the identical numerical pattern centuries earlier while studying Sanskrit poetic meter — Fibonacci introduced it to Western Europe in 1202, but didn't originate it." },
          { mistake: "Assuming every spiral pattern in nature — hurricanes, galaxies, nautilus shells — is a 'Fibonacci spiral.'", fix: "Many natural spirals are logarithmic spirals shaped by entirely different physical processes (fluid dynamics, gravity) with no connection to Fibonacci numbers or the golden angle — the sunflower/pinecone mechanism is a specific botanical phenomenon, not a universal rule of nature." },
          { mistake: "Treating the Fibonacci sequence and the golden ratio as interchangeable, or as literally the same number.", fix: "The Fibonacci sequence is a list of whole numbers; the golden ratio is one fixed irrational number their consecutive ratios approach but never exactly equal." },
        ]}
      />
      <MisconceptionCallout
        myth="Leonardo Fibonacci discovered the Fibonacci sequence."
        reality={<p>The sequence that carries his name was already known well before Fibonacci wrote about it. Indian mathematicians studying the rhythmic patterns of Sanskrit poetry — how many ways a meter can be built from short and long syllables — worked out the identical recurrence, with scholars including Pingala, Virahanka, and Hemachandra contributing to this understanding between roughly the 3rd century BCE and the 12th century CE. Fibonacci&apos;s real contribution, in his 1202 book Liber Abaci, was introducing the sequence to Western European mathematics through a hypothetical rabbit-population problem — and, more importantly, helping introduce the Hindu-Arabic decimal number system itself to Europe. The sequence&apos;s name reflects who popularized it in the West, not who discovered it first.</p>}
      />

      <QuickCheck
        question="If Indian mathematicians described the Fibonacci sequence centuries before Fibonacci, why is the sequence named after him?"
        options={[
          { text: "Because his 1202 book Liber Abaci introduced the sequence to Western European mathematics, even though it wasn't the first place the pattern had been described", correct: true, explanation: "Correct. Naming conventions in mathematics often reflect who popularized or transmitted an idea to a particular tradition, not necessarily who originated it first — Fibonacci's role was introducing the sequence (and the Hindu-Arabic number system) to Western Europe." },
          { text: "Because historians have since disproven the claim that Indian mathematicians described it earlier", correct: false, explanation: "The opposite is true — the Indian origins of the pattern, tied to Sanskrit prosody, are well documented and generally accepted by historians of mathematics, not disproven." },
          { text: "Because Fibonacci was the first person in any culture to write down the recurrence rule", correct: false, explanation: "He wasn't first — Indian mathematicians described the identical rule while analyzing poetic meter centuries before Fibonacci's 1202 book introduced it to Western Europe." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Find the nth Fibonacci number"
        fields={[
          { key: "n", label: "Term number (n, starting at 0)", defaultValue: 10 },
        ]}
        resultLabel="Fibonacci value at that term"
        formula="fibonacciNthTerm"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the calculator above to find a few different terms, then divide consecutive results by hand to watch the ratio close in on 1.618.",
          "Next time you see a sunflower, pinecone, or pineapple, count its opposing spiral sets — you'll very likely land on two adjacent Fibonacci numbers.",
          "Sketch the square-based Fibonacci spiral from Example 1 (squares of side 1,1,2,3,5,8) to see the recurrence rule expressed geometrically.",
          "Read the related entry on Famous Mathematical Constants to see exactly how the golden ratio phi is derived algebraically and where it shows up beyond the Fibonacci sequence.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Fibonacci sequence in simple terms?", answer: "A list of numbers starting 0, 1, 1, 2, 3, 5, 8, 13, 21... where each number is the sum of the two numbers immediately before it." },
          { question: "Did Fibonacci actually invent the Fibonacci sequence?", answer: "No. Indian mathematicians studying Sanskrit poetic meter described the identical pattern centuries earlier. Fibonacci's 1202 book Liber Abaci introduced the sequence to Western Europe using a rabbit-population example, which is why it carries his name in the West." },
          { question: "Why does the Fibonacci sequence appear in sunflowers?", answer: "Sunflower seeds form at a repeating 137.5-degree 'golden angle' from each other as the flower grows. This specific angle packs new seeds with minimal wasted space and minimal overlap, and the resulting spiral counts mechanically land on Fibonacci numbers as a byproduct of that efficient packing." },
          { question: "What is the relationship between the Fibonacci sequence and the golden ratio?", answer: "As you move further into the Fibonacci sequence, the ratio between consecutive terms gets closer and closer to the golden ratio (≈1.61803), converging on it as a mathematical limit, though never reaching it exactly at any specific term." },
          { question: "Does the Fibonacci sequence appear everywhere in nature?", answer: "No — this is a common overstatement. It appears reliably in specific plant growth patterns (phyllotaxis) tied to the golden angle, like sunflower seed heads and pinecone scales, but many other natural spirals (hurricanes, spiral galaxies) follow different physical processes entirely unrelated to Fibonacci numbers." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
