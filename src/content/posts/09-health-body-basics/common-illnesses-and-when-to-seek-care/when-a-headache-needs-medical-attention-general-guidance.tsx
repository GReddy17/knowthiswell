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
  title: "When a Headache Needs Medical Attention (General Guidance)",
  category: "health-body-basics",
  order: 12,
  subtopic: "common-illnesses-and-when-to-seek-care",
  tags: ["headache", "migraine", "warning signs", "when to see a doctor", "neurological symptoms"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Most headaches are common and not dangerous, but certain warning-sign combinations — sudden severe onset, neurological symptoms, or head injury — are consistently flagged by health agencies as reasons to seek urgent care.",
  summary: "The overwhelming majority of headaches are primary headaches (like tension headaches or migraines) that aren't signs of a serious underlying problem, but health agencies including the NHS and CDC consistently identify a specific set of warning-sign combinations — such as sudden severe onset ('worst headache of your life'), headache with neurological symptoms, or headache after a head injury — as reasons to seek urgent medical evaluation rather than self-manage.",
  sources: [
    { label: "NHS — Headaches", url: "https://www.nhs.uk/conditions/headaches/" },
    { label: "MedlinePlus (NIH) — Headache", url: "https://medlineplus.gov/headache.html" },
    { label: "CDC — Traumatic Brain Injury & Concussion", url: "https://www.cdc.gov/traumaticbraininjury/index.html" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "health-body-basics/when-to-see-a-doctor-vs-self-care-general-framework",
    "health-body-basics/understanding-fever-whats-actually-happening",
  ],
  glossary: [
    {"term":"Primary headache","definition":"A headache that is itself the main condition, not a symptom of another underlying disease — tension headaches and migraines are the two most common types."},
    {"term":"Secondary headache","definition":"A headache caused by an underlying condition (such as infection, injury, or a blood vessel problem) — the headache is a symptom, not the primary issue itself."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry is general health literacy, not medical advice or a diagnostic tool.</strong> It describes general warning-sign categories that health agencies flag as reasons to seek care — it cannot tell you what is causing a specific headache. If you experience any of the warning signs described below, seek medical attention.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Most headaches are 'primary' headaches (tension headaches, migraines) that aren't a sign of a dangerous underlying condition, according to the NHS.",
      "A specific set of warning signs — sudden severe onset, neurological symptoms (vision changes, weakness, confusion), fever with a stiff neck, or headache following a head injury — are consistently flagged by health agencies as reasons for urgent evaluation.",
      "The general principle isn't 'headaches are dangerous' or 'headaches are always harmless' — it's recognizing the specific warning-sign patterns that shift a headache from typical to urgent.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Health agencies broadly separate headaches into two categories. A <TermLink href="/health-body-basics/when-a-headache-needs-medical-attention-general-guidance">primary headache</TermLink> — like a typical tension headache or migraine — is the condition itself, and the large majority of headaches fall into this category. A <TermLink href="/health-body-basics/when-a-headache-needs-medical-attention-general-guidance">secondary headache</TermLink> is a symptom of something else going on, such as an infection, injury, or less commonly, a more serious underlying problem. The practical question isn&apos;t which category a headache belongs to (that requires a doctor) — it&apos;s whether specific warning signs are present that health agencies say warrant urgent evaluation regardless.</div>}
      detailed={<div className="prose-p">The NHS and similar health agencies publish specific warning-sign lists precisely because the vast majority of headaches are primary and not dangerous, which means a blanket &quot;see a doctor for every headache&quot; rule would be both impractical and not genuinely useful for identifying the rare cases that matter. Instead, guidance focuses on recognizable red-flag combinations: sudden, severe onset often described as &quot;the worst headache of your life&quot;; headache accompanied by neurological symptoms like vision changes, one-sided weakness, difficulty speaking, or confusion; headache with fever and a stiff neck; headache following a head injury; and a new pattern of severe headaches in someone over 50 who hasn&apos;t had them before. These specific combinations, not headache pain intensity alone, are what shift a headache into urgent-care territory according to NHS and NIH materials.</div>}
      />
      <FootnoteAside>The NHS specifically flags a sudden, severe headache that reaches maximum intensity within seconds to minutes — sometimes described as a &quot;thunderclap headache&quot; — as a distinct warning pattern worth urgent evaluation, since it differs meaningfully from the gradual buildup typical of common tension headaches or migraines.</FootnoteAside>

      <p>
      None of this is meant to create anxiety about ordinary headaches — it&apos;s meant to make the specific warning-sign combinations easy to recognize, since they&apos;re what actually changes the urgency, not headache pain level by itself.
      </p>

      <QuickCheck
      question="Someone has a headache that feels intense but developed gradually over several hours, similar to headaches they've had many times before, with no other new symptoms. How does this compare to the NHS's described warning-sign pattern?"
      options={[
      { text: "This matches the warning pattern closely, since intense pain alone is the main red flag", correct: false, explanation: "Pain intensity by itself isn't the primary warning signal in NHS guidance — sudden onset, unusual pattern compared to the person's normal headaches, and specific accompanying symptoms are what matter more." },
      { text: "This does not closely match the described warning-sign pattern — gradual onset and a familiar pattern (similar to past headaches, without new neurological symptoms) is more consistent with a typical primary headache, though ongoing concerns are always worth discussing with a doctor", correct: true, explanation: "Correct. The warning signs are specifically about sudden onset, unfamiliar new patterns, and accompanying neurological symptoms — a familiar, gradually-building headache doesn't match that description." },
      { text: "It's impossible to say anything useful without more medical training", correct: false, explanation: "The described general pattern-matching (gradual vs. sudden onset, familiar vs. new pattern) is exactly the kind of general-literacy information health agencies publish for the public to use as a rough guide." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical primary headache pattern (baseline case)</h3>
      <div className="prose-p">
      A dull, gradual-onset headache with mild-to-moderate pain, possibly linked to stress, poor sleep, or skipped meals, that resolves with rest, hydration, or an appropriate over-the-counter pain reliever taken per label instructions — this general pattern is consistent with a common tension headache, one of the most frequent primary headache types described by the NHS.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A new headache pattern that itself is a warning sign (edge case / variation)</h3>
      <div className="prose-p">
      Someone over 50 who has never had significant headaches begins experiencing new, severe headaches for the first time. Even without other dramatic symptoms, the NHS specifically flags &quot;a new headache pattern starting after age 50&quot; as its own warning sign worth medical evaluation — illustrating that the warning-sign list isn&apos;t only about single dramatic symptoms, but also about a headache pattern that&apos;s genuinely new and unexplained for that individual.
      </div>

      <QuickCheck
      question="Why would health agencies flag 'a new pattern of headaches starting after age 50' as a warning sign, even without other dramatic symptoms present?"
      options={[
      { text: "Because headaches are always dangerous after age 50", correct: false, explanation: "This overstates the guidance — most headaches at any age remain primary and non-dangerous. The flag is specifically about a genuinely new pattern developing later in life, not headaches in general at that age." },
      { text: "Because a distinctly new headache pattern emerging later in life, without a prior history of similar headaches, differs from someone's established lifelong pattern and is treated as worth evaluating on its own, separate from any single dramatic accompanying symptom", correct: true, explanation: "Correct. A genuinely new pattern (not just 'a headache while being over 50') is itself one of the specific things health agencies list as worth checking." },
      { text: "It's an outdated guideline health agencies no longer actually use", correct: false, explanation: "This is a real, current guideline reflected in NHS headache-guidance materials, not an outdated one." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Headache combined with neurological warning signs (real-world / applied case)</h3>
      <div className="prose-p">
      A headache accompanied by sudden vision changes, weakness or numbness on one side of the body, difficulty speaking, or confusion is treated by the NHS and CDC as a combination warranting emergency evaluation — these are neurological warning signs, and the presence of any of them alongside a headache changes the situation from &quot;manage at home&quot; to &quot;seek care promptly,&quot; regardless of how the headache pain itself compares to past headaches.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="General headache decision framework (informational, not diagnostic)"
      type="flow"
      svgSrc="/diagrams/health-body-basics-when-a-headache-needs-medical-attention-general-guidance-decision-framework.svg"
      altText="A decision-flow diagram starting with 'headache present', branching into two paths: one path lists warning signs (sudden severe onset, neurological symptoms, fever with stiff neck, headache after head injury, new pattern after age 50) leading to 'seek medical care', and the other path (none of these present, familiar pattern) leading to 'typical primary headache — general self-care and monitoring, per usual guidance'."
      />
      <p>
      This is a general orientation framework, not a diagnostic flowchart — the presence of any listed warning sign is what should prompt seeking care, not an attempt to work through every branch to a confident conclusion at home.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Judging urgency by pain intensity alone.", fix: "Focus on the specific warning-sign combinations (sudden onset, neurological symptoms, new pattern, injury context) rather than how much a headache hurts by itself." },
      { mistake: "Dismissing a genuinely new headache pattern because 'headaches are usually nothing.'", fix: "Recognize that a headache pattern that's meaningfully new or different for you personally is itself one of the listed reasons to get it checked." },
      { mistake: "Waiting to see if neurological symptoms (vision changes, weakness, confusion) resolve on their own before seeking care.", fix: "Treat headache combined with any neurological symptom as a reason to seek care promptly, per NHS/CDC guidance, rather than a wait-and-see situation." },
      ]}
      />
      <MisconceptionCallout
      myth="A headache severe enough to be 'the worst pain of your life' always means something is seriously wrong, while any headache you can tolerate is automatically fine."
      reality={<p>Pain intensity, judged subjectively, is a genuinely imperfect signal — chronic migraine sufferers can have very severe pain from a familiar, non-dangerous condition, while some serious secondary headaches don&apos;t always present as the most intense pain someone has ever felt. This is exactly why health agencies focus on specific warning-sign combinations (sudden onset, neurological symptoms, new patterns, injury context) rather than pain intensity as a standalone signal.</p>}
      />

      <QuickCheck
      question="Is headache pain intensity, by itself, a reliable standalone signal for whether a headache needs urgent medical attention?"
      options={[
      { text: "Yes — the more painful the headache, the more urgent it always is", correct: false, explanation: "Pain intensity alone is an imperfect signal — some non-dangerous conditions like migraine can be extremely painful, while some concerning secondary headaches aren't always the most severe pain a person has felt." },
      { text: "No — health agencies focus on specific warning-sign combinations (sudden onset, neurological symptoms, new pattern, injury context) rather than pain intensity alone, since intensity by itself doesn't reliably distinguish typical from urgent headaches", correct: true, explanation: "Correct. This is precisely why NHS/CDC guidance is built around specific combinations of features, not a pain-scale threshold." },
      { text: "Pain intensity is completely irrelevant to headache evaluation", correct: false, explanation: "Pain intensity is one relevant piece of information a doctor considers, but it isn't a reliable standalone signal on its own — that's the actual nuance, not that it's irrelevant." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Learn the specific warning-sign combinations (sudden severe onset, neurological symptoms, fever with stiff neck, headache after head injury, new pattern after 50) rather than relying on pain intensity alone.",
      "If a headache follows a head injury, seek medical evaluation even if it initially seems manageable.",
      "If a headache pattern is genuinely new or different from your usual headaches, mention this explicitly to a doctor.",
      "For frequent or disruptive headaches even without red-flag symptoms, consider seeing a doctor about management options rather than relying solely on over-the-counter treatment long-term.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What headache symptoms mean I should see a doctor right away?", answer: "General warning signs from NHS/CDC guidance include: sudden, severe onset ('worst headache of your life'), headache with vision changes, weakness, numbness, or confusion, headache with fever and a stiff neck, headache after a head injury, and a new pattern of severe headaches starting after age 50." },
      { question: "Are most headaches dangerous?", answer: "No. The large majority of headaches are primary headaches (like tension headaches or migraines) that aren't a sign of a dangerous underlying condition, according to the NHS." },
      { question: "What's the difference between a primary and secondary headache?", answer: "A primary headache (like a tension headache or migraine) is the condition itself. A secondary headache is a symptom caused by an underlying issue, such as infection or injury." },
      { question: "Is a 'thunderclap headache' a real medical term?", answer: "Yes — it describes a headache that reaches maximum intensity within seconds to minutes, which the NHS specifically flags as a distinct pattern worth urgent evaluation." },
      { question: "Should I worry about every headache after age 50?", answer: "Not every headache, but a genuinely new pattern of headaches starting after age 50, without a prior history of similar headaches, is specifically listed by the NHS as worth medical evaluation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
