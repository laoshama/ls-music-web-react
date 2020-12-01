import React, { memo } from 'react'

import { headerLinks } from '@/common/local_data.js'

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style.js'

export default memo(function LSAppHeader() {
    //  处理路由函数
    function showSelectItem(item, index) {
        if (index < 3) {
            return <NavLink activeClassName='active_item' 
                            className='select_item'
                            to={item.link}
                            key={item.title}>
                            {item.title}
                   </NavLink>
        } else {
            return <a className='select_item'
                href={item.link}
                key={item.title}>
                {item.title}
            </a>
        }
    }

    //  返回的 jsx
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <NavLink to='/' exact className='sprite_01 nav_logo'></NavLink>
                    <div className='select_list'>{headerLinks.map(showSelectItem)}</div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="creator_center">创作者中心</a>
                    <button className="login_button">登入</button>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
