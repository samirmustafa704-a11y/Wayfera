// ============================================================================
// CENTRALIZED TYPE DEFINITIONS
// All application types are defined here to avoid duplication and conflicts
// ============================================================================

// ============================================================================
// ENTITY TYPES - Database Models
// ============================================================================

export interface Destination {
  id: number;
  name?: string;
  title?: string;
  category?: 'beach' | 'mountain' | 'city' | 'adventure';
  image: string;
  price?: number;
  rating?: number;
  description: string;
  duration?: string;
  reviews?: number;
  groupSize?: string;
  region?: string;
}

export interface DestinationDetail extends Destination {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  icon?: string;
  description?: string;
}

export interface Service {
  id: string;
  icon?: any;
  features?: string[];
  title?: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location?: string;
  image: string;
  rating: number;
  text: string;
}

export interface Region {
  id?: number;
  name: string;
  destinations: number;
  image: string;
  description?: string;
}

export interface TravelTip {
  id?: number;
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description?: string;
  features: string[];
  popular?: boolean;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

export interface ContactInfo {
  id?: number;
  icon?: any;
  title?: string;
  email?: string;
  phone?: string;
  value?: string;
  link?: string;
  address?: string;
}

export interface SocialLink {
  id?: number;
  name: string;
  url: string;
  icon?: string;
}

export interface PageStat {
  id: number;
  label: string;
  value: string;
  pageType?: string;
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

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface JsonLdProps {
  data: Record<string, any>;
}

export interface EmptyStateProps {
  icon: any;
  title: string;
  description?: string;
}

export interface EmptySearchProps {
  searchQuery: string;
  onClear: () => void;
}

export interface NetworkErrorProps {
  onRetry?: () => void;
  message?: string;
}

export interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export interface AppLogoProps {
  src?: string;
  text?: string;
  href?: string;
  className?: string;
}

export type IconVariant = 'outline' | 'solid';

export interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface StatItemProps {
  value: string;
  suffix: string;
  icon?: React.ReactNode;
}

// ============================================================================
// FORM & VALIDATION TYPES
// ============================================================================

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

export type Step = 1 | 2 | 3 | 4;

// ============================================================================
// LOCALE & INTERNATIONALIZATION TYPES
// ============================================================================

export type Locale = 'en' | 'ar' | 'es' | 'fr';

// ============================================================================
// SEO TYPES
// ============================================================================

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

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

// ============================================================================
// PAGE & ROUTE TYPES
// ============================================================================

export interface PageProps {
  params: {
    locale: Locale;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// ============================================================================
// UI COMPONENT TYPES (from shadcn/ui components)
// ============================================================================

export type ToasterProps = React.ComponentProps<any>;
export type CarouselApi = any;
export type CarouselOptions = any;
export type CarouselPlugin = any;

export interface SheetContentProps extends React.ComponentPropsWithoutRef<any> {}

export type PaginationLinkProps = {
  isActive?: boolean;
} & Record<string, any>;

export interface CommandDialogProps extends Record<string, any> {}

export type ChartContextProps = {
  config: Record<string, any>;
};

export interface FormFieldContextValue {
  id: string;
}

export interface FormItemContextValue {
  id: string;
}
