import React, { Component } from 'react'
import { TitleBox, WorkList } from 'components'
import { ROUTE_PATH } from 'util/constants'
import { korean } from 'languages'

class Work extends Component {
  getRouteChidrenPath = (routeObj, pathName) => {
    const { match } = this.props
    const { path, children } = routeObj
    const projectId = match.params.id
    const res = path + `/${projectId}` + children[pathName].path
    return res
  }
  render () {
    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.work} />
          <WorkList
            projectId={this.props.match.params.id}
            detailPath={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'WORKS')}
            allList
          />
        </section>
      </>
    )
  }
}

export default Work
