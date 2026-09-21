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
  title: "How AI Actually Differs From Traditional Software",
  category: "ai-future-tech-literacy",
  order: 2,
  subtopic: "software-fundamentals",
  tags: ["artificial intelligence", "traditional software", "how AI works", "programming vs AI"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "Traditional software runs on rules a programmer wrote by hand. AI software runs on a model built from data — and that one difference explains why AI can feel unpredictable in a way a calculator never does.",
  summary: "Traditional software executes explicit, hand-written rules and produces the same output for the same input every time, while AI software is built by training a model on data to recognize patterns, producing probabilistic output that can vary — which is why AI can generalize to situations no programmer anticipated, but can also fail in ways that are harder to predict or debug.",
  sources: [
    { label: "NIST — Artificial Intelligence", url: "https://www.nist.gov/artificial-intelligence" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/what-artificial-intelligence-actually-means",
  ],
  glossary: [
    { term: "Deterministic", definition: "Producing the exact same output every time for the exact same input — the defining trait of traditional, rule-based software." },
    { term: "Model", definition: "The trained output of a machine learning process — a set of learned numerical parameters that maps new inputs to predicted outputs." },
    { term: "Edge case", definition: "An input or situation a system's rules (or training data) didn't anticipate, where behavior becomes unpredictable." },
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
          "Traditional software follows rules a programmer explicitly wrote — the same input always produces the same output.",
          "AI software is built by training a model on data, so it produces probabilistic, pattern-based output that can vary even for similar inputs.",
          "This is why AI can handle situations no programmer anticipated, but also why AI failures are harder to predict, reproduce, and debug than a normal software bug.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Regular software is a recipe: a programmer writes step-by-step instructions, and the computer follows them exactly, every time. AI software is different — instead of a recipe, it&apos;s trained on huge amounts of example data until it learns to recognize patterns on its own, which means its behavior comes from what it learned, not from a line-by-line instruction someone typed.</div>}
        detailed={<div className="prose-p">Traditional software is built by a programmer writing <TermLink href="/ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software">deterministic</TermLink> logic — explicit conditionals (&quot;if X, then Y&quot;) that a computer executes exactly as written, so identical input always produces identical output, and any wrong behavior traces back to a specific line of code. An AI system, in contrast, is built by <TermLink href="/ai-future-tech-literacy/what-artificial-intelligence-actually-means">training</TermLink> a statistical <TermLink href="/ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software">model</TermLink> on data until it learns to approximate a pattern, then applying that model to new inputs. There is no single line of code that says &quot;do this&quot; — the model&apos;s behavior is distributed across millions or billions of learned numerical parameters, which is exactly why an AI system&apos;s output can vary slightly for near-identical inputs, and why a wrong answer can&apos;t always be traced to one fixable bug the way a traditional software crash can.</div>}
      />
      <FootnoteAside>This is also why AI systems are usually evaluated with statistics (accuracy rate, error rate on a test set) rather than the pass/fail unit tests used for traditional software — there&apos;s no single &quot;correct&quot; deterministic output to check against.</FootnoteAside>

      <p>Neither approach is universally better — a bank&apos;s interest calculation should be traditional, deterministic software with a provably correct answer every time, while a system that has to handle messy, unpredictable real-world input (a photo, a sentence, a voice recording) is exactly where AI&apos;s pattern-matching becomes useful.</p>

      <QuickCheck
        question="A calculator app and an AI photo-recognition app are both given the same input twice in a row. What's the honest expectation for each?"
        options={[
          { text: "The calculator should give the exact same answer both times; the AI app might give a slightly different confidence score or even a different label, since it's working probabilistically", correct: true, explanation: "Correct. Traditional software is deterministic by design — a calculator with a bug is a bug. AI output is inherently probabilistic, so small variation between runs on similar input is normal, not necessarily an error." },
          { text: "Both should give the exact same answer both times, no exceptions", correct: false, explanation: "This is the right expectation for the calculator, but not for the AI system — AI models don't guarantee identical output on every run the way rule-based code does." },
          { text: "Neither should be expected to give a consistent answer", correct: false, explanation: "Traditional deterministic software like a calculator absolutely should give a consistent answer — that's the entire point of writing explicit rules." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tax software (baseline case)</h3>
      <div className="prose-p">Tax-filing software applies the tax code&apos;s explicit rules to your numbers — there is one legally correct answer, and the software is traditional, deterministic code precisely because the domain demands a provably correct, auditable result every single time, not a probabilistic best guess.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A spam filter vs. a rule-based email sorter (edge case / variation)</h3>
      <div className="prose-p">A simple &quot;move all email from this sender to a folder&quot; rule is traditional software — one condition, one action, no learning involved. A spam filter that decides whether a never-before-seen email is spam is AI: it was trained on millions of labeled examples and applies learned patterns to a message the system has never literally seen before, something a fixed rule list could never do at scale.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A self-checkout scale error (real-world / applied case)</h3>
      <div className="prose-p">When a grocery self-checkout scale flags &quot;unexpected item in bagging area,&quot; that&apos;s traditional software — a weight sensor with a fixed tolerance threshold, deterministic and easy to debug. When the same self-checkout uses a camera-based AI system to visually identify produce instead of a lookup code, a banana photographed at an odd angle might genuinely get misclassified — not because of a bug, but because the model&apos;s learned patterns didn&apos;t generalize perfectly to that exact image.</div>

      <QuickCheck
        question="A self-checkout's weight sensor and its camera-based produce-recognition feature both make a mistake on the same day. Which is more likely to be a straightforward, fixable 'bug'?"
        options={[
          { text: "The weight sensor error — it's traditional deterministic software, so a wrong result usually traces to a specific miscalibration or logic error", correct: true, explanation: "Correct. Deterministic, rule-based systems fail in traceable, fixable ways. The camera-based AI classifier's mistake is more likely a normal limitation of pattern-matching on an unusual image, not a single line of broken code." },
          { text: "The camera-based produce recognition — AI systems are always buggier than traditional code", correct: false, explanation: "AI 'mistakes' usually aren't bugs in the traditional sense — they're the expected behavior of a probabilistic system encountering an input outside what it generalizes well to." },
          { text: "Neither — both types of software are equally easy to debug", correct: false, explanation: "They're not equally easy to debug — deterministic rule-based logic traces to a specific cause far more reliably than a trained model's output does." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Traditional software vs. AI/ML software"
        type="comparison"
        svgSrc="/diagrams/ai-future-tech-literacy-how-ai-actually-differs-from-traditional-software-comparison.svg"
        altText="A comparison diagram: traditional software follows programmer-written rules to a deterministic same-input-same-output result; AI/ML software is trained on data into a model that produces a probabilistic, pattern-based output that can vary."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming any software labeled &quot;smart&quot; or &quot;AI-powered&quot; is actually using machine learning.", fix: "Plenty of software marketed as &quot;smart&quot; is still traditional rule-based code — the label alone doesn&apos;t tell you the underlying mechanism." },
          { mistake: "Expecting AI output to be exactly reproducible the way a calculator's is.", fix: "Build in tolerance for variation and verification steps when using AI output for anything that needs a single correct answer." },
          { mistake: "Treating an AI system's mistake the same way you'd treat a normal software bug.", fix: "Ask whether the failure is a genuine coding bug or an expected limitation of the model's training — the fix looks very different for each." },
        ]}
      />
      <MisconceptionCallout
        myth="AI software is just a more advanced version of regular programming."
        reality={<p>It&apos;s not an advancement of the same approach — it&apos;s a fundamentally different one. Traditional software is explicit instructions a human wrote; AI software is a statistical model shaped by exposure to data, with no human-readable line that dictates a specific decision. That distinction, not raw sophistication, is what actually separates the two.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before trusting a system's output for something important, ask whether it's rule-based (deterministic) or trained (probabilistic) — they warrant different levels of independent verification.",
          "Don't assume a wrong AI answer is a fixable one-line bug — it may reflect a genuine gap in the training data.",
          "For tasks that need a single, auditable correct answer (taxes, medical dosing, legal deadlines), prefer traditional deterministic software or professional review over AI output alone.",
          "When evaluating a product's &quot;AI&quot; claim, ask specifically what's rule-based vs. trained — the marketing term alone doesn't tell you.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is all modern software AI now?", answer: "No. The overwhelming majority of software running today — operating systems, most apps, databases, financial systems — is still traditional, rule-based code. AI is used specifically where pattern recognition on messy real-world input is the actual task." },
          { question: "Can traditional software and AI be combined in the same product?", answer: "Yes, and this is extremely common — a typical app might use traditional code for its core logic and database, with an AI component handling one specific task like image recognition or text generation." },
          { question: "Why can't programmers just write explicit rules for what AI does instead?", answer: "For tasks like recognizing objects in photos or understanding natural language, the number of possible rules needed is effectively infinite — no human could hand-write rules covering every lighting condition, angle, or phrasing, which is exactly the problem machine learning was built to solve." },
          { question: "Is AI software harder to test than traditional software?", answer: "In a specific way, yes — traditional software is tested against exact expected outputs, while AI systems are evaluated statistically against a labeled test dataset, measuring an accuracy rate rather than a strict pass/fail." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
