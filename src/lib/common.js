import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd';
// 动态路由 按需加载


export function Dynamic(url) {

    const MyLoadingComponent = ({isLoading, error}) => {
        // Handle the loading state
        if (isLoading) {
            return <div><Spin /></div>;
        }
        // Handle the error state
        else if (error) {
            return <div>Sorry, there was a problem loading the page.</div>;
        }
        else {
            return null;
        }
    };

    return Loadable({
        loader: () => import(`../components/${url}`),
        loading: MyLoadingComponent
    });
}


// fetch请求封装

function form(value){
    let from = new FormData()
    Object.entries(value).map((k,v)=>{
        from.append(k, v)
        return from
    })
}

export const ContentType = {
    JSON : "application/json;charset=UTF-8",
    FORM : "application/x-www-form-urlencoded; charset=UTF-8"
};

export const HttpMethod = {
    GET : "GET",
    POST : "POST",
    PUT : "PUT",
    PATCH : "PATCH",
    DELETE : "DELETE"
};

const getHeaders = () => {
    const token = Cookies.get(COOKIE_TOKEN);
    return {
        "Content-Type": ContentType.JSON,
        "Token": token
    }
};

export const checkStatus = response => {
    if(response.status === 200){
        return response.json();
    }
    else {
        throw new Error();
    }
};

const handleFetch = promise => {
    return promise
        .then(response => checkStatus(response))
        .catch(() => dispatch(error(FAIL_RESULT.message)))
};



export const Fetchget = (url,body = null) => {
    if(body !== null){
        url = new URL(url);
        Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));
    }
    const promise = fetch(http+url,{
        method : HttpMethod.GET,
    });
    return handleFetch(promise);
};

export const FetchpostFrom = (url,body) => {

    let self=this
    const promise = fetch(http+url,{
        method : HttpMethod.POST,
        body :form(body)
    });
    return handleFetch(promise);
};

export const FetchpostJson = (url,body) => {
    const promise = fetch(http+url,{
        method : HttpMethod.POST,
        body : JSON.stringify(body)
    });
    return handleFetch(promise);
};


