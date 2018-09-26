// index.js

// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例
import { applyMiddleware, createStore } from 'redux'


import thunk from 'redux-thunk'

// 引入reducer
import reducers from './reducers'

// 创建store实例
let store = createStore(
    reducers,
    applyMiddleware(thunk)
)
export default store