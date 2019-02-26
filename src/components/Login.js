import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { CLIENT_ID } from '../util/constants'
class Login extends Component {
  state = {
    login: false
  }
  authentication = response => {
    sessionStorage.setItem('Eea', response.w3.Eea)
    sessionStorage.setItem('userName', response.w3.ig)
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
