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
  title: "How to Ask for a Raise Effectively (Timing and Framing)",
  category: "career-study-skills",
  order: 37,
  subtopic: "career-growth-and-development",
  tags: ["asking for a raise", "salary negotiation", "compensation review", "merit increase", "career growth"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Asking for a raise effectively means timing the request around the compensation budget cycle and framing it around demonstrated value, not personal need.",
  summary: "Asking for a raise effectively means two things working together: timing the request before the compensation budget for the cycle is already committed, and framing it around documented impact and market value rather than personal financial need — because most managers operate inside a fixed pool of raise money they don't fully control.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "U.S. Bureau of Labor Statistics — Occupational Employment and Wage Statistics", url: "https://www.bls.gov/oes/" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
  ],
  seeAlso: [
    "career-study-skills/what-a-performance-review-actually-evaluates",
    "career-study-skills/how-to-handle-a-salary-question-in-an-interview",
    "career-study-skills/lateral-move-vs-promotion-whats-the-difference",
  ],
  glossary: [
    { term: "Merit increase pool", definition: "The total budget an organization sets aside for raises across a group of employees in a given cycle, from which individual increases are drawn." },
    { term: "Compensation cycle", definition: "The recurring schedule — often annual — on which an organization plans, approves, and finalizes salary changes." },
    { term: "Off-cycle adjustment", definition: "A raise granted outside the normal compensation cycle, typically tied to a real change in role scope, a retention risk, or a market correction rather than routine merit." },
    { term: "Scope of role", definition: "The breadth of responsibility, decision-making authority, or impact currently attached to a position, used as the basis for a raise argument grounded in value rather than personal need." },
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
          "A raise request is constrained by a compensation budget most managers don't fully control — timing it before that budget is locked matters as much as the strength of the case.",
          "Framing the request around documented impact and market value, not personal financial need, matches what most managers are actually authorized to evaluate.",
          "Off-cycle raises happen, but typically only when there's a real trigger — a documented scope increase, a retention risk, or a clear market gap — not just a well-timed ask alone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Asking for a raise effectively means two things working together: timing it before your company&apos;s raise budget for the cycle is already decided, and framing it around the value you&apos;ve added — documented achievements and market data — instead of what you personally need financially.</div>}
        detailed={<div className="prose-p">The mechanism is an <strong>abstraction layer</strong> most employees don&apos;t see: a manager usually can&apos;t hand out a raise from nowhere. They&apos;re drawing from a <TermLink href="/career-study-skills/how-to-ask-for-a-raise-effectively">merit increase pool</TermLink> set during a <TermLink href="/career-study-skills/how-to-ask-for-a-raise-effectively">compensation cycle</TermLink> — a fixed budget planned, often months in advance, above the manager&apos;s own discretion. A strong case delivered after that pool is already allocated can be genuinely agreed with and still go nowhere until the next cycle, simply because the money isn&apos;t there yet. Framing matters for a related reason: what a manager is formally authorized to evaluate is usually market value and demonstrated <TermLink href="/career-study-skills/how-to-ask-for-a-raise-effectively">scope of role</TermLink>, not personal expenses — a need-based case doesn&apos;t map onto the criteria the request actually gets judged against. The edge case is the <TermLink href="/career-study-skills/how-to-ask-for-a-raise-effectively">off-cycle adjustment</TermLink>: these do happen outside the normal budget window, but almost always tied to a specific, real trigger — a documented and lasting increase in responsibilities, a credible retention risk, or a clear gap versus current market rate — not simply because an employee asked at an inconvenient time.</div>}
      />
      <FootnoteAside>Some organizations publish or will state their compensation cycle timing if asked directly — knowing that date is one of the most useful, concrete facts to gather before deciding when to raise the conversation.</FootnoteAside>

      <p>
        Once the budget-cycle mechanism is visible, the practical approach follows: find out roughly when the cycle is planned, and bring a value-based case with a specific number before that window closes.
      </p>

      <QuickCheck
        question="Why can a manager agree a raise is deserved and still be unable to grant it right away?"
        options={[
          { text: "Because managers are never actually authorized to approve raises under any circumstances", correct: false, explanation: "Many managers do have real authority to approve raises — the limiting factor is usually the size of the available budget pool, not a total lack of authority." },
          { text: "Because the raise is usually funded from a fixed compensation budget planned during a cycle, and a request after that budget is committed may have to wait for the next cycle regardless of merit", correct: true, explanation: "Correct. The budget constraint, not the strength of the case, is often what determines timing." },
          { text: "Because raises can only be approved once a full calendar year has passed since the employee's hire date", correct: false, explanation: "There's no such universal rule — timing is generally tied to the organization's compensation cycle, not a fixed anniversary requirement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Timing a request ahead of the budget cycle (baseline case)</h3>
      <p>
        An employee learns that annual compensation planning typically begins in early autumn. Several weeks before that, they schedule a conversation with their manager, bring three documented achievements from the past year with measurable results, cite a researched market range for their role and location, and ask for a specific percentage increase. Because the request lands before the budget is finalized, the manager has room to actually include it in the proposal they submit.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A real scope change outside the normal cycle (edge case / variation)</h3>
      <div className="prose-p">
        Midway through the year, an employee&apos;s team loses a headcount and they absorb a significant, lasting share of that person&apos;s responsibilities for the following several months. Rather than waiting for the next annual cycle, they raise an off-cycle adjustment request, framed specifically around the documented, ongoing increase in scope — not around waiting or personal need. Because there&apos;s a real, specific trigger behind the request, it has a realistic chance of being considered outside the normal compensation window.
      </div>
      <QuickCheck
        question="What generally makes an off-cycle raise request realistic, as opposed to one that's unlikely to be approved outside the normal cycle?"
        options={[
          { text: "Asking politely and expressing that the timing is inconvenient but important to the employee personally", correct: false, explanation: "Politeness alone isn't the deciding factor — off-cycle requests are generally evaluated against whether there's a real, specific trigger behind them." },
          { text: "A documented, lasting change such as a real increase in scope, a retention risk, or a clear market gap, rather than just wanting to move ahead of schedule", correct: true, explanation: "Correct. Off-cycle adjustments are typically tied to a specific, real trigger, not simply to a request made outside the normal window." },
          { text: "Waiting for the employee's work anniversary date regardless of what has actually changed in their role", correct: false, explanation: "An anniversary date by itself isn't a trigger for an off-cycle raise — what matters is a real, documented change, not the calendar date." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Two employees, same performance, different outcomes (real-world / applied case)</h3>
      <p>
        Two employees with comparable performance both decide to ask for a raise. The first raises it right after the annual merit pool has already been finalized and frames it around rising personal expenses. The second raises it two months earlier, before planning begins, framed around a specific project&apos;s measurable results and a researched market comparison. The first request is met with genuine sympathy but no available budget until the following cycle. The second is folded into that cycle&apos;s proposal. The underlying performance was similar — the outcome diverged almost entirely on timing and framing.
      </p>
      <QuickCheck
        question="Two employees with similar performance ask for a raise with very different outcomes. What's the most likely explanation, based on how these requests are usually processed?"
        options={[
          { text: "One employee's work was actually much stronger, even though it appeared similar on paper", correct: false, explanation: "The scenario is specifically about comparable performance — the divergence is best explained by timing relative to the budget cycle and how the request was framed." },
          { text: "The employee who asked before the compensation budget was finalized, with a value-based case, had a real chance to be included in that cycle, while the other had to wait regardless of merit", correct: true, explanation: "Correct. Timing relative to the budget cycle, plus framing around value rather than need, is what most directly explains the different outcomes here." },
          { text: "Raise requests are approved in the order they are received company-wide, regardless of timing within the cycle", correct: false, explanation: "There's no such first-come, first-served company-wide queue — the constraint is the budget cycle itself, not request order." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where a raise request lands relative to the compensation budget cycle"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-to-ask-for-a-raise-effectively-flow.svg"
        altText="A flow diagram showing an annual compensation cycle as a timeline with a budget-planning window, illustrating that a raise request made before that window closes can be included in the cycle's proposal, while a request made after the budget is finalized typically has to wait for the next cycle unless a real off-cycle trigger applies."
      />
      <p>
        The same case, made a few weeks apart, can land in two different budget windows entirely — which is why timing carries as much weight as the argument itself.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Asking for a raise right after the annual compensation budget has already been finalized.", fix: "Find out roughly when your organization plans compensation for the cycle, and raise the request a few weeks before that planning begins." },
          { mistake: "Framing the request around personal financial need instead of documented impact and market value.", fix: "Lead with specific, measurable achievements and a researched market range — the criteria a manager is actually authorized to evaluate against." },
          { mistake: "Asking for an off-cycle raise with no specific, real trigger behind it, such as a genuine scope change.", fix: "Reserve off-cycle requests for a documented change — a lasting increase in responsibilities, a retention risk, or a clear market gap." },
        ]}
      />
      <MisconceptionCallout
        myth="If your work is good enough, when you ask for a raise shouldn't matter."
        reality={<p>Most raises are funded from a fixed compensation budget pool that gets planned during a specific cycle, often well above any individual manager&apos;s day-to-day discretion. A manager can genuinely agree a raise is deserved and still have no budget available until the next cycle if the request comes after that pool is already committed. Strong performance is necessary, but timing the request relative to the budget cycle is a separate, real factor in whether it can be acted on right away.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate a requested raise"
        description="Turn a current salary and a requested percentage increase into the new salary amount you'd be asking for."
        fields={[
          { key: "currentSalary", label: "Current salary", defaultValue: 68000 },
          { key: "requestedIncreasePercent", label: "Requested increase (%)", defaultValue: 8 },
        ]}
        resultLabel="New salary if approved"
        formula="requestedRaiseNewSalary"
        formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find out roughly when your organization's compensation budget cycle is planned, and aim to raise the conversation a few weeks before it begins.",
          "Document three or more specific, measurable achievements from the past review period, along with a researched market range for your role and location.",
          "Draft the ask around demonstrated value and a specific requested number, not personal financial need.",
          "Read What a Performance Review Actually Evaluates next to make sure your case addresses every part of how you'll actually be assessed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When is the best time to ask for a raise?", answer: "Shortly before your organization's compensation budget is finalized for the cycle — often a few weeks to a couple of months ahead of annual planning — rather than after the budget has already been committed." },
          { question: "How much of a raise should I ask for?", answer: "A specific percentage or dollar figure grounded in researched market data for your role, location, and experience level, paired with documented achievements — a vague or unresearched number is harder for a manager to act on." },
          { question: "What if my company says there's no budget for raises?", answer: "Ask when the next compensation cycle is planned and whether an off-cycle adjustment is possible if there's a real trigger, such as a documented increase in your role's scope." },
          { question: "Should I mention another job offer when asking for a raise?", answer: "It can work as a genuine market-gap signal, but it also carries real risk and can change the relationship even if it succeeds — a well-documented, value-based case is generally the safer and more sustainable approach." },
          { question: "How do I justify a raise request?", answer: "Lead with specific, measurable achievements from the review period and a researched market comparison for your role — criteria tied to demonstrated value, which is what most managers are actually authorized to evaluate a raise against." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
