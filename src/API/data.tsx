import {Mode} from '../utils/types'

type Personal = {
  name: string
  url: string
  description: {[mode in any]: string}
}
type TechSoft = {title: string; skills: {title: string}[]}[]
type ExperienceEducation = {where: string; from: string; to: string; position: string; achievements: string[]}[]
type Hobbies = {
  title: string
  description: string
  sections: {
    title: string
    description: string
    images: string[]
    social?: {facebook?: string; instagram?: string; youtube?: string; whatsapp?: string}
  }[]
}
type Data = {
  PERSONAL: Personal
  BUSINESS_SECTIONS: {label: string; key: string}[]
  CHILL_SECTIONS: {label: string; key: string}[]
  SOCIAL_LIST: {label: string; url: string; mode: Mode}[]
  TECH_STACK: TechSoft
  SOFT_STACK: TechSoft
  EXPERIENCE: ExperienceEducation
  EDUCATION: ExperienceEducation
  PROJECTS: {label: string; description: string; image: string; stack: string[]; link?: string}[]
  MUSIC: Hobbies
  TRAVELING: Hobbies
  DOGS: Hobbies
  GEEK: Hobbies
  SPORTS: Hobbies
  ROLES: Hobbies
  FILMS: Hobbies
  RANDOM: Hobbies
}

export const KEYS = {
  //Sections
  ABOUT_ME_BUSINESS: 'ABOUT_ME_BUSINESS',
  SKILLS: 'SKILLS',
  EXPERIENCE: 'EXPERIENCE',
  PROJECTS: 'PROJECTS',
  EDUCATION: 'EDUCATION',
  ABOUT_ME_CHILL: 'ABOUT_ME_CHILL',
  MUSIC: 'MUSIC',
  TRAVELING: 'TRAVELING',
  DOGS: 'DOGS',
  GEEK: 'GEEK',
  ROLES: 'ROLES',
  FILMS: 'FILMS',
  SPORTS: 'SPORTS',
  RANDOM: 'RANDOM',
  BUSINESS: 'BUSINESS' as Mode,
  CHILL: 'CHILL' as Mode,
}

const DATA: Data = {
  PERSONAL: {
    name: 'Mario Payan',
    url: 'https://www.mariopayan.com/',
    description: {
      [KEYS.BUSINESS]:
        'A Full Stack Tech Lead Software Developer with focus on software development, algorithms design, software as a service and clean code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing',
      [KEYS.CHILL]:
        'A Colombian software developer, part-time empirical musician, hardcore gamer, unstoppable traveler, and according to my mom, I\'m really handsome too. ¯\\_(ツ)_/¯',
    },
  },

  BUSINESS_SECTIONS: [
    {label: 'About Me', key: KEYS.ABOUT_ME_BUSINESS},
    {label: 'Skills', key: KEYS.SKILLS},
    {label: 'Experience', key: KEYS.EXPERIENCE},
    {label: 'Projects', key: KEYS.PROJECTS},
    {label: 'Education', key: KEYS.EDUCATION},
  ],

  CHILL_SECTIONS: [
    {label: 'About Me', key: KEYS.ABOUT_ME_CHILL},
    {label: 'Music', key: KEYS.MUSIC},
    {label: 'Traveling', key: KEYS.TRAVELING},
    {label: 'Dogs', key: KEYS.DOGS},
    {label: 'Geek', key: KEYS.GEEK},
    {label: 'Roles', key: KEYS.ROLES},
    {label: 'Films', key: KEYS.FILMS},
    {label: 'Sports', key: KEYS.SPORTS},
    {label: 'Random', key: KEYS.RANDOM},
  ],

  SOCIAL_LIST: [
    {label: 'Email', url: 'mailto:mpayan.av@gmail.com', mode: KEYS.BUSINESS},
    {label: 'Linked In', url: 'https://www.linkedin.com/in/mario-payan/', mode: KEYS.BUSINESS},
    {label: 'Git Hub', url: 'https://github.com/MarioPayan', mode: KEYS.BUSINESS},
    {label: 'WhatsApp', url: 'https://wa.me/573186151646?text=Hey!', mode: KEYS.CHILL},
    {label: 'Facebook', url: 'https://www.facebook.com/Mario.A.Payan.V', mode: KEYS.CHILL},
    {label: 'Instagram', url: 'https://www.instagram.com/mario.a.payan/', mode: KEYS.CHILL},
  ],

  TECH_STACK: [
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
  ],

  SOFT_STACK: [
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
  ],

  EXPERIENCE: [
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
  ],

  EDUCATION: [
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
  ],

  PROJECTS: [
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
  ],

  MUSIC: {
    title: 'Music',
    description:
      'I\'ve been an empirical musician since I was 14 years old, not very good since I don\'t dedicate myself 100% to it, but that doesn\'t stop me from enjoying and sharing what I do',
    sections: [
      {
        title: 'Solo',
        description:
          'I\'m mainly a guitarist, although I can play a little of everything and do backing vocals, I usually make a lot of music at home just for myself',
        images: [
          'images/hobbies/music/solo/img_1.jpg',
          'images/hobbies/music/solo/img_2.jpg',
          'images/hobbies/music/solo/img_3.jpg',
          'images/hobbies/music/solo/img_4.jpg',
          'images/hobbies/music/solo/img_5.jpg',
          'images/hobbies/music/solo/img_6.jpg',
          'images/hobbies/music/solo/img_7.jpg',
          'images/hobbies/music/solo/img_8.jpg',
          'images/hobbies/music/solo/img_9.jpg',
          'images/hobbies/music/solo/img_10.jpg',
          'images/hobbies/music/solo/img_11.jpg',
          'images/hobbies/music/solo/img_12.jpg',
        ],
      },
      {
        title: 'Falsete Proyecto',
        description:
          'My favorite music project with college friends. We like to do ballads, Pacific music, reggaeton, salsa, and everything in our own style',
        images: [
          'images/hobbies/music/falsete/img_1.jpg',
          'images/hobbies/music/falsete/img_2.jpg',
          'images/hobbies/music/falsete/img_3.jpg',
          'images/hobbies/music/falsete/img_4.jpg',
          'images/hobbies/music/falsete/img_5.jpg',
          'images/hobbies/music/falsete/img_6.jpg',
          'images/hobbies/music/falsete/img_7.jpg',
          'images/hobbies/music/falsete/img_8.jpg',
          'images/hobbies/music/falsete/img_9.jpg',
          'images/hobbies/music/falsete/img_10.jpg',
          'images/hobbies/music/falsete/img_11.jpg',
          'images/hobbies/music/falsete/img_12.jpg',
          'images/hobbies/music/falsete/img_13.jpg',
          'images/hobbies/music/falsete/img_14.jpg',
          'images/hobbies/music/falsete/img_15.jpg',
          'images/hobbies/music/falsete/img_16.jpg',
          'images/hobbies/music/falsete/img_17.jpg',
          'images/hobbies/music/falsete/img_18.jpg',
          'images/hobbies/music/falsete/img_19.jpg',
        ],
        social: {
          facebook: 'https://www.facebook.com/proyectofalsete',
          instagram: 'https://www.instagram.com/falsete.proyecto/',
          youtube: 'https://www.youtube.com/channel/UCTespFNTty8D1wSWhQiUmHA',
          whatsapp: 'https://wa.me/573127266099?text=Hey!',
        },
      },
      {
        title: 'Cero Grados',
        description: 'Urban music project that I was part of to experiment with different music',
        images: ['images/hobbies/music/cero_grados/img_1.jpg'],
        social: {
          facebook: 'https://www.facebook.com/cerogradosmusic',
          instagram: 'https://www.instagram.com/cerogradosmusic/',
          youtube: 'https://www.youtube.com/channel/UCfI30-3Jxhtdy9v0ZYnzcbw',
        },
      },
      {
        title: 'Band AL',
        description:
          'A band formed for fun at one of the companies I worked for the sole purpose of hanging out, but we ended up having gigs to entertain the rest of the company',
        images: [
          'images/hobbies/music/band_al/img_1.jpg',
          'images/hobbies/music/band_al/img_2.jpg',
          'images/hobbies/music/band_al/img_3.jpg',
          'images/hobbies/music/band_al/img_4.jpg',
          'images/hobbies/music/band_al/img_5.jpg',
          'images/hobbies/music/band_al/img_6.jpg',
          'images/hobbies/music/band_al/img_7.jpg',
        ],
      },
      {
        title: 'Closed Eyes',
        description: 'TODO:',
        images: [
          'images/hobbies/music/closed_eyes/img_1.jpg',
          'images/hobbies/music/closed_eyes/img_2.jpg',
          'images/hobbies/music/closed_eyes/img_3.jpg',
          'images/hobbies/music/closed_eyes/img_4.jpg',
        ],
        social: {
          facebook: 'https://www.facebook.com/cerogradosmusic',
          instagram: 'https://www.instagram.com/cerogradosmusic/',
          youtube: 'https://www.youtube.com/user/ClosedEyesMetal',
        },
      },
      {
        title: 'K&R',
        description: 'TODO:',
        images: ['images/hobbies/music/kyr/img_1.jpg', 'images/hobbies/music/kyr/img_2.jpg'],
      },
    ],
  },
  TRAVELING: {
    title: 'Traveling',
    description:
      'Traveling is one of the things I enjoy the most, there is much you can learn and experience during no matter how small it is',
    sections: [
      {
        title: 'Colombia',
        description:
          'Colombia is a country full of small very beautiful places, I have lived here all my life and I still find places that I did not know',
        images: [
          'images/hobbies/traveling/colombia/img_1.jpg',
          'images/hobbies/traveling/colombia/img_2.jpg',
          'images/hobbies/traveling/colombia/img_3.jpg',
          'images/hobbies/traveling/colombia/img_4.jpg',
          'images/hobbies/traveling/colombia/img_5.jpg',
          'images/hobbies/traveling/colombia/img_6.jpg',
          'images/hobbies/traveling/colombia/img_7.jpg',
          'images/hobbies/traveling/colombia/img_8.jpg',
          'images/hobbies/traveling/colombia/img_9.jpg',
          'images/hobbies/traveling/colombia/img_10.jpg',
          'images/hobbies/traveling/colombia/img_11.jpg',
          'images/hobbies/traveling/colombia/img_12.jpg',
          'images/hobbies/traveling/colombia/img_13.jpg',
          'images/hobbies/traveling/colombia/img_14.jpg',
          'images/hobbies/traveling/colombia/img_15.jpg',
          'images/hobbies/traveling/colombia/img_16.jpg',
          'images/hobbies/traveling/colombia/img_17.jpg',
          'images/hobbies/traveling/colombia/img_18.jpg',
          'images/hobbies/traveling/colombia/img_19.jpg',
          'images/hobbies/traveling/colombia/img_20.jpg',
          'images/hobbies/traveling/colombia/img_21.jpg',
          'images/hobbies/traveling/colombia/img_22.jpg',
          'images/hobbies/traveling/colombia/img_23.jpg',
          'images/hobbies/traveling/colombia/img_24.jpg',
          'images/hobbies/traveling/colombia/img_25.jpg',
          'images/hobbies/traveling/colombia/img_26.jpg',
          'images/hobbies/traveling/colombia/img_27.jpg',
          'images/hobbies/traveling/colombia/img_28.jpg',
          'images/hobbies/traveling/colombia/img_29.jpg',
          'images/hobbies/traveling/colombia/img_30.jpg',
          'images/hobbies/traveling/colombia/img_31.jpg',
          'images/hobbies/traveling/colombia/img_32.jpg',
          'images/hobbies/traveling/colombia/img_33.jpg',
          'images/hobbies/traveling/colombia/img_34.jpg',
          'images/hobbies/traveling/colombia/img_35.jpg',
          'images/hobbies/traveling/colombia/img_36.jpg',
          'images/hobbies/traveling/colombia/img_37.jpg',
          'images/hobbies/traveling/colombia/img_38.jpg',
          'images/hobbies/traveling/colombia/img_39.jpg',
          'images/hobbies/traveling/colombia/img_40.jpg',
          'images/hobbies/traveling/colombia/img_41.jpg',
          'images/hobbies/traveling/colombia/img_42.jpg',
          'images/hobbies/traveling/colombia/img_43.jpg',
          'images/hobbies/traveling/colombia/img_44.jpg',
          'images/hobbies/traveling/colombia/img_45.jpg',
          'images/hobbies/traveling/colombia/img_46.jpg',
          'images/hobbies/traveling/colombia/img_47.jpg',
          'images/hobbies/traveling/colombia/img_48.jpg',
          'images/hobbies/traveling/colombia/img_49.jpg',
          'images/hobbies/traveling/colombia/img_50.jpg',
          'images/hobbies/traveling/colombia/img_51.jpg',
          'images/hobbies/traveling/colombia/img_52.jpg',
          'images/hobbies/traveling/colombia/img_53.jpg',
          'images/hobbies/traveling/colombia/img_54.jpg',
          'images/hobbies/traveling/colombia/img_55.jpg',
          'images/hobbies/traveling/colombia/img_56.jpg',
          'images/hobbies/traveling/colombia/img_57.jpg',
          'images/hobbies/traveling/colombia/img_58.jpg',
          'images/hobbies/traveling/colombia/img_59.jpg',
          'images/hobbies/traveling/colombia/img_60.jpg',
          'images/hobbies/traveling/colombia/img_61.jpg',
          'images/hobbies/traveling/colombia/img_62.jpg',
          'images/hobbies/traveling/colombia/img_63.jpg',
          'images/hobbies/traveling/colombia/img_64.jpg',
          'images/hobbies/traveling/colombia/img_65.jpg',
          'images/hobbies/traveling/colombia/img_66.jpg',
          'images/hobbies/traveling/colombia/img_67.jpg',
        ],
      },
    ],
  },
  DOGS: {
    title: 'Dogs',
    description:
      'It is very difficult for me to see a dog and not pet it, that\'s why this section is essential if I am going to talk about myself',
    sections: [
      {
        title: 'Sora',
        description:
          'Sora is a dog that I rescued, I don\'t think I need to talk much about her, the photos speak for themselves',
        images: [
          'images/hobbies/dogs/sora/img_1.jpg',
          'images/hobbies/dogs/sora/img_2.jpg',
          'images/hobbies/dogs/sora/img_3.jpg',
          'images/hobbies/dogs/sora/img_4.jpg',
          'images/hobbies/dogs/sora/img_5.jpg',
          'images/hobbies/dogs/sora/img_6.jpg',
          'images/hobbies/dogs/sora/img_7.jpg',
          'images/hobbies/dogs/sora/img_8.jpg',
          'images/hobbies/dogs/sora/img_9.jpg',
          'images/hobbies/dogs/sora/img_10.jpg',
        ],
      },
      {
        title: 'Puca',
        description:
          'Puca is a dog that my mother adopted and became part of the family, aggressive like no one with strangers but lovely with the family',
        images: [
          'images/hobbies/dogs/puca/img_1.jpg',
          'images/hobbies/dogs/puca/img_2.jpg',
          'images/hobbies/dogs/puca/img_3.jpg',
          'images/hobbies/dogs/puca/img_4.jpg',
          'images/hobbies/dogs/puca/img_5.jpg',
          'images/hobbies/dogs/puca/img_6.jpg',
          'images/hobbies/dogs/puca/img_7.jpeg',
          'images/hobbies/dogs/puca/img_8.png',
          'images/hobbies/dogs/puca/img_9.jpg',
          'images/hobbies/dogs/puca/img_10.jpg',
        ],
      },
      {
        title: 'TODO:',
        description: 'TODO:',
        images: [
          'images/hobbies/dogs/others/img_1.jpg',
          'images/hobbies/dogs/others/img_2.jpg',
          'images/hobbies/dogs/others/img_3.jpg',
          'images/hobbies/dogs/others/img_4.jpeg',
          'images/hobbies/dogs/others/img_5.jpg',
          'images/hobbies/dogs/others/img_6.jpg',
          'images/hobbies/dogs/others/img_7.jpg',
          'images/hobbies/dogs/others/img_8.jpg',
          'images/hobbies/dogs/others/img_9.jpeg',
        ],
      },
    ],
  },
  GEEK: {
    title: 'Geek',
    description:
      'I\'m a fan of many things that make me look geek, technology, games, geopolitics, philosophy, and some other things. I really like to know things',
    sections: [
      {
        title: 'Video games',
        description:
          'Games to me are the sum of many arts, music, film, writing, painting, and other forms of art that work together and constantly change to immerse you in an experience, so how could I not play?',
        images: [
          'images/hobbies/geek/games/img_1.jpeg',
          'images/hobbies/geek/games/img_2.png',
          'images/hobbies/geek/games/img_3.jpg',
          'images/hobbies/geek/games/img_4.jpg',
          'images/hobbies/geek/games/img_5.jpg',
          'images/hobbies/geek/games/img_6.jpg',
          'images/hobbies/geek/games/img_7.jpg',
          'images/hobbies/geek/games/img_8.jpeg',
          'images/hobbies/geek/games/img_9.jpg',
          'images/hobbies/geek/games/img_10.jpg',
          'images/hobbies/geek/games/img_11.jpg',
          'images/hobbies/geek/games/img_12.jpeg',
          'images/hobbies/geek/games/img_13.jpg',
          'images/hobbies/geek/games/img_14.png',
        ],
      },
      {
        title: 'Code challenges',
        description:
          'Challenging myself to make code more and more efficient, readable, practical, and with the best practices is something that I really do for fun, I like challenges and even more so if they are in an area in which I feel that I stand out',
        images: [
          'images/hobbies/geek/code/img_1.jpg',
          'images/hobbies/geek/code/img_2.png',
          'images/hobbies/geek/code/img_3.jpg',
        ],
      },
    ],
  },
  SPORTS: {
    title: 'Sports',
    description:
      'I\'m not a fan of watching sports, but I am a fan of playing sports, I have been in many sports in my life, and I will be in many more if I get the chance, but there are only a couple that I do frequently',
    sections: [
      {
        title: 'Kung Fu Xiaolin',
        description:
          'Martial arts are great, in general I like any sport that can make my body do more things than I think it can do, and martial arts can reach and break those limits faster than any other sport',
        images: [
          'images/hobbies/sports/martial_arts/img_1.jpg',
          'images/hobbies/sports/martial_arts/img_2.jpg',
          'images/hobbies/sports/martial_arts/img_3.jpg',
        ],
      },
      {
        title: 'Cycling',
        description: 'TODO:',
        images: ['images/hobbies/sports/cycling/img_1.jpg', 'images/hobbies/sports/cycling/img_2.jpg'],
      },
      {
        title: 'Paintball',
        description: 'TODO:',
        images: [
          'images/hobbies/sports/paintball/img_1.jpg',
          'images/hobbies/sports/paintball/img_2.jpg',
          'images/hobbies/sports/paintball/img_3.jpg',
          'images/hobbies/sports/paintball/img_4.jpg',
          'images/hobbies/sports/paintball/img_5.jpg',
          'images/hobbies/sports/paintball/img_6.jpg',
          'images/hobbies/sports/paintball/img_7.jpg',
          'images/hobbies/sports/paintball/img_8.jpg',
          'images/hobbies/sports/paintball/img_9.jpg',
          'images/hobbies/sports/paintball/img_10.jpg',
          'images/hobbies/sports/paintball/img_11.jpg',
          'images/hobbies/sports/paintball/img_12.jpg',
          'images/hobbies/sports/paintball/img_13.jpg',
        ],
      },
      {
        title: 'Skateboarding',
        description: 'TODO:',
        images: ['images/hobbies/sports/skate_boarding/img_1.jpg', 'images/hobbies/sports/skate_boarding/img_2.jpg'],
      },
      {
        title: 'Soccer',
        description: 'TODO:',
        images: [
          'images/hobbies/sports/soccer/img_1.jpg',
          'images/hobbies/sports/soccer/img_2.jpg',
          'images/hobbies/sports/soccer/img_3.jpg',
        ],
      },
      {
        title: 'Others',
        description: 'TODO:',
        images: [
          'images/hobbies/sports/others/img_1.jpg',
          'images/hobbies/sports/others/img_2.jpg',
          'images/hobbies/sports/others/img_3.JPG',
          'images/hobbies/sports/others/img_4.jpg',
          'images/hobbies/sports/others/img_5.jpg',
        ],
      },
      {
        title: 'Hiking',
        description:
          'I like to walk, but like for real, I would walk for hours if there\'s something nice to see, like mountains, valleys or just a blue sky, the peace you can get doing it is something tech to describe',
        images: [
          'images/hobbies/sports/hiking/img_1.jpg',
          'images/hobbies/sports/hiking/img_2.jpg',
          'images/hobbies/sports/hiking/img_3.jpg',
          'images/hobbies/sports/hiking/img_4.jpg',
          'images/hobbies/sports/hiking/img_5.jpg',
          'images/hobbies/sports/hiking/img_6.jpg',
          'images/hobbies/sports/hiking/img_7.jpg',
          'images/hobbies/sports/hiking/img_8.jpg',
        ],
      },
    ],
  },
  ROLES: {
    title: 'Roles',
    description: 'TODO:',
    sections: [
      {
        title: 'Short films',
        description:
          'I have participated in 2 short films, one of them as a main actor and the other as a secondary character',
        images: [
          'images/hobbies/roles/short_films/img_1.jpg',
          'images/hobbies/roles/short_films/img_2.jpg',
          'images/hobbies/roles/short_films/img_3.jpg',
          'images/hobbies/roles/short_films/img_4.jpg',
          'images/hobbies/roles/short_films/img_5.jpg',
        ],
        social: {
          youtube: 'https://www.youtube.com/channel/UCNyP-BLXPVA5PS0epWcDCiQ',
        },
      },
      {
        title: 'Boy scout',
        description: 'TODO:',
        images: [
          'images/hobbies/roles/boy_scout/img_1.jpg',
          'images/hobbies/roles/boy_scout/img_2.jpg',
          'images/hobbies/roles/boy_scout/img_3.jpg',
          'images/hobbies/roles/boy_scout/img_4.jpg',
          'images/hobbies/roles/boy_scout/img_5.jpg',
        ],
        social: {
          youtube: 'https://www.youtube.com/channel/UCNyP-BLXPVA5PS0epWcDCiQ',
        },
      },
    ],
  },
  FILMS: {
    title: 'Roles',
    description: 'Films',
    sections: [
      {
        title: 'Movies',
        description: 'TODO:',
        images: ['images/hobbies/films/movies/img_1.jpeg'],
      },
      {
        title: 'Series',
        description: 'TODO:',
        images: [
          'images/hobbies/films/series/img_1.jpg',
          'images/hobbies/films/series/img_2.jpg',
          'images/hobbies/films/series/img_3.jpeg',
          'images/hobbies/films/series/img_4.jpg',
        ],
      },
      {
        title: 'Anime',
        description: 'TODO:',
        images: [
          'images/hobbies/films/anime/img_1.jpg',
          'images/hobbies/films/anime/img_2.png',
          'images/hobbies/films/anime/img_3.jpg',
          'images/hobbies/films/anime/img_4.png',
          'images/hobbies/films/anime/img_5.jpg',
        ],
      },
    ],
  },
  RANDOM: {
    title: 'Random',
    description: 'Random',
    sections: [
      {
        title: 'Random',
        description: 'TODO:',
        images: [
          'images/hobbies/random/img_1.jpg',
          'images/hobbies/random/img_2.jpg',
          'images/hobbies/random/img_3.jpg',
          'images/hobbies/random/img_4.jpg',
          'images/hobbies/random/img_5.jpg',
          'images/hobbies/random/img_6.jpg',
          'images/hobbies/random/img_7.jpg',
          'images/hobbies/random/img_8.jpg',
          'images/hobbies/random/img_9.jpg',
          'images/hobbies/random/img_10.jpg',
          'images/hobbies/random/img_11.jpg',
          'images/hobbies/random/img_12.jpg',
          'images/hobbies/random/img_13.jpeg',
          'images/hobbies/random/img_14.jpg',
          'images/hobbies/random/img_15.jpg',
          'images/hobbies/random/img_16.jpg',
          'images/hobbies/random/img_17.jpg',
          'images/hobbies/random/img_18.jpg',
          'images/hobbies/random/img_19.jpg',
          'images/hobbies/random/img_20.jpg',
          'images/hobbies/random/img_21.jpg',
          'images/hobbies/random/img_22.jpg',
          'images/hobbies/random/img_23.jpeg',
          'images/hobbies/random/img_24.jpeg',
          'images/hobbies/random/img_25.jpeg',
          'images/hobbies/random/img_26.jpg',
          'images/hobbies/random/img_27.jpg',
          'images/hobbies/random/img_28.jpeg',
          'images/hobbies/random/img_29.jpeg',
        ],
      },
    ],
  },
}

export default DATA
