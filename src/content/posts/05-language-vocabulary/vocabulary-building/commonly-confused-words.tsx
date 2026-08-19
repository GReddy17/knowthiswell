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
  title: "Commonly Confused Words",
  category: "language-vocabulary",
  order: 12,
  subtopic: "vocabulary-building",
  tags: ["commonly confused words", "affect vs effect", "fewer vs less", "who vs whom", "usage", "vocabulary"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Affect versus effect, fewer versus less, who versus whom — the words English speakers mix up most aren't random, they follow specific, learnable rules.",
  summary: "Commonly confused words are pairs or sets of words that get mixed up because they sound alike, look alike, or have overlapping meanings but different grammatical roles — affect (usually a verb) versus effect (usually a noun), fewer (for countable things) versus less (for uncountable amounts), and who (subject) versus whom (object) are the classic examples, and each has a specific, checkable rule behind it.",
  sources: [
    { label: "Merriam-Webster — Dictionary", url: "https://www.merriam-webster.com/" },
    { label: "Merriam-Webster — Usage Notes: 'Fewer' vs. 'Less'", url: "https://www.merriam-webster.com/grammar/less-vs-fewer-usage" },
    { label: "Oxford English Dictionary — Home", url: "https://www.oed.com/" },
  ],
  seeAlso: [
    "language-vocabulary/homophones-and-homonyms",
    "language-vocabulary/synonyms-and-antonyms",
    "language-vocabulary/punctuation-rules",
  ],
  glossary: [
    { term: "Affect", definition: "Almost always a verb meaning 'to influence' ('the weather affected the game'); rarely used as a noun in psychology to describe an observed emotional state." },
    { term: "Effect", definition: "Almost always a noun meaning 'a result' ('the effect of the storm'); occasionally used as a verb meaning 'to bring about' ('to effect change')." },
    { term: "Prescriptive grammar", definition: "Rules that state how language 'should' be used according to a traditional standard, often taught in formal writing instruction." },
    { term: "Descriptive grammar", definition: "An account of how language is actually used by speakers, including changes in progress, without judging those uses as correct or incorrect." },
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
          "\"Affect\" is almost always a verb (to influence) and \"effect\" is almost always a noun (a result) — the rare exceptions (a psychological \"affect,\" to \"effect\" change) are genuinely rare enough to ignore in everyday writing.",
          "\"Fewer\" is the traditional rule for countable things (fewer apples) and \"less\" for uncountable amounts (less water) — but \"less\" with countable nouns is a well-documented, ongoing usage shift, not simply an error, even though formal writing still holds the traditional line.",
          "\"Whom\" is the object form of \"who\" and is fading from casual speech, but formal writing (cover letters, official correspondence) still expects it used correctly, which is exactly where getting it wrong stands out most.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Commonly confused words are pairs like &quot;affect&quot; and &quot;effect,&quot; or &quot;fewer&quot; and &quot;less,&quot; that get mixed up constantly because they sound similar, look similar, or seem to mean almost the same thing. Each pair actually has a specific job difference: &quot;affect&quot; is the action of influencing something, while &quot;effect&quot; is the result of that influence. &quot;Fewer&quot; is for things you can count one by one, and &quot;less&quot; is for amounts you measure rather than count.</div>}
        detailed={<div className="prose-p">These pairs get confused for two genuinely different reasons, and it helps to know which one you&apos;re dealing with. Some, like <TermLink href="/language-vocabulary/commonly-confused-words">affect</TermLink> and <TermLink href="/language-vocabulary/commonly-confused-words">effect</TermLink>, are near-homophones with genuinely different grammatical roles (verb versus noun) — the confusion is about which word does which job, not about a live disagreement over correctness. Others, like &quot;fewer&quot; and &quot;less,&quot; involve a traditional grammar rule (fewer for countable nouns, less for uncountable nouns or singular mass amounts) that is currently, measurably eroding in everyday and even some published usage — supermarket signs reading &quot;10 items or less&quot; are a widely cited real-world example of this shift, and <TermLink href="/language-vocabulary/commonly-confused-words">prescriptive grammar</TermLink> guides still call it incorrect while <TermLink href="/language-vocabulary/commonly-confused-words">descriptive grammar</TermLink> references increasingly note it as a widespread, accepted usage in informal contexts. The genuinely useful distinction is: near-homophone pairs like affect/effect have one clearly correct answer in virtually every sentence, while a pair like fewer/less sits in an active, ongoing usage debate — formal writing should still follow the traditional rule, but the popular version isn&apos;t simple ignorance.</div>}
      />
      <FootnoteAside>&quot;Affect&quot; and &quot;effect&quot; both have rare reversed uses that trip up even careful writers. &quot;Effect&quot; can be a verb meaning &quot;to bring about,&quot; as in &quot;the new manager effected several changes&quot; — different from &quot;affected,&quot; which would mean the changes merely influenced something. And &quot;affect&quot; can be a noun in psychology and psychiatry, referring to a person&apos;s observed emotional expression, as in &quot;the patient displayed a flat affect.&quot; Both uses are correct, specialized, and rare enough that the verb-affect/noun-effect rule holds almost all of the time outside those fields.</FootnoteAside>
      <p>
      Keeping those two different sources of confusion — near-homophone mix-ups versus genuine, ongoing usage shifts — separate makes it much easier to know when a &quot;rule&quot; is worth following strictly and when it&apos;s more of a live debate.
      </p>

      <QuickCheck
        question="'The new policy will _____ everyone in the department.' Which word correctly fills the blank?"
        options={[
          { text: "Effect", correct: false, explanation: "\"Effect\" is almost always a noun (a result). This sentence needs a verb describing an action being done to \"everyone,\" which calls for \"affect.\"" },
          { text: "Affect", correct: true, explanation: "Correct. \"Affect\" is the verb meaning \"to influence,\" which fits this sentence — the policy is doing something (influencing) to the department." },
          { text: "Either word works interchangeably here.", correct: false, explanation: "They aren't interchangeable in this sentence — the grammatical slot calls for a verb, and \"affect\" is the verb; \"effect\" here would be grammatically wrong." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Affect versus effect (baseline case)</h3>
      <div className="prose-p">
      &quot;The storm will affect our travel plans&quot; uses &quot;affect&quot; correctly as a verb — the storm is doing the influencing. &quot;The effect of the storm was a canceled flight&quot; uses &quot;effect&quot; correctly as a noun — it names the result. A reliable quick test: if the word needs an &quot;-s,&quot; &quot;-ed,&quot; or &quot;-ing&quot; ending, or comes right after a subject doing something, it&apos;s almost certainly the verb &quot;affect.&quot; If the word follows &quot;the,&quot; &quot;an,&quot; or another article and names a thing, it&apos;s almost certainly the noun &quot;effect.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Fewer versus less, and the &quot;10 items or less&quot; debate (variation / ongoing usage shift)</h3>
      <div className="prose-p">
      The traditional rule: &quot;fewer&quot; for things you count individually (&quot;fewer apples,&quot; &quot;fewer cars&quot;), &quot;less&quot; for amounts measured as a whole (&quot;less water,&quot; &quot;less time&quot;). Grocery store express-lane signs reading &quot;10 items or less&quot; are a widely cited, real-world example of &quot;less&quot; being used with a countable noun (&quot;items&quot;) where traditional grammar calls for &quot;fewer.&quot; This isn&apos;t a fringe error — it reflects a genuine, long-running shift in informal usage that language researchers have tracked for decades. Formal writing (reports, essays, professional correspondence) should still follow the traditional fewer/less distinction, but recognizing this as an active usage shift, rather than simple ignorance, is the more accurate way to understand what&apos;s actually happening.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Who versus whom in formal writing (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Who&quot; is the subject form (&quot;who called you?&quot; — &quot;who&quot; is doing the calling), and &quot;whom&quot; is the object form (&quot;whom did you call?&quot; — &quot;whom&quot; is receiving the action). In casual speech, &quot;whom&quot; has largely faded out, with most speakers defaulting to &quot;who&quot; in both roles. But formal written contexts — cover letters, official correspondence, the classic &quot;to whom it may concern&quot; — still expect the traditional distinction, which is exactly why getting it wrong there is more noticeable than getting it wrong in conversation. A quick test: if you can replace the word with &quot;him&quot; in an answer to the implied question, use &quot;whom&quot; (&quot;you called him&quot; → &quot;whom did you call?&quot;); if you&apos;d replace it with &quot;he,&quot; use &quot;who&quot; (&quot;he called&quot; → &quot;who called?&quot;).
      </div>

      <QuickCheck
        question="A grocery store's express lane sign reads '10 items or less.' What's the most accurate way to describe this?"
        options={[
          { text: "It's simply a grammar error with no broader explanation.", correct: false, explanation: "While it does break the traditional fewer/less rule, dismissing it as a random error misses that this exact substitution is a well-documented, widespread pattern in informal usage, not an isolated mistake." },
          { text: "It reflects a real, long-tracked shift in informal usage where 'less' is increasingly used with countable nouns, even though formal writing still follows the traditional 'fewer' rule.", correct: true, explanation: "Correct. Language researchers have tracked this exact substitution for decades as an active usage shift. The traditional rule still holds in formal writing, but treating every instance as pure ignorance oversimplifies what's actually a documented change in progress." },
          { text: "It means the traditional fewer/less rule was never actually a real rule.", correct: false, explanation: "The traditional rule is real and still expected in formal writing — the sign reflects a documented informal shift away from it, not evidence that the rule never existed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using \"effect\" where a verb is needed, or \"affect\" where a noun is needed.", fix: "Check whether the sentence needs an action (affect, verb) or a named result (effect, noun) — this covers the vast majority of real sentences correctly." },
          { mistake: "Using \"less\" with a countable noun in formal writing (\"less problems\" instead of \"fewer problems\").", fix: "Ask whether the noun can be counted one by one (problems, apples, cars → fewer) or only measured as a whole (water, time, money → less), and follow the traditional rule in formal contexts." },
          { mistake: "Defaulting to \"who\" in formal writing even when the object form \"whom\" is grammatically called for.", fix: "Try substituting \"he\" or \"him\" in an answer to the implied question — \"him\" calls for \"whom,\" \"he\" calls for \"who.\"" },
        ]}
      />
      <MisconceptionCallout
        myth="'Literally' and 'figuratively' are perfect strict opposites with no overlap in usage."
        reality={<p>Major dictionaries, including Merriam-Webster, now explicitly note that &quot;literally&quot; has developed a widespread informal use as an intensifier meaning something closer to &quot;figuratively&quot; or &quot;really, for emphasis&quot; — as in &quot;I literally died laughing,&quot; where no one involved actually died. This isn&apos;t a dictionary error or a sign the word is broken; it&apos;s a documented case of a word acquiring a second, informal sense alongside its original one. In formal or precise writing, &quot;literally&quot; should still be reserved for its original meaning — &quot;actually, in a literal sense&quot; — but treating the two words as airtight opposites with zero overlap in real-world usage doesn&apos;t match how the word is actually documented and used today.</p>}
      />

      <QuickCheck
        question="Someone says 'I literally died laughing.' What does this sentence actually demonstrate about the word 'literally'?"
        options={[
          { text: "That the speaker used the word completely correctly in its original, precise sense.", correct: false, explanation: "The speaker obviously didn't die — this is the informal, emphasis-only sense of \"literally,\" not its original precise meaning of \"actually, in a literal sense.\"" },
          { text: "That \"literally\" has a documented informal use as an intensifier, which dictionaries now note alongside its original literal-truth meaning.", correct: true, explanation: "Correct. Major dictionaries explicitly document this informal, emphasis-only sense of \"literally\" as a real, widespread usage — distinct from, and existing alongside, its original strict meaning." },
          { text: "That \"literally\" and \"figuratively\" have simply swapped meanings entirely.", correct: false, explanation: "The words haven't swapped meanings — \"literally\" has picked up an additional informal, emphatic sense in casual speech, while its original precise meaning remains standard, especially in formal writing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you write \"affect\" or \"effect,\" check whether the sentence needs a verb (affect) or a noun (effect) before committing to one.",
          "Notice next time you see a \"10 items or less\" sign — it's a real, documented example of an ongoing usage shift, not just a typo.",
          "In formal writing specifically, pause on \"who\" versus \"whom\" and try the he/him substitution test before sending.",
          "Next time you catch yourself saying \"literally\" for emphasis, notice that you're using its newer, informally documented sense — and switch to the strict sense in formal writing.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between affect and effect?", answer: "\"Affect\" is almost always a verb meaning to influence something (\"the news affected her mood\"). \"Effect\" is almost always a noun meaning a result (\"the effect was immediate\"). Rare exceptions exist in specialized fields, but this covers the vast majority of everyday sentences." },
          { question: "What is the difference between fewer and less?", answer: "\"Fewer\" traditionally applies to countable nouns (fewer cars, fewer people), and \"less\" applies to uncountable amounts (less water, less time). \"Less\" is increasingly used with countable nouns in informal usage, but the traditional distinction still holds in formal writing." },
          { question: "Is '10 items or less' grammatically correct?", answer: "By the traditional prescriptive rule, no — \"items\" is countable, so \"fewer\" is the traditionally correct choice. In practice, this exact substitution is a widely documented, long-running informal usage shift, which is why it appears so commonly on real signage despite formal style guides still preferring \"fewer.\"" },
          { question: "What is the difference between who and whom?", answer: "\"Who\" is the subject form, used when the word is doing the action (\"who called?\"). \"Whom\" is the object form, used when the word is receiving the action (\"whom did you call?\"). \"Whom\" has largely faded from casual speech but is still expected in formal writing." },
          { question: "Does 'literally' ever mean 'figuratively'?", answer: "Dictionaries including Merriam-Webster document an informal, intensifier use of \"literally\" that functions similarly to \"figuratively\" or \"really\" for emphasis (\"I literally died laughing\"). This is a documented secondary usage, not the word's original or formally preferred meaning, which remains \"actually, in a literal sense.\"" },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
