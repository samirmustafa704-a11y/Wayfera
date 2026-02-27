import './globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers';
import { Toaster } from 'react-hot-toast';
import { PerformanceOptimizer, JsonLd } from '@/components/shared';
import { generateOrganizationSchema } from '@/lib/seo';

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'),
  title: {
    default: 'Wayfera - Premium Travel Agency | Discover Amazing Destinations',
    template: '%s | Wayfera'
  },
  description: 'Experience the world\'s most breathtaking destinations with Wayfera. Premium travel packages, expert guides, 24/7 support. Book your dream vacation today!',
  keywords: ['travel agency', 'vacation packages', 'tour booking', 'travel destinations', 'holiday planning', 'flight booking', 'hotel reservation', 'luxury travel', 'adventure travel', 'travel guide'],
  authors: [{ name: 'Wayfera Travel Agency' }],
  creator: 'Wayfera',
  publisher: 'Wayfera Travel Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com',
    siteName: 'Wayfera',
    title: 'Wayfera - Premium Travel Agency',
    description: 'Experience the world\'s most breathtaking destinations with our curated travel experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wayfera Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayfera - Premium Travel Agency',
    description: 'Experience the world\'s most breathtaking destinations with our curated travel experiences.',
    images: ['/og-image.jpg'],
    creator: '@wayfera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <JsonLd data={generateOrganizationSchema()} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={oswald.className} suppressHydrationWarning>
        <PerformanceOptimizer />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}