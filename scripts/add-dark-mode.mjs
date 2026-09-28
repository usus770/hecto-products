import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'src/app/page.tsx',
  'src/app/products/page.tsx',
  'src/app/products/[slug]/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/cart/page.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/product/ProductGrid.tsx',
  'src/components/product/ProductDetailClient.tsx',
  'src/components/product/ProductFilters.tsx',
  'src/components/cart/CartClient.tsx',
];

const replacements = [
  { regex: /(?<!dark:)bg-white/g, replacement: 'bg-white dark:bg-slate-900' },
  { regex: /(?<!dark:)bg-gray-50/g, replacement: 'bg-gray-50 dark:bg-slate-800' },
  { regex: /(?<!dark:)text-gray-900/g, replacement: 'text-gray-900 dark:text-white' },
  { regex: /(?<!dark:)text-gray-800/g, replacement: 'text-gray-800 dark:text-gray-100' },
  { regex: /(?<!dark:)text-gray-700/g, replacement: 'text-gray-700 dark:text-gray-200' },
  { regex: /(?<!dark:)text-gray-600/g, replacement: 'text-gray-600 dark:text-gray-300' },
  { regex: /(?<!dark:)text-gray-500/g, replacement: 'text-gray-500 dark:text-gray-400' },
  { regex: /(?<!dark:)border-gray-50/g, replacement: 'border-gray-50 dark:border-slate-800' },
  { regex: /(?<!dark:)border-gray-100/g, replacement: 'border-gray-100 dark:border-slate-700' },
  { regex: /(?<!dark:)border-gray-200/g, replacement: 'border-gray-200 dark:border-slate-600' },
  { regex: /(?<!dark:)border-gray-300/g, replacement: 'border-gray-300 dark:border-slate-500' },
  { regex: /(?<!dark:)from-white/g, replacement: 'from-white dark:from-slate-900' },
  { regex: /(?<!dark:)to-\\[#F0F5FA\\]/g, replacement: 'to-[#F0F5FA] dark:to-slate-900' }
];

filesToProcess.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First remove any existing dark mode duplicates if the script was run multiple times
    content = content.replace(/ dark:bg-slate-900/g, '');
    content = content.replace(/ dark:bg-slate-800/g, '');
    content = content.replace(/ dark:text-white/g, '');
    content = content.replace(/ dark:text-gray-100/g, '');
    content = content.replace(/ dark:text-gray-200/g, '');
    content = content.replace(/ dark:text-gray-300/g, '');
    content = content.replace(/ dark:text-gray-400/g, '');
    content = content.replace(/ dark:border-slate-800/g, '');
    content = content.replace(/ dark:border-slate-700/g, '');
    content = content.replace(/ dark:border-slate-600/g, '');
    content = content.replace(/ dark:border-slate-500/g, '');
    content = content.replace(/ dark:from-slate-900/g, '');
    content = content.replace(/ dark:to-slate-900/g, '');
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
