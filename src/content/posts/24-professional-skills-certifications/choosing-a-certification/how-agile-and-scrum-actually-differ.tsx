import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Agile and Scrum Actually Differ",
  category: "professional-skills-certifications",
  order: 4,
  subtopic: "choosing-a-certification",
  tags: ["agile", "scrum", "project management", "kanban", "certifications"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "Agile is a set of values and principles for building things in small, feedback-driven steps. Scrum is one specific framework for doing that, with fixed roles, events, and sprints. Most agile teams use Scrum, but they aren't the same thing.",
  summary: "Agile is a philosophy of software and product development defined by the 2001 Manifesto for Agile Software Development's four values and twelve principles, which favor working results, customer collaboration, and responding to change delivered in short, iterative cycles; it prescribes no specific roles, meetings, or timeboxes. Scrum is one concrete framework for putting agile into practice, defined by the Scrum Guide (Schwaber and Sutherland, 2020 edition) with three accountabilities (Product Owner, Scrum Master, Developers), five events (the Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), and three artifacts (Product Backlog, Sprint Backlog, Increment), in Sprints of one month or less. Other agile approaches include Kanban and Extreme Programming, and certifications split along the same line: Scrum certifications test the framework, while broader agile credentials such as PMI-ACP cover multiple approaches.",
  sources: [
    { label: "Manifesto for Agile Software Development (2001)", url: "https://agilemanifesto.org/" },
    { label: "Principles behind the Agile Manifesto", url: "https://agilemanifesto.org/principles.html" },
    { label: "The Scrum Guide (2020) — Ken Schwaber and Jeff Sutherland", url: "https://scrumguides.org/scrum-guide.html" },
  ],
  seeAlso: [
    "professional-skills-certifications/what-project-management-certification-actually-teaches-you",
    "professional-skills-certifications/how-to-actually-choose-between-competing-certifications",
    "professional-skills-certifications/what-a-certificate-actually-differs-from-a-certification",
    "career-study-skills/what-makes-a-meeting-actually-effective",
  ],
  glossary: [
    { term: "Agile", definition: "An approach to building products in short, iterative cycles with frequent feedback, defined by the four values and twelve principles of the 2001 Agile Manifesto." },
    { term: "Scrum", definition: "A specific lightweight framework for agile work, defined by the Scrum Guide, built around fixed-length Sprints, three accountabilities, five events, and three artifacts." },
    { term: "Sprint", definition: "In Scrum, a fixed period of one month or less in which the team turns selected work into a usable Increment. A new Sprint starts right after the previous one ends." },
    { term: "Product Owner", definition: "The Scrum accountability for maximizing the value of the product, mainly by ordering and communicating the Product Backlog." },
    { term: "Scrum Master", definition: "The Scrum accountability for helping the team and organization use Scrum effectively, removing impediments, and coaching, rather than managing the team's tasks." },
    { term: "Kanban", definition: "An agile method that visualizes work on a board and limits how much work is in progress at once, using continuous flow rather than fixed Sprints." },
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

export const quiz: QuizBankItem[] = [
  {"question": "What is the simplest way to describe the difference between agile and Scrum?", "difficulty": "easy", "options": [{"text": "Agile is the philosophy; Scrum is one framework for practicing it", "correct": true, "explanation": "Scrum is to agile roughly what a specific recipe is to a cooking style."}, {"text": "They're two names for the same thing", "correct": false, "explanation": "Scrum has defined roles and events; agile doesn't."}, {"text": "Scrum is the philosophy; agile is a framework", "correct": false, "explanation": "It's the other way around."}]},
  {"question": "How many values does the Agile Manifesto list?", "difficulty": "easy", "options": [{"text": "Four", "correct": true, "explanation": "Backed by twelve principles."}, {"text": "Twelve", "correct": false, "explanation": "Twelve is the number of principles."}, {"text": "Three", "correct": false, "explanation": "Three is the number of Scrum artifacts."}]},
  {"question": "What is the maximum length of a Sprint in the Scrum Guide?", "difficulty": "easy", "options": [{"text": "One month", "correct": true, "explanation": "Sprints are one month or less; two weeks is common but not required."}, {"text": "Exactly two weeks", "correct": false, "explanation": "Two weeks is popular, not mandated."}, {"text": "Six months", "correct": false, "explanation": "Far too long to get the frequent feedback Scrum relies on."}]},
  {"question": "Which of these is one of Scrum's three accountabilities?", "difficulty": "medium", "options": [{"text": "Product Owner", "correct": true, "explanation": "Along with Scrum Master and Developers."}, {"text": "Project Manager", "correct": false, "explanation": "Scrum doesn't define a project manager role."}, {"text": "Agile Director", "correct": false, "explanation": "Not a Scrum Guide role."}]},
  {"question": "A team uses a Kanban board with work-in-progress limits and no Sprints. Is it agile?", "difficulty": "medium", "options": [{"text": "It can be, since Kanban is a different way to practice agile", "correct": true, "explanation": "Agile doesn't require Sprints; Scrum does."}, {"text": "No, agile requires Sprints", "correct": false, "explanation": "Sprints are a Scrum feature, not an agile requirement."}, {"text": "No, agile requires a Scrum Master", "correct": false, "explanation": "That's also Scrum-specific."}]},
  {"question": "What is the Daily Scrum's timebox in the Scrum Guide?", "difficulty": "medium", "options": [{"text": "15 minutes", "correct": true, "explanation": "A short planning check for the Developers, not a status report to a manager."}, {"text": "One hour", "correct": false, "explanation": "Much longer than the guide specifies."}, {"text": "There's no limit", "correct": false, "explanation": "It's explicitly timeboxed."}]},
  {"question": "Which is NOT one of Scrum's three artifacts?", "difficulty": "hard", "options": [{"text": "Gantt chart", "correct": true, "explanation": "Scrum's artifacts are the Product Backlog, Sprint Backlog, and Increment."}, {"text": "Product Backlog", "correct": false, "explanation": "That is an artifact."}, {"text": "Increment", "correct": false, "explanation": "That is an artifact."}]},
  {"question": "A team holds daily standups and two-week Sprints but never changes plans based on customer feedback. Is it really practicing agile?", "difficulty": "hard", "options": [{"text": "Not in spirit, since responding to change is a core agile value", "correct": true, "explanation": "The rituals without the feedback loop are sometimes called 'cargo cult' agile."}, {"text": "Yes, the meetings are what make it agile", "correct": false, "explanation": "Agile is defined by values, not meetings."}, {"text": "Yes, as long as there's a Scrum Master", "correct": false, "explanation": "Roles alone don't make a team agile."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Agile is a philosophy: four values and twelve principles from the 2001 Agile Manifesto about delivering in small steps and adapting to feedback.",
          "Scrum is one specific framework for doing agile, with defined roles, meetings, artifacts, and Sprints of one month or less.",
          "Every Scrum team is meant to be agile, but an agile team might use Kanban or another approach instead. Certifications split along the same line.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of agile as a style of cooking, like &quot;cook with fresh ingredients and taste as you go.&quot; It tells you what to value, not exactly what to do. Scrum is a specific recipe in that style: it tells you who does what, which meetings to hold, and how long each cycle lasts. You can cook in the fresh-and-taste style without that particular recipe, and you can follow the recipe so mechanically that you forget to taste anything. That&apos;s the relationship. When a job ad says &quot;agile environment,&quot; it usually means Scrum or something close to it, but the words aren&apos;t interchangeable.</div>}
        detailed={<div className="prose-p">The Agile Manifesto (2001) states four value preferences: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. Its twelve principles add specifics like delivering working software frequently, welcoming changing requirements, and regular team reflection. Notably, it defines no roles, meetings, or iteration length. The Scrum Guide (2020) does: three accountabilities (Product Owner, Scrum Master, Developers); five events (the Sprint as a container, plus Sprint Planning, a 15-minute Daily Scrum, Sprint Review, and Sprint Retrospective); and three artifacts (Product Backlog, Sprint Backlog, and Increment), each with a commitment (Product Goal, Sprint Goal, Definition of Done). Scrum describes itself as a lightweight framework built on empiricism: transparency, inspection, and adaptation. Other agile approaches make different choices; Kanban, for instance, uses continuous flow and work-in-progress limits instead of Sprints. This distinction shapes the certification market too: Scrum-specific credentials test the Scrum Guide, while broader credentials, including those covered in <TermLink href="/professional-skills-certifications/what-project-management-certification-actually-teaches-you">project management certification</TermLink>, span several approaches.</div>}
      />
      <FootnoteAside>Scrum actually predates the Agile Manifesto. Ken Schwaber and Jeff Sutherland presented it in 1995, and both were among the seventeen people who signed the Manifesto in 2001. Scrum was one of several existing methods whose shared ideas the Manifesto put into words.</FootnoteAside>

      <p>If you&apos;re weighing a Scrum credential against a broader agile or project management one, the questions in <TermLink href="/professional-skills-certifications/how-to-actually-choose-between-competing-certifications">choosing between competing certifications</TermLink> apply directly: what employers in your field ask for, what the exam actually tests, and what it costs to keep current.</p>

      <QuickCheck
        question="Which of these is defined by the Scrum Guide but not by the Agile Manifesto?"
        options={[
          { text: "A Sprint of one month or less", correct: true, explanation: "Correct. The Manifesto says to deliver frequently but sets no timebox. The Sprint is Scrum's specific mechanism." },
          { text: "Valuing responding to change over following a plan", correct: false, explanation: "That's one of the Manifesto's four values." },
          { text: "Valuing working software", correct: false, explanation: "Also a Manifesto value. Scrum inherits it rather than defining it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A Scrum team&apos;s two weeks (baseline case)</h3>
      <div className="prose-p">A product team runs two-week Sprints. On day one, Sprint Planning picks items from the Product Backlog, which the Product Owner keeps in priority order, and sets a Sprint Goal. Each morning the Developers hold a 15-minute Daily Scrum to adjust their plan. On the last day, they show the working Increment to stakeholders at the Sprint Review, then hold a Retrospective about how they worked. This is agile (short cycles, feedback, adaptation) done the Scrum way.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An agile support team with no Sprints (variation)</h3>
      <div className="prose-p">An IT support team gets unpredictable tickets all day. Planning two weeks ahead makes little sense, so they use a Kanban board with a limit of five tickets &quot;in progress&quot; at once, pull new work as capacity frees up, and review their cycle times every month to improve. No Scrum Master, no Sprints, and it&apos;s still agile: small batches, visible work, continuous improvement.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: &quot;Scrum&quot; in name only (applied case)</h3>
      <div className="prose-p">A company renames its weekly status meeting &quot;Sprint Review,&quot; makes the project manager the &quot;Scrum Master&quot; who assigns tasks, and fixes a 12-month feature list up front that never changes. It has Scrum&apos;s vocabulary but none of the Manifesto&apos;s values: no customer feedback loop and no adapting the plan. This pattern is common enough that practitioners call it &quot;cargo cult agile,&quot; and it&apos;s worth recognizing in interviews and job descriptions.</div>

      <QuickCheck
        question="Why is the support team in Example 2 still considered agile without using Scrum?"
        options={[
          { text: "It works in small batches, makes work visible, and regularly adapts how it works, which matches agile values", correct: true, explanation: "Correct. Agile is judged by values and principles, not by whether Scrum's specific events are present." },
          { text: "Any team using a board is automatically agile", correct: false, explanation: "Tools don't define agility; the feedback and adaptation do." },
          { text: "It isn't agile, because agile requires Sprints", correct: false, explanation: "Sprints are a Scrum feature. The Manifesto doesn't mention them." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Agile is the umbrella; Scrum is one framework under it"
        type="comparison"
        svgSrc="/diagrams/professional-skills-certifications-how-agile-and-scrum-actually-differ-comparison.svg"
        altText="A two-column comparison. Agile: 4 values and 12 principles from the 2001 Agile Manifesto, no required roles, meetings or sprint length, and an umbrella covering Scrum, Kanban, XP and more. Scrum: defined by the Scrum Guide, 3 accountabilities, 5 events and 3 artifacts, and fixed sprints of one month or less."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'agile' and 'Scrum' interchangeably in interviews or on a resume.", fix: "Say which framework you actually used (Scrum, Kanban, a hybrid) and what your role was. Hiring managers notice the precision." },
          { mistake: "Treating the Scrum Master as the team's manager who assigns tasks.", fix: "Per the Scrum Guide, the Scrum Master coaches and removes impediments; Developers decide how to do the work." },
          { mistake: "Buying a Scrum certification when your target jobs mostly ask for broader project management credentials.", fix: "Check real job postings in your field first, then pick the credential they name." },
        ]}
      />
      <MisconceptionCallout
        myth="Agile and Scrum are the same thing."
        reality={<p>Agile is defined by a short manifesto of values and principles and deliberately prescribes no process. Scrum is a specific framework with defined accountabilities, events, and artifacts, set out in the Scrum Guide. Scrum is the most widely used way to practice agile, which is why the terms get blurred, but Kanban, Extreme Programming, and hybrids are agile too, and a team can run every Scrum meeting while ignoring the values that make it agile.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Read the Agile Manifesto's one page and the Scrum Guide (under 15 pages). Both are free and are the primary sources every certification builds on.",
          "Look at 10 job postings for your target role and note whether they ask for Scrum specifically, agile generally, or a project management credential.",
          "If you're on a team now, identify which framework it actually uses and which Scrum events or agile principles are missing.",
          "Pick a certification only after that check, using our guide to choosing between competing certifications.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between agile and Scrum?", answer: "Agile is a set of values and principles for iterative, feedback-driven work. Scrum is one specific framework for applying them, with set roles, events, artifacts, and Sprints of one month or less." },
          { question: "Can you be agile without Scrum?", answer: "Yes. Kanban, Extreme Programming, and many hybrid approaches are agile without using Scrum's Sprints or roles." },
          { question: "Is Scrum a project management methodology?", answer: "The Scrum Guide calls it a lightweight framework rather than a full methodology. It deliberately leaves many practices to the team and doesn't define a project manager role." },
          { question: "How long is a Sprint?", answer: "One month or less, per the Scrum Guide. Two weeks is a common choice, but it's not required." },
          { question: "Should I get a Scrum or an agile certification?", answer: "Look at what employers in your field actually list. Scrum-specific certifications test the Scrum Guide, while broader agile and project management credentials cover several approaches." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
