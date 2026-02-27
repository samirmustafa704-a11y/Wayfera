"use client";

import { motion } from 'framer-motion';
import { Search, Calendar, CreditCard, Plane } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose Destination',
    description: 'Browse our curated destinations and select your dream location'
  },
  {
    icon: Calendar,
    title: 'Plan Your Trip',
    description: 'Work with our experts to customize your perfect itinerary'
  },
  {
    icon: CreditCard,
    title: 'Book & Pay',
    description: 'Secure your booking with flexible payment options'
  },
  {
    icon: Plane,
    title: 'Travel & Enjoy',
    description: 'Embark on your journey with 24/7 support throughout'
  }
];

export function ServiceProcess() {
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Four simple steps to your perfect vacation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-0 right-0 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

