import Image from 'next/image';

interface EssentialItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
}

const essentials: EssentialItem[] = [
  {
    id: '1',
    title: 'The Morning Ritual',
    description: 'Three curated essences for dawn.',
    price: 115.0,
      image: '/herbs/morning-ritual.jpg',
     imageAlt: 'The Morning Ritual - apothecary kit',
  },
  {
    id: '2',
    title: 'Stone Apothecary Tools',
    description: 'Hand-carved basalt grinding kit.',
    price: 85.0,
      image: '/herbs/apothecary-tools.jpg',
     imageAlt: 'Stone apothecary tools - mortar and pestle',
  },
  {
    id: '3',
    title: 'Concentrated Spirits',
    description: 'A set of 5 botanical extracts.',
    price: 140.0,
      image: '/herbs/spirits.svg',
     imageAlt: 'Concentrated spirits - botanical extracts',
  },
  {
    id: '4',
    title: 'Sanctuary Candles',
    description: 'Scented with ritual grade oils.',
    price: 48.0,
      image: '/herbs/candles.svg',
     imageAlt: 'Sanctuary candles - hand-poured botanical',
  },
];

export function RitualEssentials() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              Essentials
            </p>
            <h2 className="font-headline-lg text-headline-lg">Ritual Essentials</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-gutter overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {essentials.map((item) => (
            <div key={item.id} className="min-w-[320px] lg:min-w-[400px] snap-start flex-shrink-0">
              {/* Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="font-headline-md text-headline-md mb-2">{item.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {item.description}
              </p>
              <p className="font-label-md text-label-md text-primary">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
