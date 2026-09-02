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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How to Know When It's Actually Time to Change Jobs",
  category: "career-study-skills",
  order: 40,
  subtopic: "career-growth-and-development",
  tags: ["changing jobs", "job search timing", "career plateau", "job satisfaction", "career growth"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "It's usually time to change jobs when a gap in growth, pay, or fit is persistent rather than a temporary rough patch, and attempts to close it while staying haven't worked.",
  summary: "It's actually time to change jobs when the gap between what a role provides and what you need from it has been persistent across a real stretch of time — not just a rough week or a hard project — and you've tried a credible path to closing that gap while staying (a development conversation, a raise request, an internal move) without it working, which is different from a single bad stretch that will most likely pass.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics", url: "https://www.bls.gov" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
  ],
  seeAlso: [
    "career-study-skills/what-a-performance-review-actually-evaluates",
    "career-study-skills/lateral-move-vs-promotion-whats-the-difference",
    "career-study-skills/the-star-method-explained",
  ],
  glossary: [
    { term: "Structural misalignment", definition: "A persistent mismatch between what a role provides and what a person needs, that isn't tied to a single temporary event and doesn't resolve on its own over time." },
    { term: "Internal mobility", definition: "The practice of moving to a different role, team, or level within the same organization instead of leaving it, often used as a first attempt to close a persistent gap." },
    { term: "Career plateau", definition: "A sustained period without meaningful growth in scope, title, or compensation, despite continued strong performance." },
    { term: "Counteroffer", definition: "An improved offer — usually a raise, promotion, or changed conditions — made by a current employer after an employee signals they are considering or have accepted another job." },
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
          "A single bad week or a hard project is noise; a persistent, non-cyclical gap in growth, pay, or fit sustained across multiple review cycles is a real signal.",
          "Trying a credible path to closing the gap while staying — a direct conversation, a raise request, an internal move — and having it not work is a stronger indicator than never having tried.",
          "Sometimes the signal is external and structural (industry contraction, shrinking demand for a specific skill set) even when the day-to-day role and manager relationship are currently fine.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It&apos;s usually time to change jobs when the gap between what you need — growth, pay, fit with the work — and what the job is actually providing has lasted a while, not just a rough patch, and there&apos;s no real path to closing it by staying where you are.</div>}
        detailed={<div className="prose-p">Think of job satisfaction as a signal sampled over time, and the goal is separating real signal from ordinary noise. A single bad week, a demanding project, or a temporary conflict is <strong>noise</strong> — it moves the reading briefly but reverts. <TermLink href="/career-study-skills/how-to-know-when-its-time-to-change-jobs">Structural misalignment</TermLink> is different: title or compensation flat across multiple review cycles despite strong performance, a documented <TermLink href="/career-study-skills/how-to-know-when-its-time-to-change-jobs">career plateau</TermLink>, or a values or fit mismatch that persists regardless of the specific project or manager at the time. The second, sharper test is whether a credible attempt was made to close the gap while staying — a direct development conversation, a raise request, an attempt at <TermLink href="/career-study-skills/how-to-know-when-its-time-to-change-jobs">internal mobility</TermLink> — and it genuinely didn&apos;t move the needle, as opposed to never having tried. The edge case: sometimes the persistent signal isn&apos;t coming from the day-to-day job at all. An entire industry segment can contract, or demand for a specific skill set can shrink regionally, while a person&apos;s specific role and manager relationship remain fine in the moment — a real, structural signal from outside the company that still calls for proactive job search timing, even with no personal complaint about the current role.</div>}
      />
      <FootnoteAside>A counteroffer after resigning can be tempting, but it addresses only one input (usually pay) and rarely fixes a structural gap in growth or fit — worth knowing before treating a counteroffer as proof the underlying issue is resolved.</FootnoteAside>

      <p>
        Once satisfaction is treated as a signal to sample over time rather than a single reading, the practical test becomes: has this persisted across a real stretch, and has a genuine attempt to fix it while staying already failed?
      </p>

      <QuickCheck
        question="What generally distinguishes a real signal that it's time to change jobs from ordinary noise, like a single hard week or project?"
        options={[
          { text: "A signal that's persistent across a real stretch of time and doesn't resolve when the specific triggering event ends — unlike a temporary dip that reverts", correct: true, explanation: "Correct. Persistence and lack of reversion is what separates a structural signal from a temporary, situational dip." },
          { text: "Any negative feeling about work, regardless of how long it has lasted or what caused it", correct: false, explanation: "A single negative feeling, especially tied to a specific temporary event, is more consistent with noise than with a persistent structural signal." },
          { text: "Whether a coworker has recently changed jobs themselves", correct: false, explanation: "A coworker's unrelated decision isn't a meaningful signal about your own situation — the relevant test is your own persistent gap over time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A rough month against a solid two-year trend (baseline case)</h3>
      <p>
        An employee has a genuinely difficult month covering a demanding, understaffed project, and briefly feels certain it&apos;s time to leave. Looking back over the prior two years, though, their scope, title, and compensation have all grown steadily, and the current project is a known, temporary spike rather than the normal state of the role. Recognizing the difficult month as noise against an otherwise solid trend, they wait it out rather than acting on the temporary signal — and satisfaction returns to its usual level once the project wraps.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A flat trajectory with a failed attempt to fix it (edge case / variation)</h3>
      <div className="prose-p">
        An employee&apos;s title and pay have been flat for three consecutive review cycles despite consistently strong ratings. They raise it directly and specifically in a documented conversation with their manager, and separately explore an internal transfer to a role with more growth room. Neither path produces any real movement over the following two review cycles. Unlike the first example, this is a persistent gap (multiple cycles, not one bad stretch) with a credible internal attempt that genuinely didn&apos;t work — a much stronger case for looking outside the company.
      </div>
      <QuickCheck
        question="An employee's title and pay have been flat for three review cycles despite strong performance, and a direct conversation about it produced no change. How should this situation generally be read?"
        options={[
          { text: "As ordinary noise, similar to a single difficult project or a temporary rough patch", correct: false, explanation: "This spans multiple review cycles and included a genuine, failed attempt to fix it — that combination is closer to a persistent structural signal than a brief, temporary dip." },
          { text: "As a persistent structural signal, especially because a credible attempt to close the gap while staying didn't produce movement", correct: true, explanation: "Correct. Persistence across multiple cycles plus a real, failed attempt to resolve it internally is a stronger indicator than either factor alone." },
          { text: "As proof the employee's performance ratings must have actually been inflated", correct: false, explanation: "There's no basis in the scenario to assume the ratings were inflated — the situation is about the trajectory and response to a direct attempt to address it, not the accuracy of the ratings themselves." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A structural signal from outside the company (real-world / applied case)</h3>
      <p>
        An employee likes their manager, their day-to-day work is going well, and there&apos;s no specific internal complaint. At the same time, the broader industry segment they work in is visibly contracting, and job postings requiring their specific skill set have been shrinking regionally for over a year. Despite the current role feeling fine day to day, the signal here isn&apos;t coming from inside the job — it&apos;s coming from the surrounding market. Recognizing this as a real structural signal, they begin a proactive search well before any internal problem appears, rather than waiting for a personal complaint that may never come before the external situation forces the issue.
      </p>
      <QuickCheck
        question="An employee has no complaint about their current role or manager, but the broader industry for their specific skill set is visibly contracting. What does this situation call for?"
        options={[
          { text: "No action, since the day-to-day role and manager relationship are currently fine", correct: false, explanation: "A currently fine day-to-day experience doesn't rule out a real structural signal — in this case the signal is coming from outside the company, not from the immediate role." },
          { text: "Treating the external, industry-level trend as a real structural signal and beginning a proactive search, even without an internal complaint", correct: true, explanation: "Correct. A structural signal can originate outside the current role entirely — waiting for an internal problem to appear risks acting only after the external pressure has already become urgent." },
          { text: "Assuming industry-wide trends never affect an individual employee's specific situation", correct: false, explanation: "Industry-wide contraction and shrinking demand for a specific skill set are exactly the kind of structural, external signal worth acting on proactively." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Signal versus noise: reading job satisfaction over time"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-to-know-when-its-time-to-change-jobs-flow.svg"
        altText="A diagram showing job satisfaction sampled over time as a line with a brief temporary dip that reverts back to a stable trend, labeled as noise, next to a persistent downward gap that does not revert across multiple review cycles despite an attempted fix while staying, labeled as a real signal to change jobs."
      />
      <p>
        The practical test isn&apos;t how bad a single moment feels — it&apos;s whether the gap persists once the temporary trigger has passed, and whether a real attempt to close it while staying actually worked.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Deciding to leave based on a single bad week or a difficult project without checking it against the longer trend.", fix: "Look back over the past year or two of growth, pay, and fit before acting on a single rough stretch — a temporary dip usually reverts." },
          { mistake: "Leaving without first attempting a credible internal path to close the gap, like a direct conversation or an internal transfer.", fix: "Try a specific, documented internal attempt to fix the gap first — the result of that attempt is itself useful evidence either way." },
          { mistake: "Waiting for a personal, internal complaint before searching, even when an external, industry-level signal is already visible.", fix: "Treat a visible industry contraction or shrinking regional demand for your specific skill set as a real signal on its own, independent of how the current role feels day to day." },
        ]}
      />
      <MisconceptionCallout
        myth="If your current manager and day-to-day work are fine, there's no real reason to be job searching."
        reality={<p>A structural signal to change jobs doesn&apos;t always come from inside the current role — it can come from outside it, such as an entire industry segment contracting or demand for a specific skill set shrinking in a region, while the day-to-day manager relationship and current project both feel completely fine. Waiting for a personal, internal complaint to appear before acting on a visible external trend means starting the search later than the situation actually calls for.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before acting on a rough stretch, check it against the last one to two years of growth, pay, and fit to see whether it's a temporary dip or a persistent trend.",
          "If a gap looks persistent, try one credible internal path to close it first — a direct conversation, a raise request, or an internal transfer — and treat the result as real evidence.",
          "Separately check for external, structural signals (industry contraction, shrinking regional demand for your specific skill set) even if the internal situation currently feels fine.",
          "Read What a Performance Review Actually Evaluates next to make sure a flat trajectory is actually about growth and fit, not a rubric component you haven't addressed yet.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do I know if it's time to quit my job?", answer: "Look for a persistent gap in growth, pay, or fit sustained across a real stretch of time, plus a credible attempt to close that gap while staying that genuinely didn't work — a single bad week is usually noise, not a signal." },
          { question: "Is it normal to want to quit after a bad week?", answer: "Yes, and it's usually a temporary reaction rather than a reliable signal — checking the current feeling against the last year or two of actual growth and trajectory helps separate a passing dip from a real, persistent gap." },
          { question: "Should I try to negotiate before looking for a new job?", answer: "Generally yes — a direct, documented attempt to close the gap while staying (a raise request, a development conversation, an internal transfer) gives useful evidence either way, and a persistent gap that survives a real attempt is a stronger case for leaving than one that was never tested." },
          { question: "What are signs you've outgrown your job?", answer: "A career plateau — title and compensation flat across multiple review cycles despite strong performance — combined with a failed attempt to address it internally, or a visible external signal like shrinking demand for your specific skill set in your industry or region." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
