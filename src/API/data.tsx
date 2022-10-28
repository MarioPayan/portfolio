import React from 'react'

export const BUSINESS_SECTIONS = [
  {label: 'About Me'},
  {label: 'Skills'},
  {label: 'Experience'},
  {label: 'Projects'},
  {label: 'Education'},
]

export const CHILL_SECTIONS = [
  {label: 'About Me'},
  {label: 'Music'},
  {label: 'Traveling'},
  {label: 'Dogs'},
  {label: 'Geek'},
  {label: 'Roles'},
  {label: 'TV'},
  {label: 'Sports'},
  {label: 'Random'},
]

export const SOCIAL_LIST = [
  {label: 'Email', url: 'mailto:mpayan.av@gmail.com', mode: 'business'},
  {label: 'Linked In', url: 'https://www.linkedin.com/in/mario-payan/', mode: 'business'},
  {label: 'Git Hub', url: 'https://github.com/MarioPayan', mode: 'business'},
  {label: 'WhatsApp', url: 'https://wa.me/573186151646?text=Hey!', mode: 'chill'},
  {label: 'Facebook', url: 'https://www.facebook.com/Mario.A.Payan.V', mode: 'chill'},
  {label: 'Instagram', url: 'https://www.instagram.com/mario.a.payan/', mode: 'chill'},
]

export const TECH_STACK = [
  {
    title: 'Coding',
    skills: [{title: 'Python'}, {title: 'Javascript'}, {title: 'Typescript'}],
  },
  {
    title: 'Front End Frameworks',
    skills: [{title: 'React'}, {title: 'NextJS'}, {title: 'AngularJS'}],
  },
  {
    title: 'Back End Frameworks',
    skills: [{title: 'Django'}, {title: 'Django REST'}],
  },
  {
    title: 'Markup',
    skills: [
      {title: 'HTML5'},
      {title: 'CSS3'},
      {title: 'SASS'},
      {title: 'Material UI'},
      {title: 'Bootstrap'},
      {title: 'Flexbox'},
    ],
  },
  {
    title: 'Database',
    skills: [{title: 'PostgreSQL'}, {title: 'SQLite'}],
  },
  {
    title: 'Version Control',
    skills: [{title: 'Git'}, {title: 'GitHub'}, {title: 'GitLab'}, {title: 'BitBucket'}],
  },
  {title: 'Scripting', skills: [{title: 'Bash'}]},
  {
    title: 'Testing',
    skills: [{title: 'Cypress'}, {title: 'Jasmine'}, {title: 'Puppeteer'}, {title: 'Appium'}, {title: 'Selenium'}],
  },
  {
    title: 'Operative System',
    skills: [{title: 'OSx'}, {title: 'Linux'}],
  },
]

export const SOFT_STACK = [
  {
    title: 'Personal',
    skills: [{title: 'Willingness to Learn'}, {title: 'Proactivity'}],
  },
  {
    title: 'Methodical',
    skills: [{title: 'Problem solving'}, {title: 'Clean Code'}],
  },
  {
    title: 'Social',
    skills: [{title: 'Communication'}, {title: 'Teamwork'}, {title: 'Adaptability'}],
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
  //https://portfolio-eta-ashy-82.vercel.app/
  {
    label: 'Under degree project',
    description:
      'Application of Augmented Reality for the Communication of Information related to the self-assessment process of the System Engineering Academic Program',
    image: 'images/projects/uv.png',
    stack: [],
    link: '',
  },
  {
    label: 'Deft website',
    description: 'Landing page for Deft Soluciones company',
    image: 'images/projects/deft.png',
    stack: [],
    // link: 'https://deftsoluciones.com/',
  },
  {
    label: 'Placa y Cédula (Android)',
    description: 'Android app to know when you can go outside during the pandemic situation in Colombia',
    image: 'images/projects/pyc_android.webp',
    stack: [],
    link: 'https://play.google.com/store/apps/details?id=com.herokuapp.placa_y_cedula.twa',
  },
  {
    label: 'Placa y Cédula (Web)',
    description: 'Web app to know when you can go outside during the pandemic situation in Colombia',
    image: 'images/projects/pyc_web.png',
    stack: [],
    link: 'https://placa-y-cedula.herokuapp.com/',
  },
  {
    label: 'SVG Learning Tool',
    description: 'A simple tool to understand how SVG works that I made in my free time to help some mates',
    image: 'images/projects/svg.png',
    stack: [],
    link: 'https://mariopayan.github.io/SvgLearningTool/',
  },
  {
    label: 'This site',
    description: 'Website I built for fun',
    image: 'images/profile_pixel.png',
    stack: [],
    link: 'https://www.mariopayan.com/',
  },
  {
    label: 'Survey Tool',
    description:
      'A tool that allows characterizing users through surveys to find the perfect match for any specific need',
    image: 'images/projects/wp.png',
    stack: [],
    // link: 'https://app.wellplayedresearch.com/',
  },
  {
    label: 'Alert Logic web app',
    description: '',
    image: 'images/projects/alert_logic_web.png',
    stack: [],
    // link: 'https://alertlogic.com/',
  },
  {
    label: 'Alert Logic mobile app',
    description: '',
    image: 'images/projects/alert_logic_mobile.png',
    stack: [],
    link: 'https://play.google.com/store/apps/details?id=com.alertlogic.secalert',
  },
  {
    label: 'Alert Logic internal services',
    description: '',
    image: 'images/projects/alert_logic_heimdall.jpg',
    stack: [],
    // link: 'https://alertlogic.com/',
  },
]
