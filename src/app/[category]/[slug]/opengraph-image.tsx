import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

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

// Brand assets: display face is Fraunces, mark + two-tone wordmark per
// .claude/private/brand/BRAND.md. Read at build time from the repo.
const BRAND_DIR = join(process.cwd(), 'src/assets/brand');

export default async function OGImage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const post = await getPostBySlug(categorySlug, slug);
  const title = post?.title ?? 'KnowThisWell';
  const categoryLabel = post ? getCategoryLabel(post.category) : 'KnowThisWell';

  const [fraunces600, fraunces900, fraunces400, markData] = await Promise.all([
    readFile(join(BRAND_DIR, 'Fraunces-SemiBold.ttf')),
    readFile(join(BRAND_DIR, 'Fraunces-Black.ttf')),
    readFile(join(BRAND_DIR, 'Fraunces-Regular.ttf')),
    readFile(join(BRAND_DIR, 'mark.png')),
  ]);
  const markSrc = `data:image/png;base64,${markData.toString('base64')}`;

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
          padding: '68px',
          position: 'relative',
          fontFamily: 'Fraunces',
        }}
      >
        {/* double hairline frame — matches the site's editorial rule work */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
            border: '3px solid #2C4A3E',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 31,
            right: 31,
            bottom: 31,
            left: 31,
            border: '1px solid rgba(44,74,62,0.45)',
          }}
        />

        <div
          style={{
            display: 'flex',
            fontFamily: 'FrauncesRegular',
            fontSize: 24,
            letterSpacing: 4,
            color: '#4A443C',
            textTransform: 'uppercase',
          }}
        >
          {categoryLabel}
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'FrauncesBlack',
            fontSize: 60,
            lineHeight: 1.14,
            color: '#1F1B16',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* brand lockup — mark height ≈ 1.6× the wordmark cap height, optically centred */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- satori (next/og) renders <img>, not next/image */}
          <img src={markSrc} width={38} height={34} alt="" style={{ marginTop: 2 }} />
          <div style={{ display: 'flex', fontSize: 32, lineHeight: 1 }}>
            <span style={{ color: '#2C4A3E' }}>KnowThis</span>
            <span style={{ color: '#8B6F4E' }}>Well</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Fraunces', data: fraunces600, weight: 600, style: 'normal' },
        { name: 'FrauncesBlack', data: fraunces900, weight: 900, style: 'normal' },
        { name: 'FrauncesRegular', data: fraunces400, weight: 400, style: 'normal' },
      ],
    },
  );
}
