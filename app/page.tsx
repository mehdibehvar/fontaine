import {
  Navigation,
  LandingHero,
  ProductGrid,
  CategoryTiles,
  BrandStory,
  RitualEssentials,
  Testimonials,
  NewsletterSignup,
  Footer,
} from '@/features/landing/components';

export const metadata = {
  title: 'Fontaine | Premium Whole Dried Herbs & Botanical Apothecary',
  description:
    'Fontaine is a modern luxury apothecary specializing in premium whole-leaf dried botanicals. Discover slow-sourced, ritual-grade essences for contemporary wellness.',
  openGraph: {
    title: 'Fontaine | Premium Whole Dried Herbs',
    description: 'Modern luxury meets ancient alchemy. Discover premium botanical essences.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <LandingHero />
        <ProductGrid />
        <CategoryTiles />
        <BrandStory />
        <RitualEssentials />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
