import { observable, action } from 'mobx'
import RESOURCE from 'api/v1/resources.json'

class ResourceApi {
  //fetchProject = ()=> request.get('/api')
  fetch = () => RESOURCE
}

class ResourceStore {
  @observable resources = []
  @observable current = {}
  @observable state = 'pendding' // pendding / done / error

  constructor(root) {
    this.root = root
    this.api = new ResourceApi()
    this.fetchResources()
  }

  @action fetchResources = async () => {
    this.resources = []
    this.state = 'pending'
    try {
      this.fetchResourcesSuccess(await this.api.fetch())
    } catch (error) {
      this.fetchResourcesError(error)
    }
  }

  @action.bound fetchResourcesSuccess(resources) {
    this.resources = resources
    this.state = "done"
  }

  @action.bound fetchResourcesError(error) {
    this.state = 'error'
  }

  @action find = (_id) => {
    const result = this.resources.filter(({id}) => id === _id)
    if(result.length === 1) this.current = result[0]
  }

}

export default ResourceStore
