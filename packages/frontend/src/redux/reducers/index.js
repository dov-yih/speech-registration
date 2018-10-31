import {
  combineReducers
} from 'redux'
import token from './token'
import user from './user'

export default combineReducers({
  token,
  user,
})
