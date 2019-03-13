import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from 'util/constants'
import { TitleBox } from 'components'
import { korean } from 'languages'
import AddWork from '../components/WorkList/addWork'
import WorkList from '../components/WorkList'

class ProjectDetail extends Component {
  getRouteChidrenPath = (routeObj, pathName) => {
    const { match } = this.props
    const { path, children } = routeObj
    const projectId = match.params.id
    const res = path + `/${projectId}` + children[pathName].path
    return res
  }

  render () {
    const { match } = this.props
    const projectId = match.params.id

    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.projectDetail} />
          기본정보 랜딩
        </section>
        <section className='app_section'>
          차트 랜딩{' '}
          <Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'ANALYSIS')}>
            ANALYSIS
          </Link>
        </section>
        <section className='app_section'>
          맴버리스트 랜딩{' '}
          <Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'MEMBERS')}>
            MEMBERS
          </Link>
        </section>
        <section className='app_section'>
          <TitleBox {...korean.route.work} />
          <WorkList projectId={projectId} />
          {/* 워크리스트 랜딩 <Link to={this.getRouteChidrenPath(ROUTE_PATH.PROJECTS, 'WORKS')}>WORKS</Link> */}
        </section>
      </>
    )
  }
}

export default ProjectDetail
