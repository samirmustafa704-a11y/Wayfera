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

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** 9.0 or later (or **yarn** 1.22+)
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/wayfera.git
cd wayfera
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
wayfera/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Internationalized routes
│   │   ├── about/              # About page
│   │   ├── booking/            # Booking wizard
│   │   ├── contact/            # Contact form
│   │   ├── cookies/            # Cookie policy
│   │   ├── destinations/       # Destinations listing
│   │   │   └── [id]/          # Destination detail pages
│   │   ├── privacy/            # Privacy policy
│   │   ├── services/           # Services page
│   │   ├── terms/              # Terms of service
│   │   ├── error.tsx           # Error boundary
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── loading.tsx         # Loading state
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Home page
│   ├── global-error.tsx        # Global error handler
│   ├── icon.svg                # App icon
│   ├── layout.tsx              # Root layout wrapper
│   ├── page.tsx                # Root redirect
│   ├── robots.ts               # Robots.txt generator
│   └── sitemap.ts              # Sitemap generator
├── components/
│   ├── features/               # Feature-specific components
│   │   ├── booking/           # Booking components
│   │   ├── destinations/      # Destination components
│   │   ├── services/          # Service components
│   │   └── testimonials/      # Testimonial components
│   ├── layout/                # Layout components
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── hero-section.tsx
│   ├── providers/             # Context providers
│   │   └── theme-provider.tsx
│   ├── shared/                # Shared components
│   │   ├── cookie-consent.tsx
│   │   ├── empty-state.tsx
│   │   ├── error-boundary.tsx
│   │   ├── json-ld.tsx
│   │   ├── network-error.tsx
│   │   └── performance-optimizer.tsx
│   └── ui/                    # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ... (50+ components)
├── config/                    # Configuration files
│   ├── navigation.ts          # Navigation config
│   └── site.ts                # Site metadata
├── hooks/                     # Custom React hooks
│   ├── use-cache.ts
│   ├── use-local-storage.ts
│   ├── use-session-storage.ts
│   └── use-toast.ts
├── lib/                       # Utility libraries
│   ├── constants.ts           # App constants
│   ├── seo.ts                 # SEO utilities
│   ├── storage.ts             # Storage utilities
│   └── utils.ts               # Helper functions
├── messages/                  # i18n translation files
│   ├── ar.json               # Arabic
│   ├── en.json               # English
│   ├── es.json               # Spanish
│   └── fr.json               # French
├── public/                    # Static assets
│   └── manifest.json         # PWA manifest
├── types/                     # TypeScript types
│   └── index.ts
├── .env.production           # Production environment
├── .eslintrc.json            # ESLint config
├── .gitignore                # Git ignore rules
├── components.json           # shadcn/ui config
├── i18n.ts                   # i18n configuration
├── middleware.ts             # Next.js middleware
├── netlify.toml              # Netlify config
├── next.config.js            # Next.js config
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS config
├── tailwind.config.ts        # Tailwind config
└── tsconfig.json             # TypeScript config
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Wayfera

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Tailwind Configuration

All styles are centralized in `tailwind.config.ts`:
- CSS variables for theming
- Custom colors and gradients
- Date input styling
- Calendar component styling
- Utility classes (glass, text-shadow, typewriter)

### Next.js Configuration

`next.config.js` includes:
- Image optimization (AVIF, WebP)
- Package imports optimization
- SWC minification
- Security headers
- Caching headers

---

## 🌍 Internationalization

### Supported Languages

| Language | Code | Direction | Font |
|----------|------|-----------|------|
| English | `en` | LTR | Oswald |
| Arabic | `ar` | RTL | Noto Kufi Arabic |
| French | `fr` | LTR | Oswald |
| Spanish | `es` | LTR | Oswald |

### Adding a New Language

1. Create translation file: `messages/[locale].json`
2. Add locale to `middleware.ts`:
```typescript
locales: ['en', 'ar', 'fr', 'es', 'de'], // Add 'de'
```
3. Update `i18n.ts` to handle new locale
4. Add translations for all keys

### Translation Structure

```json
{
  "nav": { "home": "Home", "about": "About" },
  "hero": { "title": "Discover Your Next", "subtitle": "..." },
  "destinations": { "title": "Popular Destinations" },
  "services": { "title": "Our Services" },
  "booking": { "title": "Book Your Trip" },
  "footer": { "description": "..." }
}
```

---

## 🚀 Deployment

### Netlify (Current)

The app is deployed at [wayfera.netlify.app](https://wayfera.netlify.app)

**Deploy Steps:**
1. Push to GitHub
2. Connect repository in Netlify
3. Build settings are in `netlify.toml`
4. Deploy automatically on push

### Vercel (Recommended for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Manual Deployment

```bash
npm run build
npm start
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use named exports over default exports
- Write meaningful commit messages
- Add comments for complex logic

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
