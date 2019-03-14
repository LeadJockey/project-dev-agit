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

const getRandomData = (range) => {
  return Math.round(Math.random() * (range || 100));
}

const donut = {
  data: {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [
        getRandomData(), 
        getRandomData(), 
        getRandomData()
      ],
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
        data: [
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData()
        ],
      },
      {
        label: '평균 수치',
        backgroundColor: 'rgba(232, 62, 197, 0.1)',
        borderColor: 'rgba(232, 62, 197, 0.3)',
        pointRadius: 6,
        pointBackgroundColor: '#e83ec5',
        pointHoverBackgroundColor: '#e83ec5',
        pointStyle: 'rectRot',
        data: [
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData(),
          getRandomData()
        ],
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

const line = {
  data: {
    labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'My First dataset',
      fill: false,
      backgroundColor: '#9F86FF',
      borderColor: '#9F86FF',
      data: [
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData()
      ]
    }, {
      label: 'My Second dataset',
      fill: false,
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      data: [
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData()
      ],
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart with Multiline Labels'
    },
  }
}

const bar = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'hotpink',
      borderColor: 'hotpink',
      borderWidth: 1,
      data: [
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData()
      ]
    }, {
      label: 'Dataset 2',
      backgroundColor: 'skyblue',
      borderColor: 'skyblue',
      borderWidth: 1,
      data: [
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData(),
        getRandomData()
      ]
    }]
  }
}

class Analysis extends Component {

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
          <Line {...line} />
        </section>
        <section className="app_section">
          <Bar {...bar} />
        </section>
      </>
    )
  }
}

export default Analysis