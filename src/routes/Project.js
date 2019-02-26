import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Project extends Component {
  render() {
    const { match } = this.props
    const _id = parseInt(match.params.id, 10)
    return (
      <div>
        <h1>project {_id}</h1>
        <hr />
        <Link to={`/projects/${_id + 1}`} >project {_id + 1}</Link>
        <hr />
        <Link to="/works/1" >work 1</Link>
        <hr />
        <div>project detail area</div>
      </div>
    )
  }
}

export default Project