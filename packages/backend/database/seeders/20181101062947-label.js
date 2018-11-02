'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Labels', [{
      value: 'js',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'php',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'java',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'nodejs',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'jsonapi',
      type: 'tag',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'react',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'reduex',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'vue',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'spring',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'api',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'java',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'ruby',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'docker',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    }, {
      value: 'github',
      type: 'tag',
      count: parseInt(Math.random() * 100),
    },{
      value: 'fronted',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'backend',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'UI',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'Desktop',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'Game',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'AL',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    }, {
      value: 'ML',
      type: 'direction',
      count: parseInt(Math.random() * 100)
    },  {
      value: 'Anroid',
      type: 'direction',
      count: parseInt(Math.random() * 100)
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
