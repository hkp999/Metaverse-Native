import * as TYPES from '../action-types'

const userAction = {

  regisUser(formData: {
    username: string;
    password: string;
  }) {

    return {
      type: TYPES.REGISTER,
      formData
    }
  }

}

export default userAction
