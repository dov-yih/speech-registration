const {
  Controller
} = require('egg')
const dateFormat = require('dateformat')

class AdminSpeechController extends Controller {
  async index() {
    const {
      ctx
    } = this
  }

  async show() {
    const {
      ctx,
      app
    } = this
    const {model} = app
    // @see https://github.com/sequelize/sequelize/issues/2827
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-69709220
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-68712515
    let selfSpeeches = await model.Speech.findAll({where: {
      s_no: '17058511'
    }})
    return ctx.body = selfSpeeches.map(speech => {
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
    // ctx.body = selfSpeeches || {msg: 'test'}
  }
}
module.exports = AdminSpeechController
