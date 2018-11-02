const JSONAPIErro = require('jsonapi-serializer').Error

module.exports = (...args) => new JSONAPIErro(args)
