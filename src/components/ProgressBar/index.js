import React, { Component } from 'react'
import './index.scss'

class ProgressBar extends Component {
  bar = React.createRef()

  componentDidMount(){
    const { percent } = this.props
    this.moveProgressBar(percent);
  }

  moveProgressBar = (percent) => {
    let tick = 0;
    let movement = setInterval(()=>{
      if (tick >= percent) {
        clearInterval(movement)
      }else{
        this.bar.style.width = `${tick += 1}%`
      }
    }, 60)
  }

  render() {
    const { percent } = this.props
    return (
      <div className="comp_progress_bar _motion_comm">
        <div className="bar_progress" ref={el => this.bar = el} />
        <span className="txt_progress">진행률 : {percent}%</span>
      </div>
    )
  }
}

export default ProgressBar
