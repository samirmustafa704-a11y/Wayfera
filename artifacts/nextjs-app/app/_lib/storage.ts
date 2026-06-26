/**
 * Storage utilities for localStorage, sessionStorage, and cookies
 */

// LocalStorage utilities
export const localStorage = {
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

// SessionStorage utilities
export const sessionStorage = {
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  },

  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return null;
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  },
};

// Cookie utilities
export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export const cookies = {
  set: (name: string, value: string, options: CookieOptions = {}): void => {
    if (typeof document === 'undefined') return;
    
    const {
      expires,
      path = '/',
      domain,
      secure = true,
      sameSite = 'lax',
    } = options;

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expires) {
      const expiresDate = typeof expires === 'number' 
        ? new Date(Date.now() + expires * 24 * 60 * 60 * 1000)
        : expires;
      cookieString += `; expires=${expiresDate.toUTCString()}`;
    }

    cookieString += `; path=${path}`;
    
    if (domain) {
      cookieString += `; domain=${domain}`;
    }
    
    if (secure) {
      cookieString += '; secure';
    }
    
    cookieString += `; samesite=${sameSite}`;

    document.cookie = cookieString;
  },

  get: (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    
    const nameEQ = encodeURIComponent(name) + '=';
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    
    return null;
  },

  remove: (name: string, options: Omit<CookieOptions, 'expires'> = {}): void => {
    cookies.set(name, '', { ...options, expires: new Date(0) });
  },

  getAll: (): Record<string, string> => {
    if (typeof document === 'undefined') return {};
    
    const cookiesObj: Record<string, string> = {};
    const cookiesArray = document.cookie.split(';');
    
    for (const cookie of cookiesArray) {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        cookiesObj[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    }
    
    return cookiesObj;
  },
};

// Cache utilities with expiration
export interface CacheItem<T> {
  value: T;
  expiry: number;
}

export const cache = {
  set: <T>(key: string, value: T, ttlMinutes: number = 60): void => {
    const expiry = Date.now() + ttlMinutes * 60 * 1000;
    const item: CacheItem<T> = { value, expiry };
    localStorage.set(key, item);
  },

  get: <T>(key: string): T | null => {
    const item = localStorage.get<CacheItem<T>>(key);
    
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      localStorage.remove(key);
      return null;
    }
    
    return item.value;
  },

  remove: (key: string): void => {
    localStorage.remove(key);
  },

  clear: (): void => {
    localStorage.clear();
  },

  isExpired: (key: string): boolean => {
    const item = localStorage.get<CacheItem<unknown>>(key);
    if (!item) return true;
    return Date.now() > item.expiry;
  },
};
