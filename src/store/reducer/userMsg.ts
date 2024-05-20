import * as TYPES from '../action-types'

const initData = {
  gearon: [
    {
      username: 'gearon',
      message: 'Did you have dinner yet?',
      time: '2024-5-13 20:00',
    },
    {
      username: 'gearon',
      message: 'Did you have dinner yet?',
      time: '2024-5-13 20:00',
    }, {
      username: 'hkp',
      message: 'I ate, eat Egg Fried Rice, I recommend three canteens, delicious!',
      time: '2024-5-13 20:01',
    }
  ],
  hkp: [

  ],
  干果儿: [

  ],
  iqseternal: [

  ]
}

type Action = {
  type: string;
  username: string;
  formData: {
    time: string;
    message: string;
    username: string;
  }
}

export default function userMsgReducer(state = initData, action: Action) {

  switch (action.type) {
    case TYPES.ADD_OWN_MESSAGE:
      state[action.username].push(action.formData)
      return { ...state }
    case TYPES.DELETE_MESSAGE:
      state[action.username] = []
      return { ...state }
    default:
      return state;
  }
}
