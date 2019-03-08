import CounterStore from './counter'
import ProjectStore from './project'
import ModalStore from './modal'
import LoginStore from './login'

class RootStore {
  constructor () {
    this.counter = new CounterStore(this)
    this.project = new ProjectStore(this)
    this.modal = new ModalStore(this)
    this.login = new LoginStore(this)
  }
}

export default RootStore
