const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_IMAGE = '/Users/fabian.castro/.gemini/antigravity-cli/brain/e64b3511-9299-421b-b4a4-e816e405251f/.user_uploaded/uploaded_media_1793150689246.png';
const PROMO_PUBLIC = '/Users/fabian.castro/Documents/fabian/surfvr-promo/public';
const PRESENTACION_LOGOS = '/Users/fabian.castro/Documents/fabian/surfvr-presentacion/assets/logos';

// Helper to create valid multi-size ICO buffer from PNG buffers
function createIcoBuffer(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(numImages, 4); // count of images

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color palette count (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  console.log('=== Step 1: Inspect Source Image ===');
  const metadata = await sharp(SOURCE_IMAGE).metadata();
  console.log('Source Dimensions:', `${metadata.width}x${metadata.height}`);

  // Derived exact center and radius
  // cx = 1286, cy = 724, r = 528 (diameter = 1056)
  const cx = 1286;
  const cy = 724;
  const r = 528;
  const cropSize = r * 2; // 1056
  const cropLeft = cx - r; // 758
  const cropTop = cy - r; // 196

  console.log(`Detected Circular Emblem: Center=(${cx}, ${cy}), Radius=${r}`);
  console.log(`Crop Bounding Box: left=${cropLeft}, top=${cropTop}, size=${cropSize}x${cropSize}`);

  console.log('\n=== Step 2: Extract Tight Crop & Apply Anti-aliased SVG Mask ===');
  const cropped = await sharp(SOURCE_IMAGE)
    .extract({ left: cropLeft, top: cropTop, width: cropSize, height: cropSize })
    .png()
    .toBuffer();

  // Create anti-aliased circular SVG mask (r = 527.5 gives razor sharp anti-aliasing right at the rim)
  const maskSvg = Buffer.from(
    `<svg width="${cropSize}" height="${cropSize}" viewBox="0 0 ${cropSize} ${cropSize}" xmlns="http://www.w3.org/2000/svg">
       <circle cx="${r}" cy="${r}" r="${r - 0.5}" fill="#ffffff" />
     </svg>`
  );

  const maskedMaster = await sharp(cropped)
    .ensureAlpha()
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  console.log('Masked master buffer generated successfully.');

  console.log('\n=== Step 3: Generate Public Assets in surfvr-promo ===');
  fs.mkdirSync(path.join(PROMO_PUBLIC, 'assets/logos'), { recursive: true });

  // 1. surfvr_logo.webp (256x256, circular transparent, WebP quality 90)
  const logoWebpPath = path.join(PROMO_PUBLIC, 'assets/logos/surfvr_logo.webp');
  await sharp(maskedMaster)
    .resize(256, 256, { kernel: 'lanczos3' })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(logoWebpPath);
  console.log('Created:', logoWebpPath);

  // 2. surfvr_logo.png (256x256, circular transparent, PNG)
  const logoPngPath = path.join(PROMO_PUBLIC, 'assets/logos/surfvr_logo.png');
  await sharp(maskedMaster)
    .resize(256, 256, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(logoPngPath);
  console.log('Created:', logoPngPath);

  // Also create 512x512 high-res version for PWA manifest if desired
  const logo512PngPath = path.join(PROMO_PUBLIC, 'assets/logos/surfvr_logo_512.png');
  await sharp(maskedMaster)
    .resize(512, 512, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(logo512PngPath);
  console.log('Created (bonus PWA hi-res):', logo512PngPath);

  // 3. favicon-32x32.png (32x32 PNG, circular transparent)
  const fav32Path = path.join(PROMO_PUBLIC, 'favicon-32x32.png');
  await sharp(maskedMaster)
    .resize(32, 32, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(fav32Path);
  console.log('Created:', fav32Path);

  // 4. favicon-192x192.png (192x192 PNG, circular transparent)
  const fav192Path = path.join(PROMO_PUBLIC, 'favicon-192x192.png');
  await sharp(maskedMaster)
    .resize(192, 192, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(fav192Path);
  console.log('Created:', fav192Path);

  // 5. favicon.png (64x64 PNG) and favicon.ico (16, 32, 48 multi-size)
  const fav64Path = path.join(PROMO_PUBLIC, 'favicon.png');
  await sharp(maskedMaster)
    .resize(64, 64, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(fav64Path);
  console.log('Created:', fav64Path);

  const p16 = await sharp(maskedMaster).resize(16, 16, { kernel: 'lanczos3' }).png().toBuffer();
  const p32 = await sharp(maskedMaster).resize(32, 32, { kernel: 'lanczos3' }).png().toBuffer();
  const p48 = await sharp(maskedMaster).resize(48, 48, { kernel: 'lanczos3' }).png().toBuffer();
  const icoBuffer = createIcoBuffer([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ]);
  const favIcoPath = path.join(PROMO_PUBLIC, 'favicon.ico');
  fs.writeFileSync(favIcoPath, icoBuffer);
  console.log('Created:', favIcoPath);

  // 6. apple-touch-icon.png (180x180 PNG, centered circular logo on #0B1D33 background)
  // Background: 180x180 #0B1D33 (rgb: 11, 29, 51)
  // Logo: 160x160 centered at offset (10, 10)
  const appleLogoSize = 160;
  const appleOffset = Math.round((180 - appleLogoSize) / 2); // 10
  const appleLogo = await sharp(maskedMaster)
    .resize(appleLogoSize, appleLogoSize, { kernel: 'lanczos3' })
    .png()
    .toBuffer();

  const appleTouchPath = path.join(PROMO_PUBLIC, 'apple-touch-icon.png');
  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 11, g: 29, b: 51, alpha: 1 }
    }
  })
    .composite([{ input: appleLogo, top: appleOffset, left: appleOffset }])
    .png({ compressionLevel: 9 })
    .toFile(appleTouchPath);
  console.log('Created:', appleTouchPath);

  // 7. og-image.png (1200x630 PNG) and og-image.webp (1200x630 WebP)
  // Crop original 2576x1437 vertically centered to 1200:630 aspect ratio
  // Target height = 2576 * 630 / 1200 = 1352.4 -> 1352
  // Centered around cy=724 -> top = 724 - 1352/2 = 48
  const ogCropHeight = 1352;
  const ogCropTop = Math.max(0, Math.round(cy - ogCropHeight / 2));
  const ogCropped = await sharp(SOURCE_IMAGE)
    .extract({ left: 0, top: ogCropTop, width: metadata.width, height: ogCropHeight })
    .toBuffer();

  const ogPngPath = path.join(PROMO_PUBLIC, 'og-image.png');
  await sharp(ogCropped)
    .resize(1200, 630, { kernel: 'lanczos3' })
    .png({ compressionLevel: 8 })
    .toFile(ogPngPath);
  console.log('Created:', ogPngPath);

  const ogWebpPath = path.join(PROMO_PUBLIC, 'og-image.webp');
  await sharp(ogCropped)
    .resize(1200, 630, { kernel: 'lanczos3' })
    .webp({ quality: 90 })
    .toFile(ogWebpPath);
  console.log('Created:', ogWebpPath);

  console.log('\n=== Step 4: Copy to surfvr-presentacion ===');
  fs.mkdirSync(PRESENTACION_LOGOS, { recursive: true });

  const presLogoPng = path.join(PRESENTACION_LOGOS, 'surfvr_logo.png');
  fs.copyFileSync(logoPngPath, presLogoPng);
  console.log('Copied to:', presLogoPng);

  const presFav32 = path.join(PRESENTACION_LOGOS, 'favicon-32x32.png');
  fs.copyFileSync(fav32Path, presFav32);
  console.log('Copied to:', presFav32);

  const presLogoWebp = path.join(PRESENTACION_LOGOS, 'surfvr_logo.webp');
  fs.copyFileSync(logoWebpPath, presLogoWebp);
  console.log('Copied to:', presLogoWebp);

  console.log('\n=== Step 5: Verify Generated Files & Dimensions ===');
  const filesToVerify = [
    logoWebpPath,
    logoPngPath,
    logo512PngPath,
    fav32Path,
    fav192Path,
    fav64Path,
    favIcoPath,
    appleTouchPath,
    ogPngPath,
    ogWebpPath,
    presLogoPng,
    presFav32,
    presLogoWebp
  ];

  for (const filePath of filesToVerify) {
    const stats = fs.statSync(filePath);
    let dims = '';
    try {
      const meta = await sharp(filePath).metadata();
      dims = `${meta.width}x${meta.height} (${meta.format}, alpha=${meta.hasAlpha})`;
    } catch (e) {
      dims = `binary (${path.extname(filePath)})`;
    }
    console.log(`- ${path.relative('/Users/fabian.castro/Documents/fabian', filePath)}: ${stats.size} bytes, ${dims}`);
  }

  console.log('\nAll logo assets successfully created and verified!');
}

run().catch(err => {
  console.error('Processing failed:', err);
  process.exit(1);
});
