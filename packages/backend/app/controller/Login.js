const { Controller } = require('egg')
const deserialize = require('../serializer/deserializer')
class LoginController extends Controller {
  async index() {
    const {ctx,app} = this
    const {User} = app.model
    const {s_no,password} = await deserialize(ctx.request.body)
    console.log(s_no, password)
    const decryptPasswd = ctx.helper.decrypt(
      password,
      app.config.keys.login.private
    )
    if (!decryptPasswd) {
      // 密码加密或者解密出错了
      ctx.body = {
        error: '用户名或密码错误'
      }
      ctx.status = 401
      return
    }
    let visitor = await User.findOne({
      where: {
        s_no,
      },
      attributes: ['password']
    })
    if(!visitor) {
      // 用户不存在
      ctx.body = {
        error: '用户名或密码错误'
      }
      ctx.status = 401
      return
    }
    let userPasswd = ctx.helper.decrypt(
      visitor.password,
      app.config.keys.db.private
    )
    if (userPasswd !== decryptPasswd) {
      // 密码不正确
      ctx.body = {
        error: '用户名或密码错误'
      }
      ctx.status = 401
      return
    }
    let token = ctx.service.login.createToken({id: s_no})
    ctx.body = {token}
  }
}
module.exports = LoginController

// exports.index = aysnc app =>
