const {Service} = require('egg')

class SpeechService extends Service {
  async createSpeech(partSpeechData) {
    const {ctx, app} = this
    const {Speech, User} = app.model
    const {currUserSno} = ctx
    let currUser = await User.findOne({
      attributes: ['name'],
      where: {
        s_no: currUserSno
      }
    })
    const {name}  = currUser
    const newSpeech = {
      ...partSpeechData,
      s_no: currUserSno,
      speaker_name: name
    }
    Speech.create(newSpeech)
  }
}
module.exports = SpeechService
