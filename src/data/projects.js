/**
 * Projects Data
 * Configurable list of projects. Set links when available or leave null/empty.
 */

export const projects = [
  {
    id: "english-learning-app",
    title: "English Learning App",
    category: "Mobile",
    status: "In Progress",
    description:
      "A cross-platform mobile application focused on vocabulary building and daily flashcard practice. Developed with an emphasis on intuitive mobile UX, smooth swipe gestures, and clear typography.",
    tags: ["React Native", "Expo", "JavaScript", "AsyncStorage", "Mobile UI"],
    highlights: [
      "Custom flashcard swipe gestures and interactive flip animation",
      "Offline-first local word storage and bookmarking",
      "Clean, distraction-free learning interface",
    ],
    // If no image is provided, ProjectCard renders an elegant SVG/UI placeholder
    image: null,
    // When real URLs are ready, insert them here. If empty/null, the card shows a clear non-broken status.
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    id: "personal-portfolio",
    title: "Minimal Developer Portfolio",
    category: "Web",
    status: "Active",
    description:
      "A fast, responsive personal portfolio built to showcase frontend projects and skills. Engineered with modern React component architecture, Tailwind CSS v4 styling, and smooth accessible interactions.",
    tags: ["React", "Vite", "Tailwind CSS", "Motion", "Responsive Design"],
    highlights: [
      "Modular component structure with centralized data configuration",
      "Seamless responsive navigation with mobile drawer and active scroll spy",
      "Accessible keyboard navigation and subtle motion transitions",
    ],
    image: null,
    githubUrl: null, // Set to your GitHub repository URL if available
    demoUrl: "#home", // Anchors to current live site
    featured: true,
  },
  {
    id: "minimal-tasks-notes",
    title: "Focus Note & Task Workspace",
    category: "Web",
    status: "Prototype",
    description:
      "A lightweight web productivity workspace designed for focused writing and daily task organization. Features markdown editing preview, category tags, and instant browser persistence.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Local Storage", "Vite"],
    highlights: [
      "Real-time markdown preview with syntax styling",
      "Category filtering, search, and priority sorting",
      "Fast zero-dependency client-side data persistence",
    ],
    image: null,
    githubUrl: null,
    demoUrl: null,
    featured: false,
  },
];
