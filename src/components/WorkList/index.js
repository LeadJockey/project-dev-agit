import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import './index.scss'
import Work from '../../routes/Work'

@inject(({ work }) => ({
  works: work.works,
  fetchWorks: work.fetchWorks
}))
@observer
class WorkList extends Component {
  test = ({ id, name }) => {
    return (
      <div key={id}>
        {id}, {name}
      </div>
    )
  }
  componentDidMount () {
    const { projectId, fetchWorks } = this.props
    console.log(this.props.projectId)
    fetchWorks(projectId)
  }
  render () {
    const { works } = this.props
    return (
      <div>
        <div>{works.map(this.test)}</div>{' '}
      </div>
    )
  }
}
export default WorkList
