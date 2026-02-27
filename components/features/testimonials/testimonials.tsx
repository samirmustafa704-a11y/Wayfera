"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'Wayfera made our honeymoon in Santorini absolutely magical! Every detail was perfect, from the hotel to the guided tours. Highly recommend!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    text: 'Best travel agency I\'ve ever worked with. The customer service was exceptional and they helped us customize our trip to Japan perfectly.'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 5,
    text: 'Our family trip to Bali was unforgettable! Wayfera took care of everything and we could just relax and enjoy. Will definitely book again!'
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Madrid, Spain',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 5,
    text: 'Professional, reliable, and affordable. Wayfera exceeded all our expectations for our anniversary trip to Paris. Thank you!'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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
                "{testimonial.text}"
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

