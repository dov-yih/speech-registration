import Base from './base'

export default class Speech extends Base {
  static prefix = 'admin'
  // static config = {
  //   params: {
  //     msg: 'test'
  //   },
  // }
  static headers = {
    'X-Requested-With': 'Axios'
  }
}
