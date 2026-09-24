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
  title: "Machine Learning vs Deep Learning Explained",
  category: "ai-future-tech-literacy",
  order: 3,
  subtopic: "ai-fundamentals",
  tags: ["machine learning", "deep learning", "neural networks", "artificial intelligence"],
  date: "2026-09-23",
  updated: "2026-09-23",
  lastReviewed: "2026-09-23",
  excerpt: "Deep learning isn't a rival to machine learning — it's a specific type of machine learning built from many-layered neural networks that learn their own features from raw data.",
  summary: "Machine learning is the broader field of getting a system to improve at a task from data rather than from explicit programmer-written rules; deep learning is a subset of machine learning that uses neural networks with many stacked layers to learn its own internal representations directly from raw data, rather than relying on features a person hand-selects in advance.",
  sources: [
    { label: "NIST — Artificial Intelligence", url: "https://www.nist.gov/artificial-intelligence" },
    { label: "Stanford HAI — Institute for Human-Centered Artificial Intelligence", url: "https://hai.stanford.edu/" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/what-artificial-intelligence-actually-means",
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "technology-basics/how-machine-learning-actually-works",
    "technology-basics/what-algorithm-actually-means",
  ],
  glossary: [
    { term: "Machine learning", definition: "A branch of artificial intelligence where a system improves its performance on a task by learning patterns from data, rather than following only rules a person wrote in advance." },
    { term: "Deep learning", definition: "A type of machine learning that uses neural networks with many stacked layers, which learn to represent data — such as images, audio, or text — at increasing levels of abstraction directly from raw input." },
    { term: "Neural network", definition: "A machine learning model loosely structured like interconnected layers of simple processing units, each layer transforming its input before passing it to the next." },
    { term: "Feature engineering", definition: "The process of a person manually selecting and constructing the specific input variables a machine learning model will use, based on domain knowledge of what's likely to matter." },
    { term: "Training data", definition: "The set of examples a machine learning system learns from before it's used to make predictions on new, unseen data." },
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
          "Deep learning is not a separate technology from machine learning — it's a specific subset of it, built from neural networks with many stacked layers.",
          "Classical machine learning typically relies on a person hand-selecting which input features matter; deep learning models learn their own internal representations directly from raw data.",
          "Deep learning generally needs far more training data and computing power than classical machine learning, and its learned representations are much harder for a person to inspect and explain.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of <TermLink href="/ai-future-tech-literacy/what-artificial-intelligence-actually-means">artificial intelligence</TermLink> as the biggest circle, <TermLink href="/technology-basics/how-machine-learning-actually-works">machine learning</TermLink> as a smaller circle inside it, and deep learning as a smaller circle still, inside machine learning. Every deep learning system is a machine learning system — just one built a specific way, out of neural networks with many layers. The practical difference shows up in how each one gets its input features. A classical machine learning model usually needs a person to decide in advance which details of the data actually matter and hand-code them in. A deep learning model is instead handed the raw data itself &mdash; pixels, audio waveforms, raw text &mdash; and its layers learn on their own which patterns in that raw data are useful.</div>}
        detailed={<div className="prose-p">Per NIST&apos;s framing of the field, machine learning covers any method where a system&apos;s performance on a task improves from exposure to data rather than from being explicitly programmed with every rule. That covers a wide family of methods &mdash; linear and logistic regression, decision trees, support vector machines, and neural networks all count. Deep learning refers specifically to neural networks with multiple hidden layers stacked between the input and the output (the &quot;deep&quot; in the name refers to that layer depth, not to any claim about the model&apos;s intelligence). The practical split that matters most: in most classical machine learning, a person performs <TermLink href="/technology-basics/what-algorithm-actually-means">feature engineering</TermLink> &mdash; manually deciding, for example, that &quot;contains the word free&quot; or &quot;square footage&quot; is a relevant input variable. In deep learning, each layer instead learns its own transformation of the previous layer&apos;s output, so the network builds its own internal representations &mdash; edges, then shapes, then objects, in an image model &mdash; without a person specifying them by hand. That capability is also why deep learning models typically need much larger labeled datasets and far more compute (specialized processors like GPUs) to train well than classical machine learning models do, and why their learned internal representations are much harder for a person to inspect and explain, a tradeoff both NIST and Stanford HAI treat as central to AI governance and safety work.</div>}
      />
      <FootnoteAside>Stanford HAI&apos;s research and policy work treats this interpretability gap &mdash; deep learning&apos;s learned representations being difficult for humans to inspect directly &mdash; as a genuinely open problem, not a solved one, which is part of why explainability is an active area of AI research rather than a settled feature.</FootnoteAside>

      <p>This containment relationship also explains a common phrasing mix-up: someone can accurately say a system &quot;uses machine learning&quot; without it using deep learning at all &mdash; a spam filter built on a decision tree is real machine learning with zero neural network layers involved.</p>

      <QuickCheck
        question="A company builds a system that predicts customer churn using a decision tree trained on structured account data (tenure, plan type, support tickets). Is this system an example of deep learning?"
        options={[
          { text: "No — it's machine learning, but a decision tree isn't a multi-layer neural network, so it doesn't qualify as deep learning", correct: true, explanation: "Correct. Machine learning is the broader category; deep learning specifically requires a multi-layer neural network architecture, which a decision tree is not." },
          { text: "Yes — any system that learns from data automatically counts as deep learning", correct: false, explanation: "Learning from data is the definition of machine learning generally, not deep learning specifically. Deep learning is the subset built from many-layered neural networks." },
          { text: "No — decision trees aren't a form of machine learning at all", correct: false, explanation: "Decision trees are a well-established classical machine learning method — they just aren't neural networks, so they fall outside deep learning specifically." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Predicting house prices with hand-picked features (baseline case)</h3>
      <div className="prose-p">A classical machine learning model &mdash; linear regression &mdash; predicts a home&apos;s sale price from features a person chose in advance: square footage, number of bedrooms, and neighborhood. The model learns a weight for each feature from historical sales data, and each weight is directly readable: a person can see exactly how much the model credits an extra bedroom. This is machine learning, and it is not deep learning &mdash; there&apos;s no neural network layer stack involved.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Spam filtering, built two different ways (edge case / variation)</h3>
      <div className="prose-p">One spam filter uses a classical method (Naive Bayes) trained on hand-selected features like word frequency counts and sender reputation &mdash; machine learning, not deep learning. Another spam filter instead feeds the raw text of each email into a multi-layer neural network that learns its own representation of what &quot;spam-like&quot; text looks like. Both are legitimately &quot;machine learning spam filters.&quot; Only the second is a deep learning system, because only it uses a many-layered neural network learning its own features from raw input.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Recognizing objects in photos (real-world / applied case)</h3>
      <div className="prose-p">Identifying objects in a photo from raw pixel values is a case where classical feature engineering breaks down &mdash; there&apos;s no practical way for a person to hand-write rules covering every possible arrangement of pixels that could represent a &quot;dog.&quot; Deep learning&apos;s ability to learn its own layered representations directly from raw pixels &mdash; edges, then textures, then shapes, then objects &mdash; is a major reason deep learning methods became the standard approach for image recognition tasks, per NIST&apos;s overview of the field&apos;s development.</div>

      <QuickCheck
        question="Why has deep learning become the standard approach for tasks like image recognition, where classical feature engineering struggles?"
        options={[
          { text: "Because deep learning models learn their own layered representations of raw data instead of requiring a person to hand-specify every relevant feature", correct: true, explanation: "Correct. For raw, high-dimensional input like pixels, hand-engineering every useful feature isn't practical — deep learning's layers learn useful representations directly from the data instead." },
          { text: "Because deep learning models require less training data than classical machine learning models", correct: false, explanation: "The opposite is generally true — deep learning models typically need larger labeled datasets and more compute to train well than classical machine learning methods." },
          { text: "Because deep learning is a completely different field from machine learning with its own separate rules", correct: false, explanation: "Deep learning is a subset of machine learning, not a separate field — it follows the same core principle of improving performance from data." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Machine learning vs deep learning: a containment relationship, not a rivalry"
        type="comparison"
        svgSrc="/diagrams/ai-future-tech-literacy-machine-learning-vs-deep-learning-explained-comparison.svg"
        altText="A nested diagram showing artificial intelligence as the largest category, machine learning as a subset of it, and deep learning as a smaller subset within machine learning, alongside a comparison of hand-picked features versus features learned from raw data."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'machine learning' and 'deep learning' as two competing, mutually exclusive technologies.", fix: "Recognize deep learning is a subset of machine learning — every deep learning system is a machine learning system, just one built from multi-layer neural networks specifically." },
          { mistake: "Assuming deep learning is simply a more advanced, strictly-better replacement for classical machine learning.", fix: "Weigh the real tradeoffs: deep learning typically needs far more data and compute, and is much harder to interpret than classical methods that often work fine for structured, smaller datasets." },
          { mistake: "Calling any system that uses an algorithm or automation 'deep learning' by default.", fix: "Reserve 'deep learning' specifically for systems built on multi-layer neural networks — many real machine learning systems, like decision trees or linear regression, use no neural network at all." },
        ]}
      />
      <MisconceptionCallout
        myth="Machine learning and deep learning are two separate, competing technologies — you pick one or the other for a project."
        reality={<p>Deep learning is not a rival to machine learning; it&apos;s a specific type of it. Per NIST&apos;s framing of the field, machine learning is the broad category of systems that improve at a task from data, and deep learning is the subset of that category built from neural networks with many stacked layers. Asking whether to use &quot;machine learning or deep learning&quot; is a bit like asking whether to use &quot;fruit or apples&quot; &mdash; every deep learning model is a machine learning model. The real decision practitioners face isn&apos;t machine learning versus deep learning; it&apos;s whether a given problem&apos;s data volume, compute budget, and interpretability needs favor a classical method or a deep, many-layered neural network.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you hear 'deep learning,' mentally file it as 'a type of machine learning that uses many-layered neural networks' — not a separate technology.",
          "When evaluating whether a project needs deep learning, weigh the real tradeoffs: data volume available, compute budget, and how important it is that the model's decisions be explainable.",
          "Don't assume a system is deep learning just because it's described as 'AI' or 'algorithmic' — many real, useful machine learning systems use no neural network at all.",
          "For an accessible primer on the broader field this sits inside, see NIST's and Stanford HAI's public resources on artificial intelligence, linked in the sources above.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is deep learning a type of machine learning?", answer: "Yes. Deep learning is a subset of machine learning that specifically uses neural networks with multiple stacked layers — every deep learning system is a machine learning system, but not every machine learning system uses deep learning." },
          { question: "Why does deep learning need so much more data than other machine learning methods?", answer: "Because deep learning models learn their own internal representations of raw data from scratch, rather than starting from features a person already picked out — that learning process generally requires many more labeled examples to reliably generalize." },
          { question: "Can machine learning work without deep learning?", answer: "Yes — classical machine learning methods like linear regression, decision trees, and support vector machines are real machine learning, and none of them require a neural network of any kind, let alone a deep one." },
          { question: "Why is deep learning harder to interpret than other machine learning methods?", answer: "Because its many stacked layers each transform the data into new internal representations that don't map cleanly onto features a person would recognize, making it difficult to trace exactly why the model produced a given output — an active research problem both NIST and Stanford HAI track closely." },
          { question: "Is deep learning always better than classical machine learning?", answer: "No — it depends on the problem. For raw, high-dimensional data like images or audio, deep learning tends to outperform classical methods; for smaller, structured datasets where interpretability matters, classical machine learning methods are often the more practical choice." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
