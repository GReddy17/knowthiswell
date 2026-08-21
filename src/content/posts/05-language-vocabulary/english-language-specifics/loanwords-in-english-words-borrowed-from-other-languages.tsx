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
  title: "Loanwords in English (words borrowed from other languages)",
  category: "language-vocabulary",
  order: 34,
  subtopic: "english-language-specifics",
  tags: ["loanwords", "etymology", "borrowed words", "language contact", "vocabulary origins"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "English has borrowed words from more than 350 languages — from French and Latin to Hindi, Arabic, Japanese, and Native American languages — making loanwords the rule in English vocabulary, not the exception.",
  summary: "A loanword is a word one language adopts from another and gradually makes its own — and English has borrowed so extensively, from French and Latin to Hindi, Arabic, Japanese, and Indigenous American languages, that loanwords make up the majority of the English vocabulary rather than a small foreign minority within it.",
  sources: [
    { label: "Encyclopaedia Britannica — Loanword", url: "https://www.britannica.com/topic/loanword" },
    { label: "Online Etymology Dictionary", url: "https://www.etymonline.com/" },
    { label: "Merriam-Webster — Dictionary", url: "https://www.merriam-webster.com/" },
    { label: "Oxford English Dictionary", url: "https://www.oed.com/" },
  ],
  seeAlso: [
    "language-vocabulary/history-of-the-english-language",
    "language-vocabulary/everyday-conversational-phrases",
    "language-vocabulary/parts-of-speech-explained",
  ],
  glossary: [
    { term: "Loanword", definition: "A word one language adopts from another, usually becoming fully naturalized in spelling and pronunciation over time — English has taken loanwords from more than 350 languages." },
    { term: "Calque", definition: "A special type of borrowing where a phrase is translated piece-by-piece into another language rather than the foreign word itself being adopted — for example, 'flea market' calques the French 'marché aux puces.'" },
    { term: "Naturalization (linguistic)", definition: "The process by which a borrowed word is gradually absorbed into a language's normal spelling, pronunciation, and grammar rules, until it no longer feels 'foreign' to speakers (e.g. 'kindergarten' is fully naturalized and pluralizes as 'kindergartens,' not the German 'Kindergärten')." },
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
          "English has borrowed words from more than 350 languages — loanwords aren't a minor exception in English vocabulary, they're the majority of it, alongside a smaller core of native Old English words.",
          "The borrowing goes far beyond French and Latin: everyday English words come from Hindi/Urdu ('shampoo,' 'jungle'), Arabic ('algebra,' 'coffee'), Japanese ('tycoon,' 'emoji'), and Indigenous American languages ('hurricane,' 'moccasin').",
          "Most loanwords get fully naturalized over time, adapting to English spelling, pronunciation, and grammar rules until they stop feeling 'foreign' at all — like 'kindergarten,' which pluralizes the English way ('kindergartens'), not the German way.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/language-vocabulary/loanwords-in-english-words-borrowed-from-other-languages">loanword</TermLink> is a word one language takes from another and, over time, makes its own. English is one of the most heavily borrowing languages in the world — according to Encyclopaedia Britannica, English has taken in words from more than 350 languages across its history. That includes the well-known sources, like French and Latin, but also words from Hindi, Arabic, Japanese, Yiddish, and dozens of Indigenous languages across the Americas. Most of these words don&apos;t feel &quot;foreign&quot; anymore because they&apos;ve been fully absorbed into English spelling and pronunciation — you&apos;d probably never guess &quot;jungle,&quot; &quot;algebra,&quot; and &quot;tycoon&quot; all started as words in three completely different, unrelated languages.</div>}
        detailed={<div className="prose-p">Loanwords typically arrive through direct contact — trade, conquest, migration, or colonization — when speakers of one language need a word for a concept, object, or practice they encountered through speakers of another. &quot;Coffee&quot; came into English via Arabic &quot;qahwa,&quot; through Ottoman Turkish &quot;kahve,&quot; because Europeans encountered the drink through trade with the Arab and Ottoman worlds. &quot;Tea&quot; entered English from a Chinese dialect term (via Dutch traders), reflecting a separate trade route. Once borrowed, most loanwords go through <TermLink href="/language-vocabulary/loanwords-in-english-words-borrowed-from-other-languages">naturalization</TermLink> — they get English pronunciation, English spelling conventions, and English grammar rules (English plurals, English verb endings) rather than keeping their original language&apos;s rules. A widely cited etymological analysis of the Shorter Oxford English Dictionary&apos;s roughly 80,000 word origins found English vocabulary breaks down to roughly 28–29% French, 28% Latin, 25% native Germanic (Old English and Old Norse combined), about 5% Greek, and the remainder from dozens of other languages — meaning native Old English-derived words are actually a minority of the total dictionary, even though they include almost all of English&apos;s most frequently used everyday words (like &quot;the,&quot; &quot;is,&quot; and &quot;water&quot;).</div>}
      />
      <FootnoteAside>&quot;Emoji&quot; looks like it should be related to the English word &quot;emotion&quot; — but it isn&apos;t. It&apos;s Japanese, from &quot;e&quot; (picture) plus &quot;moji&quot; (character), meaning roughly &quot;picture character.&quot; The resemblance to &quot;emotion&quot; in English is a coincidence of sound, not a shared origin — a reminder that loanwords sometimes get reinterpreted through the borrowing language&apos;s own vocabulary even when that connection isn&apos;t real.</FootnoteAside>
      <p>
      That kind of accidental resemblance is part of why tracing a word&apos;s actual origin — rather than guessing from how it sounds — is the only reliable way to know where it really came from.
      </p>

      <QuickCheck
        question="Roughly what share of English vocabulary, by a widely cited etymological analysis of the dictionary, is native Old English/Germanic in origin rather than borrowed?"
        options={[
          { text: "The large majority, around 80-90% — most English words are native, with only a small fraction borrowed.", correct: false, explanation: "This is backwards. Widely cited etymological analyses put native Old English/Germanic-origin words at roughly a quarter of the dictionary, with French, Latin, Greek, and other borrowed sources making up the majority." },
          { text: "Roughly a quarter (around 25%) — the majority of English's total vocabulary is borrowed, mainly from French, Latin, and Greek, plus smaller shares from many other languages.", correct: true, explanation: "Correct. Even though native Old English words include most of the shortest, most frequently used words in the language (like 'the' and 'water'), they make up a minority of the dictionary's total word count." },
          { text: "Essentially none — nearly all English words originated in other languages, and almost nothing is native Old English.", correct: false, explanation: "This overstates it — a real, substantial share (roughly a quarter) of the dictionary is native Old English/Germanic in origin, and those words dominate everyday speech even if they're a minority of the full dictionary." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: French and Latin — the largest borrowed sources (baseline case)</h3>
      <div className="prose-p">
      Most of English&apos;s law, government, and administrative vocabulary comes from French, arriving through Norman rule after 1066: &quot;jury,&quot; &quot;verdict,&quot; &quot;parliament,&quot; &quot;court.&quot; Latin arrived in several separate waves — through the early Christian church, through scholarship and science, and through French itself (since French descended from Latin) — giving English words like &quot;agenda,&quot; &quot;alibi,&quot; and most scientific and medical vocabulary (&quot;thermometer,&quot; combining Greek and Latin roots). Together, French and Latin make up more than half of the words in a full English dictionary, by most etymological counts.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Beyond Europe — Hindi/Urdu, Arabic, and Japanese loanwords (variation / exception case)</h3>
      <div className="prose-p">
      &quot;Shampoo&quot; comes from Hindi &quot;champo,&quot; the imperative form of a verb meaning &quot;to press or knead&quot; (as in massage) — it entered English in the 1700s and only later came to mean washing hair. &quot;Jungle&quot; comes from Hindi/Sanskrit &quot;jangal.&quot; &quot;Bungalow&quot; comes from a Gujarati/Hindi word meaning &quot;of Bengal,&quot; describing a Bengali-style house. From Arabic: &quot;algebra&quot; comes from &quot;al-jabr&quot; (&quot;reunion of broken parts&quot;), part of the title of a 9th-century mathematics text by the Baghdad scholar al-Khwarizmi; &quot;coffee&quot; traces to Arabic &quot;qahwa.&quot; From Japanese: &quot;tycoon&quot; comes from &quot;taikun&quot; (&quot;great lord&quot;), a diplomatic title for the shogun, borrowed into English in the 1850s and only later applied to powerful businessmen; &quot;emoji,&quot; &quot;karaoke,&quot; and &quot;tsunami&quot; are all direct, relatively recent Japanese borrowings.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Indigenous American languages and words still entering English today (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Hurricane&quot; comes from the Taino (an Indigenous Caribbean language) word &quot;hurakán,&quot; borrowed into English via Spanish. &quot;Moccasin&quot; and &quot;tomahawk&quot; both come from Algonquian languages of the Northeastern United States, as does &quot;raccoon.&quot; &quot;Squash&quot; (the vegetable) comes from Narragansett. This kind of borrowing hasn&apos;t stopped — English continues absorbing loanwords today through food and pop culture, like &quot;kimchi&quot; (Korean), &quot;sriracha&quot; (Thai, from the coastal town of Si Racha), and &quot;anime&quot; (Japanese) — all recent enough that most English speakers can still name the source language, unlike centuries-old borrowings like &quot;jungle&quot; or &quot;algebra,&quot; which now feel fully &quot;English.&quot;
      </div>

      <QuickCheck
        question="What do 'shampoo' (Hindi), 'algebra' (Arabic), and 'tycoon' (Japanese) have in common, beyond all being loanwords?"
        options={[
          { text: "All three are recent 21st-century borrowings that haven't fully entered standard English yet.", correct: false, explanation: "The opposite is true — all three are old, fully naturalized loanwords (dating from the 1700s to 1850s) that most English speakers wouldn't recognize as foreign at all." },
          { text: "All three are now fully naturalized English words, pronounced and used with standard English grammar, even though each comes from a different, unrelated non-European language.", correct: true, explanation: "Correct. Despite very different origins, all three have been fully absorbed into English — a clear example of how loanwords stop feeling 'foreign' once naturalized, regardless of which language they came from." },
          { text: "All three are still considered 'foreign' words in formal English dictionaries and usually printed in italics.", correct: false, explanation: "None of these are treated as foreign or italicized in standard usage — they're fully standard English words, just like thousands of other naturalized loanwords." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Rough share of English vocabulary by language of origin"
        type="comparison"
        svgSrc="/diagrams/05-loanwords-in-english-source-language-share.svg"
        altText="Comparison chart showing the approximate share of English dictionary vocabulary by origin, based on a widely cited etymological analysis: about 29 percent French, 28 percent Latin, 25 percent native Germanic (Old English and Old Norse combined), 5 percent Greek, and roughly 13 percent from other languages combined, including Arabic, Hindi and Urdu, Japanese, Native American languages, and dozens more."
      />
      <p>
      The &quot;other languages&quot; slice looks small on a chart like this, but it&apos;s doing a lot of quiet work in everyday vocabulary — words like &quot;jungle,&quot; &quot;coffee,&quot; and &quot;hurricane&quot; are used constantly without most speakers ever thinking about which of those dozens of source languages they came from.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming English borrowing is mostly limited to French, Latin, and Greek.", fix: "English has borrowed from more than 350 languages, including major contributions from Hindi/Urdu, Arabic, Japanese, Yiddish, and many Indigenous American languages." },
          { mistake: "Assuming a word's sound tells you its true origin (like 'emoji' sounding like 'emotion').", fix: "Check the actual etymology rather than guessing from resemblance — apparent connections between words are sometimes coincidental, not a shared history." },
          { mistake: "Treating naturalized loanwords like 'kindergarten' or 'jungle' as still 'foreign' or needing special treatment (like italics) in everyday writing.", fix: "Fully naturalized loanwords follow standard English spelling, pronunciation, and grammar, and should be treated as ordinary English words in regular writing." },
        ]}
      />
      <MisconceptionCallout
        myth="Loanwords are a small, exotic exception in English — most everyday words are 'originally English.'"
        reality={<p>The opposite is closer to the truth. Widely cited etymological analyses of the English dictionary put native Old English/Germanic-origin words at roughly a quarter of the total vocabulary, with French, Latin, Greek, and dozens of other languages making up the rest. Native Old English words do dominate the handful of most frequently used words in everyday speech (like &quot;the,&quot; &quot;and,&quot; &quot;water&quot;), which is likely why borrowing feels like the exception — but across the full vocabulary, loanwords are the norm, not a rare special case.</p>}
      />

      <QuickCheck
        question="Why might English speakers underestimate how much of their vocabulary is actually borrowed?"
        options={[
          { text: "Because most everyday, high-frequency words (like 'the,' 'is,' 'water') are native Old English, even though borrowed words dominate the dictionary's full vocabulary count.", correct: true, explanation: "Correct. The most frequently used words skew native, which creates the impression that borrowing is rare — but across the entire dictionary, loanwords from French, Latin, and dozens of other languages make up the majority." },
          { text: "Because dictionaries deliberately hide the foreign origin of most loanwords.", correct: false, explanation: "Dictionaries typically include etymology information openly — the underestimate isn't due to hidden information, it's because naturalized loanwords simply stop feeling 'foreign' once absorbed." },
          { text: "Because loanwords are actually rare in English, so the impression is accurate.", correct: false, explanation: "This isn't accurate — by most etymological counts, borrowed words (mainly French, Latin, and Greek, plus dozens of other languages) make up the majority of the English dictionary, not a rare minority." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you use a word like 'jungle,' 'algebra,' or 'tycoon,' try to recall which language it actually came from.",
          "When a word's sound suggests a connection to another English word (like 'emoji' and 'emotion'), check the real etymology before assuming they're related.",
          "Notice new loanwords entering English right now through food and pop culture, and watch how quickly they start feeling 'normal.'",
          "Read the entry on the History of the English Language next to see how borrowing connects to the bigger shifts — like the Norman Conquest — that shaped English over time.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What percentage of English words come from other languages?", answer: "By widely cited etymological analyses of the English dictionary, roughly 75% of English vocabulary is borrowed — mainly from French (about 29%) and Latin (about 28%), with Greek and dozens of other languages making up the rest. Native Old English/Germanic words make up roughly a quarter." },
          { question: "What language has contributed the most loanwords to English?", answer: "French and Latin are the two largest contributors by far, together accounting for more than half of English's total dictionary vocabulary, mainly due to the Norman Conquest and centuries of scholarly and scientific borrowing." },
          { question: "Are 'shampoo' and 'jungle' really from Hindi?", answer: "Yes. 'Shampoo' comes from Hindi 'champo' (to press or knead), and 'jungle' comes from Hindi/Sanskrit 'jangal.' Both entered English during the period of British colonial contact with South Asia." },
          { question: "What is a loanword?", answer: "A word one language adopts from another, usually becoming fully naturalized in spelling, pronunciation, and grammar over time. English has taken loanwords from more than 350 languages across its history." },
          { question: "Does English still borrow words from other languages today?", answer: "Yes — English continues absorbing new loanwords, especially through global food culture and media, such as 'kimchi' (Korean), 'sriracha' (Thai), and 'anime' (Japanese), following the same pattern as older borrowings." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
