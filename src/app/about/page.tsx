import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about HECTO Products - Our mission, vision, and commitment to cleaner spaces.",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-[calc(100vh-84px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B2A6F] to-[#071c4d] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E8E3E]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Clean Today. Healthy Tomorrow.</h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed text-balance mx-auto">
            We are HECTO Products, a brand dedicated to providing professional cleaning and hygiene solutions for homes, businesses, and industries.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-[#0B2A6F]/10 dark:bg-blue-400/20 rounded-2xl flex items-center justify-center mb-6 text-[#0B2A6F] dark:text-blue-300">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#0B2A6F] dark:text-blue-300 mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To become a leading cleaning and hygiene brand recognized for quality, innovation, and customer satisfaction across the nation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-[#1E8E3E]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1E8E3E]">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#0B2A6F] dark:text-blue-300 mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To provide effective cleaning solutions that help create cleaner homes, healthier workplaces, and safer environments for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B2A6F] dark:text-blue-300 mb-8 text-center">The HECTO Standard</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center shrink-0 mt-1 text-[#1E8E3E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Uncompromising Quality</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every HECTO product is formulated using premium ingredients that deliver powerful cleaning action while remaining safe for intended surfaces. We don't believe in shortcuts when it comes to hygiene.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center shrink-0 mt-1 text-[#1E8E3E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Professional Grade for All</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Whether you are managing a large hotel, a hospital, or just keeping your home safe for your family, our products bring industrial-strength cleaning power in user-friendly formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
