import { Header, Footer } from '@/app/_components/layout';
import { BookingSection } from '@/app/_components/features/booking';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Trip | Wayfera',
  description: 'Customize your travel package and secure your booking with Wayfera.',
};

export default function BookingPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
