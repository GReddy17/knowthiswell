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
  title: "Skimming vs Scanning",
  category: "language-vocabulary",
  order: 19,
  subtopic: "reading-and-comprehension",
  tags: ["skimming", "scanning", "speed reading", "reading strategies", "study skills"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Skimming and scanning both mean reading fast, but they're not interchangeable — one hunts for a specific fact, the other builds a general sense of a whole text.",
  summary: "Skimming and scanning are two distinct fast-reading techniques: skimming moves quickly through a whole text to get a general sense of its content, while scanning searches quickly for one specific piece of information without reading the surrounding material at all.",
  sources: [
    { label: "Merriam-Webster — 'Skim' (definition)", url: "https://www.merriam-webster.com/dictionary/skim" },
    { label: "University of Tennessee at Chattanooga — Skimming and Scanning (Center for Academic Support and Advisement)", url: "https://www.utc.edu/enrollment-management-and-student-affairs/center-for-academic-support-and-advisement/tips-for-academic-success/skimming" },
  ],
  seeAlso: [
    "language-vocabulary/reading-comprehension-strategies",
    "language-vocabulary/understanding-context-clues",
    "language-vocabulary/figurative-language-explained-metaphor-simile-etc",
  ],
  glossary: [
    { term: "Skimming", definition: "Reading quickly through an entire text to get a general sense of its main ideas and structure, without reading every word closely." },
    { term: "Scanning", definition: "Moving your eyes quickly over a text to locate one specific piece of information — a name, date, or fact — while ignoring everything else." },
    { term: "Close reading", definition: "Reading slowly and carefully, word by word, to fully understand meaning, tone, and detail — the opposite end of the reading-speed spectrum from skimming and scanning." },
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
          "Skimming reads an entire text quickly to get a general sense of what it covers; scanning searches for one specific fact and ignores everything else, including much of the actual content.",
          "The two techniques serve different goals: skim before deciding whether a text is worth reading closely; scan when you already know exactly what you're looking for, like a phone number or a date.",
          "Neither skimming nor scanning replaces careful, close reading — both are ways to triage what to spend close-reading time on, not substitutes for actually understanding a text in depth.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/language-vocabulary/skimming-vs-scanning">Skimming</TermLink> means reading fast to get the general idea of a whole text — you catch headings, topic sentences, and bolded words, but you&apos;re not reading every sentence. <TermLink href="/language-vocabulary/skimming-vs-scanning">Scanning</TermLink> means moving your eyes over a text hunting for one specific thing — a name, a number, a date — and ignoring everything else on the page until your eyes land on it. Skimming answers &quot;what is this generally about?&quot; Scanning answers &quot;where exactly is this one piece of information?&quot;</div>}
        detailed={<div className="prose-p">The mechanical difference is in what your eyes are actually doing. Skimming follows a text&apos;s structure — headings, the first sentence of each paragraph, bolded or italicized terms, visuals — building a rough map of the whole piece in a fraction of the time full reading would take. Scanning doesn&apos;t follow structure at all; it runs your eyes down the page looking for a visual target (a specific word, a number format, a proper noun) and stops the instant that target appears, without processing any of the surrounding text. The edge case worth knowing: the two are often used together in sequence, not as alternatives — you skim a long report first to figure out which section probably has the budget figures, then scan that specific section to find the exact number, rather than reading the whole report closely from the top.</div>}
      />
      <FootnoteAside>Scanning is the technique your eyes use, half-consciously, every time you check a restaurant menu for one dish you already know you want, or search a long form for the one field you haven&apos;t filled in yet — it&apos;s a skill people already use constantly outside of reading class, just without naming it.</FootnoteAside>
      <p>
      Once skimming and scanning are separated by purpose rather than just speed, it becomes much easier to pick the right one for a given reading task instead of defaulting to reading everything closely, every time.
      </p>

      <QuickCheck
        question="You need to find one specific date buried somewhere in a long article you've never read before. Which technique fits best?"
        options={[
          { text: "Skimming — read the headings and topic sentences to understand the article generally.", correct: false, explanation: "Skimming builds a general sense of the whole article, but it's not built to reliably locate one exact, specific fact — it can miss the date entirely if it isn't near a heading or topic sentence." },
          { text: "Scanning — run your eyes down the page hunting specifically for a date-shaped piece of text.", correct: true, explanation: "Correct. Scanning is built exactly for this: locating one specific known target (a date) while ignoring the rest of the content." },
          { text: "Close reading the entire article from start to finish.", correct: false, explanation: "This would work eventually, but it's far slower than necessary for locating one specific known fact — scanning is the efficient tool for this exact task." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Deciding whether a research article is worth reading in full (baseline case)</h3>
      <div className="prose-p">
      Before committing twenty minutes to a long article, a reader skims it first: title, abstract or introduction, section headings, and the first sentence of a few paragraphs. In under a minute, this builds enough of a general picture to decide whether the article is actually relevant, or whether it&apos;s not what was needed at all. This is skimming doing its real job — not understanding the article, but deciding whether close reading is worth the time investment.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Finding a single phone number in a long webpage (variation / contrast case)</h3>
      <div className="prose-p">
      A reader lands on a company&apos;s &quot;Contact Us&quot; page that&apos;s mostly paragraphs about company history and mission. Skimming this page (reading topic sentences, headings) would be inefficient, because the phone number probably isn&apos;t the topic of any paragraph — it might just be sitting in a footer or sidebar. Scanning is the right tool here: eyes moving down the page looking specifically for a number-shaped string of digits, ignoring the surrounding prose entirely, until it&apos;s found.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Skimming then scanning together in real research (real-world / applied case)</h3>
      <div className="prose-p">
      A student researching a paper skims a dozen articles&apos; abstracts and headings first to shortlist the three that are actually relevant — that&apos;s skimming, used for triage. Then, within those three articles, the student scans specifically for statistics or dates to cite, without re-reading the full text closely. Only the passages containing those specific facts get read closely, in full. This two-step skim-then-scan workflow, followed by targeted close reading, is how experienced researchers actually move through large amounts of material efficiently, rather than reading everything at the same careful pace.
      </div>

      <QuickCheck
        question="What's the main practical difference in how skimming and scanning use a text's structure (headings, topic sentences)?"
        options={[
          { text: "Skimming relies on structure to build a general picture; scanning largely ignores structure and just hunts visually for a specific target.", correct: true, explanation: "Correct. Skimming follows headings and topic sentences on purpose to map the whole text quickly; scanning doesn't care about structure at all — it's just visually hunting for one target." },
          { text: "Both techniques rely equally on structure, since both are types of fast reading.", correct: false, explanation: "They diverge here — skimming is structure-dependent, while scanning is closer to visual pattern-matching that bypasses structure entirely." },
          { text: "Scanning relies on structure more than skimming does.", correct: false, explanation: "This has it backwards — scanning is the one that ignores structure, hunting directly for a visual target regardless of headings or topic sentences." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using skimming when the goal is actually to find one specific fact.", fix: "Switch to scanning — hunt visually for the specific target (a name, number, or date) instead of trying to build a general understanding first." },
          { mistake: "Treating a skim as if it were a full, careful reading of a text.", fix: "Remember skimming only gives a general sense — follow it up with close reading of the specific sections that turn out to matter." },
          { mistake: "Reading everything at the same careful, word-by-word pace regardless of the task.", fix: "Match the technique to the goal: skim to decide relevance, scan to locate a known fact, and reserve close reading for the parts that actually need full understanding." },
        ]}
      />
      <MisconceptionCallout
        myth="Skimming and scanning are basically the same technique — just two names for reading fast."
        reality={<p>They&apos;re both fast, but they do different jobs and involve different eye behavior. Skimming builds a general sense of an entire text by following its structure (headings, topic sentences); scanning searches for one specific, known piece of information and largely ignores the text&apos;s structure and content otherwise. Using the wrong one for the task — skimming when you need one exact fact, or scanning when you need general understanding — wastes time rather than saving it.</p>}
      />

      <QuickCheck
        question="A reader skims a long news article to get its general gist, then insists they now 'know exactly what the article says, word for word.' What's the issue?"
        options={[
          { text: "There's no issue — skimming and close reading produce the same level of understanding.", correct: false, explanation: "Skimming deliberately trades detail for speed. It gives a general sense of content, not the detailed, word-level understanding that close reading provides." },
          { text: "The reader is confusing a general impression (what skimming provides) with detailed, word-for-word understanding (what close reading provides).", correct: true, explanation: "Correct. Skimming is a fast triage technique, not a substitute for close reading — treating a skim as equivalent to a careful read is the actual misconception here, distinct from the skim-vs-scan confusion." },
          { text: "The reader should have scanned the article instead.", correct: false, explanation: "Scanning wouldn't fix this either — scanning is for locating one specific fact, not for building any kind of general or detailed understanding of a whole article." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before diving into a long article or document, skim it first — headings, first sentences, bolded terms — to decide whether it's worth reading closely at all.",
          "Next time you're hunting for one specific fact (a date, a price, a name), notice yourself scanning rather than reading, and lean into it deliberately instead of reading top to bottom.",
          "Watch for the moment a skim turns into a scan, or vice versa, in your own reading — most real reading tasks actually blend both techniques in sequence.",
          "After skimming something and deciding it's relevant, go back and close-read the specific parts that matter, rather than treating the skim itself as sufficient understanding.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between skimming and scanning?", answer: "Skimming reads a whole text quickly to get its general idea, following headings and topic sentences. Scanning searches for one specific known fact — a name, date, or number — and ignores the rest of the text's structure and content entirely." },
          { question: "When should you skim instead of scan?", answer: "Skim when you want a general sense of a text or need to decide whether it's worth reading closely — for example, previewing an article before committing time to it. Scan when you already know exactly what specific fact you're looking for." },
          { question: "Is skimming a good way to study for a test?", answer: "Skimming alone isn't enough for most tests — it gives a general overview, not the detailed recall a test usually requires. It works well as a first pass to map out material, followed by close reading and active review of the specific parts that matter most." },
          { question: "How do you scan a text quickly?", answer: "Decide exactly what you're looking for first (a name, a number, a specific word), then move your eyes down the page looking only for that visual target, ignoring the surrounding sentences until it appears." },
          { question: "Can you skim and scan the same document?", answer: "Yes, and this is actually the common real-world pattern — skim first to find the section likely to contain what you need, then scan within that specific section to locate the exact fact." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
