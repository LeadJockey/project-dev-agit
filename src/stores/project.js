import { observable, action } from 'mobx'
import PROJECTS from 'api/v1/projects.json'

let id = 4

class ProjectApi {
  //fetchProject = ()=> request.get('/api')
  fetch = () => PROJECTS
}

class ProjectStore {
  @observable projects = []
  @observable state = 'pendding'

  constructor(root) {
    this.root = root
    this.api = new ProjectApi()
    this.fetchProjects()
  }

  @action fetchProjects = async () => {
    this.projects = []
    this.state = 'pending'
    try {
      this.fetchProjectsSuccess(await this.api.fetch())
    } catch (error) {
      this.fetchProjectsError(error)
    }
  }

  @action.bound fetchProjectsSuccess(projects) {
    this.projects = projects
    this.state = "done"
  }

  @action.bound fetchProjectsError(error) {
    this.state = 'error'
  }


  @action add = (name) => {
    this.projects.unshift({
      id: id++,
      name: name || '프로젝트 주제',
      startDate: 'yyyy.MM.dd',
      endDate: 'yyyy.MM.dd',
      percent: 0,
      state: '테스트',
    });
  }

  @action remove = (id) => {
    this.projects = this.projects.filter((project) => project.id !== id)
  }

  @action update = (updatedProject) => {
    this.projects = this.projects.map((project) => {
      if (project.id === updatedProject.id) {
        return Object.assign(project, updatedProject)
      }
      return project
    })
  }
}

export default ProjectStore
