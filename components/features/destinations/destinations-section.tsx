"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    category: 'beach',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1299,
    rating: 4.9,
    description: 'Stunning sunsets and white-washed buildings',
    duration: '7 days'
  },
  {
    id: 2,
    name: 'Swiss Alps, Switzerland',
    category: 'mountain',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: 1899,
    rating: 4.8,
    description: 'Breathtaking mountain views and skiing',
    duration: '5 days'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    category: 'city',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
    price: 1599,
    rating: 4.9,
    description: 'Modern city with rich cultural heritage',
    duration: '6 days'
  },
  {
    id: 4,
    name: 'Patagonia, Chile',
    category: 'adventure',
    image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg',
    price: 2199,
    rating: 4.7,
    description: 'Epic hiking and glacier adventures',
    duration: '10 days'
  },
  {
    id: 5,
    name: 'Maldives',
    category: 'beach',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
    price: 2499,
    rating: 4.9,
    description: 'Paradise beaches and luxury resorts',
    duration: '8 days'
  },
  {
    id: 6,
    name: 'Machu Picchu, Peru',
    category: 'adventure',
    image: 'https://images.pexels.com/photos/1519125/pexels-photo-1519125.jpeg',
    price: 1799,
    rating: 4.8,
    description: 'Ancient Incan ruins and trekking',
    duration: '7 days'
  }
];

const filters = ['all', 'beach', 'mountain', 'city', 'adventure'] as const;

export function DestinationsSection() {
  const t = useTranslations('destinations');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredDestinations = destinations.filter(dest => 
    activeFilter === 'all' || dest.category === activeFilter
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              {t(`filters.${filter}`)}
            </Button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(destination.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-200 ${
                        favorites.includes(destination.id) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} 
                    />
                  </motion.button>

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {destination.rating}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {destination.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {destination.name}
                    </h3>
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${destination.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                        / {destination.duration}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All Destinations
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}