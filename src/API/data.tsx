import React from 'react'
import {
  BugReport,
  Code,
  Coffee,
  Email,
  Engineering,
  Facebook,
  GitHub,
  Group,
  Instagram,
  IntegrationInstructions,
  LaptopChromebook,
  LinkedIn,
  Moving,
  Person,
  School,
  SelfImprovement,
  Storage,
  WhatsApp,
  Work
} from '@mui/icons-material'

export const SECTIONS = [
  {label: 'About Me', icon: <Person />},
  {label: 'Skills', icon: <Code />},
  {label: 'Experience', icon: <Moving />},
  {label: 'Projects', icon: <Work />},
  {label: 'Education', icon: <School />},
  {label: 'Chill', icon: <Coffee />},
]

export const CHILL_SECTIONS = [
  {label: 'About Me', icon: <Person />},
  {label: 'Music', icon: <Person />},
  {label: 'Traveling', icon: <Person />},
  {label: 'Dogs', icon: <Person />},
  {label: 'Geek', icon: <Person />},
  {label: 'Roles', icon: <Person />},
  {label: 'TV', icon: <Person />},
  {label: 'Sports', icon: <Person />},
  {label: 'Random', icon: <Person />},
]

export const SOCIAL_LIST = [
  {label: 'Email', url: 'mailto:mpayan.av@gmail.com', Icon: Email, chill: false},
  {label: 'Linked In', url: 'https://www.linkedin.com/in/mario-payan/', Icon: LinkedIn, chill: false},
  {label: 'Git Hub', url: 'https://github.com/MarioPayan', Icon: GitHub, chill: false},
  {label: 'WhatsApp', url: 'https://wa.me/573186151646?text=Hey!', Icon: WhatsApp, chill: true},
  {label: 'Facebook', url: 'https://www.facebook.com/Mario.A.Payan.V', Icon: Facebook, chill: true},
  {label: 'Instagram', url: 'https://www.instagram.com/mario.a.payan/', Icon: Instagram, chill: true},
]

export const TECH_STACK = [
  {
    title: 'Coding',
    icon: Code,
    skills: [
      {title: 'Python', imageUrl: 'python/python-original.svg'},
      {title: 'Javascript', imageUrl: 'javascript/javascript-original.svg'},
      {title: 'Typescript', imageUrl: 'typescript/typescript-original.svg'},
    ],
  },
  {
    title: 'Frameworks',
    icon: IntegrationInstructions,
    skills: [
      {title: 'React', imageUrl: 'react/react-original.svg'},
      {title: 'Django', imageUrl: 'django/django-plain.svg'},
      {title: 'Django REST', imageUrl: 'django/django-plain.svg'},
      {title: 'AngularJS', imageUrl: 'angularjs/angularjs-original.svg'},
    ],
  },
  {
    title: 'Markup',
    icon: Code,
    skills: [
      {title: 'HTML5', imageUrl: 'html5/html5-original.svg'},
      {title: 'CSS3', imageUrl: 'css3/css3-original.svg'},
      {title: 'Material UI', imageUrl: 'materialui/materialui-original.svg'},
      {title: 'Bootstrap', imageUrl: 'bootstrap/bootstrap-original.svg'},
      {title: 'Flexbox', imageUrl: ''},
    ],
  },
  {
    title: 'Database',
    icon: Storage,
    skills: [
      {title: 'PostgreSQL', imageUrl: 'postgresql/postgresql-original.svg'},
      {title: 'SQLite', imageUrl: 'sqlite/sqlite-original.svg'},
    ],
  },
  {
    title: 'Version Control',
    icon: GitHub,
    skills: [
      {title: 'Git', imageUrl: 'git/git-original.svg'},
      {title: 'GitHub', imageUrl: 'github/github-original.svg'},
      {title: 'GitLab', imageUrl: 'gitlab/gitlab-original.svg'},
      {title: 'BitBucket', imageUrl: 'bitbucket/bitbucket-original.svg'},
    ],
  },
  {title: 'Scripting', icon: Code, skills: [{title: 'Bash', imageUrl: 'bash/bash-original.svg'}]},
  {
    title: 'Testing',
    icon: BugReport,
    skills: [
      {title: 'Cypress', imageUrl: ''},
      {title: 'Jasmine', imageUrl: 'jasmine/jasmine-plain.svg'},
      {title: 'Puppeteer', imageUrl: ''},
      {title: 'Appium', imageUrl: ''},
    ],
  },
  {
    title: 'Operative System',
    icon: LaptopChromebook,
    skills: [
      {title: 'OSx', imageUrl: 'apple/apple-original.svg'},
      {title: 'Linux', imageUrl: 'linux/linux-original.svg'},
    ],
  },
]

export const SOFT_STACK = [
  {
    title: 'Personal',
    icon: SelfImprovement,
    skills: [
      {title: 'Willingness to Learn', imageUrl: 'python/python-original.svg'},
      {title: 'Proactivity', imageUrl: 'python/python-original.svg'},
    ],
  },
  {
    title: 'Methodical',
    icon: Engineering,
    skills: [
      {title: 'Problem solving', imageUrl: 'react/react-original.svg'},
      {title: 'Clean Code', imageUrl: 'react/react-original.svg'},
    ],
  },
  {
    title: 'Social',
    icon: Group,
    skills: [
      {title: 'Communication', imageUrl: 'html5/html5-original.svg'},
      {title: 'Teamwork', imageUrl: 'css3/css3-original.svg'},
      {title: 'Adaptability', imageUrl: 'css3/css3-original.svg'},
    ],
  },
]

export const EXPERIENCE = [
  {
    where: 'Alert Logic',
    from: '2017-01',
    to: '2017-07',
    position: 'Web Developer (Internship)',
    achievements: [
      'Increase the test coverage of a PHP application',
      'Support application defects/feature request of JavaScript, jQuery and PHP code',
      'Improvement of UI and performance of web applications',
      'Software development using SCRUM agile methodology',
    ],
  },
  {
    where: 'Alert Logic',
    from: '2017-10',
    to: '2018-11',
    position: 'Back-End Developer',
    achievements: [
      'Internal services automation',
      'Provide and support internal tools for analysts',
      'Support and maintain Linux nodes with chef',
    ],
  },
  {
    where: 'Alert Logic',
    from: '2018-11',
    to: '2019-11',
    position: 'Full-Stack Developer',
    achievements: [
      'SCRUM master developer',
      'Help to implement continuous integration and continuous delivery pipelines',
      'Implement End-to-end software testing methodology and architecture',
      'Build new UI experience for one of the most used products',
    ],
  },
  {
    where: 'Alert Logic',
    from: '2019-11',
    to: '2021-07',
    position: 'Mobile Developer',
    achievements: [
      'Worked on the implementation of a iOS mobile application',
      'Build from scratch an android mobile application',
    ],
  },
  {
    where: 'Redux',
    from: '2021-07',
    to: '',
    position: 'Tech-Lead Developer',
    achievements: [],
  },
  {
    where: 'Deft',
    from: '2020-01',
    to: '',
    position: 'Co-founder & Teacher',
    achievements: ['Build software and web apps on demand', 'Teach new technologies, good practices, tools, etc.'],
  },
  {
    where: 'CIER-Sur',
    from: '2016-01',
    to: '2016-06',
    position: 'Web Content Developer',
    achievements: [
      'Build learning objects based on Javascript code with CSS',
      'Help to build a framework to reuse existing code on new learning objects',
    ],
  },
]

export const EDUCATION = [
  {
    where: 'Universidad del Valle',
    from: '2012-01',
    to: '2017-01',
    position: 'B.S. Systems Engineering and Computer Science',
    achievements: [
      'National Awarded Academic Scholarship: Bachilleres por Colombia Mario Galán Gómez, an award given to the 70 best students in the country',
      'Awarded Academic Scholarships for being at the top of the class',
    ],
  },
]

export const PROJECTS = [
  {
    label: 'Under degree project',
    description:
      'Application of Augmented Reality for the Communication of Information related to the self-assessment process of the System Engineering Academic Program',
    image: '/images/projects/uv.png',
    link: '',
  },
  {
    label: 'Deft website',
    description: 'Landing page for Deft Soluciones company',
    image: '/images/projects/deft.png',
    // link: 'https://deftsoluciones.com/',
  },
  {
    label: 'Placa y Cédula (Android)',
    description: 'Android app to know when you can go outside during the pandemic situation in Colombia',
    image: '/images/projects/pyc_android.webp',
    link: 'https://play.google.com/store/apps/details?id=com.herokuapp.placa_y_cedula.twa',
  },
  {
    label: 'Placa y Cédula (Web)',
    description: 'Web app to know when you can go outside during the pandemic situation in Colombia',
    image: '/images/projects/pyc_web.png',
    link: 'https://placa-y-cedula.herokuapp.com/',
  },
  {
    label: 'SVG Learning Tool',
    description: 'A simple tool to understand how SVG works that I made in my free time to help some mates',
    image: '/images/projects/svg.png',
    link: 'https://mariopayan.github.io/SvgLearningTool/',
  },
  {
    label: 'This website',
    description: 'Website I built for fun',
    image: '/images/profile_pixel.png',
    link: 'https://www.mariopayan.com/',
  },
  {
    label: 'Survey Tool',
    description:
      'A tool that allows characterizing users through surveys to find the perfect match for any specific need',
    image: '/images/projects/wp.png',
    // link: 'https://app.wellplayedresearch.com/',
  },
  {
    label: 'Alert Logic web app',
    description: '',
    image: '/images/projects/alert_logic_web.png',
    // link: 'https://alertlogic.com/',
  },
  {
    label: 'Alert Logic mobile app',
    description: '',
    image: '/images/projects/alert_logic_mobile.png',
    link: 'https://play.google.com/store/apps/details?id=com.alertlogic.secalert',
  },
  {
    label: 'Alert Logic internal services',
    description: '',
    image: '/images/projects/alert_logic_heimdall.jpg',
    // link: 'https://alertlogic.com/',
  },
]
