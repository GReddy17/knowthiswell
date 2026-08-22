import { siteConfig } from '@/config/site.config';
import { getAllPostsMeta, getAllCategories } from '@/lib/content';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPostsMeta();
  const categories = await getAllCategories();
  const baseUrl = siteConfig.url;

  const urls = [
    `<url><loc>${baseUrl}/</loc><priority>1.0</priority></url>`,
    ...categories.map(cat => `<url><loc>${baseUrl}/${cat}</loc><priority>0.8</priority></url>`),
    ...posts.map(p => `<url><loc>${baseUrl}/${p.category}/${p.slug}</loc><lastmod>${p.updated}</lastmod><priority>0.6</priority></url>`),
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
