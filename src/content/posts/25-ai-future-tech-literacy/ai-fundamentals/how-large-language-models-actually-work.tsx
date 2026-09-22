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
  title: "How Large Language Models Actually Work",
  category: "ai-future-tech-literacy",
  order: 2,
  subtopic: "ai-fundamentals",
  tags: ["large language models", "LLM", "AI", "machine learning", "how AI works"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "An LLM doesn't look anything up when it answers you — it's predicting the next word, one token at a time, based on patterns learned from enormous amounts of text.",
  summary: "A large language model is a neural network trained on huge volumes of text to predict the next word (technically, the next \"token\") in a sequence, repeatedly, given everything that came before it — through that single mechanism, repeated billions of times during training, the model learns statistical patterns in grammar, facts, and reasoning-like structure well enough to generate coherent, often useful text one token at a time, without retrieving stored facts from a database the way a search engine does.",
  sources: [
    { label: "NIST — Artificial Intelligence", url: "https://www.nist.gov/artificial-intelligence" },
    { label: "Stanford HAI — Artificial Intelligence Index", url: "https://hai.stanford.edu/" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/what-artificial-intelligence-actually-means",
    "ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software",
    "technology-basics/what-algorithm-actually-means",
  ],
  glossary: [
    { term: "Token", definition: "A chunk of text — often a word, part of a word, or punctuation mark — that a language model treats as one unit when reading input or generating output." },
    { term: "Neural network", definition: "A machine learning model made of layered, adjustable numerical connections loosely inspired by neurons, trained by repeatedly adjusting those connections to reduce prediction error." },
    { term: "Training data", definition: "The large body of text a language model learns statistical patterns from before it's ever used to answer a question." },
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
          "A large language model generates text by repeatedly predicting the single most statistically likely next token, given everything written so far.",
          "It learns these patterns by processing huge volumes of text during training — it doesn't look up facts in a live database when answering.",
          "Because it's predicting plausible-sounding text rather than retrieving verified facts, it can produce confident, fluent answers that are still factually wrong.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A large language model (LLM) writes text one small piece at a time, each time asking &quot;given everything so far, what&apos;s the most likely next word?&quot; It got good at guessing by reading an enormous amount of text beforehand and adjusting itself, over and over, until its guesses matched real writing patterns closely. It isn&apos;t searching a database for your answer — it&apos;s generating a statistically plausible continuation of the conversation.</div>}
        detailed={<div className="prose-p">Per NIST and Stanford HAI descriptions of modern AI systems, an LLM is a type of <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">neural network</TermLink> trained on very large text datasets to predict the next <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">token</TermLink> in a sequence. During <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">training data</TermLink> processing, the model is repeatedly shown partial text, asked to predict what comes next, checked against the real next token, and adjusted slightly to reduce that error — across billions of examples, this simple repeated task is enough for the model to internalize grammar, factual associations, and patterns that resemble reasoning. At use time (&quot;inference&quot;), the model has no live connection to the truth — it generates each token based purely on learned statistical likelihood given the prior context, then feeds its own output back in to generate the next token, one at a time. This is also why LLMs can state incorrect information fluently and confidently: nothing in the core mechanism checks the output against ground truth unless a separate tool or retrieval system is explicitly added.</div>}
      />
      <FootnoteAside>The same underlying mechanism — next-token prediction — scales from small models running on a laptop to the largest models trained on massive data-center clusters; what changes with scale is mostly the number of adjustable connections and the volume of training text, not the fundamental approach.</FootnoteAside>

      <p>This is also why a phrase like &quot;the AI thought about it&quot; is misleading in a literal sense — there&apos;s no separate reasoning step happening outside the token-by-token prediction process, even though the output can read as if there were.</p>

      <QuickCheck
        question="Why can an LLM state an incorrect fact fluently and confidently, in the same tone as a correct one?"
        options={[
          { text: "Because it's generating statistically plausible text, not retrieving and verifying facts from a database", correct: true, explanation: "Correct. The core mechanism is next-token prediction based on learned patterns, not fact lookup — so a fluent, confident tone doesn't indicate that the underlying claim was checked against ground truth." },
          { text: "Because it deliberately tries to deceive the user", correct: false, explanation: "There's no intent or deception mechanism involved — the model has no goal beyond predicting plausible next tokens, and incorrect outputs are a byproduct of that mechanism, not deliberate." },
          { text: "Because its training data was too small to include enough facts", correct: false, explanation: "Training data size affects overall accuracy, but even very large, fact-rich training sets don't eliminate this behavior, since the mechanism itself never checks output against a verified source unless a separate tool does that." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finishing a common phrase (baseline case)</h3>
      <div className="prose-p">Given the input &quot;The capital of France is,&quot; the model predicts &quot;Paris&quot; as the most likely next token, because that exact pattern appeared constantly across its training text — a clean case where statistical likelihood and factual correctness line up.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A confident wrong answer (edge case / variation)</h3>
      <div className="prose-p">Asked about a very obscure or recent event underrepresented in its training data, the model may still generate a fluent, specific-sounding answer, because it&apos;s completing the pattern of &quot;how a confident answer to this kind of question looks,&quot; not verifying the specific facts — this is the well-documented behavior often called &quot;hallucination.&quot;</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A long, multi-step answer (real-world / applied case)</h3>
      <div className="prose-p">When an LLM produces a multi-paragraph explanation with numbered steps, it&apos;s still generating one token at a time, each token conditioned on everything generated so far — the apparent structure and planning is an emergent result of pattern-matching against many structured examples in training data, not a separate outlining process happening before generation begins.</div>

      <QuickCheck
        question="An LLM produces a well-organized, multi-step answer with clear structure. What does this indicate about how it was generated?"
        options={[
          { text: "It was still generated one token at a time, with the apparent structure emerging from patterns learned from many similarly structured examples", correct: true, explanation: "Correct. There's no separate planning phase in the core mechanism — structure emerges because the model learned, from training text, what token sequences typically follow a structured-answer pattern." },
          { text: "The model built an outline first, then filled in the details", correct: false, explanation: "The core generation mechanism doesn't include a distinct outlining step — token-by-token generation is the whole process, even when the result looks planned." },
          { text: "It retrieved a pre-written template matching the question", correct: false, explanation: "LLMs generate new token sequences based on learned patterns rather than retrieving stored templates, even though the output can resemble a template." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From training text to a generated answer"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-how-large-language-models-actually-work-flow.svg"
        altText="A flow diagram: huge volumes of text are used to train a neural network to predict the next token repeatedly; at use time, a user prompt is fed in, and the model generates a response one token at a time, each token conditioned on everything generated so far."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming an LLM is searching the internet or a database in real time to answer.", fix: "Understand it's generating text from patterns learned during training, unless it's explicitly connected to a separate search or retrieval tool." },
          { mistake: "Trusting a confident, fluent tone as a sign of factual accuracy.", fix: "Verify specific facts, dates, and figures against a real source independently, especially for anything consequential." },
          { mistake: "Believing the model 'understands' or 'thinks' in the human sense.", fix: "Treat it as a powerful statistical pattern-completion system — useful, but mechanistically distinct from human reasoning or comprehension." },
        ]}
      />
      <MisconceptionCallout
        myth="An AI chatbot looks up the answer, the same way a search engine does."
        reality={<p>It generates its answer token by token from patterns learned during training, with no live lookup step in the core mechanism. Some AI products add a separate retrieval or search tool on top of the model specifically to address this gap, but that&apos;s an added component, not how the base language model works. This distinction is exactly why fluent-sounding wrong answers happen and why independently verifying important facts still matters.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Treat an LLM's answer as a fluent first draft, not a verified fact — check anything consequential against a real, independent source.",
          "Watch for confident, specific-sounding claims about obscure or recent topics — these are exactly where unverified errors are most likely.",
          "If accuracy matters, prefer AI tools that explicitly cite retrieved sources over ones that answer purely from trained patterns.",
          "Remember that apparent 'reasoning' or 'structure' in an answer is a byproduct of pattern learning, not a guarantee the underlying logic was checked.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do large language models actually generate text?", answer: "They predict the single most statistically likely next token given everything written so far, repeatedly, feeding each generated token back in as input for the next prediction." },
          { question: "Do LLMs look things up on the internet when they answer?", answer: "Not by default — the core model generates from patterns learned during training. Some products add a separate search or retrieval tool on top, which is a distinct added capability, not the base mechanism." },
          { question: "Why do LLMs sometimes state wrong facts confidently?", answer: "Because the mechanism generates statistically plausible text rather than verifying facts against a source — a fluent tone reflects learned language patterns, not confirmed accuracy." },
          { question: "Is a large language model the same thing as artificial intelligence in general?", answer: "No — an LLM is one specific type of AI system, focused on language, built on neural network techniques. AI is the broader field, which also includes image recognition, robotics, and many other approaches." },
          { question: "Does a bigger LLM automatically mean a smarter or more accurate one?", answer: "Scale (more parameters and training data) generally improves performance on many tasks, but it doesn't eliminate the fundamental behavior of generating plausible-sounding text without built-in fact verification." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
