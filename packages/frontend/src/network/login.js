import Base from './base'

export default class Login extends Base {
  static pluralise = s => s
}

Login.plural(Login.model)
