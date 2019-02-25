import React, { Component } from 'react'
import Counter from './Counter'
import { a } from 'util/index.js'
console.log('uitl import test', a());

class App extends Component {
  render() {
    return (
      <div>
        <div>hello react</div>
        <Counter />
      </div>
    )
  }
}

export default App