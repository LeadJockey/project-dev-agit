import { observable, action } from 'mobx'

class LoginStore {
  @observable authenticate = false
  @observable userToken = 'aaa'
  @observable userImg = 'aa'
  constructor (root) {
    this.root = root
  }
  @action loginAction = user => {
    this.authenticate = true
    this.userToken = user.Eea
    this.userImg = user.Paa
  }

  @action logoutAction = () => {
    this.authenticate = false
    this.userToken = ''
    this.userImg = ''
  }
}

export default LoginStore
