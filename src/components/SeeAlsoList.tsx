import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface SeeAlsoListProps {
  slugs: string[];
}

export function SeeAlsoList({ slugs }: SeeAlsoListProps) {
  const normalizedSlugs = Array.isArray(slugs) ? slugs :
    typeof slugs === 'string' ? JSON.parse(slugs) : [];

  if (normalizedSlugs.length === 0) return null;

  return (
    <section className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="h-5 w-5 text-ink-soft" />
        <h3 className="font-display text-lg font-bold text-ink">See also</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {normalizedSlugs.map((slug: string, idx: number) => {
          const [category, postSlug] = slug.includes('/') ? slug.split('/') : ['general', slug];
          // The slug might already be the full path or just the post slug
          const href = slug.startsWith('/') ? slug : `/${category}/${postSlug}`;

          return (
            <Link
              key={idx}
              href={href}
              className="rounded-full border border-rule bg-paper px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-forest hover:text-forest"
            >
              {postSlug.replace(/-/g, ' ')}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
