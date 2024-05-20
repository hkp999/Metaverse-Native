import * as TYPES from '../action-types'
import { UserInfo } from '@store/reducer/user'

const nowUserAction = {

  userLogin(userInfo: any) {
    return {
      type: TYPES.LOGIN,
      userInfo
    }
  },

  updateUserInfo(userInfo: UserInfo) {
    return {
      type: TYPES.UPDATE_USERINFO,
      userInfo
    }
  },

  addOwnArtical(userInfo: any) {
    return {
      type: TYPES.ADD_OWN_ARTICAL,
      userInfo
    }
  },

  deleteOwnArtical(userInfo: any) {
    return {
      type: TYPES.DELETE_OWN_ARTICAL,
      userInfo
    }
  },

  addOwnCollect(userInfo: any) {
    return {
      type: TYPES.ADD_OWN_COLLECT,
      userInfo
    }
  },

  deleteOwnCollect(userInfo: any) {
    return {
      type: TYPES.DELETE_OWN_COLLECT,
      userInfo
    }
  },

  addOwnlike(userInfo: any) {
    return {
      type: TYPES.ADD_OWN_LIKE,
      userInfo
    }
  },

  deleteOwnLike(userInfo: any) {
    return {
      type: TYPES.DELETE_OWN_LIKE,
      userInfo
    }
  },

  addFollowCount() {

    return {
      type: TYPES.ADD_FOLLOW_COUNT,
    }
  },

  deleteFollowCount() {

    return {
      type: TYPES.DELETE_FOLLOW_COUNT,
    }
  },

  addDynamicCount() {

    return {
      type: TYPES.ADD_DYNAMIC_COUNT,
    }
  },

  deleteDynamicCount() {

    return {
      type: TYPES.DELETE_DYNAMIC_COUNT,
    }
  },
}

export default nowUserAction
