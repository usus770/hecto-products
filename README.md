# HECTO Products - E-Commerce Website

A production-grade, fast, and beautiful catalogue website for HECTO Products, featuring a WhatsApp-based ordering flow.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand (Local Storage Persisted)
- **Icons:** Lucide React
- **Animations:** Framer Motion (GPU-friendly)

## 🛠️ Setup & Local Development

1. Ensure you have Node.js 18+ installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 How to Add/Edit Products

All product data is centralized in `src/data/products.ts`. This acts as the single source of truth for the entire application.

To add a new product:
1. Open `src/data/products.ts`.
2. Add a new object to the `products` array following the `Product` type structure.
3. If the product requires a price request instead of a fixed price, set `mrp: null` for its sizes.
4. (Optional) If you add a new category, make sure to add it to the `categories` array in the same file.

## 🖼️ Image Optimization

The repository includes a script to batch optimize raw images into WebP format for fast loading.

1. Place your raw images (JPEG, PNG) inside the `public/raw-images/` folder.
2. Run the optimization script:
   ```bash
   node scripts/optimize-images.mjs
   ```
3. The script will output optimized WebP images into the `public/products/` folder. Ensure your product data in `products.ts` points to these `.webp` paths. (For now, they are mapped to `.jpeg` based on your provided files, but you should transition to the optimized `.webp` files).

## 💬 Changing the WhatsApp Number

1. Open `src/config/site.ts`.
2. Update the `whatsappNumber` property. **Important:** Include the country code without any `+` or spaces (e.g., `919876543210` for an Indian number).
3. The links across the site will automatically update.

## 🚀 Deployment (Vercel & Static Export)

This project is optimized for deployment on Vercel and fully supports Next.js Static Export.

**To deploy to Vercel:**
1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. The default settings (Build Command: `next build`, Output Directory: `.next`) will work perfectly.

**To generate a Static HTML Export:**
1. Open `next.config.ts`.
2. Add `output: 'export'` to the NextConfig object.
3. Run `npm run build`.
4. The static files will be generated in the `out/` directory.

### Performance Notes
- We use `generateStaticParams` for all product pages to ensure they are statically generated at build time.
- Images are optimized and lazy-loaded.
- Animations use `transform` and `opacity` to maintain 60FPS performance without layout thrashing.
