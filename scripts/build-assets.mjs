import fs from 'node:fs/promises';
import sharp from 'sharp';

const OUT_DIR = 'assets/corporate';
const PROD_DIR = 'assets/corporate/products';

await fs.mkdir(OUT_DIR, { recursive: true });
await fs.mkdir(PROD_DIR, { recursive: true });

// 1. Convert generated editorial images to optimized WebP
const generatedAssets = [
  {
    src: 'src/assets/images/founder_portrait_clean_1795532826650.jpg',
    dest: `${OUT_DIR}/founder-portrait.webp`,
    width: 900,
    height: 1200,
  },
  {
    src: 'src/assets/images/hero_corporate_architecture_1795532827343.jpg',
    dest: `${OUT_DIR}/hero-atrium.webp`,
    width: 1600,
    height: 900,
  },
  {
    src: 'src/assets/images/tech_innovation_showcase_1795532827834.jpg',
    dest: `${OUT_DIR}/tech-innovation.webp`,
    width: 1200,
    height: 900,
  },
  {
    src: 'src/assets/images/gcc_corridor_editorial_1795532828889.jpg',
    dest: `${OUT_DIR}/gcc-corridor.webp`,
    width: 1200,
    height: 900,
  },
];

for (const item of generatedAssets) {
  await sharp(item.src)
    .resize(item.width, item.height, { fit: 'cover' })
    .webp({ quality: 84 })
    .toFile(item.dest);
  console.log('Saved', item.dest);
}

// 2. Build transparent emblem & light emblem from the official submaster mark
const subRaw = await sharp('assets/tgpu-digital-submaster-approved-20261013.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = subRaw;
const emblemBuf = Buffer.from(data);
const lightBuf = Buffer.from(data);

function findBounds(yStart, yEnd) {
  let minX = info.width, maxX = 0, minY = yEnd, maxY = yStart;
  for (let y = yStart; y < yEnd; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      if (data[i + 3] > 20 && (data[i] + data[i + 1] + data[i + 2]) < 690) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    left: Math.max(0, minX - 4),
    top: Math.max(0, minY - 4),
    width: Math.min(info.width, maxX - minX + 9),
    height: Math.min(info.height, maxY - minY + 9),
  };
}

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  const maxC = Math.max(r, g, b);
  const minC = Math.min(r, g, b);
  const lum = (r + g + b) / 3;

  if (a < 10 || (lum > 240 && maxC - minC < 20)) {
    emblemBuf[i + 3] = 0;
    lightBuf[i + 3] = 0;
    continue;
  }
  if (lum > 195 && maxC - minC < 24) {
    const alpha = Math.round(((240 - lum) / 45) * a);
    emblemBuf[i + 3] = Math.max(0, Math.min(255, alpha));
    lightBuf[i + 3] = Math.max(0, Math.min(255, alpha));
  }

  // Light variant for dark emerald backgrounds: emerald -> warm ivory, gold -> radiant warm gold
  if (g > r + 8 && g >= b && lum < 170) {
    lightBuf[i] = 248;
    lightBuf[i + 1] = 245;
    lightBuf[i + 2] = 236;
  } else if (r > g && g > b + 20) {
    lightBuf[i] = 232;
    lightBuf[i + 1] = 186;
    lightBuf[i + 2] = 78;
  }
}

const emblemBox = findBounds(100, 705);
const lockupBox = findBounds(100, 1045);

const emblemOnlyPng = await sharp(emblemBuf, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .extract(emblemBox)
  .resize(520, null, { fit: 'inside' })
  .png()
  .toBuffer();

await sharp(emblemOnlyPng).toFile(`${OUT_DIR}/tgpu-legacy-emblem.png`);
await sharp(emblemOnlyPng).webp({ quality: 92 }).toFile(`${OUT_DIR}/tgpu-legacy-emblem.webp`);

const lightEmblemOnlyPng = await sharp(lightBuf, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .extract(emblemBox)
  .resize(520, null, { fit: 'inside' })
  .png()
  .toBuffer();

await sharp(lightEmblemOnlyPng).toFile(`${OUT_DIR}/tgpu-legacy-emblem-light.png`);
await sharp(lightEmblemOnlyPng).webp({ quality: 92 }).toFile(`${OUT_DIR}/tgpu-legacy-emblem-light.webp`);

const emblemAndTgpuPng = await sharp(emblemBuf, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .extract(lockupBox)
  .resize(740, null, { fit: 'inside' })
  .png()
  .toBuffer();

const emblemTgpuMeta = await sharp(emblemAndTgpuPng).metadata();

const fullLogoSvgText = `
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="310" viewBox="0 0 1000 310">
  <text x="500" y="64" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, Helvetica, sans-serif" font-size="58" font-weight="700" letter-spacing="28" fill="#064F33">LEGACY</text>
  <text x="500" y="142" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, Helvetica, sans-serif" font-size="60" font-weight="800" letter-spacing="-1" fill="#064F33">tgpu.my</text>
  <rect x="90" y="178" width="820" height="7" rx="3.5" fill="#E2A413"/>
  <text x="500" y="236" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#064F33">Connecting People, Businesses, Education &amp; Digital Innovation</text>
</svg>`;

const fullLogoCanvas = await sharp({
  create: {
    width: 1000,
    height: 1000,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    {
      input: emblemAndTgpuPng,
      top: 56,
      left: Math.round((1000 - emblemTgpuMeta.width) / 2),
    },
    {
      input: Buffer.from(fullLogoSvgText),
      top: 665,
      left: 0,
    },
  ])
  .png()
  .toBuffer();

await sharp(fullLogoCanvas).toFile(`${OUT_DIR}/tgpu-legacy-logo.png`);
await sharp(fullLogoCanvas).webp({ quality: 92 }).toFile(`${OUT_DIR}/tgpu-legacy-logo.webp`);

// 3. Matching 512x512 Favicon & 180x180 Apple Touch Icon
const favEmblem = await sharp(emblemOnlyPng).resize(390, null, { fit: 'inside' }).png().toBuffer();
const favMeta = await sharp(favEmblem).metadata();
const faviconBg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="112" fill="#FAF8F2"/>
    <rect x="14" y="14" width="484" height="484" rx="100" fill="none" stroke="#E2A413" stroke-width="6" stroke-opacity="0.65"/>
  </svg>`
);

await sharp(faviconBg)
  .composite([
    {
      input: favEmblem,
      top: Math.round((512 - favMeta.height) / 2) - 6,
      left: Math.round((512 - favMeta.width) / 2),
    },
  ])
  .png()
  .toFile('assets/tgpu-legacy-favicon.png');

await sharp('assets/tgpu-legacy-favicon.png')
  .resize(180, 180)
  .png()
  .toFile(`${OUT_DIR}/apple-touch-icon.png`);

// 4. Generate 1200x630 Social Sharing Image (OG Image)
const ogEmblem = await sharp(lightEmblemOnlyPng).resize(240, null, { fit: 'inside' }).png().toBuffer();
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="82%" cy="20%" r="65%">
      <stop offset="0%" stop-color="#135E42" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#052117" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E5B84B"/>
      <stop offset="100%" stop-color="#C69228"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="44" y="44" width="1112" height="542" rx="24" fill="none" stroke="#E5B84B" stroke-opacity="0.28" stroke-width="1.5"/>
  <text x="96" y="132" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="5" fill="#E5B84B">MALAYSIA · SOUTHEAST ASIA · GCC</text>
  <text x="96" y="285" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="58" font-weight="800" fill="#FAF8F2">Connecting Markets.</text>
  <text x="96" y="356" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="58" font-weight="800" fill="#E5B84B">Building Technology.</text>
  <text x="96" y="427" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="58" font-weight="800" fill="#FAF8F2">Creating Opportunities.</text>
  <rect x="96" y="478" width="120" height="4" rx="2" fill="url(#goldBar)"/>
  <text x="96" y="534" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="26" font-weight="600" fill="#D4E2DA">TGPU LEGACY  ·  tgpu.my</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .composite([{ input: ogEmblem, top: 88, left: 865 }])
  .png()
  .toFile(`${OUT_DIR}/tgpu-legacy-og.png`);

await sharp(`${OUT_DIR}/tgpu-legacy-og.png`)
  .webp({ quality: 88 })
  .toFile(`${OUT_DIR}/tgpu-legacy-og.webp`);

// 5. Fetch & optimize real product screenshots / OG previews locally as WebP
const productMedia = [
  ['gcc-connect.webp', 'https://connect.tgpugulf.com/og-image.png'],
  ['match-os.webp', 'https://match.tgpugulf.com/assets/tgpu-match-hero.webp'],
  ['teman-haramain.webp', 'https://raw.githubusercontent.com/MamduhSaffin/TEMAN-Haramain-by-TGPU/main/src/file_00000000c3f882119e64726ea2d02412.png'],
  ['optic.webp', 'https://optic.tgpu.my/hero_model_couple.webp'],
  ['bakes.webp', 'https://bakes.tgpu.my/assets/tgpu-bakes-og-1200x630.webp'],
  ['smart-community.webp', 'https://community.tgpu.my/tgpu-community-banner-optimized.webp'],
  ['healthcare.webp', 'https://healthcare.tgpu.tech/assets/images/hero-clinic.jpg'],
  ['satu.webp', 'https://satu.tgpu.my/satu-social.png'],
];

for (const [filename, url] of productMedia) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arr = Buffer.from(await res.arrayBuffer());
    await sharp(arr)
      .resize(960, 600, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(`${PROD_DIR}/${filename}`);
    console.log('Fetched & optimized', filename);
  } catch (err) {
    console.warn('Fallback render for', filename, err.message);
  }
}

// Generate clean local preview card for NIAGA (verified workspace modules: Inventory, Sales, Reports)
const niagaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <rect width="960" height="600" fill="#07281D"/>
  <rect x="40" y="40" width="880" height="520" rx="22" fill="#0B3527" stroke="#D7B257" stroke-opacity="0.35" stroke-width="2"/>
  <rect x="72" y="74" width="180" height="452" rx="14" fill="#062219"/>
  <text x="98" y="122" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="28" font-weight="800" fill="#FAF8F2">NIAGA</text>
  <text x="98" y="150" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="600" fill="#E5B84B">SMART RETAIL</text>
  <rect x="92" y="186" width="140" height="42" rx="10" fill="#134C38"/>
  <text x="112" y="213" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="16" font-weight="700" fill="#FAF8F2">Inventory</text>
  <text x="112" y="266" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="16" font-weight="600" fill="#A9C4B8">Sales</text>
  <text x="112" y="314" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="16" font-weight="600" fill="#A9C4B8">Reports</text>
  <text x="112" y="362" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="16" font-weight="600" fill="#A9C4B8">Settings</text>
  <text x="288" y="122" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="34" font-weight="800" fill="#FAF8F2">Smarter Inventory. Greater Growth.</text>
  <text x="288" y="158" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="17" fill="#C6D9CF">Practical retail workspace for independent shops and daily sales</text>
  <rect x="288" y="192" width="188" height="120" rx="14" fill="#114634" stroke="#E5B84B" stroke-opacity="0.25"/>
  <text x="312" y="234" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="15" font-weight="700" fill="#E5B84B">01. Scan Products</text>
  <text x="312" y="268" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="14" fill="#DCE8E2">Fast stock lookup</text>
  <rect x="496" y="192" width="188" height="120" rx="14" fill="#114634" stroke="#E5B84B" stroke-opacity="0.25"/>
  <text x="520" y="234" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="15" font-weight="700" fill="#E5B84B">02. Process Sales</text>
  <text x="520" y="268" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="14" fill="#DCE8E2">Daily counter flow</text>
  <rect x="704" y="192" width="188" height="120" rx="14" fill="#114634" stroke="#E5B84B" stroke-opacity="0.25"/>
  <text x="728" y="234" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="15" font-weight="700" fill="#E5B84B">03. Track Business</text>
  <text x="728" y="268" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="14" fill="#DCE8E2">Clear shop reports</text>
  <rect x="288" y="336" width="604" height="190" rx="14" fill="#082D21" stroke="#FFFFFF" stroke-opacity="0.1"/>
  <rect x="318" y="372" width="544" height="22" rx="6" fill="#124735"/>
  <rect x="318" y="414" width="420" height="16" rx="6" fill="#1A5C45"/>
  <rect x="318" y="448" width="480" height="16" rx="6" fill="#154F3B"/>
  <rect x="318" y="482" width="340" height="16" rx="6" fill="#E5B84B" fill-opacity="0.75"/>
</svg>`;
await sharp(Buffer.from(niagaSvg)).webp({ quality: 88 }).toFile(`${PROD_DIR}/niaga.webp`);
console.log('Generated niaga.webp');
