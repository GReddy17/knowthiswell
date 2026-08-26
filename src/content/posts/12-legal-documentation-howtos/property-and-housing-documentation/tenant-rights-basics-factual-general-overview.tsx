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
  title: "Tenant Rights Basics (Factual General Overview)",
  category: "legal-documentation-howtos",
  order: 13,
  subtopic: "property-and-housing-documentation",
  tags: ["tenant rights", "habitability", "eviction", "renting", "legal documentation how-tos"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "Tenant rights aren't a single national standard — they're a bundle of protections that recur across most jurisdictions in similar form, even though the specific rules and enforcement mechanisms differ by location.",
  summary: "Tenant rights are the legal protections that generally accompany renting a home — most commonly a right to a habitable living space, protection from certain kinds of retaliation, and a required legal process before eviction — and while the specific rules vary significantly by state, province, or country, these three categories of protection recur in some form across most rental law systems.",
  sources: [
    { label: "U.S. Department of Housing and Urban Development — Tenant Rights", url: "https://www.hud.gov/topics/rental_assistance/tenantrights" },
    { label: "Cornell Legal Information Institute — Landlord-Tenant Law", url: "https://www.law.cornell.edu/wex/landlord-tenant_law" },
    { label: "Nolo — Tenant Rights FAQ", url: "https://www.nolo.com/legal-encyclopedia/tenants-rights" },
  ],
  seeAlso: [
    "legal-documentation-howtos/understanding-rental-agreements-clause-by-clause",
    "legal-documentation-howtos/security-deposits-rules-and-rights-general-overview",
    "legal-documentation-howtos/landlord-responsibilities-basics-factual-general-overview",
  ],
  glossary: [
    {"term":"Habitability","definition":"The legal standard that a rental unit must meet basic conditions for safe, livable occupancy — such as working plumbing, heat, and structural safety — regardless of what the lease says."},
    {"term":"Retaliatory eviction","definition":"An attempt by a landlord to evict, penalize, or non-renew a tenant specifically because the tenant exercised a legal right, such as requesting repairs or reporting a code violation — generally prohibited where recognized by law."},
    {"term":"Due process (in eviction)","definition":"The requirement that a landlord follow a specific, legally defined notice-and-court process before removing a tenant, rather than removing them unilaterally (a 'self-help' eviction)."},
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
      "Three categories of tenant protection recur across most jurisdictions: a right to habitable conditions, protection from retaliation for exercising legal rights, and a required legal process before eviction.",
      "Habitability generally can't be waived by lease language — a lease clause saying a landlord isn't responsible for repairs doesn't override a jurisdiction's habitability standard where one exists.",
      "A landlord generally can't remove a tenant, their belongings, or utilities without going through the legally required eviction process (a 'self-help eviction'), even if the landlord believes they're in the right.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Tenant rights are the basic protections most renters have, regardless of what a specific lease says. The core ones that show up almost everywhere in some form: the home has to actually be livable (safe, working plumbing and heat), a landlord generally can&apos;t punish a tenant for asking for repairs or reporting a problem, and a landlord can&apos;t just remove a tenant without going through a proper legal process. The exact rules differ by location, but this general shape repeats widely.</div>}
      detailed={<div className="prose-p">The <TermLink href="/legal-documentation-howtos/tenant-rights-basics-factual-general-overview">habitability</TermLink> standard is often described as an &quot;implied warranty of habitability&quot; in U.S. law — meaning it applies automatically to a residential lease even if the lease doesn&apos;t mention it, and typically can&apos;t be waived by lease language. What counts as habitable (working heat, plumbing, structural safety, freedom from serious pest infestation) is defined by local housing codes, which vary. Protection against <TermLink href="/legal-documentation-howtos/tenant-rights-basics-factual-general-overview">retaliatory eviction</TermLink> means a landlord generally can&apos;t respond to a tenant exercising a legal right (requesting a repair, reporting a code violation, joining a tenant organization) by evicting them, raising rent, or refusing to renew specifically because of that action — though proving retaliation as the actual motive can be practically difficult. Finally, <TermLink href="/legal-documentation-howtos/tenant-rights-basics-factual-general-overview">due process in eviction</TermLink> means a landlord must follow a specific legal sequence — typically a written notice, a defined cure or response period, and if unresolved, a court filing and judgment — rather than unilaterally changing locks, removing belongings, or shutting off utilities to force a tenant out (a &quot;self-help&quot; eviction), which most jurisdictions prohibit regardless of whether the landlord has a valid underlying reason to want the tenant gone.</div>}
      />
      <FootnoteAside>Some tenant protections (rent control, source-of-income discrimination bans, extended notice periods) exist only in specific states, cities, or countries rather than universally — a local tenant rights organization or legal aid office is generally the most reliable source for what applies in a specific location.</FootnoteAside>

      <p>
      These three protections work independently of each other and independently of the lease&apos;s own wording, which is exactly why a lease clause that appears to waive one of them often isn&apos;t actually enforceable.
      </p>

      <QuickCheck
      question="A lease includes a clause stating the landlord is not responsible for any repairs during the tenancy. The heating system breaks in winter. Does this clause relieve the landlord of any repair obligation?"
      options={[
      { text: "Yes, whatever the signed lease says controls, regardless of local housing codes", correct: false, explanation: "Habitability standards, where they exist, are generally treated as an implied requirement of residential leases that can't be waived away by contract language — a clause attempting to disclaim all repair responsibility for essential systems is commonly unenforceable." },
      { text: "No — a habitability standard, where it applies, generally can't be waived by lease language, so a working heating system likely still needs to be maintained regardless of what the clause says", correct: true, explanation: "Correct. This is exactly the kind of clause that looks binding on paper but often isn't enforceable in practice, because habitability protections are designed to apply regardless of what a lease states." },
      { text: "It depends only on how the clause is worded, with no relevance to local law", correct: false, explanation: "The controlling factor is what local law/housing code actually recognizes as an inescapable habitability protection, not primarily the clause's wording — checking local law is the reliable way to know." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Requesting a repair for a habitability issue (baseline case)</h3>
      <div className="prose-p">
      A tenant notices a persistent plumbing leak causing water damage and notifies the landlord in writing, requesting repair within a reasonable time. This is the normal exercise of a habitability-related right — a functioning plumbing system generally falls within what most jurisdictions define as a basic habitability requirement, and the written notice creates a documented record of the request and its date.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A landlord attempting a lockout instead of formal eviction (edge case)</h3>
      <div className="prose-p">
      Frustrated by a rent dispute, a landlord changes the locks on a tenant&apos;s unit while the tenant is at work, without any court order. Most jurisdictions treat this kind of self-help action as illegal regardless of whether the underlying rent dispute has merit — the landlord is generally required to go through the formal notice-and-court eviction process rather than acting unilaterally, and a tenant facing this situation typically has a strong basis to seek immediate help from a local tenant rights organization, legal aid office, or law enforcement.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A rent increase shortly after a code complaint (real-world / applied case)</h3>
      <div className="prose-p">
      A tenant reports a housing code violation to a local inspection office. Two weeks later, the landlord announces a significant rent increase or a decision not to renew the lease. If retaliation protections apply in that jurisdiction, the close timing between the complaint and the adverse action can be relevant evidence, though proving the increase was specifically motivated by the complaint (rather than some coincidental, legitimate business reason) is often the harder practical question — this is a genuinely fact-specific determination best evaluated with a local tenant rights organization or attorney rather than assumed either way.
      </div>

      <QuickCheck
      question="Can a landlord remove a tenant's belongings from a unit without going through a court eviction process, if the landlord believes the tenant is significantly behind on rent?"
      options={[
      { text: "Yes, if the landlord has clear proof the tenant owes back rent", correct: false, explanation: "Having a valid underlying claim (unpaid rent) doesn't generally authorize a landlord to bypass the formal eviction process — most jurisdictions require the legal process to be followed regardless of how strong the landlord's case is." },
      { text: "No — most jurisdictions require a landlord to go through the formal notice-and-court eviction process regardless of how strong the underlying claim is, and prohibit unilateral 'self-help' actions", correct: true, explanation: "Correct. Due process protections in eviction exist specifically to prevent landlords from acting unilaterally, even when they believe (or can prove) they have a valid underlying reason." },
      { text: "Only if the tenant is more than 90 days behind on rent", correct: false, explanation: "There's no such universal exception based on how far behind rent is — the requirement to follow formal eviction procedure generally doesn't scale down based on the size of the arrears." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Three core categories of tenant protection"
      type="comparison"
      svgSrc="/diagrams/legal-documentation-howtos-tenant-rights-basics-factual-general-overview-three-protections.svg"
      altText="A comparison diagram showing three categories of tenant protection that recur across most jurisdictions: habitability (livable conditions), protection from retaliation, and due process before eviction."
      />
      <p>
      These categories recur widely, but the specific rules, thresholds, and enforcement mechanisms within each one vary significantly by jurisdiction.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a lease clause disclaiming a repair obligation is automatically enforceable.", fix: "Recognize that habitability protections, where they apply, generally can't be waived by lease language — check local housing codes rather than relying on the lease's wording alone." },
      { mistake: "Not documenting repair requests or complaints in writing.", fix: "Put repair requests and code complaints in writing (email or letter) and keep copies, since this creates a timeline that matters if a retaliation or habitability dispute arises later." },
      { mistake: "Assuming any self-help action by a landlord (lockout, utility shutoff, seizing belongings) is illegal only if done maliciously.", fix: "Understand that most jurisdictions prohibit self-help evictions outright, regardless of the landlord's underlying motive or how valid their claim might be." },
      ]}
      />
      <MisconceptionCallout
      myth="A landlord can change the locks or shut off utilities to remove a tenant, as long as the tenant genuinely owes back rent."
      reality={<p>Owing back rent is generally not a legal basis for a landlord to bypass the formal eviction process. Most jurisdictions require a specific notice-and-court procedure before a tenant can be lawfully removed, and prohibit unilateral actions like changing locks or shutting off utilities regardless of how valid the underlying rent claim is.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Look up the specific tenant rights and eviction procedures that apply in your state, province, or country.",
      "Put repair requests and complaints about the unit's condition in writing, and keep dated copies.",
      "If facing a lockout, utility shutoff, or removal of belongings without a court process, contact a local tenant rights organization or law enforcement promptly.",
      "If you suspect retaliation after exercising a legal right, document the timeline and consult a local tenant rights organization or attorney.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Can a landlord evict a tenant without going to court?", answer: "Most jurisdictions require a formal notice-and-court process before a tenant can be lawfully evicted — unilateral 'self-help' actions like changing locks or removing belongings are generally prohibited regardless of the landlord's underlying reason." },
      { question: "Can a lease waive a tenant's right to habitable conditions?", answer: "Generally no — habitability standards, where recognized, typically apply automatically to a residential lease and can't be waived by lease language, even if the lease explicitly attempts to disclaim repair responsibility." },
      { question: "What is retaliatory eviction?", answer: "It's an attempt by a landlord to evict, penalize, or not renew a tenant specifically because the tenant exercised a legal right, such as requesting a repair or reporting a code violation — many jurisdictions prohibit this, though proving the retaliatory motive can be practically difficult." },
      { question: "Do tenant rights vary by state or country?", answer: "Yes, significantly — while categories like habitability, anti-retaliation, and due process in eviction recur widely, the specific rules, notice periods, and enforcement mechanisms differ by jurisdiction, so checking the local rule is important." },
      { question: "What should I do if my landlord tries to remove me without a court process?", answer: "Contact a local tenant rights organization, legal aid office, or law enforcement promptly — self-help evictions are generally illegal regardless of the landlord's underlying claim, and immediate local help is usually more useful than trying to resolve it alone." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
