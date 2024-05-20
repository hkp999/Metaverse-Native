import * as TYPES from '../action-types'

const userMsgAction = {

  addMessage(username: string, formData: {
    time: string;
    message: string;
    username: string;
  }) {

    return {
      type: TYPES.ADD_OWN_MESSAGE,
      username,
      formData
    }
  },

  deleteMessage(username: string) {
    return {
      type: TYPES.DELETE_MESSAGE,
      username,
    }
  }
}

export default userMsgAction
