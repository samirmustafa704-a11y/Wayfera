"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/_components/ui/button';
import { cookies } from '@/app/_lib/storage';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = cookies.get('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    cookies.set('cookie-consent', 'accepted', {
      expires: 365,
      path: '/',
      secure: true,
      sameSite: 'lax',
    });
    setShowConsent(false);
  };

  const declineCookies = () => {
    cookies.set('cookie-consent', 'declined', {
      expires: 365,
      path: '/',
      secure: true,
      sameSite: 'lax',
    });
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="glass glass-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Cookie Consent
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We use cookies to enhance your browsing experience, serve personalized content, 
                      and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={acceptCookies}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600"
                  >
                    Decline
                  </Button>
                </div>

                <button
                  onClick={declineCookies}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
