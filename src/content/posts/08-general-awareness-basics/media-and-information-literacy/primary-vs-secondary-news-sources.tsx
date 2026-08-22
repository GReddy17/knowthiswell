import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Primary vs Secondary News Sources",
  category: "general-awareness-basics",
  order: 28,
  subtopic: "media-and-information-literacy",
  tags: ["primary sources", "secondary sources", "media literacy", "fact-checking", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A news article about a report isn't the same thing as the report — and the distance between the two is exactly where distortion tends to creep in.",
  summary: "A primary source is direct, firsthand evidence of an event — original documents, direct testimony, raw data — while a secondary source interprets, summarizes, or reports on that primary evidence; most news coverage is secondary-source reporting built on primary evidence the outlet gathered or was given access to.",
  sources: [
    { label: "Library of Congress — Primary Sources: A Research Guide", url: "https://guides.loc.gov/" },
    { label: "Poynter Institute — Fact-Checking and Sourcing", url: "https://www.poynter.org/" },
  ],
  seeAlso: [
    "general-awareness-basics/how-fact-checking-organizations-work",
    "general-awareness-basics/reading-beyond-the-headline-critical-reading-skills",
    "general-awareness-basics/how-news-agencies-and-wire-services-work",
  ],
  glossary: [
    {"term":"Primary source","definition":"Direct, firsthand evidence of an event or fact — original documents, direct testimony, raw data, or a recording — created at or close to the time of the event itself."},
    {"term":"Secondary source","definition":"A source that interprets, summarizes, analyzes, or reports on primary evidence rather than being that firsthand evidence itself, such as a news article describing a study."},
    {"term":"Tertiary source","definition":"A source that compiles or summarizes secondary sources, such as an encyclopedia entry or a roundup article citing multiple news reports."},
    {"term":"Source chain","definition":"The sequence of sources a piece of information passes through from its original primary evidence to the version a reader ultimately encounters, with distortion risk generally increasing at each additional step."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
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
      "A primary source is direct, firsthand evidence — an original document, direct testimony, raw data; a secondary source interprets or reports on that evidence, which is what most news coverage actually is.",
      "Most news articles are secondary sources built on primary evidence the outlet gathered, was given access to, or is describing — the article itself isn't usually the original evidence.",
      "Distortion risk generally increases with each additional step in the source chain, which is why checking whether a claim traces back to an identifiable primary source is a genuinely useful media-literacy habit.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/primary-vs-secondary-news-sources">primary source</TermLink> is the original, firsthand evidence itself — a government report, a court transcript, a recorded speech, raw survey data. A <TermLink href="/general-awareness-basics/primary-vs-secondary-news-sources">secondary source</TermLink> is something that describes, summarizes, or interprets that evidence — most news articles are secondary sources, since they&apos;re reporting on events, documents, or data rather than being that original evidence themselves.</div>}
      detailed={<div className="prose-p">There&apos;s also a <TermLink href="/general-awareness-basics/primary-vs-secondary-news-sources">tertiary source</TermLink> category — content that compiles or summarizes secondary sources, like an encyclopedia entry or a roundup article citing several news reports on the same topic. Understanding the full <TermLink href="/general-awareness-basics/primary-vs-secondary-news-sources">source chain</TermLink> matters because each step from primary evidence to the version a reader ultimately encounters introduces a real, if usually small, opportunity for compression, simplification, or misinterpretation to creep in — a nuanced caveat in an original report can get dropped in a news summary, and dropped again in a shorter social-media summary of that news summary. This isn&apos;t necessarily evidence of bad faith at any step; it&apos;s simply an inherent property of summarization happening repeatedly across a chain.</div>}
      />
      <FootnoteAside>Professional fact-checkers and researchers routinely try to trace a specific claim back to its original primary source specifically because each additional link in the source chain is a place where the claim could have been altered, even unintentionally, from what the original evidence actually said.</FootnoteAside>

      <p>
      The practical value of this distinction isn&apos;t treating secondary sources as untrustworthy — good journalism does careful, responsible secondary reporting constantly — it&apos;s knowing when a claim matters enough to be worth tracing back to its original evidence.
      </p>

      <QuickCheck
      question="Is a typical news article reporting on a newly published scientific study considered a primary or secondary source for that study's findings?"
      options={[
      { text: "A primary source, since it's reporting the findings directly", correct: false, explanation: "The news article is describing and interpreting the study, not being the original evidence itself — that makes it a secondary source relative to the study." },
      { text: "A secondary source — the study itself is the primary source, and the news article is interpreting or summarizing it for readers", correct: true, explanation: "Correct. This is exactly the distinction that matters: the article reports on primary evidence (the study), but isn't that evidence itself." },
      { text: "A tertiary source, since it's summarizing scientific research", correct: false, explanation: "A single news article directly reporting on one study is more accurately a secondary source — tertiary sources specifically compile or summarize multiple secondary sources together." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tracing a claim back to its primary source (baseline case)</h3>
      <div className="prose-p">
      A news article reports that &quot;a new study found X.&quot; To verify the specific claim, a reader can look up the study itself (the primary source) — often linked or named in the article — and check whether the article&apos;s summary accurately reflects the study&apos;s actual findings, methodology, and caveats. This single verification step catches the most common distortions, like an article overstating a correlational finding as a definitive causal one.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A claim that has passed through multiple summarization steps (edge case / variation)</h3>
      <div className="prose-p">
      A social media post summarizes a news article, which itself summarized a government report, which itself summarized raw survey data. By the time the claim reaches the social media post, several layers of compression have occurred, and a caveat present in the original report (&quot;results applied only to a specific subgroup&quot;) may have been dropped entirely by the second or third step — not necessarily due to any single actor&apos;s bad intent, but simply from repeated summarization.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A primary source directly available to the public (real-world / applied case)</h3>
      <div className="prose-p">
      A government agency publishes its full report directly on its own official website at the same time news coverage of the report appears. A reader with a specific question about the report&apos;s actual methodology can go directly to the primary source rather than relying entirely on secondary summaries — a check that&apos;s become significantly easier as more primary source documents are published openly online rather than only being available through intermediaries.
      </div>

      <QuickCheck
      question="Does using secondary sources (like news articles) for everyday information consumption mean a reader is being careless or uninformed?"
      options={[
      { text: "Yes, only relying on primary sources counts as genuine media literacy", correct: false, explanation: "This sets an unrealistic and unnecessary standard — responsible secondary reporting is a normal and valuable part of how most people stay informed; the key skill is knowing when a specific claim is worth tracing back further." },
      { text: "No — secondary sources like careful news reporting are a normal, valuable way to stay informed; the more targeted skill is knowing when a specific important claim is worth tracing back to its primary source", correct: true, explanation: "Correct. Media literacy isn't about avoiding secondary sources entirely — it's about applying primary-source verification selectively to claims that matter enough to check." },
      { text: "It depends only on how many secondary sources report the same claim", correct: false, explanation: "Multiple secondary sources repeating a claim doesn't independently verify it if they all trace back to the same original (possibly flawed) primary source or to each other." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A claim's journey through the source chain"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-primary-vs-secondary-news-sources-source-chain.svg"
      altText="A flow diagram showing Primary Source (original report or data) leading to Secondary Source (news article reporting on it), leading to Tertiary Source (summary or roundup), leading to Social Media Post, with a shrinking bar beneath each step representing decreasing detail and increasing distortion risk at each stage."
      />
      <p>
      The shrinking bar underneath each stage is the core idea — detail and nuance tend to compress at each summarization step, which is exactly why checking further back up the chain matters most for claims a reader actually cares about getting right.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a news article's summary of a study as equivalent to the study itself.", fix: "Check the actual primary source (the study) for important claims, since summarization can drop caveats or oversimplify findings." },
      { mistake: "Assuming multiple outlets reporting the same claim independently confirms it.", fix: "Check whether those outlets are actually independently sourced or all citing the same original primary source or wire report." },
      { mistake: "Dismissing all secondary-source reporting as inherently unreliable.", fix: "Recognize careful secondary reporting is normal and valuable — the useful skill is selectively verifying claims that matter against their primary source." },
      ]}
      />
      <MisconceptionCallout
      myth="If a claim is widely repeated across many different outlets and social media posts, it must be independently verified and therefore reliable."
      reality={<p>Wide repetition doesn&apos;t equal independent verification — many outlets and posts repeating a claim may all trace back to the same single original source (or to each other), meaning any distortion introduced early in the chain can spread widely without ever being independently checked against the actual primary evidence.</p>}
      />

      <QuickCheck
      question="What is a tertiary source, in relation to primary and secondary sources?"
      options={[
      { text: "The same thing as a primary source, just under a different name", correct: false, explanation: "A tertiary source is a distinct category — it compiles or summarizes secondary sources, unlike a primary source, which is original firsthand evidence." },
      { text: "A source that compiles or summarizes multiple secondary sources, such as an encyclopedia entry or a roundup article citing several news reports", correct: true, explanation: "Correct. Tertiary sources sit a further step removed from the original evidence than secondary sources, adding another potential layer of compression to the source chain." },
      { text: "A source that has been officially verified by a government fact-checking body", correct: false, explanation: "Tertiary source status is about the source's position in the summarization chain (compiling secondary sources), not about any official verification process." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For any claim that matters to you, try tracing it back one step further than where you first encountered it.",
      "When a news article cites a study or report, check whether it links directly to the primary source document.",
      "Notice when multiple sources repeating a claim actually trace back to the same single origin, rather than being independently verified.",
      "Practice distinguishing primary, secondary, and tertiary sources on a few real examples from your own regular reading.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a primary and secondary source?", answer: "A primary source is direct, firsthand evidence — an original document, data, or testimony. A secondary source interprets, summarizes, or reports on that evidence, which is what most news articles are." },
      { question: "Is a news article always a secondary source?", answer: "Usually, yes, when it's reporting on an event, document, or data it didn't itself originate — though a firsthand account of an event a journalist directly witnessed can function more like a primary source for that specific event." },
      { question: "What is a tertiary source?", answer: "A source that compiles or summarizes multiple secondary sources, such as an encyclopedia entry or a roundup article citing several news reports on the same topic." },
      { question: "Why does the source chain matter for accuracy?", answer: "Because each additional summarization step between the original primary evidence and the version a reader encounters introduces a real opportunity for detail, nuance, or caveats to be compressed or lost." },
      { question: "Does wide repetition of a claim across many sources make it more reliable?", answer: "Not necessarily — many repeating sources may all trace back to the same single original source, meaning repetition alone doesn't equal independent verification against primary evidence." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
