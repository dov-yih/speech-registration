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
      const {created_at, updated_at, ...rest}= speech.toJSON()
      return  rest
    })
    // ctx.body = selfSpeeches || {msg: 'test'}
  }
}
module.exports = AdminSpeechController
