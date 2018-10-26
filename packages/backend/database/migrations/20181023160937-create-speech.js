'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Speeches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      introduce: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      isPPT: {
        type: Sequelize.BOOLEAN
      },
      direction: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      pre_knowledge: {
        type: Sequelize.STRING
      },
      speech_date: {
        type: Sequelize.DATE
      },
      speaker_name: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Speeches')
  }
}
