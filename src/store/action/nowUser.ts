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

  addOwnCollect(userInfo:any) {
    return {
      type: TYPES.ADD_OWN_COLLECT,
      userInfo
    }
  },

  deleteOwnCollect(userInfo:any) {
    return {
      type: TYPES.DELETE_OWN_COLLECT,
      userInfo
    }
  }

}

export default nowUserAction
