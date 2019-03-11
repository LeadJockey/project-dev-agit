import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { CLIENT_ID } from '../../util/constants'
import './index.scss'

import defaultImg from '../../assets/images/default_user.png'

@inject(({ login }) => ({
  authenticate: login.authenticate,
  userToken: login.userToken,
  userImg: login.userImg,
  loginAction: login.loginAction,
  logoutAction: login.logoutAction
}))
@observer
class Login extends Component {
  authentication = response => {
    const { loginAction } = this.props
    loginAction(response.w3)
  }

  authenticationFail = () => {
    // alert('인증실패 다시 해')
  }

  logout = () => {
    const { logoutAction } = this.props
    logoutAction()
  }

  render () {
    const { authenticate, userImg } = this.props

    return (
      <div className='login_comp'>
        {!authenticate ? (
          <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={this.authentication}
            onFailure={this.authenticationFail}
            render={renderProps => (
              <div className='default_profile' onClick={renderProps.onClick}>
                <picture className='profile_img'>
                  <img src={defaultImg} className='user_img' />
                </picture>
              </div>
            )}
          />
        ) : (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            render={renderProps => (
              <button className='btn_login' onClick={renderProps.onClick}>
                <img src={userImg} className='user_img' />
              </button>
            )}
          />
        )}
      </div>
    )
  }
}

export default Login
