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

  join = () => {
    alert('힝! 속았지? 그딴거 없어')
  }

  render () {
    const { authenticate, userToken, userImg } = this.props

    return (
      <div className='login_comp'>
        {!authenticate ? (
          <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={this.authentication}
            onFailure={this.authenticationFail}
            render={renderProps => (
              <div className='default_profile'>
                <div className='wrap_util'>
                  <a
                    href='javascript:;'
                    className='btn_util'
                    onClick={this.join}
                  >
                    회원가입
                  </a>
                  <a
                    href='javascript:;'
                    className='btn_util'
                    onClick={renderProps.onClick}
                  >
                    로그인
                  </a>
                </div>
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
