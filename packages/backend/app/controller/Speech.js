const {Controller} = require('egg')
const UserSerializer = require('../serializer/speechSerializer')

class SpeechController extends Controller {
  async index() {
    const {ctx} = this
    ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('processional')
    )
  }

  async show() {

  }
  async archive() {
    const {ctx} = this
    ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('expired')
    )
  }
}
module.exports = SpeechController
