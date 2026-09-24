'use client';

import { useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import type { QuizQuestion } from '@/lib/article-quiz';

const ATTEMPT_SIZE = 5;
const ORDER = { easy: 0, medium: 1, hard: 2 } as const;

/** Target mix per attempt; any shortfall is filled from whatever is left. */
const MIX = { easy: 2, medium: 2, hard: 1 } as const;

function shuffle<T>(items: T[], random: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Picks ATTEMPT_SIZE questions aiming for the MIX of difficulties, always
 *  preferring questions the previous attempt didn't show, ordered easy → hard.
 *  `random` is injected so the first (server-rendered) attempt is deterministic
 *  and later ones are random. */
function drawAttempt(bank: QuizQuestion[], previous: QuizQuestion[], random: () => number): QuizQuestion[] {
  // Fresh questions first, previously seen ones only as a fallback.
  const ranked = [
    ...shuffle(bank.filter((q) => !previous.includes(q)), random),
    ...shuffle(bank.filter((q) => previous.includes(q)), random),
  ];
  const picked: QuizQuestion[] = [];
  for (const level of ['easy', 'medium', 'hard'] as const) {
    picked.push(...ranked.filter((q) => q.difficulty === level).slice(0, MIX[level]));
  }
  for (const q of ranked) {
    if (picked.length >= ATTEMPT_SIZE) break;
    if (!picked.includes(q)) picked.push(q);
  }
  return picked.slice(0, ATTEMPT_SIZE).sort((a, b) => ORDER[a.difficulty] - ORDER[b.difficulty]);
}

/** Tiny seeded generator for the first attempt (stable across server/client). */
function seeded(seed: string): () => number {
  let x = 0;
  for (let i = 0; i < seed.length; i++) x = (Math.imul(x, 31) + seed.charCodeAt(i)) | 0;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return ((x >>> 0) % 10000) / 10000;
  };
}

interface TestYourselfProps {
  /** The article's whole bank; each attempt draws 5 of them. */
  questions: QuizQuestion[];
  /** "category/slug", used only to label analytics events. */
  articleKey: string;
}

/**
 * End-of-article quiz: the article's own QuickCheck questions (topped up
 * from sibling articles in the same subtopic), one at a time, with a score.
 * Unlike the inline QuickCheck, this one is graded — it's the "did it stick?"
 * check after reading, and the web entry point for the KnowThisWell game.
 */
export function TestYourself({ questions: bank, articleKey }: TestYourselfProps) {
  const [questions, setQuestions] = useState(() => drawAttempt(bank, [], seeded(articleKey)));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [started, setStarted] = useState(false);

  if (bank.length === 0) return null;

  const done = answers.length === questions.length && selected === null;
  const score = answers.filter(Boolean).length;

  function choose(i: number) {
    if (selected !== null) return;
    if (!started) {
      setStarted(true);
      track('test_yourself_start', { article: articleKey });
    }
    setSelected(i);
    const isCorrect = questions[index].options[i].correct;
    const next = [...answers, isCorrect];
    setAnswers(next);
    if (next.length === questions.length) {
      track('test_yourself_complete', {
        article: articleKey,
        score: next.filter(Boolean).length,
        total: questions.length,
      });
    }
  }

  function advance() {
    setSelected(null);
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function restart() {
    setQuestions(drawAttempt(bank, questions, Math.random));
    setIndex(0);
    setSelected(null);
    setAnswers([]);
  }

  const missedFromOthers = questions.filter((q, i) => answers[i] === false && q.from);

  return (
    <section
      aria-labelledby="test-yourself-heading"
      className="mt-12 max-w-measure border-2 border-ink bg-white p-5 rounded-lg md:p-6"
    >
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <h2 id="test-yourself-heading" className="font-display text-2xl font-bold text-ink">
          Test yourself
        </h2>
        <span className="font-utility text-xs uppercase tracking-widest text-ink-soft">
          {done ? 'Done' : `Question ${index + 1} of ${questions.length}`}
        </span>
      </div>

      {!done ? (
        <QuestionCard
          q={questions[index]}
          selected={selected}
          onChoose={choose}
          onNext={advance}
          isLast={index === questions.length - 1}
        />
      ) : (
        <div role="status" aria-live="polite" className="mt-3">
          <p className="font-body text-lg font-semibold text-ink">
            You got {score} of {questions.length}.{' '}
            {score === questions.length
              ? 'That one stuck.'
              : score === 0
                ? 'Worth a second read of the article above.'
                : 'Most of it stuck. The misses are the parts worth a second look.'}
          </p>
          {missedFromOthers.length > 0 && (
            <ul className="mt-3 list-disc pl-5 font-utility text-sm text-ink-soft">
              {missedFromOthers.map((q) => (
                <li key={q.from!.href}>
                  Read next:{' '}
                  <Link href={q.from!.href} className="text-forest underline">
                    {q.from!.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={restart}
            className="mt-4 rounded border border-ink px-4 py-2 font-utility text-sm text-ink hover:bg-paper"
          >
            {bank.length >= 2 * ATTEMPT_SIZE
              ? 'Try 5 new questions'
              : bank.length > ATTEMPT_SIZE
                ? 'Try again with different questions'
                : 'Try again'}
          </button>
        </div>
      )}
    </section>
  );
}

function QuestionCard({
  q,
  selected,
  onChoose,
  onNext,
  isLast,
}: {
  q: QuizQuestion;
  selected: number | null;
  onChoose: (i: number) => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const chosen = selected !== null ? q.options[selected] : null;
  return (
    <div className="mt-3">
      {q.from && (
        <p className="mb-1 font-utility text-xs text-ink-soft">
          From{' '}
          <Link href={q.from.href} className="underline">
            {q.from.title}
          </Link>
        </p>
      )}
      <p className="mb-4 font-body text-lg font-semibold text-ink">{q.question}</p>
      <div className="mb-1 flex flex-col gap-2" role="radiogroup" aria-label={q.question}>
        {q.options.map((opt, i) => {
          const isSelected = i === selected;
          const revealCorrect = selected !== null && opt.correct;
          const stateClass = isSelected
            ? opt.correct
              ? 'border-forest bg-forest-tint font-semibold text-forest'
              : 'border-brick bg-brick-tint text-brick'
            : revealCorrect
              ? 'border-forest text-forest'
              : 'border-rule bg-paper hover:border-forest';
          return (
            <button
              key={opt.text}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={selected !== null}
              onClick={() => onChoose(i)}
              className={`rounded font-utility text-sm border px-3.5 py-2.5 text-left text-ink transition-colors ${stateClass}`}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {chosen && (
        <div aria-live="polite">
          <p className="mt-3.5 border-t border-dashed border-rule pt-3 font-utility text-[13.5px] leading-relaxed text-ink-soft">
            {chosen.explanation}
          </p>
          <button
            type="button"
            onClick={onNext}
            className="mt-3 rounded bg-forest px-4 py-2 font-utility text-sm text-paper hover:opacity-90"
          >
            {isLast ? 'See my score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
