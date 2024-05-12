import * as TYPES from '../action-types'

const publishAction = {

  addArtical(articalData: any) {
    return {
      type: TYPES.ADD_ARTICAL,
      articalData
    }
  }

}

export default publishAction
