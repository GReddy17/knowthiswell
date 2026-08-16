const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#FBF8F1"/>
  <rect x="16" y="16" width="480" height="480" fill="none" stroke="#E3DCC9" stroke-width="4"/>
  <text x="256" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="300"
        font-weight="600" fill="#2C4A3E" text-anchor="middle">K</text>
</svg>`;

async function main() {
  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync('public/logo.svg', svg.trim());

  await sharp(Buffer.from(svg)).resize(512, 512).png().toFile('public/logo.png');
  await sharp(Buffer.from(svg)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(Buffer.from(svg)).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(Buffer.from(svg)).resize(16, 16).png().toFile('public/favicon-16x16.png');
  await sharp(Buffer.from(svg)).resize(192, 192).png().toFile('public/icon-192.png');
  await sharp(Buffer.from(svg)).resize(512, 512).png().toFile('public/icon-512.png');

  console.log('Icon set generated in /public');
}

main();
