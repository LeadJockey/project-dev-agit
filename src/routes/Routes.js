import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"

import Home from './Home'
import Project from './Project'
import Work from './Work'
import Test from './Test'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact />
        <Route path="/home" exact component={Home} />
        <Route path="/projects/:id" exact component={Project} />
        <Route path="/works/:id" exact component={Work} />
        <Route path="/counter" exact component={Test} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes
