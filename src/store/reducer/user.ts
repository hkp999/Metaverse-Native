import * as TYPES from '../action-types'

export type UserInfo =  typeof initData[number]

const initData = [
  {
    username: 'hkp',
    password: '123456',
    gender: '男',
    text: '雄关漫道真如铁，而今迈步从头越',
    email: '747001945@qq.com',
    mAge: '三年',
    avator: 'https://avatars.githubusercontent.com/u/107165304?v=4',
    dynamic_count: 10,
    fan_count: 20,
    follow_count: 25,
    points: 33
  },
  {
    username: 'ymj',
    password: '123456',
    gender: '男',
    text: '雄关漫道真如铁，而今迈步从头越',
    email: '487369854@qq.com',
    mAge: '三个月',
    avator: 'https://avatars.githubusercontent.com/u/810438?s=80&v=4',
    dynamic_count: 6,
    fan_count: 968,
    follow_count: 36,
    points: 330
  },
]

type Action = {
  type: string;
  formData: typeof initData[number]
}

export default function userReducer(state = initData, action: Action) {

  switch (action.type) {
    case TYPES.REGISTER:
      return [...state, action.formData]
    default:
      return state;
  }
}
