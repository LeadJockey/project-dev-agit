import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from 'util/constants'
import { TitleBox } from 'components'
import { korean } from 'languages'

class ProjectDetail extends Component {
  getRouteChidrenPath = (routeObj, pathName) => {
    const { match } = this.props
    const { path, children } = routeObj
    const projectId = match.params.id
    const res = path + `/${projectId}` + children[pathName].path
    return res
  }

  render() {
    return (
      <>
        <section className="app_section">
          <ul>
            <li><Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'MEMBERS')} >MEMBERS</Link></li>
            <li><Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'WORKS')}>WORKS</Link></li>
            <li><Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'ANALYSIS')}>ANALYSIS</Link></li>
          </ul>
        </section>
        <section className="app_section">
          <TitleBox {...korean.route.projectDetail} />
        </section>
        <section className="app_section">

        </section>
      </>
    )
  }
}

export default ProjectDetail