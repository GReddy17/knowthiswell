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
  title: "Voter Registration Explained",
  category: "legal-documentation-howtos",
  order: 31,
  subtopic: "government-and-civic-documentation",
  tags: ["voter registration", "elections", "civic documentation", "voting eligibility", "civic literacy"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "Voter registration is the administrative step that links an eligible person's identity to a specific voting jurisdiction — a distinct process from voting itself, with its own deadlines and documentation.",
  summary: "Voter registration is the administrative process of confirming eligibility and linking a person's identity to a specific voting jurisdiction before an election, distinct from the act of voting itself — it typically requires proof of identity and residence, has its own deadline separate from election day, and rules vary significantly by state and country.",
  sources: [
    { label: "Vote.gov — Official U.S. Government Voter Registration Portal", url: "https://vote.gov/" },
    { label: "U.S. Election Assistance Commission", url: "https://www.eac.gov/" },
    { label: "National Conference of State Legislatures — Elections & Voting", url: "https://www.ncsl.org/elections-and-campaigns" },
  ],
  seeAlso: [
    "legal-documentation-howtos/how-to-read-a-government-form-general-literacy",
    "legal-documentation-howtos/understanding-permits-and-licenses-general-categories",
    "legal-documentation-howtos/freedom-of-information-requests-explained",
  ],
  glossary: [
    {"term":"Voter registration deadline","definition":"The date by which a completed voter registration application must be submitted or received in order to be eligible to vote in an upcoming election, distinct from election day itself."},
    {"term":"Proof of residence","definition":"Documentation, such as a utility bill or government-issued ID showing a current address, used to confirm that a voter registration applicant actually resides in the jurisdiction where they're registering."},
    {"term":"Voter roll","definition":"The official list maintained by an election authority of everyone currently registered to vote within a given jurisdiction."},
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
      "Voter registration is a distinct administrative step from voting itself — it confirms eligibility and links your identity to a specific jurisdiction's voter roll before an election.",
      "Registration deadlines are typically separate from and earlier than election day itself, and requirements (proof of identity, proof of residence, timing) vary significantly by state and country.",
      "This is general civic process literacy, not a substitute for checking your specific jurisdiction's official election authority for exact deadlines and requirements where you live.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Voter registration is the step that happens before voting, not the vote itself. An eligible person submits an application — on paper, online, or in person — that confirms their identity and links them to the specific jurisdiction (often a county or district) where they&apos;ll vote. Once processed, that person&apos;s name appears on the local <TermLink href="/legal-documentation-howtos/voter-registration-explained">voter roll</TermLink>, and on election day, poll workers check that roll to confirm eligibility before issuing a ballot. Missing the <TermLink href="/legal-documentation-howtos/voter-registration-explained">voter registration deadline</TermLink> — which in many places is well before election day — generally means being unable to vote in that specific election, even if otherwise eligible.</div>}
      detailed={<div className="prose-p">Registration requirements are set primarily at the state (or, outside the U.S., national) level, which is why the specific documents needed as <TermLink href="/legal-documentation-howtos/voter-registration-explained">proof of residence</TermLink>, the registration deadline relative to election day, and whether same-day registration is available at all differ substantially by jurisdiction. Some jurisdictions automatically register eligible residents through interactions with other government agencies (like a driver&apos;s license renewal), while others require an entirely separate, affirmative application. Re-registration or an address update is often required after moving to a new jurisdiction, since a voter roll entry is typically tied to a specific address, not just a person&apos;s identity in the abstract.</div>}
      />
      <FootnoteAside>Because registration rules genuinely differ by state and country, the single most reliable source for exact requirements and deadlines is the official election authority for your specific jurisdiction, not a general reference article.</FootnoteAside>

      <p>
      The distinction between registering and voting is the most important thing to internalize — treating them as the same step is the most common reason an otherwise-eligible person ends up unable to vote.
      </p>

      <QuickCheck
      question="Why can someone who is fully eligible to vote still be turned away at the polls?"
      options={[
      { text: "Because eligibility to vote and being registered to vote are two different things — an eligible person who never completed registration, or missed the registration deadline, generally won't appear on the voter roll", correct: true, explanation: "Correct. Eligibility (age, citizenship, residency) is necessary but not sufficient — registration is the separate administrative step that must also be completed, by its own deadline, for a person's name to appear on the roll poll workers check." },
      { text: "Poll workers have discretion to turn away any voter for any reason", correct: false, explanation: "Poll workers follow specific, defined procedures tied to the voter roll and identification requirements — this isn't a discretionary judgment call, and most jurisdictions have provisional ballot processes for disputed cases." },
      { text: "Voter registration only matters in national elections, not local ones", correct: false, explanation: "Voter registration generally covers all elections held within the jurisdiction a person is registered in, not just national-level races — a single registration typically applies across the applicable local, state, and national elections for that address." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Registering for the first time (baseline case)</h3>
      <div className="prose-p">
      A person turning 18 before an upcoming election completes an online or paper voter registration application, providing identifying information and proof of residence as required by their state. The application is processed by the local election authority, and once confirmed, the person&apos;s name is added to the voter roll for their precinct ahead of the registration deadline.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Moving to a new address before an election (edge case / variation)</h3>
      <div className="prose-p">
      Someone already registered to vote moves to a new address within the same state, but doesn&apos;t update their voter registration. Because their voter roll entry is tied to their old address&apos;s precinct, they may need to vote at their old precinct, complete an address update in advance, or in some jurisdictions cast a provisional ballot — the specific outcome depends on how far in advance of the election the move happened and the jurisdiction&apos;s specific rules.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Missing a registration deadline (real-world / applied case)</h3>
      <div className="prose-p">
      An eligible voter decides to register two days before election day, unaware that their state&apos;s registration deadline was three weeks prior. Because the deadline had already passed, they were unable to vote in that specific election — a genuinely common outcome that stems from confusing the registration deadline with election day itself, since the two are frequently set weeks apart.
      </div>

      <QuickCheck
      question="Someone moves to a new state two months before an election. What should they check first regarding voter registration?"
      options={[
      { text: "Whether they're automatically re-registered by their previous state's election authority", correct: false, explanation: "Voter registration is generally tied to a specific state and doesn't automatically transfer when someone moves across state lines — the person typically needs to register in their new state." },
      { text: "Their new state's specific voter registration deadline and requirements, since both can differ substantially from their previous state", correct: true, explanation: "Correct. Registration deadlines, required documentation, and whether same-day registration is available are all set at the state level and vary — checking the new state's official election authority directly is the reliable way to confirm requirements." },
      { text: "Nothing — voter registration rules are federally standardized and identical everywhere", correct: false, explanation: "In the U.S., voter registration is administered primarily at the state level, and specific requirements and deadlines vary meaningfully from state to state." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From eligibility to casting a ballot"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-voter-registration-explained-registration-flow.svg"
      altText="A flow diagram showing four sequential steps: Confirm Eligibility, Submit Registration Application by the Deadline, Added to Voter Roll, and Vote on Election Day — with a note that the registration deadline typically falls before election day, not on it."
      />
      <p>
      The gap between the registration deadline and election day is the part most often overlooked — treating registration as something that can be handled at the last minute, alongside voting itself, is the most common way an eligible person misses their chance to vote in a given election.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming voter registration and voting happen on the same day or as one combined step.", fix: "Check your specific jurisdiction's registration deadline separately — in most places it falls well before election day, though a growing number of jurisdictions do offer same-day registration." },
      { mistake: "Forgetting to update voter registration after moving to a new address, even within the same state.", fix: "Update your voter registration whenever you move, since your roll entry is tied to a specific address and precinct, not just your identity generally." },
      { mistake: "Assuming registration requirements are identical everywhere.", fix: "Check your specific state or country's official election authority, since required documentation and deadlines vary meaningfully by jurisdiction." },
      ]}
      />
      <MisconceptionCallout
      myth="If you're eligible to vote (of age, a citizen, a resident), you're automatically able to vote without any separate registration step."
      reality={<p>In most U.S. states and many countries, eligibility and registration are separate: an eligible person must still complete a registration application, by its own deadline, before their name appears on the voter roll checked at the polls. A small and growing number of jurisdictions offer automatic or same-day registration, but this isn&apos;t universal, which is why checking your specific jurisdiction&apos;s rules directly matters.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check your current voter registration status and your specific jurisdiction's registration deadline for any upcoming election.",
      "If you've moved recently, update your voter registration to your new address rather than assuming it carries over automatically.",
      "Gather whatever proof of identity and residence your jurisdiction requires before starting the registration application.",
      "Use your official state or national election authority's website (not a third-party site) to register or check your status, to ensure the information is authoritative and current.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How is voter registration different from voting?", answer: "Registration is the administrative step of confirming eligibility and adding your name to a jurisdiction's voter roll before an election; voting is the separate act of actually casting a ballot, which typically requires having already completed registration." },
      { question: "What documents are usually needed to register to vote?", answer: "Requirements vary by jurisdiction but commonly include proof of identity (such as a driver's license or state ID) and proof of residence at a current address — check your specific state or country's election authority for exact requirements." },
      { question: "Does moving to a new address require re-registering to vote?", answer: "Generally yes — since a voter roll entry is tied to a specific address and precinct, moving (even within the same state) typically requires an address update or new registration to vote correctly at your new precinct." },
      { question: "Is there a deadline to register before an election?", answer: "Most jurisdictions set a registration deadline that falls before election day, sometimes by several weeks, though a growing number of places offer same-day registration — check your specific jurisdiction's official election authority for the exact date." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
