const {Serializer} = require('jsonapi-serializer')

module.exports = new Serializer('speech', {
  keyForAttribute: 'underscore_case',
  attributes: [
    'created_date',
    'tags',
    'speech_date',
    'id',
    'subject',
    'introduce',
    'url',
    'isPPT',
    'direction',
    'pre_knowledge',
    'speaker_name',
    's_no'
  ]
})
