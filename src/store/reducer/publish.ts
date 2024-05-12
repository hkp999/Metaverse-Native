import * as TYPES from '../action-types'

const initData: any = []

type Action = {
  type: string;
  articalData: any
}

export default function publishReducer(state = initData, action: Action) {

  switch (action.type) {
    case TYPES.ADD_ARTICAL:
      return [action.articalData, ...state]
    default:
      return state;
  }
}
