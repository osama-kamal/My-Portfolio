// ─── Image Imports (real screenshots from the live demos, Nov 2026) ──────────
import dentalCard   from '../assets/real-dental-card.jpg';
import dental1      from '../assets/real-dental-1.jpg';
import dental2      from '../assets/real-dental-2.jpg';
import dental3      from '../assets/real-dental-3.jpg';
import ecomCard     from '../assets/real-ecom-card.jpg';
import ecom1        from '../assets/real-ecom-1.jpg';
import ecom2        from '../assets/real-ecom-2.jpg';
import ecom3        from '../assets/real-ecom-3.jpg';
import pharmacyCard from '../assets/real-pharmacy-card.jpg';
import pharmacy1    from '../assets/real-pharmacy-1.jpg';
import pharmacy2    from '../assets/real-pharmacy-2.jpg';
import pharmacy3    from '../assets/real-pharmacy-3.jpg';

// ─── Card-level thumbnail map ─────────────────────────
export const projectThumbnails = {
  diggipacks : dentalCard,
  law360d    : ecomCard,
  muzdakhar  : pharmacyCard,
};

const projectsData = {
  en: {
    title    : 'Selected Work',
    subtitle : 'Working projects with live demos, tested code and honest notes',
    viewDemo   : 'Live Demo',
    viewCode   : 'Source Code',
    moreDetails: 'View Case →',
    featuresTitle: 'Key Features:',
    impactTitle  : 'Impact:',
    techTitle    : 'Technologies:',
    projects: [
      {
        id          : "diggipacks-support",
        title       : "Dental Clinic Management System",
        shortTitle  : "Dental Clinic",
        period      : "02/2026 – 11/2026",
        category    : "Healthcare",
        status      : "Working demo",
        image       : dentalCard,
        description : "A dental clinic app for patient records, appointments, treatment plans, invoicing and inventory. Built as an Electron desktop app, with a browser demo you can try right now.",
        fullDescription: "A dental clinic management system built with React, TypeScript and Material UI. The real product is an Electron desktop app that keeps its data in a local SQLite database (sql.js). Staff manage patients, medical history, clinical notes and attachments, book appointments on a day/week/month calendar, plan treatments on a tooth chart, issue invoices with payments, track dental supplies, and generate reports as PDF or CSV. The live demo runs the same services and screens in the browser with made-up data.",
        shortDescription: "Dental clinic app: patients, appointments, treatment plans, invoices, inventory and reports. Try the browser demo.",
        features: ["Patient records with medical history, clinical notes and file attachments.", "Appointment calendar (day, week, month) that rejects double-booking, with reminders.", "Treatment plans with a tooth chart and status tracking.", "Invoices with partial payments, discounts and PDF export.", "Inventory with low-stock alerts and stock history.", "Reports (daily, revenue, visit history, inventory) exported as PDF or CSV.", "Role-based users: Administrator, Dentist, Receptionist."],
        impact: ["Tests: 198 passing across 23 suites (Jest and fast-check) on the web-demo branch.", "The live demo is a browser build: data is made up and saved only in your own browser, so every visitor has a separate copy.", "The desktop app makes automatic daily backups. The browser demo does not.", "English interface only. Patients cannot book online; appointments are booked by staff.", "The demo is on free hosting, so the first load can be slow."],
        tech     : ["React", "TypeScript", "Material UI", "Electron", "SQLite (sql.js)", "PDFKit", "Jest"],
        demoLink : "https://dental-clinic-demo-ten.vercel.app/",
        codeLink : "https://github.com/osama-kamal/dental-clinic-management/tree/web-demo",
        images   : [dental1, dental2, dental3],
      },
      {
        id          : "law360d-legal",
        title       : "Vendbase – Multi-Tenant E-Commerce SaaS Platform",
        shortTitle  : "Vendbase",
        period      : "06/2026 – 11/2026",
        category    : "SaaS / E-Commerce",
        status      : "In development",
        image       : ecomCard,
        description : "A multi-tenant e-commerce platform. Each vendor gets an isolated storefront, product catalogue, orders and analytics from one deployment.",
        fullDescription: "Vendbase serves many vendors from one codebase. A store is resolved on every request from the hostname or the /s/:slug path, every query is scoped to that store, and cross-tenant access is blocked by a JWT guard and covered by an isolation test suite. Vendors sign up through onboarding that creates the store and owner account together. Checkout totals (subtotal, discount, shipping, tax) are computed in one place on the server, and refunds are prorated by a matching engine. Vendors are billed on subscription plans, and a platform super-admin can manage tenants.",
        shortDescription: "Multi-tenant e-commerce SaaS: isolated storefronts, server-side pricing, refunds and subscription plans.",
        features: ["Isolated storefront per vendor, resolved by hostname or store path.", "Product catalogue with categories, sizes, discounts, search and filters.", "Cart and checkout with server-side pricing, shipping zones, tax and coupons.", "Order pipeline, refunds and two payment gateways.", "Vendor subscription plans (free, starter, pro, enterprise) with limits enforced on the server.", "Platform super-admin for managing tenants."],
        impact: ["Backend tests: 526 of 536 pass. The 10 failures are known and listed in the README (outdated email-test mocks and a test setup problem).", "Frontend tests: 115 passing. There is no end-to-end test of the full checkout flow yet.", "The live demo is a public sample store with sample data. Orders are not real, online payments are turned off, and Cash on Delivery is the only option.", "The demo runs on a free Railway plan, so it can be slow after it has been idle.", "Still in development."],
        tech     : ["React 18", "TypeScript", "Vite", "Tailwind", "React Query", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Docker"],
        demoLink : "https://ecommerce-backend-production-5474.up.railway.app/s/demo-store",
        codeLink : "https://github.com/osama-kamal/E-Commerce-",
        images   : [ecom1, ecom2, ecom3],
      },
      {
        id          : "muzdakhar-realestate",
        title       : "Pharmacy ERP – Pharmacy Management System",
        shortTitle  : "Pharmacy ERP",
        period      : "10/2026 – 11/2026",
        category    : "HealthTech",
        status      : "Working demo",
        image       : pharmacyCard,
        description : "A pharmacy operations system: point of sale, inventory with batches and expiry, suppliers, purchase orders, customers and reports. Arabic and English, works on desktop and mobile.",
        fullDescription: "A full-stack pharmacy system with a React dashboard and an Express API on SQLite storage. It covers point of sale with stock validation, a product catalogue with SKU, barcode, batch and expiry, an inventory ledger with low-stock and expiry alerts, suppliers and purchase orders, sales, refunds and returns, customers with allergy and prescription references, reports with CSV export, role-based team accounts, an audit trail, and backup and restore.",
        shortDescription: "Pharmacy system: POS, inventory with expiry tracking, suppliers, customers, reports. Arabic and English.",
        features: ["Point of sale with multi-item checkout, discounts, tax and live stock checks.", "Products with SKU, barcode, batch, expiry and reorder level; low-stock and expiry alerts.", "Suppliers, purchase orders and batch receiving.", "Sales, refunds and customer returns.", "Customer records with allergies, conditions and prescription references.", "Role-based team accounts, login throttling and an audit trail.", "Arabic and English interface, responsive on desktop, tablet and mobile."],
        impact: ["API tests: 7 of 7 passing.", "The live demo gives each visitor their own temporary sample workspace (made-up data) that is removed after about 24 hours.", "The demo runs on free hosting (Vercel and Turso), so it can be slow or limited under heavy use.", "The full app stores data in a local SQLite file; the hosted demo uses a different database layer.", "No connection to Egypt's EPTTS drug-tracking service. The app only exports traceability data as CSV."],
        tech     : ["React", "TypeScript", "Tailwind", "Vite", "Node.js", "Express", "SQLite", "Drizzle ORM", "Zod"],
        demoLink : "https://pharmacy-management-system-xi-ochre.vercel.app",
        codeLink : "https://github.com/osama-kamal/pharmacy-management-system",
        images   : [pharmacy1, pharmacy2, pharmacy3],
      },
    ],
  },

  ar: {
    title    : 'أعمال مختارة',
    subtitle : 'مشاريع شغالة بديمو مباشر وكود مختبر وملاحظات صريحة',
    viewDemo   : 'معاينة مباشرة',
    viewCode   : 'الكود المصدري',
    moreDetails: 'عرض التفاصيل ←',
    featuresTitle: 'الميزات الرئيسية:',
    impactTitle  : 'الأثر:',
    techTitle    : 'التقنيات:',
    projects: [
      {
        id          : "diggipacks-support",
        title       : "نظام إدارة عيادة أسنان",
        shortTitle  : "عيادة الأسنان",
        period      : "02/2026 – 11/2026",
        category    : "الرعاية الصحية",
        status      : "ديمو متاح",
        image       : dentalCard,
        description : "تطبيق لعيادة الأسنان: سجلات المرضى والمواعيد وخطط العلاج والفواتير والمخزون. مبني كتطبيق Electron للكمبيوتر، ومعاه ديمو في المتصفح تقدر تجربه دلوقتي.",
        fullDescription: "نظام إدارة عيادة أسنان مبني بـ React وTypeScript وMaterial UI. المنتج الأساسي تطبيق Electron للكمبيوتر بيحفظ بياناته في قاعدة SQLite محلية (sql.js). الطاقم بيدير المرضى والتاريخ الطبي والملاحظات الإكلينيكية والمرفقات، ويحجز المواعيد في تقويم يومي وأسبوعي وشهري، ويخطط العلاج على مخطط الأسنان، ويصدر فواتير بمدفوعات، ويتابع المستلزمات، ويطلع تقارير PDF أو CSV. الديمو المباشر بيشغل نفس الخدمات والشاشات في المتصفح ببيانات وهمية.",
        shortDescription: "تطبيق عيادة أسنان: مرضى ومواعيد وخطط علاج وفواتير ومخزون وتقارير. جرّب الديمو في المتصفح.",
        features: ["سجلات مرضى مع تاريخ طبي وملاحظات إكلينيكية ومرفقات.", "تقويم مواعيد (يومي وأسبوعي وشهري) بيرفض الحجز المزدوج، مع تذكيرات.", "خطط علاج مع مخطط أسنان ومتابعة الحالة.", "فواتير بدفع جزئي وخصومات وتصدير PDF.", "مخزون مع تنبيهات نقص وسجل حركة.", "تقارير (يومي، إيرادات، سجل زيارات، مخزون) بتصدير PDF أو CSV.", "مستخدمين بصلاحيات: مدير، طبيب، موظف استقبال."],
        impact: ["الاختبارات: 198 اختبار ناجح في 23 مجموعة (Jest وfast-check) على فرع web-demo.", "الديمو المباشر نسخة متصفح: البيانات وهمية ومحفوظة في متصفحك أنت بس، فكل زائر له نسخته.", "تطبيق الكمبيوتر بيعمل نسخ احتياطي يومي تلقائي، لكن ديمو المتصفح لا.", "الواجهة بالإنجليزية فقط. المرضى مش بيحجزوا أونلاين، الحجز بيتم من الطاقم.", "الديمو على استضافة مجانية، فأول تحميل ممكن يبطأ."],
        tech     : ["React", "TypeScript", "Material UI", "Electron", "SQLite (sql.js)", "PDFKit", "Jest"],
        demoLink : "https://dental-clinic-demo-ten.vercel.app/",
        codeLink : "https://github.com/osama-kamal/dental-clinic-management/tree/web-demo",
        images   : [dental1, dental2, dental3],
      },
      {
        id          : "law360d-legal",
        title       : "Vendbase - منصة تجارة إلكترونية SaaS متعددة المستأجرين",
        shortTitle  : "Vendbase",
        period      : "06/2026 – 11/2026",
        category    : "SaaS / تجارة إلكترونية",
        status      : "قيد التطوير",
        image       : ecomCard,
        description : "منصة تجارة إلكترونية متعددة المستأجرين. كل تاجر ليه متجر معزول وكتالوج منتجات وطلبات وتحليلات من نشر واحد.",
        fullDescription: "Vendbase بتخدم تجار كتير من كود واحد. المتجر بيتحدد في كل طلب من اسم النطاق أو المسار /s/:slug، وكل استعلام مقيد بالمتجر، والدخول بين المستأجرين ممنوع بحارس JWT ومغطى بمجموعة اختبارات عزل. التاجر بيسجل من خلال onboarding بينشئ المتجر وحساب المالك مع بعض. إجماليات الدفع (المجموع الفرعي والخصم والشحن والضريبة) بتتحسب في مكان واحد على السيرفر، والاسترداد بيتوزع بمحرك مطابق. التجار بيشتركوا في باقات، ومدير المنصة يقدر يدير المستأجرين.",
        shortDescription: "SaaS تجارة إلكترونية متعدد المستأجرين: متاجر معزولة وتسعير على السيرفر واسترداد وباقات اشتراك.",
        features: ["متجر معزول لكل تاجر، بيتحدد من النطاق أو مسار المتجر.", "كتالوج منتجات بتصنيفات ومقاسات وخصومات وبحث وفلاتر.", "سلة ودفع بتسعير على السيرفر ومناطق شحن وضرائب وكوبونات.", "خط سير الطلبات والاسترداد وبوابتين دفع.", "باقات اشتراك للتجار (free وstarter وpro وenterprise) بحدود بتتطبق على السيرفر.", "مدير منصة لإدارة المستأجرين."],
        impact: ["اختبارات الباك إند: 526 من 536 ناجحة. الـ10 الفاشلين معروفين ومكتوبين في الـREADME (mocks إيميل قديمة ومشكلة إعداد اختبار).", "اختبارات الفرونت إند: 115 ناجح. لسه مفيش اختبار end-to-end لمسار الدفع كامل.", "الديمو المباشر متجر تجريبي عام ببيانات تجريبية. الطلبات مش حقيقية، والدفع الإلكتروني مقفول، والدفع عند الاستلام هو الخيار الوحيد.", "الديمو على خطة Railway مجانية، فممكن يبطأ بعد فترة خمول.", "لسه قيد التطوير."],
        tech     : ["React 18", "TypeScript", "Vite", "Tailwind", "React Query", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Docker"],
        demoLink : "https://ecommerce-backend-production-5474.up.railway.app/s/demo-store",
        codeLink : "https://github.com/osama-kamal/E-Commerce-",
        images   : [ecom1, ecom2, ecom3],
      },
      {
        id          : "muzdakhar-realestate",
        title       : "Pharmacy ERP - نظام إدارة الصيدلية",
        shortTitle  : "Pharmacy ERP",
        period      : "10/2026 – 11/2026",
        category    : "التكنولوجيا الصحية",
        status      : "ديمو متاح",
        image       : pharmacyCard,
        description : "نظام تشغيل صيدلية: نقطة بيع ومخزون بالتشغيلات والصلاحية وموردين وأوامر شراء وعملاء وتقارير. عربي وإنجليزي، بيشتغل على الكمبيوتر والموبايل.",
        fullDescription: "نظام صيدلية متكامل بلوحة تحكم React وAPI بـ Express على تخزين SQLite. بيغطي نقطة البيع مع التحقق من المخزون، وكتالوج منتجات بـSKU وباركود وتشغيلة وصلاحية، وسجل مخزون بتنبيهات نقص وانتهاء صلاحية، وموردين وأوامر شراء، والمبيعات والمرتجعات والاسترداد، وعملاء بحساسية ومراجع وصفات، وتقارير بتصدير CSV، وحسابات فريق بصلاحيات، وسجل مراجعة، ونسخ احتياطي واستعادة.",
        shortDescription: "نظام صيدلية: نقطة بيع ومخزون بتتبع الصلاحية وموردين وعملاء وتقارير. عربي وإنجليزي.",
        features: ["نقطة بيع بدفع متعدد المنتجات وخصومات وضريبة وتحقق لحظي من المخزون.", "منتجات بـSKU وباركود وتشغيلة وصلاحية وحد إعادة طلب، وتنبيهات نقص وانتهاء صلاحية.", "موردين وأوامر شراء واستلام بالتشغيلات.", "مبيعات ومرتجعات واسترداد.", "سجلات عملاء بحساسية وحالات ومراجع وصفات.", "حسابات فريق بصلاحيات وتقييد محاولات الدخول وسجل مراجعة.", "واجهة عربي وإنجليزي ومتجاوبة على الكمبيوتر والتابلت والموبايل."],
        impact: ["اختبارات الـAPI: 7 من 7 ناجحة.", "الديمو المباشر بيدي كل زائر مساحة عمل تجريبية مؤقتة (بيانات وهمية) بتتمسح بعد حوالي 24 ساعة.", "الديمو على استضافة مجانية (Vercel وTurso)، فممكن يبطأ أو يتقيد مع الضغط.", "التطبيق الكامل بيحفظ البيانات في ملف SQLite محلي، والديمو المستضاف بيستخدم طبقة قاعدة بيانات مختلفة.", "مفيش ربط بخدمة EPTTS المصرية لتتبع الأدوية. التطبيق بيصدّر بيانات التتبع كـCSV بس."],
        tech     : ["React", "TypeScript", "Tailwind", "Vite", "Node.js", "Express", "SQLite", "Drizzle ORM", "Zod"],
        demoLink : "https://pharmacy-management-system-xi-ochre.vercel.app",
        codeLink : "https://github.com/osama-kamal/pharmacy-management-system",
        images   : [pharmacy1, pharmacy2, pharmacy3],
      },
    ],
  },
};

export default projectsData;
