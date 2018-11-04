const {Controller} = require('egg')
const UserSerializer = require('../serializer/speechSerializer')
const deserialize = require('../serializer/deserializer')
const errorSerializer = require('../serializer/errorSerializer')

class AdminUserController extends Controller {
  async update() {
    const {ctx} = this
    let data = ctx.request.body
    let deserializedData = await deserialize(data)
    try {
      await ctx.service.user.update(deserializedData)
    } catch (e) {
      ctx.body = errorSerializer({
        code: 500, // ??
        title: 'fialed to update User Info',
        detial: 'You Put Wrong Format Data :(',
      })
    }

    ctx.body = deserializedData
  }
}
module.exports = AdminUserController
