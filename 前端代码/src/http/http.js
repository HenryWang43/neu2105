import axios from 'axios'

const instance = axios.create({
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'token': 'one' 
    },
    baseURL: 'https://easy-mock.com/mock/5c01e1f6f221b94c907213d6/',
    timeout: 10000,
    withCredentials: true
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做某事，比如说 设置token
    config.headers['token'] = 'token';
    return config;
}, error => {
    // 请求错误时做些事
    return Promise.reject(error);
});

// 添加响应拦截器

export default instance;