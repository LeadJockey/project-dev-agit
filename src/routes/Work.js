import React, { Component } from 'react'
import { TitleBox, EmptyContent } from 'components'
import { korean } from 'languages'

class Work extends Component {
  render() {
    return (
      <>
        <section className="app_section">
          <TitleBox {...korean.route.work} />
        </section>
        <section className="app_section">
          <EmptyContent />
        </section>
      </>
    )
  }
}

export default Work