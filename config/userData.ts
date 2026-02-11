import type { UserData } from "@/types";

const userData: UserData = {
  personalInfo: {
    name: "Anas Farooq",
    profession: "SOFTWARE ENGINEER",
    email: "contact@anasfarooq.com",
    github: "https://github.com/anasfarock",
    twitter: "https://x.com/AnasFarq",
  },
  about:
    "Hello, I'm Anas. A software engineer who codes and designs with purpose. I build standout products by blending problem-solving with design thinking — getting 1% better every day.",
  experience: [
    {
      id: 1,
      role: "Technical Intern",
      company: "Techaccess Pakistan",
      startDate: "June 2024",
      endDate: "Aug 2024",
      link: "https://www.techaccesspak.com/",
      description:
        "Working on KeychainOS — a smart operating system for CPG manufacturers.\nShipping features like internal PO approval, lot number configuration, dynamic titles for food safety forms, form field type changes, and Keychain AI search.\nWorked in the FDE team, solving bugs and shipping customer enhancements quickly.\nFrom understanding to PRD to writing TRDs, collaborating with peer engineers and product managers daily.",
    },
    {
      id: 2,
      role: "Customer Support Executive",
      company: "Zayup Communications",
      startDate: "Oct 2022",
      endDate: "Feb 2023",
      link: "https://zayup.com/",
      description:
        "Worked on the Venus codebase to ship features like AI chat, the screener page, and citations in markdown content, plus bug fixes.\nBuilt and maintained internal platforms like Tmhcc, enabling multi-agent data processing workflows.\nWorked on Validex, a rule-based document validation engine supporting custom presets for compliance checking.\nBuilt Docs, a unified documentation system using MDX, OpenAPI, and Fuma Docs with a live API playground.\nLeveraged Zustand, React Query, Next.js, and Tailwind CSS across projects to ensure state management, responsive UIs, and efficient data fetching.",
    },
  ],
  projects: [
    {
      title: "IKSU Consulting Website",
      description: "Website for IKSU Consulting Pvt. Ltd.",
      tags: ["Next.js", "React Query", "JavaScript", "Tailwind CSS", "ESLint"],
      Livelink: "https://iksuconsulting.com",
      gitHubLink: "https://github.com/anasfarock/iksu",
      imageSrc: "/projects/iksu.png",
      date: "JUL 2025",
      working: false,
    },
    {
      title: "Portfolio Website",
      description: "Portfolio website made on Next.js",
      tags: ["Next.js", "React Query", "JavaScript", "Tailwind CSS", "ESLint"],
      Livelink: "https://anasfarooq.com",
      gitHubLink: "https://github.com/anasfarock/my-portfolio-website",
      imageSrc: "/projects/portfolio.png",
      date: "AUG 2024",
      working: false,
    },
    {
      title: "Flutter Bookstore App",
      description:
        "An Android application for buying and selling books developed on Flutter with Firebase",
      tags: [
        "Flutter",
        "Dart",
        "Android",
        "Firebase",
        "Firebase-Auth",
        "Firebase-Firestore",
      ],
      gitHubLink: "https://github.com/anasfarock/flutter-bookstore-fyp",
      imageSrc: "/projects/bookstore.png",
      date: "DEC 2025",
      working: true,
    },
    {
      title: "Event Management App",
      description:
        "An application for managing events developed on React Native with Node.js",
      tags: ["React Native", "Node.js", "Express.js", "MongoDB"],
      gitHubLink: "https://github.com/anasfarock/app-event-management",
      imageSrc: "/projects/eventmanagement.png",
      date: "APR 2025",
      working: true,
    },
  ],
  lastUpdated: {
    date: "FAB 12, 2026",
    time: "13:04 AM IST",
  },
};

export default userData;
