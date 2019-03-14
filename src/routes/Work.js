import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'

class WorkDetail extends Component {
  render () {
    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.work} />
        </section>
        <section className='app_section'>워크리스트 랜딩</section>
        <section className='app_section'>선택된 워크 디테일 랜딩</section>
      </>
    )
  }
}

export default WorkDetail
