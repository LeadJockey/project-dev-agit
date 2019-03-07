import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'
import * as d3 from "d3";

class D3 extends Component {

  dataset = [4, 8, 15, 16, 23, 42, 59, 64, 71, 83, 90, 95]

  componentDidMount() {

    const targets = d3
      .select('.target')
      .selectAll('p')
      .data(this.dataset)
      .text((fontSize) => `font-size:${fontSize}px`)

    targets
      .enter()
      .append('p')
      .text((fontSize) => `appended:${fontSize}px`)
      .transition()
      .duration(2000)
      .delay((fontSize, idx) => ((fontSize + idx) * 10))
      .style('font-size', (fontSize) => `${fontSize}px`)
      .style('color', () => `hsl(${Math.random() * 360}, 100%, 50%)`)

    targets
      .exit()
      .remove()

  }

  render() {
    return (
      <>
        <section className="app_section">
          <TitleBox {...korean.route.d3} />
          <div className="target" />
        </section>
      </>
    )
  }
}

export default D3