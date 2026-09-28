import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-600">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-[#0B2A6F]">
                HECTO<span className="text-[#1E8E3E]">.</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-[#0B2A6F] mb-2">Catalogue 2026–2027</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#1E8E3E] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category}>
                  <Link 
                    href={`/products?category=${encodeURIComponent(category)}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#1E8E3E] transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm font-medium text-[#0B2A6F] hover:text-[#1E8E3E] transition-colors">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#1E8E3E] shrink-0" />
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#1E8E3E] transition-colors">
                  +91 {siteConfig.whatsappNumber.slice(2)}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#1E8E3E] shrink-0" />
                <a href={siteConfig.links.email} className="hover:text-[#1E8E3E] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#1E8E3E] shrink-0" />
                <span>Available nationwide.<br />Contact us for bulk orders.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} HECTO Products. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Clean Today</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]"></span>
            <span>Healthy Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
