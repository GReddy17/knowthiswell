import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllTags, getPostsByTag } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag} — KnowThisWell`,
    // Tag pages are frequently thin/duplicate content at low post counts —
    // keep them out of the index until a tag has real depth. Revisit this
    // threshold as content volume grows (see PRODUCTION-AUDIT.md).
    robots: { index: false, follow: true },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  return (
    <div className="mx-auto max-w-[820px] px-5 py-14 md:px-10">
      <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Tag
      </div>
      <h1 className="mb-10 font-display text-4xl text-ink">#{tag}</h1>

      {posts.length === 0 ? (
        <p className="font-body text-ink-soft">No entries tagged with this yet.</p>
      ) : (
        <ul className="divide-y divide-rule">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link
                href={`/${post.category}/${post.slug}`}
                className="mb-1.5 block font-display text-xl text-ink hover:text-forest"
              >
                {post.title}
              </Link>
              <p className="mb-2 max-w-[60ch] font-body text-[15.5px] text-ink-soft">
                {post.excerpt}
              </p>
              <span className="font-utility text-xs uppercase tracking-wide text-ochre">
                {getCategoryLabel(post.category)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
