import React, { Component } from 'react'
import Counter from 'components/Counter'
import LoadingScreen from 'components/LoadingScreen'
import DelayLink from 'components/DelayLink'

class Test extends Component {
  render(){
    return (
      <div>
        <h1>Counter</h1>
        <hr />
        <Counter />
        <hr />
        <DelayLink to="/projects/1" delay={1000}>project 1</DelayLink>
        <hr />
        <DelayLink to="/work/1" delay={2000}>work 1</DelayLink>
        <LoadingScreen />
      </div>
    )
  }
}

export default Test