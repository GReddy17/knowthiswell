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
  title: "Prefixes & Suffixes",
  category: "language-vocabulary",
  order: 9,
  subtopic: "vocabulary-building",
  tags: ["prefixes", "suffixes", "morphology", "word formation", "vocabulary", "spelling rules"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Prefixes attach before a word to shift its meaning, suffixes attach after and often change its part of speech — and knowing both helps you decode words you've never seen.",
  summary: "A prefix is a word part added to the front of a root or base word to change its meaning (unhappy, rewrite), and a suffix is a word part added to the end that often changes its part of speech (happiness, quickly) — together they're the main way English builds new words out of existing ones.",
  sources: [
    { label: "Merriam-Webster — Prefix", url: "https://www.merriam-webster.com/dictionary/prefix" },
    { label: "Merriam-Webster — Suffix", url: "https://www.merriam-webster.com/dictionary/suffix" },
    { label: "Encyclopaedia Britannica — Affix (linguistics)", url: "https://www.britannica.com/topic/affix" },
  ],
  seeAlso: [
    "language-vocabulary/root-words-latin-and-greek-origins",
    "language-vocabulary/parts-of-speech-explained",
    "language-vocabulary/synonyms-and-antonyms",
  ],
  glossary: [
    { term: "Prefix", definition: "A word part attached to the beginning of a root or base word that changes its meaning, such as 'un-' in 'unhappy' or 're-' in 'rewrite.'" },
    { term: "Suffix", definition: "A word part attached to the end of a root or base word, often changing its part of speech, such as '-ness' in 'happiness' or '-ly' in 'quickly.'" },
    { term: "Root word (base word)", definition: "The core word that a prefix or suffix attaches to, carrying the main meaning — 'happy' in 'unhappiness.'" },
    { term: "Derivational suffix", definition: "A suffix that creates a new word, often in a different part of speech, from a base word — '-ness' turns the adjective 'happy' into the noun 'happiness.'" },
    { term: "Inflectional suffix", definition: "A suffix that changes a word's grammatical form without changing its part of speech or creating a new word, such as the '-ed' in 'walked' or the '-s' in 'walks.'" },
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
          "A prefix attaches before a root word and shifts its meaning ('un-' + 'happy' = 'unhappy'); a suffix attaches after and often changes the word's part of speech ('happy' + '-ness' = 'happiness,' adjective to noun).",
          "Suffixes split into two functionally different types: derivational suffixes create a new word or part of speech ('-ness,' '-ful'), while inflectional suffixes just adjust grammatical form without creating a new word ('-ed,' '-s,' '-ing').",
          "Adding a suffix often triggers a spelling change in the base word — dropping a silent 'e,' doubling a final consonant, or swapping 'y' for 'i' — and these rules have genuine, well-documented exceptions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/language-vocabulary/prefixes-and-suffixes">prefix</TermLink> is a piece added to the beginning of a word that changes its meaning — &quot;un-&quot; added to &quot;happy&quot; makes &quot;unhappy,&quot; the opposite meaning. A <TermLink href="/language-vocabulary/prefixes-and-suffixes">suffix</TermLink> is a piece added to the end of a word — &quot;-ness&quot; added to &quot;happy&quot; makes &quot;happiness,&quot; turning the describing word (adjective) into a thing (noun). Learning common prefixes and suffixes is one of the fastest ways to expand vocabulary, because recognizing the pieces lets you make an educated guess at words you&apos;ve never seen before.</div>}
        detailed={<div className="prose-p">Not all suffixes do the same job. A <TermLink href="/language-vocabulary/prefixes-and-suffixes">derivational suffix</TermLink> builds a genuinely new word, frequently shifting its part of speech — &quot;-ment&quot; turns the verb &quot;govern&quot; into the noun &quot;government,&quot; and &quot;-ful&quot; turns the noun &quot;hope&quot; into the adjective &quot;hopeful.&quot; An <TermLink href="/language-vocabulary/prefixes-and-suffixes">inflectional suffix</TermLink>, by contrast, doesn&apos;t create a new word or change its part of speech — it just adjusts grammatical form, like tense or number: &quot;walk&quot; becomes &quot;walked&quot; (past tense) or &quot;walks&quot; (third person), but it&apos;s still fundamentally the same verb. English has only eight inflectional suffixes total (including -s, -ed, -ing, -er, -est), compared to dozens of productive derivational ones, which is part of why English relies so heavily on derivational prefixes and suffixes to expand vocabulary rather than to mark grammar. Prefixes, by contrast, essentially never change part of speech in English — they change meaning (negation, repetition, position) while the suffix, if any, does the grammatical work.</div>}
      />
      <FootnoteAside>The suffix &quot;-gate,&quot; meaning &quot;political scandal,&quot; didn&apos;t exist as a suffix before 1972 — it was lifted entirely from the proper noun &quot;Watergate&quot; (itself just the name of a Washington, D.C. building complex) and reanalyzed by the press as a reusable ending, producing later coinages like &quot;Deflategate&quot; and &quot;Pizzagate.&quot; It&apos;s a rare, well-documented case of a brand-new suffix entering English within living memory.</FootnoteAside>
      <p>
      That distinction between meaning-shifting prefixes and grammar-or-word-class-shifting suffixes is useful on its own, but the spelling changes that come with adding a suffix are where most everyday mistakes actually happen.
      </p>

      <QuickCheck
        question="Which of these best describes what happens when '-ed' is added to 'walk' to make 'walked'?"
        options={[
          { text: "It's a derivational suffix that turns the verb into a new part of speech.", correct: false, explanation: "\"Walked\" is still a verb — no part of speech changed, and no new word was created. That rules out a derivational suffix." },
          { text: "It's an inflectional suffix that just shifts the verb's tense without creating a new word.", correct: true, explanation: "Correct. \"-ed\" marks past tense but \"walked\" is still fundamentally the verb \"walk\" — this is exactly what an inflectional suffix does, as opposed to a derivational suffix that builds a genuinely new word." },
          { text: "It's a prefix, since it changes the word's meaning.", correct: false, explanation: "\"-ed\" attaches to the end of the word, which makes it a suffix by definition — prefixes attach to the beginning." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Un- and -ness on a single base word (baseline case)</h3>
      <div className="prose-p">
      Starting from the base word &quot;happy&quot;: adding the prefix &quot;un-&quot; gives &quot;unhappy&quot; (opposite meaning, same part of speech, still an adjective). Adding the suffix &quot;-ness&quot; instead gives &quot;happiness&quot; (new part of speech, now a noun, meaning shifted from a quality itself to the state of having it). Combining both gives &quot;unhappiness&quot; — the noun form of the opposite quality. This shows the two default jobs clearly: the prefix flips or modifies meaning while keeping the word&apos;s grammatical category, and the suffix here changes the grammatical category itself.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Spelling changes and their exceptions (variation / exception case)</h3>
      <div className="prose-p">
      Adding &quot;-ful&quot; to &quot;beauty&quot; doesn&apos;t give &quot;beautyful&quot; — the &quot;y&quot; changes to &quot;i&quot; before most suffixes, giving &quot;beautiful.&quot; Adding &quot;-ment&quot; to &quot;argue&quot; doesn&apos;t give &quot;arguement&quot; — the silent final &quot;e&quot; is dropped before a suffix starting with a vowel, giving &quot;argument.&quot; But these rules aren&apos;t airtight: &quot;y&quot; stays as &quot;y&quot; before a suffix starting with &quot;i&quot; (&quot;cry&quot; + &quot;-ing&quot; = &quot;crying,&quot; not &quot;crying&quot; with an altered spelling), and some silent &quot;e&quot; words keep the &quot;e&quot; even before a vowel suffix to avoid confusion with another word (&quot;dye&quot; + &quot;-ing&quot; = &quot;dyeing,&quot; keeping the &quot;e&quot; specifically to avoid colliding with &quot;dying&quot;). These aren&apos;t rare oddities — they&apos;re the actual, documented exceptions that make English spelling rules probabilistic guides rather than absolute laws.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Decoding unfamiliar words in science and medicine (real-world / applied case)</h3>
      <div className="prose-p">
      Medical and scientific vocabulary is especially dense with reusable prefixes and suffixes, which makes them worth learning even outside a classroom. The suffix &quot;-itis&quot; means &quot;inflammation of&quot; (bronchitis: inflammation of the bronchi; tonsillitis: inflammation of the tonsils). The prefix &quot;sub-&quot; means &quot;under&quot; or &quot;below&quot; (subterranean: under the earth; submarine: under the sea). Someone who has never seen the word &quot;gastritis&quot; before can reasonably guess &quot;inflammation of the stomach&quot; just from recognizing &quot;gastr-&quot; (stomach) and &quot;-itis&quot; (inflammation) — the same decoding skill that works on &quot;unhappiness&quot; scales directly up to unfamiliar, technical vocabulary.
      </div>

      <QuickCheck
        question="Why does 'argue' become 'argument' rather than 'arguement' when '-ment' is added?"
        options={[
          { text: "Because '-ment' is a prefix, not a suffix, so it doesn't trigger spelling changes.", correct: false, explanation: "\"-ment\" attaches to the end of the word, making it a suffix, not a prefix — and it does trigger a spelling change here." },
          { text: "Because a silent final 'e' is typically dropped before a suffix that starts with a vowel.", correct: true, explanation: "Correct. \"Argue\" ends in a silent \"e,\" and \"-ment\" starts with a consonant sound in speech but functions here under the standard rule dropping the \"e\" before this class of suffix, giving \"argument.\"" },
          { text: "Because \"argument\" and \"argue\" are actually unrelated words with different roots.", correct: false, explanation: "They share the same root — \"argument\" is built directly from \"argue\" plus the suffix \"-ment,\" with a standard silent-e spelling adjustment, not a separate etymology." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming every prefix or suffix always follows the same spelling rule with no exceptions.", fix: "Treat spelling rules like \"drop the silent e\" or \"change y to i\" as strong patterns, not absolute laws — check a dictionary when a word looks unfamiliar, since documented exceptions exist for each rule." },
          { mistake: "Confusing a prefix with a root word, especially when the prefix looks like it could stand alone.", fix: "Check whether the remaining piece after removing the prefix is a real, complete word on its own — \"re-\" in \"react\" leaves \"act,\" a real root, confirming \"re-\" is genuinely a prefix here." },
          { mistake: "Treating all suffixes as if they change a word's part of speech.", fix: "Distinguish derivational suffixes (which often do change part of speech, like '-ness' or '-ment') from inflectional suffixes (which don't, like '-ed' or '-s')." },
        ]}
      />
      <MisconceptionCallout
        myth="Adding a prefix or suffix always follows a simple, consistent spelling rule."
        reality={<p>English spelling rules for affixes are strong tendencies with real, well-documented exceptions, not absolute laws. The &quot;y to i&quot; rule fails before a suffix starting with &quot;i&quot; itself (&quot;cry&quot; + &quot;-ing&quot; stays &quot;crying&quot;). The &quot;drop the silent e&quot; rule has exceptions kept specifically to avoid confusion with another word (&quot;dye&quot; + &quot;-ing&quot; = &quot;dyeing,&quot; not &quot;dying&quot;). Consonant-doubling before a suffix depends on syllable stress and count, which is why &quot;travel&quot; becomes &quot;traveling&quot; in American English but &quot;travelling&quot; in British English — even native spelling conventions disagree. Treating these as guidelines to check, rather than guaranteed rules, avoids a lot of confident misspelling.</p>}
      />

      <QuickCheck
        question="Why do American English and British English disagree on 'traveling' versus 'travelling'?"
        options={[
          { text: "One of the two spellings is simply an error that persists by habit.", correct: false, explanation: "Both are standard, correct spellings within their respective conventions — this isn't an error on either side, it's a genuine regional difference in how the consonant-doubling rule is applied." },
          { text: "Consonant-doubling rules before a suffix can depend on syllable stress and convention, and the two English varieties settled on different conventions for this case.", correct: true, explanation: "Correct. This is a real, documented split — American English generally doesn't double the final \"l\" in \"travel\" before \"-ing\" or \"-ed,\" while British English does, showing that even a common spelling rule isn't applied identically everywhere." },
          { text: "\"Travelling\" is British slang and not part of standard English at all.", correct: false, explanation: "It's fully standard British English spelling, not slang — just a different convention from the American spelling, not a nonstandard form." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see an unfamiliar long word, try breaking it into prefix, root, and suffix before reaching for a dictionary.",
          "Notice when a suffix changes a word's part of speech (derivational) versus when it just adjusts tense or number (inflectional).",
          "When you're unsure whether to double a final consonant before adding a suffix, check a dictionary rather than guessing — the rule depends on syllable stress and isn't always obvious.",
          "Next time you read a medical or scientific term you don't recognize, look for a familiar prefix or suffix like '-itis,' 'sub-,' or '-ology' before assuming the whole word is unfamiliar.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a prefix and a suffix?", answer: "A prefix attaches to the beginning of a word and typically changes its meaning without changing its part of speech (un- + happy = unhappy). A suffix attaches to the end and often changes the part of speech (happy + -ness = happiness, adjective to noun)." },
          { question: "What is the difference between a prefix and a root word?", answer: "A root word carries a word's core meaning and can often stand alone or nearly alone (act, happy, port). A prefix is a word part attached before the root that modifies its meaning and cannot stand alone as an independent word (re-, un-, sub-)." },
          { question: "Do all suffixes change the part of speech of a word?", answer: "No. Derivational suffixes often do (govern, verb, becomes government, noun, with '-ment'). Inflectional suffixes don't — they only adjust grammatical form like tense or number, as in walk becoming walked or walks." },
          { question: "What are the spelling rules for adding suffixes?", answer: "Common patterns include dropping a silent final 'e' before a vowel suffix (argue + -ment = argument), changing a final 'y' to 'i' before most suffixes (beauty + -ful = beautiful), and doubling a final consonant in some stressed short words (stop + -ing = stopping). Each pattern has documented exceptions, so checking a dictionary for unfamiliar words is worthwhile." },
          { question: "How can prefixes and suffixes help me guess the meaning of an unfamiliar word?", answer: "Recognizing a common prefix or suffix lets you estimate meaning even without knowing the whole word — 'sub-' (under) plus a root you know, or '-itis' (inflammation) attached to a body-part root, both give a reasonable working definition before you check a dictionary." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
