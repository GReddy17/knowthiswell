import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[60ch] px-5 py-32 text-center">
      <h1 className="mb-4 font-display text-6xl text-ink">404</h1>
      <p className="mb-10 font-body text-lg text-ink-soft">
        We couldn't find the page you're looking for. It might have been moved,
        deleted, or never existed.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-forest px-6 py-3 font-utility text-sm text-paper transition-colors hover:bg-forest-dark"
        >
          Return to Topics
        </Link>
        <Link
          href="/glossary/a"
          className="font-utility text-xs text-ink-soft hover:text-forest"
        >
          Browse the Glossary
        </Link>
      </div>
    </div>
  );
}
