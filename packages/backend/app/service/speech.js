const {Service} = require('egg')
const moment = require('moment')
const {Op} = require('sequelize')
// ?? FIXME this won't changed ??

class SpeechService extends Service {
  async getUserName(sNo) {
    const {app} = this
    const {User} = app.model
    let currUser = await User.findOne({
      attributes: ['name'],
      where: {
        s_no: sNo
      }
    })
    return currUser.name
  }
  /**
   *
   *
   * @param {*} partSpeechData
   * @memberof SpeechService
   */
  async create(partSpeechData) {
    const {ctx, app} = this
    const {Speech} = app.model
    const {currUserSNo} = ctx
    const name = await this.getUserName(currUserSNo)
    const newSpeech = {
      ...partSpeechData,
      s_no: currUserSNo,
      speaker_name: name
    }
    Speech.create(newSpeech)
  }
  async update(partSpeechData) {
    const {ctx, app} = this
    const {Speech, User} = app.model
    const {currUserSNo} = ctx
    const name = await this.getUserName(currUserSNo)
    const {id, ...restSpeechData} = partSpeechData
    const newSpeech = {
      ...restSpeechData,
      s_no: currUserSNo,
      speaker_name: name
    }
    Speech.update(newSpeech,{where: {
      id: id
    }})
  }
  /**
   *
   *
   * @memberof SpeechService
   */
  async destroy(id) {
    const {app} = this
    const {Speech} = app.model
    let deletedRowNum = await Speech.destroy({
      where: {
        id,
      },
      limit: 1, // for safe
    })
    // convert to boolean
    return !!deletedRowNum
  }
  /**
   *
   * @param {*} options
   * @param {ENUM} state this is to filter speech state {all = default, expired, procesional, preparatory }
   */
  async filter(state = 'all',options = {where: {}}) {
    const {ctx,app} = this
    const TODAY = moment().format('YYYY-MM-DD')
    const NEXT_WEEK = moment().add(1, 'weeks').format('YYYY-MM-DD')
    if (state === 'preparatory') {
      options.where.speech_date = {
        [Op.gt]: NEXT_WEEK
      }
    } else if (state === 'processional') {
      options.where[Op.and] = [
        {speech_date: {[Op.gt]: TODAY}},
        {speech_date: {[Op.lt]: NEXT_WEEK}}
      ]
    } else if(state === 'expired') {
      options.where.speech_date = {
        [Op.lt]: TODAY
      }
    }
    const speeches = await ctx.model.Speech.findAll(options)
    return speeches.map(speech => {
      let noStateSpeech = speech.toJSON()
      let state = ''
      // in English world sunday is the first of a week, but we don't.
      // subtrack 1 week
      let speech_date = moment(noStateSpeech.speech_date).subtract(1, 'weeks')
      if (moment(speech_date).isAfter(TODAY, 'weeks')) {
        state = 'preparatory'
      } else if (moment(speech_date).isSame(TODAY, 'weeks')) {
        state = 'processional'
      } else {
        state = 'expired'
      }
      // Speech had a state now
      noStateSpeech.state = state
      return noStateSpeech
    })
  }
}
module.exports = SpeechService
