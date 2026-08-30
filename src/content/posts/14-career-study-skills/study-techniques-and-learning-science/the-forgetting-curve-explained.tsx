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
  title: "The Forgetting Curve Explained: Why You Forget What You Just Learned",
  category: "career-study-skills",
  order: 2,
  subtopic: "study-techniques-and-learning-science",
  tags: ["forgetting curve", "ebbinghaus", "memory science", "how to study", "retention"],
  date: "2026-08-30",
  updated: "2026-08-30",
  lastReviewed: "2026-08-30",
  excerpt: "The forgetting curve shows memory fades fastest right after learning, then slower over time — and each review flattens the curve further.",
  summary: "The forgetting curve is a model of how quickly newly learned information fades from memory over time — steep at first, then leveling off — and it's the reason review timing matters more than review quantity.",
  sources: [
    { label: "American Psychological Association — Memory and Learning", url: "https://www.apa.org/topics/memory" },
    { label: "National Library of Medicine (NIH) — PubMed Central", url: "https://www.ncbi.nlm.nih.gov/pmc/" },
    { label: "The Learning Scientists — Spaced Practice", url: "https://www.learningscientists.org/spaced-practice" },
  ],
  seeAlso: [
    "career-study-skills/how-spaced-repetition-actually-works",
    "career-study-skills/active-recall-vs-rereading-explained",
    "career-study-skills/why-last-minute-review-sessions-often-backfire",
  ],
  glossary: [
    { term: "Forgetting curve", definition: "A model, first described by psychologist Hermann Ebbinghaus, showing that memory retention drops sharply soon after learning and then declines more slowly over time." },
    { term: "Memory strength", definition: "How resistant a piece of information is to being forgotten — higher memory strength produces a flatter, slower-declining forgetting curve." },
    { term: "Relearning", definition: "Reviewing information after some of it has already been forgotten, which research shows both restores the memory and flattens the rate at which it fades next time." },
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
          "The forgetting curve shows retention dropping fastest in the hours right after learning, then leveling off — most of what you'll forget, you forget quickly.",
          "Each time you successfully relearn something, the next forgetting curve for that same material starts flatter and decays slower.",
          "The curve is the direct reason review timing matters: reviewing before the steep drop wastes effort, and reviewing after the drop means relearning from a bigger loss than necessary.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Learn something new today, and most of the loss doesn&apos;t happen slowly over weeks — it happens fast, often within the first day. The <TermLink href="/career-study-skills/the-forgetting-curve-explained">forgetting curve</TermLink> is just a graph of that pattern: a steep drop right after learning, then a much slower decline afterward. It explains why information you learned yesterday can already feel shaky, while something you&apos;ve reviewed several times over weeks feels solid.</div>}
        detailed={<div className="prose-p">This is the <strong>feedback loop</strong> model again, viewed from the decay side: each review is a chance to catch <TermLink href="/career-study-skills/the-forgetting-curve-explained">memory strength</TermLink> before it drops too far, and each successful catch (called <TermLink href="/career-study-skills/the-forgetting-curve-explained">relearning</TermLink>) resets the curve at a flatter starting slope than before. Psychologist Hermann Ebbinghaus first mapped this shape in the 1880s using his own memorized nonsense syllables, and modern research using more realistic material has repeatedly confirmed the same overall exponential-decay shape, even though exact decay rates vary by person and material. The edge case worth knowing: highly meaningful or well-connected information (tied to something you already understand) decays much slower than isolated facts — the curve&apos;s steepness isn&apos;t fixed, it depends heavily on how the information was encoded in the first place, not just how much time has passed.</div>}
      />
      <FootnoteAside>Ebbinghaus deliberately used meaningless syllables (like &quot;WID&quot; or &quot;ZOF&quot;) instead of real words specifically to strip away the effect of prior knowledge and meaning — a methodological choice that also means his original curve likely overstates how fast people forget genuinely meaningful material.</FootnoteAside>

      <p>
        Once the shape is visible — steep, then flattening, then reset flatter with each relearning — the practical advice built around it (review early, review before the steep part hits) stops sounding arbitrary.
      </p>

      <QuickCheck
        question="According to the forgetting curve, when does the largest share of memory loss for newly learned material typically occur?"
        options={[
          { text: "Evenly spread out over weeks and months after learning", correct: false, explanation: "The curve isn't a straight, even decline — most of the loss happens disproportionately early, not spread evenly across a long period." },
          { text: "In the hours and first day or two right after learning, with the rate of loss slowing considerably after that", correct: true, explanation: "Correct. The forgetting curve is steepest immediately after learning and flattens over time — that steep early window is exactly why an early first review matters so much." },
          { text: "Only once several months have passed since learning", correct: false, explanation: "By several months out, the curve has already flattened considerably — the steepest, fastest loss happens much earlier, right after initial learning." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A single unreviewed fact (baseline case)</h3>
      <div className="prose-p">
        A student learns one new fact and never reviews it again. Retention might sit near 100% right after learning, drop to roughly half within a day, and continue declining more gradually after that — following the classic steep-then-flat shape. Without any relearning event, the curve just keeps decaying toward zero rather than resetting.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same fact, reviewed once before the steep drop (edge case / variation)</h3>
      <div className="prose-p">
        The same fact, but this time reviewed the next day, right around where the curve would otherwise have dropped sharply. That single relearning event resets the curve — and critically, the new curve starts flatter than the original one, meaning the next natural decay happens more slowly. This is the mechanism behind why review timed near the steep part of the curve is disproportionately valuable compared to review timed later, once decay has already flattened out on its own.
      </div>
      <QuickCheck
        question="Why is a review timed to hit right before the steep part of the forgetting curve more valuable than the same review done a week later, after the curve has already flattened?"
        options={[
          { text: "Because a later review has no effect on memory at all", correct: false, explanation: "A later review still helps — it's not worthless — but it catches the memory after more has already been lost, and after the decay rate has already slowed on its own." },
          { text: "Because timing the review right before the steep drop catches the most retrieval effort and the most memory at risk, producing a bigger relearning boost than reviewing after the decay has already leveled off", correct: true, explanation: "Correct. The steep early portion of the curve is where the most memory is genuinely at risk — catching it there, with real retrieval effort, produces the strongest relearning effect." },
          { text: "Because reviews are only effective on even-numbered days", correct: false, explanation: "There's no such calendar-based rule — what matters is timing relative to the shape of the individual memory's own decay curve, not the day of the week." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two study plans for a certification exam (real-world / applied case)</h3>
      <p>
        Two people study the same 100 facts for a certification exam eight weeks out. One reviews everything once, in week one, and doesn&apos;t touch it again until the exam. The other reviews the material multiple times, spaced to land near where each fact&apos;s individual forgetting curve was about to drop steeply. By exam week, the first person is relearning most of the material almost from scratch, since their single early review did nothing to flatten the ongoing decay. The second person&apos;s facts have each been reset several times at a flatter and flatter slope, so far less has actually been lost by exam day, even though both people may have spent comparable total hours studying.
      </p>
      <QuickCheck
        question="Two students spend the same total number of hours studying for an exam eight weeks out, but distribute that time differently. Why would the one who reviews material multiple times, spaced across the eight weeks, likely retain more by exam day than the one who reviews everything once early on?"
        options={[
          { text: "Because total study hours are the only factor that determines retention", correct: false, explanation: "The premise specifically holds total hours equal — the outcome differs because of how those hours were distributed relative to each fact's own decay curve, not because of total time spent." },
          { text: "Because multiple spaced reviews repeatedly catch material near its steep decay point and reset the curve flatter each time, while a single early review lets the curve decay uninterrupted for the following seven weeks", correct: true, explanation: "Correct. Repeated, well-timed relearning events compound — each one flattens the subsequent decay, so less is lost overall by the time the exam arrives." },
          { text: "Because reviewing material more than once is against best practice and should be avoided", correct: false, explanation: "Multiple reviews, properly spaced, are exactly what strengthens long-term retention — this isn't a practice to avoid, it's the core mechanism the forgetting curve explains." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The forgetting curve: steep decay, then a flatter reset after each review"
        type="detail"
        svgSrc="/diagrams/career-study-skills-the-forgetting-curve-explained-decay-graph.svg"
        altText="A line graph showing memory retention on the vertical axis and time on the horizontal axis, with a first curve dropping steeply from near 100 percent and leveling off around 20 percent, then a review point that resets the curve higher and flatter, and a second, even flatter curve after a second review, illustrating that each relearning event reduces the future decay rate."
      />
      <p>
        Notice each new curve after a review doesn&apos;t just start higher — it&apos;s also flatter than the one before it. That flattening, not just the reset itself, is what makes repeated spaced review compound over time.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming forgetting happens at a steady, even rate over time.", fix: "Remember the curve is steepest right after learning — the first day matters disproportionately more than any single day weeks later." },
          { mistake: "Skipping an early review because the material still 'feels' fresh.", fix: "Feeling fresh doesn't mean the steep-decay window has passed — an early review, even before it feels necessary, is what prevents the sharpest losses." },
          { mistake: "Treating one review as 'done' regardless of how much time has passed since.", fix: "Each review only flattens the curve that follows it — a single review doesn't prevent forgetting indefinitely, it delays and slows the next round of decay." },
        ]}
      />
      <MisconceptionCallout
        myth="If you learned something well the first time, you shouldn't need to review it again."
        reality={<p>Even well-learned material follows a forgetting curve — &quot;learning it well&quot; affects how flat the curve starts, not whether one exists at all. Skipping review because initial learning felt solid is exactly how strongly-learned material still quietly fades within days, since the steep part of the curve doesn&apos;t care how confident the learner felt at the time.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate remaining retention from the forgetting curve"
        description="A simplified exponential model: retention = e^(-time elapsed / memory strength). Higher memory strength means slower decay."
        fields={[
          { key: "elapsedHours", label: "Hours since learning", defaultValue: 24 },
          { key: "memoryStrengthHours", label: "Memory strength (hours; higher = more durable)", defaultValue: 48 },
        ]}
        resultLabel="Estimated retention remaining (%)"
        formula="forgettingCurveRetentionPercent"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Schedule a first review within a day of learning something you need to keep, since that's where the steepest loss otherwise happens.",
          "Don't judge whether you need to review based on how confident you currently feel — schedule review based on elapsed time instead.",
          "After each successful review, notice the material feels easier to hold onto — that's the flattened curve, and it's real evidence the next interval can stretch further.",
          "Read How Spaced Repetition Actually Works next to see how review timing is scheduled systematically around this exact curve.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the forgetting curve in simple terms?", answer: "It's a model showing that newly learned information is forgotten quickly at first, then more slowly over time, rather than fading at a steady, even rate." },
          { question: "Who discovered the forgetting curve?", answer: "Psychologist Hermann Ebbinghaus first described it in the 1880s, using memorized nonsense syllables to study memory decay without the influence of prior meaning or context." },
          { question: "Does reviewing material reset the forgetting curve completely?", answer: "It resets retention upward and, importantly, also makes the next decay slower — each successful relearning event produces a flatter curve than the one before it." },
          { question: "Why do I forget things faster right after learning them than weeks later?", answer: "The forgetting curve is steepest immediately after learning and flattens out over time — most of the loss for unreviewed material happens early, which is why an early first review matters disproportionately." },
          { question: "Does the forgetting curve apply the same way to all types of information?", answer: "No — well-connected, meaningful information tends to decay slower than isolated facts, so the curve's steepness varies by how deeply the material was understood, not just by elapsed time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
