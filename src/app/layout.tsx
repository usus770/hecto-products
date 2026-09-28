import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

const bodyFont = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap"
});

const displayFont = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["cleaning products", "hygiene", "bathroom cleaner", "toilet cleaner", "floor cleaner"],
  authors: [{ name: "HECTO Products" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hectoproducts.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2A6F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-sans min-h-screen flex flex-col pt-[72px] md:pt-[84px]`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 flex flex-col relative">{children}</main>
          <Footer />
          
          {/* Floating WhatsApp Button (Mobile only) */}
        <a 
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden fixed bottom-6 right-6 z-40 bg-[#1E8E3E] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          aria-label="Order on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
