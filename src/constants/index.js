import { meta, shopify, starbucks, tesla } from '../assets/images'
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
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
  },
]

export const socialLinks = [
  // TODO: Cambiar URL al perfil de Linkedin
  {
    name: 'Github',
    iconUrl: github,
    link: 'https://github.com/erickgcia',
  },
  {
    name: 'Linkedin',
    iconUrl: linkedin,
    link: 'https://github.com/erickgcia',
  },
]

export const projects = [
  // TODO: Cambiar titulo, descripcion y url al repositorio de github del proyecto
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Project Demo 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Project Demo 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Project Demo 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Project Demo 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Project Demo 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Project Demo 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/erickgcia',
  },
]
