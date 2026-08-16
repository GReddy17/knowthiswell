import type { ReactNode } from 'react';

interface MisconceptionCalloutProps {
  myth: string;
  reality: ReactNode;
}

/**
 * "Common misconception" pattern. Deliberately not a QuickCheck —
 * it's a statement, not a question, for the reader who wants the
 * correction stated plainly rather than tested on it.
 */
export function MisconceptionCallout({ myth, reality }: MisconceptionCalloutProps) {
  return (
    <div className="my-9 border-l-2 border-brick py-1 pl-5">
      <p className="mb-1.5 font-utility text-[11px] uppercase tracking-[0.1em] text-brick">
        Common misconception
      </p>
      <p className="mb-2 font-body text-lg italic text-ink-soft">&ldquo;{myth}&rdquo;</p>
      <div className="font-body text-[17px] text-ink">{reality}</div>
    </div>
  );
}
