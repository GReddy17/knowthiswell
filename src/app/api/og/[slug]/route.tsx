import { ImageResponse } from '@vercel/og';
import { getAllPostSlugs, getPostBySlug } from '@/lib/content';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // For simplicity in this demo, we use a fixed category or look it up
  // A production version would use a dynamic path like /api/og/[category]/[slug]
  const posts = await getAllPostSlugs();
  const postEntry = posts.find((p: { slug: string }) => p.slug === slug);

  if (!postEntry) {
    return new Response('Not Found', { status: 404 });
  }

  const post = await getPostBySlug(postEntry.category, postEntry.slug);
  if (!post) return new Response('Not Found', { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fdfcfb', // var(--paper)
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#1a1a1a', // var(--ink)
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#4a5d4e', // var(--forest)
            textAlign: 'center',
          }}
        >
          KnowThisWell
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
