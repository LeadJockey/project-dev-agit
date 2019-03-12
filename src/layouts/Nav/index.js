import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserMenu } from 'components'
import { ROUTE_PATH } from 'util/constants'
import './index.scss'
import { observer, inject } from 'mobx-react'

class Nav extends Component {
  renderItem = routeName => {
    const routeObj = ROUTE_PATH[routeName]
    if (!routeObj) return null
    const { path, icon } = routeObj
    return (
      <li key={routeName}>
        <Link to={path}>
          {icon ? <i className={icon} /> : null}
          {routeName}
        </Link>
      </li>
    )
  }

  render () {
    const { authenticate, userImg } = this.props
    return (
      <nav className='app_nav'>
        <UserMenu />
        <ul className='list_route'>
          {this.renderItem('INDEX')}
          {this.renderItem('PROJECTS')}
          {this.renderItem('NEWS')}
        </ul>
      </nav>
    )
  }
}

export default Nav
