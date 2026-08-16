export const metadata = { title: 'About & Editorial Method' };

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">About &amp; Editorial Method</h1>

      <p className="mb-6 text-lg text-ink-soft">
        KnowThisWell is a practical knowledge library — plainly written
        entries on money, career, health, technology, and civic life,
        aimed at being genuinely useful rather than exhaustive for its
        own sake.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">How entries are written</h2>
      <p className="mb-6">
        Each entry is drafted from primary sources where possible —
        government publications, academic research, and original
        documentation rather than secondary summaries. Sources used are
        listed at the end of every entry that makes factual claims.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Fact review</h2>
      <p className="mb-6">
        Entries display two dates: <strong>Updated</strong>, which
        changes for any edit including minor corrections, and{' '}
        <strong>Fact-reviewed</strong>, which changes only when the
        substantive claims in the entry have been re-checked against
        current sources. The two are tracked separately so a typo fix
        can't be mistaken for a content review.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Corrections</h2>
      <p className="mb-6">
        If you find an error, factual or otherwise, corrections are
        welcome — see the contact information in the site footer.
      </p>
    </div>
  );
}
