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
  title: "How New Words Get Added to the Dictionary",
  category: "language-vocabulary",
  order: 50,
  subtopic: "language-curiosities",
  tags: ["lexicography", "dictionary", "merriam-webster", "oxford english dictionary", "new words"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "No committee invents dictionary words — lexicographers track how words are actually used, then add the ones that show widespread, sustained, meaningful use.",
  summary: "Dictionaries are descriptive records of how a language is actually being used, not lists of officially approved words — lexicographers track real-world usage through citation evidence, and a word earns an entry once it shows sufficiently widespread, sustained, and meaningful use, not by committee vote or invention.",
  sources: [
    { label: "Merriam-Webster — How does a word get into a dictionary?", url: "https://www.merriam-webster.com/help/faq-words-into-dictionary" },
    { label: "Oxford English Dictionary", url: "https://www.oed.com/" },
    { label: "Encyclopaedia Britannica — Lexicography", url: "https://www.britannica.com/topic/lexicography" },
  ],
  seeAlso: [
    "language-vocabulary/how-languages-evolve-over-time",
    "language-vocabulary/language-myths-and-misconceptions",
    "language-vocabulary/language-families-explained",
  ],
  glossary: [
    { term: "Lexicographer", definition: "A person who compiles, writes, and edits dictionaries, including researching how words are actually used in order to write accurate definitions and decide which new words merit an entry." },
    { term: "Citation (lexicography)", definition: "A recorded, dated example of a word being used in real writing or speech, collected by dictionary editors as evidence of how — and how widely — a word is actually used." },
    { term: "Descriptive dictionary", definition: "A dictionary that documents how a language is actually used by its speakers, as opposed to a prescriptive dictionary that dictates how it should be used. Most major English dictionaries, including Merriam-Webster and the Oxford English Dictionary, are descriptive in this sense." },
    { term: "Language academy", definition: "An official institution, such as the Real Academia Española (Spanish) or the Académie française (French), given a formal role in regulating or standardizing a language — a more centralized, prescriptive model than English's decentralized, usage-tracking dictionary tradition." },
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
          "Dictionary editors don't invent or officially approve new words — they track how words are already being used in real writing and speech, then add the ones that show widespread, sustained, meaningful use.",
          "A word can exist and circulate for years before it 'enters the dictionary' — a dictionary entry documents established use, it doesn't mark the moment a word is born.",
          "Not every English-speaking dictionary tradition works the same way as every language's — some languages, like French and Spanish, have an official language academy with a more centralized, prescriptive role than English's decentralized, usage-tracking dictionaries.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/language-vocabulary/how-new-words-get-added-to-the-dictionary">Lexicographers</TermLink> watch how people actually use language — in books, news, social media, and everyday conversation — and when a new word or a new meaning of an existing word is used widely enough, by enough different people, for long enough, it earns a dictionary entry. No one invents the word for the dictionary; the dictionary is documenting a word that&apos;s already out there being used.</div>}
        detailed={<div className="prose-p">The process runs on <TermLink href="/language-vocabulary/how-new-words-get-added-to-the-dictionary">citation</TermLink> evidence: lexicographers (increasingly aided by large text corpora and automated tracking tools) collect real, dated examples of a word in use with surrounding context, then evaluate it against a few key criteria — frequency (is it actually common), breadth (is it used across many different sources and contexts, not just one community or publication), longevity (does use persist over time, rather than spiking and fading as a one-off fad), and meaningful use (is it being used to communicate an actual concept, not just mentioned as a novelty). Most words take this evaluation slowly, sometimes over several years, but the process can compress dramatically when a concept becomes suddenly and urgently widespread — an important edge case worth knowing about, since it shows the criteria are about real-world usage patterns, not a fixed calendar.</div>}
      />
      <FootnoteAside>Merriam-Webster added &quot;COVID-19&quot; to its dictionary in a matter of weeks in 2020 — one of the fastest entries in the dictionary&apos;s history — because the word&apos;s frequency, breadth, and meaningful use exploded almost overnight, showing that the normal multi-year evaluation process can compress dramatically when real-world usage demands it.</FootnoteAside>
      <p>
      With frequency, breadth, longevity, and meaningful use as the actual criteria, it becomes much easier to see why some new words take years to earn an entry while others, in genuinely unusual circumstances, arrive within weeks.
      </p>

      <QuickCheck
        question="What is the main thing lexicographers evaluate before adding a new word to a dictionary?"
        options={[
          { text: "Whether a government or industry committee has formally approved the word", correct: false, explanation: "No such formal approval process exists for major English dictionaries — there's no committee that votes words into existence or into the dictionary." },
          { text: "Whether the word shows sufficiently widespread, sustained, and meaningful real-world usage, based on collected citation evidence", correct: true, explanation: "Correct. Lexicographers track frequency, breadth across different sources, longevity over time, and meaningful use — not committee approval or invention." },
          { text: "Whether the word was recently featured in a major news headline", correct: false, explanation: "A single headline appearance isn't enough on its own — lexicographers look for sustained use across many independent sources over time, not one high-visibility mention." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: &quot;Selfie&quot; — the normal, multi-year path to an entry (baseline case)</h3>
      <div className="prose-p">
      &quot;Selfie&quot; was used informally for a while before it saw a rapid rise in widespread, sustained use, driven by smartphone cameras and social media. Oxford Dictionaries named it their Word of the Year in 2013, based on data showing a sharp, sustained increase in usage frequency across a broad range of sources — and it was subsequently added as a full entry in major dictionaries, including Merriam-Webster. This is the typical pattern: informal circulation, then a period of rapid, broad, sustained growth, then formal entry once the evidence clearly supports it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: &quot;COVID-19&quot; — the rare fast-track case (variation / exception)</h3>
      <div className="prose-p">
      In early 2020, Merriam-Webster added &quot;COVID-19&quot; to its dictionary within a matter of weeks of the term coming into use — an unusually fast turnaround compared to the typical multi-year evaluation period. The word met the same underlying criteria (frequency, breadth, meaningful use) that any other candidate word would need to meet, but it met them at extraordinary speed because of how suddenly and universally the term became necessary in everyday communication worldwide. This shows the process isn&apos;t slow by rule — it&apos;s slow by default because most words simply don&apos;t reach the necessary evidence threshold quickly.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Internet slang under evaluation today (real-world / applied case)</h3>
      <div className="prose-p">
      Words that spread quickly through social media and youth culture — such as &quot;rizz,&quot; named Oxford&apos;s Word of the Year in 2023 — go through the same citation-based evaluation as any other candidate. Lexicographers watch whether a viral term&apos;s use persists and broadens beyond its original online community, rather than fading within a season, before treating it as dictionary-worthy. Many internet-coined words never clear that bar and stay informal slang indefinitely; others, like &quot;selfie&quot; before them, do sustain and broaden, and eventually earn a formal entry through the same longevity-and-breadth evaluation used for every other word.
      </div>

      <QuickCheck
        question="Why did 'COVID-19' get added to the dictionary so much faster than most new words typically do?"
        options={[
          { text: "Merriam-Webster suspended its usual evaluation criteria for this specific word", correct: false, explanation: "The same underlying criteria — frequency, breadth, meaningful use — still applied; the word simply met them at an unusually fast pace because of how suddenly widespread its use became." },
          { text: "The word met the usual frequency, breadth, and meaningful-use criteria unusually fast because its real-world use exploded almost overnight", correct: true, explanation: "Correct. The evaluation process didn't change — the speed of real-world adoption did, which is exactly what the criteria are designed to track." },
          { text: "A government health agency formally requested its addition", correct: false, explanation: "No government agency directs which words a dictionary adds — the addition was based on lexicographers' own tracking of explosive real-world usage." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a dictionary 'approving' a word means someone invented it or made it official.", fix: "Remember that dictionaries document existing usage — they don't invent words or grant them legal or official status." },
          { mistake: "Assuming any slang term will eventually be added if enough people use it briefly.", fix: "Sustained, longer-term usage across many sources matters more than a short-lived viral spike — many trend words fade before they clear the bar." },
          { mistake: "Assuming every language's dictionary process works the same way English's does.", fix: "English dictionaries like Merriam-Webster and the Oxford English Dictionary are descriptive and track usage; languages with an official language academy, like French (Académie française) or Spanish (Real Academia Española), can have a more centralized, prescriptive process for what counts as standard." },
        ]}
      />
      <MisconceptionCallout
        myth="New dictionary words are added by an official committee that 'invents' or approves them."
        reality={<p>Major English dictionaries are descriptive: lexicographers track how words are already being used in real writing and speech, gather dated citation evidence, and add words once that evidence shows sufficiently widespread, sustained, and meaningful use — there&apos;s no committee inventing words or granting them official status. There is no single global authority approving new English words at all. This isn&apos;t true of every language, though — French has the Académie française and Spanish has the Real Academia Española, both official bodies with a more centralized, prescriptive role in standardizing their languages, which is a genuinely different model from English&apos;s decentralized, usage-driven dictionary tradition.</p>}
      />

      <QuickCheck
        question="Does every major world language use the same process as English for deciding which new words are official?"
        options={[
          { text: "Yes — all major languages rely on dictionary publishers independently tracking usage, with no central authority", correct: false, explanation: "This describes English's model, but it isn't universal — some languages have a formally designated authority with a different, more centralized role." },
          { text: "No — some languages, like French and Spanish, have an official language academy with a more centralized, prescriptive role, unlike English's decentralized, usage-tracking dictionaries", correct: true, explanation: "Correct. The Académie française and the Real Academia Española are real institutions with a formal standardizing role — a genuinely different model from how Merriam-Webster or the Oxford English Dictionary operate." },
          { text: "No — English is the only major language that documents new words in a dictionary at all", correct: false, explanation: "Many languages have dictionaries that track new words; the real difference is whether that tracking happens through an official, centralized academy or through independent, decentralized dictionary publishers as with English." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time a new slang word feels dictionary-worthy to you, check whether Merriam-Webster or Oxford has actually added it yet, and notice how long that took.",
          "Look up a recently added dictionary word and read about its usage history if the dictionary publishes one.",
          "Notice the difference between a word being 'used' and a word being 'in the dictionary' — they aren't the same milestone.",
          "Read the entry on how languages evolve over time to see the bigger picture new words fit into.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who decides what words get added to the dictionary?", answer: "Lexicographers — dictionary editors — decide, based on citation evidence showing a word has widespread, sustained, and meaningful real-world use. There's no outside committee or government body that invents or approves the words for major English dictionaries." },
          { question: "How long does it take for a new word to get into the dictionary?", answer: "It varies widely — often several years of tracked, sustained usage, though it can compress dramatically for urgent, suddenly widespread terms, as happened with 'COVID-19' in 2020, added within weeks." },
          { question: "What's the difference between a dictionary's Word of the Year and actually adding a word to the dictionary?", answer: "Word of the Year is a publisher's editorial pick highlighting a word that captured significant attention or usage growth that year — it can happen before, at the same time as, or sometimes without the word ever formally entering the dictionary as a full entry." },
          { question: "Can a word be removed from the dictionary?", answer: "Yes, though it's uncommon — some dictionaries periodically remove entries that have fallen out of meaningful use over a long period, though many words are simply marked as archaic or historical rather than deleted outright." },
          { question: "Why do some slang words never make it into the dictionary?", answer: "Many slang or trend words spike in use briefly and then fade before they show the sustained, broad, longer-term usage lexicographers look for — short-lived popularity alone typically isn't enough to earn a full dictionary entry." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
