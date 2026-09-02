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
  title: "How to Give Feedback That Actually Lands (Not Just Criticism)",
  category: "career-study-skills",
  order: 28,
  subtopic: "workplace-communication",
  tags: ["giving feedback", "workplace communication", "performance feedback", "constructive criticism", "SBI model"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Feedback that actually lands names a specific situation, a specific behavior, and its concrete impact — feedback that names a trait instead almost always gets heard as an attack.",
  summary: "Feedback that actually lands works by encoding an observation into specific, behavior-focused language before it reaches the other person — naming the situation, the observable behavior, and its concrete impact — because vague or trait-based feedback tends to decode on the receiving end as a personal judgment instead of something actionable.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "American Psychological Association (APA)", url: "https://www.apa.org" },
    { label: "National Communication Association (NCA)", url: "https://www.natcom.org" },
  ],
  seeAlso: [
    "career-study-skills/what-active-listening-actually-looks-like",
    "career-study-skills/how-to-disagree-with-a-colleague-professionally",
    "career-study-skills/how-to-write-an-effective-professional-email",
  ],
  glossary: [
    { term: "SBI model (Situation-Behavior-Impact)", definition: "A feedback framework that structures a piece of feedback around the specific situation it happened in, the observable behavior itself, and the concrete impact it had — rather than a general judgment about someone's character or ability." },
    { term: "Actionable feedback", definition: "Feedback specific enough that the recipient knows exactly what to do differently next time, rather than only knowing that something went wrong." },
    { term: "Negativity bias", definition: "The tendency for people to weigh and remember negative information more heavily than positive information of the same size — one piece of vague criticism can outweigh several genuine compliments in how a feedback conversation is remembered." },
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
          "Feedback that names a specific, observable behavior and its concrete impact gets heard as actionable — feedback that names a trait tends to get heard as a personal attack.",
          "The same underlying observation can be delivered as a character judgment or as a fixable action; the structure of the language, not the content, is usually what determines which one lands.",
          "Because criticism tends to be weighed more heavily than praise, one piece of vague negative feedback can undo several genuine compliments — which is a reason to make critical feedback specific, not a reason to avoid giving it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Feedback that actually changes behavior points at something specific someone did, not at who they are. &quot;You&apos;re disorganized&quot; is a trait judgment with nothing to act on. &quot;The report was missing the Q3 numbers, which delayed the client&apos;s decision&quot; names an exact behavior and its effect — the recipient knows precisely what to fix. The difference between feedback that lands and feedback that just feels like criticism usually comes down to that specificity.</div>}
        detailed={<div className="prose-p">This is the <strong>encode → transmit → decode</strong> mental model applied to feedback: the giver encodes an observation into language, that language gets transmitted to the recipient, and the recipient decodes it based on the words actually used — not the intent behind them. Vague or trait-based language (&quot;you&apos;re not detail-oriented&quot;) encodes ambiguously, and ambiguity tends to decode as a judgment about identity rather than a note about behavior, triggering a defensive response instead of a corrective one. The <TermLink href="/career-study-skills/how-to-give-feedback-that-actually-lands">SBI model (Situation-Behavior-Impact)</TermLink> is a fix for the encoding step itself: naming the specific situation, the observable behavior, and its concrete impact removes the ambiguity that would otherwise get filled in by the recipient&apos;s own assumptions. The edge case: even well-encoded, specific feedback can land badly if the timing or setting is wrong — critical feedback delivered publicly, or immediately after a stressful event, tends to get received defensively regardless of how precisely it&apos;s worded, because the emotional context overrides the content.</div>}
      />
      <FootnoteAside>Negativity bias helps explain why a single piece of vague criticism in an otherwise positive review can dominate how someone remembers the whole conversation — the imprecise negative comment gets replayed and reinterpreted far more than the specific praise around it.</FootnoteAside>

      <p>
        Once feedback is understood as something that gets decoded on the other end, not just said, the fix follows: encode it carefully — specific situation, specific behavior, specific impact — instead of relying on the recipient to correctly guess your intent from a general statement.
      </p>

      <QuickCheck
        question="Why does feedback like 'you're not detail-oriented' tend to land as an attack, while feedback naming a specific missed detail and its impact tends to land as actionable?"
        options={[
          { text: "Because trait-based language is ambiguous and gets interpreted as a judgment of character, while specific behavior-and-impact language gives the recipient something concrete to act on", correct: true, explanation: "Correct. Vague, trait-based feedback leaves the recipient to fill in the gaps, which tends to default toward a personal judgment rather than a fixable action." },
          { text: "Because trait-based feedback is always factually incorrect, while specific feedback is always accurate", correct: false, explanation: "Accuracy isn't the deciding factor here — even accurate trait-based feedback tends to land poorly because it isn't actionable, not because it's false." },
          { text: "Because longer feedback is inherently better received than shorter feedback", correct: false, explanation: "Length isn't the mechanism — specificity and behavioral focus are what change how feedback is received, regardless of how long the message is." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Correcting a recurring mistake using SBI (baseline case)</h3>
      <p>
        A manager notices an employee has missed the same formatting requirement on client deliverables twice. Instead of saying &quot;you need to be more careful,&quot; they say: &quot;In the last two client reports [situation], the summary section didn&apos;t follow the standard template [behavior], which meant I had to reformat both before they went out, adding about an hour each time [impact]. Can you walk me through what happened?&quot; The employee now has a specific, fixable target — not a vague character note to feel bad about.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Giving specific feedback that still lands badly due to timing (edge case / variation)</h3>
      <div className="prose-p">
        A colleague gives precise, well-structured SBI feedback about a presentation — but does it in front of the whole team immediately after the presenter stumbled through a difficult question. Even though the feedback itself is specific and behavior-focused, it&apos;s received defensively because of the public setting and the timing, right after a visibly stressful moment. The same exact words, delivered privately later that day, would likely have landed as intended. Precision in the language doesn&apos;t override poor timing or setting.
      </div>
      <QuickCheck
        question="Feedback is specific and well-structured (situation, behavior, impact), but it's delivered publicly right after a stressful moment and lands defensively anyway. What does this show?"
        options={[
          { text: "That the SBI structure doesn't actually work and should be abandoned", correct: false, explanation: "The structure worked as intended on the language level — the problem was timing and setting, not the feedback's wording." },
          { text: "That specific, well-encoded feedback can still land poorly if the timing or setting (public, right after a stressful event) overrides the content", correct: true, explanation: "Correct. Precise wording is necessary but not sufficient — delivery context matters too, and can override even well-structured feedback." },
          { text: "That the presenter was simply too sensitive to receive any feedback at all", correct: false, explanation: "The reaction is a predictable response to public, poorly timed delivery, not a reflection of the recipient's general ability to take feedback." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Balancing critical feedback with genuine praise in a performance review (real-world / applied case)</h3>
      <p>
        A reviewer wants to raise one significant concern in an otherwise strong performance review. Rather than opening with vague praise, then a vague criticism, then more vague praise (a pattern sometimes called a feedback sandwich, which can come across as formulaic), they give specific, genuine positive feedback on two distinct achievements, then a specific SBI note on the one concern, clearly separated rather than diluted between compliments. Because the critical point is specific and isolated rather than vague and buried, it doesn&apos;t disproportionately overshadow the genuine praise the way an imprecise criticism tends to.
      </p>
      <QuickCheck
        question="Why does making a single piece of critical feedback specific and clearly separated (rather than vague and sandwiched between compliments) help it be received more fairly, alongside genuine praise?"
        options={[
          { text: "Because specific, isolated criticism is less likely to be over-weighted or misread the way vague, diluted criticism tends to be, letting the genuine praise register on its own terms", correct: true, explanation: "Correct. Precision and clear separation reduce the chance that one imprecise negative comment dominates the recipient's memory of an otherwise positive conversation." },
          { text: "Because compliments and criticism should never appear in the same conversation under any circumstances", correct: false, explanation: "The example doesn't argue against combining praise and criticism — it argues against diluting or vaguely sandwiching the criticism." },
          { text: "Because critical feedback should always come first, before any positive feedback is given", correct: false, explanation: "Ordering isn't the key variable in this example — specificity and clear separation of the critical point are." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Vague trait-based feedback vs. specific SBI feedback"
        type="comparison"
        svgSrc="/diagrams/career-study-skills-how-to-give-feedback-that-actually-lands-comparison.svg"
        altText="A comparison diagram showing vague, trait-based feedback as a single unsupported judgment with no specific behavior named, next to specific feedback structured around situation, behavior, and impact, illustrating how the second version names a fixable action instead of labeling character."
      />
      <p>
        Both versions can come from the exact same underlying observation — the difference is entirely in what gets encoded into words before it reaches the other person.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Naming a trait ('you're disorganized') instead of a specific, observable behavior.", fix: "Describe the specific situation and behavior instead — what happened, exactly, and when — leaving character out of it entirely." },
          { mistake: "Leaving out the impact, so the recipient knows something was wrong but not why it mattered.", fix: "State the concrete consequence — a delay, a cost, a confusion caused — so the feedback connects to something real, not just a preference." },
          { mistake: "Delivering specific, well-worded feedback in a public or poorly timed setting.", fix: "Save critical feedback for a private setting and a moment that isn't immediately after a stressful or high-pressure event." },
        ]}
      />
      <MisconceptionCallout
        myth="The safest way to give critical feedback is to soften it heavily or bury it between compliments so it doesn't feel harsh."
        reality={<p>Heavily softened or buried feedback often fails in the opposite direction from what&apos;s intended — the recipient either misses the actual point entirely or, because of negativity bias, fixates on the one critical line and forgets the surrounding praise was genuine. Specific, clearly stated feedback focused on behavior rather than character tends to land more accurately and less harshly than a vague version wrapped in extra compliments.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before giving feedback, write out the specific situation, the observable behavior, and its concrete impact — not a general impression.",
          "Check your language for trait words ('careless,' 'disorganized') and replace them with the specific behavior you actually observed.",
          "Deliver critical feedback privately, and avoid timing it right after a stressful or high-pressure moment.",
          "Read How to Disagree With a Colleague Professionally next for how to handle it when the other person pushes back on feedback you've given.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the SBI model for giving feedback?", answer: "A feedback framework structured around the specific Situation something happened in, the observable Behavior itself, and its concrete Impact — used instead of a general judgment about someone's character or ability." },
          { question: "Why does feedback sometimes feel like a personal attack even when it's meant to be constructive?", answer: "Usually because it's phrased around a trait ('you're careless') rather than a specific behavior and its impact — trait-based language tends to be decoded as a character judgment, which triggers a defensive response." },
          { question: "Is the feedback sandwich (compliment, criticism, compliment) a good technique?", answer: "It's common but often criticized, because vague criticism sandwiched between compliments can still dominate how the conversation is remembered, and the pattern itself can come across as formulaic. Specific, clearly separated feedback tends to work better than diluting it between praise." },
          { question: "How do I give feedback to someone without hurting their feelings?", answer: "Focus the language on a specific behavior and its impact rather than a trait, and choose a private setting away from a recent stressful moment — precision and timing matter more than softening the wording." },
          { question: "What's the difference between feedback and criticism?", answer: "Criticism often stops at pointing out that something was wrong; effective feedback goes further, naming the specific behavior and its concrete impact so the other person knows exactly what to do differently." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
