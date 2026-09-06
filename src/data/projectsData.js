// ─── Image Imports ───────────────────────────────────────────────────────────
import pharmacySystemImg  from '../assets/Pharmacy System.jpg';
import ecommerceImg       from '../assets/E-Commerce.png';

import mozdakhar          from '../assets/Sys2.png';
import mozdakhar1         from '../assets/Sys3.png';
import mozdakhar2         from '../assets/Sys4.png';

import diggipacks         from '../assets/ph1.jpg';
import diggipacks1        from '../assets/ph2.png';
import diggipacks2        from '../assets/ph3.png';
import diggipacks3        from '../assets/ph4.png';

import law360d            from '../assets/E1.png';
import law360d1           from '../assets/E2.png';
import law360d2           from '../assets/E3.png';
import law360d3           from '../assets/E4.jpg';

// ─── Card-level thumbnail map ─────────────────────────
export const projectThumbnails = {
  diggipacks : diggipacks,
  law360d    : ecommerceImg,
  muzdakhar  : pharmacySystemImg,
};

const projectsData = {
  en: {
    title    : 'Selected Work',
    subtitle : 'Production apps focused on speed, clarity, and real business impact',
    viewDemo   : 'Live Demo',
    viewCode   : 'Source Code',
    moreDetails: 'View Case →',
    featuresTitle: 'Key Features:',
    impactTitle  : 'Impact:',
    techTitle    : 'Technologies:',
    projects: [
      {
        id          : 'diggipacks-support',
        title       : 'Smile Clinic – Dental Clinic Management System',
        shortTitle  : 'Smile Clinic',
        period      : '05/2024',
        category    : 'Healthcare',
        status      : 'Completed',
        image       : diggipacks,
        description : 'A complete dental clinic management platform with online appointment booking, patient records, automated invoicing, and smart inventory — delivering a seamless experience for dentists, staff, and patients.',
        fullDescription: 'Smile Clinic (Dental Pro) is a premium clinic management system built for modern dental practices. Patients book appointments online, while staff manage patient records, medical histories, appointments, invoices, and dental inventory from one dashboard. The system provides real-time low-stock alerts for dental supplies, automated invoicing with payment tracking, and powerful reports on revenue, appointments, and patient retention. Designed RTL-first for Arabic clinics with a clean, fast UI.',
        shortDescription: 'Dental clinic platform: appointment booking, patient records, invoicing, and smart inventory for dental supplies.',
        features: [
          'Online appointment booking with calendar and real-time availability.',
          'Centralized patient records with treatment history and visit tracking.',
          'Automated invoicing with payment status (paid/unpaid/partial) and receipts.',
          'Smart inventory for dental supplies with low-stock alerts (e.g., 1 item left).',
          'Role-based dashboards for dentist, receptionist, and admin with RTL support.',
        ],
        impact: [
          'Reduced no-shows with clear appointment scheduling and reminders.',
          'Centralized patient data for better diagnosis and follow-up.',
          'Improved cash flow with automated invoicing and payment tracking.',
          'Prevented stock-outs with low-stock alerts for critical supplies.',
        ],
        tech     : ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/dental-clinic-management',
        images   : [diggipacks1, diggipacks2, diggipacks3],
      },
      {
        id          : 'law360d-legal',
        title       : 'Vendbase – Multi-Tenant SaaS Platform (KSA)',
        shortTitle  : 'Vendbase SaaS',
        period      : '06/2025',
        category    : 'SaaS',
        status      : 'In Development',
        image       : law360d3,
        description : 'A scalable multi-tenant SaaS for legal institutions. Each law firm gets an isolated workspace — own sub-domain, users, and dashboard — with zero data bleed between tenants.',
        fullDescription: 'Vendbase is an enterprise-grade multi-tenant SaaS for legal institutions in Saudi Arabia. Each firm onboards as an isolated tenant — sub-domain, user base, and admin panel. Shared infrastructure cuts cost while tenant-aware JWT ensures every API call is scoped correctly.',
        shortDescription: 'Multi-tenant SaaS with isolated workspaces, sub-domains, and tenant-aware auth.',
        features: [
          'Complete data isolation between tenants.',
          'Dynamic sub-domain for each firm workspace.',
          'Isolated admin dashboards per tenant.',
          'Customizable workspace configs.',
          'Tenant-aware JWT authentication.',
        ],
        impact: [
          'Onboard multiple firms on one codebase.',
          'Enterprise-grade privacy per tenant.',
          'Lower infra cost via shared backend.',
          'Independent scaling per firm.',
        ],
        tech     : ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/E-Commerce-',
        images   : [law360d, law360d1, law360d2],
      },
      {
        id          : 'muzdakhar-realestate',
        title       : 'Smart Pharmacy Management System',
        shortTitle  : 'Pharmacy System',
        period      : '04/2024',
        category    : 'HealthTech',
        status      : 'Completed',
        image       : pharmacySystemImg,
        description : 'A comprehensive system to streamline dispensing, inventory control, and patient records — with real-time reporting and expiry tracking.',
        fullDescription: 'A complete digital solution for modern pharmacies. Prescription handling, inventory, sales analytics, and patient records in one platform. Low-stock alerts and expiry management ensure safety; reporting drives purchasing decisions.',
        shortDescription: 'Smart inventory, automated prescriptions, and real-time analytics for pharmacies.',
        features: [
          'Smart inventory with low-stock alerts',
          'Automated prescriptions & e-patient records',
          'Real-time sales reporting',
          'Role-based secure auth',
          'Arabic-first RTL responsive UI',
        ],
        impact: [
          'Improved dispensing efficiency',
          'Fewer manual errors',
          'Faster patient service',
        ],
        tech     : ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/pharmacy-management-system',
        images   : [mozdakhar, mozdakhar1, mozdakhar2],
      },
    ],
  },

  ar: {
    title    : 'أعمال مختارة',
    subtitle : 'تطبيقات إنتاجية تركز على السرعة والوضوح والأثر الحقيقي',
    viewDemo   : 'معاينة مباشرة',
    viewCode   : 'الكود المصدري',
    moreDetails: 'عرض التفاصيل ←',
    featuresTitle: 'الميزات الرئيسية:',
    impactTitle  : 'الأثر:',
    techTitle    : 'التقنيات:',
    projects: [
      {
        id          : 'diggipacks-support',
        title       : 'عيادة سمايل – نظام إدارة عيادات الأسنان',
        shortTitle  : 'عيادة سمايل',
        period      : '05/2024',
        category    : 'الرعاية الصحية',
        status      : 'مكتمل',
        image       : diggipacks,
        description : 'منصة متكاملة لإدارة عيادات الأسنان مع حجز المواعيد أونلاين، سجلات المرضى، الفوترة الآلية، وإدارة مستلزمات العيادة — تجربة سلسة للطبيب والطاقم والمرضى.',
        fullDescription: 'عيادة سمايل (Dental Pro) نظام متكامل لعيادات الأسنان الحديثة. يحجز المرضى المواعيد أونلاين، ويدير الطاقم سجلات المرضى وتواريخ العلاج والمواعيد والفواتير والمخزون من لوحة واحدة. النظام ينبه عند نقص المستلزمات (مثلا: 1 مستلزم وصل للحد الأدنى)، ويؤتمت الفوترة مع متابعة المدفوعات، ويقدم تقارير قوية عن الإيرادات والمواعيد والاحتفاظ بالمرضى. مصمم بالعربية أولا مع واجهة سريعة ونظيفة.',
        shortDescription: 'منصة عيادة أسنان: حجز مواعيد، سجلات مرضى، فوترة آلية، ومخزون ذكي للمستلزمات.',
        features: [
          'حجز مواعيد أونلاين مع تقويم وإتاحة لحظية.',
          'سجلات مرضى مركزية مع تاريخ العلاج والزيارات.',
          'فوترة آلية مع حالات دفع (مدفوعة/غير مدفوعة/جزئية) وإيصالات.',
          'مخزون ذكي لمستلزمات الأسنان مع تنبيهات نقص (مثلا: 1 متبقي).',
          'لوحات بصلاحيات للطبيب والاستقبال والمدير مع دعم RTL.',
        ],
        impact: [
          'تقليل عدم الحضور بجدولة واضحة وتذكير.',
          'بيانات مركزية لتشخيص ومتابعة أفضل.',
          'تحسين التدفق النقدي بفوترة ومتابعة مدفوعات آلية.',
          'تجنب نفاد المخزون الحرج بتنبيهات نقص.',
        ],
        tech     : ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/Pharmacy-Website',
        images   : [diggipacks1, diggipacks2, diggipacks3],
      },
      {
        id          : 'law360d-legal',
        title       : 'Vendbase - منصة SaaS متعددة المستأجرين',
        shortTitle  : 'Vendbase',
        period      : '06/2025',
        category    : 'SaaS',
        status      : 'قيد التطوير',
        image       : law360d3,
        description : 'حل SaaS متعدد المستأجرين — كل مكتب محاماة له مساحة معزولة بنطاق فرعي ولوحة تحكم خاصة.',
        fullDescription: 'منصة مؤسسية لمؤسسات قانونية في السعودية — كل مستأجر ببيئة معزولة ونطاق فرعي ومصادقة JWT تدرك هوية المستأجر.',
        shortDescription: 'SaaS متعدد المستأجرين مع عزل كامل وصلاحيات أدوار.',
        features: [
          'عزل كامل للبيانات بين المستأجرين.',
          'نطاقات فرعية ديناميكية لكل مساحة.',
          'لوحات تحكم معزولة لكل مستأجر.',
          'إعدادات قابلة للتخصيص.',
          'مصادقة آمنة لكل مستأجر.',
        ],
        impact: [
          'إدراج مكاتب متعددة على نفس الكود.',
          'خصوصية مؤسسية لكل مستأجر.',
          'تكلفة بنية أقل.',
          'توسع مستقل لكل مكتب.',
        ],
        tech     : ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/E-Commerce-',
        images   : [law360d, law360d1, law360d2],
      },
      {
        id          : 'muzdakhar-realestate',
        title       : 'نظام إدارة الصيدلية الذكي',
        shortTitle  : 'نظام الصيدلية',
        period      : '04/2024',
        category    : 'التكنولوجيا الصحية',
        status      : 'مكتمل',
        image       : pharmacySystemImg,
        description : 'نظام متكامل لتبسيط الصرف ومراقبة المخزون وسجلات المرضى.',
        fullDescription: 'حل رقمي متكامل — إدارة وصفات ومخزون وتحليلات مبيعات وسجلات مرضى في منصة واحدة.',
        shortDescription: 'مخزون ذكي ووصفات آلية وتحليلات فورية.',
        features: [
          'تتبع ذكي للمخزون مع تنبيهات',
          'معالجة وصفات وسجلات إلكترونية',
          'تقارير مبيعات فورية',
          'مصادقة بصلاحيات',
          'واجهة عربية RTL متجاوبة',
        ],
        impact: [
          'كفاءة أعلى وسلامة أدوية',
          'أخطاء يدوية أقل',
          'خدمة أسرع للمرضى',
        ],
        tech     : ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        demoLink : '',
        codeLink : 'https://github.com/osama-kamal/pharmacy-management-system',
        images   : [mozdakhar, mozdakhar1, mozdakhar2],
      },
    ],
  },
};

export default projectsData;
