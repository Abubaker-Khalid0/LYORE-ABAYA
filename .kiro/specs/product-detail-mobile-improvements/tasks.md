# Implementation Plan: Product Detail Mobile Improvements

## Overview

This implementation plan converts the responsive design into discrete coding tasks. Each task modifies the product-detail.html file using Tailwind CSS utility classes to improve mobile experience. The approach is incremental: start with layout structure, then images, then interactive elements, with testing integrated throughout.

## Tasks

- [x] 1. Update main product section container for mobile stacking
  - Modify the main product section `<div>` to use `flex flex-col` on mobile and `md:grid md:grid-cols-2` on desktop
  - Change gap from `gap-12` to `gap-6 md:gap-12` for better mobile spacing
  - Update section padding from `px-6` to `px-4 md:px-6` and `py-8 md:py-12` to `py-6 md:py-8 lg:py-12`
  - Add `overflow-hidden` to section container to prevent horizontal scroll
  - _Requirements: 1.1, 2.1, 2.2_

- [x] 2. Implement mobile-optimized image gallery
  - [x] 2.1 Update image gallery spacing
    - Change gallery container spacing from `space-y-4` to `space-y-3 md:space-y-4`
    - _Requirements: 3.1_
  
  - [x] 2.2 Convert thumbnails to horizontal scroll on mobile
    - Replace thumbnail grid classes `grid grid-cols-4 md:grid-cols-5 gap-3` with `flex gap-2 overflow-x-auto md:grid md:grid-cols-5 md:gap-3`
    - Add `pb-2 md:pb-0` for scrollbar padding on mobile
    - Add `-mx-1 px-1` for edge breathing room
    - Update each thumbnail `<img>` to include `flex-shrink-0 w-20 md:w-full`
    - _Requirements: 1.1, 3.2_
  
  - [ ] 2.3 Write property test for thumbnail container
    - **Property 6: Thumbnails contained on mobile**
    - **Validates: Requirements 3.2**
  
  - [ ]* 2.4 Write property test for main image dimensions
    - **Property 5: Main image full width on mobile**
    - **Validates: Requirements 3.1**

- [x] 3. Adjust product info section for mobile
  - [x] 3.1 Update sticky positioning for desktop only
    - Change `sticky top-24` to `md:sticky md:top-24` on product info container
    - _Requirements: 7.3_
  
  - [x] 3.2 Adjust typography sizes for mobile
    - Update product title from `text-3xl md:text-4xl lg:text-5xl` to `text-2xl md:text-4xl lg:text-5xl`
    - Update price from `text-2xl md:text-3xl` to `text-xl md:text-3xl`
    - Ensure description has `leading-relaxed` for line height
    - Update details section heading from `text-xl` to `text-lg md:text-xl`
    - _Requirements: 6.1, 6.3_
  
  - [ ]* 3.3 Write property test for typography sizes
    - **Property 13: Minimum body text size on mobile**
    - **Validates: Requirements 6.1**
  
  - [ ]* 3.4 Write property test for line height
    - **Property 14: Minimum line height on mobile**
    - **Validates: Requirements 6.3**

- [x] 4. Checkpoint - Verify layout changes
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement mobile-friendly size selection buttons
  - Update size button classes from `px-5 py-2` to `px-6 py-3 md:px-5 md:py-2`
  - Add `min-h-[44px]` to each size button for minimum touch target
  - Ensure button container maintains `gap-3 flex-wrap` for proper spacing
  - _Requirements: 5.1_
  
  - [ ]* 5.1 Write property test for touch target sizes
    - **Property 11: Minimum touch target size**
    - **Validates: Requirements 5.1**

- [x] 6. Create fixed bottom WhatsApp button for mobile
  - [x] 6.1 Modify existing WhatsApp button for desktop only
    - Add `hidden md:flex` classes to existing `#whatsappOrderBtn` button
    - Keep all other classes unchanged
    - _Requirements: 4.2_
  
  - [x] 6.2 Create new fixed mobile WhatsApp button
    - Add new fixed container after main product section closing tag
    - Container classes: `fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent md:hidden`
    - Button ID: `whatsappOrderBtnMobile`
    - Button classes: `w-full bg-[#550000] text-white px-6 py-4 rounded-full text-base font-semibold hover:bg-[#6B1C23] transition-all duration-300 shadow-lg flex items-center justify-center gap-3`
    - Include WhatsApp icon and text: `<i class="fa-brands fa-whatsapp text-2xl"></i> Order via WhatsApp`
    - _Requirements: 4.1, 4.4, 5.3_
  
  - [x] 6.3 Update JavaScript to handle both WhatsApp buttons
    - Extract WhatsApp order logic into `handleWhatsAppOrder()` function
    - Get reference to `#whatsappOrderBtnMobile` element
    - Add event listener to mobile button calling `handleWhatsAppOrder()`
    - Ensure both buttons use the same message generation logic
    - _Requirements: 4.1, 4.2_
  
  - [ ]* 6.4 Write property test for mobile button positioning
    - **Property 8: Fixed positioning on mobile**
    - **Validates: Requirements 4.1**
  
  - [ ]* 6.5 Write property test for desktop button positioning
    - **Property 9: Button in info section on desktop**
    - **Validates: Requirements 4.2**
  
  - [ ]* 6.6 Write property test for mobile button dimensions
    - **Property 10: Full width button on mobile**
    - **Property 12: WhatsApp button minimum height**
    - **Validates: Requirements 4.4, 5.3**
  
  - [ ]* 6.7 Write unit test for WhatsApp button functionality
    - Test that both buttons generate correct WhatsApp URL with selected size
    - Test fallback message when no size selected
    - _Requirements: 4.1, 4.2_

- [ ] 7. Checkpoint - Verify interactive elements
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement and verify layout properties
  - [ ]* 8.1 Write property test for no horizontal scroll
    - **Property 1: No horizontal scroll on mobile**
    - **Validates: Requirements 1.1**
  
  - [ ]* 8.2 Write property test for vertical stacking
    - **Property 2: Vertical stacking on mobile**
    - **Validates: Requirements 2.1**
  
  - [ ]* 8.3 Write property test for side-by-side layout
    - **Property 3: Side-by-side layout on desktop**
    - **Validates: Requirements 2.2**
  
  - [ ]* 8.4 Write property test for desktop grid
    - **Property 4: Desktop two-column grid**
    - **Validates: Requirements 7.1**
  
  - [ ]* 8.5 Write property test for sticky positioning
    - **Property 15: Sticky positioning on desktop**
    - **Validates: Requirements 7.3**

- [ ] 9. Implement thumbnail interaction testing
  - [ ]* 9.1 Write property test for thumbnail interaction
    - **Property 7: Thumbnail interaction updates main image**
    - **Validates: Requirements 3.3**
  
  - [ ]* 9.2 Write unit tests for thumbnail switching
    - Test clicking each specific thumbnail updates main image src
    - Test active state styling is applied correctly
    - Test fade transition occurs
    - _Requirements: 3.3_

- [ ] 10. Add comprehensive integration tests
  - [ ]* 10.1 Write integration test for complete mobile user flow
    - Test: Load page → verify mobile layout → select size → tap mobile WhatsApp button → verify URL
    - _Requirements: 1.1, 2.1, 4.1, 5.1_
  
  - [ ]* 10.2 Write integration test for complete desktop user flow
    - Test: Load page → verify desktop layout → select size → click desktop WhatsApp button → verify URL
    - _Requirements: 2.2, 4.2, 7.1, 7.3_
  
  - [ ]* 10.3 Write cross-viewport integration tests
    - Test: Resize from mobile to desktop and verify layout changes
    - Test: Resize from desktop to mobile and verify layout changes
    - _Requirements: 2.1, 2.2_

