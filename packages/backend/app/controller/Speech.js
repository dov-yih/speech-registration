const {
  Controller
} = require('egg')
const dateFormat = require('dateformat')

class SpeechController extends Controller {
  async index() {
    const {
      ctx
    } = this
    const speeches = await ctx.model.Speech.findAll()
    ctx.body = speeches.map(speech => {
      const {
        // ignore this two
        created_at,
        updated_at,
        ...rest
      } = speech.toJSON()
      return rest
    })
  }

  async show() {

  }
}
module.exports = SpeechController
