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
  title: "How to Tell If Content Was AI-Generated",
  category: "ai-future-tech-literacy",
  order: 10,
  subtopic: "ai-fundamentals",
  tags: ["ai detection", "ai-generated content", "ai detectors", "content credentials", "watermarking", "deepfakes", "media literacy"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 81, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "No tool can reliably prove text was written by AI. Detectors guess from word patterns and wrongly flag real people. Provenance, sources and checkable facts tell you far more.",
  summary: "Telling whether content was AI-generated is a question of evidence, not a single test. AI text detectors estimate how predictable the wording is, which makes them probabilistic: OpenAI withdrew its own classifier in 2023 for low accuracy, and a 2023 study in Patterns found popular detectors flagged most essays by non-native English writers as AI-written. Stronger evidence comes from provenance (C2PA Content Credentials and vendor watermarks such as Google's SynthID), from the source and context of a post, and from checking whether facts, quotes and citations actually exist. Style tells such as smooth, generic phrasing are weak hints, because people write that way too and AI output can be edited. The practical approach is to stack several independent signals and treat any detector score as a lead, never as proof.",
  sources: [
    { label: "NIST AI 100-4 — Reducing Risks Posed by Synthetic Content: An Overview of Technical Approaches to Digital Content Transparency (2024)", url: "https://doi.org/10.6028/NIST.AI.100-4" },
    { label: "OpenAI — New AI classifier for indicating AI-written text (withdrawal note, July 2023)", url: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/" },
    { label: "Liang, W. et al. (2023) — GPT detectors are biased against non-native English writers, Patterns 4(7)", url: "https://doi.org/10.1016/j.patter.2023.100779" },
    { label: "Kirchenbauer, J. et al. (2023) — A Watermark for Large Language Models, Proceedings of ICML 2023", url: "https://arxiv.org/abs/2301.10226" },
    { label: "Sadasivan, V. S. et al. (2023) — Can AI-Generated Text be Reliably Detected?", url: "https://arxiv.org/abs/2303.11156" },
    { label: "Coalition for Content Provenance and Authenticity (C2PA) — Technical specification and Content Credentials", url: "https://c2pa.org/" },
    { label: "Google DeepMind — SynthID", url: "https://deepmind.google/technologies/synthid/" },
  ],
  seeAlso: [
    "ai-future-tech-literacy/how-large-language-models-actually-work",
    "ai-future-tech-literacy/what-ai-hallucination-actually-means",
    "ai-future-tech-literacy/how-ai-image-generators-actually-create-pictures",
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
    "general-awareness-basics/how-fact-checking-organizations-work",
  ],
  glossary: [
    { term: "AI detector", definition: "A tool that estimates the probability that a piece of text or media was produced by an AI model, usually from statistical patterns rather than any hidden marker." },
    { term: "Perplexity", definition: "A measure of how surprising a text is to a language model. Low perplexity means each word was highly predictable, which many detectors treat as a sign of AI writing." },
    { term: "False positive", definition: "When a test flags something that isn't there, such as a detector labelling human writing as AI-generated." },
    { term: "Watermark (AI)", definition: "A signal deliberately embedded in AI output when it is generated, such as a statistical bias in word choice or an invisible pattern in pixels, that a matching tool can later detect." },
    { term: "Content Credentials (C2PA)", definition: "An open standard for attaching signed, tamper-evident records to a file describing how it was created and edited, including whether AI tools were used." },
    { term: "Provenance", definition: "The documented origin and history of a piece of content: who made it, with what, and how it changed along the way." },
    { term: "Base rate", definition: "How common something is in the group being tested. A low base rate means even an accurate test produces many false alarms." },
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
  {"question": "What does a typical AI text detector actually measure?", "difficulty": "easy", "options": [{"text": "How statistically predictable the wording is, compared with what a language model would write", "correct": true, "explanation": "Most detectors score predictability patterns, so their output is a probability, not proof."}, {"text": "A hidden signature that every AI model adds to its text", "correct": false, "explanation": "Only some systems add watermarks, and only their own tool can check them."}, {"text": "Which website the text was copied from", "correct": false, "explanation": "That's plagiarism checking, a different job."}]},
  {"question": "Why did OpenAI withdraw its own AI text classifier in July 2023?", "difficulty": "medium", "options": [{"text": "Its accuracy was too low", "correct": true, "explanation": "OpenAI reported it caught only 26% of AI-written text and wrongly flagged 9% of human text."}, {"text": "It was too accurate and embarrassed students", "correct": false, "explanation": "The stated reason was the opposite: low accuracy."}, {"text": "A court ordered it offline", "correct": false, "explanation": "There was no court order; OpenAI pulled it itself."}]},
  {"question": "What did Liang and colleagues (2023) find about GPT detectors and non-native English writers?", "difficulty": "medium", "options": [{"text": "Detectors flagged most of their genuine human essays as AI-generated", "correct": true, "explanation": "Simpler, more predictable phrasing looks 'AI-like' to perplexity-based tools, averaging about 61% false flags on TOEFL essays."}, {"text": "Detectors were more accurate on their writing", "correct": false, "explanation": "The study found the reverse."}, {"text": "Non-native writers couldn't use AI tools", "correct": false, "explanation": "The study was about detector errors on human writing."}]},
  {"question": "1,000 essays: 100 are AI-written. A detector catches 80% of AI essays and wrongly flags 5% of human ones. What share of flagged essays are actually human?", "difficulty": "hard", "options": [{"text": "About 36%", "correct": true, "explanation": "80 true flags plus 45 false flags (5% of 900) = 125; 45 ÷ 125 = 36%."}, {"text": "5%", "correct": false, "explanation": "5% is the false-positive rate among human essays, not the share of flags that are wrong."}, {"text": "20%", "correct": false, "explanation": "20% is the share of AI essays the detector misses."}]},
  {"question": "Which is the strongest evidence that an image came from an AI generator?", "difficulty": "medium", "options": [{"text": "Intact Content Credentials or a verified watermark stating an AI tool created it", "correct": true, "explanation": "Provenance is recorded at creation, so it beats guessing from the pixels."}, {"text": "The hands look slightly odd", "correct": false, "explanation": "Visual glitches are weak hints, and newer models make fewer of them."}, {"text": "The colors look too vivid", "correct": false, "explanation": "Editing filters and phone cameras do this too."}]},
  {"question": "Why doesn't missing Content Credentials prove an image is real?", "difficulty": "medium", "options": [{"text": "Most tools and platforms don't add them, and metadata is often stripped on upload or screenshot", "correct": true, "explanation": "Absence of provenance is absence of evidence, in either direction."}, {"text": "Real photos never carry metadata", "correct": false, "explanation": "Many cameras and phones write metadata; it can simply be lost later."}, {"text": "Only AI images can be screenshotted", "correct": false, "explanation": "Any image can be screenshotted, which is one way metadata disappears."}]},
  {"question": "What is a text watermark in the Kirchenbauer et al. (2023) sense?", "difficulty": "hard", "options": [{"text": "A hidden statistical bias toward certain words, added during generation and detectable with a key", "correct": true, "explanation": "The model favors a secret 'green list' of tokens, which a detector holding the key can count."}, {"text": "A visible logo stamped on the text", "correct": false, "explanation": "Text watermarks are invisible to readers."}, {"text": "A line of code appended to the end of the text", "correct": false, "explanation": "It's spread through word choice, not appended."}]},
  {"question": "An article quotes a 2021 study by name. What is the fastest useful check for AI fabrication?", "difficulty": "easy", "options": [{"text": "Search for the study and confirm it exists and says what is claimed", "correct": true, "explanation": "Invented citations are a well-documented AI failure, and they're checkable in minutes."}, {"text": "Paste the article into a detector", "correct": false, "explanation": "A detector score says nothing about whether the study is real."}, {"text": "Count how many times the word 'delve' appears", "correct": false, "explanation": "Word tells are weak and easy for both humans and editors to trigger or remove."}]},
  {"question": "Why can paraphrasing defeat many AI text detectors?", "difficulty": "hard", "options": [{"text": "Rewording changes the statistical patterns the detector relies on, while the meaning stays the same", "correct": true, "explanation": "Research such as Sadasivan et al. (2023) showed paraphrase tools sharply cut detection rates."}, {"text": "Paraphrased text is always human-written", "correct": false, "explanation": "An AI paraphraser can do the rewording."}, {"text": "Detectors refuse to scan edited text", "correct": false, "explanation": "They scan it; they just score it differently."}]},
  {"question": "What is the safest way to use an AI detector score at school or work?", "difficulty": "easy", "options": [{"text": "As a reason to look closer, alongside drafts, sources and a conversation, never as sole proof", "correct": true, "explanation": "A probabilistic score can't carry an accusation on its own."}, {"text": "As final proof if the score is above 90%", "correct": false, "explanation": "High scores still produce false positives, especially on formulaic writing."}, {"text": "Ignore it completely in every case", "correct": false, "explanation": "It can be a lead; it just isn't a verdict."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "No tool can reliably prove a piece of text was written by AI. Detectors measure how predictable the wording is, and plenty of real people write predictably.",
          "The strongest evidence is provenance: Content Credentials or a vendor watermark recorded when the content was made. Most content carries neither, so you usually fall back on source and facts.",
          "Stack independent checks: who posted it and where it came from, whether its facts and citations exist, and only then style hints. Treat any detector score as a lead, never a verdict.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of it like working out who baked a cake. If the bakery&apos;s label is still on the box, you know. If the box is gone, you can ask who brought it and check whether the ingredients list makes sense, but tasting it and saying &quot;this feels like a shop cake&quot; is a guess. AI content works the same way. A small but growing share of AI tools put a label on what they make: a signed record called Content Credentials, or an invisible watermark. When that label survives, it&apos;s strong evidence. Most of the time it doesn&apos;t, because screenshots, re-uploads and copy-paste strip it. Then you check the source and the facts. &quot;AI detector&quot; websites are the taste test: they look at how predictable the words are and give a percentage. That percentage is a guess, and it&apos;s wrong often enough that OpenAI pulled its own detector in 2023. The honest answer to &quot;was this AI?&quot; is often &quot;I can&apos;t prove it either way,&quot; and the more useful question is usually &quot;is this true, and who stands behind it?&quot;</div>}
        detailed={<div className="prose-p">A <TermLink href="/ai-future-tech-literacy/how-large-language-models-actually-work">large language model</TermLink> writes by repeatedly picking a likely next token. Text produced that way tends to have low <strong>perplexity</strong> (each word is unsurprising to a model) and low &quot;burstiness&quot; (sentence-to-sentence predictability varies little). Most detectors are classifiers built on those signals. The problem is overlap: formulaic human writing, such as lab reports, legal boilerplate or essays by people writing in a second language, also scores low. Liang et al. (2023) found seven popular detectors misclassified an average of about 61% of human-written TOEFL essays as AI-generated. Detection also degrades under editing: paraphrasing tools sharply cut detection rates in Sadasivan et al. (2023). Watermarking flips the approach. Instead of guessing afterwards, the generator embeds a signal while writing. Kirchenbauer et al. (2023) bias the model toward a pseudo-random &quot;green list&quot; of tokens chosen with a secret key, which a key-holder can later count; Google&apos;s SynthID does a similar thing for text, images, audio and video. A watermark only proves something if the tool that made the content added one, and heavy editing can weaken it. The C2PA standard takes a third route, <strong>provenance</strong>: a cryptographically signed manifest attached to the file, recording the tool and the edits. NIST AI 100-4 (2024) reviews all three and concludes none is sufficient alone. The edge case to remember: absence of a watermark or credential is not evidence of human authorship.</div>}
      />
      <FootnoteAside>Detector companies often quote accuracy above 99%. Those figures usually come from their own test sets of unedited AI text versus typical human text. Real-world text is messier: edited drafts, mixed human and AI writing, and writers whose style happens to be plain. Accuracy on a benchmark is not accuracy on your document.</FootnoteAside>

      <p>Images and video follow the same evidence order. Visual glitches such as warped hands or garbled signs were once reliable tells, but newer <TermLink href="/ai-future-tech-literacy/how-ai-image-generators-actually-create-pictures">image generators</TermLink> make far fewer of them, so a clean-looking image proves nothing. Checking where an image first appeared, with a reverse image search, usually tells you more.</p>

      <QuickCheck
        question="An AI detector says an essay is '94% likely AI'. What does that number actually tell you?"
        options={[
          { text: "The tool's estimate from wording patterns, which can be wrong for real human writing", correct: true, explanation: "Correct. It's a probability from a classifier, not a record of how the essay was made." },
          { text: "That 94% of the sentences were written by AI", correct: false, explanation: "The score is about the whole text's patterns, not a sentence-by-sentence count." },
          { text: "That the essay definitely used AI", correct: false, explanation: "No detector score is proof; false positives are well documented." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The numbers below are illustrative, chosen to show the arithmetic of testing. They are not measurements of any specific product.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A &quot;small&quot; error rate in one class (baseline case)</h3>
      <div className="prose-p">A teacher runs 300 essays through a detector advertised with a 1% false-positive rate. Even if every student wrote their own essay, the expected number of human essays flagged is 300 × 0.01 = <strong>3 students</strong>. Across a school running 30,000 essays a year, that&apos;s about 300 false flags. OpenAI&apos;s withdrawn classifier had a reported false-positive rate of 9%, which would mean 27 flagged students in that one class. A false-positive rate that sounds tiny becomes real people once you multiply by volume.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why most flags can be wrong (edge case)</h3>
      <div className="prose-p">Now take 1,000 essays where 100 really were written with AI. A detector catches 80% of those (80 essays) and wrongly flags 5% of the 900 human essays (45 essays). It raises 125 flags, and 45 ÷ 125 = <strong>36% of flags point at a human</strong>. Cut the false-positive rate to 1% and it&apos;s 9 out of 89 flags, about 10%. This is the <strong>base-rate</strong> effect: when the thing you&apos;re hunting for is uncommon, even a decent test produces a large share of false alarms. It&apos;s the same reason medical screening tests get a second, different test before anyone acts.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A viral photo (applied)</h3>
      <div className="prose-p">A dramatic photo of a flooded landmark is spreading. Step one: inspect it with a Content Credentials viewer such as the one linked from c2pa.org. If it carries a signed record saying an AI tool generated it, you have your answer. Here it has none, which is normal after a re-post. Step two: a reverse image search finds the earliest copy, posted two hours ago by an account that has shared other AI art, and no news outlet or local agency has published anything similar. Step three: the landmark&apos;s official webcam and local weather service show no flooding. Three independent checks agree, so you can say with confidence that it isn&apos;t a real event, even though no single test &quot;detected AI&quot;. That&apos;s <TermLink href="/general-awareness-basics/how-to-spot-misinformation-and-fake-news">lateral reading</TermLink>, and it works whether a fake was made with AI or with photo editing.</div>

      <QuickCheck
        question="A photo has no Content Credentials attached. What can you conclude?"
        options={[
          { text: "Nothing yet; most content lacks them and metadata is often stripped when re-shared", correct: true, explanation: "Correct. Move on to source and context checks." },
          { text: "It's definitely a real photograph", correct: false, explanation: "AI images without credentials are extremely common." },
          { text: "It's definitely AI-generated", correct: false, explanation: "Most real photos online don't carry credentials either." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The evidence ladder: which signals actually tell you something"
        type="flow"
        svgSrc="/diagrams/ai-future-tech-literacy-how-to-tell-if-content-was-ai-generated-flow.svg"
        altText="A five-rung evidence ladder from strongest to weakest. Rung 1, provenance: intact Content Credentials or a verified vendor watermark, strong but usually missing. Rung 2, source and context: who posted it first, found with reverse image search and lateral reading. Rung 3, checkable facts: do the quotes, studies and citations exist. Rung 4, style hints such as generic phrasing or visual glitches, weak because humans and edits trigger them too. Rung 5, detector scores, a probability that is a lead and never proof. A side note says to stack independent signals rather than trust any single one."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a detector percentage as proof.", fix: "Use it only as a reason to look closer. Ask for drafts, version history or a quick conversation about the work before drawing any conclusion." },
          { mistake: "Hunting for 'AI words' like 'delve' or 'tapestry'.", fix: "Word lists are weak tells: people use them, and anyone using AI can delete them. Check facts and sources instead." },
          { mistake: "Assuming no watermark means human-made.", fix: "Only some tools add watermarks, and only their own checker can read them. Absence tells you nothing." },
          { mistake: "Relying on visual glitches in images.", fix: "Newer generators rarely make the classic hand and text errors. Trace the image to its first appearance instead." },
        ]}
      />
      <MisconceptionCallout
        myth="AI detectors can tell you for certain whether something was written by AI."
        reality={<p>They can&apos;t. They estimate predictability, which overlaps heavily with plain human writing. OpenAI withdrew its own classifier in 2023 after it caught only about a quarter of AI text while flagging 9% of human text, and peer-reviewed research has shown detectors disproportionately flag non-native English writers. NIST&apos;s 2024 review treats detection as one imperfect signal among several.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before sharing something surprising, find its first appearance with a reverse image search or by searching a distinctive quote.",
          "Check one specific, checkable claim: a named study, a quote, a statistic. Confirm it exists and says what is claimed.",
          "Look for Content Credentials using a C2PA-compatible viewer when you have the original file.",
          "If you review others' work, set a rule that a detector score alone never triggers an accusation.",
          "Ask the better question: regardless of who or what wrote it, is it accurate and who is accountable for it?",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Are AI detectors accurate?", answer: "Not reliably enough to prove anything. They can be useful as a hint, but documented false positives, especially on formulaic writing and non-native English writers, mean a score should never be used as sole evidence." },
          { question: "How can you tell if an image is AI-generated?", answer: "Check for Content Credentials or a vendor watermark first, then trace where the image first appeared with a reverse image search and look for independent confirmation of what it shows. Visual glitches are now weak evidence." },
          { question: "Can teachers tell if you used ChatGPT?", answer: "They can't know for certain from the text alone. They usually look at a mix of signals: drafts and version history, whether the work matches your other writing, whether its sources exist, and whether you can explain it." },
          { question: "Do AI companies watermark their output?", answer: "Some do for some formats. Google's SynthID marks content from several of its models, and C2PA Content Credentials are being adopted by a number of tool makers and camera manufacturers. Coverage is far from universal, and a watermark can only be checked with the matching tool." },
          { question: "What is the most reliable way to check AI-generated text?", answer: "Verify its specific claims. AI text can contain invented quotes, studies and citations, and checking whether those exist is faster and more conclusive than analyzing writing style." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
