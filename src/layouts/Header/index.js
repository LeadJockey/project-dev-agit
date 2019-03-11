import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from 'util/constants'
import './index.scss'
import logo from '../../assets/images/logo.png'

class Header extends Component {
  render () {
    return (
      <header className='app_header'>
        <h1 className='app_logo'>
          <Link to={ROUTE_PATH.INDEX}>
            <img src={logo} className='img_logo' />
            <strong className='app_tit'>Dev-agit</strong>
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header
