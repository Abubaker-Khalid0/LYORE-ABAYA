/**
 * TranslationManager Module
 * Central orchestrator for the bilingual translation system
 * Coordinates StorageManager, TranslationEngine, and LanguageSwitcher
 * Ensures translations apply before page becomes visible
 */

const TranslationManager = {
  currentLanguage: null,
  defaultLanguage: 'ar',
  supportedLanguages: ['ar', 'en'],

  /**
   * Initializes the translation system on page load
   * Retrieves saved language or uses default
   * Applies initial translations before page becomes visible
   */
  init() {
    // Get saved language from localStorage or use default
    const savedLanguage = StorageManager.getLanguage();
    
    // Validate saved language
    if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
      this.currentLanguage = savedLanguage;
    } else {
      // If invalid or not found, use default language
      if (savedLanguage && !this.supportedLanguages.includes(savedLanguage)) {
        console.warn(`Invalid language code: ${savedLanguage}, defaulting to ${this.defaultLanguage}`);
        StorageManager.saveLanguage(this.defaultLanguage);
      }
      this.currentLanguage = this.defaultLanguage;
    }

    // Apply translations and update page attributes
    TranslationEngine.applyTranslations(this.currentLanguage);
    TranslationEngine.updatePageAttributes(this.currentLanguage);

    // Render language switcher and attach event listeners
    LanguageSwitcher.attachEventListeners((newLang) => {
      this.switchLanguage(newLang);
    });
    LanguageSwitcher.render(this.currentLanguage);
  },

  /**
   * Switches the active language and updates all components
   * @param {string} lang - Language code to switch to ('ar' or 'en')
   */
  switchLanguage(lang) {
    // Validate language code
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }

    // Update current language
    this.currentLanguage = lang;

    // Save to localStorage
    StorageManager.saveLanguage(lang);

    // Apply translations to DOM
    TranslationEngine.applyTranslations(lang);

    // Update page attributes (lang and dir)
    TranslationEngine.updatePageAttributes(lang);

    // Update language switcher button state
    LanguageSwitcher.updateButtonState(lang);
  },

  /**
   * Returns the currently active language code
   * @returns {string} Current language code ('ar' or 'en')
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }
};
