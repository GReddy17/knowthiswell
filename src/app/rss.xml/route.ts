import { siteConfig } from '@/config/site.config';
import { getAllPostsMeta } from '@/lib/content';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPostsMeta();
  const baseUrl = siteConfig.url;

  const items = posts
    .filter(p => !p.draft)
    .sort((a, b) => (a.updated > b.updated ? 1 : -1))
    .map(p => `
      <item>
        <title>${p.title}</title>
        <link>${baseUrl}/${p.category}/${p.slug}</link>
        <description>${p.excerpt}</description>
        <pubDate>${new Date(p.updated).toUTCString()}</pubDate>
        <guid>${baseUrl}/${p.category}/${p.slug}</guid>
      </item>
    `).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${baseUrl}</link>
        <description>${siteConfig.description}</description>
        <language>en-us</language>
        ${items}
      </channel>
    </rss>`,
    {
      headers: { 'Content-Type': 'application/xml' },
    }
  );
}
