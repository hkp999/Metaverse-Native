import { combineReducers } from 'redux'
import articalAction from './recArtical'
import userReducer from './user'

const reducer = combineReducers({
  user: userReducer,
  recArtical: articalAction
})

export default reducer
