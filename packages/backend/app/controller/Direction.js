'use strict'

const {
  Controller
} = require('egg')
const LabelSerializer = require('../serializer/labelSerializer')

class DirectionController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this
    const {
      model
    } = app
    let tags = await model.Label.directions()
    ctx.body = LabelSerializer.serialize(tags)
  }
}

module.exports = DirectionController
