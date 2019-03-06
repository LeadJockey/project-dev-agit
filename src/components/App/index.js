import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { SizeContext } from 'util/context'
import { Header, Aside, Nav } from 'layouts'
import { Modal } from 'components'
import { Routes } from 'routes'
import './index.scss'

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    languageType: 'korean'
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  render() {
    const { width, height, languageType } = this.state
    return (
      <Router>
        <SizeContext.Provider value={{ width, height }}>
          <div className='app_wrapper'>
            <Header />
            <Nav />
            <main className="app_main">
              <article className='app_content'>
                <Routes />
              </article>
            </main>
            <Modal />
          </div>
        </SizeContext.Provider>
      </Router>
    )
  }
}

export default App
