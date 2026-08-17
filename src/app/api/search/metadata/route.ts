import { getAllPostsMeta } from '@/lib/content';

export async function GET() {
  try {
    const posts = await getAllPostsMeta();

    const searchIndex = posts.map(p => ({
      title: p.title,
      slug: p.slug,
      category: p.category,
      tags: p.tags,
      href: `/${p.category}/${p.slug}`
    }));

    return new Response(JSON.stringify({ posts: searchIndex }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
      },
    });
  } catch (error) {
    console.error('Search metadata API error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
