import * as TYPES from '../action-types'

const initData = {
  artical: [],
  collect: [],
  likes: [],
  follow_count: 0,
  dynamic_count: 0
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
    case TYPES.DELETE_OWN_ARTICAL:
      let artArr = state.artical.filter(item => item.content !== action.userInfo.content)

      return {
        ...state,
        artical: [...artArr]
      }
    case TYPES.ADD_OWN_COLLECT:
      return {
        ...state,
        collect: [action.userInfo, ...state.collect]
      }
    case TYPES.DELETE_OWN_COLLECT:
      let arr = state.collect.filter((item: { artical_title: string }) => item.artical_title !== action.userInfo.artical_title)
      return {
        ...state,
        collect: arr
      }
    case TYPES.ADD_OWN_LIKE:
      return {
        ...state,
        likes: [action.userInfo, ...state.likes]
      }
    case TYPES.DELETE_OWN_LIKE:
      let arr2 = state.likes.filter((item: { artical_title: string }) => item.artical_title !== action.userInfo.artical_title)
      return {
        ...state,
        likes: arr2
      }
    case TYPES.ADD_FOLLOW_COUNT:
      state.follow_count++;
      return {
        ...state
      }
    case TYPES.DELETE_FOLLOW_COUNT:
      state.follow_count--;
      return {
        ...state
      }
    case TYPES.ADD_DYNAMIC_COUNT:
      state.dynamic_count++;
      return {
        ...state
      }
    case TYPES.DELETE_DYNAMIC_COUNT:
      state.dynamic_count--;
      return {
        ...state
      }
    default:
      return state;
  }
}
