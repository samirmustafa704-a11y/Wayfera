"use client";

import { Header, Footer } from '@/app/_components/layout';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function TermsOfServicePage() {
  const t = useTranslations('legal.terms');

  return (
    <main className="overflow-hidden">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t('lastUpdated')} {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              {/* Agreement to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.agreement.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.agreement.content')}
                </p>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.license.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.license.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.license.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Booking and Reservations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.booking.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.booking.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.booking.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.payment.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.payment.content')}
                </p>
              </section>

              {/* Cancellation and Refund */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.cancellation.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.cancellation.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.cancellation.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Travel Documents */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.travel_docs.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.travel_docs.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.travel_docs.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.liability.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.liability.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.liability.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* User Conduct */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.conduct.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.conduct.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.conduct.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.ip.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.ip.content')}
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.dispute.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.dispute.content')}
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.changes.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.changes.content')}
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.contact.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.contact.intro')}
                </p>
                <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Email: legal@wayfera.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Travel Street, Adventure City, AC 12345</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
