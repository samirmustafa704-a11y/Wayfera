"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);
  const fullText = t('title');

  useEffect(() => {
    setMounted(true);
    
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setTypewriterText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
        timeout = setTimeout(typeWriter, 100);
      }
    };

    const startTyping = setTimeout(typeWriter, 1000);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  const scrollToDestinations = () => {
    router.push(`/${locale}/destinations`);
  };

  const scrollToBooking = () => {
    router.push(`/${locale}/booking`);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg')] bg-cover bg-center opacity-10"></div>
      
      {/* Floating Elements - Optimized */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Reduced to 5 large orbs for better performance */}
          {[...Array(5)].map((_, i) => {
            const size = [80, 120, 100, 140, 110][i];
            const duration = [18, 22, 20, 24, 19][i];
            const delay = i * 0.8;
            const startX = [15, 75, 35, 85, 50][i];
            const startY = [25, 75, 50, 35, 80][i];
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: size,
                  height: size,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  background: i % 2 === 0 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.12))'
                    : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
                  filter: 'blur(50px)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.7, 0.5, 0.7, 0],
                  scale: [0.9, 1.1, 1, 1.05, 0.95],
                  x: [0, Math.sin(i) * 60, 0],
                  y: [0, Math.cos(i) * 60, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Typewriter Title */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="inline-block min-h-[1.2em]">
                  {typewriterText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                    |
                  </span>
                </span>
              </h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {t('subtitle')}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {t('description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToDestinations}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {t('cta')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToBooking}
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {t('book')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                { number: '50+', label: 'Countries' },
                { number: '1000+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animation/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image - Optimized with Next.js Image */}
              <div className="relative z-10 aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg"
                  alt="Travel Adventure"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-3xl shadow-2xl object-cover"
                  priority
                  quality={85}
                />
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass glass-dark p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-2xl">✈️</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-white">Book Flight</div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 glass glass-dark p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-2xl">🏨</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-white">Find Hotels</div>
                </motion.div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}