import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import RootStore from './stores'
import { App } from './components'

import 'assets/scss/index.scss'

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

