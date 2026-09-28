import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetailClient from "@/components/product/ProductDetailClient";

// 1. Generate Static Params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// 2. Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-slate-800 min-h-[calc(100vh-84px)] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
