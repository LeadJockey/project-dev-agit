import React, { Component } from 'react'
import { ProjectList, TitleBox } from 'components'
import { korean } from 'languages'

class Project extends Component {
  render() {
    return (
      <>
        <section className="app_section">
          <TitleBox {...korean.route.project} />
        </section>
        <section className="app_section">
          <ProjectList />
        </section>
      </>
    )
  }
}

export default Project