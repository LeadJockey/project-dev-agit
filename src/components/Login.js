import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { CLIENT_ID } from '../util/constants'

class Login extends Component {
  state = {
    login: false
  }

  authentication = response => {
    console.log(response)
    sessionStorage.setItem('Eea', response.w3.Eea)
    sessionStorage.setItem('userName', response.w3.ig)
    sessionStorage.setItem('userImg', response.w3.Paa)

    this.setState({
      login: true
    })
  }

  authenticationFail = () => {
    alert('인증실패 다시 해')
  }

  logout = () => {
    sessionStorage.clear()
    this.setState({
      login: false
    })
  }

  loginCheck = () => {
    if (sessionStorage.Eea) this.setState({ login: true })
  }
  componentDidMount () {
    this.loginCheck()
  }
  render () {
    return (
      <div className='login_comp'>
        {!this.state.login ? (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login'
            onSuccess={this.authentication}
            onFailure={this.authenticationFail}
          />
        ) : (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
          />
        )}
      </div>
    )
  }
}

export default Login
