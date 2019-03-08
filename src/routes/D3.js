import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'
import * as d3 from "d3";

class D3 extends Component {

  // dataset = [4, 8, 15, 16, 23, 42, 59, 64, 71, 83, 90, 95]
  dataset = [4, 8, 15]

  componentDidMount() {

    // const targets = d3
    //   .select('.target')
    //   .selectAll('p')
    //   .data(this.dataset)
    //   .text((fontSize) => `font-size:${fontSize}px`)

    // targets
    //   .enter()
    //   .append('p')
    //   .text((fontSize) => `font-size:${fontSize}px`)
    //   .transition()
    //   .duration(2000)
    //   .delay((fontSize, idx) => ((fontSize + idx) * 10))
    //   .style('font-size', (fontSize) => `${fontSize}px`)
    //   .style('color', () => `hsl(${Math.random() * 360}, 100%, 50%)`)

    // targets
    //   .exit()
    //   .remove()

    const SVG_WIDTH = 600
    const SVG_HEIGHT = 300
    const SVG_BAR_PADDING = 10
    const SVG_NOT_SUPPORT_MSG = 'Sorry, your browser does not support inline SVG.'
    const DATA = [10, 20, 30, 40, 50, 110, 120, 130, 140, 150, 1110, 1120, 1130, 1140, 1150]
    const DATA_LENGTH = DATA.length
    const DATA_DIVISION = 5 // 5%

    const svg = d3
      .select('.target')
      .append('svg')
      .attr('width', SVG_WIDTH)
      .attr('height', SVG_HEIGHT)
      .style('background-color', () => '#fff')
      .text(() => SVG_NOT_SUPPORT_MSG)

    svg
      .selectAll('rect')
      .data(DATA)
      .enter()
      .append('rect')
      .transition()
      .delay(() => 750)
      .attr('x', (d, i) => i * (SVG_BAR_PADDING + SVG_WIDTH) / DATA_LENGTH)
      .attr('y', (d) => SVG_HEIGHT - parseInt(d / DATA_DIVISION, 10))
      .attr('width', () => (SVG_WIDTH / DATA_LENGTH) - SVG_BAR_PADDING)
      .attr('height', (d, i) => parseInt(d / DATA_DIVISION, 10))
      .attr('fill', () => `hsl(${Math.random() * 360}, 100%, 50%)`)

    svg.selectAll('g')
      .data(DATA)
      .enter()
      .append('text')
      .transition()
      .delay(() => 250)
  }

  render() {
    return (
      <section className="app_section">
        <TitleBox {...korean.route.d3} />
        <div className="target" />
      </section>
    )
  }
}

export default D3