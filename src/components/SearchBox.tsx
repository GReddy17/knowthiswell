'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    PagefindUI?: new (opts: { element: string; showImages?: boolean }) => void;
  }
}

export function SearchBox() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'unavailable'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!open || initialized.current) return;
    setStatus('loading');

    fetch('/pagefind/pagefind-ui.js', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          setStatus('unavailable');
          return;
        }
        const script = document.createElement('script');
        script.src = '/pagefind/pagefind-ui.js';
        script.onload = () => {
          if (window.PagefindUI && containerRef.current) {
            new window.PagefindUI({ element: '#search-mount', showImages: false });
            initialized.current = true;
            setStatus('ready');
          }
        };
        script.onerror = () => setStatus('unavailable');
        document.body.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/pagefind/pagefind-ui.css';
        document.head.appendChild(link);
      })
      .catch(() => setStatus('unavailable'));
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
          <div className="max-h-[70vh] w-full max-w-[560px] overflow-auto bg-paper p-6 shadow-xl">
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
            <div id="search-mount" ref={containerRef} />
            {status === 'unavailable' && (
              <div className="flex flex-col gap-4">
                <p className="font-utility text-sm text-ink-soft">
                  Search runs against a pre-built index and is only
                  available in a production build (<code className="bg-rule-soft px-1">npm run build</code>),
                  not <code className="bg-rule-soft px-1">next dev</code>.
                </p>
                <div className="border-t border-rule pt-4">
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-ochre">Dev-mode Mock Search</p>
                  <input
                    type="text"
                    placeholder="Try searching a post title..."
                    className="w-full rounded border border-rule bg-paper p-2 text-sm outline-none focus:border-forest"
                    onChange={(e) => {
                      console.log('Dev Search Query:', e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
            {status === 'loading' && (
              <p className="font-utility text-sm text-ink-soft">Loading search…</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
