"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
};

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials')
        if (res.ok) {
          const data = await res.json()
          setTestimonials(data)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading || testimonials.length === 0) {
    return null
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
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real experiences from real travelers who trusted us with their journeys
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
