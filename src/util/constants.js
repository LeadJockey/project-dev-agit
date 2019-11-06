// google authentication key
export const CLIENT_ID =
  '558582794007-m5unl35bhe57kfdtrmebi4ek50bunpp4.apps.googleusercontent.com'

// static route path
export const ROUTE_PATH = {
  INDEX: {
    path: '/',
    icon: null
  },
  HOME: {
    path: '/home',
    icon: 'ti-home'
  },
  PROJECTS: {
    path: '/projects',
    icon: 'ti-package',
    children: {
      MEMBERS: { path: '/members' },
      WORKS: { path: '/works' },
      ANALYSIS: { path: '/analysis' }
    }
  },
  NEWS: {
    path: '/news',
    icon: 'ti-world'
  },
  MEMBERS: {
    path: '/members',
    icon: 'ti-user'
  },
  WORKS: {
    path: '/works',
    icon: 'ti-target',
    children: {
      WORKS: { path: '/works' }
    }
  },
  TEST: {
    path: '/test',
    icon: 'ti-rocket'
  },
  D3: {
    path: '/d3',
    icon: 'ti-bar-chart'
  }
}

// animate frame per sec
export const FPS = 1000 / 60

// not support msg
export const NOT_SUPPORT_MSG_SVG = 'Sorry, your browser does not support SVG.'
export const NOT_SUPPORT_MSG_CANVAS =
  'Sorry, your browser does not support CANVAS'
export const NOT_SUPPORT_MSG_HTML5 =
  'Sorry, your browser does not support HTML5.'
