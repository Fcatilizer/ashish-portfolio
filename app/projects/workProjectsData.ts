import type { ProjectStatus } from "@/config/project-badges";

export type ProjectCategory = "Freelance" | "Work" | "Personal";
export type ProjectVisual = "education" | "sukan" | "mammam" | "samaro";

export interface ProjectImage {
  src: string;
  alt: string;
  presentation: "cover" | "icon";
}

export interface ProjectCoverComposition {
  desktop: { src: string; width: number; height: number };
  mobile?: { src: string; width: number; height: number };
  address: string;
  caption: string;
  logo?: { src: string; alt: string };
}

export interface ProjectProduct {
  id: string;
  name: string;
  type: string;
  summary: string;
  logo?: { src: string; alt: string };
  status?: ProjectStatus;
  description: string | string[];
  work: string[];
  images: string[];
  imageMode: "landscape" | "portrait";
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface ProjectGroup {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "Personal">;
  field: string;
  visual: ProjectVisual;
  cover?: ProjectCoverComposition;
  summary: string;
  overview: string | string[];
  role?: string;
  roleDescription?: string;
  work?: string[];
  technologies?: string[];
  note?: string;
  status?: ProjectStatus;
  areas: string[];
  products: ProjectProduct[];
  links?: { label: string; url: string }[];
}

export const projectGroups: ProjectGroup[] = [
  {
    id: "edu-nova",
    name: "Edu Nova",
    category: "Freelance",
    field: "Education",
    visual: "education",
    cover: {
      desktop: { src: "/EDUNOVA2.png", width: 1868, height: 965 },
      mobile: { src: "/Screenshots/EN2.png", width: 1080, height: 2400 },
      address: "Edu Nova · Learning platform",
      caption: "A whole learning ecosystem",
      logo: { src: "/edunova.png", alt: "Edu Nova logo" },
    },
    summary: "One learning ecosystem. From the people running it to the students using it.",
    overview:
      "An education platform connecting the administrative side of learning with the student experience. It combines a management platform for admins and teachers with a companion app for students on Android and iOS.",
    areas: ["Web platform", "Superadmin Dashboard", "Admin Dashboard", "Teacher Dashboard", "Android", "iOS"],
    products: [
      {
        id: "management-platform",
        name: "Management platform",
        type: "Web application",
        summary: "The workspace for admins and teachers.",
        description:
          "A central platform for the day-to-day work of running an education business, from organizing classes and teaching materials to managing purchases and revenue.",
        work: [
          "Class packages, sessions, and faculty listings",
          "Teaching materials, quizzes, and tests",
          "Offline book purchases and learning resources",
          "Payment and revenue dashboards",
        ],
        images: ["/EDUNOVA1.png", "/EDUNOVA2.png"],
        imageMode: "landscape",
        technologies: ["Django", "PostgreSQL", "Django Templates", "REST APIs", "Git", "Github"],
        links: [{ label: "Visit website", url: "https://edunova0608.in/" }],
      },
      {
        id: "student-app",
        name: "Student app",
        type: "Android & iOS",
        summary: "Learning, practice, and purchases on the go.",
        description:
          "The student-facing side of Edu Nova. An Android and iOS app that brings learning materials, class packages, practice tests, and book purchases into one place.",
        work: [
          "Student sign-up and sign-in journeys",
          "Class package discovery and purchases",
          "Access to video lessons and learning materials",
          "Quizzes, tests, and physical book purchases",
        ],
        images: ["/Screenshots/EN1.png", "/Screenshots/EN2.png", "/Screenshots/EN6.png", "/Screenshots/EN7.png"],
        imageMode: "portrait",
        technologies: ["Flutter", "Razorpay", "Android Studio", "Xcode"],
        links: [
          { label: "App Store", url: "https://apps.apple.com/in/app/edu-nova-edu/id6779919602" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.edu.nova&hl=en_IN" },
        ],
      },
    ],
  },
  {
    id: "sukan",
    name: "Sukan",
    category: "Work",
    field: "Business tools",
    visual: "sukan",
    cover: {
      desktop: { src: "/acp1.png", width: 1919, height: 940 },
      mobile: { src: "/Screenshots/a1.png", width: 648, height: 1440 },
      address: "Sukan · Admin workspace",
      caption: "Two sides. One connected workflow.",
      logo: { src: "/sukan.png", alt: "Sukan logo" },
    },
    summary: "Connected tools for the business behind the scenes and the customers out front.",
    overview:
      "Sukan's internal admin panel and EnkiNext customer portal connect business operations with the customer experience. Together, they support customer access, product discovery, business documents, and communications.",
    areas: ["Web platform", "Admin dashboard", "Android", "iOS"],
    products: [
      {
        id: "admin-panel",
        name: "Admin panel",
        type: "Internal web application",
        summary: "A control center for customers, content, and access.",
        description:
          "An administrative workspace for managing customer records, portal access, website configuration, and the content customers see.",
        work: [
          "Dashboard metrics and quick-access workflows",
          "Customer management with search and filters",
          "Customer portal access and permission controls",
          "Individual and global announcement targeting",
          "Main, secondary, and promotional banner management",
        ],
        images: ["/acp1.png", "/acp2.png"],
        imageMode: "landscape",
        technologies: ["Django", "Tailwind CSS", "PostgreSQL", "Django Templates", "REST APIs", "Git", "Azure DevOps"],
      },
      {
        id: "enkinext",
        name: "EnkiNext / Enkiportal",
        logo: { src: "/enkinext.png", alt: "EnkiNext logo" },
        type: "Customer portal · Android & iOS",
        summary: "A direct connection between wholesalers and their customers.",
        description:
          "A B2B portal for approved wholesale and distribution customers to browse products, request quotations, and access business documents. Commercial transactions and fulfillment are handled by the sales team.",
        work: [
          "Product catalogs, stock information, and search",
          "Quotation requests, history, and details",
          "Sales orders, invoices, shipment details, and PDF downloads",
          "Customer announcements and promotional banners",
          "Account profile and password management",
        ],
        images: ["/Screenshots/a1.png", "/Screenshots/a2.png", "/Screenshots/a3.png", "/Screenshots/i1.webp", "/Screenshots/i2.webp", "/Screenshots/i3.webp", "/Screenshots/i4.webp"],
        imageMode: "portrait",
        technologies: ["Flutter", "Android Studio", "Xcode"],
        links: [
          { label: "App Store", url: "https://apps.apple.com/in/app/enki-webportal/id6756568286" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.sukan.webportal&hl=en_IN" },
        ],
      },
    ],
  },
  {
    id: "mammam",
    name: "Mammam",
    category: "Freelance",
    field: "Fresh produce & delivery",
    visual: "mammam",
    cover: {
      desktop: { src: "/Screenshots/m2.png", width: 2838, height: 1764 },
      mobile: { src: "/Screenshots/ma1.png", width: 1080, height: 2400 },
      address: "Mammam · Web platform",
      caption: "Web platform + Android app",
      logo: { src: "/mammam.png", alt: "Mammam app logo" },
    },
    summary: "Fresh produce, from farmers to the doorstep. A connected web and mobile experience.",
    overview:
      "Mammam — Our Little Potato Farmer delivers seasonal fruits and vegetables from local farms to customers by early morning. Overnight orders guide farm purchases at dawn and delivery within hours, avoiding days of stored stock. The service combines clear pricing and plastic-free packaging with a customer app, an operations dashboard, and a public landing page, supported by backend services and deployment infrastructure.",
    status: "new",
    areas: ["Web platform", "Admin dashboard", "Android", "iOS"],
    links: [
      { label: "Visit website", url: "https://ourlittlepotatofarmer.com/" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ourlittlepotatofarmer.mammam" },
    ],
    products: [
      {
        id: "web-platform",
        name: "Web platform",
        type: "Landing page & admin dashboard",
        summary: "The public storefront and the workspace behind daily operations.",
        description: [
          "Public landing page explaining farm sourcing, morning delivery, and sustainable packaging.",
          "Starter basket builder to help customers plan essentials before downloading the app.",
          "Operations dashboard connecting customer demand, farm procurement, inventory, and fulfillment.",
        ],
        work: [
          "Catalog management for products, categories, and variants",
          "City and locality controls to enable or pause delivery coverage",
          "City-specific delivery fees: flat rates, distance-based charges, and free-delivery thresholds",
          "Seasonal offers, product discounts, and promotional banners reflected in the app",
          "Procurement lists and restock alerts with demand grouped by product and unit",
          "Revenue and order monitoring, including payments, cancellations, customers, and fulfillment",
          "Django REST APIs for authentication, pricing, promotions, and order state changes",
          "MongoDB data, RustFs media storage, and Docker deployments through Nginx and Dokploy",
        ],
        images: ["/Screenshots/m1.png", "/Screenshots/m2.png", "/Screenshots/m3.png", "/Screenshots/m4.png", "/Screenshots/m5.png"],
        imageMode: "landscape",
        technologies: ["Django", "Riverpod", "Ant Design", "React Js", "Vite", "REST APIs", "Git", "Dokploy", "MongoDB", "Docker", "Nginx", "RustFs"],
        links: [{ label: "Visit website", url: "https://ourlittlepotatofarmer.com/" }],
      },
      {
        id: "android-app",
        name: "Android app",
        type: "Customer mobile application",
        summary: "Seasonal fruit and vegetables, ordered for doorstep delivery.",
        description: [
          "Flutter customer app with Riverpod state management for everyday grocery orders.",
          "Browse seasonal produce, build a basket, and arrange morning delivery.",
        ],
        work: [
          "Daily picks, seasonal categories, search, and active offers",
          "Product details, quantity selection, and basket actions",
          "Address eligibility and delivery fees based on city and service availability",
          "Checkout breakdown with item totals, GST, discounts, delivery charges, and savings",
          "Morning delivery slots, including before 7 AM, with customer delivery notes",
          "Live order progress from confirmation through dispatch to delivery",
          "Customer profiles, saved addresses, order history, and support",
          "Notification preferences and account settings",
        ],
        images: ["/Screenshots/ma1.png", "/Screenshots/ma2.png", "/Screenshots/ma3.png", "/Screenshots/ma4.png", "/Screenshots/ma5.png", "/Screenshots/ma6.png"],
        imageMode: "portrait",
        technologies: ["Flutter", "Riverpod", "Android Studio", "Xcode"],
        links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ourlittlepotatofarmer.mammam" }],
      },
    ],
  },
  {
    id: "samaro-ai",
    name: "Samaro AI",
    category: "Work",
    field: "Photography & events",
    visual: "samaro",
    cover: {
      desktop: { src: "/samaroai.png", width: 2838, height: 1764 },
      address: "samaro.ai · Company website",
      caption: "Company website · Photography & event workflows",
      logo: { src: "/samaro.png", alt: "Samaro logo" },
    },
    summary: "CRM, CRM Inbox, and Meta platform integrations with Django and Python backend services.",
    overview:
      "Samaro builds AI-powered tools for photographers, studios, and event teams. Its platform brings together camera-to-cloud workflows, photo culling and editing, facial recognition, branded galleries, and media delivery.",
    role: "Software Engineer Intern",
    roleDescription:
      "The CRM and CRM Inbox use Django and Python backend services, with Meta API integrations for WhatsApp and Instagram Business Embedded Signup. The frontend uses Angular.",
    work: [
      "CRM and CRM Inbox backend services",
      "WhatsApp integration through Meta APIs",
      "Instagram Business Embedded Signup and related Meta platform integrations",
      "Backend product features and platform integrations",
      "Angular frontend",
    ],
    technologies: ["Python", "Django", "Celery", "Redis", "RabbitMQ", "PostgreSQL", "pgAdmin", "Meta APIs"],
    status: "current",
    areas: ["Backend", "CRM & Inbox", "Meta APIs"],
    products: [],
    links: [{ label: "Explore Samaro AI", url: "https://samaro.ai/" }],
  },
];

export const currentCompany = projectGroups.find((project) => project.category === "Work" && project.status === "current");

export interface PersonalProject {
  id: string;
  name: string;
  category: "Personal";
  field: string;
  summary: string;
  areas: string[];
  status: ProjectStatus;
  image: ProjectImage;
  link: string;
  linkLabel: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: "eye-care",
    name: "Eye Care",
    category: "Personal",
    field: "Android app",
    summary: "Eye prescriptions, saved in the cloud and accessible wherever you are.",
    areas: ["Android"],
    status: "maintained",
    image: { src: "/projects/eye-care.png", alt: "Eye Care app preview", presentation: "cover" },
    link: "https://play.google.com/store/apps/details?id=com.a3.eyecare",
    linkLabel: "Download on Google Play",
  },
  {
    id: "library-management",
    name: "Library Management",
    category: "Personal",
    field: "Open source",
    summary: "A simpler way for students and teachers to find, assign, and manage books.",
    areas: ["Open source"],
    status: "archived",
    image: { src: "/ic_launcher.png", alt: "Library Management app icon", presentation: "icon" },
    link: "https://github.com/Fcatilizer/Library_Management",
    linkLabel: "View archived source",
  },
];
