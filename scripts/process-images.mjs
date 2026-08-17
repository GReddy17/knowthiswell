#!/usr/bin/env node
/**
 * Image processing pipeline (Section 4.1 / 4.4 of the requirements doc).
 * Static export can't use next/image's built-in optimizer, so this runs
 * as a build step instead: reads raw source images from
 * content/images-src/, outputs resized/compressed WebP + a small
 * blur-safe fallback into public/images/, ready for plain <img> tags
 * with `unoptimized` next/image.
 *
 * Widths chosen to match the entry column measure (~720px at 2x for
 * retina = 1440, plus a 480 mobile size) rather than an arbitrary set.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = path.join(process.cwd(), 'content', 'images-src');
const OUT_DIR = path.join(process.cwd(), 'public', 'images');
const WIDTHS = [480, 720, 1440];

async function processImage(filename) {
  const srcPath = path.join(SRC_DIR, filename);
  const baseName = filename.replace(/\.[^.]+$/, '');

  for (const width of WIDTHS) {
    const outPath = path.join(OUT_DIR, `${baseName}-${width}w.webp`);
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
  }

  // A tiny (24px-wide) placeholder for blur-up loading, base64-inlined
  // by the caller if desired — kept separate from the responsive set.
  const placeholderPath = path.join(OUT_DIR, `${baseName}-placeholder.webp`);
  await sharp(srcPath).resize({ width: 24 }).webp({ quality: 40 }).toFile(placeholderPath);

  console.log(`  ✓ ${filename} → ${WIDTHS.length} sizes + placeholder`);
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.log('No content/images-src/ directory yet — nothing to process.');
    return;
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  if (files.length === 0) {
    console.log('No source images found in content/images-src/.');
    return;
  }

  console.log(`Processing ${files.length} image(s)...`);
  for (const file of files) {
    await processImage(file);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error('Image processing failed:', err);
  process.exit(1);
});
