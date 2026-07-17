'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export function Navigation() {
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
        {/* Logo */}
        <Link href="/" className="text-headline-md font-headline-md tracking-tight text-primary">
          Fontaine
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { href: '#archive', label: 'Archive' },
            { href: '#essences', label: 'Essences' },
            { href: '#rituals', label: 'Rituals' },
            { href: '#apothecary', label: 'Apothecary' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-label-md text-label-md transition-colors ${
                item.label === 'Archive'
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
            <button className="hover:opacity-80 transition-opacity" aria-label="Search">
            <Search className="text-primary" />
          </button>
          <button className="hover:opacity-80 transition-opacity" aria-label="Account">
            <User className="text-primary" />
          </button>
          <button className="hover:opacity-80 transition-opacity flex items-center gap-2" aria-label="Shopping cart">
            <ShoppingBag className="text-primary" />
            <span className="text-label-sm text-primary">(0)</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            {isOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-outline-variant/10 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 space-y-4">
            {[
              { href: '#archive', label: 'Archive' },
              { href: '#essences', label: 'Essences' },
              { href: '#rituals', label: 'Rituals' },
              { href: '#apothecary', label: 'Apothecary' },
            ].map((item) => (
              <a
                key={item.href}
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
