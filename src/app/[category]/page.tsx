import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostsByCategory, groupBySubtopic, getAllCategories } from '@/lib/content';
import { getCategoryLabel, getCategoryDescription } from '@/lib/taxonomy';

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
  const posts = await getPostsByCategory(category);
  const groups = groupBySubtopic(posts);

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-24 self-start">
            <p className="mb-4 font-utility text-[11px] uppercase tracking-widest text-ochre">
              Jump to section
            </p>
            <nav className="flex flex-col gap-2 font-body text-sm text-ink-soft">
              {groups.map((group) => (
                <a
                  key={group.subtopic ?? 'general'}
                  href={`#${group.subtopic ?? 'general'}`}
                  className="hover:text-forest hover:underline"
                >
                  {group.subtopic ?? 'General'}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main>
          <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
            Topic
          </div>
          <h1 className="mb-4 font-display text-[2.25rem] leading-tight text-ink md:text-[2.75rem]">
            {label}
          </h1>
          {description && (
            <p className="mb-10 max-w-[60ch] font-body text-lg italic text-ink-soft">
              {description}
            </p>
          )}
          <hr className="mb-10 border-t border-rule" />

          {groups.map((group) => (
            <section key={group.subtopic ?? 'general'} className="mb-12" id={group.subtopic ?? 'general'}>
              {group.subtopic && (
                <h2 className="mb-5 font-display text-xl text-ink">
                  {group.subtopic}
                </h2>
              )}
              <ul className="divide-y divide-rule">
                {group.posts.map((post) => (
                  <li key={post.slug} className="py-5">
                    <Link
                      href={`/${category}/${post.slug}`}
                      className="mb-1.5 block font-display text-xl text-ink hover:text-forest"
                    >
                      {post.title}
                    </Link>
                    <p className="mb-2 max-w-[60ch] font-body text-[15.5px] text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-3 font-utility text-xs text-ochre">
                      <span>{post.readingTimeMinutes} min read</span>
                      {post.lastReviewed && <span>· Fact-reviewed</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
