// Site configuration
export const siteConfig = {
  name: "Wayfera",
  description: "Premium travel agency offering curated travel experiences worldwide",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://wayfera.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/wayfera",
    facebook: "https://facebook.com/wayfera",
    instagram: "https://instagram.com/wayfera",
    linkedin: "https://linkedin.com/company/wayfera",
  },
  contact: {
    email: "info@wayfera.com",
    phone: "+1-234-567-8900",
    address: "123 Travel Street, New York, NY 10001, US",
  },
  locales: ["en", "ar", "es", "fr"] as const,
  defaultLocale: "en" as const,
};

export type SiteConfig = typeof siteConfig;

// App constants
export const APP_NAME = siteConfig.name;
export const APP_DESCRIPTION = siteConfig.description;
export const LOCALES = siteConfig.locales;
export const DEFAULT_LOCALE = siteConfig.defaultLocale;
export const SOCIAL_LINKS = siteConfig.links;
export const CONTACT_INFO = siteConfig.contact;

// API endpoints
export const API_ENDPOINTS = {
  destinations: "/api/destinations",
  bookings: "/api/bookings",
  contact: "/api/contact",
  newsletter: "/api/newsletter",
} as const;

// Pagination
export const ITEMS_PER_PAGE = 12;
export const MAX_ITEMS_PER_PAGE = 50;

// Image sizes
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 },
  hero: { width: 1920, height: 1080 },
} as const;

// Animation durations (ms)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Destination categories
export const DESTINATION_CATEGORIES = [
  'all',
  'beach',
  'mountain',
  'city',
  'adventure',
] as const;

// Service types
export const SERVICE_TYPES = [
  'flight',
  'hotel',
  'guide',
  'support',
] as const;

// Date formats
export const DATE_FORMATS = {
  short: 'MMM dd, yyyy',
  long: 'MMMM dd, yyyy',
  full: 'EEEE, MMMM dd, yyyy',
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
  titleTemplate: '%s | Wayfera',
  defaultTitle: 'Wayfera - Premium Travel Agency',
  description: 'Experience the world\'s most breathtaking destinations with Wayfera',
  keywords: [
    'travel agency',
    'vacation packages',
    'tour booking',
    'travel destinations',
    'holiday planning',
  ],
} as const;

// Cache durations (seconds)
export const CACHE_DURATION = {
  short: 60, // 1 minute
  medium: 300, // 5 minutes
  long: 3600, // 1 hour
  day: 86400, // 24 hours
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to access this resource.',
  validation: 'Please check your input and try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  bookingSubmitted: 'Booking request submitted successfully!',
  contactSubmitted: 'Message sent successfully! We\'ll get back to you soon.',
  newsletterSubscribed: 'Successfully subscribed to our newsletter!',
} as const;
