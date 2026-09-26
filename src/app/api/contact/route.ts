import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { CONTACT_REASONS, type ContactReason } from '@/lib/contact';

export const dynamic = 'force-dynamic';

const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MIN_FILL_TIME_MS = 4000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_PER_WINDOW = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Best-effort in-memory rate limit, same approach and caveats as
 * /api/feedback: one layer alongside the honeypot, fill-time and length
 * checks, not a complete solution.
 */
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_PER_WINDOW;
}

interface ContactBody {
  reason?: string;
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
  renderedAt?: number;
}

/**
 * Site contact form. Messages are stored privately in Vercel Blob under
 * `contact/`, so no email address or phone number has to be published.
 * They're read by `scripts/read-inbox.mjs` during the daily run.
 */
export async function POST(request: NextRequest) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { reason, name, email, message, honeypot, renderedAt } = body;

  // Bot signals get a fake success, same as /api/feedback.
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return NextResponse.json({ ok: true });
  }
  if (typeof renderedAt !== 'number' || Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: true });
  }

  if (!CONTACT_REASONS.some((r) => r.value === reason)) {
    return NextResponse.json({ error: 'Please choose what your message is about.' }, { status: 400 });
  }

  const trimmedMessage = typeof message === 'string' ? message.trim() : '';
  if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Please write at least ${MIN_MESSAGE_LENGTH} characters so we have enough to go on.` },
      { status: 400 }
    );
  }
  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'That message is too long, please trim it down.' }, { status: 400 });
  }

  const trimmedName = typeof name === 'string' ? name.trim().slice(0, MAX_NAME_LENGTH) : '';
  const trimmedEmail = typeof email === 'string' ? email.trim().slice(0, MAX_EMAIL_LENGTH) : '';
  if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) {
    return NextResponse.json({ error: 'That email address doesn’t look right.' }, { status: 400 });
  }

  const submittedAt = new Date();
  const record = {
    type: 'contact',
    reason: reason as ContactReason,
    name: trimmedName || null,
    email: trimmedEmail || null,
    message: trimmedMessage,
    submittedAt: submittedAt.toISOString(),
  };

  const pathname = `contact/${submittedAt.toISOString().replace(/[:.]/g, '-')}-${Math.random().toString(36).slice(2, 8)}.json`;

  try {
    await put(pathname, JSON.stringify(record, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    });
  } catch (err) {
    console.error('Contact storage failed:', err);
    return NextResponse.json({ error: 'Could not send your message right now, please try again later.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
