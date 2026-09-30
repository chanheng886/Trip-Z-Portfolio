// Centralized Project & Team Data for TripZ Showcase
// Replace URLs, names, and social links easily here.
import member1img from "../assets/chanheng_97.jpg";
import member2img from "../assets/supheng.png";
import member3img from "../assets/nita.png";
import member4img from "../assets/viseth.png";
import member5img from "../assets/jeany.png";
import member6img from "../assets/cheata.png";

export const APP_LINKS = {
  APK_URL: "/downloads/TripZ-v1.2.0.apk",
  IPA_URL: "/downloads/TripZ-v1.2.0.ipa",
  WEB_APP_URL: "https://trip-z-web-application.web.app",
  GITHUB_REPO: "https://github.com/unnooob/tripz",
};

export const PROJECT_INFO = {
  name: "TripZ",
  tagline: "Explore Cambodia with Confidence & Comfort",
  supportingTagline: "Your Journey. Your Way. One TripZ.",
  team: "Unnooob",
  year: "2026",
  badge: "UNNOOOB PROJECT • 2026",
  description:
    "TripZ is a modern transportation platform designed to make traveling across Cambodia simpler, more convenient, and more connected.",
  longDescription:
    "TripZ is a transportation platform created to improve the experience of traveling between destinations across Cambodia. The platform combines bus transportation, location services, schedules, and digital booking into one connected experience. The actual booking functionality is available through the TripZ mobile and web applications, while this portfolio website serves as the official project showcase.",
};

export const ABOUT_CARDS = [
  {
    number: "01",
    title: "Easy Travel",
    description: "Discover transportation options between Cambodian destinations.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Connected Experience",
    description: "Bus schedules, locations, and travel information in one platform.",
    icon: "Network",
  },
  {
    number: "03",
    title: "Mobile First",
    description: "Designed primarily around a convenient mobile experience.",
    icon: "Smartphone",
  },
  {
    number: "04",
    title: "Built for Cambodia",
    description: "Designed with Cambodian travelers and transportation services in mind.",
    icon: "MapPin",
  },
];

export const APP_FEATURES = [
  {
    title: "Bus Booking",
    description: "Search and book available bus transportation through the TripZ application.",
    category: "Core Engine",
    icon: "Bus",
  },
  {
    title: "Bus Schedules",
    description: "View available transportation schedules and routes across all 25 provinces.",
    category: "Real-Time",
    icon: "Clock",
  },
  {
    title: "Location Services",
    description: "Find and select travel destinations, bus stops, and terminals across Cambodia.",
    category: "Geospatial",
    icon: "MapPin",
  },
  {
    title: "Digital Payments",
    description: "Support convenient digital payment workflows including Bakong KHQR, ABA, and cards.",
    category: "Financial",
    icon: "CreditCard",
  },
  {
    title: "Trip Planning",
    description: "Plan transportation, return routes, and travel arrangements in one place.",
    category: "Experience",
    icon: "Route",
  },
  {
    title: "Mobile & Web Experience",
    description: "Designed for Android, iOS, and Web users with native performance and offline tickets.",
    category: "Cross-Platform",
    icon: "Smartphone",
  },
  {
    title: "Admin Management",
    description: "Manage transportation fleets, schedules, users, and platform analytics.",
    category: "Operations",
    icon: "ShieldCheck",
  },
];

export const TIMELINE_MONTHS = [
  {
    month: "MONTH 01",
    title: "Foundation & Research",
    subtitle: "Learn → Analyze → Plan",
    stages: [
      {
        phase: "First 3 Weeks",
        name: "Learning & Skill Development",
        desc: "The team spent the first three weeks learning and improving:",
        bullets: [
          "Java & Spring Boot backend architecture",
          "Flutter & Dart mobile application development",
          "RESTful API design principles & testing",
          "Git collaborative version control workflow",
        ],
      },
      {
        phase: "Last Week",
        name: "Database & Business Analysis",
        desc: "The team analyzed Cambodian transit workflows and drafted system specifications:",
        bullets: [
          "Business & user requirements across Cambodian bus routes",
          "Transportation workflows & terminal logistics",
          "Database requirements & ERD diagramming",
          "Main entities, relationships & system architecture",
        ],
      },
    ],
  },
  {
    month: "MONTH 02",
    title: "Backend & Database",
    subtitle: "Database → Spring Boot → REST API",
    focus: "Building the Foundation",
    stages: [
      {
        phase: "Weeks 5 - 8",
        name: "Backend Architecture & Database Setup",
        desc: "Designed and engineered the enterprise core:",
        bullets: [
          "Database design & tables in PostgreSQL",
          "Entity relationships & JPA data mapping",
          "Spring Boot backend services & REST APIs",
          "Spring Security authentication & JWT token handling",
          "Bus schedule business logic & automated API testing",
        ],
      },
    ],
  },
  {
    month: "MONTH 03",
    title: "Frontend Development",
    subtitle: "Design → Flutter → API Integration → User Experience",
    focus: "Bringing TripZ to Life",
    stages: [
      {
        phase: "Weeks 9 - 12",
        name: "Mobile & Web Client Implementation",
        desc: "Crafted the user interface and connected mobile state:",
        bullets: [
          "UI/UX wireframing & prototyping in Figma",
          "Flutter mobile development for Android & iOS",
          "API integration with Spring Boot REST backend",
          "State management, bus search, and schedule UI",
          "Seat booking interface & offline QR pass rendering",
        ],
      },
    ],
  },
  {
    month: "MONTH 04",
    title: "Finalization & Submission",
    subtitle: "From Development to Delivery",
    focus: "Project Completed & Mentorship Delivery",
    isCompleted: true,
    stages: [
      {
        phase: "Weeks 13 - 16",
        name: "Integration Testing, Polishing & Final Defense",
        desc: "Refined the complete ecosystem for final submission:",
        bullets: [
          "Complete remaining features & edge-case bug fixes",
          "End-to-end integration testing (Mobile + Web + Backend)",
          "UI/UX polishing, transitions & responsive design",
          "Backend and mobile unit test verification",
          "Final technical documentation & architecture review",
          "Project presentation & defense to mentor",
        ],
      },
    ],
  },
];

export const TECH_STACK = [
  {
    category: "Backend (Spring Boot)",
    techs: [
      { name: "Spring Boot", role: "REST API backend framework" },
      { name: "Java", role: "Backend programming language" },
      { name: "Spring Security", role: "Authentication & JWT token security" },
      { name: "REST API", role: "Clean endpoints for Flutter & Web clients" },
    ],
  },
  {
    category: "Mobile (Flutter)",
    techs: [
      { name: "Flutter", role: "Cross-platform mobile framework (Android & iOS)" },
      { name: "Dart", role: "Client-side type-safe language" },
    ],
  },
  {
    category: "Database (PostgreSQL)",
    techs: [
      { name: "PostgreSQL", role: "Relational database for routes, schedules & bookings" },
    ],
  },
  {
    category: "Web Application",
    techs: [
      { name: "Web Client", role: "Browser application for desktop travelers" },
      { name: "Responsive UI", role: "Cross-platform booking & schedule access" },
    ],
  },
  {
    category: "Cloud & Deployment",
    techs: [
      { name: "Render", role: "Cloud hosting for Spring Boot API & PostgreSQL database" },
      { name: "Firebase Hosting", role: "Global CDN hosting for live Web Application" },
    ],
  },
  {
    category: "Version Control",
    techs: [
      { name: "Git", role: "Source code version control" },
      { name: "GitHub", role: "Repository & team collaboration" },
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    id: "member-01",
    name: "Chun Chanheng",
    role: "Team Leader & Full-Stack Engineer",
    isLeader: true,
    responsibility: "Project coordination, architecture design, Spring Boot backend, analyze database, and mentor reporting.",
    github: "https://github.com/chanheng886",
    linkedin: "https://www.linkedin.com/in/chan-heng-545266410/?isSelfProfile=true",
    avatar: member1img,
  },
  {
    id: "member-02",
    name: "Chhanly Supheng",
    role: "Frontend Developer",
    isLeader: false,
    responsibility: "Spring Boot REST API development, business logic, Spring Security, and controller endpoints.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: member2img,
  },
  {
    id: "member-03",
    name: "Ich Nita",
    role: "Prototype & User flow",
    isLeader: false,
    responsibility: "User experience research, wireframing, Flutter widget design.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: member3img,
  },
  {
    id: "member-04",
    name: "Doung Viseth",
    role: "Prototype & User flow",
    isLeader: false,
    responsibility: "User experience research, wireframing, Flutter widget design.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: member4img,
  },
  {
    id: "member-05",
    name: "An Rathtaknangjeany",
    role: "UI/UX Designer",
    isLeader: false,
    responsibility: "UI design, Mobile & design system, prototype, Figma wireframe.",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/an-rathtaknangjeany-186539423?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    avatar: member5img,
  },
  {
    id: "member-06",
    name: "Soeng Socheata",
    role: "UX/UI Designer",
    isLeader: false,
    responsibility: "UI design, Mobile & design system, prototype, Figma wireframe..",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: member6img,
  },
];

export const TEAM_WORKFLOW = [
  { step: "01", name: "Research", desc: "User needs & transit requirements" },
  { step: "02", name: "Database", desc: "PostgreSQL schema & relationships" },
  { step: "03", name: "Backend", desc: "Spring Boot RESTful API services" },
  { step: "04", name: "Frontend", desc: "Flutter mobile & React web views" },
  { step: "05", name: "Integration", desc: "End-to-end API communication" },
  { step: "06", name: "Testing", desc: "Unit & functional verification" },
  { step: "07", name: "Submission", desc: "Mentor presentation & delivery" },
];

export const PROJECT_STATS = [
  { value: "4", label: "Months", sub: "Intensive Development" },
  { value: "7", label: "Team Members", sub: "The Unnooob Engineering Team" },
  { value: "1", label: "Platform", sub: "Cambodia Transit Ecosystem" },
  { value: "3", label: "Applications", sub: "Android, iOS & Web Clients" },
];
