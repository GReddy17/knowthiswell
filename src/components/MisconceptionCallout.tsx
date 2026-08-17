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
    <div className="my-5 p-5 rounded-lg border border-red-300 bg-red-50">
      <p className="mb-2 font-utility text-xs uppercase tracking-wider font-bold text-red-700">
        Common misconception
      </p>
      <p className="mb-3 font-body text-lg italic text-red-900/70">&ldquo;{myth}&rdquo;</p>
      <div className="font-body text-base text-ink">{reality}</div>
    </div>
  );
}
