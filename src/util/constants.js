// google authentication key
export const CLIENT_ID =
  '558582794007-m5unl35bhe57kfdtrmebi4ek50bunpp4.apps.googleusercontent.com'
  
// static route path
export const ROUTE_PATH = {
  INDEX: '/',
  HOME: '/home',
  USERS: '/users',
  NEWS: '/news',
  PROJECTS: '/projects',
  MEMBERS:'/project/:id/members',
  TASKS:'/project/:id/tasks',
  ANALYSIS:'/project/:id/analysis',
  WORKS: '/works',
  TEST: '/test',
  D3: '/d3'
}

export const ROUTE_ICON = {
  HOME: 'ti-home',
  USERS: 'ti-user',
  NEWS: 'ti-world',
  PROJECTS: 'ti-package',
  WORKS: 'ti-target',
  TEST: 'ti-rocket',
  D3: 'ti-bar-chart'
}

// animate frame per sec
export const FPS = 1000 / 60

// not support msg
export const NOT_SUPPORT_MSG_SVG = 'Sorry, your browser does not support SVG.'
export const NOT_SUPPORT_MSG_CANVAS = 'Sorry, your browser does not support CANVAS'
export const NOT_SUPPORT_MSG_HTML5 = 'Sorry, your browser does not support HTML5.'
