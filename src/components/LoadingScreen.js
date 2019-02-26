import React, { Component } from 'react'
import { SizeContext } from 'util/context'

class LoadingScreen extends Component {
  static contextType = SizeContext
  canvas = React.createRef()
  

  resizeCanvas = () => {
    const { width, height } = this.context
    this.canvas.width = width
    this.canvas.height = height
  }

  animateScreen = () => {
    const FPS = 1000 / 60
    const PANEL_COLOR = '#ffd200'
    const { width, height } = this.context
    const ctx = this.canvas.getContext('2d')
    let movement = null
    let tick = 0
    ctx.fillStyle = PANEL_COLOR
    movement = setInterval(() => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillRect(tick += 10, 0, 300, height)
      if (tick > width) {
        clearInterval(movement)
        this.canvas.style.display = 'none'
      }
    }, FPS)
  }

  componentDidMount() {
    this.resizeCanvas()
    this.animateScreen()
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