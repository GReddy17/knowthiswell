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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Understanding Work Rate & Time Problems (Person-Hours, etc.)",
  category: "units-measurement-conversions",
  order: 41,
  subtopic: "time-speed-and-rate",
  tags: [
    "work rate",
    "person-hours",
    "combined rate",
    "rate problems",
    "job scheduling",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Two workers finishing a job together are never as slow as just averaging their individual times — because rates add, but times don't.",
  summary: "Work-rate problems (classically 'two pipes filling a tank') are solved by converting each worker's or machine's time into a rate (fraction of the job per hour), adding the rates together, then taking the reciprocal of the combined rate to find the combined time — a method that generalizes directly to person-hours and staffing calculations.",
  sources: [
    { label: "NIST — Guide for the Use of the International System of Units (SI)", url: "https://www.nist.gov/pml/special-publication-811" },
    { label: "Encyclopaedia Britannica — Ratio and Proportion", url: "https://www.britannica.com/science/ratio-mathematics" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-unit-rates-price-per-item-speed-pace",
    "units-measurement-conversions/time-duration-math-adding-and-subtracting-hours-and-minutes",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    {"term":"Work rate","definition":"The fraction of a job completed per unit of time, found by taking the reciprocal of the time needed to complete the whole job alone (1 ÷ time)."},
    {"term":"Combined rate","definition":"The sum of two or more individual work rates, representing how much of a job gets done per unit of time when multiple workers or machines operate simultaneously."},
    {"term":"Person-hours","definition":"A unit of work measuring one person working for one hour, used to estimate total labor needed for a task regardless of how many people are actually assigned to it."},
    {"term":"Reciprocal","definition":"The result of dividing 1 by a number — used here to convert a combined work rate back into a combined time (time = 1 ÷ rate)."},
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
      "Work-rate problems can't be solved by averaging times — two workers with different individual times combine by adding their rates (fraction of the job per hour), not their raw hours.",
      "The standard method: convert each individual time to a rate (1 ÷ time), add the rates, then take the reciprocal of that sum (1 ÷ combined rate) to get the combined time.",
      "Working together is always faster than the fastest individual alone — the combined time can never be longer than the quickest single worker's or machine's own time.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">If Pipe A can fill a tank alone in 6 hours, its <TermLink href="/units-measurement-conversions/understanding-work-rate-and-time-problems">work rate</TermLink> is 1/6 of the tank per hour. If Pipe B can fill the same tank alone in 3 hours, its rate is 1/3 of the tank per hour. Running both pipes together, their rates add: 1/6 + 1/3 = 1/2 of the tank per hour. To find the combined time, take the reciprocal of that combined rate: 1 ÷ (1/2) = 2 hours. Both pipes together fill the tank in 2 hours — notably not the average of 6 and 3 (which would incorrectly suggest 4.5 hours).</div>}
      detailed={<div className="prose-p">The reason times can&apos;t simply be averaged is that time and rate aren&apos;t linearly related — they&apos;re reciprocals of each other. Averaging 6 hours and 3 hours gives 4.5, but that treats &quot;hours to finish&quot; as if it behaves like a normal additive quantity, when what&apos;s actually additive is the <em>rate</em> (fraction of the job done per hour), not the time itself. This is the same underlying principle as <TermLink href="/units-measurement-conversions/understanding-work-rate-and-time-problems">combined rate</TermLink> problems in physics (parallel resistors, combined pipe flow) — anywhere two independent processes contribute simultaneously toward one shared outcome, their rates (not their individual completion times) are what sum together. The generalization to <TermLink href="/units-measurement-conversions/understanding-work-rate-and-time-problems">person-hours</TermLink> follows directly: if a job takes one person 20 hours alone, it represents 20 person-hours of total work, and adding a second person (also working at a comparable rate) doesn&apos;t mean the job now takes 20 hours for each of them — it means the fixed 20 person-hours of work gets divided between more simultaneous workers.</div>}
      />
      <FootnoteAside>This exact &quot;add the rates, invert for time&quot; method is mathematically identical to how physicists calculate total resistance for resistors wired in parallel in an electrical circuit — the formula 1/R_total = 1/R_1 + 1/R_2 has precisely the same reciprocal-sum structure as the combined work-rate formula, because both describe two independent pathways contributing simultaneously to one shared outcome.</FootnoteAside>

      <p>
      Once the &quot;rates add, times don&apos;t&quot; rule is internalized, work-rate problems stop feeling like a special algebra trick and start looking like ordinary rate math applied to a shared task.
      </p>

      <QuickCheck
      question="Pipe A fills a tank alone in 6 hours; Pipe B fills it alone in 3 hours. Why is the combined time NOT simply the average of 6 and 3 (4.5 hours)?"
      options={[
      { text: "Because averaging times only works when both times are equal", correct: false, explanation: "Averaging times doesn't correctly solve combined-rate problems even when the two times are equal — the correct method is always to add rates and take the reciprocal, regardless of whether the individual times match." },
      { text: "Because what actually adds together when two processes work simultaneously is their rate (fraction of the job per hour), not their raw completion times — time and rate are reciprocals of each other, not linearly related", correct: true, explanation: "Correct. Rates are additive when processes run in parallel; times are not. Converting to rates, adding, then converting back (1 ÷ combined rate) is the only way to get the genuinely correct combined time, which in this case is 2 hours, not 4.5." },
      { text: "Because Pipe B is faster, so its time should be weighted more heavily than a simple average allows", correct: false, explanation: "The issue isn't that a simple average needs different weighting — it's that averaging times is the wrong operation entirely for combined-rate problems, regardless of how the weights are adjusted." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Two workers painting a room (baseline case)</h3>
      <div className="prose-p">
      Worker A can paint a room alone in 4 hours (rate: 1/4 room/hour). Worker B can paint it alone in 4 hours as well (rate: 1/4 room/hour). Combined rate: 1/4 + 1/4 = 1/2 room/hour. Combined time: 1 ÷ (1/2) = 2 hours — exactly half of either worker&apos;s individual time, which makes intuitive sense since they&apos;re equally fast and splitting the work evenly.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Three workers with different speeds (edge case / variation)</h3>
      <div className="prose-p">
      Worker A takes 10 hours alone (rate 1/10), Worker B takes 15 hours alone (rate 1/15), and Worker C takes 30 hours alone (rate 1/30). Combined rate: 1/10 + 1/15 + 1/30. Using a common denominator of 30: 3/30 + 2/30 + 1/30 = 6/30 = 1/5. Combined time: 1 ÷ (1/5) = 5 hours. Notice the combined time (5 hours) is less than even the fastest individual worker&apos;s time (10 hours) — a general rule for this kind of problem: adding more simultaneous workers can only speed the job up, never slow it down, since each additional worker contributes a positive rate to the sum.
      </div>

      <QuickCheck
      question="Can the combined time for two or more workers ever be longer than the fastest individual worker's own time?"
      options={[
      { text: "Yes, if the slower workers get in each other's way", correct: false, explanation: "The pure work-rate math (which assumes independent, non-interfering rates) never produces a combined time longer than the fastest individual's time — real-world interference effects are a separate practical consideration, not part of the base combined-rate calculation." },
      { text: "No — adding any additional worker with a positive work rate can only increase the combined rate, which can only decrease the combined time below (or equal to) the fastest individual's time", correct: true, explanation: "Correct. Since combined rate = sum of individual rates, and every individual rate is positive, adding more workers strictly increases the combined rate (or leaves it unchanged in a degenerate case), which means the combined time is always less than or equal to the fastest individual worker's time." },
      { text: "Yes, whenever the workers have very different individual speeds", correct: false, explanation: "A large gap in individual speeds doesn't produce a slower combined time — it just means the combined rate is dominated by the faster worker's contribution, but the combined time is still faster than any individual's alone." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Estimating a construction job with person-hours (real-world / applied case)</h3>
      <div className="prose-p">
      A contractor estimates a fencing job requires 120 person-hours of labor total (based on past jobs of similar size). With a crew of 4 workers working simultaneously at a comparable pace, the job time is 120 person-hours ÷ 4 workers = 30 hours of actual elapsed work time. If the contractor instead sends a crew of 6, the same 120 person-hours divides differently: 120 ÷ 6 = 20 hours. This is the person-hours version of the same reciprocal logic — the total labor required is fixed, and elapsed time shrinks as more simultaneous workers share that fixed total, though real crews eventually hit diminishing returns from coordination overhead that this simplified model doesn&apos;t capture.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Combining two work rates: add the rates, then invert for time"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-understanding-work-rate-and-time-problems-combined-rate.svg"
      altText="A diagram showing Pipe A filling a tank alone in 6 hours at a rate of one-sixth tank per hour, and Pipe B filling the same tank alone in 3 hours at a rate of one-third tank per hour, with their rates added together to give a combined rate of one-half tank per hour, meaning both pipes working together fill the tank in 2 hours"
      />
      <p>
      Each pipe&apos;s individual time converts to a rate first; only the rates are added directly. The final combined time comes from inverting that summed rate — never from averaging or adding the original two times.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Averaging the individual times to estimate the combined time.", fix: "Convert each time to a rate (1 ÷ time), add the rates, then take the reciprocal of the sum (1 ÷ combined rate) — never average the raw times directly." },
      { mistake: "Forgetting to take the final reciprocal, and reporting the combined rate itself as if it were the combined time.", fix: "The combined rate (e.g. 1/2 tank per hour) is not the answer to 'how long does it take' — divide 1 by that rate to get the actual combined time (2 hours)." },
      { mistake: "Assuming doubling the workers always exactly halves the time, ignoring that workers may have different individual rates.", fix: "The 'double workers, halve time' shortcut only holds when all workers have identical rates — with mismatched individual speeds, add the actual individual rates rather than assuming a clean halving." },
      ]}
      />
      <MisconceptionCallout
      myth="If Pipe A takes 6 hours alone and Pipe B takes 3 hours alone, running them together takes the average of the two times, 4.5 hours."
      reality={<p>Time and rate are reciprocals, not linearly related quantities — what actually combines additively when two processes run simultaneously is the rate (fraction of the job per hour), not the raw time. Converting 6 hours and 3 hours to rates (1/6 and 1/3), adding them (1/2), and inverting (1 ÷ 1/2) gives the true combined time of 2 hours — noticeably faster than even the naive average, and always faster than the quicker of the two individual times alone.</p>}
      />

      <QuickCheck
      question="A job takes 120 total person-hours. With a crew of 4 workers at a comparable pace, how many elapsed hours does the job take?"
      options={[
      { text: "120 hours — the total person-hours figure directly gives the elapsed time regardless of crew size", correct: false, explanation: "Person-hours represents total labor, not elapsed time for any specific crew size — it needs to be divided by the number of simultaneous workers to find actual elapsed time." },
      { text: "30 hours — divide the total 120 person-hours by the 4 simultaneous workers", correct: true, explanation: "Correct. 120 person-hours ÷ 4 workers = 30 elapsed hours, assuming all 4 workers contribute at a comparable rate — the same reciprocal-style logic as the pipe-filling problem, just applied to a fixed total labor budget instead of two individual rates." },
      { text: "4 hours — one hour of elapsed time per worker on the crew", correct: false, explanation: "This confuses the number of workers with the elapsed time itself — the correct approach divides the fixed total labor (120 person-hours) by the crew size, not the other way around." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate combined time for two workers/machines working together"
      fields={[
      { key: "hoursA", label: "Worker/machine A's time alone (hours)", defaultValue: 6 },
      { key: "hoursB", label: "Worker/machine B's time alone (hours)", defaultValue: 3 },
      ]}
      resultLabel="Combined time working together (hours)"
      formula="combinedWorkRateHours"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Convert each individual time to a rate (1 ÷ time) before combining anything — never average or add raw times directly.",
      "Add the individual rates together, then take the reciprocal of that sum to get the true combined time.",
      "For staffing estimates, use total person-hours divided by the number of simultaneous workers to estimate elapsed time, keeping in mind real crews may see diminishing returns beyond a certain size.",
      "Sanity-check any combined-time answer: it should always be faster than (or equal to) the quickest individual worker or machine's own time alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you solve a work-rate problem with two workers or pipes?", answer: "Convert each individual time to a rate (1 ÷ time), add the two rates together, then take the reciprocal of that sum (1 ÷ combined rate) to find the combined time." },
      { question: "Why can't you just average two workers' individual times?", answer: "Because time and rate are reciprocals, not linearly related — what actually adds together when two processes work simultaneously is the rate, not the raw time. Averaging times gives a mathematically incorrect answer." },
      { question: "What are person-hours?", answer: "A unit of total labor equal to one person working for one hour. A job requiring 120 person-hours takes 30 elapsed hours with 4 simultaneous workers (120 ÷ 4), or 20 elapsed hours with 6 workers (120 ÷ 6)." },
      { question: "Can working together ever take longer than the fastest worker alone?", answer: "No, not under the standard work-rate model — adding any worker with a positive work rate can only increase the combined rate, meaning the combined time is always less than or equal to the fastest individual worker's time." },
      { question: "Is the combined work-rate formula related to anything in physics?", answer: "Yes — it's mathematically identical to the formula for total resistance of parallel resistors in an electrical circuit (1/R_total = 1/R1 + 1/R2), since both describe two independent pathways contributing simultaneously to one shared outcome." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
