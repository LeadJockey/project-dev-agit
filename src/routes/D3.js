import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'
import * as d3 from "d3";

class D3 extends Component {
  //TODO yarn add d3-axis d3-interpolate d3-scale d3-selection https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583
  // dataset = [4, 8, 15, 16, 23, 42, 59, 64, 71, 83, 90, 95]
  dataset = [110, 900, 130, 140, 150, 810, 1500, 160, 732, 900]

  componentDidMount() {

    const SVG_NOT_SUPPORT_MSG = 'Sorry, your browser does not support inline SVG.'
    const SVG_BAR_PADDING = 10
    const DATA_DIVISION = 5
    const SVG_HEIGHT = 300
    const SVG_WIDTH = 600
    const DATA = this.dataset
    const DATA_LENGTH = DATA.length

    const svg = d3
      .select('.target')
      .append('svg')
      .attr('width', 800)
      .attr('height', SVG_HEIGHT)
      .text(() => SVG_NOT_SUPPORT_MSG)

    svg
      .selectAll('g')
      .data(['_d3_rect_bar', '_d3_line_x'])
      .enter()
      .append('g')
      .attr('class', (className) => className)
      .transition()
      .duration(2000)
      .delay((d, i) => ((d + i) * 10))

    svg
      .selectAll('._d3_line_x')
      .selectAll('line')
      .data([SVG_HEIGHT / 3 * 1, SVG_HEIGHT / 3 * 2, SVG_HEIGHT / 3 * 3])
      .enter()
      .append('line')
      .attr('x1', () => 0)
      .attr('y1', (x) => x)
      .attr('x2', () => SVG_WIDTH)
      .attr('y2', (x) => x)
      .attr('fill', () => '#efefef')
      .attr("stroke", "#efefef")
      .attr("stroke-width", .5)

    svg
      .selectAll('._d3_rect_bar')
      .selectAll('rect')
      .data(DATA)
      .enter()
      .append('rect')
      
      

      .attr('x', (d, i) => i * SVG_WIDTH / DATA_LENGTH)
      .attr('y', (d) => SVG_HEIGHT - parseInt(d / DATA_DIVISION, 10))
      .attr('width', () => (SVG_WIDTH / DATA_LENGTH) - SVG_BAR_PADDING)
      .attr('height', (d, i) => parseInt(d / DATA_DIVISION, 10))
      .attr('fill', () => `hsl(${Math.random() * 360}, 100%, 50%)`)
      .on("mouseover", (d, i) => {
        svg
          .append("text")
          .attr("class", "_hover")
          .text(() => d)
          .attr('x', () => 700)
          .attr('y', () => 150)
          .attr('fill', '#fff')
          .attr('text-anchor', 'middle')
          .attr('fill', '#fff')
      })
      .on("mouseout", () => { d3.selectAll("._hover").remove() })

    // svg.selectAll('._d3_rect_bar').selectAll('rect').transition(t)

  }


  render() {
    return (
      <section className="app_section">
        <TitleBox {...korean.route.d3} />
        <div className="target" style={{ padding: '20px' }} />
      </section>
    )
  }
}

export default D3