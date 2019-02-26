import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { observer, inject } from 'mobx-react'

import 'assets/scss/projectList.scss'

@inject(({ project, modal }) => ({
  add: project.add,
  remove: project.remove,
  update: project.update,
  projects: project.projects,
  open: modal.open
}))

@observer class ProjectList extends Component {

  getUpdateItemBody = ({ id, name, startDate, endDate, percent, state }) =>{
    return (
      <div>
        <input key="name" type="text" className="input_update" placeholder={name} />
        <input key="startDate" type="text" className="input_update" placeholder={startDate} />
        <input key="endDate" type="text" className="input_update" placeholder={endDate} />
        <input key="percent" type="number" className="input_update" placeholder={percent} min="0" max="100" />
        <input key="state" type="text" className="input_update" placeholder={state} />
      </div>
    )
  }

  renderItem = ({ id, name, startDate, endDate, percent, state }) => {
    const routePath = `/projects/${id}`
    const { remove, open } = this.props
    const updateBody = this.getUpdateItemBody({ id, name, startDate, endDate, percent, state })
    return (
      <li key={id}>
        <Link to={routePath} className="link_project">
          <strong className="tit_info">{name}</strong>
          <span className="group_info">
            <span className="txt_info">{startDate}</span>
            <span className="txt_info">{endDate}</span>
            <span className="txt_info">{percent}%</span>
            <span className="txt_info">{state}</span>
          </span>
        </Link>
        <div className="group_btn">
          <button type="button" className="btn_update" onClick={() => { open(updateBody) }}>수정</button>
          <button type="button" className="btn_remove" onClick={() => { remove(id) }}>삭제</button>
        </div>
      </li>
    )
  }

  render() {
    const { add, projects } = this.props
    return (
      <div className="comp_project">
        <h2 className="tit_project">프로젝트 리스트</h2>
        <div className="ctrl_project">
          <button type="button" className="btn_add" onClick={() => { add() }}>추가</button>
        </div>
        <ul className="list_project">
          {projects.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default ProjectList
