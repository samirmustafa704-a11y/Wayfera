"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award, Users, Globe, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations();

  const values = [
    { icon: Award, title: 'Excellence', description: 'We strive for excellence in every journey we create' },
    { icon: Users, title: 'Customer First', description: 'Your satisfaction is our top priority' },
    { icon: Globe, title: 'Global Reach', description: 'Connecting you to destinations worldwide' },
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows' }
  ];

  return (
    <main className="overflow-hidden">
      <Header />
      
      <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Wayfera
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences around the world
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2010, Wayfera began with a simple mission: to make world-class travel experiences accessible to everyone. What started as a small team of passionate travelers has grown into a global network of travel experts.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Over the years, we've helped thousands of travelers discover amazing destinations, create lasting memories, and experience cultures from around the world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we continue to innovate and expand our services, always keeping our customers' dreams and satisfaction at the heart of everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3]"
            >
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-3xl shadow-2xl object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'Countries' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '500+', label: 'Destinations' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
