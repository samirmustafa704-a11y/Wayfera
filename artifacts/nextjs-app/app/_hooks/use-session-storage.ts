import { useState, useEffect, useCallback } from 'react';
import { sessionStorage } from '@/app/_lib/storage';

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    const item = sessionStorage.get<T>(key);
    return item !== null ? item : initialValue;
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      sessionStorage.set(key, valueToStore);
    } catch (error) {
      console.error('Error setting sessionStorage:', error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      sessionStorage.remove(key);
    } catch (error) {
      console.error('Error removing sessionStorage:', error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
