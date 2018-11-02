'use strict'
const generateAvatar = require('../../app/utils/avatar.js')
const {db} = require('../../../keys.json')
const {encrypt} = require('../../utils/rsa.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    // name: DataTypes.STRING,
    // s_no: DataTypes.STRING,
    // password: DataTypes.STRING,
    // klass: DataTypes.INTEGER,
    // avatar: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      name: '牛德华',
      s_no: '17058511',
      password: encrypt('12345678', db.public),
      klass: 17,
      avatar: generateAvatar('16058111')
    }, {
      name: '张雪有',
      s_no: '16058522',
      password: encrypt('12345678', db.public),
      klass: 16,
      avatar: generateAvatar('16058222')
    }, {
      name: '李明',
      s_no: '16058533',
      password: encrypt('12345678', db.public),
      klass: 16,
      avatar: generateAvatar('16058333')
    }, {
      name: '郭负城',
      s_no: '17058544',
      password: encrypt('12345678', db.public),
      klass: 17,
      avatar: generateAvatar('17058544')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
