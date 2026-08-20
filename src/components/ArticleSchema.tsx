import type { PostMeta } from '@/types/post';
import { getCategoryLabel } from '@/lib/taxonomy';

import { siteConfig } from '@/config/site.config';

const SITE_URL = siteConfig.url;

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
/** Schema.org/RDFa date-time properties require a full ISO 8601
 *  datetime with a timezone offset — a bare "YYYY-MM-DD" (what every
 *  post's frontmatter stores) fails Google's Rich Results validator
 *  with "Invalid datetime value" / "missing a timezone". Normalize at
 *  the schema boundary rather than changing the frontmatter format. */
function toSchemaDateTime(date: string): string {
  return `${date}T00:00:00Z`;
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const url = `${SITE_URL}/${post.category}/${post.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url,
    image: `${url}/opengraph-image`,
    datePublished: toSchemaDateTime(post.date),
    dateModified: toSchemaDateTime(post.updated),
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.credentialLine,
      url: `${SITE_URL}/authors/${post.author.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(post.lastReviewed && {
      // Not a native schema.org field, but reviewedDate-style extensions
      // are commonly parsed by AI answer engines evaluating trust —
      // included as a best-effort trust signal.
      dateReviewed: toSchemaDateTime(post.lastReviewed),
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
