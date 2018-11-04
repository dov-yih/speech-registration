const {Service} = require('egg')
const moment = require('moment')
const {Op} = require('sequelize')
// ?? FIXME this won't changed ??

class UserService extends Service {
  async update(passwds) {
    const {ctx, app} = this
    const {login, db} = app.config.keys
    const oldOne = ctx.helper.decrypt(
      passwds.old,
      login.private
    )
    const newOne = ctx.helper.decrypt(
      passwds.new,
      login.private
    )
    if(oldOne !== newOne) {
      let encryptPasswd = ctx.helper.encrypt(
        newOne,
        db.public,
      )
      const {User} = app.model
      let {currUserSNo} = ctx
      await User.update({
        passwd: encryptPasswd,
      },{
        where: {
          s_no: currUserSNo,
        }
      })
      return true
    }
    return false
  }
}
module.exports = UserService
