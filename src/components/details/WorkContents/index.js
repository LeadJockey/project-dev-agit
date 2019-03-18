import React, { Component } from 'react'
import { TitleBox } from 'components'
import { observer, inject } from 'mobx-react'
import './index.scss'
@inject(({ work }) => ({
  detail: work.detail,
  fetchWorkDetail: work.fetchWorkDetail
}))
@observer
class WorkContents extends Component {
  componentDidMount () {
    const { id, fetchWorkDetail } = this.props
    fetchWorkDetail(id)
    console.log(id)
  }
  render () {
    const { detail } = this.props
    return (
      <section className='app_section'>
        <TitleBox />
      </section>
    )
  }
}

export default WorkContents
