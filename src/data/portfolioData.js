import sqliteImg from "../assets/sqlite.jpg";
import reactImg from "../assets/skill05.png";
import tsImg from "../assets/skill08.png";
import jsImg from "../assets/skill03.png";
import angularImg from "../assets/skill06.png";
import ionicImg from "../assets/skill13.png";
import htmlImg from "../assets/skill01.png";
import cssImg from "../assets/skill02.png";
import tailwindImg from "../assets/skill07.png";
import bootstrapImg from "../assets/skill04.png";
import gitImg from "../assets/git.png";
import githubImg from "../assets/github.png";
import postmanImg from "../assets/postman.png";
import androidImg from "../assets/android.png";
import iosImg from "../assets/ios.png";
import nodeImg from "../assets/node.png";

// Project mockups (Authentic Google Play Store screenshots on MacBook)
import vakilClientImg from "../assets/vakiluncle.png";
import vakilAdvocateImg from "../assets/vakiladvocate.png";
import turningBrainImg from "../assets/turningbrain.png";
import lcmisImg from "../assets/lcmis.png";
import macreelCmsImg from "../assets/macreelcms.png";
import matdaanCrmImg from "../assets/matdaancrm.png";
import taWorldImg from "../assets/taworld.png";

export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  title: "Mobile Application Developer • React Native Developer",
  shortRole: "Senior React Native & Mobile App Engineer",
  tagline: "Engineering scalable, high-performance cross-platform iOS & Android mobile applications with clean architecture and seamless UX.",
  bio: "Results-driven React Native Mobile Developer with 1.9 years of professional experience engineering scalable, high-performance cross-platform applications for iOS and Android. Expert in integrating secure JWT authentication, Razorpay payment gateways, Google OAuth, real-time chat, and push notifications (FCM/APNs). Proficient in end-to-end app deployment, OTA updates via Expo/EAS, and building clean, component-based architectures to optimize application performance and deliver seamless user experiences.",
  location: "Noida, UP, India",
  email: "kumarrohit35511@gmail.com",
  phone: "+91 9631128492",
  phoneDisplay: "+91 96311 28492",
  portfolioUrl: "https://rohit-kr-portfolio.vercel.app",
  githubUrl: "https://github.com/RohitKumar773",
  linkedinUrl: "https://www.linkedin.com/in/rohit-kumar-18a749245/",
  twitterUrl: "https://x.com/RohitKu84499807",
  instagramUrl: "https://www.instagram.com/__r_o_h_i_t__kumar__/",
  stats: [
    { label: "Years Experience", value: "1.9+", suffix: "Years" },
    { label: "Live Play Store Apps", value: "7+", suffix: "Production Apps" },
    { label: "Active App Downloads", value: "5K+", suffix: "Students & Clients" },
    { label: "Crash-Free Rate", value: "99.8%", suffix: "Reliability" },
  ]
};

// Skills updated according to user request:
// REMOVED: express, mongodb, figma, adobe, mysql
// ADDED: sqlite with sqliteImg
export const SKILLS_DATA = [
  {
    category: "Mobile Engineering",
    iconName: "Smartphone",
    skills: [
      { name: "React Native (CLI & Expo)", img: reactImg, level: "Expert", badge: "Core" },
      { name: "Android with Kotlin", img: androidImg, level: "Advanced", badge: "Native" },
      { name: "iOS Development", img: iosImg, level: "Advanced", badge: "Native" },
      { name: "Ionic Framework", img: ionicImg, level: "Intermediate", badge: "Hybrid" },
    ]
  },
  {
    category: "Languages & Frameworks",
    iconName: "Code",
    skills: [
      { name: "TypeScript", img: tsImg, level: "Advanced", badge: "Primary" },
      { name: "JavaScript (ES6+)", img: jsImg, level: "Expert", badge: "Primary" },
      { name: "React.js", img: reactImg, level: "Advanced", badge: "Frontend" },
      { name: "Angular", img: angularImg, level: "Intermediate", badge: "Frontend" },
      { name: "Node.js", img: nodeImg, level: "Intermediate", badge: "Backend" },
    ]
  },
  {
    category: "Databases & Local Storage",
    iconName: "Database",
    skills: [
      { name: "SQLite", img: sqliteImg, level: "Advanced", badge: "Offline DB" },
      { name: "AsyncStorage", img: reactImg, level: "Expert", badge: "Local State" },
      { name: "Secure Storage", img: androidImg, level: "Advanced", badge: "Keychain/Keystore" },
      { name: "Firebase Firestore", img: nodeImg, level: "Advanced", badge: "Cloud DB" },
    ]
  },
  {
    category: "Styling & UI Systems",
    iconName: "Palette",
    skills: [
      { name: "Tailwind CSS", img: tailwindImg, level: "Expert", badge: "Styling" },
      { name: "HTML5", img: htmlImg, level: "Expert", badge: "Markup" },
      { name: "CSS3 / SCSS", img: cssImg, level: "Expert", badge: "Styles" },
      { name: "Bootstrap", img: bootstrapImg, level: "Advanced", badge: "UI Kit" },
    ]
  },
  {
    category: "Tools, VCS & CI/CD",
    iconName: "Wrench",
    skills: [
      { name: "Git", img: gitImg, level: "Expert", badge: "Version Control" },
      { name: "GitHub", img: githubImg, level: "Expert", badge: "Collaboration" },
      { name: "Postman", img: postmanImg, level: "Expert", badge: "API Testing" },
    ]
  }
];

// Flat list for compact grids & badges
export const ALL_SKILLS = [
  { name: "React Native", img: reactImg, tag: "Mobile Core" },
  { name: "TypeScript", img: tsImg, tag: "Language" },
  { name: "JavaScript (ES6+)", img: jsImg, tag: "Language" },
  { name: "SQLite", img: sqliteImg, tag: "Offline Database" },
  { name: "Android with Kotlin", img: androidImg, tag: "Mobile OS" },
  { name: "iOS Development", img: iosImg, tag: "Mobile OS" },
  { name: "React.js", img: reactImg, tag: "Web Library" },
  { name: "Angular", img: angularImg, tag: "Framework" },
  { name: "Ionic", img: ionicImg, tag: "Hybrid Apps" },
  { name: "Node.js", img: nodeImg, tag: "Backend Runtime" },
  { name: "Tailwind CSS", img: tailwindImg, tag: "Styling" },
  { name: "Git", img: gitImg, tag: "Version Control" },
  { name: "GitHub", img: githubImg, tag: "Repository" },
  { name: "Postman", img: postmanImg, tag: "API Debugging" },
  { name: "HTML5", img: htmlImg, tag: "Web Core" },
  { name: "CSS3", img: cssImg, tag: "Web Core" },
  { name: "Bootstrap", img: bootstrapImg, tag: "UI Framework" },
];

// Highlighted competencies matching resume
export const CORE_COMPETENCIES = [
  {
    title: "Cross-Platform Architecture",
    description: "Building production-grade, reusable mobile component architectures for iOS & Android with unified state management via Redux Toolkit.",
    icon: "Layers"
  },
  {
    title: "Fintech & Payments",
    description: "End-to-end integration of Razorpay payment gateways, recurring subscriptions, invoice reconciliation, and secure checkout workflows.",
    icon: "CreditCard"
  },
  {
    title: "Real-Time Chat & VoIP Calling",
    description: "Engineering low-latency in-app chat systems, audio/video consultations with WebRTC, SignalR, socket events, and instant message synchronization.",
    icon: "MessageSquare"
  },
  {
    title: "Offline-First & Local DB",
    description: "Implementing resilient offline storage architectures using SQLite, Secure Storage, and background sync for field operations without connectivity.",
    icon: "Database"
  },
  {
    title: "Cloud Messaging & Notifications",
    description: "Configuring Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) for high-deliverability push alerts and deep linking.",
    icon: "Bell"
  },
  {
    title: "OTA Updates & App Store Releases",
    description: "Publishing and maintaining apps on Google Play Console, managing OTA updates via EAS/Expo, build pipelines, and production release cycles.",
    icon: "Rocket"
  }
];

// 7 Live Projects strictly from user request
export const PROJECTS_DATA = [
  {
    id: "vakil-uncle-client",
    name: "Vakil Uncle (Client App)",
    subtitle: "On-Demand Legal Consultation & Citizen Legal Access",
    category: "Legal Tech",
    badge: "Production App",
    image: vakilClientImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vakiluncleclient.macreel&hl=en_IN",
    packageId: "com.vakiluncleclient.macreel",
    featured: true,
    downloads: "Live on Play Store",
    overview: "A comprehensive legal tech mobile platform designed for citizens to easily find, consult, and collaborate with verified legal advocates across India with real-time consultation and automated payments.",
    highlights: [
      "Engineered real-time chat and in-app calling capabilities connecting clients directly to specialized advocates.",
      "Integrated Razorpay payment gateway for secure appointment booking, digital fee transactions, and automated invoices.",
      "Built clean multi-step appointment scheduler with calendar availability and automated push notification reminders.",
      "Integrated document upload vault for client case files with secure token-based cloud access."
    ],
    techStack: ["React Native", "WebRTC", "Razorpay", "Redux Toolkit", "FCM", "REST APIs", "Axios"]
  },
  {
    id: "vakil-uncle-advocate",
    name: "Vakil Uncle Business (Advocate)",
    subtitle: "Enterprise Legal Practice Management & Court Diary",
    category: "Legal Tech",
    badge: "Enterprise SaaS",
    image: vakilAdvocateImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vakiluncleadvocate.macreel&hl=en_IN",
    packageId: "com.vakiluncleadvocate.macreel",
    featured: true,
    downloads: "Live on Play Store",
    overview: "A specialized enterprise mobile application for advocates and law practices to manage court hearing diaries, track client appointments, handle live consultations, and monitor revenue streams.",
    highlights: [
      "Architected multi-role advocate dashboard displaying upcoming court hearings, case priority queues, and pending briefs.",
      "Engineered real-time consultation accept/reschedule module with instant client communication hooks.",
      "Implemented financial ledger tracking consultation earnings, disbursement records, and client payment statuses.",
      "Integrated Google OAuth and multi-factor JWT session handling for strictly confidential legal workflows."
    ],
    techStack: ["React Native", "Google OAuth", "React Navigation", "Redux Toolkit", "Axios", "Push Notifications"]
  },
  {
    id: "turning-brain",
    name: "Turning Brain Dr Preeti Tyagi",
    subtitle: "Medical Science Video Learning & MCQ Exam Prep",
    category: "EdTech & Medical",
    badge: "5K+ Downloads",
    image: turningBrainImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=tbrain.in.medical.eduapp&hl=en_IN",
    packageId: "tbrain.in.medical.eduapp",
    featured: true,
    downloads: "5,000+ Downloads",
    overview: "High-yield medical education application by renowned educator Dr. Preeti Tyagi, guiding thousands of MBBS (1st Year), BDS, and FMGE students through physiology video lectures, mock test series, and high-yield notes.",
    highlights: [
      "Scaled to 5,000+ active downloads on Google Play Store.",
      "Engineered seamless recurring subscription checkout flow with Razorpay Payment Gateway integration.",
      "Built high-performance interactive MCQ quiz engine with timer, unit-wise grading, and performance analytics.",
      "Optimized video streaming player with bandwidth adaptation, offline cache capabilities, and DRM safeguards."
    ],
    techStack: ["React Native", "Razorpay SDK", "FCM Notifications", "Redux Toolkit", "REST APIs", "Video Streaming"]
  },
  {
    id: "lcmis",
    name: "LCMIS (Legal Case Management)",
    subtitle: "Institutional & Government Legal Case Tracking",
    category: "GovTech & Enterprise",
    badge: "Enterprise Grade",
    image: lcmisImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lcmis.mac.app&hl=en_IN",
    packageId: "com.lcmis.mac.app",
    featured: false,
    downloads: "Enterprise Active",
    overview: "A Legal Case Management Information System tailored for institutional and government bodies to monitor ongoing litigation, court dates, hearing schedules, and departmental compliance across judicial tiers.",
    highlights: [
      "Developed high-security case indexation module with instant search across case numbers, court benches, and litigants.",
      "Implemented automated hearing date alert system with background notification sync.",
      "Built role-based administrative authorization system with biometric login and encrypted token management.",
      "Created digital compliance repository for affidavits, court judgments, and official rejoinders."
    ],
    techStack: ["React Native", "JWT Auth", "Secure Storage", "Redux", "REST APIs", "Biometric Auth"]
  },
  {
    id: "macreel-cms",
    name: "Macreel CMS",
    subtitle: "Enterprise Workforce & Operations Management",
    category: "Enterprise & Operations",
    badge: "Internal Ops",
    image: macreelCmsImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.macreelinfosoft.cms&hl=en_IN",
    packageId: "com.macreelinfosoft.cms",
    featured: false,
    downloads: "Enterprise",
    overview: "All-in-one operations management suite for enterprise teams to streamline daily task delegation, geo-fenced attendance marking, transaction overview, and team performance visibility.",
    highlights: [
      "Engineered geo-location verified check-in / check-out preventing proxy attendance and tracking field staff.",
      "Built dynamic task delegation kanban board with sprint statuses, priority tags, and deadline notifications.",
      "Integrated department financial dashboards showing company expense logs and monthly revenue milestones.",
      "Streamlined real-time announcements broadcast with deep-link navigation."
    ],
    techStack: ["React Native", "TypeScript", "Context API", "Geolocation", "Push Notifications", "Axios"]
  },
  {
    id: "matdaan-crm",
    name: "Matdaan CRM",
    subtitle: "Booth-Level Political Intelligence & Voter Management",
    category: "CivicTech & Field",
    badge: "Field Operations",
    image: matdaanCrmImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.macreelinfosoft.matdaancrm&hl=en_IN",
    packageId: "com.macreelinfosoft.matdaancrm",
    featured: false,
    downloads: "High-Volume Field",
    overview: "A specialized field operations CRM designed for election coordinators, booth agents, and campaign managers to manage voter registries, track booth statistics, and coordinate field teams.",
    highlights: [
      "Engineered offline-first local voter search and family mapping engine powered by embedded SQLite database.",
      "Built field volunteer task dispatch system with geolocation mapping and polling booth assignment.",
      "Created real-time voter turnout analytics dashboard reporting hourly voting trends to campaign war rooms.",
      "Implemented secure encrypted data export and synchronization upon network restoration."
    ],
    techStack: ["React Native", "SQLite (Offline DB)", "REST APIs", "Redux Toolkit", "Chart UI", "Geo-coordinates"]
  },
  {
    id: "ta-world",
    name: "TA World",
    subtitle: "B2B Hotel Booking & Travel Distribution Portal",
    category: "TravelTech & B2B",
    badge: "B2B Marketplace",
    image: taWorldImg,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.anonymous.TA_World_rn&hl=en_IN",
    packageId: "com.anonymous.TA_World_rn",
    featured: false,
    downloads: "B2B Agents",
    overview: "A B2B travel distribution application empowering travel agents and sub-agents to access live hotel inventories, manage reservation markups, execute wallet transactions, and generate automated booking vouchers.",
    highlights: [
      "Engineered high-speed hotel discovery and availability engine with filtering by amenities, ratings, and price bands.",
      "Built multi-tier agent wallet management system with real-time balance debits, top-ups, and credit limits.",
      "Implemented automated reservation confirmation voucher generator with instant PDF rendering and sharing.",
      "Integrated dynamic mark-up calculator allowing agents to quote customized client rates on the fly."
    ],
    techStack: ["React Native", "Redux Toolkit", "Payment Integration", "PDF Rendering", "REST APIs", "Secure Storage"]
  }
];

// Experience kept ONLY from resume as requested
export const EXPERIENCE_DATA = [
  {
    company: "Macreel Infosoft Pvt. Ltd.",
    role: "Mobile Application Developer (React Native & Mobile)",
    duration: "Feb 2025 – Present",
    period: "Feb 2025 - Present",
    location: "Noida, UP, India",
    type: "Full-Time",
    status: "Current",
    overview: "Leading cross-platform mobile development across enterprise, EdTech, legal tech, and government-tier client applications using React Native, TypeScript, and native modules.",
    bullets: [
      "Engineered scalable cross-platform React Native applications for iOS & Android with clean architecture, reusable components, Redux Toolkit, React Navigation, and deep linking to deliver seamless production-grade user experiences.",
      "Implemented secure JWT Authentication, Google OAuth, Razorpay Payment Integration, Real-Time Chat Features, Push Notifications (FCM/APNs), and secure REST API integration across multiple live mobile applications.",
      "Managed end-to-end mobile app lifecycle including App Deployment, OTA updates (Expo/EAS), Firebase integration, CI/CD workflows, performance optimization, and production release management for enterprise and government-based applications.",
      "Successfully launched and maintained 7 production mobile applications on Google Play Store with 99.8% crash-free stability."
    ],
    techUsed: [
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "SQLite",
      "Razorpay",
      "WebRTC",
      "FCM / APNs",
      "Firebase",
      "Expo / EAS",
      "Android Studio",
      "Xcode",
      "REST APIs"
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Computer Applications (BCA)",
  major: "Computer Science",
  institution: "Babasaheb Bhimrao Ambedkar Bihar University",
  period: "2022 – Expected 2027",
  coursework: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Software Engineering",
    "Web & Mobile Technologies"
  ]
};
