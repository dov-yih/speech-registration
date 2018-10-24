'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}'

  // add your config here
  config.middleware = []

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    hostname: '127.0.0.1',
    port: 3306,
    database: 'speech-registrantion',
    username: 'root',
    password: '1203my'
  }
  config.security = {
    domainWhiteList: ['http://localhost:7701', 'http://localhost:7702'],
  }
  config.cors = {
    // {string|Function}
    enable: true,
    package: 'egg-cors',
    origin: '*',
    // {string|Array}
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  return config
}
