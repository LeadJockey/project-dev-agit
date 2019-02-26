import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PROJECTS from 'api/v1/projects.json'
import 'assets/scss/projectList.scss'

@inject(({ counter }) => ({
  count: counter.count,
  increase: counter.increase,
  decrease: counter.decrease
}))

@observer class ProjectList extends Component {

  renderItem = ({ id, name, startDate, endDate, percent, state }) => {
    return (
      <li key={id}>
        <strong className="tit_info">{name}</strong>
        <span className="group_info">
          <span className="txt_info">{startDate}</span>
          <span className="txt_info">{endDate}</span>
          <span className="txt_info">{percent}</span>
          <span className="txt_info">{state}</span>
          <button type="button" className="btn_update">수정</button>
          <button type="button" className="btn_remove">삭제</button>
        </span>
      </li>
    )
  }

  render() {
    return (
      <div className="comp_project">
        <h2 className="tit_project">프로젝트 리스트</h2>
        <div className="ctrl_project">
          <button type="button" className="btn_add">프로젝트 추가</button>
        </div>
        <ul className="list_project">
          {PROJECTS.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default ProjectList
