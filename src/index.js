import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import RootStore from './stores'
import App from './components/App'

require('assets/scss/reset.scss')

const store = new RootStore()
const rootElem = document.getElementById('root')

render(
  <Provider {...store}>
    <>
      <App />
      <DevTools />
    </>
  </Provider>,
  rootElem
)

