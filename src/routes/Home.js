import React, { Component } from 'react'
import { TitleBox } from 'components';

const data = {
  title:'HOME',
  desc:'welcome to visit our dev-agit'
}

class Home extends Component {
  render(){
    return (
      <TitleBox {...data} />
    )
  }
}

export default Home