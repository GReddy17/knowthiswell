import Link from 'next/link';
import { getAllCategories, getAllPostsMeta } from '@/lib/content';
import {
  getCategoryLabel,
  getCategoryStatus,
  getCategoryFocusGroup,
  FOCUS_GROUPS,
} from '@/lib/taxonomy';
import { HomeQuestion } from '@/components/HomeQuestion';
import { SearchBox } from '@/components/SearchBox';
import { getAllLearningPaths } from '@/content/learning-paths';

// Practical clusters lead; the rest keep their taxonomy order after them.
const CLUSTER_PRIORITY = ['money-career', 'health-home', 'technology'];

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
  const postCounts = new Map<string, number>();
  for (const p of allPosts) postCounts.set(p.category, (postCounts.get(p.category) ?? 0) + 1);

  const clusters = FOCUS_GROUPS
    .map((group, i) => ({
      ...group,
      order: CLUSTER_PRIORITY.includes(group.id) ? CLUSTER_PRIORITY.indexOf(group.id) : CLUSTER_PRIORITY.length + i,
      categories: active.filter((c) => getCategoryFocusGroup(c) === group.id),
    }))
    .filter((group) => group.categories.length > 0)
    .sort((a, b) => a.order - b.order);

  const startHere = active
    .filter((c) => CLUSTER_PRIORITY.includes(getCategoryFocusGroup(c) ?? '') && (postCounts.get(c) ?? 0) > 0)
    .sort((a, b) => (postCounts.get(b) ?? 0) - (postCounts.get(a) ?? 0) || a.localeCompare(b))
    .slice(0, 5);

  const paths = getAllLearningPaths();

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10">
      <h1 className="mb-4 max-w-[22ch] font-display text-4xl leading-tight text-ink md:text-5xl">
        A practical knowledge library for 2026 and beyond.
      </h1>
      <p className="mb-8 max-w-[60ch] font-body text-lg italic text-ink-soft">
        A growing collection of clearly written, fact-reviewed entries on
        money, career, health, technology, and civic life — the things
        worth actually understanding.
      </p>

      <div className="mb-5">
        <SearchBox variant="hero" />
      </div>
      {startHere.length > 0 && (
        <nav aria-label="Popular topics" className="mb-10 flex flex-wrap items-center gap-2">
          <span className="font-utility text-[12px] uppercase tracking-[0.1em] text-ink-soft">Start with</span>
          {startHere.map((category) => (
            <Link
              key={category}
              href={`/${category}`}
              className="rounded-full border border-rule bg-forest-tint px-3.5 py-1.5 font-utility text-[13px] text-forest-dark transition-colors hover:border-forest"
            >
              {displayLabel(category)}
            </Link>
          ))}
        </nav>
      )}

      <section
        aria-label="How entries are made"
        className="mb-14 flex flex-col gap-x-8 gap-y-2 border-y border-rule bg-forest-tint px-5 py-3.5 font-utility text-[13px] text-ink-soft md:flex-row md:flex-wrap md:items-center"
      >
        <span><strong className="text-ink">Sourced, not scraped.</strong> Primary sources cited on every factual entry.</span>
        <span><strong className="text-ink">Named editors.</strong> Each entry carries its own fact-reviewed date.</span>
        <span><strong className="text-ink">Free, and growing daily.</strong></span>
        <Link href="/about/method" className="text-forest underline underline-offset-4 hover:text-forest-dark md:ml-auto">
          Read the editorial method →
        </Link>
      </section>

      {paths.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
              Learning Paths
            </h2>
            <Link href="/learning-paths" className="font-utility text-[13px] text-forest hover:underline">
              All learning paths →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {paths.map((path) => (
              <Link
                key={path.slug}
                href={`/learning-paths/${path.slug}`}
                className="group flex flex-col border border-rule bg-paper p-7 transition-colors hover:border-forest hover:bg-forest-tint"
              >
                <span className="mb-2 font-utility text-[11px] uppercase tracking-widest text-ochre">
                  {path.steps.length} steps · free guided route
                </span>
                <h3 className="mb-2 font-display text-xl leading-snug text-ink group-hover:text-forest">
                  {path.title}
                </h3>
                <p className="line-clamp-3 font-utility text-[13.5px] leading-relaxed text-ink-soft">
                  {path.description}
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
      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  <span className="ml-1.5 text-[11px] text-ink-soft">{postCounts.get(category) ?? 0}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {latest.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
              Latest Entries
            </h2>
            <Link href="/topics/all" className="font-utility text-[13px] text-forest hover:underline">
              Full index of every entry →
            </Link>
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

      <HomeQuestion />

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
