const {Controller} = require('egg')
const UserSerializer = require('../serializer/speechSerializer')

class SpeechController extends Controller {
  async index() {
    const {ctx} = this
    ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('processional')
    )
  }

  async archive() {
    const {ctx} = this
    ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('expired')
    )
  }
  async next() {
    const {
      ctx
    } = this
    ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('preparatory')
    )
  }
}
module.exports = SpeechController
