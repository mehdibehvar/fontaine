import Image from 'next/image';

interface CategoryTile {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

const categories: CategoryTile[] = [
  {
    title: 'Calming Herbs',
    description: 'Restore your inner equilibrium with our curated collection of soothing botanicals.',
      image: '/herbs/calming.jpg',
     imageAlt: 'Calming herbs - lavender fields at dusk',
    link: '/categories/calming',
  },
  {
    title: 'Digestive Support',
    description: 'Gentle infusions and potent extracts crafted to nurture your digestive system naturally.',
      image: '/herbs/digestive.jpg',
     imageAlt: 'Digestive support - fennel seeds and peppermint',
    link: '/categories/digestive',
  },
  {
    title: 'Immune Rituals',
    description: 'Fortify your body\'s natural defenses with ancient wisdom and ritualistic care.',
      image: '/herbs/immune.jpg',
     imageAlt: 'Immune rituals - elderberries and echinacea',
    link: '/categories/immune',
  },
];

export function CategoryTiles() {
  return (
    <section className="bg-surface-container-lowest py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
            Curated Journeys
          </p>
          <h2 className="font-headline-lg text-headline-lg">Intentional Remedies</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`relative aspect-[3/4] group overflow-hidden rounded-lg ${
                index === 1 ? 'md:mt-16' : ''
              }`}
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  {category.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.description}
                </p>
                <a
                  href={category.link}
                  className="font-label-md text-label-md text-primary border-b border-primary self-start hover:pb-1 transition-all"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
