'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, MessageSquarePlus } from 'lucide-react';

interface FeedbackWidgetProps {
  category: string;
  slug: string;
  title: string;
}

const MIN_MESSAGE_LENGTH = 30;

type FeedbackType = 'error' | 'topic-request';
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Reports factual errors or topic requests for a specific post. Posted
 * content is researched from public sources and drafted with AI-assisted
 * tools before editorial review — see /legal/disclaimer for the full
 * disclaimer this widget links to.
 *
 * Anti-spam is layered, not a single check: a visually-hidden honeypot
 * field, a minimum time-on-page before submission is accepted, a
 * required minimum message length (short enough for a real one-line
 * correction, long enough that a driveby bot post won't clear it), and
 * a best-effort per-IP rate limit enforced server-side in the API route.
 */
export function FeedbackWidget({ category, slug, title }: FeedbackWidgetProps) {
  const [expanded, setExpanded] = useState(false);
  const [type, setType] = useState<FeedbackType>('error');
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
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          message,
          category,
          slug,
          title,
          honeypot,
          renderedAt: renderedAtRef.current,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorText(data.error || 'Something went wrong — please try again.');
        setState('error');
        return;
      }
      setState('success');
      setMessage('');
    } catch {
      setErrorText('Could not reach the server — please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="mt-10 flex items-start gap-2.5 border border-rule bg-white p-5 rounded-lg">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
        <div>
          <p className="font-utility text-sm text-ink">Thanks — we&apos;ve got it.</p>
          <p className="mt-1 font-utility text-[13px] text-ink-soft">
            Genuine corrections get reviewed and the page&apos;s &quot;last reviewed&quot; date updates when we act on one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 border border-rule bg-white p-5 rounded-lg">
      <p className="font-utility text-[13px] leading-relaxed text-ink-soft">
        This entry was researched from public sources and drafted with AI-assisted tools, then edited — errors are
        still possible. Spot one, or want a topic covered?{' '}
        <Link href="/legal/disclaimer" className="text-forest underline underline-offset-2">
          Read our disclaimer
        </Link>
        .
      </p>

      {!expanded ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-3.5 inline-flex items-center gap-1.5 font-utility text-[13px] font-medium text-forest hover:underline"
        >
          <MessageSquarePlus className="h-4 w-4" />
          Report an error or request a topic
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div className="flex gap-4">
            <label className="flex items-center gap-1.5 font-utility text-[13px] text-ink">
              <input
                type="radio"
                name="feedback-type"
                checked={type === 'error'}
                onChange={() => setType('error')}
              />
              Something&apos;s wrong on this page
            </label>
            <label className="flex items-center gap-1.5 font-utility text-[13px] text-ink">
              <input
                type="radio"
                name="feedback-type"
                checked={type === 'topic-request'}
                onChange={() => setType('topic-request')}
              />
              Request a topic
            </label>
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder={
                type === 'error'
                  ? 'What looks wrong, and where on the page? Include a source if you have one.'
                  : "What topic would you like us to cover, and why? A category it'd fit under helps too."
              }
              className="w-full rounded-[3px] border border-rule bg-paper px-3 py-2.5 font-body text-sm text-ink focus:border-forest focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-forest"
            />
            <div className="mt-1 font-utility text-[11px] text-ink-soft">
              {message.trim().length}/{MIN_MESSAGE_LENGTH} characters minimum
            </div>
          </div>

          {/* Honeypot — visually hidden (not display:none, which some
              bots skip), never seen or filled by a real visitor. */}
          <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="fw-website">Website</label>
            <input
              id="fw-website"
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

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={state === 'submitting' || message.trim().length < MIN_MESSAGE_LENGTH}
              className="rounded-[3px] bg-forest px-4 py-2 font-utility text-[13px] font-medium text-paper disabled:cursor-not-allowed disabled:opacity-40"
            >
              {state === 'submitting' ? 'Sending…' : 'Send feedback'}
            </button>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="font-utility text-[13px] text-ink-soft hover:text-ink"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
