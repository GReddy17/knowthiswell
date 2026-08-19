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
  title: "Parts of Speech Explained",
  category: "language-vocabulary",
  order: 1,
  subtopic: "grammar-foundations",
  tags: ["grammar", "parts of speech", "nouns", "verbs", "adjectives", "sentence structure"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The eight parts of speech explained with real examples — what each one does in a sentence, and why the same word can be a different part of speech depending on context.",
  summary: "Parts of speech are the job categories every word in a sentence falls into — noun, verb, adjective, adverb, pronoun, preposition, conjunction, and interjection — and a word's category can change depending on how it's used.",
  sources: [
    { label: "Merriam-Webster — Parts of Speech", url: "https://www.merriam-webster.com/grammar/parts-of-speech" },
    { label: "Oxford English Dictionary — Grammar Reference", url: "https://www.oed.com/" },
    { label: "Purdue Online Writing Lab — Parts of Speech Overview", url: "https://owl.purdue.edu/owl/general_writing/grammar/parts_of_speech_overview.html" },
  ],
  seeAlso: [
    "language-vocabulary/sentence-structure-basics",
    "language-vocabulary/active-vs-passive-voice",
    "language-vocabulary/common-grammar-mistakes",
  ],
  glossary: [
    { term: "Part of speech", definition: "The grammatical category a word belongs to based on the job it does in a sentence — noun, verb, adjective, and so on." },
    { term: "Inflection", definition: "Changing a word's form to show tense, number, or comparison — walk to walked, cat to cats, big to bigger." },
    { term: "Modifier", definition: "A word that describes or limits another word — adjectives modify nouns, adverbs modify verbs, adjectives, or other adverbs." },
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
      "Every word in English belongs to one of eight parts of speech based on the job it does in a sentence, not its spelling or meaning alone.",
      "The same word can be a different part of speech in different sentences — 'run' can be a verb ('I run') or a noun ('a home run').",
      "You don't need to memorize the eight categories to write well, but recognizing them helps you fix sentences that feel 'off' and explains why grammar rules exist in the first place.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Every word in a sentence has a job. A <TermLink href="/language-vocabulary/parts-of-speech-explained">part of speech</TermLink> is just the name for that job — is the word naming a thing (noun), doing an action (verb), describing something (adjective), or connecting other words (preposition, conjunction)? English has eight of these job categories: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections. Learning them is less about memorizing a list and more about noticing the pattern once you see it.</div>}
      detailed={<div className="prose-p">The eight parts of speech split into two broad groups. <strong>Content words</strong> — nouns, verbs, adjectives, adverbs — carry the actual meaning of a sentence and form an open class, meaning new ones get coined constantly (&quot;google&quot; became a verb; &quot;selfie&quot; became a noun). <strong>Function words</strong> — pronouns, prepositions, conjunctions, interjections — do grammatical work rather than naming things, and form a closed class that rarely gains new members. What makes English genuinely tricky is that a word&apos;s part of speech isn&apos;t fixed to the word itself, it&apos;s determined by <TermLink href="/language-vocabulary/parts-of-speech-explained">syntax</TermLink> — where the word sits and what it&apos;s doing. &quot;Light&quot; is a noun in &quot;turn on the light,&quot; an adjective in &quot;a light backpack,&quot; and a verb in &quot;light the candle.&quot; This flexibility (called <em>conversion</em> or <em>zero derivation</em> by linguists) is one reason English vocabulary feels so large: many &quot;different&quot; words are really the same word doing a different job.</div>}
      />
      <FootnoteAside>Some grammar traditions list nine parts of speech by splitting &quot;determiners&quot; (a, the, this, some) out from adjectives — modern linguistic grammars increasingly treat determiners as their own category, but most everyday grammar references still fold them into the traditional eight.</FootnoteAside>
      <p>
      Knowing the categories in theory is one thing — spotting them in a real sentence, especially when the same word keeps changing jobs, is the actual skill.
      </p>
      <QuickCheck
      question="In the sentence 'She books a flight and reads three books,' what part of speech is 'books' the first time versus the second time?"
      options={[
      { text: "Noun both times", correct: false, explanation: "Look at what each 'books' is doing. The second one — 'reads three books' — is a noun (the things being read). But the first one is doing an action." },
      { text: "Verb the first time, noun the second time", correct: true, explanation: "Correct. 'She books a flight' — books is the action she's performing (a verb). 'Reads three books' — books is the thing being read (a noun). Same spelling, two different jobs." },
      { text: "Verb both times", correct: false, explanation: "The second 'books' isn't an action — nothing is 'booking' in that clause. It's the object being read, which makes it a noun." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tagging a simple sentence (baseline case)</h3>
      <div className="prose-p">
      Take the sentence: &quot;The curious cat quickly chased a small mouse.&quot; Breaking it down word by word — &quot;The&quot; is a determiner (traditionally grouped with adjectives), &quot;curious&quot; is an adjective describing the cat, &quot;cat&quot; is a noun (the subject), &quot;quickly&quot; is an adverb describing how the chasing happened, &quot;chased&quot; is the verb (the action), &quot;a&quot; is another determiner, &quot;small&quot; is an adjective describing the mouse, and &quot;mouse&quot; is a noun (the object of the chase). Notice the pattern: the noun (&quot;cat&quot;) is dressed up by an adjective (&quot;curious&quot;), and the verb (&quot;chased&quot;) is dressed up by an adverb (&quot;quickly&quot;). That pairing — noun-adjective, verb-adverb — is the core relationship that makes the other six parts of speech worth learning.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A word that changes category mid-conversation (edge case)</h3>
      <div className="prose-p">
      Consider &quot;well.&quot; In &quot;She sang well,&quot; well is an adverb describing how she sang. In &quot;She fell down a well,&quot; well is a noun (a hole in the ground for water). In &quot;Well, I suppose you&apos;re right,&quot; well is an interjection — a stand-alone expression of hesitation that isn&apos;t grammatically connected to the rest of the sentence at all. Three completely different jobs, one spelling. This is exactly why dictionaries list a part of speech next to every definition of a word rather than assuming one word has one fixed category — the definition you need depends entirely on the job the word is doing in that specific sentence.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why this matters for real writing (applied case)</h3>
      <div className="prose-p">
      Parts of speech aren&apos;t just a classroom exercise — they&apos;re the reason certain sentences sound wrong even before you can say exactly why. &quot;She writing the report&quot; feels broken because &quot;writing&quot; needs a helping verb (&quot;is writing&quot;) to function as the main verb of the sentence — on its own, &quot;writing&quot; is acting like a noun or adjective form (a gerund/participle), not a full verb. Recognizing that &quot;writing&quot; alone can&apos;t carry a sentence the way &quot;writes&quot; or &quot;is writing&quot; can is a parts-of-speech skill, even if you&apos;d never phrase it that way out loud. This is also the exact mechanism behind subject-verb agreement errors, misplaced modifiers, and a lot of the &quot;this just sounds off&quot; feedback writers get — the fix is almost always about which part of speech is doing which job.
      </div>
      <QuickCheck
      question="Which sentence uses 'fast' as an adjective rather than an adverb?"
      options={[
      { text: "He ran fast to catch the bus.", correct: false, explanation: "Here 'fast' describes how he ran — it's modifying the verb 'ran,' which makes it an adverb." },
      { text: "She drives a fast car.", correct: true, explanation: "Correct. Here 'fast' describes the noun 'car,' not an action — that makes it an adjective. Same word, different job depending on what it's attached to." },
      { text: "Neither — 'fast' is always an adverb.", correct: false, explanation: "'Fast' is one of a handful of English words with the identical spelling for both its adjective and adverb form, so it can genuinely be either depending on the sentence." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The eight parts of speech, grouped by function"
      type="comparison"
      svgSrc="/diagrams/05-parts-of-speech-explained-chart.svg"
      altText="Diagram grouping the eight parts of speech into two categories: content words (noun, verb, adjective, adverb) which carry core meaning, and function words (pronoun, preposition, conjunction, interjection) which do grammatical connecting work, with one example word shown for each."
      />
      <p>
      Notice how the diagram splits into two halves. The left side — nouns, verbs, adjectives, adverbs — is where new words get added to English constantly (nobody&apos;s coining a new preposition next year, but new nouns and verbs appear every year). The right side is a much smaller, much older set of words that mostly hasn&apos;t changed in centuries. If you&apos;re ever unsure which half a word belongs to, ask whether you could imagine a brand-new word being invented to do that same job — if yes, it&apos;s almost certainly a content word.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a word always belongs to the same part of speech no matter the sentence.", fix: "Check what job the word is doing in that specific sentence — many common English words (light, well, fast, back, round) shift categories depending on context." },
      { mistake: "Confusing adjectives and adverbs because they both 'describe' something.", fix: "Ask what's being described: if it's a noun, you need an adjective ('a quick decision'); if it's a verb, adjective, or another adverb, you need an adverb ('decided quickly')." },
      { mistake: "Treating articles (a, an, the) as their own mysterious category instead of connecting them to nouns.", fix: "Articles are determiners that always attach to a noun phrase — think of them as a signal that a noun is coming, not a standalone part of speech to worry about separately." },
      { mistake: "Believing -ly words are always adverbs.", fix: "Most -ly words are adverbs (quickly, happily), but some are adjectives (friendly, lovely, a lonely road) — check what the word is modifying, not just its ending." },
      ]}
      />
      <MisconceptionCallout
      myth="Every word has one fixed, permanent part of speech that never changes."
      reality={<p>Most common English words can function as more than one part of speech depending on the sentence. This is called conversion, and it&apos;s one of the most productive processes in English — it&apos;s how &quot;text&quot; became a verb (&quot;text me&quot;), how &quot;impact&quot; started being used as a verb despite traditionally being a noun, and how &quot;google&quot; entered dictionaries as a verb within a few years of the company&apos;s founding. A word&apos;s part of speech is a description of what it&apos;s doing right now in a specific sentence, not a permanent label stamped on the word itself.</p>}
      />
      <QuickCheck
      question="A dictionary entry for the word 'run' lists it as both a noun and a verb. What does that tell you?"
      options={[
      { text: "The dictionary made an error — a word can only have one part of speech.", correct: false, explanation: "This is the exact misconception the section above addresses. Dictionaries routinely list multiple parts of speech for one word because English words genuinely can shift categories." },
      { text: "'Run' can function as either a noun ('a home run') or a verb ('I run every morning') depending on the sentence it's in.", correct: true, explanation: "Correct. Dictionaries list every part of speech a word can plausibly serve as, precisely because the job a word does depends on the sentence around it." },
      { text: "One of the two listed meanings must be archaic or rare.", correct: false, explanation: "Both the noun and verb uses of 'run' are extremely common in everyday English — there's nothing archaic about either." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Pick any sentence you just wrote or read and label each word's part of speech — it's a fast way to spot why an awkward sentence feels awkward.",
      "Next time you catch a word being used in a way that surprises you (a noun used as a verb, like 'let's Zoom later'), notice that you're watching conversion happen in real time.",
      "When editing your own writing, check adjective/adverb pairs specifically — 'she spoke quiet' should be 'she spoke quietly,' since 'spoke' is a verb and verbs need adverbs, not adjectives.",
      "Read the related entry on Sentence Structure Basics to see how these eight word-level categories combine into subjects, predicates, and clauses.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What are the 8 parts of speech in English?", answer: "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection. Some modern grammars split out a ninth category, determiners (a, an, the, this, some), which traditional grammars group under adjectives." },
      { question: "Can a word be more than one part of speech?", answer: "Yes, very commonly. Many English words shift part of speech depending on the sentence — 'light' can be a noun, verb, or adjective; 'well' can be an adverb, noun, or interjection. The word's spelling stays the same; its job changes." },
      { question: "What is the difference between an adjective and an adverb?", answer: "Adjectives describe nouns ('a fast car'); adverbs describe verbs, adjectives, or other adverbs ('drove fast,' 'incredibly fast,' 'moved fast enough'). If you're describing a person, place, or thing, you need an adjective; if you're describing an action or another description, you need an adverb." },
      { question: "Are articles (a, an, the) a part of speech?", answer: "Traditionally they're classified as a type of adjective, since they modify nouns. Many modern grammar references now treat 'determiner' as its own separate category, distinct from descriptive adjectives like 'red' or 'happy.'" },
      { question: "Why do parts of speech matter if I already speak English fluently?", answer: "Fluent speakers use parts of speech correctly by instinct, but knowing the categories explicitly helps when editing your own writing, learning a second language, or explaining why a sentence sounds wrong — it gives you a vocabulary for diagnosing the problem instead of just sensing that something's off." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
