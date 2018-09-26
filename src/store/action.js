// actions.js
// redux-tunk

// action也是函数
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传
// 入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用


// 使用 redux-thunk 之后，可以dispatch一个函数了，这个函数会接收dispatch, getState作为参数，在这个函数里你就可以干你想干的事情，在任何地方随意dispatch

export function setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

export function setInfoList (data) {
    return (dispatch, getState) => {
        // // 使用fetch实现异步请求
        // window.fetch('/api/getInfoList', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => {
        //     return res.json()
        // }).then(data => {
        //     let { code, data } = data
        //     if (code === 0) {
        //         dispatch({ type: 'SET_INFO_LIST', data: data })
        //     }
        // })
    }
}

