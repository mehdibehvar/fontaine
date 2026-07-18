import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { StorefrontNav } from '@/features/products/components/storefront-nav';
import { StorefrontFooter } from '@/features/products/components/storefront-footer';
import { ProductDetail } from '@/features/products/components/product-detail';
import { borageReviews, companions, getProductBySlug, products } from '@/features/products/lib/data';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: 'Botanical Not Found | Fontaine' };
  }
  return {
    title: `${product.name} | Fontaine Apothecary`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Fontaine Apothecary`,
      description: product.description,
      images: [{ url: product.image }],
      type: 'website',
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <StorefrontNav />
      <ProductDetail product={product} reviews={borageReviews} companions={companions} />
      <StorefrontFooter />
    </>
  );
}
