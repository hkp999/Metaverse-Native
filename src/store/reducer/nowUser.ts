import * as TYPES from '../action-types'

const initData = {
  artical: [],
  collect: []
}

type Action = {
  type: string;
  userInfo: object & {
    artical_title: string
  }
}

export default function nowUserReducer(state = initData, action: Action) {

  switch (action.type) {
    case TYPES.LOGIN:
      return { ...action.userInfo }
    case TYPES.UPDATE_USERINFO:
      return { ...state, ...action.userInfo }
    case TYPES.ADD_OWN_ARTICAL:
      return {
        ...state,
        artical: [action.userInfo, ...state.artical]
      }
    case TYPES.ADD_OWN_COLLECT:
      return {
        ...state,
        collect: [action.userInfo, ...state.collect]
      }
    case TYPES.DELETE_OWN_COLLECT:
      let arr = state.collect.filter((item:{artical_title: string}) => item.artical_title !== action.userInfo.artical_title)
      return {
        ...state,
        collect: arr
      }
    default:
      return state;
  }
}
