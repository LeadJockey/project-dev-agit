import React, { Component } from 'react'
import { Link } from "react-router-dom"

class DelayLink extends Component {

  static contextTypes = Link.contextTypes

  timeout = null

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  clickHndler = (e) => {
    e.preventDefault()
    const { delay, to } = this.props
    const { history } = this.context.router
    this.timeout = setTimeout(() => {
      history.push(to)
    }, delay)
  }

  render() {
    return (
      <Link {...this.props} onClick={this.clickHndler} />
    )
  }

}

export default DelayLink