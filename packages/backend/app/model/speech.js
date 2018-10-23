'use strict'
module.exports = (sequelize, DataTypes) => {
  const Speech = sequelize.define('Speech', {
    subject: DataTypes.STRING,
    introduce: DataTypes.STRING,
    url: DataTypes.STRING,
    isPPT: DataTypes.BOOLEAN,
    direction: DataTypes.STRING,
    tags: DataTypes.STRING,
    pre_knowledge: DataTypes.STRING,
    speech_date: DataTypes.DATE,
    speaker_name: DataTypes.STRING,
  }, {})
  Speech.associate = function(models) {
    // associations can be defined here
  }
  return Speech
}
