'use client';

import { useEffect } from 'react';

/**
 * Catches errors that occur in the ROOT LAYOUT itself (e.g. a font-load
 * failure, a metadata-generation crash) — error.tsx cannot catch these,
 * since it renders INSIDE the layout it's meant to guard against. This
 * file replaces the entire document when it fires, so it must render
 * its own <html>/<body> rather than assuming layout.tsx is still active.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root layout error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: '#FBF8F1', color: '#1F1B16', fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: '60ch', margin: '0 auto', padding: '8rem 1.25rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Something went wrong.</h1>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.125rem', opacity: 0.8 }}>
            The page failed to load. This has been logged — please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              borderRadius: '999px',
              background: '#2C4A3E',
              color: '#FBF8F1',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
