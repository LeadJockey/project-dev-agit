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
        <section className='app_section' />
      </>
    )
  }
}

export default Work
