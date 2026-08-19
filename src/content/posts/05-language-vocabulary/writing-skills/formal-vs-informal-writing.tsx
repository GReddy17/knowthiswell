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
  title: "Formal vs Informal Writing",
  category: "language-vocabulary",
  order: 14,
  subtopic: "writing-skills",
  tags: ["formal writing", "informal writing", "tone", "register", "writing style"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Formal and informal writing aren't 'correct vs incorrect' — they're two registers with different rules for tone, contractions, and word choice, suited to different situations.",
  summary: "Formal and informal writing are two different registers of the same language, each with its own conventions for tone, vocabulary, contractions, and sentence length, and choosing between them is about matching audience and purpose, not about one being more grammatically correct.",
  sources: [
    { label: "Purdue Online Writing Lab — General Writing Resources", url: "https://owl.purdue.edu/owl/general_writing/index.html" },
    { label: "Britannica — Register (language)", url: "https://www.britannica.com/topic/register-language" },
    { label: "Merriam-Webster — Grammar", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/email-and-letter-writing-basics",
    "language-vocabulary/active-vs-passive-voice",
    "language-vocabulary/editing-and-proofreading-basics",
  ],
  glossary: [
    { term: "Register", definition: "The level of formality in language use, shaped by audience, purpose, and context — the same speaker uses a different register texting a friend than presenting to a client." },
    { term: "Contraction", definition: "A shortened form of two words joined with an apostrophe, such as 'don't' or 'it's' — common in informal writing and generally avoided in formal writing." },
    { term: "Colloquialism", definition: "An informal word or phrase typical of everyday conversation rather than formal writing, such as 'a ton of' instead of 'a large amount of.'" },
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
          "Formal and informal writing are two different registers of the same language — neither is more \"correct\"; they're suited to different audiences and purposes.",
          "The clearest formal-vs-informal signals are contractions, sentence length, word choice, and how personal or casual the tone is allowed to sound.",
          "Informal writing still follows real rules — spelling, grammar, and clarity still matter — it's just a different, equally consistent set of conventions, not the absence of any.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Formal writing is the kind used for reports, academic papers, cover letters, and official communication — full words instead of contractions, no slang, and a more careful, structured tone. Informal writing is the kind used for texts, casual emails, and everyday conversation — contractions, shorter sentences, and a relaxed, personal tone. Neither one is &quot;better&quot; writing; they&apos;re two different <TermLink href="/language-vocabulary/formal-vs-informal-writing">registers</TermLink>, and picking the right one for the situation is the actual skill.</div>}
        detailed={<div className="prose-p">The formal-informal spectrum runs across several signals at once, not just one switch. Formal writing tends to avoid <TermLink href="/language-vocabulary/formal-vs-informal-writing">contractions</TermLink> (&quot;do not&quot; instead of &quot;don&apos;t&quot;), avoid first- and second-person address in some contexts (academic writing especially), use longer and more complex sentence structures, and favor precise, sometimes Latinate vocabulary (&quot;utilize&quot; over &quot;use,&quot; &quot;prior to&quot; over &quot;before&quot;). Informal writing does the opposite on every count, and adds features formal writing generally avoids entirely — <TermLink href="/language-vocabulary/formal-vs-informal-writing">colloquialisms</TermLink>, sentence fragments used for effect, and direct address to the reader. Importantly, &quot;formal&quot; doesn&apos;t mean &quot;needlessly complicated&quot; — good formal writing is still clear and direct, it&apos;s just precise and structured rather than casual. And most real-world writing lands somewhere in the middle: a professional email to a colleague you know well is typically semi-formal, borrowing informal warmth (first names, contractions) while keeping formal structure (complete sentences, no slang).</div>}
      />
      <FootnoteAside>The now-universal &quot;hello&quot; as a greeting only became standard with the telephone in the late 1800s — Thomas Edison is widely credited with pushing &quot;hello&quot; as the way to answer a call, while Alexander Graham Bell reportedly preferred &quot;ahoy.&quot; A single new technology helped settle what still counts as the default, mildly informal, greeting register more than a century later.</FootnoteAside>
      <p>
      Once formality is understood as a set of matching signals rather than a single formal/informal switch, mixed or inconsistent tone becomes much easier to spot and fix.
      </p>

      <QuickCheck
        question="A cover letter includes the sentence: 'I'd love to chat about this gig sometime!' What register problem does this show?"
        options={[
          { text: "None — cover letters should sound friendly and approachable.", correct: false, explanation: "Warmth is fine in a cover letter, but this sentence uses a contraction ('I'd'), a casual word ('gig'), and an exclamation point — signals that clash with the formal register a cover letter otherwise needs." },
          { text: "It mismatches register — casual word choice and a contraction in a document that otherwise needs a formal register.", correct: true, explanation: "Correct. A formal document like a cover letter should stay consistent: 'I would welcome the opportunity to discuss this position further.' keeps the same idea in the expected register." },
          { text: "The sentence has a grammar error.", correct: false, explanation: "The sentence is grammatically fine — the issue is tone and word choice (register), not grammar." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The same message in formal and informal register (baseline case)</h3>
      <div className="prose-p">
      Informal: &quot;Hey, quick heads up — I can&apos;t make the 2pm meeting, something came up. Can we push it to tomorrow?&quot; Formal: &quot;I am writing to inform you that I am unable to attend the 2:00 PM meeting due to a scheduling conflict. Would it be possible to reschedule for tomorrow?&quot; Same content, same core request — but contractions, sentence fragments (&quot;quick heads up&quot;), and casual phrasing (&quot;something came up&quot;) in the informal version are all replaced with complete sentences and precise phrasing in the formal one.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Semi-formal — where most real workplace writing actually lives (variation)</h3>
      <div className="prose-p">
      &quot;Hi Priya, thanks for sending this over — I&apos;ve reviewed the draft and think it&apos;s in good shape overall. A couple of small notes: the intro could be tightened, and the third section needs an updated figure. Let me know if you&apos;d like to talk it through before Friday.&quot; This is neither fully formal nor casually informal — it uses a first name and contractions (informal signals) but stays organized, professional, and free of slang (formal signals). Most everyday professional writing lives in this semi-formal middle ground, not at either extreme.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading the room — matching register to platform (real-world / applied case)</h3>
      <div className="prose-p">
      The same person might write &quot;omw, be there in 5&quot; in a text to a friend, &quot;Running about 5 minutes behind, sorry!&quot; in a quick Slack message to a colleague, and &quot;I apologize for the delay; I expect to arrive within the next five minutes.&quot; in a formal client email — three registers for the same fact, chosen based on platform and relationship. Misjudging this in either direction reads as a mistake: overly formal texts to friends can read as cold or sarcastic, and overly casual messages to clients or supervisors can read as unprofessional, regardless of how grammatically correct either one is.
      </div>

      <QuickCheck
        question="Which pair of sentences correctly demonstrates a shift from formal to informal register, with the same underlying meaning?"
        options={[
          { text: "\"The meeting has been rescheduled.\" / \"The meeting has been rescheduled, sir.\"", correct: false, explanation: "Adding 'sir' doesn't change register on its own — both versions are still fairly formal in structure and word choice." },
          { text: "\"I regret to inform you that the deadline cannot be met.\" / \"Bad news — we're not gonna hit the deadline.\"", correct: true, explanation: "Correct. Word choice, sentence structure, and contractions ('gonna,' 'we're') all shift together to signal a genuinely more informal register, while the underlying fact stays the same." },
          { text: "\"The report is due Friday.\" / \"The report is due this coming Friday.\"", correct: false, explanation: "This is just a wording tweak, not a register shift — neither version signals meaningfully more or less formality than the other." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Mixing registers within the same document — formal sentence structure paired with slang or contractions.", fix: "Pick one register for the whole piece and check it stays consistent; a single casual phrase can undercut an otherwise formal document." },
          { mistake: "Assuming formal writing means using the longest or most complicated available word.", fix: "Formal doesn't mean complicated — precise, clear language is still the goal. Swap needlessly inflated words ('utilize') for the plain equivalent ('use') where either would work." },
          { mistake: "Using the same fully casual register in a professional email that you'd use texting a friend.", fix: "Default to semi-formal for anyone you don't know well or don't have an established casual relationship with — you can always relax the tone later once the relationship's established." },
        ]}
      />
      <MisconceptionCallout
        myth="Informal writing has no rules at all — anything goes as long as it's casual."
        reality={<p>Informal writing follows its own real, consistent conventions — it&apos;s a different register, not the absence of one. Spelling and basic grammar still matter (a text riddled with typos still reads as sloppy, not &quot;casual&quot;), and informal writing has its own norms around what&apos;s appropriate: heavy slang that works between close friends can still land badly in a casual work Slack message. &quot;Informal&quot; means relaxed and personal in tone, not rule-free.</p>}
      />

      <QuickCheck
        question="A new employee sends their manager a Slack message full of internet slang and no capitalization. When asked to be more professional, they respond that it's 'just informal writing, so there are no rules.' Is this reasoning correct?"
        options={[
          { text: "Yes — informal writing has no standards to meet.", correct: false, explanation: "Informal writing still has real conventions, and workplace context sets its own expectations for what counts as appropriately informal versus unprofessional." },
          { text: "No — informal writing follows its own conventions, and workplace informal writing (like Slack) still has professional norms distinct from texting a close friend.", correct: true, explanation: "Correct. Register isn't just formal-vs-informal on a single axis — the audience (a manager, in a work context) sets expectations that pure texting-with-friends informality doesn't meet." },
          { text: "No — all workplace writing must always be fully formal.", correct: false, explanation: "This overcorrects. Plenty of workplace writing, including Slack messages, is legitimately semi-formal or informal — the issue here is a specific mismatch with what the manager and platform expect, not that informal writing is banned at work." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before sending a written message, ask who's reading it and what platform it's on — that answer should set the register, not habit.",
          "Notice next time you read a mismatched-register message (an overly stiff text, or an overly casual work email) — it usually reads as slightly off before you can even say why.",
          "When editing formal writing, scan for contractions and slang as an easy first pass — they're the fastest register tell.",
          "Read the related entry on Email and Letter Writing Basics for how register plays out specifically in correspondence.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between formal and informal writing?", answer: "Formal writing avoids contractions and slang, uses complete and often longer sentences, and keeps a structured, impersonal tone — used in reports, academic work, and official communication. Informal writing uses contractions, casual word choice, and a personal tone — used in texts, casual emails, and everyday conversation." },
          { question: "Is informal writing grammatically incorrect?", answer: "No. Informal writing follows its own consistent conventions; it isn't formal writing done \"wrong.\" Both registers can be entirely correct within their own context — the mismatch happens when the wrong register is used for a given audience or purpose." },
          { question: "When should I use formal writing?", answer: "Use formal writing for academic papers, reports, cover letters, official correspondence, and any communication with someone you don't know well in a professional context — situations where precision and a structured tone matter more than personal warmth." },
          { question: "Can I use contractions in formal writing?", answer: "Generally no, in strictly formal contexts like academic papers and official documents. Most professional (semi-formal) writing, like everyday workplace email, does use contractions comfortably — the strict no-contractions rule applies mainly at the most formal end of the spectrum." },
          { question: "What is register in writing?", answer: "Register is the level of formality a piece of writing uses, shaped by audience, purpose, and context. The same writer shifts register constantly — texting a friend, emailing a colleague, and writing a cover letter each call for a different one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
