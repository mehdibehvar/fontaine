import { Globe, Sprout, Trees } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      {/* Main Footer */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary dark:text-primary mb-8">
            Fontaine
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-xs mb-8">
            Healing through time. Modern luxury meets ancient alchemy.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Website"
            >
               <Globe />
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Wellness"
            >
               <Sprout />
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Nature"
            >
               <Trees />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="font-headline-md text-headline-md text-primary mb-6">Navigation</h4>
          <ul className="space-y-3">
            {['Essences', 'Rituals', 'Apothecary', 'Archive'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h4 className="font-headline-md text-headline-md text-primary mb-6">Information</h4>
          <ul className="space-y-3">
            {['Sitemap', 'Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-headline-md text-headline-md text-primary mb-6">Contact</h4>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Studio 12, Rue des Herbes
            <br />
            Paris, France 75003
            <br />
            <br />
            inquiry@fontaineapothecary.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-body-md text-body-md opacity-60">
          © 2024 Fontaine Apothecary. All rights reserved.
        </p>
        <div className="flex gap-8">
          <img
            alt="Visa accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="/herbs/visa.jpg"
          />
          <img
            alt="Mastercard accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="/herbs/mastercard.jpg"
          />
          <img
            alt="American Express accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="/herbs/amex.jpg"
          />
        </div>
      </div>
    </footer>
  );
}
