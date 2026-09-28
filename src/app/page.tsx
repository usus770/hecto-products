import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Sparkles, Wind, Droplets, Leaf, ArrowRight, Building2, Home, Utensils, Stethoscope } from "lucide-react";
import { products, categories, comingSoonCategories } from "@/data/products";

// Using a grid of featured products (first 4 items for now)
const featuredProducts = products.slice(0, 4);

const trustBadges = [
  { name: "Germ Protection", icon: <ShieldCheck className="w-8 h-8 text-[#1E8E3E]" /> },
  { name: "Powerful Cleaning", icon: <Sparkles className="w-8 h-8 text-[#1E8E3E]" /> },
  { name: "Fresh Fragrance", icon: <Wind className="w-8 h-8 text-[#1E8E3E]" /> },
  { name: "Safe on Surfaces", icon: <Droplets className="w-8 h-8 text-[#1E8E3E]" /> },
  { name: "Eco Friendly", icon: <Leaf className="w-8 h-8 text-[#1E8E3E]" /> },
];

const whoWeServe = [
  { name: "Homes", icon: <Home className="w-6 h-6 text-white" /> },
  { name: "Hotels", icon: <Building2 className="w-6 h-6 text-white" /> },
  { name: "Hospitals", icon: <Stethoscope className="w-6 h-6 text-white" /> },
  { name: "Restaurants", icon: <Utensils className="w-6 h-6 text-white" /> },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white dark:from-slate-900 to-[#F0F5FA] py-16 md:py-24 lg:py-32">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-[#1E8E3E]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-[#0B2A6F]/5 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Professional Cleaning Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0B2A6F] dark:text-blue-300 leading-tight tracking-tight">
                Cleaner Spaces.<br />
                <span className="text-[#1E8E3E]">Healthier Lives.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                {siteConfig.description} Premium quality formulations designed for homes, hotels, hospitals, and industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/products" 
                  className="inline-flex justify-center items-center gap-2 bg-[#0B2A6F] hover:bg-[#071c4d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  Shop Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:bg-slate-800 text-[#1E8E3E] border-2 border-[#1E8E3E] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center">
              {/* Product Cluster Placeholder - We will use CSS for floating animation */}
              <div className="relative w-full max-w-md aspect-square animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A6F]/20 to-[#1E8E3E]/20 rounded-full blur-2xl" />
                <div className="absolute inset-4 bg-white dark:bg-slate-900 shadow-2xl rounded-3xl flex items-center justify-center p-8 border border-white/50 glass-blur">
                  <div className="text-center space-y-4">
                    <span className="text-8xl">✨</span>
                    <h3 className="text-2xl font-bold text-[#0B2A6F] dark:text-blue-300">HECTO Core Line</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Discover our premium range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white dark:bg-slate-900 py-12 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-3 bg-[#1E8E3E]/10 rounded-2xl">
                  {badge.icon}
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-100 tracking-tight">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B2A6F] dark:text-blue-300 mb-4">Featured Products</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Our most trusted cleaning solutions.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-[#1E8E3E] font-bold hover:gap-3 transition-all">
              View full catalogue <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:-translate-y-1">
                <div className="relative aspect-square bg-gray-50 dark:bg-slate-800 flex items-center justify-center p-6 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A6F]/5 to-[#1E8E3E]/5 group-hover:scale-105 transition-transform duration-700"></div>
                   <Image
                     src={product.image}
                     alt={product.name}
                     fill
                     className="object-cover object-center group-hover:scale-110 transition-transform duration-500 z-10"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#1E8E3E] uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0B2A6F] dark:hover:text-blue-300 dark:text-blue-300 transition-colors">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-slate-800">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {product.sizes[0]?.mrp ? `₹${product.sizes[0].mrp}` : 'Price on request'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#0B2A6F]/5 flex items-center justify-center group-hover:bg-[#0B2A6F] group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden flex justify-center">
            <Link href="/products" className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 text-[#0B2A6F] dark:text-blue-300 border border-gray-200 dark:border-slate-600 px-6 py-3 rounded-xl font-bold">
              View full catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES & WHO WE SERVE */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Categories */}
            <div>
              <h2 className="text-3xl font-black text-[#0B2A6F] dark:text-blue-300 mb-8">Shop by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <Link 
                    href={`/products?category=${encodeURIComponent(cat)}`} 
                    key={cat}
                    className="px-5 py-3 rounded-full bg-gray-50 dark:bg-slate-800 hover:bg-[#1E8E3E]/10 hover:text-[#1E8E3E] border border-gray-100 dark:border-slate-700 font-medium transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
                {comingSoonCategories.map(cat => (
                  <span 
                    key={cat}
                    className="px-5 py-3 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 font-medium text-gray-400 cursor-not-allowed opacity-70 flex items-center gap-2"
                  >
                    {cat} <span className="text-[10px] font-bold uppercase bg-gray-200 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded">Soon</span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* Who We Serve */}
            <div>
              <h2 className="text-3xl font-black text-[#0B2A6F] dark:text-blue-300 mb-8">Who We Serve</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {whoWeServe.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3 p-6 bg-[#0B2A6F] rounded-2xl hover:bg-[#071c4d] transition-colors group">
                    <div className="p-3 bg-white dark:bg-slate-900/10 rounded-full group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-bold text-white text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & BULK */}
      <section className="py-20 bg-[#0B2A6F] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Why Choose HECTO?</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              We are committed to providing effective cleaning solutions that help create cleaner homes, healthier workplaces, and safer environments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "Premium quality formulations",
              "Consistent performance",
              "Long-lasting freshness",
              "Strong cleaning power",
              "Customer-centric approach",
              "Continuous product innovation",
              "Competitive pricing",
              "Trusted by customers"
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-[#1E8E3E] rounded-full p-1 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-blue-50">{point}</span>
              </div>
            ))}
          </div>

          {/* Bulk Banner */}
          <div className="bg-gradient-to-r from-[#1E8E3E] to-[#167030] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-slate-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Buying in bulk?</h3>
              <p className="text-blue-50 text-lg">Get special pricing for commercial, industrial, and institutional orders. Contact our team directly.</p>
            </div>
            <a 
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 shrink-0 inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-900 text-[#1E8E3E] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
