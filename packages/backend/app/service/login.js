const {
  Service
} = require('egg')

class LoginService extends Service {
  /**
   * 生成 Token
   * @param {Object} data
   */
  createToken(data) {
    return this.app.jwt.sign(data, this.app.config.jwt.secret, {
      //debug only
      expiresIn: '500h'
    })
  }

  /**
   * 验证token的合法性
   * @param {String} token
   */
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      this.app.jwt.verify(token, this.app.config.jwt.secret, function (err, decoded) {
        let result = {}
        if (err) {
          result.verify = false
          result.message = err.message
        } else {
          result.verify = true
          result.message = decoded
        }
        resolve(result)
      })
    })
  }
}
module.exports = LoginService
