import {
  circleBlue,
  appleAppMockup,
  artMockup,
  translateMockup,
} from '../assets/images'

import {
  car,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
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
} from '../assets/icons'

export const skills = [
  {
    id: 'html',
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    id: 'css',
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    id: 'javascript',
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    id: 'git',
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    id: 'github',
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    id: 'nodejs',
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    id: 'react',
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    id: 'redux',
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    id: 'sass',
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    id: 'tailwindcss',
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    id: 'typescript',
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'B.Tech Student - CSE ',
    company_name: 'Sri Manakula Vinayagar Engineering College',
    icon: circleBlue,
    iconBg: '#accbe1',
    date: '2023 - Current',
    points: [
      'Focusing on technical skills that the industry expects from a BTech CSE student, and maintaining a decent CGPA in BTech academics.',
      'Managed the entire web development process, from initial concept to final delivery, ensuring high-quality that met the industry recruiters expectation.',
      'Continuously researched and implemented clean coding practices in the website development.',
      'Continously involved in engaging of New Skills and Latest Tools in all Domains of IT in my Bachelors acquiring more Knowledge about Computer Fundamentals.',
    ],
  },
]

export const socialLinks = [
  {
    name: 'Github',
    iconUrl: github,
    link: 'https://github.com/mohancoder2k',
  },
  {
    name: 'Linkedin',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/mohan-sarady-164321251/',
  },
]

export const projects = [
  {
    thumbnail: appleAppMockup,
    name: 'iPhone 15 Pro Webpage',
    description:
      'iPhone 15 Pro clon webpage with additional 3D models for a better UX/UI. Created with React, Tailwind CSS and Three JS.',
    link: 'https://erickgcia.github.io/apple-app/',
  },
  {
    thumbnail: artMockup,
    name: 'Personal Art Gallery Website',
    description:
      'Personal client contemporary art gallery website to display his art. Created without any frameworks using pure HTML, CSS and JS.',
    link: 'https://mariogildardo.com.mx/',
  },
  {
    thumbnail: translateMockup,
    name: 'EasyTranslate Translator',
    description:
      'Intuitive translator webapp created with Typescript, React, Redux Toolkit, CSS vanilla and Open AI API. Tested with Vitest.',
    link: 'https://github.com/erickgcia/translate-app',
  },
]
