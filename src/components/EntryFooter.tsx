import Link from 'next/link';
import type { AuthorRef, SourceRef } from '@/types/post';

interface AuthorCardProps {
  author: AuthorRef;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="mb-6 border border-rule p-5">
      <div className="mb-2.5 font-utility text-[11px] uppercase tracking-[0.1em] text-ochre">
        Written &amp; reviewed by
      </div>
      <Link href={`/authors/${author.slug}`} className="mb-1.5 block font-display text-lg text-ink hover:text-forest">
        {author.name}
      </Link>
      <p className="font-utility text-[13px] leading-relaxed text-ink-soft">
        {author.credentialLine}. Entries are drafted, fact-checked against
        primary sources, and re-reviewed on a rolling basis — see our{' '}
        <Link href="/about/method" className="text-forest">
          editorial method
        </Link>
        .
      </p>
    </div>
  );
}

interface SourcesAndSeeAlsoProps {
  sources?: SourceRef[];
  seeAlso: { slug: string; title: string; href: string }[];
}

export function SourcesAndSeeAlso({ sources, seeAlso }: SourcesAndSeeAlsoProps) {
  return (
    <div className="mt-14 border-t border-rule pt-7">
      {sources && sources.length > 0 && (
        <>
          <h3 className="mb-3.5 font-utility text-xs uppercase tracking-[0.1em] text-ochre">
            Sources
          </h3>
          <ul className="mb-10 list-disc pl-4.5 font-utility text-[13.5px] leading-loose text-ink-soft">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="noopener noreferrer" target="_blank" className="hover:text-forest">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {seeAlso.length > 0 && (
        <>
          <h3 className="mb-3.5 font-utility text-xs uppercase tracking-[0.1em] text-ochre">
            See also
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2.5">
            {seeAlso.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="border-b border-dotted border-rule py-1.5 font-utility text-sm text-forest hover:border-forest"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
