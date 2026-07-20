export const images = {
  guidelily: '/images/guidelily_img.webp',
  guidelily_dark: '/images/guidelily_dark.webp',
  labamboche: '/images/labamboche_img.webp',
  mecapex: '/images/mecapex_img.webp',
  frontend: '/images/frontend_icon.png',
  backend: '/images/backend_icon.png',
  instagram: '/images/instagram.svg',
  github: '/images/github.svg',
};

export const projectList = [
  {
    id: 1,
    name: 'guidelily',
    description:
      'An advanced frontend case study for a dynamic AI and Blockchain content platform. Engineered with custom state management to handle seamless user preference toggles (light/dark modes) and optimized for rapid content delivery.',
    img: images.guidelily_dark,
    stack: 'React Js',
    git: 'https://github.com/otonistephen/project-lara.git',
    live: 'https://project-lara.netlify.app/',
  },
  // {
  //   id: 2,
  //   name: 'guidelily light',
  //   description: 'Guidelily is a platform that provides current trend on Artificial Intelligence and Blockchain. You can toggle between light and dark backrounds. And this is the light background',

  //   img: images.guidelily,
  //   stack: 'React Js',
  //   git: 'https://github.com/otonistephen/project-lara.git',
  //   live: 'https://project-lara.netlify.app/',
  // },
  {
    id: 3,
    name: 'labamboche ',
    description:
      'A conceptual full-stack redesign and product pitch for a Canadian boutique pastry restaurant. Features a modern, conversion-focused online ordering flow integrated with a secure end-to-end payment gateway mock up.',
    img: images.labamboche,
    stack: 'NextJs',
    git: '',
    live: 'https://labamboche.vercel.app/',
  },
  {
    id: 4,
    name: 'mecapex',
    description:
      'A production-ready staging website designed for an oil, gas, and procurement services corporation. Implements a highly scalable, minimalist architecture focused on fast loading speeds and authoritative corporate branding.',
    img: images.mecapex,
    stack: 'React Js',
    git: 'https://github.com/knoxyknox/mecapex.git',
    live: 'https://mecapex.netlify.app/',
  },
];

export const developerList = [
  {
    id: 1,
    icon: images.frontend,
    developer: 'frontend',
    stack: 'Next.js, React, JavaScript (ES6+), HTML5, CSS3',
  },
  {
    id: 2,
    icon: images.backend,
    developer: 'backend',
    stack:
      'Supabase(Auth, Database, Storage), Next.js Server Actions, REST APIs',
  },
];

export const expertiseList = [
  {
    id: 1,
    name: 'Next.js',
    mastery: '98% mastery',
  },
  {
    id: 2,
    name: 'React',
    mastery: '98% mastery',
  },
  {
    id: 3,
    name: 'JavaScript(ES6+)',
    mastery: '98% mastery',
  },
  {
    id: 4,
    name: 'HTML5',
    mastery: '98% mastery',
  },
  {
    id: 5,
    name: 'CSS3',
    mastery: '98% mastery',
  },
  {
    id: 6,
    name: 'Next.js Server Actions',
    mastery: '98% mastery',
  },
];

// export const navLink = [
//   { id: 1, name: 'home', url: '/' },
//   { id: 2, name: 'projects', url: '/#projects' },
//   { id: 3, name: 'skills', url: '/#skills' },
//   { id: 4, name: 'contact', url: '/#contact' },
// ];

export const navLink = [
  { id: 1, name: 'home', url: '/', targetId: 'home' },
  { id: 2, name: 'about', url: '/#about', targetId: 'about' },
  { id: 3, name: 'projects', url: '/#projects', targetId: 'projects' },
  { id: 4, name: 'skills', url: '/#skills', targetId: 'skills' },
  { id: 5, name: 'contact', url: '/#contact', targetId: 'contact' },
];
