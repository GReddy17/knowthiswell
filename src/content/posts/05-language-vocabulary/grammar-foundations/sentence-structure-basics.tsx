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
  title: "Sentence Structure Basics",
  category: "language-vocabulary",
  order: 2,
  subtopic: "grammar-foundations",
  tags: ["grammar", "sentence structure", "clauses", "subject and predicate", "writing"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How English sentences are actually built — subjects, predicates, clauses, and the four sentence types — explained with real examples, not diagramming worksheets.",
  summary: "Every complete English sentence needs a subject and a predicate, and combining clauses in different ways produces the four sentence types: simple, compound, complex, and compound-complex.",
  sources: [
    { label: "Purdue Online Writing Lab — Sentence Structure", url: "https://owl.purdue.edu/owl/general_writing/mechanics/sentence_clarity.html" },
    { label: "Merriam-Webster — Grammar: Sentence Types", url: "https://www.merriam-webster.com/grammar/four-types-of-sentence-structure" },
  ],
  seeAlso: [
    "language-vocabulary/parts-of-speech-explained",
    "language-vocabulary/common-grammar-mistakes",
    "language-vocabulary/paragraph-writing-basics",
  ],
  glossary: [
    { term: "Independent clause", definition: "A group of words with a subject and a verb that can stand alone as a complete sentence." },
    { term: "Dependent clause", definition: "A group of words with a subject and a verb that cannot stand alone — it depends on an independent clause to complete its meaning." },
    { term: "Predicate", definition: "The part of a sentence that says something about the subject — usually built around the main verb." },
    { term: "Run-on sentence", definition: "Two or more independent clauses joined without the correct punctuation or connecting word between them." },
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
      "Every complete sentence needs two things: a subject (who or what) and a predicate (what's being said about it).",
      "Clauses combine in specific patterns to make the four sentence types — simple, compound, complex, and compound-complex — and each type does a different rhetorical job.",
      "Most 'this sentence feels off' problems (run-ons, fragments, comma splices) come down to mishandling how clauses connect, not vocabulary or spelling.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A sentence is a complete thought, and every complete sentence in English has two required parts: a <TermLink href="/language-vocabulary/sentence-structure-basics">subject</TermLink> (who or what the sentence is about) and a <TermLink href="/language-vocabulary/sentence-structure-basics">predicate</TermLink> (what&apos;s being said about that subject, built around a verb). &quot;Birds fly&quot; is a complete sentence — &quot;Birds&quot; is the subject, &quot;fly&quot; is the predicate. Everything else in English grammar — clauses, phrases, sentence types — is really just different ways of combining and dressing up that basic subject-predicate pair.</div>}
      detailed={<div className="prose-p">The building block above the word level is the <em>clause</em> — a group of words containing both a subject and a verb. An <TermLink href="/language-vocabulary/sentence-structure-basics">independent clause</TermLink> can stand alone as a complete sentence (&quot;I finished the report&quot;). A <TermLink href="/language-vocabulary/sentence-structure-basics">dependent clause</TermLink> has a subject and verb too, but starts with a word (because, although, when, if, that) that makes it incomplete on its own (&quot;Because I finished the report&quot; — technically has a subject and verb, but you&apos;re left waiting for the rest). English sentences are classified by how many of each clause type they contain: a <strong>simple sentence</strong> is one independent clause; a <strong>compound sentence</strong> joins two or more independent clauses with a coordinating conjunction (and, but, or, so) or a semicolon; a <strong>complex sentence</strong> combines one independent clause with at least one dependent clause; and a <strong>compound-complex sentence</strong> combines two or more independent clauses with at least one dependent clause. This isn&apos;t just classification for its own sake — the choice of sentence type controls pacing and emphasis in writing.</div>}
      />
      <FootnoteAside>The shortest possible complete sentence in English is technically a single word: an imperative like &quot;Stop.&quot; or &quot;Run!&quot; — the subject (&quot;you&quot;) is grammatically present but unstated, which linguists call an &quot;understood subject.&quot;</FootnoteAside>
      <p>
      Knowing the four sentence types is useful, but the real payoff is being able to spot when clauses are combined incorrectly — which is where most everyday grammar errors actually live.
      </p>
      <QuickCheck
      question="Which of these is a dependent clause on its own, not a complete sentence?"
      options={[
      { text: "The rain stopped.", correct: false, explanation: "This has a subject ('The rain') and a verb ('stopped') and expresses a complete thought — it's an independent clause, a full sentence on its own." },
      { text: "Although the rain stopped", correct: true, explanation: "Correct. This has a subject and verb ('the rain stopped'), but the word 'Although' makes it dependent — you're left expecting the rest of the thought ('...we stayed inside')." },
      { text: "Stop the car.", correct: false, explanation: "This is a complete imperative sentence with an understood subject ('you') — it doesn't need anything else to be grammatically whole." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Identifying subject and predicate (baseline case)</h3>
      <div className="prose-p">
      Take &quot;The old lighthouse keeper checked the lamp every night.&quot; Splitting this into its two required parts: the subject is &quot;The old lighthouse keeper&quot; (everything describing who the sentence is about), and the predicate is &quot;checked the lamp every night&quot; (everything describing what he did). Note that the subject isn&apos;t just one word — &quot;old&quot; and &quot;lighthouse keeper&quot; are all part of the noun phrase that makes up the full subject. The predicate similarly isn&apos;t just the verb &quot;checked&quot; — it includes the object (&quot;the lamp&quot;) and the modifying phrase (&quot;every night&quot;). This full-subject / full-predicate split is the fastest way to check whether a group of words is actually a complete sentence: cover up everything except what you think is the subject, then check if what&apos;s left makes a coherent statement about it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Building all four sentence types from the same idea (edge case / variation)</h3>
      <div className="prose-p">
      Start with two facts: &quot;The power went out&quot; and &quot;we lit candles.&quot; As a <strong>simple sentence</strong>, you&apos;d write just one: &quot;The power went out.&quot; As a <strong>compound sentence</strong>, join both independent clauses with a coordinating conjunction: &quot;The power went out, and we lit candles.&quot; As a <strong>complex sentence</strong>, subordinate one clause to the other: &quot;When the power went out, we lit candles&quot; (the &quot;when&quot; clause is now dependent, subordinate to the main action). As a <strong>compound-complex sentence</strong>, combine all of it: &quot;When the power went out, we lit candles, and the kids thought it was an adventure&quot; — one dependent clause plus two independent clauses. Same core information, four different emphases: the simple version is blunt, the compound version treats both events as equally important, the complex version emphasizes the second event as the point, and the compound-complex version adds a third idea into the mix.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Fixing a run-on sentence (real-world / applied case)</h3>
      <div className="prose-p">
      A common real-world sentence problem: &quot;I finished my homework I went outside to play.&quot; This is a <TermLink href="/language-vocabulary/sentence-structure-basics">run-on sentence</TermLink> — two independent clauses (&quot;I finished my homework&quot; and &quot;I went outside to play&quot;) jammed together with no connector at all. There are several correct fixes, each with a slightly different feel: split into two sentences (&quot;I finished my homework. I went outside to play.&quot;), join with a coordinating conjunction and comma (&quot;I finished my homework, and I went outside to play.&quot;), join with a semicolon if the ideas are closely related (&quot;I finished my homework; I went outside to play.&quot;), or subordinate one clause (&quot;After I finished my homework, I went outside to play.&quot;). None of these is &quot;more correct&quot; than the others in an absolute sense — the right choice depends on how closely connected the two ideas are and how you want the sentence to read.
      </div>
      <QuickCheck
      question="'I love hiking, my sister prefers swimming.' What's wrong with this sentence, and what type of error is it?"
      options={[
      { text: "Nothing is wrong — it's a correctly punctuated compound sentence.", correct: false, explanation: "A comma alone cannot join two independent clauses in standard English — this is exactly the error being tested." },
      { text: "It's a comma splice — two independent clauses joined by only a comma, with no coordinating conjunction or semicolon.", correct: true, explanation: "Correct. Both halves ('I love hiking' and 'my sister prefers swimming') are independent clauses. A comma alone can't join them — you need 'and'/'but' after the comma, a semicolon instead of the comma, or a period." },
      { text: "It's a sentence fragment because the second clause has no subject.", correct: false, explanation: "The second clause does have a subject ('my sister') and a verb ('prefers') — the problem isn't a missing piece, it's how the two complete clauses are connected." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The four sentence types, built from the same two clauses"
      type="comparison"
      svgSrc="/diagrams/05-sentence-structure-basics-types.svg"
      altText="Diagram showing four sentence types built from the same two clauses (the power went out / we lit candles): simple sentence using one clause alone, compound sentence joining both independent clauses with a coordinating conjunction, complex sentence subordinating one clause with 'when', and compound-complex sentence combining a dependent clause with two independent clauses."
      />
      <p>
      The diagram uses the same two facts throughout so you can see exactly what changes between sentence types — it&apos;s never the content that changes, only how the clauses are wired together. That&apos;s the core skill: once you can spot an independent clause and a dependent clause, you can consciously choose which sentence type best serves what you&apos;re trying to say.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Joining two independent clauses with just a comma (a comma splice).", fix: "Add a coordinating conjunction after the comma ('and', 'but', 'so'), swap the comma for a semicolon, or split into two sentences." },
      { mistake: "Writing a sentence fragment by punctuating a dependent clause as if it were complete.", fix: "Check whether the clause can stand alone as a full thought — if it starts with 'because,' 'although,' 'when,' or 'if' and trails off, attach it to an independent clause instead of ending it with a period." },
      { mistake: "Overusing simple sentences, making writing feel choppy and disconnected.", fix: "Combine related simple sentences into compound or complex ones to show how the ideas relate to each other, not just that they both happened." },
      { mistake: "Stringing too many clauses together into one overloaded compound-complex sentence.", fix: "If a sentence needs more than one comma to track, consider whether it should be split into two shorter sentences for clarity." },
      ]}
      />
      <MisconceptionCallout
      myth="A long sentence is automatically a run-on sentence, and a short sentence is automatically 'correct' grammar."
      reality={<p>Length has nothing to do with it. A run-on sentence is specifically about how independent clauses are connected (or not connected) — a 40-word sentence can be perfectly grammatical if its clauses are joined correctly, while a 6-word sentence can be a run-on (&quot;I&apos;m tired I want sleep&quot;). The test is always structural: are there two or more independent clauses, and if so, are they joined with the correct punctuation or conjunction?</p>}
      />
      <QuickCheck
      question="'Because she studied every night for a month' — is this a complete sentence?"
      options={[
      { text: "Yes, because it has a clear subject and verb.", correct: false, explanation: "Having a subject and verb isn't sufficient on its own — the word 'Because' makes this a dependent clause, leaving the reader expecting the rest of the thought." },
      { text: "No, it's a sentence fragment — a dependent clause with no independent clause attached.", correct: true, explanation: "Correct. 'Because' subordinates the clause, so it needs to be attached to an independent clause to be complete, e.g. 'Because she studied every night for a month, she passed the exam.'" },
      { text: "It depends on the punctuation used at the end.", correct: false, explanation: "Punctuation doesn't fix this — the issue is structural (a dependent clause standing alone), not a missing period or comma." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Take a paragraph you've written and label each sentence's type (simple, compound, complex, compound-complex) — notice if you're overusing one type.",
      "Next time a sentence feels like a run-on when you read it aloud, check whether it has two independent clauses joined by only a comma.",
      "Practice building all four sentence types from the same two ideas, the way Example 2 does — it's the fastest way to internalize the pattern.",
      "Read the related entry on Common Grammar Mistakes for more on run-ons, fragments, and comma splices specifically.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a phrase and a clause?", answer: "A clause has both a subject and a verb ('the dog barked'); a phrase does not ('the barking dog', 'in the morning'). Clauses can potentially stand alone as sentences (if independent); phrases never can on their own." },
      { question: "What are the 4 types of sentence structure?", answer: "Simple (one independent clause), compound (two or more independent clauses joined by a conjunction or semicolon), complex (one independent clause plus at least one dependent clause), and compound-complex (two or more independent clauses plus at least one dependent clause)." },
      { question: "What is a run-on sentence?", answer: "A run-on sentence joins two or more independent clauses without the correct connector — either no punctuation at all, or just a comma where a conjunction, semicolon, or period is needed." },
      { question: "Is a sentence fragment always wrong?", answer: "In formal writing, yes — it's considered an error. In dialogue, advertising, and informal writing, short fragments ('Not today.' 'Absolutely.') are used deliberately for effect and are generally accepted stylistically." },
      { question: "How do I know if a clause is dependent or independent?", answer: "Try reading it alone. If it expresses a complete thought and makes sense by itself, it's independent. If it starts with a subordinating word (because, although, since, if, when, that) and leaves you expecting more, it's dependent." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
