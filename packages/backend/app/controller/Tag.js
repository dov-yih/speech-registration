'use strict'

const {Controller} = require('egg')
const LabelSerializer = require('../serializer/labelSerializer')

class TagController extends Controller {
  async index() {
    const {ctx, app} = this
    const {model} = app
    let tags = await model.Label.tags()
    ctx.body = LabelSerializer.serialize(tags)
  }
}

module.exports = TagController
