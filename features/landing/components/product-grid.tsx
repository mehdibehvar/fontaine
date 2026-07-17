import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageAlt: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Whole Thyme',
    category: 'Hand-Dried / 30g',
    price: 34.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ed3eQ2xccNIT7_swtfBoeZfcGupkdnBo-LFSpLQ3nIxmdiy8mBLvEZJNZ9wAuml_tEwFVUjEfhWwRsL8cT8aHryuWghtBGGlCZDO9pZlDNiTsDr5xKglQrE6hfxcbVShJ24EAKYWcfwfcUV8cUeMQL53EH476SvKgs-vqLimId8S9QlD4ctlhwgCh5J_o-LHRFslpw_fx_I3SlGsXbOyQ6P6lwcBJXynh-yJ7dhrcEgami6PziEATPpdjZfNPetyYQw0CClcOl4',
    imageAlt: 'Fontaine whole thyme in premium packaging',
    badge: 'Limited Release',
  },
  {
    id: '2',
    name: 'Dried Borage Flower',
    category: 'Ritual Grade / 15g',
    price: 42.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1tiwrZvRFtSp-VKWCbfbyUztaVwbI9UMxv8ZNaLEuqXdMUThGEYLACArHOUOJPh74wtr2Zz2361AP_AJDPpefXTzdE4C0TDmZFSzvug-eHBcdU_q2j880Ps-x-eXwQTU922Z2G9a-lZJpTRbboRXShMcvxIJGk5ndWCiJoZWkt6qapdMlJytr9_oG6XlsZ9TzQ6i1fNkzAAKXb9feGxaYQbSfst2mA7zx0afXR_LRnggLVezzAhFfZWHZ-kwZdNe1_cEoQj85lE8',
    imageAlt: 'Dried borage flowers in premium glass jar',
  },
  {
    id: '3',
    name: 'Vesper Blend',
    category: 'Sleep Tonic / 50ml',
    price: 58.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPnzhT916NXsYBZUGY8kiCKIIqZtpduvHNiyQDcWnyVg18ieVzkkdb5NBO4vitfNZPChJNGJCJtuqeg-8cGwI8nop5rASWkxdMPeP2ya2i6_16Pr8pCpZeipUBQgvRTzHP926wycvKDIWOIZR-4Dy7UcvRe35zdebqvh2rdb-S8uyokbLdxCxpldfZkkzfV6QQXqEj1Lyhwz3hICgo2b1MeJ87tH7fVlhTiPB1kdUQDi3sq-nVLzpdj51wfD1UNwmbAMXT9OMbk-I',
    imageAlt: 'Fontaine vesper sleep blend bottle',
  },
  {
    id: '4',
    name: 'Desert Sage',
    category: 'Smudge Ritual / Pair',
    price: 28.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6trI3Ee5mVlvn2_w1OgzOtRDGPjokjmmOtiJhzJMn-Qm87QB4ZcTe8qDEcDQDhfeCBJjK3GyqGov90glZSdvMP0dluUQD7Tk5OHxGoOeFq7dxlkS6BizYpynlWNn4ezR-BAqixKWUcZUphq6LishQj_8U1_hL4jI5dLLX1b8zije0Cjnl8-ZnX_yJq69Giz6pLhOP9TID6LxdaDOzlud2kdGycr2xc05oFh0EV46UImGK3VzlyrxIKHiuLFVwDmWt3t6BOTDnsDM',
    imageAlt: 'Desert sage smudge sticks from Fontaine',
  },
];

export function ProductGrid() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
        <h2 className="font-headline-lg text-headline-lg">Botanical Specimens</h2>
        <a className="font-label-md text-label-md text-primary group flex items-center gap-2 hover:text-primary/80 transition-colors">
          View Complete Apothecary
          <span className="w-12 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {products.map((product, index) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Product Image */}
            <div className={`aspect-[4/5] overflow-hidden bg-surface-container-low rounded-lg mb-6 relative ${index % 2 === 1 && index > 0 ? 'md:mt-12' : ''}`}>
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
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
