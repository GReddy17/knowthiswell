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
  title: "What AI Hallucination Actually Means",
  category: "ai-future-tech-literacy",
  order: 6,
  subtopic: "ai-fundamentals",
  tags: ["AI hallucination", "large language models", "ChatGPT accuracy", "confabulation", "retrieval-augmented generation"],
  date: "2026-09-27",
  updated: "2026-09-27",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-27",
  excerpt: "An AI hallucination is a confident, fluent answer that isn't supported by facts. It happens because chatbots predict likely words rather than look facts up, and it sounds just as sure either way.",
  summary: "An AI hallucination is output from a generative AI system that sounds plausible but is false or unsupported by its sources; NIST's Generative AI Profile (AI 600-1) calls the same risk 'confabulation.' It happens because a large language model generates text by predicting likely next words, not by retrieving verified records, so it can produce invented citations, numbers or quotes with the same fluency as true ones. A 2025 OpenAI paper (Kalai et al.) argues that common training and scoring methods reward a confident guess over 'I don't know.' The best-known real-world case is Mata v. Avianca (2023), where a federal judge in New York sanctioned two lawyers $5,000 for filing a brief that cited court cases ChatGPT had invented. Grounding answers in retrieved documents reduces hallucination but does not eliminate it, so anything that matters still needs checking against a primary source.",
  sources: [
    { label: "NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative AI Profile (2024)", url: "https://doi.org/10.6028/NIST.AI.600-1" },
    { label: "Kalai, Nachum, Vempala & Zhang (2025) — Why Language Models Hallucinate, arXiv", url: "https://arxiv.org/abs/2509.04664" },
    { label: "Ji et al. (2023) — Survey of Hallucination in Natural Language Generation, ACM Computing Surveys", url: "https://doi.org/10.1145/3571730" },
    { label: "Lewis et al. (2020) — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, arXiv", url: "https://arxiv.org/abs/2005.11401" },
    { label: "Mata v. Avianca, Inc., No. 1:22-cv-01461 (S.D.N.Y.) — court docket, CourtListener", url: "https://www.courtlistener.com/docket/63107798/mata-v-avianca-inc/" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/ai-agents-explained-what-makes-them-different-from-chatbots",
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "ai-future-tech-literacy/what-a-neural-network-actually-does",
    "ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software",
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
    "psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making",
    "ai-future-tech-literacy/how-ai-chatbots-are-trained",
    "ai-future-tech-literacy/what-prompt-engineering-actually-is",
    "ai-future-tech-literacy/how-to-tell-if-content-was-ai-generated",
  ],
  glossary: [
    { term: "Hallucination", definition: "A generative AI output that sounds plausible but is false or not supported by any source." },
    { term: "Confabulation", definition: "NIST's term for the same risk: the system confidently produces made-up content, much as a person might fill a memory gap without knowing it." },
    { term: "Grounding", definition: "Tying a model's answer to specific retrieved documents or data, so claims can be traced and checked." },
    { term: "Retrieval-augmented generation (RAG)", definition: "A setup where the system first searches a document collection, then writes its answer using what it found." },
    { term: "Calibration", definition: "How well a system's confidence matches how often it's actually right." },
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
  {"question": "What is an AI hallucination?", "difficulty": "easy", "options": [{"text": "A fluent, confident answer that is false or not supported by any source", "correct": true, "explanation": "The key feature is that it sounds right while being wrong or unsupported."}, {"text": "An AI system deliberately lying to deceive the user", "correct": false, "explanation": "There's no intent involved. It's a side effect of how text is generated."}, {"text": "A software crash that produces garbled text", "correct": false, "explanation": "Hallucinations are usually grammatical and convincing, not garbled."}]},
  {"question": "Why can a chatbot invent a citation that looks real?", "difficulty": "medium", "options": [{"text": "It generates likely-looking text, and real citations have a predictable pattern it can imitate", "correct": true, "explanation": "Author names, journal titles and years follow patterns, so the model can produce something citation-shaped with no real paper behind it."}, {"text": "It copies citations from a hidden database that contains errors", "correct": false, "explanation": "A plain language model doesn't look citations up in a database at all."}, {"text": "It only happens when the internet connection drops", "correct": false, "explanation": "Hallucination comes from the generation process, not connectivity."}]},
  {"question": "What happened in Mata v. Avianca (2023)?", "difficulty": "medium", "options": [{"text": "Lawyers were sanctioned $5,000 for filing a brief citing cases ChatGPT had made up", "correct": true, "explanation": "The judge found the cited decisions didn't exist and fined the lawyers and their firm."}, {"text": "An airline was fined for using AI to set ticket prices", "correct": false, "explanation": "Avianca was the defendant in an injury suit; the issue was the lawyers' fake citations."}, {"text": "A court banned AI tools from all legal work", "correct": false, "explanation": "No blanket ban. The sanction was for failing to verify."}]},
  {"question": "What does NIST call this risk in its Generative AI Profile?", "difficulty": "hard", "options": [{"text": "Confabulation", "correct": true, "explanation": "NIST AI 600-1 uses 'confabulation' for confidently stated false or erroneous content."}, {"text": "Overfitting", "correct": false, "explanation": "Overfitting is a training problem where a model memorizes its data too closely."}, {"text": "Data poisoning", "correct": false, "explanation": "Data poisoning is an attack that corrupts training data on purpose."}]},
  {"question": "Which setup most reduces hallucination when you need facts about your company's own policies?", "difficulty": "medium", "options": [{"text": "Having the system retrieve the actual policy documents and answer from them, with citations", "correct": true, "explanation": "That's retrieval-augmented generation. It grounds answers in real text you can check."}, {"text": "Asking the chatbot to 'be accurate' at the start of the prompt", "correct": false, "explanation": "Instructions can help a little, but the model still can't know documents it has never seen."}, {"text": "Using a bigger model with no access to the documents", "correct": false, "explanation": "A bigger model still can't know your private policies. It may just guess more fluently."}]},
  {"question": "According to the 2025 'Why Language Models Hallucinate' paper, what encourages guessing?", "difficulty": "hard", "options": [{"text": "Scoring methods that give credit for a right guess but none for saying 'I don't know'", "correct": true, "explanation": "Like a multiple-choice test with no penalty for wrong answers, guessing beats abstaining."}, {"text": "Models being trained only on fiction", "correct": false, "explanation": "Training data includes plenty of factual text. The issue is incentives, not genre."}, {"text": "Users typing too slowly", "correct": false, "explanation": "Typing speed has nothing to do with it."}]},
  {"question": "A chatbot gives you a statistic with a precise decimal and a named source. What should you do?", "difficulty": "easy", "options": [{"text": "Find the named source yourself and confirm the number appears there", "correct": true, "explanation": "Precision and a source name make an answer look credible but don't prove it exists."}, {"text": "Trust it, because made-up numbers are always round", "correct": false, "explanation": "Hallucinated numbers can be just as precise as real ones."}, {"text": "Ask the chatbot if it's sure, and accept a yes", "correct": false, "explanation": "The model can confidently confirm its own error. Check outside the chat."}]},
  {"question": "Which kind of question is a chatbot most likely to hallucinate on?", "difficulty": "medium", "options": [{"text": "An obscure fact that appeared rarely, if at all, in its training data", "correct": true, "explanation": "Rare facts give the model little to go on, so it fills the gap with something plausible."}, {"text": "A very common fact repeated in thousands of sources", "correct": false, "explanation": "Widely repeated facts are usually reproduced correctly."}, {"text": "A request to rephrase a paragraph you pasted in", "correct": false, "explanation": "When the facts are in front of it, the risk is much lower, though not zero."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "An AI hallucination is a confident, fluent answer that's false or not backed by any source, like a made-up court case or a statistic nobody published.",
          "It happens because chatbots predict likely words rather than look facts up, so they sound equally sure when they're right and when they're wrong.",
          "Grounding answers in real documents cuts the risk but doesn't remove it. Anything that matters still needs a check against a primary source.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ask a chatbot for three books on a niche topic and it may give you three titles, three authors and three publication years, all perfectly formatted, and one of the books may not exist. That&apos;s a hallucination. The chatbot isn&apos;t lying on purpose. It writes by predicting which words usually come next, and a book recommendation has a very predictable shape: title, author, year. It can fill that shape with something that sounds right without ever checking a library. The tricky part is the tone. A made-up answer sounds exactly as confident as a correct one, so you can&apos;t tell them apart by how they read.</div>}
        detailed={<div className="prose-p">A <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">large language model</TermLink> is trained to predict the next token (a word or word piece) given everything before it. Nothing in that objective requires each sentence to be true; it rewards text that&apos;s likely given the training data. For common facts, likely and true usually coincide. For rare facts, specific numbers, citations and anything after the training cutoff, the model has little signal, and the most probable continuation can be a plausible invention. NIST&apos;s Generative AI Profile (AI 600-1) lists this as &quot;confabulation.&quot; A 2025 OpenAI paper by Kalai and colleagues adds an incentive argument: training and benchmark scoring usually give credit for a correct answer and none for abstaining, so a model that guesses scores better than one that says &quot;I don&apos;t know,&quot; just as a student guessing on a multiple-choice test with no penalty does. Researchers split hallucinations into two kinds. <strong>Intrinsic</strong> ones contradict a source the model was given, such as a summary that misstates the document. <strong>Extrinsic</strong> ones add claims that can&apos;t be verified from the source at all. The main technical fix is <strong>retrieval-augmented generation</strong>: search a trusted document set first, then answer from what was found, ideally with citations. That narrows the gap, but a model can still misread or overreach beyond the retrieved text.</div>}
      />
      <FootnoteAside>Hallucination rates vary a lot by model, task and how the question is asked, and they&apos;ve fallen as models have improved. Any single percentage you see quoted applies to a specific benchmark, not to every conversation.</FootnoteAside>

      <p>This is the practical difference between AI and <TermLink href="/ai-future-tech-literacy/how-ai-actually-differs-from-traditional-software">traditional software</TermLink>: a calculator or database either returns the stored answer or an error. A language model always returns something. The stakes rise with <TermLink href="/ai-future-tech-literacy/ai-agents-explained-what-makes-them-different-from-chatbots">AI agents</TermLink>, which act on their outputs, so a made-up detail can become a wrong action, not just a wrong sentence.</p>

      <QuickCheck
        question="Why does a hallucinated answer usually sound so convincing?"
        options={[
          { text: "The model generates fluent, well-formed text whether or not the content is true", correct: true, explanation: "Correct. Fluency comes from the prediction process itself, not from checking facts." },
          { text: "The model only hallucinates when it's been told to be persuasive", correct: false, explanation: "It happens in ordinary questions with no special instructions." },
          { text: "Hallucinations always include the phrase 'I think'", correct: false, explanation: "They often come with no hedging at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The invented court cases (baseline case)</h3>
      <div className="prose-p">In Mata v. Avianca, a personal-injury suit against an airline in federal court in New York, the plaintiff&apos;s lawyers filed a brief in 2023 citing decisions such as &quot;Varghese v. China Southern Airlines.&quot; Opposing counsel and the judge couldn&apos;t find them, because ChatGPT had generated them, complete with quotes and docket-style numbers. When asked, one lawyer had even asked ChatGPT whether the cases were real, and it said yes. Judge P. Kevin Castel sanctioned the two lawyers and their firm $5,000. The lesson isn&apos;t that AI can&apos;t help with research. It&apos;s that asking the model to confirm its own output is not verification.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The summary that adds a detail (edge case)</h3>
      <div className="prose-p">You paste in a 2-page meeting note and ask for a summary. The summary is accurate except for one line: &quot;The team agreed to launch on March 3.&quot; The note mentions March but never a specific date. That&apos;s an extrinsic hallucination: the model filled in a detail that fits the pattern of meeting summaries. It&apos;s harder to catch than an invented book because 95% of the output is correct and you gave it the source. Spot-check any date, number or name in a summary against the original.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using a chatbot safely for a real task (real-world use)</h3>
      <div className="prose-p">You want to know the return policy for a laptop you bought. Asking a general chatbot &quot;What&apos;s Brand X&apos;s return window?&quot; invites a guess: it may give a common number like 30 days that doesn&apos;t match your retailer or country. A safer workflow is to open the retailer&apos;s actual policy page, paste the text in, and ask the chatbot to answer only from that text and quote the sentence it relied on. Then read that sentence yourself. Two minutes of checking turns a plausible answer into a verified one.</div>

      <QuickCheck
        question="In Mata v. Avianca, why wasn't asking ChatGPT 'are these cases real?' enough?"
        options={[
          { text: "The same model that invented the cases could confidently confirm them", correct: true, explanation: "Correct. Verification has to come from an independent source, such as a legal database." },
          { text: "ChatGPT refused to answer the question", correct: false, explanation: "It answered, and said the cases were real." },
          { text: "The lawyers asked in the wrong language", correct: false, explanation: "Language wasn't the issue; the check wasn't independent." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How an AI hallucination happens"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-what-ai-hallucination-actually-means-flow.svg"
        altText="A five-step flow. 1: You ask a question the model has no lookup table for. 2: The model predicts the most likely next words, one at a time. 3: Nothing in that process checks each claim against a real source. 4: The result is a fluent, confident answer that can include invented details. 5: The fix is to ground it in real documents and verify anything that matters."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a confident tone as a sign of accuracy.", fix: "Judge the answer by whether you can trace it to a real source, not by how sure it sounds." },
          { mistake: "Asking the chatbot to double-check itself and stopping there.", fix: "Check outside the chat: the original document, an official site, or a database built for that purpose." },
          { mistake: "Using a general chatbot for citations, legal cases, medical doses or exact figures.", fix: "Use it to draft or explain, then pull the exact facts from primary sources." },
        ]}
      />
      <MisconceptionCallout
        myth="AI hallucinations are rare glitches that newer models have fixed."
        reality={<p>They&apos;ve become less frequent as models improved and as tools add web search and document retrieval, but they come from how the technology generates text, so they haven&apos;t disappeared. They&apos;re still most likely on rare facts, precise numbers, citations and recent events, which are exactly the details people most want to copy into their work. Fluent, confident text also means you can&apos;t judge where a passage came from by how it reads; <TermLink href="/ai-future-tech-literacy/how-to-tell-if-content-was-ai-generated">how to tell if content was AI-generated</TermLink> covers what actually works.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time a chatbot gives you a number, name or citation you plan to reuse, find it in the original source first.",
          "When you have the source document, paste it in and ask the tool to answer only from it and quote its evidence.",
          "Ask the chatbot to say when it isn't sure. It won't catch everything, but it helps.",
          "Keep AI for drafting, brainstorming and explaining; keep primary sources for facts that carry consequences.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does AI hallucination mean?", answer: "It means a generative AI system produced content that sounds plausible but is false or unsupported, such as a fake quote, a made-up study or a wrong date, stated with full confidence." },
          { question: "Why does ChatGPT make things up?", answer: "Chatbots generate text by predicting likely next words, not by checking a database of facts. When they lack reliable information, the most likely-sounding answer can be an invention. Scoring methods that reward guessing over admitting uncertainty make it worse." },
          { question: "How can you tell if an AI is hallucinating?", answer: "You usually can't from the text alone. Check specific claims (names, numbers, citations, quotes) against the original source. Missing or unfindable sources are the clearest warning sign." },
          { question: "Can AI hallucinations be prevented?", answer: "They can be reduced, mainly by grounding answers in retrieved documents and asking for citations, but not eliminated. Human verification is still the final safeguard for anything important." },
          { question: "Is AI hallucination the same as AI lying?", answer: "No. Lying implies intent to deceive. A hallucination is a byproduct of how the model generates text; it has no goal of misleading you." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
