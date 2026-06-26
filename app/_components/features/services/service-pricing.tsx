"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Loader } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { PricingPlan } from '@/app/_types';

export function ServicePricing() {
  const locale = useLocale();
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch('/api/pricing-plans');
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

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
            Service Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the package that best fits your travel style and budget
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-gray-50 dark:bg-gray-800 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    /trip
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={`/${locale}/booking`} className="mt-auto">
                  <Button
                    className={`w-full h-12 ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

