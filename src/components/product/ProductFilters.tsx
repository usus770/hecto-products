"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import clsx from "clsx";

export default function ProductFilters({ categories }: { categories: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const selectedCategory = searchParams.get("category");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => router.push(pathname)}
        className={clsx(
          "text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
          !selectedCategory
            ? "bg-[#0B2A6F] text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:bg-slate-800"
        )}
      >
        All Products
      </button>
      
      <div className="h-px bg-gray-100 my-2"></div>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => router.push(pathname + "?" + createQueryString("category", category))}
          className={clsx(
            "text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
            selectedCategory === category
              ? "bg-[#1E8E3E]/10 text-[#1E8E3E]"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:bg-slate-800"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
