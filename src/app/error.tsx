'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[60ch] px-5 py-32 text-center">
      <h1 className="mb-4 font-display text-6xl text-ink">Oops!</h1>
      <p className="mb-10 font-body text-lg text-ink-soft">
        Something went wrong while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-forest px-6 py-3 font-utility text-sm text-paper transition-colors hover:bg-forest-dark"
      >
        Try again
      </button>
    </div>
  );
}
