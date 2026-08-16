import { getAllPostSlugs, getAllCategories } from '@/lib/content';

export async function GET() {
  const posts = getAllPostSlugs();
  const categories = getAllCategories();
  const baseUrl = 'https://knowthiswell.com';

  const urls = [
    `<url><loc>${baseUrl}/</loc><priority>1.0</priority></url>`,
    ...categories.map(cat => `<url><loc>${baseUrl}/${cat}</loc><priority>0.8</priority></url>`),
    ...posts.map(p => `<url><loc>${baseUrl}/${p.category}/${p.slug}</loc><priority>0.6</priority></url>`),
  ].join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`,
    {
      headers: { 'Content-Type': 'application/xml' },
    }
  );
}
