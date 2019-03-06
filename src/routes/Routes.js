import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'
import * as Page from 'routes'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTE_PATH.INDEX} exact />
        <Route path={ROUTE_PATH.HOME} exact component={Page.Home} />
        <Route path={ROUTE_PATH.PROJECTS + '/:id'} exact component={Page.Project} />
        <Route path={ROUTE_PATH.WORKS + '/:id'} exact component={Page.Work} />
        <Route path={ROUTE_PATH.COUNTER} exact component={Page.Test} />
        <Redirect to={ROUTE_PATH.INDEX} />
      </Switch>
    )
  }
}

export default Routes
