import { siteConfig } from '@/config/site.config';
import { getAllPostsMeta, getAllCategories, getThinCategories } from '@/lib/content';
import { getAllLearningPaths } from '@/content/learning-paths';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPostsMeta();
  const categories = await getAllCategories();
  const thin = await getThinCategories();
  const baseUrl = siteConfig.url;

  const latest = (dates: string[]) => dates.filter(Boolean).sort().at(-1);
  const entry = (path: string, priority: string, lastmod?: string) =>
    `<url><loc>${baseUrl}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<priority>${priority}</priority></url>`;

  const updatedByKey = new Map(posts.map((p) => [`${p.category}/${p.slug}`, p.updated]));
  const stepDates = (steps: { category: string; slug: string }[]) =>
    steps.map((s) => updatedByKey.get(`${s.category}/${s.slug}`) ?? '');
  const paths = getAllLearningPaths();

  const urls = [
    entry('/', '1.0', latest(posts.map((p) => p.updated))),
    ...['/about', '/about/method', '/contact', '/legal/privacy', '/legal/terms', '/legal/disclaimer', '/legal/dmca'].map(
      (path) => entry(path, '0.3')
    ),
    entry('/topics', '0.5'),
    entry('/glossary/a', '0.4'),
    entry('/learning-paths', '0.6', latest(paths.flatMap((p) => stepDates(p.steps)))),
    ...paths.map((p) => entry(`/learning-paths/${p.slug}`, '0.6', latest(stepDates(p.steps)))),
    ...categories
      .filter((cat) => !thin.has(cat))
      .map((cat) => entry(`/${cat}`, '0.8', latest(posts.filter((p) => p.category === cat).map((p) => p.updated)))),
    ...posts.map((p) => entry(`/${p.category}/${p.slug}`, '0.6', p.updated)),
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
