import { Header } from '@/components/header';
import { DestinationsSection } from '@/components/destinations-section';
import { Footer } from '@/components/footer';
import DestinationHero from '@/components/destination-hero';
import PopularRegions from '@/components/popular-regions';
import TravelTips from '@/components/travel-tips';
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return generateSEO({
    title: 'Destinations - Explore World Travel Destinations',
    description: 'Discover amazing travel destinations worldwide. From tropical beaches to mountain adventures, explore our curated collection of 200+ destinations across Europe, Asia, Americas, and Africa.',
    keywords: ['travel destinations', 'vacation spots', 'tourist attractions', 'world travel', 'holiday destinations', 'beach destinations', 'mountain travel', 'city tours'],
    locale: params.locale,
  });
}

export default function DestinationsPage({ params }: { params: { locale: string } }) {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${params.locale}` },
    { name: 'Destinations', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${params.locale}/destinations` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <main className="overflow-hidden">
        <Header />
        <div className="pt-20">
          <DestinationHero />
          <DestinationsSection />
          <PopularRegions />
          <TravelTips />
        </div>
        <Footer />
      </main>
    </>
  );
}
