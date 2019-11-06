import React, { Component } from 'react'
import { FPS } from 'util/constants'

import './index.scss'

class ProgressBar extends Component {

  movement = null

  bar = React.createRef()

  componentDidMount(){
    const { percent } = this.props
    this.moveProgressBar(percent);
  }

  componentWillUnmount(){
    if(this.movement){
      this.movement = clearInterval(this.movement)
    }
  }

  moveProgressBar = (percent) => {
    let tick = 0;
    this.movement = setInterval(()=>{
      if (tick >= percent) {
        clearInterval(this.movement)
      }else{
        this.bar.style.width = `${tick += 1}%`
      }
    }, FPS)
  }

  render() {
    const { percent } = this.props
    return (
      <div className="comp_progress_bar">
        <div className="bar_progress" ref={el => this.bar = el} />
        <span className="txt_progress">{percent}%</span>
      </div>
    )
  }
}

export default ProgressBar
