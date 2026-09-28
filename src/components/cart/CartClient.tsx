"use client";

import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CustomerDetails, buildOrderMessage, sendWhatsAppMessage } from "@/lib/whatsapp";

export default function CartClient() {
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    city: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[1, 2].map(i => (
            <div key={i} className="h-32 bg-white dark:bg-slate-900 rounded-3xl animate-pulse border border-gray-100 dark:border-slate-700"></div>
          ))}
        </div>
        <div className="h-96 bg-white dark:bg-slate-900 rounded-3xl animate-pulse border border-gray-100 dark:border-slate-700"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-gray-100 dark:border-slate-700 flex flex-col items-center justify-center h-[50vh]">
        <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link 
          href="/products" 
          className="inline-flex justify-center items-center gap-2 bg-[#0B2A6F] hover:bg-[#071c4d] text-white px-8 py-4 rounded-xl font-bold transition-all"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CustomerDetails, string>> = {};
    if (!customer.name.trim()) newErrors.name = "Name is required";
    if (!customer.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(customer.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    if (!customer.address.trim()) newErrors.address = "Address is required";
    if (!customer.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Format the phone number properly
    const formattedCustomer = {
      ...customer,
      phone: customer.phone.replace(/\D/g, '')
    };
    
    const message = buildOrderMessage(items, formattedCustomer);
    sendWhatsAppMessage(message);
    
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
    }, 1000);
  };

  const hasPriceOnRequest = items.some(item => item.size.mrp === null);
  const subtotal = items.reduce((total, item) => {
    if (item.size.mrp !== null) {
      return total + (item.size.mrp * item.quantity);
    }
    return total;
  }, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-900 rounded-3xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center border border-gray-100 dark:border-slate-700 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A6F]/5 to-[#1E8E3E]/5"></div>
               <Image
                 src={item.product.image}
                 alt={item.product.name}
                 fill
                 className="object-cover relative z-10"
                 sizes="(max-width: 640px) 96px, 128px"
               />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-[#1E8E3E] uppercase tracking-wider mb-1">{item.product.category}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 truncate">{item.product.name}</h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <span className="font-medium bg-gray-100 px-2 py-0.5 rounded">{item.size.label}</span>
                {item.variant && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      {item.variant.colorHex && (
                        <span className="w-2.5 h-2.5 rounded-full border border-gray-200 dark:border-slate-600" style={{ backgroundColor: item.variant.colorHex }}></span>
                      )}
                      {item.variant.name}
                    </span>
                  </>
                )}
              </div>
              
              <div className="text-xl font-black text-[#0B2A6F] dark:text-blue-300">
                {item.size.mrp ? `₹${item.size.mrp * item.quantity}` : 'Price on request'}
              </div>
            </div>
            
            <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-gray-50 dark:border-slate-800">
              <div className="flex items-center bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl p-1">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-gray-900 dark:text-white">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <button 
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 p-2 transition-colors rounded-full hover:bg-red-50"
                aria-label="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        ))}
        
        <div className="flex justify-between items-center px-2 py-4">
          <Link href="/products" className="text-[#0B2A6F] dark:text-blue-300 font-bold hover:underline">
            &larr; Continue Shopping
          </Link>
          <button onClick={clearCart} className="text-gray-500 dark:text-gray-400 text-sm hover:text-red-500 transition-colors">
            Clear Cart
          </button>
        </div>
      </div>
      
      {/* Checkout Form */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-slate-700 lg:sticky lg:top-28">
        <h2 className="text-xl font-black text-[#0B2A6F] dark:text-blue-300 mb-6">Order Summary</h2>
        
        <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Priced Items Total</span>
            <span className="font-bold text-gray-900 dark:text-white">₹{subtotal}</span>
          </div>
          {hasPriceOnRequest && (
            <div className="text-sm bg-[#1E8E3E]/10 text-[#1E8E3E] p-3 rounded-xl font-medium">
              Some items require price confirmation. We will verify the final total on WhatsApp.
            </div>
          )}
        </div>
        
        <form onSubmit={handleCheckout} className="space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Your Details</h3>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={customer.name}
              onChange={(e) => setCustomer({...customer, name: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]/20 transition-all ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-slate-600 focus:border-[#0B2A6F]'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">WhatsApp Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">+91</span>
              <input
                type="tel"
                id="phone"
                value={customer.phone}
                onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]/20 transition-all ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-slate-600 focus:border-[#0B2A6F]'}`}
                placeholder="9876543210"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Delivery Address</label>
            <input
              type="text"
              id="address"
              value={customer.address}
              onChange={(e) => setCustomer({...customer, address: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]/20 transition-all ${errors.address ? 'border-red-500' : 'border-gray-200 dark:border-slate-600 focus:border-[#0B2A6F]'}`}
              placeholder="123 Main St, Area"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">City & Pincode</label>
            <input
              type="text"
              id="city"
              value={customer.city}
              onChange={(e) => setCustomer({...customer, city: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]/20 transition-all ${errors.city ? 'border-red-500' : 'border-gray-200 dark:border-slate-600 focus:border-[#0B2A6F]'}`}
              placeholder="Mumbai 400001"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Order Notes (Optional)</label>
            <textarea
              id="notes"
              value={customer.notes}
              onChange={(e) => setCustomer({...customer, notes: e.target.value})}
              rows={2}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 focus:border-[#0B2A6F] focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]/20 transition-all resize-none"
              placeholder="Any special instructions..."
            ></textarea>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 bg-[#1E8E3E] hover:bg-[#167030] text-white py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Send Order on WhatsApp'}
              {!isSubmitting && <ArrowRight className="w-5 h-5" />}
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              You will be redirected to WhatsApp to confirm your order. No payment is required now.
            </p>
          </div>
        </form>
      </div>
      
    </div>
  );
}
