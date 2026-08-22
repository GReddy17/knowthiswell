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
  title: "Understanding Civic Duties & Responsibilities",
  category: "general-awareness-basics",
  order: 18,
  subtopic: "civic-literacy-and-rights",
  tags: ["civic duties", "civic responsibilities", "citizenship", "jury duty", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Civic duties are the legally required or strongly expected obligations that come paired with the rights a citizen holds — the other half of the citizenship relationship.",
  summary: "Civic duties are the obligations a citizen owes to their political community in exchange for the protections and rights that community provides — some are legally mandatory (like paying taxes or jury service), while others are strongly expected but not enforced by law (like voting, in most countries).",
  sources: [
    { label: "Encyclopaedia Britannica — Citizenship", url: "https://www.britannica.com/topic/citizenship" },
    { label: "United Nations — Universal Declaration of Human Rights, Article 29", url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights" },
    { label: "Encyclopaedia Britannica — Jury", url: "https://www.britannica.com/topic/jury-law" },
  ],
  seeAlso: [
    "general-awareness-basics/fundamental-rights-explained-general-framework",
    "general-awareness-basics/how-taxes-fund-public-services-conceptual-overview",
    "general-awareness-basics/how-elections-and-voting-systems-work",
  ],
  glossary: [
    {"term":"Civic duty","definition":"An obligation a citizen owes to their political community, ranging from legally mandatory (taxes, jury service) to socially expected but not legally enforced (voting, staying informed)."},
    {"term":"Compulsory voting","definition":"A legal requirement, used by a minority of countries, that eligible citizens must vote or face a penalty such as a fine."},
    {"term":"Jury duty","definition":"A legal obligation in many common-law countries requiring eligible citizens to serve on a trial jury when summoned."},
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
      "Civic duties are the obligations side of citizenship, paired with the rights side — most political philosophy treats them as two halves of the same relationship between a citizen and their community.",
      "Some civic duties are legally mandatory and enforceable (paying taxes, jury service, compulsory military registration in some countries), while others are strongly expected but carry no legal penalty (voting, in most democracies).",
      "Compulsory voting, used by a minority of countries, is the clearest example of a civic duty that some governments have chosen to convert from expectation into legal requirement.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/understanding-civic-duties-and-responsibilities">civic duty</TermLink> is something a citizen is expected — or in some cases legally required — to do for their political community. Common examples include paying taxes, obeying laws, serving on a jury if called, and in most democracies, voting (even where it isn&apos;t legally mandatory). Rights and duties are usually presented as a pair: the community protects your rights, and in exchange you owe it certain obligations.</div>}
      detailed={<div className="prose-p">Civic duties split into two categories with very different enforcement. Legally mandatory duties — like paying taxes, obeying court summons, or serving on a <TermLink href="/general-awareness-basics/understanding-civic-duties-and-responsibilities">jury</TermLink> when called — carry real legal penalties if ignored, up to fines or imprisonment. Socially expected duties — like voting, staying informed about public affairs, or participating in community life — carry no legal penalty in most countries, but are treated as part of what it means to be a good citizen. The most direct test of this distinction is <TermLink href="/general-awareness-basics/understanding-civic-duties-and-responsibilities">compulsory voting</TermLink>: a small number of countries (including Australia and Belgium) have moved voting from the expected category into the legally mandatory one, backed by fines for non-participation, while most democracies leave it as an expectation only.</div>}
      />
      <FootnoteAside>Article 29 of the Universal Declaration of Human Rights explicitly frames duties as inseparable from rights, stating that &quot;everyone has duties to the community in which alone the free and full development of his personality is possible&quot; — a rare instance of a rights-focused document formally naming the obligation side of the relationship.</FootnoteAside>

      <p>
      The practical value of separating civic duties into &quot;legally required&quot; and &quot;socially expected&quot; is that it tells you exactly what happens if you skip one — a real legal consequence, or just social/civic disapproval with no enforcement mechanism.
      </p>

      <QuickCheck
      question="A citizen decides not to vote in an election in a country where voting is not compulsory. What are the legal consequences?"
      options={[
      { text: "None — in a non-compulsory voting system, choosing not to vote carries no legal penalty, even though voting is still widely treated as an expected civic duty", correct: true, explanation: "Correct. Most democracies leave voting as a socially expected duty without legal enforcement — the citizen faces no fine or penalty, unlike a country with compulsory voting laws." },
      { text: "The citizen automatically loses their right to vote in future elections", correct: false, explanation: "Skipping one election in a non-compulsory system doesn't remove voting rights for future elections — the right and the (non-mandatory) duty are separate; not exercising the duty once doesn't forfeit the underlying right." },
      { text: "The citizen is fined the same way they would be in a compulsory-voting country", correct: false, explanation: "Fines for not voting only apply in the specific countries that have made voting a legally compulsory duty — in a non-compulsory system, there's no fine mechanism to apply." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A legally mandatory duty (baseline case)</h3>
      <div className="prose-p">
      A citizen receives a jury summons in the mail. In most common-law countries, ignoring this summons without a valid legal exemption is itself a legal offense, separate from whatever case the jury would have heard — the citizen can be fined or held in contempt of court simply for failing to appear, regardless of the underlying trial&apos;s outcome.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A duty that shifts between expected and mandatory depending on the country (edge case / variation)</h3>
      <div className="prose-p">
      Voting is the clearest example of a duty whose legal status varies by country. In the United States, the United Kingdom, and most democracies, voting is a strongly encouraged civic duty with zero legal penalty for abstaining. In Australia, failing to vote in a federal election without a valid excuse results in a small fine — the same underlying duty, treated completely differently by law depending on which country&apos;s system applies.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The rights-duties pairing in practice (real-world / applied case)</h3>
      <div className="prose-p">
      A citizen benefits from publicly funded roads, schools, and emergency services — all protected and provided through the political community they belong to. In return, that same citizen owes the community certain obligations: paying the taxes that fund those services, obeying the laws that keep the system functioning, and participating (through jury duty, if called) in the justice system that protects everyone&apos;s rights, including their own. The relationship is explicitly reciprocal — it&apos;s not that rights are free and duties are optional extras, but that the two are structurally linked.
      </div>

      <QuickCheck
      question="Why is the pairing of rights and duties often described as reciprocal rather than one-directional?"
      options={[
      { text: "Because rights and duties have nothing to do with each other, and 'reciprocal' is just political rhetoric with no real substance", correct: false, explanation: "The reciprocal framing has real substance — the services and protections that make rights meaningful (courts, public funding, security) are themselves funded and maintained through citizens fulfilling their duties, like paying taxes." },
      { text: "Because the protections and services that make rights meaningful are funded and maintained in part through citizens fulfilling their duties, making the two structurally linked rather than separate", correct: true, explanation: "Correct. Rights like a fair trial depend on a functioning justice system, which depends on citizens showing up for jury duty and taxes funding the courts — the duties side isn't separate from the rights side, it materially supports it." },
      { text: "Because every country legally requires citizens to perform every civic duty in exchange for every right", correct: false, explanation: "Not every duty is legally mandatory — voting, for instance, is only compulsory in a minority of countries. The reciprocal relationship exists at the conceptual and structural level, not as a universal strict legal exchange." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Civic duties: mandatory vs. socially expected"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-understanding-civic-duties-and-responsibilities-mandatory-vs-expected.svg"
      altText="Two columns. The left column, labeled Legally Mandatory, lists Paying taxes, Jury duty when summoned, and Obeying court orders, each with a gavel icon indicating legal enforcement. The right column, labeled Socially Expected, lists Voting, in most countries, Staying informed, and Community participation, each with an outline icon indicating no legal penalty."
      />
      <p>
      The two columns aren&apos;t separated by importance — voting is arguably as important to a functioning democracy as any legally mandatory duty — they&apos;re separated strictly by enforcement mechanism: one side has a legal penalty attached, the other relies entirely on social expectation.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming all civic duties carry the same legal weight as jury duty or taxes.", fix: "Check whether a given duty is legally enforced or only socially expected in your specific country — the distinction changes what actually happens if it's skipped." },
      { mistake: "Assuming voting is legally compulsory everywhere, or assuming it's legally compulsory nowhere.", fix: "Look up your own country's specific rule — compulsory voting exists in a minority of countries (Australia and Belgium among them), while most leave it as an expectation only." },
      { mistake: "Treating rights and duties as unrelated categories.", fix: "Remember the reciprocal framing: the services and protections that make rights meaningful (courts, public infrastructure, security) are themselves sustained by citizens fulfilling their duties." },
      ]}
      />
      <MisconceptionCallout
      myth="If a civic duty isn't backed by a legal penalty, it isn't a 'real' duty at all."
      reality={<p>Legal enforceability isn&apos;t the only thing that makes an obligation real — many of the most consequential civic duties, like voting and staying informed, function entirely through social expectation rather than legal compulsion in most democracies, yet political scientists and constitutional documents alike still treat them as genuine duties. The absence of a fine doesn&apos;t mean the absence of an obligation; it just means the obligation is enforced socially and civically rather than through the courts.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Look up whether your own country treats voting as legally compulsory or socially expected — the answer varies more than most people assume.",
      "If you receive a jury summons, treat it as a legal obligation, not an optional invitation — ignoring it without a valid exemption carries real legal consequences in most jurisdictions.",
      "Read Article 29 of the Universal Declaration of Human Rights for the formal international framing of duties alongside rights.",
      "Next time you think about your rights as a citizen, pair the thought with the specific duties that help sustain the system that protects those rights.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a civic right and a civic duty?", answer: "A right is a protection or entitlement a citizen holds against the state or others; a duty is an obligation the citizen owes to their political community. Most frameworks present them as reciprocal — the services and protections that back up rights are themselves sustained by citizens performing their duties." },
      { question: "Is voting a legal requirement?", answer: "It depends on the country. Most democracies treat voting as a socially expected civic duty with no legal penalty for abstaining. A minority of countries, including Australia and Belgium, have made voting legally compulsory, typically enforced with a small fine for non-participation." },
      { question: "What happens if you ignore a jury duty summons?", answer: "In most common-law countries, ignoring a jury summons without a valid legal exemption is itself a legal offense, separate from the underlying case — it can result in a fine or being held in contempt of court." },
      { question: "Are civic duties the same in every country?", answer: "No. The core categories (paying taxes, obeying laws) are nearly universal, but the specific list and enforcement level of duties like voting, jury service, or military registration vary considerably by country." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
