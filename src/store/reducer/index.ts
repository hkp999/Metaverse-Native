import { combineReducers } from 'redux'
// import articalReducer from './recArtical'
import userReducer from './user'
import publishReducer from './publish'
import nowUserReducer from './nowUser'

const reducer = combineReducers({
  user: userReducer,
  // recArtical: articalReducer,
  publish: publishReducer,
  nowUser: nowUserReducer
})

export default reducer
