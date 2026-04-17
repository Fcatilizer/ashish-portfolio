export const workProjectsData = [
  {
    name: "Admin Panel",
    desc: "An Admin Panel to manage customers, websites, announcements, banners, settings and more.",
    detailedDesc: `This comprehensive admin panel provides complete control over customer management, website configurations, and content delivery.

Key Features:
• Admin Dashboard with overview metrics and quick access links
• Customer database management with search and filter
• Manage Customers webportal access, permissions and announcements
• Add custom banners "Main, Secondary, Promotional" on Customer Portal Websites
• Both Announcements & Banners support Individual or Global targeting
• Individual Customer Permissions and Global Permissions management`,
    images: ["/acp1.png", "/acp2.png"],
    technologies: ["Django", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com",
    linkLabel: "Learn More",
  },
  {
    name: "EnkiNext: Web Portal",
    desc: "EnkiNext web portal with responsive Android and iPhone experiences for core user workflows.",
    detailedDesc: `Your B2B wholesalers export at fingertips.

Enkiportal is a B2B customer portal designed for wholesalers, distributors, and business customers involved in bulk food and vegetables exports.

This app provides authorized customers with a centralized platform to browse product catalogs, check availability, and review business documents without relying on continuous communication with the sales team.

Key features include:
- Browse product catalogs and stock information
- Search products and request quotations
- View quotation history and quotation details
- Access sales orders, invoices, and shipment details
- Download PDFs copies of orders and invoices
- Receive announcements and banners for offers or important information
- update account profile details such as name, contact information, and password

The app does not support in-app payments. All commercial transactions, confirmations, and fulfilment are handled directly by the sales team through existing business process.

Access to Enkiportal is restricted to pre-approved business customers. Accounts are managed by the company, and access may be revoked in case of misuse or policy violations.

This application is intended strictly for business use and serves as a digital bridge between customers and the sales team to streamline information sharing, improve efficiency, and reduce manual communication.`,
    images: [
      "/Screenshots/a1.png",
      "/Screenshots/a2.png",
      "/Screenshots/a3.png",
      "/Screenshots/i1.webp",
      "/Screenshots/i2.webp",
      "/Screenshots/i3.webp",
      "/Screenshots/i4.webp",
    ],
    imageMode: "portrait",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    storeLinks: [
      {
        label: "Apple App Store",
        url: "https://apps.apple.com/in/app/enki-webportal/id6756568286",
      },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.sukan.webportal&hl=en_IN",
      },
    ],
    link: "https://play.google.com",
    linkLabel: "Learn More",
  },
  {
    name: "Edu Nova",
    desc: "An Education Platform Management Software for Admins and Teachers.",
    detailedDesc: `Edu Nova is an education platform management software designed for Admins and Teachers.

It allows Admins and Teachers to manage:
- Class Packages
- Offline Book Purchase
- Teaching and Learning Material
- Session Management
- Quiz and Tests
- Faculty Team Listings
- Payment and Revenue Dashboard
- Other day-to-day education workflow operations`,
    images: ["EDUNOVA1.png", "EDUNOVA2.png"],
    technologies: ["Django", "SQLite"],
    storeLinks: [
      {
        label: "Website",
        url: "https://edunova0608.in/",
      },
    ],
    link: "https://edunova0608.in/",
    linkLabel: "Learn More",
  },
  {
    name: "EDU NOVA - Mobile",
    desc: "Android and iOS application for Students.",
    detailedDesc: `EDU NOVA - Mobile is an Android and iOS application focused on student learning journeys.

Through this app, students can:
- Sign Up and Sign In
- Purchase class packages
- Watch and learn through learning materials
- Take quizzes and tests
- Buy physical books`,
    images: ["/Screenshots/EN1.png", "/Screenshots/EN2.png", "/Screenshots/EN6.png", "/Screenshots/EN7.png"],
    imageMode: "portrait",
    technologies: ["Android", "iOS"],
    storeLinks: [
      {
        label: "Apple App Store (TBA)",
        url: "#",
      },
      {
        label: "Google Play Store (TBA)",
        url: "#",
      },
    ],
    link: "https://edunova0608.in/",
    linkLabel: "Learn More",
  },
];
