import React, { Component } from 'react'
import { TitleBox } from 'components'
import { korean } from 'languages'
import { Doughnut, Radar } from 'react-chartjs-2'

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
  },
  options: {
    cutoutPercentage: 70,
    rotation: -0.5 * Math.PI,
    circumference: 1.75 * Math.PI,
    animation: {
      duration: 3000,
      easing: 'easeOutQuint',
      animateRotate: true,
      animateScale: false,
      onProgress: null,
      onComplete: null,
    },
    title: {
      display: true,
      position: 'bottom',
      text: 'Custom Chart Title',
      fontColor: '#fff',

    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#fff'
      }
    },
  }
}

const rader = {
  data: {
    labels: ['JS', 'CSS', 'HTML', 'TIME', 'DOCS', 'SIDE', 'RELATION'],
    datasets: [
      {
        label: '나의 수치',
        backgroundColor: 'rgba(179,181,198,0.2)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointHoverBackgroundColor: 'red',
        pointStyle:'rectRot',
        data: [60, 62, 68, 61, 62, 67, 68]
      },
      {
        label: '평균 수치',
        backgroundColor: 'rgba(255,99,132,0.2)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBackgroundColor: '#fff',
        pointStyle:'rectRot',
        data: [90, 70, 70, 70, 50, 80, 90]
      }
    ]
  },
  options: {
    animation: {
      duration: 3000,
      easing: 'easeOutQuint',
      animateRotate: true,
      animateScale: false,
      onProgress: null,
      onComplete: null,
    },
    title: {
      display: true,
      position: 'bottom',
      text: 'Custom Chart Title',
      fontColor: '#fff',

    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#fff'
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