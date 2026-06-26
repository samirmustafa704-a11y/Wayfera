"use client";

import { motion } from 'framer-motion';
import { Home, Search, MapPin, Compass } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[150px] lg:text-[200px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            404
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              rotate: [360, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Lost in Space
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Looks like this destination doesn&apos;t exist. Let&apos;s get you back on track to your next adventure!
          </p>
        </motion.div>

        {/* Animated Compass */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="mb-12"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Compass className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={`/${locale}`}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </Link>
          
          <Link href={`/${locale}/destinations`}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explore Destinations
            </Button>
          </Link>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Popular pages you might be looking for:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Book Now', href: '/booking' }
            ].map((link, index) => (
              <Link key={index} href={`/${locale}${link.href}`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
