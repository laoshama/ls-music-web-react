import { BASE_URL, TIME_OUT } from './config'
import axios from 'axios'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    console.log('请求拦截失败');
})

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    if (err && err.response) {
        switch (err.response) {
            case 400:
                console.log('请求错误');
                break;
            case 401:
                console.log('未授权访问');
                break;
            default:
                console.log('未知错误');
        }
    }
})

export default instance