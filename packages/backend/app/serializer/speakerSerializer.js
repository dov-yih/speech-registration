const {
  Serializer
} = require('jsonapi-serializer')

module.exports = new Serializer('speaker', {
  keyForAttribute: 'underscore_case',
  attributes: [
    's_no',
    'name',
    'avatar',
    'klass'
  ]
})
