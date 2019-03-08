import React, { Component } from 'react'

const defaultImg =
  'http://image.chosun.com/sitedata/image/201810/01/2018100103196_0.jpg'

const userInfo = (key, value) => {
  return sessionStorage[key] ? sessionStorage[key] : value
}

class SideMenu extends Component {
  render () {
    return (
      <aside className='side_menu'>
        <div className='user_profile'>
          <picture className='user_avata'>
            <img src={('userImg', defaultImg)} alt='' />
          </picture>
          <strong className='user_name'>
            {userInfo('userName', '로그인 해주세요')}
          </strong>
        </div>
        <ul className='user_menu'>
          <li>User Menu 1</li>
          <li>User Menu 2</li>
          <li>User Menu 3</li>
          <li>User Menu 4</li>
        </ul>
      </aside>
    )
  }
}
export default SideMenu
