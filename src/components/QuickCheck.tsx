'use client';

import { useState } from 'react';

interface QuickCheckOption {
  text: string;
  correct: boolean;
  explanation: string;
}

interface QuickCheckProps {
  question: string;
  options: QuickCheckOption[];
}

/**
 * Low-pressure, non-graded embedded question. Distinct from the full
 * end-of-entry quiz — this is meant to interrupt reading for ~10 seconds,
 * not to test the whole entry.
 */
export function QuickCheck({ question, options }: QuickCheckProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selected = selectedIdx !== null ? options[selectedIdx] : null;

  return (
    <div className="my-9 border border-rule bg-white p-6">
      <div className="mb-3 font-utility text-[11px] uppercase tracking-[0.1em] text-ochre">
        Quick check
      </div>
      <p className="mb-4 font-body text-lg text-ink">{question}</p>

      <div className="mb-1 flex flex-col gap-2" role="radiogroup" aria-label={question}>
        {options.map((opt, i) => {
          const isSelected = i === selectedIdx;
          const stateClass = !isSelected
            ? 'border-rule bg-paper hover:border-forest'
            : opt.correct
              ? 'border-forest bg-forest-tint font-semibold text-forest'
              : 'border-brick bg-brick-tint text-brick';

          return (
            <button
              key={opt.text}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={selectedIdx !== null}
              onClick={() => setSelectedIdx(i)}
              className={`rounded font-utility text-sm border px-3.5 py-2.5 text-left text-ink transition-colors ${stateClass}`}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {selected && (
        <p
          role="status"
          className="mt-3.5 border-t border-dashed border-rule pt-3 font-utility text-[13.5px] leading-relaxed text-ink-soft"
        >
          {selected.explanation}
        </p>
      )}
    </div>
  );
}
