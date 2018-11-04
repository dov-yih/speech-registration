import Base from './base'

export default class Speech extends Base {
  static archives() {
    return this.get('archives')
  }
  static next() {
    return this.get('next')
  }
}
