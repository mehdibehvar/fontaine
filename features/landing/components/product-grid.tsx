import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageAlt: string;
  slug?: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Whole Thyme',
    category: 'Hand-Dried / 30g',
    price: 34.0,
    slug: 'whole-thyme',
    image: '/herbs/thyme.jpg',
    imageAlt: 'Fontaine whole thyme in premium packaging',
    badge: 'Limited Release',
  },
  {
    id: '2',
    name: 'Dried Borage Flower',
    category: 'Ritual Grade / 15g',
    price: 42.0,
    slug: 'dried-borage-flower',
    image: '/herbs/borage.jpg',
    imageAlt: 'Dried borage flowers in premium glass jar',
  },
  {
    id: '3',
    name: 'Vesper Blend',
    category: 'Sleep Tonic / 50ml',
    price: 58.0,
    image: '/herbs/vesper.jpg',
    imageAlt: 'Fontaine vesper sleep blend bottle',
  },
  {
    id: '4',
    name: 'Desert Sage',
    category: 'Smudge Ritual / Pair',
    price: 28.0,
    image: '/herbs/sage.jpg',
    imageAlt: 'Desert sage smudge sticks from Fontaine',
  },
];

export function ProductGrid() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Botanical Specimens</h2>
        <Link href="/shop" className="font-label-md text-label-md text-primary group flex items-center gap-2 hover:text-primary/80 transition-colors">
          View Complete Apothecary
          <span className="w-12 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={product.slug ? `/products/${product.slug}` : '/shop'}
            className="group cursor-pointer block"
          >
            {/* Product Image */}
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-lg mb-6 relative">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full border border-outline-variant/10">
                  <span className="text-label-sm text-primary">{product.badge}</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-widest">
              {product.category}
            </p>

            {/* Price & Add Button */}
            <div className="flex justify-between items-center">
              <p className="font-body-md text-body-md text-primary">
                ${product.price.toFixed(2)}
              </p>
              <button className="bg-surface-container-high p-2 rounded-full hover:bg-primary hover:text-on-primary transition-all">
                 <Plus />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
