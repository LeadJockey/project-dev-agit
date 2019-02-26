import { observable, action, runInAction } from 'mobx'
import PROJECTS from 'api/v1/projects.json'

let id = 4

class ProjectApi {
  //fetchProject = ()=> request.get('/api')
  fetchProject = () => PROJECTS
}

class ProjectStore {
  @observable projects = PROJECTS || []

  constructor(root) {
    this.root = root
    this.api = new ProjectApi()
  }

  fetchTodos = async () => {
    const projects = await this.api.fetchTodos();
    runInAction(() => {
      this.projects = projects;
    });
  }

  @action add = (name) => {
    this.projects.push({
      id: id++,
      name: name || '프로젝트 주제',
      startDate: 'yyyy.MM.dd',
      endDate: 'yyyy.MM.dd',
      percent: 0,
      state: '테스트',
    });
  }

  @action remove = (id) => {
    this.projects = this.projects.filter((project)=> project.id !== id)
  }

  @action update = () => {
    console.log('update');

  }
}

export default ProjectStore
