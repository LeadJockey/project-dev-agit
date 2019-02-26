import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Routes from 'routes/Routes'

import GoogleLogin from 'react-google-login'

require('assets/scss/app.scss')

class App extends Component {
  responseGoogle (response) {
    console.log(response.w3)

    localStorage.v = 0
  }
  render () {
    return (
      <Router>
        <SizeContext.Provider
          value={{ width: window.innerWidth, height: window.innerHeight }}
        >
          <div className='wrapper'>
            <div>Header</div>
            <div>Index</div>
            <div className='main'>
              <Link to='/home'>home</Link>
              <hr />
              <Link to='/counter'>counter</Link>
              <Routes />
            </div>
            <div>Footer</div>
          </div>
          {/* <LoadingScreen /> */}
        </SizeContext.Provider>
      </Router>
    )
  }
}

export default App
