'use client';

import { useState, type ReactNode } from 'react';

interface ModeToggleProps {
  plain: ReactNode;
  detailed: ReactNode;
  /** Optional label pair if "Plain / Detailed" isn't right for this entry
   *  e.g. {on: 'For beginners', off: 'For practitioners'} */
  labels?: { plain: string; detailed: string };
}

/**
 * The site's one recurring "surprising" interactive move (see design review):
 * lets a reader switch between a fast, plain-language explanation and the
 * full mechanism, without forking into two pages. Defaults to Plain, since
 * a first-time visitor should get the fast answer unless they ask for more.
 */
export function ModeToggle({ plain, detailed, labels }: ModeToggleProps) {
  const [mode, setMode] = useState<'plain' | 'detailed'>('plain');
  const labelPlain = labels?.plain ?? 'Plain';
  const labelDetailed = labels?.detailed ?? 'Detailed';

  return (
    <div className="mb-6">
      <div
        role="radiogroup"
        aria-label="Explanation depth"
        className="mb-4 inline-flex overflow-hidden rounded-full border border-forest font-utility text-[12.5px] tracking-wide"
      >
        {(['plain', 'detailed'] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mode === m}
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 transition-colors duration-fast ${
              mode === m ? 'bg-forest text-paper' : 'bg-transparent text-forest'
            }`}
          >
            {m === 'plain' ? labelPlain : labelDetailed}
          </button>
        ))}
      </div>

      <div className={mode === 'plain' ? 'font-body text-lg text-ink-soft' : ''}>
        {mode === 'plain' ? plain : detailed}
      </div>
    </div>
  );
}
