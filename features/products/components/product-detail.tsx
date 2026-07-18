'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Plus,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import {
  borageReviews,
  companions as defaultCompanions,
  formatEur,
  type ProductSeed,
  type ReviewSeed,
} from '../lib/data';

interface ProductDetailProps {
  product: ProductSeed;
  reviews: ReviewSeed[];
  companions: typeof defaultCompanions;
}

const galleryImages: { src: string; alt: string }[] = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5WHmsYKi_4njNUqeigr9MapEVP-lG5E4hjS-JoIlrKGSSEZieuxgGeZHORBRcEBVrl61Wm2U_3Sn_TJI-VY5J4Wq0-h5EwDpjOoqWwr1J0LgF7gJipw5qOCqq-ydxBJCNdLXjnjjus_NehlQ4GVRdnVTMXju1EbGIV_MgmDxWCOtQC7QG6yTWaWVHUq5nSAQU4HayCIx-85vgTJuPlBC3cs-yc7iw2y1-yC9UgBlU8A-lWQqgVcYbrtFMAOzUaO1J9ubbrMmL0-M',
    alt: 'Editorial product shot of Fontaine dried borage flower in a matte black glass jar on dark stone.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0QAt1rfPnJX-wzUBVuMS7R-t5zfHTKLfcK04QH04gwFWccYh8nWpagEX6cWNuibnOBqnZocsAdL6oWY4zZQCO2JdokauSY_n6ph3blEVjYnncUSqHw_T9Tannkq19VPmhILugaqTIfkeaeAIzcFCiYKt2Nr6goWFhCKIaaUSANhHbb2ZBLiorqxYhXLOM6ft2U7e7twRWmEULb8KwbIUzKZ1ythieoEx1y4u0yDR9pzOLacMqbNXfV2LiGhcvU7xfXErEOxIbXjU',
    alt: 'Macro close-up of vibrant blue dried borage flowers against a charcoal background.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN6dDsVZjPP6LqgISrxyf57V8eMxuZ6-9L9p9uwSgmnFfOQhAM9DvS8gobvR9okX13Hc4RHlHJA3w_h5O1c2-IwK2Z1HplZAC5SKRLsG1N59Ud38CVpeIgwO1wlcB0xOHrFf9b8aufDTCrv8aNexlOepx03mRChxSHwpyIyEP_uSJuuxa0b96claZTi3qdJFwjBkrXT73du37nfaBdjsjfqkiQKhwbHunPBRuE1unc4HezYIXW0HQfT2FUUMKU-J88cSLLXRtIUCg',
    alt: 'Apothecary scene of a wooden spoon holding borage flowers over a steaming ceramic cup.',
  },
];

const accordionData = (product: ProductSeed) => [
  {
    id: 'origin',
    title: 'Origin & Harvest',
    body:
      product.origin ??
      'Wild-harvested at peak potency and hand-dried to preserve the delicate aromatic profile.',
  },
  {
    id: 'benefits',
    title: 'Health Benefits',
    body:
      product.benefits ??
      'Traditionally valued as a gentle, grounding botanical for daily ritual.',
  },
  {
    id: 'brewing',
    title: 'Brewing Guide',
    body:
      product.brewing ??
      'Steep a small handful in 200ml of 85°C water for 5 minutes. Excellent as a nightly restorative ritual.',
  },
];

export function ProductDetail({
  product,
  reviews,
  companions,
}: ProductDetailProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>('origin');
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [bagOpen, setBagOpen] = useState(false);

  const variants = product.variants ?? [
    { weight: '50g', priceCents: product.priceCents },
  ];
  const currentPrice = variants[selectedWeight]?.priceCents ?? product.priceCents;

  return (
    <main className="pt-[100px]">
      {/* Breadcrumbs */}
      <nav className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto flex items-center space-x-3 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">
        <Link className="hover:text-primary transition-colors" href="/shop">
          Apothecary
        </Link>
        <span>/</span>
        <Link className="hover:text-primary transition-colors" href="/shop">
          Botanicals
        </Link>
        <span>/</span>
        <span className="text-primary/60">{product.name}</span>
      </nav>

      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
        {/* Gallery */}
        <div className="md:col-span-7">
          {/* Mobile snap carousel */}
          <div className="md:hidden relative w-full aspect-[3/4] overflow-hidden bg-surface-container-low rounded-lg">
            <div
              className="flex h-full transition-transform duration-500"
              style={{ transform: `translateX(-${activeImage * 100}%)` }}
            >
              {galleryImages.map((img) => (
                <div key={img.src} className="w-full h-full flex-shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setActiveImage(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === activeImage ? 'bg-primary' : 'bg-on-surface/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop bento grid */}
          <div className="hidden md:block space-y-gutter">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-lg group">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              {galleryImages.slice(1).map((img) => (
                <div
                  key={img.src}
                  className="aspect-square overflow-hidden bg-surface-container-low rounded-lg group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-5 md:sticky md:top-[120px] h-fit">
          <div className="inline-block px-3 py-1 bg-tertiary-container/10 border border-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-widest mb-6">
            {product.tagline}
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {product.name}
          </h1>
          <p className="text-primary font-headline-md text-headline-md mb-8">
            {formatEur(currentPrice)}
          </p>

          {product.description && (
            <p className="font-body-md text-on-surface-variant leading-relaxed italic border-l-2 border-primary/20 pl-6 mb-10">
              {product.description}
            </p>
          )}

          {/* Weight Selection */}
          <div className="mb-10">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
              Select Weight
            </p>
            <div className="flex gap-4">
              {variants.map((variant, i) => (
                <button
                  key={variant.weight}
                  onClick={() => setSelectedWeight(i)}
                  className={`px-8 py-3 font-label-md text-label-md transition-all ${
                    i === selectedWeight
                      ? 'border border-primary bg-primary/5 text-primary'
                      : 'border border-outline text-on-surface-variant hover:border-primary'
                  }`}
                >
                  {variant.weight}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4 mb-12">
            <button
              onClick={() => setBagOpen(false)}
              className="w-full bg-primary hover:bg-primary-fixed text-on-primary py-5 font-label-md text-label-md uppercase tracking-widest transition-all duration-300"
            >
              Add to Apothecary
            </button>
            <button className="w-full border border-primary text-primary py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-primary/5 transition-all duration-300">
              Subscribe &amp; Save 10%
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-outline-variant/30">
            {accordionData(product).map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-outline-variant/30"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(isOpen ? null : item.id)
                    }
                    className="w-full py-6 flex justify-between items-center text-on-surface font-label-md text-label-md uppercase tracking-widest"
                  >
                    {item.title}
                    <ChevronRight
                      className="transition-transform"
                      style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-on-surface-variant font-body-md leading-relaxed">
                      {item.body}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-surface-container-lowest py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Patient Experiences
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-[18px] h-[18px] ${
                        i < Math.round(product.rating ?? 5)
                          ? 'fill-primary'
                          : 'fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  {product.rating?.toFixed(1) ?? '5.0'} / 5.0 (
                  {product.reviewCount ?? reviews.length} Reviews)
                </span>
              </div>
            </div>
            <button className="font-label-md text-label-md text-primary hover:underline underline-offset-8 transition-all">
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-surface p-8 border border-outline-variant/20 glow-gold"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-[18px] h-[18px] ${
                        i < review.rating ? 'fill-primary' : 'fill-none'
                      }`}
                    />
                  ))}
                </div>
                <p className="font-body-md text-on-surface mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>
                <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm uppercase">
                  <span>{review.name}</span>
                  <span>{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-headline-lg text-headline-lg">
            Botanical Companions
          </h2>
          <div className="flex space-x-4">
            <button className="p-2 border border-outline rounded-full hover:border-primary hover:text-primary transition-all">
              <ChevronLeft />
            </button>
            <button className="p-2 border border-outline rounded-full hover:border-primary hover:text-primary transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {companions.map((companion) => (
            <Link
              key={companion.slug}
              href={`/products/${companion.slug}`}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 rounded-lg">
                <Image
                  src={companion.image}
                  alt={companion.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary/60 mb-2">
                {companion.family}
              </p>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">
                {companion.name}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {formatEur(companion.priceCents)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile sticky add-to-bag bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-high/95 backdrop-blur-xl px-margin-mobile py-6 z-50 flex items-center gap-4 border-t border-outline-variant/10">
        <div className="flex flex-col min-w-[80px]">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-tighter">
            Total
          </span>
          <span className="font-headline-md text-headline-md text-on-surface">
            {formatEur(currentPrice)}
          </span>
        </div>
        <button className="flex-1 bg-primary-container text-on-primary-container font-label-md py-4 uppercase tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-primary transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10">
          Add to Bag
          <ShoppingBag className="text-[20px]" />
        </button>
      </div>
    </main>
  );
}
