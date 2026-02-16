/**
 * TranslationEngine Module
 * Applies translations to DOM elements and manages page attributes
 * Handles nested key resolution and missing translation keys gracefully
 */

const TranslationEngine = {
  /**
   * Retrieves a translation value using dot notation for nested keys
   * @param {string} key - Translation key (supports dot notation like "nav.home")
   * @param {string} lang - Language code ('ar' or 'en')
   * @returns {string} Translated text or the key itself as fallback
   */
  getTranslation(key, lang) {
    if (!translations || !translations[lang]) {
      console.warn(`Translation data not found for language: ${lang}`);
      return key;
    }

    // Split the key by dots to handle nested objects
    const keys = key.split('.');
    let value = translations[lang];

    // Traverse the nested structure
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing: ${key} for language ${lang}`);
        return key; // Fallback to key itself
      }
    }

    return value;
  },

  /**
   * Applies translations to all elements with data-i18n attributes
   * @param {string} lang - Language code ('ar' or 'en')
   */
  applyTranslations(lang) {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = this.getTranslation(key, lang);
        element.textContent = translation;
      }
    });
  },

  /**
   * Updates the page's lang and dir attributes based on selected language
   * @param {string} lang - Language code ('ar' or 'en')
   */
  updatePageAttributes(lang) {
    const htmlElement = document.documentElement;

    // Set the lang attribute
    htmlElement.setAttribute('lang', lang);

    // Set the dir attribute based on language
    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  }
};
