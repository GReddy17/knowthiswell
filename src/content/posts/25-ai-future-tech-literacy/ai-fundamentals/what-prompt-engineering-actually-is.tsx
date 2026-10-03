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
  title: "What Prompt Engineering Actually Is",
  category: "ai-future-tech-literacy",
  order: 8,
  subtopic: "ai-fundamentals",
  tags: ["prompt engineering", "prompts", "large language models", "chain of thought", "few-shot prompting"],
  date: "2026-10-01",
  updated: "2026-10-01",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-01",
  excerpt: "Prompt engineering is writing the input so a language model has the context, examples and format it needs. It shapes the model's guess; it can't add knowledge.",
  summary: "Prompt engineering is the practice of designing the text you give a large language model (its instructions, context, examples and requested output format) so the model's prediction lands closer to what you need. It works because a language model generates each word conditioned on everything in its input, so clearer context narrows the range of likely continuations. Documented techniques include few-shot prompting (showing worked examples, described in the 2020 GPT-3 paper by Brown et al.), chain-of-thought prompting (asking for intermediate reasoning, which Wei et al. 2022 found raised one large model's score on grade-school math problems from about 18% to about 57%), role and format instructions, and supplying source documents. Prompting cannot give a model facts it doesn't have or guarantee accuracy, so outputs still need checking, which is why official guides from OpenAI and Anthropic pair prompting advice with testing against real examples.",
  sources: [
    { label: "Brown et al. (2020) — Language Models are Few-Shot Learners (arXiv:2005.14165)", url: "https://arxiv.org/abs/2005.14165" },
    { label: "Wei et al. (2022) — Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (arXiv:2201.11903)", url: "https://arxiv.org/abs/2201.11903" },
    { label: "OpenAI — Prompt engineering guide (platform documentation)", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    { label: "Anthropic — Prompt engineering overview (Claude documentation)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
    { label: "NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative AI Profile (2024)", url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "ai-future-tech-literacy/what-ai-hallucination-actually-means",
    "ai-future-tech-literacy/how-ai-chatbots-are-trained",
    "ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software",
    "ai-future-tech-literacy/what-a-neural-network-actually-does",
  ],
  glossary: [
    { term: "Prompt", definition: "Everything a language model receives as input for a given response: instructions, background, examples, documents and the question itself." },
    { term: "Context window", definition: "The maximum amount of text (measured in tokens) a model can take into account at once. Anything outside it is invisible to the model." },
    { term: "Few-shot prompting", definition: "Including a handful of worked input-and-output examples in the prompt so the model copies the pattern, with no retraining." },
    { term: "Chain-of-thought prompting", definition: "Asking the model to write out intermediate reasoning steps before its final answer, which tends to help on multi-step problems." },
    { term: "System prompt", definition: "Standing instructions set by the app or developer that apply to every message in a conversation, separate from what the user types." },
    { term: "In-context learning", definition: "A model picking up a task from examples inside the prompt itself, without any change to its trained weights." },
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
  {"question": "What does prompt engineering actually change?", "difficulty": "easy", "options": [{"text": "The input text the model conditions on, which shifts its likely output", "correct": true, "explanation": "The model's weights stay the same; only what it's reading changes."}, {"text": "The model's trained weights", "correct": false, "explanation": "That's fine-tuning or retraining, a different process."}, {"text": "The facts stored in the model's training data", "correct": false, "explanation": "A prompt can supply new text to read, but it doesn't edit what was learned."}]},
  {"question": "What is few-shot prompting?", "difficulty": "easy", "options": [{"text": "Including a few worked examples of the task in the prompt", "correct": true, "explanation": "Brown et al. (2020) showed large models can copy a pattern from examples in the prompt."}, {"text": "Asking the same question a few times and averaging", "correct": false, "explanation": "That resembles a different technique (sampling several answers), not few-shot prompting."}, {"text": "Keeping prompts under a few words", "correct": false, "explanation": "Few-shot refers to examples, not length."}]},
  {"question": "In Wei et al. (2022), what happened when a 540-billion-parameter model was prompted to show its reasoning on grade-school math problems?", "difficulty": "medium", "options": [{"text": "Its solve rate rose from roughly 18% to roughly 57%", "correct": true, "explanation": "That's the GSM8K result for PaLM 540B with chain-of-thought examples."}, {"text": "Nothing changed", "correct": false, "explanation": "The gain was large on multi-step arithmetic problems."}, {"text": "It reached 100% accuracy", "correct": false, "explanation": "It improved a lot but still got many problems wrong."}]},
  {"question": "Why can't a well-written prompt guarantee a correct answer?", "difficulty": "medium", "options": [{"text": "The model still predicts likely text, and likely isn't the same as true", "correct": true, "explanation": "That's the root of hallucination; prompting narrows the guess but doesn't verify it."}, {"text": "Prompts are ignored after the first sentence", "correct": false, "explanation": "The whole prompt within the context window influences the output."}, {"text": "Models only read the last word of a prompt", "correct": false, "explanation": "Models attend to the entire input."}]},
  {"question": "You want a summary in exactly three bullet points under 20 words each. What's the most reliable prompt change?", "difficulty": "easy", "options": [{"text": "State that format explicitly, ideally with one example", "correct": true, "explanation": "Both OpenAI and Anthropic guides recommend specifying output format directly."}, {"text": "Add \"please\" and \"thank you\"", "correct": false, "explanation": "Politeness isn't what controls the format."}, {"text": "Write the request in all capital letters", "correct": false, "explanation": "Clarity beats emphasis."}]},
  {"question": "Which problem does pasting the source document into the prompt address?", "difficulty": "medium", "options": [{"text": "The model lacking the specific facts it needs", "correct": true, "explanation": "Giving the model the text to work from lets it quote and summarize instead of guessing from memory."}, {"text": "The model being too slow", "correct": false, "explanation": "More text actually adds processing time."}, {"text": "The model's knowledge cutoff disappearing permanently", "correct": false, "explanation": "It only helps for that conversation."}]},
  {"question": "What is a system prompt?", "difficulty": "easy", "options": [{"text": "Standing instructions set by the app or developer that apply to the whole conversation", "correct": true, "explanation": "It sits above the user's messages and shapes tone, role and rules."}, {"text": "An error message from the operating system", "correct": false, "explanation": "The term is specific to language model apps."}, {"text": "The model's training data", "correct": false, "explanation": "Training data shapes weights; the system prompt is input text."}]},
  {"question": "Which claim about prompt engineering is overhyped?", "difficulty": "hard", "options": [{"text": "That secret \"magic phrases\" unlock hidden abilities in every model", "correct": true, "explanation": "Phrase-level tricks often vary between models and versions. Clear context and examples transfer far better."}, {"text": "That clear instructions improve outputs", "correct": false, "explanation": "That one is well supported by vendor guidance and testing."}, {"text": "That examples help models follow a format", "correct": false, "explanation": "That's the documented few-shot effect."}]},
  {"question": "Why do official prompting guides recommend testing prompts on a set of real examples?", "difficulty": "hard", "options": [{"text": "Model outputs vary, so one good result doesn't prove the prompt works reliably", "correct": true, "explanation": "A prompt is closer to a hypothesis than a command; you measure it across cases."}, {"text": "Because models refuse untested prompts", "correct": false, "explanation": "There's no such rule."}, {"text": "To retrain the model on your examples", "correct": false, "explanation": "Testing evaluates the prompt; it doesn't change the model."}]},
  {"question": "What does a context window limit?", "difficulty": "medium", "options": [{"text": "How much text the model can take into account at once", "correct": true, "explanation": "Text beyond the window isn't seen at all for that response."}, {"text": "How many users can chat at once", "correct": false, "explanation": "That's server capacity, unrelated."}, {"text": "How long the model's answer may take to arrive", "correct": false, "explanation": "It's measured in tokens, not seconds."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Prompt engineering means designing the input (instructions, context, examples, output format) so a language model's prediction lands closer to what you need.",
          "It works because the model generates every word conditioned on everything it has been given. More precise context narrows the range of likely answers.",
          "It can't add knowledge the model doesn't have or make an answer true. It improves the odds, so outputs still need checking.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine handing a task to a very well-read temp worker who has never met you, can&apos;t ask questions, and will start typing the moment you stop talking. If you say &quot;write something about our product,&quot; you get something generic. If you say who it&apos;s for, how long it should be, what to include, and show one example you liked, you get something close to usable. That&apos;s all prompt engineering is: giving the model the briefing a stranger would need. The word &quot;engineering&quot; makes it sound mysterious, but the core skill is the same one good managers use when they write a clear brief. The catch is the temp worker&apos;s confidence. A chatbot sounds equally sure whether it knows the answer or is guessing, so a better brief raises your odds of a good answer without guaranteeing one.</div>}
        detailed={<div className="prose-p">A <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">large language model</TermLink> produces text one token at a time, each chosen from a probability distribution conditioned on the entire input in its context window. A prompt is that input. Changing it changes the distribution, which is the whole mechanism: there&apos;s no hidden command channel. Brown et al. (2020) showed that a sufficiently large model (GPT-3, 175 billion parameters) can perform a new task from a few examples placed in the prompt, which they called in-context learning, with no update to its weights. Wei et al. (2022) showed that including examples with written-out reasoning, chain-of-thought prompting, raised a 540-billion-parameter model&apos;s solve rate on the GSM8K grade-school math benchmark from about 18% to about 57%. Vendor guides from OpenAI and Anthropic converge on the same practical list: be explicit about the task and audience, supply relevant documents, give examples, ask for a specific format, break complex jobs into steps, and evaluate prompts against a set of test cases. NIST&apos;s Generative AI Profile (AI 600-1) is a useful counterweight: it lists confabulation, a confident wrong output, as a core risk that prompting reduces but doesn&apos;t remove.</div>}
      />
      <FootnoteAside>&quot;Prompt engineer&quot; briefly became a much-hyped job title around 2023. In practice the skill has largely folded into ordinary roles (writing, analysis, software), much as &quot;search engine skills&quot; once did. The durable part is clear task specification and testing, not a list of secret phrases.</FootnoteAside>

      <p>The reason this matters is <TermLink href="/ai-future-tech-literacy/what-ai-hallucination-actually-means">hallucination</TermLink>. A model fills gaps with plausible text. Prompt engineering is mostly about leaving fewer gaps: telling it what you want, giving it the facts to work from, and showing it what a good answer looks like. It&apos;s a different activity from training, which happens long before you type anything (see <TermLink href="/ai-future-tech-literacy/how-ai-chatbots-are-trained">how chatbots are trained</TermLink>).</p>

      <QuickCheck
        question="A chatbot gives you a vague, generic answer. What is the most likely cause?"
        options={[
          { text: "The prompt left out the audience, purpose or format, so the model chose the most generic likely continuation", correct: true, explanation: "Correct. With little context, the most probable answer is the average one." },
          { text: "The model is broken", correct: false, explanation: "Generic output is the expected result of a generic input." },
          { text: "The model needs to be retrained", correct: false, explanation: "Usually a clearer prompt fixes this without any retraining." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The five levers that actually move results</h2>
      <p>Strip away the hype and nearly every documented technique fits one of five levers. They&apos;re ordered roughly by how much they usually help.</p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Task and audience.</strong> What you want, for whom, and why. &quot;Explain inflation&quot; versus &quot;Explain inflation to a 14-year-old in 150 words for a school newsletter.&quot;</li>
        <li><strong>Context and source material.</strong> Paste the document, the data, or the policy text. A model summarizing text it can see is far more reliable than one recalling from memory.</li>
        <li><strong>Examples (few-shot).</strong> One to five samples of the input and the output you want. This is the fastest way to pin down tone and format.</li>
        <li><strong>Output format.</strong> Bullets, a table, JSON, a word limit, headings. Say it, don&apos;t hope for it.</li>
        <li><strong>Steps.</strong> For multi-step problems, ask for the reasoning or split the job into separate prompts (outline first, then draft).</li>
      </ol>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A product email (baseline case)</h3>
      <div className="prose-p">Prompt A: &quot;Write an email about our new feature.&quot; The result is a cheerful, generic announcement that could be from any company. Prompt B: &quot;Write a 120-word email to existing small-business customers announcing that invoices can now be paid by bank transfer. Tone: plain and friendly, no exclamation marks. Include one sentence on how to turn it on (Settings, then Payments). End with a single link placeholder.&quot; Prompt B usually produces something close to sendable. Nothing magic happened. Prompt B supplied the audience, length, tone, facts and structure that A left for the model to guess.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A math word problem (where reasoning steps help)</h3>
      <div className="prose-p">&quot;A cafe had 23 apples, used 20 for lunch and bought 6 more. How many now?&quot; Asked for just the number, models historically slipped on problems like this. Asked to work it through (23 minus 20 is 3, plus 6 is 9), they got it right far more often. This is the example that opens the Wei et al. paper, and it&apos;s the clearest evidence that prompt structure changes accuracy on multi-step tasks. Newer &quot;reasoning&quot; models now do much of this step-by-step work internally, so the visible gain from adding &quot;think step by step&quot; is smaller on them, which is a good reminder that prompting tricks are model-dependent.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Asking for a citation it doesn&apos;t have (the limit)</h3>
      <div className="prose-p">&quot;You are a world-class legal researcher. Give me three court cases supporting this argument, with citations.&quot; The role line makes the answer sound more authoritative. It doesn&apos;t give the model a legal database. If the cases aren&apos;t reliably in its training data, it can generate realistic-looking but non-existent citations, which has already happened in real court filings. The fix isn&apos;t a better role phrase. It&apos;s supplying the actual sources (or using a tool that searches them) and verifying every citation yourself. Prompting shapes the guess; it can&apos;t supply the knowledge.</div>

      <QuickCheck
        question="Which prompt change is most likely to stop a model from inventing details about your company's refund policy?"
        options={[
          { text: "Paste the actual policy text and tell it to answer only from that text", correct: true, explanation: "Correct. Grounding the model in the real document removes the gap it would otherwise fill." },
          { text: "Tell it it's an expert customer service agent", correct: false, explanation: "A role changes tone, not the facts it has access to." },
          { text: "Ask it to be very confident", correct: false, explanation: "Confidence is the problem, not the solution." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What a prompt is made of, and what it can and can't do"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-what-prompt-engineering-actually-is-flow.svg"
        altText="A flow diagram. Five prompt ingredients (task and audience, context and sources, examples, output format, steps) feed into the language model, which predicts likely text, producing a draft output that then goes to a human check. A side note says a prompt shapes the guess but can't add missing knowledge."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Collecting \"magic phrases\" from social media and pasting them into every prompt.", fix: "Spend the words on context instead: audience, purpose, source material and an example. Those transfer across models; phrase tricks often don't." },
          { mistake: "Judging a prompt by one good answer.", fix: "Try it on five to ten realistic inputs. Outputs vary from run to run, and the vendor guides recommend exactly this kind of small test set." },
          { mistake: "Asking the model for facts, figures or citations it would have to recall from memory.", fix: "Give it the source to work from, or verify every specific claim independently before using it." },
          { mistake: "Cramming a complex job into one giant prompt.", fix: "Split it: outline, then draft, then critique. Each step gets a clearer, smaller target." },
        ]}
      />
      <MisconceptionCallout
        myth="Prompt engineering is a technical skill that unlocks hidden abilities inside the AI."
        reality={<p>It&apos;s mostly clear writing plus testing. The model can only do what its training made possible; a prompt chooses which of those behaviors you get and how reliably. The research gains (few-shot, chain-of-thought) came from giving models better information about the task, not from secret commands.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you prompt, include four things: the task, the audience, the format, and any source text the answer should come from.",
          "Add one example of a good output when tone or structure matters.",
          "For anything multi-step, ask for the working, or split it into separate prompts.",
          "Save prompts that work and test them on a few new inputs before relying on them.",
          "Check every fact, number and citation in the output against a real source.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is prompt engineering in simple terms?", answer: "Writing the input to an AI model so it has the context, examples and format it needs to give you a useful answer. It's closer to writing a clear brief than to programming." },
          { question: "Is prompt engineering a real job?", answer: "Some companies hire for it, especially to build and test prompts inside products. For most people it's a skill used within existing jobs rather than a standalone career." },
          { question: "Does prompt engineering stop AI hallucinations?", answer: "It reduces them, mainly by supplying source material and asking the model to stick to it, but it can't eliminate them. Outputs still need checking." },
          { question: "What is chain-of-thought prompting?", answer: "Asking the model to show intermediate reasoning before its final answer. Research by Wei et al. (2022) found it substantially improved large models on multi-step math problems." },
          { question: "Do I need to learn prompt engineering to use ChatGPT or Claude?", answer: "No, but a few habits help a lot: say who the answer is for, give the relevant text, specify the format, and show an example when it matters." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
