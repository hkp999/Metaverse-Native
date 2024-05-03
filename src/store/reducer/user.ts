import * as TYPES from '../action-types'

const initData = [
  {
    username: 'hkp',
    password: '123456'
  },
  {
    username: 'ymj',
    password: '123456'
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
