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
      title: "STASHR",
      description: "Organize Your Bookmarks",
      tags: ["Next.js", "React Query", "Typescript", "Tailwind CSS", "MongoDB"],
      Livelink: "https://stashr.in",
      gitHubLink: "https://github.com/anasfarock/",
      imageSrc: "https://anasfarock.github.io/cdn/anasfarock.webp",
      date: "AUG 2025",
      working: false,
    },
    {
      title: "MEET-BOT",
      description: "Real-Time Meeting Transcription Made Effortless",
      tags: ["Node.js", "WebSocket", "Redis", "Puppeteer"],
      gitHubLink: "https://github.com/anasfarock/meet-bot",
      imageSrc: "https://anasfarock.github.io/cdn/meet-bot.webp",
      date: "MAR 2025",
      working: false,
    },
    {
      title: "ANUBHAV",
      description:
        "It is a web-based platform that offers articles and resources focused on college placements and interview experiences.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
      ],
      Livelink: "https://anubhav.ossclub.in",
      gitHubLink: "https://github.com/aitoss/Anubhav-frontend-23",
      imageSrc: "https://anasfarock.github.io/cdn/anubhav.webp",
      date: "OCT 2024",
      working: false,
    },
    {
      title: "PIXA/UI",
      description:
        "Pixa/UI - Curated collection of versatile Next.js components.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "NPM Package"],
      Livelink: "https://pixaui.com",
      gitHubLink: "https://github.com/anasfarock/pixa-ui",
      imageSrc: "https://anasfarock.github.io/cdn/pixa.png",
      date: "AUG 2024",
      working: true,
    },
  ],
  lastUpdated: {
    date: "JUNE 11, 2025",
    time: "23:12 PM IST",
  },
};

export default userData;
