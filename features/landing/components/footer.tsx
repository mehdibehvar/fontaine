export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      {/* Main Footer */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="text-headline-lg font-headline-lg text-primary dark:text-primary mb-8">
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
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Wellness"
            >
              <span className="material-symbols-outlined">spa</span>
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Nature"
            >
              <span className="material-symbols-outlined">forest</span>
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
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-body-md text-body-md opacity-60">
          © 2024 Fontaine Apothecary. All rights reserved.
        </p>
        <div className="flex gap-8">
          <img
            alt="Visa accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51cvKtHEobN1IMBKDmSnrk8gLfAeuh-C0ZIKqIwzEhSCd7vdZf0efWsmIpgUdO5Gt91hSIPYGIWWRwCTANr4oVQZCDtkOmJy7b_QydJ0gtiLltpG-2WXEHoeQ3Td6xdGvnKp7y1w0IkpaoryxzJwih-zyyFMhQwIhumM1Pf_BH5pgVmmpfmwhVpx3gObp70f4nEa152iORhWcfD5jlMxVCmZJGrG3N8Ihj3VAaRoCcNcFCcMIPi4k0PoX4_lboaBJjhmhhx3f924"
          />
          <img
            alt="Mastercard accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBlDyCoGyCAdxwgkZAruxj6f_KCjLKnR-GEyfBY8M8E6B9cFPScAV9KPS0eGK665svn-5AMPNRrw7_FDnMxRjCnC2STCYXpF4jY_EcatTG3RqPoTc01TsijYrU2c7OpOWJt148pZyC0C7i3hsBxhQiVEPwbjNkx6tsUKF--69MIBZjXBf4Xaq5mZq_vQf9fjWywhaeDOE1uBE5FAxT6aXdMNq_WN5s8y8rsjNIYF1DgvsAqDLn8_xDTLDxJdW1k2qWRDOggmQyLX0"
          />
          <img
            alt="American Express accepted"
            className="h-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxBrGedj8zOqqawDnQXNVINuVmjd1etJXDD0YqWrE0CjAgl7dFQPXvkhAWhseJjJZ-ncIZZ0GHJMRctvrrbE6bS_sl8hpPvkwLy0GRUWTiNPWJ4e4E_FYBDGTX620rVWK8FLJondCFuUTM9T_3dixG7ohTgVwHUb9QXUzv0-QZVBV_KofhrGYy602dGb-1bCJHMKJAkCY1hV3k-j7O_5sf_ktEhA1g-QMrlSgL6JcV2r7jayPcpkkNvIciGkHhNiz6HOYz3z8pVRM"
          />
        </div>
      </div>
    </footer>
  );
}
