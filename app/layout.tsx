import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'Fontaine | Premium Whole Dried Herbs',
  description: 'Fontaine specializes in premium raw whole-leaf dried botanicals. Experience the alchemy of herbs.',
  metadataBase: new URL('https://fontaine.local'),
  openGraph: {
    title: 'Fontaine | Premium Whole Dried Herbs',
    description: 'Premium raw whole-leaf dried botanicals.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#131313" />
      </head>
      <body className="h-full bg-background text-on-surface">
        <Providers>
          <div className="grain" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
