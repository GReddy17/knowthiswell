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
  title: "Common Foreign Phrases Used in English",
  category: "language-vocabulary",
  order: 45,
  subtopic: "fun-with-language",
  tags: ["foreign phrases", "loanwords", "latin phrases", "french phrases", "vocabulary", "etymology"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Carpe diem, déjà vu, zeitgeist — English regularly borrows whole phrases from Latin, French, and German rather than translating them. Here's why, and what each one actually means.",
  summary: "English has borrowed hundreds of whole phrases directly from other languages, especially Latin, French, and German, rather than translating them, and many of these phrases have drifted in meaning or pronunciation since they were adopted.",
  sources: [
    { label: "Merriam-Webster — Carpe Diem", url: "https://www.merriam-webster.com/dictionary/carpe%20diem" },
    { label: "Merriam-Webster — Zeitgeist", url: "https://www.merriam-webster.com/dictionary/zeitgeist" },
    { label: "Merriam-Webster — Digging Up the Latin Roots of 14 Abbreviations", url: "https://www.merriam-webster.com/wordplay/origin-of-latin-abbreviations-ie-eg-etc" },
    { label: "Britannica — Loanword", url: "https://www.britannica.com/topic/loanword" },
  ],
  seeAlso: [
    "language-vocabulary/fun-with-language/untranslatable-words-from-other-languages",
    "language-vocabulary/fun-with-language/portmanteau-words-blended-words",
    "language-vocabulary/world-languages/language-families-explained",
  ],
  glossary: [
    { term: "Loanword / borrowed phrase", definition: "A word or phrase taken from another language and used largely as-is, rather than translated. A single borrowed word ('karma') and a borrowed multi-word phrase ('carpe diem') work the same way." },
    { term: "Assimilated word", definition: "A borrowed word that has been fully absorbed into everyday use in the new language, no longer marked as foreign in ordinary writing (no italics, standard spelling) — 'kindergarten' and 'safari' are fully assimilated." },
    { term: "Semantic narrowing", definition: "A change in which a borrowed word's meaning becomes more specific or different in the new language than it was in the original — English 'déjà vu' names a specific psychological sensation, a narrower sense than the plain French phrase 'already seen.'" },
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
          "English regularly borrows whole phrases from other languages rather than translating them — 'carpe diem' (Latin), 'déjà vu' (French), and 'zeitgeist' (German) are all used as-is, not converted into English words.",
          "Latin dominates formal, legal, and academic phrases; French dominates everyday social and culinary phrases; German contributes mostly abstract, single-concept phrases — a pattern rooted in centuries of specific historical contact, not chance.",
          "A borrowed phrase's meaning in English doesn't always match its literal source meaning exactly — 'déjà vu' now names a specific psychological sensation in English, a narrower sense than the plain French phrase it comes from.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">English has adopted hundreds of whole phrases directly from other languages instead of translating them into English words. &quot;Carpe diem&quot; (Latin, &quot;seize the day&quot;), &quot;déjà vu&quot; (French, &quot;already seen&quot;), and &quot;zeitgeist&quot; (German, &quot;spirit of the times&quot;) are all used in English exactly as borrowed, usually because no single English word captured the idea as precisely or as concisely when the phrase was first adopted.</div>}
        detailed={<div className="prose-p">It helps to separate two related but distinct borrowing patterns. A single <TermLink href="/language-vocabulary/fun-with-language/common-foreign-phrases-used-in-english">loanword</TermLink> like &quot;karma&quot; or &quot;safari&quot; gets fully naturalized — spelled and pronounced the English way, never italicized, indistinguishable from a native word in ordinary writing. A borrowed phrase, especially a multi-word one like &quot;carpe diem&quot; or &quot;raison d&apos;être,&quot; often stays visibly marked as foreign — many style guides still recommend italicizing it — even after decades of common use. Which languages contribute which kinds of phrases follows real historical patterns rather than being random: Latin supplies most formal, legal, and academic phrases (&quot;habeas corpus,&quot; &quot;pro bono,&quot; &quot;quid pro quo&quot;) because Latin was the language of law, scholarship, and the church across medieval and early modern Europe; French supplies most everyday social, culinary, and fashion phrases (&quot;déjà vu,&quot; &quot;faux pas,&quot; &quot;à la carte&quot;) thanks to French cultural prestige in English-speaking high society for centuries; German contributes fewer phrases overall but a striking number of single-concept abstractions (&quot;zeitgeist,&quot; &quot;wanderlust,&quot; &quot;doppelgänger&quot;).</div>}
      />
      <FootnoteAside>The everyday abbreviation &quot;R.S.V.P.&quot; is short for the French phrase &quot;répondez s&apos;il vous plaît&quot; (&quot;please respond&quot;) — most English speakers now use and recognize the four-letter abbreviation constantly while rarely encountering, or needing, the full French phrase it stands for.</FootnoteAside>
      <p>
      With the loanword-versus-phrase distinction in mind, it becomes much easier to notice how many languages a single paragraph of ordinary English is quietly drawing from.
      </p>

      <QuickCheck
        question="Why does 'karma' get written as an ordinary English word while 'carpe diem' is often still italicized?"
        options={[
          { text: "'Karma' isn't actually a borrowed word", correct: false, explanation: "'Karma' is a borrowed word too, ultimately from Sanskrit — it's simply been fully assimilated into English, unlike 'carpe diem.'" },
          { text: "'Karma' has been fully assimilated into everyday English, while 'carpe diem' is still commonly treated as a visibly foreign phrase", correct: true, explanation: "Correct. Assimilation is a spectrum, not a single event — some borrowings stop being marked as foreign entirely, while others, especially multi-word phrases, often stay marked for much longer." },
          { text: "Single words can be borrowed but multi-word phrases never can", correct: false, explanation: "English borrows both single words and multi-word phrases constantly — 'carpe diem' itself is proof a phrase can be borrowed wholesale." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Latin phrases in formal and everyday English (baseline)</h3>
      <div className="prose-p">
      &quot;Carpe diem&quot; (seize the day), &quot;et cetera&quot; (and the rest, usually abbreviated &quot;etc.&quot;), &quot;vice versa&quot; (with the order reversed), and &quot;status quo&quot; (the existing state of affairs) are used directly in English sentences without translation. Legal and academic English leans on Latin especially heavily — &quot;bona fide,&quot; &quot;modus operandi,&quot; &quot;quid pro quo&quot; — a direct legacy of Latin&apos;s centuries-long role as the working language of European law, the church, and scholarship.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: French phrases and why French dominates (variation)</h3>
      <div className="prose-p">
      &quot;Déjà vu,&quot; &quot;c&apos;est la vie&quot; (that&apos;s life), &quot;faux pas&quot; (a social misstep, literally &quot;false step&quot;), and &quot;à la carte&quot; (ordered item by item from a menu) all entered English directly from French. English&apos;s heavy borrowing from French traces to a specific, well-documented historical cause: the Norman Conquest of 1066 put French-speaking rulers in charge of England for centuries, embedding French vocabulary into English at every level, and French retained cultural prestige in fashion, cuisine, and diplomacy for centuries afterward — which is why French phrases still cluster so heavily around exactly those topics today.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Recognizing borrowed phrases in the news and at work (real-world / applied)</h3>
      <div className="prose-p">
      Reading ordinary news and business writing today means encountering borrowed phrases constantly without necessarily noticing: &quot;zeitgeist&quot; in cultural commentary, &quot;status quo&quot; in politics, &quot;modus operandi&quot; in journalism and true-crime writing, &quot;per se&quot; and &quot;de facto&quot; in legal and policy reporting. None of these require fluency in Latin, French, or German to use correctly — but recognizing which language a phrase came from often makes its literal, original meaning (and therefore its precise modern use) much easier to remember correctly.
      </div>

      <QuickCheck
        question="Why do French loanwords in English cluster heavily around food, fashion, and social etiquette specifically?"
        options={[
          { text: "It's a coincidence with no historical explanation", correct: false, explanation: "It traces to a specific, documented historical cause — centuries of French cultural prestige in exactly those domains after the Norman Conquest, not random chance." },
          { text: "Because of centuries of French cultural prestige in those specific domains, following the Norman Conquest of 1066", correct: true, explanation: "Correct. The Norman Conquest embedded French into English governance and culture for centuries, and French retained particular prestige in fashion, cuisine, and social etiquette long after." },
          { text: "Because Latin phrases already covered every other topic, leaving only food and fashion for French", correct: false, explanation: "Latin and French borrowing happened for different historical reasons tied to different domains (law and scholarship versus culture and cuisine), not because Latin used up the available topics first." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing 'bonafide' as one word.", fix: "The correct form is two words, 'bona fide,' reflecting its original Latin ('in good faith')." },
          { mistake: "Assuming a foreign phrase must still mean today exactly what it meant in its original language.", fix: "Meanings often shift once a phrase is borrowed — English 'déjà vu' names a specific psychological sensation, a narrower and more specific sense than the plain French phrase it comes from." },
          { mistake: "Assuming every italicized-looking phrase in formal writing is Latin.", fix: "Style guides commonly italicize unassimilated borrowings from many languages, not just Latin — French, German, and other borrowed phrases get the same treatment while they're still considered visibly 'foreign.'" },
        ]}
      />
      <MisconceptionCallout
        myth="A borrowed phrase is used in English exactly the way native speakers of the original language still use it today."
        reality={<p>Borrowed phrases frequently drift in meaning once they settle into English, sometimes narrowing to a specific sense the original phrase never had. &quot;Déjà vu&quot; is the clearest example: in French, &quot;déjà vu&quot; is simply the plain past participle phrase for &quot;already seen&quot; and can describe literally having seen something before. In English, it&apos;s narrowed almost entirely to naming a specific, eerie psychological sensation of false familiarity — a meaning the phrase carries in English that goes well beyond its everyday literal French sense.</p>}
      />

      <QuickCheck
        question="What happened to the meaning of 'déjà vu' when English borrowed it from French?"
        options={[
          { text: "Nothing — it means exactly the same thing in both languages today", correct: false, explanation: "The meaning narrowed. In French it's a plain phrase for 'already seen'; in English it's narrowed to a specific psychological sensation of false familiarity." },
          { text: "Its meaning narrowed to a specific psychological sensation, more specific than the plain French phrase", correct: true, explanation: "Correct. This kind of meaning shift after borrowing, called semantic narrowing, is common — a phrase can be borrowed accurately in form while still changing in exactly what it's used to mean." },
          { text: "English speakers reversed its meaning to the opposite of the French original", correct: false, explanation: "The meaning narrowed rather than reversed — English 'déjà vu' is still fundamentally about a sense of prior familiarity, just a more specific version of it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you use 'déjà vu' or 'carpe diem,' notice you're technically speaking two languages in one sentence.",
          "Check whether a phrase you use often is still treated as visibly foreign (often italicized) or has become fully assimilated English.",
          "When you spot a formal or legal phrase, guess its likely source language first — Latin dominates law and academia for real historical reasons.",
          "Read the entry on Untranslatable Words from Other Languages for the flip side — concepts English hasn't managed to borrow a single word for yet.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are common Latin phrases used in English?", answer: "Carpe diem (seize the day), et cetera (and the rest), vice versa (with the order reversed), status quo (the existing state of affairs), bona fide (in good faith), and modus operandi (method of operating) are all widely used directly in English." },
          { question: "Why does English use so many French phrases?", answer: "Mainly because of the Norman Conquest of 1066, which put French-speaking rulers in charge of England for centuries, and because French retained cultural prestige in fashion, cuisine, and diplomacy long afterward — which is why French loanwords cluster around exactly those topics today." },
          { question: "What does 'carpe diem' literally mean?", answer: "Literally, 'pluck the day' — commonly translated as 'seize the day,' encouraging making the most of the present moment rather than counting on the future." },
          { question: "What is the difference between a loanword and a foreign phrase?", answer: "A loanword is typically a single borrowed word that's been fully naturalized into everyday use, like 'karma.' A foreign phrase is a borrowed multi-word expression, like 'carpe diem,' which is more often still treated as visibly foreign in careful writing." },
          { question: "Why are some foreign phrases italicized in writing and others not?", answer: "Style guides generally italicize phrases still considered 'unassimilated' or visibly foreign, and drop italics once a borrowing becomes fully naturalized into ordinary English use — though there's no single universal rule, and practice varies by publication and by how common a given phrase has become." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
