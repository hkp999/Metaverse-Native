import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reduxLogger from 'redux-logger'
import reducer from './reducer'

const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxLogger, reduxPromise)
)

export default store
