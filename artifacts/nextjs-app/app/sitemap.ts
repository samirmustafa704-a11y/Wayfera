import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wayfera.netlify.app';
  const locales = ['en', 'ar', 'es', 'fr'];
  const routes = ['', '/destinations', '/services', '/about', '/contact', '/booking'];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}
