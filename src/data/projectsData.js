// ─── Image Imports ───────────────────────────────────────────────────────────
import pharmacySystemImg  from '../assets/Pharmacy System.png';
import ecommerceImg       from '../assets/E-Commerce.png';

import mozdakhar          from '../assets/Sys2.png';
import mozdakhar1         from '../assets/Sys3.png';
import mozdakhar2         from '../assets/Sys4.png';

import diggipacks         from '../assets/ph1.png';
import diggipacks1        from '../assets/ph2.png';
import diggipacks2        from '../assets/ph3.png';
import diggipacks3        from '../assets/ph4.png';

import law360d            from '../assets/E1.png';
import law360d1           from '../assets/E2.png';
import law360d2           from '../assets/E3.png';

// ─── Card-level thumbnail map (used by Projects.jsx) ─────────────────────────
export const projectThumbnails = {
  diggipacks : diggipacks,
  law360d    : ecommerceImg,
  muzdakhar  : pharmacySystemImg,
};

// ─── Full bilingual project data ─────────────────────────────────────────────
const projectsData = {
  en: {
    title    : 'Featured Projects',
    subtitle : 'Explore my recent work and contributions',
    viewDemo   : 'Live Demo',
    viewCode   : 'Source Code',
    moreDetails: 'Details...',
    featuresTitle: 'Key Features:',
    impactTitle  : 'Impact:',
    techTitle    : 'Technologies:',
    statusLabels : {
      Live            : 'Live',
      'In Development': 'In Development',
      Completed       : 'Completed',
    },
    projects: [
      {
        id          : 'diggipacks-support',
        title       : 'Hamroush Pharmacy – Full-Stack Pharmacy E-Commerce Platform',
        shortTitle  : 'Hamroush Pharmacy',
        period      : '05/2023',
        
        status      : 'In Development',
        image       : diggipacks,
        description : 'Built a full-stack pharmacy e-commerce platform featuring online prescription uploads, a curated health products catalog, and automated order tracking — delivering a seamless digital healthcare experience.',
        fullDescription: 'Hamroush Pharmacy is a comprehensive pharmacy e-commerce solution designed to bridge patients with their medications online. Customers can browse a dynamic health products catalog, upload prescriptions directly through the platform, and track their orders in real time via automated notifications. The system integrates a secure backend for patient record management, real-time inventory control with low-stock alerts, and an automated billing engine that handles prescription verification and checkout in one flow.',
        shortDescription: 'Full-stack pharmacy e-commerce platform: online prescription uploads, health product catalog, automated order tracking, and smart inventory management.',
        features: [
          'Online prescription upload system with automated pharmacist verification workflow.',
          'Dynamic health products catalog with category filters and search functionality.',
          'Automated order tracking with real-time status notifications for patients.',
          'Real-time inventory management with low-stock alerts and expiration date tracking.',
          'Secure patient records and medicine dispensing history with role-based access.',
        ],
        impact: [
          'Enabled patients to order medications and upload prescriptions fully online.',
          'Reduced dispensing errors through automated prescription verification.',
          'Optimized stock control, minimizing financial losses from expired inventory.',
          'Streamlined pharmacy operations, allowing staff to focus on patient care.',
        ],
        tech     : ['Node.js', 'Express', 'React', 'Tailwind', 'MongoDB', 'OpenAI API', 'Gmail API'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/Pharmacy-Website',
        images   : [diggipacks, diggipacks1, diggipacks2, diggipacks3],
      },
      {
        id          : 'law360d-legal',
        title       : 'Vendbase – Multi-Tenant SaaS Platform',
        shortTitle  : 'Multi Tenant Platform',
        period      : '06/2025',
        status      : 'Completed',
        image       : ecommerceImg,
        description : 'A highly scalable SaaS solution for legal institutions, featuring a robust multi-tenant architecture. It enables multiple law firms to operate securely on a single platform, offering each tenant full control over their data, users, and workflows through a specialized, isolated workspace.',
        fullDescription: 'Vendbase is an enterprise-grade multi-tenant SaaS platform built for legal institutions in Saudi Arabia. Each law firm onboards as an independent tenant with a fully isolated environment — their own sub-domain, user base, and administrative dashboard. The architecture ensures zero data bleed between tenants while sharing underlying infrastructure, dramatically reducing per-client costs. Tenant-aware JWT authentication guarantees that every API call is scoped to the correct firm, and a centralized super-admin panel allows the platform owner to manage all tenants from a single interface.',
        shortDescription: 'Scalable multi-tenant SaaS platform with isolated stores, role-based access, and centralized administration.',
        features: [
          'Multi-tenant architecture ensuring complete data isolation between independent law firms.',
          'Dynamic sub-domain management for personalized firm workspaces.',
          'Isolated administrative dashboards allowing each firm to manage their own users and legal staff.',
          'Customizable workspace configurations to fit diverse organizational structures.',
          'Secure, tenant-aware authentication ensuring users only access their assigned firm\'s data.',
        ],
        impact: [
          'Scalable SaaS model enabling seamless onboarding for multiple law firms simultaneously.',
          'Guaranteed enterprise-level data privacy and security for each individual tenant.',
          'Reduced infrastructure overhead by serving multiple clients through a unified, efficient codebase.',
          'Enhanced operational flexibility allowing firms to scale their user base independently.',
        ],
        tech     : ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI GPT API', 'JWT Authentication'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/E-Commerce-',
        images   : [law360d, law360d1, law360d2],
      },
      {
        id          : 'muzdakhar-realestate',
        title       : 'Smart Pharmacy Management System',
        shortTitle  : 'Pharmacy System',
        period      : '04/2023',
       
        status      : 'In Development',
        image       : pharmacySystemImg,
        description : 'A comprehensive pharmacy management system designed to streamline medication dispensing, inventory control, and patient records. It helps pharmacists manage stock levels, track expiry dates, and generate real-time sales reports efficiently.',
        fullDescription: 'This pharmacy management system provides a complete digital solution for modern pharmacies. It integrates prescription handling, inventory control, sales analytics, and patient record management into a single platform. Pharmacists can track stock levels in real time, receive automated low-stock alerts, and manage expiry dates to ensure medication safety. The reporting module delivers actionable insights on sales trends, enabling data-driven decisions for stock procurement and business growth.',
        shortDescription: 'Professional pharmacy management app: smart inventory, automated prescriptions, and real-time analytics.',
        features: [
          'Smart inventory tracking with low-stock alerts',
          'Automated prescription processing and electronic patient records',
          'Real-time sales reporting and analytics',
          'Secure user authentication with role-based access',
          'Arabic-first, RTL-compatible UI with responsive design',
        ],
        impact: [
          'Enhanced pharmacy efficiency and medication safety',
          'Digitized inventory management, reducing manual errors',
          'Improved patient service through faster processing',
        ],
        tech     : ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/pharmacy-management-system',
        images   : [mozdakhar, mozdakhar1, mozdakhar2],
      },
    ],
  },

  ar: {
    title    : 'المشاريع المميزة',
    subtitle : 'استكشف أعمالي الحديثة ومساهماتي',
    viewDemo   : 'التجربة المباشرة',
    viewCode   : 'كود المصدر',
    moreDetails: 'تفاصيل...',
    featuresTitle: 'الميزات الرئيسية:',
    impactTitle  : 'التأثير:',
    techTitle    : 'التقنيات:',
    statusLabels : {
      'مباشر'       : 'Live',
      'قيد التطوير' : 'In Development',
      'مكتمل'       : 'Completed',
    },
    projects: [
      {
        id          : 'diggipacks-support',
        title       : 'صيدلية حمروش – منصة صيدلية متكاملة للتجارة الإلكترونية',
        shortTitle  : 'Hamroush Pharmacy',
        period      : '05/2025',
        category    : 'التكنولوجيا الصحية',
        status      : 'مباشر',
        image       : diggipacks,
        description : 'بناء منصة صيدلية متكاملة للتجارة الإلكترونية تتيح رفع الوصفات الطبية إلكترونيًا، وتصفح منتجات الصحة، وتتبع الطلبات آليًا — لتقديم تجربة رعاية صحية رقمية سلسة.',
        fullDescription: 'صيدلية حمروش هي حل شامل للتجارة الإلكترونية الصيدلانية يربط المرضى بأدويتهم عبر الإنترنت. يمكن للعملاء تصفح كتالوج منتجات صحية ديناميكي ورفع الوصفات الطبية مباشرة عبر المنصة وتتبع طلباتهم في الوقت الفعلي من خلال إشعارات آلية.',
        shortDescription: 'منصة صيدلية إلكترونية متكاملة: رفع الوصفات الطبية، كتالوج منتجات صحية، تتبع طلبات آلي، وإدارة مخزون ذكية.',
        features: [
          'نظام رفع الوصفات الطبية عبر الإنترنت مع سير عمل التحقق الآلي للصيدلاني.',
          'كتالوج منتجات صحية ديناميكي مع فلاتر التصنيف ووظيفة البحث.',
          'تتبع الطلبات آليًا مع إشعارات حالة فورية للمرضى.',
          'إدارة مخزون في الوقت الفعلي مع تنبيهات انخفاض المخزون وتتبع تواريخ الانتهاء.',
          'سجلات مرضى آمنة وتاريخ صرف الأدوية مع وصول قائم على الأدوار.',
        ],
        impact: [
          'مكّن المرضى من طلب الأدوية ورفع الوصفات الطبية بالكامل عبر الإنترنت.',
          'تقليل أخطاء الصرف من خلال التحقق الآلي من الوصفات الطبية.',
          'تحسين ضبط المخزون وتقليل الخسائر المالية الناجمة عن انتهاء صلاحية الأدوية.',
          'تبسيط العمليات الصيدلانية مما يتيح للموظفين التركيز على رعاية المرضى.',
        ],
        tech     : ['Node.js', 'Express', 'React', 'Tailwind', 'MongoDB', 'OpenAI API', 'Gmail API'],
        demoLink : '',
        codeLink : '',
        images   : [diggipacks, diggipacks1, diggipacks2, diggipacks3],
      },
      {
        id          : 'law360d-legal',
        title       : 'Vendbase - منصة SaaS متعددة المستأجرين - السعودية',
        shortTitle  : 'منصة متعددة المستأجرين',
        period      : '06/2025',
        category    : 'التكنولوجيا القانونية',
        status      : 'قيد التطوير',
        image       : ecommerceImg,
        description : 'حل SaaS عالي الأداء للمؤسسات القانونية، يعتمد على بنية متعددة المستأجرين تتيح لمكاتب المحاماة المتعددة العمل بأمان على منصة موحدة، مع منح كل مستأجر تحكمًا كاملًا في بياناته ومستخدميه وسير عمله.',
        fullDescription: 'Vendbase هي منصة SaaS متعددة المستأجرين على مستوى المؤسسات، مصممة للمؤسسات القانونية في السعودية. يتم تسجيل كل مكتب محاماة كمستأجر مستقل ببيئة معزولة تمامًا - نطاق فرعي خاص وقاعدة مستخدمين ولوحة إدارية مخصصة.',
        shortDescription: 'منصة SaaS متعددة المستأجرين مع عزل كامل للبيانات، وصلاحيات مبنية على الأدوار، وإدارة مركزية.',
        features: [
          'بنية متعددة المستأجرين تضمن عزلًا كاملًا للبيانات بين مكاتب المحاماة المستقلة.',
          'إدارة نطاقات فرعية ديناميكية لمساحات عمل مخصصة لكل مكتب.',
          'لوحات إدارية معزولة تتيح لكل مكتب إدارة مستخدميه وطاقمه القانوني.',
          'إعدادات مساحة عمل قابلة للتخصيص لتناسب الهياكل التنظيمية المتنوعة.',
          'مصادقة آمنة تدرك هوية المستأجر لضمان وصول المستخدمين فقط إلى بيانات مكتبهم.',
        ],
        impact: [
          'نموذج SaaS قابل للتوسع يتيح إدراج مكاتب محاماة متعددة في وقت واحد بسلاسة.',
          'ضمان خصوصية وأمان البيانات على مستوى المؤسسات لكل مستأجر.',
          'تقليل التكاليف التحتية بخدمة عملاء متعددين عبر قاعدة كود موحدة وفعّالة.',
          'مرونة تشغيلية محسّنة تتيح للمكاتب توسيع قاعدة مستخدميها باستقلالية.',
        ],
        tech     : ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI GPT API', 'JWT Authentication'],
        demoLink : '',
        codeLink : '',
        images   : [law360d, law360d1, law360d2],
      },
      {
        id          : 'muzdakhar-realestate',
        title       : 'نظام إدارة الصيدلية الذكي',
        shortTitle  : 'نظام الصيدلية',
        period      : '04/2022',
        category    : 'التكنولوجيا الصحية',
        status      : 'مكتمل',
        image       : pharmacySystemImg,
        description : 'نظام متكامل لإدارة الصيدليات مصمم لتبسيط صرف الأدوية ومراقبة المخزون وسجلات المرضى.',
        fullDescription: 'يوفر نظام إدارة الصيدلية هذا حلًا رقميًا متكاملًا للصيدليات الحديثة. يدمج إدارة الوصفات الطبية ومراقبة المخزون وتحليلات المبيعات وإدارة سجلات المرضى في منصة واحدة.',
        shortDescription: 'تطبيق إدارة صيدلية احترافي: مخزون ذكي، وصفات آلية، وتحليلات فورية.',
        features: [
          'تتبع ذكي للمخزون مع تنبيهات انخفاض المخزون',
          'معالجة آلية للوصفات الطبية وسجلات المرضى الإلكترونية',
          'تقارير وتحليلات المبيعات الفورية',
          'مصادقة آمنة للمستخدمين مع وصول قائم على الأدوار',
          'واجهة مستخدم بالعربية متوافقة مع RTL وتصميم متجاوب',
        ],
        impact: [
          'تعزيز كفاءة الصيدلية وسلامة الأدوية',
          'رقمنة إدارة المخزون وتقليل الأخطاء اليدوية',
          'تحسين خدمة المرضى من خلال معالجة أسرع',
        ],
        tech     : ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API'],
        demoLink : '',
        codeLink : '',
        images   : [mozdakhar, mozdakhar1, mozdakhar2],
      },
    ],
  },
};

export default projectsData;
