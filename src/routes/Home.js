import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Home</h1>
        <hr />
        <Link to="/projects/1">projects 1</Link>
        <hr />
        <Link to="/works/1" >work 1</Link>
      </div>
    )
  }
}

export default Home