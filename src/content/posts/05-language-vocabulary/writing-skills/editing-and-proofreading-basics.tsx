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
  title: "Editing & Proofreading Basics",
  category: "language-vocabulary",
  order: 17,
  subtopic: "writing-skills",
  tags: ["editing", "proofreading", "revision", "writing process"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Editing and proofreading are two different passes with two different jobs — one fixes the big picture, the other catches what's left on the surface.",
  summary: "Editing revises writing for clarity, organization, and argument strength, while proofreading is the final pass that catches surface-level errors like spelling and punctuation — and doing them in the right order, editing before proofreading, saves real time.",
  sources: [
    { label: "Purdue Online Writing Lab — Steps for Revising Your Paper", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/steps_for_revising.html" },
    { label: "Merriam-Webster — Grammar", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/common-grammar-mistakes",
    "language-vocabulary/punctuation-rules",
    "language-vocabulary/essay-writing-structure",
  ],
  glossary: [
    { term: "Editing", definition: "Revising a piece of writing for clarity, organization, word choice, and argument strength — the 'big picture' pass, done before proofreading." },
    { term: "Proofreading", definition: "The final pass checking for surface-level errors — spelling, punctuation, grammar, and formatting — done after editing, not instead of it." },
    { term: "Read-aloud test", definition: "A proofreading technique where reading text aloud (or having software read it) surfaces awkward phrasing and missed words that silent reading tends to skip over." },
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
          "Editing and proofreading are two different jobs: editing revises the big-picture content (clarity, organization, argument), while proofreading catches surface-level errors (spelling, punctuation, typos).",
          "Doing them in the wrong order wastes time — proofreading a paragraph you're about to cut or rewrite during editing is effort spent on text that won't survive.",
          "Spelling and grammar-check tools help but don't replace proofreading — they reliably miss correctly-spelled wrong words and some context-dependent errors.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/language-vocabulary/editing-and-proofreading-basics">Editing</TermLink> means reworking a piece of writing for the big things — is the argument clear, is it organized well, are the right details in the right place. <TermLink href="/language-vocabulary/editing-and-proofreading-basics">Proofreading</TermLink> means the final check for small things — typos, spelling mistakes, missing punctuation. They&apos;re different jobs, and doing editing first, then proofreading, saves time: no point fixing the spelling in a paragraph you&apos;re about to cut entirely.</div>}
        detailed={<div className="prose-p">Editing operates at multiple levels that are worth separating even within the &quot;editing&quot; pass itself: structural editing (does the overall organization make sense — should sections be reordered or cut), then paragraph- and sentence-level editing (is each paragraph doing its job, are sentences clear and not needlessly complex), and only then word-level editing (precise word choice, removing filler). Proofreading comes last and looks only at the surface: spelling, punctuation, grammar, capitalization, and formatting consistency. A useful technique for catching what silent reading misses is the <TermLink href="/language-vocabulary/editing-and-proofreading-basics">read-aloud test</TermLink> — reading the text out loud (or using text-to-speech) forces you to process every word individually rather than letting your brain autocomplete familiar sentence patterns, which is exactly how missing or duplicated words slip past silent proofreading. A related trick for catching pure spelling errors is reading a document backward, sentence by sentence — it breaks the flow of meaning that otherwise lets your brain &quot;autocorrect&quot; errors without you noticing them.</div>}
      />
      <FootnoteAside>The word &quot;proofread&quot; comes directly from the print shop: a &quot;proof&quot; was — and still is — a trial print run of typeset text, made specifically so it could be checked for errors before the full print run went ahead. Reading these test copies for mistakes is where &quot;proofreading&quot; gets its name, and it&apos;s a genuinely narrower task than editing was ever meant to describe.</FootnoteAside>
      <p>
      With editing and proofreading understood as sequential, different-purpose passes, the most common time-wasting mistake in revision is easy to spot: doing them in the wrong order, or skipping straight to proofreading before the content itself is settled.
      </p>

      <QuickCheck
        question="A writer spends 20 minutes fixing typos and commas in a paragraph, then decides the paragraph doesn't fit the essay and deletes it entirely. What went wrong with their process?"
        options={[
          { text: "Nothing — proofreading should always happen first.", correct: false, explanation: "This is backward. Proofreading a paragraph before deciding whether it belongs in the piece at all wastes effort on text that might not survive editing." },
          { text: "They proofread before editing, spending time polishing content that structural editing later removed.", correct: true, explanation: "Correct. Editing (deciding what stays, what's cut, what's reorganized) should generally happen before the fine-detail proofreading pass, to avoid polishing text that won't make the final draft." },
          { text: "They should have used a grammar-checking tool instead of proofreading manually.", correct: false, explanation: "The issue described is about sequencing (proofreading before editing), not about which proofreading method was used." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Editing a paragraph for clarity before touching punctuation (baseline case)</h3>
      <div className="prose-p">
      Draft: &quot;There are a lot of reasons why the project which we started last year and which has had some delays is something that the team feels is important to finish, even though there have been some setbacks along the way that have made it difficult.&quot; Edited: &quot;Despite delays, the team believes the project we started last year is worth finishing.&quot; Editing here cut redundant phrasing, tightened the sentence structure, and kept the same meaning in a third of the words — this is content-and-clarity work, done before any spelling or punctuation check.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why editing and proofreading need to be separate passes, not one combined pass (variation / exception)</h3>
      <div className="prose-p">
      Trying to fix commas and simultaneously judge whether a whole section should be cut leads to worse results at both jobs — attention split between &quot;is this word spelled right&quot; and &quot;does this paragraph actually belong here&quot; makes writers miss structural problems (because they&apos;re distracted by small ones) and miss small errors (because they&apos;re focused on bigger judgment calls). Professional editors typically make at least two clearly separate passes for exactly this reason, sometimes with a break in between to read the piece with fresher eyes.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Proofreading a resume or important email before sending (real-world / applied case)</h3>
      <div className="prose-p">
      A cover letter that reads &quot;I am detail-oriented and pay close attention to details&quot; (unedited redundancy) with &quot;Thankyou for you&apos;re consideration&quot; (unproofread homophone and spacing errors) undercuts its own claim in the worst possible place. In high-stakes documents like resumes, cover letters, and important client emails, a final read-aloud pass, ideally after stepping away for even a few minutes, catches exactly the kind of error that silent, in-the-moment rereading tends to miss — including the kind that automated spellcheckers won&apos;t flag, since &quot;you&apos;re&quot; and &quot;thankyou&quot; spacing pass a spellchecker while still being wrong.
      </div>

      <QuickCheck
        question="Why does reading a piece of writing aloud help catch proofreading errors that silent reading misses?"
        options={[
          { text: "It doesn't actually help — it's a myth with no real basis.", correct: false, explanation: "Reading aloud is a widely used, genuinely effective proofreading technique, not a myth." },
          { text: "It forces the reader to process every word individually instead of letting familiar sentence patterns get skimmed over automatically.", correct: true, explanation: "Correct. Silent reading of familiar-sounding text lets the brain fill in or skip over small errors; reading aloud (or via text-to-speech) slows that process down." },
          { text: "It automatically fixes grammar mistakes as you read.", correct: false, explanation: "Reading aloud doesn't fix anything automatically — it's a technique for a human to notice errors more reliably, not a correction tool." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Proofreading for typos and commas before the content and structure are settled.", fix: "Do a full editing pass first — cutting, reordering, clarifying — then proofread the resulting final draft, not an earlier version likely to change." },
          { mistake: "Relying entirely on spellcheck or grammar-check software as the only proofreading step.", fix: "Still do a manual read-through, ideally aloud — automated tools reliably miss correctly-spelled wrong words like 'their' for 'there' and some context-dependent grammar issues." },
          { mistake: "Proofreading immediately after finishing a draft, with no break in between.", fix: "Step away for at least a few minutes (longer if possible) before proofreading — fresh eyes catch errors that a brain still 'in' the writing tends to auto-correct while reading." },
        ]}
      />
      <MisconceptionCallout
        myth="Running spellcheck or an AI grammar tool catches all your writing errors, so manual proofreading isn't necessary."
        reality={<p>Spellcheckers only catch words that aren&apos;t real words at all — they can&apos;t flag a correctly spelled wrong word, like &quot;their&quot; used where &quot;there&quot; was meant, or &quot;affect&quot; where &quot;effect&quot; belongs. Grammar-checking and AI writing tools catch more than basic spellcheckers but still miss context-dependent meaning errors and sometimes suggest changes that are grammatically fine but factually or stylistically wrong for what the writer intended. These tools are a useful first pass, not a substitute for a human proofreading read-through.</p>}
      />

      <QuickCheck
        question="A writer's document passes spellcheck with zero flagged errors, but a sentence reads: 'The affect of the policy was immediate.' What does this show?"
        options={[
          { text: "Spellcheck missed a genuine error because \"affect\" is a correctly spelled word, just the wrong one for this sentence.", correct: true, explanation: "Correct. \"Affect\" (usually a verb) is spelled correctly but used where the noun \"effect\" is needed — exactly the kind of error spellcheckers can't catch, since the word itself exists and is spelled right." },
          { text: "This proves spellcheck tools are entirely useless.", correct: false, explanation: "Spellcheck tools remain useful for genuine misspellings — the point is that they have a specific, real blind spot for correctly-spelled wrong words, not that they add no value at all." },
          { text: "This is a punctuation error, not a spelling or word-choice error.", correct: false, explanation: "There's no punctuation problem in the sentence — the issue is a word-choice error (affect vs. effect) that happens to be invisible to a basic spellchecker." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you revise something you've written, do a full editing pass (content, organization) before a separate proofreading pass (spelling, punctuation).",
          "Before sending an important document, read it aloud once — notice what it catches that silent rereading didn't.",
          "Don't fully trust a clean spellcheck result — scan specifically for common correctly-spelled mix-ups like their/there/they're and affect/effect.",
          "Read the related entry on Common Grammar Mistakes for the specific errors a proofreading pass should be watching for.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between editing and proofreading?", answer: "Editing revises content, organization, and clarity — the big picture. Proofreading is the final pass that checks surface-level errors like spelling, punctuation, and grammar, done after the content itself is settled." },
          { question: "Should you edit or proofread first?", answer: "Edit first. Proofreading a section that might still be cut or rewritten during editing wastes effort on text that may not survive to the final draft." },
          { question: "Does spellcheck replace proofreading?", answer: "No. Spellcheck only flags words that aren't real words — it misses correctly-spelled wrong words like \"their\" for \"there,\" so a manual proofreading pass is still needed." },
          { question: "Why does reading your writing out loud help with proofreading?", answer: "It forces you to process each word individually instead of letting familiar phrasing get skimmed over, which is how missing words, repeated words, and awkward phrasing tend to slip past silent rereading." },
          { question: "How many times should you proofread a document?", answer: "There's no fixed number, but most writing benefits from at least one full read-through focused only on surface errors, ideally after a break from the writing and after the content-level editing is finished." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
