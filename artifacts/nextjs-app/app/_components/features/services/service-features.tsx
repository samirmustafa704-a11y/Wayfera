"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Feature } from '@/app/_types';

export function ServiceFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch('/api/features');
        const data = await response.json();
        // Filter to get only service features (skip the first 6 which are "why choose us")
        setFeatures(data.slice(6, 18));
      } catch (error) {
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What&apos;s Included
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every package comes with comprehensive features to ensure your comfort
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? (Icons as any)[feature.icon] : Icons.Check;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

