import { observable, action } from 'mobx'

class NavStore {
  @observable projectId = 0

  constructor(root) {
    this.root = root
  }

  @action.bound setProjectId = (projectId) => {
    this.projectId = projectId
  }
}

export default NavStore
