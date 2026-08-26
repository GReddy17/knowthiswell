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
  title: "Landlord Responsibilities Basics (Factual General Overview)",
  category: "legal-documentation-howtos",
  order: 14,
  subtopic: "property-and-housing-documentation",
  tags: ["landlord responsibilities", "habitability", "fair housing", "renting", "legal documentation how-tos"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "Being a landlord comes with legal obligations that exist independently of what a lease says — maintaining habitable conditions, following fair housing rules, and respecting notice requirements before entering a unit chief among them.",
  summary: "Landlord responsibilities are the legal obligations that generally accompany renting out a property to a tenant — most notably maintaining habitable conditions, complying with fair housing/anti-discrimination law, providing proper notice before entering a rented unit, and following the correct legal process for eviction — and while specific rules vary by jurisdiction, these categories of obligation recur widely across rental law systems.",
  sources: [
    { label: "U.S. Department of Housing and Urban Development — Fair Housing", url: "https://www.hud.gov/fairhousing/fair_housing_equal_opp" },
    { label: "Cornell Legal Information Institute — Landlord-Tenant Law", url: "https://www.law.cornell.edu/wex/landlord-tenant_law" },
    { label: "Nolo — Landlord Responsibilities", url: "https://www.nolo.com/legal-encyclopedia/landlords-tenants" },
  ],
  seeAlso: [
    "legal-documentation-howtos/tenant-rights-basics-factual-general-overview",
    "legal-documentation-howtos/understanding-rental-agreements-clause-by-clause",
    "legal-documentation-howtos/security-deposits-rules-and-rights-general-overview",
  ],
  glossary: [
    {"term":"Fair housing law","definition":"Legal rules prohibiting discrimination in renting or selling housing based on protected characteristics such as race, religion, national origin, sex, familial status, or disability, among others depending on jurisdiction."},
    {"term":"Notice to enter","definition":"A required advance notification a landlord generally must give a tenant before entering a rented unit for non-emergency purposes, with the required notice period varying by jurisdiction."},
    {"term":"Constructive eviction","definition":"A situation where a landlord's failure to maintain habitable conditions is severe enough that a tenant can treat the lease as effectively ended and move out, even without a formal eviction — recognized in some jurisdictions under specific conditions."},
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
      "A landlord's core obligations generally include maintaining habitable conditions, complying with fair housing law, giving proper notice before entering the unit, and following the legal eviction process.",
      "Fair housing rules apply throughout the rental relationship — in advertising, screening applicants, and day-to-day treatment of tenants — not just at the point of signing a lease.",
      "A landlord's obligations exist independently of a tenant's own behavior — a tenant being late on rent doesn't suspend the landlord's separate habitability or notice-to-enter obligations.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Being a landlord comes with a set of legal duties that exist whether or not the lease spells them out. The main ones: keep the unit in livable condition, don&apos;t discriminate against applicants or tenants based on protected characteristics, give advance notice before entering the unit for non-emergencies, and follow the proper legal process to remove a tenant rather than acting unilaterally. These obligations run alongside whatever specific terms are in the lease.</div>}
      detailed={<div className="prose-p">The habitability obligation mirrors the tenant-side habitability right — a landlord generally must maintain the structural safety, plumbing, heating, and other essential systems of a rental unit, and this obligation typically can&apos;t be waived by lease language. <TermLink href="/legal-documentation-howtos/landlord-responsibilities-basics-factual-general-overview">Fair housing law</TermLink> prohibits discrimination based on protected characteristics (which vary somewhat by jurisdiction but commonly include race, religion, national origin, sex, familial status, and disability) at every stage — advertising a unit, screening applicants, setting terms, and even day-to-day treatment during the tenancy. The <TermLink href="/legal-documentation-howtos/landlord-responsibilities-basics-factual-general-overview">notice to enter</TermLink> requirement means a landlord generally can&apos;t enter a rented unit whenever they choose — most jurisdictions require advance written notice (commonly 24 to 48 hours) for non-emergency entry, with genuine emergencies (like a fire or serious water leak) typically treated as an exception. Persistent failure to meet habitability obligations can, in some jurisdictions and under specific conditions, give rise to <TermLink href="/legal-documentation-howtos/landlord-responsibilities-basics-factual-general-overview">constructive eviction</TermLink> — effectively allowing a tenant to treat the lease as ended due to the landlord&apos;s failure, without a formal eviction ever being filed.</div>}
      />
      <FootnoteAside>Fair housing protections and their exact list of protected characteristics vary meaningfully by jurisdiction — some states and cities add categories (such as source of income or sexual orientation) beyond what&apos;s protected at a national level, so checking the local rule rather than assuming a single universal list is the reliable approach.</FootnoteAside>

      <p>
      Because these obligations exist independently of the tenant&apos;s own conduct, a landlord can&apos;t treat a tenant&apos;s late rent payment as a reason to skip notice-to-enter requirements or delay urgent habitability repairs.
      </p>

      <QuickCheck
      question="A tenant is two months behind on rent. Does this change the landlord's obligation to give proper notice before entering the unit for a routine, non-emergency inspection?"
      options={[
      { text: "Yes, a landlord can enter without notice once a tenant is behind on rent", correct: false, explanation: "The notice-to-enter obligation and the tenant's rent payment status are generally treated as separate matters — being behind on rent doesn't typically suspend a landlord's own notice obligations for non-emergency entry." },
      { text: "No — the landlord's notice-to-enter obligation generally still applies for a routine, non-emergency entry regardless of whether the tenant is behind on rent", correct: true, explanation: "Correct. A landlord's obligations and a tenant's rent obligations are separate threads — one party's non-compliance doesn't automatically excuse the other party's separate legal obligations." },
      { text: "It depends only on how far behind on rent the tenant is", correct: false, explanation: "There's no sliding scale where falling further behind on rent progressively excuses a landlord's notice-to-enter obligation — the amount owed and the entry notice requirement are unrelated legal questions." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Giving proper notice before a routine inspection (baseline case)</h3>
      <div className="prose-p">
      A landlord wants to inspect a unit&apos;s smoke detectors annually. Following typical notice requirements, they send written notice 48 hours in advance, stating the date, approximate time window, and purpose of the visit. This is the standard, compliant way to exercise a landlord&apos;s legitimate right to access the property for a non-emergency purpose.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A genuine emergency entry without advance notice (edge case)</h3>
      <div className="prose-p">
      A neighboring unit reports water leaking through a shared ceiling, suggesting a burst pipe. The landlord enters the affected unit immediately, without the usual 24-48 hour notice, to address the active emergency. Most jurisdictions recognize a genuine emergency exception to standard notice requirements — the key distinguishing factor is whether the situation actually poses an immediate risk of harm or serious property damage, not merely landlord convenience.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A long-ignored repair request escalating into a legal dispute (real-world / applied case)</h3>
      <div className="prose-p">
      A tenant reports a broken heating system in a cold-climate rental in October and follows up repeatedly through January without the landlord making repairs. Depending on the jurisdiction and how severe the loss of heat is, this pattern could potentially support a habitability complaint, a rent-withholding remedy (where legally recognized), or, in more extreme and sustained cases, a constructive eviction claim — which specific remedy applies, and under what conditions, depends heavily on local law, making this exactly the kind of situation where consulting a local tenant rights organization or attorney (from the tenant&apos;s side) is more reliable than assuming a generic outcome.
      </div>

      <QuickCheck
      question="Can a landlord refuse to rent to an applicant because of their religion?"
      options={[
      { text: "Yes, as long as the landlord doesn't state the reason explicitly", correct: false, explanation: "Fair housing law generally prohibits discrimination based on religion regardless of whether the landlord states the reason explicitly — the underlying motive is what matters, not whether it was announced." },
      { text: "No — religion is a protected characteristic under fair housing law in most jurisdictions, and refusing to rent on that basis is generally prohibited discrimination", correct: true, explanation: "Correct. Fair housing protections apply at the applicant-screening stage, not just during an existing tenancy, and religion is commonly one of the protected characteristics covered." },
      { text: "It depends only on whether the applicant can prove financial hardship separately", correct: false, explanation: "Financial qualification and protected-characteristic discrimination are separate issues — a landlord can generally screen based on legitimate financial criteria, but not substitute a protected characteristic like religion as the real reason for a denial." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Core landlord obligations over the life of a tenancy"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-landlord-responsibilities-basics-factual-general-overview-obligations-timeline.svg"
      altText="A flow diagram showing landlord obligations across the tenancy lifecycle: fair housing compliance during advertising and screening, habitability maintenance and notice-to-enter during the tenancy, and proper legal process if eviction becomes necessary."
      />
      <p>
      Fair housing obligations start before a lease is even signed, and habitability/notice obligations continue throughout the tenancy — none of these are one-time boxes to check.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming fair housing rules only apply once a lease is signed, not during advertising or screening.", fix: "Apply fair housing standards consistently from the advertising and applicant-screening stage onward, not just during an active tenancy." },
      { mistake: "Entering a rented unit without proper advance notice for non-emergency reasons.", fix: "Provide the required advance written notice (commonly 24-48 hours, check local rules) except in genuine emergencies." },
      { mistake: "Treating a tenant's late rent as justification for skipping the landlord's own separate legal obligations.", fix: "Keep habitability maintenance and notice-to-enter obligations current regardless of a tenant's payment status — pursue rent issues through the proper legal channel instead." },
      ]}
      />
      <MisconceptionCallout
      myth="A landlord can enter a rental unit at any time, since they own the property."
      reality={<p>Ownership of a property doesn&apos;t override a tenant&apos;s legal right to quiet enjoyment and advance notice during an active tenancy. Most jurisdictions require a landlord to give advance written notice before non-emergency entry, with only genuine emergencies (like an active fire or serious leak) typically treated as an exception.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Review the fair housing protected characteristics that apply in your jurisdiction, since the list often extends beyond national minimums at the state or city level.",
      "Confirm the required advance notice period for entering a rented unit for non-emergency purposes.",
      "Address habitability-related repair requests promptly and document the timeline of requests and responses.",
      "If facing an eviction decision, follow the legally required notice-and-court process rather than acting unilaterally.",
      "For an unfamiliar or high-stakes situation, consult a local landlord-tenant attorney or housing authority.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What are a landlord's basic legal responsibilities?", answer: "Common core obligations include maintaining habitable conditions, complying with fair housing/anti-discrimination law, providing proper advance notice before entering the unit, and following the correct legal process before eviction — specific rules vary by jurisdiction." },
      { question: "Can a landlord enter a rental unit without notice?", answer: "Generally only in a genuine emergency (such as an active fire or serious leak) — for non-emergency purposes, most jurisdictions require advance written notice, commonly 24 to 48 hours." },
      { question: "Does fair housing law apply during tenant screening, or only after signing a lease?", answer: "It applies throughout, including advertising the unit and screening applicants — discrimination based on a protected characteristic at the screening stage is generally prohibited just as much as during an active tenancy." },
      { question: "What happens if a landlord fails to maintain habitable conditions?", answer: "Depending on the jurisdiction, remedies can include the tenant pursuing repairs through legal channels, rent withholding or repair-and-deduct options where recognized, or in severe and sustained cases, a constructive eviction claim — the specific remedy available depends heavily on local law." },
      { question: "Does a tenant's late rent payment excuse a landlord from their own legal obligations?", answer: "No — a landlord's habitability and notice-to-enter obligations are generally treated as separate from a tenant's rent payment status, and a landlord is expected to pursue unpaid rent through the proper legal process rather than withholding their own obligations in response." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
