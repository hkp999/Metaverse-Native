import * as TYPES from '../action-types'
import type { UserInfo } from '../reducer/user'

const initData: UserInfo[] = [
  {
    key: '2',
    username: 'gearon',
    password: '123456',
    gender: '女',
    text: '天长地久有时尽，此恨绵绵无绝期。',
    email: '2541278084@qq.com',
    mAge: '三个月',
    avator: 'https://avatars.githubusercontent.com/u/810438?s=80&v=4',
    dynamic_count: 0,
    fan_count: 1,
    follow_count: 2,
    points: 55
  },
]

type Action = {
  type: string;
  username?: string;
  formData?: {}
}

export default function followReducer(state = initData, action: Action) {

  switch (action.type) {
    case TYPES.ADD_FOLLOW:
      return [...state, action.formData]
    case TYPES.DELETE_FOLLOW:
      let arr = state.filter(item => item.username !== action.username)
      return [...arr]
    default:
      return state;
  }
}
