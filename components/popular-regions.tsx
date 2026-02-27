"use client";

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const regions = [
  {
    name: 'Europe',
    destinations: 120,
    image: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg',
    description: 'Historic cities, stunning architecture, and rich culture'
  },
  {
    name: 'Asia',
    destinations: 150,
    image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg',
    description: 'Ancient temples, modern cities, and diverse landscapes'
  },
  {
    name: 'Americas',
    destinations: 90,
    image: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg',
    description: 'Natural wonders, vibrant cultures, and adventure'
  },
  {
    name: 'Africa',
    destinations: 60,
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
    description: 'Wildlife safaris, deserts, and pristine beaches'
  },
  {
    name: 'Oceania',
    destinations: 45,
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg',
    description: 'Tropical islands, coral reefs, and unique wildlife'
  },
  {
    name: 'Middle East',
    destinations: 35,
    image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg',
    description: 'Ancient history, luxury resorts, and desert adventures'
  }
];

export default function PopularRegions() {
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
            Popular Regions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore destinations by region and find your next adventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={region.image}
                alt={region.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{region.destinations} Destinations</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{region.name}</h3>
                <p className="text-gray-200 mb-4">{region.description}</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
