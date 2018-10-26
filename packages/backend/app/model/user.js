'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    s_no: DataTypes.STRING,
    password: DataTypes.STRING,
    class: DataTypes.INTEGER,
    avatar: DataTypes.TEXT
  }, {
    underscored: true
  })
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
