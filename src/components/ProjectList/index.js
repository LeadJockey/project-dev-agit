import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { observer, inject } from 'mobx-react'
import './index.scss'

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

  renderAddItem = () => {
    const { add } = this.props
    return (
      <li>
        <button type="button" className="btn_add" onClick={() => { add() }}>
          <span className="ti-plus test">
            <span className="screen_out">추가</span>
          </span>
        </button>
      </li>
    )
  }

  renderItem = ({ id, name, startDate, endDate, percent, state }) => {
    const routePath = `/projects/${id}`
    const { remove, open } = this.props
    const updateBody = this.getUpdateItemBody({ id, name, startDate, endDate, percent, state })
    return (
      <li key={id}>
        <Link to={routePath} className="link_project">
          <div className="bg_img" />
          <picture className="logo_img">
            <img src="" className="img_thumb" />
          </picture>
          <div className="content">
            <strong className="tit_info">{name}</strong>
            <span className="txt_date">{startDate} ~ {endDate}</span>
            <span className="txt_info">{percent}%</span>
            <span className="txt_info">{state}</span>
          </div>
          <div className="info">
            <span className="txt_info">{endDate}</span>
            <span className="txt_info">{percent}%</span>
            <span className="txt_info">{state}</span>
          </div>
        </Link>
        <div className="group_btn">
          <button type="button" className="ti-pencil-alt btn_update" onClick={() => { open(updateBody) }}>
            <span className="screen_out">수정</span>
          </button>
          <button type="button" className="ti-trash btn_remove" onClick={() => { remove(id) }}>
            <span className="screen_out">삭제</span>
          </button>
        </div>
      </li>
    )
  }

  render() {
    const { projects } = this.props
    return (
      <ul className="list_project">
        {this.renderAddItem()}
        {projects.map(this.renderItem)}
      </ul>
    )
  }
}

export default ProjectList