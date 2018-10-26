const {
  Controller
} = require('egg')

class LoginController extends Controller {
  async index() {
    const {ctx,app} = this

    let user = ctx.helper.decrypt(ctx.request.body.data, app.config.keys.login.private)
    if(!user) {
      ctx.body = {
        error: '用户名或密码错误'
      }
      ctx.status = 404
      return
    }
    ctx.body = user
  }
}
module.exports = LoginController
