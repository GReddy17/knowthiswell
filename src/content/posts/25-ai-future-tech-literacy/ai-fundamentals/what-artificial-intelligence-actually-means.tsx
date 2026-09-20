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
  title: "What Artificial Intelligence Actually Means",
  category: "ai-future-tech-literacy",
  order: 1,
  subtopic: "ai-fundamentals",
  tags: ["artificial intelligence", "machine learning", "AI basics", "what is AI"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "AI isn't one thing — it's an umbrella term for systems that perform tasks normally requiring human judgment, most of them today built by finding statistical patterns in huge amounts of data.",
  summary: "Artificial intelligence is an umbrella term for computer systems that perform tasks normally requiring human judgment — recognizing images, generating text, making predictions — and the vast majority of today's AI achieves this not through reasoning like a human, but by finding statistical patterns across enormous datasets during a training process, then applying those patterns to new inputs.",
  sources: [
    { label: "NIST — Artificial Intelligence", url: "https://www.nist.gov/artificial-intelligence" },
    { label: "Stanford HAI — Artificial Intelligence Index", url: "https://hai.stanford.edu/" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "ai-future-tech-literacy/machine-learning-vs-deep-learning-explained",
  ],
  glossary: [
    { term: "Artificial intelligence", definition: "An umbrella term for computer systems that perform tasks normally associated with human intelligence, such as recognizing patterns, making predictions, or generating language." },
    { term: "Machine learning", definition: "A specific approach to building AI where a system improves its performance on a task by being exposed to data, rather than being explicitly programmed with rules for every case." },
    { term: "Training", definition: "The process of exposing an AI model to large amounts of data so it can adjust its internal parameters to recognize patterns, before it's used on new, unseen inputs." },
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
          "&quot;AI&quot; is an umbrella term, not one technology — it covers everything from a simple recommendation algorithm to a large language model, all of which perform tasks normally requiring human judgment.",
          "Most AI in use today is built through machine learning: a system is shown huge amounts of example data and adjusts itself to recognize patterns, rather than following hand-written rules for every case.",
          "AI systems don't &quot;understand&quot; the way people do — they identify statistical patterns in data, which is why they can be both extremely capable and confidently wrong at the same time.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Artificial intelligence means a computer system doing something that would normally require human judgment — recognizing a face in a photo, translating a sentence, predicting what you might want to watch next. It&apos;s not one specific piece of software; it&apos;s a category, the way &quot;vehicle&quot; covers everything from a bicycle to a jet.</div>}
        detailed={<div className="prose-p">Most modern AI is built using <TermLink href="/ai-future-tech-literacy/machine-learning-vs-deep-learning-explained">machine learning</TermLink>: instead of a programmer writing explicit rules (&quot;if the pixel pattern looks like this, it&apos;s a cat&quot;), the system is shown thousands or millions of labeled examples during <TermLink href="/ai-future-tech-literacy/what-artificial-intelligence-actually-means">training</TermLink> and gradually adjusts internal numerical parameters until it can generalize to new, unseen examples. This is fundamentally a statistical process — the system is finding correlations in data, not reasoning about the world the way a person does — which is exactly why AI can produce a fluent, confident-sounding answer that&apos;s factually wrong: it&apos;s optimized to produce statistically plausible output, not verified truth.</div>}
      />
      <FootnoteAside>The term &quot;AI&quot; has existed since 1956 (coined at a Dartmouth workshop), long before today&apos;s systems — it has always meant &quot;machines doing tasks associated with human intelligence,&quot; and what counts as impressive under that definition has shifted dramatically over 70 years.</FootnoteAside>

      <p>Because it&apos;s a category rather than a single technology, the honest way to evaluate any AI claim is to ask what specific approach is being used underneath — not whether something is &quot;AI-powered,&quot; but what it was trained on and what it&apos;s actually optimizing for.</p>

      <QuickCheck
        question="A company advertises a new app as &quot;powered by AI.&quot; What does that phrase alone actually tell you about how the app works?"
        options={[
          { text: "Very little — &quot;AI&quot; is an umbrella term covering many different techniques, so the phrase alone doesn't specify what the system does or how reliable it is", correct: true, explanation: "Correct. &quot;AI&quot; describes a broad category of task, not a specific method — a real evaluation requires knowing what kind of system it is and what it was trained on." },
          { text: "It means the app uses a large language model specifically", correct: false, explanation: "AI covers far more than large language models — simple recommendation systems, image classifiers, and rule-based expert systems have all been called AI at different points." },
          { text: "It guarantees the app's outputs are more accurate than a non-AI app", correct: false, explanation: "There's no such guarantee — accuracy depends entirely on the specific system, its training data, and the task, not on whether the marketing uses the word &quot;AI.&quot;" },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Email spam filtering (baseline case)</h3>
      <div className="prose-p">A spam filter is trained on millions of emails already labeled &quot;spam&quot; or &quot;not spam.&quot; It learns which word patterns, sender characteristics, and formatting correlate with spam, then applies that pattern-matching to new incoming email — a straightforward, well-understood example of machine learning that most people already trust without thinking of it as &quot;AI.&quot;</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A chess engine vs. a chatbot (edge case / variation)</h3>
      <div className="prose-p">Both are called AI, but they work very differently. A chess engine searches through possible future moves and scores them against a defined goal (win the game) — closer to structured search than pattern-matching. A chatbot generates each next word based on statistical patterns learned from text. Lumping both under one label obscures how differently they actually operate and where each is likely to fail.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A medical image classifier (real-world / applied case)</h3>
      <div className="prose-p">An AI system trained to flag suspicious spots on mammograms is shown thousands of images already diagnosed by radiologists, and learns visual patterns associated with malignancy. It can be genuinely useful as a second check, but per NIST guidance on AI risk, it inherits any bias in its training data — if the training images skew toward one demographic, its accuracy can quietly drop for underrepresented groups, which is why such tools are deployed as an aid to a licensed radiologist, not a replacement.</div>

      <QuickCheck
        question="Why can an AI medical image classifier perform worse for some patient groups than others, even if it's highly accurate overall?"
        options={[
          { text: "AI systems are equally accurate for everyone by design, so this wouldn't actually happen", correct: false, explanation: "This is a real, documented risk — accuracy is not automatically uniform across groups; it depends entirely on what data the system was trained on." },
          { text: "If the training data underrepresents a group, the patterns the system learned may generalize less well to that group, lowering real-world accuracy for them specifically", correct: true, explanation: "Correct. The system only learns the patterns present in its training data — gaps or imbalances there become gaps in real-world performance, which is exactly the kind of risk NIST's AI guidance flags." },
          { text: "It's a hardware limitation unrelated to the training data", correct: false, explanation: "This isn't a hardware issue — it's a direct consequence of what data the model was trained on, which is a data and methodology question, not a processing-power one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a machine learning system goes from data to prediction"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-what-artificial-intelligence-actually-means-pipeline.svg"
        altText="A flow diagram showing labeled training data feeding into a training process that adjusts a model's internal parameters, producing a trained model, which then takes new unseen input and produces a prediction or output — with a note that the model has no innate understanding, only learned statistical patterns."
      />
      <p>Every step in this pipeline is a place where things can go wrong — biased or incomplete training data produces a biased or incomplete model, no matter how sophisticated the underlying technique is.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating &quot;AI-powered&quot; as a meaningful quality signal on its own.", fix: "Ask what specific method is used and what data it was trained on — the label alone tells you almost nothing about reliability." },
          { mistake: "Assuming AI output is verified fact because it sounds fluent and confident.", fix: "Treat AI output as a draft or a starting point, especially for factual claims — fluency and accuracy are not the same thing." },
          { mistake: "Assuming all AI systems work the same way under the hood.", fix: "Recognize that &quot;AI&quot; spans very different techniques (search, statistical pattern-matching, rule-based systems) with different strengths and failure modes." },
        ]}
      />
      <MisconceptionCallout
        myth="AI systems understand and reason about the world the way people do."
        reality={<p>Most AI systems in use today identify statistical patterns in data rather than reasoning from understanding — they can produce genuinely useful, sophisticated-looking output while having no actual model of truth, causation, or meaning behind it, which is exactly why confidently-stated AI output still needs independent verification for anything that matters.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When a product claims to be &quot;AI-powered,&quot; ask what specific technique it uses and what data trained it before trusting the claim.",
          "Treat AI-generated factual claims as a draft to verify, not a finished, checked answer.",
          "For anything high-stakes (medical, legal, financial), use AI output as an aid alongside a qualified professional, not a replacement for one.",
          "When evaluating an AI tool, look for disclosed information about its training data and known limitations, not just its stated capabilities.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is AI the same thing as a robot?", answer: "No. A robot is a physical machine that can include AI as part of its control system, but AI itself is software — it can run entirely on a server with no physical body at all, as most AI people interact with does." },
          { question: "Is machine learning the same thing as AI?", answer: "Machine learning is one major approach used to build AI systems, not a synonym for AI itself — AI is the broader goal (performing tasks requiring human-like judgment), and machine learning is today's dominant method for achieving it." },
          { question: "Can AI actually think?", answer: "Not in the way humans do. AI systems process patterns in data according to their training; they don't have subjective experience, beliefs, or genuine understanding, even when their output convincingly resembles reasoning." },
          { question: "Why does AI sometimes give confidently wrong answers?", answer: "Because AI systems, especially language-generating ones, are optimized to produce statistically plausible output based on patterns in training data — not to verify factual accuracy — so a wrong answer can be phrased exactly as confidently as a correct one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
