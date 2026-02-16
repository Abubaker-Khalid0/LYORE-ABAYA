# Design Document: Product Detail Mobile Improvements

## Overview

This design implements responsive mobile improvements for the product-detail.html page using Tailwind CSS utility classes. The solution follows a mobile-first approach, applying base styles for mobile devices and using the `md:` breakpoint prefix (768px) to restore desktop layouts. All changes are achieved through Tailwind CSS class modifications without introducing custom CSS or JavaScript changes.

The core strategy involves:
1. Removing grid layouts on mobile and restoring them at desktop breakpoints
2. Converting the sticky WhatsApp button to fixed positioning on mobile only
3. Adjusting spacing, typography, and touch target sizes for mobile usability
4. Ensuring proper container constraints to prevent horizontal overflow

## Architecture

### Responsive Design Strategy

The implementation uses Tailwind's mobile-first responsive design pattern:

```
Base classes → Mobile styles (< 768px)
md: prefix → Desktop styles (≥ 768px)
```

### Component Hierarchy

```
Product Detail Page
├── Header (unchanged)
├── Breadcrumbs (unchanged)
├── Main Product Section
│   ├── Image Gallery (responsive layout)
│   │   ├── Main Image (full width mobile)
│   │   └── Thumbnails (horizontal scroll mobile)
│   └── Product Info Section (stacked mobile)
│       ├── Product Details
│       ├── Size Selection (larger touch targets)
│       └── WhatsApp Button (fixed bottom mobile)
├── Related Products Section (unchanged)
└── Footer (unchanged)
```

### Breakpoint Strategy

- **Mobile**: Base styles, no prefix (< 768px)
- **Desktop**: `md:` prefix (≥ 768px)
- **Large Desktop**: `lg:` prefix (≥ 1024px) - preserve existing usage

## Components and Interfaces

### 1. Main Product Section Container

**Current Implementation:**
```html
<div class="grid md:grid-cols-2 gap-12 items-start">
```

**Mobile Issue:** The grid layout doesn't stack properly on mobile.

**Solution:**
```html
<div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-start">
```

**Changes:**
- Base: `flex flex-col` - Stacks children vertically on mobile
- Desktop: `md:grid md:grid-cols-2` - Restores two-column grid at 768px+
- Spacing: `gap-6` mobile, `md:gap-12` desktop - Reduces gap on mobile for better space usage

### 2. Image Gallery Container

**Current Implementation:**
```html
<div class="space-y-4">
  <!-- Main Image -->
  <div class="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md bg-gray-100">
    <img id="mainImage" src="..." alt="..." class="w-full h-full object-cover ...">
  </div>
  
  <!-- Thumbnails -->
  <div class="grid grid-cols-4 md:grid-cols-5 gap-3">
    <img class="thumbnail ..." src="...">
    <!-- 5 thumbnails -->
  </div>
</div>
```

**Mobile Issues:**
- Thumbnails in 4-column grid are too small on mobile
- Grid can cause layout issues on very small screens

**Solution:**
```html
<div class="space-y-3 md:space-y-4">
  <!-- Main Image - unchanged -->
  <div class="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md bg-gray-100">
    <img id="mainImage" src="..." alt="..." class="w-full h-full object-cover ...">
  </div>
  
  <!-- Thumbnails - horizontal scroll on mobile -->
  <div class="flex gap-2 overflow-x-auto md:grid md:grid-cols-5 md:gap-3 pb-2 md:pb-0 -mx-1 px-1">
    <img class="thumbnail flex-shrink-0 w-20 md:w-full ..." src="...">
    <!-- 5 thumbnails -->
  </div>
</div>
```

**Changes:**
- Base: `flex gap-2 overflow-x-auto` - Horizontal scrollable row on mobile
- Desktop: `md:grid md:grid-cols-5 md:gap-3` - Restores grid layout
- Thumbnails: `flex-shrink-0 w-20 md:w-full` - Fixed 80px width on mobile, responsive on desktop
- Spacing: `pb-2 md:pb-0` - Padding for scrollbar on mobile
- Overflow handling: `-mx-1 px-1` - Allows thumbnails to breathe at edges

### 3. Product Info Section

**Current Implementation:**
```html
<div class="sticky top-24">
  <h1 class="font-display text-3xl md:text-4xl lg:text-5xl ...">...</h1>
  <p class="text-2xl md:text-3xl ...">$299.00</p>
  <p class="text-base md:text-lg ...">Description</p>
  <!-- Details, Size Selection, WhatsApp Button -->
</div>
```

**Mobile Issues:**
- Sticky positioning not needed on mobile (content stacks)
- Typography sizes need adjustment for mobile readability
- WhatsApp button needs to be extracted for fixed positioning

**Solution:**
```html
<div class="md:sticky md:top-24">
  <h1 class="font-display text-2xl md:text-4xl lg:text-5xl ...">...</h1>
  <p class="text-xl md:text-3xl ...">$299.00</p>
  <p class="text-base md:text-lg leading-relaxed ...">Description</p>
  <!-- Details, Size Selection -->
  <!-- WhatsApp Button moved outside on mobile -->
</div>
```

**Changes:**
- Sticky: `md:sticky md:top-24` - Only sticky on desktop
- Heading: `text-2xl md:text-4xl` - Smaller on mobile (32px → 36px)
- Price: `text-xl md:text-3xl` - Proportional reduction (20px → 30px)
- Line height: Ensure `leading-relaxed` for readability

### 4. WhatsApp Button - Fixed Bottom on Mobile

**Current Implementation:**
```html
<button id="whatsappOrderBtn" class="w-full bg-[#550000] text-white px-8 py-4 rounded-full ...">
  <i class="fa-brands fa-whatsapp text-2xl"></i>
  Order via WhatsApp
</button>
```

**Mobile Issue:** Button scrolls out of view, reducing conversion opportunities.

**Solution - Restructure:**

Move button outside the sticky container and apply fixed positioning:

```html
<!-- Inside Product Info Section - Desktop Only -->
<button id="whatsappOrderBtn" 
        class="hidden md:flex w-full bg-[#550000] text-white px-8 py-4 rounded-full ...">
  <i class="fa-brands fa-whatsapp text-2xl"></i>
  Order via WhatsApp
</button>

<!-- Fixed Bottom - Mobile Only (placed after main product section) -->
<div class="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent md:hidden">
  <button id="whatsappOrderBtnMobile" 
          class="w-full bg-[#550000] text-white px-6 py-4 rounded-full text-base font-semibold hover:bg-[#6B1C23] transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
    <i class="fa-brands fa-whatsapp text-2xl"></i>
    Order via WhatsApp
  </button>
</div>
```

**Changes:**
- Desktop button: `hidden md:flex` - Hidden on mobile, visible on desktop
- Mobile button: New fixed container with `fixed bottom-0 left-0 right-0 z-40`
- Background gradient: `bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent` - Smooth visual transition
- Padding: `p-4` - Breathing room around button
- Z-index: `z-40` - Above content but below header (z-50)
- Display control: `md:hidden` - Only visible on mobile

**JavaScript Update Required:**
Both buttons need the same click handler. Update the script:

```javascript
// --- WhatsApp Order Button ---
const whatsappBtn = document.getElementById('whatsappOrderBtn');
const whatsappBtnMobile = document.getElementById('whatsappOrderBtnMobile');
const productName = "The Velvet Noir";
const productPrice = "$299.00";
const whatsappNumber = "971502507859";

function handleWhatsAppOrder() {
    const sizeText = selectedSize ? `Size: ${selectedSize}` : "Size: I need help choosing";
    const message = `Hello, I want to order ${productName}.
Price: ${productPrice}
${sizeText}
Please confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

whatsappBtn.addEventListener('click', handleWhatsAppOrder);
whatsappBtnMobile.addEventListener('click', handleWhatsAppOrder);
```

### 5. Size Selection Buttons

**Current Implementation:**
```html
<button class="size-btn border-2 border-[#550000] text-[#550000] px-5 py-2 rounded-full ..." 
        data-size="XS">XS</button>
```

**Mobile Issue:** Touch targets may be too small (py-2 = 8px top/bottom padding).

**Solution:**
```html
<button class="size-btn border-2 border-[#550000] text-[#550000] px-6 py-3 md:px-5 md:py-2 rounded-full min-h-[44px] ..." 
        data-size="XS">XS</button>
```

**Changes:**
- Padding: `px-6 py-3` mobile (24px horizontal, 12px vertical)
- Desktop: `md:px-5 md:py-2` - Restores original sizing
- Min height: `min-h-[44px]` - Ensures 44px minimum touch target
- Gap: Increase container gap from `gap-3` to `gap-3 md:gap-3` (keep same, but ensure wrapping)

### 6. Container Constraints

**Current Implementation:**
```html
<section class="max-w-7xl mx-auto px-6 py-8 md:py-12">
```

**Potential Issue:** Content might overflow on very small screens.

**Solution:**
```html
<section class="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 lg:py-12 overflow-hidden">
```

**Changes:**
- Padding: `px-4 md:px-6` - Reduced horizontal padding on mobile (16px vs 24px)
- Vertical: `py-6 md:py-8 lg:py-12` - Progressive spacing increase
- Overflow: `overflow-hidden` - Prevents any child from causing horizontal scroll

### 7. Typography Adjustments

**Heading Sizes:**
- Product Title: `text-2xl md:text-4xl lg:text-5xl` (32px → 36px → 48px)
- Price: `text-xl md:text-3xl` (20px → 30px)
- Section Headings: `text-lg md:text-xl` (18px → 20px)

**Body Text:**
- Description: `text-base md:text-lg` (16px → 18px)
- Details List: `text-sm md:text-base` (14px → 16px)
- Minimum: Never below `text-sm` (14px) on mobile

**Line Height:**
- All body text: `leading-relaxed` (1.625)
- Headings: Default Tailwind heading line heights

## Data Models

No new data models are required. The implementation only modifies HTML structure and CSS classes. Existing JavaScript data structures remain unchanged:

- `selectedSize`: String storing the selected size
- `productName`, `productPrice`, `whatsappNumber`: String constants
- DOM element references: `mainImage`, `thumbnails`, `sizeButtons`, `whatsappBtn`, `whatsappBtnMobile`

## Correctness Properties


A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Layout and Viewport Properties

**Property 1: No horizontal scroll on mobile**
*For any* mobile viewport width (< 768px), the document width should equal the viewport width with no horizontal overflow
**Validates: Requirements 1.1**

**Property 2: Vertical stacking on mobile**
*For any* mobile viewport width (< 768px), the Image_Gallery top position should be less than the Product_Info_Section top position (gallery appears above info)
**Validates: Requirements 2.1**

**Property 3: Side-by-side layout on desktop**
*For any* desktop viewport width (≥ 768px), the Image_Gallery and Product_Info_Section should have similar top positions and different horizontal positions (side-by-side layout)
**Validates: Requirements 2.2**

**Property 4: Desktop two-column grid**
*For any* desktop viewport width (≥ 768px), the main product section container should use CSS grid with 2 columns
**Validates: Requirements 7.1**

### Image Gallery Properties

**Property 5: Main image full width on mobile**
*For any* mobile viewport width (< 768px), the main product image width should equal its container width and maintain the 3:4 aspect ratio
**Validates: Requirements 3.1**

**Property 6: Thumbnails contained on mobile**
*For any* mobile viewport width (< 768px), the thumbnail container should either be horizontally scrollable (scrollWidth > clientWidth) OR all thumbnails should fit within viewport width
**Validates: Requirements 3.2**

**Property 7: Thumbnail interaction updates main image**
*For any* thumbnail image, when clicked/tapped, the main image src should update to match the clicked thumbnail's src
**Validates: Requirements 3.3**

### WhatsApp Button Properties

**Property 8: Fixed positioning on mobile**
*For any* mobile viewport width (< 768px), the mobile WhatsApp button should have position: fixed and be positioned at the bottom of the viewport
**Validates: Requirements 4.1**

**Property 9: Button in info section on desktop**
*For any* desktop viewport width (≥ 768px), the desktop WhatsApp button should be a descendant of the Product_Info_Section and not have position: fixed
**Validates: Requirements 4.2**

**Property 10: Full width button on mobile**
*For any* mobile viewport width (< 768px), the mobile WhatsApp button should span the full width of its container (accounting for padding)
**Validates: Requirements 4.4**

### Touch Target Properties

**Property 11: Minimum touch target size**
*For any* interactive element (buttons, links) on mobile viewport (< 768px), both the computed width and height should be at least 44 pixels
**Validates: Requirements 5.1**

**Property 12: WhatsApp button minimum height**
*For any* mobile viewport width (< 768px), the mobile WhatsApp button should have a computed height of at least 56 pixels
**Validates: Requirements 5.3**

### Typography Properties

**Property 13: Minimum body text size on mobile**
*For any* body text element on mobile viewport (< 768px), the computed font-size should be at least 16 pixels
**Validates: Requirements 6.1**

**Property 14: Minimum line height on mobile**
*For any* text block on mobile viewport (< 768px), the computed line-height should be at least 1.5 times the font-size
**Validates: Requirements 6.3**

### Desktop Preservation Properties

**Property 15: Sticky positioning on desktop**
*For any* desktop viewport width (≥ 768px), the Product_Info_Section should have position: sticky
**Validates: Requirements 7.3**

## Error Handling

This implementation focuses on responsive layout and does not introduce new error conditions. Existing error handling remains unchanged:

### Existing Error Scenarios

1. **Missing thumbnail images**: Browser handles with broken image icon; no JavaScript errors
2. **WhatsApp app not installed**: Browser opens WhatsApp Web as fallback
3. **No size selected**: WhatsApp message includes "I need help choosing" text
4. **Invalid viewport sizes**: CSS media queries gracefully handle all viewport sizes

### Responsive Layout Edge Cases

1. **Very small viewports (< 320px)**: 
   - Minimum padding ensures content remains visible
   - Horizontal scroll prevented by `overflow-hidden` on containers
   - Text wraps appropriately with `break-words` if needed

2. **Viewport exactly at breakpoint (768px)**:
   - Tailwind's `md:` prefix uses `min-width: 768px`, so 768px uses desktop styles
   - Consistent behavior across browsers

3. **Landscape mobile orientation**:
   - Layout still uses mobile styles (based on width, not orientation)
   - Fixed button remains accessible

4. **Browser zoom**:
   - Responsive units (rem, %, viewport units) scale appropriately
   - Touch targets remain accessible at zoom levels

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and integration points
- **Property tests**: Verify universal properties across all viewport sizes and interactions

### Property-Based Testing

**Library**: Use a browser-based property testing library such as:
- **fast-check** (JavaScript/TypeScript) - recommended for browser testing
- **jsverify** (JavaScript) - alternative option

**Configuration**:
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: `Feature: product-detail-mobile-improvements, Property {number}: {property_text}`

**Test Environment**:
- Use headless browser (Puppeteer or Playwright) for DOM manipulation and computed style testing
- Generate random viewport widths within mobile (320-767px) and desktop (768-1920px) ranges
- Simulate touch events for interaction testing

**Property Test Examples**:

```javascript
// Property 1: No horizontal scroll on mobile
test('Feature: product-detail-mobile-improvements, Property 1: No horizontal scroll on mobile', async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.integer({ min: 320, max: 767 }), // Random mobile viewport width
      async (viewportWidth) => {
        await page.setViewport({ width: viewportWidth, height: 800 });
        await page.goto('product-detail.html');
        
        const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const viewportWidthActual = await page.evaluate(() => document.documentElement.clientWidth);
        
        return documentWidth === viewportWidthActual; // No horizontal overflow
      }
    ),
    { numRuns: 100 }
  );
});

// Property 11: Minimum touch target size
test('Feature: product-detail-mobile-improvements, Property 11: Minimum touch target size', async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.integer({ min: 320, max: 767 }),
      async (viewportWidth) => {
        await page.setViewport({ width: viewportWidth, height: 800 });
        await page.goto('product-detail.html');
        
        const interactiveElements = await page.$$('button, a');
        
        for (const element of interactiveElements) {
          const box = await element.boundingBox();
          if (box.width < 44 || box.height < 44) {
            return false;
          }
        }
        
        return true;
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Testing

**Focus Areas**:
1. **Specific viewport breakpoints**: Test exact behavior at 320px, 375px, 768px, 1024px
2. **WhatsApp button functionality**: Verify both mobile and desktop buttons trigger correct WhatsApp URL
3. **Thumbnail switching**: Test that clicking each specific thumbnail updates main image
4. **Size selection**: Test that clicking size buttons updates selected size state
5. **Edge cases**: Empty size selection, rapid thumbnail clicks, button double-clicks

**Example Unit Tests**:

```javascript
describe('Mobile Layout', () => {
  test('should stack gallery above info at 375px viewport', async () => {
    await page.setViewport({ width: 375, height: 667 });
    await page.goto('product-detail.html');
    
    const galleryTop = await page.$eval('.space-y-3', el => el.getBoundingClientRect().top);
    const infoTop = await page.$eval('.md\\:sticky', el => el.getBoundingClientRect().top);
    
    expect(galleryTop).toBeLessThan(infoTop);
  });
  
  test('should show mobile WhatsApp button at bottom', async () => {
    await page.setViewport({ width: 375, height: 667 });
    await page.goto('product-detail.html');
    
    const mobileBtn = await page.$('#whatsappOrderBtnMobile');
    const position = await page.evaluate(el => window.getComputedStyle(el).position, mobileBtn);
    
    expect(position).toBe('fixed');
  });
});

describe('Desktop Layout', () => {
  test('should display two-column grid at 768px', async () => {
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto('product-detail.html');
    
    const container = await page.$('.md\\:grid');
    const display = await page.evaluate(el => window.getComputedStyle(el).display, container);
    const gridTemplateColumns = await page.evaluate(el => window.getComputedStyle(el).gridTemplateColumns, container);
    
    expect(display).toBe('grid');
    expect(gridTemplateColumns).toContain('2'); // 2 columns
  });
});

describe('WhatsApp Button Integration', () => {
  test('should open WhatsApp with correct message when size selected', async () => {
    await page.goto('product-detail.html');
    
    // Select size
    await page.click('[data-size="M"]');
    
    // Mock window.open
    await page.evaluateOnNewDocument(() => {
      window.open = jest.fn();
    });
    
    // Click WhatsApp button
    await page.click('#whatsappOrderBtn');
    
    const openCalls = await page.evaluate(() => window.open.mock.calls);
    expect(openCalls[0][0]).toContain('Size: M');
  });
});
```

### Manual Testing Checklist

While automated tests cover most scenarios, manual testing should verify:

1. **Visual appearance**: Colors, fonts, spacing match design on real devices
2. **Touch interactions**: Buttons feel responsive and easy to tap on actual mobile devices
3. **Scrolling behavior**: Smooth scrolling, no jank, fixed button stays visible
4. **Cross-browser compatibility**: Test on Safari iOS, Chrome Android, Firefox mobile
5. **Accessibility**: Screen reader announces button states, keyboard navigation works

### Test Coverage Goals

- **Property tests**: 100% coverage of all correctness properties (15 properties)
- **Unit tests**: 90%+ code coverage of JavaScript functions
- **Integration tests**: All user flows (view product → select size → order via WhatsApp)
- **Manual tests**: All major mobile devices (iPhone, Android) and browsers
