import { combineReducers } from 'redux'
// import articalReducer from './recArtical'
import userReducer from './user'
import publishReducer from './publish'
import nowUserReducer from './nowUser'
import userMsgReducer from './userMsg'
import followReducer from './follow'

const reducer = combineReducers({
  user: userReducer,
  // recArtical: articalReducer,
  publish: publishReducer,
  nowUser: nowUserReducer,
  userMsg: userMsgReducer,
  follow: followReducer
})

export default reducer
