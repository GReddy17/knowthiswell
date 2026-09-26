'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_REASONS, type ContactReason } from '@/lib/contact';

const MIN_MESSAGE_LENGTH = 20;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-[3px] border border-rule bg-paper px-3 py-2.5 font-body text-sm text-ink focus:border-forest focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-forest';
const labelClass = 'mb-1.5 block font-utility text-[13px] font-medium text-ink';

/**
 * Contact form for /contact. Same layered anti-spam as FeedbackWidget
 * (honeypot, minimum fill time, length check, server-side rate limit).
 * Email is optional: it's only needed if the visitor wants a reply.
 */
export function ContactForm({ initialReason = 'general' }: { initialReason?: ContactReason }) {
  const [reason, setReason] = useState<ContactReason>(initialReason);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [errorText, setErrorText] = useState('');
  const renderedAtRef = useRef<number>(0);

  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    setErrorText('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason, name, email, message, honeypot, renderedAt: renderedAtRef.current }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorText(data.error || 'Something went wrong, please try again.');
        setState('error');
        return;
      }
      setState('success');
    } catch {
      setErrorText('Could not reach the server, please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="flex items-start gap-2.5 rounded-lg border border-rule bg-white p-5">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
        <div>
          <p className="font-utility text-sm text-ink">Thanks, your message is in.</p>
          <p className="mt-1 font-utility text-[13px] text-ink-soft">
            {email
              ? 'We read every message and usually reply within a few days.'
              : 'We read every message. You didn’t leave an email, so we won’t be able to reply directly.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-rule bg-white p-5 md:p-6">
      <div>
        <label htmlFor="cf-reason" className={labelClass}>
          What is this about?
        </label>
        <select
          id="cf-reason"
          value={reason}
          onChange={(e) => setReason(e.target.value as ContactReason)}
          className={inputClass}
        >
          {CONTACT_REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="font-normal text-ink-soft">(only if you want a reply)</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={6}
          maxLength={4000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            reason === 'correction'
              ? 'Which article, what looks wrong, and a source if you have one.'
              : reason === 'copyright'
                ? 'Which page, what content, and your connection to it.'
                : reason === 'privacy'
                  ? 'What you’d like us to do (access, correct or delete) and any details that help us find it.'
                  : ''
          }
          className={inputClass}
        />
        <div className="mt-1 font-utility text-[11px] text-ink-soft">
          {message.trim().length}/{MIN_MESSAGE_LENGTH} characters minimum
        </div>
      </div>

      {/* Honeypot: visually hidden (not display:none, which some bots skip). */}
      <div
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {state === 'error' && (
        <div className="flex items-start gap-2 font-utility text-[13px] text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorText}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting' || message.trim().length < MIN_MESSAGE_LENGTH}
        className="rounded-[3px] bg-forest px-5 py-2.5 font-utility text-sm font-medium text-paper disabled:cursor-not-allowed disabled:opacity-40"
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
