import type { PostMeta } from '@/types/post';
import { getCategoryLabel } from '@/lib/taxonomy';

const SITE_URL = 'https://knowthiswell.com'; // ASSUMPTION — replace with real domain

interface ArticleSchemaProps {
  post: PostMeta;
}

/**
 * Article + Person(author) JSON-LD. `dateModified` and `datePublished`
 * are pulled from the same `updated`/`date` fields the sitemap uses —
 * kept in sync deliberately so search engines and AI answer engines see
 * one consistent timestamp story across sitemap.xml, this schema, and
 * the on-page "Updated" label, rather than three different dates.
 */
export function ArticleSchema({ post }: ArticleSchemaProps) {
  const url = `${SITE_URL}/${post.category}/${post.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.credentialLine,
    },
    publisher: {
      '@type': 'Organization',
      name: 'KnowThisWell',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(post.lastReviewed && {
      // Not a native schema.org field, but reviewedDate-style extensions
      // are commonly parsed by AI answer engines evaluating trust —
      // included as a best-effort trust signal.
      dateReviewed: post.lastReviewed,
    }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: getCategoryLabel(post.category),
        item: `${SITE_URL}/${post.category}`,
      },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
