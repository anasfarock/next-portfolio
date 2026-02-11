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
    "Hello, I’m Anas Farooq a software engineerwho builds scalable, high-impact digital products. I work across frontend, backend, mobile development, and explore AI-driven solutions to solve real-world problems. With a strong interest in fintech, I combine engineering precision with design thinking to create smart, user-focused systems.",
  experience: [
    {
      id: 1,
      role: "Technical Intern",
      company: "Techaccess Pakistan",
      startDate: "June 2024",
      endDate: "Aug 2024",
      link: "https://www.techaccesspak.com/",
      description:
        "Provided hands-on support for IT infrastructure and system administration tasks in an on-site enterprise environment.\nAssisted in troubleshooting hardware, software, and network-related issues to ensure minimal downtime.\nCollaborated with the IT team to implement system updates and security patches.\nDocumented IT procedures and user guides for internal reference. \nDeveloped a strong understanding of IT service workflows, technical support processes, and enterprise environments.",
    },
    {
      id: 2,
      role: "Customer Support Executive",
      company: "Zayup Communications",
      startDate: "Oct 2022",
      endDate: "Feb 2023",
      link: "https://zayup.com/",
      description:
        "Provided real-time technical assistance and resolved service-related issues efficiently. \nHandled inbound customer queries related to communication services.\nMaintained high customer satisfaction by delivering clear, professional, and timely support. \nStrengthened communication, conflict resolution, and problem-solving skills in a fast-paced environment.",
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
