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
  title: "How to Spot Misinformation & Fake News",
  category: "general-awareness-basics",
  order: 25,
  subtopic: "media-and-information-literacy",
  tags: ["misinformation", "fake news", "media literacy", "fact-checking", "critical thinking"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Spotting misinformation isn't about instinct — it's a repeatable checklist: check the source, check the date, check who else is reporting it, and check what the actual evidence says.",
  summary: "Misinformation spreads because it's designed to trigger a fast emotional reaction before a reader slows down to check the source, the date, and the evidence — a short, repeatable verification habit catches most of it before it's shared.",
  sources: [
    { label: "Poynter Institute — MediaWise fact-checking resources", url: "https://www.poynter.org/mediawise/" },
    { label: "Reuters Institute for the Study of Journalism — Digital News Report", url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report" },
    { label: "Pew Research Center — News Habits and Media", url: "https://www.pewresearch.org/topic/news-habits-media/" },
  ],
  seeAlso: [
    "general-awareness-basics/how-fact-checking-organizations-work",
    "general-awareness-basics/understanding-media-bias",
    "general-awareness-basics/reading-beyond-the-headline-critical-reading-skills",
  ],
  glossary: [
    {"term":"Misinformation","definition":"False or inaccurate information spread regardless of intent to deceive — it can result from error, not just malice."},
    {"term":"Disinformation","definition":"False information spread deliberately, with intent to deceive — a subset of misinformation defined by intent rather than accuracy alone."},
    {"term":"Lateral reading","definition":"A verification technique where a reader leaves the article in question to open new tabs and check what other independent sources say about the same claim or source, instead of only evaluating the page itself."},
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
      "Misinformation is engineered to trigger a fast emotional reaction (outrage, fear, validation) before a reader slows down to check it — the emotional pull itself is a warning sign, not proof either way.",
      "The single highest-value habit is lateral reading: leaving the article to open new tabs and check what independent, established sources say about the same claim, rather than judging the page purely on how it presents itself.",
      "A claim doesn't need to be proven false to be treated cautiously — the absence of a verifiable source, date, or independent confirmation is itself enough reason to withhold sharing until checked.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Spotting misinformation comes down to four quick checks: who published this, when was it published, who else is reporting the same thing, and does the actual evidence support the headline&apos;s claim. Most misinformation fails at least one of these checks within thirty seconds of looking.</div>}
      detailed={<div className="prose-p">Journalism researchers use a technique called <TermLink href="/general-awareness-basics/how-to-spot-misinformation-and-fake-news">lateral reading</TermLink> — rather than staying on a suspicious page and trying to judge it from its own design, tone, or citations, the reader opens new browser tabs to search what independent, established sources say about the same claim or the same publisher. Professional fact-checkers consistently outperform even trained readers who stay on the original page, precisely because leaving the page removes the persuasive framing the page itself controls. It&apos;s also worth distinguishing <TermLink href="/general-awareness-basics/how-to-spot-misinformation-and-fake-news">misinformation</TermLink> (false information, regardless of intent — including honest mistakes) from <TermLink href="/general-awareness-basics/how-to-spot-misinformation-and-fake-news">disinformation</TermLink> (false information spread deliberately to deceive) — the distinction matters less for a reader deciding whether to trust or share something, and more for understanding that not every piece of misinformation started as a lie.</div>}
      />
      <FootnoteAside>Old, real photos and videos re-shared with a false new caption (&quot;this happened yesterday in X&quot;) are one of the most common and hardest-to-catch forms of misinformation, because the underlying image is genuine — a reverse image search is often the fastest way to confirm a photo&apos;s real origin and date.</FootnoteAside>

      <p>
      None of this requires special training or software — it&apos;s a short sequence of habits that becomes fast with repetition, the same way checking a source&apos;s credentials becomes automatic for anyone who reads news regularly.
      </p>

      <QuickCheck
      question="A post claims a shocking statistic and has thousands of shares, but no named source or link to where the number came from. What should that absence tell you?"
      options={[
      { text: "Nothing — high share counts are themselves a strong signal the claim is accurate", correct: false, explanation: "Share counts measure how emotionally engaging or surprising a post is, not how accurate it is — misinformation often spreads faster than accurate, more measured reporting precisely because it's designed to provoke a reaction." },
      { text: "An unsourced statistic should be treated as unverified until an independent, named source is found — the absence of a source is itself a reason to check before sharing, regardless of how many times it's been shared", correct: true, explanation: "Correct. A missing source isn't neutral — it's a specific, checkable gap. Searching for the claim independently (lateral reading) either turns up a real source or confirms there isn't one." },
      { text: "It means the statistic is definitely false", correct: false, explanation: "An unsourced claim isn't proven false either — it's simply unverified. The correct response is to check it independently, not to assume either outcome without looking." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A viral quote attributed to a public figure (baseline case)</h3>
      <div className="prose-p">
      A quote image circulates attributing a striking statement to a well-known scientist or politician. Applying the checks: search the exact phrase in quotation marks alongside the person&apos;s name. If the quote is genuine, it will typically turn up in an original, dated, citable source (a speech transcript, an interview, a book). If it only appears on quote-image sites and social media with no primary source, that absence is the signal — genuine quotes from public figures are almost always independently documented somewhere.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A dramatic photo shared as breaking news (edge case / variation)</h3>
      <div className="prose-p">
      A dramatic image spreads with a caption claiming it shows a disaster unfolding &quot;right now.&quot; A reverse image search (dragging the image into a search engine&apos;s image-search tool) often reveals the same photo published years earlier, tied to a different, unrelated event. The photo itself may be completely real — the misinformation is entirely in the new caption reassigning it to today&apos;s news, which is why checking the image&apos;s origin matters as much as checking the text.
      </div>

      <QuickCheck
      question="A reverse image search shows a viral 'breaking news' photo was actually taken three years earlier at a different event. What does this tell you about the photo itself?"
      options={[
      { text: "The photo must be fake or digitally altered", correct: false, explanation: "The photo can be entirely genuine and unaltered — the misinformation is in the caption's false claim about when and where it was taken, not necessarily in the image itself." },
      { text: "The photo is likely real, but the caption falsely reassigns it to a current, unrelated event — the misinformation is in the mismatch between image and claim, not necessarily in the image", correct: true, explanation: "Correct. Recontextualized real media — genuine images or videos given a false new caption — is one of the most common misinformation formats precisely because the media itself passes a casual authenticity check." },
      { text: "Nothing — an old photo can't be used in misleading ways", correct: false, explanation: "Old, genuine photos are frequently reused specifically because they look authentic — the false context (a fabricated date, location, or event) is what makes the reuse misleading." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An unfamiliar news site reporting an extraordinary claim (real-world / applied case)</h3>
      <div className="prose-p">
      A link from an unfamiliar domain reports an extraordinary claim not appearing on any major outlet. Lateral reading here means opening a new tab and searching the domain name itself alongside words like &quot;reliability&quot; or &quot;fact check,&quot; and separately searching the claim&apos;s key terms to see whether any established outlet is reporting it. An extraordinary claim reported by exactly one obscure source, with no independent confirmation after a reasonable search, should stay unverified rather than be shared as fact — genuinely significant news is, almost without exception, picked up and independently confirmed by multiple outlets within a short window.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Lateral reading: leaving the page to verify, instead of judging it in place"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-how-to-spot-misinformation-and-fake-news-lateral-reading-flow.svg"
      altText="A flow diagram showing a suspicious article on the left with a question mark, an arrow pointing away from it labeled 'open new tabs' leading to three small boxes representing independent searches — the publisher's reputation, the claim itself, and a reverse image search — which converge into a final decision box on the right reading trust, verify further, or discard."
      />
      <p>
      The core move is spatial as much as mental: instead of staying on the suspicious page and evaluating its own citations, design, and tone, the reader leaves it entirely to check independent, already-established sources — the verification happens off the page, not on it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Judging a source's credibility by its design quality, tone of confidence, or use of citations that aren't actually checked.", fix: "Professional-looking design and confident tone are cheap to fake. Check where the citations actually lead, and search the publisher's name independently rather than trusting its self-presentation." },
      { mistake: "Sharing something because it confirms an existing belief, without applying the same scrutiny used for claims that contradict it.", fix: "Apply the same lateral-reading check regardless of whether the claim is convenient or inconvenient to what you already think — motivated reasoning is exactly what misinformation is designed to exploit." },
      { mistake: "Treating 'I couldn't find it debunked' as equivalent to 'this is confirmed true.'", fix: "Absence of a debunking isn't confirmation — many false claims simply haven't been fact-checked yet. Look for positive, independent confirmation, not just the absence of a rebuttal." },
      ]}
      />
      <MisconceptionCallout
      myth="Misinformation is always obviously fake — poorly written, badly designed, or from a clearly sketchy source."
      reality={<p>Some of the most effective misinformation is genuine media (a real photo, a real statistic, a real quote) placed in a false context — a real image with a fabricated caption, a real statistic from the wrong year, a real quote attributed to the wrong situation. Because the underlying material is authentic, it often passes a casual glance far more easily than an obviously fabricated story, which is exactly why lateral reading (checking the claim independently, not just the page&apos;s surface credibility) matters more than surface impressions.</p>}
      />

      <QuickCheck
      question="Why might a real, unaltered photograph still count as misinformation when it's shared with a new caption?"
      options={[
      { text: "It can't — if the photo itself is genuine and unaltered, the post is automatically accurate", correct: false, explanation: "Misinformation isn't limited to fabricated images — a genuine photo reassigned to a false event, date, or location through its caption is misleading even though the image file itself is completely real." },
      { text: "Because the caption creates a false claim about what the image shows, when it was taken, or what event it's from — the falsehood lives in the context attached to the image, not necessarily in the image file itself", correct: true, explanation: "Correct. This is why reverse image searches matter as a verification tool distinct from checking whether an image has been digitally edited — the goal is confirming the image's real original context, not just its authenticity." },
      { text: "Because all old photographs eventually become misinformation over time", correct: false, explanation: "Age alone doesn't make a photo misinformation — an old photo correctly labeled as old and accurately described is not misleading. The issue is specifically a false claim about the photo's current context." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before sharing a surprising claim, open a new tab and search the claim's key terms plus the word 'fact check' to see what independent sources say.",
      "For a suspicious photo or video, use a reverse image search to check where and when it was first published.",
      "Search an unfamiliar publisher's name alongside words like 'reliability' or 'about' before trusting its reporting on an important claim.",
      "Apply the same verification standard to claims you agree with as to claims you don't — motivated reasoning is precisely what misinformation exploits.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How can you tell if a news story is fake?", answer: "Check four things: who published it, when it was published, whether independent established sources report the same thing, and whether the actual evidence supports the headline. Lateral reading — leaving the page to check independently — is the single most effective technique researchers have found." },
      { question: "What's the difference between misinformation and disinformation?", answer: "Misinformation is any false information, regardless of intent — including honest mistakes. Disinformation is false information spread deliberately to deceive. The distinction is about intent, not about how false or damaging the content is." },
      { question: "Is a reverse image search a reliable way to check photos?", answer: "It's one of the most reliable free tools available — it can reveal when and where an image first appeared online, which catches the very common case of a real photo being reused with a false new caption." },
      { question: "Why do fact-checkers recommend leaving the page instead of judging it directly?", answer: "Research on verification behavior has found that professional fact-checkers consistently outperform readers who stay on a suspicious page trying to judge its own design, tone, and citations — leaving the page removes the persuasive framing that the page itself controls." },
      { question: "Does a lack of debunking mean a claim is true?", answer: "No. Many false claims simply haven't been checked yet by a fact-checking organization. The absence of a debunking isn't the same as positive, independent confirmation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
