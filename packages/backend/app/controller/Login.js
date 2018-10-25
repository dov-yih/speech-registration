const {
  Controller
} = require('egg')

class LoginController extends Controller {
  async index() {
    const {ctx,app} = this
    console.log(ctx.helper.decrypt)
    let user = ctx.helper.decrypt(ctx.request.body.data, app.config.rsa.private)
    console.log(user)
    ctx.body = user
  }

}
module.exports = LoginController
