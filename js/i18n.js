(function () {
  "use strict";

  const STORAGE_KEY = "fayhaa-lang";
  const DEFAULT_LANG = "ar";

  const translations = {
    ar: {
      "meta.home.title": "فيحاء | أنابيب وأطاريف وإنترلوك خرساني",
      "meta.home.description":
        "فيحاء — تصنيع أنابيب خرسانية وأطاريف وإنترلوك للبناء والبنية التحتية.",
      "meta.about.title": "من نحن | فيحاء",
      "meta.about.description": "تعرف على فيحاء — مصنع منتجات خرسانية.",
      "meta.products.title": "المنتجات | فيحاء",
      "meta.products.description":
        "منتجات فيحاء — أنابيب خرسانية وأطاريف وإنترلوك.",
      "meta.contact.title": "اتصل بنا | فيحاء",
      "meta.contact.description": "تواصل مع فيحاء — هاتف وعنوان وساعات العمل.",
      "meta.catalogue.title": "جدول مقاسات الأنابيب | فيحاء",
      "meta.catalogue.description":
        "جدول مقاسات الأنابيب الخرسانية المسلحة — القطر الداخلي وسماكة الجدار والتسليح.",

      "nav.aria": "التنقل الرئيسي",
      "nav.home": "الرئيسية",
      "nav.about": "عن الفيحاء",
      "nav.products": "منتجاتنا",
      "nav.contact": "تواصل معنا",

      "lang.aria": "اختيار اللغة",
      "lang.ar": "ع",
      "lang.en": "En",

      "brand.logoAlt": "شعار الفيحاء",

      "footer.rights": "جميع الحقوق محفوظة",
      "footer.phoneAddress": "الهاتف والعنوان",
      "footer.backHome": "العودة للرئيسية",
      "footer.tagline":
        "مصنع منتجات خرسانية — أنابيب مسلحة وأطاريف وإنترلوك لخدمة البناء الحديث.",
      "footer.contactTitle": "تواصل معنا",
      "footer.linksTitle": "روابط سريعة",
      "footer.address": "المدينة — المملكة العربية السعودية",

      "home.hero.slide1.title": "مصنع الفيحاء الآلي",
      "home.hero.slide1.sub": "رواد في منتجات الخرسانة المسلحة",
      "home.hero.slide2.title": "أنابيب خرسانية مسلحة",
      "home.hero.slide2.sub": "متانة عالية للبنية التحتية",
      "home.hero.slide3.title": "إنترلوك",
      "home.hero.slide3.sub": "إنترلوك للمداخل وأرصفة المشاة والمساحات الخارجية",
      "home.intro":
        "في مصنع الفيحاء، ننتج منتجات خرسانية جاهزة مصممة لتلبية احتياجات مشاريع البناء والبنية التحتية — من الأنابيب الخرسانية المسلحة إلى الأطاريف والإنترلوك — بجودة ثابتة وأداء موثوق.",
      "home.contact.title": "تواصل معنا",
      "home.contact.reachTitle": "اتصل بنا",
      "home.mission.title": "هدفنا: الريادة في المنتجات الخرسانية",
      "home.mission.text":
        "نهدف إلى أن نكون شريكًا موثوقًا للمقاولين والمطورين، من خلال إنتاج متقن وتسليم في الموعد، مع التزام بالجودة والكفاءة في كل طلبية.",
      "home.industry.title": "صناعتنا: الخرسانة الجاهزة",
      "home.feature.pipes":
        "أنابيب مسلحة بقطرات وأنواع وصلات متعددة لصرف الأمطار والصرف الصحي والعبارات.",
      "home.feature.curbs":
        "أطاريف خرسانية جاهزة لحواف الأرصفة والطرق والمداخل.",
      "home.feature.interlock":
        "إنترلوك للمداخل وأرصفة المشاة ومواقف السيارات والمساحات الخارجية.",
      "home.cta.title": "تواصل معنا",
      "home.cta.lead": "طلبات وعروض أسعار — فريقنا جاهز لمساعدتكم",
      "home.cta.btn": "تواصل معنا",

      "home.products.title": "منتجاتنا",
      "home.products.lead":
        "حلول خرسانية جاهزة للصرف والبناء والرصف. يمكنك استبدال النصوص والصور ببياناتكم.",
      "home.pipes.title": "أنابيب خرسانية",
      "home.pipes.desc": "أنابيب مسلحة بقطرات وأنواع وصلات متعددة.",
      "home.pipes.alt": "أنابيب خرسانية",
      "home.curbs.title": "أطاريف",
      "home.curbs.desc": "أطاريف خرسانية لحواف الأرصفة والطرق.",
      "home.curbs.alt": "أطاريف خرسانية",
      "home.interlock.title": "إنترلوك",
      "home.interlock.desc": "إنترلوك للمداخل وأرصفة المشاة والمساحات الخارجية.",
      "home.interlock.alt": "إنترلوك",

      "home.why.title": "قيمنا",
      "home.why.lead":
        "حدّث هذا القسم بقصة شركتكم وشهاداتكم وسنوات خبرتكم.",
      "home.why.quality.title": "الجودة أولًا",
      "home.why.quality.desc":
        "خلط ومعالجة محكومة لضمان قوة ومظهر موثوق في كل دفعة إنتاج.",
      "home.why.range.title": "تشكيلة واسعة",
      "home.why.range.desc":
        "أنابيب وأطاريف وإنترلوك من مورّد واحد يلبي احتياجات موقعكم.",
      "home.why.service.title": "المرونة والدقة",
      "home.why.service.desc":
        "خدمة محلية واضحة مع خيارات تسليم ودعم من فريقنا.",
      "home.pipes.more": "اقرأ المزيد",
      "home.curbs.more": "اقرأ المزيد",
      "home.interlock.more": "اقرأ المزيد",

      "about.header.title": "عن الفيحاء",
      "about.header.lead": "شريككم في المنتجات الخرسانية الجاهزة",
      "about.p1":
        "تصنع <strong>فيحاء</strong> وتورّد منتجات خرسانية لمشاريع البناء والبنية التحتية. استبدلوا هذا النص بتاريخ شركتكم ورسالتكم وما يميزكم.",
      "about.p2":
        "نركز على جودة موثوقة — من أنابيب الصرف المسلحة إلى الأطاريف والإنترلوك — ليعتمد المقاولون على مواد ثابتة في الموقع.",
      "about.offer.title": "ما نقدمه",
      "about.offer.li1": "أنابيب خرسانية مسلحة — مقاسات وأنواع وصلات متعددة",
      "about.offer.li2": "أطاريف خرسانية — مقاطع مستقيمة ومنحنية",
      "about.offer.li3": "إنترلوك — مداخل وأرصفة مشاة ورصف تجاري",
      "about.offer.cta": "تفاصيل المنتجات الكاملة",
      "about.facility.title": "منشأتنا",
      "about.facility.lead":
        "أضفوا صورة المصنع في <code>public/about-facility.jpg</code> وحدّثوا الوصف.",
      "about.facility.alt": "منشأة إنتاج فيحاء",

      "products.header.title": "المنتجات",
      "products.header.lead": "أنابيب خرسانية وأطاريف وإنترلوك",
      "products.pipes.title": "أنابيب خرسانية",
      "products.pipes.lead":
        "أنابيب جاهزة مسلحة لصرف الأمطار والصرف الصحي والعبارات. حدّثوا القائمة بمقاساتكم وأنواع الوصلات الفعلية.",
      "products.pipes.li1": "خرسانة مسلحة بالحديد (SRC)",
      "products.pipes.li2": "أقطار متعددة",
      "products.pipes.catalogueLink": "جدول المقاسات",
      "products.pipes.viewCatalogue": "عرض جدول المقاسات الكامل ←",
      "products.pipes.li3": "وصلات سن وقفة أو لسان وأخدود أو ما تنتجونه",
      "products.pipes.li4": "أطوال قياسية حسب خط الإنتاج",
      "products.pipes.alt": "أنابيب خرسانية مسلحة",
      "products.curbs.title": "أطاريف",
      "products.curbs.lead":
        "أطاريف خرسانية جاهزة لحواف الأرصفة والطرق والمداخل — تفصل الرصف عن الطريق وتحدد حدود الممرات.",
      "products.curbs.li1": "مقاطع مستقيمة ومنحنية",
      "products.curbs.li2": "أبعاد قياسية لأعمال الرصف",
      "products.curbs.li3": "خيارات لونية وتشطيب حسب الطلب",
      "products.curbs.alt": "أطاريف خرسانية",
      "products.interlock.title": "إنترلوك",
      "products.interlock.lead":
        "وحدات إنترلوك للمداخل وأرصفة المشاة ومواقف السيارات والحدائق. اذكروا الألوان والسماكات والأنماط.",
      "products.interlock.li1": "أشكال ومقاسات إنترلوك قياسية",
      "products.interlock.li2": "خيارات اللون والتشطيب",
      "products.interlock.li3": "أرصفة وملحقات إن كنتم تصنعونها",
      "products.interlock.alt": "إنترلوك",
      "products.cta.lead": "تحتاج مواصفات أو عرض سعر؟ تواصل مع فريقنا.",
      "products.cta.btn": "اتصل بنا",

      "catalogue.back": "← العودة إلى الأنابيب",
      "catalogue.header.title": "جدول مقاسات الأنابيب",
      "catalogue.header.lead": "أنابيب خرسانية مسلحة — أقطار وسماكات ومواصفات",
      "catalogue.diagram.barrel.alt": "مقطع عرضي للجسم — قطر داخلي للأنبوب",
      "catalogue.diagram.barrel.caption": "مقطع عرضي للجسم",
      "catalogue.diagram.joint.alt": "مقطع عرضي للوصلة — لسان وأخدود وسماكة الجدار",
      "catalogue.diagram.joint.caption": "مقطع عرضي للوصلة",
      "catalogue.diagram.render.alt": "أنبوب خرساني — منظور ثلاثي الأبعاد",
      "catalogue.diagram.render.caption": "أنبوب خرساني — منظور ثلاثي الأبعاد",
      "catalogue.table.title": "جدول مواصفات الأنابيب",
      "catalogue.table.diameter": "القطر الداخلي (سم)",
      "catalogue.table.wallThickness": "سماكة الجدار (سم)",
      "catalogue.table.reinforcement": "تسليح",
      "catalogue.table.note":
        "للطلبات والمواصفات حسب مشروعكم، تواصلوا مع فريقنا.",
      "catalogue.cta.lead": "تحتاج عرض سعر أو مواصفات مخصصة؟",
      "catalogue.cta.btn": "تواصل معنا",
      "catalogue.footerLink": "جدول مقاسات الأنابيب",

      "contact.header.title": "تواصل معنا",
      "contact.header.lead": "طلبات وعروض أسعار واستفسارات عامة",
      "contact.phone.title": "الهاتف",
      "contact.phone.display": "+973 9443 42328",
      "contact.email.title": "البريد الإلكتروني",
      "contact.hours.title": "ساعات العمل",
      "contact.hours.weekdays": "الأحد – الخميس: 8:00 – 17:00",
      "contact.hours.weekend": "الجمعة – السبت: مغلق",
      "contact.hours.note": "عدّلوا حسب أوقات عملكم.",
      "contact.location.title": "الموقع",
      "contact.location.overviewTitle": "طريق الوصول",
      "contact.location.detailTitle": "الموقع التفصيلي",
      "contact.location.altOut": "خريطة طريق الوصول إلى مصنع الفيحاء",
      "contact.location.altIn": "خريطة تفصيلية لموقع مصنع الفيحاء في الغزلانية",
      "contact.location.overviewCaption":
        "طريق الوصول عبر طريق مطار دمشق إلى منطقة الغزلانية (حوالي 9.5 كم).",
      "contact.location.detailCaption":
        "من مسجد علي بن أبي طالب في الغزلانية — دقيقتان (1.5 كم) إلى المصنع.",
    },
    en: {
      "meta.home.title": "Fayhaa | Concrete Pipes, Curbstones & Interlock",
      "meta.home.description":
        "Fayhaa — manufacturer of concrete pipes, curbstones, and interlock paving.",
      "meta.about.title": "About | Fayhaa",
      "meta.about.description": "About Fayhaa — concrete products manufacturer.",
      "meta.products.title": "Products | Fayhaa",
      "meta.products.description":
        "Fayhaa products — concrete pipes, curbstones, and interlock paving.",
      "meta.contact.title": "Contact | Fayhaa",
      "meta.contact.description": "Contact Fayhaa — phone, address, and hours.",
      "meta.catalogue.title": "Pipe Size Chart | Fayhaa",
      "meta.catalogue.description":
        "Reinforced concrete pipe size chart — internal diameter, wall thickness, and reinforcement.",

      "nav.aria": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.products": "Our products",
      "nav.contact": "Contact us",

      "lang.aria": "Language selection",
      "lang.ar": "ع",
      "lang.en": "En",

      "brand.logoAlt": "Alfayhaa logo",

      "footer.rights": "All rights reserved",
      "footer.phoneAddress": "Phone & address",
      "footer.backHome": "Back to home",
      "footer.tagline":
        "Precast concrete products — reinforced pipes, curbstones, and interlock for modern construction.",
      "footer.contactTitle": "Contact us",
      "footer.linksTitle": "Quick links",
      "footer.address": "City — Saudi Arabia",

      "home.hero.slide1.title": "Alfayhaa Automatic Factory",
      "home.hero.slide1.sub": "Leaders in reinforced concrete products",
      "home.hero.slide2.title": "Reinforced concrete pipes",
      "home.hero.slide2.sub": "Built for infrastructure durability",
      "home.hero.slide3.title": "Interlock",
      "home.hero.slide3.sub": "Interlock for driveways, sidewalks, and outdoor spaces",
      "home.intro":
        "At Alfayhaa factory, we produce precast concrete designed for construction and infrastructure — from steel-reinforced pipes to curbstones and interlock — with consistent quality and reliable performance.",
      "home.contact.title": "Contact us",
      "home.contact.reachTitle": "Get in touch",
      "home.mission.title": "Our goal: leadership in concrete products",
      "home.mission.text":
        "We aim to be a trusted partner for contractors and developers through precise production, on-time delivery, and a commitment to quality and efficiency on every order.",
      "home.industry.title": "Our industry: precast concrete",
      "home.feature.pipes":
        "Steel-reinforced pipes in multiple diameters and joint types for stormwater, sewage, and culverts.",
      "home.feature.curbs":
        "Precast concrete curbstones for sidewalk edges, roads, and driveways.",
      "home.feature.interlock":
        "Interlock for driveways, sidewalks, parking, and outdoor spaces.",
      "home.cta.title": "Contact us",
      "home.cta.lead": "Orders and quotes — our team is ready to help",
      "home.cta.btn": "Contact us",

      "home.products.title": "Our products",
      "home.products.lead":
        "Durable precast solutions for drainage, masonry, and paved surfaces. Replace placeholder text and photos with your own details.",
      "home.pipes.title": "Concrete pipes",
      "home.pipes.desc": "Steel-reinforced pipes in multiple diameters and joint types.",
      "home.pipes.alt": "Concrete pipes",
      "home.curbs.title": "Curbstones",
      "home.curbs.desc": "Precast curbstones for sidewalks, roads, and paved edges.",
      "home.curbs.alt": "Concrete curbstones",
      "home.interlock.title": "Interlock",
      "home.interlock.desc": "Interlock for driveways, sidewalks, and outdoor spaces.",
      "home.interlock.alt": "Interlock paving",

      "home.why.title": "Our values",
      "home.why.lead":
        "Update this section with your company story, certifications, and years of experience.",
      "home.why.quality.title": "Quality first",
      "home.why.quality.desc":
        "Controlled mixing and curing for reliable strength and finish on every batch.",
      "home.why.range.title": "Wide range",
      "home.why.range.desc":
        "Pipes, curbstones, and interlock from one supplier for your site needs.",
      "home.why.service.title": "Flexibility & precision",
      "home.why.service.desc":
        "Clear local service with delivery options and support from our team.",
      "home.pipes.more": "Read more",
      "home.curbs.more": "Read more",
      "home.interlock.more": "Read more",

      "about.header.title": "About Fayhaa",
      "about.header.lead": "Your partner for precast concrete products",
      "about.p1":
        "<strong>Fayhaa</strong> manufactures and supplies concrete products for construction and infrastructure projects. Replace this paragraph with your company history, mission, and what sets you apart in your market.",
      "about.p2":
        "We focus on dependable quality — from steel-reinforced drainage pipes to curbstones and interlock paving — so contractors and builders can rely on consistent materials on site.",
      "about.offer.title": "What we offer",
      "about.offer.li1": "Reinforced concrete pipes — multiple sizes and joint types",
      "about.offer.li2": "Concrete curbstones — straight and curved sections",
      "about.offer.li3": "Interlock paving — driveways, paths, and commercial paving",
      "about.offer.cta": "See full product details",
      "about.facility.title": "Our facility",
      "about.facility.lead":
        "Add a photo of your plant or yard in <code>public/about-facility.jpg</code> and update the caption below.",
      "about.facility.alt": "Fayhaa production facility",

      "products.header.title": "Products",
      "products.header.lead": "Concrete pipes, curbstones, and interlock",
      "products.pipes.title": "Concrete pipes",
      "products.pipes.lead":
        "Steel-reinforced precast pipes for stormwater, sewage, and culvert applications. Update the list below with your actual sizes and joint types.",
      "products.pipes.li1": "Steel-reinforced concrete (SRC)",
      "products.pipes.li2": "Multiple diameters",
      "products.pipes.catalogueLink": "size chart",
      "products.pipes.viewCatalogue": "View full size chart →",
      "products.pipes.li3": "Spigot & socket, tongue & groove, or other joints you supply",
      "products.pipes.li4": "Standard lengths per your production line",
      "products.pipes.alt": "Steel-reinforced concrete pipes",
      "products.curbs.title": "Curbstones",
      "products.curbs.lead":
        "Precast concrete curbstones for edging sidewalks, roads, and driveways — separating pavement from the roadway and defining walkway boundaries.",
      "products.curbs.li1": "Straight and curved sections",
      "products.curbs.li2": "Standard dimensions for paving work",
      "products.curbs.li3": "Color and finish options on request",
      "products.curbs.alt": "Concrete curbstones",
      "products.interlock.title": "Interlock",
      "products.interlock.lead":
        "Interlock units for driveways, sidewalks, parking, and gardens. Describe colors, thicknesses, and patterns you stock.",
      "products.interlock.li1": "Standard interlock shapes and sizes",
      "products.interlock.li2": "Color and finish options",
      "products.interlock.li3": "Pavers and accessories if you manufacture them",
      "products.interlock.alt": "Interlock paving stones",
      "products.cta.lead": "Need specifications or a quote? Get in touch with our team.",
      "products.cta.btn": "Contact us",

      "catalogue.back": "← Back to pipes",
      "catalogue.header.title": "Pipe Size Chart",
      "catalogue.header.lead": "Reinforced concrete pipes — diameters, wall types, and specifications",
      "catalogue.diagram.barrel.alt": "Section through barrel — pipe inside diameter",
      "catalogue.diagram.barrel.caption": "Section Thru Barrel",
      "catalogue.diagram.joint.alt": "Section through joint — tongue and groove, wall thickness",
      "catalogue.diagram.joint.caption": "Section Thru Joint",
      "catalogue.diagram.render.alt": "Concrete pipe — 3D perspective",
      "catalogue.diagram.render.caption": "Concrete pipe — 3D view",
      "catalogue.table.title": "Table of Pipe Properties",
      "catalogue.table.diameter": "Internal Diameter (cm)",
      "catalogue.table.wallThickness": "Wall Thickness (cm)",
      "catalogue.table.reinforcement": "Reinforcement",
      "catalogue.table.note":
        "For project-specific specifications and quotes, contact our team.",
      "catalogue.cta.lead": "Need a quote or custom specifications?",
      "catalogue.cta.btn": "Contact us",
      "catalogue.footerLink": "Pipe size chart",

      "contact.header.title": "Contact us",
      "contact.header.lead": "Orders, quotes, and general inquiries",
      "contact.phone.title": "Phone",
      "contact.phone.display": "+973 9443 42328",
      "contact.email.title": "Email",
      "contact.hours.title": "Hours",
      "contact.hours.weekdays": "Sunday – Thursday: 8:00 – 17:00",
      "contact.hours.weekend": "Friday – Saturday: Closed",
      "contact.hours.note": "Adjust to your working hours.",
      "contact.location.title": "Location",
      "contact.location.overviewTitle": "Getting here",
      "contact.location.detailTitle": "Close-up",
      "contact.location.altOut": "Driving route to Alfayhaa factory",
      "contact.location.altIn": "Close-up map of Alfayhaa factory in Al Ghuzlaniyah",
      "contact.location.overviewCaption":
        "Via Damascus Airport Motorway to Al Ghuzlaniyah (~9.5 km).",
      "contact.location.detailCaption":
        "From Ali bin Abi Talib Mosque in Al Ghuzlaniyah — 2 min (1.5 km) to the factory.",
    },
  };

  const metaTitleKeys = {
    home: "meta.home.title",
    about: "meta.about.title",
    products: "meta.products.title",
    contact: "meta.contact.title",
    catalogue: "meta.catalogue.title",
  };

  const metaDescKeys = {
    home: "meta.home.description",
    about: "meta.about.description",
    products: "meta.products.description",
    contact: "meta.contact.description",
    catalogue: "meta.catalogue.description",
  };

  function getStoredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "ar" ? stored : DEFAULT_LANG;
  }

  function t(lang, key) {
    return translations[lang][key] ?? translations[DEFAULT_LANG][key] ?? key;
  }

  function applyDocumentLang(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!el.classList.contains("img-placeholder")) {
        el.alt = t(lang, key);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });

    const page = document.body.getAttribute("data-page");
    if (page && metaTitleKeys[page]) {
      document.title = t(lang, metaTitleKeys[page]);
    }
    if (page && metaDescKeys[page]) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t(lang, metaDescKeys[page]));
    }

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("is-active", isActive);
    });
  }

  function setLanguage(lang) {
    if (lang !== "ar" && lang !== "en") return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyDocumentLang(lang);
    applyTranslations(lang);
  }

  function initLanguageSwitcher() {
    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  window.FayhaaI18n = {
    getLang: getStoredLang,
    setLanguage,
    t: (key) => t(getStoredLang(), key),
  };

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getStoredLang();
    applyDocumentLang(lang);
    applyTranslations(lang);
    initLanguageSwitcher();
  });
})();
