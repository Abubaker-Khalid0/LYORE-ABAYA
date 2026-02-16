# Implementation Plan: Bilingual Support

## Overview

This implementation plan breaks down the bilingual support feature into discrete coding tasks. The approach follows a bottom-up strategy: building core utilities first, then the translation engine, then UI components, and finally integrating everything across all pages. Each task builds on previous work to ensure incremental progress and early validation.

## Tasks

- [ ] 1. Create translation data structure and storage utilities
  - [x] 1.1 Create translations.js with complete Arabic and English translations
    - Define translations object with nested structure for all pages
    - Include all navigation, hero, product, footer, and page-specific content
    - Organize by page sections (nav, hero, products, footer, etc.)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9_
  
  - [x] 1.2 Implement StorageManager module in storage-manager.js
    - Create saveLanguage() function with error handling
    - Create getLanguage() function with null return for missing data
    - Create isAvailable() function to check localStorage support
    - Use 'lyore_language' as storage key
    - _Requirements: 3.1, 3.2, 3.4_
  
  - [ ]* 1.3 Write unit tests for StorageManager
    - Test successful save and retrieve operations
    - Test localStorage unavailable scenario (private browsing)
    - Test invalid data handling
    - _Requirements: 3.1, 3.2, 3.4_
  
- [x] 2. Implement translation engine core functionality
  - [x] 2.1 Create TranslationEngine module in translation-engine.js
    - Implement getTranslation() function with nested key resolution (dot notation)
    - Implement applyTranslations() function to update all data-i18n elements
    - Implement updatePageAttributes() to set lang and dir attributes
    - Handle missing translation keys gracefully (return key as fallback)
    - _Requirements: 1.2, 1.3, 1.4, 6.1, 6.2, 9.3, 9.4_
  
  - [ ]* 2.2 Write unit tests for TranslationEngine
    - Test nested key resolution with various depths
    - Test missing key fallback behavior
    - Test DOM element updates
    - Test attribute updates (lang, dir)
    - _Requirements: 1.2, 1.3, 1.4, 9.3, 9.4_

- [x] 3. Build language switcher UI component
  - [x] 3.1 Create LanguageSwitcher module in language-switcher.js
    - Implement render() function to create button element
    - Implement updateButtonState() to show opposite language
    - Add click event listener to trigger language switch
    - Style button to match existing header design
    - Add ARIA labels for accessibility
    - _Requirements: 1.1, 1.2, 1.5_
  
  - [ ]* 3.2 Write unit tests for LanguageSwitcher
    - Test button rendering in header
    - Test button state updates on language change
    - Test click event triggers callback
    - Test accessibility attributes
    - _Requirements: 1.1, 1.2_

- [x] 4. Create translation manager orchestrator
  - [x] 4.1 Implement TranslationManager module in translation-manager.js
    - Create init() function to initialize on DOMContentLoaded
    - Implement switchLanguage() function to coordinate all updates
    - Implement getCurrentLanguage() function
    - Set default language to Arabic
    - Coordinate StorageManager, TranslationEngine, and LanguageSwitcher
    - Ensure translations apply before page becomes visible
    - _Requirements: 2.1, 2.2, 2.3, 8.2_
  
  - [ ]* 4.2 Write unit tests for TranslationManager
    - Test initialization with default language
    - Test initialization with saved language
    - Test switchLanguage() updates all components
    - Test coordination between modules
    - _Requirements: 2.1, 2.2, 2.3_
  
- [x] 5. Checkpoint - Ensure core translation system works
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Annotate HTML pages with data-i18n attributes
  - [x] 6.1 Add data-i18n attributes to index.html
    - Add attributes to navigation links
    - Add attributes to hero section (title, subtitle, description, CTA)
    - Add attributes to product section headings and buttons
    - Add attributes to footer content
    - Add attributes to WhatsApp button and link message
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  
  - [x] 6.2 Add data-i18n attributes to collections.html
    - Add attributes to navigation links
    - Add attributes to page title and description
    - Add attributes to product cards (names, prices, buttons)
    - Add attributes to footer content
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [x] 6.3 Add data-i18n attributes to product-detail.html
    - Add attributes to navigation links
    - Add attributes to product details (name, description, price, size options)
    - Add attributes to buttons (add to cart, WhatsApp)
    - Add attributes to footer content
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  
  - [x] 6.4 Add data-i18n attributes to size-guide.html
    - Add attributes to navigation links
    - Add attributes to page title and instructions
    - Add attributes to size chart labels and measurements
    - Add attributes to footer content
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.9_
  
  - [x] 6.5 Add data-i18n attributes to returns-policy.html
    - Add attributes to navigation links
    - Add attributes to page title and policy sections
    - Add attributes to policy content paragraphs
    - Add attributes to footer content
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.9_
  
  - [x] 6.6 Add data-i18n attributes to contact.html
    - Add attributes to navigation links
    - Add attributes to page title and description
    - Add attributes to form labels and placeholders
    - Add attributes to contact information labels
    - Add attributes to footer content
    - Add language switcher container div in header
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.8_

- [x] 7. Add script includes to all HTML pages
  - [x] 7.1 Add script tags to index.html head section
    - Include translations.js
    - Include storage-manager.js
    - Include translation-engine.js
    - Include language-switcher.js
    - Include translation-manager.js
    - Ensure correct loading order
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.2 Add script tags to collections.html head section
    - Include all translation system scripts in correct order
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.3 Add script tags to product-detail.html head section
    - Include all translation system scripts in correct order
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.4 Add script tags to size-guide.html head section
    - Include all translation system scripts in correct order
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.5 Add script tags to returns-policy.html head section
    - Include all translation system scripts in correct order
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.6 Add script tags to contact.html head section
    - Include all translation system scripts in correct order
    - _Requirements: 7.1, 7.2_

- [x] 8. Initialize translation system in main.js
  - [x] 8.1 Update main.js to initialize TranslationManager
    - Call TranslationManager.init() on DOMContentLoaded
    - Ensure initialization happens before other scripts
    - Remove or update existing mobile menu code if needed
    - _Requirements: 2.1, 2.2, 2.3, 8.2_

- [x] 9. Add RTL/LTR CSS support
  - [x] 9.1 Add CSS logical properties for RTL support
    - Update existing CSS to use logical properties where needed
    - Add RTL-specific overrides if necessary
    - Test layout in both directions
    - Ensure design, colors, and hierarchy are preserved
    - _Requirements: 6.3, 6.4_

- [x] 10. Checkpoint - Test complete integration
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Cross-page integration testing
  - [ ]* 11.1 Write integration tests for page navigation
    - Test language persists when navigating between pages
    - Test language switcher works on all pages
    - Test localStorage maintains state across navigation
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_
  
- [-] 12. Final validation and polish
  - [ ] 12.1 Verify all pages work correctly
    - Test index.html with language switching
    - Test collections.html with language switching
    - Test product-detail.html with language switching
    - Test size-guide.html with language switching
    - Test returns-policy.html with language switching
    - Test contact.html with language switching
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_
  
  - [ ] 12.2 Verify WhatsApp links update correctly
    - Test WhatsApp message parameter changes with language
    - Verify Arabic and English messages are properly encoded
    - _Requirements: 4.7_
  
  - [ ] 12.3 Test error handling scenarios
    - Test with localStorage disabled
    - Test with missing translation keys
    - Test with invalid language codes
    - Verify graceful degradation in all cases
    - _Requirements: 3.4, 9.4_

- [ ] 13. Final checkpoint - Complete system validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation follows a bottom-up approach: utilities → engine → UI → integration
- All JavaScript modules use ES6+ syntax and can be transpiled if needed for older browsers
