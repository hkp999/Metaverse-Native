// import articalAction from './recArtical'
import userAction from './user'
import publishAction from './publish'
import nowUserAction from './nowUser'
import userMsgAction from './userMsg'
import followAction from './follow'

const action = {
  user: userAction,
  // recArtical: articalAction,
  publish: publishAction,
  nowUser: nowUserAction,
  userMsg: userMsgAction,
  follow: followAction
}

export default action
