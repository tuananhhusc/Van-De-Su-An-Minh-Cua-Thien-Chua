import { Playfair_Display, Crimson_Pro, Inter } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const crimsonPro = Crimson_Pro({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-crimson-pro',
});

export const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
});
