const {Controller} = require('egg')
class SpeechController extends Controller {
  async index() {
    const {
      ctx
    } = this
    ctx.body  = await ctx.model.Speech.findAll()
    // ctx.respond.header('Access-Control-Allow-Origin', '*')
  }
}
module.exports = SpeechController
