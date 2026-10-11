import Link from 'next/link';
import type { PostLink } from '@/lib/content';

interface MoreInTopicProps {
  categorySlug: string;
  categoryLabel: string;
  categoryCount: number;
  prev: PostLink | null;
  next: PostLink | null;
  cross: PostLink[];
  getLabel: (category: string) => string;
}

/**
 * End-of-entry crawl/reader paths that don't depend on curated seeAlso:
 * previous/next entry in the topic's reading order, a link back to the
 * topic hub, and a few cross-topic entries ranked by shared tags. All
 * plain server-rendered <a> links.
 */
export function MoreInTopic({
  categorySlug,
  categoryLabel,
  categoryCount,
  prev,
  next,
  cross,
  getLabel,
}: MoreInTopicProps) {
  return (
    <nav aria-label={`More in ${categoryLabel}`} className="mt-10 border-t border-rule pt-7">
      <h3 className="mb-3.5 font-utility text-xs uppercase tracking-[0.1em] text-ochre">
        More in {categoryLabel}
      </h3>
      {(prev || next) && (
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={prev.href}
              className="group block rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-forest"
            >
              <span className="mb-1 block font-utility text-[11px] uppercase tracking-wider text-ink-soft">
                ← Previous
              </span>
              <span className="font-display text-base leading-snug text-ink group-hover:text-forest">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {next ? (
            <Link
              href={next.href}
              className="group block rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-forest sm:text-right"
            >
              <span className="mb-1 block font-utility text-[11px] uppercase tracking-wider text-ink-soft">
                Next →
              </span>
              <span className="font-display text-base leading-snug text-ink group-hover:text-forest">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
      )}
      <Link
        href={`/${categorySlug}`}
        className="font-utility text-sm text-forest underline-offset-4 hover:underline"
      >
        Browse all {categoryCount} entries in {categoryLabel} →
      </Link>

      {cross.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3.5 font-utility text-xs uppercase tracking-[0.1em] text-ochre">
            Across the library
          </h3>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {cross.map((c) => (
              <li key={c.href} className="font-utility text-sm leading-snug">
                <Link href={c.href} className="text-forest hover:underline">
                  {c.title}
                </Link>
                <span className="ml-2 text-[12px] text-ink-soft">{getLabel(c.category)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
