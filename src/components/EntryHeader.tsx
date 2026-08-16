import Link from 'next/link';
import type { Category } from '@/types/post';

interface Crumb {
  label: string;
  href: string;
}

interface EntryHeaderProps {
  breadcrumbs: Crumb[];        // e.g. [{Money & Personal Finance, /money-personal-finance}, {Investing Basics, /...}]
  title: string;
  summary: string;             // the italic definitional dek
  readingTimeMinutes: number;
  updated: string;             // ISO date
  lastReviewed?: string;       // ISO date — renders the brick trust dot if present
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function EntryHeader({
  breadcrumbs,
  title,
  summary,
  readingTimeMinutes,
  updated,
  lastReviewed,
}: EntryHeaderProps) {
  return (
    <header>
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2.5 font-utility text-[13px] uppercase tracking-wider text-forest">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2.5">
            {i > 0 && <span aria-hidden className="text-rule">/</span>}
            <Link href={crumb.href} className="border-b border-transparent hover:border-forest">
              {crumb.label}
            </Link>
          </span>
        ))}
      </nav>

      <h1 className="mb-4 font-display text-[2rem] leading-[1.12] tracking-tight text-ink md:text-[2.875rem]">
        {title}
      </h1>

      <p className="mb-6 max-w-[60ch] font-body text-xl italic leading-snug text-ink-soft">
        {summary}
      </p>

      <hr className="mb-6 border-t border-rule" />

      <dl className="mb-11 flex flex-wrap gap-5 font-utility text-[12.5px] text-ink-soft">
        <div className="flex gap-1">
          <dt className="font-semibold text-ink">Reading time</dt>
          <dd>— {readingTimeMinutes} min</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-ink">Updated</dt>
          <dd>— {formatDate(updated)}</dd>
        </div>
        {lastReviewed && (
          <div className="flex items-center gap-1.5 text-brick">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brick" />
            <dt className="font-semibold">Fact-reviewed</dt>
            <dd>— {formatDate(lastReviewed)}</dd>
          </div>
        )}
      </dl>
    </header>
  );
}
