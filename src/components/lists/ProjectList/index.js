import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { observer, inject } from 'mobx-react'
import { ProgressBar } from 'components'
import './index.scss'

@inject(({ project, modal }) => ({
  add: project.add,
  remove: project.remove,
  update: project.update,
  projects: project.projects,
  open: modal.open,
  close: modal.close,
  getOne: project.getOne
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
        <div className="card_project">
          <div className="card_cont">
            <strong className="tit_cont">프로젝트 생성</strong>
          </div>
          <div className="group_btn">
            <button type="button" className="ti-plus btn_add" onClick={() => { add() }}>
              <span className="screen_out">추가</span>
            </button>
          </div>
        </div>
      </li>
    )
  }

  renderItem = ({ id, name, startDate, endDate, percent, state }) => {
    const routePath = `/projects/${id}`
    const { remove, open } = this.props
    const updateBody = this.getUpdateItemBody({ id, name, startDate, endDate, percent, state })
    const stateMap = {
      '완료': 'done',
      '진행중': 'doing',
      '예정': 'todo'
    }
    return (
      <li key={id}>
        <div className="card_project">
          <Link to={routePath} className="link_project">
            <div className={`card_state ${stateMap[state]}`}>
              <span className="txt_state">{state}</span>
            </div>
            <div className="card_percent">
              <ProgressBar percent={percent} />
            </div>
            <div className="card_cont">
              <strong className="tit_cont">{name}</strong>
              <span className="txt_info">{startDate} ~ {endDate}</span>
            </div>
          </Link>
        </div>
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
      <div className="comp_project_list">
        <ul className="list_project">
          {this.renderAddItem()}
          {projects.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default ProjectList