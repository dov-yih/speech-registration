'use strict'
const dateFormat = require('dateformat')

module.exports = app => {
  const {
    STRING,
    BOOLEAN,
    DATE
  } = app.Sequelize
  // todo validate
  const Speech = app.model.define('Speech', {
    subject: STRING,
    introduce: STRING,
    url: STRING,
    isPPT: BOOLEAN,
    direction: STRING,
    tags: {
      type: STRING,
      get() {
        return this.getDataValue('tags').split(',')
      }
    },
    pre_knowledge: STRING,
    speech_date: {
      type: DATE,
      get () {
        return dateFormat(this.getDataValue.speech_date, 'fullDate')
      }
    },
    speaker_name: STRING,
  }, {
    underscored: true,
    getterMethods: {
      created_date() {
        return dateFormat(this.getDataValue.created_at, 'fullDate')
      }
    },
  })
  Speech.associate = function() {
    const { User, Speech } = app.model
    Speech.belongsTo(User, {
      as: 'Speaker',
      foreignKey: 's_no',
      // sourceKey: 'user_id'
    })
    // retur
    // associations can be defined here
  }
  return Speech
}
