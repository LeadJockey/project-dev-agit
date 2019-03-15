import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './index.scss'

@inject(({ work }) => ({
  works: work.works,
  fetchWorksList: work.fetchWorksList
}))
@observer
class WorkList extends Component {
  routePath = () => {
    return this.props.detailPath
  }

  renderItem = ({ id, name, member, description, category, endDate }) => {
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
        <Link to={`${this.routePath()}/${id}`} className='btn_detail'>
          View Detail
        </Link>
      </li>
    )
  }
  renderItemObj = ({ name, userImg }) => {
    return (
      <div className='member_profile' key={name}>
        <picture className='member_img'>
          <img src={userImg} alt={name} />
        </picture>
        <em className='member_name'>{name}</em>
      </div>
    )
  }

  componentDidMount () {
    const { projectId, fetchWorksList, allList } = this.props
    fetchWorksList(projectId, allList)
  }
  render () {
    const { works, allList } = this.props
    return (
      <div className='work_list_comp'>
        <ul className='list_work'>{works.map(this.renderItem)}</ul>
        <div className='wrap_btn'>
          {!allList ? (
            <Link to={this.routePath()} className='btn_more'>
              <i className='ti-arrow-right' />
              View More
            </Link>
          ) : null}
        </div>
      </div>
    )
  }
}
export default WorkList
