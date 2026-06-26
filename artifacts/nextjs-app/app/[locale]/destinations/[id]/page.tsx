"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header, Footer } from '@/app/_components/layout';
import { motion } from 'framer-motion';
import { Button } from '@/app/_components/ui/button';
import { MapPin, Star, Calendar, Users, Clock, Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface DestinationDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  duration: number;
  highlights: string[];
  featured: boolean;
  country: string;
  bestTime: string;
}

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  const [destination, setDestination] = useState<DestinationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`/api/destinations/${id}`);
        if (!response.ok) {
          throw new Error('Destination not found');
        }
        const data = await response.json();
        setDestination(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch destination');
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">Loading destination...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !destination) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const itinerary = Array.from({ length: destination.duration }, (_, i) => ({
    day: i + 1,
    title: `Day ${i + 1} Activity`,
    description: 'Experience local culture and attractions'
  }));

  const included = [
    'Accommodation as per itinerary',
    'Daily breakfast',
    'Airport transfers',
    'Guided tours',
    'Travel insurance'
  ];

  const rating = (Math.random() * 0.9 + 4.7).toFixed(1);
  const reviews = Math.floor(Math.random() * 300) + 100;

  return (
    <main className="overflow-hidden">
      <Header />
      
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase">
                  {destination.category}
                </span>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-white font-semibold">{rating}</span>
                  <span className="text-white/80 text-sm ml-1">({reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {destination.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{destination.duration} days</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Group tours available</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{destination.country}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {destination.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {itinerary.map((item) => (
                    <div key={item.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  What&apos;s Included
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <div className="space-y-3">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Starting from
                    </div>
                    <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                      ${destination.price}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 mt-1">
                      per person
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Duration</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {destination.duration} days
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Best Time</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {destination.bestTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600 dark:text-gray-400">Category</span>
                      <span className="font-semibold text-gray-900 dark:text-white capitalize">
                        {destination.category}
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6"
                    onClick={() => router.push(`/${params.locale}/booking`)}
                  >
                    Book Now
                  </Button>

                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Free cancellation up to 48 hours before departure
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
