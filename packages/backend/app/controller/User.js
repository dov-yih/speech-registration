const {
  Controller
} = require('egg')
const speakerSerializer = require('../serializer/speakerSerializer')
const errorSerializer = require('../serializer/errorSerializer')
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
    let user = await User.findOne({
      where: {s_no: id}
    })
    if(!user) {
      ctx.body = errorSerializer({
        status: '401',
        title: 'User Not Exist',
        detail: 'Place Check You Had Login!'
      })
      return
    }
    ctx.body = speakerSerializer.serialize(user.toJSON())
  }
}
module.exports = UserController
