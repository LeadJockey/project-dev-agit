import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { ROUTE_PATH } from 'util/constants'
import './index.scss'
import Work from '../../routes/Work'

@inject(({ work }) => ({
  works: work.works,
  fetchWorks: work.fetchWorks
}))
@observer
class WorkList extends Component {
  renderItem = ({ id, name, member, description, category, endDate }) => {
    const routePath = `${this.props.detailPath}/${id}`

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
        <strong className='work_name'>{name}</strong>
        <p className='desc_work'>{description}</p>
        <div className='member_list_comp'>{member.map(this.renderItemObj)}</div>
        <span className='txt_date'>Dead Line {endDate}</span>
        <Link to={routePath} className='btn_detail'>
          View Detail
        </Link>
      </li>
    )
  }
  renderItemObj = ({ name, userImg }) => {
    return (
      <div className='member_profile' key={name}>
        <picture className='member_img'>
          <img src={userImg} />
        </picture>
        <em className='member_name'>{name}</em>
      </div>
    )
  }

  componentDidMount () {
    const { projectId, fetchWorks } = this.props
    fetchWorks(projectId)
  }
  render () {
    const { works } = this.props
    return <ul className='work_list_comp'>{works.map(this.renderItem)}</ul>
  }
}
export default WorkList
