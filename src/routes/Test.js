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
        <DelayLink to="/projects/1" delay={1000}>delay link test (1000ms)</DelayLink>
        <br/>
        <DelayLink to="/projects/2" delay={2000}>delay link test (2000ms)</DelayLink>
        {/* <LoadingScreen /> */}
      </section>
    )
  }
}

export default Test