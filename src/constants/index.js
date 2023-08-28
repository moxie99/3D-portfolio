import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kotlin,
  swift,
  healthbnb,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Web Developer',
    icon: backend,
  },
  {
    title: 'Mobile Apps Developer (Native)',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'swift',
    icon: swift,
  },
  {
    name: 'kotlin',
    icon: kotlin,
  },
];

const experiences = [
  {
    title: 'React Native Developer',
    company_name: 'Stanbic Bank (Contract)',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Seamlessly connected user stories, Figma designs, API specs, and business needs, crafting captivating user interfaces that aligned precisely with the intended vision.',
      'Employed Shopify on React Native, fashioning reusable components that maintained uniformity across app segments, ultimately elevating user satisfaction.',
      'Drove thorough testing, debugging, and rectification efforts following input from Business Analysts, Penetration testers, and QA teams, ensuring unwavering app performance and dependability.',
      'Fostered cohesive collaboration across multifaceted teams, spanning product, design, backend, and middleware experts, to realize solutions centered on customer needs.',
      'Engineered three distinct modular mobile applications, reflecting adeptness in comprehending diverse business demands and intricate technical prerequisites.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company_name: 'Decagon Institute',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'December 2021 - January 2023',
    points: [
      'Played a pivotal role in upholding a secure enterprise codebase, enforcing uniformity in code specifications through meticulous ESLint rules.',
      'Leveraged Kotlin and XML to implement features for Android Applications, consistently applying clean architecture and SOLID principles to enhance code clarity.',
      'Demonstrated adept problem-solving prowess, devising a minimum of 2 algorithms per week to introduce inventive solutions and optimize existing tasks.',
      'Actively engaged in standups for task updates and meetings to streamline workflow and foster effective team collaboration.',
      'Successfully engineered an intuitive e-commerce mobile application, facilitating seamless interaction between water suppliers and consumers to enhance operational efficiency.',
    ],
  },

  {
    title: 'Freelancer',
    company_name: 'BeyondTheNorm',
    icon: shopify,
    iconBg: '#383E56',
    date: 'August 2019 - December 2021',
    points: [
      'Collaborated closely with diverse clients to grasp their unique requirements, conducting thorough research to craft tailor-made web and mobile applications.',
      'Created captivating landing pages and robust admin panel dashboards for various clients and organizations.',
      'Masterminded a wide range of digital solutions, from interactive blogs to resilient databases, catering to an eclectic clientele including small and medium-scale businesses.',
      'Expertly oversaw end-to-end project lifecycles, achieving successful launches of applications on the App Store for iOS users and Play Store for Android users.',
    ],
  },
  {
    title: 'Web Development Instructor',
    company_name: 'Anettcom Technologies',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan. 2020 - November 2022',
    points: [
      'Designed curriculum and training frameworks for aspiring web developers, shaping the scope of their educational journey.',
      'Provided comprehensive training and clear directives to young individuals, fostering their growth in web design and development.',
      "Evaluated developers' task execution and class engagement, generating reports for the CEO to inform decision-making.",
      'Developed structured mini projects that empowered trainees to experience accomplishment while honing their skills.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Health BNB',
    description:
      'Web-based platform that allows users to search, book, and manage medical appointments with various medical facilities globally, providing a convenient and efficient solution for health needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: healthbnb,
    source_code_link: 'https://github.com/moxie99/healthBNB',
  },
  {
    name: 'Admin Dashboard CMS',
    description:
      'Web application that enables a store owner to display different products, categories, colors, sizes of products, orders and different stores ata a time',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/moxie99/ecommerce-store-admin',
  },
  {
    name: 'Store ',
    description:
      'A comprehensive frontend for the admin dashbaord that custoners can relate with to shop for different products, add to cart and with strip payment gateway',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'zustand',
        color: 'green-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/moxie99/ecommerce-store-FR',
  },
];

export { services, technologies, experiences, testimonials, projects };
