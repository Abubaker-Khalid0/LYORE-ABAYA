/**
 * LYORE ABAYA - Translation Data
 * Complete bilingual support for Arabic (RTL) and English (LTR)
 * Organized by page sections for easy maintenance
 */

const translations = {
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      collection: "المجموعة",
      sizeGuide: "دليل المقاسات",
      shippingReturn: "الشحن والإرجاع",
      contact: "اتصل بنا"
    },

    // Hero Section (Homepage)
    hero: {
      title: "العصر الجديد",
      subtitle: "للحشمة",
      description: "اكتشفي عبايات فاخرة مصنوعة بأناقة وقوة داخلية. تصاميم خالدة للمرأة العصرية.",
      cta: "تسوقي المجموعة الجديدة",
      scrollIndicator: "انتقل للأسفل"
    },

    // Products Section (Homepage)
    products: {
      sectionLabel: "مجموعة حصرية",
      sectionTitle: "عبايات مميزة",
      viewDetails: "عرض التفاصيل",
      viewAllCollections: "عرض جميع المجموعات",
      quickView: "عرض سريع",
      
      // Product Names
      velvetNoir: "المخمل الأسود",
      empressSilk: "الحرير الإمبراطوري",
      royalSapphire: "الياقوت الملكي",
      midnightSands: "رمال منتصف الليل",
      silkSand: "رمال الحرير",
      sculptedMinimalist: "البساطة المنحوتة",
      royalGrace: "الأناقة الملكية",
      midnightLuxe: "فخامة منتصف الليل",
      silkDream: "حلم الحرير",
      timelessBeauty: "الجمال الخالد",
      modernMuse: "الإلهام العصري"
    },

    // Footer
    footer: {
      brandDescription: "إعادة تعريف الأناقة المحتشمة مع الالتزام بالحرفية الممتازة والصور الظلية الخالدة. مستوحاة من الماس بالداخل.",
      exploreTitle: "استكشف",
      helpTitle: "المساعدة",
      connectTitle: "تواصل معنا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      copyright: "© 2025 LYORE ABAYA. جميع الحقوق محفوظة.",
      socialInstagram: "إنستغرام",
      socialTiktok: "تيك توك",
      socialSnapchat: "سناب شات"
    },

    // CTA Buttons
    cta: {
      orderWhatsApp: "اطلب عبر واتساب",
      chatWhatsApp: "تحدث على واتساب",
      chatNow: "تحدث الآن",
      contactSupport: "اتصل بالدعم"
    },

    // Collections Page
    collections: {
      pageTitle: "عبايات مميزة",
      pageDescription: "أناقة مصممة للمرأة العصرية.",
      viewDetails: "عرض التفاصيل"
    },

    // Product Detail Page
    productDetail: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCollection: "المجموعة",
      detailsTitle: "التفاصيل",
      fabric: "القماش: مخمل فاخر",
      color: "اللون: عنابي غامق",
      fit: "القصة: قصة A-line محتشمة مع تدفق أنيق",
      care: "العناية: تنظيف جاف فقط",
      selectSize: "اختر المقاس",
      viewSizeGuide: "عرض دليل المقاسات",
      orderViaWhatsApp: "اطلب عبر واتساب",
      shippingInfo: "الشحن: تفاصيل التوصيل متاحة",
      returnsInfo: "الإرجاع: السياسة متاحة",
      here: "هنا",
      youMayAlsoLike: "قد يعجبك أيضاً",
      productDescription: "الأناقة الخالدة تلتقي بالرقي الحديث. مصنوعة من قماش مخمل فاخر للمرأة المميزة التي تقدر الفخامة المحتشمة. القطعة المثالية للمناسبات المسائية."
    },

    // Size Guide Page
    sizeGuide: {
      pageTitle: "دليل المقاسات",
      pageSubtitle: "اعثري على المقاس المثالي",
      sizeColumn: "المقاس",
      lengthColumn: "الطول",
      shoulderColumn: "الكتف",
      bustColumn: "الصدر",
      measurementNote: "جميع القياسات بالسنتيمتر (سم). إذا كنت تستخدم البوصة، 1 بوصة = 2.54 سم.",
      tipTitle: "نصيحة",
      tipText: "إذا كنت بين مقاسين، نوصي باختيار المقاس الأكبر لأقصى راحة وصورة ظلية محتشمة.",
      helpTitle: "هل تحتاج مساعدة في اختيار مقاسك؟",
      helpCta: "تحدث على واتساب"
    },

    // Returns Policy Page
    returnsPolicy: {
      pageTitle: "الشحن والإرجاع",
      pageSubtitle: "سياسات مصقولة لعملائنا العالميين",
      
      // Shipping Section
      shippingTitle: "معلومات الشحن",
      deliveryTimeTitle: "وقت التوصيل",
      deliveryTimeText: "تتم معالجة الطلبات خلال 24-48 ساعة. يستغرق التوصيل المحلي 2-3 أيام عمل، بينما يتراوح الشحن الدولي من 5-7 أيام عمل.",
      shippingCostTitle: "تكلفة الشحن",
      shippingCostText: "شحن سريع مجاني على جميع الطلبات التي تزيد عن 500 دولار. يتم تطبيق سعر ثابت قدره 25 دولارًا للطلبات التي تقل عن هذا المبلغ.",
      areasTitle: "المناطق",
      areasText: "نقدم توصيل عالمي فاخر عبر DHL Express و FedEx إلى أكثر من 150 دولة.",
      packagingTitle: "التغليف",
      packagingText: "تصل كل قطعة من LYORE في صندوقنا الفاخر المستدام المميز، محمية بورق حريري خالٍ من الأحماض وحقيبة غبار حريرية.",
      trackingTitle: "التتبع",
      trackingText: "بمجرد الإرسال، سيتم إرسال رقم تتبع فريد عبر البريد الإلكتروني والرسائل النصية للمراقبة في الوقت الفعلي.",
      
      // Returns Section
      returnsTitle: "سياسة الإرجاع والاستبدال",
      returnsIntro: "نقبل الإرجاع والاستبدال خلال 7 أيام من التسليم. لكي تكون مؤهلاً، يجب أن تكون العناصر غير مرتداة وغير مغسولة وتتضمن جميع العلامات الأصلية مع ختم الأمان سليمًا.",
      howToReturnTitle: "كيفية بدء الإرجاع",
      returnStep1: "سجل الدخول إلى حسابك أو اتصل بنا عبر واتساب مع رقم طلبك.",
      returnStep2: "حدد العناصر التي ترغب في إرجاعها وحدد السبب.",
      returnStep3: "سيقوم فريقنا بمراجعة طلبك وإرسال ملصق شحن مدفوع مسبقًا خلال 24 ساعة.",
      returnStep4: "قم بتعبئة العناصر بشكل آمن في العبوة الأصلية.",
      returnStep5: "قم بالتسليم في أقرب نقطة تجميع أو حدد موعدًا لاستلام الساعي.",
      
      // FAQ Section
      faqTitle: "الأسئلة الشائعة",
      faqQ1: "هل يمكنني تعديل طلبي؟",
      faqA1: "نظرًا لأننا نعالج الطلبات بسرعة، فإن التعديلات ممكنة فقط خلال ساعتين من الطلب. يرجى الاتصال بنا عبر واتساب على الفور.",
      faqQ2: "هل الطلبات المخصصة مؤهلة؟",
      faqA2: "العبايات المخصصة أو المصنوعة حسب الطلب مصنوعة خصيصًا لقياساتك وبالتالي فهي غير قابلة للاسترداد ما لم يكن هناك عيب تصنيع.",
      faqQ3: "كم من الوقت يستغرق الاسترداد؟",
      faqA3: "تتم معالجة المبالغ المستردة إلى طريقة الدفع الأصلية خلال 10-14 يوم عمل بعد استلامنا وفحص العناصر المرتجعة.",
      faqQ4: "من يدفع تكلفة الشحن للإرجاع؟",
      faqA4: "بالنسبة للطلبات المحلية التي تزيد عن 500 دولار، يكون شحن الإرجاع مجانيًا. بالنسبة لجميع الطلبات الأخرى، يتم خصم رسوم معالجة صغيرة من المبلغ المسترد.",
      
      // Help Section
      helpTitle: "هل تحتاج مساعدة؟",
      helpText: "فريق الكونسيرج لدينا متاح للمساعدة في استفساراتك حول الشحن أو الإرجاع.",
      helpCta: "تحدث على واتساب"
    },

    // Contact Page
    contact: {
      pageTitle: "نحن هنا للمساعدة",
      pageDescription: "فريق الكونسيرج لدينا متاح لمساعدتك في استفسارات الطلبات ونصائح المقاسات والطلبات المخصصة.",
      
      // Contact Cards
      whatsappTitle: "واتساب",
      whatsappSubtitle: "أسرع استجابة",
      whatsappCta: "تحدث الآن",
      
      phoneTitle: "الهاتف",
      phoneHours: "الإثنين - السبت، 9 صباحًا - 6 مساءً",
      phoneCta: "اتصل بنا",
      
      emailTitle: "البريد الإلكتروني",
      emailSubtitle: "دعم العملاء",
      emailCta: "راسلنا",
      
      // Social Media
      socialTitle: "تابعنا على وسائل التواصل",
      socialNote: "عادة ما نرد خلال 24 ساعة.",
      socialBespokeNote: "للاستفسارات المخصصة، يرجى الاتصال بنا عبر واتساب."
    },

    // WhatsApp Messages
    whatsapp: {
      homeMessage: "مرحباً، أريد الاستفسار عن مجموعة LYORE ABAYA",
      collectionsMessage: "مرحباً، أريد الاستفسار عن عبايات LYORE",
      productMessage: "مرحباً، أريد طلب",
      sizeHelpMessage: "مرحباً، أحتاج مساعدة في اختيار مقاس العباية الخاص بي.",
      shippingMessage: "مرحباً، لدي سؤال حول الشحن أو الإرجاع",
      generalMessage: "مرحباً، لدي استفسار"
    },

    // Mobile Menu
    mobileMenu: {
      close: "إغلاق",
      menu: "القائمة"
    },

    // Common
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      close: "إغلاق",
      open: "فتح",
      next: "التالي",
      previous: "السابق",
      submit: "إرسال",
      cancel: "إلغاء"
    }
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      collection: "Collection",
      sizeGuide: "Size Guide",
      shippingReturn: "Shipping & Return",
      contact: "Contact"
    },

    // Hero Section (Homepage)
    hero: {
      title: "The New Era",
      subtitle: "of Modesty",
      description: "Discover high-end luxury abayas crafted with elegance and inner strength. Timeless designs for the modern woman.",
      cta: "Shop New Collection",
      scrollIndicator: "Scroll down"
    },

    // Products Section (Homepage)
    products: {
      sectionLabel: "Exclusive Collection",
      sectionTitle: "Signature Abayas",
      viewDetails: "View Details",
      viewAllCollections: "View All Collections",
      quickView: "Quick View",
      
      // Product Names
      velvetNoir: "The Velvet Noir",
      empressSilk: "The Empress Silk Abaya",
      royalSapphire: "Royal Sapphire Kaftan",
      midnightSands: "Midnight Sands Flow",
      silkSand: "Silk Sand Kaftan",
      sculptedMinimalist: "The Sculpted Minimalist",
      royalGrace: "The Royal Grace",
      midnightLuxe: "The Midnight Luxe",
      silkDream: "The Silk Dream",
      timelessBeauty: "The Timeless Beauty",
      modernMuse: "The Modern Muse"
    },

    // Footer
    footer: {
      brandDescription: "Redefining modest elegance with a commitment to premium craftsmanship and timeless silhouettes. Inspired by the diamond within.",
      exploreTitle: "Explore",
      helpTitle: "Help",
      connectTitle: "Connect",
      phone: "Phone",
      email: "Email",
      copyright: "© 2025 LYORE ABAYA. All Rights Reserved.",
      socialInstagram: "Instagram",
      socialTiktok: "TikTok",
      socialSnapchat: "Snapchat"
    },

    // CTA Buttons
    cta: {
      orderWhatsApp: "Order via WhatsApp",
      chatWhatsApp: "Chat on WhatsApp",
      chatNow: "Chat Now",
      contactSupport: "Contact Support"
    },

    // Collections Page
    collections: {
      pageTitle: "Signature Abayas",
      pageDescription: "Elegance designed for the modern woman.",
      viewDetails: "View Details"
    },

    // Product Detail Page
    productDetail: {
      breadcrumbHome: "Home",
      breadcrumbCollection: "Collection",
      detailsTitle: "Details",
      fabric: "Fabric: Premium Velvet",
      color: "Color: Deep Maroon",
      fit: "Fit: Modest A-line cut with elegant draping",
      care: "Care: Dry clean only",
      selectSize: "Select Size",
      viewSizeGuide: "View Size Guide",
      orderViaWhatsApp: "Order via WhatsApp",
      shippingInfo: "Shipping: Delivery details available",
      returnsInfo: "Returns: Policy available",
      here: "here",
      youMayAlsoLike: "You may also like",
      productDescription: "Timeless elegance meets modern sophistication. Crafted from premium velvet fabric for the discerning woman who values modest luxury. The perfect statement piece for evening occasions."
    },

    // Size Guide Page
    sizeGuide: {
      pageTitle: "Size Guide",
      pageSubtitle: "Find your perfect fit",
      sizeColumn: "Size",
      lengthColumn: "Length",
      shoulderColumn: "Shoulder",
      bustColumn: "Bust",
      measurementNote: "All measurements are in centimeters (cm). If you are using inches, 1 inch = 2.54 cm.",
      tipTitle: "Tip",
      tipText: "If you are between two sizes, we recommend choosing the larger size for maximum comfort and a modest silhouette.",
      helpTitle: "Need help choosing your size?",
      helpCta: "Chat on WhatsApp"
    },

    // Returns Policy Page
    returnsPolicy: {
      pageTitle: "Shipping & Returns",
      pageSubtitle: "Refined policies for our global clientele",
      
      // Shipping Section
      shippingTitle: "Shipping Information",
      deliveryTimeTitle: "Delivery Time",
      deliveryTimeText: "Orders are processed within 24-48 hours. Domestic delivery takes 2-3 business days, while international shipping ranges from 5-7 business days.",
      shippingCostTitle: "Shipping Cost",
      shippingCostText: "Complimentary express shipping on all orders over $500. A flat rate of $25 applies for orders below this amount.",
      areasTitle: "Areas",
      areasText: "We offer premium worldwide delivery via DHL Express and FedEx to over 150 countries.",
      packagingTitle: "Packaging",
      packagingText: "Every LYORE piece arrives in our signature sustainable luxury box, protected by acid-free tissue paper and a silk dust bag.",
      trackingTitle: "Tracking",
      trackingText: "Once dispatched, a unique tracking number will be sent via email and SMS for real-time monitoring.",
      
      // Returns Section
      returnsTitle: "Return & Exchange Policy",
      returnsIntro: "We accept returns and exchanges within 7 days of delivery. To be eligible, items must be unworn, unwashed, and include all original tags with the security seal intact.",
      howToReturnTitle: "How to Initiate a Return",
      returnStep1: "Log in to your account or contact us via WhatsApp with your order ID.",
      returnStep2: "Select the items you wish to return and specify the reason.",
      returnStep3: "Our team will review your request and send a pre-paid shipping label within 24 hours.",
      returnStep4: "Pack the items securely in the original packaging.",
      returnStep5: "Drop off at your nearest collection point or schedule a courier pickup.",
      
      // FAQ Section
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Can I modify my order?",
      faqA1: "As we process orders quickly, modifications are only possible within 2 hours of placement. Please contact us via WhatsApp immediately.",
      faqQ2: "Are bespoke orders eligible?",
      faqA2: "Custom-made or bespoke abayas are crafted specifically to your measurements and are therefore non-refundable unless a manufacturing defect exists.",
      faqQ3: "How long does the refund take?",
      faqA3: "Refunds are processed to the original payment method within 10-14 business days after we receive and inspect your returned items.",
      faqQ4: "Who pays for return shipping?",
      faqA4: "For domestic orders over $500, return shipping is complimentary. For all other orders, a small processing fee is deducted from the refund.",
      
      // Help Section
      helpTitle: "Need Help?",
      helpText: "Our concierge team is available to assist with your shipping or return queries.",
      helpCta: "Chat on WhatsApp"
    },

    // Contact Page
    contact: {
      pageTitle: "We're Here to Help",
      pageDescription: "Our concierge team is available to assist you with order inquiries, sizing advice, and bespoke requests.",
      
      // Contact Cards
      whatsappTitle: "WhatsApp",
      whatsappSubtitle: "Fastest response",
      whatsappCta: "Chat Now",
      
      phoneTitle: "Phone",
      phoneHours: "Mon - Sat, 9am - 6pm",
      phoneCta: "Call Us",
      
      emailTitle: "Email",
      emailSubtitle: "Customer support",
      emailCta: "Email Us",
      
      // Social Media
      socialTitle: "Find Us on Social",
      socialNote: "We usually reply within 24 hours.",
      socialBespokeNote: "For bespoke inquiries, please contact us via WhatsApp."
    },

    // WhatsApp Messages
    whatsapp: {
      homeMessage: "Hello, I want to inquire about LYORE ABAYA collection",
      collectionsMessage: "Hello, I want to inquire about LYORE abayas",
      productMessage: "Hello, I want to order",
      sizeHelpMessage: "Hello, I need help choosing my abaya size.",
      shippingMessage: "Hello, I have a question about shipping or returns",
      generalMessage: "Hello, I have an inquiry"
    },

    // Mobile Menu
    mobileMenu: {
      close: "Close",
      menu: "Menu"
    },

    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      close: "Close",
      open: "Open",
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      cancel: "Cancel"
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
