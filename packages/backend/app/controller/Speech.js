const {
  Controller
} = require('egg')
const dateFormat = require('dateformat')
const UserSerializer = require('../serializer/speechSerializer')

class SpeechController extends Controller {
  async index() {
    const {
      ctx
    } = this
    const speeches = await ctx.model.Speech.findAll()
    return ctx.body = UserSerializer.serialize(
      speeches.map(speech => speech.toJSON())
    )
  }

  async show() {

  }
}
module.exports = SpeechController
