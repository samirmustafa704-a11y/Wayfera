"use client";

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Travel Inspiration
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination guides
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 h-14 px-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                {isSubmitting ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-blue-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

