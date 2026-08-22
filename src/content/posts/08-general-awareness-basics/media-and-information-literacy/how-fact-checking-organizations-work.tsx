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
  title: "How Fact-Checking Organizations Work",
  category: "general-awareness-basics",
  order: 30,
  subtopic: "media-and-information-literacy",
  tags: ["fact-checking", "media literacy", "journalism", "misinformation", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A fact-check rating isn't a single yes-or-no verdict for most claims — most established fact-checkers use a graded scale specifically because most claims aren't purely true or false.",
  summary: "Fact-checking organizations verify specific factual claims by tracing them to primary sources, consulting subject-matter experts, and publishing their reasoning alongside a rating — most use a graded scale (like true, mostly true, mixed, mostly false, false) rather than a strict binary, since most real-world claims contain partial accuracy or missing context rather than being purely true or false.",
  sources: [
    { label: "Poynter Institute — International Fact-Checking Network Code of Principles", url: "https://www.poynter.org/ifcn/" },
    { label: "PolitiFact — How We Rate Claims", url: "https://www.politifact.com/article/2018/feb/12/principles-truth-o-meter/" },
  ],
  seeAlso: [
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
    "general-awareness-basics/primary-vs-secondary-news-sources",
    "general-awareness-basics/understanding-media-bias",
  ],
  glossary: [
    {"term":"Fact-checking organization","definition":"A body dedicated to verifying specific, checkable factual claims by tracing them to primary sources and consulting experts, then publishing a rating along with its reasoning."},
    {"term":"Graded rating scale","definition":"A rating system with more than two categories (such as true, mostly true, mixed, mostly false, false) used by most fact-checkers since real claims often contain partial accuracy rather than being purely true or false."},
    {"term":"Checkable claim","definition":"A statement specific and factual enough to be verified against evidence, distinct from an opinion, prediction, or value judgment, which fact-checkers generally don't rate the same way."},
    {"term":"International Fact-Checking Network (IFCN)","definition":"An organization that certifies fact-checking outlets against a published code of principles covering nonpartisanship, transparency of sources, and correction policies."},
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
      "Fact-checking organizations verify specific, checkable claims by tracing them to primary sources and consulting experts, then publish their reasoning alongside a rating.",
      "Most established fact-checkers use a graded rating scale, not a strict true/false binary, since most real claims contain partial accuracy or missing context rather than being purely one or the other.",
      "Fact-checkers generally distinguish checkable factual claims from opinions, predictions, or value judgments, which aren't rated the same way since they aren't verifiable against evidence in the same sense.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/how-fact-checking-organizations-work">fact-checking organization</TermLink> takes a specific, checkable claim — a statistic, a quote, a factual assertion — and investigates whether it&apos;s accurate by tracing it back to original sources and often consulting subject-matter experts. Rather than a simple true-or-false answer, most fact-checkers use a <TermLink href="/general-awareness-basics/how-fact-checking-organizations-work">graded rating scale</TermLink>, because many real claims are partly accurate, missing important context, or technically true but misleading.</div>}
      detailed={<div className="prose-p">Established fact-checkers generally focus specifically on <TermLink href="/general-awareness-basics/how-fact-checking-organizations-work">checkable claims</TermLink> — statements specific enough to verify against evidence — rather than opinions, predictions, or value judgments, which aren&apos;t factually verifiable in the same way. The <TermLink href="/general-awareness-basics/how-fact-checking-organizations-work">International Fact-Checking Network</TermLink> maintains a published code of principles that certified signatory organizations agree to follow, covering nonpartisanship in claim selection, transparency about sources and methodology, and open correction policies when an error is found. A typical fact-check publishes not just the final rating but the full reasoning and sourcing behind it, specifically so readers can independently evaluate the fact-checker&apos;s own work rather than being asked to simply trust the rating.</div>}
      />
      <FootnoteAside>Most established fact-checking organizations explicitly publish their methodology for selecting which claims to check at all — since not every claim made publicly can realistically be checked, this selection process is itself a meaningful editorial choice that transparent fact-checkers try to make visible rather than hidden.</FootnoteAside>

      <p>
      The most useful habit when reading a fact-check isn&apos;t just noting the final rating — it&apos;s reading the reasoning behind it, since the rating is a summary of an argument the fact-checker is making, not an unappealable verdict.
      </p>

      <QuickCheck
      question="Do most established fact-checking organizations rate claims on a strict true-or-false binary?"
      options={[
      { text: "Yes, virtually all fact-checkers use only a true/false binary rating", correct: false, explanation: "Most established fact-checkers use a graded scale with multiple categories, not a strict binary, precisely because most real claims contain partial accuracy or missing context." },
      { text: "No — most established fact-checkers use a graded rating scale (such as true, mostly true, mixed, mostly false, false) since most real-world claims aren't purely true or false", correct: true, explanation: "Correct. A graded scale lets fact-checkers capture nuance — like a technically accurate statistic presented in a misleading context — that a strict binary rating would flatten." },
      { text: "No — fact-checkers only publish a written explanation with no rating scale at all", correct: false, explanation: "Most established fact-checkers do publish both a rating (on some scale) and a written explanation together, not one without the other." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A claim rated &quot;mostly true&quot; (baseline case)</h3>
      <div className="prose-p">
      A public figure cites a statistic that&apos;s accurate at its core but omits an important piece of context that changes how the number should be interpreted. A fact-checker traces the statistic to its original source, confirms the number itself is correct, but notes the missing context in its published explanation and assigns a &quot;mostly true&quot; rating rather than a simple &quot;true&quot; — capturing both the claim&apos;s core accuracy and its meaningful omission in one graded rating.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A claim outside what fact-checkers typically rate (edge case / variation)</h3>
      <div className="prose-p">
      A public figure states a personal opinion or makes a prediction about a future event. Most established fact-checkers won&apos;t assign a true/false-style rating to this kind of statement at all, since it isn&apos;t a checkable factual claim in the first place — opinions and predictions fall outside what fact-checking organizations are structurally built to verify, which is why not every public statement gets (or should get) a fact-check rating.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A fact-checker correcting its own published rating (real-world / applied case)</h3>
      <div className="prose-p">
      A fact-checking organization publishes a rating, then later receives new primary-source evidence that changes the picture. Under the transparency and correction principles many established fact-checkers follow (including IFCN-certified ones), the organization publishes a visible correction or update to the original rating rather than quietly editing it — a real, observable check on the fact-checking process itself, not just on the original claim being checked.
      </div>

      <QuickCheck
      question="Do fact-checking organizations generally rate opinions and predictions the same way they rate factual claims?"
      options={[
      { text: "Yes, all public statements receive the same true/false-style rating regardless of type", correct: false, explanation: "Fact-checkers generally distinguish checkable factual claims from opinions and predictions, and typically don't apply the same true/false-style rating to the latter." },
      { text: "No — fact-checkers generally focus on checkable factual claims (specific enough to verify against evidence) and typically don't rate opinions, predictions, or value judgments the same way, since those aren't verifiable in the same sense", correct: true, explanation: "Correct. This distinction is a structural part of how fact-checking organizations define their own scope of work." },
      { text: "No — fact-checkers exclusively rate predictions and never rate factual claims at all", correct: false, explanation: "This reverses the actual scope — fact-checkers primarily focus on checkable factual claims, not predictions, which is the opposite of what this option states." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From a claim to a published fact-check"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-how-fact-checking-organizations-work-verification-flow.svg"
      altText="A flow diagram showing a Public Claim leading to a Checkable Claim filter, then to Source Tracing and Expert Consultation, then to a Graded Rating with published reasoning, with a side branch showing claims that fail the checkable-claim filter (opinions, predictions) being excluded from rating."
      />
      <p>
      The side branch matters as much as the main path — not every public statement is even eligible for a fact-check rating in the first place, since fact-checkers generally scope their work to claims that are actually checkable against evidence.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading only the final rating without checking the fact-checker's published reasoning and sources.", fix: "Read the full explanation — the rating is a summary of an argument, and the reasoning is where the actual verification work is shown." },
      { mistake: "Expecting a fact-checker to rate opinions or predictions the same way it rates factual claims.", fix: "Recognize fact-checkers generally scope their work to checkable factual claims, not value judgments or forward-looking predictions." },
      { mistake: "Treating a fact-check rating as an unappealable final verdict rather than an evidence-based argument.", fix: "Check whether the organization has a correction policy and whether the rating has been updated as new evidence emerged." },
      ]}
      />
      <MisconceptionCallout
      myth="Fact-checking organizations rate every public statement as simply true or false, with no room for nuance."
      reality={<p>Most established fact-checkers use a graded rating scale precisely because most real-world claims contain partial accuracy, missing context, or technically-true-but-misleading framing rather than being purely true or false. They also generally limit their scope to checkable factual claims, deliberately excluding opinions and predictions that aren&apos;t verifiable against evidence in the same way.</p>}
      />

      <QuickCheck
      question="What does the International Fact-Checking Network's code of principles generally require of certified signatory organizations?"
      options={[
      { text: "Agreement with a specific political viewpoint on contested issues", correct: false, explanation: "The code focuses on process principles like nonpartisanship, transparency, and correction policies — not agreement with any specific political viewpoint." },
      { text: "Nonpartisanship in claim selection, transparency about sources and methodology, and open correction policies when errors are found", correct: true, explanation: "Correct. These process-focused principles are what IFCN certification is built around, aimed at making a fact-checker's own methodology and accountability visible to readers." },
      { text: "Exclusive use of a strict true/false binary rating with no graded categories", correct: false, explanation: "The code doesn't mandate a specific rating scale design — many certified signatories use graded scales precisely because most claims aren't purely binary." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you read a fact-check, read the full published reasoning, not just the headline rating.",
      "Check whether a fact-checking organization is an IFCN signatory and review its published methodology and correction policy.",
      "Notice when a claim being discussed is actually an opinion or prediction rather than a checkable factual claim, since these aren't fact-checked the same way.",
      "If you find an error in a published fact-check, look up the organization's correction process rather than assuming the rating is fixed and unchangeable.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do fact-checking organizations verify claims?", answer: "By tracing specific, checkable claims back to primary sources, often consulting subject-matter experts, and publishing their full reasoning and sourcing alongside a rating." },
      { question: "Do fact-checkers use a simple true/false rating?", answer: "Most established fact-checkers use a graded rating scale (such as true, mostly true, mixed, mostly false, false) rather than a strict binary, since most real claims contain partial accuracy or missing context." },
      { question: "Do fact-checkers rate opinions the same way as factual claims?", answer: "Generally no — fact-checkers typically scope their work to checkable factual claims, distinct from opinions, predictions, or value judgments, which aren't verifiable against evidence in the same way." },
      { question: "What is the International Fact-Checking Network?", answer: "An organization that certifies fact-checking outlets against a published code of principles covering nonpartisanship, source transparency, and correction policies." },
      { question: "Can a fact-check rating be corrected later?", answer: "Yes — established fact-checkers with transparent correction policies will publish a visible update or correction if new evidence changes the picture on a previously rated claim." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
