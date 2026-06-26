import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  locale?: string;
  alternateLocales?: string[];
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
  locale = 'en',
  alternateLocales = ['en', 'ar', 'es', 'fr']
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com';
  const fullTitle = `${title} | Wayfera`;
  const defaultKeywords = [
    'travel agency',
    'vacation packages',
    'tour booking',
    'travel destinations',
    'holiday planning',
    'flight booking',
    'hotel reservation',
    'travel guide',
    'adventure travel',
    'luxury travel'
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: 'Wayfera Travel Agency' }],
    creator: 'Wayfera',
    publisher: 'Wayfera Travel Agency',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || baseUrl,
      languages: alternateLocales.reduce((acc, loc) => {
        acc[loc] = `${baseUrl}/${loc}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: 'Wayfera',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: ogType as any,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
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
}

// JSON-LD Schema for Organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Wayfera',
    description: 'Premium travel agency offering curated travel experiences worldwide',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com',
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/og-image.jpg`,
    telephone: '+1-234-567-8900',
    email: 'info@wayfera.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Travel Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    sameAs: [
      'https://facebook.com/wayfera',
      'https://twitter.com/wayfera',
      'https://instagram.com/wayfera',
      'https://linkedin.com/company/wayfera',
    ],
    priceRange: '$$',
  };
}

// JSON-LD Schema for Breadcrumbs
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// JSON-LD Schema for Product (Tour Package)
export function generateTourPackageSchema(tour: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.name,
    description: tour.description,
    image: tour.image,
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: tour.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/booking`,
    },
    aggregateRating: tour.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: tour.rating,
          reviewCount: tour.reviewCount || 100,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  };
}
