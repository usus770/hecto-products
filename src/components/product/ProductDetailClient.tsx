"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { buildSingleProductMessage, sendWhatsAppMessage } from "@/lib/whatsapp";
import { Check, Info, Minus, Plus, ShoppingCart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(product, selectedSize, quantity, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppOrder = () => {
    const msg = buildSingleProductMessage(product, selectedSize, quantity, selectedVariant);
    sendWhatsAppMessage(msg);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Product Image Section */}
        <div className="bg-gray-50 dark:bg-slate-800 p-8 md:p-16 flex items-center justify-center relative min-h-[400px]">
          {product.warning && (
            <div className="absolute top-6 left-6 z-10 bg-[#E31E24] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              {product.warning}
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A6F]/5 to-[#1E8E3E]/5"></div>
          
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 md:p-12"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info Section */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col">
          {/* Badges */}
          <div className="flex gap-2 flex-wrap mb-6">
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="text-xs font-bold text-[#1E8E3E] uppercase tracking-wider bg-[#1E8E3E]/10 px-3 py-1 rounded-full hover:bg-[#1E8E3E]/20 transition-colors">
              {product.category}
            </Link>
            {product.badges?.map(badge => (
              <span key={badge} className="text-xs font-bold text-[#0B2A6F] uppercase tracking-wider bg-[#0B2A6F]/10 px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> {badge}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{product.shortDescription}</p>

          <div className="h-px bg-gray-100 mb-8"></div>

          {/* Pricing */}
          <div className="mb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium block mb-1">Price</span>
            <div className="text-4xl font-black text-[#0B2A6F]">
              {selectedSize.mrp ? `₹${selectedSize.mrp}` : 'On request'}
            </div>
            {selectedSize.mrp !== null && <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Inclusive of all taxes</div>}
          </div>

          {/* Variants / Fragrances */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-8">
              <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">Variant / Fragrance</span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                      selectedVariant?.name === variant.name 
                        ? 'border-[#0B2A6F] bg-[#0B2A6F]/5' 
                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:border-slate-500'
                    }`}
                  >
                    {variant.colorHex && (
                      <span 
                        className="w-4 h-4 rounded-full border border-gray-200 dark:border-slate-600" 
                        style={{ backgroundColor: variant.colorHex }}
                      ></span>
                    )}
                    <span className="font-medium text-gray-700 dark:text-gray-200">{variant.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          <div className="mb-8">
            <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">Size</span>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-xl border-2 font-bold transition-all ${
                    selectedSize.label === size.label 
                      ? 'border-[#0B2A6F] bg-[#0B2A6F] text-white' 
                      : 'border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:border-slate-500'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-10">
            <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">Quantity</span>
            <div className="flex items-center w-32 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl p-1">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="flex-1 text-center font-bold text-gray-900 dark:text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex-1 flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-lg transition-all ${
                added 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-[#0B2A6F] hover:bg-[#071c4d] text-white hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {added ? (
                <><Check className="w-5 h-5" /> Added to Cart</>
              ) : (
                <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
              )}
            </button>
            
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-lg border-2 border-[#1E8E3E] text-[#1E8E3E] hover:bg-[#1E8E3E] hover:text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Order on WhatsApp
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 p-8 md:p-12 lg:p-16">
        <h2 className="text-2xl font-black text-[#0B2A6F] mb-6">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-white dark:bg-slate-900 p-1 rounded-full shadow-sm shrink-0">
                <Check className="w-4 h-4 text-[#1E8E3E]" />
              </div>
              <span className="text-gray-700 dark:text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
