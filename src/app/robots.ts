import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

import { siteConfig } from '@/config/site.config';

const SITE_URL = siteConfig.url;

/**
 * NOTE ON A REAL TENSION IN THE BRIEF:
 * The requirements doc (Section 4.5) says "block AI/scraper crawlers."
 * The person also wants "AI SEO" — i.e., being cited in AI Overviews,
 * ChatGPT/Perplexity answers, etc. These pull in different directions
 * unless the block list is split correctly:
 *
 *  - BLOCK bots that scrape content to train foundation models
 *    (bulk copying with no attribution back to this site).
 *  - ALLOW bots that crawl specifically to answer a live user query
 *    and cite/link back to the source (this IS the "AI SEO" channel —
 *    blocking these would defeat the person's own goal).
 *
 * This list reflects that split as of today; crawler names and
 * behavior change over time (new bots appear, existing ones change
 * purpose), so this should be reviewed periodically, not treated as
 * permanent — same spirit as the weekly sitemap health check.
 */
export default function robots(): MetadataRoute.Robots {
  const trainingScrapers = [
    'GPTBot',        // OpenAI training crawler (distinct from OAI-SearchBot)
    'CCBot',         // Common Crawl — widely used as LLM training data
    'Google-Extended', // Opts out of Gemini/Bard training use specifically
    'Bytespider',
    'Diffbot',
    'ImagesiftBot',
  ];

  const searchAndCitationBots = [
    'Googlebot',
    'Bingbot',
    'OAI-SearchBot',   // ChatGPT search/citation, not training
    'PerplexityBot',   // Perplexity's citation crawler
    'ClaudeBot',       // Anthropic's web crawler, used for live search grounding
  ];

  return {
    rules: [
      { userAgent: searchAndCitationBots, allow: '/' },
      { userAgent: trainingScrapers, disallow: '/' },
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
