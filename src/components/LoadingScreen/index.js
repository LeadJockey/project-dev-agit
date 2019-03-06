import React, { Component } from 'react'
import { SizeContext } from 'util/context'
import { FPS } from 'util/constants'

class LoadingScreen extends Component {

  static contextType = SizeContext

  movement = null

  canvas = React.createRef()

  componentDidMount() {
    this.resizeCanvas()
    this.animateScreen()
  }

  componentWillUnmount() {
    if (this.movement) {
      this.movement = clearInterval(this.movement)
    }
  }

  resizeCanvas = () => {
    const { width, height } = this.context
    this.canvas.width = width
    this.canvas.height = height
  }

  animateScreen = () => {
    const PANEL_COLOR = '#ffd200'
    const { width, height } = this.context
    const ctx = this.canvas.getContext('2d')
    let tick = 0
    ctx.fillStyle = PANEL_COLOR
    this.movement = setInterval(() => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillRect(tick += 10, 0, 300, height)
      if (tick > width) {
        clearInterval(this.movement)
        this.canvas.style.display = 'none'
      }
    }, FPS)
  }

  render() {
    return (
      <SizeContext.Consumer>
        {() => (
          <canvas className="loading_screen" {...this.context} ref={el => this.canvas = el}>
            Your browser does not support the HTML5 canvas tag
          </canvas>
        )}
      </SizeContext.Consumer>
    )
  }
}

export default LoadingScreen