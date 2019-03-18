import { observable, action } from 'mobx'
import WORKS from 'api/v1/works.json'

class WorksApi {
  // fetchProject = ()=> request.get('/api')
  fetch = () => WORKS
}

class WorkStore {
  @observable works = []
  @observable detail = []
  @observable current = {}
  @observable state = 'pendding' // pendding / done / error

  constructor (root) {
    this.root = root
    this.api = new WorksApi()
  }

  @action fetchWorksList = async (id, allList) => {
    this.state = 'pending'
    try {
      this.fetchList(await this.api.fetch(), id, allList)
    } catch (error) {
      this.fetchWorksError(error)
    }
  }
  @action fetchWorkDetail = async id => {
    this.state = 'pending'
    try {
      this.fetchDetail(await this.api.fetch(), id)
    } catch (error) {
      this.fetchWorksError(error)
    }
  }

  @action.bound fetchList (works, id, allList) {
    allList
      ? (this.works = works.filter(item => item.projectId === id * 1))
      : (this.works = works
        .filter(item => item.projectId === id * 1)
        .slice(0, 4))
    console.log(this.works)
    this.state = 'done'
  }

  @action.bound fetchDetail (works, id) {
    this.detail = works.filter(item => item.id === id * 1)
  }

  @action.bound fetchWorksError (error) {
    this.state = 'error'
  }

  @action find = _id => {
    const result = this.resources.filter(({ id }) => id === _id)
    if (result.length === 1) this.current = result[0]
  }
}

export default WorkStore
