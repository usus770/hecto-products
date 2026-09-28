"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/store/cart";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  
  // Hydration safe cart count
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    setCartCount(getTotalItems());
  }, [getTotalItems]);

  // Update cart count when store changes
  useEffect(() => {
    if (mounted) setCartCount(getTotalItems());
  }, [getTotalItems, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-slate-900 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-800 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-[#0B2A6F] dark:text-white">
                HECTO<span className="text-[#1E8E3E]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-[#1E8E3E]",
                    pathname === link.href ? "text-[#1E8E3E]" : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-[#0B2A6F] dark:hover:text-blue-300 dark:text-blue-300 transition-colors"
                aria-label="View cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {mounted && cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={cartCount}
                    className="absolute top-0 right-0 w-4 h-4 bg-[#E31E24] text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#0B2A6F] dark:hover:text-blue-300 dark:text-blue-300 transition-colors"
                aria-label="Toggle dark mode"
              >
                {mounted && theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-[#1E8E3E] hover:bg-[#167030] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <button
                className="md:hidden p-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 pb-6 px-4 flex flex-col h-screen md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-2xl font-bold tracking-tight",
                    pathname === link.href ? "text-[#1E8E3E]" : "text-gray-900 dark:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto flex flex-col gap-4">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1E8E3E] text-white p-4 rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
