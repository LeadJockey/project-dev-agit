import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ROUTE_PATH } from 'util/constants'

class Header extends Component {
  render() {
    return (
      <header className='app_header'>
        <Link to={ROUTE_PATH.INDEX}>
          <h1 className="app_tit">DEV-AGIT</h1>
        </Link>
      </header>
    )
  }
}

export default Header
