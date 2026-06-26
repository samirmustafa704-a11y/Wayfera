import { useState, useEffect, useCallback } from 'react';
import { cache } from '@/app/_lib/storage';

export function useCache<T>(
  key: string,
  initialValue: T,
  ttlMinutes: number = 60
): [T, (value: T | ((val: T) => T)) => void, () => void, boolean] {
  const [cachedValue, setCachedValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    const item = cache.get<T>(key);
    return item !== null ? item : initialValue;
  });

  const [isExpired, setIsExpired] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return cache.isExpired(key);
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(cachedValue) : value;
      setCachedValue(valueToStore);
      cache.set(key, valueToStore, ttlMinutes);
      setIsExpired(false);
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  }, [key, cachedValue, ttlMinutes]);

  const removeValue = useCallback(() => {
    try {
      setCachedValue(initialValue);
      cache.remove(key);
      setIsExpired(true);
    } catch (error) {
      console.error('Error removing cache:', error);
    }
  }, [key, initialValue]);

  // Check expiration periodically
  useEffect(() => {
    const checkExpiration = () => {
      const expired = cache.isExpired(key);
      setIsExpired(expired);
      
      if (expired) {
        setCachedValue(initialValue);
      }
    };

    const interval = setInterval(checkExpiration, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [key, initialValue]);

  return [cachedValue, setValue, removeValue, isExpired];
}
