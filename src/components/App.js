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
        <div className='wrapper'>
          <div>Header</div>
          <div>Index</div>
          <div className='main'>
            <Link to='/home'>home</Link>
            <Routes />
          </div>

          <GoogleLogin
            clientId='558582794007-m5unl35bhe57kfdtrmebi4ek50bunpp4.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />

          <div>Footer</div>
        </div>
      </Router>
    )
  }
}

export default App
