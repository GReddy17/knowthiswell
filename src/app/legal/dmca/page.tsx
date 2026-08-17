export const metadata = { title: 'DMCA Policy' };

export default function DMCAPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">DMCA Policy</h1>

      <p className="mb-6 text-ink-soft">
        KnowThisWell respects the intellectual property rights of others
        and expects users of this site to do the same. This page explains
        how to submit a takedown notice under the Digital Millennium
        Copyright Act (DMCA), and how KnowThisWell handles content that
        infringes its own copyright when found elsewhere.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Filing a takedown notice</h2>
      <p className="mb-4">
        If you believe content on this site infringes your copyright,
        send a written notice including:
      </p>
      <ul className="mb-6 list-disc pl-6 text-ink-soft">
        <li>Identification of the copyrighted work claimed to be infringed</li>
        <li>The specific URL(s) on this site where the material is located</li>
        <li>Your contact information (name, address, phone, email)</li>
        <li>
          A statement that you have a good-faith belief the use is not
          authorized by the copyright owner, its agent, or the law
        </li>
        <li>
          A statement, under penalty of perjury, that the information in
          the notice is accurate and that you are authorized to act on
          the copyright owner's behalf
        </li>
        <li>Your physical or electronic signature</li>
      </ul>

      <h2 className="mb-3 mt-10 font-display text-2xl">Reporting unauthorized copies of this site's content</h2>
      <p className="mb-6 text-ink-soft">
        If you find content from this site reproduced elsewhere without
        permission, please report it using the same contact channel — a
        specific URL comparison speeds up review considerably.
      </p>

      <p className="mt-10 text-sm text-ink-soft">
        <strong>ASSUMPTION FLAGGED:</strong> a real contact email/address
        needs to be added here before this page is considered complete —
        currently no contact channel is specified.
      </p>
    </div>
  );
}
