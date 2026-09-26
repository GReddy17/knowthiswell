import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { getAllCategories, getAllPostsMeta } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'What KnowThisWell is, how entries are researched and reviewed, and how the site stays independent.',
};

export default async function AboutPage() {
  const [posts, categories] = await Promise.all([getAllPostsMeta(), getAllCategories()]);
  // Round down to the nearest 50 so the number doesn't need a redeploy to stay true.
  const postCount = Math.floor(posts.length / 50) * 50;

  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">About KnowThisWell</h1>

      <p className="mb-6 text-lg text-ink-soft">
        KnowThisWell is a free, practical knowledge library. Each entry explains one thing properly: how it works,
        where people usually get it wrong, and what it means in real life, in plain language and without the
        padding.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">What you&apos;ll find here</h2>
      <p className="mb-6">
        More than {postCount} entries across {categories.length} subject areas, from money and careers to health,
        science, technology and civic life. Most entries include worked examples, common mistakes, a short
        &quot;Test yourself&quot; quiz, and the sources they draw on. New entries are added every day, and
        existing ones are revisited as facts change.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">How entries are made</h2>
      <p className="mb-6">
        Entries are researched from primary and reputable public sources: government and institutional data,
        academic research and established references. They&apos;re drafted with the help of AI-assisted research and
        writing tools, then edited before publishing. Every entry shows when it was last updated and when its facts
        were last reviewed, and lists its sources. The full process is on our{' '}
        <Link href="/about/method" className="text-forest underline underline-offset-2">
          editorial method
        </Link>{' '}
        page, and its limits are spelled out in our{' '}
        <Link href="/legal/disclaimer" className="text-forest underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Corrections</h2>
      <p className="mb-6">
        We get things wrong sometimes. When a reader reports an error and it checks out, we fix it and update the
        entry&apos;s review date. Use the feedback box at the bottom of any entry, or our{' '}
        <Link href="/contact" className="text-forest underline underline-offset-2">
          contact form
        </Link>
        .
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Independence, advertising and affiliates</h2>
      <p className="mb-6">
        KnowThisWell is independently run and free to read. To keep it that way, the site may show advertising
        (for example through Google AdSense) or include affiliate links, where we earn a small commission if you buy
        something through a link. Neither decides what we write:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-5">
        <li>No advertiser or partner reviews, approves or pays for what an entry says.</li>
        <li>Sponsored content and affiliate links are always clearly labeled.</li>
        <li>Ads are kept out of the way of the explanation itself and are never styled to look like our content.</li>
      </ul>
      <p className="mb-6">
        How ads and affiliate links handle your data is covered in our{' '}
        <Link href="/legal/privacy" className="text-forest underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Elsewhere</h2>
      <p className="mb-6">
        Short explainer videos from the library go out daily on{' '}
        {siteConfig.social.map((s, i) => (
          <span key={s.href}>
            <a href={s.href} className="text-forest underline underline-offset-2" rel="noopener noreferrer">
              {s.label}
            </a>
            {i < siteConfig.social.length - 2 ? ', ' : i === siteConfig.social.length - 2 ? ' and ' : ''}
          </span>
        ))}
        .
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Get in touch</h2>
      <p className="mb-6">
        Questions, ideas or partnership enquiries go through our{' '}
        <Link href="/contact" className="text-forest underline underline-offset-2">
          contact form
        </Link>
        .
      </p>
    </div>
  );
}
