"use client";

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Plane, Mail, Phone, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { ContactInfo, SocialLink } from '@/app/_types';

const quickLinks = [
  { key: 'home', href: '#hero' },
  { key: 'destinations', href: '#destinations' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' }
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactRes, socialsRes] = await Promise.all([
          fetch('/api/contact-info'),
          fetch('/api/social-links')
        ]);
        
        const contact = await contactRes.json();
        const socials = await socialsRes.json();
        
        setContactInfo(contact);
        setSocialLinks(socials);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">Loading...</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Wayfera
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = (Icons as any)[social.icon] || Icons.Link;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              {contactInfo && (
                <>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2024 - {new Date().getFullYear()} Wayfera. {t('footer.rights')} Developed by{' '}
            <a 
              href="https://m-said-portfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold"
            >
              M.Said
            </a>
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href={`/${locale}/cookies`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}