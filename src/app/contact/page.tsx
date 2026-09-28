import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HECTO Products for orders, bulk enquiries, and support.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 min-h-[calc(100vh-84px)] py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B2A6F] dark:text-blue-300 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to place a bulk order? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* WhatsApp Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#1E8E3E]/10 text-[#1E8E3E] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
              For quick orders and general enquiries, send us a message on WhatsApp.
            </p>
            <a 
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1E8E3E] hover:bg-[#167030] text-white py-3 rounded-xl font-bold transition-colors"
            >
              Message Us
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#0B2A6F]/10 dark:bg-blue-400/20 text-[#0B2A6F] dark:text-blue-300 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
              Speak directly with our team for business or dealership enquiries.
            </p>
            <a 
              href={`tel:+91${siteConfig.whatsappNumber.slice(2)}`}
              className="w-full bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 text-[#0B2A6F] dark:text-blue-300 border border-gray-200 dark:border-slate-600 py-3 rounded-xl font-bold transition-colors"
            >
              +91 {siteConfig.whatsappNumber.slice(2)}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-red-50 text-[#E31E24] rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
              For official correspondence or formal quotations, drop us an email.
            </p>
            <a 
              href={siteConfig.links.email}
              className="w-full bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-600 py-3 rounded-xl font-bold transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

        </div>
        
        <div className="mt-16 bg-[#0B2A6F] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4">Bulk & B2B Orders</h2>
            <p className="text-blue-100 text-lg max-w-xl">
              We supply directly to Hotels, Hospitals, Restaurants, and Facility Management companies. Get in touch for customized pricing.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a 
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 text-[#1E8E3E] px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Get B2B Quote
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
