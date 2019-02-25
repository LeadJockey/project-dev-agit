import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Work extends Component {
  render() {
    const { match } = this.props
    const _id = parseInt(match.params.id, 10)
    return (
      <div>
        <h1>Work {_id}</h1>
        <hr />
        <Link to="/projects/1" >project 1</Link>
        <hr />
        <Link to={`/works/${_id + 1}`} >work {_id + 1}</Link>
      </div>
    )
  }
}

export default Work