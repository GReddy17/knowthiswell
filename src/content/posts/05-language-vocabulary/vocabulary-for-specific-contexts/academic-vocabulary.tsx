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
  title: "Academic Vocabulary",
  category: "language-vocabulary",
  order: 47,
  subtopic: "vocabulary-for-specific-contexts",
  tags: ["academic vocabulary", "academic word list", "hedging language", "essay writing", "research writing"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Academic vocabulary isn't just 'fancier' words — hedging terms like 'suggests' versus 'proves,' or 'correlates with' versus 'causes,' mark real, substantively different claims.",
  summary: "Academic vocabulary is a specific register built around precision and caution — general terms shared across disciplines (like 'analyze' or 'hypothesis'), discipline-specific technical terms, and hedging language that carefully distinguishes what evidence actually shows from what it merely suggests.",
  sources: [
    { label: "Academic Word List — Te Herenga Waka, Victoria University of Wellington", url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist" },
    { label: "Purdue Online Writing Lab — Academic Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html" },
    { label: "Merriam-Webster — Dictionary", url: "https://www.merriam-webster.com/" },
  ],
  seeAlso: [
    "language-vocabulary/vocabulary-for-specific-contexts/business-and-professional-vocabulary",
    "language-vocabulary/writing-skills/essay-writing-structure",
    "language-vocabulary/grammar-foundations/active-vs-passive-voice",
  ],
  glossary: [
    { term: "Academic Word List (AWL)", definition: "A list of 570 word families (e.g. 'analyze,' 'concept,' 'significant') developed by linguist Averil Coxhead in 2000, identified as frequently appearing across academic texts from many different disciplines." },
    { term: "Hedging language", definition: "Cautious phrasing ('suggests,' 'appears to,' 'may indicate') used in academic writing to avoid overstating what evidence actually supports — a deliberate precision tool, not a sign of weak or uncertain writing." },
    { term: "Nominalization", definition: "Turning a verb or adjective into an abstract noun (e.g. 'implement' becoming 'the implementation of') — common in academic writing, useful in moderation but can make prose needlessly dense if overused." },
    { term: "Correlation versus causation", definition: "The distinction between two variables changing together (correlation) and one variable actually causing the change in the other (causation) — a foundational academic distinction, since correlation alone never proves causation." },
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
          "Academic vocabulary splits into two layers: general terms shared across disciplines ('analyze,' 'hypothesis,' 'significant') and discipline-specific technical terms ('mitochondria,' 'syntax') — the general layer is what the Academic Word List (AWL) specifically catalogs.",
          "The AWL is a real, research-based list of 570 word families, developed by linguist Averil Coxhead in 2000, identified because they appear consistently across academic texts from many different fields.",
          "Hedging language ('suggests' instead of 'proves,' 'correlates with' instead of 'causes') isn't vague or weak writing — it marks a real, substantively different claim about what evidence actually shows.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Academic vocabulary is the specialized language used in essays, research papers, and classroom instruction — words like &quot;analyze,&quot; &quot;evaluate,&quot; &quot;significant,&quot; and &quot;hypothesis.&quot; A lot of it falls into a category linguists call general academic vocabulary: words that show up constantly across totally different subjects, from history essays to biology lab reports, because they describe the process of academic thinking itself (analyzing, comparing, concluding) rather than the content of any one field. This is different from technical vocabulary specific to one discipline, like &quot;photosynthesis&quot; in biology or &quot;syntax&quot; in linguistics, which only makes sense within that particular subject.</div>}
        detailed={<div className="prose-p">The clearest evidence that general academic vocabulary is a real, identifiable category — not just &quot;fancy words&quot; — is the <TermLink href="/language-vocabulary/vocabulary-for-specific-contexts/academic-vocabulary">Academic Word List</TermLink> (AWL), developed by applied linguist Averil Coxhead at Victoria University of Wellington in 2000. Coxhead built the list by analyzing a large corpus of academic texts across multiple disciplines and identifying 570 word families that appeared frequently throughout, but weren&apos;t already part of the most common 2,000 general-English words. Beyond vocabulary choice, academic writing relies heavily on <TermLink href="/language-vocabulary/vocabulary-for-specific-contexts/academic-vocabulary">hedging language</TermLink> — words and phrases like &quot;suggests,&quot; &quot;appears to,&quot; &quot;tends to,&quot; and &quot;may indicate&quot; — which exist specifically to avoid overstating what evidence supports. This matters because &quot;correlates with&quot; and &quot;causes&quot; are not interchangeable: a study can show two things reliably occur together (correlation) without proving one causes the other (causation), and academic vocabulary is built to let a writer make exactly the claim the evidence supports, no more and no less.</div>}
      />
      <FootnoteAside>The Academic Word List&apos;s 570 word families cover roughly 10% of the words in a typical academic text — which sounds small, but combined with the 2,000 most common general-English words (which cover about 80% of everyday written text), knowing both lists gives a reader recognition of around 90% of the words in most academic writing, according to Coxhead&apos;s own research.</FootnoteAside>
      <p>
      That 90% coverage figure is exactly why the AWL became such a widely used tool in university-preparation and English-language-learning programs — it&apos;s a genuinely efficient shortcut to academic reading comprehension, not a randomly assembled vocabulary list.
      </p>

      <QuickCheck
        question="What specifically distinguishes 'general academic vocabulary' (like 'analyze' or 'hypothesis') from discipline-specific technical vocabulary (like 'mitochondria' or 'syntax')?"
        options={[
          { text: "General academic vocabulary is easier and more common in everyday speech than technical vocabulary.", correct: false, explanation: "This isn't the actual distinction — both types are more specialized than everyday conversational vocabulary. The real difference is about which academic fields each type appears in." },
          { text: "General academic vocabulary appears consistently across many different academic disciplines, while technical vocabulary is specific to just one field or subject.", correct: true, explanation: "Correct. Terms like 'analyze' or 'significant' show up in history, biology, and economics writing alike, while a term like 'mitochondria' is meaningful only within biology — this is exactly the distinction the Academic Word List is built around." },
          { text: "General academic vocabulary is only used in spoken lectures, while technical vocabulary only appears in written papers.", correct: false, explanation: "Both types of vocabulary appear in speech and writing — the distinction isn't about the medium, it's about whether the term is shared across disciplines or specific to one field." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: General Academic Word List terms and the job each one does (baseline case)</h3>
      <div className="prose-p">
      &quot;Analyze&quot; (break something down into its parts to understand it), &quot;evaluate&quot; (judge the value or quality of something using criteria), and &quot;synthesize&quot; (combine separate pieces of information into a new whole) are all AWL terms that describe distinct academic thinking tasks — an essay prompt that says &quot;analyze&quot; is asking for something genuinely different from one that says &quot;evaluate,&quot; even though a student might casually treat both as just meaning &quot;write about.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: General academic terms versus discipline-specific technical terms (variation / exception case)</h3>
      <div className="prose-p">
      &quot;Hypothesis&quot; is a general academic term — it&apos;s used the same way in a biology experiment, a psychology study, and a history research question, always meaning a testable, proposed explanation. &quot;Codon&quot; (a specific sequence of three nucleotides that codes for an amino acid) only means something within biology and genetics — it&apos;s technical vocabulary specific to one field, not part of the shared academic-thinking vocabulary the AWL catalogs. A strong academic writer needs both kinds of vocabulary, but they function differently: general terms carry across any subject, technical terms only work within their own field.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hedging language in a real research summary sentence (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;The data suggest a link between the two variables&quot; and &quot;the data prove the two variables are linked&quot; are not interchangeable, even though they sound similar. &quot;Suggest&quot; accurately reflects that a study found a pattern (correlation) without necessarily establishing that one variable causes the other. &quot;Prove&quot; makes a much stronger claim that most single studies genuinely can&apos;t support — actual causation typically requires controlled experiments, ruling out other explanations, and often multiple independent studies. Recognizing this distinction is directly useful outside of school too — it&apos;s exactly the kind of overclaiming that shows up in exaggerated news headlines about a single study.
      </div>

      <QuickCheck
        question="A news headline says 'Study Proves Coffee Causes Longer Life.' What should a careful reader immediately want to check?"
        options={[
          { text: "Nothing — 'proves' and 'causes' are standard, careful academic language for describing any study's findings.", correct: false, explanation: "'Proves' and 'causes' are strong claims that most single studies can't actually support — a careful reader should be skeptical of this exact kind of overclaiming headline." },
          { text: "Whether the underlying study actually demonstrated causation (e.g. a controlled experiment) or only found a correlation, which headlines often overstate as 'proof' or 'causes.'", correct: true, explanation: "Correct. Many studies behind headlines like this only show correlation (coffee drinkers happen to live longer, for various possible reasons) without establishing that coffee itself causes it — hedging language in the original study is often lost in translation to a headline." },
          { text: "Whether the headline used British or American spelling conventions.", correct: false, explanation: "Spelling convention has nothing to do with the substantive issue here — the real question is whether the study's evidence actually supports a causal claim or only a correlational one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating academic vocabulary as interchangeable with 'big words' or synonyms chosen just to sound sophisticated.", fix: "General academic vocabulary should describe a specific academic task or concept precisely (like 'analyze' versus 'evaluate') — swap in a plain word if the academic term isn't adding real precision." },
          { mistake: "Using 'proves' or 'causes' when a study or data set only shows a correlation.", fix: "Use hedging language like 'suggests,' 'is associated with,' or 'correlates with' unless the evidence specifically supports a causal claim." },
          { mistake: "Overusing nominalizations ('the implementation of the plan was conducted') instead of direct verbs ('the team implemented the plan').", fix: "Use nominalizations sparingly and only where they genuinely improve clarity or flow — overuse makes academic writing needlessly dense rather than more precise." },
        ]}
      />
      <MisconceptionCallout
        myth="Academic vocabulary is just 'fancier' synonyms for everyday words, with no real functional difference in meaning."
        reality={<p>Some academic vocabulary genuinely is just a more formal-sounding synonym — but a significant part of it exists to make distinctions everyday language blurs together. &quot;Correlates with&quot; and &quot;causes&quot; describe fundamentally different claims about evidence, not stylistic variants of the same idea. &quot;Suggests&quot; versus &quot;proves&quot; marks a real difference in how confident a claim is allowed to be given the evidence behind it. Treating all academic vocabulary as interchangeable dressing misses that some of it is doing genuine precision work — protecting against overstating what research actually shows.</p>}
      />

      <QuickCheck
        question="Why does academic writing generally prefer 'the data suggest' over 'the data prove,' even when the finding seems strong?"
        options={[
          { text: "Because academic writers are trained to sound uncertain and modest regardless of how strong the evidence actually is.", correct: false, explanation: "It's not about sounding modest for its own sake — hedging language is a precision tool, matching the strength of a claim to what the evidence actually supports, not weakening every claim automatically." },
          { text: "Because 'suggest' and 'prove' make genuinely different claims about the evidence — most individual studies show correlation or a pattern, not the kind of airtight causation 'prove' implies.", correct: true, explanation: "Correct. This is exactly why hedging vocabulary matters — it's not vague filler, it's a deliberate way to avoid claiming more than the evidence supports." },
          { text: "Because 'prove' is grammatically incorrect in academic writing and should never be used under any circumstances.", correct: false, explanation: "'Prove' isn't grammatically wrong — it's used correctly when evidence genuinely supports it (such as in formal mathematical or logical proofs). The issue is using it for claims the evidence doesn't actually establish." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time an essay prompt uses a term like 'analyze' or 'evaluate,' pause and identify exactly what task that word is asking for before you start writing.",
          "When reading a news summary of a study, check whether the original claim was about correlation or causation before accepting the headline's framing.",
          "In your own academic writing, replace an overstated 'proves' or 'causes' with an accurate 'suggests' or 'is associated with' where the evidence only supports that.",
          "Read the entry on Business & Professional Vocabulary next to see the same precise-term-versus-filler distinction show up in a different professional register.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Academic Word List?", answer: "A list of 570 word families, developed by linguist Averil Coxhead in 2000, identified because they appear frequently across academic texts from many different disciplines, distinct from both everyday vocabulary and field-specific technical terms." },
          { question: "What is the difference between academic vocabulary and technical or discipline-specific vocabulary?", answer: "General academic vocabulary (like 'analyze' or 'hypothesis') appears consistently across many academic fields. Technical vocabulary (like 'mitochondria' or 'syntax') is specific to one discipline and only makes sense within it." },
          { question: "Why do academic papers use hedging language like 'suggests' instead of 'proves'?", answer: "Because it's more accurate — most individual studies demonstrate a correlation or pattern, not the kind of definitive causation 'proves' implies. Hedging language matches the claim's strength to what the evidence actually supports." },
          { question: "What does 'correlation is not causation' mean?", answer: "It means two things happening together (correlation) doesn't by itself prove one causes the other (causation) — there could be a third factor causing both, or the relationship could be coincidental. Establishing causation usually requires controlled experiments or additional evidence." },
          { question: "How can I improve my academic vocabulary for essay writing?", answer: "Focus on general academic terms that appear across disciplines (the Academic Word List is a good starting resource), learn precise task words like 'analyze' versus 'evaluate,' and practice using hedging language accurately rather than defaulting to overstated claims." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
