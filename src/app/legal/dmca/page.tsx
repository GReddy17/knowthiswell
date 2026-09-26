import Link from 'next/link';

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
        send a notice through our{' '}
        <Link href="/contact" className="text-forest underline underline-offset-2">
          contact form
        </Link>{' '}
        (choose &quot;Copyright or content removal&quot;) including:
      </p>
      <ul className="mb-6 list-disc pl-6 text-ink-soft">
        <li>Identification of the copyrighted work claimed to be infringed</li>
        <li>The specific URL(s) on this site where the material is located</li>
        <li>Your name and an email address where we can reach you</li>
        <li>
          A statement that you have a good-faith belief the use is not
          authorized by the copyright owner, its agent, or the law
        </li>
        <li>
          A statement, under penalty of perjury, that the information in
          the notice is accurate and that you are authorized to act on
          the copyright owner&apos;s behalf
        </li>
        <li>Your physical or electronic signature</li>
      </ul>

      <h2 className="mb-3 mt-10 font-display text-2xl">Reporting unauthorized copies of this site&apos;s content</h2>
      <p className="mb-6 text-ink-soft">
        If you find content from this site reproduced elsewhere without
        permission, please report it through the same contact form. A
        side-by-side list of the original and copied URLs speeds up review
        considerably.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">What happens next</h2>
      <p className="mb-6 text-ink-soft">
        We review every complete notice and remove or disable access to
        material that infringes. If your content was removed and you believe
        that was a mistake, you can send a counter-notice through the same
        form explaining why.
      </p>
    </div>
  );
}
