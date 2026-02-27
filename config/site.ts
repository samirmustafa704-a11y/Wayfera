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
