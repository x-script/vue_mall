import { get, post } from '@/axios/http'

const signup = params => {
  return get('/user/signup', params)
}

const signin = params => {
  return post('/user/signin', params)
}

const home = params => post('/', params)

export {
  signup,
  signin,
  home
}