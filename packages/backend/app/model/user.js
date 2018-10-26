'use strict'
module.exports = (app) => {
  const {
    STRING,
    INTEGER,
    TEXT
  } = app.Sequelize
  const User = app.model.define('User', {
    name: STRING,
    s_no: STRING,
    password: STRING,
    class: INTEGER,
    avatar: TEXT
  }, {
    underscored: true
  })
  User.associate = function () {
    const { Speech, User } = app.model
    User.hasMany(Speech, {
      foreignKey: 's_no'
    })
    // associations can be defined here
  }
  return User
}
