'use strict'
const moment = require('moment')

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
    is_ppt: BOOLEAN,
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
        return moment(this.getDataValue('speech_date')).format('YYYY-MM-DD')
      }
    },
    speaker_name: STRING,
  }, {
    underscored: true,
    getterMethods: {
      created_date() {
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD')
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
