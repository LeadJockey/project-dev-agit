import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'
import * as Page from 'routes'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTE_PATH.INDEX} exact component={Page.Initial}/>
        <Route path={ROUTE_PATH.HOME} exact component={Page.Home} />
        <Route path={ROUTE_PATH.USERS} exact component={Page.User} />
        <Route path={ROUTE_PATH.USERS + '/:id'} exact />
        <Route path={ROUTE_PATH.NEWS} exact component={Page.News} />
        <Route path={ROUTE_PATH.NEWS + '/:id'} exact />
        <Route path={ROUTE_PATH.PROJECTS} exact component={Page.Project} />
        <Route path={ROUTE_PATH.PROJECTS + '/:id'} exact />
        <Route path={ROUTE_PATH.WORKS} exact component={Page.Work} />
        <Route path={ROUTE_PATH.WORKS + '/:id'} exact />
        <Route path={ROUTE_PATH.TEST} exact component={Page.Test} />
        <Route path={ROUTE_PATH.D3} exact component={Page.D3} />
        <Redirect to={ROUTE_PATH.INDEX} />
      </Switch>
    )
  }
}

export default Routes
