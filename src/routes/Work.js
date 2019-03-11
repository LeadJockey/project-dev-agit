import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'

class Work extends Component {
  render () {
    return (
      <>
        <section className='app_section'>
          <TitleBox {...korean.route.work} />
        </section>
        <section className='app_section' />
      </>
    )
  }
}

export default Work
