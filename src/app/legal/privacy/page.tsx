import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

// Bump whenever the substance of this policy changes.
const EFFECTIVE_DATE = 'September 25, 2026';

const h2 = 'mb-3 mt-10 font-display text-2xl';
const p = 'mb-6 text-ink-soft';
const a = 'text-forest underline underline-offset-2';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-2 font-display text-4xl">Privacy Policy</h1>
      <p className="mb-8 font-utility text-sm text-ink-soft">Effective {EFFECTIVE_DATE}</p>

      <p className={p}>
        KnowThisWell (&quot;we&quot;, &quot;us&quot;) runs knowthiswell.com, a free knowledge library. You can read
        everything here without an account. This policy explains what information is collected when you use the
        site, why, and the choices you have.
      </p>

      <h2 className={h2}>In short</h2>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-ink-soft">
        <li>Reading the site doesn&apos;t require an account or any personal information.</li>
        <li>Our own analytics are cookie-free and count visits in aggregate.</li>
        <li>We only get your name or email if you choose to type them into our contact form.</li>
        <li>If the site shows ads, Google and its partners may use cookies. You can control that, as explained below.</li>
        <li>We don&apos;t sell your personal information.</li>
      </ul>

      <h2 className={h2}>Information we collect</h2>
      <p className={p}>
        <strong className="text-ink">Usage analytics.</strong> We use Vercel Web Analytics to count page views and
        see which pages are useful. It doesn&apos;t use cookies. It records things like the page visited, the
        referring site, and your broad location (country), device type and browser, and it doesn&apos;t build a
        profile of you across websites. We may also count anonymous events such as how many readers finish an
        entry&apos;s &quot;Test yourself&quot; quiz, along with the score. That count isn&apos;t tied to your identity.
      </p>
      <p className={p}>
        <strong className="text-ink">Feedback and contact forms.</strong> If you report an error, request a topic
        or send us a message, we store what you submit: your message, the page it relates to, and (on the contact
        form) the name and email address you choose to give. Your IP address is used briefly to stop spam and
        isn&apos;t saved with your message. We use this information only to read and act on your message and to
        reply if you asked us to.
      </p>
      <p className={p}>
        <strong className="text-ink">Search.</strong> Site search runs in your browser against a
        pre-built index, so your searches aren&apos;t sent to us or logged.
      </p>
      <p className={p}>
        <strong className="text-ink">Hosting logs.</strong> The site is hosted on Vercel, which processes standard
        request data (such as IP address and browser type) to deliver pages, keep the service secure and prevent
        abuse.
      </p>

      <h2 className={h2}>Cookies</h2>
      <p className={p}>
        The site itself doesn&apos;t set cookies to read it. Cookies may be set by third parties in two cases: by
        advertising partners if ads are shown (see below), and by YouTube if you play an embedded video. Videos are
        embedded in YouTube&apos;s privacy-enhanced mode, so YouTube doesn&apos;t set tracking cookies until you press play.
        You can block or delete cookies in your browser settings. The site still works without them.
      </p>

      <h2 className={h2}>Advertising</h2>
      <p className={p}>
        To keep the site free, we may show ads served by Google through Google AdSense and by Google&apos;s partners.
        When ads are shown:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-ink-soft">
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this site
          and other sites on the internet.
        </li>
        <li>
          Google&apos;s advertising cookies let Google and its partners show you ads based on your visits to this and
          other sites. See{' '}
          <a href="https://policies.google.com/technologies/partner-sites" className={a} rel="noopener noreferrer">
            how Google uses information from sites that use its services
          </a>
          .
        </li>
        <li>
          You can turn off personalized ads in{' '}
          <a href="https://adssettings.google.com" className={a} rel="noopener noreferrer">
            Google Ads Settings
          </a>
          , and opt out of other vendors&apos; personalized ads at{' '}
          <a href="https://www.aboutads.info/choices" className={a} rel="noopener noreferrer">
            aboutads.info
          </a>{' '}
          or, in Europe,{' '}
          <a href="https://www.youronlinechoices.eu" className={a} rel="noopener noreferrer">
            youronlinechoices.eu
          </a>
          .
        </li>
        <li>
          Visitors in the European Economic Area, the UK and Switzerland will be asked for consent through a
          Google-certified consent tool before any advertising cookies are used, and can change that choice at any
          time.
        </li>
      </ul>
      <p className={p}>Advertisers never see your contact form messages or email address.</p>

      <h2 className={h2}>Affiliate links</h2>
      <p className={p}>
        Some entries may include affiliate links, which means we earn a small commission if you buy something after
        clicking one, at no extra cost to you. Affiliate links are labeled. The retailer you visit may use cookies to
        record that you came from our link. Their own privacy policy applies once you leave our site.
      </p>

      <h2 className={h2}>Accounts</h2>
      <p className={p}>
        We don&apos;t currently offer user accounts. If we add sign-in (for example with Google) for features like
        saving progress, we&apos;ll update this policy to explain what that collects before the feature launches.
      </p>

      <h2 className={h2}>How long we keep information</h2>
      <p className={p}>
        Feedback and contact messages are kept for up to 24 months and then deleted, unless we need them longer to
        deal with a legal request. Analytics are kept in aggregate. You can ask us to delete your message sooner at
        any time.
      </p>

      <h2 className={h2}>Sharing</h2>
      <p className={p}>
        We don&apos;t sell your personal information. We share it only with the service providers that run the site
        (hosting and storage by Vercel, and advertising partners as described above), or when the law requires it.
      </p>

      <h2 className={h2}>Your rights</h2>
      <p className={p}>
        Depending on where you live, including under the GDPR in Europe and the UK and under US state laws such as
        California&apos;s CCPA/CPRA, you may have the right to access the personal information we hold about you,
        correct it, delete it, object to or restrict how it&apos;s used, or opt out of its use for targeted
        advertising. To make a request, use our{' '}
        <Link href="/contact" className={a}>
          contact form
        </Link>{' '}
        and choose &quot;Privacy or data request&quot;. We&apos;ll respond within the time the law requires, and we
        won&apos;t treat you differently for exercising these rights. If you&apos;re in Europe or the UK you can also
        complain to your local data protection authority.
      </p>

      <h2 className={h2}>Children</h2>
      <p className={p}>
        The site is written for a general audience and isn&apos;t directed at children under 13. We don&apos;t
        knowingly collect personal information from children under 13. If you believe a child has sent us personal
        information, contact us and we&apos;ll delete it.
      </p>

      <h2 className={h2}>Where information is processed</h2>
      <p className={p}>
        Our providers may process information in the United States and other countries. Where required, they use
        recognized safeguards such as standard contractual clauses.
      </p>

      <h2 className={h2}>Changes to this policy</h2>
      <p className={p}>
        When this policy changes, we&apos;ll update it here and change the effective date at the top. Significant
        changes will be flagged on the site.
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Questions about this policy or your information go through our{' '}
        <Link href="/contact" className={a}>
          contact form
        </Link>
        .
      </p>
    </div>
  );
}
