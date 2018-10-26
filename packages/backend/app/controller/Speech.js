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
        id,
        direction,
        speaker_name,
        isPPT,
        url,
        subject,
        introduce,
        pre_knowledge,
        tags,
        created_at,
        speech_date,
      } = speech
      return {
        tags: tags.split(','),
        speech_date: dateFormat(speech_date, 'fullDate'),
        created_date: dateFormat(created_at, 'fullDate'),
        id,
        direction,
        speaker_name,
        isPPT,
        url,
        subject,
        introduce,
        pre_knowledge,
      }
    })
  }
}
module.exports = SpeechController
