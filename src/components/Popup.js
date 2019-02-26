import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'assets/scss/popup.scss'

@inject(({ modal }) => ({
  isOpen: modal.modal.isOpen,
  body: modal.modal.body,
  close: modal.close
}))

@observer class Popup extends Component {

  renderPopup = () => {
    const { body, close } = this.props
    return (
      <div className="comp_popup" onClick={() => { close() }}>
        <button type="button" className="btn_close" onClick={() => { close() }}>X</button>
        <div className="content_popup">{body}</div>
      </div>
    )
  }

  render() {
    const { isOpen } = this.props
    return (
      isOpen
        ? this.renderPopup()
        : null
    )
  }
}

export default Popup