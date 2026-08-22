#!/usr/bin/env node
/**
 * Pulls every feedback submission out of Vercel Blob storage (private,
 * under the "feedback/" prefix) and writes it into a local /feedback
 * folder, one JSON file per submission, mirroring the pathname it has
 * in Blob storage.
 *
 * Feedback never lives in git — this is a local-only mirror for
 * browsing/reviewing (see .gitignore). Run any time:
 *
 *   npm run sync-feedback
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment — `npm run
 * sync-feedback` already loads it from .env.local via dotenv-cli. If
 * .env.local doesn't have it yet: `vercel env pull .env.local`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { list, get } from '@vercel/blob';

const OUT_DIR = path.join(process.cwd(), 'feedback');

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      'BLOB_READ_WRITE_TOKEN is not set. Enable a Blob store on this project in the Vercel dashboard, ' +
      'then run: vercel env pull .env.local, and re-run this with that env file loaded.'
    );
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  let cursor;
  let synced = 0;
  let skipped = 0;

  do {
    const { blobs, cursor: nextCursor, hasMore } = await list({ prefix: 'feedback/', cursor });
    cursor = hasMore ? nextCursor : undefined;

    for (const blob of blobs) {
      const localPath = path.join(process.cwd(), blob.pathname);
      if (fs.existsSync(localPath)) {
        skipped++;
        continue;
      }

      const result = await get(blob.pathname, { access: 'private' });
      if (!result) continue;

      const chunks = [];
      for await (const chunk of result.stream) chunks.push(chunk);
      const content = Buffer.concat(chunks).toString('utf-8');

      fs.mkdirSync(path.dirname(localPath), { recursive: true });
      fs.writeFileSync(localPath, content);
      synced++;
    }
  } while (cursor);

  console.log(`Synced ${synced} new submission(s), ${skipped} already local. See ./feedback/`);
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
