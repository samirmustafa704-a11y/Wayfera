"use client";

import { Header, Footer } from '@/app/_components/layout';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('legal.privacy');

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
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.intro.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.intro.content')}
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.collect.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.collect.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.collect.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.use.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.use.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.use.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.cookies.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.cookies.content')}
                </p>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.sharing.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.sharing.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  {t.raw('sections.sharing.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.sharing.note')}
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.security.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.security.content')}
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.rights.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('sections.rights.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {t.raw('sections.rights.items').map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.children.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.children.content')}
                </p>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.international.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.international.content')}
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.updates.title')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sections.updates.content')}
                </p>
              </section>

              {/* Contact Us */}
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
