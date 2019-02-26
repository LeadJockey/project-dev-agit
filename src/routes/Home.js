import React, { Component } from 'react'
import { Link } from "react-router-dom"
import ProjectList from 'components/ProjectList';
import Popup from 'components/Popup';

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Home</h1>
        <hr />
        <Link to="/projects/1">projects 1</Link>
        <hr />
        <Link to="/works/1" >work 1</Link>
        <ProjectList />
        <Popup />
      </div>
    )
  }
}

export default Home