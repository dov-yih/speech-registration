const {Serializer} = require('jsonapi-serializer')
module.exports = new Serializer('tag',{
  keyForAttribute: 'underscore_case',
  attributes: ['value','count']
})
