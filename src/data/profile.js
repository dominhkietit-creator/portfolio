/**
 * Personal Profile & Configuration
 * Customize your personal details, links, and availability here.
 */

export const profile = {
  // Basic info
  name: "Đỗ Minh Kiệt",
  shortName: "Kiệt",
  title: "Frontend Developer",
  roleSubtitle: "IT Student & Aspiring Frontend Engineer",

  // Availability status badge (configurable)
  availability: {
    isAvailable: true,
    label: "Available for Internships & Junior Roles",
  },

  // Headline and bio
  headline: "Crafting clean, intuitive, and responsive web experiences.",
  shortBio:
    "Information Technology student with a strong passion for frontend development. Focused on building user-centric interfaces using React, JavaScript, and modern design standards.",

  aboutStory: [
    "I am an IT student dedicated to frontend engineering and UI/UX design principles. I love transforming complex ideas into clean, accessible, and responsive interfaces that feel great to use.",
    "My journey involves continuous hands-on learning with modern frontend technologies like React, Tailwind CSS, and React Native. I prioritize writing clean, maintainable code and understanding user needs.",
  ],

  // Key quick facts displayed in the About section
  details: [
    { label: "Education", value: "Information Technology (Student)" },
    { label: "Specialization", value: "Frontend Web & Mobile UI" },
    { label: "Current Focus", value: "React, Vite & Tailwind CSS" },
    { label: "Location", value: "Ho Chi Minh City, Vietnam" },
  ],

  // Contact details & Social links
  // Replace these with your actual links when ready
  contact: {
    email: "dominhkiet.it@gmail.com", // Customize your email here
    location: "Ho Chi Minh City, Vietnam",
    githubUrl: "https://github.com/dominhkietit-creator",   // Customize with your GitHub profile URL
    linkedinUrl: "https://linkedin.com", // Customize with your LinkedIn profile URL
    // (Tùy chọn) Nhận Access Key miễn phí tại https://web3forms.com để form tự động gửi thẳng vào hộp thư Gmail của bạn
    web3formsKey: "ebf7c77a-8be6-4853-862f-140247032732",
  },

  // Resume settings
  resume: {
    // Set to true once you put your resume PDF into the public/ directory
    isAvailable: true,
    fileName: "resume.pdf",
    filePath: "/resume.pdf",
    updatedDate: "2026",
    placeholderNotice:
      "A downloadable PDF resume is ready in the public folder. You can easily replace public/resume.pdf with your latest CV at any time.",
  },
};
