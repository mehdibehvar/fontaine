'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const links = [
  { href: '/shop', label: 'Essences' },
  { href: '/shop', label: 'Rituals', active: true },
  { href: '/shop', label: 'Apothecary' },
  { href: '/shop', label: 'Archive' },
];

export function StorefrontNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/10">
      <style jsx>{`
        .glass-nav {
          backdrop-filter: blur(12px);
          background-color: rgba(19, 19, 19, 0.8);
        }
      `}</style>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-headline-md font-headline-md tracking-tight text-primary"
        >
          Fontaine
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-label-md text-label-md transition-colors ${
                item.active
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:opacity-80 transition-opacity" aria-label="Search">
            <Search className="text-on-surface-variant hover:text-primary transition-colors" />
          </button>
          <button className="hidden md:block hover:opacity-80 transition-opacity" aria-label="Account">
            <User className="text-on-surface-variant hover:text-primary transition-colors" />
          </button>
          <button
            className="hover:opacity-80 transition-opacity relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="text-on-surface-variant hover:text-primary transition-colors" />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-[10px] leading-4 text-center text-on-primary">
              1
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="text-primary" />
            ) : (
              <Menu className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-outline-variant/10 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile py-6 space-y-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
