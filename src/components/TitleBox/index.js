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
        <div className='section_util' />
      </div>
    )
  }
}

export default TitleBox
