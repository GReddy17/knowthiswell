import Link from 'next/link';
import type { Metadata } from 'next';
import { getFullIndex, getAllPostsMeta } from '@/lib/content';
import { getCategoryDisplayLabel } from '@/lib/taxonomy';

export const metadata: Metadata = {
  title: 'Full Index of Every Entry',
  description:
    'Every KnowThisWell entry in one place, grouped by topic and listed in reading order, with the most recently added entries first.',
  alternates: { canonical: '/topics/all' },
};

export default async function FullIndexPage() {
  const index = await getFullIndex();
  const allPosts = await getAllPostsMeta();
  const total = index.reduce((n, g) => n + g.posts.length, 0);

  const recent = [...allPosts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime() ||
        a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
    )
    .slice(0, 12);

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
      <header className="mb-12">
        <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
          Knowledge Map
        </div>
        <h1 className="font-display text-[2.5rem] leading-tight text-ink md:text-[3.5rem]">
          Full index of every entry
        </h1>
        <p className="mt-5 max-w-[60ch] font-body text-lg text-ink-soft">
          {total} entries across {index.length} topics, in reading order within each topic. Prefer a
          guided route? Try the{' '}
          <Link href="/learning-paths" className="text-forest underline underline-offset-4">
            learning paths
          </Link>
          .
        </p>
      </header>

      <nav aria-label="Jump to topic" className="mb-14 flex flex-wrap gap-2">
        {index.map((g) => (
          <a
            key={g.category}
            href={`#${g.category}`}
            className="rounded-full border border-rule bg-forest-tint px-3.5 py-1.5 font-utility text-[13px] text-forest-dark transition-colors hover:border-forest"
          >
            {getCategoryDisplayLabel(g.category)}
          </a>
        ))}
      </nav>

      <section className="mb-16" aria-labelledby="recent-heading">
        <h2 id="recent-heading" className="mb-5 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
          Recently added
        </h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-2.5 p-0 md:grid-cols-2">
          {recent.map((p) => (
            <li key={`${p.category}/${p.slug}`} className="font-utility text-sm leading-snug">
              <Link href={`/${p.category}/${p.slug}`} className="text-forest hover:underline">
                {p.title}
              </Link>
              <span className="ml-2 text-[12px] text-ink-soft">{getCategoryDisplayLabel(p.category)}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-14">
        {index.map((g) => (
          <section key={g.category} id={g.category} className="scroll-mt-24">
            <h2 className="mb-1 font-display text-2xl text-ink">
              <Link href={`/${g.category}`} className="hover:text-forest">
                {getCategoryDisplayLabel(g.category)}
              </Link>
            </h2>
            <p className="mb-4 font-utility text-[12px] text-ink-soft">{g.posts.length} entries</p>
            <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-2 p-0 md:grid-cols-2">
              {g.posts.map((p) => (
                <li key={p.href} className="font-utility text-sm leading-snug">
                  <Link href={p.href} className="text-ink-soft hover:text-forest">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
