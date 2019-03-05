import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { SizeContext } from 'util/context'
import Aside from 'layouts/Aside'
import Header from 'layouts/Header'
import Routes from 'routes/Routes'
import Login from './Login'
import Popup from './Popup'
import 'assets/scss/layout.scss'

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
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
    const { width, height } = this.state
    return (
      <Router>
        <SizeContext.Provider value={{ width, height }}>
          <div className='app_wrapper'>
            <Header />
            <nav>

            </nav>
            <main className="app_main">
              <article className='app_content'>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                <section className="app_section">콘텐츠</section>
                {/* <Login />
                <Routes /> */}
              </article>
            </main>
            <Aside />
          </div>
          <Popup />
        </SizeContext.Provider>
      </Router>
    )
  }
}

export default App
