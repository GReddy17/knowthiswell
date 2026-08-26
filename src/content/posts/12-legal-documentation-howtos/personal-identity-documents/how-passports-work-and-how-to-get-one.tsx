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
  title: "How Passports Work and How to Get One",
  category: "legal-documentation-howtos",
  order: 1,
  subtopic: "personal-identity-documents",
  tags: ["passport", "identity documents", "travel documents", "legal documentation", "government ID"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A passport is a government-issued claim about your identity and nationality that other countries agree to trust — the application process exists to build a paper trail solid enough to back that claim.",
  summary: "A passport is an official government document that certifies a person's identity and nationality for international travel; getting one generally means proving identity and citizenship with underlying documents, then having a government agency issue a booklet or card that other countries' border authorities agree to recognize.",
  sources: [
    { label: "U.S. Department of State — Passports", url: "https://travel.state.gov/content/travel/en/passports.html" },
    { label: "Cornell Legal Information Institute — 22 U.S.C. Chapter 4 (Passports)", url: "https://www.law.cornell.edu/uscode/text/22/chapter-4" },
    { label: "U.S. Department of State — How to Apply", url: "https://travel.state.gov/content/travel/en/passports/how-apply.html" },
  ],
  seeAlso: [
    "legal-documentation-howtos/national-id-systems-explained-overview",
    "legal-documentation-howtos/birth-certificates-why-they-matter",
    "legal-documentation-howtos/how-to-replace-a-lost-id-document",
  ],
  glossary: [
    {"term":"Passport","definition":"A government-issued travel document that certifies the holder's identity and nationality, generally recognized by other countries for entry and exit under international travel agreements."},
    {"term":"Passport book","definition":"The traditional booklet-form passport valid for both air and land/sea international travel."},
    {"term":"Passport card","definition":"A wallet-sized identity card, issued by some countries (including the U.S.) as a lower-cost alternative to the passport book, generally valid only for land and sea travel to a limited set of neighboring countries — not for international air travel."},
    {"term":"Apostille","definition":"A standardized certification, recognized under an international treaty (the Hague Apostille Convention), that authenticates a public document like a birth certificate for use in another treaty country — sometimes required when using such a document to support an identity application abroad."},
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
      "A passport certifies identity and nationality — it doesn't grant citizenship, it documents citizenship that already exists based on underlying proof like a birth certificate or naturalization certificate.",
      "Getting a passport for the first time generally means proving identity, proving citizenship, and providing a photo, submitted in person for first-time adult applicants in the U.S. system.",
      "Processing time varies significantly (routine vs. expedited service), and a passport nearing expiration can cause real problems abroad since many countries require six months of remaining validity to allow entry.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/how-passports-work-and-how-to-get-one">passport</TermLink> is your government&apos;s official statement to the rest of the world that you are who you say you are and that you&apos;re a citizen or national of that country. To get one, you generally have to prove your identity and citizenship with documents you already have (like a birth certificate or existing ID), fill out an application, provide a photo, pay a fee, and wait for the passport agency to process and mail it. Countries recognize each other&apos;s passports as valid travel documents under long-standing international norms, which is why a booklet issued by one government works to cross another country&apos;s border.</div>}
      detailed={<div className="prose-p">Passport issuance is a sovereign government function, generally handled in the U.S. by the Department of State (for adults, either the <TermLink href="/legal-documentation-howtos/how-passports-work-and-how-to-get-one">passport book</TermLink>, valid for international air travel, or the <TermLink href="/legal-documentation-howtos/how-passports-work-and-how-to-get-one">passport card</TermLink>, a cheaper wallet-card option valid only for land and sea travel to a limited set of neighboring countries and territories — not valid for flying internationally). A first-time adult applicant typically must apply in person at an authorized acceptance facility, submitting proof of citizenship (an original or certified copy of a birth certificate, naturalization certificate, or existing passport), proof of identity (a driver&apos;s license or other government photo ID), a passport photo meeting specific size and background requirements, and the applicable fee. Renewals by mail are often possible if the previous passport is recent enough, undamaged, and issued at a certain age, was issued in the applicant&apos;s current name, or the name change is supported by an original marriage certificate or court order. Processing time fluctuates with agency workload — routine service has historically taken several weeks to a few months, with an expedited service tier available for an additional fee, and in-person appointments for imminent travel available through regional agencies in true emergencies.</div>}
      />
      <FootnoteAside>Many countries require a passport to have at least six months of validity remaining beyond the planned travel dates — a rule set by the destination country, not by the passport-issuing country — so a passport that&apos;s technically still &quot;valid&quot; can still get someone denied boarding or entry if it&apos;s too close to its expiration date.</FootnoteAside>

      <p>
      The most common first-time-applicant mistake is treating the passport application like any other form — the identity/citizenship proof requirements exist specifically because a passport is a document other sovereign governments choose to trust, and that trust rests entirely on the rigor of the issuing process.
      </p>

      <QuickCheck
      question="Does getting a passport make someone a citizen of that country?"
      options={[
      { text: "Yes — a passport is what legally establishes someone's citizenship", correct: false, explanation: "A passport documents citizenship that already exists through birth, descent, or naturalization — it doesn't create or grant citizenship." },
      { text: "No — a passport certifies citizenship and identity that the applicant already had to prove existed before the passport could be issued", correct: true, explanation: "Correct. The application process requires proof of existing citizenship (like a birth certificate or naturalization certificate) before a passport can be issued — the passport is downstream of citizenship, not the source of it." },
      { text: "It depends entirely on which country issues the passport", correct: false, explanation: "This is a general feature of how passport systems work internationally, not a country-specific exception — proof of existing citizenship is a standard precondition for passport issuance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A first-time adult applicant (baseline case)</h3>
      <div className="prose-p">
      Someone who has never had a passport gathers their original birth certificate, a driver&apos;s license, and a passport photo, then applies in person at an authorized post office or clerk&apos;s office using the routine service tier. They wait several weeks for processing before the passport book arrives by mail — a predictable, non-urgent timeline that assumes no errors in the application and no unusual document issues.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A name change after marriage (edge case / variation)</h3>
      <div className="prose-p">
      Someone who married and legally changed their last name wants their new passport to reflect it. If their prior passport was issued relatively recently and meets renewal-by-mail eligibility, they can typically submit the renewal application along with an original or certified copy of the marriage certificate as legal proof of the name change, rather than needing to apply in person as if starting from scratch — though if the prior passport is too old or doesn&apos;t meet other renewal conditions, an in-person application may still be required.
      </div>

      <QuickCheck
      question="If a passport is close to expiring but someone has an international trip planned, what specifically causes the most common real-world problem?"
      options={[
      { text: "The passport itself becomes technically invalid the moment travel is booked", correct: false, explanation: "The passport remains valid until its printed expiration date — the problem isn't the traveler's own passport validity rules, it's the destination country's entry requirements." },
      { text: "Many destination countries require a set amount of remaining validity (commonly six months) beyond the travel dates, which can block entry even on a technically unexpired passport", correct: true, explanation: "Correct. This six-month rule is set by the country being visited, not the issuing country, so a passport with only two or three months left can still cause a denied boarding or entry even though it hasn't expired yet." },
      { text: "Airlines never check passport expiration dates at all", correct: false, explanation: "Airlines routinely check passport validity against destination-country entry rules at check-in specifically to avoid being fined for transporting a passenger who will be denied entry." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An urgent same-week international trip (real-world / applied case)</h3>
      <div className="prose-p">
      Someone learns they need to travel internationally in a matter of days for a genuine emergency but has no valid passport. Regional passport agencies generally offer in-person appointments for documented life-or-death emergencies or imminent, verifiable travel, requiring proof of the urgent need (such as a plane ticket and evidence of the emergency) in addition to the standard application materials — this is a real but narrowly available option, not a routine way to skip the ordinary timeline for planned travel.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The general passport application pathway"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-how-passports-work-and-how-to-get-one-application-flow.svg"
      altText="A diagram showing a flow from underlying identity/citizenship documents (birth certificate, existing ID) through the application submission step, to agency processing, ending in passport issuance, with a branch showing expedited service as a faster parallel path."
      />
      <p>
      The diagram&apos;s core point is that a passport sits at the end of a documentation chain — it can only be as trustworthy as the underlying proof of identity and citizenship that supported the application.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Waiting until close to a planned trip to apply or renew, then being surprised by routine processing timelines.", fix: "Apply well in advance of any planned travel, and check current processing times on the issuing agency's official site before booking non-refundable travel." },
      { mistake: "Assuming a passport is valid for entry as long as it hasn't technically expired yet.", fix: "Check the specific destination country's minimum remaining-validity requirement (commonly six months) well before departure, not just the passport's printed expiration date." },
      { mistake: "Submitting a passport photo that doesn't meet size, background, or recency requirements.", fix: "Use the issuing agency's official photo specifications, since a non-compliant photo is one of the most common reasons applications are rejected or delayed." },
      ]}
      />
      <MisconceptionCallout
      myth="A passport card works the same as a passport book for any kind of international travel."
      reality={<p>A passport card is generally valid only for land and sea travel to a limited set of neighboring countries and territories, and is not valid for international air travel. Anyone planning to fly internationally needs the passport book, not the card, regardless of how recently the card was issued.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check your current passport's expiration date and compare it against your destination country's minimum remaining-validity rule before booking travel.",
      "Gather original or certified copies of your citizenship proof (birth certificate or naturalization certificate) well before you need to apply.",
      "Confirm whether you qualify for renewal by mail or need to apply in person, based on the age and condition of any prior passport.",
      "If travel is genuinely urgent, contact a regional passport agency directly to ask about emergency appointment availability rather than assuming routine timelines will work.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How long does it take to get a passport?", answer: "Processing time varies with agency workload and has historically ranged from several weeks for routine service to a shorter window for expedited service — always check the issuing government's official current processing times rather than relying on a fixed number." },
      { question: "Can I renew my passport by mail?", answer: "Often yes, if the prior passport meets eligibility conditions like being issued recently enough, in reasonably undamaged condition, and issued in your current legal name (or with a name change supported by an original marriage certificate or court order) — otherwise an in-person application is generally required." },
      { question: "Is a passport card the same as a passport book?", answer: "No. A passport card is generally valid only for land and sea travel to a limited set of neighboring countries, while a passport book is required for international air travel." },
      { question: "Does a passport prove citizenship or grant it?", answer: "It certifies citizenship that already exists — applicants must prove citizenship with underlying documents like a birth certificate before a passport can be issued at all." },
      { question: "What happens if my passport expires while I'm still eligible to renew by mail?", answer: "Renewal-by-mail eligibility windows and rules are set by the issuing agency and can vary — check the official current renewal eligibility rules directly rather than assuming a prior passport still qualifies once expired for an extended period." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
