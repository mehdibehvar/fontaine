'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatEur, type ProductSeed } from '../lib/data';
import { ProductCard } from './product-card';

interface ShopViewProps {
  products: ProductSeed[];
}

const herbFamilies = ['Lamiaceae', 'Boraginaceae'];
const benefits = ['Calming', 'Immunity', 'Focus'];
const origins = ['Provence, France', 'Atlas Mountains'];

export function ShopView({ products }: ShopViewProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-2xl">
          <nav className="mb-4 flex items-center space-x-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            <a className="hover:text-primary" href="/">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">The Apothecary Archive</span>
          </nav>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            The Apothecary Archive
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Curated botanical raw materials for healing, ritual, and longevity.
            Sourced from ancient soils and prepared with patient intention.
          </p>
        </div>
        <div className="relative w-full md:w-80 group">
          <input
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 pl-0 pr-10 focus:ring-0 focus:border-primary text-body-md placeholder:text-outline-variant transition-all duration-300"
            placeholder="Search archive..."
            type="text"
          />
          <Search className="absolute right-2 top-3 text-outline-variant group-focus-within:text-primary" />
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Filters (desktop) */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-12">
            <FilterSection title="Herb Family">
              <div className="space-y-4">
                {herbFamilies.map((family) => (
                  <label
                    key={family}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <span className="w-4 h-4 border border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
                      <span className="w-2 h-2 bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">
                      {family}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Price Range">
              <div className="px-2">
                <input
                  className="w-full accent-primary bg-surface-container h-1 rounded-full cursor-pointer"
                  type="range"
                />
                <div className="flex justify-between mt-3 font-label-sm text-label-sm text-outline-variant">
                  <span>€15</span>
                  <span>€120+</span>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Quantity">
              <div className="grid grid-cols-3 gap-2">
                <button className="border border-outline-variant/30 py-2 font-label-sm text-label-sm hover:border-primary hover:text-primary transition-all">
                  30g
                </button>
                <button className="border border-primary py-2 font-label-sm text-label-sm text-primary transition-all">
                  50g
                </button>
                <button className="border border-outline-variant/30 py-2 font-label-sm text-label-sm hover:border-primary hover:text-primary transition-all">
                  100g
                </button>
              </div>
            </FilterSection>

            <FilterSection title="Benefit">
              <div className="flex flex-wrap gap-2">
                {benefits.map((benefit) => (
                  <button
                    key={benefit}
                    className="px-4 py-1.5 rounded-full border border-outline-variant/30 text-label-sm font-label-sm hover:border-primary transition-colors"
                  >
                    {benefit}
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Origin">
              <div className="space-y-4">
                {origins.map((origin) => (
                  <label
                    key={origin}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                      {origin}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <button className="w-full py-4 bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase tracking-widest transition-all">
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10 border-b border-outline-variant/10 pb-6">
            <p className="font-label-md text-label-md text-on-surface-variant">
              <span className="text-on-surface">{products.length}</span> botanical
              items discovered
            </p>
            <div className="flex items-center space-x-4">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase">
                Sort by
              </span>
              <select className="bg-transparent border-none focus:ring-0 text-on-surface font-label-md text-label-md cursor-pointer hover:text-primary transition-colors pr-8">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Potency: High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center space-x-6">
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <ChevronLeft />
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-primary font-label-md text-label-md border-b-2 border-primary pb-0.5">
                01
              </button>
              <button className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                02
              </button>
              <button className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                03
              </button>
              <span className="text-outline-variant">...</span>
              <button className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                08
              </button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile floating filters button */}
      <button
        onClick={() => setFiltersOpen(true)}
        className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-primary text-on-primary px-8 py-3 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-transform"
      >
        <SlidersHorizontal className="text-[20px]" />
        <span className="font-label-md text-label-md">Filters</span>
      </button>

      {/* Mobile filters drawer */}
      {filtersOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-surface-container-lowest overflow-y-auto px-margin-mobile py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Filter Archive
            </h2>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <ChevronRight className="text-primary" />
            </button>
          </div>
          <FilterSection title="Herb Family">
            <div className="space-y-4">
              {herbFamilies.map((family) => (
                <label key={family} className="flex items-center space-x-3">
                  <span className="w-4 h-4 border border-outline-variant flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary" />
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {family}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
          <FilterSection title="Benefit">
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit) => (
                <button
                  key={benefit}
                  className="px-4 py-1.5 rounded-full border border-outline-variant/30 text-label-sm font-label-sm"
                >
                  {benefit}
                </button>
              ))}
            </div>
          </FilterSection>
          <FilterSection title="Origin">
            <div className="space-y-4">
              {origins.map((origin) => (
                <span
                  key={origin}
                  className="block font-body-md text-body-md text-on-surface-variant"
                >
                  {origin}
                </span>
              ))}
            </div>
          </FilterSection>
          <button
            onClick={() => setFiltersOpen(false)}
            className="w-full mt-8 bg-primary text-on-primary py-4 font-label-md text-label-md uppercase tracking-widest"
          >
            Show {products.length} Results
          </button>
        </div>
      )}
    </>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">
        {title}
      </h4>
      {children}
    </section>
  );
}
