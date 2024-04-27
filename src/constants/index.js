import {
  circleBlue,
  circleRed,
  circleYellow,
  circleGreen,
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
    title: 'HR Associate',
    company_name: 'Metalsa',
    icon: circleBlue,
    iconBg: '#accbe1',
    date: '2018 - 2019',
    points: [
      'Facilitated the execution of exclusive company events, ensuring they ran smoothly and left a lasting impact on attendees.',
      "Managed event registration through the company's database, updating sign-up processes and ensuring accurate record-keeping.",
      'Participated in various dynamic tasks, including providing support to senior personnel within the facility, building connections, and contributing to the flow of operations.',
    ],
  },
  {
    title: 'Junior Buyer',
    company_name: 'Ragasa',
    icon: circleGreen,
    iconBg: '#b7e4c7',
    date: '2021 - 2022',
    points: [
      'First and main contact between the purchasing department and logistics providers, seeking potential companies to do business with.',
      'Follow-ups and negotiation processes with the suppliers to establish attractive deals for the company.',
      'Development of high-value purchase orders, submitting them to the Oracle company database.',
      'Keeping track of and updating spreadsheets of supplier information based on the negotiation status.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Freelance',
    icon: circleYellow,
    iconBg: '#ffe59c',
    date: '2023 - 2024',
    points: [
      'Collaborated closely with teh client to understand their unique needs and translate them into functional and visually appealing website designs.',
      'Managed the entire web development process, from initial concept to final delivery, ensuring high-quality that met the client specifications.',
      'Continuously researched and implemented clean coding practices in the website development',
      'Constantly communicated project updates, gather feedback, and ensure alignment with project goals and timelines',
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
