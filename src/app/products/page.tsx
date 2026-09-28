import { products, categories } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata = {
  title: "All Products",
  description: "Browse our complete range of professional cleaning and hygiene solutions.",
};

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B2A6F] mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Professional-grade cleaning solutions for every need. Filter by category to find the perfect product.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h2 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" /> Filters
              </h2>
              <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-lg"></div>}>
                <ProductFilters categories={categories} />
              </Suspense>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <Suspense fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 h-96 animate-pulse border border-gray-100 dark:border-slate-700 flex flex-col">
                    <div className="w-full bg-gray-100 rounded-xl aspect-square mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="mt-auto h-10 bg-gray-100 rounded-xl"></div>
                  </div>
                ))}
              </div>
            }>
              <ProductGrid products={products} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
