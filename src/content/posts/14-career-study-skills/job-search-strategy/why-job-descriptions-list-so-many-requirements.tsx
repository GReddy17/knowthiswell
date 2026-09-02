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
  title: "Why Job Descriptions List So Many Requirements (Should You Still Apply?)",
  category: "career-study-skills",
  order: 24,
  subtopic: "job-search-strategy",
  tags: ["job description", "job requirements", "should i apply", "job search strategy", "qualifications"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Job descriptions blend true hard requirements with an aspirational wish list drafted by multiple people, which is why meeting most, but not all, of the listed items is often still enough to apply.",
  summary: "A job description isn't a strict pass/fail checklist — it's a compressed, multi-author summary of a hiring need, usually written by combining a hiring manager's wish list with HR or legal phrasing, which blends genuine hard requirements (a required license, a legally required credential) with aspirational \"nice to have\" items that were never meant to filter out an otherwise strong candidate.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "U.S. Equal Employment Opportunity Commission (EEOC)", url: "https://www.eeoc.gov" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
  ],
  seeAlso: [
    "career-study-skills/how-job-boards-actually-rank-listings",
    "career-study-skills/how-recruiters-actually-screen-candidates",
    "career-study-skills/what-applicant-tracking-systems-actually-do",
  ],
  glossary: [
    { term: "Hard requirement", definition: "A qualification a candidate must genuinely meet to be considered for a role, such as a required license, a legally mandated credential, or work authorization." },
    { term: "Preferred qualification", definition: "An item listed as desirable rather than mandatory, often marked \"preferred\" or \"nice to have,\" that a strong candidate can lack without being automatically disqualified." },
    { term: "Requirements creep", definition: "The tendency for a job description to accumulate more items than the role genuinely needs, as multiple people add their own wish-list criteria during drafting." },
    { term: "Job requisition", definition: "The internal request and approval record that authorizes an open role and typically feeds the initial draft of the public job description." },
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
          "A job description is written by combining several people's input into one document, which is why it typically blends genuine hard requirements with an aspirational wish list.",
          "Hard requirements — a required license, a legally mandated credential, work authorization — are usually non-negotiable; most everything else listed is a softer, often flexible preference.",
          "Meeting roughly 60 to 70% of the listed qualifications, including all the true hard requirements, is generally still a reasonable basis to apply, not an automatic disqualifier.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A job description isn&apos;t a strict checklist where missing any single line disqualifies you. It&apos;s more like an ideal-candidate wish list, usually written by combining a hiring manager&apos;s input with HR or template phrasing. Some items — a <TermLink href="/career-study-skills/why-job-descriptions-list-so-many-requirements">hard requirement</TermLink> like a required license or legal work authorization — really are non-negotiable. Most other items, especially long lists of years-of-experience or specific tool familiarity, are closer to a <TermLink href="/career-study-skills/why-job-descriptions-list-so-many-requirements">preferred qualification</TermLink> than a strict filter.</div>}
        detailed={<div className="prose-p">This is the <strong>encode → transmit/store → decode</strong> mental model: the real hiring need — team gaps, budget, what the role actually requires day to day — gets encoded into a written document by multiple people (hiring manager, HR, sometimes legal or a template), and that encoding compresses and distorts the original need. A hiring manager&apos;s casual &quot;it&apos;d be great if they also knew X&quot; can end up phrased identically to a genuine must-have, a pattern often called <TermLink href="/career-study-skills/why-job-descriptions-list-so-many-requirements">requirements creep</TermLink>. The job seeker&apos;s task is to decode which lines reflect the original, essential need and which are inflation from the drafting process. The edge case: a posting that fails to separate &quot;required&quot; from &quot;preferred&quot; sections at all forces the reader to infer the distinction — generally, anything tied to a legal credential, license, or safety requirement stays a hard filter regardless of formatting, while specific years-of-experience or tool-familiarity phrasing is usually the most compressible part of the list.</div>}
      />
      <FootnoteAside>A job description usually starts life as an internal <TermLink href="/career-study-skills/why-job-descriptions-list-so-many-requirements">job requisition</TermLink> — the request and approval record that authorizes the opening — before it&apos;s rewritten into the public-facing posting, which is one more step where wording can drift from the original, narrower need.</FootnoteAside>

      <p>
        Once the multi-author drafting process is visible, it explains why a posting can list a dozen or more qualifications for a role that, in practice, only truly requires a handful of them.
      </p>

      <QuickCheck
        question="Why do job descriptions often list more qualifications than a role actually strictly needs?"
        options={[
          { text: "Because employers are required by law to list a minimum number of qualifications per posting", correct: false, explanation: "There's no such legal minimum — the length reflects how the document was drafted, not a regulatory requirement." },
          { text: "Because the posting is typically drafted by combining multiple people's input, which tends to accumulate aspirational or wish-list items alongside the genuine hard requirements", correct: true, explanation: "Correct. Multi-author drafting is the main driver of requirements creep — the list reflects several people's wishes, not a single, tightly scoped filter." },
          { text: "Because job boards automatically insert extra requirements to reduce the number of applicants", correct: false, explanation: "Job boards don't add requirements to postings — the wording comes entirely from the employer, not the platform hosting the listing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A posting that clearly separates required from preferred (baseline case)</h3>
      <p>
        A posting has two clearly labeled sections: &quot;Required Qualifications&quot; listing a specific degree, a professional license, and legal work authorization, and &quot;Preferred Qualifications&quot; listing several years of experience with a particular tool and familiarity with a specific methodology. A candidate meets every required item but only two of the four preferred items. Because the required section covers genuine hard requirements and the candidate clears all of them, applying is reasonable — the preferred section is exactly the kind of wish-list content it&apos;s labeled as.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An undifferentiated list mixing hard and soft items (edge case / variation)</h3>
      <div className="prose-p">
        A different posting lists ten bullet points with no &quot;required&quot; vs. &quot;preferred&quot; split at all — everything from &quot;must hold an active state license to practice&quot; to &quot;familiarity with a specific reporting tool preferred&quot; sits in one undifferentiated list. A candidate has to infer the distinction: the license line is almost certainly a genuine hard requirement, tied to legal ability to do the job, while the tool-familiarity line reads like something learnable on the job and is a much softer filter, even though the formatting treats both lines identically.
      </div>
      <QuickCheck
        question="A posting lists a required professional license and a specific reporting tool in the same undifferentiated bullet list, with no 'required' vs 'preferred' labeling. How should a candidate weigh the two items differently?"
        options={[
          { text: "Treat both items as equally strict, since they appear in the same unlabeled list", correct: false, explanation: "Formatting doesn't determine which items are genuine hard requirements — a legally required license and a learnable tool skill carry very different weight regardless of how the list is formatted." },
          { text: "Treat the license as a likely genuine hard requirement tied to legal ability to do the job, and the specific tool familiarity as a softer, more learnable preference", correct: true, explanation: "Correct. Items tied to legal credentials or licensure are the most reliable hard filters, while specific tool or software familiarity is usually one of the most flexible items on a list." },
          { text: "Assume neither item matters much since the posting didn't bother to label them as required or preferred", correct: false, explanation: "The lack of labeling doesn't mean nothing matters — a required license still functions as a genuine hard filter even when a posting's formatting is inconsistent." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deciding whether to apply while meeting most, not all, criteria (real-world / applied case)</h3>
      <p>
        A candidate reviews a posting and counts roughly seven of ten listed qualifications they clearly meet, including every item that reads like a genuine hard requirement — legal work authorization, the stated minimum years in the field, and any required certification. The remaining three unmet items are specific tools and a slightly higher years-of-experience figure than they have. Rather than skipping the application, they apply, reasoning that the hard requirements are covered and the rest reads like the kind of wish-list phrasing that&apos;s common in postings drafted from multiple people&apos;s input.
      </p>
      <QuickCheck
        question="A candidate meets all the apparent hard requirements in a posting but falls short on a couple of the softer, preference-style items. What's a reasonable way to decide whether to apply?"
        options={[
          { text: "Skip applying entirely, since not meeting 100% of the listed qualifications means automatic disqualification", correct: false, explanation: "Job descriptions typically aren't strict 100%-match filters — meeting the genuine hard requirements while falling short on some softer preferences is a common, reasonable basis to still apply." },
          { text: "Apply, since the hard requirements are covered and the unmet items read like the aspirational, wish-list-style content that commonly appears in postings drafted from multiple people's input", correct: true, explanation: "Correct. Weighing which unmet items are genuine filters versus softer preferences is exactly the reasoning that determines whether applying makes sense." },
          { text: "Apply only if the posting explicitly states that partial matches are welcome", correct: false, explanation: "Most postings don't include this kind of explicit invitation — the decision to apply with a partial match is a reasonable default based on distinguishing hard from soft requirements, not something that needs to be stated outright." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Hard requirements vs. preferred/aspirational items in a typical posting"
        type="comparison"
        svgSrc="/diagrams/career-study-skills-why-job-descriptions-list-so-many-requirements-comparison.svg"
        altText="A comparison diagram showing hard requirements, which are usually non-negotiable items like a required license, degree, or legal work authorization, next to preferred or aspirational requirements, like years of experience or specific tool familiarity, that a candidate can often still apply without fully meeting."
      />
      <p>
        Sorting a posting&apos;s items into these two columns — rather than treating the whole list as a single strict bar — is usually the more accurate way to read it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Skipping an otherwise strong-fit application because a couple of preferred, non-legal items aren't fully met.", fix: "Separate the true hard requirements — licenses, credentials, legal work authorization — from softer preferences before deciding whether an unmet item is actually disqualifying." },
          { mistake: "Assuming every listed item carries equal weight simply because it's on the list.", fix: "Read for signals of genuine necessity (legal, safety, or credential-related language) versus wish-list phrasing (specific tools, exact years, general soft-skill adjectives)." },
          { mistake: "Applying to a role while missing a genuine hard requirement, assuming enthusiasm will make up the gap.", fix: "Treat legally or credential-based requirements as real filters — these are usually the one category of listed item that isn't negotiable through interview performance alone." },
        ]}
      />
      <MisconceptionCallout
        myth="If you don't meet every single qualification listed in a job posting, applying is a waste of time and you'll be automatically screened out."
        reality={<p>Postings are typically drafted from multiple people&apos;s input and tend to accumulate more items than the role strictly needs, so meeting most — but not literally all — of the listed qualifications is a common and often successful basis to apply. The exception is the genuine hard requirements: a required license, a legally mandated credential, or work authorization. Those really do function as filters. Everything else on a typical list carries more flexibility than the format of a bulleted checklist suggests.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When reading a posting, sort the listed items into two mental categories: genuine hard requirements (licenses, credentials, legal work authorization) and softer preferences.",
          "Apply if you clearly meet the hard requirements, even when you fall short on some of the softer, wish-list-style items.",
          "If a posting doesn't separate required from preferred, use the content itself as the signal — legal, safety, or credential-related language usually marks a genuine filter.",
          "Read What Applicant Tracking Systems Actually Do next to see how a submitted resume gets screened against a posting's listed keywords once you apply.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do job postings list so many qualifications?", answer: "Because a posting is typically drafted by combining input from multiple people — a hiring manager's wish list, HR phrasing, sometimes a template — which tends to accumulate more items than the role strictly needs, a pattern often called requirements creep." },
          { question: "Should I apply if I don't meet all the listed requirements?", answer: "Often yes, as long as you meet the genuine hard requirements, like any required license, credential, or legal work authorization — softer items such as specific years of experience or tool familiarity are usually more flexible than the list format suggests." },
          { question: "How can I tell which job requirements are actually non-negotiable?", answer: "Language tied to a legal credential, license, safety qualification, or work authorization is the most reliable signal of a genuine hard requirement — specific years-of-experience figures and named tools or software are usually the most flexible, wish-list-style items." },
          { question: "What's the difference between required and preferred qualifications on a job posting?", answer: "Required qualifications are meant to function as filters a candidate genuinely needs to meet; preferred qualifications are desirable extras that a strong candidate can lack without being automatically disqualified — though not every posting labels the two sections clearly." },
          { question: "Do employers expect candidates to meet 100% of a job description?", answer: "Generally no — because postings are typically drafted from an aspirational combination of inputs, most hiring processes expect candidates to meet the core requirements and a meaningful portion, not literally every listed item." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
