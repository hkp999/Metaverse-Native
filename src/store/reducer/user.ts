import * as TYPES from '../action-types'

export type UserInfo =  typeof initData[number]

const initData = [
  {
    key: '1',
    username: 'hkp',
    password: '123456',
    gender: '男',
    text: '雄关漫道真如铁，而今迈步从头越',
    email: '747001945@qq.com',
    mAge: '三年',
    avator: 'https://avatars.githubusercontent.com/u/107165304?v=4',
    dynamic_count: 0,
    fan_count: 3,
    follow_count: 2,
    points: 10
  },
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
  {
    key: '3',
    username: '干果儿',
    password: '123456',
    gender: '女',
    text: '鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。',
    email: '2920455503@qq.com',
    mAge: '一个月',
    avator: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.wmVu0jrNl8LoZ9aBxRrTCgAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    dynamic_count: 0,
    fan_count: 3,
    follow_count: 2,
    points: 30
  },
  {
    key: '4',
    username: 'iqseternal',
    password: '123456',
    gender: '男',
    text: '努力不一定会被看到，但是不努力一定会被看到',
    email: '1085990062@qq.com',
    mAge: '一年',
    avator: 'https://avatars.githubusercontent.com/u/81791264?s=48&v=4',
    dynamic_count: 0,
    fan_count: 2,
    follow_count: 3,
    points: 10
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
