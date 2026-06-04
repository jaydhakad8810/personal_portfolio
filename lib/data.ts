export const personalInfo = {
  name: "Jay Dhakad",
  title: "Software Developer",
  tagline: "I Build Things That Work in the Real World",
  email: "jaydhakad92@gmail.com",
  phone: "+91 9822511483",
  location: "Hinjewadi, Pune",
  github: "https://github.com/jaydhakad8810",
  linkedin: "https://www.linkedin.com/in/jay-dhakad-aaa59628a/",
  cgpa: "8.40",
  university: "MIT ADT University, Pune",
  batch: "2027",
  bio: "BTech IT student at MIT ADT University with hands-on experience in cybersecurity, full-stack web, and Android development. I build production-deployed systems that serve real clients — not just side projects. Winner at two national-level hackathons including an international Linux competition in the Netherlands.",
  funFacts: [
    "🎾 Tennis player on weekends",
    "📚 Avid reader — fiction & tech",
    "🌍 Learning French (Bonjour!)",
    "🏆 Runner-up at an international hackathon in the Netherlands",
  ],
  languages: ["Marathi", "Hindi", "English", "Gujarati", "French (basics)"],
  typingRoles: [
    "Software Developer",
    "Cybersecurity Enthusiast",
    "Full-Stack Builder",
    "Hackathon Winner",
    "Android Developer",
    "Linux Hacker",
  ],
}

export const stats = [
  { label: "Years Building", value: 2, suffix: "+" },
  { label: "Hackathon Wins", value: 2, suffix: "" },
  { label: "Projects Deployed", value: 4, suffix: "+" },
  { label: "CGPA", value: 8.40, suffix: "", decimal: true },
]

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 78 },
      { name: "C/C++", level: 70 },
      { name: "Dart", level: 72 },
    ],
  },
  {
    category: "Web / Backend",
    icon: "server",
    items: [
      { name: "Node.js + Express", level: 92 },
      { name: "React / Next.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Mobile",
    icon: "smartphone",
    items: [
      { name: "Flutter", level: 80 },
      { name: "Android Studio", level: 85 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    category: "Cybersecurity",
    icon: "shield",
    items: [
      { name: "Metasploit", level: 80 },
      { name: "Burp Suite", level: 82 },
      { name: "Penetration Testing", level: 78 },
      { name: "Linux Kernel", level: 75 },
    ],
  },
  {
    category: "Cloud / DevOps",
    icon: "cloud",
    items: [
      { name: "VPS Deployment", level: 85 },
      { name: "Nginx + PM2", level: 83 },
      { name: "Git / GitHub", level: 92 },
      { name: "Firebase Auth/Firestore", level: 87 },
    ],
  },
  {
    category: "AI / Design",
    icon: "cpu",
    items: [
      { name: "Gemini API", level: 80 },
      { name: "Figma", level: 75 },
      { name: "UI/UX Principles", level: 78 },
      { name: "CSS Animations", level: 85 },
    ],
  },
]

export const experience = [
  {
    role: "Penetration Testing Intern",
    company: "Ailexity Software Pvt. Ltd.",
    location: "Pune",
    period: "Jun 2025 – Aug 2025",
    type: "Cybersecurity",
    color: "cyan",
    points: [
      "Conducted full-cycle penetration tests on web and network targets using Metasploit and Burp Suite.",
      "Identified critical vulnerabilities, crafted exploits and payloads, and prepared detailed security assessment reports.",
      "Gained hands-on experience in vulnerability remediation, exploit development, and secure software best practices.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "R3 System Pvt. Ltd.",
    location: "Nashik",
    period: "May 2023 – Dec 2023",
    type: "Full Stack",
    color: "violet",
    points: [
      "Built an EV Charging Station Finder Android app (Android Studio + Java + MySQL) with real-time station availability and map-based UI.",
      "Designed a web version using HTML, CSS, Java, and SQL on XAMPP for dynamic backend data handling.",
      "End-to-end delivery from design to deployment for the client's EV charging network.",
    ],
  },
]

export const projects = [
  {
    title: "CYBRIX AI",
    subtitle: "Unified AI Security Brain",
    description:
      "A full cybersecurity platform as a single-file web app with 7 pages. Integrated Gemini AI for real-time malware detection and deepfake identification with live streaming responses.",
    stack: ["Gemini 1.5 Flash", "Firebase Auth", "Firestore", "HTML/CSS/JS"],
    github: "https://github.com/jaydhakad8810/CYBRIX",
    live: null,
    featured: true,
    category: "AI + Security",
    color: "cyan",
    icon: "🛡️",
  },
  {
    title: "DGSystem",
    subtitle: "Real-Time Field Operations Platform",
    description:
      "Production-deployed full-stack platform managing workforce, attendance, payroll, and site visits for Dhakad Group, a painting contractor in Nashik. JWT-secured REST API with PWA + Admin Panel.",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "PWA", "Nginx", "PM2"],
    github: "https://github.com/jaydhakad8810/Construction_company_portal",
    live: null,
    featured: true,
    category: "Full Stack",
    color: "violet",
    icon: "🏗️",
  },
  {
    title: "Charging Station Finder",
    subtitle: "Android App",
    description:
      "Native Android application for locating nearby EV charging stations with real-time availability data and map-based navigation UI. Built as primary internship project at R3 System.",
    stack: ["Android Studio", "Java", "MySQL", "REST API"],
    github: "https://github.com/jaydhakad8810/Charging-Station-Finder",
    live: null,
    featured: false,
    category: "Android",
    color: "cyan",
    icon: "⚡",
  },
  {
    title: "Restaurant Ordering App",
    subtitle: "Linux Desktop App",
    description:
      "A restaurant ordering application built for the Linux desktop environment, showcasing cross-platform development skills and open-source tooling.",
    stack: ["Linux", "Open Source"],
    github: "https://github.com/jaydhakad8810/restaurant-ordering-app-linux",
    live: null,
    featured: false,
    category: "Linux",
    color: "violet",
    icon: "🍽️",
  },
]

export const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    link: "https://coursera.org/professional-certificates/google-cybersecurity",
    icon: "G",
    color: "cyan",
  },
  {
    title: "Linux for Developers",
    issuer: "Coursera",
    link: "https://coursera.org/learn/linux-for-developers",
    icon: "🐧",
    color: "violet",
  },
  {
    title: "Ethical Hacking Basics",
    issuer: "Coursera",
    link: "https://coursera.org/learn/ethical-hacking-basics",
    icon: "🔐",
    color: "cyan",
  },
  {
    title: "OWASP Top 10",
    issuer: "Packt / Coursera",
    link: "https://coursera.org/learn/packt-owasp-top-10-nc7jn",
    icon: "🛡️",
    color: "violet",
  },
  {
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Google / Coursera",
    link: "https://coursera.org/learn/automate-cybersecurity-tasks-with-python",
    icon: "🐍",
    color: "cyan",
  },
  {
    title: "Selenium Automation & Testing Frameworks",
    issuer: "Packt / Coursera",
    link: "https://coursera.org/learn/packt-selenium-automation-and-testing-frameworks-e66rj",
    icon: "⚙️",
    color: "violet",
  },
  {
    title: "Cybersecurity Assessment (CompTIA CySA+)",
    issuer: "Coursera",
    link: "https://coursera.org/learn/cybersecurity-assessment-comptia-security-cysa",
    icon: "🎯",
    color: "cyan",
  },
  {
    title: "Introduction to Cybersecurity & Cyber Attacks",
    issuer: "Coursera",
    link: "https://coursera.org/learn/introduction-cybersecurity-cyber-attacks",
    icon: "🔍",
    color: "violet",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    link: "https://coursera.org/learn/foundations-of-cybersecurity",
    icon: "🏛️",
    color: "cyan",
  },
  {
    title: "DevOps Prerequisites",
    issuer: "Coursera",
    link: "https://coursera.org/learn/devops-prerequisite-course",
    icon: "🔧",
    color: "violet",
  },
]

export const achievements = [
  {
    title: "Runner-Up",
    event: "Linux OSCI International Hackathon",
    location: "Netherlands 🇳🇱",
    description:
      "Contributed to Lomiri desktop shell and Ubuntu Touch environment build. Competed against developers globally.",
    icon: "🥈",
    color: "cyan",
    year: "2024",
  },
  {
    title: "2nd Place",
    event: "JIT College Nashik Hackathon",
    location: "Nashik, India",
    description:
      "Built an IoT-based system project that secured second place at a national-level college hackathon.",
    icon: "🏆",
    color: "violet",
    year: "2023",
  },
  {
    title: "Google Certified",
    event: "Cybersecurity Professional",
    location: "Online",
    description:
      "Completed the full Google Cybersecurity Professional Certificate — one of the most comprehensive cybersecurity programs.",
    icon: "🎓",
    color: "cyan",
    year: "2024",
  },
]

export const education = [
  {
    degree: "BTech — Information Technology",
    institution: "MIT ADT University, Pune",
    period: "2024 – 2027",
    cgpa: "8.40 / 10",
    details: "Full-stack development, cybersecurity, Android, databases, systems",
  },
  {
    degree: "Diploma — Information Technology",
    institution: "MVP's RSM Polytechnic, Nashik",
    period: "2021 – 2024",
    cgpa: null,
    details: "Programming, Networking, Databases, Systems",
  },
]
