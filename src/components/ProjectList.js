import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { observer, inject } from 'mobx-react'

import 'assets/scss/projectList.scss'

@inject(({ project, modal }) => ({
  add: project.add,
  remove: project.remove,
  update: project.update,
  projects: project.projects,
  open: modal.open,
  close: modal.close
}))

@observer class ProjectList extends Component {
  nameEl = React.createRef()
  startDateEl = React.createRef()
  endDateEl = React.createRef()
  percentEl = React.createRef()
  stateEl = React.createRef()

  getUpdateItemBody = ({ id, name, startDate, endDate, percent, state }) => {
    const { update, close } = this.props
    const updateThenClose = () => {
      update({
        id: id,
        name: this.nameEl.value || name,
        startDate: this.startDateEl.value || startDate,
        endDate: this.endDateEl.value || endDate,
        percent: parseInt((this.percentEl.value || percent), 10),
        state: this.stateEl.value || state,
      })
      close()
    }
    return (
      <div className="update_project">
        <input key="name" type="text" className="input_update" placeholder={name} ref={el => this.nameEl = el} />
        <input key="startDate" type="text" className="input_update" placeholder={startDate} ref={el => this.startDateEl = el} />
        <input key="endDate" type="text" className="input_update" placeholder={endDate} ref={el => this.endDateEl = el} />
        <input key="percent" type="number" className="input_update" placeholder={percent} min="0" max="100" ref={el => this.percentEl = el} />
        <input key="state" type="text" className="input_update" placeholder={state} ref={el => this.stateEl = el} />
        <button key="submit" type="button" onClick={updateThenClose}>submit</button>
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
