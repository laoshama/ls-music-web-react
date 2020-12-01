import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import LSAppHeader from '@/components/app-header'
import LSAppHooter from '@/components/app-footer'
import { BrowserRouter } from 'react-router-dom'

export default memo(function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LSAppHeader />
                {renderRoutes(routes)}
                <LSAppHooter />
            </BrowserRouter>
        </Provider>
    )
})
