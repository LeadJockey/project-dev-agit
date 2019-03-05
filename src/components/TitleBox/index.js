import React, { Component } from 'react'
import './index.scss'

class TitleBox extends Component {
  render() {
    const { title, desc } = this.props
    return (
      <div className="box_tit">
        <h2 className="txt_tit">{title}</h2>
        <p className="txt_desc">{desc}</p>
      </div>
    )
  }
}

export default TitleBox
