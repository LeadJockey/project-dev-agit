import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'

class Aside extends Component {
  render() {
    return (
      <aside className='app_aside'>
        {/* <UserBox /> */}
        <div>
          <strong>네비게이션</strong>
          <ul className='user_menu'>
            <li><Link to={ROUTE_PATH.HOME}>HOME</Link></li>
            <li><Link to={ROUTE_PATH.PROJECTS + '/1'}>PROJECTS</Link></li>
            <li><Link to={ROUTE_PATH.WORKS + '/1'}>WORKS</Link></li>
            <li><Link to={ROUTE_PATH.COUNTER}>COUNTER</Link></li>
          </ul>
        </div>
      </aside>
    )
  }
}

export default Aside
