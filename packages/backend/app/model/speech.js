'use strict'
module.exports = app => {
  const {
    STRING,
    BOOLEAN,
    DATE
  } = app.Sequelize
  const Speech = app.model.define('Speech', {
    subject: STRING,
    introduce: STRING,
    url: STRING,
    isPPT: BOOLEAN,
    direction: STRING,
    tags: STRING,
    pre_knowledge: STRING,
    speech_date: DATE,
    speaker_name: STRING,
  }, {
    underscored: true
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
