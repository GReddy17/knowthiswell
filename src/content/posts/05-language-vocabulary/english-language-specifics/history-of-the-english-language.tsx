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
  title: "History of the English Language",
  category: "language-vocabulary",
  order: 31,
  subtopic: "english-language-specifics",
  tags: ["english language", "old english", "middle english", "etymology", "language history", "great vowel shift"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "English moved through four distinct stages — Old, Middle, Early Modern, and Modern — reshaped along the way by Viking settlers, Norman conquerors, and centuries of borrowing.",
  summary: "English didn't begin as one fixed language and stay that way — it started as a West Germanic dialect brought to Britain in the 5th century CE, then was reshaped in turn by Old Norse, Norman French, and a continuous stream of borrowed vocabulary into the language spoken today.",
  sources: [
    { label: "Encyclopaedia Britannica — English Language", url: "https://www.britannica.com/topic/English-language" },
    { label: "Encyclopaedia Britannica — Great Vowel Shift", url: "https://www.britannica.com/topic/Great-Vowel-Shift" },
    { label: "Oxford English Dictionary", url: "https://www.oed.com/" },
    { label: "Online Etymology Dictionary", url: "https://www.etymonline.com/" },
  ],
  seeAlso: [
    "language-vocabulary/british-vs-american-english-differences",
    "language-vocabulary/loanwords-in-english-words-borrowed-from-other-languages",
    "language-vocabulary/parts-of-speech-explained",
    "history-timeline-facts/the-middle-ages-in-europe-overview",
  ],
  glossary: [
    { term: "Old English", definition: "The earliest stage of English (roughly 450–1150 CE), a West Germanic language brought to Britain by Anglo-Saxon settlers — largely unreadable to modern English speakers without study." },
    { term: "Middle English", definition: "The stage of English (roughly 1150–1500 CE) that followed the Norman Conquest, marked by heavy French vocabulary borrowing and simplified grammar — the English of Chaucer's Canterbury Tales." },
    { term: "Great Vowel Shift", definition: "A major, gradual change in how English long vowels were pronounced, occurring roughly between 1400 and 1700 — a key reason English spelling and pronunciation often don't match." },
    { term: "Norman Conquest", definition: "William the Conqueror's 1066 invasion of England, which installed a French-speaking ruling class and made Norman French the language of law, government, and the court for roughly three centuries." },
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
          "English isn't one unbroken language — it moved through four distinct stages (Old, Middle, Early Modern, and Modern English), and Old English is close to unreadable to a modern speaker without training.",
          "Two invasions did more than anything else to shape the language: Viking settlement (8th–11th centuries) added everyday Old Norse words, and the Norman Conquest (1066) buried English under three centuries of French as the language of power.",
          "The Great Vowel Shift (roughly 1400–1700) changed how English vowels were pronounced after much of the spelling was already fixed by early printing — which is the root cause of English's notoriously inconsistent spelling-to-sound match.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">English started as a West Germanic language spoken by Angles, Saxons, and Jutes who settled in Britain starting around 450 CE, pushing the existing Celtic-speaking population to the edges of the island. That early form, called <TermLink href="/language-vocabulary/history-of-the-english-language">Old English</TermLink>, looked and sounded almost nothing like English today. Over the next 1,500 years, English absorbed huge waves of vocabulary from Old Norse (Viking settlers), French (after the Norman Conquest of 1066), and Latin and Greek (through scholarship, science, and the church) — while its grammar simplified dramatically. The language kept the same name the whole time, but it changed so much that a modern English speaker can&apos;t read Old English without studying it as a separate language.</div>}
        detailed={<div className="prose-p">Historians and linguists usually split English into four periods. Old English (c. 450–1150) was highly inflected — word endings, not word order, carried most of the grammatical meaning, much like modern German. Middle English (c. 1150–1500) followed the 1066 Norman Conquest, when French became the language of the court, law, and the aristocracy for roughly three centuries while English kept going as the language of ordinary people — this social split is why English ended up with paired vocabulary for the same concept (a French-derived &quot;fancy&quot; version and an Old English &quot;plain&quot; version) and why English grammar shed most of its inflections during this period, since the language wasn&apos;t being formally taught or standardized while the elite spoke French. Early Modern English (c. 1500–1700) coincided with the <TermLink href="/language-vocabulary/history-of-the-english-language">Great Vowel Shift</TermLink>, William Caxton&apos;s introduction of the printing press to England in 1476, and the growing standardization spelling underwent even as pronunciation kept changing — a mismatch that&apos;s a major reason English spelling looks so irregular today. Modern English (c. 1700–present) covers everything from the King James Bible and Shakespeare&apos;s later plays through to today, expanding enormously through colonial contact, scientific vocabulary, and now global digital communication.</div>}
      />
      <FootnoteAside>The opening line of the Old English epic poem Beowulf — &quot;Hwæt! We Gardena in geardagum, þeodcyninga, þrym gefrunon&quot; — is genuine English, just thirteen centuries removed from today&apos;s. Roughly translated it means &quot;Listen! We have heard of the glory of the Spear-Danes&apos; kings in days gone by,&quot; but almost none of the individual words are recognizable to a modern reader without training in Old English.</FootnoteAside>
      <p>
      That gap between Beowulf&apos;s English and today&apos;s is exactly why &quot;how did English get here&quot; is a genuinely useful question — the answer runs through a small number of specific historical collisions, not a slow, even drift.
      </p>

      <QuickCheck
        question="Why is Old English largely unreadable to a modern English speaker?"
        options={[
          { text: "It's not actually English — it's a different, unrelated language that happens to share a name.", correct: false, explanation: "Old English is a genuine earlier stage of the same language, directly ancestral to Modern English — but roughly 1,500 years of change, especially heavy French and Latin borrowing plus grammar simplification, moved it far from what English looks like today." },
          { text: "It's the same language, but centuries of vocabulary borrowing and grammar simplification changed it enough that it now reads like a foreign language.", correct: true, explanation: "Correct. Old English is genuinely the earliest stage of English, but the vocabulary, spelling, and heavily inflected grammar are different enough from Modern English that it takes dedicated study to read, not just a slower pace." },
          { text: "Old English texts have only survived in poor, garbled copies, which is why they're hard to read.", correct: false, explanation: "Surviving Old English manuscripts, including Beowulf, are legible and well-studied by scholars — the difficulty is the language itself having changed dramatically, not damaged or unreliable source texts." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Old Norse settles into everyday English (baseline case)</h3>
      <div className="prose-p">
      Viking raids and settlement in England from the late 8th century through the 11th century — especially in the northern and eastern region under Norse control known as the Danelaw — left Old Norse loanwords embedded in the most basic, everyday layer of English vocabulary, not just specialized terms. Words like &quot;sky,&quot; &quot;skin,&quot; &quot;leg,&quot; &quot;egg,&quot; &quot;knife,&quot; &quot;window,&quot; and even the pronouns &quot;they,&quot; &quot;them,&quot; and &quot;their&quot; all come from Old Norse, replacing or sitting alongside the original Old English equivalents. That pronouns — one of the most resistant parts of any language&apos;s grammar to outside change — were borrowed at all shows how deeply Norse settlers and English speakers lived side by side rather than as separate, occasional contacts.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Norman Conquest splits English vocabulary by class (variation / exception case)</h3>
      <div className="prose-p">
      After William the Conqueror&apos;s victory at Hastings in 1066, Norman French became the language of the court, law, and the nobility, while English remained the language of the majority working population — for roughly three centuries. That social split shows up today as pairs of words for the same thing: the animal in the field kept its Old English name (cow, pig, sheep, calf, tended by English-speaking farmers) while the meat served at the table took the French name (beef, pork, mutton, veal, eaten by the French-speaking nobility). This same pattern shows up across law (jury, verdict, judge), government (parliament, sovereign, council), and religion (sermon, chapel) — nearly all French-derived, because those were institutions the Norman ruling class controlled.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: English&apos;s history is still visible in spelling irregularities today (real-world / applied case)</h3>
      <div className="prose-p">
      English spelling often looks inconsistent — &quot;through,&quot; &quot;though,&quot; &quot;tough,&quot; and &quot;thought&quot; all use &quot;ough&quot; but sound nothing alike — largely because spelling was substantially fixed by early printers in the late 1400s and 1500s, right as the Great Vowel Shift was still reshaping how those same words were actually pronounced. The written form froze while the spoken form kept moving, which is why a word like &quot;knight&quot; still spells out a &quot;k&quot; and a &quot;gh&quot; sound that stopped being pronounced centuries ago. Recognizing this history is genuinely useful: most of English&apos;s &quot;illogical&quot; spelling isn&apos;t random, it&apos;s a fossil record of an older pronunciation.
      </div>

      <QuickCheck
        question="Why do English speakers say 'cow' for the live animal but 'beef' for the meat, and 'pig' but 'pork'?"
        options={[
          { text: "It's a coincidence — English just happens to have two unrelated words for each.", correct: false, explanation: "It's not a coincidence. The split traces directly to the Norman Conquest, when French became the language of the ruling class that ate the meat, and English remained the language of the farmers who raised the animals." },
          { text: "The animal-versus-meat split reflects who used each word after 1066 — English-speaking farmers kept the animal name, French-speaking nobility used a French name for the meat they were served.", correct: true, explanation: "Correct. Beef, pork, mutton, and veal are all French-derived, while cow, pig, sheep, and calf are Old English — a direct linguistic fossil of the social divide the Norman Conquest created." },
          { text: "The meat words are newer inventions from the 1800s meat industry, unrelated to the Norman Conquest.", correct: false, explanation: "These word pairs are far older than the modern meat industry — the split dates back roughly to the 12th–14th centuries, directly tied to Norman French's dominance after 1066." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Four stages of English, from Old English to today"
        type="flow"
        svgSrc="/diagrams/05-history-of-the-english-language-periods-timeline.svg"
        altText="Horizontal timeline showing Old English from around 450 to 1150 CE shaped by Anglo-Saxon settlement and Viking contact, Middle English from 1150 to 1500 shaped by the Norman Conquest of 1066, Early Modern English from 1500 to 1700 shaped by the printing press and the Great Vowel Shift, and Modern English from 1700 to today shaped by colonial expansion and global borrowing."
      />
      <p>
      Each boundary on the timeline lines up with a specific historical disruption — settlement, conquest, or a technological shift like printing — rather than a slow, even drift, which is why English changed in such distinct bursts instead of gradually.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Old English is just an older-sounding version of Modern English, readable with a little patience.", fix: "Old English has different vocabulary, spelling, and grammar (heavy use of word-ending inflections) — it genuinely requires separate study, the way Modern German would." },
          { mistake: "Calling Shakespeare's English 'Old English.'", fix: "Shakespeare wrote in Early Modern English (late 1500s–early 1600s), roughly 450 years after the Old English period ended — it's largely readable today, unlike genuine Old English." },
          { mistake: "Treating English's history as one smooth, continuous evolution.", fix: "The biggest shifts came from sudden historical events — Viking settlement, the Norman Conquest, and the printing press locking in spelling — not gradual, even change over time." },
        ]}
      />
      <MisconceptionCallout
        myth="English has always been basically one stable, unchanging language, just spoken a bit differently by 'old-fashioned' people in the past."
        reality={<p>English has gone through genuinely dramatic phases — Old English was a heavily inflected Germanic language essentially unreadable to modern speakers, Middle English absorbed thousands of French words after the Norman Conquest and lost most of that inflection, and Early Modern English&apos;s pronunciation shifted enormously during the Great Vowel Shift even as spelling was becoming fixed. &quot;English&quot; is really a continuous label applied to what has been, at different points, a strikingly different language in vocabulary, grammar, and sound.</p>}
      />

      <QuickCheck
        question="Which of these best describes how English has changed over its history?"
        options={[
          { text: "It has stayed essentially the same since Anglo-Saxon settlement, with only minor slang added over time.", correct: false, explanation: "This understates the change dramatically — Old English grammar, vocabulary, and pronunciation are all substantially different from Modern English, not just lightly updated." },
          { text: "It moved through distinct historical stages — Old, Middle, Early Modern, and Modern English — each reshaped by a specific event like invasion, conquest, or the spread of printing.", correct: true, explanation: "Correct. Each stage boundary lines up with a real historical disruption: Anglo-Saxon settlement and Viking contact, the Norman Conquest, the printing press and the Great Vowel Shift, and later colonial and global expansion." },
          { text: "English is a constructed language that was deliberately standardized all at once in the 1700s.", correct: false, explanation: "English evolved organically over more than a thousand years through contact, conquest, and borrowing — it was never deliberately constructed or standardized in a single event, though dictionaries and grammar guides later did formalize parts of it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time an English spelling looks 'illogical' (like 'knight' or 'through'), remember it's often a fossil of an older pronunciation, not a random inconsistency.",
          "When you notice an animal/meat word pair (cow/beef, pig/pork, sheep/mutton), recognize it as a direct trace of the Norman Conquest's class divide.",
          "Try reading a short passage of Old English (like the opening of Beowulf) side-by-side with a translation to feel how far the language has actually moved.",
          "Read the entry on Loanwords in English next to see how borrowing from French, Latin, and beyond continued well past the Middle English period.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the English language start?", answer: "English began around 450 CE, when Anglo-Saxon settlers (Angles, Saxons, and Jutes) brought their West Germanic dialects to Britain, gradually displacing the Celtic languages spoken there. That earliest form is called Old English." },
          { question: "What is the difference between Old English, Middle English, and Modern English?", answer: "Old English (c. 450–1150) is a heavily inflected Germanic language, unreadable to modern speakers without study. Middle English (c. 1150–1500), the language of Chaucer, followed the Norman Conquest and absorbed huge amounts of French vocabulary. Modern English (c. 1700–present) is the largely recognizable form spoken today, following the Early Modern period of Shakespeare and the King James Bible." },
          { question: "Why does English have so many French words?", answer: "The Norman Conquest of 1066 made Norman French the language of the English court, law, and nobility for roughly three centuries, embedding thousands of French words into English, especially in law, government, food, and the arts." },
          { question: "What is the Great Vowel Shift?", answer: "A major, gradual change in how English long vowels were pronounced, occurring roughly between 1400 and 1700. It happened around the same time spelling was becoming standardized by early printers, which is a major reason English spelling and pronunciation often don't match today." },
          { question: "Is Shakespeare's English the same as Old English?", answer: "No. Shakespeare wrote in Early Modern English (roughly 1500–1700), which is largely readable today with some effort. Old English (roughly 450–1150) is a much older, separate stage that requires dedicated study to read." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
