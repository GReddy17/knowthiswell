/**
 * Single source of truth for site identity/branding.
 * Every file that previously hardcoded "KnowThisWell" or the domain
 * (layout.tsx, ArticleSchema, robots.ts, sitemap.xml/route.ts,
 * rss.xml/route.ts) should import from here instead.
 *
 * This does NOT include color/typography tokens — those already have a
 * single source of truth in src/styles/tokens.css, which is the correct
 * place for them (CSS custom properties, not JS, so they're usable in
 * both Tailwind classes and raw CSS without a build step translating
 * between two config formats). Duplicating them here would create a
 * second source of truth, not remove one.
 */
export const siteConfig = {
  name: 'KnowThisWell',
  tagline: 'A growing, practical knowledge library.',
  description:
    'A growing, practical knowledge library covering money, career, health, technology, and civic life.',
  // ASSUMPTION: placeholder domain — update via NEXT_PUBLIC_SITE_URL env
  // var for staging/preview deploys, or change the fallback below once
  // the real production domain is confirmed.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://knowthiswell.com',
  logo: '/logo.png',
  footer: {
    copyrightHolder: 'KnowThisWell',
    rightsNotice: 'Content may not be reproduced without permission.',
  },
  social: {
    // Empty until real accounts exist — components should check for
    // presence before rendering a link, not assume these are always set.
    twitter: '',
    github: '',
  },
  nav: [
    { label: 'Topics', href: '/' },
    { label: 'Glossary A–Z', href: '/glossary/a' },
    { label: 'About & Method', href: '/about/method' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
