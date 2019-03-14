import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { NOT_SUPPORT_MSG_SVG } from 'util/constants'
import * as d3 from "d3";
import './index.scss'

@inject(({ resource }) => ({
  resources: resource.resources,
  current:resource.current,
  find: resource.find,
}))

@observer class BarChart extends Component {

  svg = null

  componentDidMount() {
    this.svg = d3
      .select('.graph_bar')
      .append('svg')
      .attr('width', 600)
      .attr('height', 300)
      .text(() => NOT_SUPPORT_MSG_SVG)
  }

  createChart({ datas, width, height, dataChunk, barPadding, lineCount, find }){
    const datasLength = datas.length
    const lines = this.getLines({ height, lineCount })
    const svgGroups = ['_d3_bar_chart_bar', '_d3_bar_chart_line']
    //create group  
    this.svg
      .selectAll('g')
      .data(svgGroups)
      .enter()
      .append('g')
      .attr('class', (className) => className)
    //create bars
    this.svg
      .selectAll(`.${svgGroups[1]}`)
      .selectAll('line')
      .data(lines)
      .enter()
      .append('line')
      .attr('x1', () => 0)
      .attr('y1', (x) => x)
      .attr('x2', () => width)
      .attr('y2', (x) => x)
      .attr('fill', () => '#efefef')
      .attr("stroke", "#efefef")
      .attr("stroke-width", .5)
    //create lines  
    this.svg
      .selectAll(`.${svgGroups[0]}`)
      .selectAll('rect')
      .data(datas)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * width / datasLength)
      .attr('y', (d) => height)
      .attr('width', () => (width / datasLength) - barPadding)
      .attr('height', (d, i) => parseInt(d.point / dataChunk, 10))
      .attr('fill', () => `hsl(${Math.random() * 360}, 100%, 50%)`)
      .on("mouseover", (d, i) => {
        console.log('mouse overed');
        find(d.id)
      })
    //create transition of bars  
    this.svg
      .selectAll(`.${svgGroups[0]}`)
      .selectAll('rect')
      .transition()
      .duration(750)
      .attr('y', (d) => height - parseInt(d.point / dataChunk, 10))
  }

  getLines = ({ height, lineCount }) => {
    const lines = []
    const per = height / lineCount
    let cnt = lineCount
    while (cnt > 0) {
      cnt -= 1
      lines.push(per * (cnt + 1))
    }
    return lines
  }

  render() {
    const { resources, find, current } = this.props
    this.svg && this.createChart({
      root: '.graph_bar',
      datas: resources,
      width: 600,
      height: 300,
      dataChunk: 2,
      barPadding: 10,
      lineCount: 3,
      find
    })
    return (
      <div className="comp_bar_chart">
        <strong>바 그래프 테스트</strong>
        <div>뒤로가기 시 D3 로 생성된 동적인 데이터 상실 .. </div>
        <div className="graph_bar" />
        <div className="graph_info">
          <span className="txt_info">id:{current.id}</span>
          <span className="txt_info">name:{current.name}</span>
          <span className="txt_info">point:{current.point}</span>
        </div>
      </div>
    )
  }
}

export default BarChart
