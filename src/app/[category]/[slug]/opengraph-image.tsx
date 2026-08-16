import { ImageResponse } from 'next/og';
import { getPostBySlug, getAllPostSlugs } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

// NOTE: no `export const runtime = 'edge'` here — edge functions are
// incompatible with `output: 'export'` static export. Next still
// pre-renders this image at build time for every path produced by the
// page's generateStaticParams, which is what static export needs.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const post = getPostBySlug(categorySlug, slug);
  const title = post?.title ?? 'KnowThisWell';
  const categoryLabel = post ? getCategoryLabel(post.category) : 'KnowThisWell';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FBF8F1',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 2, color: '#2C4A3E', textTransform: 'uppercase' }}>
          {categoryLabel}
        </div>
        <div style={{ display: 'flex', fontSize: 64, lineHeight: 1.15, color: '#1F1B16', maxWidth: 950 }}>
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#8B6F4E' }}>
          KnowThisWell
        </div>
      </div>
    ),
    { ...size }
  );
}
