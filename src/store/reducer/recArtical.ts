import * as TYPES from '../action-types'
import initData from '@datas/data0.json'


type Action = {
  type: string;
  formData: typeof initData[number]
}

export default function articalReducer(state = initData, action: Action) {

  return state
}
