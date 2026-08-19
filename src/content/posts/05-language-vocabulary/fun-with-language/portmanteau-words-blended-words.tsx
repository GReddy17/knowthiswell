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
  title: "Portmanteau Words (blended words)",
  category: "language-vocabulary",
  order: 43,
  subtopic: "fun-with-language",
  tags: ["portmanteau", "blend words", "wordplay", "neologisms", "vocabulary", "etymology"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Brunch, smog, and motel are all portmanteau words — blends that fuse parts of two words together. Here's how they differ from ordinary compound words.",
  summary: "A portmanteau word (or blend) fuses parts of two or more words into a new word that combines their meanings, distinct from a compound word, which joins two whole words intact.",
  sources: [
    { label: "Merriam-Webster — Portmanteau", url: "https://www.merriam-webster.com/dictionary/portmanteau" },
    { label: "Britannica — Portmanteau word", url: "https://www.britannica.com/topic/portmanteau-word" },
    { label: "Britannica — Blend (linguistics)", url: "https://www.britannica.com/topic/blend-linguistics" },
  ],
  seeAlso: [
    "language-vocabulary/fun-with-language/palindromes-and-wordplay",
    "language-vocabulary/fun-with-language/common-foreign-phrases-used-in-english",
    "language-vocabulary/grammar-foundations/parts-of-speech-explained",
  ],
  glossary: [
    { term: "Portmanteau word", definition: "A word formed by blending the sounds and meanings of two or more other words, typically the start of one and the end of another — 'brunch' from 'breakfast' and 'lunch.' Also called a blend." },
    { term: "Blend", definition: "The linguistics term for the word-formation process of fusing parts of two existing words into a new word; 'portmanteau' is the popular name for the same thing." },
    { term: "Compound word", definition: "A word formed by joining two complete, intact words together, like 'toothbrush' or 'bookshelf' — distinct from a blend, which fuses only parts of its source words." },
    { term: "Neologism", definition: "A newly coined word or phrase that has entered, or is entering, common use. Blends are one of the most common ways languages produce neologisms." },
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
          "A portmanteau word (also called a blend) fuses parts of two or more words into one new word that carries a bit of each source's meaning — 'brunch' from 'breakfast' and 'lunch.'",
          "A blend is different from a compound word: a compound joins two whole, intact words ('toothbrush'), while a blend fuses only pieces of its source words, usually the start of one and the end of another.",
          "'Portmanteau' as a word-coinage term is over 150 years old — Lewis Carroll introduced it in 1871 — even though blending words has been one of the standard ways languages add new vocabulary for far longer than that.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/language-vocabulary/fun-with-language/portmanteau-words-blended-words">portmanteau word</TermLink> is a word made by squeezing parts of two other words together into one new word that carries a bit of both meanings. &quot;Brunch&quot; blends &quot;breakfast&quot; and &quot;lunch.&quot; &quot;Smog&quot; blends &quot;smoke&quot; and &quot;fog.&quot; &quot;Motel&quot; blends &quot;motor&quot; and &quot;hotel.&quot; Unlike a plain compound word, which just sticks two whole words together (&quot;toothbrush,&quot; &quot;bookshelf&quot;), a portmanteau keeps only part of each source word, usually the beginning of the first and the end of the second, fused where they overlap or connect smoothly.</div>}
        detailed={<div className="prose-p">Linguists use the term &quot;<TermLink href="/language-vocabulary/fun-with-language/portmanteau-words-blended-words">blend</TermLink>&quot; for this word-formation process, and it&apos;s worth distinguishing precisely from a <TermLink href="/language-vocabulary/fun-with-language/portmanteau-words-blended-words">compound word</TermLink>. A compound keeps both source words fully intact and just joins them (&quot;toothbrush&quot; = tooth + brush, both complete). A blend truncates at least one source word, typically overlapping at a shared sound where possible: &quot;brunch&quot; keeps &quot;br&quot; from breakfast and &quot;unch&quot; from lunch. Not every blend splits its sources cleanly in half — some keep most of one word and just a fragment of the other (&quot;webinar&quot; = web + seminar), and a few genuinely fuse three source words rather than two. An edge case worth knowing: once a blend becomes common enough, speakers often stop perceiving it as a blend at all and treat it as an ordinary word — most English speakers don&apos;t consciously register &quot;motel&quot; or &quot;smog&quot; as blends anymore, even though both still are, by formation.</div>}
      />
      <FootnoteAside>The term &quot;portmanteau,&quot; for a blended word, comes from Lewis Carroll, who introduced it in 1871 in Through the Looking-Glass. In the book, Humpty Dumpty explains constructed words from the nonsense poem &quot;Jabberwocky&quot; — like &quot;slithy&quot; (blending &quot;lithe&quot; and &quot;slimy&quot;) — by comparing them to a portmanteau, an old term for a suitcase with two hinged compartments: &quot;there are two meanings packed up into one word.&quot;</FootnoteAside>
      <p>
      With the compound-versus-blend distinction in mind, it&apos;s much easier to spot which everyday words are quietly blends in disguise.
      </p>

      <QuickCheck
        question="What's the key difference between a compound word like 'toothbrush' and a blend like 'brunch'?"
        options={[
          { text: "There's no real difference — both are just two words stuck together", correct: false, explanation: "'Toothbrush' keeps both source words ('tooth' and 'brush') fully intact. 'Brunch' keeps only fragments of 'breakfast' and 'lunch' — that truncation is what makes it a blend, not a compound." },
          { text: "A compound keeps both source words whole; a blend fuses only parts of its source words", correct: true, explanation: "Correct. 'Toothbrush' = tooth (whole) + brush (whole). 'Brunch' = br(eakfast) + (l)unch — both truncated and fused." },
          { text: "A compound is always shorter than a blend", correct: false, explanation: "Length isn't the distinguishing factor — some compounds are quite long ('waterproof') and some blends are quite short ('smog'). The distinction is about whether the source words stay whole or get truncated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Everyday blends hiding in plain sight (baseline)</h3>
      <div className="prose-p">
      &quot;Smog&quot; (smoke + fog), &quot;motel&quot; (motor + hotel), and &quot;brunch&quot; (breakfast + lunch) are all blends that became so ordinary they stopped registering as coinages at all. In each case, the new word describes something that genuinely combines properties of both sources — smog really is smoke mixed into fog, brunch really does sit between breakfast and lunch — which is the whole point of blending rather than just picking one existing word.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Modern coinages and brand names (variation)</h3>
      <div className="prose-p">
      Blending remains one of the most productive ways new words enter English today. &quot;Podcast&quot; blends &quot;iPod&quot; and &quot;broadcast.&quot; &quot;Webinar&quot; blends &quot;web&quot; and &quot;seminar.&quot; &quot;Emoticon&quot; blends &quot;emotion&quot; and &quot;icon.&quot; The practice isn&apos;t limited to English, either — &quot;Pokémon,&quot; the Japanese media franchise name, is itself a blend of &quot;poketto monsutā&quot; (&quot;pocket monster&quot;). This shows blending as an active, ongoing process across languages, not a closed set of words fixed in the past.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How blends become dictionary words (real-world / applied)</h3>
      <div className="prose-p">
      Blending is one of the main pipelines by which informal coinages eventually get added to major dictionaries. A blend usually starts as slang describing a genuinely new or newly-named combination of things — &quot;staycation&quot; (stay + vacation) for a vacation spent at home, &quot;mansplain&quot; (man + explain) for a specific pattern of condescending explanation — and if it sees sustained, widespread use in print and speech over enough years, dictionary editors eventually add it as a standard entry. Tracking which recent blends have crossed that threshold is a reasonably reliable way to see which new concepts a language community has decided are common enough to need their own word.
      </div>

      <QuickCheck
        question="'Podcast' blends which two words?"
        options={[
          { text: "'pod' and 'broadcast', referring to a seed pod", correct: false, explanation: "The 'pod' element in 'podcast' comes from 'iPod,' the portable media player, not a seed pod." },
          { text: "'iPod' and 'broadcast'", correct: true, explanation: "Correct. 'Podcast' was coined by blending the Apple iPod (the device many early listeners used) with 'broadcast,' even though podcasts today aren't tied to any particular device." },
          { text: "'podium' and 'forecast'", correct: false, explanation: "Neither 'podium' nor 'forecast' is a source word for 'podcast' — the actual blend is 'iPod' plus 'broadcast.'" },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Confusing compound words ('bookshelf,' two whole words joined) with blends ('brunch,' fused fragments of two words).", fix: "Check whether both source words appear intact (compound) or truncated and fused (blend)." },
          { mistake: "Assuming 'portmanteau word' is recent internet-era slang for word coinage.", fix: "The term itself dates to 1871 (Lewis Carroll), and blending as a way of forming words is far older still, across many languages." },
          { mistake: "Assuming a portmanteau always blends exactly two words.", fix: "Two is by far the most common pattern, but a small number of blends genuinely fuse three source words, so 'always two' is a useful default rather than an absolute rule." },
        ]}
      />
      <MisconceptionCallout
        myth="Portmanteau words are basically a modern social-media trend, like 'chillax' or 'Brexit.'"
        reality={<p>Blending words has been a standard, quietly common way languages add vocabulary for well over a century in English alone, and the term &quot;portmanteau&quot; for it dates to 1871. Many words that feel completely ordinary today — &quot;brunch,&quot; &quot;smog,&quot; &quot;motel&quot; — started life exactly the same way as more obviously modern coinages like &quot;podcast&quot; or &quot;staycation.&quot; What&apos;s changed isn&apos;t the process, just how quickly a new blend can now spread and get widely recognized once it&apos;s coined.</p>}
      />

      <QuickCheck
        question="Which statement about portmanteau words is accurate?"
        options={[
          { text: "The blending process is a recent invention, dating only to the rise of internet slang", correct: false, explanation: "The term 'portmanteau' for this process dates to 1871, and the process of blending words is much older than that in English and other languages." },
          { text: "Words like 'brunch,' 'smog,' and 'motel' are blends in exactly the same way modern coinages like 'podcast' are — the process hasn't changed, only its speed and visibility", correct: true, explanation: "Correct. Blending has been a steady, ordinary word-formation process for well over a century; it just gets noticed more today because new coinages now spread faster." },
          { text: "'Portmanteau' only refers to blends coined in the 20th century or later", correct: false, explanation: "The term itself predates the 20th century by decades, and it applies to the word-formation process regardless of when a specific blend was coined." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear a new slang word, check whether it's a blend of two existing words you already recognize.",
          "Notice that 'brunch,' 'smog,' and 'motel' are blends hiding in plain sight the next time you use them.",
          "Try coining your own blend for something that doesn't have a word yet, keeping a recognizable piece of each source word.",
          "Read the entry on Common Foreign Phrases Used in English to see a different way English fills vocabulary gaps — by borrowing whole phrases rather than blending.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a portmanteau word?", answer: "A word formed by blending parts of two or more other words into a new word that carries a bit of each source's meaning, like 'brunch' from 'breakfast' and 'lunch.' Linguists usually call this a 'blend.'" },
          { question: "Who invented the word 'portmanteau' for blended words?", answer: "Lewis Carroll introduced the usage in 1871 in Through the Looking-Glass, comparing blended words to a portmanteau — a suitcase with two compartments — because they pack two meanings into one word." },
          { question: "What is the difference between a portmanteau and a compound word?", answer: "A compound word joins two complete, intact words ('toothbrush'). A portmanteau (blend) fuses only truncated parts of its source words ('brunch')." },
          { question: "What are some examples of portmanteau words?", answer: "Brunch (breakfast + lunch), smog (smoke + fog), motel (motor + hotel), podcast (iPod + broadcast), webinar (web + seminar), and emoticon (emotion + icon) are all common examples." },
          { question: "Is 'brunch' a portmanteau word?", answer: "Yes — 'brunch' blends 'br' from breakfast with 'unch' from lunch, and it's one of the oldest and most familiar English portmanteau words." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
