"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Camera, Shield, Loader } from 'lucide-react';
import { TravelTip } from '@/app/_types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Compass,
  Shield,
  Camera,
  Lightbulb,
};

export function TravelTips() {
  const [tips, setTips] = useState<TravelTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTips() {
      try {
        const response = await fetch('/api/travel-tips');
        const data = await response.json();
        setTips(data.sort((a: TravelTip, b: TravelTip) => a.order - b.order));
      } catch (error) {
        console.error('Error fetching travel tips:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTips();
  }, []);
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Travel Tips
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert advice to make your journey smooth and memorable
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = iconMap[tip.icon] || Lightbulb;
              return (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {tip.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

