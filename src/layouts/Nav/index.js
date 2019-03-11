import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserMenu } from 'components'
import { ROUTE_PATH, ROUTE_ICON } from 'util/constants'
import './index.scss'
import { observer, inject } from 'mobx-react'

@inject(({ login }) => ({
  authenticate: login.authenticate,
  userToken: login.userToken,
  loginAction: login.loginAction,
  logoutAction: login.logoutAction
}))
@observer
class Nav extends Component {
  renderItem = routeName => {
    return (
      <li key={routeName}>
        <Link to={ROUTE_PATH[routeName]}>
          {ROUTE_ICON[routeName] ? (
            <i className={ROUTE_ICON[routeName]} />
          ) : null}
          {routeName}
        </Link>
      </li>
    )
  }

  render () {
    return (
      <nav className='app_nav'>
        <Login />
        <ul className='list_route'>
          {Object.keys(ROUTE_PATH).map(this.renderItem)}
        </ul>
      </nav>
    )
  }
}

export default Nav
