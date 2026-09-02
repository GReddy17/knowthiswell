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
  title: "Resume vs. CV: What's the Real Difference",
  category: "career-study-skills",
  order: 12,
  subtopic: "resume-and-application-fundamentals",
  tags: ["resume vs cv", "curriculum vitae", "job application", "resume basics", "academic cv"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "A resume is a short, tailored summary of relevant experience; a CV is a comprehensive, chronological record of an entire academic and professional career.",
  summary: "The real difference between a resume and a CV (curriculum vitae) isn't regional spelling — it's purpose and length: a resume is a short, tailored document highlighting relevant experience for one specific role, while a CV is a comprehensive, ever-growing record of a person's full academic and professional history.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics — Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
    { label: "National Association of Colleges and Employers (NACE)", url: "https://www.naceweb.org/" },
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org/" },
  ],
  seeAlso: [
    "career-study-skills/what-applicant-tracking-systems-actually-do",
    "career-study-skills/chronological-vs-functional-resume-formats",
    "career-study-skills/how-to-quantify-achievements-on-a-resume",
  ],
  glossary: [
    { term: "Curriculum vitae (CV)", definition: "A comprehensive, chronological document listing a person's full academic and professional history, including publications, presentations, and credentials — used mainly in academia, research, and some international job markets." },
    { term: "Resume", definition: "A short, targeted document (typically one to two pages) summarizing the experience and skills most relevant to a specific job." },
    { term: "Tailoring", definition: "Adjusting which experience and skills are included or emphasized in an application document to match a specific job posting." },
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
          "A resume is short and selective — it includes only the experience relevant to one specific job, and typically stays under two pages regardless of career length.",
          "A CV is comprehensive and cumulative — it grows over an entire career and includes items a resume would never list, like publications, conference presentations, or grants.",
          "Which one to use depends on the field and region, not personal preference: academia, research, medicine, and many international job markets expect a CV; most other roles in general industry expect a resume.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/career-study-skills/resume-vs-cv-whats-the-real-difference">resume</TermLink> is a short document — usually one page, sometimes two — that highlights only the experience relevant to a specific job you&apos;re applying for. A <TermLink href="/career-study-skills/resume-vs-cv-whats-the-real-difference">curriculum vitae (CV)</TermLink> is a much longer, complete record of your academic and professional life: every degree, publication, presentation, grant, and role, listed in full, that keeps growing as your career continues.</div>}
        detailed={<div className="prose-p">The distinction maps cleanly onto the <strong>abstraction layers</strong> mental model in reverse: a resume deliberately hides most of a candidate&apos;s full history, surfacing only what&apos;s relevant to the reader&apos;s specific decision, while a CV exposes the complete underlying record with nothing hidden. The edge case worth knowing: outside the United States and Canada, &quot;CV&quot; is often used as the general term for what Americans call a resume — a short, job-specific document — which is why job postings from different countries can use the same word to mean genuinely different document types. When in doubt, the posting&apos;s actual instructions (length, required sections) matter more than which word it uses.</div>}
      />
      <FootnoteAside>In academic and research hiring, a CV commonly runs several pages to tens of pages for a senior researcher, because completeness — not brevity — is the expected norm; omitting a publication isn&apos;t seen as focus, it&apos;s seen as an inaccurate record.</FootnoteAside>

      <p>
        Once purpose is separated from length, the practical rule becomes simple: match the document type the field and the specific posting expect, not the one you&apos;re more familiar with.
      </p>

      <QuickCheck
        question="What is the core functional difference between a resume and a CV in U.S. usage?"
        options={[
          { text: "A resume is only for entry-level jobs, and a CV is only for senior jobs", correct: false, explanation: "Seniority isn't the distinguishing factor — a CV is standard even for early-career academic or research positions, while a resume is standard even for senior industry roles." },
          { text: "A resume is a short, tailored document for one job; a CV is a comprehensive, cumulative record of an entire career", correct: true, explanation: "Correct. The difference is purpose and completeness — a resume selects, a CV documents everything." },
          { text: "They are identical documents with different names depending on the country", correct: false, explanation: "In U.S./Canadian usage specifically, they refer to genuinely different document types with different length and content expectations, not just a naming difference." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A marketing professional applying for an industry role (baseline case)</h3>
      <p>
        A marketing manager with eight years of experience applies to a corporate marketing director role. They submit a two-page resume that highlights only their most relevant campaigns, results, and leadership experience — older or unrelated roles from early in their career are summarized in one line or omitted. This is the expected format for the role and industry.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A researcher applying for a university faculty position (edge case / variation)</h3>
      <div className="prose-p">
        A biology researcher applies for a tenure-track faculty position. Instead of a short resume, they submit a twelve-page CV listing every publication with full citations, every conference presentation, every grant they&apos;ve received, and every course they&apos;ve taught. Trimming this to a two-page resume-style document would actually work against them — the hiring committee expects the complete record as part of evaluating research output and academic standing.
      </div>
      <QuickCheck
        question="Why would submitting a short, resume-style summary instead of a full CV hurt a candidate applying for an academic faculty position?"
        options={[
          { text: "Because academic hiring committees specifically expect a complete, itemized record of publications and academic activity, which a condensed resume format can't provide", correct: true, explanation: "Correct. In academic hiring, completeness is the norm, not a stylistic choice — a shortened document looks like missing information, not focus." },
          { text: "Because CVs are legally required for any academic job by federal law", correct: false, explanation: "There's no such legal requirement — it's a strong field-specific convention, not a legal one." },
          { text: "Because resumes take longer for a hiring committee to read than a CV", correct: false, explanation: "The opposite is generally true — a resume is shorter. The issue is missing information the committee needs, not reading time." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Applying to jobs in two different countries (real-world / applied case)</h3>
      <p>
        A software engineer applies to a company in the United States and, separately, to a company in a country where &quot;CV&quot; is the standard term for a short application document. For the U.S. role, they submit a two-page American-style resume. For the international role, they submit a similarly short document but label it &quot;CV&quot; because that&apos;s the term the posting uses and the expected length in that market — not a comprehensive academic-style document. The content strategy is nearly identical; only the label and local convention differ.
      </p>
      <QuickCheck
        question="A job posting outside North America asks for a 'CV' and specifies a two-page limit. What should the candidate submit?"
        options={[
          { text: "A comprehensive, many-page academic-style document, since the posting used the word 'CV'", correct: false, explanation: "The posting's explicit length limit overrides the word choice — in that region, 'CV' commonly just means what Americans call a resume." },
          { text: "A short, targeted document matching the stated two-page limit, understanding that the local usage of 'CV' refers to what would be called a resume elsewhere", correct: true, explanation: "Correct. The posting's actual instructions (length, content) tell you what's expected far more reliably than the label alone, especially across regions." },
          { text: "Refuse to apply, since the terminology is inconsistent with U.S. usage", correct: false, explanation: "The terminology difference is a known regional convention, not a red flag — following the posting's explicit instructions resolves it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Resume vs. CV: purpose, length, and content compared"
        type="comparison"
        svgSrc="/diagrams/career-study-skills-resume-vs-cv-whats-the-real-difference-comparison.svg"
        altText="A side-by-side comparison diagram: a resume column showing short length, one to two pages, tailored to one job, and used in general industry; a CV column showing long and growing length, comprehensive career record, used in academia, research, and medicine."
      />
      <p>
        The two columns rarely overlap in practice — a role expecting one format almost never expects the other, which is why matching the field&apos;s convention matters more than personal preference.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Submitting a full academic-style CV to a general industry job posting.", fix: "Condense to a tailored one-to-two-page resume — industry recruiters expect brevity and relevance, not a complete record." },
          { mistake: "Trimming a genuine academic CV down to resume length for a faculty or research application.", fix: "Keep it comprehensive — academic hiring committees specifically expect the complete publication and activity record." },
          { mistake: "Assuming the word used in a job posting always signals document length, regardless of region.", fix: "Check the posting's actual instructions (page limit, required sections) — regional usage of the word 'CV' varies." },
        ]}
      />
      <MisconceptionCallout
        myth="Resume and CV are just two different words for the exact same document."
        reality={<p>In U.S. and Canadian usage, they&apos;re functionally different documents — different length, different purpose, different expected content. A resume selects and tailors; a CV documents comprehensively. Outside North America, &quot;CV&quot; often does simply mean what Americans call a resume, which is where the confusion usually comes from — it&apos;s a regional naming difference layered on top of a real functional difference, not purely one or the other.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the job posting's field: general industry roles almost always expect a resume; academic, research, and medical roles almost always expect a CV.",
          "If the posting specifies a page limit, follow it regardless of which word ('resume' or 'CV') the posting uses.",
          "For a resume, cut anything not relevant to the specific job — for a CV, keep the full record complete and up to date.",
          "Read How to Quantify Achievements on a Resume next to strengthen the content once you've picked the right format.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is a CV the same as a resume?", answer: "Not in U.S. and Canadian usage — a CV is a comprehensive, growing record of an entire academic and professional career, while a resume is a short, tailored summary for one specific job. Outside North America, 'CV' often just means what Americans call a resume." },
          { question: "When should I use a CV instead of a resume?", answer: "Use a CV for academic, research, medical, or scientific positions where a complete record of publications, presentations, and credentials is expected. Use a resume for most general industry roles." },
          { question: "How long should a CV be compared to a resume?", answer: "A resume is typically one to two pages regardless of experience level. A CV has no fixed length — it grows with a person's career and can run to many pages for a senior academic or researcher." },
          { question: "Can I use the same document for both a resume and a CV request?", answer: "Not reliably — the content expectations differ enough (selective and tailored vs. comprehensive and complete) that using one document for both purposes usually under- or over-delivers for at least one of them." },
          { question: "Why does a job posting from another country ask for a 'CV' but only want two pages?", answer: "In much of the world outside North America, 'CV' is simply the standard term for what Americans call a resume — a short, job-specific document, not the comprehensive academic-style record the word implies in the U.S." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
