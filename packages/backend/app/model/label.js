'use strict'
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
  Label.directions = function() {
    return this.findAll({where: {
      type: 'direction'
    }})
  }
  Label.associate = function () {

  }
  return Label
}

