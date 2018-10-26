'use strict'
const generateAvatar = require('../../app/utils/avatar.js')
const {db} = require('../../../keys.json')
const {encrypt} = require('../../utils/rsa.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    // name: DataTypes.STRING,
    // s_no: DataTypes.STRING,
    // password: DataTypes.STRING,
    // class: DataTypes.INTEGER,
    // avatar: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      name: '康康',
      s_no: '17058111',
      password: encrypt('12345678', db.public),
      class: 17,
      avatar: generateAvatar('16058111')
    }, {
      name: '韩梅梅',
      s_no: '16058222',
      password: encrypt('12345678', db.public),
      class: 16,
      avatar: generateAvatar('16058222')
    }, {
      name: '李雷',
      s_no: '16058333',
      password: encrypt('12345678', db.public),
      class: 16,
      avatar: generateAvatar('16058333')
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
