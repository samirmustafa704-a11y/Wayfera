"use client";

import { motion } from 'framer-motion';
import { Shield, Award, Headphones, DollarSign, Globe, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your safety is our priority with 24/7 support and secure bookings'
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    description: 'We guarantee the best prices or we\'ll refund the difference'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our travel experts are available around the clock to assist you'
  },
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise charges or hidden costs'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access to 50+ countries and 500+ destinations worldwide'
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Tailored experiences designed around your preferences'
  }
];

export function WhyChooseUs() {
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
            Why Choose Wayfera?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

