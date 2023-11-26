import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import csusb from "../assets/icons/csusb.jpg";
import sbvc from "../assets/icons/sbvc.png";
import dsh from "../assets/icons/dsh.jpg";
import cdcr from "../assets/icons/cdcr.png";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const educations = [
  {
    school: "California State University San Bernardino",
    icon: csusb,
    iconBg: "#086a9c",
    date: "August 2020 - August 2022",
    points: [
      "Developed the front end and designed the interface using React.js and other related technologies for an interactive web application.",
      "Analyzed and processed different datasets using various algorithms and used machine learning to create models to classify images based on shape and texture.",
      "Developed engaging and interactive game projects using Unity and C# to create dynamic and immersive gaming experiences.",
      "Received Bachelor's Degree in Computer Science.",
    ],
  },
  {
    school: "San Bernardino Valley College",
    icon: sbvc,
    iconBg: "#243276",
    date: "August 2007 - December 2009",
    points: [
      "Collaborated with multidisciplinary teams to contribute to comprehensive care plans for patients, fostering a collaborative healthcare environment.",
      "Gained hands-on experience in clinical settings, providing direct care and support to individuals with mental health needs.",
      "Received training in crisis intervention techniques, effectively managing and de-escalating challenging situations.",
      "Demonstrated adaptability in navigating diverse healthcare scenarios, from outpatient care to inpatient psychiatric settings.",
    ],
  },
];

export const experiences = [
  {
    title: "Psychiatric Technician",
    company_name: "California Department of State Hospitals",
    icon: dsh,
    iconBg: "#fa8702",
    date: "January 2015 - Present",
    points: [
      "Collaborated with multidisciplinary teams using strong communication skills that are transferable to diverse professional settings.",
      "Demonstrated crisis intervention proficiency, reflecting adaptability and problem-solving skills in various dynamic work environments.",
      "Maintained meticulous records with strong attention to detail using thorough documentation.",
    ],
  },
  {
    title: "Psychiatric Technician",
    company_name: "California Department of Corrections and Rehabilitation",
    icon: cdcr,
    iconBg: "#104913",
    date: "January 2015 - Present",
    points: [
      "Collaborated with multidisciplinary teams using strong communication skills that are transferable to diverse professional settings.",
      "Demonstrated crisis intervention proficiency, reflecting adaptability and problem-solving skills in various dynamic work environments.",
      "Maintained meticulous records with strong attention to detail using thorough documentation.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Video Sharing App",
    description:
      "Developed a full-stack social media app based on popular platforms like TikTok and YouTube, enabling users to share videos and engage with other users.",
    link: "https://vidiotapp.vercel.app/",
    repository: "https://github.com/franklinnnn/video-sharing-app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Spotify Tracker",
    description:
      "Created an app for Spotify users, enabling the tracking of listened songs and artists, and building playlists.",
    link: "https://decksio.vercel.app/",
    repository: "https://github.com/franklinnnn/spotify-app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://carzo.vercel.app/",
    repository: "https://github.com/franklinnnn/car-showcase-app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Realtime Chatroom",
    description:
      "Built a simple and lightweight chatroom, allowing users to chat, share photos, and directly message each other.",
    link: "https://chat-app-48ae2.web.app/",
    repository: "https://github.com/franklinnnn/f-chat",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://summable.vercel.app/",
    repository: "https://github.com/franklinnnn/ai-summarizer-app",
  },
];
