import { Header, Footer } from '@/components/layout';
import { BookingSection } from '@/components/features/booking';

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
