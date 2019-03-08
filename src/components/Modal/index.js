import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './index.scss'

@inject(({ modal }) => ({
  isOpen: modal.modal.isOpen,
  body: modal.modal.body,
  close: modal.close
}))

@observer class Modal extends Component {

  renderModal = () => {
    const { body, close } = this.props
    return (
      <div className="comp_modal" onClick={() => { close() }}>
        <button type="button" className="btn_close" onClick={() => { close() }}>X</button>
        <div className="modal_cont" onClick={(e) => { e.stopPropagation() }}>{body}</div>
      </div>
    )
  }

  render() {
    const { isOpen } = this.props
    return (
      isOpen
        ? this.renderModal()
        : null
    )
  }
}

export default Modal