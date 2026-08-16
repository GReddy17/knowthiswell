import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Anti-scraping / Bot protection
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;
const ipCache = new Map<string, { count: number; startTime: number }>();

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const ip = request.ip ?? '127.0.0.1';

  // 1. Honeypot detection
  // Bots often scan for common admin paths. If they hit these, block them.
  if (url.pathname.includes('/admin') || url.pathname.includes('/wp-admin')) {
    return new NextResponse(null, { status: 403, statusText: 'Forbidden' });
  }

  // 2. Basic Rate Limiting
  const now = Date.now();
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
