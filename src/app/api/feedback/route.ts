import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { getPostBySlug } from '@/lib/content';

export const dynamic = 'force-dynamic';

const MIN_MESSAGE_LENGTH = 30;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_FILL_TIME_MS = 4000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_PER_WINDOW = 5;

/**
 * Best-effort in-memory rate limit. This resets on every cold start and
 * is not shared across concurrent function instances — it is one layer
 * of defense alongside the honeypot, fill-time, and length checks below,
 * not a complete solution. If real abuse shows up, the next step is a
 * KV-backed limiter (Upstash), not tightening this map further.
 */
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_PER_WINDOW;
}

interface FeedbackBody {
  type?: string;
  message?: string;
  category?: string;
  slug?: string;
  title?: string;
  honeypot?: string;
  renderedAt?: number;
}

export async function POST(request: NextRequest) {
  let body: FeedbackBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { type, message, category, slug, title, honeypot, renderedAt } = body;

  // Bot signals get a fake success — never tell an automated submitter
  // which check tripped, or it just learns to route around it.
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

  // From here on, failures are real — a genuine visitor should see why
  // their submission didn't go through.
  if (type !== 'error' && type !== 'topic-request') {
    return NextResponse.json({ error: 'Invalid feedback type.' }, { status: 400 });
  }

  const trimmedMessage = typeof message === 'string' ? message.trim() : '';
  if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Please provide at least ${MIN_MESSAGE_LENGTH} characters so we have enough to act on.` },
      { status: 400 }
    );
  }
  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'That message is too long — please trim it down.' }, { status: 400 });
  }

  if (type === 'error') {
    if (typeof category !== 'string' || typeof slug !== 'string' || !category || !slug) {
      return NextResponse.json({ error: 'Missing page reference.' }, { status: 400 });
    }
    const post = await getPostBySlug(category, slug);
    if (!post) {
      return NextResponse.json({ error: 'That page could not be found.' }, { status: 400 });
    }
  }

  const submittedAt = new Date();
  const record = {
    type,
    message: trimmedMessage,
    category: category || null,
    slug: slug || null,
    title: title || null,
    url: category && slug ? `/${category}/${slug}` : null,
    submittedAt: submittedAt.toISOString(),
  };

  const pathname = `feedback/${submittedAt.toISOString().replace(/[:.]/g, '-')}-${Math.random().toString(36).slice(2, 8)}.json`;

  try {
    await put(pathname, JSON.stringify(record, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    });
  } catch (err) {
    console.error('Feedback storage failed:', err);
    return NextResponse.json({ error: 'Could not save your feedback right now — please try again later.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
