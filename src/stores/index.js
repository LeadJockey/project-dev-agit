import CounterStore from './counter'
import ProjectStore from './project'
import ModalStore from './modal'
import LoginStore from './login'
import ResourceStore from './resource'
import NavStore from './nav'
import WorkStore from './works'

class RootStore {
  constructor () {
    this.counter = new CounterStore(this)
    this.project = new ProjectStore(this)
    this.modal = new ModalStore(this)
    this.login = new LoginStore(this)
    this.resource = new ResourceStore(this)
    this.nav = new NavStore(this)
    this.work = new WorkStore(this)
  }
}

export default RootStore
