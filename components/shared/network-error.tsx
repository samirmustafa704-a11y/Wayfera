"use client";

import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NetworkErrorProps {
  onRetry?: () => void;
  message?: string;
}

export function NetworkError({ 
  onRetry, 
  message = "Unable to connect to the server. Please check your internet connection." 
}: NetworkErrorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-6"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full flex items-center justify-center">
          <WifiOff className="w-12 h-12 text-orange-600 dark:text-orange-400" />
        </div>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Connection Lost
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        {message}
      </p>

      {onRetry && (
        <Button
          onClick={onRetry}
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retry Connection
        </Button>
      )}
    </motion.div>
  );
}
