import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from 'util/constants'
import './index.scss'
import { observer, inject } from 'mobx-react'

@inject(({ login }) => ({
  authenticate: login.authenticate,
  userToken: login.userToken,
  loginAction: login.loginAction,
  logoutAction: login.logoutAction,
}))

@observer class Nav extends Component {

  renderItem = (routeName) => {
    const routeObj = ROUTE_PATH[routeName]
    if (!routeObj) return null
    const { path, icon } = routeObj
    return (
      <li key={routeName}>
        <Link to={path} >
          {
            icon
              ? <i className={icon} />
              : null
          }
          {routeName}
        </Link>
      </li>
    )
  }

  render() {
    return (
      <nav className='app_nav'>
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
