import type { Metadata } from 'next';

import { Fraunces, Newsreader, Public_Sans } from 'next/font/google';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { BackToTop } from '@/components/BackToTop';
import { LibrarySidebar } from '@/components/LibrarySidebar';
import { getLibraryStructure } from '@/lib/content';
import { siteConfig } from '@/config/site.config';
import '../styles/tokens.css';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
});
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  display: 'swap',
});
const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
});

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: SITE_URL,
  logo: `${SITE_URL}${siteConfig.logo}`,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const libraryData = await getLibraryStructure();

  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable} ${publicSans.variable}`}>
      <head>
        <meta name="theme-color" content="#fdfcfb" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-paper font-body text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <Navbar />
        <div className="flex h-screen overflow-hidden">
          <div className="hidden md:block h-full">
            <LibrarySidebar categories={libraryData} />
          </div>
          <div id="main-content" className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
        <BackToTop />

        <footer className="mt-20 border-t border-rule px-5 py-10 font-utility text-xs text-ink-soft md:px-10">
          <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-6">
            <p>© {new Date().getFullYear()} {siteConfig.footer.copyrightHolder}. {siteConfig.footer.rightsNotice}</p>
            <div className="flex gap-6">
              <Link href="/about/method" className="hover:text-forest">Editorial method</Link>
              <Link href="/legal/dmca" className="hover:text-forest">DMCA</Link>
              <Link href="/legal/privacy" className="hover:text-forest">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
