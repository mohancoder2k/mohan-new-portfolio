import { circleBlue, appleAppMockup, artMockup } from '../assets/images'

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
    title: 'Web Developer',
    company_name: 'Freelance',
    icon: circleBlue,
    iconBg: '#accbe1',
    date: '2023 - Current',
    points: [
      'Understand the client needs and translate them into functional and visually components for the website.',
      'Managed the entire web development process, from initial concept to final delivery, ensuring high-quality that met the client specifications.',
      'Continuously researched and implemented clean coding practices in the website development',
      'Communicate project updates, gather feedback, and ensure alignment with project goals and timelines',
    ],
  },
]

export const socialLinks = [
  {
    name: 'Github',
    iconUrl: github,
    link: 'https://github.com/erickgcia',
  },
  {
    name: 'Linkedin',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/erickgcia/',
  },
]

export const projects = [
  {
    thumbnail: appleAppMockup,
    name: 'iPhone 15 Pro webpage',
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
    thumbnail: appleAppMockup,
    name: 'iPhone 15 Pro webpage',
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
]
