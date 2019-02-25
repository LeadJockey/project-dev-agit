import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

import Routes from 'routes/Routes'


require('assets/scss/app.scss')

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div>Header</div>
          <div>Index</div>
          <div className="main">
            <Link to="/home" >home</Link>
            <Routes />
          </div>
          <div>Footer</div>
        </div>
      </Router>
    )
  }
}

export default App