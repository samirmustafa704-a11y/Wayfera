"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Plane, 
  Building, 
  Users, 
  Headphones, 
  ArrowRight, 
  Check,
  Star,
  Quote
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'flight',
    icon: Plane,
    features: ['Best Price Guarantee', 'Flexible Booking', '24/7 Support', 'Instant Confirmation']
  },
  {
    id: 'hotel',
    icon: Building,
    features: ['Luxury Properties', 'Best Locations', 'Free Cancellation', 'Price Match']
  },
  {
    id: 'guide',
    icon: Users,
    features: ['Expert Local Guides', 'Personalized Tours', 'Cultural Insights', 'Safety First']
  },
  {
    id: 'support',
    icon: Headphones,
    features: ['24/7 Availability', 'Multilingual Support', 'Emergency Assistance', 'Travel Insurance']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Wayfera made our dream vacation to Greece absolutely perfect. Every detail was handled with care.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: 2,
    name: 'Ahmed Al-Rashid',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Outstanding service and attention to detail. The local guides were incredible and very knowledgeable.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'The best travel experience we\'ve ever had. Professional, reliable, and truly caring about our needs.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  }
];

export function ServicesSection() {
  const t = useTranslations('services');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="glass glass-dark p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-blue-600/30 rounded-2xl group-hover:scale-125 group-hover:border-blue-600/50 transition-all duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(`${service.id}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t(`${service.id}.description`)}
                  </p>

                  {/* More Info Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group/btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center">
                          <IconComponent className="w-6 h-6 mr-2 text-blue-600" />
                          {t(`${service.id}.title`)}
                        </DialogTitle>
                        <DialogDescription>
                          {t(`${service.id}.description`)}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Check className="w-5 h-5 text-green-500 mr-2" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Get Started
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Travelers Say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass glass-dark p-8 lg:p-12 rounded-3xl">
              <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6 mx-auto" />
              
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      sizes="64px"
                      className="rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}