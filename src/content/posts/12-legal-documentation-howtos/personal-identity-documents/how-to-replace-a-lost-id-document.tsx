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
  title: "How to Replace a Lost ID Document",
  category: "legal-documentation-howtos",
  order: 5,
  subtopic: "personal-identity-documents",
  tags: ["lost ID", "identity theft", "identity documents", "legal documentation", "replacement documents"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "Losing your ID is a two-part problem — replacing the document, and making sure whoever finds it can't use it to impersonate you in the meantime.",
  summary: "Replacing a lost identity document generally means acting on two tracks at once: requesting a replacement from the specific issuing agency, and taking protective steps (like fraud alerts) in case the lost document is used for identity theft before the replacement process finishes.",
  sources: [
    { label: "Federal Trade Commission — IdentityTheft.gov", url: "https://www.identitytheft.gov/" },
    { label: "U.S. Social Security Administration — Replace Your Social Security Card", url: "https://www.ssa.gov/number-card/replace-card" },
    { label: "Consumer Financial Protection Bureau — Fraud Alerts and Credit Freezes", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
  ],
  seeAlso: [
    "legal-documentation-howtos/how-passports-work-and-how-to-get-one",
    "legal-documentation-howtos/birth-certificates-why-they-matter",
    "legal-documentation-howtos/drivers-licenses-how-the-system-works",
  ],
  glossary: [
    {"term":"Fraud alert","definition":"A flag placed on a person's credit file, generally free and available through any one of the major credit bureaus, that requires lenders to take extra identity-verification steps before extending new credit in that person's name."},
    {"term":"Credit freeze","definition":"A stronger protective measure than a fraud alert that blocks most new access to a person's credit report entirely, generally preventing new lenders from opening accounts in their name until the freeze is lifted."},
    {"term":"Breeder document","definition":"An informal but widely used term for a foundational identity document (like a birth certificate) that can be used to obtain other identity documents — a lost breeder document is considered higher-risk than losing a downstream document alone."},
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
      "Losing an ID document is both a replacement problem (getting a new document) and a security problem (the lost document could potentially be misused before you replace it).",
      "Different documents have different replacement processes and issuing authorities — a lost driver's license, Social Security card, and passport each require contacting a different specific agency.",
      "A fraud alert or credit freeze is a free, real protective step that can be taken quickly, separate from and in addition to the document replacement process itself.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Losing an ID document means dealing with two separate things at once: getting a new one, and making sure the old one can&apos;t be misused if it&apos;s found by the wrong person. Each type of document — driver&apos;s license, Social Security card, passport — has its own specific place to report the loss and request a replacement, so the first step is figuring out exactly which agency handles that particular document.</div>}
      detailed={<div className="prose-p">The replacement process itself is mechanically straightforward once you know the right agency: state motor vehicle agencies handle lost driver&apos;s licenses and state ID cards, the Social Security Administration handles a lost Social Security card, and the Department of State handles a lost or stolen passport (which, if lost abroad, generally requires contacting the nearest embassy or consulate rather than waiting until returning home). The security dimension is separate and arguably more time-sensitive: a lost <TermLink href="/legal-documentation-howtos/how-to-replace-a-lost-id-document">breeder document</TermLink> like a birth certificate or Social Security card carries higher identity-theft risk than a lost driver&apos;s license, since it can potentially be used to obtain further documents in your name. Placing a <TermLink href="/legal-documentation-howtos/how-to-replace-a-lost-id-document">fraud alert</TermLink> with one of the three major credit bureaus (which by law then notifies the other two) is free and can be done immediately, and a <TermLink href="/legal-documentation-howtos/how-to-replace-a-lost-id-document">credit freeze</TermLink> offers stronger, though slightly less convenient, protection by blocking most new credit access outright until lifted.</div>}
      />
      <FootnoteAside>A fraud alert placed with just one of the three major credit bureaus is, by law, required to be shared with the other two — you don&apos;t need to separately contact all three bureaus to get the protection in place.</FootnoteAside>

      <p>
      The core mental model worth keeping is that &quot;replace the document&quot; and &quot;protect against misuse of the lost one&quot; are two different tasks running on two different timelines — the replacement can take days or weeks, but the protective fraud alert or freeze can typically be set up the same day.
      </p>

      <QuickCheck
      question="If someone places a fraud alert with one credit bureau after losing their wallet, does it also protect them at the other two major bureaus?"
      options={[
      { text: "No — they must separately contact all three bureaus to be fully protected", correct: false, explanation: "By law, a fraud alert placed with one of the three major credit bureaus must be shared with the other two, so contacting just one is generally sufficient." },
      { text: "Yes — contacting one of the three major bureaus is generally sufficient because that bureau is required to notify the other two", correct: true, explanation: "Correct. This legal requirement exists specifically to make the fraud-alert process faster and simpler for consumers." },
      { text: "Fraud alerts only apply to credit cards, not other forms of identity theft", correct: false, explanation: "Fraud alerts add a general identity-verification requirement across new credit applications broadly, not just credit card applications specifically." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A lost wallet with a driver&apos;s license (baseline case)</h3>
      <div className="prose-p">
      Someone loses their wallet containing their driver&apos;s license. They report it to their state&apos;s motor vehicle agency, request a replacement (often available online in many states), and separately consider placing a fraud alert as a precaution, even though a driver&apos;s license alone is lower identity-theft risk than losing a Social Security card or birth certificate.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A passport lost while traveling internationally (edge case / variation)</h3>
      <div className="prose-p">
      Someone loses their passport while abroad and needs to both report the loss and obtain emergency travel documentation to return home. This requires contacting the nearest embassy or consulate of their home country directly — not waiting to handle it after returning, since a passport is required to re-enter most countries and the embassy can issue emergency travel documents specifically for this situation.
      </div>

      <QuickCheck
      question="Which category of lost identity document generally carries the highest identity-theft risk?"
      options={[
      { text: "All identity documents carry exactly equal risk regardless of type", correct: false, explanation: "Risk varies by document — a foundational document that can be used to obtain further documents in someone's name carries higher risk than a downstream document alone." },
      { text: "A foundational 'breeder' document like a birth certificate or Social Security card, since it can potentially be used to obtain other identity documents", correct: true, explanation: "Correct. Because these documents sit at the root of the identity-documentation chain, their loss creates a broader downstream risk than losing a single derivative document." },
      { text: "A library card, since it's the most commonly carried document", correct: false, explanation: "A library card carries essentially no identity-theft risk since it isn't used as proof of identity or citizenship by other agencies." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Suspecting a lost Social Security card was used for fraud (real-world / applied case)</h3>
      <div className="prose-p">
      Someone loses their Social Security card and later notices unfamiliar accounts on their credit report. Beyond requesting a replacement card from the Social Security Administration, they would generally file a report through the FTC&apos;s official identity theft reporting resource, which provides a personalized recovery plan and can generate documentation useful for disputing fraudulent accounts with creditors and credit bureaus.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Two parallel tracks after losing an ID document"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-how-to-replace-a-lost-id-document-two-tracks.svg"
      altText="A diagram showing a single 'lost document' starting point branching into two parallel tracks: a top track labeled 'Replace' leading to contacting the issuing agency, and a bottom track labeled 'Protect' leading to placing a fraud alert or credit freeze, both running at the same time rather than sequentially."
      />
      <p>
      Running both tracks at the same time, rather than waiting for the replacement to finish before thinking about protection, is what actually closes the risk window quickly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Only focusing on getting a replacement document without considering identity-theft protection for the lost one.", fix: "Treat replacement and protection (fraud alert or credit freeze) as two separate, both-necessary steps, especially for higher-risk documents like a Social Security card or birth certificate." },
      { mistake: "Waiting to deal with a lost passport until returning home from a trip abroad.", fix: "Contact the nearest embassy or consulate immediately while still abroad, since it can issue emergency travel documents needed for re-entry." },
      { mistake: "Assuming a fraud alert requires separately contacting all three credit bureaus.", fix: "Contact just one of the three major bureaus — by law, it's required to notify the other two." },
      ]}
      />
      <MisconceptionCallout
      myth="Losing a driver's license or Social Security card isn't a big deal as long as you eventually get a replacement."
      reality={<p>Even a temporary gap between losing a document and replacing it creates a real window where someone else could potentially use the lost document to attempt identity theft. Protective steps like a fraud alert exist specifically to close that window quickly, independent of how long the replacement process itself takes.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Identify the specific issuing agency for the lost document (state DMV, Social Security Administration, Department of State) and start the replacement process there directly.",
      "If the lost document is a higher-risk type (Social Security card, birth certificate), place a fraud alert with one of the three major credit bureaus right away.",
      "If a passport is lost abroad, contact the nearest embassy or consulate immediately rather than waiting until returning home.",
      "If you suspect the lost document has already been misused, file a report through the FTC's official identity theft reporting resource.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What should I do first if I lose my wallet with my ID in it?", answer: "Contact the issuing agency for each lost document (state DMV for a license, Social Security Administration for a card) to start replacement, and consider placing a fraud alert with a credit bureau as a protective step." },
      { question: "How do I replace a lost passport while traveling?", answer: "Contact the nearest embassy or consulate of your home country immediately — they can issue emergency travel documents needed to return home, and can guide you through the full replacement process." },
      { question: "Do I need to contact all three credit bureaus to place a fraud alert?", answer: "No. Contacting just one of the three major bureaus is generally sufficient, since it's legally required to notify the other two." },
      { question: "Is losing a Social Security card more serious than losing a driver's license?", answer: "Generally yes, since a Social Security card is a foundational document that can potentially be used to obtain other identity documents, making it a higher identity-theft risk than a driver's license alone." },
      { question: "What is the difference between a fraud alert and a credit freeze?", answer: "A fraud alert requires lenders to take extra verification steps before extending new credit; a credit freeze more strongly blocks most new credit access outright until lifted — both are free to place." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
