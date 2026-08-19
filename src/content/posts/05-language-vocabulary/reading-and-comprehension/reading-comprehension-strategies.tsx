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
  title: "Reading Comprehension Strategies",
  category: "language-vocabulary",
  order: 18,
  subtopic: "reading-and-comprehension",
  tags: ["reading comprehension", "reading strategies", "study skills", "metacognition", "literacy"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Reading comprehension isn't a talent some people have and others don't — it's a set of specific, learnable strategies that skilled readers use, often without noticing they're doing it.",
  summary: "Reading comprehension strategies are the deliberate techniques skilled readers use before, during, and after reading — predicting, questioning, monitoring understanding, and summarizing — to build and check meaning rather than just moving their eyes across the page.",
  sources: [
    { label: "Reading Rockets — Seven Strategies to Teach Students Text Comprehension", url: "https://www.readingrockets.org/topics/comprehension/articles/seven-strategies-teach-students-text-comprehension" },
    { label: "Reading Rockets — Key Comprehension Strategies to Teach", url: "https://www.readingrockets.org/topics/comprehension/articles/key-comprehension-strategies-teach" },
    { label: "Encyclopaedia Britannica — Reading (skill)", url: "https://www.britannica.com/topic/reading" },
  ],
  seeAlso: [
    "language-vocabulary/skimming-vs-scanning",
    "language-vocabulary/understanding-context-clues",
    "language-vocabulary/figurative-language-explained-metaphor-simile-etc",
    "language-vocabulary/sentence-structure-basics",
  ],
  glossary: [
    { term: "Metacognition", definition: "Thinking about your own thinking — for reading, this means noticing whether you're actually understanding a text as you go, rather than just moving your eyes across it." },
    { term: "Comprehension monitoring", definition: "The ongoing habit of checking whether what you just read made sense, and pausing to fix it (re-reading, slowing down, looking up a word) when it didn't." },
    { term: "Schema (prior knowledge)", definition: "The background knowledge and experience a reader already has about a topic, which gets connected to new text to help build understanding." },
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
          "Reading comprehension isn't passive — skilled readers actively predict, question, and check their own understanding while reading, rather than just decoding words in order.",
          "The single most research-backed strategy is comprehension monitoring: noticing the moment understanding breaks down and doing something about it (re-reading, slowing down, asking a question) instead of reading on regardless.",
          "Summarizing a passage in your own words after reading is one of the most reliable tests of whether you actually understood it, not just whether you finished it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Reading comprehension is the ability to take in written words and actually understand what they mean, not just recognize them. Struggling to comprehend a text usually isn&apos;t about not knowing enough words — it&apos;s about not having a strategy for building understanding as you go. Skilled readers do a handful of specific things: they predict what&apos;s coming before they read a section, they ask themselves questions while reading, they notice when something stops making sense, and they can summarize what they just read in their own words. These are learnable habits, not a fixed talent some people are simply born with.</div>}
        detailed={<div className="prose-p">Comprehension strategies fall into three timing categories: before reading (previewing headings and images, predicting content, activating relevant prior knowledge, or <TermLink href="/language-vocabulary/reading-comprehension-strategies">schema</TermLink>), during reading (<TermLink href="/language-vocabulary/reading-comprehension-strategies">comprehension monitoring</TermLink>, visualizing, generating questions, connecting new information to what you already know), and after reading (summarizing, reflecting on the main idea, asking what still isn&apos;t clear). The edge case that trips up many readers is confusing fluency with comprehension — a reader can decode every word accurately and read at a normal pace while genuinely not understanding what the text means, because decoding and comprehension are separate skills that don&apos;t automatically transfer. This is why comprehension monitoring matters so much: it&apos;s the strategy that catches the gap between &quot;I read the words&quot; and &quot;I understood the text,&quot; and it&apos;s the one skilled readers use almost automatically, often without being able to describe that they&apos;re doing it.</div>}
      />
      <FootnoteAside>The &quot;QAR&quot; (Question-Answer Relationship) strategy, developed by reading researcher Taffy Raphael, teaches readers to sort questions about a text into four types — some answered directly &quot;right there&quot; in the text, some requiring the reader to &quot;think and search&quot; across the text, and some requiring the reader to combine the text with their own background knowledge. It&apos;s still widely taught in reading instruction today because it gives readers a concrete way to notice what kind of thinking a question actually requires.</FootnoteAside>
      <p>
      With that before/during/after framing in mind, it becomes easier to see exactly where comprehension usually breaks down — and which strategy actually fixes that specific break.
      </p>

      <QuickCheck
        question="You finish reading a paragraph and realize you can't remember a single thing it said. What does this most likely indicate?"
        options={[
          { text: "That you're simply not a 'reading person' and comprehension strategies won't help.", correct: false, explanation: "Comprehension strategies are learnable skills, not fixed traits — this reaction is a sign a specific strategy (usually comprehension monitoring) wasn't active, not a permanent limitation." },
          { text: "That your eyes moved across the words (decoding) without comprehension monitoring catching that understanding wasn't happening.", correct: true, explanation: "Correct. This is the classic fluency-without-comprehension gap — decoding the words accurately doesn't guarantee understanding, and the fix is noticing the gap sooner and re-reading with a specific question in mind." },
          { text: "That the paragraph was too difficult for any reader to understand.", correct: false, explanation: "Difficulty can play a role, but the more common cause — especially for a single paragraph — is reading on autopilot without monitoring for understanding, not the text being unreadable." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Previewing and predicting before reading a textbook section (baseline case)</h3>
      <div className="prose-p">
      Before reading a new section titled &quot;The Water Cycle,&quot; a strategic reader looks at the heading, scans any bolded terms or diagrams, and asks: &quot;What do I already know about how water moves through the environment, and what is this section probably going to cover?&quot; This takes fifteen seconds but does real work — it activates relevant background knowledge (evaporation, rain, rivers) and sets up expectations that make the incoming information easier to slot into place, rather than arriving as a stream of disconnected new facts.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Catching a comprehension breakdown mid-paragraph (variation / edge case)</h3>
      <div className="prose-p">
      Partway through a dense paragraph about a historical treaty, a reader notices they can no longer say what the paragraph is actually claiming — the sentences are still &quot;making sense&quot; grammatically, but the overall point has slipped away. A strategic reader stops right there instead of pushing on, re-reads the last two or three sentences, and asks a specific question: &quot;What is this paragraph trying to tell me?&quot; This targeted re-reading with a question in mind is far more effective than vaguely re-reading the whole page, because it isolates exactly where understanding broke rather than repeating the same passive pass that failed the first time.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Summarizing after reading a news article (real-world / applied case)</h3>
      <div className="prose-p">
      After reading a news article, closing the tab and trying to state its main point in one sentence — without looking back at the text — is a fast, practical comprehension check anyone can use daily. If the one-sentence summary is vague (&quot;it was about the economy&quot;) rather than specific (&quot;inflation slowed for the third month in a row, but housing costs kept rising&quot;), that&apos;s a signal comprehension was shallower than it felt while reading. This is the same summarizing strategy taught for schoolwork, applied to something as ordinary as scrolling the news.
      </div>

      <QuickCheck
        question="Which of these is the most effective way to recover when you realize you've stopped understanding a paragraph?"
        options={[
          { text: "Keep reading forward — understanding usually catches up on its own.", correct: false, explanation: "Reading on rarely fixes a comprehension break; it usually compounds it, since each new sentence builds on ground you've already lost." },
          { text: "Stop, re-read the specific sentences where understanding broke down, and ask a targeted question about what the passage is claiming.", correct: true, explanation: "Correct. Targeted re-reading with a specific question ('what is this paragraph telling me?') is more effective than reading on or vaguely skimming back over the whole page." },
          { text: "Re-read the entire chapter from the beginning.", correct: false, explanation: "This is inefficient and usually unnecessary — the break happened at a specific point, so targeted re-reading of that point is a far faster fix than restarting the whole chapter." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating reading speed as the same thing as comprehension.", fix: "Slow down deliberately on dense or unfamiliar material — fast, accurate word recognition doesn't guarantee the meaning is actually landing." },
          { mistake: "Reading passively, letting your eyes move across the page without ever checking whether you understood what you just read.", fix: "Build in short, regular comprehension checks — pause after a section and try to state its main point without looking back." },
          { mistake: "Re-reading an entire passage top to bottom when comprehension breaks down, instead of finding the specific spot where it broke.", fix: "Re-read narrowly, starting from where things stopped making sense, with a specific question in mind about what that part is claiming." },
        ]}
      />
      <MisconceptionCallout
        myth="Strong readers understand a passage perfectly on the first pass, without ever pausing, re-reading, or feeling confused."
        reality={<p>Skilled readers pause, re-read, and self-correct constantly — the difference isn&apos;t that they never lose the thread, it&apos;s that they notice quickly when they have and know exactly what to do about it. Comprehension monitoring is an active, ongoing strategy used by strong readers, not a sign that a reader is behind. A reader who never pauses or re-reads dense material is often not comprehending less obviously, not comprehending more successfully.</p>}
      />

      <QuickCheck
        question="A student reads an entire chapter quickly and confidently, then can't answer basic questions about it afterward. What's the most likely explanation?"
        options={[
          { text: "The questions were unfair, since the student clearly read the whole chapter.", correct: false, explanation: "Finishing a text isn't the same as comprehending it — reading speed and confidence don't reliably indicate whether monitoring and understanding were actually happening." },
          { text: "The student likely read without actively monitoring comprehension — moving through the text without pausing, questioning, or checking understanding along the way.", correct: true, explanation: "Correct. This is the classic fluent-but-not-comprehending pattern — confident, quick reading with no active monitoring strategy running underneath it." },
          { text: "The student probably has a permanent reading disability.", correct: false, explanation: "This pattern is common and usually reflects a missing strategy (comprehension monitoring), not a fixed disability — it's directly addressable by changing how the reading is done." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you open a new chapter or article, spend fifteen seconds previewing headings and predicting what it will cover before you start reading line by line.",
          "Notice the next moment you catch yourself 'reading' without absorbing anything — that's comprehension monitoring working; use it as a cue to stop and re-read narrowly.",
          "After finishing something you've read today, try stating its main point in one specific sentence without looking back at the text.",
          "When a summary comes out vague, treat that as useful information about where your understanding was shallow, not a reason to feel discouraged.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the best reading comprehension strategies?", answer: "Previewing before reading, predicting what's coming, monitoring your own understanding as you go, and summarizing in your own words afterward. Comprehension monitoring — noticing when understanding breaks down and re-reading narrowly to fix it — is generally considered the most impactful single strategy." },
          { question: "Why do I forget what I just read?", answer: "Usually because reading happened without active comprehension monitoring — the eyes moved across the words, but no strategy was checking whether meaning was actually being built and retained. Pausing periodically to summarize what you just read fixes this." },
          { question: "How can I improve reading comprehension as an adult?", answer: "The same core strategies used in schools work for adults: preview before reading, ask yourself questions while reading, notice when comprehension slips and re-read that specific spot, and summarize afterward. These are habits that improve with deliberate practice at any age." },
          { question: "What is the difference between reading fluency and reading comprehension?", answer: "Fluency is reading words accurately and at a reasonable pace. Comprehension is understanding what those words mean. They're related but separate skills — a reader can be fluent without comprehending well, which is why comprehension needs its own dedicated strategies rather than relying on fluency alone." },
          { question: "What is comprehension monitoring?", answer: "The ongoing habit of checking, while reading, whether what you're reading is actually making sense — and stopping to fix it (through re-reading or slowing down) the moment it isn't, instead of continuing to read regardless." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
