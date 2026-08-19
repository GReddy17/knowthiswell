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
  title: "Essay Writing Structure",
  category: "language-vocabulary",
  order: 16,
  subtopic: "writing-skills",
  tags: ["essay writing", "essay structure", "thesis statement", "five-paragraph essay"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How an essay's introduction, body paragraphs, and conclusion actually work together — built around a thesis statement, not just a length requirement.",
  summary: "A standard essay is built around a thesis statement introduced early, developed across body paragraphs that each support it with one point and evidence, and closed with a conclusion that restates the argument and its broader significance.",
  sources: [
    { label: "Purdue Online Writing Lab — Essay Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/index.html" },
    { label: "Purdue Online Writing Lab — Tips and Examples for Writing Thesis Statements", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/thesis_statement_tips.html" },
    { label: "Britannica — Essay (literary genre)", url: "https://www.britannica.com/art/essay" },
  ],
  seeAlso: [
    "language-vocabulary/paragraph-writing-basics",
    "language-vocabulary/editing-and-proofreading-basics",
    "language-vocabulary/sentence-structure-basics",
  ],
  glossary: [
    { term: "Thesis statement", definition: "The sentence, usually at the end of the introduction, that states the essay's central argument or claim." },
    { term: "Five-paragraph essay", definition: "A common teaching structure — introduction, three body paragraphs, conclusion — useful as scaffolding for beginners but not the only valid essay shape." },
    { term: "Counterargument", definition: "An opposing viewpoint the writer acknowledges and responds to, used to strengthen a persuasive essay's credibility." },
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
          "A standard essay has three structural jobs: an introduction that states a clear thesis, body paragraphs that each support that thesis with one point and evidence, and a conclusion that ties it together.",
          "The \"five-paragraph essay\" is a teaching scaffold for beginners, not a fixed rule — real essays can have as many body paragraphs as the argument genuinely needs.",
          "A strong essay is defined by how well-organized and well-supported its argument is, not by its word count — padding a thin argument with extra words weakens it rather than strengthening it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A standard essay has three parts: an introduction that states the main argument (the <TermLink href="/language-vocabulary/essay-writing-structure">thesis statement</TermLink>), body paragraphs that each back up that argument with one point and some evidence, and a conclusion that wraps everything up. The classic version taught in school is the &quot;five-paragraph essay&quot; — one intro, three body paragraphs, one conclusion — which is a useful training structure, not a strict requirement for every essay you&apos;ll ever write.</div>}
        detailed={<div className="prose-p">The <TermLink href="/language-vocabulary/essay-writing-structure">thesis statement</TermLink> is the load-bearing sentence of the whole essay — everything else exists to support, develop, or defend it, which is why it&apos;s worth getting specific and arguable rather than vague or purely factual (&quot;Social media affects teenagers&quot; is too broad; &quot;Algorithm-driven social media feeds increase teenage anxiety by removing users&apos; control over what they see&quot; is an actual argument). Each body paragraph should function like a mini-essay of its own: a topic sentence connecting back to the thesis, evidence or examples, and analysis explaining how that evidence supports the argument — evidence without analysis just leaves the reader to make the connection themselves. Stronger essays, especially persuasive ones, often include a paragraph addressing a <TermLink href="/language-vocabulary/essay-writing-structure">counterargument</TermLink> — acknowledging the strongest objection to the thesis and responding to it — which paradoxically makes the essay more convincing, since it shows the writer has genuinely grappled with the other side rather than ignoring it. The five-paragraph structure works well for shorter, more contained arguments; longer or more complex essays routinely use more body paragraphs, different organizational patterns (point-by-point comparison instead of block comparison, for instance), or drop the rigid five-part shape entirely once the underlying skill — one point per paragraph, each supporting a central thesis — is solid.</div>}
      />
      <FootnoteAside>The essay as a literary form was pioneered by the 16th-century French writer Michel de Montaigne, who named it after the French verb &quot;essayer&quot; — &quot;to try&quot; or &quot;to attempt.&quot; His short, exploratory pieces were genuinely tentative attempts at examining a subject from multiple angles, not the tightly argued, thesis-proving essays taught in most schools today — a reminder that the form has always been broader than the five-paragraph template.</FootnoteAside>
      <p>
      With the thesis as the anchor and each paragraph&apos;s job clearly defined, essay structure becomes a matter of checking whether every part is actually doing its job — not a fixed word-count or paragraph-count target to hit.
      </p>

      <QuickCheck
        question="An essay states its topic — 'Renewable energy is important' — as its opening thesis. What's the main problem with this thesis statement?"
        options={[
          { text: "Nothing — it clearly tells the reader what the essay is about.", correct: false, explanation: "It states a topic, but not an arguable claim about that topic — there's nothing here a reader could disagree with or that the rest of the essay needs to prove." },
          { text: "It's too broad and not actually arguable — it states a topic rather than making a specific claim.", correct: true, explanation: "Correct. A stronger thesis makes a specific, debatable claim, like: 'Government subsidies are the fastest realistic path to reducing a country's reliance on fossil fuels within a decade.'" },
          { text: "It's grammatically incorrect.", correct: false, explanation: "The sentence is grammatically fine — the issue is that it's a vague statement of topic, not a specific, arguable thesis." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard five-paragraph outline (baseline case)</h3>
      <div className="prose-p">
      Thesis: &quot;School start times for teenagers should shift later because early starts conflict with adolescent sleep biology.&quot; Introduction: hooks with a brief statistic on teen sleep loss, ends with the thesis. Body ¶1: evidence on adolescent circadian rhythm shifting later during puberty. Body ¶2: evidence linking early start times to measurable academic and mood effects. Body ¶3: addresses the counterargument (logistics, after-school activities, working parents&apos; schedules) and responds to it. Conclusion: restates the thesis and points to real districts that have already shifted start times successfully. Each paragraph does one clear job in support of the same central claim.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A longer essay that outgrows the five-paragraph shape (variation / exception)</h3>
      <div className="prose-p">
      A university-level essay comparing three different economic policies can&apos;t fairly compress each policy&apos;s evidence and counterargument into a single paragraph without losing depth. Instead, it might use two or three body paragraphs per policy — one presenting the policy&apos;s mechanism, one presenting evidence for its effectiveness, one addressing its strongest critique — resulting in seven or eight body paragraphs total. The organizing principle (thesis, supported point by point, addressed counterarguments, conclusion) hasn&apos;t changed; only the paragraph count has, because the argument genuinely needs more space to be made well.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The same structure at work outside school essays (real-world / applied case)</h3>
      <div className="prose-p">
      A structured work proposal — &quot;Why we should switch project management tools&quot; — uses the identical underlying shape: an opening that states the recommendation clearly (the thesis), sections that each support it with one piece of evidence (cost comparison, team feedback, a pilot test result), a section addressing the obvious objection (migration cost and disruption), and a closing summary. The five-paragraph essay isn&apos;t really a school-only exercise — it&apos;s practice for the general skill of building a clear, well-supported argument that shows up constantly in reports, proposals, and even structured long-form articles.
      </div>

      <QuickCheck
        question="A body paragraph presents a strong statistic but never explains how it supports the essay's thesis. What's missing?"
        options={[
          { text: "A stronger topic sentence.", correct: false, explanation: "A topic sentence could help, but the described gap is specifically that the evidence is never connected back to the argument — that's a missing analysis step, not a topic-sentence problem alone." },
          { text: "Analysis connecting the evidence to the thesis — evidence alone doesn't make the argument for the reader.", correct: true, explanation: "Correct. A body paragraph needs to explain why the evidence matters and how it supports the claim, not just present the evidence and assume the connection is obvious." },
          { text: "A counterargument.", correct: false, explanation: "A counterargument strengthens persuasive essays generally, but it doesn't fix this specific paragraph's core problem: the evidence it already has isn't explained." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Standard essay structure: introduction, body paragraphs, conclusion"
        type="flow"
        svgSrc="/diagrams/05-essay-writing-structure-diagram.svg"
        altText="Diagram of standard essay structure: an introduction with a hook and thesis statement flows into three body paragraphs, each with a topic sentence, evidence, and analysis, which converge into a conclusion that restates the thesis and its broader significance."
      />
      <p>
      Notice that every body paragraph connects independently back up to the introduction&apos;s thesis and down into the conclusion — that&apos;s the actual structural test for whether a paragraph belongs in the essay, regardless of how many body paragraphs there end up being.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing a vague, unarguable thesis statement that only names a topic.", fix: "Make the thesis a specific, debatable claim — something a reasonable reader could disagree with — not just a subject announcement." },
          { mistake: "Padding an essay with extra words or repeated points to reach a length or word-count requirement.", fix: "Add genuine new evidence, analysis, or a counterargument instead — length should come from real development, not restating the same point differently." },
          { mistake: "Presenting evidence in a body paragraph without explaining how it supports the thesis.", fix: "Follow every piece of evidence with a sentence or two of analysis connecting it explicitly back to the argument." },
        ]}
      />
      <MisconceptionCallout
        myth="A good essay is defined mainly by its length — longer essays are automatically stronger or better-graded."
        reality={<p>Essay quality comes from how clearly the thesis is argued and how well each paragraph supports it — not from word count. A tightly argued, well-organized short essay routinely outperforms a long one padded with repetition, vague generalities, or evidence that&apos;s never actually connected back to the thesis. Most grading rubrics and style guides explicitly reward clarity and support over sheer length, and padding a thin argument usually makes its weaknesses more visible, not less.</p>}
      />

      <QuickCheck
        question={"A writer, told their essay needs \"more development,\" responds by adding several sentences that restate the thesis in slightly different words throughout the essay. Does this address the feedback?"}
        options={[
          { text: "Yes — more sentences means more development.", correct: false, explanation: "Restating the same claim in different words adds length but no new evidence or analysis — it isn't genuine development of the argument." },
          { text: "No — genuine development means new evidence, examples, or analysis, not repetition of the same claim.", correct: true, explanation: "Correct. \"Development\" feedback is almost always asking for more support for a point, not more words restating the point itself." },
          { text: "Yes, as long as the essay reaches the assigned word count.", correct: false, explanation: "Hitting a word count with repeated content doesn't strengthen the argument — a shorter essay with genuine analysis and evidence is stronger writing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before drafting body paragraphs, write your thesis as a single, specific, arguable sentence and check it isn't just naming a topic.",
          "For each body paragraph you write, confirm it has a topic sentence, evidence, and analysis connecting the evidence back to the thesis — not just evidence alone.",
          "If you're tempted to add length, add a counterargument paragraph or new evidence instead of restating an existing point.",
          "Read the related entry on Paragraph Writing Basics for how to build the individual paragraphs an essay is made of.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the basic structure of an essay?", answer: "An introduction that states a thesis, body paragraphs that each support the thesis with a point and evidence, and a conclusion that restates the argument and its broader significance." },
          { question: "Does an essay have to be five paragraphs?", answer: "No. The five-paragraph essay is a common teaching structure for beginners, but real essays use as many body paragraphs as the argument genuinely needs — longer or more complex arguments often use more." },
          { question: "What makes a good thesis statement?", answer: "A specific, arguable claim rather than a vague statement of topic. A reader should be able to disagree with a strong thesis; a weak one just announces the subject without taking a position." },
          { question: "How do you write a strong conclusion for an essay?", answer: "Restate the thesis in light of the evidence presented (not word-for-word from the introduction), and briefly explain the argument's broader significance — why it matters beyond the essay itself." },
          { question: "Should an essay include a counterargument?", answer: "For persuasive essays, generally yes. Acknowledging and responding to the strongest objection to your thesis makes the argument more credible, since it shows the writer has considered the other side rather than ignoring it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
