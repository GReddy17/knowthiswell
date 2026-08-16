import type { Metadata } from 'next';
import { EntryHeader } from '@/components/EntryHeader';
import { TocRail } from '@/components/TocRail';
import { RelatedRail } from '@/components/RelatedRail';
import { AuthorCard, SourcesAndSeeAlso } from '@/components/EntryFooter';
import { ArticleSchema } from '@/components/ArticleSchema';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';
import { MDXRenderer } from '@/components/MDXRenderer';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Static export: every post/category pair is pre-rendered at build time.
export async function generateStaticParams() {
  return await getAllPostSlugs(); // [{ category, slug }, ...]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);
  if (!post) return {};
  return {
    title: `${post.title} — KnowThisWell`,
    description: post.excerpt,
    alternates: { canonical: `/${post.category}/${post.slug}` },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);
  if (!post) return null; // 404 handled by not-found.tsx

  const related = getRelatedPosts(post);

  const breadcrumbs = [
    { label: getCategoryLabel(post.category), href: `/${post.category}` },
    ...(post.subtopic
      ? [{ label: post.subtopic, href: `/${post.category}#${post.subtopic}` }]
      : []),
  ];

  return (
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-5 py-10 md:grid-cols-[180px_1fr_180px] md:gap-8 md:px-10 md:py-14">
      <ArticleSchema post={post} />
      <div className="hidden md:block">
        <div className="sticky top-10 self-start">
          <TocRail headings={post.headings} />
          <RelatedRail related={related} />
        </div>
      </div>

      <main>
        <EntryHeader
          breadcrumbs={breadcrumbs}
          title={post.title}
          summary={post.summary}
          readingTimeMinutes={post.readingTimeMinutes}
          updated={post.updated}
          lastReviewed={post.lastReviewed}
        />

        {/* MDXRenderer resolves [[term|slug]] markers into <TermLink>,
            and exposes ModeToggle / QuickCheck / FootnoteAside /
            MisconceptionCallout / EntryCalculator as usable MDX components
            so authors can drop them directly into post bodies. */}
        <article className="prose prose-lg max-w-measure font-body text-ink first-letter:hidden md:first-letter:float-left md:first-letter:pr-2 md:first-letter:font-display md:first-letter:text-6xl md:first-letter:font-medium md:first-letter:text-forest">
          <MDXRenderer source={post.body} postRef={`${post.category}/${post.slug}`} />
        </article>

        <SourcesAndSeeAlso sources={post.sources} seeAlso={related} />
      </main>

      <aside className="hidden md:block">
        <div className="sticky top-10 self-start">
          <AuthorCard author={post.author} />
        </div>
      </aside>
    </div>
  );
}
