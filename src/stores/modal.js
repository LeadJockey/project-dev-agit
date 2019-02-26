import { observable, action } from 'mobx'

class ModalStore {
  @observable modal = {
    isOpen:false,
    body:null
  }

  constructor(root) {
    this.root = root
  }

  @action open = (body) => {
    this.modal.isOpen = true
    this.modal.body = body
  }

  @action close = () => {
    this.modal.isOpen = false
    this.modal.body = null
  }
}

export default ModalStore
