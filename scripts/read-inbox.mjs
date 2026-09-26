#!/usr/bin/env node
/**
 * Reads reader messages stored privately in Vercel Blob:
 *   contact/   ← /contact form (/api/contact)
 *   feedback/  ← per-entry error reports and topic requests (/api/feedback)
 *
 * Usage:
 *   node scripts/read-inbox.mjs                 # messages from the last 7 days
 *   node scripts/read-inbox.mjs --since 2026-09-01
 *   node scripts/read-inbox.mjs --json          # machine-readable
 *
 * Needs BLOB_READ_WRITE_TOKEN, read from the environment or from
 * .claude/private/blob.env (gitignored). Read-only: never deletes.
 */
import { readFileSync, existsSync } from 'node:fs';
import { list, get } from '@vercel/blob';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const sinceArg = args[args.indexOf('--since') + 1];
const since = args.includes('--since') && sinceArg ? new Date(sinceArg) : new Date(Date.now() - 7 * 864e5);

if (!process.env.BLOB_READ_WRITE_TOKEN && existsSync('.claude/private/blob.env')) {
  for (const line of readFileSync('.claude/private/blob.env', 'utf8').split('\n')) {
    const m = line.match(/^BLOB_READ_WRITE_TOKEN=(.*)$/);
    if (m) process.env.BLOB_READ_WRITE_TOKEN = m[1].replace(/^"|"$/g, '');
  }
}
if (process.env.BLOB_READ_WRITE_TOKEN) {
  process.env.BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN.replace(/^"|"$/g, '');
} else {
  console.error('read-inbox: no BLOB_READ_WRITE_TOKEN (set it, or run `vercel env pull` and copy it into .claude/private/blob.env).');
  process.exit(1);
}

async function readPrefix(prefix) {
  const out = [];
  let cursor;
  do {
    const page = await list({ prefix, cursor, limit: 1000 });
    for (const b of page.blobs) {
      if (new Date(b.uploadedAt) < since) continue;
      const res = await get(b.pathname, { access: 'private' });
      if (!res || res.statusCode !== 200) continue;
      const text = await new Response(res.stream).text();
      try {
        out.push({ pathname: b.pathname, ...JSON.parse(text) });
      } catch {
        out.push({ pathname: b.pathname, raw: text });
      }
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return out.sort((x, y) => String(x.submittedAt).localeCompare(String(y.submittedAt)));
}

const [contact, feedback] = await Promise.all([readPrefix('contact/'), readPrefix('feedback/')]);

if (asJson) {
  console.log(JSON.stringify({ since: since.toISOString(), contact, feedback }, null, 2));
} else {
  console.log(`Inbox since ${since.toISOString().slice(0, 10)}: ${contact.length} contact, ${feedback.length} feedback\n`);
  for (const m of contact) {
    console.log(`[contact/${m.reason}] ${m.submittedAt}  ${m.name || '(no name)'}  ${m.email || '(no email, no reply possible)'}`);
    console.log(`  ${String(m.message).replace(/\n/g, '\n  ')}\n`);
  }
  for (const m of feedback) {
    console.log(`[feedback/${m.type}] ${m.submittedAt}  ${m.url || '(no page)'}`);
    console.log(`  ${String(m.message).replace(/\n/g, '\n  ')}\n`);
  }
}
