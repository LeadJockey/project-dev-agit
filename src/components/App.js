import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { SizeContext } from 'util/context'
import Routes from 'routes/Routes'
import Login from './Login'
import Popup from './Popup'
import 'assets/scss/app.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <SizeContext.Provider
          value={{ width: window.innerWidth, height: window.innerHeight }}
        >
          <div className='wrapper'>
            <header className='app_header'>header</header>
            <aside className='side_menu'>
              <div className='user_profile' />
              <ul className='user_menu'>
                <li>User Menu 1</li>
                <li>User Menu 2</li>
                <li>User Menu 3</li>
                <li>User Menu 4</li>
              </ul>
            </aside>
            <Login />
            <div className='main'>
              <Link to='/home'>home</Link>
              <hr />
              <Link to='/counter'>counter</Link>
              <Routes />
            </div>
            <div>Footer</div>
          </div>
          <Popup />
        </SizeContext.Provider>
      </Router>
    )
  }
}

export default App
