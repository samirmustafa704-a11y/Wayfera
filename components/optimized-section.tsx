"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface OptimizedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function OptimizedSection({ children, className = '', delay = 0 }: OptimizedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }} // Load 200px before entering viewport
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
