import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar', 'fr', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.well-known|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp).*)',
    '/',
    '/(ar|en|fr|es)/:path*'
  ]
};
