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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Applicant Tracking Systems (ATS) Actually Do to a Resume",
  category: "career-study-skills",
  order: 11,
  subtopic: "resume-and-application-fundamentals",
  tags: ["applicant tracking system", "ats", "resume", "job application", "resume formatting"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "An applicant tracking system parses a resume into structured data and ranks it by keyword match — it doesn't reject candidates on its own the way most job seekers assume.",
  summary: "An applicant tracking system (ATS) is software that stores, parses, and searches job applications for a hiring team — it extracts a resume's text into structured fields and lets recruiters filter or rank candidates by keyword, not silently reject anyone by itself.",
  sources: [
    { label: "U.S. Department of Labor — CareerOneStop", url: "https://www.careeronestop.org/" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org/" },
    { label: "National Association of Colleges and Employers (NACE)", url: "https://www.naceweb.org/" },
  ],
  seeAlso: [
    "career-study-skills/resume-vs-cv-whats-the-real-difference",
    "career-study-skills/how-to-quantify-achievements-on-a-resume",
    "career-study-skills/chronological-vs-functional-resume-formats",
  ],
  glossary: [
    { term: "Applicant tracking system (ATS)", definition: "Software used by employers to collect, store, parse, and search job applications, and to move candidates through hiring stages." },
    { term: "Parsing", definition: "The process of extracting text from a document and mapping it into structured fields, such as name, work history, education, and skills." },
    { term: "Keyword match rate", definition: "The proportion of a job posting's important terms that also appear in a given resume, used by recruiters to sort or filter a large applicant pool." },
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
          "An ATS doesn't make hiring decisions — it parses a resume into structured data and gives recruiters tools to search, filter, and rank the applicant pool.",
          "Most 'ATS rejections' are actually parsing failures: a resume format the software can't read cleanly into fields, so real qualifications never make it into the searchable record.",
          "Keyword matching mirrors the actual job posting's language, not just the underlying skill — a recruiter searching for a specific term won't surface a resume that uses only a synonym.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/career-study-skills/what-applicant-tracking-systems-actually-do">applicant tracking system</TermLink> is software a company uses to manage job applications — it stores every resume that comes in, pulls out the text, and lets recruiters search or sort the pile instead of opening hundreds of files by hand. It doesn&apos;t &quot;reject&quot; anyone on its own in most setups; it just makes some resumes easier to find than others.</div>}
        detailed={<div className="prose-p">This is the <strong>lookup via index, not search</strong> mental model: instead of a recruiter reading every resume start to finish, the ATS builds a searchable index by <TermLink href="/career-study-skills/what-applicant-tracking-systems-actually-do">parsing</TermLink> each document into fields — name, contact info, job titles, dates, skills — and a recruiter queries that index for terms from the job posting. The edge case that causes most of the frustration: a resume built with columns, text boxes, tables, or graphics-heavy templates can parse into scrambled or missing fields, even though a human reading the same PDF would understand it perfectly. The software isn&apos;t rejecting the candidate&apos;s qualifications — it&apos;s failing to extract them into the index in the first place, which has the same practical effect.</div>}
      />
      <FootnoteAside>Large employers can receive hundreds of applications for a single posting; ATS software exists primarily to make that volume searchable for a recruiting team, not to auto-eliminate candidates by itself. The final filtering decision is still made by a person setting search terms or reviewing a ranked list.</FootnoteAside>

      <p>
        Once parsing and searching are separated from rejecting, the practical advice follows directly: a resume needs to parse cleanly into text and needs to contain the same words a recruiter would actually search for.
      </p>

      <QuickCheck
        question="What does an applicant tracking system primarily do with an incoming resume?"
        options={[
          { text: "It automatically decides whether the candidate is qualified and rejects unqualified ones without human involvement", correct: false, explanation: "Most ATS platforms don't make an autonomous accept/reject decision — that's a common myth. They organize and surface applications for a human to review." },
          { text: "It parses the resume into structured, searchable data and gives recruiters tools to filter and rank the resulting pool", correct: true, explanation: "Correct. The core function is storage, parsing, and search — turning a stack of documents into a searchable database for the hiring team." },
          { text: "It only stores the resume as a file with no text extraction or search capability", correct: false, explanation: "If that were true, ATS software wouldn't provide any advantage over a shared folder — the value comes specifically from parsing and searching." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A clean single-column resume parses correctly (baseline case)</h3>
      <p>
        A candidate submits a resume with a simple, single-column layout: name and contact info at the top, then clearly labeled sections for experience, education, and skills, each using standard headings. The ATS extracts every field correctly — job titles land in the job-title field, dates land in the date field — so when a recruiter searches for a specific skill or job title, this resume shows up in the results exactly as intended.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A two-column, graphics-heavy resume parses incorrectly (edge case / variation)</h3>
      <div className="prose-p">
        A different candidate, equally qualified, submits a visually striking resume with a two-column layout, a skills sidebar in a shaded box, and a headshot. Many parsers read left-to-right across the full page width, so text from the sidebar interleaves mid-sentence with the main column&apos;s text, scrambling job titles and dates. The recruiter&apos;s keyword search misses this candidate entirely — not because they lack the skills, but because the parsed record doesn&apos;t contain a coherent version of them.
      </div>
      <QuickCheck
        question="Why might a well-qualified candidate's resume fail to appear in an ATS keyword search, even though the information is clearly visible on the page?"
        options={[
          { text: "Because the ATS deliberately filters out resumes above a certain length", correct: false, explanation: "Length isn't typically what causes a parsing failure — layout complexity is the far more common culprit." },
          { text: "Because a complex layout (columns, text boxes, graphics) can cause the parser to extract garbled or misplaced text, so the searchable record doesn't match what a human sees", correct: true, explanation: "Correct. Visual clarity to a human reader doesn't guarantee clean extraction — parsing depends on a simple, linear document structure." },
          { text: "Because ATS software can only process resumes shorter than one page", correct: false, explanation: "Page length isn't the mechanism here — layout complexity, not length, is what breaks parsing." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Matching the job posting&apos;s exact language (real-world / applied case)</h3>
      <p>
        A job posting repeatedly uses the term &quot;project management,&quot; but a candidate&apos;s resume only says &quot;managed cross-functional initiatives.&quot; A recruiter searching the ATS for &quot;project management&quot; won&apos;t surface that resume, even though the underlying experience matches closely — the software matches text, not meaning. Adjusting the resume to include the posting&apos;s actual phrase, where it&apos;s genuinely accurate, puts the candidate back into that search result without changing anything about the real qualifications.
      </p>
      <QuickCheck
        question="A job posting uses the phrase 'customer relationship management' repeatedly. A resume describes similar work as 'client account handling.' What's the most direct fix?"
        options={[
          { text: "Nothing — the ATS understands synonyms automatically", correct: false, explanation: "Most keyword search in ATS platforms matches literal text, not synonyms or paraphrased meaning, so this leaves the resume unmatched." },
          { text: "Rewrite the experience entirely, even where it isn't accurate, just to include more industry buzzwords", correct: false, explanation: "Inflating or fabricating experience is both dishonest and risky in an interview — the fix should be accurate, not invented." },
          { text: "Where accurate, incorporate the posting's actual terminology (e.g. 'customer relationship management') alongside the existing description", correct: true, explanation: "Correct. Matching the posting's real language, when it truthfully describes the work, closes the keyword gap without misrepresenting anything." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a resume moves from submission to a recruiter's search results"
        type="flow"
        svgSrc="/diagrams/career-study-skills-what-applicant-tracking-systems-actually-do-parsing-flow.svg"
        altText="A flow diagram showing a resume being submitted, then parsed by the ATS into structured fields such as name, job titles, dates, and skills, then stored in a searchable database, and finally surfaced to a recruiter only when their keyword search matches the parsed fields."
      />
      <p>
        Every step in that chain depends on the previous one working cleanly — a resume that parses badly at step two never has a fair chance at step four, no matter how strong the underlying experience is.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using tables, text boxes, or multi-column layouts to make a resume look more designed.", fix: "Stick to a single-column layout with standard section headings — visual complexity is exactly what breaks parsing." },
          { mistake: "Assuming a low response rate means the ATS is 'rejecting' the candidate.", fix: "Check whether the resume parses cleanly first (many ATS platforms let candidates preview the parsed version) before assuming it's a qualifications problem." },
          { mistake: "Stuffing a resume with unrelated keywords to try to match every possible posting.", fix: "Match the specific posting's real language for skills that are genuinely present — irrelevant keyword stuffing reads badly to the human who eventually reviews the shortlist." },
        ]}
      />
      <MisconceptionCallout
        myth="The ATS automatically rejects most resumes before a human ever sees them."
        reality={<p>In most implementations, the software doesn&apos;t make an autonomous reject decision — a recruiter sets search terms or filters, and the ATS returns a ranked or filtered list for a person to review. The practical effect can look like automatic rejection when a resume parses badly or misses the posting&apos;s key terms, but the mechanism is a search index missing a match, not a judgment being made by the software itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a resume's keyword match rate"
        description="A simplified way to see how much of a job posting's key terminology a resume currently covers."
        fields={[
          { key: "matchedKeywords", label: "Job-posting keywords present in the resume", defaultValue: 12 },
          { key: "totalKeywords", label: "Total important keywords in the job posting", defaultValue: 20 },
        ]}
        resultLabel="Keyword match rate (%)"
        formula="resumeKeywordMatchPercent"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Save your resume as a standard, single-column layout without tables, text boxes, or columns before submitting it to any online application system.",
          "Copy the job posting's key skill and role terms and check that your resume genuinely uses the same language, where accurate.",
          "If a platform offers a 'parsed preview,' check it — confirm your job titles, dates, and skills all landed in the correct fields.",
          "Read How to Quantify Achievements on a Resume next to strengthen what's actually inside those parsed fields.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Does an ATS automatically reject resumes?", answer: "Not on its own in most setups — it parses and indexes resumes so recruiters can search and filter them. What looks like automatic rejection is usually a resume that parsed poorly or missed the posting's key terms, not a decision made by the software." },
          { question: "What resume format is safest for an ATS?", answer: "A single-column layout with standard section headings (Experience, Education, Skills), saved as a .docx or a text-based PDF rather than a scanned image, parses most reliably across different ATS platforms." },
          { question: "Do I need to match every keyword in a job posting exactly?", answer: "No — match the posting's genuine key terms where your real experience supports them. Stuffing unrelated keywords can hurt more than it helps once a human reviews the shortlist." },
          { question: "Can a human resume reviewer see the same thing the ATS parsed?", answer: "Often, yes — many systems show recruiters both the original file and the parsed text, so a garbled parse can still be caught by an attentive reviewer, but it reduces the odds of the resume surfacing in a keyword search in the first place." },
          { question: "Should I use a PDF or a Word document for online applications?", answer: "Either can work if it's a genuine text-based file rather than a scanned image — a plain, simply formatted document parses reliably in either format; the layout complexity matters more than the file type itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
