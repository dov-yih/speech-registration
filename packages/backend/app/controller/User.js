const {
  Controller
} = require('egg')

class UserController extends Controller {
  async index() {


  }
  async show() {
    const {
      ctx,
      app
    } = this
    const {User} = app.model

    let {id} = ctx.params
    id = '16058522'
    let user = await User.findOne({
      where: {s_no: id}
    })
    const {s_no,name, avatar} = user
    ctx.body = {
      s_no,
      name,
      avatar
    }
  }
}
module.exports = UserController
