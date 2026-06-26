# Deployment Configuration

## Netlify Deployment

The project is configured for Netlify deployment with automatic builds and optimized caching.

### Build Configuration
- **Build Command:** `npm run build`
- **Publish Directory:** `.next`
- **Node Version:** 18

### Environment Variables
```
NEXT_PUBLIC_BASE_URL=https://wayfera.netlify.app
NODE_VERSION=18
```

### Netlify Plugin
Uses `@netlify/plugin-nextjs` for optimized Next.js support.

### i18n Redirects
Root path `/` redirects to `/en` (default locale).

### Caching Strategy
- **Static assets** (`.next/static/*`): Immutable caching (1 year)
- **Images** (*.jpg, *.jpeg, *.png, *.webp, *.avif): Immutable caching (1 year)
- **Icons** (icon.svg): Immutable caching (1 year)

### Security Headers
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-DNS-Prefetch-Control: on` - Enables DNS prefetch
- `Referrer-Policy: origin-when-cross-origin` - Controls referrer information

### Configuration File
See `netlify.toml` in the root directory for the complete configuration.

## Deployment Steps

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect `netlify.toml`
3. Configure environment variables in Netlify dashboard
4. Trigger a build or push to main branch to deploy

## Other Platforms

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t wayfera .
docker run -p 3000:3000 wayfera
```

