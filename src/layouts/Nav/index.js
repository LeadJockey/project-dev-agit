import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'
import './index.scss'

class Nav extends Component {
  render() {
    return (
      <nav className="app_nav">
        <strong>ROUTES</strong>
        <hr />
        <ul className="list_route">
          <li><Link to={ROUTE_PATH.INDEX} >INDEX</Link></li>
          <li><Link to={ROUTE_PATH.HOME} >HOME</Link></li>
          <li><Link to={ROUTE_PATH.PROJECTS +'/1'} >PROJECTS</Link></li>
          <li><Link to={ROUTE_PATH.WORKS + '/1'} >WORKS</Link></li>
          <li><Link to={ROUTE_PATH.COUNTER} >COUNTER</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
