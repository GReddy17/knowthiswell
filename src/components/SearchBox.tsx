'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    PagefindUI?: new (opts: { element: string; showImages?: boolean }) => void;
  }
}

export function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ title: string; href: string; category: string }[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const searchIndex = useRef<any[]>([]);

  useEffect(() => {
    if (!open) return;
    if (initialized.current) return;

    setStatus('loading');
    fetch('/api/search/metadata')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch search index');
        return res.json();
      })
      .then((data) => {
        searchIndex.current = data.posts;
        initialized.current = true;
        setStatus('ready');
      })
      .catch((err) => {
        console.error('Search index fetch error:', err);
        setStatus('error');
      });
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      return;
    }

    const normalizedQuery = q.toLowerCase();
    const filtered = searchIndex.current.filter((post) => {
      return (
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery) ||
        post.tags.some((t: string) => t.toLowerCase().includes(normalizedQuery))
      );
    });

    setResults(filtered.slice(0, 10).map(p => ({
      title: p.title,
      href: p.href,
      category: p.category
    })));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex items-center gap-2 rounded-full border border-rule px-3.5 py-1.5 font-utility text-[13px] text-ink-soft hover:border-forest hover:text-forest"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        Search
        <span className="hidden rounded border border-rule px-1.5 text-[10px] text-ochre md:inline">⌘K</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-5 pt-[10vh]"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="max-h-[70vh] w-full max-w-[560px] overflow-auto bg-paper p-6 shadow-xl rounded-lg">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="font-utility text-sm text-ink-soft hover:text-forest"
              >
                Close (Esc)
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for topics, tags or keywords..."
                className="w-full rounded border border-rule bg-paper p-3 pl-10 text-sm outline-none focus:border-forest text-ink"
                autoFocus
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            <div className="mt-6 space-y-4">
              {status === 'loading' && (
                <p className="font-utility text-sm text-ink-soft text-center">Loading search index…</p>
              )}
              {status === 'error' && (
                <p className="font-utility text-sm text-red-800 text-center">
                  Search unavailable. Please try again later.
                </p>
              )}
              {status === 'ready' && query && results.length === 0 && (
                <p className="font-utility text-sm text-ink-soft text-center">
                  No results found for &quot;{query}&quot;
                </p>
              )}
              {results.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-rule p-3 transition-colors hover:border-forest hover:bg-forest/5"
                >
                  <div className="flex flex-col">
                    <span className="font-display text-base text-ink group-hover:text-forest">
                      {res.title}
                    </span>
                    <span className="text-xs font-utility text-ink-soft">
                      {res.category}
                    </span>
                  </div>
                  <svg
                    className="text-ink-soft"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
