/**
 * Learning Paths — Phase 1 (roadmap workstream, committee-approved
 * 2026-09-12): sequenced tracks built entirely from existing content,
 * no new categories, no gating/payment. Each path is just an ordered
 * list of {category, slug} pairs already backed by real posts.
 */

export interface LearningPathStep {
  category: string;
  slug: string;
}

export interface LearningPath {
  slug: string;
  title: string;
  description: string;
  steps: LearningPathStep[];
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    slug: 'job-search-and-interview-readiness',
    title: 'Job Search & Interview Readiness',
    description:
      "A guided sequence through the actual mechanics of finding, applying to, and landing a role — starting with how job listings and hiring actually work behind the scenes, moving through building a resume that survives the process, and ending with how to perform in the interview itself. Built from the complete, real Job Search Strategy, Resume & Application, and Interview Skills clusters.",
    steps: [
      { category: 'career-study-skills', slug: 'how-job-boards-actually-rank-listings' },
      { category: 'career-study-skills', slug: 'what-the-hidden-job-market-actually-means' },
      { category: 'career-study-skills', slug: 'how-recruiters-actually-screen-candidates' },
      { category: 'career-study-skills', slug: 'why-job-descriptions-list-so-many-requirements' },
      { category: 'career-study-skills', slug: 'what-a-reference-check-actually-verifies' },
      { category: 'career-study-skills', slug: 'what-applicant-tracking-systems-actually-do' },
      { category: 'career-study-skills', slug: 'resume-vs-cv-whats-the-real-difference' },
      { category: 'career-study-skills', slug: 'how-to-quantify-achievements-on-a-resume' },
      { category: 'career-study-skills', slug: 'what-a-cover-letter-actually-needs-to-do' },
      { category: 'career-study-skills', slug: 'chronological-vs-functional-resume-formats' },
      { category: 'career-study-skills', slug: 'the-star-method-explained' },
      { category: 'career-study-skills', slug: 'why-companies-ask-behavioral-interview-questions' },
      { category: 'career-study-skills', slug: 'how-to-handle-a-salary-question-in-an-interview' },
      { category: 'career-study-skills', slug: 'what-a-panel-interview-actually-tests' },
      { category: 'career-study-skills', slug: 'why-you-should-still-ask-questions-in-an-interview' },
    ],
  },
  {
    slug: 'electrician',
    title: 'Electrician',
    description:
      "A curated route through KnowThisWell's existing content most relevant to working as an electrician — the real electrical-safety fundamentals (circuit breakers, GFCI, live-wire checks, overload behavior), the tools used constantly on the job, the electrical-unit literacy behind reading a job or a bill, and the licensing/business paperwork and job-search skills for running a self-employed or contracted operation. This is not a substitute for a licensed electrician apprenticeship or code training — it curates genuinely relevant existing general-knowledge and safety-literacy content, not electrical-code certification material.",
    steps: [
      { category: 'home-diy-knowledge', slug: 'what-amps-volts-and-watts-actually-measure' },
      { category: 'home-diy-knowledge', slug: 'how-a-circuit-breaker-actually-protects-your-home' },
      { category: 'home-diy-knowledge', slug: 'what-actually-happens-when-you-overload-a-circuit' },
      { category: 'home-diy-knowledge', slug: 'why-gfci-outlets-exist' },
      { category: 'home-diy-knowledge', slug: 'how-to-tell-if-a-wire-is-live-before-touching-it' },
      { category: 'home-diy-knowledge', slug: 'what-a-stud-finder-actually-detects' },
      { category: 'home-diy-knowledge', slug: 'phillips-vs-flathead-screwdrivers-explained' },
      { category: 'units-measurement-conversions', slug: 'watts-kilowatts-and-reading-an-electricity-bill' },
      { category: 'legal-documentation-howtos', slug: 'understanding-permits-and-licenses-general-categories' },
      { category: 'legal-documentation-howtos', slug: 'business-registration-documents-explained' },
      { category: 'legal-documentation-howtos', slug: 'what-makes-a-contract-legally-binding' },
      { category: 'legal-documentation-howtos', slug: 'freelance-and-service-contracts-explained' },
      { category: 'legal-documentation-howtos', slug: 'understanding-warranties-and-guarantees' },
      { category: 'personal-finance-basics', slug: 'self-employment-and-freelance-tax-basics' },
      { category: 'personal-finance-basics', slug: 'understanding-tax-deductions-vs-tax-credits' },
      { category: 'personal-finance-basics', slug: 'what-a-budget-actually-is-income-vs-expenses' },
      { category: 'career-study-skills', slug: 'how-to-quantify-achievements-on-a-resume' },
      { category: 'career-study-skills', slug: 'the-star-method-explained' },
    ],
  },
];

export function getAllLearningPaths(): LearningPath[] {
  return LEARNING_PATHS;
}

export function getLearningPathBySlug(slug: string): LearningPath | undefined {
  return LEARNING_PATHS.find((p) => p.slug === slug);
}

/** Looks up whether a given post is part of any learning path, and if so
 *  returns the path plus this post's step position (1-indexed) and its
 *  prev/next steps. Returns null if the post isn't part of any path. */
export function getLearningPathForPost(
  category: string,
  slug: string
): { path: LearningPath; stepIndex: number; prev: LearningPathStep | null; next: LearningPathStep | null } | null {
  for (const path of LEARNING_PATHS) {
    const idx = path.steps.findIndex((s) => s.category === category && s.slug === slug);
    if (idx !== -1) {
      return {
        path,
        stepIndex: idx + 1,
        prev: idx > 0 ? path.steps[idx - 1] : null,
        next: idx < path.steps.length - 1 ? path.steps[idx + 1] : null,
      };
    }
  }
  return null;
}
