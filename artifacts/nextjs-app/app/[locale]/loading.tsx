"use client";

import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Plane */}
        <motion.div
          animate={{ 
            x: [-100, 100, -100],
            y: [-20, 20, -20],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Plane className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Preparing Your Journey
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-blue-600 rounded-full"
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            animate={{ x: [-256, 256] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
