import Base from './base'
import store from '@/redux/store'

// FIXME it works because state had default value
let state = store.getState()

export default class Admin extends Base {
  static prefix = '/admin'

  static headers = {
    authorization: 'Bearer ' + state.token.value
  }
}
