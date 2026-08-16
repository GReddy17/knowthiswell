export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">Privacy Policy</h1>

      <p className="mb-6 text-ink-soft">
        This site is a knowledge library. To ensure security and stability,
        it uses a server-side middleware to prevent automated scraping and
        denial-of-service attacks.
        As of this writing, KnowThisWell does not run tracking analytics,
        does not use cookies, and does not collect personal
        information through the site itself.
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

      <p className="mt-10 text-sm text-ink-soft">
        <strong>NOTE:</strong> this policy must be revisited the moment
        analytics, a contact form, a newsletter signup, or any other
        data-collecting feature is added — this text is only accurate
        for the site's current, feature-free state.
      </p>
    </div>
  );
}
