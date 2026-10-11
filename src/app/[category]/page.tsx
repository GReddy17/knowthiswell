import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByCategory, groupBySubtopic, getAllCategories, getThinCategories } from '@/lib/content';
import { getCategoryLabel, getCategoryDisplayLabel, getCategoryDescription, getCategoryStatus, getCategoryPhase, getCategoryComingSoonPreview, getCategoryFocusGroup, FOCUS_GROUPS } from '@/lib/taxonomy';
import { getAllLearningPaths } from '@/content/learning-paths';
import { BookOpen } from 'lucide-react';
import { CategoryHubClient } from '@/components/CategoryHubClient';
import { CategoryMapNav } from '@/components/CategoryMapNav';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ category }));
}

// Any category not returned by generateStaticParams is a real 404, not
// a category that just has zero posts yet — those are still in the
// list above. Without this, Next.js treats unknown params as valid ISR
// fallbacks: notFound() inside the page renders the right content but
// gets cached as a 200, not a real 404 (see /this-page-does-not-exist
// style URLs previously returning 200 with the not-found page's HTML).
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const description = getCategoryDescription(category);
  const isThin = (await getThinCategories()).has(category);
  return {
    title: getCategoryLabel(category).replace(/^\d+\.\s*/, ''),
    ...(description && { description }),
    alternates: { canonical: `/${category}` },
    ...(isThin && { robots: { index: false, follow: true } }),
  };
}

export default async function CategoryHubPage({ params }: PageProps) {
  const { category } = await params;
  const categories = await getAllCategories();
  if (!categories.includes(category)) notFound();

  const label = getCategoryLabel(category);
  const description = getCategoryDescription(category);
  const status = getCategoryStatus(category);
  const phase = getCategoryPhase(category);
  const comingSoonPreview = getCategoryComingSoonPreview(category);
  const posts = await getPostsByCategory(category);
  const groups = groupBySubtopic(posts);

  const focusGroupId = getCategoryFocusGroup(category);
  const focusGroupLabel = FOCUS_GROUPS.find((g) => g.id === focusGroupId)?.label;
  const siblingTopics = focusGroupId
    ? categories.filter(
        (c) => c !== category && getCategoryFocusGroup(c) === focusGroupId && getCategoryStatus(c) === 'active'
      )
    : [];
  const relatedPaths = getAllLearningPaths().filter((p) => p.steps.some((st) => st.category === category));

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-24 self-start">
            <p className="mb-4 font-utility text-[11px] uppercase tracking-widest text-ochre">
              Knowledge Map
            </p>
            <CategoryMapNav
              categories={categories.map((cat) => ({ slug: cat, label: getCategoryLabel(cat) }))}
              activeCategory={category}
              activeLabel={label}
              groups={groups.map((g) => ({
                subtopic: g.subtopic,
                posts: g.posts.map((p) => ({ slug: p.slug, title: p.title })),
              }))}
            />
          </div>
        </aside>

        <main>
          {/* Mobile Category Map */}
          <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 md:hidden scrollbar-hide">
            <div className="shrink-0 px-3 py-1 text-[10px] font-utility uppercase tracking-wider text-ochre bg-ochre/10 rounded-full">
              Other Topics
            </div>
            <nav className="flex gap-2">
              {categories
                .filter((cat) => cat !== category)
                .map((cat) => (
                  <Link
                    key={cat}
                    href={`/${cat}`}
                    className="whitespace-nowrap rounded-full border border-rule bg-paper px-3 py-1 text-xs font-utility text-ink-soft hover:border-forest hover:text-forest transition-colors"
                  >
                    {getCategoryLabel(cat)}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
            Topic Hub
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-display text-[2.5rem] leading-tight text-ink md:text-[3.5rem]">
              {label}
            </h1>
            {posts.length === 0 && status === 'coming-soon' && (
              <span className="px-2 py-1 text-[10px] font-utility uppercase tracking-wider bg-ochre/20 text-ochre rounded border border-ochre/30">
                Coming Soon
              </span>
            )}
          </div>
          {description && (
            <p className="mb-12 max-w-[65ch] font-body text-xl italic text-ink-soft leading-relaxed">
              {description}
            </p>
          )}

          {posts.length === 0 ? (
            status === 'coming-soon' ? (
              <div className="py-16 px-6 text-center border-2 border-dashed border-rule rounded-3xl bg-paper/50">
                <BookOpen className="mx-auto h-12 w-12 text-ink/20 mb-4" />
                {phase && (
                  <p className="mb-2 font-utility text-[11px] uppercase tracking-widest text-ochre">
                    Phase {phase} — not yet written
                  </p>
                )}
                <p className="text-xl font-display text-ink opacity-70 mb-6">
                  We&apos;re still building this topic. Here&apos;s what&apos;s planned:
                </p>
                {comingSoonPreview && comingSoonPreview.length > 0 ? (
                  <ul className="mx-auto max-w-[46ch] flex flex-col gap-2 text-left">
                    {comingSoonPreview.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-body text-[15px] text-ink-soft"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base font-body text-ink-soft">
                    Check back soon for high-quality, architecturally sound knowledge.
                  </p>
                )}
              </div>
            ) : (
              <div className="py-24 text-center border-2 border-dashed border-rule rounded-3xl bg-paper/50">
                <BookOpen className="mx-auto h-12 w-12 text-ink/20 mb-4" />
                <p className="text-xl font-display text-ink opacity-60">
                  No posts found in this category yet.
                </p>
              </div>
            )
          ) : (
            <CategoryHubClient category={category} groups={groups} />
          )}

          {relatedPaths.length > 0 && (
            <section className="mt-16 border-t border-rule pt-8">
              <h2 className="mb-4 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
                Guided learning paths
              </h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {relatedPaths.map((path) => (
                  <li key={path.slug}>
                    <Link
                      href={`/learning-paths/${path.slug}`}
                      className="font-display text-lg text-ink hover:text-forest"
                    >
                      {path.title}
                    </Link>
                    <span className="ml-2 font-utility text-[12px] text-ink-soft">{path.steps.length} steps</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12 border-t border-rule pt-8">
            <h2 className="mb-4 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
              {focusGroupLabel ? `More in ${focusGroupLabel}` : 'More topics'}
            </h2>
            {siblingTopics.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {siblingTopics.map((cat) => (
                  <Link
                    key={cat}
                    href={`/${cat}`}
                    className="rounded-full border border-rule bg-forest-tint px-3.5 py-1.5 font-utility text-[13px] text-forest-dark transition-colors hover:border-forest"
                  >
                    {getCategoryDisplayLabel(cat)}
                  </Link>
                ))}
              </div>
            )}
            <p className="font-utility text-[13px] text-ink-soft">
              <Link href="/topics" className="text-forest hover:underline">All topics</Link>
              {' · '}
              <Link href="/topics/all" className="text-forest hover:underline">Full index of every entry</Link>
              {' · '}
              <Link href="/learning-paths" className="text-forest hover:underline">Learning paths</Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

