import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'src/app/page.tsx',
  'src/app/products/page.tsx',
  'src/app/products/[slug]/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/cart/page.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/product/ProductGrid.tsx',
  'src/components/product/ProductDetailClient.tsx',
  'src/components/product/ProductFilters.tsx',
  'src/components/cart/CartClient.tsx',
];

const replacements = [
  { regex: /text-\[#0B2A6F\](?!\s+dark:text-blue-300)(?!\s+dark:text-white)/g, replacement: 'text-[#0B2A6F] dark:text-blue-300' },
  { regex: /bg-\[#0B2A6F\]\/10(?!\s+dark:bg-blue-400\/20)/g, replacement: 'bg-[#0B2A6F]/10 dark:bg-blue-400/20' },
  { regex: /hover:text-\[#0B2A6F\](?!\s+dark:hover:text-blue-300)/g, replacement: 'hover:text-[#0B2A6F] dark:hover:text-blue-300' },
];

filesToProcess.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    
    // Fix logos manually because we want them white, not blue-300
    content = content.replace(
      /text-\[#0B2A6F\] dark:text-blue-300/g,
      (match, offset, str) => {
        // If it's part of the logo tracking-tight, make it white
        const snippet = str.substring(Math.max(0, offset - 20), offset);
        if (snippet.includes('tracking-tight')) {
          return 'text-[#0B2A6F] dark:text-white';
        }
        return match;
      }
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed blue colors in ${file}`);
  }
});
