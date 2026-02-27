# 🏗️ Wayfera - Clean Architecture Documentation

## 📁 Project Structure

```
wayfera/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── (pages)/             # Page routes group
│   │   │   ├── about/
│   │   │   ├── booking/
│   │   │   ├── contact/
│   │   │   ├── destinations/
│   │   │   └── services/
│   │   ├── layout.tsx           # Locale-specific layout
│   │   ├── page.tsx             # Home page
│   │   ├── error.tsx            # Error boundary
│   │   ├── loading.tsx          # Loading state
│   │   └── not-found.tsx        # 404 page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── robots.ts                # SEO robots
│   └── sitemap.ts               # SEO sitemap
│
├── components/                   # React Components
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── features/                # Feature-specific components
│   │   ├── booking/
│   │   ├── destinations/
│   │   ├── services/
│   │   └── testimonials/
│   ├── layout/                  # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── shared/                  # Shared components
│   │   ├── error-boundary.tsx
│   │   ├── json-ld.tsx
│   │   └── performance-optimizer.tsx
│   └── providers/               # Context providers
│       └── theme-provider.tsx
│
├── lib/                         # Utility libraries
│   ├── seo.ts                   # SEO utilities
│   ├── utils.ts                 # General utilities
│   └── constants.ts             # App constants
│
├── hooks/                       # Custom React hooks
│   ├── use-toast.ts
│   └── use-media-query.ts
│
├── types/                       # TypeScript types
│   ├── index.ts
│   ├── seo.ts
│   └── components.ts
│
├── config/                      # Configuration files
│   ├── site.ts                  # Site configuration
│   └── navigation.ts            # Navigation config
│
├── messages/                    # i18n translations
│   ├── en.json
│   ├── ar.json
│   ├── es.json
│   └── fr.json
│
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── manifest.json
│
└── styles/                      # Additional styles
    └── globals.css
```

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **Presentation Layer**: Components (UI, features, layout)
- **Business Logic**: Lib utilities and hooks
- **Data Layer**: API routes and data fetching
- **Configuration**: Config files and constants

### 2. **Component Organization**

#### UI Components (`components/ui/`)
- Reusable, atomic components
- No business logic
- Styled with Tailwind CSS
- From shadcn/ui library

#### Feature Components (`components/features/`)
- Feature-specific components
- Contains business logic
- Composed of UI components
- Example: `BookingForm`, `DestinationCard`

#### Layout Components (`components/layout/`)
- Page structure components
- Header, Footer, Navigation
- Consistent across pages

#### Shared Components (`components/shared/`)
- Cross-feature components
- Error boundaries, loaders
- Performance optimizers

### 3. **State Management**

#### Client State
- React hooks (useState, useReducer)
- Context API for global state
- No external state library needed

#### Server State
- Next.js Server Components
- Server Actions for mutations
- React Server Components for data fetching

### 4. **Routing Strategy**

#### App Router (Next.js 13+)
- File-based routing
- Server Components by default
- Client Components with "use client"
- Internationalized routes with [locale]

#### Route Groups
```
app/[locale]/(pages)/     # Grouped routes
├── about/
├── booking/
├── contact/
├── destinations/
└── services/
```

### 5. **Data Fetching**

#### Server Components (Default)
```typescript
// Fetch data on server
async function getData() {
  const res = await fetch('...')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data}</div>
}
```

#### Client Components
```typescript
"use client"
// Use hooks for client-side data
import { useEffect, useState } from 'react'

export function Component() {
  const [data, setData] = useState(null)
  // Fetch data client-side
}
```

### 6. **Styling Strategy**

#### Tailwind CSS
- Utility-first CSS framework
- Custom theme configuration
- Dark mode support
- Responsive design

#### CSS Modules (Optional)
- Component-scoped styles
- For complex components
- Avoid global styles

### 7. **Performance Optimization**

#### Image Optimization
- Next.js Image component
- Automatic WebP/AVIF conversion
- Lazy loading
- Responsive sizes

#### Code Splitting
- Automatic with Next.js
- Dynamic imports for large components
- Route-based splitting

#### Caching Strategy
- Static Generation (SSG) for static pages
- Server-Side Rendering (SSR) for dynamic pages
- Incremental Static Regeneration (ISR)

## 🔄 Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Business Logic (lib/hooks)
    ↓
API Call / Server Action
    ↓
Data Update
    ↓
Component Re-render
```

## 🌐 Internationalization (i18n)

### Structure
```
messages/
├── en.json    # English
├── ar.json    # Arabic (RTL)
├── es.json    # Spanish
└── fr.json    # French
```

### Usage
```typescript
import { useTranslations } from 'next-intl'

export function Component() {
  const t = useTranslations('namespace')
  return <h1>{t('title')}</h1>
}
```

### Routing
- `/en/about` - English
- `/ar/about` - Arabic (RTL)
- `/es/about` - Spanish
- `/fr/about` - French

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Purple (#9333ea)
- Accent: Pink (#ec4899)
- Neutral: Gray scale

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, large sizes
- Body: Regular, readable sizes

### Spacing
- Consistent spacing scale (4px base)
- Responsive padding/margins
- Grid system with Tailwind

## 🔒 Security Best Practices

### Input Validation
- Zod for schema validation
- React Hook Form for forms
- Server-side validation

### XSS Prevention
- React auto-escapes by default
- Sanitize user input
- Use dangerouslySetInnerHTML carefully

### CSRF Protection
- Next.js built-in protection
- Secure cookies
- HTTPS in production

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement
- Touch-friendly interactions

## ⚡ Performance Targets

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🧪 Testing Strategy

### Unit Tests
- Jest for unit testing
- React Testing Library
- Test utilities and hooks

### Integration Tests
- Test component interactions
- Test API routes
- Test user flows

### E2E Tests
- Playwright or Cypress
- Test critical user journeys
- Test across browsers

## 📦 Build & Deployment

### Build Process
```bash
npm run build    # Production build
npm run start    # Start production server
npm run dev      # Development server
```

### Environment Variables
```env
NEXT_PUBLIC_BASE_URL=https://wayfera.com
NEXT_PUBLIC_API_URL=https://api.wayfera.com
```

### Deployment Platforms
- Vercel (Recommended)
- Netlify
- AWS Amplify
- Self-hosted

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Develop feature
# Write tests
# Update documentation

# Commit changes
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

### 2. Code Review
- Review code quality
- Check tests pass
- Verify documentation
- Test locally

### 3. Merge & Deploy
- Merge to main
- Automatic deployment
- Monitor performance
- Check error logs

## 📚 Best Practices

### Component Design
✅ Single Responsibility Principle
✅ Composition over inheritance
✅ Props validation with TypeScript
✅ Meaningful component names
✅ Keep components small and focused

### Code Quality
✅ TypeScript for type safety
✅ ESLint for code linting
✅ Prettier for code formatting
✅ Consistent naming conventions
✅ Comprehensive comments

### Performance
✅ Lazy load components
✅ Optimize images
✅ Minimize bundle size
✅ Use React.memo wisely
✅ Avoid unnecessary re-renders

### Accessibility
✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ Screen reader support
✅ Color contrast

### SEO
✅ Meta tags on all pages
✅ Structured data (JSON-LD)
✅ Sitemap and robots.txt
✅ Fast loading times
✅ Mobile-friendly

## 🎯 Future Improvements

### Short Term
- [ ] Add unit tests
- [ ] Implement error tracking (Sentry)
- [ ] Add analytics (Google Analytics)
- [ ] Optimize bundle size further
- [ ] Add more animations

### Long Term
- [ ] Add blog section
- [ ] Implement user authentication
- [ ] Add booking system backend
- [ ] Create admin dashboard
- [ ] Add payment integration
- [ ] Implement real-time chat support

## 📖 Documentation

### Code Documentation
- JSDoc comments for functions
- README for each major feature
- Architecture decision records (ADRs)

### API Documentation
- OpenAPI/Swagger for APIs
- Example requests/responses
- Error codes and handling

### User Documentation
- User guides
- FAQ section
- Video tutorials

## 🤝 Contributing

### Guidelines
1. Follow the architecture principles
2. Write clean, readable code
3. Add tests for new features
4. Update documentation
5. Follow commit conventions

### Commit Convention
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

---

## 📞 Support

For questions or issues:
- GitHub Issues
- Email: dev@wayfera.com
- Documentation: /docs

---

**Last Updated**: 2024
**Version**: 1.0.0
**Maintainers**: Wayfera Development Team
