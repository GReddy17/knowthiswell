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
  title: "Punctuation Rules",
  category: "language-vocabulary",
  order: 5,
  subtopic: "grammar-foundations",
  tags: ["grammar", "punctuation", "commas", "apostrophes", "semicolons", "writing"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The punctuation marks that actually cause confusion — commas, semicolons, colons, and apostrophes — explained by what job each one does, not a giant rule list to memorize.",
  summary: "Most punctuation marks each do one specific job — separating, joining, introducing, or showing possession — and most punctuation mistakes come from using the wrong mark for the job, not from not knowing any rules at all.",
  sources: [
    { label: "Purdue Online Writing Lab — Punctuation", url: "https://owl.purdue.edu/owl/general_writing/punctuation/index.html" },
    { label: "Merriam-Webster — Grammar: Punctuation Marks", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/sentence-structure-basics",
    "language-vocabulary/common-grammar-mistakes",
    "language-vocabulary/editing-and-proofreading-basics",
  ],
  glossary: [
    { term: "Comma splice", definition: "Joining two independent clauses with only a comma, when a conjunction, semicolon, or period is needed instead." },
    { term: "Serial comma", definition: "The comma before the final 'and' or 'or' in a list of three or more items — also called the Oxford comma. Style guides differ on whether to use it." },
    { term: "Apostrophe of possession", definition: "The apostrophe-s used to show ownership — 'the dog's bone' — distinct from the apostrophe used in contractions like 'don't.'" },
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
      "Each punctuation mark has one core job: commas separate, semicolons join closely related independent clauses, colons introduce, and apostrophes show possession or mark a missing letter.",
      "The three most commonly confused marks — comma, semicolon, and colon — can be told apart by what comes before and after them, not by feel.",
      "'Its' versus 'it's' and other apostrophe errors are the single most common punctuation mistake in everyday writing, and the fix is a one-question test, not a memorized rule.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Punctuation marks aren&apos;t random decoration — each one signals something specific to the reader about how the words around it connect. A comma tells the reader &quot;pause briefly, this is a separate item or aside.&quot; A period tells the reader &quot;full stop, sentence complete.&quot; An apostrophe tells the reader &quot;something is owned&quot; or &quot;a letter is missing.&quot; Learning punctuation is really learning what job each mark is doing, then matching the right mark to the right job.</div>}
      detailed={<div className="prose-p">The marks that cause the most real-world confusion are the ones that can all plausibly connect two clauses, but do it differently. A <TermLink href="/language-vocabulary/punctuation-rules">comma</TermLink> alone cannot join two independent clauses (that&apos;s a <TermLink href="/language-vocabulary/punctuation-rules">comma splice</TermLink>) — it needs a coordinating conjunction alongside it (&quot;and,&quot; &quot;but,&quot; &quot;so&quot;). A semicolon can join two independent clauses on its own, without a conjunction, when the clauses are closely related in meaning (&quot;I have a meeting at noon; I&apos;ll call you after&quot;). A colon introduces something — a list, an explanation, or a quotation — and what follows it should relate directly to what came before (&quot;She had one goal: to win&quot;). The reason these three get confused constantly is that all three can sit between two clause-like chunks of a sentence, but only a semicolon can join two full independent clauses without extra help, and a colon specifically requires the first part to be a complete independent clause on its own.</div>}
      />
      <FootnoteAside>The serial comma (also called the Oxford comma) — the comma before &quot;and&quot; in a list like &quot;red, white, and blue&quot; — is one of the most debated style choices in English punctuation. Some style guides require it, some drop it, and the debate isn&apos;t really about correctness; both are valid, consistent conventions.</FootnoteAside>
      <p>
      With the &quot;what job does this mark do&quot; framing in mind, the trickiest real-world punctuation decisions become much more mechanical to work through.
      </p>
      <QuickCheck
      question="'I finished the report, I sent it to my manager.' What's the punctuation problem here?"
      options={[
      { text: "Nothing — a comma is the correct way to join two related actions.", correct: false, explanation: "A comma alone can't join two independent clauses ('I finished the report' and 'I sent it to my manager') — this is a comma splice." },
      { text: "It's a comma splice — two independent clauses joined by only a comma.", correct: true, explanation: "Correct. Fix it with a semicolon ('report; I sent'), a coordinating conjunction after the comma ('report, and I sent'), or a period splitting it into two sentences." },
      { text: "The sentence needs a colon instead of a comma.", correct: false, explanation: "A colon wouldn't fix this either — a colon requires the first clause to introduce what follows, which isn't what's happening here. The real fix is a semicolon, conjunction, or period." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comma, semicolon, or colon — choosing between the three (baseline case)</h3>
      <div className="prose-p">
      Take the two ideas &quot;I love hiking&quot; and &quot;my sister prefers swimming.&quot; With a comma alone: &quot;I love hiking, my sister prefers swimming&quot; — incorrect, a comma splice. With a comma plus conjunction: &quot;I love hiking, but my sister prefers swimming&quot; — correct, standard compound sentence. With a semicolon: &quot;I love hiking; my sister prefers swimming&quot; — also correct, since both are independent clauses closely related in contrast. With a colon: &quot;My family has one shared trait: outdoor hobbies&quot; — this works because the first part is a complete independent clause introducing what follows, which &quot;I love hiking&quot; doesn&apos;t do for &quot;my sister prefers swimming.&quot; The colon example shows why a colon isn&apos;t interchangeable with a semicolon even though both can sit between two clause-like chunks — a colon specifically sets up an explanation or elaboration, a semicolon just links two related-but-separate complete thoughts.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Its versus it&apos;s — the apostrophe error everyone makes (edge case / variation)</h3>
      <div className="prose-p">
      &quot;Its&quot; (no apostrophe) is a possessive pronoun, like &quot;his&quot; or &quot;her&quot; — &quot;the dog wagged its tail.&quot; &quot;It&apos;s&quot; (with an apostrophe) is always a contraction of &quot;it is&quot; or &quot;it has&quot; — &quot;it&apos;s raining&quot; means &quot;it is raining.&quot; The confusion happens because apostrophes usually show possession elsewhere (&quot;the dog&apos;s tail&quot;), so people expect &quot;its&quot; to need one too — but personal pronouns (his, hers, its, theirs, yours) never take an apostrophe for possession, unlike regular nouns. The reliable test: mentally expand the word to &quot;it is&quot; or &quot;it has.&quot; If the sentence still makes sense, use &quot;it&apos;s.&quot; &quot;The company announced it&apos;s [it is] quarterly results&quot; fails the test (it should be &quot;its quarterly results&quot;), while &quot;it&apos;s [it is] been a long week&quot; passes.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Punctuating a list correctly, including the serial comma debate (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;I packed a jacket, boots and a flashlight&quot; versus &quot;I packed a jacket, boots, and a flashlight.&quot; The only difference is the comma before &quot;and&quot; — the serial (Oxford) comma. Both versions are grammatically defensible; major style guides genuinely disagree (many newspapers drop it, most book and academic publishers use it). The real-world case where it matters is ambiguity: &quot;I&apos;d like to thank my parents, Beyoncé and God&quot; (no serial comma) can misread as claiming Beyoncé and God are your parents, while &quot;I&apos;d like to thank my parents, Beyoncé, and God&quot; (with the serial comma) can&apos;t be misread that way. This is the actual argument for using it consistently — not that the no-comma version is wrong, but that the comma version is never ambiguous, while the no-comma version sometimes is.
      </div>
      <QuickCheck
      question="'The company reported it's best quarter yet.' Is this sentence punctuated correctly?"
      options={[
      { text: "Yes — 'it's' correctly shows the quarter belongs to the company.", correct: false, explanation: "This confuses the contraction with the possessive. Possession here needs 'its' (no apostrophe), since 'it's' can only mean 'it is' or 'it has.'" },
      { text: "No — it should be 'its best quarter,' since this is possession, not a contraction of 'it is.'", correct: true, explanation: "Correct. Test it: 'the company reported it is best quarter yet' doesn't make sense, which confirms the sentence needs the possessive 'its,' with no apostrophe." },
      { text: "No — the whole sentence needs a semicolon after 'company.'", correct: false, explanation: "The semicolon isn't the issue here at all — the actual error is the apostrophe in 'it's' where the possessive 'its' is needed." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="What job each punctuation mark does"
      type="comparison"
      svgSrc="/diagrams/05-punctuation-rules-jobs.svg"
      altText="Diagram comparing four punctuation marks by function: comma (separates items or adds a pause, needs a conjunction to join two full clauses), semicolon (joins two closely related independent clauses without a conjunction), colon (introduces a list, explanation, or elaboration after a complete independent clause), and apostrophe (shows possession or marks a missing letter in a contraction)."
      />
      <p>
      Notice that comma, semicolon, and colon all sit visually &quot;between two things,&quot; which is exactly why they get confused — but the diagram shows each one requires a different relationship between what&apos;s on its left and what&apos;s on its right. Once you check that relationship first, picking the right mark becomes mechanical rather than a guess.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Joining two independent clauses with only a comma (comma splice).", fix: "Add a conjunction after the comma, swap in a semicolon, or split into two sentences." },
      { mistake: "Confusing 'its' (possessive) with 'it's' (contraction of 'it is'/'it has').", fix: "Mentally expand to 'it is' — if the sentence still works, use the apostrophe; if not, use 'its.'" },
      { mistake: "Using an apostrophe to make a plural noun, like 'apple's for sale'.", fix: "Apostrophes never make a word plural on their own — 'apples' (no apostrophe) is the plural; the apostrophe version would incorrectly imply possession or a contraction." },
      { mistake: "Using a colon after an incomplete clause, like 'My favorite foods are: pizza, pasta, and sushi.'", fix: "A colon needs a complete independent clause before it — 'My favorite foods are pizza, pasta, and sushi' (no colon) or 'I have three favorite foods: pizza, pasta, and sushi' (colon works because the first part is complete on its own)." },
      ]}
      />
      <MisconceptionCallout
      myth="A comma should be placed wherever you'd naturally pause while reading a sentence aloud."
      reality={<p>This is a common but unreliable rule of thumb — natural speech pauses don&apos;t map cleanly onto grammatical comma rules, and following it leads to both missing necessary commas and inserting unnecessary ones. Comma placement follows structural rules (separating items in a list, setting off an introductory phrase, joining clauses with a conjunction, setting off non-essential information) rather than the rhythm of speech. A sentence can have a natural speaking pause with no grammatical reason for a comma there, and vice versa.</p>}
      />
      <QuickCheck
      question="'My brother who lives in Denver is visiting this weekend.' Versus 'My brother, who lives in Denver, is visiting this weekend.' What's the actual difference in meaning?"
      options={[
      { text: "No real difference — the commas are just stylistic.", correct: false, explanation: "The commas change the meaning. Without commas, the clause is essential (restrictive); with commas, it's extra, non-essential information (non-restrictive)." },
      { text: "Without commas, it implies the speaker has multiple brothers and is specifying which one; with commas, it implies one brother, with the Denver detail added as extra information.", correct: true, explanation: "Correct. Commas around a descriptive clause signal it's non-essential — removing it wouldn't change who's being talked about. No commas signal the clause is essential to identifying which brother." },
      { text: "The comma version is grammatically incorrect.", correct: false, explanation: "Both versions are correct — they're just making different claims about how many brothers the speaker has, based on whether the clause is essential or extra." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you write 'its' or 'it's,' pause and mentally expand to 'it is' — the one-question test resolves it every time.",
      "When you're tempted to join two sentences with just a comma, check whether a semicolon or conjunction is the grammatically correct connector instead.",
      "Before using a colon, check that what comes before it is a complete independent clause on its own.",
      "Read the related entry on Common Grammar Mistakes for more everyday errors punctuation issues often get lumped in with.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a semicolon and a colon?", answer: "A semicolon joins two closely related independent clauses without a conjunction ('I'm tired; I'm going to bed'). A colon introduces something — a list, explanation, or elaboration — after a complete independent clause ('I have one rule: no phones at dinner')." },
      { question: "When should I use 'its' versus 'it's'?", answer: "'Its' (no apostrophe) shows possession ('the cat licked its paw'). 'It's' (with apostrophe) is always short for 'it is' or 'it has' ('it's cold outside'). Test by expanding to 'it is' — if the sentence still makes sense, use 'it's.'" },
      { question: "Is the Oxford comma (serial comma) required?", answer: "No — it's a style choice, not a universal grammar rule. Major style guides genuinely disagree on whether to use it. It's most useful for avoiding ambiguity in lists where items could otherwise be misread as describing each other." },
      { question: "What is a comma splice?", answer: "Joining two independent clauses with only a comma and no conjunction — 'I love reading, I read every night' is a comma splice. Fix it with a conjunction, a semicolon, or by splitting into two sentences." },
      { question: "Do apostrophes ever make a word plural?", answer: "No, never. Apostrophes show possession ('the dog's leash') or mark missing letters in a contraction ('don't'). A plain 's' with no apostrophe makes a regular noun plural ('dogs'), and adding an apostrophe there is always an error." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
