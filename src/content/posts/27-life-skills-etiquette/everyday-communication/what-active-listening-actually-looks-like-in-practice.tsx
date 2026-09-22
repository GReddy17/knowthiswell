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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Active Listening Actually Looks Like in Practice",
  category: "life-skills-etiquette",
  order: 2,
  subtopic: "everyday-communication",
  tags: ["active listening", "communication skills", "conversation", "conflict resolution"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "Staying quiet while someone talks isn't active listening — the 'active' part is the visible, deliberate work of showing you understood before you respond.",
  summary: "Active listening is a specific, deliberate communication practice — not simply staying silent while someone else talks — that involves giving full attention, reflecting back what was heard in your own words to confirm understanding before responding, and withholding judgment or a rebuttal until the other person's point has genuinely been understood; per Harvard Law School's Program on Negotiation, this reflection step is what most reliably separates active listening from passive listening or simply waiting for a turn to speak.",
  sources: [
    { label: "Harvard Law School — Program on Negotiation", url: "https://www.pon.harvard.edu/" },
  ],
  seeAlso: [
    "life-skills-etiquette/how-to-actually-have-a-difficult-conversation",
    "life-skills-etiquette/how-to-actually-build-rapport-quickly",
    "career-study-skills/what-active-listening-actually-looks-like",
  ],
  glossary: [
    { term: "Reflective listening", definition: "Restating what a speaker said, in your own words, specifically to confirm you understood correctly before responding — the core technique that distinguishes active listening from passive silence." },
    { term: "Passive listening", definition: "Hearing someone's words without the deliberate confirmation step of reflecting them back, often while mentally preparing a response instead of fully processing what's being said." },
    { term: "Non-verbal attention cues", definition: "Physical signals such as eye contact, nodding, and posture that communicate genuine attention independently of what's being said out loud." },
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
          "Active listening specifically means reflecting back what you heard, in your own words, before responding — not just staying quiet while someone talks.",
          "Per Harvard's Program on Negotiation, this reflection step is what confirms understanding and is what most distinguishes active from passive listening.",
          "Withholding judgment or a rebuttal until genuine understanding is confirmed is core to the practice, not an optional politeness layer on top of it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Active listening means more than staying silent and waiting your turn — it means actually showing the other person you understood, usually by briefly restating what they said in your own words before you respond. That confirmation step is what makes it &quot;active&quot; rather than just passive quiet.</div>}
        detailed={<div className="prose-p">Per Harvard&apos;s Program on Negotiation, active listening is a specific technique built around several concrete components: giving full attention using <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">non-verbal attention cues</TermLink> like eye contact and nodding, deliberately withholding judgment or a counterargument until the speaker has genuinely finished, and — the most distinguishing element — <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">reflective listening</TermLink>, where the listener restates the speaker&apos;s point in their own words before responding. This reflection step does two things at once: it confirms to the listener whether their understanding was actually correct, and it visibly demonstrates to the speaker that they were heard, which research in negotiation contexts finds measurably reduces defensiveness and conflict escalation compared to <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">passive listening</TermLink>, where a person hears the words but is mentally preparing their own response rather than processing the other person&apos;s point.</div>}
      />
      <FootnoteAside>A useful test for whether reflection happened genuinely rather than mechanically: could you restate the other person&apos;s underlying concern accurately enough that they&apos;d say &quot;yes, that&apos;s exactly it&quot; — not just repeat their literal words back.</FootnoteAside>

      <p>This is also why active listening is taught heavily in negotiation and conflict-resolution training specifically — confirming understanding before responding tends to lower the emotional temperature of a disagreement before either side even reaches the actual substance of it.</p>

      <QuickCheck
        question="During a disagreement, one person says 'Let me make sure I understand — you're frustrated because the deadline changed without any notice, is that right?' before responding with their own view. What is this an example of?"
        options={[
          { text: "Reflective listening — restating the other person's point to confirm understanding before responding", correct: true, explanation: "Correct. This is the core technique of active listening per Harvard's Program on Negotiation — confirming understanding before adding a response, rather than jumping straight to a rebuttal." },
          { text: "Passive listening, since the person eventually gave their own view", correct: false, explanation: "The defining feature here is the reflection step happening before the response — that's active, not passive, listening, regardless of what follows it." },
          { text: "An unnecessary delay that doesn't affect the outcome of the conversation", correct: false, explanation: "Research in negotiation contexts finds this reflection step measurably reduces defensiveness and conflict escalation — it's not a neutral or wasted step." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reflecting before responding in a work conversation (baseline case)</h3>
      <div className="prose-p">A manager receiving critical feedback from a team member first summarizes the concern back (&quot;So the issue is the review process feels rushed at the end of each sprint&quot;) before offering their own perspective — the summary confirms understanding and visibly shows the feedback was actually heard.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Mistaking silence for active listening (edge case / variation)</h3>
      <div className="prose-p">Someone stays completely quiet while another person talks, then responds immediately with their own point without reflecting back what they heard — per Harvard&apos;s Program on Negotiation, this is passive listening, not active listening, because the confirmation step that defines the technique never happened, even though the person technically &quot;listened&quot; in the sense of not interrupting.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: De-escalating a heated disagreement (real-world / applied case)</h3>
      <div className="prose-p">In a tense negotiation, one party pauses to reflect the other&apos;s position accurately before countering it — per negotiation research, this specific move tends to lower defensiveness measurably, since the other party no longer has to fight to be understood before the substantive disagreement can even be addressed.</div>

      <QuickCheck
        question="Why does research in negotiation contexts find that reflective listening reduces defensiveness and conflict escalation, compared to passive listening?"
        options={[
          { text: "Because confirming understanding first removes the other person's need to fight to be understood before the actual disagreement can be addressed", correct: true, explanation: "Correct. Once someone feels genuinely understood, they typically don't need to keep re-asserting or escalating their point just to be heard, which lowers overall tension in the conversation." },
          { text: "Because reflective listening always results in the listener agreeing with the speaker", correct: false, explanation: "Reflective listening confirms understanding, not agreement — a listener can accurately reflect a point back and still disagree with it afterward." },
          { text: "Because it makes the conversation shorter overall", correct: false, explanation: "The benefit documented is reduced defensiveness and de-escalation, not necessarily a shorter conversation — reflection can add time upfront." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The components of active listening in practice"
        type="detail"
        svgSrc="/diagrams/life-skills-etiquette-what-active-listening-actually-looks-like-in-practice-detail.svg"
        altText="A diagram of active listening components: full attention with non-verbal cues, withholding judgment until the speaker finishes, reflecting the point back in your own words, then responding."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating silent waiting as the same thing as active listening.", fix: "Add the explicit reflection step — restate the other person's point before responding, per Harvard Program on Negotiation guidance." },
          { mistake: "Mentally preparing your response while the other person is still talking.", fix: "Focus fully on understanding first; a genuine response is easier to form after understanding is confirmed, not during." },
          { mistake: "Reflecting back words mechanically without actually capturing the underlying concern.", fix: "Aim for a reflection specific enough that the other person would say 'yes, exactly' — not a generic paraphrase." },
        ]}
      />
      <MisconceptionCallout
        myth="Active listening just means being polite and not interrupting while someone else talks."
        reality={<p>Not interrupting is a baseline courtesy, but per Harvard&apos;s Program on Negotiation, active listening specifically requires the added step of reflecting the speaker&apos;s point back in your own words before responding, plus deliberately withholding judgment until you&apos;ve genuinely understood. Silence alone — without that reflection step — is passive listening, which doesn&apos;t reliably produce the same reduction in defensiveness and conflict escalation that active listening does in negotiation and conflict-resolution research.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before responding in a disagreement, briefly restate the other person's point in your own words and check it's accurate.",
          "Withhold your counterargument until you've confirmed genuine understanding, not just waited for a pause.",
          "Use non-verbal attention cues (eye contact, nodding) alongside verbal reflection, not as a substitute for it.",
          "Notice when you're mentally rehearsing a response instead of processing what's being said, and redirect your attention.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does active listening actually look like in practice?", answer: "Full attention, withholding judgment until the speaker finishes, and — the key distinguishing step — reflecting their point back in your own words to confirm understanding before responding." },
          { question: "Is active listening the same as just staying quiet while someone talks?", answer: "No — per Harvard's Program on Negotiation, staying quiet without the reflection step is passive listening, which is a distinct and less effective practice." },
          { question: "Why does reflecting someone's point back help in a disagreement?", answer: "Research in negotiation contexts finds it measurably reduces defensiveness and conflict escalation, since it removes the need for the other person to keep re-asserting their point just to feel understood." },
          { question: "Does active listening mean you have to agree with the other person?", answer: "No — reflecting a point back confirms you understood it accurately, not that you agree with it; you can genuinely understand a position and still disagree with it afterward." },
          { question: "How do you know if you reflected someone's point back accurately?", answer: "A good test is whether the other person would respond 'yes, that's exactly it' to your restatement — a generic or overly literal paraphrase doesn't reliably confirm real understanding." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
