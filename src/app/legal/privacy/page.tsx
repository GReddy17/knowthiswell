import Link from 'next/link';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">Privacy Policy</h1>

      <p className="mb-6 text-ink-soft">
        This site is a knowledge library. To ensure security and stability,
        it uses a server-side middleware to prevent automated scraping and
        denial-of-service attacks.
        KnowThisWell does not run tracking analytics beyond Vercel&apos;s
        built-in, cookie-free page-view counting, and does not require an
        account or collect personal information to read the site.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Feedback form</h2>
      <p className="mb-6 text-ink-soft">
        Each entry has an optional feedback form for reporting an error or requesting a topic (see our{' '}
        <Link href="/legal/disclaimer" className="text-forest">
          content disclaimer
        </Link>
        ). Submitting it sends the message you type, the page you sent it from, and — for spam-prevention purposes
        only — your IP address, to our backend storage. No account, email, or other personal information is
        required to submit feedback, and nothing you submit is published or shared.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Search</h2>
      <p className="mb-6 text-ink-soft">
        Site search runs entirely in your browser against a
        pre-built index — search queries are not sent to a server
        or logged.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Hosting</h2>
      <p className="mb-6 text-ink-soft">
        This site is hosted on Vercel, which may log standard
        infrastructure-level request data (such as IP address) for
        security and performance purposes, independent of anything
        this site adds.
      </p>
    </div>
  );
}
