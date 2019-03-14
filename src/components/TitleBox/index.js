import React, { Component } from 'react'
import './index.scss'

class TitleBox extends Component {
  render () {
    const { title, desc } = this.props
    return (
      <div className='comp_title_box'>
        <div className='wrap_tit'>
          <h2 className='txt_tit'>{title}</h2>
          <p className='txt_desc'>{desc}</p>
        </div>
        {console.log(this.props)}
        {this.props.additional ? (
          <div className='section_util'>{this.props.additional}</div>
        ) : null}
      </div>
    )
  }
}

export default TitleBox
