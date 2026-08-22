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
  title: "Fundamental Rights Explained (General Framework)",
  category: "general-awareness-basics",
  order: 17,
  subtopic: "civic-literacy-and-rights",
  tags: ["fundamental rights", "civil liberties", "constitutional rights", "human rights", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Fundamental rights are the specific protections a constitution guarantees against the state itself — a narrower, legally enforceable subset of the broader idea of human rights.",
  summary: "Fundamental rights are the specific legal protections written into a country's constitution that guarantee individuals freedom from state overreach and access to basic legal fairness — they differ from ordinary laws in that they typically can't be removed by a simple act of the legislature.",
  sources: [
    { label: "United Nations — Universal Declaration of Human Rights", url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights" },
    { label: "Encyclopaedia Britannica — Civil Liberties", url: "https://www.britannica.com/topic/civil-liberties" },
    { label: "Encyclopaedia Britannica — Constitutional Law", url: "https://www.britannica.com/topic/constitutional-law" },
  ],
  seeAlso: [
    "general-awareness-basics/understanding-human-rights-frameworks-udhr-overview",
    "general-awareness-basics/understanding-civic-duties-and-responsibilities",
    "general-awareness-basics/understanding-a-national-constitutions-role",
  ],
  glossary: [
    {"term":"Fundamental rights","definition":"The specific set of individual protections written directly into a country's constitution, enforceable in court and generally shielded from removal by ordinary legislation."},
    {"term":"Judicial review","definition":"A court's power to strike down a law or government action that violates a constitutionally protected right."},
    {"term":"Derogation","definition":"A formal, usually temporary suspension of certain rights by a government, typically only permitted under declared emergency conditions and subject to legal limits."},
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
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Fundamental rights are the specific rights written into a country's constitution — a legally enforceable subset of the much broader concept of human rights.",
      "The defining feature of a fundamental right isn't just that it's important — it's that it typically can't be removed by an ordinary majority vote in the legislature, unlike a regular statute.",
      "Courts enforce fundamental rights through judicial review: a law or government action that violates a protected right can be struck down, even if it passed through the normal lawmaking process.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/fundamental-rights-explained-general-framework">fundamental right</TermLink> is a protection so important that it gets written directly into a country&apos;s constitution instead of an ordinary law. Ordinary laws can be changed by a simple vote in the legislature; fundamental rights are built to be much harder to take away, usually requiring a special constitutional amendment process. Common examples across many constitutions include freedom of speech, freedom of religion, the right to a fair trial, and protection against unreasonable searches.</div>}
      detailed={<div className="prose-p">The practical difference between a fundamental right and an ordinary legal entitlement comes down to enforcement mechanism. If a government passes a law that conflicts with an ordinary statute, courts generally defer to the newer law. If a government passes a law that conflicts with a constitutionally protected fundamental right, courts can exercise <TermLink href="/general-awareness-basics/fundamental-rights-explained-general-framework">judicial review</TermLink> and strike the law down entirely, regardless of how it was passed. This is why fundamental rights are sometimes described as &quot;counter-majoritarian&quot; — they exist specifically to protect individuals and minorities from decisions a temporary majority might otherwise be free to make. Most constitutions also allow for narrow, legally bounded <TermLink href="/general-awareness-basics/fundamental-rights-explained-general-framework">derogation</TermLink> of certain rights during declared emergencies, but even derogation is itself constrained by law — a government can&apos;t simply declare an emergency and ignore rights indefinitely without legal challenge.</div>}
      />
      <FootnoteAside>Not every country&apos;s list of fundamental rights is identical — the core civil and political rights (speech, religion, fair trial, due process) appear almost universally, while some constitutions also enshrine &quot;second generation&quot; economic and social rights like education or healthcare as fundamental, and others leave those to ordinary legislation instead.</FootnoteAside>

      <p>
      Understanding fundamental rights starts with recognizing what makes them structurally different from any other law on the books — not their subject matter, but how hard they are to remove.
      </p>

      <QuickCheck
      question="A legislature passes an ordinary law banning a specific type of public protest. A constitution in the same country guarantees a fundamental right to peaceful assembly. What happens?"
      options={[
      { text: "The new law automatically wins because it was passed most recently", correct: false, explanation: "Recency doesn't override constitutional protection. An ordinary law that conflicts with a fundamental right is vulnerable to being struck down by courts through judicial review, regardless of when it was passed." },
      { text: "The law can be challenged in court, and if the courts find it violates the constitutionally protected right to assembly, they can strike it down", correct: true, explanation: "Correct. This is exactly what judicial review is for — testing an ordinary law against the constitution's fundamental rights and invalidating it if there's a genuine conflict." },
      { text: "Nothing happens unless the legislature specifically repeals the law itself", correct: false, explanation: "Courts don't need to wait for the legislature to act. Judicial review lets courts directly invalidate a law that violates a fundamental right, independent of any future legislative action." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: An ordinary law vs. a fundamental right (baseline case)</h3>
      <div className="prose-p">
      A city council passes a local ordinance banning any public gathering of more than 3 people without a permit obtained 30 days in advance — effectively making spontaneous protest impossible. A citizen challenges this in court, arguing it violates their constitutionally protected right to peaceful assembly. Because assembly is a fundamental right rather than an ordinary policy preference, the court applies a much stricter standard of review than it would to a routine zoning rule, and the ordinance is far more likely to be struck down or narrowed.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A right that gets balanced, not absolute (edge case / variation)</h3>
      <div className="prose-p">
      Freedom of speech is a fundamental right in most constitutions, but it is rarely treated as absolute. A government restriction on speech that incites imminent violence, for example, is usually upheld even in strong free-speech systems, because courts balance the fundamental right against a compelling, narrowly defined public-safety interest. This illustrates that &quot;fundamental&quot; doesn&apos;t mean &quot;unlimited&quot; — it means the government bears a much heavier burden to justify any restriction than it would for a non-fundamental interest.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Emergency derogation with legal limits (real-world / applied case)</h3>
      <div className="prose-p">
      During a declared national emergency, a government temporarily suspends certain due-process protections to speed up detention procedures. Even here, most constitutional systems require the derogation to be time-limited, proportionate to the actual emergency, and subject to legislative or judicial review — a government cannot use &quot;emergency&quot; as a permanent justification for ignoring a fundamental right, and courts in many countries have struck down derogations found to be excessive or indefinite.
      </div>

      <QuickCheck
      question="During a declared emergency, a government indefinitely suspends the right to a fair trial with no review process and no end date specified. What's the constitutional problem with this, even if some derogation is legally permitted?"
      options={[
      { text: "There's no problem — emergencies give governments unlimited power over rights until the emergency officially ends", correct: false, explanation: "Legitimate derogation is bounded by proportionality and time — it isn't a blank check. An indefinite suspension with no review process typically exceeds what constitutional emergency provisions actually authorize." },
      { text: "The suspension lacks the proportionality and time-limits most constitutions require for derogation, making it vulnerable to legal challenge even though some derogation is permitted in principle", correct: true, explanation: "Correct. Most constitutional emergency provisions require derogation to be proportionate, temporary, and reviewable — an open-ended suspension with no review mechanism fails that standard regardless of the emergency's legitimacy." },
      { text: "The problem is only symbolic since fair trial rights aren't usually considered fundamental", correct: false, explanation: "Due process and fair trial rights are core fundamental rights in nearly every constitutional system — the issue here is the manner and duration of the suspension, not whether the right itself qualifies as fundamental." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Ordinary law vs. fundamental right: two different removal paths"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-fundamental-rights-explained-general-framework-removal-paths.svg"
      altText="Two side-by-side vertical paths. The left path, labeled Ordinary Law, shows a single step: a majority vote in the legislature, leading to Changed or Repealed. The right path, labeled Fundamental Right, shows a taller staircase of steps: supermajority vote, constitutional amendment process, and ratification, leading to Changed only after all steps are completed."
      />
      <p>
      The diagram captures the entire practical difference in one image: an ordinary law can be undone in a single step, while a fundamental right sits behind a much taller, deliberately harder staircase of procedural hurdles — which is precisely what makes it &quot;fundamental&quot; rather than just &quot;important.&quot;
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming any right you feel strongly about is automatically a 'fundamental right' in the legal sense.", fix: "Check whether the specific right is actually enumerated in your constitution or established through binding case law — not every important-sounding entitlement carries constitutional protection." },
      { mistake: "Treating fundamental rights as absolute and unlimited under all circumstances.", fix: "Recognize that courts routinely balance fundamental rights against narrowly defined, compelling government interests — the right sets a high bar for restriction, not a zero-restriction rule." },
      { mistake: "Assuming a government declaring an 'emergency' automatically legalizes any suspension of rights.", fix: "Remember that legitimate derogation is itself legally constrained by proportionality, time limits, and review — an emergency declaration alone doesn't erase those constraints." },
      ]}
      />
      <MisconceptionCallout
      myth="Fundamental rights and human rights are just two names for the exact same thing."
      reality={<p>Human rights is the broader, universal moral and international-law concept — the idea that certain protections belong to every person simply by being human, regardless of what any particular country&apos;s law says. Fundamental rights is the narrower, country-specific legal category: the subset of rights a particular constitution has chosen to write down and make enforceable in its own domestic courts. A right can be recognized as a human right internationally without being enshrined as a fundamental right in every country&apos;s own constitution, and vice versa.</p>}
      />

      <QuickCheck
      question="A right is widely recognized internationally as a human right but is not written into a particular country's constitution. What does this mean for someone in that country?"
      options={[
      { text: "The right doesn't really exist anywhere and can be ignored", correct: false, explanation: "International recognition as a human right doesn't disappear just because one country's constitution is silent on it — it may still carry moral, diplomatic, or international-law weight, just not domestic constitutional enforceability in that country." },
      { text: "That person cannot enforce it as a constitutional fundamental right in their own domestic courts, even though it may still carry weight under international human rights law", correct: true, explanation: "Correct. Domestic enforceability specifically requires the right to be part of that country's own constitutional or statutory framework — international recognition alone doesn't automatically create a domestically enforceable fundamental right." },
      { text: "The country is automatically in violation of international law", correct: false, explanation: "Countries can be signatories to international human rights instruments without incorporating every specific right into domestic constitutional law directly — the relationship between international commitments and domestic enforceability varies by country and treaty." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Look up which specific rights are enumerated as fundamental in your own country's constitution — the list is usually shorter and more specific than most people assume.",
      "Next time you hear a rights-related news story, ask whether the dispute is about a fundamental (constitutional) right or an ordinary policy or statutory entitlement — the legal stakes differ significantly.",
      "Learn your country's specific amendment process for its constitution — that process is the real-world 'staircase' that makes a fundamental right hard to remove.",
      "If you want the international framing alongside the domestic one, read the Universal Declaration of Human Rights directly rather than relying on secondhand summaries.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between fundamental rights and human rights?", answer: "Human rights are a broader, universal moral and international-law concept applying to all people regardless of country. Fundamental rights are the specific, narrower subset that a particular country's constitution has written down and made enforceable in its own domestic courts." },
      { question: "Can a fundamental right ever be taken away?", answer: "Generally not by an ordinary legislative vote — most constitutions require a special, harder amendment process. Rights can be temporarily and narrowly limited (derogated) during declared emergencies, but usually only under strict legal conditions like proportionality and time limits." },
      { question: "Are fundamental rights absolute?", answer: "No. Courts typically balance fundamental rights against narrowly defined, compelling government interests — for example, free speech doesn't usually protect speech that incites imminent violence. The right sets a high bar for any restriction, not a zero-restriction guarantee." },
      { question: "What is judicial review?", answer: "It's a court's power to examine a law or government action and strike it down if it violates a constitutionally protected fundamental right, even if the law was passed through the normal legislative process." },
      { question: "Do all countries have the same list of fundamental rights?", answer: "No. Core civil and political rights like free speech, freedom of religion, and fair trial protections appear in most constitutions, but the exact list, wording, and how strictly they're enforced varies considerably by country." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
