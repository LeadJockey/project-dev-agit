import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATH, ROUTE_ICON } from 'util/constants'
import './index.scss'

class Nav extends Component {
  render () {
    return (
      <nav className='app_nav'>
        <ul className='list_route'>
          <li>
            <Link to={ROUTE_PATH.INDEX}>INDEX</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.HOME}>
              <i className={ROUTE_ICON.HOME} />
              HOME
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.USERS}>
              <i className={ROUTE_ICON.USERS} />
              USERS
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.NEWS}>
              <i className={ROUTE_ICON.NEWS} />
              NEWS
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.PROJECTS}>
              <i className={ROUTE_ICON.PROJECTS} />
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.WORKS}>
              <i className={ROUTE_ICON.WORKS} />
              WORKS
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.TEST}>
              <i className={ROUTE_ICON.TEST} />
              TEST
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.D3}>
              <i className={ROUTE_ICON.D3} />
              D3
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
