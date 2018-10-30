const {
  Controller
} = require('egg')
const dateFormat = require('dateformat')
const UserSerializer = require('../serializer/speechSerializer')

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
    let {
      id
    } = ctx.params
    const {
      model
    } = app
    // @see https://github.com/sequelize/sequelize/issues/2827
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-69709220
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-68712515
    let selfSpeeches = await model.Speech.findAll({
      where: {
        s_no: id
      }
    })
    return ctx.body = UserSerializer.serialize(
      selfSpeeches.map(speech => speech.toJSON())
    )
    // ctx.body = selfSpeeches || {msg: 'test'}
  }
}
module.exports = AdminSpeechController
