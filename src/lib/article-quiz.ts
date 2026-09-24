import quizzes from '@/content/generated/article-quizzes.json';

/**
 * Builds the end-of-article "Test yourself" quiz from build-time data
 * (scripts/generate-question-pool.mjs → src/content/generated/article-quizzes.json).
 *
 * Server-only: the full JSON (~3MB) is read at build time while pages are
 * pre-rendered; each page only receives its own few questions as props.
 */

export interface QuizOption {
  text: string;
  correct: boolean;
  explanation: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  difficulty: Difficulty;
  /** Set when the question was borrowed from a sibling article in the same subtopic. */
  from?: { title: string; href: string };
}

interface PostQuizData {
  subtopic: string | null;
  title: string | null;
  questions: { question: string; options: QuizOption[]; difficulty?: Difficulty; inline?: boolean }[];
}

const DATA = quizzes as Record<string, PostQuizData>;

/** Questions per attempt. Banks smaller than this are topped up from siblings. */
export const ATTEMPT_SIZE = 5;
/** Soft cap on how much of a bank is shipped to the page. */
const MAX_BANK = 20;

// Small deterministic hash so the same page always renders the same quiz
// (static pages must be stable across builds and server/client renders).
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  const a = [...items];
  let x = hash(seed) || 1;
  for (let i = a.length - 1; i > 0; i--) {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    const j = (x >>> 0) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns the article's whole question bank (inline QuickChecks + `quiz`
 * export), topped up from siblings to at least ATTEMPT_SIZE. The component
 * draws ATTEMPT_SIZE per attempt.
 */
export function getArticleQuiz(category: string, slug: string): QuizQuestion[] {
  const key = `${category}/${slug}`;
  const own = DATA[key];
  if (!own) return [];

  const picked: QuizQuestion[] = own.questions.slice(0, MAX_BANK).map((q) => ({
    question: q.question,
    options: q.options,
    difficulty: q.difficulty ?? 'medium',
  }));

  if (picked.length < ATTEMPT_SIZE && own.subtopic) {
    const siblings = Object.entries(DATA).filter(
      ([k, v]) => k !== key && k.startsWith(`${category}/`) && v.subtopic === own.subtopic && v.questions.length > 0 && v.title
    );
    for (const [k, v] of seededShuffle(siblings, key)) {
      if (picked.length >= ATTEMPT_SIZE) break;
      const q = v.questions[0];
      picked.push({
        question: q.question,
        options: q.options,
        difficulty: q.difficulty ?? 'medium',
        from: { title: v.title as string, href: `/${k}` },
      });
    }
  }

  // Fixed per-page answer order, but not always the order the article showed.
  return picked.map((q, i) => ({ ...q, options: seededShuffle(q.options, `${key}#${i}`) }));
}
