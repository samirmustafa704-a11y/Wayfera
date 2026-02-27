// Common types used across the application

export interface Destination {
  id: number;
  name: string;
  category: 'beach' | 'mountain' | 'city' | 'adventure';
  image: string;
  price: number;
  rating: number;
  description: string;
  duration: string;
  reviews?: number;
  groupSize?: string;
}

export interface Service {
  id: string;
  icon: any;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

export interface Region {
  name: string;
  destinations: number;
  image: string;
  description: string;
}

export interface TravelTip {
  icon: any;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ContactInfo {
  icon: any;
  title: string;
  value: string;
  link: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Value {
  icon: any;
  title: string;
  description: string;
}

// Locale types
export type Locale = 'en' | 'ar' | 'es' | 'fr';

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  locale?: string;
  alternateLocales?: string[];
}

// Form types
export interface BookingFormData {
  destination: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

// Component Props types
export interface PageProps {
  params: {
    locale: Locale;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
