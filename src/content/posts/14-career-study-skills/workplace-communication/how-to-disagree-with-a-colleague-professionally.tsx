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
  title: "How to Disagree With a Colleague Professionally",
  category: "career-study-skills",
  order: 30,
  subtopic: "workplace-communication",
  tags: ["disagreeing professionally", "workplace communication", "conflict resolution", "workplace conflict", "professional disagreement"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Disagreeing professionally means building your pushback on a chain of shared, checkable facts before naming where your conclusion actually diverges — not jumping straight to a competing opinion.",
  summary: "Disagreeing with a colleague professionally works by building the disagreement on a chain of shared, verifiable ground — the facts both people already accept — before naming the exact point where the reasoning splits, because a disagreement the other person can trace step by step lands as reasoning, while one that jumps straight to a competing conclusion tends to land as a personal clash.",
  sources: [
    { label: "National Communication Association (NCA)", url: "https://www.natcom.org" },
    { label: "American Psychological Association (APA)", url: "https://www.apa.org" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
  ],
  seeAlso: [
    "career-study-skills/how-to-give-feedback-that-actually-lands",
    "career-study-skills/what-active-listening-actually-looks-like",
    "career-study-skills/why-you-should-still-ask-questions-in-an-interview",
  ],
  glossary: [
    { term: "Common ground", definition: "The facts or premises both people in a disagreement already agree on, established explicitly before addressing the actual point of difference." },
    { term: "Steelmanning", definition: "Restating the other person's position in its strongest, most reasonable form before disagreeing with it, rather than arguing against a weaker version of what they actually said." },
    { term: "Depersonalized disagreement", definition: "Framing a disagreement around the idea, approach, or plan being discussed rather than around the person who proposed it." },
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
          "A disagreement lands as reasoning, not conflict, when it's built on facts the other person already accepts, with the exact point of divergence named clearly.",
          "Restating the other person's position accurately before disagreeing with it — rather than arguing against a weaker version of what they said — is what makes pushback credible instead of combative.",
          "Framing disagreement around the idea or plan, not the person who proposed it, is what keeps a professional relationship intact after the disagreement is resolved.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Disagreeing well at work isn&apos;t about softening your language — it&apos;s about building your case on a foundation the other person can check for themselves. Instead of jumping straight to &quot;I think we should do it differently,&quot; effective disagreement starts by naming what you both already agree on, then points precisely at the place where your reasoning splits from theirs, and finally offers an alternative backed by something concrete. That structure is what makes disagreement feel like a conversation instead of a clash.</div>}
        detailed={<div className="prose-p">This is the <strong>trust chain / verification</strong> mental model applied to workplace disagreement: instead of asserting a conclusion and asking the other person to simply accept it, you build a chain of checkable claims — starting from <TermLink href="/career-study-skills/how-to-disagree-with-a-colleague-professionally">common ground</TermLink> the other person can verify is genuinely shared, then isolating the exact link in the chain where your reasoning diverges from theirs, then offering an alternative supported by evidence they can also check. Each link the other person can independently verify makes the eventual point of disagreement easier to accept, because it isn&apos;t coming from nowhere. <TermLink href="/career-study-skills/how-to-disagree-with-a-colleague-professionally">Steelmanning</TermLink> the other person&apos;s position first — restating it in its strongest, most accurate form — strengthens the chain further, because it proves you disagree with what they actually said, not a distorted version of it. The edge case: in a genuine emergency, where there&apos;s no time to walk the full chain, it&apos;s reasonable to state the disagreement directly and explain the reasoning afterward — but that&apos;s a deliberate exception made because of time pressure, not a shortcut to take by default.</div>}
      />
      <FootnoteAside>Research on workplace conflict consistently distinguishes task conflict (disagreement about ideas, approaches, or facts) from relationship conflict (disagreement that becomes personal) — professional disagreement techniques exist largely to keep the first kind from sliding into the second.</FootnoteAside>

      <p>
        Once disagreement is understood as a chain the other person needs to be able to verify, not just a conclusion delivered to them, the approach follows: establish the shared ground first, name the exact divergence, then offer something concrete instead of just a competing opinion.
      </p>

      <QuickCheck
        question="Why does starting a disagreement by naming the facts both people already agree on tend to work better than opening directly with a competing conclusion?"
        options={[
          { text: "Because it gives the other person a checkable starting point, making the eventual point of divergence easier to follow and accept rather than feeling like it came from nowhere", correct: true, explanation: "Correct. A disagreement built on verifiable shared ground reads as reasoning the other person can trace, rather than an assertion they have to simply accept or reject." },
          { text: "Because starting with agreement is required by most company communication policies", correct: false, explanation: "There's no such policy requirement — this is a communication technique, not a formal rule." },
          { text: "Because it guarantees the other person will ultimately agree with your conclusion", correct: false, explanation: "It doesn't guarantee agreement — its value is making the disagreement clearer and easier to evaluate, not forcing a particular outcome." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Disagreeing with a proposed project approach (baseline case)</h3>
      <p>
        A colleague proposes launching a feature in three weeks. Rather than opening with &quot;that timeline won&apos;t work,&quot; the response starts with common ground: &quot;We agree the client needs this live before their fiscal quarter ends [shared fact]. Where I think we differ is whether three weeks includes enough time for QA on the payment flow [the specific divergence] — the last two features with a similar scope took closer to five weeks in testing alone [evidence]. Could we look at a four-week timeline with a lighter initial scope instead?&quot; The colleague can trace exactly where the disagreement starts and evaluate the evidence themselves.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Disagreeing when there&apos;s genuinely no time to build the full chain (edge case / variation)</h3>
      <div className="prose-p">
        A colleague is about to send a client an email with an incorrect figure, and the email is scheduled to go out in two minutes. There&apos;s no time to lay out shared facts and walk through a chain of reasoning. The professional move here is to state the disagreement directly and immediately — &quot;wait, I think that number is off, can you hold off sending for a second&quot; — and explain the full reasoning afterward, once the immediate problem is handled. This is a deliberate exception made because of genuine time pressure, not a normal way to open a disagreement.
      </div>
      <QuickCheck
        question="A colleague is seconds away from sending a client an email with an incorrect figure. Is it appropriate to state the disagreement directly, without first walking through shared facts and reasoning?"
        options={[
          { text: "No — every professional disagreement should always start with establishing common ground first, regardless of the situation", correct: false, explanation: "Treating the full chain as mandatory in every situation ignores that genuine time pressure is a legitimate exception, not a violation of the general approach." },
          { text: "Yes — this is a genuine time-pressure exception where stopping an immediate, concrete error takes priority, with the full reasoning explained afterward once the urgent issue is handled", correct: true, explanation: "Correct. The general approach still applies as the norm, but a real emergency justifies stating the disagreement directly first and filling in the reasoning after." },
          { text: "Yes, and the full reasoning should never be explained afterward since the moment has already passed", correct: false, explanation: "Skipping the follow-up explanation entirely misses the point — the exception is about timing under pressure, not about skipping the reasoning altogether." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Disagreeing with a manager&apos;s decision without damaging the relationship (real-world / applied case)</h3>
      <p>
        A manager decides to cut a feature from an upcoming release. An employee who disagrees steelmans the decision first — &quot;I understand the reasoning: we&apos;re tight on time and this feature isn&apos;t core to the launch&quot; — before raising the concern: &quot;Where I&apos;d push back is that this feature is the one two of our largest clients specifically asked for last quarter [evidence] — could we look at a smaller version of it instead of cutting it entirely?&quot; Because the pushback is framed around the decision, not the manager&apos;s judgment as a person, and is grounded in something checkable, the manager can evaluate it on the merits without it reading as a challenge to their authority.
      </p>
      <QuickCheck
        question="Why does steelmanning the manager's decision before raising a concern about it help keep the working relationship intact?"
        options={[
          { text: "Because it proves the employee is disagreeing with the actual decision and its stated reasoning, not a distorted or weaker version of it, and keeps the pushback focused on the decision rather than the manager personally", correct: true, explanation: "Correct. Steelmanning shows the disagreement is engaging honestly with what was actually decided, which keeps the conversation about the idea rather than becoming personal." },
          { text: "Because steelmanning guarantees the manager will ultimately reverse the decision", correct: false, explanation: "It doesn't guarantee a particular outcome — its value is in how the disagreement is received and evaluated, not in forcing a reversal." },
          { text: "Because employees are required to agree with a decision publicly before ever raising any concern about it", correct: false, explanation: "Steelmanning isn't about agreeing publicly — it's about accurately restating the reasoning before raising a genuine, separate concern." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The four-step chain for disagreeing professionally"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-to-disagree-with-a-colleague-professionally-flow.svg"
        altText="A flow diagram showing four sequential steps for disagreeing professionally: stating the facts both people already agree on, naming the specific point where the reasoning diverges, offering an alternative interpretation backed by evidence, and proposing a concrete next step or test to resolve it, illustrating disagreement built on a chain of shared, checkable ground rather than a direct clash of conclusions."
      />
      <p>
        Each link in the chain is something the other person can check for themselves before moving to the next one — which is exactly what keeps the disagreement feeling like reasoning rather than an assertion dropped on them.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Opening a disagreement directly with a competing conclusion instead of establishing shared ground first.", fix: "Start by naming what you both already agree on, then point at the specific place your reasoning splits from theirs." },
          { mistake: "Arguing against a weaker or distorted version of what the other person actually said.", fix: "Restate their position accurately, in its strongest form, before disagreeing with it — this is what makes pushback credible." },
          { mistake: "Framing the disagreement around the person ('you always...') instead of the idea or approach being discussed.", fix: "Keep the language pointed at the plan, decision, or approach — not at the person's judgment or character." },
        ]}
      />
      <MisconceptionCallout
        myth="The professional way to disagree is to avoid stating the disagreement directly and instead just ask a lot of leading questions."
        reality={<p>Vague, indirect questioning often reads as evasive or passive-aggressive rather than professional, and it can leave the other person unsure whether you actually disagree at all. Being direct about the disagreement isn&apos;t the problem — being direct without first establishing shared ground or without engaging with what the other person actually said is. A clearly stated disagreement, built on verifiable common ground, tends to land better than an indirect one dressed up as neutral questions.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before raising a disagreement, write down the specific facts you and the other person both already accept.",
          "Restate the other person's position accurately, in its strongest form, before explaining where you diverge from it.",
          "Frame your pushback around the idea or plan, not around the other person's judgment or character.",
          "Read What Active Listening Actually Looks Like at Work next, since confirming you understood the other side accurately is what makes steelmanning possible in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you professionally disagree with a coworker?", answer: "Start by naming the facts you both already agree on, then point precisely at where your reasoning diverges, and back your alternative with something concrete — evidence, data, or a specific example — rather than jumping straight to a competing opinion." },
          { question: "What is steelmanning in a workplace disagreement?", answer: "Restating the other person's position in its strongest, most accurate form before disagreeing with it, so your pushback engages with what they actually said rather than a weaker version of it." },
          { question: "How do you disagree with your manager without seeming disrespectful?", answer: "Frame the disagreement around the decision or approach, not the manager's judgment, and ground your concern in something checkable, like a specific past example or data point, rather than a general objection." },
          { question: "Is it unprofessional to disagree with someone at work?", answer: "No — disagreement about ideas and approaches, sometimes called task conflict, is a normal and often useful part of workplace collaboration. What tends to cause real damage is when disagreement turns personal rather than staying focused on the idea being discussed." },
          { question: "What should you do if there's no time to explain a disagreement fully before an urgent problem happens?", answer: "It's reasonable to state the disagreement directly and immediately in a genuine time-pressure situation, then explain the full reasoning afterward once the urgent issue is resolved." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
