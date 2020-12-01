import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local_data.js'

import { TopNavWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'

export default memo(function LSDiscover(props) {
    const { route } = props
    return (
        <TopNavWrapper>
            <TopMenu>
                <div className="wrap-v2 nav-items">
                    {dicoverMenu.map(item => {
                        return (
                            <NavLink to={item.link} key={item.title}>
                                {item.title}
                            </NavLink>
                        )
                    })}
                </div>
            </TopMenu>
            { renderRoutes(route.routes)}
        </TopNavWrapper>
    )
})
