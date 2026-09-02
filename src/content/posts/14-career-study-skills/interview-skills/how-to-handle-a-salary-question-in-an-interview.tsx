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
  title: "How to Handle a Salary Question in an Interview",
  category: "career-study-skills",
  order: 18,
  subtopic: "interview-skills",
  tags: ["salary question", "salary negotiation", "job interview", "salary range", "compensation discussion"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Handling a salary question well means answering with a researched range instead of a single fixed number, because a range preserves room to negotiate on both sides.",
  summary: "Handling a salary question in an interview means answering with a researched range rather than a single fixed number and anchoring that range to market data instead of a personal minimum — a single number gives up negotiating room on both sides, while a range keeps the conversation open without under- or over-committing.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics — Occupational Employment and Wage Statistics", url: "https://www.bls.gov/oes/" },
    { label: "U.S. Equal Employment Opportunity Commission (EEOC)", url: "https://www.eeoc.gov/" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org/" },
  ],
  seeAlso: [
    "career-study-skills/why-companies-ask-behavioral-interview-questions",
    "career-study-skills/the-star-method-explained",
    "career-study-skills/what-a-panel-interview-actually-tests",
  ],
  glossary: [
    { term: "Salary range", definition: "A stated low-to-high band of acceptable compensation, used instead of a single fixed number to preserve room for negotiation." },
    { term: "Anchoring", definition: "The tendency for the first number mentioned in a negotiation to influence the range the rest of the conversation revolves around." },
    { term: "Market rate", definition: "The typical compensation for a given role, experience level, and location, based on aggregated real salary data rather than any one employer's or candidate's individual number." },
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
          "Answering with a researched range instead of a single number preserves negotiating room on both sides of the conversation.",
          "Whoever states a number first sets an anchoring point that the rest of the negotiation tends to revolve around — which is why it can help to redirect the question back before naming a figure.",
          "A range should be based on researched market rate for the role, location, and experience level — not on a personal minimum, which reveals the floor you're willing to accept.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When an interviewer asks about salary expectations, answering with a single specific number locks you into that figure — say too low and you leave money on the table; say too high and you might be screened out before a real conversation happens. A <TermLink href="/career-study-skills/how-to-handle-a-salary-question-in-an-interview">salary range</TermLink>, based on real research into what the role typically pays, keeps the conversation open on both sides.</div>}
        detailed={<div className="prose-p">The mechanism here is <TermLink href="/career-study-skills/how-to-handle-a-salary-question-in-an-interview">anchoring</TermLink>: whichever number enters the conversation first tends to pull the rest of the negotiation toward it, even when both sides know it&apos;s just an opening figure. A single number you state becomes that anchor immediately. A range does the same job with more flexibility, and stating it as tied to <TermLink href="/career-study-skills/how-to-handle-a-salary-question-in-an-interview">market rate</TermLink> (&quot;based on my research for this role and location&quot;) rather than a personal number makes it harder for the other side to read your actual floor. The edge case: if an employer asks for expectations very early, before enough is known about the role&apos;s scope, it&apos;s reasonable to redirect — asking about the budgeted range for the role first, or asking to revisit compensation once the role is better understood — rather than anchoring on incomplete information.</div>}
      />
      <FootnoteAside>Some jurisdictions have salary transparency or salary history laws that require employers to disclose a pay range in the posting or prohibit them from asking about past salary — checking local requirements can change how this conversation unfolds before it even starts.</FootnoteAside>

      <p>
        Once the anchoring mechanism is visible, the practical approach follows: research a realistic market range first, and answer with that range rather than a single guessed or minimum-driven number.
      </p>

      <QuickCheck
        question="Why does answering a salary question with a range tend to work better than answering with a single specific number?"
        options={[
          { text: "Because interviewers are legally required to accept whichever number is offered first", correct: false, explanation: "There's no such requirement — the reasoning is about negotiation dynamics, not a legal rule." },
          { text: "Because a range preserves flexibility for both sides, while a single number either undersells the candidate or risks being screened out if it's too high", correct: true, explanation: "Correct. A range keeps the conversation open without giving up negotiating room the way a single fixed figure does." },
          { text: "Because a range is always a higher number than any single figure would be", correct: false, explanation: "A range isn't inherently higher — its value is flexibility and framing, not simply inflating the number." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Answering with a researched, market-based range (baseline case)</h3>
      <p>
        A candidate researches the typical pay for a similar role, experience level, and location before the interview and finds a realistic range. When asked about salary expectations, they answer: &quot;Based on my research for this role and my experience level, I&apos;m looking at a range of [low] to [high].&quot; This keeps the conversation open — the employer can respond anywhere within or near that range without either side having committed to one fixed figure.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Being asked the salary question before the role&apos;s scope is clear (edge case / variation)</h3>
      <div className="prose-p">
        An interviewer asks about salary expectations in a first screening call, before the candidate has learned much about the role&apos;s actual scope or responsibilities. Instead of naming a number based on incomplete information, the candidate redirects: &quot;I&apos;d like to understand the role&apos;s full scope a bit more before landing on a number — could you share the budgeted range for this position?&quot; This is a reasonable, common response that avoids anchoring on a guess before enough information exists to make it accurate.
      </div>
      <QuickCheck
        question="A candidate is asked about salary expectations very early, before learning much about the role's actual responsibilities. What's a reasonable way to handle this?"
        options={[
          { text: "Name a specific number immediately, since any delay looks evasive", correct: false, explanation: "Naming a number without enough information risks anchoring on a poorly informed guess — a brief redirect is a common and reasonable alternative." },
          { text: "Politely redirect, asking about the role's scope or the employer's budgeted range before committing to a figure", correct: true, explanation: "Correct. This avoids anchoring on incomplete information while still engaging with the question professionally." },
          { text: "Refuse to discuss salary at any point in the interview process", correct: false, explanation: "Avoiding the topic entirely isn't practical or expected — the goal is timing the conversation well, not avoiding it." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Handling a lowball offer after a strong range was given (real-world / applied case)</h3>
      <p>
        A candidate states a researched range of [low] to [high] earlier in the process. The eventual offer comes in below even the low end of that range. Because the candidate anchored on real market data rather than a personal minimum, they have a clear, specific basis to reference in a counter: &quot;Based on my research for this role and level, I was expecting something closer to [low]–[high] — is there flexibility to get closer to that range?&quot; A candidate who never stated a range, or who understated it out of nervousness, has a much weaker position to negotiate from at this stage.
      </p>
      <QuickCheck
        question="Why does having stated a researched range earlier in the process help a candidate if the eventual offer comes in low?"
        options={[
          { text: "Because it legally obligates the employer to match the stated range", correct: false, explanation: "Stating a range doesn't create a legal obligation on the employer's part — its value is as a clear, specific reference point for negotiation, not a binding commitment." },
          { text: "Because it gives the candidate a concrete, previously stated, market-based reference point to negotiate from, rather than starting the pushback from nothing", correct: true, explanation: "Correct. A specific earlier anchor gives real leverage for a counter, compared to having given no number or an unnecessarily low one." },
          { text: "Because employers always increase an offer automatically once any range has been mentioned", correct: false, explanation: "There's no automatic increase — the range simply gives the candidate a stronger, specific basis to negotiate from." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Single number vs. researched range: how each affects negotiating room"
        type="comparison"
        svgSrc="/diagrams/career-study-skills-how-to-handle-a-salary-question-in-an-interview-comparison.svg"
        altText="A comparison diagram showing a single stated salary number as a fixed point with no room to move in either direction, next to a researched salary range shown as a band with room to negotiate both upward and downward within it."
      />
      <p>
        The range doesn&apos;t just sound softer — it structurally leaves room the single number doesn&apos;t, on both sides of the eventual number that gets agreed on.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Naming a single, specific number out of nervousness instead of a researched range.", fix: "Prepare a realistic market-based range in advance so you're not improvising a single figure under pressure." },
          { mistake: "Basing the range on personal minimum needs rather than actual market data.", fix: "Research typical pay for the role, location, and experience level — a range anchored to your minimum reveals your floor rather than your value." },
          { mistake: "Answering the salary question before understanding the role's actual scope.", fix: "It's reasonable to briefly redirect and ask about scope or budgeted range first if the question comes very early in the process." },
        ]}
      />
      <MisconceptionCallout
        myth="Bringing up salary first or naming a high number will make you look greedy and hurt your chances."
        reality={<p>A well-researched, market-based range presented professionally is a normal and expected part of most hiring processes, not a red flag. What tends to hurt a candidate is a number with no research behind it, or extreme discomfort discussing compensation at all — both signal less preparation, not more humility. Employers generally expect candidates to know their market value and state it clearly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Find the midpoint of a researched salary range"
        description="A quick reference point when preparing how to discuss a salary range in an interview."
        fields={[
          { key: "rangeMin", label: "Researched range — low end", defaultValue: 65000 },
          { key: "rangeMax", label: "Researched range — high end", defaultValue: 78000 },
        ]}
        resultLabel="Range midpoint"
        formula="salaryRangeMidpoint"
        formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Research typical pay for the specific role, location, and experience level before any interview where salary might come up.",
          "Prepare a range, not a single number, and be ready to frame it as based on research rather than a personal minimum.",
          "If asked very early, before the role's scope is clear, it's reasonable to briefly redirect the question.",
          "Read What a Panel Interview Actually Tests next to prepare for compensation questions that come up in a group interview setting.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Should I give a salary range or a specific number in an interview?", answer: "A researched range is generally better — it preserves negotiating room on both sides, while a single number either undersells you or risks screening you out if it's higher than expected." },
          { question: "What should a salary range be based on?", answer: "Real market data for the specific role, location, and experience level — not a personal minimum, which reveals your floor rather than reflecting your actual market value." },
          { question: "What if I'm asked about salary before I know enough about the role?", answer: "It's reasonable to briefly redirect and ask about the role's scope or the employer's budgeted range before committing to a number, especially if the question comes very early in the process." },
          { question: "Is it okay to ask the employer what the salary range is instead of answering first?", answer: "Yes, and it's increasingly common — asking for the budgeted range shifts the anchoring in your favor and, in some regions, employers are required to disclose it upfront." },
          { question: "Can I negotiate after receiving a job offer if I gave a range earlier?", answer: "Yes — a previously stated, research-based range gives you a specific, credible reference point to negotiate from if the actual offer comes in below what you indicated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
