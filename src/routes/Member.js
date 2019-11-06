import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'

class Member extends Component {
  render() {
    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.member} />
        </section>
        <section className='app_section' >
          맴버리스트 랜딩
        </section>
        <section className='app_section' >
          선택된 맴버 디테일 랜딩
        </section>
      </>
    )
  }
}

export default Member