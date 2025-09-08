// Local storage utilities with error handling

export const storage = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      if (typeof window === 'undefined') return defaultValue || null;
      
      const item = localStorage.getItem(key);
      if (!item) return defaultValue || null;
      
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Error reading from localStorage key "${key}":`, error);
      return defaultValue || null;
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error);
      return false;
    }
  },

  remove: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
      return false;
    }
  },

  clear: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Error clearing localStorage:', error);
      return false;
    }
  }
};

// Storage keys constants
export const STORAGE_KEYS = {
  CART: 'ecommerce_cart',
  USER: 'ecommerce_user',
  WISHLIST: 'ecommerce_wishlist',
  RECENT_SEARCHES: 'ecommerce_recent_searches',
  PREFERENCES: 'ecommerce_preferences'
} as const;