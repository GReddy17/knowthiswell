import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send KnowThisWell a question, a correction, a partnership enquiry, or a privacy request.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">Contact</h1>

      <p className="mb-6 text-lg text-ink-soft">
        Questions, corrections, partnership ideas, privacy requests: they all come in through this form, and a real
        person reads every one. Leave an email if you&apos;d like a reply. It&apos;s only used to answer you.
      </p>

      <ContactForm />

      <h2 className="mb-3 mt-12 font-display text-2xl">Before you write</h2>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-ink-soft">
        <li>
          <strong className="text-ink">Found a mistake in an article?</strong> The feedback box at the bottom of every
          entry links your report to the exact page, which gets it fixed faster.
        </li>
        <li>
          <strong className="text-ink">Copyright concerns</strong> are handled under our{' '}
          <Link href="/legal/dmca" className="text-forest underline underline-offset-2">
            DMCA policy
          </Link>
          .
        </li>
        <li>
          <strong className="text-ink">Privacy requests</strong> (access, correction or deletion) are covered in our{' '}
          <Link href="/legal/privacy" className="text-forest underline underline-offset-2">
            privacy policy
          </Link>
          .
        </li>
        <li>
          <strong className="text-ink">Advertising and sponsorship:</strong> we&apos;re happy to talk, but nobody can
          pay to change what an article says. See how we keep that separate on our{' '}
          <Link href="/about" className="text-forest underline underline-offset-2">
            About page
          </Link>
          .
        </li>
      </ul>
    </div>
  );
}
