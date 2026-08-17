import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostsByCategory, groupBySubtopic, getAllCategories } from '@/lib/content';
import { getCategoryLabel, getCategoryDescription, getCategoryStatus } from '@/lib/taxonomy';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { CategoryHubClient } from '@/components/CategoryHubClient';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${getCategoryLabel(category)} — KnowThisWell`,
    alternates: { canonical: `/${category}` }
  };
}

export default async function CategoryHubPage({ params }: PageProps) {
  const { category } = await params;
  const label = getCategoryLabel(category);
  const description = getCategoryDescription(category);
  const status = getCategoryStatus(category);
  const categories = await getAllCategories();
  const posts = await getPostsByCategory(category);
  const groups = groupBySubtopic(posts);

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-24 self-start">
            <p className="mb-4 font-utility text-[11px] uppercase tracking-widest text-ochre">
              Knowledge Map
            </p>
            <nav className="flex flex-col gap-1 font-body text-sm text-ink-soft">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-forest hover:bg-forest/10 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> All Topics
              </Link>
              <div className="my-3 border-t border-rule" />
              {categories.map((cat) => (
                <div key={cat} className="flex flex-col gap-1">
                  {cat === category ? (
                    <div className="px-3 py-2 text-forest font-semibold text-[14px]">
                      {getCategoryLabel(cat)}
                    </div>
                  ) : (
                    <Link
                      href={`/${cat}`}
                      className="px-3 py-2 rounded-lg transition-colors hover:bg-paper hover:text-forest"
                    >
                      {getCategoryLabel(cat)}
                    </Link>
                  )}
                </div>
              ))}
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${category}/${post.slug}`}
                  className="pl-6 pr-3 py-1 text-[13px] rounded-lg hover:text-forest transition-colors opacity-80 hover:opacity-100"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
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
              <div className="py-24 text-center border-2 border-dashed border-rule rounded-3xl bg-paper/50">
                <BookOpen className="mx-auto h-12 w-12 text-ink/20 mb-4" />
                <p className="text-2xl font-display text-ink opacity-60">
                  We&apos;re currently building out this topic. <br />
                  Check back soon for high-quality, architecturally sound knowledge.
                </p>
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
        </main>
      </div>
    </div>
  );
}

