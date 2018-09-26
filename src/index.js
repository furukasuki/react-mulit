import React, {Component} from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable no-new */
// 引入组件

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index'




// 渲染DOM
ReactDOM.render (
    (
       < div>
          <div className='fontSize'>首页</div>
       </div>
    ),
    document.getElementById('root')
)