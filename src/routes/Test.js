import React, { Component } from 'react'
import { TitleBox, Counter } from 'components'
// import LoadingScreen from 'components/LoadingScreen'
import DelayLink from 'components/DelayLink'
import { korean } from 'languages'

class Test extends Component {
  render() {
    return (
      <section className="app_section">
        <TitleBox {...korean.route.test} />
        <Counter />
        <DelayLink to="/projects/1" delay={1000}>project 1</DelayLink>
        <br/>
        <DelayLink to="/work/1" delay={2000}>work 1</DelayLink>
        {/* <LoadingScreen /> */}
      </section>
    )
  }
}

export default Test