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
  title: "What a Performance Review Actually Evaluates",
  category: "career-study-skills",
  order: 36,
  subtopic: "career-growth-and-development",
  tags: ["performance review", "performance evaluation", "annual review", "workplace feedback", "career growth"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "A performance review measures more than whether you hit your goals — most rubrics separately weigh results, behavioral competencies, and a forward-looking growth signal.",
  summary: "A performance review evaluates three mostly separate things that feel like one conversation: the results you produced against role expectations, the behavioral competencies (how the work got done), and a forward-looking signal about your trajectory — which is why hitting every numeric goal doesn't automatically guarantee the top rating.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "U.S. Bureau of Labor Statistics", url: "https://www.bls.gov" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
  ],
  seeAlso: [
    "career-study-skills/how-to-ask-for-a-raise-effectively",
    "career-study-skills/how-to-quantify-achievements-on-a-resume",
    "career-study-skills/what-a-skills-gap-analysis-actually-is",
  ],
  glossary: [
    { term: "Performance rubric", definition: "The set of criteria and weighting a manager or organization uses to turn a review period's work into a rating, usually spanning results, behaviors, and sometimes potential." },
    { term: "Calibration", definition: "A process where multiple managers compare their proposed ratings across a group of employees before finalizing them, to reduce any one manager's individual bias or leniency." },
    { term: "Competency", definition: "A behavioral or skill area — such as communication, collaboration, or problem-solving — evaluated separately from raw output or results." },
    { term: "Recency bias", definition: "The tendency to weigh the most recent weeks before a review more heavily than the full review period, which can distort a rating if it isn't corrected for." },
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
          "A performance review typically evaluates three separate layers — results against role expectations, behavioral competencies, and a forward-looking growth signal — not just whether targets were hit.",
          "Meeting every numeric goal doesn't guarantee a top rating if the competencies section (how the work got done) or the trajectory signal (readiness for more) pulls the overall rating down.",
          "Calibration — comparing ratings across employees before finalizing them — means a manager's initial assessment can still shift once it's checked against a broader group.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A performance review looks like one conversation or one document, but underneath it&apos;s usually scoring at least two or three separate things: what you produced (results), how you produced it (behaviors and collaboration), and where you seem to be headed (growth potential). Hitting your numbers covers only the first of those.</div>}
        detailed={<div className="prose-p">The clearest way to see this is as a <strong>feedback loop</strong>: the review period&apos;s actual work is <em>sensed</em> (observed output, peer input, documented incidents), <em>compared</em> against a <TermLink href="/career-study-skills/what-a-performance-review-actually-evaluates">performance rubric</TermLink> that usually weights results and <TermLink href="/career-study-skills/what-a-performance-review-actually-evaluates">competencies</TermLink> separately, and the resulting rating then feeds forward into a decision — pay, promotion eligibility, or a development plan. That comparison step is why two employees with identical output numbers can land on different ratings: the rubric is scoring more than the number. The edge case is <TermLink href="/career-study-skills/what-a-performance-review-actually-evaluates">calibration</TermLink> — in many organizations, a manager&apos;s initial rating isn&apos;t final. It gets compared against ratings for other employees at the same level, often in a room without the employee present, and can move up or down to fit an expected distribution before it&apos;s delivered. A manager telling you they rated you highly is describing their input to that process, not necessarily the output of it.</div>}
      />
      <FootnoteAside>Not every organization runs a formal calibration meeting — smaller employers and less structured teams may leave a manager&apos;s rating essentially final. Asking how ratings are finalized where you work is a reasonable, normal question.</FootnoteAside>

      <p>
        Once it&apos;s clear a review is scoring results and behavior and trajectory separately, the practical skill becomes tracking evidence for all three across the year, not just the numbers.
      </p>

      <QuickCheck
        question="Why can an employee who hit every numeric goal still receive a lower-than-expected performance rating?"
        options={[
          { text: "Because most rubrics also separately weigh behavioral competencies and sometimes a forward-looking growth signal, not just numeric results", correct: true, explanation: "Correct. Results are usually only one component of the rubric — competencies and trajectory can pull the overall rating in a different direction." },
          { text: "Because performance reviews are scored entirely at random regardless of actual work", correct: false, explanation: "Ratings aren't random — they follow a rubric, even when that rubric weighs more than raw output." },
          { text: "Because hitting a numeric goal automatically triggers a lower rating as a matter of policy", correct: false, explanation: "There's no such policy — the rubric simply includes more than the numeric result, so hitting one component doesn't guarantee the overall score." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Hitting the numbers, missing the competency weighting (baseline case)</h3>
      <p>
        An account manager hits every sales quota for the year and assumes a top rating is essentially locked in. Their rubric, however, weights results at 50%, competencies (collaboration, communication with internal teams) at 30%, and growth/development at 20%. Peer feedback during the review notes recurring friction with the fulfillment team. The competencies score comes in low enough that, even with a perfect results score, the blended rating lands at &quot;meets expectations&quot; rather than &quot;exceeds.&quot;
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A rating that shifts after calibration (edge case / variation)</h3>
      <div className="prose-p">
        A manager tells a direct report, ahead of the formal review, that they&apos;re planning to submit an &quot;exceeds expectations&quot; rating. During the calibration meeting, that rating is compared against every other employee at the same level across the department, and the distribution only allows a limited number of top ratings. The manager&apos;s proposed rating gets adjusted down to &quot;meets expectations&quot; to fit the group. The manager&apos;s original assessment of the work didn&apos;t change — the number that reaches the employee did, because of a step in the process the employee never saw.
      </div>
      <QuickCheck
        question="A manager privately says they're recommending a top rating, but the final rating the employee receives is lower. What most likely explains the difference?"
        options={[
          { text: "The manager lied about their original recommendation", correct: false, explanation: "It's more likely the rating moved during calibration than that the manager was dishonest — this is a known, common step in many review processes." },
          { text: "A calibration process compared the proposed rating against other employees at the same level and adjusted it to fit an expected distribution", correct: true, explanation: "Correct. Calibration is a normal step in many organizations where an individual manager's initial rating isn't automatically the final one." },
          { text: "The employee's numeric results changed after the manager's conversation with them", correct: false, explanation: "The results didn't change — the rating moved due to a comparison process, not a change in the underlying work." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Two employees, same output, different trajectory signal (real-world / applied case)</h3>
      <p>
        Two analysts on the same team produce nearly identical output over the year. One has documented instances of mentoring a newer teammate, proposing a process fix that was adopted by the team, and volunteering for a cross-functional project. The other did strong, comparable individual work but nothing beyond their assigned tasks. Both receive similar results scores, but only the first analyst&apos;s review includes language about being &quot;ready for expanded scope&quot; — the trajectory layer of the review, which becomes the deciding factor when a promotion slot opens later that year.
      </p>
      <QuickCheck
        question="Two employees produce nearly identical measurable output, but only one is described in their review as ready for expanded responsibility. What does this most likely reflect?"
        options={[
          { text: "A data entry error in one employee's review", correct: false, explanation: "This is a normal, expected outcome of the trajectory or growth component many reviews include separately from raw output, not a mistake." },
          { text: "The rubric's forward-looking growth or potential component picked up evidence — like mentoring or cross-functional initiative — beyond the two employees' comparable core output", correct: true, explanation: "Correct. Many rubrics include a trajectory signal distinct from results, and it can diverge even when output is nearly identical." },
          { text: "Performance reviews cannot include any forward-looking judgment, only backward-looking measurement", correct: false, explanation: "Many rubrics explicitly do include a forward-looking component — this is a real and common part of how reviews are structured." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The three layers a performance review usually scores separately"
        type="flow"
        svgSrc="/diagrams/career-study-skills-what-a-performance-review-actually-evaluates-structure.svg"
        altText="A structure diagram showing a performance review split into three separately weighted layers — results against role expectations, behavioral competencies, and a forward-looking growth signal — that combine into one final rating, which may then move again during a calibration step."
      />
      <p>
        The rating that eventually reaches an employee is the output of that whole stack, not a direct readout of any single layer.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Tracking only quantitative results throughout the year and having no evidence ready for the competencies or growth components.", fix: "Keep a running note of collaboration wins, feedback received, and initiative taken — not just output numbers — so evidence exists for every part of the rubric." },
          { mistake: "Assuming a manager's private, pre-review comment about a rating is the final number.", fix: "Understand that many organizations run a calibration step after the manager's initial assessment, which can move the number before it's delivered." },
          { mistake: "Treating a lower-than-expected rating as purely arbitrary or personal, without asking what specifically drove it.", fix: "Ask directly which part of the rubric — results, competencies, or trajectory — pulled the rating down, so the actual gap can be addressed." },
        ]}
      />
      <MisconceptionCallout
        myth="If you hit every goal on your scorecard, a top performance rating is essentially guaranteed."
        reality={<p>Most formal rubrics weight results alongside behavioral competencies and, in many organizations, a forward-looking growth or potential signal — and a calibration step can move even a strong manager recommendation. Two employees can post nearly identical numbers and land on different ratings because the rubric is measuring more than the number, and a rating can shift during a comparison process the employee never sees directly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Ask your manager or HR contact directly what the review rubric actually weighs — results, competencies, growth potential — and by roughly how much.",
          "Keep a running log throughout the year of both quantitative results and behavioral evidence (collaboration, feedback received, initiative taken).",
          "If a rating comes in lower than expected, ask specifically which rubric component drove it rather than assuming it was arbitrary.",
          "Read How to Ask for a Raise Effectively next to see how a strong review result actually translates into a compensation conversation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does a performance review actually measure?", answer: "Most formal reviews measure at least two things separately: results against role expectations, and behavioral competencies like collaboration and communication. Many also include a forward-looking growth or potential signal used for promotion planning." },
          { question: "Why did I get a lower rating even though I hit all my goals?", answer: "Hitting quantitative goals usually covers only the results portion of the rubric. A weaker competencies score, or a calibration step that adjusted the rating against other employees, can lower the overall result even with strong output." },
          { question: "What is calibration in a performance review?", answer: "Calibration is a process where multiple managers compare their proposed ratings for employees at the same level before finalizing them, to reduce individual manager bias — a manager's initial recommendation isn't always the final number." },
          { question: "Do soft skills count in a performance review?", answer: "Yes — most formal rubrics include a behavioral competencies component (communication, collaboration, problem-solving) that is scored separately from raw output or results." },
          { question: "How often are performance reviews usually done?", answer: "Practices vary by employer, but annual or semi-annual formal reviews are common, often supplemented by more frequent informal check-ins throughout the year." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
