import axios from 'axios'

export function request(config){
    // 一、创建axios的实例¬
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 500
    })

    // 二、axios的拦截器
    // 请求拦截----在这里拦截了config
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })
    // 响应拦截----在这里拦截了res
    instance.interceptors.response.use(res => {
        console.log(res);
        // 需要返回res,这里选择只返回res的data属性
        return res.data
    }, err => {
        console.log(err);
    })

    // 三、发送真正的网络请求
    return instance(config)
    
}