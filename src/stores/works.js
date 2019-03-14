import { observable, action } from 'mobx'
import WORKS from 'api/v1/works.json'

class WorksApi {
  // fetchProject = ()=> request.get('/api')
  fetch = () => WORKS
}

class WorkStore {
  @observable works = []
  @observable current = {}
  @observable state = 'pendding' // pendding / done / error

  constructor (root) {
    this.root = root
    this.api = new WorksApi()
  }

  @action fetchWorks = async id => {
    this.state = 'pending'
    try {
      this.fetchWorksSuccess(await this.api.fetch(), id)
    } catch (error) {
      this.fetchWorksError(error)
    }
  }

  @action.bound fetchWorksSuccess (works, id) {
    this.works = works.filter(item => item.projectId == id)
    this.state = 'done'
  }

  @action.bound fetchWorksError (error) {
    this.state = 'error'
  }

  @action find = _id => {
    const result = this.resources.filter(({ id }) => id === _id)
    if (result.length === 1) this.current = result[0]
  }
  filterData (data, id) {
    return data == id
  }
}

export default WorkStore
