import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllAuthorSlugs, getAuthorBySlug, getPostsByAuthor } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthorSlugs();
}

// See [category]/page.tsx for why this matters: without it, a removed
// or renamed author slug renders an empty 200 page instead of a real
// 404 (notFound() alone gets cached as a static 200 for out-of-list
// params on a route covered by generateStaticParams).
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  return { title: author ? `${author.name} — KnowThisWell` : 'Author' };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = await getPostsByAuthor(slug);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.credentialLine,
  };

  return (
    <div className="mx-auto max-w-[820px] px-5 py-14 md:px-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-ochre">
        {author.credentialLine}
      </div>
      <h1 className="mb-5 font-display text-4xl text-ink">{author.name}</h1>
      <p className="mb-10 max-w-[60ch] font-body text-lg text-ink-soft">{author.bio}</p>

      <hr className="mb-8 border-t border-rule" />

      <h2 className="mb-5 font-utility text-xs uppercase tracking-[0.1em] text-ochre">
        Entries by {author.name} ({posts.length})
      </h2>
      <ul className="divide-y divide-rule">
        {posts.map((post) => (
          <li key={post.slug} className="py-5">
            <Link
              href={`/${post.category}/${post.slug}`}
              className="mb-1.5 block font-display text-xl text-ink hover:text-forest"
            >
              {post.title}
            </Link>
            <span className="font-utility text-xs uppercase tracking-wide text-ochre">
              {getCategoryLabel(post.category)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
