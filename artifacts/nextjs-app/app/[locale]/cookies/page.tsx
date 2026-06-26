"use client";

import { Header, Footer } from '@/app/_components/layout';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CookiePolicyPage() {
  const t = useTranslations('legal.cookies');
  const contactInfo = useTranslations('footer.contact');

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
              {/* Section 1: What Are Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.what.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.what.content')}
                </p>
              </section>

              {/* Section 2: How We Use Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.how.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.how.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.how.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 3: Types of Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('sections.types.title')}
                </h2>
                
                {['essential', 'performance', 'functionality', 'targeting'].map((type) => (
                  <div key={type} className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {t(`sections.types.${type}.title`)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {t(`sections.types.${type}.description`)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      Duration: {t(`sections.types.${type}.duration`)}
                    </p>
                  </div>
                ))}
              </section>

              {/* Section 4: Third-Party Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.third_party.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.third_party.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.third_party.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 5: Managing Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.managing.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.managing.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  {t.raw('sections.managing.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.managing.note')}
                </p>
              </section>

              {/* Section 6: Browser Instructions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.browser.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.browser.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.browser.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 7: Local Storage */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.storage.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.storage.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.storage.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 8: DNT Signals */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.dnt.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.dnt.content')}
                </p>
              </section>

              {/* Section 9: Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.updates.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.updates.content')}
                </p>
              </section>

              {/* Section 10: Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.contact.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.contact.intro')}
                </p>
                <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Email: privacy@wayfera.com</li>
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
