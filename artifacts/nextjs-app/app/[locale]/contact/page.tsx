"use client";

import { useEffect, useState } from 'react';
import { Header, Footer } from '@/app/_components/layout';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { Textarea } from '@/app/_components/ui/textarea';
import { Card, CardContent } from '@/app/_components/ui/card';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { ContactInfo } from '@/app/_types';

export default function ContactPage() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact-info');
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setIsSubmitting(false);
  };

  const contactDetailsItems = contactInfo ? [
    { icon: Mail, title: 'Email', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
    { icon: Phone, title: 'Phone', value: contactInfo.phone, link: `tel:${contactInfo.phone}` },
    { icon: MapPin, title: 'Address', value: contactInfo.address, link: '#' }
  ] : [];

  return (
    <main className="overflow-hidden">
      <Header />
      
      <section id="contact" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {!loading && (
                <div className="space-y-6">
                  {contactDetailsItems.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.link}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="flex items-start space-x-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              )}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-lg h-64 relative"
              >
                <Image
                  src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg"
                  alt="Office Location"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass glass-dark border-0 shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-lg font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-lg font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-lg font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-lg font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        required
                        placeholder="How can we help?"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-lg font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us more about your inquiry..."
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
