# الخطوط المستخدمة في مشروع LYORE ABAYA

## الخطوط الرسمية (2 فقط + أيقونات)

### 1. Newsreader (خط العناوين / النصوص الفاخرة)
- **الاستخدام:** العناوين الرئيسية (h1, h2, h3)، النصوص الفاخرة
- **الكلاس:** `font-display`
- **الرابط:**
```
https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap
```

### 2. Inter (خط الجسم / واجهة المستخدم)
- **الاستخدام:** كل نصوص الجسم، الأزرار، الروابط، التسميات
- **الكلاس:** `font-sans` (افتراضي على body)
- **الرابط:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap
```

### 3. Material Symbols Outlined (أيقونات فقط)
- **الاستخدام:** جميع الأيقونات في الموقع
- **الكلاس:** `material-symbols-outlined`
- **الرابط:**
```
https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap
```

---

## إعدادات Tailwind CSS

```js
fontFamily: {
    "display": ["Newsreader", "serif"],   // للعناوين
    "sans": ["Inter", "sans-serif"],       // للنصوص العامة
}
```

## الروابط المطلوبة في كل صفحة HTML

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

## ملاحظات
- ❌ **Playfair Display** تم إزالته بالكامل من المشروع
- ✅ جميع الصفحات تستخدم نفس إعدادات الخطوط
- ✅ `font-sans` (Inter) مطبق على `<body>` في كل صفحة
- ✅ `font-display` (Newsreader) مستخدم فقط على العناوين والنصوص الفاخرة
