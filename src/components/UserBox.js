import React, { Component } from 'react'
import 'assets/scss/components/userBox.scss'

class UserBox extends Component {
  render() {
    return (
      <div className="group_user">
        <strong className="screen_out">유저 정보</strong>
        <picture className="wrap_thumb">
          <img src="https://dummyimage.com/100x100/efefef/000000" className="img_thumb" />
        </picture>
        <dl className="list_user">
          <dt className="screen_out">유저 아이디</dt>
          <dd className="txt_ellipsis">shawn.thecool</dd>
          <dt className="screen_out">이름</dt>
          <dd className="txt_ellipsis">이시원</dd>
        </dl>
      </div>
    )
  }
}

export default UserBox
