import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'
import Home from './Home'
import Project from './Project'
import Work from './Work'
import Test from './Test'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTE_PATH.INDEX} exact />
        <Route path={ROUTE_PATH.HOME} exact component={Home} />
        <Route path={ROUTE_PATH.PROJECTS + '/:id'} exact component={Project} />
        <Route path={ROUTE_PATH.WORKS + '/:id'} exact component={Work} />
        <Route path={ROUTE_PATH.COUNTER} exact component={Test} />
        <Redirect to={ROUTE_PATH.INDEX} />
      </Switch>
    )
  }
}

export default Routes
