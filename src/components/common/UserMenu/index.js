import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { CLIENT_ID } from 'util/constants'
import './index.scss'

import defaultImg from 'assets/images/default_user.png'

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
    alert('그딴거 없어')
  }

  render () {
    const { authenticate, userImg } = this.props

    return (
      <div className='user_info_comp'>
        {!authenticate ? (
          <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={this.authentication}
            onFailure={this.authenticationFail}
            render={renderProps => (
              <div className='user_info'>
                <div className='user_profile'>
                  <picture className='profile_img'>
                    <img src={defaultImg} className='default_img' alt='' />
                  </picture>
                </div>
                <div className='wrap_btn'>
                  <button className='btn_util' onClick={this.join}>
                    회원가입
                  </button>
                  <button className='btn_login' onClick={renderProps.onClick}>
                    로그인
                  </button>
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
              <div className='user_info'>
                <span className='greeting_txt'>
                  오늘도 소처럼 일 할 시간이에요
                </span>
                <div className='user_profile'>
                  <picture className='profile_img'>
                    <img src={userImg} className='user_img' alt='' />
                  </picture>
                </div>
                <button className='btn_logout' onClick={renderProps.onClick}>
                  <span className='ico_logout' />
                  로그아웃
                </button>
              </div>
            )}
          />
        )}
      </div>
    )
  }
}

export default Login
