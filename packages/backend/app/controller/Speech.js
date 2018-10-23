const {Controller} = require('egg')
class PostController extends Controller {
  async index() {
    const {
      ctx,
    } = this

    ctx.body = {
      id: 1
    }
    ctx.status = 201
  }
}
module.exports = PostController
