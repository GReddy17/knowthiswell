'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { QuickCheck } from '@/components/QuickCheck';

const ROTATE_MS = 15 * 60 * 1000;

interface FaqPoolEntry {
  id: string;
  type: 'faq';
  question: string;
  answer: string;
  category: string;
  categoryLabel: string;
  slug: string;
  postTitle: string;
  href: string;
}

interface QuickCheckPoolEntry {
  id: string;
  type: 'quickcheck';
  question: string;
  options: { text: string; correct: boolean; explanation: string }[];
  category: string;
  categoryLabel: string;
  slug: string;
  postTitle: string;
  href: string;
}

type PoolEntry = FaqPoolEntry | QuickCheckPoolEntry;

function pickRandom(pool: PoolEntry[], excludeId?: string): PoolEntry {
  if (pool.length === 1) return pool[0];
  let next = pool[Math.floor(Math.random() * pool.length)];
  while (next.id === excludeId) {
    next = pool[Math.floor(Math.random() * pool.length)];
  }
  return next;
}

function formatCountdown(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Homepage "General Knowledge" widget — pulls a random real QuickCheck or
 *  FAQ entry (already written, already fact-reviewed, extracted from real
 *  posts by scripts/generate-question-pool.mjs) and swaps to a new random
 *  one every 15 minutes while the tab is open. Fetched client-side, after
 *  mount, so it never blocks or affects the homepage's own static render —
 *  this is a decorative engagement widget, not primary page content. */
export function HomeQuestion() {
  const [pool, setPool] = useState<PoolEntry[] | null>(null);
  const [current, setCurrent] = useState<PoolEntry | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(ROTATE_MS / 1000);
  const poolRef = useRef<PoolEntry[] | null>(null);
  const nextAtRef = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    fetch('/question-pool.json')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('fetch failed'))))
      .then((data: PoolEntry[]) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        poolRef.current = data;
        setPool(data);
        setCurrent(pickRandom(data));
        nextAtRef.current = Date.now() + ROTATE_MS;
      })
      .catch(() => {
        /* Widget just stays hidden — non-critical, no error UI needed. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!pool) return;
    const rotate = setInterval(() => {
      setRevealed(false);
      setCurrent((prev) => pickRandom(poolRef.current ?? pool, prev?.id));
      nextAtRef.current = Date.now() + ROTATE_MS;
    }, ROTATE_MS);
    const tick = setInterval(() => {
      setSecondsLeft(Math.max(0, Math.round((nextAtRef.current - Date.now()) / 1000)));
    }, 1000);
    return () => {
      clearInterval(rotate);
      clearInterval(tick);
    };
  }, [pool]);

  if (!current) return null;

  return (
    <section className="mb-16 min-h-[220px]">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
          General Knowledge
        </h2>
        <span className="font-utility text-[11px] tabular-nums text-ink-soft">
          New question in {formatCountdown(secondsLeft)}
        </span>
      </div>

      {current.type === 'quickcheck' ? (
        <div>
          <QuickCheck key={current.id} question={current.question} options={current.options} />
          <p className="mt-1 font-utility text-[12px] text-ink-soft">
            From{' '}
            <Link href={current.href} className="text-forest hover:underline">
              {current.postTitle}
            </Link>{' '}
            &middot; {current.categoryLabel}
          </p>
        </div>
      ) : (
        <div className="border-2 border-ink bg-white p-5 rounded-lg">
          <div className="mb-2 font-utility text-xs uppercase tracking-widest text-ink-soft">
            Quick question
          </div>
          <p className="mb-1 font-body text-lg font-semibold text-ink">{current.question}</p>

          {!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="mt-3 rounded font-utility text-sm border border-forest px-3.5 py-2 text-forest transition-colors hover:bg-forest-tint"
            >
              Reveal answer
            </button>
          ) : (
            <p className="mt-3.5 border-t border-dashed border-rule pt-3 font-utility text-[13.5px] leading-relaxed text-ink-soft">
              {current.answer}
            </p>
          )}

          <p className="mt-4 font-utility text-[12px] text-ink-soft">
            From{' '}
            <Link href={current.href} className="text-forest hover:underline">
              {current.postTitle}
            </Link>{' '}
            &middot; {current.categoryLabel}
          </p>
        </div>
      )}
    </section>
  );
}
