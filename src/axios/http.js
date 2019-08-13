import axios from 'axios'
import qs from 'qs'
import store from '@/store'

axios.defaults.timeout = 12000
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// axios 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     let token = store.getters['login/token']

//     token && (config.headers.token = token)
//     // 启动数据加载
//     store.state.loading.loadingState = true
    
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   }
// )

// axios 响应拦截器
axios.interceptors.response.use(
  response => {
    // 关闭数据加载
    // store.state.loading.loadingState = false
    
    if (response.status === 200 && response.data.code === 0) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    // 关闭数据加载
    // store.state.loading.loadingState = false

    return Promise.reject(error.response)
  }
)

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {})
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export { get, post }