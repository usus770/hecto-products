import { Metadata } from "next";
import CartClient from "@/components/cart/CartClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your selected cleaning and hygiene products.",
};

export default function CartPage() {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 min-h-[calc(100vh-84px)] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-black text-[#0B2A6F] mb-8">Your Cart</h1>
        <CartClient />
      </div>
    </div>
  );
}
