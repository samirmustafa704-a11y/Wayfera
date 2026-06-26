"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Loader } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import { Region } from '@/app/_types';

export function PopularRegions() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegions() {
      try {
        const response = await fetch('/api/regions');
        const data = await response.json();
        setRegions(data);
      } catch (error) {
        console.error('Error fetching regions:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRegions();
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
            Popular Regions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore destinations by region and find your next adventure
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
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
        )}
      </div>
    </section>
  );
}

