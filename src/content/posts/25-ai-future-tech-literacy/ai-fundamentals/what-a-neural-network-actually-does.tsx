import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "What a Neural Network Actually Does",
  category: "ai-future-tech-literacy",
  order: 4,
  subtopic: "ai-fundamentals",
  tags: ["neural networks", "machine learning", "backpropagation", "weights", "deep learning"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "A neural network is a stack of simple multiply-add-and-squash steps whose millions of weights get nudged, example by example, until its guesses stop being wrong. It doesn't think the way a brain does.",
  summary: "A neural network is a mathematical function made of layers of simple units: each unit multiplies its inputs by learned weights, adds them up, and passes the sum through an activation function, and the layers feed forward into an output guess. Training compares that guess with the correct answer, measures the error with a loss function, and uses backpropagation with gradient descent to adjust every weight slightly in the direction that shrinks the error, repeated over many examples, per Google's Machine Learning Crash Course and Stanford's CS231n notes. What the network has learned lives entirely in those weight values; the loose analogy to biological neurons is historical, not a description of how brains work.",
  sources: [
    { label: "Google for Developers — Machine Learning Crash Course: Neural networks", url: "https://developers.google.com/machine-learning/crash-course/neural-networks" },
    { label: "Stanford CS231n — Neural Networks Part 1: Setting up the Architecture", url: "https://cs231n.github.io/neural-networks-1/" },
    { label: "MIT News — Explained: Neural networks (2017)", url: "https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/machine-learning-vs-deep-learning-explained",
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "technology-basics/how-machine-learning-actually-works",
    "ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software",
  ],
  glossary: [
    { term: "Neural network", definition: "A machine learning model built from layers of simple computing units, each combining its inputs with learned weights, so that the whole stack can map inputs (like pixels) to outputs (like labels)." },
    { term: "Weight", definition: "A number attached to each connection in a neural network that scales how much one unit's output influences the next unit. Training is the process of finding good weight values." },
    { term: "Activation function", definition: "A simple non-linear function (such as ReLU, which turns negative numbers into zero) applied after each unit's weighted sum, which lets stacked layers represent curved, complex patterns rather than only straight-line ones." },
    { term: "Loss function", definition: "A formula that scores how wrong the network's output is compared with the correct answer. Training tries to make this number as small as possible." },
    { term: "Backpropagation", definition: "The method for calculating how much each weight contributed to the error, working backward from the output layer, so every weight can be adjusted in the direction that reduces the loss." },
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

export const quiz: QuizBankItem[] = [
  {"question": "What does a single unit (\"neuron\") in a neural network actually compute?", "difficulty": "easy", "options": [{"text": "A weighted sum of its inputs, passed through an activation function", "correct": true, "explanation": "That's the whole job of one unit: multiply, add, squash."}, {"text": "A full sentence of reasoning about its input", "correct": false, "explanation": "Individual units only do simple arithmetic."}, {"text": "A lookup of the answer in a stored database", "correct": false, "explanation": "Networks don't store answers; they compute outputs from weights."}]},
  {"question": "Where does a trained neural network store what it has learned?", "difficulty": "easy", "options": [{"text": "In the values of its weights (and biases)", "correct": true, "explanation": "Training changes the numbers, not the code."}, {"text": "In a list of the training examples it saw", "correct": false, "explanation": "The examples are used to adjust weights, then aren't needed to make predictions."}, {"text": "In hand-written rules added by programmers", "correct": false, "explanation": "That's traditional software; networks learn weights from data."}]},
  {"question": "What does a loss function measure?", "difficulty": "easy", "options": [{"text": "How far the network's output is from the correct answer", "correct": true, "explanation": "A lower loss means better guesses on that example."}, {"text": "How much electricity the model uses", "correct": false, "explanation": "Loss is a measure of error, not energy."}, {"text": "How many layers the network has", "correct": false, "explanation": "That's architecture, not error."}]},
  {"question": "What is backpropagation used for?", "difficulty": "medium", "options": [{"text": "Working out how much each weight contributed to the error so it can be adjusted", "correct": true, "explanation": "It runs backward from the output, assigning blame to each weight."}, {"text": "Sending the output back to the user for feedback", "correct": false, "explanation": "It's an internal calculation, not a user step."}, {"text": "Deleting layers that aren't useful", "correct": false, "explanation": "It adjusts weights; it doesn't prune layers."}]},
  {"question": "Why do neural networks need a non-linear activation function between layers?", "difficulty": "hard", "options": [{"text": "Without it, any stack of layers collapses into one straight-line (linear) function", "correct": true, "explanation": "Stanford's CS231n notes make this point: non-linearity is what gives depth its power."}, {"text": "To make the network run faster", "correct": false, "explanation": "It adds a little computation; the point is expressiveness."}, {"text": "To stop the weights from ever changing", "correct": false, "explanation": "Weights still change during training."}]},
  {"question": "During training, how big is each weight adjustment usually?", "difficulty": "medium", "options": [{"text": "Small, scaled by a learning rate, repeated over many examples", "correct": true, "explanation": "Gradient descent takes many small steps rather than one big jump."}, {"text": "Huge, so the network is right after one example", "correct": false, "explanation": "Big jumps overshoot and make training unstable."}, {"text": "Zero, because weights are fixed at the start", "correct": false, "explanation": "Changing weights is the whole point of training."}]},
  {"question": "How close is an artificial neural network to how a human brain works?", "difficulty": "medium", "options": [{"text": "Loosely inspired by neurons, but it's a mathematical function, not a brain model", "correct": true, "explanation": "MIT and Google both describe the brain link as a historical inspiration only."}, {"text": "It's an exact digital copy of brain tissue", "correct": false, "explanation": "Real neurons are vastly more complex."}, {"text": "It has nothing to do with neurons at all, even historically", "correct": false, "explanation": "The early idea did come from a simplified neuron model."}]},
  {"question": "What makes a neural network \"deep\"?", "difficulty": "hard", "options": [{"text": "It has many hidden layers between input and output", "correct": true, "explanation": "Depth refers to the number of layers, not intelligence."}, {"text": "It understands the deeper meaning of its data", "correct": false, "explanation": "\"Deep\" is a structural term, not a claim about understanding."}, {"text": "It was trained for a very long time", "correct": false, "explanation": "Training time isn't what the word refers to."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Each unit in a neural network does something very simple: multiply its inputs by weights, add them up, and pass the result through an activation function.",
          "Training is a loop: make a guess, measure how wrong it was with a loss function, then use backpropagation to nudge every weight slightly toward a better guess.",
          "Everything the network \"knows\" lives in its weight values. The brain comparison is a historical inspiration, not a description of how it works.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a neural network as a huge panel of volume knobs. Numbers go in one side (the pixels of a photo, say), pass through several rows of knobs, and a guess comes out the other side (&quot;cat, 80% sure&quot;). At the start, the knobs are set randomly, so the guesses are junk. Training shows the network thousands or millions of labeled examples. After each one, it checks how wrong it was and turns every knob a tiny bit in the direction that would have made the guess less wrong. Do that enough times and the knob settings end up encoding patterns, like edges, then shapes, then whole objects. Nobody writes those patterns in by hand. They fall out of the knob-turning.</div>}
        detailed={<div className="prose-p">Per Google&apos;s Machine Learning Crash Course, a neural network is layers of units where each unit computes a weighted sum of its inputs plus a bias, then applies a non-linear activation function such as ReLU. The input layer holds the raw features, one or more hidden layers transform them, and the output layer produces the prediction. Stanford&apos;s CS231n notes stress why the non-linearity matters: without it, stacking layers adds nothing, because a chain of linear transformations collapses into a single linear transformation. Training uses a loss function to score the gap between the prediction and the label, then applies backpropagation (the chain rule from calculus, run backward through the layers) to compute the gradient of the loss with respect to every weight. Gradient descent then moves each weight a small step, scaled by a learning rate, in the direction that reduces the loss. Repeated across batches of examples, this is how the network fits patterns that no programmer specified, which is the key difference from <TermLink href="/ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software">traditional rule-based software</TermLink>.</div>}
      />
      <FootnoteAside>MIT News notes the idea is old: the first trainable single-layer network, Frank Rosenblatt&apos;s perceptron, was demonstrated in 1958. What changed in the 2010s was not the basic recipe but the amount of data and the graphics-chip computing power available to train networks with many layers.</FootnoteAside>

      <p>That &quot;many layers&quot; part is where the term deep learning comes from, covered in more detail in <TermLink href="/ai-future-tech-literacy/machine-learning-vs-deep-learning-explained">machine learning vs. deep learning</TermLink>. The same multiply-add-squash building block, scaled up to billions of weights and trained on text, is what sits underneath <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">large language models</TermLink>.</p>

      <QuickCheck
        question="A network's guesses get better over training. What actually changed inside it?"
        options={[
          { text: "The values of its weights, nudged slightly after each batch of examples", correct: true, explanation: "Correct. The architecture and code stay the same; training only changes the weight numbers." },
          { text: "Programmers added new rules each time it made a mistake", correct: false, explanation: "That's how traditional software improves. A neural network adjusts its own weights from data." },
          { text: "It memorized every training example word for word", correct: false, explanation: "Examples are used to adjust weights. A well-trained network generalizes to examples it has never seen." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One unit, by hand (baseline case)</h3>
      <div className="prose-p">A unit gets two inputs, 2 and 3, with weights 0.5 and &minus;1, and a bias of 1. Weighted sum: (2 &times; 0.5) + (3 &times; &minus;1) + 1 = 1 &minus; 3 + 1 = &minus;1. A ReLU activation turns anything negative into 0, so this unit outputs 0. That&apos;s it. Every unit in even the largest network is doing this same small calculation; the power comes from having millions of them wired in layers.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: One training step on a digit recognizer (variation)</h3>
      <div className="prose-p">A network sees a handwritten &quot;7&quot; and outputs 30% for &quot;7&quot; and 50% for &quot;1&quot;. The loss function turns that into a single error score. Backpropagation works out, for each weight, whether increasing it would have raised or lowered the error. Each weight moves a tiny step the helpful way. Shown the same image again, the network might now say 34% &quot;7&quot;. One step barely matters; tens of thousands of steps across many different sevens are what make it reliable.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: When the pattern it learned is the wrong one (applied case)</h3>
      <div className="prose-p">Suppose most training photos of wolves happen to show snow. The network lowers its loss fastest by weighting &quot;white background&quot; heavily, so it starts calling a husky on snow a wolf. Nothing in the math told it to look at the animal. It found whatever pattern reduced the error. This is why the quality and balance of training data matter as much as the network design.</div>

      <QuickCheck
        question="In Example 1, why did the unit output 0 instead of -1?"
        options={[
          { text: "The ReLU activation function turns negative sums into zero", correct: true, explanation: "Correct. ReLU passes positive values through and outputs 0 for anything negative." },
          { text: "The bias cancelled the whole sum", correct: false, explanation: "The bias was +1, and the sum including it was still -1." },
          { text: "Neural networks can't handle negative numbers", correct: false, explanation: "Weights and sums can be negative; it's this particular activation that clips them." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The training loop: guess, measure the miss, adjust the weights"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-what-a-neural-network-actually-does-flow.svg"
        altText="A flow diagram of neural network training: inputs go in, each layer multiplies by weights and applies an activation, the output layer makes a guess, the guess is compared with the right answer to get the loss, and backpropagation nudges every weight to shrink the loss, repeated over many examples."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Picturing each artificial neuron as a tiny thinking unit.", fix: "Each unit is a multiply-add-and-squash calculation. Any apparent intelligence comes from millions of these combined, not from any one of them." },
          { mistake: "Assuming a network that scores well in testing has learned the 'right' concept.", fix: "It learned whatever pattern reduced the loss on its training data, which can be a shortcut like background color. Test on varied, realistic data." },
          { mistake: "Thinking more layers always means a better model.", fix: "Deeper networks need more data and computing power and can overfit. The right size depends on the problem." },
        ]}
      />
      <MisconceptionCallout
        myth="Neural networks work the way the human brain works."
        reality={<p>The name comes from a 1940s-50s simplification of a neuron, and MIT News describes the brain link as loose inspiration. Real neurons use timed electrical spikes, chemistry, and feedback that artificial units don&apos;t model, and brains don&apos;t learn by running backpropagation over labeled examples. A modern neural network is best understood as a very large, adjustable mathematical function, not a digital brain.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Work through the single-unit arithmetic in Example 1 yourself with different weights. It makes every later concept concrete.",
          "When you read an AI claim, ask what data the model was trained on, since that's where its learned patterns come from.",
          "Try Google's free Machine Learning Crash Course neural-network module if you want the math with interactive visuals.",
          "Read how the same building block scales up in our explainer on large language models.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does a neural network actually do, in one sentence?", answer: "It turns input numbers into an output guess by passing them through layers of weighted sums and activation functions, and it learns by adjusting those weights to reduce its errors on example data." },
          { question: "What are weights in a neural network?", answer: "Numbers on each connection that decide how strongly one unit's output affects the next. Training finds good values for them, and a large model can have billions." },
          { question: "What is backpropagation in simple terms?", answer: "A way of working backward from the error at the output to figure out how much each weight was to blame, so each can be adjusted a little in the helpful direction." },
          { question: "Is a neural network the same as AI?", answer: "No. It's one technique within machine learning, which is itself one part of AI. It happens to power most of today's headline AI systems, including image recognition and chatbots." },
          { question: "Why did neural networks take off only recently if the idea is from the 1950s?", answer: "Per MIT News, the recipe needed far more data and computing power than existed. Large datasets and graphics processors in the 2010s made training many-layered networks practical." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
