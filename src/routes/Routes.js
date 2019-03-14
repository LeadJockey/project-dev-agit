import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'
import * as Page from 'routes'

class Routes extends Component {
  getRouteChidrenPath = (routeObj, pathName) => {
    const { path, children } = routeObj
    const res = path + `/:id` + children[pathName].path+`/:id`
    return res
  }

  render() {
    return (
      <Switch>
        <Route path={ROUTE_PATH.INDEX.path} exact component={Page.Initial} />
        <Route path={ROUTE_PATH.HOME.path} exact component={Page.Home} />

        <Route path={ROUTE_PATH.NEWS.path} exact component={Page.News} />
        <Route path={ROUTE_PATH.NEWS.path + '/:id'} exact />

        <Route path={ROUTE_PATH.PROJECTS.path} exact component={Page.Project} />
        <Route path={ROUTE_PATH.PROJECTS.path + '/:id'} exact component={Page.ProjectDetail} />
        <Route path={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'WORKS')} exact component={Page.Work} />
        <Route path={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'MEMBERS')} exact component={Page.Member} />
        <Route path={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'ANALYSIS')} exact component={Page.Analysis}/>

        {/* <Route path={ROUTE_PATH.TEST.path} exact component={Page.Test} /> */}
        {/* <Route path={ROUTE_PATH.D3.path} exact component={Page.D3} /> */}

        <Redirect to={ROUTE_PATH.INDEX.path} />
      </Switch>
    )
  }
}

export default Routes
