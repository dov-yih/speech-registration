const {
  Error
} = require('jsonapi-serializer')

module.exports = (...arrt) => new Error(arrt)
