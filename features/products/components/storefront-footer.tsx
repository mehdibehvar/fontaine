import Link from 'next/link';

const columns = [
  {
    title: 'Shop',
    links: ['Essences', 'Rituals', 'Apothecary', 'Journal'],
  },
  {
    title: 'Service',
    links: ['Sitemap', 'Shipping', 'Returns'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy'],
  },
];

export function StorefrontFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Fontaine
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 opacity-80">
            © 2024 Fontaine Apothecary. Healing through time.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col space-y-4">
            <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-2">
              {col.title}
            </h4>
            {col.links.map((link) => (
              <Link
                key={link}
                href="/shop"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col space-y-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-2">
            Join the Circle
          </h4>
          <div className="flex border-b border-outline-variant/30 pb-2">
            <input
              className="bg-transparent border-none focus:ring-0 p-0 text-body-md w-full placeholder:text-outline-variant/50"
              placeholder="Your essence..."
              type="email"
            />
            <button className="text-primary font-label-md text-label-md uppercase tracking-widest">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
