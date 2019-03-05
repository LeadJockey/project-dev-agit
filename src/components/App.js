import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { SizeContext } from 'util/context'
import Routes from 'routes/Routes'
import Login from './Login'
import Popup from './Popup'
import SideMenu from './SideMenu'

import 'assets/scss/components/app.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <SizeContext.Provider
          value={{ width: window.innerWidth, height: window.innerHeight }}
        >
          <div className='wrapper'>
            <header className='app_header'>header</header>
            <SideMenu />
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
