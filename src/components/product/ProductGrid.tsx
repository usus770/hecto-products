"use client";

import { useSearchParams } from "next/navigation";
import { Product } from "@/data/products";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function ProductGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  
  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products;

  if (filteredProducts.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-gray-100 dark:border-slate-700 flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          We couldn't find any products in this category. They might be coming soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Link 
          href={`/products/${product.slug}`} 
          key={product.id} 
          className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:-translate-y-1"
        >
          <div className="relative aspect-square bg-gray-50 dark:bg-slate-800 flex items-center justify-center p-6 overflow-hidden">
            {/* We'll try to load the actual image. If it fails or while it loads, it shows a nice background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A6F]/5 to-[#1E8E3E]/5 group-hover:scale-105 transition-transform duration-700"></div>
            
            {product.warning && (
              <div className="absolute top-4 right-4 z-10 bg-[#E31E24] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                {product.warning}
              </div>
            )}
            
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex gap-2 flex-wrap mb-2">
              <span className="text-[10px] font-bold text-[#1E8E3E] uppercase tracking-wider bg-[#1E8E3E]/10 px-2 py-0.5 rounded">
                {product.category}
              </span>
              {product.badges?.slice(0, 1).map(badge => (
                <span key={badge} className="text-[10px] font-bold text-[#0B2A6F] uppercase tracking-wider bg-[#0B2A6F]/10 px-2 py-0.5 rounded">
                  {badge}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#0B2A6F] transition-colors">{product.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-2">{product.shortDescription}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{product.sizes[0]?.label}</span>
                <span className="font-black text-lg text-[#0B2A6F]">
                  {product.sizes[0]?.mrp ? `₹${product.sizes[0].mrp}` : 'On request'}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] flex items-center justify-center group-hover:bg-[#1E8E3E] group-hover:text-white transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
