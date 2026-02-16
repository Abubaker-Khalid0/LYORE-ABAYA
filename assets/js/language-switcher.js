/**
 * LanguageSwitcher Module
 * UI component for language selection
 * Renders a button in the header that allows users to switch between Arabic and English
 */

const LanguageSwitcher = {
  buttonElement: null,
  onLanguageChange: null, // Callback function to be set by TranslationManager

  /**
   * Creates and renders the language switcher button in the header
   * @param {string} currentLang - Current active language ('ar' or 'en')
   */
  render(currentLang) {
    // Create button element if it doesn't exist
    if (!this.buttonElement) {
      this.buttonElement = document.createElement('button');
      this.buttonElement.id = 'language-switcher-btn';
      this.buttonElement.className = 'text-[#6B1C23] font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity font-medium px-3 py-2 rounded-md hover:bg-[#6B1C23]/5';
      
      // Add click event listener
      this.buttonElement.addEventListener('click', () => {
        if (this.onLanguageChange) {
          // Toggle language: if current is 'ar', switch to 'en', and vice versa
          const newLang = currentLang === 'ar' ? 'en' : 'ar';
          this.onLanguageChange(newLang);
        }
      });

      // Find the header navigation and insert the button
      const header = document.querySelector('header');
      if (header) {
        // Insert before the CTA & Mobile Toggle div
        const ctaContainer = header.querySelector('.flex.items-center.gap-4');
        if (ctaContainer) {
          // Insert the button as the first child of the CTA container
          ctaContainer.insertBefore(this.buttonElement, ctaContainer.firstChild);
        }
      }
    }

    // Update button state to show the opposite language (the one to switch TO)
    this.updateButtonState(currentLang);
  },

  /**
   * Updates the button text and ARIA label to reflect the current language
   * Shows the opposite language (the language the user can switch TO)
   * @param {string} currentLang - Current active language ('ar' or 'en')
   */
  updateButtonState(currentLang) {
    if (!this.buttonElement) return;

    // Show the opposite language (the one to switch TO)
    if (currentLang === 'ar') {
      this.buttonElement.textContent = 'EN';
      this.buttonElement.setAttribute('aria-label', 'Switch to English');
      this.buttonElement.setAttribute('title', 'Switch to English');
    } else {
      this.buttonElement.textContent = 'عربي';
      this.buttonElement.setAttribute('aria-label', 'التبديل إلى العربية');
      this.buttonElement.setAttribute('title', 'التبديل إلى العربية');
    }
  },

  /**
   * Attaches event listeners to the language switcher button
   * @param {Function} callback - Function to call when language switch is triggered
   */
  attachEventListeners(callback) {
    this.onLanguageChange = callback;
  }
};

