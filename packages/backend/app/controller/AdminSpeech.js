const {
  Controller
} = require('egg')
const Sequelize = require('sequelize')
const UserSerializer = require('../serializer/speechSerializer')
const deserialize = require('../serializer/deserializer')

const {
  Op
} = Sequelize

class AdminSpeechController extends Controller {
  async index() {
    // const {ctx} = this
  }

  async show() {
    const {
      ctx
    } = this
    let {
      id
    } = ctx.params
    // @see https://github.com/sequelize/sequelize/issues/2827
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-69709220
    // @see https://github.com/sequelize/sequelize/issues/2827#issuecomment-68712515
    return ctx.body = UserSerializer.serialize(
      await ctx.service.speech.filter('all', {
        where: {
          s_no: id
        }
      })
    )
  }
  async create() {
    const {
      ctx,
      app
    } = this
    const {
      Label
    } = app.model
    let data = ctx.request.body
    let deserializedData = await deserialize(data)
    let tags = deserializedData.tags.split(',')
    Label.tagsIncrement(tags)
    ctx.service.speech.createSpeech(deserializedData)
    ctx.body = deserializedData
  }
}
module.exports = AdminSpeechController
