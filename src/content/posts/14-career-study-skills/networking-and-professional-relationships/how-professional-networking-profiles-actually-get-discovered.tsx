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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Professional Networking Profiles Actually Get Discovered",
  category: "career-study-skills",
  order: 34,
  subtopic: "networking-and-professional-relationships",
  tags: ["professional profile", "recruiter search", "profile optimization", "keyword matching", "online visibility"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Professional profiles get discovered by literally matching the words in a search query to the words in a profile, then ranking matches by completeness and recent activity.",
  summary: "Professional networking profiles get discovered through keyword and skill matching against a search index, not through some general sense of a person's qualifications — a search query is matched to the literal words in a profile's fields, and among matching profiles, results are ranked further by how complete the profile is and how recently the person has been active.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
  ],
  seeAlso: [
    "career-study-skills/what-networking-actually-means-beyond-small-talk",
    "career-study-skills/what-applicant-tracking-systems-actually-do",
    "career-study-skills/how-to-ask-for-an-informational-interview",
  ],
  glossary: [
    { term: "Keyword matching", definition: "The process by which a search system compares the specific words in a query to the words present in a profile's fields, surfacing profiles that contain matching terms." },
    { term: "Search ranking", definition: "The order in which matching results are displayed, determined by a combination of relevance factors rather than by qualification alone." },
    { term: "Profile completeness", definition: "How fully a profile's available sections have been filled in — a factor that search and recommendation systems commonly weigh when ranking results, separate from the accuracy of the content itself." },
    { term: "Activity signal", definition: "A measure of how recently or often a person has engaged with a platform, used by many ranking systems as an indicator of an active, reachable profile worth surfacing." },
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
          "Discovery runs on literal word matching between a search query and a profile's fields — being qualified for something isn't enough if the matching words aren't actually present.",
          "Among profiles that match a search, results are typically ranked further by profile completeness and recent activity, not by qualification alone.",
          "Mirroring the specific terms used in real job postings for a target role, rather than vague or overly clever phrasing, makes a profile far more likely to surface in a relevant search.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When a recruiter searches for candidates, they&apos;re not reading every profile on the platform — they&apos;re typing specific search terms, and a system is matching those terms against the text in each profile. If your profile doesn&apos;t contain the actual words being searched for, it&apos;s much less likely to surface, even if you&apos;re genuinely qualified for the role in every other sense.</div>}
        detailed={<div className="prose-p">This is the <strong>lookup via index, not search</strong> mental model: rather than a human manually reading every profile, the platform maintains an index built from structured fields — headline, skills list, job titles, experience descriptions — and a search query is resolved against that pre-built index, not by evaluating actual competence. Among the profiles that match, a further <TermLink href="/career-study-skills/how-professional-networking-profiles-actually-get-discovered">search ranking</TermLink> step orders the results, commonly weighing <TermLink href="/career-study-skills/how-professional-networking-profiles-actually-get-discovered">profile completeness</TermLink> (how many sections are filled in) and <TermLink href="/career-study-skills/how-professional-networking-profiles-actually-get-discovered">activity signals</TermLink> (how recently the person has engaged with the platform) alongside raw relevance. The edge case that surprises people: two candidates with genuinely similar qualifications can rank very differently in the same search if one has a sparse, inactive profile and the other has a complete, recently updated one — the underlying skill level isn&apos;t what the system is measuring at that stage, the profile&apos;s text and activity are.</div>}
      />
      <FootnoteAside>This is structurally similar to how many online search engines work more broadly — a query is matched against an index built ahead of time, and results are ranked by a mix of relevance and quality signals, not evaluated fresh against every possible source each time a search happens.</FootnoteAside>

      <p>
        Once discovery is understood as keyword matching against an index rather than a holistic read of qualifications, the practical fix becomes clear: a profile has to actually contain the words someone would search for, not just describe the same skills in different language.
      </p>

      <QuickCheck
        question="Why might two candidates with genuinely similar real-world qualifications rank very differently for the exact same recruiter search?"
        options={[
          { text: "Because search ranking accounts for profile completeness and recent activity in addition to keyword relevance, not just underlying skill", correct: true, explanation: "Correct. The system is matching and ranking based on profile text, completeness, and activity signals — not directly assessing real-world competence, which it has no way to measure." },
          { text: "Because search systems randomly reorder equally qualified candidates each time a search runs", correct: false, explanation: "Ranking isn't random — it's driven by consistent factors like keyword match, completeness, and activity, which is exactly why a sparse profile can rank lower predictably." },
          { text: "Because only one candidate at a time can appear for any given search query", correct: false, explanation: "Search results typically return multiple matching profiles, not just one — the difference here is in ranking order, not exclusion." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A recruiter&apos;s search matches literal profile text (baseline case)</h3>
      <p>
        A recruiter searching for candidates types specific terms into a search field — a job title, a location, and one or two key skills. The system compares those terms against the headline, skills section, and experience text of every profile in its index, surfacing the ones that contain matching language. A profile that uses those exact terms (or close, common variants of them) appears in the results; a profile describing the same underlying experience with entirely different wording may not surface at all for that particular search.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Similar qualifications, very different visibility (edge case / variation)</h3>
      <div className="prose-p">
        Two people with comparable experience in the same field show up very differently in the same search. One has filled out every profile section, uses specific role and skill keywords throughout, and has engaged with the platform recently. The other has a mostly bare profile with a generic headline and hasn&apos;t logged in for over a year. Even though their actual qualifications are similar, the first profile ranks meaningfully higher, because completeness and recent activity are both factored into how the results get ordered, separate from the underlying skill level neither profile directly proves.
      </div>
      <QuickCheck
        question="Why does a complete, recently active profile tend to rank higher in search results than a sparse, dormant one, even with similar underlying qualifications?"
        options={[
          { text: "Because search ranking systems commonly weigh profile completeness and recent activity as signals, alongside keyword relevance", correct: true, explanation: "Correct. These are standard ranking factors precisely because a system has no direct way to measure real skill — completeness and activity are the observable signals it does have." },
          { text: "Because dormant profiles are automatically deleted after a fixed period of inactivity", correct: false, explanation: "That's not the mechanism at play here — a dormant profile can still exist and match a search, it's simply ranked lower, not removed." },
          { text: "Because only profiles updated within the last week are eligible to appear in any search results at all", correct: false, explanation: "Older or less active profiles can still appear in results — recency affects ranking position, not outright eligibility to be shown." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Updating a profile to match target job postings (real-world / applied case)</h3>
      <p>
        Someone job searching reviews several real postings for the type of role they want and notices a handful of specific terms — a job title variant, particular tools, a certification name — that show up repeatedly. They update their headline and skills section to include those exact terms where genuinely accurate, fill in previously blank sections, and start engaging with the platform periodically rather than leaving it untouched. Within a few weeks, they notice more recruiter messages arriving for roles that closely match what they&apos;re actually looking for.
      </p>
      <QuickCheck
        question="Why did updating the profile's headline and skills section with terms pulled directly from real job postings lead to more relevant recruiter contact?"
        options={[
          { text: "Because it aligned the profile's literal text with the exact terms recruiters were actually searching for, making it far more likely to match those specific queries", correct: true, explanation: "Correct. Discovery runs on matching the literal words in a search query against the words in a profile — mirroring real postings' language directly increases the chance of matching relevant searches." },
          { text: "Because updating a profile automatically notifies every recruiter on the platform of the change", correct: false, explanation: "Profile updates don't trigger mass notifications to recruiters — the improvement came from being more discoverable in searches, not from a broadcast alert." },
          { text: "Because job postings and search systems have no actual connection to each other", correct: false, explanation: "They're closely connected — the terms used in real postings are a strong proxy for the terms recruiters and search systems actually use, which is exactly why mirroring them helps." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a profile gets matched and ranked against a recruiter's search"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-professional-networking-profiles-actually-get-discovered-flow.svg"
        altText="A flow diagram showing how a professional profile gets discovered: the profile's text is indexed by its keyword and skill fields, a recruiter's search query is matched against that index, and results are ranked by keyword match, profile completeness, and recent activity."
      />
      <p>
        Nothing in this process reads a profile the way a human would. It matches text, then ranks by a fixed set of signals — which is exactly why the specific words on a profile matter as much as they do.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing a vague or overly creative headline instead of one containing concrete role and skill keywords.", fix: "Mirror the specific terms used in real job postings for your target role, as long as they're genuinely accurate." },
          { mistake: "Leaving profile sections blank or minimally filled out.", fix: "Complete every relevant section — profile completeness is commonly weighed as a ranking factor, separate from how good the content itself is." },
          { mistake: "Setting up a profile once and never engaging with it again.", fix: "Periodic activity is a common ranking signal in these systems — light, regular engagement helps keep a profile visible in recency-weighted searches." },
        ]}
      />
      <MisconceptionCallout
        myth="Having a profile online with your real experience listed means you'll show up whenever someone searches for your actual skill set."
        reality={<p>Discovery runs on matching the literal words in a search query against the literal words in a profile, not on some deeper evaluation of what a person can actually do. A genuinely qualified profile that describes the same skills using different terminology than what&apos;s being searched for may not surface at all for a relevant query. Being findable is a separate, deliberate step from being qualified — it requires actually using the words a searcher would type.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Review several real job postings in your target role and note the specific terms that repeat across them.",
          "Update your profile's headline, skills, and experience sections to include those terms, where genuinely accurate.",
          "Fill out every available profile section fully rather than leaving parts blank.",
          "Read How to Ask for an Informational Interview next to turn increased visibility into actual conversations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do recruiters find candidates on professional networking sites?", answer: "By running search queries with specific terms — job titles, skills, locations — that are matched against the indexed text in candidate profiles, then ranking the matches by relevance and other signals." },
          { question: "Does having a complete profile actually matter for being found?", answer: "Yes — profile completeness is a common factor in how ranking systems order search results, separate from the accuracy or strength of the content itself." },
          { question: "What keywords should I put in my profile?", answer: "The specific terms that show up repeatedly in real job postings for the role you want, as long as they genuinely and accurately describe your experience." },
          { question: "Does being active on a platform affect how often I show up in search?", answer: "Often, yes — many ranking systems weigh recent activity as a signal, meaning a dormant profile can rank lower than an active one even with similar qualifications." },
          { question: "Is a private or hidden profile still discoverable in search?", answer: "Generally not in the same way — most platforms exclude profiles set to private or hidden visibility from standard search results, regardless of how well the content matches a query." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
