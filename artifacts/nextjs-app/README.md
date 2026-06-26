# 🌍 Wayfera - Modern Travel Agency Platform

<div align="center">

![Wayfera Logo](public/icon.svg)

**A cutting-edge, multilingual travel agency website built with Next.js 14, featuring stunning animations, comprehensive SEO, and enterprise-grade performance optimization.**

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://wayfera.netlify.app) • [Report Bug](https://github.com/yourusername/wayfera/issues) • [Request Feature](https://github.com/yourusername/wayfera/issues)

</div>

---

## � Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🌐 Internationalization (i18n)
- **4 Languages**: English, Arabic (العربية), French (Français), Spanish (Español)
- **RTL Support**: Automatic right-to-left layout for Arabic with proper text alignment
- **Locale Persistence**: Selected language persists across navigation
- **Dynamic Font Loading**: Oswald for Latin scripts, Noto Kufi Arabic for Arabic

### � Comprehensive Pages
- **Home**: Hero with typewriter effect, featured destinations, testimonials, newsletter
- **Destinations**: 6+ destinations with filtering, detailed pages, itineraries
- **Services**: Service packages, pricing tiers, process workflow
- **About**: Company story, team values, statistics
- **Contact**: Contact form with validation, location info
- **Booking**: Multi-step wizard (destination → details → payment)
- **Legal**: Privacy Policy, Terms of Service, Cookie Policy

### 🎨 Design & User Experience
- **Dark Mode**: Seamless theme switching with system preference detection
- **Animations**: 60fps Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Glass Morphism**: Modern glassmorphic UI elements
- **Accessibility**: WCAG 2.1 AA compliant components
- **Custom Calendar**: Styled date picker with brand colors

### � Performance Optimization
- **Image Optimization**: Next.js Image with AVIF/WebP, lazy loading
- **Code Splitting**: Automatic route-based and component-level splitting
- **Font Optimization**: Preloaded Google Fonts with display swap
- **Reduced Animations**: 75% reduction in floating elements (20 → 5)
- **GPU Acceleration**: will-change-transform for smooth animations
- **Caching Strategy**: Browser caching, localStorage, sessionStorage

### 🔍 SEO & Marketing
- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **JSON-LD**: Structured data (Organization, Breadcrumb, Product schemas)
- **Dynamic Sitemap**: Multi-locale XML sitemap generation
- **Robots.txt**: Proper crawling rules for search engines
- **PWA Ready**: Web app manifest with icons
- **Breadcrumbs**: Schema.org compliant navigation

### 🛡️ Error Handling & Reliability
- **Error Boundaries**: Graceful error recovery with helpful UI
- **404 Pages**: Animated not-found pages with navigation suggestions
- **Network Error Handling**: Connection failure detection and retry
- **Loading States**: Skeleton screens and loading animations
- **Empty States**: User-friendly empty data displays
- **Form Validation**: Zod schema validation with helpful error messages

### 💾 State Management & Storage
- **Local Storage**: Persistent user preferences with hooks
- **Session Storage**: Temporary data management
- **Cookie Consent**: GDPR-compliant cookie management
- **Cache API**: Browser cache for API responses
- **Cross-tab Sync**: localStorage synchronization across tabs

---

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library with Server Components

### Styling
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### Internationalization
- **[next-intl](https://next-intl-docs.vercel.app/)** - i18n for Next.js
- **[Google Fonts](https://fonts.google.com/)** - Oswald & Noto Kufi Arabic

### UI/UX
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast notifications
- **[date-fns](https://date-fns.org/)** - Date utility library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

---

## 🚀 Quick Start

See [docs/SETUP.md](docs/SETUP.md) for detailed setup instructions.

```bash
npm install && npm run dev
```

Open `http://localhost:3000`

---

## 📁 Project Structure

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed architecture.

```
wayfera/
├── docs/                    # Developer documentation
│   ├── SETUP.md            # Installation & setup
│   ├── DATABASE.md         # Database configuration
│   └── ARCHITECTURE.md     # Project architecture
├── app/                    # Next.js App Router
│   ├── [locale]/          # i18n routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── robots.ts          # SEO robots
├── components/            # React components
│   ├── features/          # Feature components
│   ├── layout/            # Layout components
│   ├── shared/            # Shared utilities
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities
│   ├── prisma.ts         # Database client
│   └── utils.ts          # Helpers
├── config/                # Configuration
├── messages/              # i18n translations
├── prisma/                # Database schema
└── types/                 # TypeScript types
```

---

## ⚙️ Configuration

See [docs/DATABASE.md](docs/DATABASE.md) for database setup.

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Wayfera
DATABASE_URL=postgresql://...
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**M.Said**

- Portfolio: [m-said-portfolio.netlify.app](https://m-said-portfolio.netlify.app)
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Vercel](https://vercel.com/) - Hosting and deployment
- [shadcn](https://twitter.com/shadcn) - Beautiful UI components
- [Tailwind Labs](https://tailwindcss.com/) - Utility-first CSS
- [Framer](https://www.framer.com/) - Motion library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives

---

## 📊 Project Stats

- **Total Routes**: 13+ pages
- **Components**: 60+ reusable components
- **Languages**: 4 (en, ar, fr, es)
- **Bundle Size**: ~79KB (First Load JS)
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)

---

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] Integrate payment gateway
- [ ] Add booking management dashboard
- [ ] Implement real-time availability
- [ ] Add customer reviews system
- [ ] Create mobile app (React Native)
- [ ] Add more destinations
- [ ] Implement AI-powered recommendations

---

<div align="center">

**Made with ❤️ by M.Said**

[⬆ Back to Top](#-wayfera---modern-travel-agency-platform)

</div>
