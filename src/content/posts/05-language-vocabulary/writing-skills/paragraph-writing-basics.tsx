import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Paragraph Writing Basics",
  category: "language-vocabulary",
  order: 13,
  subtopic: "writing-skills",
  tags: ["paragraph writing", "topic sentence", "writing skills", "composition", "transitions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What actually makes a paragraph work — one controlling idea, a topic sentence, and supporting details — not just a block of text between two blank lines.",
  summary: "A paragraph is a group of sentences built around a single controlling idea, usually announced in a topic sentence and developed with supporting details, and a new paragraph signals to the reader that the idea has shifted.",
  sources: [
    { label: "Purdue Online Writing Lab — Paragraphs and Paragraphing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/index.html" },
    { label: "Merriam-Webster — Grammar", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/sentence-structure-basics",
    "language-vocabulary/essay-writing-structure",
    "language-vocabulary/editing-and-proofreading-basics",
  ],
  glossary: [
    { term: "Topic sentence", definition: "The sentence, usually first, that states a paragraph's main controlling idea." },
    { term: "Unity", definition: "The quality of a paragraph in which every sentence supports the same single idea, with nothing that belongs to a different point." },
    { term: "Coherence", definition: "The logical flow between sentences in a paragraph, built with transitions, consistent pronouns, and a clear order of ideas." },
    { term: "Transition", definition: "A word or phrase that signals how one sentence or paragraph relates to the next, such as 'however,' 'for example,' or 'as a result.'" },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "A paragraph is built around one controlling idea, not just a visual block of text — every sentence in it should support that single idea, a quality called unity.",
          "A topic sentence, usually placed first, states the paragraph's main point; without one, a reader has to guess what the paragraph is actually about.",
          "There's no fixed \"correct\" paragraph length — the real rule is one idea per paragraph, whether that takes two sentences or twelve.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A paragraph is a group of sentences that all work together to explain or develop one idea. Most paragraphs open with a <TermLink href="/language-vocabulary/paragraph-writing-basics">topic sentence</TermLink> that states the main point, followed by a few sentences that support it with detail, examples, or reasoning. When the idea changes, a new paragraph starts. That&apos;s really the whole system — one paragraph, one job.</div>}
        detailed={<div className="prose-p">A well-built paragraph has three things working together: <TermLink href="/language-vocabulary/paragraph-writing-basics">unity</TermLink> (every sentence supports the same idea, with no stray points that belong somewhere else), development (the topic sentence gets backed up with specifics — evidence, an example, a reason — not just restated in different words), and <TermLink href="/language-vocabulary/paragraph-writing-basics">coherence</TermLink> (the sentences connect to each other logically, usually with transition words and consistent pronoun references, so the reader can follow the thread without re-reading). Most paragraphs also end with either a transition into the next idea or a brief wrap-up sentence, though this is a convention, not a rule — some paragraphs, especially in narrative or journalistic writing, end abruptly on purpose for pacing. The topic sentence doesn&apos;t have to open the paragraph, either: skilled writers sometimes place it last, building up supporting detail first and landing on the main point as a kind of conclusion — a structure called climactic order, common in persuasive and narrative writing.</div>}
      />
      <FootnoteAside>Paragraph breaks as we use them today — a blank line or an indent — are a relatively recent print convention. Medieval scribes instead marked a shift in topic with a small mark called a pilcrow (¶), often added in red ink after the main text was copied out, long before indentation became the standard way to show &quot;new idea starts here.&quot;</FootnoteAside>
      <p>
      With unity, development, and coherence as the actual job description, most paragraph problems turn out to be one of those three things breaking down, not a mysterious lack of &quot;writing talent.&quot;
      </p>

      <QuickCheck
        question="A paragraph about the benefits of walking suddenly includes two sentences about the writer's dog's health issues, unrelated to walking. What's the problem?"
        options={[
          { text: "Nothing — it adds personal detail, which always improves a paragraph.", correct: false, explanation: "Personal detail can work, but only when it supports the paragraph's main idea. Two unrelated sentences about a dog's unrelated health issues break unity." },
          { text: "It breaks unity — the sentences don't support the paragraph's single controlling idea.", correct: true, explanation: "Correct. Every sentence in a paragraph should develop the same idea. Content that belongs to a different point should move to its own paragraph or be cut." },
          { text: "It's a coherence problem, not a unity problem.", correct: false, explanation: "Coherence is about how connected sentences flow together; this is a more basic issue — the sentences aren't connected to the paragraph's topic at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A paragraph with clean unity and development (baseline case)</h3>
      <div className="prose-p">
      &quot;Reading fiction regularly builds empathy in measurable ways. Studies asking readers to interpret facial expressions or infer other people&apos;s mental states have found that people who read more literary fiction tend to score higher on these tasks than infrequent readers. One likely reason is that fiction forces readers to track multiple characters&apos; internal states — what they know, want, and believe — which is close to the same mental skill used to understand real people. That doesn&apos;t mean reading is a substitute for real social interaction, but it does suggest fiction gives that particular skill regular practice.&quot; Every sentence here supports one claim (fiction builds empathy), develops it with a mechanism, and the last sentence adds a fair caveat rather than wandering to a new topic.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Climactic order — leading with support, landing on the topic sentence (variation)</h3>
      <div className="prose-p">
      &quot;The company&apos;s revenue dropped for the third straight quarter. Two major clients canceled contracts within the same month. Employee turnover hit its highest rate in five years. Taken together, the numbers point to a business in real trouble, not a temporary rough patch.&quot; Here the &quot;topic sentence&quot; — the paragraph&apos;s actual main claim — comes last, after three pieces of evidence build toward it. This is a deliberate, valid structural choice, common in persuasive and narrative writing, where building suspense or letting evidence speak first is more effective than announcing the conclusion up front.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Paragraph breaks for skimmability in emails and reports (real-world / applied case)</h3>
      <div className="prose-p">
      Outside of essays, paragraph discipline matters most in writing people skim rather than read closely — work emails, reports, and web content. A single dense paragraph covering three unrelated updates (a deadline change, a budget question, and a meeting time) forces the reader to hunt for the part relevant to them. Splitting each update into its own short paragraph, each with a clear opening sentence, lets a busy reader scan the first line of each block and know instantly whether they need to read further — the same unity principle from academic writing, applied for a reader&apos;s convenience rather than an argument&apos;s clarity.
      </div>

      <QuickCheck
        question="Which of these is the most reliable signal that a paragraph should end and a new one should begin?"
        options={[
          { text: "The paragraph has reached roughly five sentences.", correct: false, explanation: "There's no fixed sentence-count rule for paragraph length — a paragraph can be shorter or longer depending on how much development the idea needs." },
          { text: "The writer is introducing a new controlling idea that the current paragraph's sentences don't support.", correct: true, explanation: "Correct. A new idea is the actual trigger for a new paragraph — length is a side effect of how much support an idea needs, not the rule itself." },
          { text: "The page is starting to look too dense visually.", correct: false, explanation: "Visual density can be a reason to reconsider structure, but it's a symptom, not the underlying rule — the real question is always whether the idea has shifted." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Cramming two or three unrelated ideas into a single paragraph.", fix: "Split each distinct idea into its own paragraph — if you can summarize two different points in the paragraph, it needs to be two paragraphs." },
          { mistake: "Writing a paragraph with no topic sentence, forcing the reader to infer the point.", fix: "State the main idea explicitly in one sentence, usually first (or last, for climactic order) — don't make the reader reconstruct it from scattered details." },
          { mistake: "Assuming every paragraph must be exactly five sentences long.", fix: "Let the idea determine the length. A well-supported point might take three sentences or fifteen — match the length to how much development the idea genuinely needs." },
        ]}
      />
      <MisconceptionCallout
        myth="A proper paragraph must always be exactly five sentences long."
        reality={<p>The &quot;five-sentence paragraph&quot; is a teaching scaffold used in early schooling to build the habit of supporting a point with evidence — it isn&apos;t a rule of actual writing. Professional writing routinely uses much shorter paragraphs (even single-sentence ones, especially in journalism and online writing) and much longer ones (in academic and technical writing, where a complex idea needs more development). The only real requirement is unity: one paragraph, one controlling idea, developed as fully as that idea needs and no further.</p>}
      />

      <QuickCheck
        question="A student is told their paragraph 'needs one more sentence to hit five.' Is this good writing advice?"
        options={[
          { text: "Yes — five sentences is the standard length for a correct paragraph.", correct: false, explanation: "There's no such standard. The five-sentence paragraph is a teaching tool for beginners, not a rule that applies to real writing." },
          { text: "No — paragraph length should be driven by how much development the idea needs, not a fixed sentence count.", correct: true, explanation: "Correct. Adding a sentence just to hit a number, with nothing new to say, actually weakens a paragraph by diluting it with filler." },
          { text: "No — paragraphs should never exceed three sentences under any circumstances.", correct: false, explanation: "This overcorrects into a different fixed rule. There's no maximum either — length should track the idea's need for support, not any specific number." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you read a well-organized article, notice how the first sentence of each paragraph usually tells you what that whole paragraph is about.",
          "When a paragraph you're writing starts to feel long, check whether it's actually developing one idea in depth or has quietly drifted into a second idea.",
          "If a paragraph you wrote has no clear topic sentence, try writing one and see whether the rest of the paragraph actually supports it.",
          "Read the related entry on Essay Writing Structure to see how individual paragraphs stack into a full multi-paragraph argument.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a topic sentence?", answer: "The sentence, usually the first in a paragraph, that states the paragraph's main controlling idea. Everything else in the paragraph should support or develop that sentence." },
          { question: "How long should a paragraph be?", answer: "There's no fixed length. A paragraph should be as long as it takes to fully develop one idea — that might be two sentences or fifteen, depending on the writing context and how much support the idea needs." },
          { question: "What makes something a paragraph instead of just a group of sentences?", answer: "Unity: every sentence in a true paragraph supports one single controlling idea. A group of sentences covering multiple unrelated points isn't one paragraph — it's several paragraphs' worth of content that hasn't been split up yet." },
          { question: "When should I start a new paragraph?", answer: "Start a new paragraph whenever the controlling idea changes — a new point, a new example that isn't directly extending the current one, or a shift in time, place, or speaker in narrative writing." },
          { question: "What is the difference between paragraph unity and coherence?", answer: "Unity means every sentence supports the same idea. Coherence means those sentences are also connected to each other logically and smoothly, usually through transition words and consistent references, so the paragraph reads as one flowing thought rather than a list of disconnected facts." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
