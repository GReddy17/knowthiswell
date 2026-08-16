import Link from 'next/link';

interface RelatedRailProps {
  related: { slug: string; title: string; href: string }[];
}

/**
 * Left-rail companion to TocRail — surfaces related entries while
 * reading, not just at the end. Uses the same getRelatedPosts()
 * resolution as the end-of-entry SourcesAndSeeAlso block (curated
 * seeAlso[] first, tag/subtopic-overlap fallback second), so the two
 * lists are always consistent with each other.
 */
export function RelatedRail({ related }: RelatedRailProps) {
  if (related.length === 0) return null;

  return (
    <nav aria-label="Related entries" className="mt-10 border-t border-rule pt-6">
      <div className="mb-3 font-utility text-[11px] uppercase tracking-[0.12em] text-ochre">
        Related
      </div>
      <ul className="flex flex-col gap-3">
        {related.slice(0, 4).map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="font-utility text-[13px] leading-snug text-ink-soft hover:text-forest"
            >
              {r.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
