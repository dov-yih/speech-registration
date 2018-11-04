const {
  Controller
} = require('egg')
const UserSerializer = require('../serializer/speechSerializer')
const deserialize = require('../serializer/deserializer')
const errorSerializer = require('../serializer/errorSerializer')

class AdminSpeechController extends Controller {
  async index() {
    // const {ctx} = this
  }

  async show() {
    const {ctx} = this
    let {id} = ctx.params
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
    const {ctx, app} = this
    const {Label} = app.model

    let data = ctx.request.body
    let deserializedData = await deserialize(data)

    let tags = deserializedData.tags.split(',')
    Label.tagsIncrement(tags)

    try {
      ctx.service.speech.create(deserializedData)
    } catch (e) {
      ctx.body = errorSerializer({
        code: 500, // ??
        title: 'fial to create speech',
        detial: 'You Post Wrong Format Data :(',
      })
    }
    ctx.body = deserializedData
  }
  async update() {
    const {ctx} = this
    let data = ctx.request.body
    // console.log(speechId)
    let deserializedData = await deserialize(data)

    try {
      ctx.service.speech.update(deserializedData)
    } catch (e) {
      ctx.body = errorSerializer({
        code: 500, // ??
        title: 'fial to update speech',
        detial: 'You Put Wrong Format Data :(',
      })
    }

    ctx.body = deserializedData
  }

  async destroy() {
    const {ctx} = this
    let speechId = ctx.params.id
    let isSuccess = await ctx.service.speech.destroy(speechId)
    if(isSuccess) {
      ctx.body = {
        data: { message: 'succeed !'}
      }
    }else {
      ctx.body = errorSerializer({
        code: 500, // ??
        title: 'fial to update speech',
        detial: 'You Put Wrong Format Data :(',
      })
    }
  }
}
module.exports = AdminSpeechController
