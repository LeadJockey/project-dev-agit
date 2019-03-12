import React, { Component } from 'react'
import { WorkList, TitleBox } from 'components'
import { korean } from 'languages'

class Work extends Component {
  render () {
    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.work} />
          <WorkList />
        </section>
        <section className='app_section' >
          워크리스트 랜딩
        </section>
        <section className='app_section' >
          선택된 워크 디테일 랜딩
        </section>
      </>
    )
  }
}

export default Work
