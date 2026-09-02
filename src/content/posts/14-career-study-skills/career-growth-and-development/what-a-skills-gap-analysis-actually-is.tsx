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
  title: "What a Skills Gap Analysis Actually Is (And How to Do One)",
  category: "career-study-skills",
  order: 39,
  subtopic: "career-growth-and-development",
  tags: ["skills gap analysis", "career development", "skills assessment", "professional development", "career growth"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "A skills gap analysis lists what a target role actually requires, rates your current level honestly, and treats the difference as a specific, prioritized to-do list.",
  summary: "A skills gap analysis means defining the specific skills and proficiency level a target role or goal actually requires, rating your current level in each honestly, and treating the measurable gap between the two — prioritized by how much each gap actually blocks the goal — as a concrete development plan, rather than a vague, unranked sense that you need to \"get better\" at your job.",
  sources: [
    { label: "O*NET Online (U.S. Department of Labor)", url: "https://www.onetonline.org" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
  ],
  seeAlso: [
    "career-study-skills/lateral-move-vs-promotion-whats-the-difference",
    "career-study-skills/what-applicant-tracking-systems-actually-do",
    "career-study-skills/how-to-ask-for-a-raise-effectively",
  ],
  glossary: [
    { term: "Skills gap", definition: "The measurable difference between the skill level a role or goal requires and a person's current skill level in that same area." },
    { term: "Proficiency level", definition: "A defined rating of how well someone can perform a given skill, often expressed on a scale such as novice, competent, proficient, and expert." },
    { term: "Skills inventory", definition: "A documented list of the skills a person currently has, along with a rating of their level in each, used as the current-state side of a gap analysis." },
    { term: "Gating skill", definition: "A required skill without which a candidate or employee won't be considered for a role at all, regardless of how strong their other skills are." },
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
          "A skills gap analysis compares a specific target skill list and proficiency level against your honestly rated current level, turning a vague sense of needing to improve into a concrete, ranked list.",
          "Not all gaps are equally worth closing — a gating skill that's required for every posting in a target role blocks progress in a way a merely nice-to-have gap doesn't.",
          "The comparison only works if the target side is real and specific — pulled from actual job postings, an occupational profile, or a manager's stated expectations, not a general impression of what the role probably needs.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A skills gap analysis means listing the specific skills a target role actually requires, honestly rating where you currently stand on each one, and using the difference between the two lists as your actual to-do list — instead of a general feeling that you should &quot;get better&quot; at your job.</div>}
        detailed={<div className="prose-p">The mechanism is a <strong>feedback loop</strong>: first, define the target — a specific list of skills and required <TermLink href="/career-study-skills/what-a-skills-gap-analysis-actually-is">proficiency levels</TermLink> pulled from real job postings, an occupational profile, or a manager&apos;s stated expectations. Second, sense the current state — build a <TermLink href="/career-study-skills/what-a-skills-gap-analysis-actually-is">skills inventory</TermLink> using self-assessment plus corroborating evidence like past feedback or a completed project. Third, compare the two per skill to find the actual size of each <TermLink href="/career-study-skills/what-a-skills-gap-analysis-actually-is">skills gap</TermLink> — not a single overall &quot;I need to improve&quot; feeling, but a specific list with specific sizes. Fourth, act on the largest or most-blocking gaps first, then reassess periodically as the loop repeats. The edge case: not every gap deserves equal priority. A skill that shows up as a preference in one job posting is a different kind of gap than a <TermLink href="/career-study-skills/what-a-skills-gap-analysis-actually-is">gating skill</TermLink> that every posting for the target role lists as required — closing the second kind unblocks progress; closing the first kind is optional polish.</div>}
      />
      <FootnoteAside>A skills gap analysis and a performance review often overlap in the skills they cover, but they answer different questions — a review looks backward at how you performed in your current role, while a gap analysis looks forward at what a specific target role or goal still requires.</FootnoteAside>

      <p>
        Once the four-step loop is visible, the practical skill becomes pulling a real, specific target list — not a vague impression of the role — and being honest, not generous, when rating the current-state side.
      </p>

      <QuickCheck
        question="What makes a skills gap analysis different from simply feeling like you should improve at your job?"
        options={[
          { text: "It defines a specific target skill list and required level, compares it against an honestly rated current state, and produces a specific, sized list of gaps to prioritize", correct: true, explanation: "Correct. The value is in making the comparison specific and measurable, rather than relying on a general, unranked sense of needing to improve." },
          { text: "It requires a certified third party to formally test every skill before any gap can be identified", correct: false, explanation: "A gap analysis can be done through honest self-assessment plus corroborating evidence — it doesn't require formal third-party certification for every skill." },
          { text: "It only applies to skills that appear on a resume, not skills used day-to-day in a current role", correct: false, explanation: "A gap analysis can and often should include day-to-day skills relevant to a target role, not only resume-listed ones." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding two clear gaps against a real target (baseline case)</h3>
      <p>
        An operations analyst wants to move into a more data-focused role. They pull five real job postings for that target role and list the five skills that appear most consistently: spreadsheet analysis, a specific query language, a dashboarding tool, stakeholder presentations, and basic statistics. Rating themselves honestly against each on a simple scale, they find they&apos;re already strong in spreadsheet analysis and presentations, adequate in statistics, but genuinely weak in the query language and the dashboarding tool. The analysis turns a vague &quot;I should learn more data skills&quot; into two specific, named gaps to close.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Confusing a nice-to-have gap with a gating one (edge case / variation)</h3>
      <div className="prose-p">
        A candidate targeting a project coordinator role lists eight &quot;gaps&quot; after reading a handful of job postings, including one specific presentation software mentioned in a single posting as a preference. Meanwhile, a project management certification appears as a required qualification in nearly every posting for the role, and the candidate doesn&apos;t currently have it. Spending the next few months learning the niche software while leaving the certification gap untouched closes a low-priority gap and leaves the one gap that&apos;s actually screening candidates out unaddressed.
      </div>
      <QuickCheck
        question="A candidate has a long list of skill gaps from several job postings, including one required certification that nearly every posting lists as mandatory. How should these gaps generally be prioritized?"
        options={[
          { text: "Equally, working through the full list in whatever order it was written down", correct: false, explanation: "Treating every gap as equal priority ignores that a required, gating skill blocks consideration for the role in a way an optional preference doesn't." },
          { text: "The gating skill — the one listed as required across nearly every posting — should generally be prioritized over a skill mentioned as a preference in only one posting", correct: true, explanation: "Correct. A gating skill blocks candidacy for the target role, making it a higher-priority gap than a merely nice-to-have one." },
          { text: "Only skills the candidate personally finds interesting, regardless of how the postings describe them", correct: false, explanation: "Prioritizing by personal interest rather than by how the target role's postings actually weight each skill defeats the purpose of comparing against a real target." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing a targeted plan against a vague one (real-world / applied case)</h3>
      <p>
        Two employees both want to move into a team-lead role within a year. One does a structured gap analysis: pulls the actual internal job description, an O*NET-style occupational profile for supervisory skills, and a manager conversation about specific expectations — then closes the two gating gaps it surfaces (a scheduling certification and formal delegation experience) within six months. The other spends the same period taking a broad mix of courses based on a general sense of what leaders &quot;probably need,&quot; without comparing against a specific target. When the role opens, the first employee meets every required qualification; the second has learned real things, but not necessarily the ones the actual posting required.
      </p>
      <QuickCheck
        question='Why might a structured skills gap analysis lead to being ready for a target role faster than a broad, unranked effort to "improve leadership skills" generally?'
        options={[
          { text: "Because a structured analysis compares effort against a specific, real target and prioritizes the gaps that actually block the role, rather than developing skills based on a general impression", correct: true, explanation: "Correct. Comparing against a real, specific target and prioritizing blocking gaps is what makes the effort land on what the role actually requires." },
          { text: "Because broad skill-building is never useful for career advancement under any circumstances", correct: false, explanation: "Broad development isn't useless — the issue in this comparison is that it wasn't targeted against the specific role's actual requirements, not that broad learning has no value at all." },
          { text: "Because only internal job descriptions, never external postings or occupational profiles, can be used as a valid target for a gap analysis", correct: false, explanation: "A valid target can come from internal job descriptions, external postings, occupational profiles, or a manager's stated expectations — the requirement is specificity, not a particular single source." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The skills gap analysis loop"
        type="flow"
        svgSrc="/diagrams/career-study-skills-what-a-skills-gap-analysis-actually-is-flow.svg"
        altText="A flow diagram showing a skills gap analysis as a repeating loop: define the target role's required skills and levels, assess your current skill levels, compare the two to find sized gaps, prioritize and close the highest-priority gaps, then reassess and repeat."
      />
      <p>
        The loop repeats — a gap analysis isn&apos;t a one-time list, since both the target (as roles evolve) and the current state (as skills develop) keep changing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Basing the target skill list on a general impression of the role instead of real job postings or a documented occupational profile.", fix: "Pull the target skill list from several real postings, an occupational profile, or a direct conversation with a manager about actual expectations." },
          { mistake: "Rating your own current skill level generously instead of honestly, or without any corroborating evidence.", fix: "Cross-check self-ratings against past feedback, completed work, or a skills test where one's available — an inflated current-state rating hides real gaps." },
          { mistake: "Treating every identified gap as equally important, regardless of whether it's required for the role or just a preference.", fix: "Separate gating skills — required across most postings for the target role — from nice-to-have skills, and prioritize closing the gating ones first." },
        ]}
      />
      <MisconceptionCallout
        myth="A skills gap analysis is the same thing as making a list of skills you'd like to learn or improve."
        reality={<p>A real skills gap analysis compares two specific, sized lists — a target role&apos;s required skills and levels, and your honestly rated current levels — rather than a general wish list of skills that sound useful. Without a real, specific target to compare against, there&apos;s no actual gap being measured, just a list of things that seem valuable in the abstract, which is a much weaker basis for deciding what to spend limited development time on.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Pull a specific target skill list for your goal from several real job postings, an occupational profile, or a direct conversation with a manager.",
          "Rate your current level in each target skill honestly, cross-checked against real evidence like past feedback or completed work.",
          "Sort the resulting gaps by how many postings or requirements list each one as required, and prioritize closing the gating gaps first.",
          "Read Lateral Move vs. Promotion next to see whether a lateral move could be a faster way to close a gap that's blocking your target role.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a skills gap analysis?", answer: "A structured comparison between the specific skills and proficiency level a target role requires and your current, honestly rated skill level in each — used to produce a prioritized, specific development plan." },
          { question: "How do you identify skill gaps for a promotion?", answer: "Pull the target role's required skills from a real internal job description, an occupational profile, or a direct conversation with a manager, then rate your current level in each against that specific list." },
          { question: "What's the difference between a skills gap analysis and a performance review?", answer: "A performance review looks backward at how you performed in your current role. A skills gap analysis looks forward, comparing your current skills against what a different, target role or goal actually requires." },
          { question: "How often should you redo a skills gap analysis?", answer: "Whenever the target changes (a new role you're pursuing, a role's requirements shifting) or roughly once or twice a year, since both required skills and your own current level tend to change over time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
