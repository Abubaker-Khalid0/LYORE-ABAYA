/**
 * StorageManager Module
 * Manages language preference persistence using localStorage
 * Handles localStorage availability and error scenarios gracefully
 */

const StorageManager = {
  STORAGE_KEY: 'lyore_language',

  /**
   * Checks if localStorage is available in the current browser environment
   * Handles private browsing mode and disabled storage scenarios
   * @returns {boolean} true if localStorage is available, false otherwise
   */
  isAvailable() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * Saves the selected language preference to localStorage
   * @param {string} lang - Language code to save ('ar' or 'en')
   * @returns {boolean} true if save was successful, false otherwise
   */
  saveLanguage(lang) {
    if (!this.isAvailable()) {
      return false;
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, lang);
      return true;
    } catch (e) {
      console.warn('Failed to save language preference:', e);
      return false;
    }
  },

  /**
   * Retrieves the saved language preference from localStorage
   * @returns {string|null} Language code if found, null if not found or localStorage unavailable
   */
  getLanguage() {
    if (!this.isAvailable()) {
      return null;
    }

    try {
      return localStorage.getItem(this.STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to retrieve language preference:', e);
      return null;
    }
  }
};
