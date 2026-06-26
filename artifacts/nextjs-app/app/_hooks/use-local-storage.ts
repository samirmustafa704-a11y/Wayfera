import { useState, useEffect, useCallback } from 'react';
import { localStorage } from '@/app/_lib/storage';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    const item = localStorage.get<T>(key);
    return item !== null ? item : initialValue;
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.set(key, valueToStore);
      
      // Dispatch custom event for cross-tab synchronization
      window.dispatchEvent(new CustomEvent('local-storage', { 
        detail: { key, value: valueToStore } 
      }));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      localStorage.remove(key);
      
      window.dispatchEvent(new CustomEvent('local-storage', { 
        detail: { key, value: null } 
      }));
    } catch (error) {
      console.error('Error removing localStorage:', error);
    }
  }, [key, initialValue]);

  // Listen for changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      if ('key' in e && e.key === key) {
        const newValue = localStorage.get<T>(key);
        if (newValue !== null) {
          setStoredValue(newValue);
        }
      } else if ('detail' in e && e.detail.key === key) {
        if (e.detail.value !== null) {
          setStoredValue(e.detail.value);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange as EventListener);
    window.addEventListener('local-storage', handleStorageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange as EventListener);
      window.removeEventListener('local-storage', handleStorageChange as EventListener);
    };
  }, [key]);

  return [storedValue, setValue, removeValue];
}
