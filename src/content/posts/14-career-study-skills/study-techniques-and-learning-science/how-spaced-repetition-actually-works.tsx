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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Spaced Repetition Actually Works (And Why Cramming Fails)",
  category: "career-study-skills",
  order: 1,
  subtopic: "study-techniques-and-learning-science",
  tags: ["spaced repetition", "study techniques", "memory science", "how to study", "learning science"],
  date: "2026-08-30",
  updated: "2026-08-30",
  lastReviewed: "2026-08-30",
  excerpt: "Spaced repetition works by reviewing information right before you're about to forget it, which strengthens memory more than reviewing it while it's still fresh.",
  summary: "Spaced repetition is a study method that spreads review sessions out over increasing intervals of time, timed to hit just before you'd naturally forget the material — which strengthens long-term memory far more than reviewing the same material repeatedly in one sitting.",
  sources: [
    { label: "American Psychological Association — Memory and Learning", url: "https://www.apa.org/topics/memory" },
    { label: "The Learning Scientists — Spaced Practice", url: "https://www.learningscientists.org/spaced-practice" },
    { label: "National Library of Medicine (NIH) — PubMed Central", url: "https://www.ncbi.nlm.nih.gov/pmc/" },
  ],
  seeAlso: [
    "career-study-skills/the-forgetting-curve-explained",
    "career-study-skills/active-recall-vs-rereading-explained",
    "career-study-skills/the-pomodoro-technique-explained",
  ],
  glossary: [
    { term: "Spaced repetition", definition: "A study technique that schedules review sessions at increasing time intervals, timed to occur just before the material would otherwise be forgotten." },
    { term: "Ease factor", definition: "A multiplier used in spaced-repetition scheduling that determines how much longer the next review interval should be, based on how easily the material was recalled last time." },
    { term: "Retrieval strength", definition: "How easily a memory can currently be recalled — distinct from how deeply it's stored, and the specific thing spaced repetition is designed to rebuild each time it starts to fade." },
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
          "Spaced repetition works by timing review sessions to land right before you're about to forget something, not at random or fixed daily intervals.",
          "Each successful recall makes the next forgetting curve flatter, which is why review intervals grow over time — a fact remembered easily gets reviewed less often, not more.",
          "Cramming builds short-term familiarity but skips the retrieval effort that actually strengthens long-term memory, which is why crammed material fades within days.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/career-study-skills/how-spaced-repetition-actually-works">Spaced repetition</TermLink> means reviewing something more than once, but spreading those reviews out over days or weeks instead of doing them all in one sitting. The spacing isn&apos;t random — each review is timed to happen right around when you&apos;d naturally start forgetting the material. Catching it at that exact point, rather than while it&apos;s still fresh, is what makes the memory stick harder each time.</div>}
        detailed={<div className="prose-p">This is the <strong>feedback loop</strong> mental model applied to memory: each review is a check on current <TermLink href="/career-study-skills/how-spaced-repetition-actually-works">retrieval strength</TermLink>, and the system adjusts the next interval based on the result. If recall was easy, the next interval stretches further (captured by an <TermLink href="/career-study-skills/how-spaced-repetition-actually-works">ease factor</TermLink> that multiplies the previous interval); if recall was hard or wrong, the interval resets shorter. The edge case that trips people up: reviewing something too early, before any forgetting has happened, barely helps at all, because there&apos;s no retrieval effort involved — you&apos;re recognizing the answer, not reconstructing it. The effortful reconstruction, not the exposure itself, is what strengthens the memory trace.</div>}
      />
      <FootnoteAside>The core scheduling idea behind most modern spaced-repetition software traces back to the SM-2 algorithm, published in 1987 for the SuperMemo program — a simplified version of it (multiply the previous interval by an ease factor that adjusts based on recall difficulty) is still the basis for many flashcard apps today.</FootnoteAside>

      <p>
        Once the timing mechanism is visible — review just before forgetting, not on a fixed schedule — it explains why spaced repetition feels harder in the moment than rereading, and why that difficulty is exactly the point.
      </p>

      <QuickCheck
        question="Why does reviewing material immediately after first learning it help less than reviewing it a few days later?"
        options={[
          { text: "Because immediate review involves little to no forgetting yet, so there's no real retrieval effort — you're recognizing the answer, not reconstructing it", correct: true, explanation: "Correct. Spaced repetition's benefit comes from effortful recall after some forgetting has occurred. Reviewing too soon skips that retrieval effort entirely." },
          { text: "Because the brain physically can't process the same information twice in one day", correct: false, explanation: "There's no such physical limit — the issue isn't capacity, it's that immediate review doesn't require the effortful retrieval that strengthens the memory." },
          { text: "Because immediate review and delayed review produce identical results either way", correct: false, explanation: "They don't — research consistently shows spaced review outperforms massed (immediate, repeated) review for long-term retention." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A single flashcard&apos;s growing intervals (baseline case)</h3>
      <div className="prose-p">
        A student learns a new vocabulary flashcard on day 0 and gets it right on the first review, one day later. Because recall was easy, the next interval stretches to 3 days, then 7, then 14, then roughly a month — each successful review pushing the next one further out. By the tenth review, months may separate two sessions on the exact same card, because each success is evidence the memory has gotten more durable, not less.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A missed review resets the interval (edge case / variation)</h3>
      <div className="prose-p">
        The same student, on a different card, fails a review after a 14-day gap — they simply can&apos;t recall the answer. Instead of continuing to stretch the interval, the system drops it back down to a short interval, often 1 day, and rebuilds from there. This isn&apos;t a penalty; it&apos;s the system correctly recognizing that its estimate of retrieval strength was wrong, and recalibrating rather than ignoring the miss.
      </div>
      <QuickCheck
        question="A flashcard that was on a 14-day review interval gets answered incorrectly. What should happen to its next interval?"
        options={[
          { text: "It should continue increasing regardless, since the schedule is fixed once set", correct: false, explanation: "A fixed schedule ignoring actual recall performance defeats the purpose of spaced repetition, which adapts to how well the memory is actually holding up." },
          { text: "It should shrink back down to a short interval, since the failed recall shows the memory wasn't as strong as the previous interval assumed", correct: true, explanation: "Correct. A missed review is new evidence that retrieval strength was overestimated — resetting to a shorter interval rebuilds the memory correctly instead of compounding a bad estimate." },
          { text: "The card should be removed from review entirely after any failure", correct: false, explanation: "Removing it discards the chance to actually relearn the material — the system is designed to recover from a miss, not abandon the item." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Preparing for a licensing exam months out (real-world / applied case)</h3>
      <p>
        Someone studying for an exam six months away starts reviewing core material early and spaces reviews out as they succeed, rather than saving everything for the final two weeks. By the time the exam arrives, the highest-value facts have been through five or six spaced reviews each, at exactly the intervals where they were starting to fade — producing durable recall under exam pressure, instead of the shallow familiarity that a two-week cram session produces and that tends to collapse under time pressure or stress.
      </p>
      <QuickCheck
        question="Why does starting spaced review six months before an exam tend to outperform an intensive two-week cram session at the end, even with similar total study hours?"
        options={[
          { text: "Because the six-month approach involves more total hours of studying overall", correct: false, explanation: "The comparison assumes similar total hours — the difference isn't quantity of time, it's how that time is distributed and whether retrieval effort is involved." },
          { text: "Because spacing reviews across months lets each review land after real forgetting has started, producing the effortful recall that builds durable memory — cramming skips that by reviewing everything while it's still fresh", correct: true, explanation: "Correct. The same total hours produce very different retention depending on timing — spaced, effortful recall over months builds durability that massed review in a short window doesn't." },
          { text: "Because exams administered later in the year are inherently easier", correct: false, explanation: "Exam difficulty isn't the variable here — the difference is in how the studying itself was timed and structured." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How review intervals stretch out after each successful recall"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-spaced-repetition-actually-works-interval-growth.svg"
        altText="A timeline diagram showing five review points for the same flashcard, with the gap between each successful review growing longer each time: one day, then three days, then seven days, then fourteen days, then about a month, illustrating that spaced repetition intervals expand after each successful recall instead of staying fixed."
      />
      <p>
        The growing gaps aren&apos;t arbitrary — each one reflects a system re-estimating how long a memory will hold, based directly on the last review&apos;s outcome.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Reviewing everything every day 'to be safe.'", fix: "Trust the growing intervals — reviewing material you already recall easily wastes time that could go toward material actually at risk of being forgotten." },
          { mistake: "Treating a missed review as a failure to fix by cramming it repeatedly in one sitting.", fix: "Let the interval reset and rebuild gradually — repeated same-day review after a miss produces the same shallow familiarity cramming does." },
          { mistake: "Starting spaced repetition too close to a deadline for the intervals to actually stretch out.", fix: "Start as early as realistically possible — the long-interval reviews that build the strongest memory only happen if there's enough calendar time left for them." },
        ]}
      />
      <MisconceptionCallout
        myth="Spaced repetition just means studying a little bit every day instead of all at once."
        reality={<p>Daily review is only part of it, and often the wrong part once a memory is strong. The actual mechanism is variable timing tied to individual performance — easy recalls get pushed further apart, hard ones get pulled closer together. A flashcard app that reviews every card every day regardless of how well you know it isn&apos;t really using spaced repetition; it&apos;s just repetition.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate the next review interval"
        description="A simplified version of the ease-factor scheduling many spaced-repetition tools use."
        fields={[
          { key: "previousIntervalDays", label: "Previous interval (days)", defaultValue: 7 },
          { key: "easeFactor", label: "Ease factor (typically 1.3–2.5)", defaultValue: 2.0, step: 0.1 },
        ]}
        resultLabel="Next review interval"
        formula="spacedRepetitionNextIntervalDays"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "For any material you need to retain long-term, schedule your first review 1–2 days after first learning it, not the same day.",
          "When a review feels easy, let the interval stretch further rather than reviewing it again soon out of caution.",
          "When a review fails, don't panic-review it repeatedly — let it reset to a short interval and rebuild naturally.",
          "Read The Forgetting Curve Explained next to see the underlying decay pattern spaced repetition is designed around.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is spaced repetition in simple terms?", answer: "It's a study method that reviews material at growing time intervals, timed to hit right before you'd naturally forget it, instead of reviewing everything on a fixed daily schedule." },
          { question: "Why does spaced repetition work better than cramming?", answer: "Because it forces effortful recall after some forgetting has already begun, which strengthens long-term memory. Cramming reviews material while it's still fresh, which builds short-term familiarity without the retrieval effort that makes memory durable." },
          { question: "How long should the first review interval be?", answer: "Commonly 1 to 3 days after first learning something, though it depends on how well it was learned initially — the exact number matters less than making sure some forgetting has started before the review happens." },
          { question: "Does spaced repetition work for things besides flashcards?", answer: "Yes — the underlying principle (spacing reviews to hit points of partial forgetting) applies to any material that needs long-term retention, including reading notes, formulas, or skills practice, not just discrete flashcard facts." },
          { question: "What happens if I miss a scheduled review?", answer: "The interval typically resets shorter rather than the material being lost entirely — a missed review is treated as new information about how strong the memory actually is, not a permanent setback." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
