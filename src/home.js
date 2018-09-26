import React, {Component} from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable no-new */
// 引入组件

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index'


// 渲染DOM
ReactDOM.render (
    (
        < div>
            <Provider store = {store}>
               <div>其他页</div>
            </Provider>
        </div>
    ),
    document.getElementById('root')
)