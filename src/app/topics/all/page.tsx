import Link from 'next/link';
import type { Metadata } from 'next';
import { getFullIndex, getAllPostsMeta } from '@/lib/content';
import { getCategoryDisplayLabel } from '@/lib/taxonomy';

export const metadata: Metadata = {
  title: 'Full Index of Every Entry',
  description:
    'Every KnowThisWell topic with its entry count, plus the most recently added entries. Open a topic to see all of its entries in reading order.',
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
          {total} entries across {index.length} topics, each topic page lists every entry in reading order. Prefer a
          guided route? Try the{' '}
          <Link href="/learning-paths" className="text-forest underline underline-offset-4">
            learning paths
          </Link>
          .
        </p>
      </header>

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

      <h2 className="mb-5 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Every topic
      </h2>
      <ul className="m-0 grid list-none grid-cols-1 gap-px bg-rule p-0 sm:grid-cols-2 lg:grid-cols-3">
        {index.map((g) => (
          <li key={g.category} className="bg-paper">
            <Link href={`/${g.category}`} className="group flex h-full flex-col p-6 transition-colors hover:bg-forest-tint">
              <span className="mb-1 font-display text-lg text-ink group-hover:text-forest">
                {getCategoryDisplayLabel(g.category)}
              </span>
              <span className="font-utility text-[12.5px] text-ink-soft">
                {g.posts.length} entries &rarr; every one listed on the topic page
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
