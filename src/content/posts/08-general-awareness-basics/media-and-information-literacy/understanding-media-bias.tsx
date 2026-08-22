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
  title: "Understanding Media Bias",
  category: "general-awareness-basics",
  order: 26,
  subtopic: "media-and-information-literacy",
  tags: ["media bias", "news literacy", "story selection", "framing", "journalism"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Media bias mostly isn't outright lying — it's selection and framing: which stories run, which facts lead, and which words describe the same event, all of which can shift a reader's impression without a single false claim.",
  summary: "Media bias operates mainly through story selection and framing — which events get covered, which facts are placed first, and which words are chosen to describe them — rather than through outright factual falsehoods, which is why reading multiple outlets on the same story reveals more than checking any single one for accuracy.",
  sources: [
    { label: "Reuters Institute for the Study of Journalism — Digital News Report", url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report" },
    { label: "Pew Research Center — Journalism & Media", url: "https://www.pewresearch.org/topic/news-habits-media/" },
    { label: "Encyclopaedia Britannica — Journalism", url: "https://www.britannica.com/topic/journalism" },
  ],
  seeAlso: [
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
    "general-awareness-basics/primary-vs-secondary-news-sources",
    "general-awareness-basics/reading-beyond-the-headline-critical-reading-skills",
  ],
  glossary: [
    {"term":"Framing","definition":"The way a story's facts are organized and worded to emphasize a particular interpretation, even when every individual fact stated is accurate."},
    {"term":"Selection bias (in reporting)","definition":"Bias introduced by which stories an outlet chooses to cover or ignore, and which facts within a story are placed prominently versus omitted or buried, rather than by any single false statement."},
    {"term":"Editorial vs news content","definition":"News content aims to report facts and events; editorial or opinion content is explicitly labeled commentary presenting a viewpoint — conflating the two is a common source of perceived bias."},
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
      "Most media bias operates through story selection and framing — which events get covered, which facts lead, and which words are used — not through stating things that are factually false.",
      "Reading how multiple outlets cover the exact same event reveals framing differences far more clearly than trying to judge a single outlet's fairness in isolation.",
      "News content and opinion/editorial content are different products with different purposes — labeled opinion pieces are expected to argue a viewpoint, while news reporting is expected to describe events.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Media bias usually isn&apos;t about publishing false facts — it&apos;s about which true facts get chosen, and how they&apos;re worded. Two outlets can report the exact same event, both accurately, and leave readers with noticeably different impressions based on which details lead the story and which are mentioned in passing or left out.</div>}
      detailed={<div className="prose-p">Researchers who study journalism distinguish factual accuracy from <TermLink href="/general-awareness-basics/understanding-media-bias">framing</TermLink> — the specific facts an outlet chooses to open with, elaborate on, or omit, and the connotation of the specific words chosen to describe them. A story about a policy change can be accurately headlined around either its intended benefits or its potential costs — both framings can cite true, verifiable facts, while still leaving different overall impressions. This is distinct from <TermLink href="/general-awareness-basics/understanding-media-bias">selection bias</TermLink>, which operates at the level of which stories get covered at all — an outlet doesn&apos;t need to misreport a single fact to shape a reader&apos;s overall picture of the world simply by choosing which stories to run prominently and which to skip.</div>}
      />
      <FootnoteAside>Studies of news coverage have repeatedly found that outlets across the political spectrum tend to select and frame differently while rarely disagreeing on core, verifiable facts once you compare their actual reporting — the disagreement is much more often about emphasis and framing than about the underlying facts themselves.</FootnoteAside>

      <p>
      Recognizing this distinction changes what &quot;checking for bias&quot; actually means — it&apos;s less about hunting for a single false statement and more about noticing what&apos;s emphasized, what&apos;s left out, and how it compares to other outlets&apos; coverage of the same event.
      </p>

      <QuickCheck
      question="Two news outlets both accurately report the same unemployment statistic, but one leads with 'unemployment rises' and the other leads with 'unemployment remains near historic lows.' What best describes what's happening?"
      options={[
      { text: "One of the two outlets must be reporting false information", correct: false, explanation: "Both headlines can be simultaneously true if, for example, unemployment ticked up slightly but is still low by historical standards — the disagreement here is about which true fact to lead with, not about factual accuracy." },
      { text: "This is a framing difference — both facts can be true at once, and each outlet chose to lead with the fact that supports a different overall impression", correct: true, explanation: "Correct. This is a textbook framing example: a small rise and a historically low level can both be accurate descriptions of the same number, and which one leads the headline shapes the reader's takeaway without either outlet lying." },
      { text: "This kind of framing difference is rare and only happens with genuinely biased outlets", correct: false, explanation: "Framing differences like this are extremely common across mainstream outlets on nearly any story involving a number that can be read multiple ways — it's closer to the norm than the exception." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing headlines on the same event (baseline case)</h3>
      <div className="prose-p">
      A company announces layoffs alongside strong quarterly profits. One outlet&apos;s headline: &quot;Company Cuts Jobs Despite Record Profits.&quot; Another&apos;s: &quot;Company Streamlines Operations, Reports Record Profits.&quot; Both facts (layoffs occurred, profits were record) are accurate in both headlines — the framing choice is which fact is presented as the main story and which supporting word (&quot;cuts&quot; vs. &quot;streamlines&quot;) carries the connotation.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Selection bias without any false statement (edge case / variation)</h3>
      <div className="prose-p">
      An outlet accurately reports every crime story it covers in a city, with no factual errors in any individual article — but if it disproportionately selects stories involving one demographic group over others relative to actual crime statistics, the cumulative impression created across dozens of individually accurate stories can still misrepresent overall reality. This is selection bias operating entirely through which true stories get chosen and how often, without a single inaccurate sentence anywhere.
      </div>

      <QuickCheck
      question="An outlet publishes only individually accurate crime stories, but consistently over-selects stories involving one group relative to real crime statistics. Is this outlet's individual reporting biased?"
      options={[
      { text: "No — since every individual article is factually accurate, there's no bias to speak of", correct: false, explanation: "Bias can operate at the level of which true stories get selected and how often, entirely separate from whether each individual story is factually accurate — this is exactly what selection bias means." },
      { text: "Yes — the bias here is in which true stories are chosen and how often, which can create a skewed overall impression even though no individual fact is false", correct: true, explanation: "Correct. This is why checking bias requires looking at coverage patterns over time and across outlets, not just fact-checking individual articles one at a time." },
      { text: "This can only be assessed by checking whether the outlet has ever published a false story", correct: false, explanation: "Selection bias is specifically about patterns in what gets covered, not about individual factual errors — an outlet with a perfect factual accuracy record can still show a strong selection bias pattern." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Mistaking an opinion column for news reporting (real-world / applied case)</h3>
      <div className="prose-p">
      A reader shares an article as evidence of &quot;biased news reporting,&quot; but the article is labeled &quot;Opinion&quot; or &quot;Analysis&quot; in small text at the top — a section explicitly meant to argue a viewpoint, distinct from the same outlet&apos;s news desk. Checking the section label before judging bias avoids conflating a news organization&apos;s straight reporting (expected to describe events) with its labeled opinion content (expected and permitted to argue a position) — the two are different products from the same publisher, held to different standards.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Same event, two accurate headlines: framing shapes the takeaway"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-understanding-media-bias-two-headlines-comparison.svg"
      altText="Two headline cards side by side reporting the same underlying event — one reading 'Company Cuts Jobs Despite Record Profits' and the other reading 'Company Streamlines Operations, Reports Record Profits' — connected below by a shared box labeled 'same underlying facts, different framing'."
      />
      <p>
      Both headlines can be independently checked and confirmed true — the difference between them lives entirely in which fact leads and which word carries the connotation, which is precisely why comparing multiple outlets on the same story surfaces framing more clearly than reading any single outlet alone.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Judging an outlet's overall bias from a single article rather than a pattern of coverage over time.", fix: "Bias, especially selection bias, shows up as a pattern across many stories — a single article, even a strongly framed one, doesn't establish a pattern on its own." },
      { mistake: "Treating a labeled opinion or analysis piece as equivalent to that outlet's straight news reporting.", fix: "Check the section label. Opinion and analysis content is explicitly meant to argue a viewpoint and is held to a different standard than news reporting from the same publisher." },
      { mistake: "Assuming that finding a framing difference between two outlets means one of them is lying.", fix: "Framing differences usually involve two accurate facts being weighted differently, not a factual dispute — check whether the underlying facts themselves are actually in question before concluding either side is wrong." },
      ]}
      />
      <MisconceptionCallout
      myth="Media bias means an outlet is reporting things that are factually false."
      reality={<p>The large majority of what gets called media bias operates through story selection (which events get covered, and how prominently) and framing (which facts lead, and which words carry connotation) — not through stating things that are demonstrably untrue. An outlet can maintain a strong track record of factual accuracy while still showing a consistent pattern in which stories it covers and how it frames them, which is exactly why comparing coverage across multiple outlets reveals more than fact-checking a single one.</p>}
      />

      <QuickCheck
      question="Why is comparing coverage across multiple outlets on the same story a more useful bias check than fact-checking one outlet alone?"
      options={[
      { text: "Because fact-checking a single outlet always finds the same result as comparing outlets", correct: false, explanation: "These are different checks entirely — fact-checking verifies whether individual claims are true, while comparing outlets reveals framing and selection patterns that a single-outlet fact-check wouldn't surface." },
      { text: "Because framing and selection differences — which are the main forms bias takes — only become visible when you can see what one outlet emphasized or omitted relative to others covering the same event", correct: true, explanation: "Correct. A single outlet's coverage, even if entirely factually accurate, doesn't reveal what it chose to leave out or de-emphasize — that only becomes visible by comparison." },
      { text: "Because most outlets deliberately publish false information some of the time", correct: false, explanation: "The comparison technique isn't primarily about catching factual falsehoods — it's about surfacing framing and emphasis differences, which is where most bias actually shows up." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "On a story that matters to you, read coverage from at least two outlets with different general audiences and compare what each leads with.",
      "Check whether an article is labeled news, opinion, or analysis before judging it against a news-reporting standard.",
      "Notice which facts are placed in the first two paragraphs versus buried near the end — placement itself is a framing signal.",
      "When a statistic is reported, ask what the same number would look like framed the opposite way, before forming an impression from a single framing.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is media bias, exactly?", answer: "Media bias mainly operates through story selection (which events get covered and how prominently) and framing (which facts lead and which words are chosen) — not primarily through publishing outright false information." },
      { question: "How can you tell if a news outlet is biased?", answer: "Compare its coverage of the same event against other outlets over time. A single article rarely establishes a pattern — bias, especially selection bias, shows up across many stories." },
      { question: "Is an opinion column the same as biased news reporting?", answer: "No. Labeled opinion or analysis content is explicitly meant to argue a viewpoint and is a different product from a publisher's straight news reporting, which is expected to describe events rather than argue for a position." },
      { question: "Can two accurate headlines about the same story still be biased?", answer: "Yes — this is what framing means. Two headlines can each be independently factually accurate while emphasizing different facts or using different connotative words, leaving readers with different overall impressions." },
      { question: "Does checking for bias mean fact-checking every claim?", answer: "Fact-checking verifies individual claims, but it doesn't reveal framing or selection bias, which are about what's emphasized or omitted. Comparing coverage across multiple outlets is what surfaces those patterns." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
