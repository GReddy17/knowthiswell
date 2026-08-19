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
  title: "Common Grammar Mistakes",
  category: "language-vocabulary",
  order: 6,
  subtopic: "grammar-foundations",
  tags: ["grammar", "common mistakes", "subject-verb agreement", "writing errors"],
  date: "2026-08-17",
  updated: "2026-08-17",
  lastReviewed: "2026-08-17",
  excerpt: "The grammar mistakes that show up again and again in everyday writing — subject-verb agreement, dangling modifiers, who versus whom — and the quick fix for each.",
  summary: "A handful of grammar mistakes — subject-verb agreement errors, dangling modifiers, mismatched pronouns, and mixed-up homophone pairs — account for most of the errors that make otherwise-good writing look sloppy.",
  sources: [
    { label: "Purdue Online Writing Lab — Common Writing Errors", url: "https://owl.purdue.edu/owl/general_writing/grammar/index.html" },
    { label: "Merriam-Webster — Grammar and Usage", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/sentence-structure-basics",
    "language-vocabulary/punctuation-rules",
    "language-vocabulary/active-vs-passive-voice",
  ],
  glossary: [
    { term: "Subject-verb agreement", definition: "The rule that a verb must match its subject in number — singular subjects take singular verbs, plural subjects take plural verbs." },
    { term: "Dangling modifier", definition: "A descriptive phrase placed so that it appears to modify the wrong word, usually because the word it's meant to describe is missing from the sentence." },
    { term: "Homophone", definition: "Words that sound alike but have different meanings and spellings — there/their/they're, your/you're, its/it's." },
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
      "A small set of grammar mistakes — subject-verb agreement, dangling modifiers, homophone mix-ups, and pronoun mismatches — accounts for most everyday writing errors.",
      "Most of these mistakes happen because English sentences can get long enough to lose track of what agrees with what, not because the underlying rule is obscure.",
      "Each mistake has a fast diagnostic test you can run on a sentence before you publish or send it.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Most grammar mistakes people actually make aren&apos;t exotic rule violations — they&apos;re a short, repeating list: making a verb agree with the wrong noun, describing a phrase so it seems to modify the wrong word, mixing up sound-alike words like &quot;their&quot; and &quot;there,&quot; or using &quot;who&quot; when &quot;whom&quot; is technically correct. None of these require deep grammar theory to fix — they need a quick, specific check.</div>}
      detailed={<div className="prose-p"><TermLink href="/language-vocabulary/common-grammar-mistakes">Subject-verb agreement</TermLink> errors happen most often when other words sit between the subject and its verb, tricking the ear into agreeing with the wrong noun — &quot;the box of documents were misplaced&quot; sounds almost right because &quot;documents&quot; (plural) sits right before the verb, but the actual subject is &quot;box&quot; (singular), so it should be &quot;was misplaced.&quot; A <TermLink href="/language-vocabulary/common-grammar-mistakes">dangling modifier</TermLink> happens when an introductory descriptive phrase has nothing correct to attach to — &quot;Walking to the store, the rain started&quot; implies the rain was walking to the store, because &quot;walking to the store&quot; needs to modify a person, and no person appears as the sentence&apos;s subject. <TermLink href="/language-vocabulary/common-grammar-mistakes">Homophone</TermLink> errors (their/there/they&apos;re, your/you&apos;re, its/it&apos;s) are spelling errors dressed up as grammar errors — the words sound identical, so writing under time pressure or autocorrect can swap the wrong one in without the writer noticing, since the sentence still &quot;sounds&quot; correct read aloud.</div>}
      />
      <FootnoteAside>&quot;Whom&quot; is grammatically fading from everyday spoken English even among careful speakers — many style guides now note it&apos;s acceptable to use &quot;who&quot; in most informal contexts, reserving strict who/whom distinction mainly for formal writing.</FootnoteAside>
      <p>
      Each of these error types has a specific, mechanical test that catches it — which is far more reliable than trying to &quot;hear&quot; whether a sentence sounds right.
      </p>
      <QuickCheck
      question="'The list of ingredients are on the back of the box.' What's the grammar error, and how do you fix it?"
      options={[
      { text: "There's no error — 'ingredients' is plural, so 'are' is correct.", correct: false, explanation: "The verb needs to agree with the actual subject of the sentence, 'list' (singular), not with 'ingredients,' which is inside a prepositional phrase describing the list." },
      { text: "Subject-verb agreement error — the subject is 'list' (singular), so it should be 'is,' not 'are.'", correct: true, explanation: "Correct. 'Of ingredients' is a prepositional phrase modifying 'list' — it's not the subject. The true subject, 'list,' is singular, so the verb must be 'is.'" },
      { text: "It should say 'lists' instead of 'list' to match 'are.'", correct: false, explanation: "Changing the noun would change the meaning (multiple lists versus one list) — the actual fix is matching the verb to the existing singular subject, not pluralizing the subject." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding the true subject in a long sentence (baseline case)</h3>
      <div className="prose-p">
      &quot;The results of the study, which took three years to complete, was surprising.&quot; The verb &quot;was&quot; needs to agree with the true subject, &quot;results&quot; — but &quot;results&quot; is plural, so it should be &quot;were.&quot; The confusion comes from the long descriptive clause (&quot;which took three years to complete&quot;) sitting right before the verb, making &quot;complete&quot; feel like it should influence the verb choice, when really the only word that matters is the original subject, &quot;results.&quot; The fix: mentally delete every modifying phrase and clause, leaving just subject and verb — &quot;The results... was surprising&quot; immediately sounds wrong once the distracting middle section is gone, revealing it should be &quot;were.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A dangling modifier that changes the meaning (edge case / variation)</h3>
      <div className="prose-p">
      &quot;After reviewing the budget, the project was approved.&quot; Grammatically, &quot;after reviewing the budget&quot; is a modifier with no stated subject of its own — it needs to attach to whoever did the reviewing. But the next word after the comma is &quot;the project,&quot; which can&apos;t review anything. The sentence technically implies &quot;the project&quot; reviewed the budget and then approved itself. The fix requires naming who actually did the reviewing: &quot;After reviewing the budget, the committee approved the project,&quot; or &quot;After the committee reviewed the budget, the project was approved.&quot; This kind of error is extremely common in professional writing specifically because passive voice (see the Active vs Passive Voice entry) often drops the doer of the action, leaving the introductory modifier with nothing correct to attach to.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Homophone errors that spellcheck won&apos;t catch (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Their going to announce the results tomorrow, and its going to change everything.&quot; Both &quot;their&quot; and &quot;its&quot; are wrong here — &quot;Their&quot; should be &quot;They&apos;re&quot; (they are), and &quot;its&quot; should be &quot;it&apos;s&quot; (it is). Standard spellcheck tools won&apos;t flag either error, because &quot;their&quot; and &quot;its&quot; are both correctly spelled real words — the mistake is choosing the wrong real word, not misspelling one. This is exactly why homophone errors survive into published writing more often than obvious typos: automated tools check spelling, not word choice, so catching these requires either careful proofreading or a grammar-checking tool that specifically models sentence meaning, not just dictionary lookup.
      </div>
      <QuickCheck
      question="'Everyone at the conference brought their own laptop.' Is 'their' used correctly here, even though 'everyone' is grammatically singular?"
      options={[
      { text: "No, it's an error — 'everyone' is singular, so it needs 'his or her,' not 'their.'", correct: false, explanation: "This was the traditional prescriptive rule, but 'singular they' with indefinite pronouns like 'everyone,' 'someone,' and 'anyone' is now accepted as correct by most major style guides and dictionaries, including for formal writing." },
      { text: "Yes — 'singular they' is now standard, accepted usage with indefinite pronouns like 'everyone,' even though 'everyone' takes a singular verb.", correct: true, explanation: "Correct. Major style guides (including Merriam-Webster and the Chicago Manual of Style) now accept 'they/their' as a grammatically standard singular pronoun with indefinite antecedents like 'everyone' or 'someone.'" },
      { text: "It's only correct in casual speech, never in formal writing.", correct: false, explanation: "Singular 'they' has been adopted by most major style guides for formal writing too, not just casual speech — this is a genuine, accepted shift in standard usage, not a colloquialism." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Four common grammar mistakes and their fixes"
      type="comparison"
      svgSrc="/diagrams/05-common-grammar-mistakes-fixes.svg"
      altText="Diagram showing four common grammar mistakes side by side with their corrections: subject-verb agreement (the results were surprising, not was), dangling modifiers (after reviewing the budget, the committee approved the project, not the project approved itself), homophone confusion (they're going, not their going), and misplaced apostrophes (its tail, not it's tail)."
      />
      <p>
      Notice that three of the four categories in the diagram are really about tracking down the true subject or doer of an action in a long sentence — agreement errors, dangling modifiers, and even some homophone slips often trace back to losing track of &quot;who or what is this sentence actually about&quot; once other words pile up around it.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Matching a verb to the nearest noun instead of the true subject in a long sentence.", fix: "Mentally strip out modifying phrases and clauses to isolate the actual subject before choosing the verb form." },
      { mistake: "Starting a sentence with a modifying phrase that has nothing correct to attach to.", fix: "Check that the word immediately after the introductory phrase is the one actually doing the action described in that phrase." },
      { mistake: "Relying on spellcheck to catch homophone errors (their/there/they're, your/you're, its/it's).", fix: "Read the sentence specifically checking word choice, not spelling — spellcheck won't flag a correctly-spelled wrong word." },
      { mistake: "Assuming 'who' is always correct and 'whom' is always overly formal (or vice versa).", fix: "Use 'who' for the subject of a clause ('who called?') and 'whom' for the object ('to whom should I address this?') — or substitute 'he/she' (who) versus 'him/her' (whom) as a quick test." },
      ]}
      />
      <MisconceptionCallout
      myth="Good writers never make grammar mistakes — errors are a sign of carelessness or poor education."
      reality={<p>Even highly skilled, professionally published writers make these exact mistakes regularly in first drafts — subject-verb agreement errors and dangling modifiers are notoriously easy to introduce while revising a sentence (moving a clause around can accidentally separate a subject from its verb, or strand a modifier). What separates careful writers isn&apos;t an absence of first-draft errors, it&apos;s a reliable editing pass that specifically checks for these known trouble spots before publishing — which is a learnable habit, not an innate talent.</p>}
      />
      <QuickCheck
      question="'Reaching for the top shelf, the ladder wobbled.' What's wrong with this sentence?"
      options={[
      { text: "Nothing — the sentence correctly describes the ladder wobbling while someone reached for the shelf.", correct: false, explanation: "As written, the sentence literally says the ladder itself was reaching for the top shelf, since 'reaching' has nothing else in the sentence to attach to." },
      { text: "It's a dangling modifier — 'reaching for the top shelf' has no person to attach to, so it grammatically describes the ladder instead.", correct: true, explanation: "Correct. Fix it by naming who was reaching: 'Reaching for the top shelf, she felt the ladder wobble,' or 'As she reached for the top shelf, the ladder wobbled.'" },
      { text: "It's a subject-verb agreement error.", correct: false, explanation: "The verb 'wobbled' correctly agrees with its subject 'ladder' — the problem is the introductory phrase attaching to the wrong noun, not verb agreement." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before sending an important email, strip modifying phrases from your longest sentence to check the subject actually matches the verb.",
      "Check every introductory phrase (anything before the first comma) attaches to the correct doer immediately after it.",
      "Read your own writing specifically hunting for their/there/they're, your/you're, and its/it's — don't trust spellcheck to catch these.",
      "Read the related entry on Editing & Proofreading Basics for a full pre-publish checklist that catches these systematically.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is subject-verb agreement?", answer: "The rule that a verb must match its subject in number — singular subjects need singular verbs ('the dog runs'), plural subjects need plural verbs ('the dogs run'). Errors usually happen when other words separate the subject from its verb." },
      { question: "What is a dangling modifier?", answer: "A descriptive phrase, usually at the start of a sentence, that has no correct word to attach to — so it grammatically (and often absurdly) attaches to the wrong noun, like 'Walking to school, the backpack felt heavy' (implying the backpack was walking)." },
      { question: "Is it 'who' or 'whom'?", answer: "'Who' is used as the subject of a clause ('who is calling?'); 'whom' is used as the object ('to whom am I speaking?'). A quick test: if you can replace it with 'he/she,' use 'who'; if you can replace it with 'him/her,' use 'whom.'" },
      { question: "Why does spellcheck miss so many grammar errors?", answer: "Spellcheck verifies that words are spelled correctly, not that the correct word was chosen. Homophones like 'their/there/they're' are all correctly spelled, so spellcheck has nothing to flag even when the wrong one is used." },
      { question: "Is 'their' correct with singular words like 'everyone' or 'someone'?", answer: "Yes — 'singular they' (using they/their with a grammatically singular indefinite pronoun) is now accepted as standard by most major style guides and dictionaries, in both casual and formal writing." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
