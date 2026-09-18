import Link from 'next/link';
import { getAllCategories, getAllPostsMeta } from '@/lib/content';
import {
  getCategoryLabel,
  getCategoryStatus,
  getCategoryFocusGroup,
  FOCUS_GROUPS,
} from '@/lib/taxonomy';
import { HomeQuestion } from '@/components/HomeQuestion';

/** Strips the "NN. " authoring-order prefix off a taxonomy label for
 *  homepage display (e.g. "13. Technology Basics" -> "Technology Basics") —
 *  that ordering is meaningful in the sidebar's basic-to-advanced sort but
 *  reads as a stray number here. */
function displayLabel(category: string): string {
  return getCategoryLabel(category).replace(/^\d+\.\s*/, '');
}

export default async function HomePage() {
  const categories = await getAllCategories();
  const allPosts = await getAllPostsMeta();
  const latest = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 9);

  const active = categories.filter((c) => getCategoryStatus(c) === 'active');
  const comingSoon = categories.filter((c) => getCategoryStatus(c) === 'coming-soon');
  const clusters = FOCUS_GROUPS
    .map((group) => ({
      ...group,
      categories: active.filter((c) => getCategoryFocusGroup(c) === group.id),
    }))
    .filter((group) => group.categories.length > 0);

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10">
      <h1 className="mb-4 max-w-[22ch] font-display text-4xl leading-tight text-ink md:text-5xl">
        A practical knowledge library for 2026 and beyond.
      </h1>
      <p className="mb-14 max-w-[60ch] font-body text-lg italic text-ink-soft">
        A growing collection of clearly written, fact-reviewed entries on
        money, career, health, technology, and civic life — the things
        worth actually understanding.
      </p>

      <section className="mb-16 grid grid-cols-1 gap-10 border-y border-rule bg-forest-tint px-6 py-8 md:grid-cols-[1.15fr_1fr] md:gap-12 md:px-8">
        <p className="m-0 font-display text-lg leading-relaxed text-forest-dark">
          Every entry is drafted from primary sources — government
          publications, academic research, original documentation — by two
          named editors, and carries its own fact&#8209;reviewed date, checked
          separately from routine edits.{' '}
          <Link href="/about/method" className="underline underline-offset-4 hover:text-forest">
            Read the editorial method →
          </Link>
        </p>
        <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
          <li className="flex items-start gap-3 font-utility text-[13px] leading-relaxed text-ink-soft">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] font-semibold text-paper">1</span>
            <span><strong className="text-ink">Sourced, not scraped.</strong> Primary sources cited at the end of every factual entry.</span>
          </li>
          <li className="flex items-start gap-3 font-utility text-[13px] leading-relaxed text-ink-soft">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] font-semibold text-paper">2</span>
            <span><strong className="text-ink">Written by named editors.</strong> Not an anonymous content mill.</span>
          </li>
          <li className="flex items-start gap-3 font-utility text-[13px] leading-relaxed text-ink-soft">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] font-semibold text-paper">3</span>
            <span><strong className="text-ink">Free, and growing daily.</strong> New entries published on a public, dated schedule.</span>
          </li>
        </ul>
      </section>

      <HomeQuestion />

      {latest.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
              Latest Entries
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={`${post.category}/${post.slug}`}
                href={`/${post.category}/${post.slug}`}
                className="group flex flex-col bg-paper p-7 transition-colors hover:bg-forest-tint"
              >
                <span className="mb-2 font-utility text-[11px] uppercase tracking-widest text-ochre">
                  {getCategoryLabel(post.category)}
                </span>
                <h3 className="mb-2 font-display text-lg leading-snug text-ink group-hover:text-forest">
                  {post.title}
                </h3>
                <p className="font-utility text-[13.5px] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <h2 className="mb-1 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Explore by Focus
      </h2>
      <p className="mb-7 max-w-[56ch] font-utility text-[13px] text-ink-soft">
        The {active.length} categories publishing today, grouped by what
        they&rsquo;re actually for — instead of one long list.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {clusters.map((cluster) => (
          <div key={cluster.id} className="border border-rule bg-paper p-7">
            <h3 className="mb-1.5 font-display text-xl text-ink">{cluster.label}</h3>
            <p className="mb-4 font-utility text-[13px] leading-relaxed text-ink-soft">
              {cluster.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cluster.categories.map((category) => (
                <Link
                  key={category}
                  href={`/${category}`}
                  className="rounded-full border border-rule bg-forest-tint px-3.5 py-1.5 font-utility text-[13px] text-forest-dark transition-colors hover:border-forest hover:bg-white"
                >
                  {displayLabel(category)}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {comingSoon.length > 0 && (
        <section className="mb-4 border-t border-dashed border-rule pt-7">
          <h4 className="mb-1 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
            Expanding next
          </h4>
          <p className="mb-4 max-w-[60ch] font-utility text-[13px] text-ink-soft">
            {comingSoon.length} more categories are mapped and queued —
            opened one at a time, driven by real search demand, not
            published until there&rsquo;s a real entry behind them.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {comingSoon.map((category) => (
              <Link
                key={category}
                href={`/${category}`}
                className="rounded-full bg-rule-soft px-3 py-1 font-utility text-[12px] text-ink-soft opacity-85 transition-opacity hover:opacity-100"
              >
                {displayLabel(category)}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
