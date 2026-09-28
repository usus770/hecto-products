import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/raw-images');
const outputDir = path.join(__dirname, '../public/products');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  if (!fs.existsSync(inputDir)) {
    console.log('No raw-images directory found.');
    return;
  }

  const files = fs.readdirSync(inputDir);
  let count = 0;

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      
      // Let's create a simplified name based on some heuristics or just convert them.
      // In a real scenario, you'd rename them to match the product slugs (e.g. bathroom-cleaner.jpeg)
      // Here we will just convert them to webp and save with the same name.
      const parsed = path.parse(file);
      const outputPath = path.join(outputDir, `${parsed.name}.webp`);

      try {
        await sharp(inputPath)
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Optimized: ${file} -> ${parsed.name}.webp`);
        count++;
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }

  console.log(`\nFinished! Optimized ${count} images.`);
}

optimizeImages();
