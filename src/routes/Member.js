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
        <section className='app_section' />
      </>
    )
  }
}

export default Member