const {Service} = require('egg')

class SpeechService extends Service {
  async createSpeech(partSpeechData) {
    const {ctx, app} = this
    const {Speech, User} = app.model
    let currUser = await User.findOne({
      attributes: ['name'],
      where: {
        s_no: ctx.currUserId
      }
    })
    const {name}  = currUser
    const newSpeech = {
      ...partSpeechData,
      s_no: ctx.currUserId,
      speaker_name: name
    }
    console.log(newSpeech)
    Speech.create(newSpeech)
  }
}
module.exports = SpeechService
