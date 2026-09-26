import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Use' };

// Bump whenever the substance of these terms changes.
const EFFECTIVE_DATE = 'September 25, 2026';

const h2 = 'mb-3 mt-10 font-display text-2xl';
const p = 'mb-6 text-ink-soft';
const a = 'text-forest underline underline-offset-2';

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-2 font-display text-4xl">Terms of Use</h1>
      <p className="mb-8 font-utility text-sm text-ink-soft">Effective {EFFECTIVE_DATE}</p>

      <p className={p}>
        These terms apply to your use of knowthiswell.com. By using the site you agree to them. If you don&apos;t
        agree, please don&apos;t use the site.
      </p>

      <h2 className={h2}>Information, not advice</h2>
      <p className={p}>
        Everything here is general information for learning. It isn&apos;t medical, legal, financial, tax or other
        professional advice, and it may contain errors or go out of date. Check the sources listed on each entry and
        speak to a qualified professional before acting on anything important. Our{' '}
        <Link href="/legal/disclaimer" className={a}>
          disclaimer
        </Link>{' '}
        explains this in more detail and forms part of these terms.
      </p>

      <h2 className={h2}>Using our content</h2>
      <p className={p}>
        The text, diagrams, quizzes, videos and design of the site are owned by KnowThisWell or used with permission,
        and are protected by copyright. You&apos;re welcome to read and share links to any page, and to quote short
        passages with credit and a link back to the original entry. Please don&apos;t republish whole entries or
        substantial parts of them, sell our content, or present it as your own without written permission.
      </p>

      <h2 className={h2}>Acceptable use</h2>
      <p className={p}>You agree not to:</p>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-ink-soft">
        <li>scrape, crawl or bulk-download the site, except through standard search engine indexing;</li>
        <li>interfere with the site&apos;s security or performance, or try to access systems you&apos;re not
          allowed to;</li>
        <li>use our forms to send spam, abuse, malware, or unlawful content;</li>
        <li>click ads or affiliate links in bad faith, or encourage others to.</li>
      </ul>

      <h2 className={h2}>Messages you send us</h2>
      <p className={p}>
        When you send feedback, a correction, a topic idea or a message, you confirm it&apos;s yours to share, and you
        let us use it to improve the site, for example by correcting an entry or writing a requested topic. We
        won&apos;t publish your name or contact details without asking. Our{' '}
        <Link href="/legal/privacy" className={a}>
          privacy policy
        </Link>{' '}
        explains how we handle that information.
      </p>

      <h2 className={h2}>Ads, affiliate links and other sites</h2>
      <p className={p}>
        The site may show ads and include affiliate links and links to other websites. We don&apos;t control those
        sites or the products advertised, and we&apos;re not responsible for their content, offers or privacy
        practices. Any purchase you make is between you and that seller.
      </p>

      <h2 className={h2}>Availability and changes</h2>
      <p className={p}>
        We may change, update or remove content or features, or pause the site, at any time. We may also update
        these terms. When we do, we&apos;ll change the effective date above, and continuing to use the site means you
        accept the updated terms.
      </p>

      <h2 className={h2}>No warranty and limitation of liability</h2>
      <p className={p}>
        The site is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind. To the
        fullest extent the law allows, KnowThisWell isn&apos;t liable for any loss or damage arising from your use of
        the site or reliance on its content. Some places don&apos;t allow these limits, so they may not all apply to
        you.
      </p>

      <h2 className={h2}>Copyright complaints</h2>
      <p className={p}>
        If you believe something on the site infringes your copyright, follow our{' '}
        <Link href="/legal/dmca" className={a}>
          DMCA policy
        </Link>
        .
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Questions about these terms go through our{' '}
        <Link href="/contact" className={a}>
          contact form
        </Link>
        .
      </p>
    </div>
  );
}
