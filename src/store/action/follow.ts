import { UserInfo } from '@store/reducer/user'
import * as TYPES from '../action-types'

const followAction = {

  addFllow(formData: UserInfo) {

    return {
      type: TYPES.ADD_FOLLOW,
      formData
    }
  },

  deleteFollow(username: string) {

    return {
      type: TYPES.DELETE_FOLLOW,
      username
    }
  }

}

export default followAction
