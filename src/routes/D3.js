import React, { Component } from 'react'
import { TitleBox } from 'components'
import { BarChart } from 'charts'
import { korean } from 'languages'

class D3 extends Component {

  render() {
    return (
      <section className="app_section">
        <TitleBox {...korean.route.d3} />
        <BarChart />
      </section>
    )
  }
}

export default D3