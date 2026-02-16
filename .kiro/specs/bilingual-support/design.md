# Design Document: Bilingual Support

## Overview

This design specifies a client-side bilingual translation system for the LYORE ABAYA static HTML website. The system enables seamless switching between Arabic (RTL) and English (LTR) languages using JavaScript, localStorage for persistence, and a data-driven translation approach. The solution maintains the existing design aesthetic while adapting layout direction and content dynamically.

### Key Design Principles

- **Static-first**: No backend dependencies, pure client-side implementation
- **Performance**: Translations applied before page render to prevent content flashing
- **Maintainability**: Centralized translation data structure for easy updates
- **Graceful degradation**: Fallback mechanisms for missing translations or localStorage unavailability
- **Accessibility**: Proper lang and dir attributes for screen readers and browsers

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                         HTML Pages                          │
│  (index, collections, product-detail, size-guide, etc.)     │
│                    [data-i18n attributes]                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                   Translation Manager                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Language   │  │  Translation │  │   Storage    │     │
│  │   Switcher   │  │    Engine    │  │   Manager    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                    Translation Data                          │
│              (JavaScript object with AR/EN keys)             │
└─────────────────────────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                      localStorage                            │
│                  (persisted language state)                  │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

1. **Translation Manager**: Core orchestrator that initializes the system, coordinates between components
2. **Language Switcher**: UI component (button) that triggers language changes
3. **Translation Engine**: Applies translations to DOM elements based on data-i18n attributes
4. **Storage Manager**: Handles localStorage operations for language persistence
5. **Translation Data**: Structured object containing all text translations

### Execution Flow

```
Page Load
    ↓
Initialize Translation Manager
    ↓
Check localStorage for saved language
    ↓
    ├─ Found → Load saved language
    └─ Not Found → Default to Arabic
    ↓
Apply translations to DOM
    ↓
Set dir and lang attributes
    ↓
Render page (user sees translated content)
    ↓
User clicks Language Switcher
    ↓
Toggle language (AR ↔ EN)
    ↓
Save to localStorage
    ↓
Apply new translations to DOM
    ↓
Update dir and lang attributes
```

## Components and Interfaces

### 1. Translation Manager Module

**Purpose**: Central controller for the translation system

**Interface**:
```javascript
const TranslationManager = {
  currentLanguage: string,  // 'ar' or 'en'
  defaultLanguage: string,  // 'ar'
  
  init(): void
  // Initializes the translation system on page load
  // Retrieves saved language or uses default
  // Applies initial translations
  
  switchLanguage(lang: string): void
  // Changes the active language
  // Updates DOM, attributes, and localStorage
  
  getCurrentLanguage(): string
  // Returns the currently active language code
}
```

**Behavior**:
- Executes on DOMContentLoaded event
- Coordinates all translation operations
- Ensures translations apply before page becomes visible

### 2. Translation Engine

**Purpose**: Applies translations to DOM elements

**Interface**:
```javascript
const TranslationEngine = {
  applyTranslations(lang: string): void
  // Finds all elements with data-i18n attributes
  // Replaces text content with translated values
  // Handles nested translation keys
  
  translateElement(element: HTMLElement, key: string, lang: string): void
  // Translates a single element
  // Looks up translation key in data structure
  // Updates element's textContent or innerHTML
  
  updatePageAttributes(lang: string): void
  // Updates html element's lang attribute
  // Updates html element's dir attribute (rtl/ltr)
  // Updates document title if needed
}
```

**Behavior**:
- Traverses DOM to find translatable elements
- Uses data-i18n attribute values as translation keys
- Supports dot notation for nested keys (e.g., "nav.home")
- Handles missing translations gracefully (shows key or fallback)

### 3. Storage Manager

**Purpose**: Manages language preference persistence

**Interface**:
```javascript
const StorageManager = {
  STORAGE_KEY: string,  // 'lyore_language'
  
  saveLanguage(lang: string): boolean
  // Saves language preference to localStorage
  // Returns true if successful, false otherwise
  
  getLanguage(): string | null
  // Retrieves saved language from localStorage
  // Returns null if not found or localStorage unavailable
  
  isAvailable(): boolean
  // Checks if localStorage is available
  // Handles private browsing mode or disabled storage
}
```

**Behavior**:
- Wraps localStorage operations with error handling
- Gracefully degrades if localStorage is unavailable
- Uses consistent key naming convention

### 4. Language Switcher Component

**Purpose**: UI control for language selection

**Interface**:
```javascript
const LanguageSwitcher = {
  buttonElement: HTMLElement,
  
  render(currentLang: string): void
  // Creates or updates the language switcher button
  // Shows current language and toggle option
  // Adds to header navigation
  
  attachEventListeners(): void
  // Binds click event to trigger language switch
  // Provides visual feedback on interaction
  
  updateButtonState(lang: string): void
  // Updates button text/icon to reflect current language
  // Example: "EN" when Arabic is active, "عربي" when English is active
}
```

**Behavior**:
- Renders as a button in the header (next to WhatsApp CTA)
- Shows the opposite language (the one to switch TO)
- Provides immediate visual feedback on click
- Accessible with proper ARIA labels

### 5. Translation Data Structure

**Purpose**: Centralized storage for all translations

**Structure**:
```javascript
const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      collection: "المجموعة",
      sizeGuide: "دليل المقاسات",
      shippingReturn: "الشحن والإرجاع",
      contact: "اتصل بنا"
    },
    hero: {
      title: "العصر الجديد",
      subtitle: "للحشمة",
      description: "اكتشفي عبايات فاخرة...",
      cta: "تسوقي المجموعة الجديدة"
    },
    // ... more sections
  },
  en: {
    nav: {
      home: "Home",
      collection: "Collection",
      sizeGuide: "Size Guide",
      shippingReturn: "Shipping & Return",
      contact: "Contact"
    },
    hero: {
      title: "The New Era",
      subtitle: "of Modesty",
      description: "Discover high-end luxury abayas...",
      cta: "Shop New Collection"
    },
    // ... more sections
  }
};
```

**Organization**:
- Top-level keys: language codes ('ar', 'en')
- Second-level keys: page sections or components
- Nested structure for related content
- Consistent key naming across languages

## Data Models

### Language State Model

```javascript
{
  code: string,        // 'ar' or 'en'
  direction: string,   // 'rtl' or 'ltr'
  name: string,        // 'العربية' or 'English'
  isDefault: boolean   // true for Arabic
}
```

### Translation Entry Model

```javascript
{
  key: string,         // Unique identifier (e.g., "nav.home")
  ar: string,          // Arabic translation
  en: string,          // English translation
  context?: string     // Optional context for translators
}
```

### DOM Element Annotation

HTML elements are annotated with data attributes:

```html
<!-- Simple translation -->
<a href="index.html" data-i18n="nav.home">Home</a>

<!-- Translation with dynamic content -->
<button data-i18n="cta.whatsapp">Order via WhatsApp</button>

<!-- Multiple translatable parts -->
<h1>
  <span data-i18n="hero.title">The New Era</span>
  <span data-i18n="hero.subtitle">of Modesty</span>
</h1>
```

### Storage Schema

localStorage entry:
```javascript
{
  key: "lyore_language",
  value: "ar" | "en"
}
```

### Configuration Model

```javascript
const config = {
  defaultLanguage: 'ar',
  supportedLanguages: ['ar', 'en'],
  storageKey: 'lyore_language',
  languageMap: {
    ar: { dir: 'rtl', name: 'العربية' },
    en: { dir: 'ltr', name: 'English' }
  }
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Complete Content Translation

*For any* page with elements marked with data-i18n attributes, when the language is switched, all marked elements should have their text content updated to match the selected language.

**Validates: Requirements 1.2, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9**

### Property 2: Direction and Language Attribute Consistency

*For any* language selection, the html element's dir attribute should be "rtl" when Arabic is selected and "ltr" when English is selected, and the lang attribute should match the language code ("ar" or "en").

**Validates: Requirements 1.3, 1.4, 6.1, 6.2**

### Property 3: Language Persistence Round-Trip

*For any* valid language selection (Arabic or English), if the language is saved to localStorage and the page is reloaded, the Translation_System should restore and apply that same language.

**Validates: Requirements 3.1, 3.2, 3.3**

### Property 4: Cross-Page Language Persistence

*For any* sequence of page navigations within the website, the selected language should remain consistent across all pages without requiring re-selection.

**Validates: Requirements 5.7**

### Property 5: Translation Performance

*For any* language switch operation, all content updates should complete within 500 milliseconds from the moment the Language_Switcher is clicked.

**Validates: Requirements 8.1**

### Property 6: Pre-Render Translation Application

*For any* page load, translations should be applied to the DOM during the DOMContentLoaded phase before the page becomes visible to the user, preventing any flash of untranslated content.

**Validates: Requirements 8.2**

### Property 7: Nested Translation Key Resolution

*For any* translation key using dot notation (e.g., "nav.home", "hero.title"), the Translation_Engine should correctly resolve the nested path in the translation data structure and return the appropriate translated string.

**Validates: Requirements 9.3**

### Property 8: Missing Translation Graceful Degradation

*For any* translation key that does not exist in the translation data structure, the Translation_Engine should display the key itself or a fallback value without throwing errors or breaking page functionality.

**Validates: Requirements 9.4**

## Error Handling

### localStorage Unavailability

**Scenario**: User's browser has localStorage disabled or is in private browsing mode

**Handling**:
- StorageManager.isAvailable() checks for localStorage support
- If unavailable, system defaults to Arabic on every page load
- No errors thrown; system continues to function without persistence
- User can still switch languages within a session, but preference won't persist

**Implementation**:
```javascript
try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
  return true;
} catch (e) {
  return false;
}
```

### Missing Translation Keys

**Scenario**: A data-i18n attribute references a key that doesn't exist in translations

**Handling**:
- Translation_Engine checks if key exists before applying
- If missing, displays the key itself (e.g., "nav.missingKey")
- Logs warning to console for developers
- Page continues to function normally
- Prevents blank content or broken UI

**Implementation**:
```javascript
function getTranslation(key, lang) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      console.warn(`Translation missing: ${key} for language ${lang}`);
      return key; // Fallback to key itself
    }
  }
  
  return value;
}
```

### Invalid Language Code

**Scenario**: localStorage contains an invalid or unsupported language code

**Handling**:
- Validate retrieved language code against supported languages array
- If invalid, default to Arabic
- Clear invalid value from localStorage
- Log warning for debugging

**Implementation**:
```javascript
const savedLang = StorageManager.getLanguage();
if (savedLang && !config.supportedLanguages.includes(savedLang)) {
  console.warn(`Invalid language code: ${savedLang}, defaulting to ${config.defaultLanguage}`);
  StorageManager.saveLanguage(config.defaultLanguage);
  return config.defaultLanguage;
}
```

### DOM Element Not Found

**Scenario**: Translation system tries to update an element that doesn't exist

**Handling**:
- Check element existence before attempting translation
- Skip missing elements without throwing errors
- Log debug information if needed
- Continue processing remaining elements

### Network Failures (Future Consideration)

**Scenario**: If translations are moved to external JSON files

**Handling**:
- Implement retry logic with exponential backoff
- Cache translations in memory after first load
- Provide inline fallback translations in JavaScript
- Show user-friendly error message if all retries fail

## Testing Strategy

### Dual Testing Approach

The bilingual support feature will be validated through both unit tests and property-based tests, providing comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs
- Together: Comprehensive coverage (unit tests catch concrete bugs, property tests verify general correctness)

### Unit Testing

Unit tests will focus on:

1. **Specific Examples**:
   - Default language is Arabic on first visit
   - Language switcher button exists on each page (index, collections, product-detail, size-guide, returns-policy, contact)
   - Switching from Arabic to English updates specific known elements
   - WhatsApp link message parameter changes with language

2. **Edge Cases**:
   - localStorage disabled or unavailable (private browsing)
   - Missing translation keys display fallback
   - Invalid language code in localStorage defaults to Arabic
   - Empty translation data structure

3. **Integration Points**:
   - Language switcher button click triggers translation
   - DOM mutations are applied correctly
   - localStorage read/write operations
   - Page navigation maintains language state

4. **Error Conditions**:
   - Graceful handling of missing DOM elements
   - Invalid translation key formats
   - Corrupted localStorage data

### Property-Based Testing

Property tests will use **fast-check** (JavaScript property-based testing library) to verify universal properties:

1. **Configuration**: Each property test will run a minimum of 100 iterations
2. **Tagging**: Each test will include a comment referencing the design property
3. **Format**: `// Feature: bilingual-support, Property {number}: {property_text}`

**Property Test Examples**:

```javascript
// Feature: bilingual-support, Property 1: Complete Content Translation
fc.assert(
  fc.property(
    fc.array(fc.record({ key: fc.string(), ar: fc.string(), en: fc.string() })),
    fc.constantFrom('ar', 'en'),
    (translationData, targetLang) => {
      // Generate DOM with data-i18n attributes
      // Switch to targetLang
      // Verify all elements updated to targetLang
      return allElementsTranslated(targetLang);
    }
  ),
  { numRuns: 100 }
);

// Feature: bilingual-support, Property 3: Language Persistence Round-Trip
fc.assert(
  fc.property(
    fc.constantFrom('ar', 'en'),
    (language) => {
      // Save language to localStorage
      StorageManager.saveLanguage(language);
      // Simulate page reload
      const retrieved = StorageManager.getLanguage();
      // Verify same language retrieved
      return retrieved === language;
    }
  ),
  { numRuns: 100 }
);

// Feature: bilingual-support, Property 7: Nested Translation Key Resolution
fc.assert(
  fc.property(
    fc.array(fc.string(), { minLength: 1, maxLength: 4 }),
    fc.string(),
    (keyPath, value) => {
      // Create nested translation structure
      const translations = buildNestedObject(keyPath, value);
      // Resolve using dot notation
      const resolved = getTranslation(keyPath.join('.'), 'en');
      // Verify correct value retrieved
      return resolved === value;
    }
  ),
  { numRuns: 100 }
);
```

### Testing Tools

- **Test Framework**: Jest or Mocha for unit tests
- **Property Testing**: fast-check for property-based tests
- **DOM Testing**: jsdom for simulating browser environment
- **Assertions**: Chai or Jest assertions
- **Coverage**: Istanbul/nyc for code coverage reporting

### Test Organization

```
tests/
├── unit/
│   ├── translation-manager.test.js
│   ├── translation-engine.test.js
│   ├── storage-manager.test.js
│   └── language-switcher.test.js
├── property/
│   ├── translation-completeness.property.test.js
│   ├── persistence.property.test.js
│   ├── performance.property.test.js
│   └── error-handling.property.test.js
└── integration/
    ├── page-navigation.test.js
    └── end-to-end.test.js
```

### Manual Testing Checklist

While automated tests provide comprehensive coverage, manual testing should verify:

1. Visual appearance in both RTL and LTR modes
2. Layout integrity across different screen sizes
3. Accessibility with screen readers in both languages
4. Browser compatibility (Chrome, Firefox, Safari, Edge)
5. Mobile device testing (iOS Safari, Android Chrome)
6. Language switcher button visibility and usability
7. Smooth transitions without visual glitches

## Implementation Notes

### File Structure

```
assets/
├── js/
│   ├── main.js                    (existing file - add initialization)
│   ├── translation-manager.js     (new - core orchestrator)
│   ├── translation-engine.js      (new - DOM manipulation)
│   ├── storage-manager.js         (new - localStorage handling)
│   ├── language-switcher.js       (new - UI component)
│   └── translations.js            (new - translation data)
```

### HTML Modifications

Each HTML page will need:

1. **Script includes** in `<head>`:
```html
<script src="assets/js/translations.js"></script>
<script src="assets/js/storage-manager.js"></script>
<script src="assets/js/translation-engine.js"></script>
<script src="assets/js/language-switcher.js"></script>
<script src="assets/js/translation-manager.js"></script>
```

2. **data-i18n attributes** on translatable elements:
```html
<a href="index.html" data-i18n="nav.home">Home</a>
<h1 data-i18n="hero.title">The New Era of Modesty</h1>
<button data-i18n="cta.whatsapp">Order via WhatsApp</button>
```

3. **Language switcher placeholder** in header:
```html
<div id="language-switcher-container"></div>
```

### Performance Considerations

- **Minimize DOM queries**: Cache element references where possible
- **Batch DOM updates**: Use DocumentFragment for multiple updates
- **Lazy loading**: Only load translations for current page if data grows large
- **Debouncing**: Prevent rapid language switching from causing issues
- **Early execution**: Run translation script before other scripts to prevent FOUC

### Accessibility Considerations

- **lang attribute**: Properly set for screen readers
- **dir attribute**: Ensures correct text direction for assistive technologies
- **ARIA labels**: Add to language switcher button
- **Keyboard navigation**: Ensure language switcher is keyboard accessible
- **Focus management**: Maintain focus after language switch

### Browser Compatibility

- **localStorage**: Supported in all modern browsers (IE8+)
- **ES6 features**: Use transpilation if supporting older browsers
- **CSS logical properties**: Consider for better RTL support
- **Flexbox/Grid**: Already used in site, works well with RTL

### Future Enhancements

- **Additional languages**: Architecture supports easy addition of more languages
- **Dynamic content**: API integration for user-generated content translation
- **Translation management**: Admin interface for updating translations
- **A/B testing**: Track language preference analytics
- **SEO optimization**: Separate URLs for different languages (e.g., /ar/, /en/)
