import http from './http'
import qs from 'qs'

// 登录
type LoginForm = {
  username: string,
  password: string
}

export const login = (data: LoginForm,) => {
  return http.post('/login', qs.stringify(data))
}

export const register = (data: LoginForm,) => {
  return http.post('/register', qs.stringify(data))
}

// 获取用户基本信息
export const userInfo = () => {
  return http.get('/userInfo')
}

// 用户信息更新
export const updateInfo = (info: any) => {
  return http.post('/updateInfo', {
    info
  })
}

// 文章推送
export const getArtical = (Params:
  {
    page: number,
    pageSize: number,
    count: number,
    keyword: string
  }) => {
    return http.post('/getArtical', Params)
}
