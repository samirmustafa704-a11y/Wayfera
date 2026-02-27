import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { Footer } from '@/components/footer';
import FeaturedDestinations from '@/components/featured-destinations';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return generateSEO({
    title: 'Home - Discover Amazing Destinations',
    description: 'Explore the world with Wayfera. Premium travel packages to 50+ countries, expert local guides, 24/7 support, and unforgettable experiences. Start your journey today!',
    keywords: ['travel home', 'vacation planning', 'travel deals', 'holiday packages', 'world destinations'],
    locale: params.locale,
  });
}

export default function Home({ params }: { params: { locale: string } }) {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${params.locale}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <main className="overflow-hidden">
        <Header />
        <HeroSection />
        <FeaturedDestinations />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
