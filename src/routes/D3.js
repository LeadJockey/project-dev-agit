import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'
import { defaults, Line, Bar, Doughnut, Radar } from 'react-chartjs-2'
import { merge } from 'lodash'

merge(defaults, {
  global: {
    title: {
      display: true,
      position: 'bottom',
      text: 'Chart Title',
      fontColor: '#fff',
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#fff',
      },
    },
    animation: {
      duration: 750,
      easing: 'easeOutQuint',
    },
  },
})

const donut = {
  data: {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      color: ['#FFF'],
      borderColor: ['#000', '#000', '#000'],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#e83e8c', '#007bff', '#ffc107'],
    }]
  }
}

const rader = {
  data: {
    labels: ['JS', 'CSS', 'HTML', 'TIME', 'DOCS', 'SIDE'],
    datasets: [
      {
        label: '나의 수치',
        backgroundColor: 'rgba(25, 151, 198, 0.1)',
        borderColor: 'rgba(25, 151, 198, 0.3)',
        pointRadius: 6,
        pointBackgroundColor: '#1997c6',
        pointHoverBackgroundColor: '#1997c6',
        pointStyle: 'rectRot',
        data: [90, 43, 88, 77, 34, 55],
      },
      {
        label: '평균 수치',
        backgroundColor: 'rgba(232, 62, 197, 0.1)',
        borderColor: 'rgba(232, 62, 197, 0.3)',
        pointRadius: 6,
        pointBackgroundColor: '#e83ec5',
        pointHoverBackgroundColor: '#e83ec5',
        pointStyle: 'rectRot',
        data: [60, 60, 60, 60, 60, 60],
      },

    ]
  },
  options: {
    scale: {
      gridLines: {
        color: "rgba(255, 255, 255, 0.1)",
        lineWidth: 1
      },
      pointLabels: {
        fontColor: "#fff"
      }
    },
  }
}

class D3 extends Component {

  render() {
    return (
      <>
        <section className="app_section">
          <TitleBox {...korean.route.d3} />
        </section>
        <section className="app_section">
          <Doughnut {...donut} />
        </section>
        <section className="app_section">
          <Radar {...rader} />
        </section>
        <section className="app_section">
          {/* <Doughnut {...donut} /> */}
        </section>
      </>
    )
  }
}

export default D3