import axios from 'axios'
import { MessageBox } from 'mint-ui';
import store from '../store'
import { getToken} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000                // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非0是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (res.code != 0) {
      MessageBox({
        message: res.message,
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code == 1001 || res.code == 50012 || res.code == 50014) {
        location.reload()   // 为了重新实例化vue-router对象 避免bug
        setTimeout(function(){
          MessageBox({
            message: '请重新登录',
          })
        },500)
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    MessageBox({
      message: error.message,
    })
    return Promise.reject(error)
  }
)
export default service
