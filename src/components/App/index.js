import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { SizeContext } from 'util/context'
import { Header, Aside, Nav } from 'layouts'
import Routes from 'routes/Routes'

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
            <Nav />
            <main className="app_main">
              <article className='app_content'>
                <Routes />
              </article>
            </main>
          </div>
        </SizeContext.Provider>
      </Router>
    )
  }
}

export default App