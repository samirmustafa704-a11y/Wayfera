"use client";

import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/app/_components/ui/input';
import { Button } from '@/app/_components/ui/button';
import { useState } from 'react';

export function DestinationHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Explore the World
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12">
            Discover amazing destinations and create unforgettable memories
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="pl-12 h-14 border-0 text-lg"
                />
              </div>
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { number: '500+', label: 'Destinations' },
              { number: '50+', label: 'Countries' },
              { number: '10K+', label: 'Happy Travelers' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

