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
  title: "How AI Chatbots Are Trained",
  category: "ai-future-tech-literacy",
  order: 7,
  subtopic: "ai-fundamentals",
  tags: ["AI chatbot", "pretraining", "fine-tuning", "RLHF", "large language model"],
  date: "2026-09-30",
  updated: "2026-09-30",
  youtubeShort: false, youtubeLong: false,
  seoScore: 75, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-30",
  excerpt: "A chatbot is built in stages. First a model learns to predict text from a huge pile of writing. Then people teach it to follow instructions and rank its answers, which is where most of its helpful, polite behavior comes from.",
  summary: "Modern AI chatbots are trained in three broad stages. Pretraining teaches a large language model to predict the next token across trillions of tokens of text, which gives it grammar, facts and patterns but not the habit of answering questions helpfully. Supervised fine-tuning then trains it on thousands of example conversations written by people, so it learns the shape of a good reply. Finally, preference training, most famously reinforcement learning from human feedback (RLHF), has people rank several candidate answers; a reward model learns those preferences and the chatbot is tuned toward answers people rate higher. OpenAI's 2022 InstructGPT paper found labelers preferred answers from a 1.3-billion-parameter model trained this way over the raw 175-billion-parameter GPT-3. Variants such as Anthropic's Constitutional AI replace some human rankings with AI feedback guided by written principles. Training shapes behavior but doesn't guarantee accuracy, which is why chatbots can still state wrong things confidently.",
  sources: [
    { label: "Ouyang et al. (2022) — Training language models to follow instructions with human feedback (InstructGPT), arXiv:2203.02155", url: "https://arxiv.org/abs/2203.02155" },
    { label: "Bai et al. (2022) — Constitutional AI: Harmlessness from AI Feedback, arXiv:2212.08073", url: "https://arxiv.org/abs/2212.08073" },
    { label: "Touvron et al. (2023) — Llama 2: Open Foundation and Fine-Tuned Chat Models, arXiv:2307.09288", url: "https://arxiv.org/abs/2307.09288" },
    { label: "NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative AI Profile", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" },
    { label: "Stanford HAI — AI Index Report", url: "https://hai.stanford.edu/ai-index" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "ai-future-tech-literacy/what-ai-hallucination-actually-means",
    "ai-future-tech-literacy/what-a-neural-network-actually-does",
    "technology-basics/what-a-chatbot-is-actually-doing",
  ],
  glossary: [
    { term: "Pretraining", definition: "The first and most expensive training stage, where a language model learns to predict the next token across a very large body of text." },
    { term: "Base model", definition: "A model that has only been pretrained. It continues text well but doesn't reliably follow instructions or behave like an assistant." },
    { term: "Supervised fine-tuning (SFT)", definition: "Further training on example prompts paired with high-quality answers written or approved by people, so the model learns the shape of a good reply." },
    { term: "Reward model", definition: "A separate model trained on human rankings of answers, which scores new answers by how much people would likely prefer them." },
    { term: "RLHF", definition: "Reinforcement learning from human feedback: tuning a model to produce answers that a reward model, built from human preferences, scores highly." },
    { term: "Constitutional AI", definition: "An Anthropic method where the model critiques and revises answers against a written list of principles, and AI-generated preference labels replace some human ones." },
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
  {"question": "What does a language model learn to do during pretraining?", "difficulty": "easy", "options": [{"text": "Predict the next token in a huge body of text", "correct": true, "explanation": "Next-token prediction over trillions of tokens is the core of pretraining."}, {"text": "Look up answers in a live database", "correct": false, "explanation": "Pretraining builds patterns into the model's parameters. There is no lookup step."}, {"text": "Follow a list of hand-written if-then rules", "correct": false, "explanation": "Rules aren't written by hand. Behavior is learned from data."}]},
  {"question": "Why isn't a pretrained base model a good chatbot on its own?", "difficulty": "medium", "options": [{"text": "It continues text rather than reliably answering the request", "correct": true, "explanation": "Ask it a question and it may write more questions, because that's a plausible continuation."}, {"text": "It hasn't seen any text yet", "correct": false, "explanation": "It has seen enormous amounts of text. What it lacks is the assistant habit."}, {"text": "It can only produce numbers", "correct": false, "explanation": "Base models produce fluent text. The problem is direction, not ability."}]},
  {"question": "In supervised fine-tuning, what does the model train on?", "difficulty": "easy", "options": [{"text": "Example prompts paired with good answers written or approved by people", "correct": true, "explanation": "These demonstrations teach the format and tone of a helpful reply."}, {"text": "Random web pages with no labels", "correct": false, "explanation": "That describes pretraining data."}, {"text": "Only images", "correct": false, "explanation": "Text chatbots are fine-tuned on text conversations."}]},
  {"question": "In RLHF, what do human raters usually do?", "difficulty": "medium", "options": [{"text": "Compare several candidate answers and rank which is better", "correct": true, "explanation": "Ranking is easier and more consistent than writing a perfect answer from scratch."}, {"text": "Rewrite the model's parameters by hand", "correct": false, "explanation": "Parameters number in the billions and are adjusted by training, not by hand."}, {"text": "Type every answer the chatbot will ever give", "correct": false, "explanation": "The model generates new answers. People only judge samples."}]},
  {"question": "What is a reward model?", "difficulty": "medium", "options": [{"text": "A model trained on human rankings that scores new answers by likely preference", "correct": true, "explanation": "It stands in for human raters so training can run at scale."}, {"text": "A payment system for human labelers", "correct": false, "explanation": "Despite the name, it's a scoring model."}, {"text": "The final chatbot users talk to", "correct": false, "explanation": "It's a helper used during training."}]},
  {"question": "In OpenAI's 2022 InstructGPT study, which answers did labelers prefer?", "difficulty": "hard", "options": [{"text": "A 1.3-billion-parameter model trained with human feedback over the 175-billion-parameter GPT-3", "correct": true, "explanation": "Alignment training beat a model more than 100 times larger on human preference."}, {"text": "The raw 175-billion-parameter GPT-3 every time", "correct": false, "explanation": "The smaller instruction-tuned model was preferred."}, {"text": "They found no difference", "correct": false, "explanation": "The preference gap was the paper's headline result."}]},
  {"question": "What does Constitutional AI change compared with standard RLHF?", "difficulty": "hard", "options": [{"text": "AI feedback guided by written principles replaces some human preference labels", "correct": true, "explanation": "The model critiques and revises answers against a list of principles."}, {"text": "It removes pretraining entirely", "correct": false, "explanation": "The model is still pretrained first."}, {"text": "It makes the chatbot follow a country's legal constitution", "correct": false, "explanation": "The 'constitution' is a set of behavior principles written by the developer."}]},
  {"question": "Why can a well-trained chatbot still state something false with confidence?", "difficulty": "medium", "options": [{"text": "Training rewards fluent, preferred-sounding answers, which doesn't guarantee they're true", "correct": true, "explanation": "Raters can't check every fact, and the model generates plausible text rather than verified text."}, {"text": "Because it was trained on too little text", "correct": false, "explanation": "Even very large models do this. It comes from how text is generated."}, {"text": "Because RLHF deletes its knowledge", "correct": false, "explanation": "Preference tuning shapes behavior. It isn't designed to erase knowledge."}]},
  {"question": "Which stage uses by far the most computing power?", "difficulty": "easy", "options": [{"text": "Pretraining", "correct": true, "explanation": "It processes trillions of tokens. The later stages use much smaller, curated datasets."}, {"text": "Supervised fine-tuning", "correct": false, "explanation": "Fine-tuning datasets are tiny compared with pretraining data."}, {"text": "Writing the system prompt", "correct": false, "explanation": "A system prompt is text given at use time, not training."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A chatbot is trained in stages: pretraining on huge amounts of text, then fine-tuning on example conversations, then tuning on human preferences.",
          "Pretraining gives the model its knowledge and fluency. The later stages give it the habit of being a helpful assistant.",
          "Preference training makes answers sound better to people, which is not the same as making them always true.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of training a new customer-service hire. First they spend years just reading: books, websites, manuals, forums. They pick up how language works and a huge number of facts, but nobody has told them what the job is. Next, a manager sits with them and shows worked examples: &quot;When a customer asks this, a good answer looks like that.&quot; Finally, the manager watches them handle real questions, compares two or three of their replies, and says which one was better, again and again, until good habits stick. AI chatbots go through the same three stages. The reading is called <strong>pretraining</strong>, the worked examples are <strong>fine-tuning</strong>, and the &quot;this one was better&quot; feedback is <strong>preference training</strong>. The chatbot you talk to is the result of all three.</div>}
        detailed={<div className="prose-p"><strong>Stage 1, pretraining.</strong> A <TermLink href="/ai-future-tech-literacy/what-a-neural-network-actually-does">neural network</TermLink> with billions of parameters is trained to predict the next token (a word or word fragment) across a very large corpus. Meta&apos;s Llama 2 paper, for example, reports pretraining on about 2 trillion tokens. Each wrong prediction nudges the parameters slightly, and after enough text the model encodes grammar, facts and reasoning patterns. The result is a <strong>base model</strong>, which is a powerful text-continuer but not an assistant. <strong>Stage 2, supervised fine-tuning (SFT).</strong> The base model trains further on a much smaller set of prompts paired with high-quality responses written or vetted by people, so it learns the format of a helpful reply. <strong>Stage 3, preference tuning.</strong> In RLHF, as described in OpenAI&apos;s InstructGPT paper (Ouyang et al., 2022), the model writes several answers to the same prompt and human labelers rank them. A <strong>reward model</strong> learns to predict those rankings, and the chatbot is then optimized (using a reinforcement-learning method called PPO in that paper) to produce answers the reward model scores highly, with a penalty for drifting too far from its earlier behavior. The headline finding: labelers preferred outputs from a 1.3-billion-parameter InstructGPT model over the 175-billion-parameter GPT-3. The edge case: Anthropic&apos;s Constitutional AI (Bai et al., 2022) replaces many human harmlessness labels with AI feedback, where a model critiques and revises answers against a written list of principles. Many developers now use related methods, and exact recipes are often not published.</div>}
      />
      <FootnoteAside>Companies rarely publish full training details for their newest chatbots. This page describes the stages documented in peer-reviewed and widely cited papers, which remain the standard picture even as individual recipes change.</FootnoteAside>

      <p>For how the finished model generates each word, see <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">how large language models actually work</TermLink>. This page is about how it got that way.</p>

      <QuickCheck
        question="You type 'What is the capital of Japan?' into a base model that has only been pretrained. What might it plausibly produce?"
        options={[
          { text: "More quiz-style questions, like 'What is the capital of Korea?'", correct: true, explanation: "Correct. A base model continues text. A list of quiz questions is a very plausible continuation, so it may never answer." },
          { text: "A refusal, because it hasn't been trained yet", correct: false, explanation: "It has been pretrained and is fluent. Refusals are something later training adds." },
          { text: "Always exactly 'Tokyo.' and nothing else", correct: false, explanation: "That short, direct answer style is what fine-tuning teaches. A base model has no such habit." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One ranking round (baseline case)</h3>
      <div className="prose-p">A prompt comes in: &quot;Explain compound interest to a 12-year-old.&quot; The fine-tuned model writes four candidate answers. Answer A is accurate but full of jargon. Answer B uses a piggy-bank analogy and a clear number example. Answer C is friendly but gets the math wrong. Answer D is one sentence long. A labeler ranks them B, A, D, C. Each ranking turns into several pairwise comparisons (B beats A, B beats D, and so on). Across tens of thousands of prompts, the reward model learns that clear, correct, age-appropriate answers win, and the chatbot is tuned toward writing more like B.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why smaller can beat bigger (edge case)</h3>
      <div className="prose-p">In the InstructGPT study, the 175-billion-parameter GPT-3 knew more raw information than the 1.3-billion-parameter model, which is more than 100 times smaller. Yet labelers preferred the small model&apos;s answers, because it had been through fine-tuning and preference training and actually did what was asked. The lesson is that the later stages don&apos;t add much knowledge. They change how the model uses what it already has.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a chatbot&apos;s confident mistake (real-world use)</h3>
      <div className="prose-p">You ask a chatbot for a court case supporting an argument, and it names one with a plausible title, year and citation. It sounds exactly like a good answer, because preference training rewarded answers that look complete and confident. But no rater checked that particular citation, and the model generates plausible text rather than retrieving verified records. Knowing how it was trained tells you what to do: treat names, numbers and citations as leads to check in an original source, not as facts. See <TermLink href="/ai-future-tech-literacy/what-ai-hallucination-actually-means">what AI hallucination actually means</TermLink>.</div>

      <QuickCheck
        question="Human raters in RLHF are shown two answers. One is short and correct. The other is long, polished and contains a subtle factual error they don't notice. What's the risk?"
        options={[
          { text: "The model gets rewarded for polish over accuracy", correct: true, explanation: "Correct. The reward model learns what raters prefer, including their blind spots. That's a known limit of preference training." },
          { text: "No risk, because the reward model checks facts itself", correct: false, explanation: "A reward model predicts human preference. It isn't a fact-checker." },
          { text: "The chatbot will stop generating long answers entirely", correct: false, explanation: "One comparison nudges behavior slightly. It doesn't switch anything off." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The three stages of training a chatbot"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-how-ai-chatbots-are-trained-flow.svg"
        altText="A three-stage flow. Stage 1, pretraining: trillions of tokens of text train a model to predict the next token, producing a base model. Stage 2, supervised fine-tuning: example prompts with human-written answers teach the assistant format. Stage 3, preference tuning: people rank several answers, a reward model learns the rankings, and the chatbot is tuned toward higher-scoring answers. The output is the chat assistant. A note says pretraining uses the most compute while later stages shape behavior."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the chatbot learns from your conversation in real time.", fix: "The model's parameters are fixed when you use it. Some companies may use chats to train future versions, depending on their settings and policies, so check the privacy controls." },
          { mistake: "Believing a helpful, polite tone means the answer was checked.", fix: "Tone comes from preference training. Verify facts, figures and citations in a primary source." },
          { mistake: "Thinking bigger models are always better assistants.", fix: "Fine-tuning and preference training matter a great deal. A smaller, well-tuned model can be preferred over a larger raw one." },
        ]}
      />
      <MisconceptionCallout
        myth="AI chatbots are programmed with rules for what to say."
        reality={<p>Almost none of a chatbot&apos;s behavior is written as rules. Its knowledge comes from predicting text during pretraining, and its assistant manners come from training on examples and human rankings. That&apos;s why behavior can be inconsistent: the model learned tendencies from data, not a rulebook. Developers can add filters and instructions on top, but the core behavior is learned.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Treat chatbot answers as a well-read first draft: check names, numbers and citations in an original source.",
          "Look in your chatbot's settings for whether your conversations can be used to train future models, and choose deliberately.",
          "Ask for sources and then open them. A citation you haven't opened isn't a verified citation.",
          "When comparing AI tools, test them on questions you already know the answers to.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How are AI chatbots like ChatGPT trained?", answer: "In stages: pretraining on a very large amount of text to predict the next token, supervised fine-tuning on example conversations, and preference tuning (such as RLHF) where people rank answers and the model is tuned toward the preferred ones." },
          { question: "What is RLHF in simple terms?", answer: "Reinforcement learning from human feedback. People compare several answers and pick the better ones, a reward model learns those preferences, and the chatbot is adjusted to produce answers that score well." },
          { question: "Does a chatbot learn from my conversations?", answer: "Not while you're talking. The model is fixed during use. Some providers may use conversations to train later versions depending on your settings, so check the privacy options." },
          { question: "Where does chatbot training data come from?", answer: "Pretraining typically uses large collections of public web text, books, code and licensed data. Fine-tuning and preference data are much smaller and are created by people, and increasingly partly by AI." },
          { question: "Why do chatbots make things up if they were trained so carefully?", answer: "They generate plausible text rather than looking up verified facts, and preference training rewards answers people like, which isn't always the same as answers that are true." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
