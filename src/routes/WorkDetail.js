import React, { Component } from 'react'
import { WorkContents } from 'components'

class WorkDetail extends Component {
  render () {
    return (
      <>
        <WorkContents id={this.props.match.params.id} />
      </>
    )
  }
}

export default WorkDetail
