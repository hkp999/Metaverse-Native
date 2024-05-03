import http from './http'
import qs from 'qs'

// 登录
type LoginForm = {
  username: string,
  password: string
}
export const login = (data: LoginForm,) => {
  return http.post('/login', qs.stringify(data),{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
}
