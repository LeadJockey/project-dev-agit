import CounterStore from './counter'
import ProjectStore from './project';
import ModalStore from './modal';
import ResourceStore from './resource';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this)
    this.project = new ProjectStore(this)
    this.modal = new ModalStore(this)
    this.resource = new ResourceStore(this)
  }
}

export default RootStore