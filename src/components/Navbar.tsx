'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchBox } from '@/components/SearchBox';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-4.5 md:px-10">
      <Link href="/" className="shrink-0 font-display text-xl font-semibold text-forest">
        KnowThis<span className="text-ochre">Well</span>
      </Link>

      <nav
        aria-label="Primary"
        className="hidden gap-7 font-utility text-[13px] uppercase tracking-wider text-ink-soft md:flex"
      >
        <Link href="/" className="hover:text-forest">Topics</Link>
        <Link href="/glossary/a" className="hover:text-forest">Glossary A–Z</Link>
        <Link href="/about/method" className="hover:text-forest">About &amp; Method</Link>
      </nav>

      <div className="flex items-center gap-3">
        <SearchBox />

        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="cursor-pointer rounded-full border border-rule px-3 py-1.5 font-utility text-xs text-ink-soft hover:border-forest hover:text-forest"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>

          {isOpen && (
            <nav
              id="mobile-menu"
              aria-label="Primary"
              className="absolute right-0 top-[calc(100%+8px)] z-10 flex w-44 flex-col gap-1 border border-rule bg-paper p-3 font-utility text-sm text-ink-soft shadow-md"
            >
              <Link
                href="/"
                className="rounded px-2 py-1.5 hover:bg-rule-soft hover:text-forest"
                onClick={() => setIsOpen(false)}
              >
                Topics
              </Link>
              <Link
                href="/glossary/a"
                className="rounded px-2 py-1.5 hover:bg-rule-soft hover:text-forest"
                onClick={() => setIsOpen(false)}
              >
                Glossary A–Z
              </Link>
              <Link
                href="/about/method"
                className="rounded px-2 py-1.5 hover:bg-rule-soft hover:text-forest"
                onClick={() => setIsOpen(false)}
              >
                About &amp; Method
              </Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
