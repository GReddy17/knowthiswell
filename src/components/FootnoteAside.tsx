'use client';

import { useId, useState, type ReactNode } from 'react';

interface FootnoteAsideProps {
  children: ReactNode; // the footnote content
}

/**
 * Renders as a small circled marker inline in text (place it directly
 * after the sentence it annotates). Click expands the note as a block
 * below the current paragraph rather than navigating away or using a
 * hover tooltip, which fails on touch devices.
 */
export function FootnoteAside({ children }: FootnoteAsideProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="mx-0.5 inline-flex h-[17px] w-[17px] items-center justify-center rounded-full border border-forest align-middle font-utility text-[11px] leading-none text-forest hover:bg-forest hover:text-paper"
      >
        i
      </button>
      {open && (
        <span
          id={panelId}
          className="my-3.5 block border-l-2 border-ochre bg-rule-soft px-4.5 py-3.5 font-utility text-sm leading-relaxed text-ink-soft"
        >
          {children}
        </span>
      )}
    </>
  );
}
