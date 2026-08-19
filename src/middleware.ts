import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Anti-scraping / Bot protection
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;
// NOTE: per-instance, in-memory, best-effort only — Fluid Compute reuses
// instances but does not share this Map across instances/regions. For an
// actual enforced limit, move this to Vercel Firewall rate limiting or a
// shared store (Upstash Redis). This still stops a single hot instance
// from getting hammered, and bounds its own memory via requestCount below.
const ipCache = new Map<string, { count: number; startTime: number }>();
let requestCount = 0;
const SWEEP_EVERY = 1000; // avoid unbounded growth from rotating/distinct IPs

function sweepStaleEntries(now: number) {
  for (const [key, entry] of ipCache) {
    if (now - entry.startTime > RATE_LIMIT_WINDOW) ipCache.delete(key);
  }
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? '127.0.0.1';

  // 1. Honeypot detection
  // Bots often scan for common admin paths. If they hit these, block them.
  if (url.pathname.includes('/admin') || url.pathname.includes('/wp-admin')) {
    return new NextResponse(null, { status: 403, statusText: 'Forbidden' });
  }

  // 2. Basic Rate Limiting
  const now = Date.now();
  requestCount++;
  if (requestCount % SWEEP_EVERY === 0) sweepStaleEntries(now);
  const user = ipCache.get(ip);

  if (!user) {
    ipCache.set(ip, { count: 1, startTime: now });
  } else if (now - user.startTime > RATE_LIMIT_WINDOW) {
    ipCache.set(ip, { count: 1, startTime: now });
  } else {
    user.count++;
    if (user.count > MAX_REQUESTS_PER_WINDOW) {
      return new NextResponse(
        'Too many requests. Please slow down.',
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all routes except static assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
