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
  QuestionMark,
  School,
  SelfImprovement,
  Storage,
  WhatsApp,
  Work
} from '@mui/icons-material'

import {getDevIconURL, getKeyFromLabel} from './utils'

const icons = {
  // Sections
  [getKeyFromLabel('About Me')]: Person,
  [getKeyFromLabel('Skills')]: Code,
  [getKeyFromLabel('Experience')]: Moving,
  [getKeyFromLabel('Projects')]: Work,
  [getKeyFromLabel('Education')]: School,
  [getKeyFromLabel('Chill')]: Coffee,
  [getKeyFromLabel('Music')]: QuestionMark,
  [getKeyFromLabel('Traveling')]: QuestionMark,
  [getKeyFromLabel('Dogs')]: QuestionMark,
  [getKeyFromLabel('Geek')]: QuestionMark,
  [getKeyFromLabel('Roles')]: QuestionMark,
  [getKeyFromLabel('TV')]: QuestionMark,
  [getKeyFromLabel('Sports')]: QuestionMark,
  [getKeyFromLabel('Random')]: QuestionMark,

  // Social
  [getKeyFromLabel('Email')]: Email,
  [getKeyFromLabel('Linked In')]: LinkedIn,
  [getKeyFromLabel('Git Hub')]: GitHub,
  [getKeyFromLabel('WhatsApp')]: WhatsApp,
  [getKeyFromLabel('Facebook')]: Facebook,
  [getKeyFromLabel('Instagram')]: Instagram,

  // Categories
  [getKeyFromLabel('Coding')]: Code,
  [getKeyFromLabel('Front End Frameworks')]: IntegrationInstructions,
  [getKeyFromLabel('Back End Frameworks')]: IntegrationInstructions,
  [getKeyFromLabel('Markup')]: Code,
  [getKeyFromLabel('Database')]: Storage,
  [getKeyFromLabel('Version Control')]: GitHub,
  [getKeyFromLabel('Testing')]: BugReport,
  [getKeyFromLabel('Operative System')]: LaptopChromebook,
  [getKeyFromLabel('Personal')]: SelfImprovement,
  [getKeyFromLabel('Methodical')]: Engineering,
  [getKeyFromLabel('Social')]: Group,
  [getKeyFromLabel('Scripting')]: Code,

  // Soft
  [getKeyFromLabel('Willingness to Learn')]: SelfImprovement,
  [getKeyFromLabel('Proactivity')]: SelfImprovement,
  [getKeyFromLabel('Problem solving')]: Engineering,
  [getKeyFromLabel('Clean Code')]: Engineering,
  [getKeyFromLabel('Communication')]: Group,
  [getKeyFromLabel('Teamwork')]: Group,
  [getKeyFromLabel('Adaptability')]: Group,
} as any

const devIcons = {
  // Tech
  [getKeyFromLabel('Python')]: getDevIconURL('python/python-original.svg'),
  [getKeyFromLabel('Javascript')]: getDevIconURL('javascript/javascript-original.svg'),
  [getKeyFromLabel('Typescript')]: getDevIconURL('typescript/typescript-original.svg'),
  [getKeyFromLabel('React')]: getDevIconURL('react/react-original.svg'),
  [getKeyFromLabel('NextJS')]: getDevIconURL('nextjs/nextjs-original.svg'),
  [getKeyFromLabel('Django')]: getDevIconURL('django/django-plain.svg'),
  [getKeyFromLabel('Django REST')]: getDevIconURL('django/django-plain.svg'),
  [getKeyFromLabel('AngularJS')]: getDevIconURL('angularjs/angularjs-original.svg'),
  [getKeyFromLabel('HTML5')]: getDevIconURL('html5/html5-original.svg'),
  [getKeyFromLabel('CSS3')]: getDevIconURL('css3/css3-original.svg'),
  [getKeyFromLabel('SASS')]: getDevIconURL('sass/sass-original.svg'),
  [getKeyFromLabel('Material UI')]: getDevIconURL('materialui/materialui-original.svg'),
  [getKeyFromLabel('Bootstrap')]: getDevIconURL('bootstrap/bootstrap-original.svg'),
  [getKeyFromLabel('Flexbox')]: getDevIconURL('html5/html5-original.svg'),
  [getKeyFromLabel('PostgreSQL')]: getDevIconURL('postgresql/postgresql-original.svg'),
  [getKeyFromLabel('SQLite')]: getDevIconURL('sqlite/sqlite-original.svg'),
  [getKeyFromLabel('Git')]: getDevIconURL('git/git-original.svg'),
  [getKeyFromLabel('GitHub')]: getDevIconURL('github/github-original.svg'),
  [getKeyFromLabel('GitLab')]: getDevIconURL('gitlab/gitlab-original.svg'),
  [getKeyFromLabel('BitBucket')]: getDevIconURL('bitbucket/bitbucket-original.svg'),
  [getKeyFromLabel('Cypress')]: getDevIconURL(''),
  [getKeyFromLabel('Jasmine')]: getDevIconURL('jasmine/jasmine-plain.svg'),
  [getKeyFromLabel('Selenium')]: getDevIconURL('selenium/selenium-original.svg'),
  [getKeyFromLabel('Puppeteer')]: getDevIconURL(''),
  [getKeyFromLabel('Appium')]: getDevIconURL(''),
  [getKeyFromLabel('OSx')]: getDevIconURL('apple/apple-original.svg'),
  [getKeyFromLabel('Linux')]: getDevIconURL('linux/linux-original.svg'),
  [getKeyFromLabel('Bash')]: getDevIconURL('bash/bash-original.svg'),
} as any

export const getIcon = (label: string) => icons[getKeyFromLabel(label)]
export const getDevIconSrc = (label: string) => devIcons[getKeyFromLabel(label)]
