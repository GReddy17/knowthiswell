// src/app/llms.txt/route.ts
//
// llms.txt is an emerging (not yet universally adopted) convention —
// a plain-language, markdown index of the site aimed at AI systems
// that ground answers in live web content, sitting alongside
// robots.txt/sitemap.xml rather than replacing them. Framed here as a
// genuine AI-SEO lever: a clean summary + link list is easier for an
// answer engine to parse and cite correctly than crawling and
// inferring structure from full HTML.
import { getAllCategories, getPostsByCategory } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';

export const dynamic = 'force-static';

export async function GET() {
  const lines: string[] = [
    '# KnowThisWell',
    '',
    '> A practical knowledge library covering money, career, health, technology, and civic life. Entries are written plainly, fact-reviewed, and dated.',
    '',
  ];

  for (const category of getAllCategories()) {
    lines.push(`## ${getCategoryLabel(category)}`);
    const posts = getPostsByCategory(category);
    for (const post of posts) {
      lines.push(`- [${post.title}](/${category}/${post.slug}): ${post.excerpt}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
