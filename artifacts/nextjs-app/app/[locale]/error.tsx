"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block relative"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-red-500/30 rounded-full blur-xl"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified!
          </p>
        </motion.div>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-left overflow-auto max-h-48"
          >
            <p className="text-sm font-mono text-red-600 dark:text-red-400">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={reset}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
          >
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </Button>
          
          <Link href={`/${locale}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If the problem persists, please contact our support team
          </p>
          <Link href={`/${locale}/contact`}>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
