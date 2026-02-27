"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Compass, Camera, Shield } from 'lucide-react';

const tips = [
  {
    icon: Compass,
    title: 'Plan Ahead',
    description: 'Research your destination, book accommodations early, and create a flexible itinerary'
  },
  {
    icon: Shield,
    title: 'Stay Safe',
    description: 'Keep copies of important documents, stay aware of your surroundings, and follow local guidelines'
  },
  {
    icon: Camera,
    title: 'Capture Memories',
    description: 'Take photos, keep a travel journal, and collect meaningful souvenirs from your journey'
  },
  {
    icon: Lightbulb,
    title: 'Travel Light',
    description: 'Pack essentials only, use packing cubes, and leave room for items you might buy'
  }
];

export function TravelTips() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <motion.div
                key={index}
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
      </div>
    </section>
  );
}

