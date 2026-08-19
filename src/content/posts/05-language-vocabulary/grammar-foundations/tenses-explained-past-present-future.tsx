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
  title: "Tenses Explained (past, present, future)",
  category: "language-vocabulary",
  order: 3,
  subtopic: "grammar-foundations",
  tags: ["grammar", "verb tenses", "past present future", "English verbs"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "English has three time periods but twelve verb tenses — here's how simple, continuous, perfect, and perfect continuous forms actually work, with real examples for each.",
  summary: "English tenses combine three time periods (past, present, future) with four aspects (simple, continuous, perfect, perfect continuous) to produce twelve total verb tenses, each signaling something specific about when and how an action happens.",
  sources: [
    { label: "Cambridge Dictionary — English Grammar: Verb Tenses", url: "https://dictionary.cambridge.org/grammar/british-grammar/verbs" },
    { label: "Purdue Online Writing Lab — Verb Tenses", url: "https://owl.purdue.edu/owl/general_writing/grammar/verb_tenses.html" },
  ],
  seeAlso: [
    "language-vocabulary/parts-of-speech-explained",
    "language-vocabulary/active-vs-passive-voice",
    "language-vocabulary/common-grammar-mistakes",
  ],
  glossary: [
    { term: "Tense", definition: "The grammatical form of a verb that shows when an action happens — past, present, or future." },
    { term: "Aspect", definition: "How an action unfolds over time — whether it's a single event, ongoing, completed, or ongoing-and-completed. Combines with tense to produce forms like 'was walking' or 'had walked.'" },
    { term: "Auxiliary verb", definition: "A helping verb (be, have, will) used with a main verb to build compound tenses, like 'is' in 'is running' or 'had' in 'had finished'." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
      "English has three time periods (past, present, future) but twelve verb tenses, because each time period combines with four different 'aspects' describing how the action unfolds.",
      "The four aspects — simple, continuous, perfect, and perfect continuous — aren't extra grammar to memorize for its own sake; each one answers a specific question about timing that the others can't.",
      "Most tense mistakes happen from picking the wrong aspect, not the wrong time period — knowing you need 'past' isn't enough if you pick 'simple past' when you needed 'past perfect.'",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/language-vocabulary/tenses-explained-past-present-future">verb tense</TermLink> tells you when something happens: past (&quot;I walked&quot;), present (&quot;I walk&quot;), or future (&quot;I will walk&quot;). That&apos;s the basic idea most people already know. What trips people up is that English doesn&apos;t stop at three forms — each time period can also show whether an action is a single event, still ongoing, already finished, or ongoing-up-to-a-point. That&apos;s where forms like &quot;was walking,&quot; &quot;have walked,&quot; and &quot;had been walking&quot; come from.</div>}
      detailed={<div className="prose-p">English verb tenses are built from two independent variables: <em>time</em> (past, present, future) and <TermLink href="/language-vocabulary/tenses-explained-past-present-future">aspect</TermLink> (simple, continuous, perfect, perfect continuous). Multiply three time periods by four aspects and you get the traditional count of twelve English tenses. <strong>Simple</strong> describes a single fact or habitual action (&quot;I eat breakfast&quot;). <strong>Continuous</strong> (also called progressive) describes an action in progress, built with a form of &quot;be&quot; plus the -ing verb (&quot;I am eating breakfast&quot;). <strong>Perfect</strong> describes an action completed before a reference point, built with a form of &quot;have&quot; plus the past participle (&quot;I have eaten breakfast&quot;). <strong>Perfect continuous</strong> combines both, describing an ongoing action up to a reference point (&quot;I have been eating breakfast for an hour&quot;). The reason English needs all twelve is that time period alone can&apos;t distinguish &quot;I ate breakfast&quot; (a finished single event) from &quot;I have eaten breakfast&quot; (relevant to right now) or &quot;I was eating breakfast&quot; (interrupted mid-action) — aspect carries information time period can&apos;t.</div>}
      />
      <FootnoteAside>Strictly speaking, many linguists argue English only has two true grammatical tenses — past and present — since &quot;future&quot; is built using the helping verb &quot;will&quot; or &quot;going to&quot; rather than a dedicated verb ending, unlike the past tense&apos;s &quot;-ed.&quot; The twelve-tense framework is a teaching convention, not a strict linguistic classification.</FootnoteAside>
      <p>
      The three-by-four grid is easiest to understand by comparing how the same underlying event (&quot;finish a report&quot;) changes meaning across a few of the twelve combinations.
      </p>
      <QuickCheck
      question="'By the time she arrived, I had finished the report.' What does 'had finished' (past perfect) signal here that simple past ('finished') would not?"
      options={[
      { text: "Nothing — the two forms mean exactly the same thing.", correct: false, explanation: "They aren't interchangeable here. Past perfect specifically signals sequence between two past events, which simple past alone can't show." },
      { text: "That finishing the report happened before she arrived — it establishes the order of two past events.", correct: true, explanation: "Correct. Past perfect ('had finished') marks an action completed before another past action ('arrived'). Simple past for both ('finished' and 'arrived') would leave the order ambiguous." },
      { text: "That the report is still not finished.", correct: false, explanation: "'Had finished' explicitly means the action was completed — the opposite of what this option suggests." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The four aspects of present tense (baseline case)</h3>
      <div className="prose-p">
      Take the verb &quot;work&quot; in present time across all four aspects. Simple present: &quot;I work at a hospital&quot; — a general fact or habit, true regardless of this exact moment. Present continuous: &quot;I am working on a project&quot; — happening right now, in progress. Present perfect: &quot;I have worked here for five years&quot; — started in the past, still relevant to now, with the exact start date de-emphasized. Present perfect continuous: &quot;I have been working since 8 a.m.&quot; — emphasizes the ongoing duration itself, more than simple present perfect does. All four are grammatically &quot;present tense,&quot; but they answer four genuinely different questions: what&apos;s generally true, what&apos;s happening right now, what&apos;s been accomplished, and how long something&apos;s been going on.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Future forms and why English has more than one (edge case / variation)</h3>
      <div className="prose-p">
      English expresses future time multiple ways, and they aren&apos;t fully interchangeable. &quot;I will call you tomorrow&quot; (using &quot;will&quot;) typically signals a decision made at the moment of speaking, or a prediction. &quot;I am going to call you tomorrow&quot; (using &quot;going to&quot;) typically signals a plan already decided before now. &quot;I am calling you tomorrow&quot; (present continuous used for future) signals a firmly scheduled arrangement, often with another person involved (&quot;I am meeting the dentist tomorrow&quot;). A native speaker chooses between these instinctively based on how firm or spontaneous the plan is — a foreign-language learner has to learn the distinction explicitly, which is why &quot;will&quot; versus &quot;going to&quot; is one of the most commonly taught (and most commonly confused) points in English-as-a-second-language instruction.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why tense choice matters in real writing (applied case)</h3>
      <div className="prose-p">
      Consider the difference between &quot;I lived in Paris for two years&quot; (simple past) and &quot;I have lived in Paris for two years&quot; (present perfect). The first implies the living-in-Paris period is over — you don&apos;t live there anymore. The second implies you still live there — the two years and counting are ongoing. This single tense choice completely changes the factual claim being made, without changing any other word in the sentence. This is exactly the kind of error that turns up in resumes and cover letters (&quot;I worked as a manager&quot; versus &quot;I have worked as a manager&quot; say different things about whether the job is current), which is why getting comfortable with the perfect aspect specifically pays off far beyond the classroom.
      </div>
      <QuickCheck
      question="A job applicant writes 'I have managed a team of ten people.' What does this imply about their current employment status, compared to 'I managed a team of ten people'?"
      options={[
      { text: "No difference — both sentences mean the same thing.", correct: false, explanation: "There is a real difference. Present perfect ('have managed') keeps the action connected to the present; simple past ('managed') implies it's finished and disconnected from now." },
      { text: "'Have managed' suggests this is still true or recently relevant (possibly a current role); 'managed' suggests it's a completed, past experience.", correct: true, explanation: "Correct. Present perfect signals ongoing relevance — often used for a current or very recent role. Simple past signals a closed chapter, often used for a past job that's ended." },
      { text: "'Have managed' is grammatically incorrect on a resume.", correct: false, explanation: "It's grammatically correct and commonly used — the point is that it carries different meaning from simple past, not that it's wrong." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The 12 English tenses: three time periods × four aspects"
      type="comparison"
      svgSrc="/diagrams/05-tenses-explained-grid.svg"
      altText="Grid diagram with three columns (past, present, future) and four rows (simple, continuous, perfect, perfect continuous), showing one example sentence using the verb 'work' in each of the twelve resulting tense combinations."
      />
      <p>
      Reading down any single column shows how one time period (say, past) changes meaning across the four aspects. Reading across any single row shows how one aspect (say, continuous) shifts across the three time periods. Most people already know the &quot;reading across&quot; pattern instinctively — it&apos;s the &quot;reading down&quot; pattern, choosing the right aspect within a time period, that actually needs deliberate attention.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using simple past when past perfect is needed to show sequence between two past events.", fix: "If you're describing which of two past events happened first, use past perfect ('had') for the earlier one: 'I had eaten before she arrived.'" },
      { mistake: "Mixing tenses within the same sentence or paragraph without a reason.", fix: "Stay in one tense unless the timeline genuinely shifts — 'She walks into the room and sat down' should be 'She walked in and sat down,' or 'She walks in and sits down,' not a mix." },
      { mistake: "Using 'will' for a future plan that was actually decided before the moment of speaking.", fix: "Use 'going to' for plans made in advance ('I'm going to visit my parents next week') and reserve 'will' for on-the-spot decisions or predictions." },
      { mistake: "Assuming present perfect ('have done') and simple past ('did') are interchangeable.", fix: "Use simple past for a finished action disconnected from now; use present perfect when the action's effect or relevance continues into the present." },
      ]}
      />
      <MisconceptionCallout
      myth="English has only three tenses: past, present, and future — like most language classes teach in early lessons."
      reality={<p>Introductory lessons teach the three time periods first because they&apos;re the easiest entry point, but each one splits into four aspect variations, giving English twelve distinguishable tense forms in everyday use. Many other languages mark aspect with a single word ending rather than English&apos;s helper-verb system (be/have + participle), which is part of why English tenses can feel unusually complex to learners coming from those languages — the information being conveyed is often similar, but English spreads it across more visible pieces (auxiliary verbs, participles) rather than one word change.</p>}
      />
      <QuickCheck
      question="'I am living in Boston' versus 'I live in Boston' — what's the real difference in meaning?"
      options={[
      { text: "There's no meaningful difference; both are just correct present tense.", correct: false, explanation: "They carry a subtle but real distinction — one implies permanence, the other implies a temporary or currently-ongoing situation." },
      { text: "'I live in Boston' suggests a settled, ongoing fact; 'I am living in Boston' suggests something more temporary or currently in progress (e.g. for a work assignment).", correct: true, explanation: "Correct. Simple present states a general, stable fact. Present continuous, even for a state that isn't a short action, can imply the situation is temporary or currently underway rather than permanent." },
      { text: "'I am living in Boston' is grammatically incorrect because 'live' shouldn't take the continuous form.", correct: false, explanation: "It's grammatically valid and commonly used specifically to signal temporariness — it's a meaningful stylistic choice, not an error." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Take one verb and conjugate it through all twelve tenses, the way Example 1 does with 'work' — it's the fastest way to feel the difference between aspects.",
      "Next time you write a resume or cover letter, check whether each role should be present perfect (current/recent) or simple past (closed chapter) — the tense itself communicates status.",
      "When two past events happen in a sentence, check whether one needs past perfect to show it happened first.",
      "Read the related entry on Active vs Passive Voice to see how tense and voice combine and sometimes get confused with each other.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many verb tenses does English have?", answer: "Traditionally twelve, formed by combining three time periods (past, present, future) with four aspects (simple, continuous, perfect, perfect continuous). Some linguists argue English grammatically has only two true tenses (past and present), with the rest built using helping verbs." },
      { question: "What is the difference between simple past and present perfect?", answer: "Simple past ('I finished') describes an action complete and disconnected from the present. Present perfect ('I have finished') describes an action whose result or relevance continues into the present moment." },
      { question: "When should I use 'will' versus 'going to' for future tense?", answer: "Use 'will' for decisions made in the moment or general predictions ('I'll get that for you'). Use 'going to' for plans already decided before now ('I'm going to start a course next month')." },
      { question: "What is past perfect tense used for?", answer: "Past perfect ('had done') shows that one past action happened before another past action — it establishes sequence between two events that both already happened." },
      { question: "Why does English use helping verbs like 'be' and 'have' for some tenses?", answer: "English builds continuous and perfect aspects by combining an auxiliary verb ('be' or 'have') with a participle form, rather than changing the main verb's ending the way simple tenses do (walk/walked). This lets English express fine-grained timing (in-progress, completed-before-now) without needing a separate verb form for every combination." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
