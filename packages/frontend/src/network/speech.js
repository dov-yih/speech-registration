import Base from './base'

export default class Speech extends Base {
  static archives() {
    return this.get({
      // id: 1,
      relationship: 'archives',
    })
  }
}
