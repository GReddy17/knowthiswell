import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "What a PMP Certification Actually Requires",
  category: "professional-skills-certifications",
  order: 5,
  subtopic: "choosing-a-certification",
  tags: ["pmp", "project management professional", "pmi", "pmp eligibility", "pdu"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 78, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "You can't just study for the PMP and sit the exam. PMI first requires three to five years of documented experience leading projects plus 35 hours of project management education, and the credential lapses unless you earn 60 PDUs every three years.",
  summary: "The Project Management Professional (PMP) credential from the Project Management Institute (PMI) is gated by experience, not just an exam. Per PMI's PMP handbook, applicants with a four-year degree need at least 36 months of non-overlapping experience leading and directing projects within the past eight years; applicants with a high school diploma or associate's degree need 60 months; graduates of a GAC-accredited program need 24 months. All applicants also need 35 contact hours of project management education, unless they hold an active CAPM. Applications can be selected for a random audit. The handbook describes a 180-question exam (5 of them unscored pretest questions) with 230 minutes of testing time, covering people, process and business-environment domains and roughly equal parts predictive and agile/hybrid approaches. Candidates get up to three attempts within a one-year eligibility period. To keep the credential, holders earn 60 professional development units (PDUs) every three years.",
  sources: [
    { label: "Project Management Institute — Project Management Professional (PMP)", url: "https://www.pmi.org/certifications/project-management-pmp" },
    { label: "Project Management Institute — PMP Certification Handbook (PDF)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-handbook.pdf" },
    { label: "Project Management Institute — Maintain your certification (CCR)", url: "https://www.pmi.org/certifications/certification-resources/maintain" },
    { label: "U.S. Bureau of Labor Statistics — Project Management Specialists (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm" },
  ],
  seeAlso: [
    "professional-skills-certifications/what-continuing-education-credits-actually-require",
    "professional-skills-certifications/what-project-management-certification-actually-teaches-you",
    "professional-skills-certifications/how-agile-and-scrum-actually-differ",
    "professional-skills-certifications/how-to-actually-choose-between-competing-certifications",
    "professional-skills-certifications/what-a-certificate-actually-differs-from-a-certification",
    "career-study-skills/how-to-quantify-achievements-on-a-resume",
    "professional-skills-certifications/what-google-analytics-certification-actually-verifies",
    "professional-skills-certifications/how-to-actually-prepare-for-a-certification-exam",
  ],
  glossary: [
    { term: "PMP (Project Management Professional)", definition: "A professional certification from the Project Management Institute that requires documented project leadership experience, project management education, and passing an exam." },
    { term: "Contact hours", definition: "Hours of formal instruction in project management. PMP applicants need 35, unless they hold an active CAPM." },
    { term: "CAPM", definition: "Certified Associate in Project Management, PMI's entry-level credential with no experience requirement. An active CAPM waives the PMP's 35-hour education requirement." },
    { term: "PDU (professional development unit)", definition: "PMI's unit for continuing education and giving back to the profession; one PDU generally equals one hour of qualifying activity. PMP holders need 60 every three years." },
    { term: "Application audit", definition: "A random check where PMI asks an applicant to provide proof, such as signatures from supervisors and education certificates, before approving them to test." },
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

export const quiz: QuizBankItem[] = [
  {"question": "How much project experience does a PMP applicant with a four-year degree need, per PMI's handbook?", "difficulty": "easy", "options": [{"text": "36 months leading and directing projects within the last eight years", "correct": true, "explanation": "Three years of non-overlapping experience, all within the past eight years."}, {"text": "None, only the exam is required", "correct": false, "explanation": "The PMP is experience-gated."}, {"text": "10 years in any job", "correct": false, "explanation": "It's specifically project leadership experience, and 36 months for degree holders."}]},
  {"question": "How much experience does an applicant with only a high school diploma need?", "difficulty": "medium", "options": [{"text": "60 months", "correct": true, "explanation": "Five years, versus 36 months with a four-year degree."}, {"text": "36 months", "correct": false, "explanation": "That's the four-year degree path."}, {"text": "They aren't eligible", "correct": false, "explanation": "They're eligible with more experience."}]},
  {"question": "What education requirement applies to all PMP applicants?", "difficulty": "easy", "options": [{"text": "35 contact hours of project management education, unless they hold an active CAPM", "correct": true, "explanation": "An active CAPM waives the 35 hours."}, {"text": "A master's degree in project management", "correct": false, "explanation": "No specific degree is required."}, {"text": "A four-year degree in business", "correct": false, "explanation": "A high school diploma path exists."}]},
  {"question": "Two projects you led overlapped for six months. How does that count toward the requirement?", "difficulty": "hard", "options": [{"text": "The overlapping six months count once, because experience must be non-overlapping months", "correct": true, "explanation": "PMI counts unique calendar months, not project-months."}, {"text": "They count twice, 12 months total", "correct": false, "explanation": "Overlapping time isn't double-counted."}, {"text": "Neither project counts", "correct": false, "explanation": "Both count; the overlap just isn't doubled."}]},
  {"question": "According to PMI's handbook, how many questions are on the PMP exam, and how many are scored?", "difficulty": "medium", "options": [{"text": "180 questions, 175 scored (5 are unscored pretest questions)", "correct": true, "explanation": "Pretest questions are mixed in and don't affect your score."}, {"text": "100 questions, all scored", "correct": false, "explanation": "The handbook lists 180."}, {"text": "300 questions over two days", "correct": false, "explanation": "It's a single sitting of 230 minutes."}]},
  {"question": "What must a PMP holder do to keep the credential active?", "difficulty": "easy", "options": [{"text": "Earn 60 PDUs every three years", "correct": true, "explanation": "That's PMI's Continuing Certification Requirements cycle."}, {"text": "Retake the exam every year", "correct": false, "explanation": "Renewal is through PDUs, not re-examination."}, {"text": "Nothing; it's valid for life", "correct": false, "explanation": "It lapses without PDUs and renewal."}]},
  {"question": "Your application is selected for audit. What does that usually mean?", "difficulty": "medium", "options": [{"text": "You must provide proof, such as supervisor sign-off on experience and education certificates", "correct": true, "explanation": "Audits verify what you claimed; selection is random."}, {"text": "PMI suspects you of fraud", "correct": false, "explanation": "Audits are selected randomly."}, {"text": "You must retake a course", "correct": false, "explanation": "You need to document what you already claimed."}]},
  {"question": "How many attempts at the exam do you get in one eligibility period?", "difficulty": "hard", "options": [{"text": "Up to three within one year", "correct": true, "explanation": "After three failed attempts you must wait before reapplying, per the handbook."}, {"text": "Unlimited", "correct": false, "explanation": "Attempts are capped."}, {"text": "Only one", "correct": false, "explanation": "You have up to three."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The PMP is gated by experience: 36 months leading projects with a four-year degree, or 60 months without one, plus 35 hours of project management education.",
          "The exam itself is long: PMI's handbook lists 180 questions in 230 minutes, about half on traditional (predictive) methods and half on agile or hybrid.",
          "It isn't a one-time achievement. You keep it by earning 60 professional development units (PDUs) every three years.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most exams only check what you know. The PMP also checks what you&apos;ve done. Before you&apos;re even allowed to book the test, you have to show the Project Management Institute that you&apos;ve spent years actually leading projects, not just working on them, and that you&apos;ve had at least 35 hours of project management training. Think of it less like a driving test and more like a pilot&apos;s license, where logged flight hours come before the check ride. That&apos;s exactly why employers value it: it signals real experience plus a shared vocabulary, not just a weekend of study.</div>}
        detailed={<div className="prose-p">PMI&apos;s handbook sets three eligibility paths. With a <strong>secondary degree</strong> (high school or associate&apos;s), you need 60 months of unique, non-overlapping professional project management experience. With a <strong>four-year degree</strong>, 36 months. With a degree from a <strong>GAC-accredited</strong> program, 24 months. In every case the experience must be within the eight years before you apply and must involve leading and directing projects, defined as temporary endeavors creating a unique product, service or result. All applicants also need <strong>35 contact hours</strong> of formal project management education, waived for active CAPM holders. Applications are randomly selected for audit, where you submit supervisor verification and course certificates. Once approved, the handbook describes a <strong>180-question exam</strong>, 5 of them unscored pretest items, with 230 minutes of testing time and two 10-minute breaks. Its content outline weights three domains, People, Process and Business Environment, and states that about half the exam covers predictive approaches and half covers <TermLink href="/professional-skills-certifications/how-agile-and-scrum-actually-differ">agile</TermLink> or hybrid approaches. You get up to three attempts within a one-year eligibility period. After passing, the Continuing Certification Requirements (CCR) program requires <strong>60 PDUs per three-year cycle</strong>. The edge case: &quot;non-overlapping&quot; means two concurrent projects in the same month count as one month, which trips up many applicants who add up project lengths.</div>}
      />
      <FootnoteAside>PMI periodically updates the exam content outline, fees and application details. Check PMI&apos;s current PMP handbook before applying; the numbers here come from the handbook PMI publishes on its site.</FootnoteAside>

      <p>If you&apos;re still weighing whether the PMP is the right credential at all, <TermLink href="/professional-skills-certifications/how-to-actually-choose-between-competing-certifications">how to choose between competing certifications</TermLink> covers that decision, and <TermLink href="/professional-skills-certifications/what-project-management-certification-actually-teaches-you">what project management certification teaches you</TermLink> covers the content.</p>

      <QuickCheck
        question="You have a bachelor's degree and 30 months leading projects. Can you apply for the PMP?"
        options={[
          { text: "Not yet. You need 36 months with a four-year degree, unless your degree is from a GAC-accredited program", correct: true, explanation: "Correct. Six more months of project leadership experience would get you there on the standard degree path." },
          { text: "Yes, any degree plus some experience qualifies", correct: false, explanation: "The handbook sets a specific minimum of 36 months for four-year degree holders." },
          { text: "Yes, if you have 35 hours of training", correct: false, explanation: "The education hours are required in addition to the experience, not instead of it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward application (baseline case)</h3>
      <div className="prose-p">A marketing coordinator with a bachelor&apos;s degree has led product launches for four years. They document 48 months of project leadership across several launches, finish a 35-hour online PMP prep course, and submit the application with a short description of each project. It&apos;s approved, and they have one year to pass the exam, with up to three attempts. They meet the 36-month requirement with a year to spare.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Overlapping projects (the counting trap)</h3>
      <div className="prose-p">An IT analyst lists three projects: 18 months, 14 months and 12 months, and assumes that adds up to 44 months. But the projects ran partly at the same time. On a calendar, they span January of one year to June of the next: 30 unique months. Because PMI counts non-overlapping months, the analyst is 6 months short of the 36-month requirement. Drawing a timeline before applying would have caught this.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Keeping it after you pass (real-world use)</h3>
      <div className="prose-p">After passing, a project manager needs 60 PDUs over the next three years. That&apos;s about 20 hours a year. They earn most of it from things they already do: a company training on risk management, webinars from a local PMI chapter, and a course on leadership. They log each activity in PMI&apos;s system as they go, pay the renewal fee at the end of the cycle, and the credential continues. Someone who waits until the last month usually ends up scrambling. PDUs are PMI&apos;s version of a wider system; <TermLink href="/professional-skills-certifications/what-continuing-education-credits-actually-require">what continuing education credits actually require</TermLink> compares how other credentialing bodies count them.</div>

      <QuickCheck
        question="In Example 2, why does the analyst have 30 months, not 44?"
        options={[
          { text: "PMI counts unique calendar months, so overlapping time only counts once", correct: true, explanation: "Correct. Concurrent projects don't stack." },
          { text: "One of the projects was too short to count", correct: false, explanation: "Short projects count; overlap is the issue." },
          { text: "Experience older than three years doesn't count", correct: false, explanation: "The window is eight years, not three." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The path to getting and keeping a PMP"
        type="flow"
        svgSrc="/diagrams/professional-skills-certifications-what-a-pmp-certification-actually-requires-flow.svg"
        altText="A five-step flow. 1: Build 36 to 60 months of project leadership experience, depending on your degree. 2: Complete 35 contact hours of project management education, or hold an active CAPM. 3: Apply to PMI, which may randomly audit your application. 4: Pass the exam, up to three attempts in one year. 5: Earn 60 PDUs every three years to keep it active."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Adding up project lengths that ran at the same time.", fix: "Plot projects on a calendar and count unique months only." },
          { mistake: "Listing work where you contributed but didn't lead.", fix: "Describe what you led and directed. PMI asks for leadership experience, and an audit will ask your supervisor to confirm it." },
          { mistake: "Letting the credential lapse by leaving PDUs to the end.", fix: "Log PDUs as you earn them. Roughly 20 hours a year keeps you on track." },
        ]}
      />
      <MisconceptionCallout
        myth="The PMP is an exam you can pass with enough studying, like any other test."
        reality={<p>The exam is only one step. PMI won&apos;t approve you to sit it without years of documented project leadership (36 months with a four-year degree, 60 without) plus 35 hours of project management education, and applications can be audited. For people early in their careers, PMI&apos;s CAPM is the credential designed without an experience requirement. The experience gate is also a big part of why employers treat the PMP as a signal of real-world capability rather than test-taking skill.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Draw a timeline of every project you led in the last eight years and count unique months.",
          "Write a short description of each project in terms of what you led: planning, team, budget, risks, delivery.",
          "Confirm your supervisors could sign off on that experience if you're audited.",
          "Complete 35 contact hours from a provider that issues a certificate, or check whether an active CAPM covers it.",
          "Read PMI's current PMP handbook for the latest exam outline and fees before you apply.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the requirements for PMP certification?", answer: "Per PMI's handbook: 36 months of project leadership experience with a four-year degree (60 months with a high school diploma or associate's, 24 with a GAC-accredited degree), within the last eight years, plus 35 contact hours of project management education, then passing the exam." },
          { question: "How many questions are on the PMP exam?", answer: "PMI's handbook lists 180 questions, 5 of them unscored pretest items, with 230 minutes of testing time." },
          { question: "Can I take the PMP without experience?", answer: "No. The experience requirement is mandatory. PMI's CAPM credential is designed for people without project leadership experience." },
          { question: "How do you maintain a PMP certification?", answer: "Earn 60 professional development units (PDUs) every three years through PMI's Continuing Certification Requirements program and renew at the end of each cycle." },
          { question: "Does the PMP exam cover agile?", answer: "Yes. PMI's content outline states that about half the exam covers predictive approaches and about half covers agile or hybrid approaches." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
