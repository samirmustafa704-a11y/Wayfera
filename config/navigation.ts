export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export const mainNav: MainNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destinations",
    href: "/destinations",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNav = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Press", href: "/press" },
    { title: "Blog", href: "/blog" },
  ],
  services: [
    { title: "Flight Booking", href: "/services#flights" },
    { title: "Hotel Booking", href: "/services#hotels" },
    { title: "Tour Guides", href: "/services#guides" },
    { title: "24/7 Support", href: "/services#support" },
  ],
  destinations: [
    { title: "Europe", href: "/destinations?region=europe" },
    { title: "Asia", href: "/destinations?region=asia" },
    { title: "Americas", href: "/destinations?region=americas" },
    { title: "Africa", href: "/destinations?region=africa" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Refund Policy", href: "/refund" },
  ],
};
