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
  title: "Active vs Passive Voice",
  category: "language-vocabulary",
  order: 4,
  subtopic: "grammar-foundations",
  tags: ["grammar", "active voice", "passive voice", "writing style"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The real difference between active and passive voice, when passive voice is actually the better choice, and why 'passive voice is always bad writing' is a myth.",
  summary: "Active voice puts the doer of an action as the sentence's subject ('the dog bit the man'); passive voice puts the receiver of the action as the subject instead ('the man was bitten by the dog') — and each has legitimate uses.",
  sources: [
    { label: "Purdue Online Writing Lab — Active and Passive Voice", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/" },
    { label: "Merriam-Webster — Active vs. Passive Voice", url: "https://www.merriam-webster.com/grammar/active-vs-passive-voice" },
  ],
  seeAlso: [
    "language-vocabulary/parts-of-speech-explained",
    "language-vocabulary/tenses-explained-past-present-future",
    "language-vocabulary/formal-vs-informal-writing",
  ],
  glossary: [
    { term: "Active voice", definition: "A sentence structure where the subject performs the action of the verb — 'the chef cooked the meal.'" },
    { term: "Passive voice", definition: "A sentence structure where the subject receives the action of the verb, often built with a form of 'be' plus a past participle — 'the meal was cooked by the chef.'" },
    { term: "Agent", definition: "The doer of an action in a sentence — in passive voice, the agent is often introduced with 'by' or omitted entirely." },
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
      "Active voice puts the doer of the action first ('the committee approved the budget'); passive voice puts the receiver first ('the budget was approved by the committee').",
      "Passive voice isn't grammatically wrong or automatically bad writing — it's the right choice when the doer is unknown, irrelevant, or deliberately being de-emphasized.",
      "The real writing advice isn't 'never use passive voice,' it's 'know which one you're using and choose it on purpose.'",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">In <TermLink href="/language-vocabulary/active-vs-passive-voice">active voice</TermLink>, the subject of the sentence does the action: &quot;The teacher graded the essays.&quot; In <TermLink href="/language-vocabulary/active-vs-passive-voice">passive voice</TermLink>, the subject receives the action instead: &quot;The essays were graded by the teacher.&quot; Same information, same facts, but the sentence is built around a different focus — who did it, versus what happened to something.</div>}
      detailed={<div className="prose-p">Passive voice is formed with a conjugated form of &quot;be&quot; plus the past participle of the main verb, and it optionally names the doer (the <TermLink href="/language-vocabulary/active-vs-passive-voice">agent</TermLink>) in a &quot;by&quot; phrase — or drops it entirely. &quot;The window was broken&quot; doesn&apos;t say who broke it at all; &quot;the window was broken by the storm&quot; adds the agent back in. This ability to omit the agent is passive voice&apos;s actual grammatical superpower, and it&apos;s why the &quot;always avoid passive voice&quot; advice given in many writing classes is oversimplified: passive voice is the correct tool exactly when the agent is unknown (&quot;the car was stolen overnight&quot; — nobody knows who), irrelevant to the point being made (&quot;the bridge was completed in 1937&quot; — the specific construction crew doesn&apos;t matter to the reader), or deliberately withheld for tact or diplomacy (&quot;mistakes were made&quot; — a phrase famous precisely because it avoids naming who made them). Active voice is generally preferred by default because it&apos;s usually more direct and identifies responsibility clearly, which matters in most everyday and professional writing — but &quot;usually&quot; isn&apos;t &quot;always.&quot;</div>}
      />
      <FootnoteAside>Passive voice is common — and often required — in scientific writing (&quot;the sample was heated to 80°C&quot;) because the process matters more than who personally performed the action, and naming &quot;I heated the sample&quot; can read as inappropriately personal for a methods section.</FootnoteAside>
      <p>
      The clearest way to see the tradeoff is to take the same fact and write it both ways, then ask which version actually communicates better for a given purpose.
      </p>
      <QuickCheck
      question="A company press release says 'Mistakes were made in the handling of customer data.' What effect does the passive voice have here?"
      options={[
      { text: "It makes the sentence grammatically incorrect.", correct: false, explanation: "The sentence is fully grammatical — passive voice is a legitimate structure, not an error." },
      { text: "It avoids naming who is responsible for the mistakes.", correct: true, explanation: "Correct. By dropping the agent entirely, the sentence describes the outcome without assigning responsibility — a common (and often criticized) use of passive voice in corporate and political communication." },
      { text: "It makes the sentence more concise than the active version would be.", correct: false, explanation: "It's actually not shorter here — 'We made mistakes' (active) is shorter. The passive version's purpose is to obscure the 'who,' not to save words." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a sentence between voices (baseline case)</h3>
      <div className="prose-p">
      Active: &quot;The scientist discovered a new species of frog.&quot; Passive: &quot;A new species of frog was discovered by the scientist.&quot; Notice the mechanics of the conversion: the object of the active sentence (&quot;a new species of frog&quot;) becomes the subject of the passive sentence; the verb changes from simple past (&quot;discovered&quot;) to a &quot;be&quot; + past participle form (&quot;was discovered&quot;); and the original subject (&quot;the scientist&quot;) moves into an optional &quot;by&quot; phrase at the end. This is a purely mechanical transformation — every active sentence with a direct object can be converted to passive this way, and vice versa, without changing the underlying facts.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When passive voice is genuinely the better choice (edge case / variation)</h3>
      <div className="prose-p">
      Headline writing regularly favors passive voice when the doer is unknown or unimportant: &quot;Local Park Vandalized Overnight&quot; is passive (the vandals aren&apos;t named because they&apos;re unknown), and forcing it into active voice would require inventing a subject (&quot;Someone vandalized the local park overnight&quot;) that adds a vague word without adding real information. Similarly, in a news report about a car crash, &quot;Three people were injured in a collision on Highway 12&quot; is passive and appropriately so — at the time of reporting, assigning blame or naming a responsible party may not yet be established, and the sentence correctly focuses on what&apos;s confirmed (people were injured) rather than speculating on who caused it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Overusing passive voice in everyday writing (real-world / applied case)</h3>
      <div className="prose-p">
      Compare a work email written passively — &quot;The report was reviewed and it was decided that changes need to be made&quot; — with the same content in active voice: &quot;I reviewed the report and decided we need to make changes.&quot; The active version is shorter, clearer about who did what, and reads with more confidence. This is the realistic everyday case the &quot;prefer active voice&quot; advice is actually about: not a hard grammar rule, but a style habit where writers default to passive voice out of vagueness or hedging rather than a deliberate choice, making their writing feel evasive or bureaucratic even when they don&apos;t mean it to.
      </div>
      <QuickCheck
      question="Which is the better sentence for a scientific methods section, and why?"
      options={[
      { text: "'I mixed the two chemicals together' — because active voice is always clearer.", correct: false, explanation: "In a methods section, the personal 'I' is usually considered inappropriately informal — the process matters more than who personally performed it, which is exactly where passive voice is the accepted convention." },
      { text: "'The two chemicals were mixed together' — because the process, not the personal actor, is what matters in this context.", correct: true, explanation: "Correct. Scientific writing conventionally uses passive voice for procedural steps because the method itself is the point, not which specific person carried it out." },
      { text: "Neither — scientific writing should avoid both voices and use bullet points instead.", correct: false, explanation: "Both voices are grammatically fine for writing full sentences; the question is which one fits the convention and purpose of a methods section, which is passive." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Converting between active and passive voice"
      type="comparison"
      svgSrc="/diagrams/05-active-vs-passive-voice-conversion.svg"
      altText="Diagram showing the mechanical conversion of an active sentence ('The scientist discovered a new species') into passive voice ('A new species was discovered by the scientist'), with arrows showing the object becoming the new subject, the verb changing to a be-plus-participle form, and the original subject moving into an optional by-phrase."
      />
      <p>
      The arrows show exactly which sentence part moves where. Once this mechanical pattern is visible, spotting passive voice in your own writing becomes much faster: look for a form of &quot;be&quot; (is, was, were, has been) followed by a past participle (a verb ending in -ed or an irregular past-participle form like &quot;written&quot; or &quot;broken&quot;).
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Believing passive voice is always grammatically wrong or should be eliminated entirely.", fix: "Recognize passive voice as a legitimate structure with real uses — the goal is deliberate choice, not zero passive sentences." },
      { mistake: "Confusing passive voice with past tense.", fix: "They're independent — 'she wrote the letter' is active past tense; 'the letter was written' is passive past tense; 'the letter is being written' is passive present tense. Voice and tense are two different grammatical dimensions." },
      { mistake: "Defaulting to passive voice out of habit in professional writing, making it sound vague or evasive.", fix: "When you notice a 'was/were + verb-ed' pattern, ask if naming the doer directly (switching to active) would make the sentence clearer and more direct." },
      { mistake: "Assuming shorter sentences are always active and longer ones are always passive.", fix: "Length isn't the test — check whether the subject is doing the action (active) or receiving it (passive), regardless of sentence length." },
      ]}
      />
      <MisconceptionCallout
      myth="Good writers never use passive voice — it should be eliminated wherever possible."
      reality={<p>Even celebrated writing style guides that recommend &quot;prefer active voice&quot; (like Strunk & White&apos;s <em>The Elements of Style</em>) explicitly acknowledge passive voice has legitimate uses, and professionally edited, well-regarded writing uses it regularly — in science, journalism, and formal reports especially. The actual rule experienced editors apply is: use active voice by default, and switch to passive specifically when the receiver of the action is more important to the sentence than the doer, or when the doer is unknown, obvious, or irrelevant. Treating &quot;no passive voice, ever&quot; as an absolute rule leads to awkward, unnatural sentences forced into an unnatural shape.</p>}
      />
      <QuickCheck
      question="'The novel was written in 1925.' Is this passive voice used appropriately here?"
      options={[
      { text: "No — it should say who wrote it to be a good sentence.", correct: false, explanation: "If the author is already known from context (a book review already discussing the author), naming them again in every sentence would be redundant. Passive voice here appropriately keeps focus on the novel and its date." },
      { text: "Yes — the focus is naturally on the novel and when it was written, not on re-naming the author in every sentence.", correct: true, explanation: "Correct. When the subject under discussion (the novel) is what the sentence should be about, and the author is either already established or not the point of this particular sentence, passive voice is the more natural choice." },
      { text: "It's impossible to tell without knowing who wrote the novel.", correct: false, explanation: "The appropriateness of passive voice here doesn't depend on knowing the author's identity — it depends on whether the novel or the author is meant to be the sentence's focus." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Scan a piece of your own recent writing for 'was/were + verb-ed' patterns and check whether each one is a deliberate choice or just a habit.",
      "Next time you write a headline or report a fact where the doer is unknown or irrelevant, notice that passive voice is often the more natural, not the 'wrong,' choice.",
      "In professional emails, try converting a passive sentence to active and compare which reads with more confidence and clarity.",
      "Read the related entry on Formal vs Informal Writing to see how voice choice interacts with register and tone more broadly.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between active and passive voice?", answer: "In active voice, the sentence's subject performs the action ('the dog chased the ball'). In passive voice, the subject receives the action instead ('the ball was chased by the dog'), and the doer can be named in a 'by' phrase or dropped entirely." },
      { question: "Is passive voice grammatically incorrect?", answer: "No, it's a fully correct, standard grammatical structure. It's sometimes stylistically discouraged in favor of active voice's directness, but it isn't an error and has legitimate uses of its own." },
      { question: "When should I use passive voice?", answer: "When the doer of the action is unknown ('the package was delivered'), unimportant to the point ('the bridge was built in 1937'), or deliberately being de-emphasized, and when the receiver of the action is what the sentence should focus on." },
      { question: "How can I tell if a sentence is passive?", answer: "Look for a form of 'be' (is, was, were, has been, will be) followed by a past participle, often with an optional 'by [doer]' phrase — 'the cake was baked (by my grandmother).'" },
      { question: "Why do writing teachers say to avoid passive voice?", answer: "Because it's overused by habit rather than choice in everyday writing, often making sentences longer, vaguer about who's responsible, and less direct than the equivalent active version would be — the advice is really about defaulting to active, not banning passive entirely." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
