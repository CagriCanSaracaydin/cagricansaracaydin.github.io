#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the project by:
 * 1. Converting PNG/JPG to WebP format (85-90% size reduction)
 * 2. Creating AVIF format for modern browsers (additional 20% savings)
 * 3. Compressing original images
 * 4. Generating responsive image sizes
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '../public/images/media');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Image quality settings
const QUALITY = {
  webp: 80,      // WebP quality (80 = great quality, small size)
  avif: 70,      // AVIF quality (70 = excellent quality, very small)
  jpeg: 85,      // JPEG quality for fallback
  png: 90,       // PNG quality for fallback
};

// Responsive image sizes (width in pixels)
const SIZES = {
  thumbnail: 150,
  small: 400,
  medium: 800,
  large: 1200,
  xlarge: 1920,
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(imagePath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const basename = path.basename(filename, ext);
  
  console.log(`\n📷 Optimizing: ${filename}`);
  
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const metadata = await sharp(imageBuffer).metadata();
    
    console.log(`   Original size: ${metadata.width}x${metadata.height}, ${(imageBuffer.length / 1024).toFixed(2)} KB`);
    
    // Create output directory
    await ensureDir(OUTPUT_DIR);
    
    // Generate WebP version (modern browsers)
    const webpBuffer = await sharp(imageBuffer)
      .webp({ quality: QUALITY.webp })
      .toBuffer();
    
    await fs.writeFile(
      path.join(OUTPUT_DIR, `${basename}.webp`),
      webpBuffer
    );
    console.log(`   ✅ WebP: ${(webpBuffer.length / 1024).toFixed(2)} KB (${Math.round(100 - (webpBuffer.length / imageBuffer.length * 100))}% reduction)`);
    
    // Generate AVIF version (cutting-edge browsers)
    try {
      const avifBuffer = await sharp(imageBuffer)
        .avif({ quality: QUALITY.avif })
        .toBuffer();
      
      await fs.writeFile(
        path.join(OUTPUT_DIR, `${basename}.avif`),
        avifBuffer
      );
      console.log(`   ✅ AVIF: ${(avifBuffer.length / 1024).toFixed(2)} KB (${Math.round(100 - (avifBuffer.length / imageBuffer.length * 100))}% reduction)`);
    } catch (avifError) {
      console.log(`   ⚠️  AVIF: Not supported (install libavif)`);
    }
    
    // Generate compressed original format as fallback
    let optimizedBuffer;
    if (ext === '.png') {
      optimizedBuffer = await sharp(imageBuffer)
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toBuffer();
    } else {
      optimizedBuffer = await sharp(imageBuffer)
        .jpeg({ quality: QUALITY.jpeg, progressive: true })
        .toBuffer();
    }
    
    await fs.writeFile(
      path.join(OUTPUT_DIR, `${basename}${ext}`),
      optimizedBuffer
    );
    console.log(`   ✅ ${ext.toUpperCase()}: ${(optimizedBuffer.length / 1024).toFixed(2)} KB (${Math.round(100 - (optimizedBuffer.length / imageBuffer.length * 100))}% reduction)`);
    
    // Generate responsive sizes for hero and project images
    if (basename.includes('hero') || basename.includes('project')) {
      console.log(`   🖼️  Generating responsive sizes...`);
      
      for (const [sizeName, width] of Object.entries(SIZES)) {
        if (width < metadata.width) {
          const resizedBuffer = await sharp(imageBuffer)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY.webp })
            .toBuffer();
          
          await fs.writeFile(
            path.join(OUTPUT_DIR, `${basename}-${sizeName}.webp`),
            resizedBuffer
          );
          console.log(`      - ${sizeName} (${width}px): ${(resizedBuffer.length / 1024).toFixed(2)} KB`);
        }
      }
    }
    
  } catch (error) {
    console.error(`   ❌ Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Input directory: ${IMAGE_DIR}`);
  console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);
  
  try {
    const files = await fs.readdir(IMAGE_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
    );
    
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    console.log('━'.repeat(60));
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of imageFiles) {
      const imagePath = path.join(IMAGE_DIR, file);
      const stats = await fs.stat(imagePath);
      totalOriginalSize += stats.size;
      
      await optimizeImage(imagePath, file);
    }
    
    // Calculate total savings (approximate, based on WebP)
    const optimizedFiles = await fs.readdir(OUTPUT_DIR);
    for (const file of optimizedFiles.filter(f => f.endsWith('.webp'))) {
      const stats = await fs.stat(path.join(OUTPUT_DIR, file));
      totalOptimizedSize += stats.size;
    }
    
    console.log('\n' + '━'.repeat(60));
    console.log('\n✨ Optimization Complete!\n');
    console.log(`📊 Results:`);
    console.log(`   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Total savings: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
    console.log(`   Space saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB\n`);
    
    console.log('📝 Next Steps:');
    console.log('   1. Update image paths to use optimized versions');
    console.log('   2. Implement <picture> tags with format fallbacks');
    console.log('   3. Add lazy loading to images');
    console.log('   4. Test on multiple browsers\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run only if called directly
if (require.main === module) {
  main();
}

module.exports = { optimizeImage };
