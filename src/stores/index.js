import CounterStore from './counter'
import ProjectStore from './project';
import ModalStore from './modal';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this)
    this.project = new ProjectStore(this)
    this.modal = new ModalStore(this)
  }
}

export default RootStore