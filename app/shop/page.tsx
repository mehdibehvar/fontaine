import type { Metadata } from 'next';
import { StorefrontNav } from '@/features/products/components/storefront-nav';
import { StorefrontFooter } from '@/features/products/components/storefront-footer';
import { ShopView } from '@/features/products/components/shop-view';
import { products } from '@/features/products/lib/data';

export const metadata: Metadata = {
  title: 'The Apothecary Archive | Fontaine',
  description:
    'Curated botanical raw materials for healing, ritual, and longevity. Sourced from ancient soils and prepared with patient intention.',
  openGraph: {
    title: 'The Apothecary Archive | Fontaine',
    description:
      'Curated botanical raw materials for healing, ritual, and longevity.',
    type: 'website',
  },
};

export default function ShopPage() {
  return (
    <>
      <StorefrontNav />
      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <ShopView products={products} />
      </main>
      <StorefrontFooter />
    </>
  );
}
