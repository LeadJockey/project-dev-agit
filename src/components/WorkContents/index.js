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
  renderTitle = obj => {
    let titleProps = {}
    obj.filter(item => {
      titleProps = {
        title: item.name,
        desc: item.description
      }
    })
    return titleProps
  }
  renderItem = ({ id, category, endDate }) => {
    return (
      <li key={id} className={category.toLowerCase()}>
        <div className='c_f'>
          <span className='txt_category'>{category}</span>
          <span className='f_r'>
            <button className='btn_del'>
              <i className='ti-trash' />
            </button>
            <button className='btn_more'>
              <i className='ti-more-alt' />
            </button>
          </span>
        </div>

        <span className='txt_date'>Dead Line {endDate}</span>
      </li>
    )
  }
  componentDidMount () {
    const { id, fetchWorkDetail } = this.props
    fetchWorkDetail(id)
  }
  render () {
    const { detail } = this.props

    return (
      <section className='app_section'>
        <TitleBox {...this.renderTitle(detail)} />
        <strong>{detail.map(this.renderItem)}</strong>
      </section>
    )
  }
}

export default WorkContents
