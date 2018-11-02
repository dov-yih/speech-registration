'use strict'
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = (app) => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize
  const Label = app.model.define('Label', {
    value: STRING,
    type: STRING,
    count: INTEGER
  }, {
    underscored: true
  })
  Label.tags = function() {
    return this.findAll({where: {
      type: 'tag'
    }})
  }
  Label.tagsIncrement = async function (tags) {
    // FIXME HERE Has performance problom
    let tagsInst = await this.findAll({
      where: {
        value: {
          [Op.in]: tags
        }
      }
    })

    tagsInst.forEach(tagInst => {
      tagInst.increment('count', {by:1})
    })
    return true
  }
  Label.directions = function() {
    return this.findAll({where: {
      type: 'direction'
    }})
  }
  Label.associate = function () {

  }
  return Label
}

