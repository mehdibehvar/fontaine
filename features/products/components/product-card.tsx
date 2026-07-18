'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { formatEur, type ProductSeed } from '../lib/data';

interface ProductCardProps {
  product: ProductSeed;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card group flex flex-col cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="product-image-hover w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-primary text-surface flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
          onClick={(e) => e.preventDefault()}
        >
          <Plus />
        </button>
        {product.badge && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-surface/60 backdrop-blur-md font-label-sm text-label-sm text-primary">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">
          {product.family}
        </span>
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-headline-md text-headline-md text-on-surface leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="font-body-md text-body-md text-primary whitespace-nowrap">
            {formatEur(product.priceCents)}
          </span>
        </div>
      </div>
    </Link>
  );
}
